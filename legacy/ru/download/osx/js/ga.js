var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var _gat=new Object({c:"length",p:"cookie",b:undefined,ab:function(e,a){this.wb=e;this.Hb=a},n:"__utma=",Q:"__utmb=",ha:"__utmc=",Ra:"__utmk=",ia:"__utmv=",ja:"__utmx=",Qa:"GASO=",R:"__utmz=",fc:"https://web.archive.org/web/20080213202456/http://www.google-analytics.com/__utm.gif",gc:"https://web.archive.org/web/20080213202456/https://ssl.google-analytics.com/__utm.gif",Ua:"utmcid=",Wa:"utmcsr=",Ya:"utmgclid=",Sa:"utmccn=",Va:"utmcmd=",Xa:"utmctr=",Ta:"utmcct=",Db:false,u:function(e){var a=1,c=0,h,k;if(!_gat.o(e)){a=0;for(h=e[_gat.c]-1;h>=0;h--){k=e.charCodeAt(h);a=(a<<6&268435455)+
k+(k<<14);c=a&266338304;a=c!=0?a^c>>21:a}}return a},z:function(e,a,c){var h=_gat,k="-",j,m,r=h.o;if(!r(e)&&!r(a)&&!r(c)){j=h.w(e,a);if(j>-1){m=e.indexOf(c,j);if(m<0){m=e[h.c]}k=h.B(e,j+h.w(a,"=")+1,m)}}return k},za:function(e){var a=false,c=0,h,k;if(!_gat.o(e)){a=true;for(h=0;h<e[_gat.c];h++){k=e.charAt(h);c+="."==k?1:0;a=a&&c<=1&&(0==h&&"-"==k||_gat.K(".0123456789",k))}}return a},d:function(e,a){var c=encodeURIComponent;return c instanceof Function?(a?encodeURI(e):c(e)):escape(e)},V:function(e,a){var c=
decodeURIComponent,h;if(c instanceof Function){try{h=a?decodeURI(e):c(e)}catch(k){h=unescape(e)}}else{h=unescape(e)}return h},Ab:function(e){return e&&e.hash?_gat.B(e.href,_gat.w(e.href,"#")):""},o:function(e){return _gat.b==e||"-"==e||""==e},Fb:function(e){return e[_gat.c]>0&&_gat.K(" \n\r\t",e)},K:function(e,a){return _gat.w(e,a)>-1},f:function(e,a){e[e[_gat.c]]=a},La:function(e){return e.toLowerCase()},J:function(e,a){return e.split(a)},w:function(e,a){return e.indexOf(a)},B:function(e,a,c){c=
_gat.b==c?e[_gat.c]:c;return e.substring(a,c)},kc:function(){var e=_gat.b,a=window;if(a&&a.gaGlobal&&a.gaGlobal.hid){e=a.gaGlobal.hid}else{e=Math.round(Math.random()*2147483647);a.gaGlobal=a.gaGlobal?a.gaGlobal:{};a.gaGlobal.hid=e}return e},ra:function(){return Math.round(Math.random()*2147483647)}});_gat.bc=function(){var e=this,a=_gat.ab;function c(h,k){return new a(h,k)}e.bb="utm_campaign";e.cb="utm_content";e.db="utm_id";e.eb="utm_medium";e.fb="utm_nooverride";e.gb="utm_source";e.hb="utm_term";e.ib="gclid";e.ka=0;e.D=0;e.ub="15768000";e.Pb="1800";e.Z=[];e.aa=[];e.$=[c("google","q"),c("yahoo","p"),c("msn","q"),c("aol","query"),c("aol","encquery"),c("lycos","query"),c("ask","q"),c("altavista","q"),c("netscape","query"),c("cnn","query"),c("looksmart","qt"),c("about","terms"),c("mamma","query"),
c("alltheweb","q"),c("gigablast","q"),c("voila","rdata"),c("virgilio","qs"),c("live","q"),c("baidu","wd"),c("alice","qs"),c("yandex","text"),c("najdi","q"),c("aol","q"),c("club-internet","q"),c("mama","query"),c("seznam","q"),c("search","q"),c("wp","szukaj"),c("onet","qt"),c("netsprint","q"),c("google.interia","q"),c("szukacz","q"),c("yam","k"),c("pchome","q")];e.l="/";e.Nb=100;e.ya="/__utm.gif";e.oa=1;e.pa=1;e.C="|";e.na=1;e.la=1;e.mb=1;e.e="auto";e.A=1};_gat.S=function(e,a){var c,h,k,j,m,r,q,g=this,p=_gat,u=p.o,y=p.c,i,z=a;g.a=e;function n(d){var f=d instanceof Array?d.join("."):"";return u(f)?"-":f}function s(d,f){var o=[],t;if(!u(d)){o=p.J(d,".");if(f){for(t=0;t<o[y];t++){if(!p.za(o[t])){o[t]="-"}}}}return o}function v(){return w(63072000000)}function w(d){var f=new Date,o=new Date(f.getTime()+d);return"expires="+o.toGMTString()+"; "}function l(d,f){g.a[p.p]=d+"; path="+z.l+"; "+f+g.qc()}function b(d,f,o){var t=g.P,x;for(x=0;x<t[y];x++){t[x][2](p.z(d,
t[x][0]+f,o))}}g.Eb=function(){return p.b==i||i==g.u()};g.wa=function(){return m?m:"-"};g.Rb=function(d){m=d};g.Ia=function(d){i=p.za(d)?d*1:"-"};g.va=function(){return n(r)};g.Ja=function(d){r=s(d)};g.uc=function(){return i?i:"-"};g.qc=function(){return u(z.e)?"":"domain="+z.e+";"};g.ta=function(){return n(c)};g.Qb=function(d){c=s(d,1)};g.G=function(){return n(h)};g.Ga=function(d){h=s(d,1)};g.ua=function(){return n(k)};g.Ha=function(d){k=s(d,1)};g.xa=function(){return n(j)};g.Sb=function(d){j=s(d);
for(var f=0;f<j[y];f++){if(f<4&&!p.za(j[f])){j[f]="-"}}};g.rc=function(){return q};g.Gc=function(d){q=d};g.hc=function(){c=[];h=[];k=[];j=[];m=p.b;r=[];i=p.b};g.u=function(){var d="",f;for(f=0;f<g.P[y];f++){d+=g.P[f][1]()}return p.u(d)};g.Ca=function(d){var f=g.a[p.p],o=false;if(f){b(f,d,";");g.Ia(g.u());o=true}return o};g.Cc=function(d){b(d,"","&");g.Ia(p.z(d,p.Ra,"&"))};g.Hc=function(){var d=g.P,f=[],o;for(o=0;o<d[y];o++){p.f(f,d[o][0]+d[o][1]())}p.f(f,p.Ra+g.u());return f.join("&")};g.Kc=function(d,
f){var o=g.P,t=z.l,x;g.Ca(d);z.l=f;for(x=0;x<o[y];x++){if(!u(o[x][1]())){o[x][3]()}}z.l=t};g.Zb=function(){l(p.n+g.ta(),v())};g.Ma=function(){l(p.Q+g.G(),w(z.Pb*1000))};g.Na=function(){l(p.ha+g.ua(),"")};g.Pa=function(){l(p.R+g.xa(),w(z.ub*1000))};g.$b=function(){l(p.ja+g.wa(),v())};g.Oa=function(){l(p.ia+g.va(),v())};g.Lc=function(){l(p.Qa+g.rc(),"")};g.P=[[p.n,g.ta,g.Qb,g.Zb],[p.Q,g.G,g.Ga,g.Ma],[p.ha,g.ua,g.Ha,g.Na],[p.ja,g.wa,g.Rb,g.$b],[p.R,g.xa,g.Sb,g.Pa],[p.ia,g.va,g.Ja,g.Oa]]};_gat.dc=function(e){var a,c,h=this,k=_gat,j=e,m,r=function(){},q=function(){r()};h.ba=function(g,p,u,y,i){var z,n=j.A;if(!m){m=new k.S(u,j)}m.Ca(y);z=k.J(m.G(),".");if(z[1]<=100||i){g="?utmwv=3&utmn="+k.ra()+g;if(0==n||2==n){a=new Image(1,1);a.src=j.ya+g;a.onload=q}if(1==n||2==n){c=new Image(1,1);c.src=("https:"==u.location.protocol?k.gc:k.fc)+g+"&utmac="+p+"&utmcc="+h.lc(u,y);c.onload=q}}z[1]=z[1]*1+1;m.Ga(z.join("."));m.Ha(z.join("."));m.Ma();m.Na()};h.lc=function(g,p){var u=[],y=[k.n,k.R,k.ia,
k.ja],i,z=g[k.p],n;for(i=0;i<y[k.c];i++){n=k.z(z,y[i]+p,";");if(!k.o(n)){k.f(u,y[i]+n+";")}}return k.d(u.join("+"))};h.Pc=function(){return a};h.Qc=function(){return c}};_gat.h=function(){this.ga=[]};_gat.h.$a=function(e,a,c,h,k,j){var m=this;m.Yb=e;m.Ka=a;m.H=c;m.pb=h;m.Jb=k;m.Kb=j};_gat.h.$a.prototype.M=function(){var e=this,a=_gat.d;return"&"+["utmt=item","utmtid="+a(e.Yb),"utmipc="+a(e.Ka),"utmipn="+a(e.H),"utmiva="+a(e.pb),"utmipr="+a(e.Jb),"utmiqt="+a(e.Kb)].join("&")};_gat.h.T=function(e,a,c,h,k,j,m,r){var q=this;q.v=e;q.lb=a;q.Xb=c;q.Wb=h;q.Tb=k;q.rb=j;q.Vb=m;q.vb=r;q.X=[]};_gat.h.T.prototype.jb=function(e,a,c,h,k){var j=this,m=j.Bb(e),r=j.v,q=_gat;if(q.b==
m){q.f(j.X,new q.h.$a(r,e,a,c,h,k))}else{m.Yb=r;m.Ka=e;m.H=a;m.pb=c;m.Jb=h;m.Kb=k}};_gat.h.T.prototype.Bb=function(e){var a,c=this.X,h;for(h=0;h<c[_gat.c];h++){a=e==c[h].Ka?c[h]:a}return a};_gat.h.T.prototype.M=function(){var e=this,a=_gat.d;return"&"+["utmt=tran","utmtid="+a(e.v),"utmtst="+a(e.lb),"utmtto="+a(e.Xb),"utmttx="+a(e.Wb),"utmtsp="+a(e.Tb),"utmtci="+a(e.rb),"utmtrg="+a(e.Vb),"utmtco="+a(e.vb)].join("&")};_gat.h.prototype.kb=function(e,a,c,h,k,j,m,r){var q=this,g=_gat,p=q.sa(e);if(g.b==
p){p=new g.h.T(e,a,c,h,k,j,m,r);g.f(q.ga,p)}else{p.lb=a;p.Xb=c;p.Wb=h;p.Tb=k;p.rb=j;p.Vb=m;p.vb=r}return p};_gat.h.prototype.sa=function(e){var a,c=this.ga,h;for(h=0;h<c[_gat.c];h++){a=e==c[h].v?c[h]:a}return a};_gat.ac=function(e){var a=this,c="-",h=_gat,k=e;a.Ea=screen;a.nb=!self.screen&&self.java?java.awt.Toolkit.getDefaultToolkit():h.b;a.a=document;a.r=window;a.i=navigator;a.Fa=c;a.Ob=c;a.qb=c;a.Ib=c;a.Gb=1;a.xb=c;function j(){var m,r,q,g;if(a.i&&a.i.plugins&&a.i.plugins[h.c]>0){for(m=0;m<a.i.plugins[h.c];m++){r=a.i.plugins[m];if(h.K(r.name,"Shockwave Flash")){return h.J(r.description,"Shockwave Flash ")[1]}}}else if(a.r.ActiveXObject){for(q=10;q>=2;q--){try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+
q);if(g){return q+".0"}}catch(p){}}}return c}a.mc=function(){var m;if(self.screen){a.Fa=a.Ea.width+"x"+a.Ea.height;a.Ob=a.Ea.colorDepth+"-bit"}else if(a.nb){try{m=a.nb.getScreenSize();a.Fa=m.width+"x"+m.height}catch(r){}}a.Ib=h.La(a.i&&a.i.language?a.i.language:(a.i&&a.i.browserLanguage?a.i.browserLanguage:c));a.Gb=a.i&&a.i.javaEnabled()?1:0;a.xb=k?j():c;a.qb=h.d(a.a.characterSet?a.a.characterSet:(a.a.charset?a.a.charset:c))};a.Ic=function(){return"&"+["utmcs="+h.d(a.qb),"utmsr="+a.Fa,"utmsc="+a.Ob,
"utmul="+a.Ib,"utmje="+a.Gb,"utmfl="+h.d(a.xb)].join("&")}};_gat.k=function(e,a,c,h,k){var j=this,m=_gat,r=m.o,q=m.b,g=m.K,p=m.z,u=m.La,y=m.J,i=m.c;j.a=a;j.g=e;j.Lb=c;j.ea=h;j.s=k;function z(n){return r(n)||"0"==n||!g(n,"://")}j.tc=function(n){var s=j.Cb(),v=j.s;return new m.k.q(p(n,v.db+"=","&"),p(n,v.gb+"=","&"),p(n,v.ib+"=","&"),j.W(n,v.bb,"(not set)"),j.W(n,v.eb,"(not set)"),j.W(n,v.hb,s&&!r(s.L)?m.V(s.L):q),j.W(n,v.cb,q))};j.Cb=function(){var n,s,v=j.Lb,w,l,b=j.s.$;if(z(v)){return}n=u(y(v,"://")[1]);if(g(n,"/")){n=y(n,"/")[0]}for(w=0;w<b[i];w++){l=b[w];
if(g(n,u(l.wb))){v=y(v,"?").join("&");if(g(v,"&"+l.Hb+"=")){s=y(v,"&"+l.Hb+"=")[1];if(g(s,"&")){s=y(s,"&")[0]}return new m.k.q(q,l.wb,q,"(organic)","organic",s,q)}}}};j.W=function(n,s,v){var w=p(n,s+"=","&"),l=!r(w)?m.V(w):(!r(v)?v:"-");return l};j.zc=function(n){var s=j.s.Z,v=false,w,l;if(n&&"organic"==n.Y){w=u(m.d(n.L));for(l=0;l<s[i];l++){v=v||u(s[l])==w}}return v};j.sc=function(){var n="",s="",v=j.Lb;if(z(v)){return}n=u(y(v,"://")[1]);if(g(n,"/")){s=m.B(n,m.w(n,"/"));if(g(s,"?")){s=y(s,"?")[0]}n=
y(n,"/")[0]}if(0==m.w(n,"www.")){n=m.B(n,4)}return new m.k.q(q,n,q,"(referral)","referral",q,s)};j.ic=function(n){var s="";if(j.s.ka){s=m.Ab(n);s=""!=s?s+"&":s}s+=n.search;return s};j.oc=function(){return new m.k.q(q,"(direct)",q,"(direct)","(none)",q,q)};j.Ac=function(n){var s=false,v,w,l=j.s.aa;if(n&&"referral"==n.Y){v=u(m.d(n.ca));for(w=0;w<l[i];w++){s=s||g(v,u(l[w]))}}return s};j.O=function(n){return q!=n&&n.Aa()};j.nc=function(n,s){var v="",w="-",l,b,d=0,f,o,t=j.g;if(!n){return""}o=j.a[m.p]?
j.a[m.p]:"";v=j.ic(j.a.location);if(j.s.D&&n.Eb()){w=n.xa();if(!r(w)&&!g(w,";")){n.Pa();return""}}w=p(o,m.R+t,";");l=j.tc(v);if(j.O(l)){b=p(v,j.s.fb+"=","&");if("1"==b&&!r(w)){return""}}if(!j.O(l)){l=j.Cb();if(!r(w)&&j.zc(l)){return""}}if(!j.O(l)&&s){l=j.sc();if(!r(w)&&j.Ac(l)){return""}}if(!j.O(l)){if(r(w)&&s){l=j.oc()}}if(!j.O(l)){return""}if(!r(w)){var x=y(w,"."),A=new m.k.q;A.zb(x.slice(4).join("."));f=u(A.fa())==u(l.fa());d=x[3]*1}if(!f||s){var D=p(o,m.n+t,";"),G=D.lastIndexOf("."),E=G>9?m.B(D,
G+1)*1:0;d++;E=0==E?1:E;n.Sb([t,j.ea,E,d,l.fa()].join("."));n.Pa();return"&utmcn=1"}else{return"&utmcr=1"}}};_gat.k.q=function(e,a,c,h,k,j,m){var r=this;r.v=e;r.ca=a;r.ma=c;r.H=h;r.Y=k;r.L=j;r.tb=m};_gat.k.q.prototype.fa=function(){var e=this,a=_gat,c=[],h=[[a.Ua,e.v],[a.Wa,e.ca],[a.Ya,e.ma],[a.Sa,e.H],[a.Va,e.Y],[a.Xa,e.L],[a.Ta,e.tb]],k;if(e.Aa()){for(k=0;k<h[a.c];k++){if(!a.o(h[k][1])){a.f(c,h[k][0]+a.d(h[k][1]))}}}return c.join("|")};_gat.k.q.prototype.Aa=function(){var e=this,a=_gat.o;return!(a(e.v)&&
a(e.ca)&&a(e.ma))};_gat.k.q.prototype.zb=function(e){var a=this,c=_gat,h=function(k){return c.V(c.z(e,k,"|"))};a.v=h(c.Ua);a.ca=h(c.Wa);a.ma=h(c.Ya);a.H=h(c.Sa);a.Y=h(c.Va);a.L=h(c.Xa);a.tb=h(c.Ta)};_gat.Za=function(){var e=this,a=_gat,c={},h="k",k="v",j=[h,k],m="(",r=")",q="*",g="!",p="'",u={};u[p]="'0";u[r]="'1";u[q]="'2";u[g]="'3";var y=1;function i(l,b,d,f){if(a.b==c[l]){c[l]={}}if(a.b==c[l][b]){c[l][b]=[]}c[l][b][d]=f}function z(l,b,d){if(a.b!=c[l]&&a.b!=c[l][b]){return c[l][b][d]}else{return a.b}}function n(l,b){if(a.b!=c[l]&&a.b!=c[l][b]){c[l][b]=a.b;var d=true,f;for(f=0;f<j[a.c];f++){if(a.b!=c[l][j[f]]){d=false;break}}if(d){c[l]=a.b}}}function s(l){var b="",d=false,f,o;for(f=0;f<j[a.c];f++){o=
l[j[f]];if(a.b!=o){if(d){b+=j[f]}b+=v(o);d=false}else{d=true}}return b}function v(l){var b=[],d,f;for(f=0;f<l[a.c];f++){if(a.b!=l[f]){d="";if(f!=y&&a.b==l[f-1]){d+=f.toString();d+=g}d+=w(l[f]);a.f(b,d)}}return m+b.join(q)+r}function w(l){var b="",d,f,o;for(d=0;d<l.length;d++){f=l.charAt(d);o=u[f];if(a.b!=o){b+=o}else{b+=f}}return b}e.wc=function(l){return a.b!=c[l]};e.Da=function(){var l=[],b;for(b in c){if(a.b!=c[b]){a.f(l,b.toString()+s(c[b]))}}return l.join("")};e.Dc=function(l){if(l==a.b){return e.Da()}var b=
[l.Da()],d;for(d in c){if(a.b!=c[d]&&!l.wc(d)){a.f(b,d.toString()+s(c[d]))}}return b.join("")};e._setKey=function(l,b,d){if(typeof d!="string"){return false}i(l,h,b,d);return true};e._setValue=function(l,b,d){if(typeof d!="number"&&(a.b==Number||!(d instanceof Number))){return false}if(Math.round(d)!=d||d==NaN||d==Infinity){return false}i(l,k,b,d.toString());return true};e._getKey=function(l,b){return z(l,h,b)};e._getValue=function(l,b){return z(l,k,b)};e._clearKey=function(l){n(l,h)};e._clearValue=
function(l){n(l,k)}};_gat.cc=function(e,a){var c=this,h=_gat,k=a._createXObj();c.Bc=a;c.Ba=e;c._trackEvent=function(j,m,r){if(h.b==c.Ba||h.b==j||""==c.Ba||""==j){return false}var q=true;k._clearKey(5);k._clearValue(5);if(!k._setKey(5,1,c.Ba)){q=false}if(!k._setKey(5,2,j)){q=false}if(h.b!=m&&!k._setKey(5,3,m)){q=false}if(h.b!=r&&!k._setValue(5,1,r)){q=false}if(q){c.Bc._sendXEvent(k)}return q}};_gat.ec=function(e){var a=this,c=_gat,h=c.b,k=c.o,j=c.w,m=c.B,r=c.z,q=c.K,g=c.J,p="location",u=c.c,y=h,i=new c.bc;a.a=document;a.r=window;a.ea=Math.round((new Date).getTime()/1000);a.N=e;a.qa=h;a.j=h;a.Fc=c.ra();a.F=h;a.I=false;a.U=h;a.ob="";a.m=h;a.g=h;a.t=h;function z(){if("auto"==i.e){var b=a.a.domain;if("www."==m(b,0,4)){b=m(b,4)}i.e=b}i.e=c.La(i.e)}function n(){var b=i.e,d=j(b,"www.google.")*j(b,".google.")*j(b,"google.");return d||"/"!=i.l||j(b,"google.org")>-1}function s(b,d,f){if(k(b)||k(d)||
k(f)){return"-"}var o=r(b,c.n+a.g,d),t;if(!k(o)){t=g(o,".");t[5]=t[5]?t[5]*1+1:1;t[3]=t[4];t[4]=f;o=t.join(".")}return o}function v(){return"file:"!=a.a[p].protocol&&n()}function w(b){if(!b||""==b){return""}while(c.Fb(b.charAt(0))){b=m(b,1)}while(c.Fb(b.charAt(b[u]-1))){b=m(b,0,b[u]-1)}return b}function l(b,d,f){if(!k(b())){d(c.V(b()));if(!q(b(),";")){f()}}}a.pc=function(){if(!i.e||""==i.e||"none"==i.e){i.e="";return 1}z();if(i.mb){return c.u(i.e)}else{return 1}};a.jc=function(b,d){if(k(b)){b="-"}else{d+=
i.l&&"/"!=i.l?i.l:"";var f=j(b,d);b=f>=0&&f<=8?"0":("["==b.charAt(0)&&"]"==b.charAt(b[u]-1)?"-":b)}return b};a.Mb=function(b){var d="",f=a.a,o=f[p];d+=a.U?a.U.Ic():"";d+=i.la?a.ob:"";d+=i.oa&&!k(f.title)?"&utmdt="+c.d(f.title):"";d+=k(o.hostname)?"":"&utmhn="+c.d(o.hostname);d+="&utmhid="+c.kc()+"&utmr="+a.qa+"&utmp="+a.Ec(b);return d};a.Ec=function(b){var d=a.a[p];b=h!=b&&""!=b?c.d(b,true):c.d(d.pathname+unescape(d.search),true);return b};a.Jc=function(b){if(a.da()){var d="";if(a.m!=h){d+="&utme="+
c.d(a.m.Da())}d+=a.Mb(b);y.ba(d,a.N,a.a,a.g,true)}};a.sb=function(){var b=new c.S(a.a,i);return b.Ca(a.g)?b.Hc():h};a.yb=function(b,d,f){var o=g(b,"#"),t=b;if(f){if(d&&1>=o[u]){t+="#"+f}else if(!d||1>=o[u]){if(1>=o[u]){t+=(q(b,"?")?"&":"?")+f}else{t=o[0]+(q(b,"?")?"&":"?")+f+"#"+o[1]}}}return t};a.Ub=function(){var b;if(a.F&&a.F[u]>=10){a.t.Gc(a.F);a.t.Lc();a.r._udo=i.e;a.r._utcp=i.l;b=a.a.createElement("script");b.type="text/javascript";b.id="_gasojs";b.src="https://web.archive.org/web/20080213202456/https://www.google.com/analytics/reporting/overlay_js?gaso="+
a.F+"&"+c.ra();a.a.getElementsByTagName("head")[0].appendChild(b)}};a.vc=function(){var b=a.a[c.p],d=a.ea,f=a.t,o=a.g+"",t=a.r,x=t?t.gaGlobal:h,A,D=q(b,c.n+o),G=q(b,c.Q+o),E=q(b,c.ha+o),B,C=[],F="",H;b=k(b)?"":b;if(i.D){A=c.Ab(a.a[p]);if(i.ka&&!k(A)){F=A+"&"}F+=a.a[p].search;if(!k(F)&&q(F,c.n)){f.Cc(F);if(!f.Eb()){f.hc()}B=f.ta()}l(f.wa,f.Rb,f.$b);l(f.va,f.Ja,f.Oa)}if(!k(B)){if(k(f.G())||k(f.ua())){B=s(F,"&",d);a.I=true}else{C=g(f.G(),".");o=C[0]}}else{if(D){if(!G||!E){B=s(b,";",d);a.I=true}else{B=
r(b,c.n,";");C=g(r(b,c.Q,";"),".")}}else{B=[o,a.Fc,d,d,d,1].join(".");a.I=true}}B=g(B,".");if(t&&x){B[4]=x.sid?x.sid:B[4];if(x.vid){H=g(x.vid,".");B[1]=H[0];B[2]=H[1]}}f.Qb(B.join("."));C[0]=o;C[1]=C[1]?C[1]:0;f.Ga(C.join("."));f.Ha(C.join("."));if(!k(f.uc())){f.Ia(f.u())}f.Zb();f.Ma();f.Na()};a.xc=function(){y=new c.dc(i)};a._initData=function(){var b;a.xc();a.g=a.pc();a.t=new c.S(a.a,i);if(v()){a.vc();a.qa=a.jc(a.a.referrer,a.a.domain);if(i.na){a.U=new c.ac(i.pa);a.U.mc()}if(i.la){b=new c.k(a.g,
a.a,a.qa,a.ea,i);a.ob=b.nc(a.t,a.I)}}a.m=new c.Za;if(!c.Db){a.yc()}};a._visitCode=function(){var b=r(a.a[c.p],c.n+a.g,";"),d=g(b,".");return d[u]<4?"":d[1]};a._cookiePathCopy=function(b){if(a.t){a.t.Kc(a.g,b)}};a.yc=function(){var b=a.a[p].hash,d;d=b&&""!=b&&0==j(b,"#gaso=")?r(b,"gaso=","&"):r(a.a[c.p],c.Qa,";");if(d[u]>=10){a.F=d;if(a.r.addEventListener){a.r.addEventListener("load",a.Ub,false)}else{a.r.attachEvent("onload",a.Ub)}}c.Db=true};a.da=function(){return a._visitCode()%10000<i.Nb*100};a._trackPageview=
function(b){if(v()){a.Jc(b);a.I=false}};a._trackTrans=function(){var b=a.g,d=[],f,o,t,x;if(a.j&&a.da()){for(f=0;f<a.j.ga[u];f++){o=a.j.ga[f];c.f(d,o.M());for(t=0;t<o.X[u];t++){c.f(d,o.X[t].M())}}for(x=0;x<d[u];x++){y.ba(d[x],a.N,a.a,b,true)}}};a._setTrans=function(){var b=a.a,d,f,o,t,x=b.getElementById?b.getElementById("utmtrans"):(b.utmform&&b.utmform.utmtrans?b.utmform.utmtrans:h);if(x&&x.value){a.j=new c.h;t=g(x.value,"UTM:");i.C=!i.C||""==i.C?"|":i.C;for(d=0;d<t[u];d++){t[d]=w(t[d]);f=g(t[d],
i.C);for(o=0;o<f[u];o++){f[o]=w(f[o])}if("T"==f[0]){a._addTrans(f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8])}else if("I"==f[0]){a._addItem(f[1],f[2],f[3],f[4],f[5],f[6])}}}};a._addTrans=function(b,d,f,o,t,x,A,D){a.j=a.j?a.j:new c.h;return a.j.kb(b,d,f,o,t,x,A,D)};a._addItem=function(b,d,f,o,t,x){var A;a.j=a.j?a.j:new c.h;A=a.j.sa(b);if(!A){A=a._addTrans(b,"","","","","","","")}A.jb(d,f,o,t,x)};a._setVar=function(b){if(b&&""!=b&&n()){var d=new c.S(a.a,i),f=a.g;d.Ja(f+"."+c.d(b));d.Oa();if(a.da()){y.ba("&utmt=var",
a.N,a.a,a.g,true)}}};a._link=function(b,d){if(i.D&&b){a.a[p].href=a.yb(b,d,a.sb())}};a._linkByPost=function(b,d){if(i.D&&b&&b.action){b.action=a.yb(b.action,d,a.sb())}};a._setXKey=function(b,d,f){a.m._setKey(b,d,f)};a._setXValue=function(b,d,f){a.m._setValue(b,d,f)};a._getXKey=function(b,d){return a.m._getKey(b,d)};a._getXValue=function(b,d){return a.m.getValue(b,d)};a._clearXKey=function(b){a.m._clearKey(b)};a._clearXValue=function(b){a.m._clearValue(b)};a._createXObj=function(){return new c.Za};
a._sendXEvent=function(b){var d="";if(a.da()){d+="&utmt=event&utme="+c.d(a.m.Dc(b))+a.Mb();y.ba(d,a.N,a.a,a.g)}};a._createEventTracker=function(b){return new c.cc(b,a)};a._setDomainName=function(b){i.e=b};a.Mc=function(){return i.e};a._addOrganic=function(b,d){c.f(i.$,new c.ab(b,d))};a._clearOrganic=function(){i.$=[]};a.Sc=function(){return i.$};a._addIgnoredOrganic=function(b){c.f(i.Z,b)};a._clearIgnoredOrganic=function(){i.Z=[]};a.Nc=function(){return i.Z};a._addIgnoredRef=function(b){c.f(i.aa,
b)};a._clearIgnoredRef=function(){i.aa=[]};a.Oc=function(){return i.aa};a._setAllowHash=function(b){i.mb=b?1:0};a._setCampaignTrack=function(b){i.la=b?1:0};a._setClientInfo=function(b){i.na=b?1:0};a._getClientInfo=function(){return i.na};a._setCookiePath=function(b){i.l=b};a._setTransactionDelim=function(b){i.C=b};a._setCookieTimeout=function(b){i.ub=b};a._setDetectFlash=function(b){i.pa=b?1:0};a._getDetectFlash=function(b){return i.pa};a._setDetectTitle=function(b){i.oa=b?1:0};a._getDetectTitle=
function(){return i.oa};a._setLocalGifPath=function(b){i.ya=b};a._getLocalGifPath=function(){return i.ya};a._setLocalServerMode=function(){i.A=0};a._setRemoteServerMode=function(){i.A=1};a._setLocalRemoteServerMode=function(){i.A=2};a.Rc=function(){return i.A};a._getServiceMode=function(){return i.A};a._setSampleRate=function(b){i.Nb=b};a._setSessionTimeout=function(b){i.Pb=b};a._setAllowLinker=function(b){i.D=b?1:0};a._setAllowAnchor=function(b){i.ka=b?1:0};a._setCampNameKey=function(b){i.bb=b};
a._setCampContentKey=function(b){i.cb=b};a._setCampIdKey=function(b){i.db=b};a._setCampMediumKey=function(b){i.eb=b};a._setCampNOKey=function(b){i.fb=b};a._setCampSourceKey=function(b){i.gb=b};a._setCampTermKey=function(b){i.hb=b};a._setCampCIdKey=function(b){i.ib=b};a._getAccount=function(){return a.N};a._getVersion=function(){return"3"}};_gat._getTracker=function(e){var a=new _gat.ec(e);return a};


}
/*
     FILE ARCHIVED ON 20:24:56 Feb 13, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:46:10 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.686
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.013
  esindex: 0.01
  cdx.remote: 29.743
  LoadShardBlock: 304.282 (6)
  PetaboxLoader3.datanode: 160.011 (7)
  PetaboxLoader3.resolve: 166.909 (2)
  load_resource: 95.426
*/