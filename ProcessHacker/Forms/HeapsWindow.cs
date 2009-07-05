﻿/*
 * Process Hacker - 
 *   heaps window
 * 
 * Copyright (C) 2009 wj32
 * 
 * This file is part of Process Hacker.
 * 
 * Process Hacker is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Process Hacker is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Process Hacker.  If not, see <http://www.gnu.org/licenses/>.
 */

using System;
using System.Drawing;
using System.Windows.Forms;
using ProcessHacker.Common;
using ProcessHacker.Common.Ui;
using ProcessHacker.Native;
using ProcessHacker.Native.Api;
using ProcessHacker.Native.Debugging;
using ProcessHacker.Native.Objects;
using ProcessHacker.Native.Security;
using ProcessHacker.UI;

namespace ProcessHacker
{
    public partial class HeapsWindow : Form
    {
        private int _pid;

        public HeapsWindow(int pid, HeapInformation[] heaps)
        {
            InitializeComponent();
            this.AddEscapeToClose();

            listHeaps.SetDoubleBuffered(true);
            listHeaps.SetTheme("explorer");
            listHeaps.AddShortcuts();
            listHeaps.ContextMenu = menuHeap;
            GenericViewMenu.AddMenuItems(copyMenuItem.MenuItems, listHeaps, null);
            listHeaps.ListViewItemSorter = new SortedListViewComparer(listHeaps);

            _pid = pid;

            int allocatedTotal = 0, committedTotal = 0, entriesTotal = 0, tagsTotal = 0, pseudoTagsTotal = 0;

            foreach (HeapInformation heap in heaps)
            {
                listHeaps.Items.Add(new ListViewItem(
                    new string[]
                    {
                        "0x" + heap.Address.ToInt32().ToString("x8"),
                        heap.BytesAllocated.ToString("N0") + " B",
                        heap.BytesCommitted.ToString("N0") + " B",
                        heap.EntryCount.ToString("N0"),
                        heap.TagCount.ToString("N0"),
                        heap.PseudoTagCount.ToString("N0")
                    })).Tag = heap;
                // Sum everything up.
                allocatedTotal += heap.BytesAllocated;
                committedTotal += heap.BytesCommitted;
                entriesTotal += heap.EntryCount;
                tagsTotal += heap.TagCount;
                pseudoTagsTotal += heap.PseudoTagCount;
            }

            // Totals row.
            listHeaps.Items.Add(new ListViewItem(
                new string[]
                {
                    "Totals",
                    allocatedTotal.ToString("N0") + " B",
                    committedTotal.ToString("N0") + " B",
                    entriesTotal.ToString("N0"),
                    tagsTotal.ToString("N0"),
                    pseudoTagsTotal.ToString("N0")
                })).Tag = new HeapInformation(
                    IntPtr.Zero, allocatedTotal, committedTotal, 
                    tagsTotal, entriesTotal, pseudoTagsTotal
                    );
        }

        private void buttonClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void menuHeap_Popup(object sender, EventArgs e)
        {
            if (listHeaps.SelectedItems.Count == 0)
            {
                menuHeap.DisableAll();
            }
            else if (listHeaps.SelectedItems.Count == 1)
            {
                menuHeap.EnableAll();

                if (listHeaps.SelectedItems[0].Text == "Totals")
                    destroyMenuItem.Enabled = false;
            }
            else
            {
                menuHeap.DisableAll();
                copyMenuItem.Enabled = true;
            }
        }

        private void destroyMenuItem_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("Are you sure you want to destroy the selected heap?", "Process Hacker",
                MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation,
                MessageBoxDefaultButton.Button2) == DialogResult.No)
                return;

            try
            {
                using (var phandle = new ProcessHandle(_pid,
                    ProcessAccess.CreateThread | ProcessAccess.QueryInformation | ProcessAccess.VmOperation))
                {
                    phandle.CreateThread(
                        Win32.GetProcAddress(Win32.GetModuleHandle("ntdll.dll"), "RtlDestroyHeap"),
                        ((HeapInformation)listHeaps.SelectedItems[0].Tag).Address
                        ).Dispose();
                }

                listHeaps.SelectedItems[0].ForeColor = Color.Red;
                listHeaps.SelectedItems.Clear();
            }
            catch (WindowsException ex)
            {
                PhUtils.ShowMessage("Error destroying the heap", ex);
            }
        }

        private void checkSizesInBytes_CheckedChanged(object sender, EventArgs e)
        {
            foreach (ListViewItem item in listHeaps.Items)
            {
                HeapInformation heap = item.Tag as HeapInformation;

                if (checkSizesInBytes.Checked)
                {
                    item.SubItems[1].Text = heap.BytesAllocated.ToString("N0") + " B";
                    item.SubItems[2].Text = heap.BytesCommitted.ToString("N0") + " B";
                }
                else
                {
                    item.SubItems[1].Text = Utils.GetNiceSizeName(heap.BytesAllocated);
                    item.SubItems[2].Text = Utils.GetNiceSizeName(heap.BytesCommitted);
                }
            }
        }
    }
}
