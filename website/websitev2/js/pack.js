function rssfeedsetup(){var e=new google.feeds.Feed("http://sourceforge.net/p/processhacker/code/feed");e.setNumEntries(5),e.load(displayfeed)}function displayfeed(e){if(e.error)feedcontainer.innerHTML="Error fetching feeds!";else{for(var t="",n=e.feed.entries,a=0;a<n.length;a++)t+="<div>",t+='<a href=" '+n[a].link+' ">'+n[a].title.replace("/p/processhacker/code/","http://sourceforge.net/p/processhacker/code/")+"</a>",t+='<span class="forumdate"> by <span class="author">'+n[a].author+"</span></span>",t+='<div class="forumdate">'+moment(n[a].publishedDate).fromNow()+" - "+new Date(n[a].publishedDate).toLocaleString()+"</div>",t+="</div>";feedcontainer.innerHTML=t}}(function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function a(e){pt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function s(e,t){var n=!0;return l(function(){return n&&(a(e),n=!1),t.apply(this,arguments)},t)}function r(e,t){_n[e]||(a(t),_n[e]=!0)}function i(e,t){return function(n){return _(e.call(this,n),t)}}function o(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t)}}function u(){}function c(e,t){t!==!1&&G(e),f(this,e),this._d=new Date(+e._d)}function d(e){var t=v(e),n=t.year||0,a=t.quarter||0,s=t.month||0,r=t.week||0,i=t.day||0,o=t.hour||0,u=t.minute||0,c=t.second||0,d=t.millisecond||0;this._milliseconds=+d+1e3*c+6e4*u+36e5*o,this._days=+i+7*r,this._months=+s+3*a+12*n,this._data={},this._locale=pt.localeData(),this._bubble()}function l(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return t.hasOwnProperty("toString")&&(e.toString=t.toString),t.hasOwnProperty("valueOf")&&(e.valueOf=t.valueOf),e}function f(e,t){var n,a,s;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),"undefined"!=typeof t._pf&&(e._pf=t._pf),"undefined"!=typeof t._locale&&(e._locale=t._locale),Ft.length>0)for(n in Ft)a=Ft[n],s=t[a],"undefined"!=typeof s&&(e[a]=s);return e}function h(e){return 0>e?Math.ceil(e):Math.floor(e)}function _(e,t,n){for(var a=""+Math.abs(e),s=e>=0;a.length<t;)a="0"+a;return(s?n?"+":"":"-")+a}function m(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function y(e,t){var n;return t=L(t,e),e.isBefore(t)?n=m(e,t):(n=m(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function p(e,t){return function(n,a){var s,i;return null===a||isNaN(+a)||(r(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),i=n,n=a,a=i),n="string"==typeof n?+n:n,s=pt.duration(n,a),g(this,s,e),this}}function g(e,t,n,a){var s=t._milliseconds,r=t._days,i=t._months;a=null==a?!0:a,s&&e._d.setTime(+e._d+s*n),r&&lt(e,"Date",dt(e,"Date")+r*n),i&&ct(e,dt(e,"Month")+i*n),a&&pt.updateOffset(e,r||i)}function D(e){return"[object Array]"===Object.prototype.toString.call(e)}function M(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function w(e,t,n){var a,s=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0;for(a=0;s>a;a++)(n&&e[a]!==t[a]||!n&&b(e[a])!==b(t[a]))&&i++;return i+r}function Y(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=on[e]||un[t]||t}return e}function v(e){var t,n,a={};for(n in e)e.hasOwnProperty(n)&&(t=Y(n),t&&(a[t]=e[n]));return a}function k(t){var n,a;if(0===t.indexOf("week"))n=7,a="day";else{if(0!==t.indexOf("month"))return;n=12,a="month"}pt[t]=function(s,r){var i,o,u=pt._locale[t],c=[];if("number"==typeof s&&(r=s,s=e),o=function(e){var t=pt().utc().set(a,e);return u.call(pt._locale,t,s||"")},null!=r)return o(r);for(i=0;n>i;i++)c.push(o(i));return c}}function b(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function S(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function T(e,t,n){return rt(pt([e,11,31+t-n]),t,n).week}function O(e){return W(e)?366:365}function W(e){return e%4===0&&e%100!==0||e%400===0}function G(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[kt]<0||e._a[kt]>11?kt:e._a[bt]<1||e._a[bt]>S(e._a[vt],e._a[kt])?bt:e._a[St]<0||e._a[St]>23?St:e._a[Tt]<0||e._a[Tt]>59?Tt:e._a[Ot]<0||e._a[Ot]>59?Ot:e._a[Wt]<0||e._a[Wt]>999?Wt:-1,e._pf._overflowDayOfYear&&(vt>t||t>bt)&&(t=bt),e._pf.overflow=t)}function F(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function U(e){return e?e.toLowerCase().replace("_","-"):e}function C(e){for(var t,n,a,s,r=0;r<e.length;){for(s=U(e[r]).split("-"),t=s.length,n=U(e[r+1]),n=n?n.split("-"):null;t>0;){if(a=z(s.slice(0,t).join("-")))return a;if(n&&n.length>=t&&w(s,n,!0)>=t-1)break;t--}r++}return null}function z(e){var t=null;if(!Gt[e]&&Ut)try{t=pt.locale(),require("./locale/"+e),pt.locale(t)}catch(n){}return Gt[e]}function L(e,t){return t._isUTC?pt(e).zone(t._offset||0):pt(e).local()}function P(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function I(e){var t,n,a=e.match(Pt);for(t=0,n=a.length;n>t;t++)a[t]=hn[a[t]]?hn[a[t]]:P(a[t]);return function(s){var r="";for(t=0;n>t;t++)r+=a[t]instanceof Function?a[t].call(s,e):a[t];return r}}function H(e,t){return e.isValid()?(t=A(t,e.localeData()),cn[t]||(cn[t]=I(t)),cn[t](e)):e.localeData().invalidDate()}function A(e,t){function n(e){return t.longDateFormat(e)||e}var a=5;for(It.lastIndex=0;a>=0&&It.test(e);)e=e.replace(It,n),It.lastIndex=0,a-=1;return e}function x(e,t){var n,a=t._strict;switch(e){case"Q":return Jt;case"DDDD":return Bt;case"YYYY":case"GGGG":case"gggg":return a?Xt:xt;case"Y":case"G":case"g":return Kt;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return a?Rt:Zt;case"S":if(a)return Jt;case"SS":if(a)return Qt;case"SSS":if(a)return Bt;case"DDD":return At;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Nt;case"a":case"A":return t._locale._meridiemParse;case"X":return qt;case"Z":case"ZZ":return jt;case"T":return Vt;case"SSSS":return Et;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return a?Qt:Ht;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ht;case"Do":return $t;default:return n=new RegExp(Q(J(e.replace("\\","")),"i"))}}function Z(e){e=e||"";var t=e.match(jt)||[],n=t[t.length-1]||[],a=(n+"").match(sn)||["-",0,0],s=+(60*a[1])+b(a[2]);return"+"===a[0]?-s:s}function E(e,t,n){var a,s=n._a;switch(e){case"Q":null!=t&&(s[kt]=3*(b(t)-1));break;case"M":case"MM":null!=t&&(s[kt]=b(t)-1);break;case"MMM":case"MMMM":a=n._locale.monthsParse(t),null!=a?s[kt]=a:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(s[bt]=b(t));break;case"Do":null!=t&&(s[bt]=b(parseInt(t,10)));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=b(t));break;case"YY":s[vt]=pt.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":s[vt]=b(t);break;case"a":case"A":n._isPm=n._locale.isPM(t);break;case"H":case"HH":case"h":case"hh":s[St]=b(t);break;case"m":case"mm":s[Tt]=b(t);break;case"s":case"ss":s[Ot]=b(t);break;case"S":case"SS":case"SSS":case"SSSS":s[Wt]=b(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=Z(t);break;case"dd":case"ddd":case"dddd":a=n._locale.weekdaysParse(t),null!=a?(n._w=n._w||{},n._w.d=a):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=b(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=pt.parseTwoDigitYear(t)}}function N(e){var n,a,s,r,i,o,u;n=e._w,null!=n.GG||null!=n.W||null!=n.E?(i=1,o=4,a=t(n.GG,e._a[vt],rt(pt(),1,4).year),s=t(n.W,1),r=t(n.E,1)):(i=e._locale._week.dow,o=e._locale._week.doy,a=t(n.gg,e._a[vt],rt(pt(),i,o).year),s=t(n.w,1),null!=n.d?(r=n.d,i>r&&++s):r=null!=n.e?n.e+i:i),u=it(a,s,r,o,i),e._a[vt]=u.year,e._dayOfYear=u.dayOfYear}function j(e){var n,a,s,r,i=[];if(!e._d){for(s=q(e),e._w&&null==e._a[bt]&&null==e._a[kt]&&N(e),e._dayOfYear&&(r=t(e._a[vt],s[vt]),e._dayOfYear>O(r)&&(e._pf._overflowDayOfYear=!0),a=tt(r,0,e._dayOfYear),e._a[kt]=a.getUTCMonth(),e._a[bt]=a.getUTCDate()),n=0;3>n&&null==e._a[n];++n)e._a[n]=i[n]=s[n];for(;7>n;n++)e._a[n]=i[n]=null==e._a[n]?2===n?1:0:e._a[n];e._d=(e._useUTC?tt:et).apply(null,i),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function V(e){var t;e._d||(t=v(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],j(e))}function q(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function $(e){if(e._f===pt.ISO_8601)return void X(e);e._a=[],e._pf.empty=!0;var t,n,a,s,r,i=""+e._i,o=i.length,u=0;for(a=A(e._f,e._locale).match(Pt)||[],t=0;t<a.length;t++)s=a[t],n=(i.match(x(s,e))||[])[0],n&&(r=i.substr(0,i.indexOf(n)),r.length>0&&e._pf.unusedInput.push(r),i=i.slice(i.indexOf(n)+n.length),u+=n.length),hn[s]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(s),E(s,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(s);e._pf.charsLeftOver=o-u,i.length>0&&e._pf.unusedInput.push(i),e._isPm&&e._a[St]<12&&(e._a[St]+=12),e._isPm===!1&&12===e._a[St]&&(e._a[St]=0),j(e),G(e)}function J(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,a,s){return t||n||a||s})}function Q(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function B(e){var t,a,s,r,i;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(r=0;r<e._f.length;r++)i=0,t=f({},e),t._pf=n(),t._f=e._f[r],$(t),F(t)&&(i+=t._pf.charsLeftOver,i+=10*t._pf.unusedTokens.length,t._pf.score=i,(null==s||s>i)&&(s=i,a=t));l(e,a||t)}function X(e){var t,n,a=e._i,s=en.exec(a);if(s){for(e._pf.iso=!0,t=0,n=nn.length;n>t;t++)if(nn[t][1].exec(a)){e._f=nn[t][0]+(s[6]||" ");break}for(t=0,n=an.length;n>t;t++)if(an[t][1].exec(a)){e._f+=an[t][0];break}a.match(jt)&&(e._f+="Z"),$(e)}else e._isValid=!1}function R(e){X(e),e._isValid===!1&&(delete e._isValid,pt.createFromInputFallback(e))}function K(t){var n,a=t._i;a===e?t._d=new Date:M(a)?t._d=new Date(+a):null!==(n=Ct.exec(a))?t._d=new Date(+n[1]):"string"==typeof a?R(t):D(a)?(t._a=a.slice(0),j(t)):"object"==typeof a?V(t):"number"==typeof a?t._d=new Date(a):pt.createFromInputFallback(t)}function et(e,t,n,a,s,r,i){var o=new Date(e,t,n,a,s,r,i);return 1970>e&&o.setFullYear(e),o}function tt(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function nt(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function at(e,t,n,a,s){return s.relativeTime(t||1,!!n,e,a)}function st(e,t,n){var a=pt.duration(e).abs(),s=Yt(a.as("s")),r=Yt(a.as("m")),i=Yt(a.as("h")),o=Yt(a.as("d")),u=Yt(a.as("M")),c=Yt(a.as("y")),d=s<dn.s&&["s",s]||1===r&&["m"]||r<dn.m&&["mm",r]||1===i&&["h"]||i<dn.h&&["hh",i]||1===o&&["d"]||o<dn.d&&["dd",o]||1===u&&["M"]||u<dn.M&&["MM",u]||1===c&&["y"]||["yy",c];return d[2]=t,d[3]=+e>0,d[4]=n,at.apply({},d)}function rt(e,t,n){var a,s=n-t,r=n-e.day();return r>s&&(r-=7),s-7>r&&(r+=7),a=pt(e).add(r,"d"),{week:Math.ceil(a.dayOfYear()/7),year:a.year()}}function it(e,t,n,a,s){var r,i,o=tt(e,0,1).getUTCDay();return o=0===o?7:o,n=null!=n?n:s,r=s-o+(o>a?7:0)-(s>o?7:0),i=7*(t-1)+(n-s)+r+1,{year:i>0?e:e-1,dayOfYear:i>0?i:O(e-1)+i}}function ot(t){var n=t._i,a=t._f;return t._locale=t._locale||pt.localeData(t._l),null===n||a===e&&""===n?pt.invalid({nullInput:!0}):("string"==typeof n&&(t._i=n=t._locale.preparse(n)),pt.isMoment(n)?new c(n,!0):(a?D(a)?B(t):$(t):K(t),new c(t)))}function ut(e,t){var n,a;if(1===t.length&&D(t[0])&&(t=t[0]),!t.length)return pt();for(n=t[0],a=1;a<t.length;++a)t[a][e](n)&&(n=t[a]);return n}function ct(e,t){var n;return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),S(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function dt(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function lt(e,t,n){return"Month"===t?ct(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n)}function ft(e,t){return function(n){return null!=n?(lt(this,e,n),pt.updateOffset(this,t),this):dt(this,e)}}function ht(e){return 400*e/146097}function _t(e){return 146097*e/400}function mt(e){pt.duration.fn[e]=function(){return this._data[e]}}function yt(e){"undefined"==typeof ender&&(gt=wt.moment,wt.moment=e?s("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",pt):pt)}for(var pt,gt,Dt,Mt="2.8.1",wt="undefined"!=typeof global?global:this,Yt=Math.round,vt=0,kt=1,bt=2,St=3,Tt=4,Ot=5,Wt=6,Gt={},Ft=[],Ut="undefined"!=typeof module&&module.exports,Ct=/^\/?Date\((\-?\d+)/i,zt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Lt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,It=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ht=/\d\d?/,At=/\d{1,3}/,xt=/\d{1,4}/,Zt=/[+\-]?\d{1,6}/,Et=/\d+/,Nt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,jt=/Z|[\+\-]\d\d:?\d\d/gi,Vt=/T/i,qt=/[\+\-]?\d+(\.\d{1,3})?/,$t=/\d{1,2}/,Jt=/\d/,Qt=/\d\d/,Bt=/\d{3}/,Xt=/\d{4}/,Rt=/[+-]?\d{6}/,Kt=/[+-]?\d+/,en=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tn="YYYY-MM-DDTHH:mm:ssZ",nn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],an=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sn=/([\+\-]|\d\d)/gi,rn=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),on={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},un={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},cn={},dn={s:45,m:45,h:22,d:26,M:11},ln="DDD w W M D d".split(" "),fn="M D H h m s w W".split(" "),hn={M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e)},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return _(this.year()%100,2)},YYYY:function(){return _(this.year(),4)},YYYYY:function(){return _(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+_(Math.abs(e),6)},gg:function(){return _(this.weekYear()%100,2)},gggg:function(){return _(this.weekYear(),4)},ggggg:function(){return _(this.weekYear(),5)},GG:function(){return _(this.isoWeekYear()%100,2)},GGGG:function(){return _(this.isoWeekYear(),4)},GGGGG:function(){return _(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return b(this.milliseconds()/100)},SS:function(){return _(b(this.milliseconds()/10),2)},SSS:function(){return _(this.milliseconds(),3)},SSSS:function(){return _(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+_(b(e/60),2)+":"+_(b(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+_(b(e/60),2)+_(b(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},_n={},mn=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ln.length;)Dt=ln.pop(),hn[Dt+"o"]=o(hn[Dt],Dt);for(;fn.length;)Dt=fn.pop(),hn[Dt+Dt]=i(hn[Dt],2);hn.DDDD=i(hn.DDD,3),l(u.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,a;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=pt.utc([2e3,t]),a="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(a.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,a;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=pt([2e3,1]).day(t),a="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(a.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,a){var s=this._relativeTime[n];return"function"==typeof s?s(e,t,n,a):s.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return rt(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),pt=function(t,a,s,r){var i;return"boolean"==typeof s&&(r=s,s=e),i={},i._isAMomentObject=!0,i._i=t,i._f=a,i._l=s,i._strict=r,i._isUTC=!1,i._pf=n(),ot(i)},pt.suppressDeprecationWarnings=!1,pt.createFromInputFallback=s("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)}),pt.min=function(){var e=[].slice.call(arguments,0);return ut("isBefore",e)},pt.max=function(){var e=[].slice.call(arguments,0);return ut("isAfter",e)},pt.utc=function(t,a,s,r){var i;return"boolean"==typeof s&&(r=s,s=e),i={},i._isAMomentObject=!0,i._useUTC=!0,i._isUTC=!0,i._l=s,i._i=t,i._f=a,i._strict=r,i._pf=n(),ot(i).utc()},pt.unix=function(e){return pt(1e3*e)},pt.duration=function(e,t){var n,a,s,r,i=e,o=null;return pt.isDuration(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(i={},t?i[t]=e:i.milliseconds=e):(o=zt.exec(e))?(n="-"===o[1]?-1:1,i={y:0,d:b(o[bt])*n,h:b(o[St])*n,m:b(o[Tt])*n,s:b(o[Ot])*n,ms:b(o[Wt])*n}):(o=Lt.exec(e))?(n="-"===o[1]?-1:1,s=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n},i={y:s(o[2]),M:s(o[3]),d:s(o[4]),h:s(o[5]),m:s(o[6]),s:s(o[7]),w:s(o[8])}):"object"==typeof i&&("from"in i||"to"in i)&&(r=y(pt(i.from),pt(i.to)),i={},i.ms=r.milliseconds,i.M=r.months),a=new d(i),pt.isDuration(e)&&e.hasOwnProperty("_locale")&&(a._locale=e._locale),a},pt.version=Mt,pt.defaultFormat=tn,pt.ISO_8601=function(){},pt.momentProperties=Ft,pt.updateOffset=function(){},pt.relativeTimeThreshold=function(t,n){return dn[t]===e?!1:n===e?dn[t]:(dn[t]=n,!0)},pt.lang=s("moment.lang is deprecated. Use moment.locale instead.",function(e,t){return pt.locale(e,t)}),pt.locale=function(e,t){var n;return e&&(n="undefined"!=typeof t?pt.defineLocale(e,t):pt.localeData(e),n&&(pt.duration._locale=pt._locale=n)),pt._locale._abbr},pt.defineLocale=function(e,t){return null!==t?(t.abbr=e,Gt[e]||(Gt[e]=new u),Gt[e].set(t),pt.locale(e),Gt[e]):(delete Gt[e],null)},pt.langData=s("moment.langData is deprecated. Use moment.localeData instead.",function(e){return pt.localeData(e)}),pt.localeData=function(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return pt._locale;if(!D(e)){if(t=z(e))return t;e=[e]}return C(e)},pt.isMoment=function(e){return e instanceof c||null!=e&&e.hasOwnProperty("_isAMomentObject")},pt.isDuration=function(e){return e instanceof d};for(Dt=mn.length-1;Dt>=0;--Dt)k(mn[Dt]);pt.normalizeUnits=function(e){return Y(e)},pt.invalid=function(e){var t=pt.utc(0/0);return null!=e?l(t._pf,e):t._pf.userInvalidated=!0,t},pt.parseZone=function(){return pt.apply(null,arguments).parseZone()},pt.parseTwoDigitYear=function(e){return b(e)+(b(e)>68?1900:2e3)},l(pt.fn=c.prototype,{clone:function(){return pt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=pt(this).utc();return 0<e.year()&&e.year()<=9999?H(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return F(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?pt.utc(this._a):pt(this._a)).toArray())>0:!1},parsingFlags:function(){return l({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(e){return this.zone(0,e)},local:function(e){return this._isUTC&&(this.zone(0,e),this._isUTC=!1,e&&this.add(this._d.getTimezoneOffset(),"m")),this},format:function(e){var t=H(this,e||pt.defaultFormat);return this.localeData().postformat(t)},add:p(1,"add"),subtract:p(-1,"subtract"),diff:function(e,t,n){var a,s,r=L(e,this),i=6e4*(this.zone()-r.zone());return t=Y(t),"year"===t||"month"===t?(a=432e5*(this.daysInMonth()+r.daysInMonth()),s=12*(this.year()-r.year())+(this.month()-r.month()),s+=(this-pt(this).startOf("month")-(r-pt(r).startOf("month")))/a,s-=6e4*(this.zone()-pt(this).startOf("month").zone()-(r.zone()-pt(r).startOf("month").zone()))/a,"year"===t&&(s/=12)):(a=this-r,s="second"===t?a/1e3:"minute"===t?a/6e4:"hour"===t?a/36e5:"day"===t?(a-i)/864e5:"week"===t?(a-i)/6048e5:a),n?s:h(s)},from:function(e,t){return pt.duration({to:this,from:e}).locale(this.locale()).humanize(!t)},fromNow:function(e){return this.from(pt(),e)},calendar:function(e){var t=e||pt(),n=L(t,this).startOf("day"),a=this.diff(n,"days",!0),s=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.localeData().calendar(s,this))},isLeapYear:function(){return W(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=nt(e,this.localeData()),this.add(e-t,"d")):t},month:ft("Month",!0),startOf:function(e){switch(e=Y(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=Y(e),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+pt(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+pt(e).startOf(t)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+L(e,this).startOf(t)},min:s("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=pt.apply(null,arguments),this>e?this:e}),max:s("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=pt.apply(null,arguments),e>this?this:e}),zone:function(e,t){var n,a=this._offset||0;return null==e?this._isUTC?a:this._d.getTimezoneOffset():("string"==typeof e&&(e=Z(e)),Math.abs(e)<16&&(e=60*e),!this._isUTC&&t&&(n=this._d.getTimezoneOffset()),this._offset=e,this._isUTC=!0,null!=n&&this.subtract(n,"m"),a!==e&&(!t||this._changeInProgress?g(this,pt.duration(a-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,pt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?pt(e).zone():0,(this.zone()-e)%60===0},daysInMonth:function(){return S(this.year(),this.month())},dayOfYear:function(e){var t=Yt((pt(this).startOf("day")-pt(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=rt(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=rt(this,1,4).year;return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=rt(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return T(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;return T(this.year(),e.dow,e.doy)},get:function(e){return e=Y(e),this[e]()},set:function(e,t){return e=Y(e),"function"==typeof this[e]&&this[e](t),this},locale:function(t){return t===e?this._locale._abbr:(this._locale=pt.localeData(t),this)},lang:s("moment().lang() is deprecated. Use moment().localeData() instead.",function(t){return t===e?this.localeData():(this._locale=pt.localeData(t),this)}),localeData:function(){return this._locale}}),pt.fn.millisecond=pt.fn.milliseconds=ft("Milliseconds",!1),pt.fn.second=pt.fn.seconds=ft("Seconds",!1),pt.fn.minute=pt.fn.minutes=ft("Minutes",!1),pt.fn.hour=pt.fn.hours=ft("Hours",!0),pt.fn.date=ft("Date",!0),pt.fn.dates=s("dates accessor is deprecated. Use date instead.",ft("Date",!0)),pt.fn.year=ft("FullYear",!0),pt.fn.years=s("years accessor is deprecated. Use year instead.",ft("FullYear",!0)),pt.fn.days=pt.fn.day,pt.fn.months=pt.fn.month,pt.fn.weeks=pt.fn.week,pt.fn.isoWeeks=pt.fn.isoWeek,pt.fn.quarters=pt.fn.quarter,pt.fn.toJSON=pt.fn.toISOString,l(pt.duration.fn=d.prototype,{_bubble:function(){var e,t,n,a=this._milliseconds,s=this._days,r=this._months,i=this._data,o=0;i.milliseconds=a%1e3,e=h(a/1e3),i.seconds=e%60,t=h(e/60),i.minutes=t%60,n=h(t/60),i.hours=n%24,s+=h(n/24),o=h(ht(s)),s-=h(_t(o)),r+=h(s/30),s%=30,o+=h(r/12),r%=12,i.days=s,i.months=r,i.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*b(this._months/12)},humanize:function(e){var t=st(this,!e,this.localeData());return e&&(t=this.localeData().pastFuture(+this,t)),this.localeData().postformat(t)},add:function(e,t){var n=pt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=pt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=Y(e),this[e.toLowerCase()+"s"]()},as:function(e){var t,n;if(e=Y(e),t=this._days+this._milliseconds/864e5,"month"===e||"year"===e)return n=this._months+12*ht(t),"month"===e?n:n/12;switch(t+=_t(this._months/12),e){case"week":return t/7;case"day":return t;case"hour":return 24*t;case"minute":return 24*t*60;case"second":return 24*t*60*60;case"millisecond":return 24*t*60*60*1e3;default:throw new Error("Unknown unit "+e)}},lang:pt.fn.lang,locale:pt.fn.locale,toIsoString:s("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),a=Math.abs(this.hours()),s=Math.abs(this.minutes()),r=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(a||s||r?"T":"")+(a?a+"H":"")+(s?s+"M":"")+(r?r+"S":""):"P0D"},localeData:function(){return this._locale}});for(Dt in rn)rn.hasOwnProperty(Dt)&&mt(Dt.toLowerCase());pt.duration.fn.asMilliseconds=function(){return this.as("ms")},pt.duration.fn.asSeconds=function(){return this.as("s")},pt.duration.fn.asMinutes=function(){return this.as("m")},pt.duration.fn.asHours=function(){return this.as("h")},pt.duration.fn.asDays=function(){return this.as("d")},pt.duration.fn.asWeeks=function(){return this.as("weeks")},pt.duration.fn.asMonths=function(){return this.as("M")},pt.duration.fn.asYears=function(){return this.as("y")},pt.locale("en",{ordinal:function(e){var t=e%10,n=1===b(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";
return e+n}}),Ut?module.exports=pt:"function"==typeof define&&define.amd?(define("moment",function(e,t,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(wt.moment=gt),pt}),yt(!0)):yt()}).call(this);var feedcontainer=document.getElementById("feeddiv");feedcontainer.innerHTML="<div>Loading commit history...</div>",window.onload=function(){rssfeedsetup()};