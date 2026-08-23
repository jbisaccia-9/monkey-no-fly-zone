(()=>{var ju=n=>{throw TypeError(n)};var uf=(n,e,t)=>e.has(n)||ju("Cannot "+t);var qu=(n,e,t)=>e.has(n)?ju("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var We=(n,e,t)=>(uf(n,e,"access private method"),t);var Ad=0,Hc=1,Cd=2;var Sa=1,Rd=2,Ss=3,bs=0,vi=1,hi=2,xn=0,wr=1,yn=2,Vc=3,Wc=4,Id=5;var Es=100,Pd=101,Ld=102,Dd=103,Nd=104,Ud=200,Fd=201,Od=202,Bd=203,zd=204,kd=205,Gd=206,Hd=207,Vd=208,Wd=209,Xd=210,jd=211,qd=212,Yd=213,Zd=214,Xc=0,jc=1,qc=2,hl=3,Yc=4,Zc=5,Jc=6,Kc=7,Jd=0,Kd=1,$d=2,en=0,$c=1,Qc=2,eh=3,Ar=4,th=5,ih=6,nh=7;var rh=300,Ts=301,Cr=302,ul=303,dl=304,ba=306,pr=1e3,Jn=1001,bo=1002,Ui=1003,Qd=1004;var Ea=1005;var Kt=1006,pl=1007;var tn=1008;var Ci=1009,sh=1010,ah=1011,ws=1012,ml=1013,On=1014,zi=1015,Mn=1016,fl=1017,gl=1018,As=1020,oh=35902,lh=35899,ep=1021,tp=1022,nn=1023,nr=1026,Rr=1027,vl=1028,_l=1029,Cs=1030,ch=1031;var hh=1033,xl=33776,yl=33777,Ml=33778,Sl=33779,uh=35840,dh=35841,ph=35842,mh=35843,fh=36196,gh=37492,vh=37496,_h=37488,xh=37489,yh=37490,Mh=37491,Sh=37808,bh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Ch=37814,Rh=37815,Ih=37816,Ph=37817,Lh=37818,Dh=37819,Nh=37820,Uh=37821,Fh=36492,Oh=36494,Bh=36495,zh=36283,kh=36284,Gh=36285,Hh=36286;var ea=2300,Eo=2301,Mo=2302,Rc=2303,Ic=2400,Pc=2401,Lc=2402;var ip=0,np=1,Ir="",Et="srgb",mr="srgb-linear",ta="linear",gt="srgb";var dr=7680;var rp=512,sp=513,ap=514,bl=515,op=516,lp=517,El=518,cp=519,Dc=35044,Rs=35048;var Vh="300 es",Nn=2e3,os=2001;function df(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){let n=ls("canvas");return n.style.display="block",n}var Yu={},cs=null;function Wh(...n){let e="THREE."+n.shift();cs?cs("log",e,...n):console.log(e,...n)}function up(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){let e="THREE."+(n=up(n)).shift();if(cs)cs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){let e="THREE."+(n=up(n)).shift();if(cs)cs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ia(...n){let e=n.join(" ");e in Yu||(Yu[e]=!0,ke(...n))}function dp(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var pp={[Xc]:1,[qc]:6,[Yc]:7,[hl]:5,[jc]:0,[Jc]:2,[Kc]:4,[Zc]:3},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,ss=Math.PI/180,hs=180/Math.PI;function Pr(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ri[255&n]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[255&e]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[63&t|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[255&i]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Nc(n,e){return(n%e+e)%e}function Ks(n,e,t){return(1-t)*n+t*e}function rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var Xh={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Pr,clamp:it,euclideanModulo:Nc,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Ks,damp:function(n,e,t,i){return Ks(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Nc(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(Zu=n);let e=Zu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*ss},radToDeg:function(n){return n*hs},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*p,o*h,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:pi,denormalize:rs},he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(u!==m||l!==d||c!==p||h!==f){let _=l*d+c*p+h*f+u*m;_<0&&(d=-d,p=-p,f=-f,m=-m,_=-_);let g=1-o;if(_<.9995){let v=Math.acos(_),M=Math.sin(v);g=Math.sin(g*v)/M,l=l*g+d*(o=Math.sin(o*v)/M),c=c*g+p*o,h=h*g+f*o,u=u*g+m*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+m*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new A,Ju=new oi,$e=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=r[0],_=r[3],g=r[6],v=r[1],M=r[4],E=r[7],T=r[2],C=r[5],D=r[8];return s[0]=a*m+o*v+l*T,s[3]=a*_+o*M+l*C,s[6]=a*g+o*E+l*D,s[1]=c*m+h*v+u*T,s[4]=c*_+h*M+u*C,s[7]=c*g+h*E+u*D,s[2]=d*m+p*v+f*T,s[5]=d*_+p*M+f*C,s[8]=d*g+p*E+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(r*c-h*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ic=new $e,Ku=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){let n={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===gt&&(r.r=Dn(r.r),r.g=Dn(r.g),r.b=Dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=as(r.r),r.g=as(r.g),r.b=as(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mr]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:Ku,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Ku,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),n}var at=pf();function Dn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function as(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Xr,To=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=ls("canvas")),Xr.width=e.width,Xr.height=e.height;let r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ls("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Dn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Dn(t[i]/255)):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mf=0,us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nc(r[a].image)):s.push(nc(r[a]))}else s=nc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?To.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var ff=0,rc=new A,ai=class n extends Un{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Pr(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:ke(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null,ai.DEFAULT_MAPPING=rh,ai.DEFAULT_ANISOTROPY=1;var Rt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],_=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+_)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,E=(p+1)/2,T=(g+1)/2,C=(h+d)/4,D=(u+m)/4,U=(f+_)/4;return M>E&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=D/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=U/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=D/s,r=U/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-f)*(_-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(_-f)/v,this.y=(u-m)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends Un{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new ai(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new us(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends wo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},na=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Je=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,vf)}lookAt(e,t,i){let r=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Hn.crossVectors(i,Si),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Hn.crossVectors(i,Si)),Hn.normalize(),Va.crossVectors(Si,Hn),r[0]=Hn.x,r[4]=Va.x,r[8]=Si.x,r[1]=Hn.y,r[5]=Va.y,r[9]=Si.y,r[2]=Hn.z,r[6]=Va.z,r[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],_=i[10],g=i[14],v=i[3],M=i[7],E=i[11],T=i[15],C=r[0],D=r[4],U=r[8],R=r[12],G=r[1],W=r[5],V=r[9],X=r[13],k=r[2],j=r[6],Y=r[10],Z=r[14],ge=r[3],Re=r[7],Le=r[11],Te=r[15];return s[0]=a*C+o*G+l*k+c*ge,s[4]=a*D+o*W+l*j+c*Re,s[8]=a*U+o*V+l*Y+c*Le,s[12]=a*R+o*X+l*Z+c*Te,s[1]=h*C+u*G+d*k+p*ge,s[5]=h*D+u*W+d*j+p*Re,s[9]=h*U+u*V+d*Y+p*Le,s[13]=h*R+u*X+d*Z+p*Te,s[2]=f*C+m*G+_*k+g*ge,s[6]=f*D+m*W+_*j+g*Re,s[10]=f*U+m*V+_*Y+g*Le,s[14]=f*R+m*X+_*Z+g*Te,s[3]=v*C+M*G+E*k+T*ge,s[7]=v*D+M*W+E*j+T*Re,s[11]=v*U+M*V+E*Y+T*Le,s[15]=v*R+M*X+E*Z+T*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],m=e[7],_=e[11],g=e[15],v=l*p-c*d,M=o*p-c*u,E=o*d-l*u,T=a*p-c*h,C=a*d-l*h,D=a*u-o*h;return t*(m*v-_*M+g*E)-i*(f*v-_*T+g*C)+r*(f*M-m*T+g*D)-s*(f*E-m*C+_*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],_=e[14],g=e[15],v=t*o-i*a,M=t*l-r*a,E=t*c-s*a,T=i*l-r*o,C=i*c-s*o,D=r*c-s*l,U=h*m-u*f,R=h*_-d*f,G=h*g-p*f,W=u*_-d*m,V=u*g-p*m,X=d*g-p*_,k=v*X-M*V+E*W+T*G-C*R+D*U;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/k;return e[0]=(o*X-l*V+c*W)*j,e[1]=(r*V-i*X-s*W)*j,e[2]=(m*D-_*C+g*T)*j,e[3]=(d*C-u*D-p*T)*j,e[4]=(l*G-a*X-c*R)*j,e[5]=(t*X-r*G+s*R)*j,e[6]=(_*E-f*D-g*M)*j,e[7]=(h*D-d*E+p*M)*j,e[8]=(a*V-o*G+c*U)*j,e[9]=(i*G-t*V-s*U)*j,e[10]=(f*C-m*E+g*v)*j,e[11]=(u*E-h*C-p*v)*j,e[12]=(o*R-a*W-l*U)*j,e[13]=(t*W-i*R+r*U)*j,e[14]=(m*M-f*T-_*v)*j,e[15]=(h*T-u*M+d*v)*j,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,_=a*u,g=o*u,v=l*c,M=l*h,E=l*u,T=i.x,C=i.y,D=i.z;return r[0]=(1-(m+g))*T,r[1]=(p+E)*T,r[2]=(f-M)*T,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+g))*C,r[6]=(_+v)*C,r[7]=0,r[8]=(f+M)*D,r[9]=(_-v)*D,r[10]=(1-(d+m))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=jr.set(r[0],r[1],r[2]).length(),o=jr.set(r[4],r[5],r[6]).length(),l=jr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zi.copy(this);let c=1/a,h=1/o,u=1/l;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=u,Zi.elements[9]*=u,Zi.elements[10]*=u,t.setFromRotationMatrix(Zi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),f,m;if(l)f=s/(a-s),m=a*s/(a-s);else if(o===Nn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==os)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),f,m;if(l)f=1/(a-s),m=a/(a-s);else if(o===Nn)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==os)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},jr=new A,Zi=new Je,gf=new A(0,0,0),vf=new A(1,1,1),Hn=new A,Va=new A,Si=new A,Qu=new Je,ed=new oi,$i=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},_f=0,td=new A,qr=new oi,An=new Je,Wa=new A,Vs=new A,xf=new A,yf=new oi,id=new A(1,0,0),nd=new A(0,1,0),rd=new A(0,0,1),sd={type:"added"},Mf={type:"removed"},Yr={type:"childadded",child:null},sc={type:"childremoved",child:null},Ht=class n extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new $i,i=new oi,r=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new $e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Vs,Wa,this.up):An.lookAt(Wa,Vs,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(An),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ht.DEFAULT_UP=new A(0,1,0),Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sf={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let _=t.getJointPose(m,i),g=this._getHandJoint(c,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ee=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Nc(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ac(a,s,e+1/3),this.g=ac(a,s,e),this.b=ac(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Et){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=mp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return at.workingToColorSpace(si.copy(this),e),65536*Math.round(it(255*si.r,0,255))+256*Math.round(it(255*si.g,0,255))+Math.round(it(255*si.b,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(si.copy(this),t);let i=si.r,r=si.g,s=si.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Et){at.workingToColorSpace(si.copy(this),e);let t=si.r,i=si.g,r=si.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Xa);let i=Ks(Vn.h,Xa.h,t),r=Ks(Vn.s,Xa.s,t),s=Ks(Vn.l,Xa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new Ee;Ee.NAMES=mp;var fr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=new A,Cn=new A,oc=new A,Rn=new A,Zr=new A,Jr=new A,ad=new A,lc=new A,cc=new A,hc=new A,uc=new Rt,dc=new Rt,pc=new Rt,Ln=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ji.subVectors(e,t),r.cross(Ji);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ji.subVectors(r,t),Cn.subVectors(i,t),oc.subVectors(e,t);let a=Ji.dot(Ji),o=Ji.dot(Cn),l=Ji.dot(oc),c=Cn.dot(Cn),h=Cn.dot(oc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return uc.setScalar(0),dc.setScalar(0),pc.setScalar(0),uc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,i),pc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uc,s.x),a.addScaledVector(dc,s.y),a.addScaledVector(pc,s.z),a}static isFrontFacing(e,t,i,r){return Ji.subVectors(i,t),Cn.subVectors(e,t),Ji.cross(Cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),.5*Ji.cross(Cn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Zr.subVectors(r,i),Jr.subVectors(s,i),lc.subVectors(e,i);let l=Zr.dot(lc),c=Jr.dot(lc);if(l<=0&&c<=0)return t.copy(i);cc.subVectors(e,r);let h=Zr.dot(cc),u=Jr.dot(cc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Zr,a);hc.subVectors(e,s);let p=Zr.dot(hc),f=Jr.dot(hc);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Jr,o);let _=h*f-p*u;if(_<=0&&u-h>=0&&p-f>=0)return ad.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(ad,o);let g=1/(_+m+d);return a=m*g,o=d*g,t.copy(i).addScaledVector(Zr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ki):Ki.fromBufferAttribute(s,a),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),qa.subVectors(this.max,Ws),Kr.subVectors(e.a,Ws),$r.subVectors(e.b,Ws),Qr.subVectors(e.c,Ws),Wn.subVectors($r,Kr),Xn.subVectors(Qr,$r),lr.subVectors(Kr,Qr);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-lr.z,lr.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,lr.z,0,-lr.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-lr.y,lr.x,0];return!!mc(t,Kr,$r,Qr,qa)&&(t=[1,0,0,0,1,0,0,0,1],!!mc(t,Kr,$r,Qr,qa)&&(Ya.crossVectors(Wn,Xn),t=[Ya.x,Ya.y,Ya.z],mc(t,Kr,$r,Qr,qa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ki).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new A,new A,new A,new A,new A,new A,new A,new A],Ki=new A,ja=new Fi,Kr=new A,$r=new A,Qr=new A,Wn=new A,Xn=new A,lr=new A,Ws=new A,qa=new A,Ya=new A,cr=new A;function mc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){cr.fromArray(n,s);let o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Rv=bf();function bf(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Gt=new A,Za=new he,Ef=0,Bt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dc,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),i=pi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),i=pi(i,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),i=pi(i,this.array),r=pi(r,this.array),s=pi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}};var sa=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var aa=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ge=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Tf=new Fi,Xs=new A,fc=new A,Oi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);let t=Xs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(fc)),this.expandByPoint(Xs.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wf=0,Ni=new Je,gc=new Ht,es=new A,bi=new Fi,js=new Fi,Jt=new A,ct=class n extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?aa:sa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(bi.min,js.min),bi.expandByPoint(Jt),Jt.addVectors(bi.max,js.max),bi.expandByPoint(Jt)):(bi.expandByPoint(js.min),bi.expandByPoint(js.max))}bi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jt.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Jt.add(es)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new A,l[U]=new A;let c=new A,h=new A,u=new A,d=new he,p=new he,f=new he,m=new A,_=new A;function g(U,R,G){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,G),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,R),f.fromBufferAttribute(s,G),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let W=1/(p.x*f.y-f.x*p.y);isFinite(W)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(W),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(W),o[U].add(m),o[R].add(m),o[G].add(m),l[U].add(_),l[R].add(_),l[G].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,R=v.length;U<R;++U){let G=v[U],W=G.start;for(let V=W,X=W+G.count;V<X;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new A,E=new A,T=new A,C=new A;function D(U){T.fromBufferAttribute(r,U),C.copy(T);let R=o[U];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),E.crossVectors(C,R);let G=E.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,G)}for(let U=0,R=v.length;U<R;++U){let G=v[U],W=G.start;for(let V=W,X=W+G.count;V<X;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,_=l.length;m<_;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Bt(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Iv=new A;var Af=0,vn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:ke(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pv=new A,Lv=new A,Dv=new A,Nv=new he,Uv=new he,Fv=new Je,Ov=new A,Bv=new A,zv=new A,kv=new he,Gv=new he,Hv=new he;var Vv=new A,Wv=new A;var Pn=new A,vc=new A,Ja=new A,jn=new A,_c=new A,Ka=new A,xc=new A,vr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vc.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(vc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ja),o=jn.dot(this.direction),l=-jn.dot(Ja),c=jn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(vc).addScaledVector(Ja,d),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){_c.subVectors(t,e),Ka.subVectors(i,e),xc.crossVectors(_c,Ka);let a,o=this.direction.dot(xc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}jn.subVectors(this.origin,e);let l=a*this.direction.dot(Ka.crossVectors(jn,Ka));if(l<0)return null;let c=a*this.direction.dot(_c.cross(jn));if(c<0||l+c>o)return null;let h=-a*jn.dot(xc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},od=new Je,hr=new vr,$a=new Oi,ld=new A,Qa=new A,eo=new A,to=new A,yc=new A,io=new A,cd=new A,no=new A,Pe=class extends Ht{constructor(e=new ct,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(yc.fromBufferAttribute(u,e),a?io.addScaledVector(yc,h):io.addScaledVector(yc.sub(t),h))}t.add(io)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),hr.copy(e.ray).recast(e.near),$a.containsPoint(hr.origin)===!1&&(hr.intersectSphere($a,ld)===null||hr.origin.distanceToSquared(ld)>(e.far-e.near)**2))return;od.copy(s).invert(),hr.copy(e.ray).applyMatrix4(od),i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,hr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),M=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));v<M;v+=3)r=ro(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=ro(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));v<M;v+=3)r=ro(this,g,e,i,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)r=ro(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function ro(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Qa),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);let h=(function(u,d,p,f,m,_,g,v){let M;if(M=d.side===1?f.intersectTriangle(g,_,m,!0,v):f.intersectTriangle(m,_,g,d.side===0,v),M===null)return null;no.copy(v),no.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(no);return E<p.near||E>p.far?null:{distance:E,point:no.clone(),object:u}})(n,e,t,i,Qa,eo,to,cd);if(h){let u=new A;Ln.getBarycoord(cd,Qa,eo,to,u),r&&(h.uv=Ln.getInterpolatedAttribute(r,o,l,c,u,new he)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,o,l,c,u,new he)),a&&(h.normal=Ln.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Ln.getNormal(Qa,eo,to,d.normal),h.face=d,h.barycoord=u}return h}var Xv=new A,jv=new Rt,qv=new Rt,Yv=new A,Zv=new Je,Jv=new A,Kv=new Oi,$v=new Je,Qv=new vr;var _r=class extends ai{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},e_=new Je,t_=new Je;var oa=class extends Bt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new Je,hd=new Je,so=[],ud=new Fi,Cf=new Je,qs=new Pe,Ys=new Oi,xr=class extends Pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oa(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Cf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ts),ud.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ts),Ys.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ts),hd.multiplyMatrices(i,ts),qs.matrixWorld=hd,qs.raycast(e,so);for(let a=0,o=so.length;a<o;a++){let l=so[a];l.instanceId=s,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oa(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(r*this.count),r,this.count,vl,zi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mc=new A,Rf=new A,If=new $e,fn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Mc.subVectors(i,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Mc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||If.getNormalMatrix(e),r=this.coplanarPoint(Mc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new Oi,Pf=new he(.5,.5),ao=new A,Kn=class{constructor(e=new fn,t=new fn,i=new fn,r=new fn,s=new fn,a=new fn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],m=s[9],_=s[10],g=s[11],v=s[12],M=s[13],E=s[14],T=s[15];if(r[0].setComponents(c-a,p-h,g-f,T-v).normalize(),r[1].setComponents(c+a,p+h,g+f,T+v).normalize(),r[2].setComponents(c+o,p+u,g+m,T+M).normalize(),r[3].setComponents(c-o,p-u,g-m,T-M).normalize(),i)r[4].setComponents(l,d,_,E).normalize(),r[5].setComponents(c-l,p-d,g-_,T-E).normalize();else if(r[4].setComponents(c-l,p-d,g-_,T-E).normalize(),t===Nn)r[5].setComponents(c+l,p+d,g+_,T+E).normalize();else{if(t!==os)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,_,E).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);let t=Pf.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dn=new Je,pn=new Kn,Co=class n{constructor(){this.coordinateSystem=Nn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(dn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),pn.setFromProjectionMatrix(dn,r.coordinateSystem,r.reversedDepth),pn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(dn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),pn.setFromProjectionMatrix(dn,r.coordinateSystem,r.reversedDepth),pn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(dn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),pn.setFromProjectionMatrix(dn,r.coordinateSystem,r.reversedDepth),pn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(dn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),pn.setFromProjectionMatrix(dn,r.coordinateSystem,r.reversedDepth),pn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(dn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),pn.setFromProjectionMatrix(dn,r.coordinateSystem,r.reversedDepth),pn.containsPoint(e))return!0}return!1}clone(){return new n}};var Uc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},i_=new Je,n_=new Ee(1,1,1),r_=new Kn,s_=new Co,a_=new Fi,o_=new Oi,l_=new A,c_=new A,h_=new A,u_=new Uc,d_=new Pe;var ps=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ro=new A,Io=new A,dd=new Je,Zs=new vr,oo=new Oi,Sc=new A,pd=new A,la=class extends Ht{constructor(e=new ct,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ro.fromBufferAttribute(t,r-1),Io.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ro.distanceTo(Io);e.setAttribute("lineDistance",new Ge(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;dd.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(dd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=h.getX(f),g=h.getX(f+1),v=lo(this,e,Zs,l,_,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(d),_=lo(this,e,Zs,l,f,m,p-1);_&&t.push(_)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=lo(this,e,Zs,l,f,f+1,f);_&&t.push(_)}if(this.isLineLoop){let f=lo(this,e,Zs,l,p-1,d,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lo(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Ro.fromBufferAttribute(o,r),Io.fromBufferAttribute(o,s),t.distanceSqToSegment(Ro,Io,Sc,pd)>i)return;Sc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Sc);return l<e.near||l>e.far?void 0:{distance:l,point:pd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var p_=new A,m_=new A;var $n=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},md=new Je,Fc=new vr,co=new Oi,ho=new A,yr=class extends Ht{constructor(e=new ct,t=new $n){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;md.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(md);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ho.fromBufferAttribute(h,p),fd(ho,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ho.fromBufferAttribute(h,u),fd(ho,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fd(n,e,t,i,r,s,a){let o=Fc.distanceSqToPoint(n);if(o<t){let l=new A;Fc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends ai{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_n=class extends ai{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class extends ai{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==nr&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Po=class extends Qn{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class n extends ct{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,_,g,v,M,E,T,C,D,U,R){let G=E/D,W=T/U,V=E/2,X=T/2,k=C/2,j=D+1,Y=U+1,Z=0,ge=0,Re=new A;for(let Le=0;Le<Y;Le++){let Te=Le*W-X;for(let xe=0;xe<j;xe++){let ne=xe*G-V;Re[m]=ne*v,Re[_]=Te*M,Re[g]=k,c.push(Re.x,Re.y,Re.z),Re[m]=0,Re[_]=0,Re[g]=C>0?1:-1,h.push(Re.x,Re.y,Re.z),u.push(xe/D),u.push(1-Le/U),Z+=1}}for(let Le=0;Le<U;Le++)for(let Te=0;Te<D;Te++){let xe=d+Te+j*Le,ne=d+Te+j*(Le+1),ue=d+(Te+1)+j*(Le+1),fe=d+(Te+1)+j*Le;l.push(xe,ne,fe),l.push(ne,ue,fe),ge+=6}o.addGroup(p,ge,R),p+=ge,d+=Z}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Lo=class n extends ct{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*i+s,m=r+1,_=new A,g=new A;for(let v=0;v<=f;v++){let M=0,E=0,T=0,C=0;if(v<=i){let R=v/i,G=R*Math.PI/2;E=-h-e*Math.cos(G),T=e*Math.sin(G),C=-e*Math.cos(G),M=R*u}else if(v<=i+s){let R=(v-i)/s;E=R*t-h,T=e,C=0,M=u+R*d}else{let R=(v-i-s)/i,G=R*Math.PI/2;E=h+e*Math.sin(G),T=e*Math.cos(G),C=e*Math.sin(G),M=u+d+R*u}let D=Math.max(0,Math.min(1,M/p)),U=0;v===0?U=.5/r:v===f&&(U=-.5/r);for(let R=0;R<=r;R++){let G=R/r,W=G*Math.PI*2,V=Math.sin(W),X=Math.cos(W);g.x=-T*X,g.y=E,g.z=T*V,o.push(g.x,g.y,g.z),_.set(-T*X,C,T*V),_.normalize(),l.push(_.x,_.y,_.z),c.push(G+U,D)}if(v>0){let R=(v-1)*m;for(let G=0;G<r;G++){let W=R+G,V=R+G+1,X=v*m+G,k=v*m+G+1;a.push(W,V,X),a.push(V,k,X)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Do=class n extends ct{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$t=class n extends ct{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],_=i/2,g=0;function v(M){let E=f,T=new he,C=new A,D=0,U=M===!0?e:t,R=M===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,_*R,0),d.push(0,R,0),p.push(.5,.5),f++;let G=f;for(let W=0;W<=r;W++){let V=W/r*l+o,X=Math.cos(V),k=Math.sin(V);C.x=U*k,C.y=_*R,C.z=U*X,u.push(C.x,C.y,C.z),d.push(0,R,0),T.x=.5*X+.5,T.y=.5*k*R+.5,p.push(T.x,T.y),f++}for(let W=0;W<r;W++){let V=E+W,X=G+W;M===!0?h.push(X,X+1,V):h.push(X+1,X,V),D+=3}c.addGroup(g,D,M===!0?1:2),g+=D}(function(){let M=new A,E=new A,T=0,C=(t-e)/i;for(let D=0;D<=s;D++){let U=[],R=D/s,G=R*(t-e)+e;for(let W=0;W<=r;W++){let V=W/r,X=V*l+o,k=Math.sin(X),j=Math.cos(X);E.x=G*k,E.y=-R*i+_,E.z=G*j,u.push(E.x,E.y,E.z),M.set(k,C,j).normalize(),d.push(M.x,M.y,M.z),p.push(V,1-R),U.push(f++)}m.push(U)}for(let D=0;D<r;D++)for(let U=0;U<s;U++){let R=m[U][D],G=m[U+1][D],W=m[U+1][D+1],V=m[U][D+1];(e>0||U!==0)&&(h.push(R,G,V),T+=3),(t>0||U!==s-1)&&(h.push(G,W,V),T+=3)}c.addGroup(g,T,0),g+=T})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qi=class n extends $t{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},er=class n extends ct{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,f,m,_){let g=_+1,v=[];for(let M=0;M<=g;M++){v[M]=[];let E=p.clone().lerp(m,M/g),T=f.clone().lerp(m,M/g),C=g-M;for(let D=0;D<=C;D++)v[M][D]=D===0&&M===g?E:E.clone().lerp(T,D/C)}for(let M=0;M<g;M++)for(let E=0;E<2*(g-M)-1;E++){let T=Math.floor(E/2);E%2==0?(l(v[M][T+1]),l(v[M+1][T]),l(v[M][T])):(l(v[M][T+1]),l(v[M+1][T+1]),l(v[M+1][T]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let m=3*p;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(p,f,m,_){_<0&&p.x===1&&(a[f]=p.x-1),m.x===0&&m.z===0&&(a[f]=_/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new A,m=new A,_=new A;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],m),c(t[g+2],_),o(f,m,_,p)})(r),(function(p){let f=new A;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(p),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let p=new A;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let m=u(p)/2/Math.PI+.5,_=d(p)/Math.PI+.5;a.push(m,1-_)}(function(){let f=new A,m=new A,_=new A,g=new A,v=new he,M=new he,E=new he;for(let T=0,C=0;T<s.length;T+=9,C+=6){f.set(s[T+0],s[T+1],s[T+2]),m.set(s[T+3],s[T+4],s[T+5]),_.set(s[T+6],s[T+7],s[T+8]),v.set(a[C+0],a[C+1]),M.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),g.copy(f).add(m).add(_).divideScalar(3);let D=u(g);h(v,C+0,f,D),h(M,C+2,m,D),h(E,C+4,_,D)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],_=a[f+2],g=a[f+4],v=Math.max(m,_,g),M=Math.min(m,_,g);v>.9&&M<.1&&(m<.2&&(a[f+0]+=1),_<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},No=class n extends er{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},uo=new A,po=new A,bc=new A,mo=new Ln,Uo=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ss*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:_,c:g}=mo;if(m.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),mo.getNormal(bc),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let M=(v+1)%3,E=u[v],T=u[M],C=mo[h[v]],D=mo[h[M]],U=`${E}_${T}`,R=`${T}_${E}`;R in d&&d[R]?(bc.dot(d[R].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(D.x,D.y,D.z)),d[R]=null):U in d||(d[U]={index0:c[v],index1:c[M],normal:bc.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:_}=d[f];uo.fromBufferAttribute(o,m),po.fromBufferAttribute(o,_),p.push(uo.x,uo.y,uo.z),p.push(po.x,po.y,po.z)}this.setAttribute("position",new Ge(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,r=[],s=[],a=[],o=new A,l=new Je;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(it(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(it(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ms=class extends wi{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fo=class extends ms{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var fo=new A,Ec=new jh,Tc=new jh,wc=new jh,tr=class extends wi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(fo.subVectors(r[0],r[1]).add(r[0]),o=fo);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(fo.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),_<1e-4&&(_=m),Ec.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,_),Tc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,_),wc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,_)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Tc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),wc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Ec.calc(h),Tc.calc(h),wc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gd(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function $s(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function Qs(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var ua=class extends wi{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oo=class extends wi{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y),Qs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends wi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends wi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends wi{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends wi{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y),$s(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(gd(o,l.x,c.x,h.x,u.x),gd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:tr,CubicBezierCurve:ua,CubicBezierCurve3:Oo,EllipseCurve:ms,LineCurve:da,LineCurve3:Bo,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:fa}),ko=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new zo[r.type]().fromJSON(r))}return this}},ga=class extends ko{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new da(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new pa(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new ua(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new ms(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mr=class extends ga{constructor(e){super(e),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ga().fromJSON(r))}return this}};function Lf(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=vd(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let f=[];for(let m=0,_=u.length;m<_;m++){let g=vd(h,u[m]*p,m<_-1?u[m+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(kf(g))}f.sort(Of);for(let m=0;m<f.length;m++)d=Bf(f[m],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],f=n[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return va(s,a,t,o,l,c,0),a}function vd(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=_d(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=_d(a/i|0,n[a],n[a+1],s);return s&&fs(s,s.next)&&(xa(s),s=s.next),s}function Sr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!fs(i,i.next)&&Dt(i.prev,i,i.next)!==0)i=i.next;else{if(xa(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function va(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Oc(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,m=1;do{let _,g=p;p=null;let v=null;for(f=0;g;){f++;let M=g,E=0;for(let C=0;C<m&&(E++,M=M.nextZ,M);C++);let T=m;for(;E>0||T>0&&M;)E!==0&&(T===0||!M||g.z<=M.z)?(_=g,g=g.nextZ,E--):(_=M,M=M.nextZ,T--),v?v.nextZ=_:p=_,_.prevZ=v,v=_;g=M}v.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Nf(n,i,r,s):Df(n))e.push(l.i,n.i,c.i),xa(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?va(n=Uf(Sr(n),e),e,t,i,r,s,2):a===2&&Ff(n,e,t,i,r,s):va(Sr(n),e,t,i,r,s,1);break}}}function Df(n){let e=n.prev,t=n,i=n.next;if(Dt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Js(r,o,s,l,a,c,f.x,f.y)&&Dt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Nf(n,e,t,i){let r=n.prev,s=n,a=n.next;if(Dt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),m=Math.max(o,l,c),_=Math.max(h,u,d),g=Oc(p,f,e,t,i),v=Oc(m,_,e,t,i),M=n.prevZ,E=n.nextZ;for(;M&&M.z>=g&&E&&E.z<=v;){if(M.x>=p&&M.x<=m&&M.y>=f&&M.y<=_&&M!==r&&M!==a&&Js(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=p&&E.x<=m&&E.y>=f&&E.y<=_&&E!==r&&E!==a&&Js(o,h,l,u,c,d,E.x,E.y)&&Dt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=m&&M.y>=f&&M.y<=_&&M!==r&&M!==a&&Js(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=m&&E.y>=f&&E.y<=_&&E!==r&&E!==a&&Js(o,h,l,u,c,d,E.x,E.y)&&Dt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Uf(n,e){let t=n;do{let i=t.prev,r=t.next.next;!fs(i,r)&&gp(i,t,t.next,r)&&_a(i,r)&&_a(r,i)&&(e.push(i.i,t.i,r.i),xa(t),xa(t.next),t=n=r),t=t.next}while(t!==n);return Sr(t)}function Ff(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gf(a,o)){let l=vp(a,o);return a=Sr(a,a.next),l=Sr(l,l.next),va(a,e,t,i,r,s,0),void va(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Of(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Bf(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(fs(r,a))return a;do{if(fs(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&fp(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);_a(a,r)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&zf(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=vp(t,n);return Sr(i,i.next),Sr(t,t.next)}function zf(n,e){return Dt(n.prev,n,e.prev)<0&&Dt(e.next,n,n.next)<0}function Oc(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function kf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fp(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Js(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&fp(n,e,t,i,r,s,a,o)}function Gf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&gp(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(_a(n,e)&&_a(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(Dt(n.prev,n,e.prev)||Dt(n,e.prev,e))||fs(n,e)&&Dt(n.prev,n,n.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fs(n,e){return n.x===e.x&&n.y===e.y}function gp(n,e,t,i){let r=vo(Dt(n,e,t)),s=vo(Dt(n,e,i)),a=vo(Dt(t,i,n)),o=vo(Dt(t,i,e));return r!==s&&a!==o||!(r!==0||!go(n,t,e))||!(s!==0||!go(n,i,e))||!(a!==0||!go(t,n,i))||!(o!==0||!go(t,e,i))}function go(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vo(n){return n>0?1:n<0?-1:0}function _a(n,e){return Dt(n.prev,n,n.next)<0?Dt(n,e,n.next)>=0&&Dt(n,n.prev,e)>=0:Dt(n,e,n.prev)<0||Dt(n,n.next,e)<0}function vp(n,e){let t=Bc(n.i,n.x,n.y),i=Bc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function _d(n,e,t,i){let r=Bc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var zc=class{static triangulate(e,t,i=2){return Lf(e,t,i)}},gn=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];xd(e),yd(i,e);let a=e.length;t.forEach(xd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,yd(i,t[l]);let o=zc.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function xd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var gs=class n extends ct{constructor(e=new Mr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Hf,M,E,T,C,D,U=!1;if(g){M=g.getSpacedPoints(h),U=!0,d=!1;let L=!!g.isCatmullRomCurve3&&g.closed;E=g.computeFrenetFrames(h,L),T=new A,C=new A,D=new A}d||(_=0,p=0,f=0,m=0);let R=o.extractPoints(c),G=R.shape,W=R.holes;if(!gn.isClockWise(G)){G=G.reverse();for(let L=0,y=W.length;L<y;L++){let I=W[L];gn.isClockWise(I)&&(W[L]=I.reverse())}}function V(L){let y=10000000000000001e-36,I=L[0];for(let F=1;F<=L.length;F++){let z=F%L.length,J=L[z],$=J.x-I.x,q=J.y-I.y,re=$*$+q*q,ie=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(I.x),Math.abs(I.y));re<=y*ie*ie?(L.splice(z,1),F--):I=J}}V(G),W.forEach(V);let X=W.length,k=G;for(let L=0;L<X;L++){let y=W[L];G=G.concat(y)}function j(L,y,I){return y||Ve("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(y,I)}let Y=G.length;function Z(L,y,I){let F,z,J,$=L.x-y.x,q=L.y-y.y,re=I.x-L.x,ie=I.y-L.y,oe=$*$+q*q,se=$*ie-q*re;if(Math.abs(se)>Number.EPSILON){let pe=Math.sqrt(oe),Be=Math.sqrt(re*re+ie*ie),Ke=y.x-q/pe,rt=y.y+$/pe,nt=((I.x-ie/Be-Ke)*ie-(I.y+re/Be-rt)*re)/($*ie-q*re);F=Ke+$*nt-L.x,z=rt+q*nt-L.y;let Se=F*F+z*z;if(Se<=2)return new he(F,z);J=Math.sqrt(Se/2)}else{let pe=!1;$>Number.EPSILON?re>Number.EPSILON&&(pe=!0):$<-Number.EPSILON?re<-Number.EPSILON&&(pe=!0):Math.sign(q)===Math.sign(ie)&&(pe=!0),pe?(F=-q,z=$,J=Math.sqrt(oe)):(F=$,z=q,J=Math.sqrt(oe/2))}return new he(F/J,z/J)}let ge=[];for(let L=0,y=k.length,I=y-1,F=L+1;L<y;L++,I++,F++)I===y&&(I=0),F===y&&(F=0),ge[L]=Z(k[L],k[I],k[F]);let Re=[],Le,Te,xe=ge.concat();for(let L=0,y=X;L<y;L++){let I=W[L];Le=[];for(let F=0,z=I.length,J=z-1,$=F+1;F<z;F++,J++,$++)J===z&&(J=0),$===z&&($=0),Le[F]=Z(I[F],I[J],I[$]);Re.push(Le),xe=xe.concat(Le)}if(_===0)Te=gn.triangulateShape(k,W);else{let L=[],y=[];for(let I=0;I<_;I++){let F=I/_,z=p*Math.cos(F*Math.PI/2),J=f*Math.sin(F*Math.PI/2)+m;for(let $=0,q=k.length;$<q;$++){let re=j(k[$],ge[$],J);Ce(re.x,re.y,-z),F===0&&L.push(re)}for(let $=0,q=X;$<q;$++){let re=W[$];Le=Re[$];let ie=[];for(let oe=0,se=re.length;oe<se;oe++){let pe=j(re[oe],Le[oe],J);Ce(pe.x,pe.y,-z),F===0&&ie.push(pe)}F===0&&y.push(ie)}}Te=gn.triangulateShape(L,y)}let ne=Te.length,ue=f+m;for(let L=0;L<Y;L++){let y=d?j(G[L],xe[L],ue):G[L];U?(C.copy(E.normals[0]).multiplyScalar(y.x),T.copy(E.binormals[0]).multiplyScalar(y.y),D.copy(M[0]).add(C).add(T),Ce(D.x,D.y,D.z)):Ce(y.x,y.y,0)}for(let L=1;L<=h;L++)for(let y=0;y<Y;y++){let I=d?j(G[y],xe[y],ue):G[y];U?(C.copy(E.normals[L]).multiplyScalar(I.x),T.copy(E.binormals[L]).multiplyScalar(I.y),D.copy(M[L]).add(C).add(T),Ce(D.x,D.y,D.z)):Ce(I.x,I.y,u/h*L)}for(let L=_-1;L>=0;L--){let y=L/_,I=p*Math.cos(y*Math.PI/2),F=f*Math.sin(y*Math.PI/2)+m;for(let z=0,J=k.length;z<J;z++){let $=j(k[z],ge[z],F);Ce($.x,$.y,u+I)}for(let z=0,J=W.length;z<J;z++){let $=W[z];Le=Re[z];for(let q=0,re=$.length;q<re;q++){let ie=j($[q],Le[q],F);U?Ce(ie.x,ie.y+M[h-1].y,M[h-1].x+I):Ce(ie.x,ie.y,u+I)}}}function fe(L,y){let I=L.length;for(;--I>=0;){let F=I,z=I-1;z<0&&(z=L.length-1);for(let J=0,$=h+2*_;J<$;J++){let q=Y*J,re=Y*(J+1);S(y+F+q,y+z+q,y+z+re,y+F+re)}}}function Ce(L,y,I){l.push(L),l.push(y),l.push(I)}function le(L,y,I){b(L),b(y),b(I);let F=r.length/3,z=v.generateTopUV(i,r,F-3,F-2,F-1);B(z[0]),B(z[1]),B(z[2])}function S(L,y,I,F){b(L),b(y),b(F),b(y),b(I),b(F);let z=r.length/3,J=v.generateSideWallUV(i,r,z-6,z-3,z-2,z-1);B(J[0]),B(J[1]),B(J[3]),B(J[1]),B(J[2]),B(J[3])}function b(L){r.push(l[3*L+0]),r.push(l[3*L+1]),r.push(l[3*L+2])}function B(L){s.push(L.x),s.push(L.y)}(function(){let L=r.length/3;if(d){let y=0,I=Y*y;for(let F=0;F<ne;F++){let z=Te[F];le(z[2]+I,z[1]+I,z[0]+I)}y=h+2*_,I=Y*y;for(let F=0;F<ne;F++){let z=Te[F];le(z[0]+I,z[1]+I,z[2]+I)}}else{for(let y=0;y<ne;y++){let I=Te[y];le(I[2],I[1],I[0])}for(let y=0;y<ne;y++){let I=Te[y];le(I[0]+Y*h,I[1]+Y*h,I[2]+Y*h)}}i.addGroup(L,r.length/3-L,0)})(),(function(){let L=r.length/3,y=0;fe(k,y),y+=k.length;for(let I=0,F=W.length;I<F;I++){let z=W[I];fe(z,y),y+=z.length}i.addGroup(L,r.length/3-L,1)})()}this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zo[r.type]().fromJSON(r)),new n(i,e.options)}},Hf={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*s],_=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-f),new he(m,1-g)]:[new he(o,1-l),new he(h,1-u),new he(p,1-f),new he(_,1-g)]}},br=class n extends er{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Go=class n extends ct{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=it(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new he,p=new A,f=new A,m=new A,_=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){let M=i+v*h*r,E=Math.sin(M),T=Math.cos(M);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*E,u.y=e[C].y,u.z=e[C].x*T,a.push(u.x,u.y,u.z),d.x=v/t,d.y=C/(e.length-1),o.push(d.x,d.y);let D=l[3*C+0]*E,U=l[3*C+1],R=l[3*C+0]*T;c.push(D,U,R)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let E=M+v*e.length,T=E,C=E+e.length,D=E+e.length+1,U=E+1;s.push(T,C,U),s.push(D,U,C)}this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ho=class n extends er{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},li=class n extends ct{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],_=[];for(let g=0;g<h;g++){let v=g*d-a;for(let M=0;M<c;M++){let E=M*u-s;f.push(E,-v,0),m.push(0,0,1),_.push(M/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let M=v+c*g,E=v+c*(g+1),T=v+1+c*(g+1),C=v+1+c*g;p.push(M,E,C),p.push(E,T,C)}this.setIndex(p),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Vo=class n extends ct{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new A,f=new he;for(let m=0;m<=r;m++){for(let _=0;_<=i;_++){let g=s+_/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<r;m++){let _=m*(i+1);for(let g=0;g<i;g++){let v=g+_,M=v,E=v+i+1,T=v+i+2,C=v+1;o.push(M,E,C),o.push(E,T,C)}}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wo=class n extends ct{constructor(e=new Mr([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;gn.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,g=f.length;_<g;_++){let v=f[_];gn.isClockWise(v)===!0&&(f[_]=v.reverse())}let m=gn.triangulateShape(p,f);for(let _=0,g=f.length;_<g;_++){let v=f[_];p=p.concat(v)}for(let _=0,g=p.length;_<g;_++){let v=p[_];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let _=0,g=m.length;_<g;_++){let v=m[_],M=v[0]+u,E=v[1]+u,T=v[2]+u;i.push(M,E,T),l+=3}}this.setIndex(i),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(s,3)),this.setAttribute("uv",new Ge(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},ci=class n extends ct{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],f=[],m=[],_=[];for(let g=0;g<=i;g++){let v=[],M=g/i,E=0;g===0&&a===0?E=.5/t:g===i&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){let C=T/t;u.x=-e*Math.cos(r+C*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+M*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),_.push(C+E,1-M),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let M=h[g][v+1],E=h[g][v],T=h[g+1][v],C=h[g+1][v+1];(g!==0||a>0)&&p.push(M,E,C),(g!==i-1||l<Math.PI)&&p.push(E,T,C)}this.setIndex(p),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Xo=class n extends er{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fn=class n extends ct{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new A,p=new A,f=new A;for(let m=0;m<=i;m++){let _=a+m/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(_))*Math.cos(v),p.y=(e+t*Math.cos(_))*Math.sin(v),p.z=t*Math.sin(_),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/r),u.push(m/i)}}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){let g=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,M=(r+1)*(m-1)+_,E=(r+1)*m+_;l.push(g,v,E),l.push(v,M,E)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},jo=class n extends ct{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,f=new A,m=new A,_=new A,g=new A;for(let M=0;M<=i;++M){let E=M/i*s*Math.PI*2;v(E,s,a,e,p),v(E+.01,s,a,e,f),_.subVectors(f,p),g.addVectors(f,p),m.crossVectors(_,g),g.crossVectors(m,_),m.normalize(),g.normalize();for(let T=0;T<=r;++T){let C=T/r*Math.PI*2,D=-t*Math.cos(C),U=t*Math.sin(C);u.x=p.x+(D*g.x+U*m.x),u.y=p.y+(D*g.y+U*m.y),u.z=p.z+(D*g.z+U*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(M/i),h.push(T/r)}}for(let M=1;M<=i;M++)for(let E=1;E<=r;E++){let T=(r+1)*(M-1)+(E-1),C=(r+1)*M+(E-1),D=(r+1)*M+E,U=(r+1)*(M-1)+E;o.push(T,C,U),o.push(C,D,U)}function v(M,E,T,C,D){let U=Math.cos(M),R=Math.sin(M),G=T/E*M,W=Math.cos(G);D.x=C*(2+W)*.5*U,D.y=C*(2+W)*R*.5,D.z=C*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},vs=class n extends ct{constructor(e=new ma(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new he,h=new A,u=[],d=[],p=[],f=[];function m(_){h=e.getPointAt(_/t,h);let g=a.normals[_],v=a.binormals[_];for(let M=0;M<=r;M++){let E=M/r*Math.PI*2,T=Math.sin(E),C=-Math.cos(E);l.x=C*g.x+T*v.x,l.y=C*g.y+T*v.y,l.z=C*g.z+T*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let g=0;g<=r;g++)c.x=_/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let _=1;_<=t;_++)for(let g=1;g<=r;g++){let v=(r+1)*(_-1)+(g-1),M=(r+1)*_+(g-1),E=(r+1)*_+g,T=(r+1)*(_-1)+g;f.push(v,M,T),f.push(M,E,T)}})()})(),this.setIndex(f),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},qo=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let _=o.getX(p+m),g=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,g),Md(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Md(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Md(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var f_=Object.freeze({__proto__:null,BoxGeometry:zt,CapsuleGeometry:Lo,CircleGeometry:Do,ConeGeometry:Qi,CylinderGeometry:$t,DodecahedronGeometry:No,EdgesGeometry:Uo,ExtrudeGeometry:gs,IcosahedronGeometry:br,LatheGeometry:Go,OctahedronGeometry:Ho,PlaneGeometry:li,PolyhedronGeometry:er,RingGeometry:Vo,ShapeGeometry:Wo,SphereGeometry:ci,TetrahedronGeometry:Xo,TorusGeometry:Fn,TorusKnotGeometry:jo,TubeGeometry:vs,WireframeGeometry:qo});function Lr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ui(n){let e={};for(let t=0;t<n.length;t++){let i=Lr(n[t]);for(let r in i)e[r]=i[r]}return e}function qh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var _p={clone:Lr,merge:ui},Ai=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Yo=class extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gi=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zo=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _o(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var ir=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ko=class extends ir{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pc:s=e,o=2*t-i;break;case Lc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:a=e,l=2*i-t;break;case Lc:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,_=m*f,g=-d*_+2*d*m-d*f,v=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*f+1,M=(-1-p)*_+(1.5+p)*m+.5*f,E=p*_-p*m;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+v*a[c+T]+M*a[l+T]+E*a[u+T];return s}},$o=class extends ir{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Qo=class extends ir{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends ir{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let m=(i-t)/(r-t),_=1-m;for(let g=0;g!==o;++g)s[g]=a[c+g]*_+a[l+g]*m;return s}let p=2*o,f=e-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],v=f*p+2*m,M=d[v],E=d[v+1],T=e*p+2*m,C=u[T],D=u[T+1],U,R,G,W,V,X=(i-t)/(r-t);for(let k=0;k<8;k++){U=X*X,R=U*X,G=1-X,W=G*G,V=W*G;let j=V*t+3*W*X*M+3*G*U*C+R*r-i;if(Math.abs(j)<1e-10)break;let Y=3*W*(M-t)+6*G*X*(C-M)+3*U*(r-C);if(Math.abs(Y)<1e-10)break;X-=j/Y,X=Math.max(0,Math.min(1,X))}s[m]=V*_+3*W*X*E+3*G*U*D+R*g}return s}},Ei=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case Rc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&df(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Mo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ei.prototype.ValueTypeName="",Ei.prototype.TimeBufferType=Float32Array,Ei.prototype.ValueBufferType=Float32Array,Ei.prototype.DefaultInterpolation=Eo;var Yn=class extends Ei{constructor(e,t,i){super(e,t,i)}};Yn.prototype.ValueTypeName="bool",Yn.prototype.ValueBufferType=Array,Yn.prototype.DefaultInterpolation=ea,Yn.prototype.InterpolantFactoryMethodLinear=void 0,Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Ei{constructor(e,t,i,r){super(e,t,i,r)}};tl.prototype.ValueTypeName="color";var il=class extends Ei{constructor(e,t,i,r){super(e,t,i,r)}};il.prototype.ValueTypeName="number";var nl=class extends ir{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ya=class extends Ei{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion",ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Ei{constructor(e,t,i){super(e,t,i)}};Zn.prototype.ValueTypeName="string",Zn.prototype.ValueBufferType=Array,Zn.prototype.DefaultInterpolation=ea,Zn.prototype.InterpolantFactoryMethodLinear=void 0,Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Ei{constructor(e,t,i,r){super(e,t,i,r)}};rl.prototype.ValueTypeName="vector";var So={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Sd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Sd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Sd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var sl=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new sl,_s=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_s.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=new WeakMap,al=class extends _s{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=So.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=is.get(a);u===void 0&&(u=[],is.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=ls("img");function l(){h(),t&&t(this);let u=is.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}is.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),So.remove(`image:${e}`);let d=is.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}is.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),So.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Er=class extends _s{constructor(e){super(e)}load(e,t,i,r){let s=new ai,a=new al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},xs=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Tr=class extends xs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ac=new Je,bd=new A,Ed=new A,ol=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kn,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===os||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=new A,yo=new oi,mn=new A,ys=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,yo,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,yo,mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(xo,yo,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,yo,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qn=new A,Td=new he,wd=new he,Xt=class extends ys{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*hs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ss*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*hs*Math.atan(Math.tan(.5*ss*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Td,wd),t.subVectors(wd,Td)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ss*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var kc=class extends ol{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},Bi=class extends xs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ms=class extends ys{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gc=class extends ol{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Gc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var g_=new Je,v_=new Je,__=new Je;var ns=-90,ll=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(ns,1,e,t);r.layers=this.layers,this.add(r);let s=new Xt(ns,1,e,t);s.layers=this.layers,this.add(s);let a=new Xt(ns,1,e,t);a.layers=this.layers,this.add(a);let o=new Xt(ns,1,e,t);o.layers=this.layers,this.add(o);let l=new Xt(ns,1,e,t);l.layers=this.layers,this.add(l);let c=new Xt(ns,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==os)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},cl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var x_=new A,y_=new oi,M_=new A,S_=new A,b_=new A;var E_=new A,T_=new oi,w_=new A,A_=new A;var Yh="\\[\\]\\.:\\/",Vf=new RegExp("["+Yh+"]","g"),Cc="[^"+Yh+"]",Wf="[^"+Yh.replace("\\.","")+"]",Xf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Cc)+/(WCOD+)?/.source.replace("WCOD",Wf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc)+"$"),jf=["material","materials","bones","map"],Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vf,"")}static parseTrackName(e){let t=Xf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);jf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void ke("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void Ve("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=class{constructor(n,e,t){let i=t||Ct.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray],Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);var R_=new Je;var I_=new he;var P_=new A,L_=new A,D_=new A,N_=new A,U_=new A,F_=new A,O_=new A;var B_=new A;var z_=new A,k_=new Je,G_=new Je;var H_=new A,V_=new Ee,W_=new Ee;var X_=new A,j_=new A,q_=new A;var Y_=new A,Z_=new ys;var J_=new Fi;var K_=new A;function Zh(n,e,t,i){let r=(function(s){switch(s){case Ci:case sh:return{byteLength:1,components:1};case ws:case ah:case Mn:return{byteLength:2,components:1};case fl:case gl:return{byteLength:2,components:4};case On:case ml:case zi:return{byteLength:4,components:1};case oh:case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case vl:case _l:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case nn:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Hp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Yf(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var tt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},_e={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},bn={basic:{uniforms:ui([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ui([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ui([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ui([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ui([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ee(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ui([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ui([_e.points,_e.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ui([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ui([_e.common,_e.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ui([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ui([_e.sprite,_e.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:ui([_e.common,_e.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:ui([_e.lights,_e.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};bn.physical={uniforms:ui([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Tl={r:0,b:0,g:0},Dr=new $i,Zf=new Je;function Jf(n,e,t,i,r,s){let a=new Ee(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let g=m.backgroundBlurriness>0;_=e.get(_,g)}return _}function f(m,_){m.getRGB(Tl,qh(n)),t.buffers.color.setClear(Tl.r,Tl.g,Tl.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let _=!1,g=p(m);g===null?f(a,c):g&&g.isColor&&(f(g,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,_){let g=p(_);g&&(g.isCubeTexture||g.mapping===ba)?(l===void 0&&(l=new Pe(new zt(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Lr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Dr.copy(_.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(Dr)),l.material.toneMapped=at.getTransfer(g.colorSpace)!==gt,h===g&&u===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new Pe(new li(2,2),new Ai({name:"BackgroundMaterial",uniforms:Lr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=at.getTransfer(g.colorSpace)!==gt,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Kf(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],M=[],E=[];for(let T=0;T<t;T++)v[T]=0,M[T]=0,E[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:M,attributeDivisors:E,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,M=g.length;v<M;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let M=s.newAttributes,E=s.enabledAttributes,T=s.attributeDivisors;M[g]=1,E[g]===0&&(n.enableVertexAttribArray(g),E[g]=1),T[g]!==v&&(n.vertexAttribDivisor(g,v),T[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let M=0,E=v.length;M<E;M++)v[M]!==g[M]&&(n.disableVertexAttribArray(M),v[M]=0)}function f(g,v,M,E,T,C,D){D===!0?n.vertexAttribIPointer(g,v,M,T,C):n.vertexAttribPointer(g,v,M,E,T,C)}function m(){_(),a=!0,s!==r&&(s=r,o(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,M,E,T){let C=!1,D=(function(U,R,G,W){let V=W.wireframe===!0,X=i[R.id];X===void 0&&(X={},i[R.id]=X);let k=U.isInstancedMesh===!0?U.id:0,j=X[k];j===void 0&&(j={},X[k]=j);let Y=j[G.id];Y===void 0&&(Y={},j[G.id]=Y);let Z=Y[V];return Z===void 0&&(Z=c(n.createVertexArray()),Y[V]=Z),Z})(g,E,M,v);s!==D&&(s=D,o(s.object)),C=(function(U,R,G,W){let V=s.attributes,X=R.attributes,k=0,j=G.getAttributes();for(let Y in j)if(j[Y].location>=0){let Z=V[Y],ge=X[Y];if(ge===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor)),Z===void 0||Z.attribute!==ge||ge&&Z.data!==ge.data)return!0;k++}return s.attributesNum!==k||s.index!==W})(g,E,M,T),C&&(function(U,R,G,W){let V={},X=R.attributes,k=0,j=G.getAttributes();for(let Y in j)if(j[Y].location>=0){let Z=X[Y];Z===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor));let ge={};ge.attribute=Z,Z&&Z.data&&(ge.data=Z.data),V[Y]=ge,k++}s.attributes=V,s.attributesNum=k,s.index=W})(g,E,M,T),T!==null&&e.update(T,n.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,(function(U,R,G,W){h();let V=W.attributes,X=G.getAttributes(),k=R.defaultAttributeValues;for(let j in X){let Y=X[j];if(Y.location>=0){let Z=V[j];if(Z===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){let ge=Z.normalized,Re=Z.itemSize,Le=e.get(Z);if(Le===void 0)continue;let Te=Le.buffer,xe=Le.type,ne=Le.bytesPerElement,ue=xe===n.INT||xe===n.UNSIGNED_INT||Z.gpuType===ml;if(Z.isInterleavedBufferAttribute){let fe=Z.data,Ce=fe.stride,le=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let S=0;S<Y.locationSize;S++)d(Y.location+S,fe.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let S=0;S<Y.locationSize;S++)u(Y.location+S);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let S=0;S<Y.locationSize;S++)f(Y.location+S,Re/Y.locationSize,xe,ge,Ce*ne,(le+Re/Y.locationSize*S)*ne,ue)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)d(Y.location+fe,Z.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<Y.locationSize;fe++)u(Y.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let fe=0;fe<Y.locationSize;fe++)f(Y.location+fe,Re/Y.locationSize,xe,ge,Re*ne,Re/Y.locationSize*fe*ne,ue)}}else if(k!==void 0){let ge=k[j];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Y.location,ge);break;case 3:n.vertexAttrib3fv(Y.location,ge);break;case 4:n.vertexAttrib4fv(Y.location,ge);break;default:n.vertexAttrib1fv(Y.location,ge)}}}}p()})(g,v,M,E),T!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:m,resetDefaultState:_,dispose:function(){m();for(let g in i){let v=i[g];for(let M in v){let E=v[M];for(let T in E){let C=E[T];for(let D in C)l(C[D].object),delete C[D];delete E[T]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let M in v){let E=v[M];for(let T in E){let C=E[T];for(let D in C)l(C[D].object),delete C[D];delete E[T]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let M=i[v],E=g.isInstancedMesh===!0?g.id:0,T=M[E];if(T!==void 0){for(let C in T){let D=T[C];for(let U in D)l(D[U].object),delete D[U];delete T[C]}delete M[E],Object.keys(M).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let M=i[v];for(let E in M){let T=M[E];if(T[g.id]===void 0)continue;let C=T[g.id];for(let D in C)l(C[D].object),delete C[D];delete T[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function $f(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Qf(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(ke("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===nn||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==Ci&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==zi&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function eg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new fn,o=new $e,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,p!==!0||m===null){let _=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,M=d;v!==f;++v,M+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,M=_.clippingState||null;l.value=M,M=c(p,u,v,d);for(let E=0;E!==v;++E)M[E]=t[E];_.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}var yp=[.125,.215,.35,.446,.526,.582],Ta=20,wa=new Ms,Mp=new Ee,Jh=null,Kh=0,$h=0,Qh=!1,tg=new A,Al=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=tg}=s;Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,Kh,$h),this._renderer.xr.enabled=Qh,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Mn,format:nn,colorSpace:mr,depthBuffer:!1},r=Sp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+yp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=yp[d-a+4-1]:d===0&&(f=0),l.push(f);let m=1/(p-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,E=6,T=3,C=2,D=1,U=new Float32Array(T*E*M),R=new Float32Array(C*E*M),G=new Float32Array(D*E*M);for(let V=0;V<M;V++){let X=V%3*2/3-1,k=V>2?0:-1,j=[X,k,0,X+2/3,k,0,X+2/3,k+1,0,X,k,0,X+2/3,k+1,0,X,k+1,0];U.set(j,T*E*V),R.set(v,C*E*V);let Y=[V,V,V,V,V,V];G.set(Y,D*E*V)}let W=new ct;W.setAttribute("position",new Bt(U,T)),W.setAttribute("uv",new Bt(R,C)),W.setAttribute("faceIndex",new Bt(G,D)),c.push(new Pe(W,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Ta),h=new A(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Ta,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Pe(new ct,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,r,s){let a=new Xt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Mp),c.toneMapping=en,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new zt,new ht({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(Mp),f=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[_],s.y,s.z)):g===1?(a.up.set(0,0,o[_]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[_],s.z)):(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[_]));let v=this._cubeSize;Is(r,g*v,_>2?v:0,v,v),c.setRenderTarget(r),f&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ts||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Is(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],f=3*p*(i>d-4?i-d+4:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,Is(s,f,m,3*p,2*p),r.setRenderTarget(s),r.render(o,wa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,Is(e,f,m,3*p,2*p),r.setRenderTarget(e),r.render(o,wa)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):Ta;m>Ta&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let _=[],g=0;for(let E=0;E<Ta;++E){let T=E/f,C=Math.exp(-T*T/2);_.push(C),E===0?g+=C:E<m&&(g+=2*C)}for(let E=0;E<_.length;E++)_[E]=_[E]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let M=this._sizeLods[r];Is(t,3*M*(r>v-4?r-v+4:0),4*(this._cubeSize-M),3*M,2*M),l.setRenderTarget(t),l.render(h,wa)}};function Sp(n,e,t){let i=new Ti(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bp(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ep(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zt(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:xn});s.uniforms.tEquirect.value=t;let a=new Pe(r,s),o=t.minFilter;return t.minFilter===tn&&(t.minFilter=Kt),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function ig(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===ul?o.mapping=Ts:l===dl&&(o.mapping=Cr),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===ul||h===dl,d=h===Ts||h===Cr;if(u||d){let p=t.get(c),f=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new Al(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let m=c.image;return u&&m&&m.height>0||d&&m&&(function(_){let g=0,v=6;for(let M=0;M<v;M++)_[M]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new Al(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===ul||h===dl){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new Rl(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function ng(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ia("WebGLRenderer: "+i+" extension not supported."),r}}}function rg(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let _=0,g=m.length;_<g;_+=3){let v=m[_+0],M=m[_+1],E=m[_+2];c.push(v,M,M,E,E,v)}}else{let m=u.array;d=u.version;for(let _=0,g=m.length/3-1;_<g;_+=3){let v=_+0,M=_+1,E=_+2;c.push(v,M,M,E,E,v)}}let p=new(u.count>=65535?aa:sa)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function sg(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function ag(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Ve("WebGLInfo: Unknown draw mode:",i)}}}}function og(n,e,t){let i=new WeakMap,r=new Rt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let U=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let M=a.attributes.position.count*v,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*E*4*h),C=new na(T,M,E,h);C.type=zi,C.needsUpdate=!0;let D=4*v;for(let R=0;R<h;R++){let G=m[R],W=_[R],V=g[R],X=M*E*4*R;for(let k=0;k<G.count;k++){let j=k*D;d===!0&&(r.fromBufferAttribute(G,k),T[X+j+0]=r.x,T[X+j+1]=r.y,T[X+j+2]=r.z,T[X+j+3]=0),p===!0&&(r.fromBufferAttribute(W,k),T[X+j+4]=r.x,T[X+j+5]=r.y,T[X+j+6]=r.z,T[X+j+7]=0),f===!0&&(r.fromBufferAttribute(V,k),T[X+j+8]=r.x,T[X+j+9]=r.y,T[X+j+10]=r.z,T[X+j+11]=V.itemSize===4?r.w:1)}}u={count:h,texture:C,size:new he(M,E)},i.set(a,u),a.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function lg(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var cg={[$c]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[Ar]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[nh]:"NEUTRAL_TONE_MAPPING",[th]:"CUSTOM_TONE_MAPPING"};function hg(n,e,t,i,r){let s=new Ti(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Ti(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new ct;o.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let l=new Yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pe(o,l),h=new Ms(-1,1,1,-1,0,1),u,d=null,p=null,f=!1,m=null,_=[],g=!1;this.setSize=function(v,M){s.setSize(v,M),a.setSize(v,M);for(let E=0;E<_.length;E++){let T=_[E];T.setSize&&T.setSize(v,M)}},this.setEffects=function(v){_=v,g=_.length>0&&_[0].isRenderPass===!0;let M=s.width,E=s.height;for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(M,E)}},this.begin=function(v,M){if(f||v.toneMapping===en&&_.length===0)return!1;if(m=M,M!==null){let E=M.width,T=M.height;s.width===E&&s.height===T||this.setSize(E,T)}return g===!1&&v.setRenderTarget(s),u=v.toneMapping,v.toneMapping=en,!0},this.hasRenderPass=function(){return g},this.end=function(v,M){v.toneMapping=u,f=!0;let E=s,T=a;for(let C=0;C<_.length;C++){let D=_[C];if(D.enabled!==!1&&(D.render(v,T,E,M),D.needsSwap!==!1)){let U=E;E=T,T=U}}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,l.defines={},at.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");let C=cg[p];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(c,h),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Vp=new ai,iu=new Qn(1,1),Wp=new na,Xp=new Ao,jp=new ca,Tp=[],wp=[],Ap=new Float32Array(16),Cp=new Float32Array(9),Rp=new Float32Array(4);function Ds(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Il(n,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ug(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function pg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function mg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function fg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;Rp.set(i),n.uniformMatrix2fv(this.addr,!1,Rp),qt(t,i)}}function gg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;Cp.set(i),n.uniformMatrix3fv(this.addr,!1,Cp),qt(t,i)}}function vg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;Ap.set(i),n.uniformMatrix4fv(this.addr,!1,Ap),qt(t,i)}}function _g(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function yg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Mg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Sg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Eg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Tg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function wg(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(iu.compareFunction=t.isReversedDepthBuffer()?El:bl,s=iu):s=Vp,t.setTexture2D(e||s,r)}function Ag(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xp,r)}function Cg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jp,r)}function Rg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wp,r)}function Ig(n,e){n.uniform1fv(this.addr,e)}function Pg(n,e){let t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function Lg(n,e){let t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){let t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function Ng(n,e){let t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ug(n,e){let t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fg(n,e){let t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Og(n,e){n.uniform1iv(this.addr,e)}function Bg(n,e){n.uniform2iv(this.addr,e)}function zg(n,e){n.uniform3iv(this.addr,e)}function kg(n,e){n.uniform4iv(this.addr,e)}function Gg(n,e){n.uniform1uiv(this.addr,e)}function Hg(n,e){n.uniform2uiv(this.addr,e)}function Vg(n,e){n.uniform3uiv(this.addr,e)}function Wg(n,e){n.uniform4uiv(this.addr,e)}function Xg(n,e,t){let i=this.cache,r=e.length,s=Il(t,r),a;jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?iu:Vp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function jg(n,e,t){let i=this.cache,r=e.length,s=Il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xp,s[a])}function qg(n,e,t){let i=this.cache,r=e.length,s=Il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||jp,s[a])}function Yg(n,e,t){let i=this.cache,r=e.length,s=Il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Wp,s[a])}var nu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return ug;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return fg;case 35675:return gg;case 35676:return vg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}})(t.type)}},ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Gg;case 36294:return Hg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}})(t.type)}},su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},eu=/(\w+)(\])?(\[|\.)?/g;function Ip(n,e){n.seq.push(e),n.map[e.id]=e}function Zg(n,e,t){let i=n.name,r=i.length;for(eu.lastIndex=0;;){let s=eu.exec(i),a=eu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Ip(t,c===void 0?new nu(o,n,e):new ru(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new su(o),Ip(t,h)),t=h}}}var Ps=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Zg(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Pp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Jg=0,Lp=new $e;function Dp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function Kg(n,e){let t=(function(i){at._getMatrix(Lp,at.workingColorSpace,i);let r=`mat3( ${Lp.elements.map(s=>s.toFixed(4))} )`;switch(at.getTransfer(i)){case ta:return[r,"LinearTransferOETF"];case gt:return[r,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $g={[$c]:"Linear",[Qc]:"Reinhard",[eh]:"Cineon",[Ar]:"ACESFilmic",[ih]:"AgX",[nh]:"Neutral",[th]:"Custom"};function Qg(n,e){let t=$g[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wl=new A;function e0(){return at.getLuminanceCoefficients(wl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${wl.x.toFixed(4)}, ${wl.y.toFixed(4)}, ${wl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aa(n){return n!==""}function Np(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Up(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(t0,n0)}var i0=new Map;function n0(n,e){let t=tt[e];if(t===void 0){let i=i0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=tt[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return au(t)}var r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(n){return n.replace(r0,s0)}function s0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Op(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var a0={[Sa]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"},o0={[Ts]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"},l0={[Cr]:"ENVMAP_MODE_REFRACTION"},c0={[Jd]:"ENVMAP_BLENDING_MULTIPLY",[Kd]:"ENVMAP_BLENDING_MIX",[$d]:"ENVMAP_BLENDING_ADD"};function h0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(W){return a0[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(W){return W.envMap===!1?"ENVMAP_TYPE_CUBE":o0[W.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(W){return W.envMap===!1?"ENVMAP_MODE_REFLECTION":l0[W.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(W){return W.envMap===!1?"ENVMAP_BLENDING_NONE":c0[W.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(W){let V=W.envMapCubeUVHeight;if(V===null)return null;let X=Math.log2(V)-2,k=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:k,maxMip:X}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)})(t),f=(function(W){let V=[];for(let X in W){let k=W[X];k!==!1&&V.push("#define "+X+" "+k)}return V.join(`
`)})(s),m=r.createProgram(),_,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Aa).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Aa).join(`
`),g.length>0&&(g+=`
`)):(_=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),g=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?tt.tonemapping_pars_fragment:"",t.toneMapping!==en?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Kg("linearToOutputTexel",t.outputColorSpace),e0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=au(a),a=Np(a,t),a=Up(a,t),o=au(o),o=Np(o,t),o=Up(o,t),a=Fp(a),o=Fp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=v+_+a,E=v+g+o,T=Pp(r,r.VERTEX_SHADER,M),C=Pp(r,r.FRAGMENT_SHADER,E);function D(W){if(n.debug.checkShaderErrors){let V=r.getProgramInfoLog(m)||"",X=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(C)||"",j=V.trim(),Y=X.trim(),Z=k.trim(),ge=!0,Re=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(ge=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,C);else{let Le=Dp(r,T,"vertex"),Te=Dp(r,C,"fragment");Ve("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+j+`
`+Le+`
`+Te)}else j!==""?ke("WebGLProgram: Program Info Log:",j):Y!==""&&Z!==""||(Re=!1);Re&&(W.diagnostics={runnable:ge,programLog:j,vertexShader:{log:Y,prefix:_},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(T),r.deleteShader(C),U=new Ps(r,m),R=(function(V,X){let k={},j=V.getProgramParameter(X,V.ACTIVE_ATTRIBUTES);for(let Y=0;Y<j;Y++){let Z=V.getActiveAttrib(X,Y),ge=Z.name,Re=1;Z.type===V.FLOAT_MAT2&&(Re=2),Z.type===V.FLOAT_MAT3&&(Re=3),Z.type===V.FLOAT_MAT4&&(Re=4),k[ge]={type:Z.type,location:V.getAttribLocation(X,ge),locationSize:Re}}return k})(r,m)}let U,R;r.attachShader(m,T),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return U===void 0&&D(this),U},this.getAttributes=function(){return R===void 0&&D(this),R};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(m,37297)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var u0=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lu(e),t.set(e,i)),i}},lu=class{constructor(e){this.id=u0++,this.code=e,this.usedTimes=0}};function d0(n,e,t,i,r,s){let a=new ra,o=new ou,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,v,M){let E=v.fog,T=M.geometry,C=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,D=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,U=e.get(m.envMap||C,D),R=U&&U.mapping===ba?U.image.height:null,G=p[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&ke("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let W=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,V=W!==void 0?W.length:0,X,k,j,Y,Z=0;if(T.morphAttributes.position!==void 0&&(Z=1),T.morphAttributes.normal!==void 0&&(Z=2),T.morphAttributes.color!==void 0&&(Z=3),G){let ot=bn[G];X=ot.vertexShader,k=ot.fragmentShader}else X=m.vertexShader,k=m.fragmentShader,o.update(m),j=o.getVertexShaderID(m),Y=o.getFragmentShaderID(m);let ge=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Le=M.isInstancedMesh===!0,Te=M.isBatchedMesh===!0,xe=!!m.map,ne=!!m.matcap,ue=!!U,fe=!!m.aoMap,Ce=!!m.lightMap,le=!!m.bumpMap,S=!!m.normalMap,b=!!m.displacementMap,B=!!m.emissiveMap,L=!!m.metalnessMap,y=!!m.roughnessMap,I=m.anisotropy>0,F=m.clearcoat>0,z=m.dispersion>0,J=m.iridescence>0,$=m.sheen>0,q=m.transmission>0,re=I&&!!m.anisotropyMap,ie=F&&!!m.clearcoatMap,oe=F&&!!m.clearcoatNormalMap,se=F&&!!m.clearcoatRoughnessMap,pe=J&&!!m.iridescenceMap,Be=J&&!!m.iridescenceThicknessMap,Ke=$&&!!m.sheenColorMap,rt=$&&!!m.sheenRoughnessMap,nt=!!m.specularMap,Se=!!m.specularColorMap,je=!!m.specularIntensityMap,st=q&&!!m.transmissionMap,It=q&&!!m.thicknessMap,ye=!!m.gradientMap,Xe=!!m.alphaMap,Qe=m.alphaTest>0,an=!!m.alphaHash,on=!!m.extensions,Ye=en;m.toneMapped&&(ge!==null&&ge.isXRRenderTarget!==!0||(Ye=n.toneMapping));let mt={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:X,fragmentShader:k,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:Y,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:Te,batchingColor:Te&&M._colorsTexture!==null,instancing:Le,instancingColor:Le&&M.instanceColor!==null,instancingMorph:Le&&M.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:mr,alphaToCoverage:!!m.alphaToCoverage,map:xe,matcap:ne,envMap:ue,envMapMode:ue&&U.mapping,envMapCubeUVHeight:R,aoMap:fe,lightMap:Ce,bumpMap:le,normalMap:S,displacementMap:b,emissiveMap:B,normalMapObjectSpace:S&&m.normalMapType===np,normalMapTangentSpace:S&&m.normalMapType===ip,metalnessMap:L,roughnessMap:y,anisotropy:I,anisotropyMap:re,clearcoat:F,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:se,dispersion:z,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Be,sheen:$,sheenColorMap:Ke,sheenRoughnessMap:rt,specularMap:nt,specularColorMap:Se,specularIntensityMap:je,transmission:q,transmissionMap:st,thicknessMap:It,gradientMap:ye,opaque:m.transparent===!1&&m.blending===wr&&m.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Qe,alphaHash:an,combine:m.combine,mapUv:xe&&f(m.map.channel),aoMapUv:fe&&f(m.aoMap.channel),lightMapUv:Ce&&f(m.lightMap.channel),bumpMapUv:le&&f(m.bumpMap.channel),normalMapUv:S&&f(m.normalMap.channel),displacementMapUv:b&&f(m.displacementMap.channel),emissiveMapUv:B&&f(m.emissiveMap.channel),metalnessMapUv:L&&f(m.metalnessMap.channel),roughnessMapUv:y&&f(m.roughnessMap.channel),anisotropyMapUv:re&&f(m.anisotropyMap.channel),clearcoatMapUv:ie&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(m.sheenRoughnessMap.channel),specularMapUv:nt&&f(m.specularMap.channel),specularColorMapUv:Se&&f(m.specularColorMap.channel),specularIntensityMapUv:je&&f(m.specularIntensityMap.channel),transmissionMapUv:st&&f(m.transmissionMap.channel),thicknessMapUv:It&&f(m.thicknessMap.channel),alphaMapUv:Xe&&f(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(S||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!T.attributes.uv&&(xe||Xe),fog:!!E,useFog:m.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||T.attributes.normal===void 0&&S===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:M.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Z,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:xe&&m.map.isVideoTexture===!0&&at.getTransfer(m.map.colorSpace)===gt,decodeVideoTextureEmissive:B&&m.emissiveMap.isVideoTexture===!0&&at.getTransfer(m.emissiveMap.colorSpace)===gt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===hi,flipSided:m.side===vi,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:on&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(on&&m.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(_,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),g.push(a.mask)})(_,m),_.push(n.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=p[m.type],g;if(_){let v=bn[_];g=_p.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g=h.get(_);return g!==void 0?++g.usedTimes:(g=new h0(n,_,m,r),c.push(g),h.set(_,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=c.indexOf(m);c[_]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function p0(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function m0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zp(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||m0),i.length>1&&i.sort(l||Bp),r.length>1&&r.sort(l||Bp)}}}function f0(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new zp,n.set(e,[r])):t>=i.length?(r=new zp,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function g0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ee};break;case"SpotLight":t={position:new A,direction:new A,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new A,halfWidth:new A,halfHeight:new A}}return n[e.id]=t,t}}}var v0=0;function _0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x0(n){let e=new g0,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let r=new A,s=new Je,a=new Je;return{setup:function(o){let l=0,c=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,_=0,g=0,v=0,M=0,E=0,T=0;o.sort(_0);for(let D=0,U=o.length;D<U;D++){let R=o[D],G=R.color,W=R.intensity,V=R.distance,X=null;if(R.shadow&&R.shadow.map&&(X=R.shadow.map.texture.format===Cs?R.shadow.map.texture:R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)l+=G.r*W,c+=G.g*W,h+=G.b*W;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],W);T++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,Y=t.get(R);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=X,i.directionalShadowMatrix[u]=R.shadow.matrix,_++}i.directional[u]=k,u++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(G).multiplyScalar(W),k.distance=V,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[p]=k;let j=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,j.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[p]=j.matrix,R.castShadow){let Y=t.get(R);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=X,v++}p++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(G).multiplyScalar(W),k.halfWidth.set(.5*R.width,0,0),k.halfHeight.set(0,.5*R.height,0),i.rectArea[f]=k,f++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let j=R.shadow,Y=t.get(R);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=X,i.pointShadowMatrix[d]=R.shadow.matrix,g++}i.point[d]=k,d++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(W),k.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[m]=k,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let C=i.hash;C.directionalLength===u&&C.pointLength===d&&C.spotLength===p&&C.rectAreaLength===f&&C.hemiLength===m&&C.numDirectionalShadows===_&&C.numPointShadows===g&&C.numSpotShadows===v&&C.numSpotMaps===M&&C.numLightProbes===T||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,C.directionalLength=u,C.pointLength=d,C.spotLength=p,C.rectAreaLength=f,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=g,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=T,i.version=v0++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let m=0,_=o.length;m<_;m++){let g=o[m];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function kp(n){let e=new x0(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function y0(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new kp(n),e.set(t,[s])):i>=r.length?(s=new kp(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var M0=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],S0=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Gp=new Je,Ca=new A,tu=new A;function b0(n,e,t){let i=new Kn,r=new he,s=new he,a=new Rt,o=new Zo,l=new Jo,c={},h=t.maxTextureSize,u={[bs]:vi,[vi]:bs,[hi]:hi},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ct;f.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Pe(f,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let g=this.type;function v(C,D){let U=e.update(m);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ti(r.x,r.y,{format:Cs,type:Mn})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,U,d,m,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,U,p,m,null)}function M(C,D,U,R){let G=null,W=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)G=W;else if(G=U.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=G.uuid,X=D.uuid,k=c[V];k===void 0&&(k={},c[V]=k);let j=k[X];j===void 0&&(j=G.clone(),k[X]=j,D.addEventListener("dispose",T)),G=j}return G.visible=D.visible,G.wireframe=D.wireframe,G.side=R===Ss?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:u[D.side],G.alphaMap=D.alphaMap,G.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,G.map=D.map,G.clipShadows=D.clipShadows,G.clippingPlanes=D.clippingPlanes,G.clipIntersection=D.clipIntersection,G.displacementMap=D.displacementMap,G.displacementScale=D.displacementScale,G.displacementBias=D.displacementBias,G.wireframeLinewidth=D.wireframeLinewidth,G.linewidth=D.linewidth,U.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(n.properties.get(G).light=U),G}function E(C,D,U,R,G){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===Ss)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let V=e.update(C),X=C.material;if(Array.isArray(X)){let k=V.groups;for(let j=0,Y=k.length;j<Y;j++){let Z=k[j],ge=X[Z.materialIndex];if(ge&&ge.visible){let Re=M(C,ge,R,G);C.onBeforeShadow(n,C,D,U,V,Re,Z),n.renderBufferDirect(U,null,V,Re,C,Z),C.onAfterShadow(n,C,D,U,V,Re,Z)}}}else if(X.visible){let k=M(C,X,R,G);C.onBeforeShadow(n,C,D,U,V,k,null),n.renderBufferDirect(U,null,V,k,C,null),C.onAfterShadow(n,C,D,U,V,k,null)}}let W=C.children;for(let V=0,X=W.length;V<X;V++)E(W[V],D,U,R,G)}function T(C){C.target.removeEventListener("dispose",T);for(let D in c){let U=c[D],R=C.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}this.render=function(C,D,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;this.type===Rd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sa);let R=n.getRenderTarget(),G=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),V=n.state;V.setBlending(xn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let X=g!==this.type;X&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(j=>j.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,j=C.length;k<j;k++){let Y=C[k],Z=Y.shadow;if(Z===void 0){ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let ge=Z.getFrameExtents();r.multiply(ge),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,Z.mapSize.y=s.y));let Re=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Re,Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ss){if(Y.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ti(r.x,r.y,{format:Cs,type:Mn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new Qn(r.x,r.y,zi),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=nr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ui,Z.map.depthTexture.magFilter=Ui}else Y.isPointLight?(Z.map=new Rl(r.x),Z.map.depthTexture=new Po(r.x,On)):(Z.map=new Ti(r.x,r.y),Z.map.depthTexture=new Qn(r.x,r.y,On)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=nr,this.type===Sa?(Z.map.depthTexture.compareFunction=Re?El:bl,Z.map.depthTexture.minFilter=Kt,Z.map.depthTexture.magFilter=Kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ui,Z.map.depthTexture.magFilter=Ui);Z.camera.updateProjectionMatrix()}let Le=Z.map.isWebGLCubeRenderTarget?6:1;for(let Te=0;Te<Le;Te++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(Z.map),n.clear());let xe=Z.getViewport(Te);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),V.viewport(a)}if(Y.isPointLight){let xe=Z.camera,ne=Z.matrix,ue=Y.distance||xe.far;ue!==xe.far&&(xe.far=ue,xe.updateProjectionMatrix()),Ca.setFromMatrixPosition(Y.matrixWorld),xe.position.copy(Ca),tu.copy(xe.position),tu.add(M0[Te]),xe.up.copy(S0[Te]),xe.lookAt(tu),xe.updateMatrixWorld(),ne.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Gp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Gp,xe.coordinateSystem,xe.reversedDepth)}else Z.updateMatrices(Y);i=Z.getFrustum(),E(D,U,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===Ss&&v(Z,U),Z.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(R,G,W)}}function E0(n,e){let t=new function(){let y=!1,I=new Rt,F=null,z=new Rt(0,0,0,0);return{setMask:function(J){F===J||y||(n.colorMask(J,J,J,J),F=J)},setLocked:function(J){y=J},setClear:function(J,$,q,re,ie){ie===!0&&(J*=re,$*=re,q*=re),I.set(J,$,q,re),z.equals(I)===!1&&(n.clearColor(J,$,q,re),z.copy(I))},reset:function(){y=!1,F=null,z.set(-1,0,0,0)}}},i=new function(){let y=!1,I=!1,F=null,z=null,J=null;return{setReversed:function($){if(I!==$){let q=e.get("EXT_clip_control");$?q.clipControlEXT(q.LOWER_LEFT_EXT,q.ZERO_TO_ONE_EXT):q.clipControlEXT(q.LOWER_LEFT_EXT,q.NEGATIVE_ONE_TO_ONE_EXT),I=$;let re=J;J=null,this.setClear(re)}},getReversed:function(){return I},setTest:function($){$?ue(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function($){F===$||y||(n.depthMask($),F=$)},setFunc:function($){if(I&&($=pp[$]),z!==$){switch($){case Xc:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case qc:n.depthFunc(n.LESS);break;case hl:n.depthFunc(n.LEQUAL);break;case Yc:n.depthFunc(n.EQUAL);break;case Zc:n.depthFunc(n.GEQUAL);break;case Jc:n.depthFunc(n.GREATER);break;case Kc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=$}},setLocked:function($){y=$},setClear:function($){J!==$&&(J=$,I&&($=1-$),n.clearDepth($))},reset:function(){y=!1,F=null,z=null,J=null,I=!1}}},r=new function(){let y=!1,I=null,F=null,z=null,J=null,$=null,q=null,re=null,ie=null;return{setTest:function(oe){y||(oe?ue(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(oe){I===oe||y||(n.stencilMask(oe),I=oe)},setFunc:function(oe,se,pe){F===oe&&z===se&&J===pe||(n.stencilFunc(oe,se,pe),F=oe,z=se,J=pe)},setOp:function(oe,se,pe){$===oe&&q===se&&re===pe||(n.stencilOp(oe,se,pe),$=oe,q=se,re=pe)},setLocked:function(oe){y=oe},setClear:function(oe){ie!==oe&&(n.clearStencil(oe),ie=oe)},reset:function(){y=!1,I=null,F=null,z=null,J=null,$=null,q=null,re=null,ie=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,_=null,g=null,v=null,M=null,E=new Ee(0,0,0),T=0,C=!1,D=null,U=null,R=null,G=null,W=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,k=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=k>=2);let Y=null,Z={},ge=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Le=new Rt().fromArray(ge),Te=new Rt().fromArray(Re);function xe(y,I,F,z){let J=new Uint8Array(4),$=n.createTexture();n.bindTexture(y,$),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let q=0;q<F;q++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(I,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(I+q,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return $}let ne={};function ue(y){o[y]!==!0&&(n.enable(y),o[y]=!0)}function fe(y){o[y]!==!1&&(n.disable(y),o[y]=!1)}ne[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ue(n.DEPTH_TEST),i.setFunc(hl),b(!1),B(Hc),ue(n.CULL_FACE),S(xn);let Ce={[Es]:n.FUNC_ADD,[Pd]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};Ce[Dd]=n.MIN,Ce[Nd]=n.MAX;let le={[Ud]:n.ZERO,[Fd]:n.ONE,[Od]:n.SRC_COLOR,[zd]:n.SRC_ALPHA,[Xd]:n.SRC_ALPHA_SATURATE,[Vd]:n.DST_COLOR,[Gd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[kd]:n.ONE_MINUS_SRC_ALPHA,[Wd]:n.ONE_MINUS_DST_COLOR,[Hd]:n.ONE_MINUS_DST_ALPHA,[jd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[Yd]:n.CONSTANT_ALPHA,[Zd]:n.ONE_MINUS_CONSTANT_ALPHA};function S(y,I,F,z,J,$,q,re,ie,oe){if(y!==xn){if(d===!1&&(ue(n.BLEND),d=!0),y===Id)J=J||I,$=$||F,q=q||z,I===f&&J===g||(n.blendEquationSeparate(Ce[I],Ce[J]),f=I,g=J),F===m&&z===_&&$===v&&q===M||(n.blendFuncSeparate(le[F],le[z],le[$],le[q]),m=F,_=z,v=$,M=q),re.equals(E)!==!1&&ie===T||(n.blendColor(re.r,re.g,re.b,ie),E.copy(re),T=ie),p=y,C=!1;else if(y!==p||oe!==C){if(f===Es&&g===Es||(n.blendEquation(n.FUNC_ADD),f=Es,g=Es),oe)switch(y){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",y)}else switch(y){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",y)}m=null,_=null,v=null,M=null,E.set(0,0,0),T=0,p=y,C=oe}}else d===!0&&(fe(n.BLEND),d=!1)}function b(y){D!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),D=y)}function B(y){y!==Ad?(ue(n.CULL_FACE),y!==U&&(y===Hc?n.cullFace(n.BACK):y===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),U=y}function L(y,I,F){y?(ue(n.POLYGON_OFFSET_FILL),G===I&&W===F||(G=I,W=F,i.getReversed()&&(I=-I),n.polygonOffset(I,F))):fe(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:ue,disable:fe,bindFramebuffer:function(y,I){return l[y]!==I&&(n.bindFramebuffer(y,I),l[y]=I,y===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=I),y===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(y,I){let F=h,z=!1;if(y){F=c.get(I),F===void 0&&(F=[],c.set(I,F));let J=y.textures;if(F.length!==J.length||F[0]!==n.COLOR_ATTACHMENT0){for(let $=0,q=J.length;$<q;$++)F[$]=n.COLOR_ATTACHMENT0+$;F.length=J.length,z=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,z=!0);z&&n.drawBuffers(F)},useProgram:function(y){return u!==y&&(n.useProgram(y),u=y,!0)},setBlending:S,setMaterial:function(y,I){y.side===hi?fe(n.CULL_FACE):ue(n.CULL_FACE);let F=y.side===vi;I&&(F=!F),b(F),y.blending===wr&&y.transparent===!1?S(xn):S(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let z=y.stencilWrite;r.setTest(z),z&&(r.setMask(y.stencilWriteMask),r.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),r.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),L(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:B,setLineWidth:function(y){y!==R&&(X&&n.lineWidth(y),R=y)},setPolygonOffset:L,setScissorTest:function(y){y?ue(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=n.TEXTURE0+V-1),Y!==y&&(n.activeTexture(y),Y=y)},bindTexture:function(y,I,F){F===void 0&&(F=Y===null?n.TEXTURE0+V-1:Y);let z=Z[F];z===void 0&&(z={type:void 0,texture:void 0},Z[F]=z),z.type===y&&z.texture===I||(Y!==F&&(n.activeTexture(F),Y=F),n.bindTexture(y,I||ne[y]),z.type=y,z.texture=I)},unbindTexture:function(){let y=Z[Y];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(y){Ve("WebGLState:",y)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(y){Ve("WebGLState:",y)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(y){Ve("WebGLState:",y)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(y){Ve("WebGLState:",y)}},updateUBOMapping:function(y,I){let F=a.get(I);F===void 0&&(F=new WeakMap,a.set(I,F));let z=F.get(y);z===void 0&&(z=n.getUniformBlockIndex(I,y.name),F.set(y,z))},uniformBlockBinding:function(y,I){let F=a.get(I).get(y);s.get(I)!==F&&(n.uniformBlockBinding(I,F,y.__bindingPointIndex),s.set(I,F))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(y){Ve("WebGLState:",y)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(y){Ve("WebGLState:",y)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(y){Ve("WebGLState:",y)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(y){Ve("WebGLState:",y)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(y){Ve("WebGLState:",y)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(y){Ve("WebGLState:",y)}},scissor:function(y){Le.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),Le.copy(y))},viewport:function(y){Te.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),Te.copy(y))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Y=null,Z={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,_=null,g=null,v=null,M=null,E=new Ee(0,0,0),T=0,C=!1,D=null,U=null,R=null,G=null,W=null,Le.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function T0(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(S,b){return p?new OffscreenCanvas(S,b):ls("canvas")}function m(S,b,B){let L=1,y=le(S);if((y.width>B||y.height>B)&&(L=B/Math.max(y.width,y.height)),L<1){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let I=Math.floor(L*y.width),F=Math.floor(L*y.height);u===void 0&&(u=f(I,F));let z=b?f(I,F):u;return z.width=I,z.height=F,z.getContext("2d").drawImage(S,0,0,I,F),ke("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+I+"x"+F+")."),z}return"data"in S&&ke("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),S}return S}function _(S){return S.generateMipmaps}function g(S){n.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,b,B,L,y=!1){if(S!==null){if(n[S]!==void 0)return n[S];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let I=b;if(b===n.RED&&(B===n.FLOAT&&(I=n.R32F),B===n.HALF_FLOAT&&(I=n.R16F),B===n.UNSIGNED_BYTE&&(I=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.R8UI),B===n.UNSIGNED_SHORT&&(I=n.R16UI),B===n.UNSIGNED_INT&&(I=n.R32UI),B===n.BYTE&&(I=n.R8I),B===n.SHORT&&(I=n.R16I),B===n.INT&&(I=n.R32I)),b===n.RG&&(B===n.FLOAT&&(I=n.RG32F),B===n.HALF_FLOAT&&(I=n.RG16F),B===n.UNSIGNED_BYTE&&(I=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.RG8UI),B===n.UNSIGNED_SHORT&&(I=n.RG16UI),B===n.UNSIGNED_INT&&(I=n.RG32UI),B===n.BYTE&&(I=n.RG8I),B===n.SHORT&&(I=n.RG16I),B===n.INT&&(I=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.RGB8UI),B===n.UNSIGNED_SHORT&&(I=n.RGB16UI),B===n.UNSIGNED_INT&&(I=n.RGB32UI),B===n.BYTE&&(I=n.RGB8I),B===n.SHORT&&(I=n.RGB16I),B===n.INT&&(I=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(I=n.RGBA16UI),B===n.UNSIGNED_INT&&(I=n.RGBA32UI),B===n.BYTE&&(I=n.RGBA8I),B===n.SHORT&&(I=n.RGBA16I),B===n.INT&&(I=n.RGBA32I)),b===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(I=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(I=n.R11F_G11F_B10F)),b===n.RGBA){let F=y?ta:at.getTransfer(L);B===n.FLOAT&&(I=n.RGBA32F),B===n.HALF_FLOAT&&(I=n.RGBA16F),B===n.UNSIGNED_BYTE&&(I=F===gt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return I!==n.R16F&&I!==n.R32F&&I!==n.RG16F&&I!==n.RG32F&&I!==n.RGBA16F&&I!==n.RGBA32F||e.get("EXT_color_buffer_float"),I}function E(S,b){let B;return S?b===null||b===On||b===As?B=n.DEPTH24_STENCIL8:b===zi?B=n.DEPTH32F_STENCIL8:b===ws&&(B=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===On||b===As?B=n.DEPTH_COMPONENT24:b===zi?B=n.DEPTH_COMPONENT32F:b===ws&&(B=n.DEPTH_COMPONENT16),B}function T(S,b){return _(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ui&&S.minFilter!==Kt?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function C(S){let b=S.target;b.removeEventListener("dispose",C),(function(B){let L=i.get(B);if(L.__webglInit===void 0)return;let y=B.source,I=d.get(y);if(I){let F=I[L.__cacheKey];F.usedTimes--,F.usedTimes===0&&U(B),Object.keys(I).length===0&&d.delete(y)}i.remove(B)})(b),b.isVideoTexture&&h.delete(b)}function D(S){let b=S.target;b.removeEventListener("dispose",D),(function(B){let L=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(L.__webglFramebuffer[I]))for(let F=0;F<L.__webglFramebuffer[I].length;F++)n.deleteFramebuffer(L.__webglFramebuffer[I][F]);else n.deleteFramebuffer(L.__webglFramebuffer[I]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[I])}else{if(Array.isArray(L.__webglFramebuffer))for(let I=0;I<L.__webglFramebuffer.length;I++)n.deleteFramebuffer(L.__webglFramebuffer[I]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let I=0;I<L.__webglColorRenderbuffer.length;I++)L.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[I]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let y=B.textures;for(let I=0,F=y.length;I<F;I++){let z=i.get(y[I]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(y[I])}i.remove(B)})(b)}function U(S){let b=i.get(S);n.deleteTexture(b.__webglTexture);let B=S.source;delete d.get(B)[b.__cacheKey],a.memory.textures--}let R=0;function G(S,b){let B=i.get(S);if(S.isVideoTexture&&(function(L){let y=a.render.frame;h.get(L)!==y&&(h.set(L,y),L.update())})(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let L=S.image;if(L===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else{if(L.complete!==!1)return void Z(B,S,b);ke("WebGLRenderer: Texture marked for update but image is incomplete")}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}let W={[pr]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},V={[Ui]:n.NEAREST,[Qd]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[tn]:n.LINEAR_MIPMAP_LINEAR},X={[rp]:n.NEVER,[cp]:n.ALWAYS,[sp]:n.LESS,[bl]:n.LEQUAL,[ap]:n.EQUAL,[El]:n.GEQUAL,[op]:n.GREATER,[lp]:n.NOTEQUAL};function k(S,b){if(b.type!==zi||e.has("OES_texture_float_linear")!==!1||b.magFilter!==Kt&&b.magFilter!==pl&&b.magFilter!==Ea&&b.magFilter!==tn&&b.minFilter!==Kt&&b.minFilter!==pl&&b.minFilter!==Ea&&b.minFilter!==tn||ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,W[b.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,W[b.wrapT]),S!==n.TEXTURE_3D&&S!==n.TEXTURE_2D_ARRAY||n.texParameteri(S,n.TEXTURE_WRAP_R,W[b.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,V[b.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ui||b.minFilter!==Ea&&b.minFilter!==tn||b.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function j(S,b){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",C));let L=b.source,y=d.get(L);y===void 0&&(y={},d.set(L,y));let I=(function(F){let z=[];return z.push(F.wrapS),z.push(F.wrapT),z.push(F.wrapR||0),z.push(F.magFilter),z.push(F.minFilter),z.push(F.anisotropy),z.push(F.internalFormat),z.push(F.format),z.push(F.type),z.push(F.generateMipmaps),z.push(F.premultiplyAlpha),z.push(F.flipY),z.push(F.unpackAlignment),z.push(F.colorSpace),z.join()})(b);if(I!==S.__cacheKey){y[I]===void 0&&(y[I]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),y[I].usedTimes++;let F=y[S.__cacheKey];F!==void 0&&(y[S.__cacheKey].usedTimes--,F.usedTimes===0&&U(b)),S.__cacheKey=I,S.__webglTexture=y[I].texture}return B}function Y(S,b,B){return Math.floor(Math.floor(S/B)/b)}function Z(S,b,B){let L=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(L=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(L=n.TEXTURE_3D);let y=j(S,b),I=b.source;t.bindTexture(L,S.__webglTexture,n.TEXTURE0+B);let F=i.get(I);if(I.version!==F.__version||y===!0){t.activeTexture(n.TEXTURE0+B);let z=at.getPrimaries(at.workingColorSpace),J=b.colorSpace===Ir?null:at.getPrimaries(b.colorSpace),$=b.colorSpace===Ir||z===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let q=m(b.image,!1,r.maxTextureSize);q=Ce(b,q);let re=s.convert(b.format,b.colorSpace),ie=s.convert(b.type),oe,se=M(b.internalFormat,re,ie,b.colorSpace,b.isVideoTexture);k(L,b);let pe=b.mipmaps,Be=b.isVideoTexture!==!0,Ke=F.__version===void 0||y===!0,rt=I.dataReady,nt=T(b,q);if(b.isDepthTexture)se=E(b.format===Rr,b.type),Ke&&(Be?t.texStorage2D(n.TEXTURE_2D,1,se,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,se,q.width,q.height,0,re,ie,null));else if(b.isDataTexture)if(pe.length>0){Be&&Ke&&t.texStorage2D(n.TEXTURE_2D,nt,se,pe[0].width,pe[0].height);for(let Se=0,je=pe.length;Se<je;Se++)oe=pe[Se],Be?rt&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,oe.width,oe.height,re,ie,oe.data):t.texImage2D(n.TEXTURE_2D,Se,se,oe.width,oe.height,0,re,ie,oe.data);b.generateMipmaps=!1}else Be?(Ke&&t.texStorage2D(n.TEXTURE_2D,nt,se,q.width,q.height),rt&&(function(Se,je,st,It){let ye=Se.updateRanges;if(ye.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,je.width,je.height,st,It,je.data);else{ye.sort((Ye,mt)=>Ye.start-mt.start);let Xe=0;for(let Ye=1;Ye<ye.length;Ye++){let mt=ye[Xe],ot=ye[Ye],Ii=mt.start+mt.count,O=Y(ot.start,je.width,4),Gi=Y(mt.start,je.width,4);ot.start<=Ii+1&&O===Gi&&Y(ot.start+ot.count-1,je.width,4)===O?mt.count=Math.max(mt.count,ot.start+ot.count-mt.start):(++Xe,ye[Xe]=ot)}ye.length=Xe+1;let Qe=n.getParameter(n.UNPACK_ROW_LENGTH),an=n.getParameter(n.UNPACK_SKIP_PIXELS),on=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,je.width);for(let Ye=0,mt=ye.length;Ye<mt;Ye++){let ot=ye[Ye],Ii=Math.floor(ot.start/4),O=Math.ceil(ot.count/4),Gi=Ii%je.width,Hi=Math.floor(Ii/je.width),Mt=O;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Gi),n.pixelStorei(n.UNPACK_SKIP_ROWS,Hi),t.texSubImage2D(n.TEXTURE_2D,0,Gi,Hi,Mt,1,st,It,je.data)}Se.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Qe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,an),n.pixelStorei(n.UNPACK_SKIP_ROWS,on)}})(b,q,re,ie)):t.texImage2D(n.TEXTURE_2D,0,se,q.width,q.height,0,re,ie,q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,se,pe[0].width,pe[0].height,q.depth);for(let Se=0,je=pe.length;Se<je;Se++)if(oe=pe[Se],b.format!==nn)if(re!==null)if(Be){if(rt)if(b.layerUpdates.size>0){let st=Zh(oe.width,oe.height,b.format,b.type);for(let It of b.layerUpdates){let ye=oe.data.subarray(It*st/oe.data.BYTES_PER_ELEMENT,(It+1)*st/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,It,oe.width,oe.height,1,re,ye)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,oe.width,oe.height,q.depth,re,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,se,oe.width,oe.height,q.depth,0,oe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?rt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,oe.width,oe.height,q.depth,re,ie,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,se,oe.width,oe.height,q.depth,0,re,ie,oe.data)}else{Be&&Ke&&t.texStorage2D(n.TEXTURE_2D,nt,se,pe[0].width,pe[0].height);for(let Se=0,je=pe.length;Se<je;Se++)oe=pe[Se],b.format!==nn?re!==null?Be?rt&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,oe.width,oe.height,re,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,se,oe.width,oe.height,0,oe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?rt&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,oe.width,oe.height,re,ie,oe.data):t.texImage2D(n.TEXTURE_2D,Se,se,oe.width,oe.height,0,re,ie,oe.data)}else if(b.isDataArrayTexture)if(Be){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,se,q.width,q.height,q.depth),rt)if(b.layerUpdates.size>0){let Se=Zh(q.width,q.height,b.format,b.type);for(let je of b.layerUpdates){let st=q.data.subarray(je*Se/q.data.BYTES_PER_ELEMENT,(je+1)*Se/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,q.width,q.height,1,re,ie,st)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,re,ie,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,q.width,q.height,q.depth,0,re,ie,q.data);else if(b.isData3DTexture)Be?(Ke&&t.texStorage3D(n.TEXTURE_3D,nt,se,q.width,q.height,q.depth),rt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,re,ie,q.data)):t.texImage3D(n.TEXTURE_3D,0,se,q.width,q.height,q.depth,0,re,ie,q.data);else if(b.isFramebufferTexture){if(Ke)if(Be)t.texStorage2D(n.TEXTURE_2D,nt,se,q.width,q.height);else{let Se=q.width,je=q.height;for(let st=0;st<nt;st++)t.texImage2D(n.TEXTURE_2D,st,se,Se,je,0,re,ie,null),Se>>=1,je>>=1}}else if(pe.length>0){if(Be&&Ke){let Se=le(pe[0]);t.texStorage2D(n.TEXTURE_2D,nt,se,Se.width,Se.height)}for(let Se=0,je=pe.length;Se<je;Se++)oe=pe[Se],Be?rt&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,re,ie,oe):t.texImage2D(n.TEXTURE_2D,Se,se,re,ie,oe);b.generateMipmaps=!1}else if(Be){if(Ke){let Se=le(q);t.texStorage2D(n.TEXTURE_2D,nt,se,Se.width,Se.height)}rt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,ie,q)}else t.texImage2D(n.TEXTURE_2D,0,se,re,ie,q);_(b)&&g(L),F.__version=I.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function ge(S,b,B,L,y,I){let F=s.convert(B.format,B.colorSpace),z=s.convert(B.type),J=M(B.internalFormat,F,z,B.colorSpace),$=i.get(b),q=i.get(B);if(q.__renderTarget=b,!$.__hasExternalTextures){let re=Math.max(1,b.width>>I),ie=Math.max(1,b.height>>I);y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?t.texImage3D(y,I,J,re,ie,b.depth,0,F,z,null):t.texImage2D(y,I,J,re,ie,0,F,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),fe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,L,y,q.__webglTexture,0,ue(b)):(y===n.TEXTURE_2D||y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,L,y,q.__webglTexture,I),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(S,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),b.depthBuffer){let L=b.depthTexture,y=L&&L.isDepthTexture?L.type:null,I=E(b.stencilBuffer,y),F=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(b),I,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(b),I,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,I,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,S)}else{let L=b.textures;for(let y=0;y<L.length;y++){let I=L[y],F=s.convert(I.format,I.colorSpace),z=s.convert(I.type),J=M(I.internalFormat,F,z,I.colorSpace);fe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(b),J,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(b),J,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(S,b,B){let L=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let y=i.get(b.depthTexture);if(y.__renderTarget=b,y.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L){if(y.__webglInit===void 0&&(y.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),y.__webglTexture===void 0){y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture),k(n.TEXTURE_CUBE_MAP,b.depthTexture);let $=s.convert(b.depthTexture.format),q=s.convert(b.depthTexture.type),re;b.depthTexture.format===nr?re=n.DEPTH_COMPONENT24:b.depthTexture.format===Rr&&(re=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,b.width,b.height,0,$,q,null)}}else G(b.depthTexture,0);let I=y.__webglTexture,F=ue(b),z=L?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,J=b.depthTexture.format===Rr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===nr)fe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,z,I,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,J,z,I,0);else{if(b.depthTexture.format!==Rr)throw new Error("Unknown depthTexture format");fe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,z,I,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,J,z,I,0)}}function Te(S){let b=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==S.depthTexture){let L=S.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),L){let y=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,L.removeEventListener("dispose",y)};L.addEventListener("dispose",y),b.__depthDisposeCallback=y}b.__boundDepthTexture=L}if(S.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let L=0;L<6;L++)Le(b.__webglFramebuffer[L],S,L);else{let L=S.texture.mipmaps;L&&L.length>0?Le(b.__webglFramebuffer[0],S,0):Le(b.__webglFramebuffer,S,0)}else if(B){b.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[L]),b.__webglDepthbuffer[L]===void 0)b.__webglDepthbuffer[L]=n.createRenderbuffer(),Re(b.__webglDepthbuffer[L],S,!1);else{let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer[L];n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,I)}}else{let L=S.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Re(b.__webglDepthbuffer,S,!1);else{let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,I)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let xe=[],ne=[];function ue(S){return Math.min(r.maxSamples,S.samples)}function fe(S){let b=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(S,b){let B=S.colorSpace,L=S.format,y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==mr&&B!==Ir&&(at.getTransfer(B)===gt?L===nn&&y===Ci||ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),b}function le(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=function(){let S=R;return S>=r.maxTextures&&ke("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),R+=1,S},this.resetTextureUnits=function(){R=0},this.setTexture2D=G,this.setTexture2DArray=function(S,b){let B=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version?Z(B,S,b):(S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b))},this.setTexture3D=function(S,b){let B=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version?Z(B,S,b):t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)},this.setTextureCube=function(S,b){let B=i.get(S);S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version?(function(L,y,I){if(y.image.length!==6)return;let F=j(L,y),z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+I);let J=i.get(z);if(z.version!==J.__version||F===!0){t.activeTexture(n.TEXTURE0+I);let $=at.getPrimaries(at.workingColorSpace),q=y.colorSpace===Ir?null:at.getPrimaries(y.colorSpace),re=y.colorSpace===Ir||$===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ie=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,se=[];for(let ye=0;ye<6;ye++)se[ye]=ie||oe?oe?y.image[ye].image:y.image[ye]:m(y.image[ye],!0,r.maxCubemapSize),se[ye]=Ce(y,se[ye]);let pe=se[0],Be=s.convert(y.format,y.colorSpace),Ke=s.convert(y.type),rt=M(y.internalFormat,Be,Ke,y.colorSpace),nt=y.isVideoTexture!==!0,Se=J.__version===void 0||F===!0,je=z.dataReady,st,It=T(y,pe);if(k(n.TEXTURE_CUBE_MAP,y),ie){nt&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,It,rt,pe.width,pe.height);for(let ye=0;ye<6;ye++){st=se[ye].mipmaps;for(let Xe=0;Xe<st.length;Xe++){let Qe=st[Xe];y.format!==nn?Be!==null?nt?je&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,Qe.width,Qe.height,Be,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,rt,Qe.width,Qe.height,0,Qe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,Qe.width,Qe.height,Be,Ke,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,rt,Qe.width,Qe.height,0,Be,Ke,Qe.data)}}}else{if(st=y.mipmaps,nt&&Se){st.length>0&&It++;let ye=le(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,It,rt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(oe){nt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,se[ye].width,se[ye].height,Be,Ke,se[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,rt,se[ye].width,se[ye].height,0,Be,Ke,se[ye].data);for(let Xe=0;Xe<st.length;Xe++){let Qe=st[Xe].image[ye].image;nt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Qe.width,Qe.height,Be,Ke,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,rt,Qe.width,Qe.height,0,Be,Ke,Qe.data)}}else{nt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Ke,se[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,rt,Be,Ke,se[ye]);for(let Xe=0;Xe<st.length;Xe++){let Qe=st[Xe];nt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Be,Ke,Qe.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,rt,Be,Ke,Qe.image[ye])}}}_(y)&&g(n.TEXTURE_CUBE_MAP),J.__version=z.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version})(B,S,b):t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)},this.rebindTextures=function(S,b,B){let L=i.get(S);b!==void 0&&ge(L.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Te(S)},this.setupRenderTarget=function(S){let b=S.texture,B=i.get(S),L=i.get(b);S.addEventListener("dispose",D);let y=S.textures,I=S.isWebGLCubeRenderTarget===!0,F=y.length>1;if(F||(L.__webglTexture===void 0&&(L.__webglTexture=n.createTexture()),L.__version=b.version,a.memory.textures++),I){B.__webglFramebuffer=[];for(let z=0;z<6;z++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[z]=[];for(let J=0;J<b.mipmaps.length;J++)B.__webglFramebuffer[z][J]=n.createFramebuffer()}else B.__webglFramebuffer[z]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let z=0;z<b.mipmaps.length;z++)B.__webglFramebuffer[z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(F)for(let z=0,J=y.length;z<J;z++){let $=i.get(y[z]);$.__webglTexture===void 0&&($.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&fe(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let z=0;z<y.length;z++){let J=y[z];B.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[z]);let $=s.convert(J.format,J.colorSpace),q=s.convert(J.type),re=M(J.internalFormat,$,q,J.colorSpace,S.isXRRenderTarget===!0),ie=ue(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,re,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,B.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture),k(n.TEXTURE_CUBE_MAP,b);for(let z=0;z<6;z++)if(b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)ge(B.__webglFramebuffer[z][J],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J);else ge(B.__webglFramebuffer[z],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);_(b)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let z=0,J=y.length;z<J;z++){let $=y[z],q=i.get($),re=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),k(re,$),ge(B.__webglFramebuffer,S,$,n.COLOR_ATTACHMENT0+z,re,0),_($)&&g(re)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(z=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(z,L.__webglTexture),k(z,b),b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)ge(B.__webglFramebuffer[J],S,b,n.COLOR_ATTACHMENT0,z,J);else ge(B.__webglFramebuffer,S,b,n.COLOR_ATTACHMENT0,z,0);_(b)&&g(z),t.unbindTexture()}S.depthBuffer&&Te(S)},this.updateRenderTargetMipmap=function(S){let b=S.textures;for(let B=0,L=b.length;B<L;B++){let y=b[B];if(_(y)){let I=v(S),F=i.get(y).__webglTexture;t.bindTexture(I,F),g(I),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(S.samples>0){if(fe(S)===!1){let b=S.textures,B=S.width,L=S.height,y=n.COLOR_BUFFER_BIT,I=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=i.get(S),z=b.length>1;if(z)for(let $=0;$<b.length;$++)t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);let J=S.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let $=0;$<b.length;$++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(y|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(y|=n.STENCIL_BUFFER_BIT)),z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let q=i.get(b[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,B,L,0,0,B,L,y,n.NEAREST),l===!0&&(xe.length=0,ne.length=0,xe.push(n.COLOR_ATTACHMENT0+$),S.depthBuffer&&S.resolveDepthBuffer===!1&&(xe.push(I),ne.push(I),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let $=0;$<b.length;$++){t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let q=i.get(b[$]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let b=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w0(n,e){return{convert:function(t,i=Ir){let r,s=at.getTransfer(i);if(t===Ci)return n.UNSIGNED_BYTE;if(t===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(t===oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===lh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===sh)return n.BYTE;if(t===ah)return n.SHORT;if(t===ws)return n.UNSIGNED_SHORT;if(t===ml)return n.INT;if(t===On)return n.UNSIGNED_INT;if(t===zi)return n.FLOAT;if(t===Mn)return n.HALF_FLOAT;if(t===ep)return n.ALPHA;if(t===tp)return n.RGB;if(t===nn)return n.RGBA;if(t===nr)return n.DEPTH_COMPONENT;if(t===Rr)return n.DEPTH_STENCIL;if(t===vl)return n.RED;if(t===_l)return n.RED_INTEGER;if(t===Cs)return n.RG;if(t===ch)return n.RG_INTEGER;if(t===hh)return n.RGBA_INTEGER;if(t===xl||t===yl||t===Ml||t===Sl)if(s===gt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===uh||t===dh||t===ph||t===mh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===fh||t===gh||t===vh||t===_h||t===xh||t===yh||t===Mh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===fh||t===gh)return s===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===vh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===_h)return r.COMPRESSED_R11_EAC;if(t===xh)return r.COMPRESSED_SIGNED_R11_EAC;if(t===yh)return r.COMPRESSED_RG11_EAC;if(t===Mh)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Sh||t===bh||t===Eh||t===Th||t===wh||t===Ah||t===Ch||t===Rh||t===Ih||t===Ph||t===Lh||t===Dh||t===Nh||t===Uh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Sh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===bh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Eh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Th)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===wh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Ah)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ch)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Rh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ih)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Ph)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Lh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Dh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Nh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Uh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Fh||t===Oh||t===Bh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Fh)return s===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===zh||t===kh||t===Gh||t===Hh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===zh)return r.COMPRESSED_RED_RGTC1_EXT;if(t===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Gh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===As?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ha(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ai({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends Un{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,m=typeof XRWebGLBinding<"u",_=new cu,g={},v=t.getContextAttributes(),M=null,E=null,T=[],C=[],D=new he,U=null,R=new Xt;R.viewport=new Rt;let G=new Xt;G.viewport=new Rt;let W=[R,G],V=new cl,X=null,k=null;function j(ne){let ue=C.indexOf(ne.inputSource);if(ue===-1)return;let fe=T[ue];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,c||a),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<T.length;ne++){let ue=C[ne];ue!==null&&(C[ne]=null,T[ne].disconnect(ue))}X=null,k=null,_.reset();for(let ne in g)delete g[ne];e.setRenderTarget(M),p=null,d=null,u=null,r=null,E=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(ne){for(let ue=0;ue<ne.removed.length;ue++){let fe=ne.removed[ue],Ce=C.indexOf(fe);Ce>=0&&(C[Ce]=null,T[Ce].disconnect(fe))}for(let ue=0;ue<ne.added.length;ue++){let fe=ne.added[ue],Ce=C.indexOf(fe);if(Ce===-1){for(let S=0;S<T.length;S++){if(S>=C.length){C.push(fe),Ce=S;break}if(C[S]===null){C[S]=fe,Ce=S;break}}if(Ce===-1)break}let le=T[Ce];le&&le.connect(fe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=T[ne];return ue===void 0&&(ue=new ds,T[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=T[ne];return ue===void 0&&(ue=new ds,T[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=T[ne];return ue===void 0&&(ue=new ds,T[ne]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,fe=null,Ce=null;v.depth&&(Ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Rr:nr,fe=v.stencil?As:On);let le={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ti(d.textureWidth,d.textureHeight,{format:nn,type:Ci,depthTexture:new Qn(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ti(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let ge=new A,Re=new A;function Le(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ue=ne.near,fe=ne.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),V.near=G.near=R.near=ue,V.far=G.far=R.far=fe,X===V.near&&k===V.far||(r.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,k=V.far),V.layers.mask=6|ne.layers.mask,R.layers.mask=-5&V.layers.mask,G.layers.mask=-3&V.layers.mask;let Ce=ne.parent,le=V.cameras;Le(V,Ce);for(let S=0;S<le.length;S++)Le(le[S],Ce);le.length===2?(function(S,b,B){ge.setFromMatrixPosition(b.matrixWorld),Re.setFromMatrixPosition(B.matrixWorld);let L=ge.distanceTo(Re),y=b.projectionMatrix.elements,I=B.projectionMatrix.elements,F=y[14]/(y[10]-1),z=y[14]/(y[10]+1),J=(y[9]+1)/y[5],$=(y[9]-1)/y[5],q=(y[8]-1)/y[0],re=(I[8]+1)/I[0],ie=F*q,oe=F*re,se=L/(-q+re),pe=se*-q;if(b.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(pe),S.translateZ(se),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),y[10]===-1)S.projectionMatrix.copy(b.projectionMatrix),S.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let Be=F+se,Ke=z+se,rt=ie-pe,nt=oe+(L-pe),Se=J*z/Ke*Be,je=$*z/Ke*Be;S.projectionMatrix.makePerspective(rt,nt,Se,je,Be,Ke),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}})(V,R,G):V.projectionMatrix.copy(R.projectionMatrix),(function(S,b,B){B===null?S.matrix.copy(b.matrixWorld):(S.matrix.copy(B.matrixWorld),S.matrix.invert(),S.matrix.multiply(b.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(b.projectionMatrix),S.projectionMatrixInverse.copy(b.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*hs*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(ne,V,Ce)},this.getCamera=function(){return V},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(ne){return g[ne]};let Te=null,xe=new Hp;xe.setAnimationLoop(function(ne,ue){if(h=ue.getViewerPose(c||a),f=ue,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ce=!1;fe.length!==V.cameras.length&&(V.cameras.length=0,Ce=!0);for(let S=0;S<fe.length;S++){let b=fe[S],B=null;if(p!==null)B=p.getViewport(b);else{let y=u.getViewSubImage(d,b);B=y.viewport,S===0&&(e.setRenderTargetTextures(E,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(E))}let L=W[S];L===void 0&&(L=new Xt,L.layers.enable(S),L.viewport=new Rt,W[S]=L),L.matrix.fromArray(b.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(b.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(B.x,B.y,B.width,B.height),S===0&&(V.matrix.copy(L.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ce===!0&&V.cameras.push(L)}let le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let S=u.getDepthInformation(fe[0]);S&&S.isValid&&S.texture&&_.init(S,r.renderState)}if(le&&le.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let S=0;S<fe.length;S++){let b=fe[S].camera;if(b){let B=g[b];B||(B=new ha,g[b]=B);let L=u.getCameraImage(b);B.sourceTexture=L}}}}for(let fe=0;fe<T.length;fe++){let Ce=C[fe],le=T[fe];Ce!==null&&le!==void 0&&le.update(Ce,ue,c||a)}Te&&Te(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),f=null}),this.setAnimationLoop=function(ne){Te=ne},this.dispose=function(){}}},Nr=new $i,A0=new Je;function C0(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===vi&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===vi&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Nr.copy(l),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),r.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Nr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,qh(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vi&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function R0(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let m=u.value,_=d+"_"+p;if(f[_]===void 0)return f[_]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let g=f[_];if(typeof m=="number"||typeof m=="boolean"){if(g!==m)return f[_]=m,!0}else if(g.equals(m)===!1)return g.copy(m),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(_){let g=_.uniforms,v=0,M=16;for(let T=0,C=g.length;T<C;T++){let D=Array.isArray(g[T])?g[T]:[g[T]];for(let U=0,R=D.length;U<R;U++){let G=D[U],W=Array.isArray(G.value)?G.value:[G.value];for(let V=0,X=W.length;V<X;V++){let k=c(W[V]),j=v%M,Y=j%k.boundary,Z=j+Y;v+=Y,Z!==0&&M-Z<k.storage&&(v+=M-Z),G.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=k.storage}}}let E=v%M;E>0&&(v+=M-E),_.__size=v,_.__cache={}})(u),p=(function(_){let g=(function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();_.__bindingPointIndex=g;let v=n.createBuffer(),M=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&((function(_){let g=r[_.id],v=_.uniforms,M=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,T=v.length;E<T;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let D=0,U=C.length;D<U;D++){let R=C[D];if(l(R,E,D,M)===!0){let G=R.__offset,W=Array.isArray(R.value)?R.value:[R.value],V=0;for(let X=0;X<W.length;X++){let k=W[X],j=c(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,G+V,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=m)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var I0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null,Ls=class{constructor(e={}){let{canvas:t=hp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ci}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=p,_=new Set([hh,ch,_l]),g=new Set([Ci,On,ws,As,fl,gl]),v=new Uint32Array(4),M=new Int32Array(4),E=null,T=null,C=[],D=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,G=!1;this._outputColorSpace=Et;let W=0,V=0,X=null,k=-1,j=null,Y=new Rt,Z=new Rt,ge=null,Re=new Ee(0),Le=0,Te=t.width,xe=t.height,ne=1,ue=null,fe=null,Ce=new Rt(0,0,Te,xe),le=new Rt(0,0,Te,xe),S=!1,b=new Kn,B=!1,L=!1,y=new Je,I=new A,F=new Rt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function $(){return X===null?ne:1}let q,re,ie,oe,se,pe,Be,Ke,rt,nt,Se,je,st,It,ye,Xe,Qe,an,on,Ye,mt,ot,Ii,O=i;function Gi(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ur,!1),t.addEventListener("webglcontextrestored",Vi,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),O===null){let H="webgl2";if(O=Gi(H,w),O===null)throw Gi(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ve("WebGLRenderer: "+w.message),w}function Hi(){q=new ng(O),q.init(),mt=new w0(O,q),re=new Qf(O,q,e,mt),ie=new E0(O,q),re.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),oe=new ag(O),se=new p0,pe=new T0(O,q,ie,se,re,mt,oe),Be=new ig(R),Ke=new Yf(O),ot=new Kf(O,Ke),rt=new rg(O,Ke,oe,ot),nt=new lg(O,rt,Ke,ot,oe),an=new og(O,re,pe),ye=new eg(se),Se=new d0(R,Be,q,re,ot,ye),je=new C0(R,se),st=new f0,It=new y0(q),Qe=new Jf(R,Be,ie,nt,f,l),Xe=new b0(R,nt,re),Ii=new R0(O,oe,re,ie),on=new $f(O,q,oe),Ye=new sg(O,q,oe),oe.programs=Se.programs,R.capabilities=re,R.extensions=q,R.properties=se,R.renderLists=st,R.shadowMap=Xe,R.state=ie,R.info=oe}Hi(),m!==Ci&&(U=new hg(m,t.width,t.height,r,s));let Mt=new hu(R,O);function Ur(w){w.preventDefault(),Wh("WebGLRenderer: Context Lost."),G=!0}function Vi(){Wh("WebGLRenderer: Context Restored."),G=!1;let w=oe.autoReset,H=Xe.enabled,K=Xe.autoUpdate,te=Xe.needsUpdate,Q=Xe.type;Hi(),oe.autoReset=w,Xe.enabled=H,Xe.autoUpdate=K,Xe.needsUpdate=te,Xe.type=Q}function Vt(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fr(w){let H=w.target;H.removeEventListener("dispose",Fr),(function(K){(function(te){let Q=se.get(te).programs;Q!==void 0&&(Q.forEach(function(ce){Se.releaseProgram(ce)}),te.isShaderMaterial&&Se.releaseShaderCache(te))})(K),se.remove(K)})(H)}function xi(w,H,K){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=vi,w.needsUpdate=!0,_t(w,H,K),w.side=bs,w.needsUpdate=!0,_t(w,H,K),w.side=hi):_t(w,H,K)}this.xr=Mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(Te,xe,!1))},this.getSize=function(w){return w.set(Te,xe)},this.setSize=function(w,H,K=!0){Mt.isPresenting?ke("WebGLRenderer: Can't change size while VR device is presenting."):(Te=w,xe=H,t.width=Math.floor(w*ne),t.height=Math.floor(H*ne),K===!0&&(t.style.width=w+"px",t.style.height=H+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,w,H))},this.getDrawingBufferSize=function(w){return w.set(Te*ne,xe*ne).floor()},this.setDrawingBufferSize=function(w,H,K){Te=w,xe=H,ne=K,t.width=Math.floor(w*K),t.height=Math.floor(H*K),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(m!==Ci){if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,H,K,te){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,H,K,te),ie.viewport(Y.copy(Ce).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,H,K,te){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,H,K,te),ie.scissor(Z.copy(le).multiplyScalar(ne).round())},this.getScissorTest=function(){return S},this.setScissorTest=function(w){ie.setScissorTest(S=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,K=!0){let te=0;if(w){let Q=!1;if(X!==null){let ce=X.texture.format;Q=_.has(ce)}if(Q){let ce=X.texture.type,ve=g.has(ce),be=Qe.getClearColor(),we=Qe.getClearAlpha(),ze=be.r,qe=be.g,et=be.b;ve?(v[0]=ze,v[1]=qe,v[2]=et,v[3]=we,O.clearBufferuiv(O.COLOR,0,v)):(M[0]=ze,M[1]=qe,M[2]=et,M[3]=we,O.clearBufferiv(O.COLOR,0,M))}else te|=O.COLOR_BUFFER_BIT}H&&(te|=O.DEPTH_BUFFER_BIT),K&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ur,!1),t.removeEventListener("webglcontextrestored",Vi,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Qe.dispose(),st.dispose(),It.dispose(),se.dispose(),Be.dispose(),nt.dispose(),ot.dispose(),Ii.dispose(),Se.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Pt),Mt.removeEventListener("sessionend",Tt),vt.stop()},this.renderBufferDirect=function(w,H,K,te,Q,ce){H===null&&(H=z);let ve=Q.isMesh&&Q.matrixWorld.determinant()<0,be=(function(Ne,Ue,At,Oe,Me){Ue.isScene!==!0&&(Ue=z),pe.resetTextureUnits();let kt=Ue.fog,ar=Oe.isMeshStandardMaterial||Oe.isMeshLambertMaterial||Oe.isMeshPhongMaterial?Ue.environment:null,yi=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:mr,Nt=Oe.isMeshStandardMaterial||Oe.isMeshLambertMaterial&&!Oe.envMap||Oe.isMeshPhongMaterial&&!Oe.envMap,ni=Be.get(Oe.envMap||ar,Nt),ji=Oe.vertexColors===!0&&!!At.attributes.color&&At.attributes.color.itemSize===4,Li=!!At.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),wn=!!At.morphAttributes.position,de=!!At.morphAttributes.normal,Qt=!!At.morphAttributes.color,Ut=en;Oe.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(Ut=R.toneMapping));let kn=At.morphAttributes.position||At.morphAttributes.normal||At.morphAttributes.color,ln=kn!==void 0?kn.length:0,He=se.get(Oe),Gn=T.state.lights;if(B===!0&&(L===!0||Ne!==j)){let mi=Ne===j&&Oe.id===k;ye.setState(Oe,Ne,mi)}let Lt=!1;Oe.version===He.__version?He.needsLights&&He.lightsStateVersion!==Gn.state.version||He.outputColorSpace!==yi||Me.isBatchedMesh&&He.batching===!1?Lt=!0:Me.isBatchedMesh||He.batching!==!0?Me.isBatchedMesh&&He.batchingColor===!0&&Me.colorTexture===null||Me.isBatchedMesh&&He.batchingColor===!1&&Me.colorTexture!==null||Me.isInstancedMesh&&He.instancing===!1?Lt=!0:Me.isInstancedMesh||He.instancing!==!0?Me.isSkinnedMesh&&He.skinning===!1?Lt=!0:Me.isSkinnedMesh||He.skinning!==!0?Me.isInstancedMesh&&He.instancingColor===!0&&Me.instanceColor===null||Me.isInstancedMesh&&He.instancingColor===!1&&Me.instanceColor!==null||Me.isInstancedMesh&&He.instancingMorph===!0&&Me.morphTexture===null||Me.isInstancedMesh&&He.instancingMorph===!1&&Me.morphTexture!==null||He.envMap!==ni||Oe.fog===!0&&He.fog!==kt?Lt=!0:He.numClippingPlanes===void 0||He.numClippingPlanes===ye.numPlanes&&He.numIntersection===ye.numIntersection?(He.vertexAlphas!==ji||He.vertexTangents!==Li||He.morphTargets!==wn||He.morphNormals!==de||He.morphColors!==Qt||He.toneMapping!==Ut||He.morphTargetsCount!==ln)&&(Lt=!0):Lt=!0:Lt=!0:Lt=!0:Lt=!0:(Lt=!0,He.__version=Oe.version);let cn=He.currentProgram;Lt===!0&&(cn=_t(Oe,Ue,Me));let Wt=!1,ut=!1,hn=!1,dt=cn.getUniforms(),qi=He.uniforms;if(ie.useProgram(cn.program)&&(Wt=!0,ut=!0,hn=!0),Oe.id!==k&&(k=Oe.id,ut=!0),Wt||j!==Ne){ie.buffers.depth.getReversed()&&Ne.reversedDepth!==!0&&(Ne._reversedDepth=!0,Ne.updateProjectionMatrix()),dt.setValue(O,"projectionMatrix",Ne.projectionMatrix),dt.setValue(O,"viewMatrix",Ne.matrixWorldInverse);let mi=dt.map.cameraPosition;mi!==void 0&&mi.setValue(O,I.setFromMatrixPosition(Ne.matrixWorld)),re.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(Ne.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&dt.setValue(O,"isOrthographic",Ne.isOrthographicCamera===!0),j!==Ne&&(j=Ne,ut=!0,hn=!0)}if(He.needsLights&&(Gn.state.directionalShadowMap.length>0&&dt.setValue(O,"directionalShadowMap",Gn.state.directionalShadowMap,pe),Gn.state.spotShadowMap.length>0&&dt.setValue(O,"spotShadowMap",Gn.state.spotShadowMap,pe),Gn.state.pointShadowMap.length>0&&dt.setValue(O,"pointShadowMap",Gn.state.pointShadowMap,pe)),Me.isSkinnedMesh){dt.setOptional(O,Me,"bindMatrix"),dt.setOptional(O,Me,"bindMatrixInverse");let mi=Me.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),dt.setValue(O,"boneTexture",mi.boneTexture,pe))}Me.isBatchedMesh&&(dt.setOptional(O,Me,"batchingTexture"),dt.setValue(O,"batchingTexture",Me._matricesTexture,pe),dt.setOptional(O,Me,"batchingIdTexture"),dt.setValue(O,"batchingIdTexture",Me._indirectTexture,pe),dt.setOptional(O,Me,"batchingColorTexture"),Me._colorsTexture!==null&&dt.setValue(O,"batchingColorTexture",Me._colorsTexture,pe));let ks=At.morphAttributes;ks.position===void 0&&ks.normal===void 0&&ks.color===void 0||an.update(Me,At,cn),(ut||He.receiveShadow!==Me.receiveShadow)&&(He.receiveShadow=Me.receiveShadow,dt.setValue(O,"receiveShadow",Me.receiveShadow)),(Oe.isMeshStandardMaterial||Oe.isMeshLambertMaterial||Oe.isMeshPhongMaterial)&&Oe.envMap===null&&Ue.environment!==null&&(qi.envMapIntensity.value=Ue.environmentIntensity),qi.dfgLUT!==void 0&&(qi.dfgLUT.value=(Sn===null&&(Sn=new _r(I0,16,16,Cs,Mn),Sn.name="DFG_LUT",Sn.minFilter=Kt,Sn.magFilter=Kt,Sn.wrapS=Jn,Sn.wrapT=Jn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn)),ut&&(dt.setValue(O,"toneMappingExposure",R.toneMappingExposure),He.needsLights&&(Mi=hn,(Di=qi).ambientLightColor.needsUpdate=Mi,Di.lightProbe.needsUpdate=Mi,Di.directionalLights.needsUpdate=Mi,Di.directionalLightShadows.needsUpdate=Mi,Di.pointLights.needsUpdate=Mi,Di.pointLightShadows.needsUpdate=Mi,Di.spotLights.needsUpdate=Mi,Di.spotLightShadows.needsUpdate=Mi,Di.rectAreaLights.needsUpdate=Mi,Di.hemisphereLights.needsUpdate=Mi),kt&&Oe.fog===!0&&je.refreshFogUniforms(qi,kt),je.refreshMaterialUniforms(qi,Oe,ne,xe,T.state.transmissionRenderTarget[Ne.id]),Ps.upload(O,Br(He),qi,pe));var Di,Mi;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(Ps.upload(O,Br(He),qi,pe),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&dt.setValue(O,"center",Me.center),dt.setValue(O,"modelViewMatrix",Me.modelViewMatrix),dt.setValue(O,"normalMatrix",Me.normalMatrix),dt.setValue(O,"modelMatrix",Me.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let mi=Oe.uniformsGroups;for(let Gs=0,Gr=mi.length;Gs<Gr;Gs++){let Hr=mi[Gs];Ii.update(Hr,cn),Ii.bind(Hr,cn)}}return cn})(w,H,K,te,Q);ie.setMaterial(te,ve);let we=K.index,ze=1;if(te.wireframe===!0){if(we=rt.getWireframeAttribute(K),we===void 0)return;ze=2}let qe=K.drawRange,et=K.attributes.position,De=qe.start*ze,Ze=(qe.start+qe.count)*ze;ce!==null&&(De=Math.max(De,ce.start*ze),Ze=Math.min(Ze,(ce.start+ce.count)*ze)),we!==null?(De=Math.max(De,0),Ze=Math.min(Ze,we.count)):et!=null&&(De=Math.max(De,0),Ze=Math.min(Ze,et.count));let St=Ze-De;if(St<0||St===1/0)return;let wt;ot.setup(Q,te,be,K,we);let ft=on;if(we!==null&&(wt=Ke.get(we),ft=Ye,ft.setIndex(wt)),Q.isMesh)te.wireframe===!0?(ie.setLineWidth(te.wireframeLinewidth*$()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(Q.isLine){let Ne=te.linewidth;Ne===void 0&&(Ne=1),ie.setLineWidth(Ne*$()),Q.isLineSegments?ft.setMode(O.LINES):Q.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else Q.isPoints?ft.setMode(O.POINTS):Q.isSprite&&ft.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ne=Q._multiDrawStarts,Ue=Q._multiDrawCounts,At=Q._multiDrawCount,Oe=we?Ke.get(we).bytesPerElement:1,Me=se.get(te).currentProgram.getUniforms();for(let kt=0;kt<At;kt++)Me.setValue(O,"_gl_DrawID",kt),ft.render(Ne[kt]/Oe,Ue[kt])}else if(Q.isInstancedMesh)ft.renderInstances(De,St,Q.count);else if(K.isInstancedBufferGeometry){let Ne=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ue=Math.min(K.instanceCount,Ne);ft.renderInstances(De,St,Ue)}else ft.render(De,St)},this.compile=function(w,H,K=null){K===null&&(K=w),T=It.get(K),T.init(H),D.push(T),K.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),w!==K&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights();let te=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let ce=Q.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){let be=ce[ve];xi(be,K,Q),te.add(be)}else xi(ce,K,Q),te.add(ce)}),T=D.pop(),te},this.compileAsync=function(w,H,K=null){let te=this.compile(w,H,K);return new Promise(Q=>{function ce(){te.forEach(function(ve){se.get(ve).currentProgram.isReady()&&te.delete(ve)}),te.size!==0?setTimeout(ce,10):Q(w)}q.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ti=null;function Pt(){vt.stop()}function Tt(){vt.start()}let vt=new Hp;function Wi(w,H,K,te){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||b.intersectsSprite(w)){te&&F.setFromMatrixPosition(w.matrixWorld).applyMatrix4(y);let ce=nt.update(w),ve=w.material;ve.visible&&E.push(w,ce,ve,K,F.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||b.intersectsObject(w))){let ce=nt.update(w),ve=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),F.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),F.copy(ce.boundingSphere.center)),F.applyMatrix4(w.matrixWorld).applyMatrix4(y)),Array.isArray(ve)){let be=ce.groups;for(let we=0,ze=be.length;we<ze;we++){let qe=be[we],et=ve[qe.materialIndex];et&&et.visible&&E.push(w,ce,et,K,F.z,qe)}}else ve.visible&&E.push(w,ce,ve,K,F.z,null)}}let Q=w.children;for(let ce=0,ve=Q.length;ce<ve;ce++)Wi(Q[ce],H,K,te)}function sr(w,H,K,te){let{opaque:Q,transmissive:ce,transparent:ve}=w;T.setupLightsView(K),B===!0&&ye.setGlobalState(R.clippingPlanes,K),te&&ie.viewport(Y.copy(te)),Q.length>0&&ii(Q,H,K),ce.length>0&&ii(ce,H,K),ve.length>0&&ii(ve,H,K),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Or(w,H,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[te.id]===void 0){let et=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[te.id]=new Ti(1,1,{generateMipmaps:!0,type:et?Mn:Ci,minFilter:tn,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Q=T.state.transmissionRenderTarget[te.id],ce=te.viewport||Y;Q.setSize(ce.z*R.transmissionResolutionScale,ce.w*R.transmissionResolutionScale);let ve=R.getRenderTarget(),be=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(Q),R.getClearColor(Re),Le=R.getClearAlpha(),Le<1&&R.setClearColor(16777215,.5),R.clear(),J&&Qe.render(K);let ze=R.toneMapping;R.toneMapping=en;let qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),T.setupLightsView(te),B===!0&&ye.setGlobalState(R.clippingPlanes,te),ii(w,K,te),pe.updateMultisampleRenderTarget(Q),pe.updateRenderTargetMipmap(Q),q.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let De=0,Ze=H.length;De<Ze;De++){let St=H[De],{object:wt,geometry:ft,material:Ne,group:Ue}=St;if(Ne.side===hi&&wt.layers.test(te.layers)){let At=Ne.side;Ne.side=vi,Ne.needsUpdate=!0,Xi(wt,K,te,ft,Ne,Ue),Ne.side=At,Ne.needsUpdate=!0,et=!0}}et===!0&&(pe.updateMultisampleRenderTarget(Q),pe.updateRenderTargetMipmap(Q))}R.setRenderTarget(ve,be,we),R.setClearColor(Re,Le),qe!==void 0&&(te.viewport=qe),R.toneMapping=ze}function ii(w,H,K){let te=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,ce=w.length;Q<ce;Q++){let ve=w[Q],{object:be,geometry:we,group:ze}=ve,qe=ve.material;qe.allowOverride===!0&&te!==null&&(qe=te),be.layers.test(K.layers)&&Xi(be,H,K,we,qe,ze)}}function Xi(w,H,K,te,Q,ce){w.onBeforeRender(R,H,K,te,Q,ce),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(R,H,K,te,w,ce),Q.transparent===!0&&Q.side===hi&&Q.forceSinglePass===!1?(Q.side=vi,Q.needsUpdate=!0,R.renderBufferDirect(K,H,te,Q,w,ce),Q.side=bs,Q.needsUpdate=!0,R.renderBufferDirect(K,H,te,Q,w,ce),Q.side=hi):R.renderBufferDirect(K,H,te,Q,w,ce),w.onAfterRender(R,H,K,te,Q,ce)}function _t(w,H,K){H.isScene!==!0&&(H=z);let te=se.get(w),Q=T.state.lights,ce=T.state.shadowsArray,ve=Q.state.version,be=Se.getParameters(w,Q.state,ce,H,K),we=Se.getProgramCacheKey(be),ze=te.programs;te.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,te.fog=H.fog;let qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;te.envMap=Be.get(w.envMap||te.environment,qe),te.envMapRotation=te.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",Fr),ze=new Map,te.programs=ze);let et=ze.get(we);if(et!==void 0){if(te.currentProgram===et&&te.lightsStateVersion===ve)return zr(w,be),et}else be.uniforms=Se.getUniforms(w),w.onBeforeCompile(be,R),et=Se.acquireProgram(be,we),ze.set(we,et),te.uniforms=be.uniforms;let De=te.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(De.clippingPlanes=ye.uniform),zr(w,be),te.needsLights=(function(Ze){return Ze.isMeshLambertMaterial||Ze.isMeshToonMaterial||Ze.isMeshPhongMaterial||Ze.isMeshStandardMaterial||Ze.isShadowMaterial||Ze.isShaderMaterial&&Ze.lights===!0})(w),te.lightsStateVersion=ve,te.needsLights&&(De.ambientLightColor.value=Q.state.ambient,De.lightProbe.value=Q.state.probe,De.directionalLights.value=Q.state.directional,De.directionalLightShadows.value=Q.state.directionalShadow,De.spotLights.value=Q.state.spot,De.spotLightShadows.value=Q.state.spotShadow,De.rectAreaLights.value=Q.state.rectArea,De.ltc_1.value=Q.state.rectAreaLTC1,De.ltc_2.value=Q.state.rectAreaLTC2,De.pointLights.value=Q.state.point,De.pointLightShadows.value=Q.state.pointShadow,De.hemisphereLights.value=Q.state.hemi,De.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,De.spotLightMatrix.value=Q.state.spotLightMatrix,De.spotLightMap.value=Q.state.spotLightMap,De.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=et,te.uniformsList=null,et}function Br(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Ps.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function zr(w,H){let K=se.get(w);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}vt.setAnimationLoop(function(w){ti&&ti(w)}),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(w){ti=w,Mt.setAnimationLoop(w),w===null?vt.stop():vt.start()},Mt.addEventListener("sessionstart",Pt),Mt.addEventListener("sessionend",Tt),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0)return void Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;let K=Mt.enabled===!0&&Mt.isPresenting===!0,te=U!==null&&(X===null||K)&&U.begin(R,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Mt.enabled!==!0||Mt.isPresenting!==!0||U!==null&&U.isCompositing()!==!1||(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(H),H=Mt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,H,X),T=It.get(w,D.length),T.init(H),D.push(T),y.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),b.setFromProjectionMatrix(y,Nn,H.reversedDepth),L=this.localClippingEnabled,B=ye.init(this.clippingPlanes,L),E=st.get(w,C.length),E.init(),C.push(E),Mt.enabled===!0&&Mt.isPresenting===!0){let ce=R.xr.getDepthSensingMesh();ce!==null&&Wi(ce,H,-1/0,R.sortObjects)}Wi(w,H,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(ue,fe),J=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,J&&Qe.addToRenderList(E,w),this.info.render.frame++,B===!0&&ye.beginShadows();let Q=T.state.shadowsArray;if(Xe.render(Q,w,H),B===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&U.hasRenderPass())===!1){let ce=E.opaque,ve=E.transmissive;if(T.setupLights(),H.isArrayCamera){let be=H.cameras;if(ve.length>0)for(let we=0,ze=be.length;we<ze;we++)Or(ce,ve,w,be[we]);J&&Qe.render(w);for(let we=0,ze=be.length;we<ze;we++){let qe=be[we];sr(E,w,qe,qe.viewport)}}else ve.length>0&&Or(ce,ve,w,H),J&&Qe.render(w),sr(E,w,H)}X!==null&&V===0&&(pe.updateMultisampleRenderTarget(X),pe.updateRenderTargetMipmap(X)),te&&U.end(R),w.isScene===!0&&w.onAfterRender(R,w,H),ot.resetDefaultState(),k=-1,j=null,D.pop(),D.length>0?(T=D[D.length-1],B===!0&&ye.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),E=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,H,K){let te=se.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),se.get(w.texture).__webglTexture=H,se.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:K,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let K=se.get(w);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};let kr=O.createFramebuffer();this.setRenderTarget=function(w,H=0,K=0){X=w,W=H,V=K;let te=null,Q=!1,ce=!1;if(w){let ve=se.get(w);if(ve.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),Y.copy(w.viewport),Z.copy(w.scissor),ge=w.scissorTest,ie.viewport(Y),ie.scissor(Z),ie.setScissorTest(ge),void(k=-1);if(ve.__webglFramebuffer===void 0)pe.setupRenderTarget(w);else if(ve.__hasExternalTextures)pe.rebindTextures(w,se.get(w.texture).__webglTexture,se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ze=w.depthTexture;if(ve.__boundDepthTexture!==ze){if(ze!==null&&se.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(w)}}let be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ce=!0);let we=se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(te=Array.isArray(we[H])?we[H][K]:we[H],Q=!0):te=w.samples>0&&pe.useMultisampledRTT(w)===!1?se.get(w).__webglMultisampledFramebuffer:Array.isArray(we)?we[K]:we,Y.copy(w.viewport),Z.copy(w.scissor),ge=w.scissorTest}else Y.copy(Ce).multiplyScalar(ne).floor(),Z.copy(le).multiplyScalar(ne).floor(),ge=S;if(K!==0&&(te=kr),ie.bindFramebuffer(O.FRAMEBUFFER,te)&&ie.drawBuffers(w,te),ie.viewport(Y),ie.scissor(Z),ie.setScissorTest(ge),Q){let ve=se.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,K)}else if(ce){let ve=H;for(let be=0;be<w.textures.length;be++){let we=se.get(w.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,we.__webglTexture,K,ve)}}else if(w!==null&&K!==0){let ve=se.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,K)}k=-1},this.readRenderTargetPixels=function(w,H,K,te,Q,ce,ve,be=0){if(!w||!w.isWebGLRenderTarget)return void Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){ie.bindFramebuffer(O.FRAMEBUFFER,we);try{let ze=w.textures[be],qe=ze.format,et=ze.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(qe))return void Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))return void Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");H>=0&&H<=w.width-te&&K>=0&&K<=w.height-Q&&O.readPixels(H,K,te,Q,mt.convert(qe),mt.convert(et),ce)}finally{let ze=X!==null?se.get(X).__webglFramebuffer:null;ie.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,H,K,te,Q,ce,ve,be=0){if(!w||!w.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){if(H>=0&&H<=w.width-te&&K>=0&&K<=w.height-Q){ie.bindFramebuffer(O.FRAMEBUFFER,we);let ze=w.textures[be],qe=ze.format,et=ze.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),O.readPixels(H,K,te,Q,mt.convert(qe),mt.convert(et),0);let Ze=X!==null?se.get(X).__webglFramebuffer:null;ie.bindFramebuffer(O.FRAMEBUFFER,Ze);let St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dp(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce),O.deleteBuffer(De),O.deleteSync(St),ce}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,H=null,K=0){let te=Math.pow(2,-K),Q=Math.floor(w.image.width*te),ce=Math.floor(w.image.height*te),ve=H!==null?H.x:0,be=H!==null?H.y:0;pe.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,ve,be,Q,ce),ie.unbindTexture()};let Fe=O.createFramebuffer(),Pi=O.createFramebuffer();this.copyTextureToTexture=function(w,H,K=null,te=null,Q=0,ce=0){let ve,be,we,ze,qe,et,De,Ze,St,wt=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(K!==null)ve=K.max.x-K.min.x,be=K.max.y-K.min.y,we=K.isBox3?K.max.z-K.min.z:1,ze=K.min.x,qe=K.min.y,et=K.isBox3?K.min.z:0;else{let ni=Math.pow(2,-Q);ve=Math.floor(wt.width*ni),be=Math.floor(wt.height*ni),we=w.isDataArrayTexture?wt.depth:w.isData3DTexture?Math.floor(wt.depth*ni):1,ze=0,qe=0,et=0}te!==null?(De=te.x,Ze=te.y,St=te.z):(De=0,Ze=0,St=0);let ft=mt.convert(H.format),Ne=mt.convert(H.type),Ue;H.isData3DTexture?(pe.setTexture3D(H,0),Ue=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(pe.setTexture2DArray(H,0),Ue=O.TEXTURE_2D_ARRAY):(pe.setTexture2D(H,0),Ue=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let At=O.getParameter(O.UNPACK_ROW_LENGTH),Oe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Me=O.getParameter(O.UNPACK_SKIP_PIXELS),kt=O.getParameter(O.UNPACK_SKIP_ROWS),ar=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,et);let yi=w.isDataArrayTexture||w.isData3DTexture,Nt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let ni=se.get(w),ji=se.get(H),Li=se.get(ni.__renderTarget),wn=se.get(ji.__renderTarget);ie.bindFramebuffer(O.READ_FRAMEBUFFER,Li.__webglFramebuffer),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let de=0;de<we;de++)yi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,se.get(w).__webglTexture,Q,et+de),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,se.get(H).__webglTexture,ce,St+de)),O.blitFramebuffer(ze,qe,ve,be,De,Ze,ve,be,O.DEPTH_BUFFER_BIT,O.NEAREST);ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||se.has(w)){let ni=se.get(w),ji=se.get(H);ie.bindFramebuffer(O.READ_FRAMEBUFFER,Fe),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pi);for(let Li=0;Li<we;Li++)yi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ni.__webglTexture,Q,et+Li):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ni.__webglTexture,Q),Nt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ji.__webglTexture,ce,St+Li):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ji.__webglTexture,ce),Q!==0?O.blitFramebuffer(ze,qe,ve,be,De,Ze,ve,be,O.COLOR_BUFFER_BIT,O.NEAREST):Nt?O.copyTexSubImage3D(Ue,ce,De,Ze,St+Li,ze,qe,ve,be):O.copyTexSubImage2D(Ue,ce,De,Ze,ze,qe,ve,be);ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Nt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ue,ce,De,Ze,St,ve,be,we,ft,Ne,wt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,ce,De,Ze,St,ve,be,we,ft,wt.data):O.texSubImage3D(Ue,ce,De,Ze,St,ve,be,we,ft,Ne,wt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ce,De,Ze,ve,be,ft,Ne,wt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ce,De,Ze,wt.width,wt.height,ft,wt.data):O.texSubImage2D(O.TEXTURE_2D,ce,De,Ze,ve,be,ft,Ne,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,At),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Oe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Me),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ar),ce===0&&H.generateMipmaps&&O.generateMipmap(Ue),ie.unbindTexture()},this.initRenderTarget=function(w){se.get(w).__webglFramebuffer===void 0&&pe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?pe.setTextureCube(w,0):w.isData3DTexture?pe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?pe.setTexture2DArray(w,0):pe.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){W=0,V=0,X=null,ie.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var uu=.55,P0="./assets/hero-monkey-chase-v2.png",L0=new A(0,0,-1),D0=new A(0,1,0);function En(n,e,t){return Math.max(e,Math.min(t,n))}function Ia(n,e,t,i){return Xh.damp(n,e,t,i)}function N0(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function U0(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function qp(n,e,t){let i=En((t-n)/(e-n),0,1);return i*i*(3-2*i)}function F0(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],f=c[u+2],m=p-Math.max(d,f),_=qp(24,92,m)*qp(72,180,p);if(_<=0)continue;c[u+3]=Math.round(c[u+3]*(1-_));let g=_*.78;c[u+1]=Math.round(p*(1-g)+Math.max(d,f)*g)}o.putImageData(l,0,0);let h=new _n(a);return h.colorSpace=Et,h.minFilter=tn,h.magFilter=Kt,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function Yp(n,e){let t=new ct;t.setAttribute("position",new Bt(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new ht({color:n,transparent:!0,opacity:e,depthWrite:!1,side:hi,blending:wr}),r=new Pe(t,i);return r.frustumCulled=!1,r}function Zp(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function O0(){let n=new Float32Array(24),e=new ct;e.setAttribute("position",new Bt(n,3));let t=new ps({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new la(e,t);return i.frustumCulled=!1,i}function B0(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function Jp(n,e){let t=new yt;t.position.set(n*.27,.14,.055);let i=new Pe(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new Pe(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new Pe(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new Pe(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function Kp({scene:n,camera:e,renderer:t,assetUrl:i=P0,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await U0(i),o=F0(a,t),l=new yt;l.name="playerRig";let c=new yt;c.name="playerAttitude",l.add(c);let h=new ht({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:hi,toneMapped:!0}),u=new Pe(new li(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new $t(.018,.025,.62,6),jointGeometry:new ci(.065,8,5),thrusterGeometry:new $t(.045,.06,.14,7),trailGeometry:new Qi(.06,.48,7,1,!0),metalMaterial:new gi({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new gi({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new ht({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new ht({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:hi,blending:yn})},p=Jp(-1,d),f=Jp(1,d);c.add(p,f);let m=Yp(12853285,.88),_=Yp(9376024,.78);c.add(m,_);let g=O0();c.add(g);let v=new Bi(16757051,r?1.4:2.1,4.5,2);v.position.set(0,-.04,.34),c.add(v),n.add(l);let M={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:uu,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,f],scarves:[m,_],tail:g,engineLight:v,materials:{metal:d.metalMaterial,brass:d.brassMaterial,thruster:d.thrusterMaterial,trail:d.trailMaterial,scarves:[m.material,_.material]},cameraVelocity:new A,cameraTarget:new A,lookTarget:new A,aimForward:L0.clone(),disposed:!1};return pu(M,r),M}function Pa(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=En(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=En(t.bank??-(t.vx||0)*.08,-.52,.52),a=En(t.pitch??-(t.vy||0)*.045,-.36,.36),o=En(-(t.vx||0)*.022,-.18,.18),l=En(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=Ia(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=Ia(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=Ia(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=Ia(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=Ia(n.wings[1].rotation.z,-u,12,r),Zp(n.scarves[0],n.time,-1,l),Zp(n.scarves[1],n.time+.17,1,l),B0(n.tail,n.time,s);let d=En(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((f,m)=>{let _=f.userData.trail,g=.9+Math.sin(n.time*28+m)*.12;_.scale.set(.85+d*.25,.55+d*.7*g,.85+d*.25),_.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function du(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=En(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),N0(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=En(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(D0),r.lookAt(n.lookTarget),r.rotateZ(En(-(t.bank||0)*.12,-.07,.07))}function pu(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}function Pl(n,e={}){if(!n||n.disposed)return;let t=e.airframe||"clockwork-pinions",i=e.outfit||"rescue-scarf",r=n.materials,s={"clockwork-pinions":{metal:8226181,brass:12094010,trail:16747058,scaleX:1,scaleY:1},"howler-rocket-rig":{metal:9128243,brass:14983750,trail:16734756,scaleX:.92,scaleY:1.16},"thunderbird-glider":{metal:4943731,brass:8317139,trail:5564640,scaleX:1.18,scaleY:.96}}[t];r.metal.color.setHex(s.metal),r.brass.color.setHex(s.brass),r.trail.color.setHex(s.trail),n.engineLight.color.setHex(s.trail),n.wings.forEach(o=>o.scale.set(s.scaleX,s.scaleY,1));let a={"rescue-scarf":{left:12853285,right:9376024,tint:16777215},"ace-jacket":{left:14721595,right:10313504,tint:16773592},"midnight-suit":{left:2847348,right:1457992,tint:13230559}}[i];r.scarves[0].color.setHex(a.left),r.scarves[1].color.setHex(a.right),n.hero.material.color.setHex(a.tint)}var k0=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg"],di=-5.32,G0=18,H0=11.5,V0=10.7,W0=3,rn=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8})]);function Us(n,e,t){return Math.max(e,Math.min(t,n))}function Qp(n){return Us(Math.round(Number(n)||0),0,W0)}function Ll(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function mu(n,e,t=0){let i=Ll(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function fu(n){let e=Ll(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function bt(n,e,t){return e+(t-e)*n()}function em(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function X0(n,e,t){let i=em(128,256);if(!i){let m=new Ee(n.facade[e]),_=new Uint8Array([m.r*255,m.g*255,m.b*255,255]),g=new _r(_,1,1);return g.needsUpdate=!0,g}let r=fu(mu(t,e,41)),s=i.getContext("2d"),a=new Ee(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new Ee(16777215),.12),c=n.windows.map(m=>new Ee(m));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let m=0;m<u;m+=1)for(let _=0;_<h;_+=1){let g=_*d,v=m*p;s.fillStyle=`#${l.clone().multiplyScalar(bt(r,.66,1.08)).getHexString()}`,s.fillRect(g+1,v+1,d-2,p-2);let M=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,E=r()<M?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${E.clone().multiplyScalar(bt(r,.72,1.08)).getHexString()}`;let T=e===1?3:4,C=e===2?3:2;s.fillRect(g+T,v+C,Math.max(2,d-T*2),Math.max(2,p-C*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let m=0;m<16;m+=1){let _=Math.floor(r()*h)*d,g=Math.floor(r()*u)*p;s.fillRect(_+1,g+1,d-2,p-2)}}let f=new _n(i);return f.colorSpace=Et,f.wrapS=pr,f.wrapT=pr,f.repeat.set(e===1?1.5:1,e===2?1.5:2),f.needsUpdate=!0,f}function j0(n,e){let t=em(1024,320);if(!t)return null;let i=fu(mu(e,813,rn.indexOf(n))),r=t.getContext("2d"),s=new Ee(n.sky),a=new Ee(n.fog).lerp(new Ee(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=bt(i,18,54),u=bt(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-bt(i,12,55),2,bt(i,12,55)),l+=h+bt(i,3,13)}let c=new _n(t);return c.colorSpace=Et,c.needsUpdate=!0,c}function Ns(n){return new gi({roughness:.76,metalness:.24,...n})}function $p(n,e,t,i){let r=new xr(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(Rs),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function ki(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function La(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function Fs(n,e,t){let i=rn[t],r=fu(mu(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;ki(s.road,0,di+.035,0,a*2,.07,o-.08,{color:i.road}),ki(s.sidewalk,-(a+.72),di+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),ki(s.sidewalk,a+.72,di+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])ki(s.markings,c,di+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);La(s.metalCylinder,u,di+1.5,h,.055,2.85,{color:i.metal}),ki(s.metalBox,u-c*.27,di+2.83,h,.58,.06,.06,{color:i.metal}),ki(s.lights,u-c*.52,di+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density===9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=bt(r,t===1?3.4:2.5,t===2?5.8:5.1),p=bt(r,2.8,4.8),f=a+1.45+u*4.6+bt(r,0,1.2),m=c*(f+d/2),_=bt(r,-o*.42,o*.42),g=bt(r,i.minHeight,i.maxHeight);t===1&&h>1&&(g*=.72),t===3&&r()<.22&&(g*=.58);let v=Math.floor(r()*3),M=Us(g*bt(r,.18,.28),1.2,3.4),E=g-M;s.facade.push({level:t,family:v,x:m,y:di+M/2,z:_,sx:d*1.14,sy:M,sz:p*1.12,ry:0});let T=t===2||g>10||r()<.42,C=T?bt(r,.58,.74):1,D=E*C;s.facade.push({level:t,family:v,x:m,y:di+M+D/2,z:_,sx:d,sy:D,sz:p,ry:0});let U=di+M+D,R=d,G=p;if(T){let W=E-D;R=d*bt(r,.58,.78),G=p*bt(r,.6,.82),s.facade.push({level:t,family:(v+1)%3,x:m,y:U+W/2,z:_,sx:R,sy:W,sz:G,ry:0}),U+=W}if(ki(s.roof,m,U+.11,_,R*.88,.22,G*.86,{color:i.roof}),r()<.78&&ki(s.metalBox,m+bt(r,-R*.2,R*.2),U+.35,_,R*.24,.5,G*.24,{color:i.metal}),g>11&&r()<.46){let W=bt(r,1.1,t===2?3.8:2.5);La(s.metalCylinder,m,U+W/2,_,.055,W,{color:i.metal}),ki(s.lights,m,U+W,_,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){ki(s.metalBox,0,di+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])La(s.metalCylinder,c*(a+.32),di+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+bt(r,0,3));if(e%2===0){let u=bt(r,7,13);La(s.metalCylinder,h,di+u/2,bt(r,-3,3),.52,u,{color:6643288}),ki(s.lights,h,di+u+.15,0,.22,.22,.22,{color:i.beacon})}else La(s.metalCylinder,h,di+1.15,bt(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+bt(r,4.5,10));ki(s.lights,h,di+bt(r,1.2,5),bt(r,-4,4),bt(r,.35,.75),bt(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}return s}function q0(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function Os(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(q0(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function Y0(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=Et,s.minFilter=tn;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function tm(n,e,t){let i=j0(rn[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,Y0(n,e,t,n.backdropTokens[t])}function Z0(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=Fs(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,Os(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:rn[t.fromLevel],to:rn[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=Fs(n,n.blocks[c].serial,t.toLevel));Os(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function J0(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new zt(1,1,1),s=new $t(.5,.5,1,8,1,!1),a=new li(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=rn.map((l,c)=>l.facade.map((h,u)=>{let d=X0(l,u,n.seed);n.generatedTextures.add(d);let p=Ns({color:h,map:d,emissiveMap:d,emissive:new Ee(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let f=$p(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(f),n.movingRoot.add(f),f}));let o=(l,c,h,u)=>{n.materials.add(h);let d=$p(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,Ns({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,Ns({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,Ns({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,Ns({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,Ns({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new ht({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new ht({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new ht({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:hi});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new Pe(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),tm(n,n.level,0),n.backdropMaterials[0].opacity=1}function im(n={}){let e=Us(Math.floor(n.blockCount||G0),10,24),t=Us(Number(n.blockSpacing)||H0,9,16),i=Math.max(V0,Number(n.corridorHalfWidth)||0),r=Qp(n.level),s=new yt;s.name="streamed-city";let a=new yt;a.name="streamed-city-blocks";let o=new yt;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:Ll(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,4):k0.slice(),textureLoader:typeof document>"u"?null:new Er,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new Ht,color:new Ee,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};J0(l);for(let h=0;h<e;h+=1)l.blocks.push(Fs(l,h,r));Os(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return K0(c,h,u)},setLevel(h,u){return $0(c,h,u)},setSeed(h,u){return Q0(c,h,u)},getEnvironment(){return nm(c)},getStats(){return{...l.stats}},dispose(){ev(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function Dl(n){let e=n?._cityState;return!e||e.disposed?null:e}function K0(n,e,t={}){let i=Dl(n);if(!i)return null;let r=Us(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push(Fs(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&Os(i),Z0(i,r),nm(n)}function $0(n,e,t={}){let i=Dl(n);if(!i)return!1;let r=Qp(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=Us(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,tm(i,r,c),s?(i.blocks=i.blocks.map(h=>Fs(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,Os(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:rn[r],to:rn[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function Q0(n,e,t={}){let i=Dl(n);if(!i)return!1;let r=Ll(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push(Fs(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,Os(i)}return!0}function nm(n){let e=Dl(n);if(!e)return null;if(!e.transition){let o=rn[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=rn[t],a=rn[i];return{level:i,mix:r,sky:new Ee(s.sky).lerp(new Ee(a.sky),r).getHex(),fog:new Ee(s.fog).lerp(new Ee(a.fog),r).getHex(),light:new Ee(s.light).lerp(new Ee(a.light),r).getHex(),theme:a}}function ev(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var tv=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])})]),Da=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var iv=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),sn=(n,e,t)=>Math.max(e,Math.min(t,n)),Bs=(n,e)=>Number.isFinite(n)?n:e;function rm(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function nv(n=7646257){let e=rm(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=rm(i)||1831565813},t}function rv(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>sn(Bs(n(),.5),0,.999999999999)}function sv(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var Ie,Nl,Ri,vu,sm,Ul,Fl,_u,Na,am,om,lm,cm,Ol,Bn,gu=class{constructor({seed:e=7646257,rng:t=nv(e),levels:i=tv,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){qu(this,Ie);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=rv(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=sn(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=sn(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),We(this,Ie,Bn).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&We(this,Ie,_u).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();We(this,Ie,lm).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values(Da).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,We(this,Ie,_u).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};Ie=new WeakSet,Nl=function(e){let t=this.levels[this.levelIndex],i=sn(this.survivalTime/180,0,.42),r=sn(Bs(e.difficulty,0),-.25,.5);return{scalar:sn(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor(Bs(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor(Bs(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor(Bs(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor(Bs(e.activeMissiles,0)))}},Ri=function(e,t){return e+(t-e)*this.random()},vu=function(e){return e[Math.floor(this.random()*e.length)]},sm=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||Da.FORMATION},Ul=function(e){return this.serial+=1,`${e}-${this.serial}`},Fl=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},_u=function(e,t){let i=this.levels[this.levelIndex],r=We(this,Ie,Nl).call(this,t),s=e||We(this,Ie,sm).call(this,i.weights),a=We(this,Ie,Ul).call(this,"encounter"),o=We(this,Ie,om).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,We(this,Ie,Bn).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)We(this,Ie,Fl).call(this,l.at,l.kind,l.payload);We(this,Ie,Fl).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},Na=function(e,t,i,r={}){return{entityId:We(this,Ie,Ul).call(this,"aircraft"),encounterId:e,typeHint:We(this,Ie,vu).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:We(this,Ie,Ri).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*We(this,Ie,Ri).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:We(this,Ie,Ri).call(this,0,Math.PI*2),amplitude:We(this,Ie,Ri).call(this,.75,1.8),...r}},am=function(e,t,i,r,s,a){let o=We(this,Ie,Ul).call(this,"missile"),[l,c]=i.warningLead,h=We(this,Ie,Ri).call(this,l,c)/sn(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:sn(.92+r.scalar*.2,1,1.28),guidanceScale:sn(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},om=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=sv([0,1,2],this.random),l=5;if(e===Da.FORMATION){let d=Math.min(a,sn(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=We(this,Ie,vu).call(this,["vee","echelon","stack"]);for(let f=0;f<d;f+=1){let m=o[f%o.length];s.push({at:f*We(this,Ie,Ri).call(this,.42,.7),kind:"aircraftSpawn",payload:We(this,Ie,Na).call(this,t,i,r,{role:p,lane:m,altitude:.2+(p==="stack"?f*1.25:f%2?1.5:0),spawnZ:-82-f*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===Da.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:We(this,Ie,Na).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:We(this,Ie,Ri).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*We(this,Ie,Ri).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===Da.MISSILE_SORTIE){let d=Math.min(a,this.levelIndex>=3&&this.random()<.45?2:1),p=Math.max(0,r.maxMissiles-r.activeMissiles);for(let f=0;f<d;f+=1){let m=We(this,Ie,Na).call(this,t,i,r,{role:"missile-carrier",lane:o[f],altitude:We(this,Ie,Ri).call(this,1.2,5),spawnZ:-88-f*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:f*1.05,kind:"aircraftSpawn",payload:m}),f<p&&s.push(...We(this,Ie,am).call(this,t,m.entityId,i,r,2.1+f*1.1,m.lane===0?"left":m.lane===2?"right":"ahead"))}l=6.4+d*.8}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let f=0;f<d;f+=1){let m=p[f];s.push({at:f<2?f*.18:1.05,kind:"aircraftSpawn",payload:We(this,Ie,Na).call(this,t,i,r,{role:m===0?"left-flanker":"right-flanker",lane:m,altitude:We(this,Ie,Ri).call(this,-.8,4.3),spawnZ:-78-f*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:We(this,Ie,Ri).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,We(this,Ie,Ri).call(this,c,h)/sn(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},lm=function(e,t){if(e.kind==="aircraftSpawn"){let i=We(this,Ie,Nl).call(this,t);if(i.activeAircraft>=i.maxAircraft){We(this,Ie,cm).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,We(this,Ie,Bn).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=We(this,Ie,Nl).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),We(this,Ie,Ol).call(this,e,"missile-cap");return}We(this,Ie,Bn).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){We(this,Ie,Ol).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,We(this,Ie,Bn).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",We(this,Ie,Bn).call(this,"recoveryStart",e.payload),We(this,Ie,Fl).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,We(this,Ie,Bn).call(this,"recoveryEnd",e.payload))},cm=function(e,t){if(e.retries>=this.maxSpawnRetries){We(this,Ie,Ol).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},Ol=function(e,t){this.stats.actionsSkipped+=1,We(this,Ie,Bn).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},Bn=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[iv[e]]?.(i)===!1||r===!1)};function hm(n){return new gu(n)}var Bl=51.6,zl=6.55,xu=13.45;function kl(n){let e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}function yu(){let n=new yt,e=new gi({color:5661546,metalness:.82,roughness:.3}),t=new Pe(new $t(.09,.16,1.25,7),e);t.rotation.x=Math.PI/2,n.add(t);let i=new Pe(new zt(1.1,.035,.36),e);i.position.z=.08,n.add(i);let r=new Pe(new zt(.48,.03,.2),e);r.position.z=.48,n.add(r);let s=new Bi(16736050,2.4,3);return s.position.z=.7,n.add(s),n}function av(n=17){let e=new yt,t=n>>>0,i=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=new gi({color:1319465,emissive:1523526,emissiveIntensity:.44,metalness:.28,roughness:.78});for(let s=0;s<52;s+=1){let a=1.1+i()*5.5,o=new Pe(new zt(.7+i()*1.1,a,.7+i()*1.1),r),l=s%2?-1:1;o.position.set(l*(2.3+i()*7.5),a*.5-1.2,-s*.9+i()*2),e.add(o)}return e.userData.material=r,e}function um(n){let e=new Er().load(n);e.colorSpace=Et;let t=new ht({map:e,transparent:!0,toneMapped:!1}),i=new Pe(new li(4.35,5.35),t);return i.position.set(0,1.25,-4),i.visible=!1,{mesh:i,texture:e,material:t}}function ov(){let n=new yt,e=new Pe(new ci(2.25,24,16),new ht({color:4774096,wireframe:!0,transparent:!0,opacity:.38}));n.add(e);let t=new ht({color:16729661,transparent:!0,opacity:.8});[0,1,2].forEach(s=>{let a=new Pe(new Fn(3+s*.18,.018,5,72),t);a.rotation.set(Math.PI*(.18+s*.19),Math.PI*(.1+s*.24),0),n.add(a)});let i=new ht({color:16735304});return[[-1.4,1.2,1.3],[1.6,.65,1.25],[.5,-1.65,1.3],[-1.7,-.7,-1.15],[1.35,1.45,-1.15]].forEach(s=>{let a=new Pe(new ci(.09,8,6),i);a.position.set(...s),n.add(a)}),n.position.set(0,1.25,-5.5),n.userData.shell=e,n}function lv(){let n=new yt,e=new ht({color:16727350,transparent:!0,opacity:.72}),t=new Pe(new Fn(1.65,.075,8,48),e),i=new Pe(new zt(3.5,.14,.08),e);return i.rotation.z=-Math.PI/4,n.add(t,i),n.position.set(0,1.3,-4.4),n.visible=!1,n}function dm({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onChoice:s=()=>{},onComplete:a=()=>{}}={}){if(!n)return null;let o=new Ls({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches,alpha:!1});o.outputColorSpace=Et,o.toneMapping=Ar,o.toneMappingExposure=1.05;let l=new gr;l.background=new Ee(133131),l.fog=new fr(463642,.035);let c=new Xt(52,1,.1,140),h=av();l.add(h);let u=ov(),d=lv();l.add(u,d);let p=new Pe(new li(30,120),new gi({color:330253,metalness:.55,roughness:.62}));p.rotation.x=-Math.PI/2,p.position.set(0,-1.2,-34),l.add(p);let f=new Tr(7985364,197894,1.5),m=new Bi(16729144,0,24,2);m.position.set(-2,4,-12),l.add(f,m);let _=[yu(),yu(),yu()];_.forEach((le,S)=>{le.position.set(-9-S*2.4,3.4+S*.7,-8-S*5),le.scale.setScalar(.78+S*.1),l.add(le)});let g=new Pe(new ci(.55,14,9),new ht({color:16747580,transparent:!0,opacity:0}));g.position.set(-2.4,2.1,-13),l.add(g);let v=um(e),M=um(t);l.add(v.mesh,M.mesh);let E=new Pe(new li(5.05,6.05),new ht({color:864052,transparent:!0,opacity:.72}));E.position.set(0,1.25,-4.18),E.visible=!1,l.add(E);let T=new tr([new A(0,2.4,14),new A(.8,1.65,5),new A(-1.5,2.1,-5),new A(1.2,2.8,-13)]),C=new A,D=new Set,U=!1,R=!1,G=!1,W=!1,V=0,X=0,k=0,j=-1,Y=[{at:0,speaker:"Emergency broadcast",text:"At 04:17, Black Flag uploaded a command virus during a global defense drill.",voice:"./assets/voices/01-skyshield-breach.mp3",subject:"globe",telemetry:["SKYSHIELD DRILL // ACTIVE","COMMAND VIRUS // UPLOADED"]},{at:zl,speaker:"Emergency broadcast",text:"Skyshield seized every connected aircraft and turned Earth's defenses against its cities.",voice:"./assets/voices/02-earth-loses-sky.mp3",subject:"city",telemetry:["IFF DATABASE // REWRITTEN","DEFENSE FLEET // HOSTILE"]},{at:xu,speaker:"Commander Vesper",text:"I know one pilot it never studied. Project Canopy's analog rescue ace.",voice:"./assets/voices/03-rescue-ace.mp3",subject:"vesper",telemetry:["PROJECT CANOPY // OFF-GRID","RESCUE ACE // WINGTAIL"]},{at:19.75,speaker:"Wingtail",text:"You forgot my excellent sense of direction.",voice:"./assets/voices/04-direction.mp3",subject:"wingtail",telemetry:["CANOPY RESCUES // 47","UNAUTHORIZED LANDINGS // 12"]},{at:22.25,speaker:"Commander Vesper",text:"You landed in my office.",voice:"./assets/voices/05-office.mp3",subject:"vesper",telemetry:["VESPER'S OFFICE // REPAIRED","INCIDENT REPORT // SEALED"]},{at:24,speaker:"Wingtail",text:"I found you.",voice:"./assets/voices/06-found-you.mp3",subject:"wingtail",telemetry:["FLIGHT LOG // DISPUTED"]},{at:25.35,speaker:"Commander Vesper",text:"I built your wings. You crossed three cyclones and brought forty-seven people home.",voice:"./assets/voices/07-first-wings.mp3",subject:"vesper",telemetry:["ANALOG WING RIG // VESPER MK I","CIVILIANS RECOVERED // 47"]},{at:32,speaker:"Commander Vesper",text:"No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist.",voice:"./assets/voices/08-invisible-pilot.mp3",subject:"wingtail",telemetry:["BIO-SIGNATURE // NO MATCH","FLIGHT SYSTEM // ANALOG","ORDNANCE // UNHACKABLE"]},{at:42.35,speaker:"Wingtail",text:"Finally. Professional recognition.",voice:"./assets/voices/09-recognition.mp3",subject:"wingtail",telemetry:["SKYSHIELD VISIBILITY // ZERO"]},{at:45,speaker:"Commander Vesper",text:"Destroy the command relays and give humanity back its sky. Are you in?",voice:"./assets/voices/10-mission.mp3",subject:"vesper",telemetry:["MISSION // OPERATION BANANA SKY","PRIMARY TARGET // COMMAND RELAYS"]}];function Z(){let le=Math.max(2,n.clientWidth||640),S=Math.max(2,n.clientHeight||420),b=le<=700;o.setPixelRatio(Math.min(devicePixelRatio||1,b?1.15:1.45)),o.setSize(le,S,!1),c.aspect=le/S,c.fov=b&&S>le?62:52,c.updateProjectionMatrix()}function ge(le){u.visible=!1,d.visible=!1,h.visible=!1,p.visible=!1,_.forEach(S=>{S.visible=!1}),E.visible=!0,v.mesh.visible=le==="vesper",M.mesh.visible=le==="wingtail",c.position.set(0,1.35,2.4),c.lookAt(0,1.2,-4)}function Re(le){let S=0;for(let b=0;b<Y.length;b+=1)le>=Y[b].at&&(S=b);S!==j&&(j=S,r({...Y[S],progress:le/Bl}))}function Le(le){if(Re(le),le<zl)u.visible=!0,d.visible=!1,h.visible=!1,p.visible=!1,_.forEach(S=>{S.visible=!1}),E.visible=!1,v.mesh.visible=!1,M.mesh.visible=!1,c.position.set(0,1.4,2.4),c.lookAt(0,1.25,-5.5),u.rotation.y=le*(i?.08:.28),u.rotation.x=Math.sin(le*.55)*.08,u.userData.shell.material.color.setHex(le>1.5?16730946:4774096),m.intensity=kl((le-1.2)/1.3)*4;else if(le<xu){u.visible=!1,h.visible=!0,p.visible=!0,d.visible=!1,E.visible=!1,v.mesh.visible=!1,M.mesh.visible=!1;let S=le-zl,b=xu-zl,B=i?Math.floor(S/1.2)/5:kl(S/b);c.position.copy(T.getPoint(Math.min(.98,B))),C.set(0,1.1,c.position.z-13),c.lookAt(C),_.forEach((I,F)=>{I.visible=!0,I.position.x=-9-F*2.2+S*(4.8+F*.35),I.position.y+=Math.sin(le*2.2+F)*.002});let L=kl((S-1.2)/3.1);h.userData.material.emissiveIntensity=.44*(1-L)+.035,m.intensity=L*7;let y=Math.max(0,Math.min(1,(S-2.1)/1.8));g.material.opacity=Math.sin(y*Math.PI)*.88,g.scale.setScalar(1+y*6),d.visible=S>=3.1,d.visible&&(d.rotation.z=i?0:Math.sin(le*4)*.025,d.scale.setScalar(.92+kl((S-3.1)/.5)*.08))}else{let S=Y[0];for(let B of Y)le>=B.at&&(S=B);ge(S.subject==="wingtail"?"wingtail":"vesper");let b=1+Math.sin(le*3.4)*.006;(v.mesh.visible?v.mesh:M.mesh).scale.setScalar(i?1:b)}}function Te(le){if(U){if(!R&&!G&&!W){let S=Math.min(Bl,(le-V)/1e3);Le(S),r({progress:S/Bl}),S>=Bl&&(G=!0,ge("wingtail"),s())}else if(G||W){let S=v.mesh.visible?v.mesh:M.mesh;i||(S.rotation.z=Math.sin(le*.0017)*.008)}o.render(l,c),k=requestAnimationFrame(Te)}}function xe(){U||(U=!0,R=!1,G=!1,W=!1,j=-1,n.hidden=!1,Z(),V=performance.now(),k=requestAnimationFrame(Te))}function ne(le){if(!G||W)return;G=!1,W=!0,ge("wingtail"),r({speaker:"Wingtail",text:le==="doubt"?"One question. Why bananas?":"Open the armory. Let's make history nervous.",voice:le==="doubt"?"./assets/voices/12-why-bananas.mp3":"./assets/voices/11-open-armory.mp3",telemetry:["WINGTAIL // MISSION ACCEPTANCE PENDING"],progress:1});let S=le==="doubt"?3200:3700,b=le==="doubt"?7150:6050,B=setTimeout(()=>{ge("vesper"),r({speaker:"Commander Vesper",text:le==="doubt"?"Because nobody has ever hacked potassium.":"That's the rescue ace I remember.",voice:le==="doubt"?"./assets/voices/14-potassium.mp3":"./assets/voices/13-armory-response.mp3",telemetry:["OPERATION BANANA SKY // AUTHORIZED"],progress:1})},S),L=setTimeout(()=>ue(!1),b);D.add(B),D.add(L)}function ue(le=!0){U&&(U=!1,cancelAnimationFrame(k),D.forEach(clearTimeout),D.clear(),n.hidden=!0,a({skipped:le}))}function fe(le){!U||G||W||(le&&!R?(R=!0,X=performance.now()):!le&&R&&(V+=performance.now()-X,R=!1))}function Ce(){U=!1,cancelAnimationFrame(k),D.forEach(clearTimeout),l.traverse(le=>{le.geometry?.dispose?.(),Array.isArray(le.material)?le.material.forEach(S=>S.dispose?.()):le.material?.dispose?.()}),v.texture.dispose(),M.texture.dispose(),o.dispose()}return{start:xe,choose:ne,skip:()=>ue(!0),setPaused:fe,resize:Z,dispose:Ce}}var pm="monkeySeeMonkeyPewProfileV1",Tn={airframe:[{id:"clockwork-pinions",name:"Clockwork Pinions",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Balanced",description:"Reliable brass-and-steel wings with forgiving controls.",benefit:"Balanced baseline flight with predictable lift, turning, and cruising speed.",specs:["Lift 100","Handling 100","Speed 100"],modifiers:{lift:1,handling:1,speed:1,armor:0}},{id:"howler-rocket-rig",name:"Howler Rocket Rig",previewAsset:"./assets/wingtail-howler-rig-v1.webp",cost:60,tag:"High lift",description:"Twin coconut-fuel turbines trade finesse for violent acceleration.",benefit:"28% more lift and 14% more speed, but 12% less turning agility.",specs:["Lift 128","Handling 88","Speed 114"],modifiers:{lift:1.28,handling:.88,speed:1.14,armor:0}},{id:"thunderbird-glider",name:"Thunderbird Glider",previewAsset:"./assets/wingtail-thunderbird-v1.webp",cost:110,tag:"Elite",description:"Wide control surfaces, armored spars, and excellent pursuit speed.",benefit:"21% more agility, 18% more speed, and light protection against missile locks.",specs:["Lift 112","Handling 121","Speed 118"],modifiers:{lift:1.12,handling:1.21,speed:1.18,armor:.12}}],weapon:[{id:"ripe-repeater",name:"Ripe Repeater",previewAsset:"./assets/wingtail-ripe-repeater-v1.webp",cost:0,tag:"Standard",description:"Single ripe bananas with a quick, predictable throwing cycle.",benefit:"Rapid single-banana fire for accurate, sustained attacks.",specs:["Damage 1","Rate 5/sec","Bananas 1"],modifiers:{damage:1,cooldown:.2,projectiles:1,spread:0,velocity:54}},{id:"plantain-piercer",name:"Plantain Piercer",previewAsset:"./assets/wingtail-plantain-piercer-v1.webp",cost:45,tag:"Heavy",description:"Dense green plantains hit twice as hard but need a longer reload.",benefit:"Double damage and higher velocity, with a slightly slower firing cycle.",specs:["Damage 2","Rate 4/sec","Bananas 1"],modifiers:{damage:2,cooldown:.25,projectiles:1,spread:0,velocity:58}},{id:"cluster-bunch",name:"Cluster Bunch",previewAsset:"./assets/wingtail-cluster-bunch-v1.webp",cost:95,tag:"Spread",description:"Throws three smaller bananas in a fighter-clearing fan.",benefit:"Launches three bananas at once to cover a wide area and catch agile fighters.",specs:["Damage 1","Rate 3.6/sec","Bananas 3"],modifiers:{damage:1,cooldown:.28,projectiles:3,spread:.065,velocity:52}}],outfit:[{id:"rescue-scarf",name:"Red Rescue Scarf",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Classic",description:"Bright, aerodynamic, and accepted by absolutely no air force.",benefit:"No stat tradeoffs. Pure heroic scarf energy.",specs:["Coconuts 100%","Shield 0","Lock resist 0%"],modifiers:{income:1,shield:0,lockResistance:0}},{id:"ace-jacket",name:"Coconut Ace Jacket",previewAsset:"./assets/wingtail-ace-jacket-v1.webp",cost:30,tag:"Fortune",description:"Lucky leather pockets recover more coconuts from every takedown.",benefit:"Earn 20% more coconuts and resist missile locks 8% longer.",specs:["Coconuts 120%","Shield 0","Lock resist 8%"],modifiers:{income:1.2,shield:0,lockResistance:.08}},{id:"midnight-suit",name:"Midnight Monkey Suit",previewAsset:"./assets/wingtail-midnight-suit-v1.webp",cost:70,tag:"Defense",description:"Radar-dampening fabric and one emergency coconut armor plate.",benefit:"Start with one impact shield and resist missile locks 22% longer.",specs:["Coconuts 108%","Shield 1","Lock resist 22%"],modifiers:{income:1.08,shield:1,lockResistance:.22}}]},mm=[{id:"flight",name:"Turbo Feathering",tag:"Flight",description:"Increase lift, lane response, and top control authority for this run.",effect:"+10% lift and handling"},{id:"arsenal",name:"Peel Velocity",tag:"Weapons",description:"Tighten the throwing cycle and make every banana hit harder.",effect:"-12% reload, +0.35 damage"},{id:"armor",name:"Coconut Plating",tag:"Defense",description:"Bolt another sacrificial coconut shell around the flight harness.",effect:"+1 impact shield"}],cv={coconuts:120,owned:{airframe:["clockwork-pinions"],weapon:["ripe-repeater"],outfit:["rescue-scarf"]},equipped:{airframe:"clockwork-pinions",weapon:"ripe-repeater",outfit:"rescue-scarf"}};function hv(){return JSON.parse(JSON.stringify(cv))}function _i(n,e){return Tn[n]?.find(t=>t.id===e)||Tn[n]?.[0]||null}function fm(n=globalThis.localStorage){let e=hv();try{let t=JSON.parse(n?.getItem(pm)||"null");if(!t||typeof t!="object")return e;e.coconuts=Math.max(0,Math.floor(Number(t.coconuts)||0));for(let i of Object.keys(Tn)){let r=new Set(Tn[i].map(a=>a.id)),s=Array.isArray(t.owned?.[i])?t.owned[i].filter(a=>r.has(a)):[];e.owned[i]=[...new Set([Tn[i][0].id,...s])],e.equipped[i]=e.owned[i].includes(t.equipped?.[i])?t.equipped[i]:Tn[i][0].id}}catch{return e}return e}function Mu(n,e=globalThis.localStorage){try{e?.setItem(pm,JSON.stringify(n))}catch{}return n}function gm(n,e,t,i=globalThis.localStorage){let r=_i(e,t);if(!r||!n.owned?.[e])return{ok:!1,reason:"Unknown equipment."};let s=n.owned[e].includes(t);return!s&&n.coconuts<r.cost?{ok:!1,reason:"Need "+(r.cost-n.coconuts)+" more coconuts."}:(s||(n.coconuts-=r.cost,n.owned[e].push(t)),n.equipped[e]=t,Mu(n,i),{ok:!0,action:s?"equipped":"purchased",item:r})}function vm(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return n.coconuts+=t,Mu(n),t}function Su(n,e=120,t=globalThis.localStorage){let i=Math.max(0,Math.floor(Number(e)||0)),r=Math.max(0,Math.floor(Number(n.coconuts)||0)),s=Math.max(0,i-r);return s>0&&(n.coconuts=i,Mu(n,t)),s}function Gl(){return{flight:0,arsenal:0,armor:0}}function Ua(n,e=Gl()){let t=_i("airframe",n.equipped.airframe).modifiers,i=_i("weapon",n.equipped.weapon).modifiers,r=_i("outfit",n.equipped.outfit).modifiers;return{lift:t.lift*(1+e.flight*.1),handling:t.handling*(1+e.flight*.1),speed:t.speed,armor:t.armor,damage:i.damage+e.arsenal*.35,cooldown:i.cooldown*Math.pow(.88,e.arsenal),projectiles:i.projectiles,spread:i.spread,projectileVelocity:i.velocity*(1+e.arsenal*.04),income:r.income,lockResistance:Math.min(.45,r.lockResistance+t.armor*.25),maxShields:r.shield+e.armor}}function _m(n){let e=Ua(n),t=i=>Math.max(8,Math.min(100,Math.round(i)));return{lift:t(e.lift*72),handling:t(e.handling*72),firepower:t(e.damage*e.projectiles*32),survival:t(18+e.maxShields*35+e.lockResistance*100+e.armor*90)}}var Hl=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),rr=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35}]),zn=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),xm=new A(0,0,1),Mm=new A(0,0,0),Sm=new oi,uv=new Ee(16777215);function ym(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new _n(e);return i.colorSpace=Et,i.needsUpdate=!0,i}function dv(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function Fa(n,e,t,i,r){let s=new xr(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(Rs),s.renderOrder=i.blending===yn?30:20;let a=Array.from({length:r},dv);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,Sm,Mm),s.setMatrixAt(o,n.matrix),s.setColorAt(o,uv);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function bu(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function ei(n,e,t){return e+(t-e)*bu(n)}function zs(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function pv(n,e){n.x=zs(e,"x"),n.y=zs(e,"y"),n.z=zs(e,"z")}function mv(n,e){n.vx=zs(e,"x"),n.vy=zs(e,"y"),n.vz=zs(e,"z")}function fv(n,e,t){let i=e??t;i&&i.isColor?Oa.copy(i):Oa.set(i),n.r=Oa.r,n.g=Oa.g,n.b=Oa.b}var Oa=new Ee;function gv(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function za(n,e,t,i){let r=gv(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??ei(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,pv(r,t.position),mv(r,t.velocity),fv(r,t.color,i.color),r}function Eu(n,e){let t=Hl[e]||Hl.medium;n.resolvedQuality=e in Hl?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor(zn.weather*t.weatherLimit*(n.reducedMotion?.3:1)),Em(n,!0)}function bm(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+ei(n,-18,18),n.weatherPositions[r+1]=i.y+ei(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+ei(n,-28,12),n.weatherPhases[e]=ei(n,0,Math.PI*2)}function Em(n,e){let t=rr[n.level]||rr[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)bm(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function vv(n,e,t){if(!n.weatherCount)return;let i=rr[n.level]||rr[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&bm(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function Ba(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,Sm,Mm),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle(xm,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors(xm,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function Tu(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function _v(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function xv(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function yv(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&Eu(n,t)}function Mv(n,e){let t=za(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function Sv(n,e){return n.reducedMotion&&bu(n)>.42?null:za(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:ei(n,-1.8,1.8),color:14276559})}function bv(n,e){return n.reducedMotion&&bu(n)>.6?null:za(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function Ev(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*Hl[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(ei(n,-1,1),ei(n,-.75,1),ei(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*ei(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=ei(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=ei(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=ei(n,1.2,3.2),n.spawnOptions.gravity=ei(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=za(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return Tu(n,e.impulse??.55*s,ei(n,-.018,.018)),a}function Tv(n,e){if(n.reducedMotion)return null;let t=za(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return Tu(n,e.impulse??.22,e.roll??ei(n,-.01,.01)),t}function wv(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),Tu(n,e.impulse??.85,e.roll??ei(n,-.025,.025)),n.hitFlash}function Tm({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new yt,pools:{},resources:new Set,matrix:new Je,position:new A,direction:new A,scale:new A,quaternion:new oi,rollQuaternion:new oi,color:new Ee,hiddenPosition:new A(0,-1e4,0),weatherCenter:new A,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:zn.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new ht({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:yn,toneMapped:!1,vertexColors:!0}),l=d=>new ht({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=Fa(a,"projectileTrail",new zt(1,1,1),o(.95),zn.projectileTrail),a.pools.missileSmoke=Fa(a,"missileSmoke",new br(1,1),l(.42),zn.missileSmoke),a.pools.jetExhaust=Fa(a,"jetExhaust",new zt(1,1,1),o(.72),zn.jetExhaust),a.pools.explosion=Fa(a,"explosion",new br(1,0),o(.9),zn.explosion),a.pools.nearMiss=Fa(a,"nearMiss",new zt(1,1,1),o(.84),zn.nearMiss),a.softTexture=ym("soft"),a.streakTexture=ym("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array(zn.weather*3),a.weatherPhases=new Float32Array(zn.weather);let c=new ct;c.setAttribute("position",new Bt(a.weatherPositions,3).setUsage(Rs));let h=new $n({color:rr[0].color,size:rr[0].size,map:a.softTexture,transparent:!0,opacity:rr[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:yn});a.weather=new yr(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new ht({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:yn,toneMapped:!1});return a.hitFlash=new Pe(new li(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),Eu(a,a.resolvedQuality),a}function wu(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),yv(n,i),Ba(n,n.pools.projectileTrail,i,"streak"),Ba(n,n.pools.missileSmoke,i,"smoke"),Ba(n,n.pools.jetExhaust,i,"streak"),Ba(n,n.pools.explosion,i,"explosion"),Ba(n,n.pools.nearMiss,i,"streak"),vv(n,i,t),_v(n,i),xv(n,i),n.cameraImpulse}function Yt(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return Mv(n,t);case"missileSmoke":return Sv(n,t);case"jetExhaust":return bv(n,t);case"explosion":return Ev(n,t);case"nearMiss":return Tv(n,t);case"hitFlash":return wv(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function wm(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(rr.length-1,Math.floor(e))),Em(n,!0))}function Am(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;Eu(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("briefingOrder"),s=document.getElementById("startButton"),a=document.getElementById("skipIntroButton"),o=document.getElementById("briefingFallback"),l=document.getElementById("briefingCanvas"),c=document.getElementById("cinematicSlate"),h=document.getElementById("cinematicSpeaker"),u=document.getElementById("cinematicSubtitle"),d=document.getElementById("cinematicProgress"),p=document.getElementById("cinematicTelemetry"),f=document.getElementById("cinematicDialogue"),m=document.getElementById("dialogueSpeaker"),_=document.getElementById("dialogueSubtitle"),g=document.getElementById("dialogueChoices"),v=document.getElementById("briefingIdentity"),M=document.getElementById("briefingChannel"),E=document.getElementById("pauseOverlay"),T=document.getElementById("resumeButton"),C=document.getElementById("restartButton"),D=document.getElementById("pauseButton"),U=document.getElementById("muteButton"),R=document.getElementById("shootButton"),G=document.getElementById("score"),W=document.getElementById("best"),V=document.getElementById("points"),X=document.getElementById("multiplier"),k=document.getElementById("coconutCount"),j=document.getElementById("shieldCount"),Y=document.getElementById("rageHud"),Z=document.getElementById("rageLabel"),ge=document.getElementById("rageCount"),Re=document.getElementById("rageMeter"),Le=document.getElementById("level"),Te=document.getElementById("threatBar"),xe=document.getElementById("missileWarning"),ne=document.getElementById("lockMeter"),ue=document.getElementById("missileBearing"),fe=document.getElementById("missileDirection"),Ce=document.getElementById("targetingHud"),le=document.getElementById("targetStatus"),S=document.getElementById("targetRange"),b=document.getElementById("weaponCooldown"),B=document.getElementById("touchControls"),L=document.getElementById("steerZone"),y=document.getElementById("liftButton"),I=document.getElementById("statusRegion"),F=document.getElementById("hangarOverlay"),z=document.getElementById("hangarWallet"),J=document.getElementById("hangarPreview"),$=document.getElementById("hangarPortrait"),q=document.getElementById("previewState"),re=document.getElementById("previewRig"),ie=document.getElementById("previewWeapon"),oe=document.getElementById("previewOutfit"),se=document.getElementById("loadoutTabs"),pe=document.getElementById("loadoutItems"),Be=document.getElementById("hangarStatus"),Ke=document.getElementById("selectionName"),rt=document.getElementById("selectionBenefit"),nt=document.getElementById("selectionDeltas"),Se=document.getElementById("selectionPrice"),je=document.getElementById("selectionBalance"),st=document.getElementById("loadoutAction"),It=document.getElementById("deployButton"),ye={lift:document.getElementById("statLift"),handling:document.getElementById("statHandling"),firepower:document.getElementById("statFirepower"),survival:document.getElementById("statSurvival")},Xe=document.getElementById("upgradeOverlay"),Qe=document.getElementById("upgradeTitle"),an=document.getElementById("upgradeGrid"),on=document.getElementById("upgradeWallet"),Ye=window.GameAudio||{},mt=1/60,ot=[-6.2,0,6.2],Ii=-3.2,O=5.8,Gi=1.4,Hi=10,Mt=8,Ur=120,Vi=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Vt=[{time:0,name:"PATROL",threat:20,spawn:2.15,maxJets:3,missileChance:.2,missileCap:1,speed:16,sky:1453113,fog:2441805,city:2505539,lights:5824449},{time:22,name:"INTERCEPT",threat:46,spawn:1.82,maxJets:4,missileChance:.38,missileCap:1,speed:18.5,sky:3746867,fog:6440522,city:3354424,lights:15254612},{time:52,name:"MISSILE LOCK",threat:74,spawn:1.55,maxJets:5,missileChance:.56,missileCap:2,speed:21,sky:1515564,fog:3488587,city:2107702,lights:16740431},{time:92,name:"OVERDRIVE",threat:100,spawn:1.28,maxJets:6,missileChance:.72,missileCap:3,speed:24,sky:2232087,fog:4858407,city:2431521,lights:16731960}],Fr={f16:{name:"F-16",color:9411488,accent:4282208,hp:2,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:3,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:2,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:5,speed:.72,agility:.62,score:980,scale:1.18}},xi,ti,Pt=new Audio;Pt.preload="auto";let Tt,vt,Wi,sr,Or,ii,Xi,_t,Br,zr,kr,Fe="loading",Pi="ready",w="playing",H=0,K=0,te=0,Q=0,ce=1,ve=0,be=0,we=performance.now(),ze=0,qe=0,et=1,De=0,Ze=7646257,St=null,wt=null,ft=!1,Ne="airframe",Ue=fm(),At={...Ue.equipped},Oe=Gl(),Me=Ua(Ue,Oe),kt=Me.maxShields,ar=0,yi=0,Nt=0,ni=0,ji=2.4,Li=0,wn=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),de={x:0,y:.7,z:Gi,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:uu},Qt=[],Ut=[],kn=[],ln=[],He=new Set,Gn=new Ee,Lt=new A,cn=new A;W.textContent=String(Math.floor(wn)),k&&(k.textContent=String(Ue.coconuts));for(let x of Object.values(Tn).flat())if(x.previewAsset){let N=new Image;N.src=x.previewAsset}function Wt(x){I.textContent="",requestAnimationFrame(()=>{I.textContent=x})}function ut(x,N,P){return Math.max(N,Math.min(P,x))}function hn(x,N){x&&(x.hidden=!N,x.inert=!N,x.setAttribute("aria-hidden",String(!N)),x.classList.toggle("is-visible",N))}function dt(){k&&(k.textContent=String(Ue.coconuts)),z&&(z.textContent=String(Ue.coconuts)),on&&(on.textContent=String(Ue.coconuts)),j&&(j.textContent=String(kt))}function qi(){let x={...Ue,equipped:{...Ue.equipped,...At}},N=_i("airframe",x.equipped.airframe),P=_i("weapon",x.equipped.weapon),ee=_i("outfit",x.equipped.outfit),me=_i(Ne,At[Ne]),Ae=Ue.equipped[Ne]===me.id;J&&(J.dataset.airframe=N.id,J.dataset.weapon=P.id,J.dataset.outfit=ee.id,J.classList.remove("is-swapping"),J.offsetWidth,J.classList.add("is-swapping")),$&&$.getAttribute("src")!==me.previewAsset&&($.src=me.previewAsset),$&&($.alt="Wingtail previewing "+me.name+" in the equipment hangar"),q&&(q.textContent=Ae?"Current loadout":"Preview only",q.dataset.current=String(Ae));let pt={airframe:"Flight rig",weapon:"Banana system",outfit:"Flight clothing"}[Ne];re&&(re.textContent=me.name),ie&&(ie.textContent=pt+" preview"),oe&&(oe.textContent=Ae?"Equipped item":"Store preview");let ae=_m(x);for(let[xt,lt]of Object.entries(ye))lt&&(lt.style.width=ae[xt]+"%");dt()}function ks(x,N=""){if(Math.abs(x)<.005)return"No change";let P=Number.isInteger(x)?x:Math.round(x*10)/10;return(P>0?"+":"")+P+N}function Di(x,N,P){let ee=N.modifiers,me=P.modifiers;return x==="airframe"?[["Lift",Math.round(ee.lift*100),Math.round(me.lift*100),"%"],["Agility",Math.round(ee.handling*100),Math.round(me.handling*100),"%"],["Speed",Math.round(ee.speed*100),Math.round(me.speed*100),"%"]]:x==="weapon"?[["Damage",ee.damage,me.damage,""],["Fire rate",Math.round(10/ee.cooldown)/10,Math.round(10/me.cooldown)/10,"/sec"],["Payload",ee.projectiles,me.projectiles,"x"]]:[["Coconut yield",Math.round(ee.income*100),Math.round(me.income*100),"%"],["Impact shields",ee.shield,me.shield,""],["Lock resistance",Math.round(ee.lockResistance*100),Math.round(me.lockResistance*100),"%"]]}function Mi(x){if(!nt)return;let N=_i(Ne,Ue.equipped[Ne]),ee=Di(Ne,N,x).map(([me,Ae,pt,ae])=>{let xt=document.createElement("span"),lt=document.createElement("b"),Zt=document.createElement("i"),Ft=document.createElement("em"),Yi=pt-Ae;return lt.textContent=me,Zt.textContent=Ae+ae+" \u2192 "+pt+ae,Ft.textContent=ks(Yi,ae),Ft.dataset.direction=Yi>0?"up":Yi<0?"down":"same",xt.append(lt,Zt,Ft),xt});nt.replaceChildren(...ee)}function mi(){let x=_i(Ne,At[Ne]);if(!x)return;let N=Ue.owned[Ne].includes(x.id),P=Ue.equipped[Ne]===x.id,ee=Ue.coconuts>=x.cost;if(Ke&&(Ke.textContent=x.name),rt&&(rt.textContent=x.benefit),Mi(x),Se&&(Se.textContent=N?"Owned":x.cost+" coconuts",Se.dataset.affordable=String(ee||N)),je&&(je.textContent=String(Ue.coconuts)),st&&(st.disabled=P||!N&&!ee,st.textContent=P?"Equipped":N?"Equip "+x.name:ee?"Buy & Equip \xB7 "+x.cost:"Need "+(x.cost-Ue.coconuts)+" more"),It){let me=_i("airframe",Ue.equipped.airframe).name,Ae=_i("weapon",Ue.equipped.weapon).name;It.textContent="Deploy Current Build",It.setAttribute("aria-label","Deploy current build: "+me+" and "+Ae)}}function Gs(x,N){let P=Ue.owned[N].includes(x.id),ee=Ue.equipped[N]===x.id,me=document.createElement("button");me.type="button",me.className="loadout-item",me.dataset.itemId=x.id,me.dataset.owned=String(P);let Ae=At[N]===x.id;me.setAttribute("aria-pressed",String(Ae)),me.dataset.equipped=String(ee);let pt=document.createElement("span");pt.className="loadout-item__title",pt.textContent=x.name;let ae=document.createElement("span");ae.className="loadout-item__tag",ae.textContent=x.tag;let xt=document.createElement("span");xt.className="loadout-item__description",xt.textContent=x.description;let lt=document.createElement("span");lt.className="loadout-item__footer";let Zt=document.createElement("span");Zt.className="loadout-item__specs",Zt.textContent=x.specs.join(" \xB7 ");let Ft=document.createElement("span");return Ft.className="loadout-item__price",Ft.textContent=ee?"Equipped":P?"Owned":x.cost+" coconuts",lt.append(Zt,Ft),me.append(pt,ae,xt,lt),me.addEventListener("click",()=>{At[N]=x.id,Be.textContent=x.name+" is a preview only. Deploy uses equipped gear until you buy or equip it.",Gr(N)}),me}function Gr(x=Ne){if(!(!Tn[x]||!pe)){Ne=x;for(let N of se?.querySelectorAll("[data-category]")||[])N.setAttribute("aria-selected",String(N.dataset.category===x));pe.replaceChildren(...Tn[x].map(N=>Gs(N,x))),mi(),qi(),matchMedia("(max-width: 700px) and (min-height: 501px)").matches&&requestAnimationFrame(()=>{let N=pe.querySelector('[aria-pressed="true"]');N&&pe.scrollTo({left:N.offsetLeft-(pe.clientWidth-N.offsetWidth)/2,behavior:"auto"})})}}function Hr(){if(Fe==="loading"||Fe==="unsupported")return;Fe="hangar",Xl(!1),hn(Xe,!1),hn(F,!0);let x=Su(Ue,Ur);At={...Ue.equipped},R.disabled=!0,D.disabled=!0,Be.textContent=x>0?`Vesper replenished ${x} coconuts. Select gear for the next sortie.`:"Select gear to compare it with your current build.",Gr(Ne),se?.querySelector('[aria-selected="true"]')?.focus({preventScroll:!0}),Wt("Wingtail loadout hangar opened.")}function Cm(){an&&an.replaceChildren(...mm.map(x=>{let N=document.createElement("button");N.type="button",N.className="upgrade-choice";let P=document.createElement("small");P.textContent=x.tag+" \xB7 Tier "+(Oe[x.id]+1);let ee=document.createElement("strong");ee.textContent=x.name;let me=document.createElement("span");me.textContent=x.description;let Ae=document.createElement("b");return Ae.textContent=x.effect,N.append(P,ee,me,Ae),N.addEventListener("click",()=>Im(x)),N}))}function Rm(x){Fe="upgrading",R.disabled=!0,y&&(y.disabled=!0),He.delete("TouchLift"),Qe.textContent="Level "+(x+1)+" field upgrade",Cm(),dt(),hn(Xe,!0),Ye.setPaused?.(!0),an?.querySelector("button")?.focus()}function Im(x){Oe[x.id]+=1,Me=Ua(Ue,Oe),x.id==="armor"&&(kt+=1),hn(Xe,!1),Fe="playing",R.disabled=!1,y&&(y.disabled=!1),Ye.setPaused?.(!1),we=performance.now(),dt(),n.focus({preventScroll:!0}),Wt(x.name+" installed.")}function ka(x,N){let P=vm(Ue,Math.max(1,Math.round(x*Me.income)));return ar+=P,dt(),N&&Wt(N+". "+P+" coconuts recovered."),P}function or(){return Ze=Ze*1664525+1013904223>>>0,Ze/4294967296}function Ot(x,N){return x+(N-x)*or()}function un(x,N={}){return new gi({color:x,roughness:N.roughness??.58,metalness:N.metalness??.45,emissive:N.emissive||0,emissiveIntensity:N.emissiveIntensity||0})}function fi(x){x&&(Tt.remove(x),x.traverse?.(N=>{N.geometry?.dispose?.(),Array.isArray(N.material)?N.material.forEach(P=>P.dispose?.()):N.material?.dispose?.()}))}function Pm(x){let N=Fr[x],P=new yt,ee=un(N.color,{metalness:.72,roughness:.34}),me=un(N.accent,{metalness:.62,roughness:.42}),Ae=un(1582893,{metalness:.75,roughness:.16}),pt=un(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),ae=new Pe(new $t(.34,.5,4.2,10),ee);ae.rotation.x=Math.PI/2,P.add(ae);let xt=new Pe(new Qi(.34,1.35,10),ee);xt.rotation.x=Math.PI/2,xt.position.z=2.72,P.add(xt);let lt=new Pe(new ci(.38,10,6),Ae);lt.scale.set(.75,.55,1.35),lt.position.set(0,.32,.8),P.add(lt);let Zt=new Mr;Zt.moveTo(0,1.2),Zt.lineTo(2.7,-1.2),Zt.lineTo(.45,-.65),Zt.lineTo(0,-1.1);let Ft=new Pe(new gs(Zt,{depth:.1,bevelEnabled:!1}),ee);Ft.rotation.x=-Math.PI/2,Ft.rotation.z=Math.PI/2,Ft.position.set(-.05,-.03,.3),Ft.geometry.center(),P.add(Ft);let Yi=new Pe(new zt(2.5,.08,.65),me);Yi.position.z=-1.55,P.add(Yi);let Xu=new Pe(new zt(.1,.85,.9),me);Xu.position.set(0,.46,-1.55),P.add(Xu);let Wr=new Pe(new $t(.18,.28,.72,8),pt);if(Wr.rotation.x=Math.PI/2,Wr.position.z=-2.38,P.add(Wr),x==="fa18"||x==="f22"){let Ha=Wr.clone();Wr.position.x=-.24,Ha.position.x=.24,P.add(Ha)}if(x==="a10"){let Ha=new $t(.28,.34,1.45,9);[-.82,.82].forEach(hf=>{let ec=new Pe(Ha,me);ec.rotation.x=Math.PI/2,ec.position.set(hf,.35,-.75),P.add(ec)}),Ft.scale.x=1.15}return x==="f22"&&(Ft.scale.z=1.25),P.scale.setScalar(N.scale),P.userData.engine=Wr,P}function Lm(){let x=new yt,N=new Pe(new $t(.09,.13,1.15,8),un(13095121,{metalness:.75,roughness:.3}));N.rotation.x=Math.PI/2,x.add(N);let P=new Pe(new Qi(.1,.34,8),un(14739172));P.rotation.x=-Math.PI/2,P.position.z=-.74,x.add(P);let ee=new Pe(new Qi(.11,.55,8),new ht({color:16757051,transparent:!0,opacity:.9}));return ee.rotation.x=Math.PI/2,ee.position.z=.83,x.add(ee),x.userData.flame=ee,x}function Au(x="ripe-repeater",N=!1){let P=new yt,ee=x==="plantain-piercer",me=new tr([new A(-.44,.16,0),new A(-.24,-.03,0),new A(0,-.11,0),new A(.24,-.03,0),new A(.44,.16,0)]),Ae=new Pe(new vs(me,12,.095,7,!1),un(ee?9424690:16767279,{metalness:.05,roughness:.48,emissive:ee?2640648:10182400,emissiveIntensity:.72}));P.add(Ae);let pt=new ci(.082,7,5),ae=un(5977365,{metalness:.02,roughness:.86}),xt=new Pe(pt,ae);xt.position.set(-.46,.18,0),xt.scale.set(.72,1.35,.72),xt.rotation.z=-.62,P.add(xt);let lt=xt.clone();lt.position.x=.46,lt.rotation.z=.62,P.add(lt);let Zt=new Bi(ee?10479181:16762685,1.5,4);if(P.add(Zt),N){let Ft=new Pe(new $t(.11,.16,.75,8),un(3688011,{metalness:.72,roughness:.3}));Ft.rotation.z=Math.PI/2,Ft.position.x=.72,P.add(Ft);let Yi=new Pe(new Qi(.14,.6,8),new ht({color:16738861,transparent:!0,opacity:.92}));Yi.rotation.z=-Math.PI/2,Yi.position.x=1.28,P.add(Yi),P.userData.flame=Yi}return P.scale.setScalar(x==="cluster-bunch"?.86:ee?1.3:1.18),N&&P.scale.multiplyScalar(1.18),P.userData.isBananaProjectile=!0,P.userData.isRageRocket=N,P}function Dm(x){let N=new yt;if(x==="banana"){let me=Au("ripe-repeater");me.scale.multiplyScalar(1.28),N.add(me)}else{let me=new Pe(new ci(.48,14,10),un(9195816,{metalness:.05,roughness:.88,emissive:2888199,emissiveIntensity:.45}));me.scale.y=.9,N.add(me);let Ae=new ht({color:2363659});[[-.13,.14],[.13,.14],[0,-.08]].forEach(([pt,ae])=>{let xt=new Pe(new ci(.045,7,5),Ae);xt.position.set(pt,ae,.44),N.add(xt)})}let P=new Pe(new Fn(.72,.035,7,32),new ht({color:x==="banana"?16768853:6482640,transparent:!0,opacity:.78}));P.rotation.x=Math.PI/2,N.add(P);let ee=new Bi(x==="banana"?16767311:6482640,2.2,6);return N.add(ee),N.userData.ring=P,N}function Nm(){let x=new Float32Array(1080);for(let ee=0;ee<360;ee+=1)x[ee*3]=Ot(-60,60),x[ee*3+1]=Ot(-1,28),x[ee*3+2]=Ot(-150,-12);let N=new ct;N.setAttribute("position",new Bt(x,3)),Or=new yr(N,new $n({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),Tt.add(Or),sr=new yt;let P=new ht({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let ee=0;ee<24;ee+=1){let me=new Pe(new ci(1,8,5),P);me.scale.set(Ot(4,9),Ot(.7,1.6),Ot(2,5)),me.position.set(Ot(-28,28),Ot(4,15),Ot(-130,-12)),sr.add(me)}Tt.add(sr)}function Vl(x){!x||!Tt||(Tt.background.setHex(x.sky),Tt.fog.color.setHex(x.fog),Br?.color.setHex(x.light),kr?.color.setHex(x.light))}function Um(x){return Qt.find(N=>N.entityId===x)||null}function Cu(){return hm({seed:Ze,callbacks:{onAircraftSpawn(x){return Fe!=="playing"?!1:(Km(x),!0)},onMissileWarning(x){if(Fe!=="playing")return!1;let N=Um(x.sourceEntityId);return N?$m(N,x):!1},onMissileLaunch(x){let N=Ut.find(P=>P.directorId===x.missileId&&P.state==="locking");return N?(N.pendingLaunch=x,N.timer<=0&&Nu(N,x),!0):!1}}})}async function Fm(){try{xi=new Ls({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),xi.outputColorSpace=Et,xi.toneMapping=Ar,xi.toneMappingExposure=1.12,Tt=new gr,Tt.background=new Ee(Vt[0].sky),Tt.fog=new fr(Vt[0].fog,.018),vt=new Xt(56,1,.1,220),vt.position.set(0,3.1,13.5),vt.lookAt(0,1,-26),Br=new Tr(12446178,659736,2.25),Tt.add(Br),zr=new Ma(16769187,3.1),zr.position.set(-8,13,8),Tt.add(zr),kr=new Bi(16762699,4.2,14),kr.position.set(0,3,5),Tt.add(kr),Nm(),Wi=im({scene:Tt,level:0,seed:Ze,speed:Vt[0].speed*.5}),Vl(Wi.getEnvironment()),_t=Tm({scene:Tt,camera:vt,mobile:innerWidth<=700,reducedMotion:Vi,quality:"auto",seed:Ze}),ii=await Kp({scene:Tt,camera:vt,renderer:xi,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:Vi}),Pl(ii,Ue.equipped),Pa(ii,0,de,{active:!1,speed:Vt[0].speed}),du(ii,mt,de),Xi=Cu();try{ti=dm({canvas:l,vesperAsset:o.currentSrc||o.src,wingtailAsset:$.currentSrc||$.src,reducedMotion:Vi,onCue:Om,onChoice:km,onComplete:Hm})}catch(x){console.warn("Cinematic renderer unavailable; using direct briefing.",x),ti=null}Wl(),Fe="ready",s.disabled=!1,s.textContent="Start Transmission",Wt("3D flight systems ready.")}catch(x){console.error(x),Fe="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",s.hidden=!0}}function Wl(){if(!xi||!vt)return;let x=n.clientWidth||innerWidth,N=n.clientHeight||innerHeight,P=x<=700;ft=P,xi.setPixelRatio(Math.min(devicePixelRatio||1,P?1.5:2)*et),xi.setSize(x,N,!1),vt.aspect=x/Math.max(1,N),vt.fov=P&&N>x?65:55,vt.updateProjectionMatrix(),pu(ii,P),ti?.resize(),document.body.classList.toggle("touch-controls-ready",P&&matchMedia("(pointer: coarse)").matches),B?.setAttribute("aria-hidden",String(!(P&&matchMedia("(pointer: coarse)").matches)))}function Xl(x){e.classList.toggle("is-visible",x),e.setAttribute("aria-hidden",String(!x)),n.inert=x}function Om(x={}){Number.isFinite(x.progress)&&d&&(d.style.width=Math.round(x.progress*100)+"%"),!(!x.speaker&&!x.text)&&(x.speaker&&(h.textContent=x.speaker,m.textContent=x.speaker),x.text&&(u.textContent=x.text,_.textContent=x.text),Array.isArray(x.telemetry)&&p&&(p.replaceChildren(...x.telemetry.map(N=>{let P=document.createElement("span"),[ee,me=""]=N.split(" // ");P.append(document.createTextNode(ee));let Ae=document.createElement("strong");return Ae.textContent=me,P.append(Ae),P})),p.hidden=!1,p.setAttribute("aria-hidden","false")),x.voice&&Bm(x.voice),x.speaker==="Skyshield command"?Ye.playMissileLaunch?.():x.speaker==="Evacuation channel"?Ye.playImpact?.(!0):x.speaker==="Commander Vesper"&&Ye.playLevel?.())}function Bm(x){Pt.pause(),Pt.currentTime=0,Pt.src=x,Pt.muted=!!Ye.isMuted?.(),Pt.volume=.92,Pt.play().catch(()=>{})}function Ru(){Pt.pause(),Pt.currentTime=0,Pt.removeAttribute("src"),Pt.load()}function zm(){if(Pi==="ready"){if(!ti){Pi="complete",Hr();return}Pi="playing",Fe="cinematic",Ye.init?.(),Ye.setPaused?.(!1),Ru(),e.dataset.mode="cinematic",t.hidden=!0,i.hidden=!0,r.hidden=!0,o.hidden=!0,c.hidden=!1,p.hidden=!1,f.hidden=!1,g.hidden=!0,s.hidden=!0,a.hidden=!1,v.textContent="Field Transmission",M.textContent="Archive 72H // Live reconstruction",ti.start(),Wt("Emergency transmission started. Skip Intro is available.")}}function km(){Pi="choice",Fe="dialogue",a.hidden=!0,m.textContent="Wingtail",_.textContent="Vesper is waiting for your answer.",h.textContent="Wingtail",u.textContent="YOUR RESPONSE REQUIRED",g.hidden=!1,g.querySelector("button")?.focus({preventScroll:!0}),Wt("Choose Wingtail's response.")}function Gm(x){Pi==="choice"&&(Pi="resolving",Fe="cinematic",g.hidden=!0,ti.choose(x))}function Hm(){Pi!=="complete"&&(Pi="complete",localStorage.setItem("monkeySeeMonkeyPewIntroSeen","1"),Ye.setPaused?.(!0),Ru(),ti?.dispose(),ti=null,c.hidden=!0,p.hidden=!0,f.hidden=!0,a.hidden=!0,Hr())}function Iu(){["playing","choice","resolving"].includes(Pi)&&ti?.skip()}function Vm(){Qt.splice(0).forEach(x=>fi(x.view)),Ut.splice(0).forEach(x=>fi(x.view)),kn.splice(0).forEach(x=>fi(x.view)),ln.splice(0).forEach(x=>fi(x.view)),K=0,te=0,Q=0,ce=1,ve=0,be=0,Oe=Gl(),Me=Ua(Ue,Oe),kt=Me.maxShields,ar=0,yi=0,Nt=0,ni=0,ji=2.4,Li=0,H=0,Ze=(Date.now()^7646257)>>>0,Wi?.setSeed(Ze,{regenerate:!0}),Wi?.setLevel(0,{immediate:!0}),Xi?.stop({clearSchedule:!0}),Xi=Cu(),Xi.reset({levelIndex:0,delay:.85}),Object.assign(de,{x:0,y:.7,z:Gi,vy:0,vx:0,lane:1,bank:0,pitch:0}),G.textContent="0",V.textContent="0",X.textContent="1.00\xD7",Pl(ii,Ue.equipped),dt(),xe.hidden=!0,ne.style.width="0%",Ce?.classList.remove("is-locked"),le&&(le.textContent="Scanning"),S&&(S.hidden=!0),Yl(),Ga(),Du(0,!1)}function Pu(){Fe==="loading"||Fe==="unsupported"||(Su(Ue,Ur),Vm(),hn(F,!1),hn(Xe,!1),Fe="playing",e.dataset.mode="flight",Xl(!1),R.disabled=!1,D.disabled=!1,y&&(y.disabled=!1),Xi?.start({levelIndex:0,delay:.85}),Ye.startRun?.(0),n.focus({preventScroll:!0}),Wt("3D flight started."))}function jl(){Fe==="playing"&&(de.vy=Math.min(de.vy+3.5*Math.sqrt(Me.lift),6.4*Me.lift),de.pitch=.34,Yt(_t,"jetExhaust",{position:{x:de.x,y:de.y-.1,z:de.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),Ye.playFlap?.(ut(de.vy/6,.45,1)))}function ql(x){Fe==="playing"&&(de.lane=ut(de.lane+x,0,ot.length-1))}function Lu(){let x=null,N=1/0;for(let P of Qt){if(P.z>Gi||P.z<-82)continue;let ee=P.x-de.x,me=P.y-de.y,Ae=Math.hypot(ee,me)+Math.abs(P.z)*.018;Ae<7.4&&Ae<N&&(x=P,N=Ae)}return x}function Yl(){let x=Nt>0?.14:Me.cooldown,N=Math.round(ut(1-be/x,0,1)*100);b?.style.setProperty("--weapon-charge",String(N)),b?.setAttribute("aria-valuenow",String(N))}function Ga(){let x=Nt>0,N=ut(x?Nt/Mt:yi/Hi,0,1);Y?.classList.toggle("is-active",x),Z&&(Z.textContent=x?"Banana Rage":"Go Bananas"),ge&&(ge.textContent=x?`${Nt.toFixed(1)}s`:`${Math.floor(yi)} / ${Hi}`),Re?.style.setProperty("width",`${Math.round(N*100)}%`),Re?.parentElement?.setAttribute("aria-valuenow",String(x?Math.ceil(Nt):Math.floor(yi))),Re?.parentElement?.setAttribute("aria-valuemax",String(x?Mt:Hi))}function Wm(){Nt>0||(yi=0,Nt=Mt,ni=0,Vr("GO BANANAS",750),Yt(_t,"hitFlash",{color:16758062,intensity:.7,impulse:.32}),Ye.playLevel?.(3),Ga(),Wt("Go Bananas activated. Heavy banana rockets online for eight seconds."))}function Zl(x){Nt>0?Nt=Math.min(Mt+2,Nt+Number(x||0)*.18):(yi=Math.min(Hi,yi+Math.max(0,Number(x)||0)),yi>=Hi&&Wm()),Ga()}function Xm(x){Nt<=0||(Nt=Math.max(0,Nt-x),ni-=x,ni<=0&&(be=0,Jl(!0),ni=.16),Nt<=0&&(Y?.classList.remove("is-active"),Wt("Banana rage depleted.")),Ga())}function Jl(x=Nt>0){if(Fe!=="playing"||be>0)return;be=x?.14:Me.cooldown;let N=Lu(),P=new A(0,0,-1);N&&(Lt.set(N.x-de.x,N.y-de.y,N.z-de.z).normalize(),P.lerp(Lt,innerWidth<=700?.82:.68).normalize());let ee=Ue.equipped.weapon,me=x?Math.max(3,Me.projectiles):Me.projectiles,Ae=x?Math.max(.045,Me.spread):Me.spread;for(let pt=0;pt<me;pt+=1){let ae=pt-(me-1)/2,xt=P.clone();xt.x+=ae*Ae,xt.y+=Math.abs(ae)*Ae*.16,xt.normalize();let lt=Au(ee,x);lt.position.set(de.x+ae*.16,de.y,de.z-.9),Tt.add(lt);let Zt={x:lt.position.x,y:lt.position.y,z:lt.position.z,previous:lt.position.clone(),velocity:xt.multiplyScalar(x?Math.max(72,Me.projectileVelocity*1.25):Me.projectileVelocity),damage:x?Math.max(4,Me.damage*2):Me.damage,life:x?2.5:1.9,rage:x,trailTimer:0,spin:Ot(11,16)*(or()>.5?1:-1),tumble:Ot(7,11),view:lt};kn.push(Zt),Yt(_t,"projectileTrail",{position:lt.position,velocity:Zt.velocity,life:.14,width:x?.11:ee==="cluster-bunch"?.05:.075,length:x?1.8:1.2,color:x?16738866:ee==="plantain-piercer"?11070552:16772456})}Yl(),Ye.playShot?.()}function jm(){if(ln.length>=5)return;let x=or()<.68?"coconut":"banana",N=Math.floor(or()*ot.length),P=Dm(x),ee={type:x,x:ot[N]+Ot(-.45,.45),y:Ot(-1.1,4.8),z:Ot(-88,-72),phase:Ot(0,Math.PI*2),view:P};P.position.set(ee.x,ee.y,ee.z),Tt.add(P),ln.push(ee)}function qm(x){let N=ln[x];if(N){if(Yt(_t,"explosion",{position:N,count:10,scale:.42,speed:3.8,color:N.type==="banana"?16768853:6482640,impulse:.08}),N.type==="banana"){let P=Math.max(2,Me.maxShields+1);kt=Math.min(P,kt+1),Vr("RESCUE BANANA",250),Zl(2),Wt("Rescue banana collected. Coconut armor restored.")}else ka(5),Vr("COCONUT CACHE",125),Zl(1),Wt("Coconut collected. Five coconuts secured.");dt(),Ye.playFlap?.(1.35),fi(N.view),ln.splice(x,1)}}function Ym(x){ji-=x,ji<=0&&(jm(),ji=Math.max(3.2,5.2-H*.45)+Ot(0,1.2));let N=Vt[H].speed*1.08;for(let P=ln.length-1;P>=0;P-=1){let ee=ln[P];ee.z+=N*x,ee.phase+=x*2.4,ee.view.position.set(ee.x,ee.y+Math.sin(ee.phase)*.16,ee.z),ee.view.rotation.y+=x*1.9,ee.view.rotation.z=Math.sin(ee.phase*.7)*.18,ee.view.userData.ring&&(ee.view.userData.ring.rotation.z+=x*1.6),Math.abs(ee.z-de.z)<1.25&&Math.hypot(ee.x-de.x,ee.y-de.y)<1.35?qm(P):ee.z>14&&(fi(ee.view),ln.splice(P,1))}}function Du(x,N=!0){if(x===H&&K>0)return;H=x;let P=Vt[x];Le.textContent=`LEVEL ${x+1} \xB7 ${P.name}`,Te.style.width=`${P.threat}%`,Te.style.background=x>=2?"var(--danger)":x===1?"var(--accent)":"var(--signal)",Te.parentElement.setAttribute("aria-valuenow",String(P.threat)),Tt&&(Wi?.setLevel(x,{duration:N?3.1:.4,immediate:!N}),N||Vl(Wi?.getEnvironment()),wm(_t,x)),Xi?.setLevel(x,{clearSchedule:N}),Ye.playLevel?.(x),N&&x>0&&(ka(12+x*4),Rm(x)),N&&Wt(`Level ${x+1}: ${P.name}. City sector changed.`)}function Zm(){let x=0;for(let N=Vt.length-1;N>=0;N-=1)if(K>=Vt[N].time){x=N;break}x!==H&&Du(x)}function Jm(){let x=H===0?["f16","fa18"]:H===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return x[Math.floor(or()*x.length)]}function Km(x={}){let N=Fr[x.typeHint]?x.typeHint:Jm(),P=Fr[N],ee=ut(Number.isInteger(x.lane)?x.lane:Math.floor(or()*ot.length),0,ot.length-1),me=Pm(N),Ae=x.behavior||["intercept","sweep","dive"][Math.floor(or()*3)],pt={entityId:x.entityId||`legacy-${Ze}-${Qt.length}`,encounterId:x.encounterId||null,role:x.role||"interceptor",typeId:N,spec:P,view:me,hp:P.hp,lane:ee,x:ot[ee]+Ot(-.8,.8),y:Number.isFinite(x.altitude)?x.altitude:Ot(-1.6,5.2),z:Number.isFinite(x.spawnZ)?x.spawnZ:-82,speed:Vt[H].speed*P.speed*ut(x.speedScale||1,.78,1.42),phase:Number.isFinite(x.phase)?x.phase:Ot(0,Math.PI*2),amplitude:(Number.isFinite(x.amplitude)?x.amplitude:Ot(.7,2.1))*P.agility,behavior:Ae,passed:!1,exhaustTimer:Ot(0,.08)};return me.position.set(pt.x,pt.y,pt.z),Tt.add(me),Qt.push(pt),pt}function $m(x,N={}){let P=Vt[H];if(!x||Ut.length>=P.missileCap)return!1;let ee=Lm();ee.visible=!1,Tt.add(ee);let me=ut(N.leadTime||[1.45,1.22,1.02,.84][H],.8,3),Ae={directorId:N.missileId||`missile-${Ze}-${Ut.length}`,bearingHint:N.bearingHint||"ahead",state:"locking",source:x,view:ee,x:x.x,y:x.y,z:x.z,timer:me,lockDuration:me,speed:19,direction:new A(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return Ut.push(Ae),xe.hidden=!1,Ye.playMissileLock?.(Ae),!0}function Nu(x,N={}){x.state="active",x.view.visible=!0,x.source=null,x.speed=19*ut(N.speedScale||1,.9,1.35),x.guidanceScale=ut(N.guidanceScale||1,.88,1.25),x.life=ut(N.lifetime||5.5,3.5,7),x.direction.set(de.x-x.x,de.y-x.y,de.z-x.z).normalize(),Yt(_t,"explosion",{position:x,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),Ye.playMissileLaunch?.(x)}function Qm(x){(He.has("Space")||He.has("KeyW")||He.has("ArrowUp")||He.has("TouchLift"))&&(de.vy+=5.8*Me.lift*x),de.vy=ut(de.vy-3.1*x,-3.6,6.4*Me.lift),de.y+=de.vy*x,(de.y<Ii||de.y>O)&&(de.y=ut(de.y,Ii,O),de.vy*=-.15,qe=Math.max(qe,.08));let P=ot[de.lane];de.vx+=(P-de.x)*34*Me.handling*x,de.vx*=Math.exp(-9*Math.sqrt(Me.handling)*x),de.x+=de.vx*x,de.bank+=(ut(-de.vx*.08,-.48,.48)-de.bank)*x*8,de.pitch+=(ut(-de.vy*.045,-.34,.34)-de.pitch)*x*7,Pa(ii,x,de,{active:Fe==="playing",speed:Vt[H].speed,thrust:.52+ut(Math.abs(de.vy)/6.4,0,1)*.42})}function Uu(x,N){return kt<=0?!1:(kt-=1,dt(),qe=Vi?.05:.2,Yt(_t,"explosion",{position:N,count:16,scale:.82,speed:5.5,color:6482640,impulse:.32}),Yt(_t,"hitFlash",{color:6482640,intensity:.62,impulse:.32}),Wt("Coconut shield absorbed "+x+". "+kt+" remaining."),!0)}function ef(x){for(let N=Qt.length-1;N>=0;N-=1){let P=Qt[N];P.z+=P.speed*x,P.phase+=x*(1.25+P.spec.agility*.55);let ee=ot[P.lane];P.behavior==="sweep"?P.x=ee+Math.sin(P.phase)*P.amplitude*1.8:P.behavior==="flank"?P.x=ee+Math.sin(P.phase*.82)*P.amplitude*2.35:P.x+=(ee+Math.sin(P.phase)*P.amplitude-P.x)*x*1.8,P.behavior==="dive"?P.y+=Math.sin(P.phase*.68)*x*2.4:P.y+=Math.cos(P.phase)*x*P.amplitude*(P.behavior==="missile-sortie"?.2:.42),P.view.position.set(P.x,P.y,P.z),P.view.rotation.z=Math.sin(P.phase)*.28*P.spec.agility,P.view.rotation.x=Math.cos(P.phase*.7)*.06,P.view.userData.engine.scale.setScalar(.8+Math.sin(K*26+P.phase)*.18),P.exhaustTimer-=x,P.exhaustTimer<=0&&(P.exhaustTimer=ft?.09:.055,Yt(_t,"jetExhaust",{position:{x:P.x,y:P.y,z:P.z-2.35*P.spec.scale},velocity:{x:0,y:0,z:-P.speed*.16},color:P.typeId==="a10"?16753487:6674943}));let me=P.z-de.z;if(Math.abs(me)<1.2&&Math.hypot(P.x-de.x,P.y-de.y)<de.radius+.7*P.spec.scale){if(Uu(P.spec.name+" collision",P)){Ou(N);continue}zu(`${P.spec.name} collision`);return}P.z>10&&(Math.hypot(P.x-de.x,P.y-de.y)<3.3&&(Vr("CLOSE PASS",120),Yt(_t,"nearMiss",{position:P,velocity:{x:0,y:0,z:P.speed},impulse:.14,roll:ut((P.x-de.x)/8,-1,1)*.008})),fi(P.view),Qt.splice(N,1))}}function tf(x,N){if(!x||!ue||!fe)return;let P=x.x-de.x,ee=x.z-de.z,me=Math.atan2(P,-ee)*180/Math.PI;ue.style.setProperty("--missile-bearing",`${me.toFixed(1)}deg`);let Ae="Ahead";Math.abs(me)>135?Ae="Behind":me<-35?Ae="Left":me>35&&(Ae="Right"),fe.textContent=N?`${Ae} \xB7 inbound`:`${Ae} \xB7 locking`}function nf(x){let N=0,P=null,ee=null;for(let pt=Ut.length-1;pt>=0;pt-=1){let ae=Ut[pt];if(ae.state==="locking"){if(!ae.source||!Qt.includes(ae.source)){fi(ae.view),Ut.splice(pt,1);continue}ae.x=ae.source.x,ae.y=ae.source.y-.4,ae.z=ae.source.z+.4,ae.timer=Math.max(0,ae.timer-x*(1-Me.lockResistance)),(Math.abs(de.vx)>2.2||Math.abs(de.vy)>6.2)&&(ae.timer=Math.min(ae.lockDuration,ae.timer+x*.22));let Ft=1-ae.timer/ae.lockDuration;Ft>=N&&(N=Ft,P=ae),ae.timer<=0&&ae.pendingLaunch&&Nu(ae,ae.pendingLaunch);continue}ae.life-=x,Lt.set(de.x-ae.x,de.y-ae.y,de.z-ae.z).normalize();let xt=(ae.life>3?2.8:1.2)*(ae.guidanceScale||1);ae.direction.lerp(Lt,1-Math.exp(-xt*x)).normalize(),ae.speed=Math.min(31,ae.speed+7*x),ae.x+=ae.direction.x*ae.speed*x,ae.y+=ae.direction.y*ae.speed*x,ae.z+=ae.direction.z*ae.speed*x,ae.view.position.set(ae.x,ae.y,ae.z),ae.view.lookAt(ae.x-ae.direction.x,ae.y-ae.direction.y,ae.z-ae.direction.z),ae.view.userData.flame.scale.y=.8+Math.sin(K*32)*.2,ae.smokeTimer-=x,ae.smokeTimer<=0&&(ae.smokeTimer=ft?.075:.045,Yt(_t,"missileSmoke",{position:ae,velocity:{x:-ae.direction.x*1.8,y:-ae.direction.y*1.8,z:-ae.direction.z*1.8}}));let lt=Math.hypot(ae.x-de.x,ae.y-de.y,ae.z-de.z);if(ae.closestDistance=Math.min(ae.closestDistance,lt),!ae.nearMissShown&&ae.closestDistance<3.1&&ae.closestDistance>de.radius+.35&&lt>ae.lastDistance+.16&&(ae.nearMissShown=!0,Yt(_t,"nearMiss",{position:ae,velocity:ae.direction,impulse:.26,roll:ut((ae.x-de.x)/8,-1,1)*.014})),ae.lastDistance=lt,(!ee||lt<ee.distance)&&(ee={missile:ae,distance:lt}),lt<de.radius+.4){if(Yt(_t,"explosion",{position:ae,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),Uu("missile strike",ae)){fi(ae.view),Ut.splice(pt,1);continue}Yt(_t,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),zu("missile strike");return}(ae.life<=0||ae.z>18||Math.abs(ae.x)>22||Math.abs(ae.y)>16)&&(fi(ae.view),Ut.splice(pt,1))}let me=!!ee;ee&&(P=ee.missile);let Ae=me?100:Math.round(N*100);xe.hidden=!P,ne.style.width=`${Ae}%`,ne.setAttribute("aria-valuenow",String(Ae)),tf(P,me)}function Fu(x,N,P){Lt.copy(P).sub(N);let ee=Lt.lengthSq();if(!ee)return x.distanceTo(N);let me=ut(cn.copy(x).sub(N).dot(Lt)/ee,0,1);return cn.copy(N).addScaledVector(Lt,me).distanceTo(x)}function rf(x){for(let N=kn.length-1;N>=0;N-=1){let P=kn[N];P.previous.set(P.x,P.y,P.z),P.x+=P.velocity.x*x,P.y+=P.velocity.y*x,P.z+=P.velocity.z*x,P.life-=x,P.view.position.set(P.x,P.y,P.z),P.view.rotation.z+=P.spin*x,P.view.rotation.x=Math.sin((1.9-P.life)*P.tumble)*.32,P.view.rotation.y=Math.cos((1.9-P.life)*P.tumble*.74)*.24,P.rage&&P.view.userData.flame&&(P.view.userData.flame.scale.y=.82+Math.sin(performance.now()*.03)*.18),P.trailTimer-=x,P.trailTimer<=0&&(P.trailTimer=ft?.06:.035,Yt(_t,"projectileTrail",{start:P.previous,end:P.view.position,life:.16,width:P.rage?.105:.055,color:P.rage?16738613:16770443}));let ee=!1;for(let me=Ut.length-1;me>=0;me-=1){let Ae=Ut[me];if(Ae.state==="active"&&Fu(new A(Ae.x,Ae.y,Ae.z),P.previous,P.view.position)<.62){Yt(_t,"explosion",{position:Ae,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),fi(Ae.view),Ut.splice(me,1),Vr("MISSILE DOWN",300),ee=!0;break}}if(!ee)for(let me=Qt.length-1;me>=0;me-=1){let Ae=Qt[me];if(Fu(new A(Ae.x,Ae.y,Ae.z),P.previous,P.view.position)<1.05*Ae.spec.scale){Ae.hp-=P.damage,Yt(_t,"explosion",{position:Ae,count:Ae.hp<=0?20:6,scale:Ae.hp<=0?1.05:.32,speed:Ae.hp<=0?7:4,color:Ae.hp<=0?16738866:16769130,impulse:Ae.hp<=0?.55:.08}),Ae.hp<=0&&Ou(me),ee=!0;break}}(ee||P.life<=0||P.z<-110)&&(fi(P.view),kn.splice(N,1))}}function Ou(x){let N=Qt[x];fi(N.view),Qt.splice(x,1);for(let P=Ut.length-1;P>=0;P-=1)Ut[P].source===N&&(fi(Ut[P].view),Ut.splice(P,1));ka(Math.max(2,Math.round(N.spec.score/190))),Li+=1,Zl(2.5),Vr(`${N.spec.name} DOWN`,N.spec.score),Ye.playJetDestroyed?.(ut(N.x/8,-1,1)),qe=Vi?.04:.15}function Vr(x,N){Q+=Math.round(N*ce),ce=ut(ce+.25,1,5),ve=3.4,V.textContent=String(Q),X.textContent=`${ce.toFixed(2)}\xD7`,Wt(`${x}. ${Math.round(N*ce)} points.`)}function Bu(){let x=Lu();if(!x||Fe!=="playing"){Ce?.classList.remove("is-locked"),le&&(le.textContent="Scanning"),S&&(S.hidden=!0),Ce&&(Ce.style.left="50%",Ce.style.top="50%");return}Lt.set(x.x,x.y,x.z).project(vt);let N=ut((Lt.x*.5+.5)*100,10,90),P=ut((-Lt.y*.5+.5)*100,16,84);Ce?.classList.add("is-locked"),Ce&&(Ce.style.left=`${N}%`,Ce.style.top=`${P}%`),le&&(le.textContent=`${x.spec.name} locked`),S&&(S.hidden=!1,S.textContent=`${Math.max(1,Math.round((de.z-x.z)*12))} m`)}function Kl(x){let N=Vt[H].speed*.5*Me.speed;Vl(Wi?.update(x,{speed:N}));for(let ee of sr.children)ee.position.z+=N*x*.34,ee.position.z>18&&(ee.position.z-=148);let P=Or.geometry.attributes.position;for(let ee=2;ee<P.array.length;ee+=3)P.array[ee]+=N*x*.55,P.array[ee]>6&&(P.array[ee]-=150);P.needsUpdate=!0}function $l(x){let N=qe;qe=Math.max(0,qe-x);let P=wu(_t,x,{camera:vt,playerPosition:de,cameraPosition:vt.position});du(ii,x,de,{camera:vt,shake:N,lookAhead:ft?29:32}),P&&(vt.position.x+=P.x,vt.position.y+=P.y,vt.position.z+=P.z,vt.rotateZ(P.roll))}function sf(x){if(Fe!=="playing"){Fe==="ready"?(de.y=.65+Math.sin(performance.now()/700)*.18,Pa(ii,x,de,{active:!1,speed:Vt[0].speed}),Kl(x*.35),$l(x)):Fe==="crashing"?(Pa(ii,x,de,{active:!1,speed:Vt[H].speed}),Kl(x*.45),$l(x)):wu(_t,x,{camera:vt,playerPosition:de,cameraPosition:vt?.position}),Bu();return}K+=x,te+=x*(1.5+H*.18)*Me.speed,be=Math.max(0,be-x),Xm(x),Yl(),ve-=x,ve<=0&&ce>1&&(ce=Math.max(1,ce-x*.75),X.textContent=`${ce.toFixed(2)}\xD7`),Zm(),Fe==="playing"&&(Xi?.update(x,{activeAircraft:Qt.length,activeMissiles:Ut.length,maxAircraft:Vt[H].maxJets,maxMissiles:Vt[H].missileCap,difficulty:H*.03}),Qm(x),ef(x),Fe==="playing"&&(nf(x),Fe==="playing"&&(Ym(x),rf(x),Kl(x),$l(x),Bu(),G.textContent=String(Math.floor(te)),Ye.update?.(x,{state:Fe,level:H,monkey:de,jets:Qt,missiles:Ut}))))}function zu(x){if(Fe!=="playing")return;Fe="crashing",R.disabled=!0,y&&(y.disabled=!0),He.delete("TouchLift"),Xi?.stop({clearSchedule:!0}),xe.hidden=!0,qe=Vi?.08:.28,Yt(_t,"explosion",{position:de,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),Yt(_t,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),Ye.playImpact?.(x),Ye.stopRun?.(x);let N=Math.floor(te);N>=8&&ka(Math.max(1,Math.floor(N/12))),N>wn&&(wn=N,W.textContent=String(wn),localStorage.setItem("monkeyNoFlyBest3D",String(wn))),window.setTimeout(()=>{Fe="gameover",e.dataset.mode="result",t.hidden=!1,i.hidden=!1,t.textContent="Flight terminated.",i.textContent=`${x}. You survived ${N} km, scored ${Q.toLocaleString()} points, and recovered ${ar} coconuts.`,r&&(r.hidden=!0),s.textContent="Return to Hangar",s.hidden=!1,Xl(!0),Wt(`Flight terminated by ${x}.`)},Vi?120:650)}function Hs(){Fe==="playing"&&(w=Fe,Fe="paused",E.hidden=!1,E.inert=!1,E.setAttribute("aria-hidden","false"),R.disabled=!0,y&&(y.disabled=!0),He.delete("TouchLift"),Ye.setPaused?.(!0),T.focus())}function Ql(){Fe==="paused"&&(Fe=w,E.setAttribute("aria-hidden","true"),E.hidden=!0,E.inert=!0,R.disabled=!1,y&&(y.disabled=!1),Ye.setPaused?.(!1),we=performance.now(),n.focus({preventScroll:!0}))}function ku(){let x=Ye.isMuted?.()||!1;U.setAttribute("aria-pressed",String(x)),U.setAttribute("aria-label",x?"Unmute sound":"Mute sound"),U.title=x?"Unmute sound":"Mute sound",U.querySelector("span").textContent=x?"\u{1F507}":"\u{1F50A}"}function af(x){x.target.closest("button")||x.pointerType!=="touch"&&(St={x:x.clientX,y:x.clientY,time:performance.now()},Fe==="playing"&&jl())}function of(x){if(!St||Fe!=="playing"){St=null;return}let N=x.clientX-St.x,P=x.clientY-St.y;Math.abs(N)>42&&Math.abs(N)>Math.abs(P)*1.2&&ql(N>0?1:-1),St=null}function Gu(x){if(Fe!=="playing"||x.pointerId!==wt)return;let N=L.getBoundingClientRect(),P=ut((x.clientX-N.left)/Math.max(1,N.width),0,1);de.lane=ut(Math.round(P*(ot.length-1)),0,ot.length-1)}function lf(x){Fe==="playing"&&(x.preventDefault(),wt=x.pointerId,L.setPointerCapture?.(x.pointerId),Gu(x))}function Hu(x){x.pointerId===wt&&(wt=null)}function cf(x){Fe==="playing"&&(x.preventDefault(),y.setPointerCapture?.(x.pointerId),He.add("TouchLift"),jl())}function Vu(x){x.preventDefault(),He.delete("TouchLift")}s.addEventListener("click",()=>{e.dataset.mode==="result"||Pi==="complete"?Hr():zm()}),a?.addEventListener("click",Iu),g?.addEventListener("click",x=>{let N=x.target.closest("[data-response]");N&&Gm(N.dataset.response)}),It?.addEventListener("click",Pu),st?.addEventListener("click",()=>{let x=_i(Ne,At[Ne]);if(!x)return;let N=gm(Ue,Ne,x.id);Be.textContent=N.ok?N.item.name+(N.action==="purchased"?" purchased and equipped.":" equipped."):N.reason,Pl?.(ii,Ue.equipped),Gr(Ne),qi()}),se?.addEventListener("click",x=>{let N=x.target.closest("[data-category]");N&&Gr(N.dataset.category)}),D.addEventListener("click",Hs),T.addEventListener("click",Ql),C.addEventListener("click",()=>{Ql(),Pu()}),U.addEventListener("click",()=>{Ye.setMuted?.(!Ye.isMuted?.()),Pt.muted=!!Ye.isMuted?.(),ku()}),R.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),Jl()}),L?.addEventListener("pointerdown",lf),L?.addEventListener("pointermove",Gu),L?.addEventListener("pointerup",Hu),L?.addEventListener("pointercancel",Hu),y?.addEventListener("pointerdown",cf),y?.addEventListener("pointerup",Vu),y?.addEventListener("pointercancel",Vu),n.addEventListener("pointerdown",af),n.addEventListener("pointerup",of),n.addEventListener("pointercancel",()=>{St=null}),n.addEventListener("webglcontextlost",x=>{x.preventDefault(),Fe==="playing"&&Hs(),Wt("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",Wl),window.addEventListener("blur",()=>{Fe==="playing"&&Hs(),ti?.setPaused(!0),Pt.pause()}),window.addEventListener("focus",()=>{ti?.setPaused(!1),["cinematic","dialogue"].includes(Fe)&&Pt.src&&!Pt.ended&&Pt.play().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.hidden&&Fe==="playing"&&Hs(),ti?.setPaused(document.hidden),document.hidden?Pt.pause():["cinematic","dialogue"].includes(Fe)&&Pt.src&&!Pt.ended&&Pt.play().catch(()=>{})}),window.addEventListener("keydown",x=>{if((["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(x.code)||Fe==="playing"&&x.code==="Enter")&&x.preventDefault(),!(x.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(x.code))){if(He.add(x.code),["cinematic","dialogue"].includes(Fe)&&x.code==="Escape"){x.preventDefault(),Iu();return}if(Fe==="dialogue"&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(x.code)){x.preventDefault();let N=[...g.querySelectorAll("button")],P=Math.max(0,N.indexOf(document.activeElement));N[x.code==="ArrowLeft"||x.code==="KeyA"?Math.max(0,P-1):Math.min(N.length-1,P+1)]?.focus();return}Fe==="playing"?((x.code==="Space"||x.code==="KeyW"||x.code==="ArrowUp")&&jl(),(x.code==="KeyA"||x.code==="ArrowLeft")&&ql(-1),(x.code==="KeyD"||x.code==="ArrowRight")&&ql(1),(x.code==="Enter"||x.code==="KeyX"||x.code==="KeyF"||x.code==="ShiftLeft")&&Jl(),(x.code==="Escape"||x.code==="KeyP")&&Hs()):Fe==="paused"&&(x.code==="Escape"||x.code==="KeyP")&&Ql()}}),window.addEventListener("keyup",x=>He.delete(x.code));function Wu(x){let N=Math.min(.1,(x-we)/1e3);for(we=x,De=N>.026?De+1:Math.max(0,De-2),De>90&&et>.72&&(et=Math.max(.72,et-.12),De=0,Am(_t,et<.84?"low":"medium",{reducedMotion:Vi}),Wl()),ze+=N;ze>=mt;)sf(mt),ze-=mt;xi&&Tt&&vt&&Fe!=="paused"&&!document.hidden&&xi.render(Tt,vt),requestAnimationFrame(Wu)}n.tabIndex=0,s.disabled=!0,s.textContent="Loading 3D Flight",ku(),Fm(),requestAnimationFrame(Wu)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
