(()=>{var Dh=n=>{throw TypeError(n)};var lp=(n,e,t)=>e.has(n)||Dh("Cannot "+t);var Uh=(n,e,t)=>e.has(n)?Dh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var ke=(n,e,t)=>(lp(n,e,"access private method"),t);var mu=0,Kl=1,fu=2;var ks=1,gu=2,Ur=3,Nr=0,Kt=1,Vt=2,Vi=0,Hn=1,Hi=2,$l=3,Ql=4,vu=5;var Fr=100,_u=101,xu=102,yu=103,Mu=104,Su=200,bu=201,Tu=202,Eu=203,wu=204,Au=205,Cu=206,Ru=207,Iu=208,Pu=209,Lu=210,Du=211,Uu=212,Nu=213,Fu=214,ec=0,tc=1,ic=2,Do=3,nc=4,rc=5,sc=6,ac=7,Ou=0,Bu=1,zu=2,Ti=0,oc=1,lc=2,cc=3,Gs=4,hc=5,uc=6,dc=7;var pc=300,Or=301,Wn=302,Uo=303,No=304,Vs=306,Un=1e3,yn=1001,Va=1002,mi=1003,ku=1004;var Hs=1005;var Lt=1006,Fo=1007;var Ei=1008;var ai=1009,mc=1010,fc=1011,Br=1012,Oo=1013,an=1014,_i=1015,Wi=1016,Bo=1017,zo=1018,zr=1020,gc=35902,vc=35899,Gu=1021,Vu=1022,wi=1023,An=1026,Xn=1027,ko=1028,Go=1029,kr=1030,_c=1031;var xc=1033,Vo=33776,Ho=33777,Wo=33778,Xo=33779,yc=35840,Mc=35841,Sc=35842,bc=35843,Tc=36196,Ec=37492,wc=37496,Ac=37488,Cc=37489,Rc=37490,Ic=37491,Pc=37808,Lc=37809,Dc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,kc=37817,Gc=37818,Vc=37819,Hc=37820,Wc=37821,Xc=36492,jc=36494,qc=36495,Yc=36283,Zc=36284,Jc=36285,Kc=36286;var ms=2300,Ha=2301,ka=2302,Bl=2303,zl=2400,kl=2401,Gl=2402;var Hu=0,Wu=1,jn="",yt="srgb",Nn="srgb-linear",fs="linear",ot="srgb";var Dn=7680;var Xu=512,ju=513,qu=514,jo=515,Yu=516,Zu=517,qo=518,Ju=519,Vl=35044,Gr=35048;var $c="300 es",rn=2e3,yr=2001;function cp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ku(){let n=Mr("canvas");return n.style.display="block",n}var Nh={},Sr=null;function Qc(...n){let e="THREE."+n.shift();Sr?Sr("log",e,...n):console.log(e,...n)}function $u(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){let e="THREE."+(n=$u(n)).shift();if(Sr)Sr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){let e="THREE."+(n=$u(n)).shift();if(Sr)Sr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function gs(...n){let e=n.join(" ");e in Nh||(Nh[e]=!0,Le(...n))}function Qu(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var ed={[ec]:1,[ic]:6,[nc]:7,[Do]:5,[tc]:0,[sc]:2,[ac]:4,[rc]:3},sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,_r=Math.PI/180,br=180/Math.PI;function qn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ot[255&n]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[255&e]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[63&t|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[255&i]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Hl(n,e){return(n%e+e)%e}function us(n,e,t){return(1-t)*n+t*e}function vr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var eh={DEG2RAD:_r,RAD2DEG:br,generateUUID:qn,clamp:Je,euclideanModulo:Hl,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:us,damp:function(n,e,t,i){return us(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Hl(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(Fh=n);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*_r},radToDeg:function(n){return n*br},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*p,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Yt,denormalize:vr},le=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(u!==m||l!==d||c!==p||h!==f){let _=l*d+c*p+h*f+u*m;_<0&&(d=-d,p=-p,f=-f,m=-m,_=-_);let g=1-o;if(_<.9995){let v=Math.acos(_),y=Math.sin(v);g=Math.sin(g*v)/y,l=l*g+d*(o=Math.sin(o*v)/y),c=c*g+p*o,h=h*g+f*o,u=u*g+m*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+m*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new C,Oh=new kt,We=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=r[0],_=r[3],g=r[6],v=r[1],y=r[4],T=r[7],M=r[2],w=r[5],L=r[8];return s[0]=a*m+o*v+l*M,s[3]=a*_+o*y+l*w,s[6]=a*g+o*T+l*L,s[1]=c*m+h*v+u*M,s[4]=c*_+h*y+u*w,s[7]=c*g+h*T+u*L,s[2]=d*m+p*v+f*M,s[5]=d*_+p*y+f*w,s[8]=d*g+p*T+f*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(r*c-h*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ul=new We,Bh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){let n={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===ot&&(r.r=nn(r.r),r.g=nn(r.g),r.b=nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nn]:{primaries:e,whitePoint:i,transfer:fs,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}var rt=hp();function nn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function xr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var rr,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=Mr("canvas")),rr.width=e.width,rr.height=e.height;let r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*nn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*nn(t[i]/255)):t[i]=nn(t[i]);return{data:t,width:e.width,height:e.height}}return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},up=0,Tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(dl(r[a].image)):s.push(dl(r[a]))}else s=dl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var dp=0,pl=new C,zt=class n extends sn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=qn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Le(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=pc,zt.DEFAULT_ANISOTROPY=1;var gt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],_=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+_)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(p+1)/2,M=(g+1)/2,w=(h+d)/4,L=(u+m)/4,F=(f+_)/4;return y>T&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=L/i):T>M?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=w/r,s=F/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=L/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-f)*(_-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(_-f)/v,this.y=(u-m)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends sn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new zt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Xa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vs=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,i){let r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),dn.crossVectors(i,ei),dn.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),dn.crossVectors(i,ei)),dn.normalize(),ca.crossVectors(ei,dn),r[0]=dn.x,r[4]=ca.x,r[8]=ei.x,r[1]=dn.y,r[5]=ca.y,r[9]=ei.y,r[2]=dn.z,r[6]=ca.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],_=i[10],g=i[14],v=i[3],y=i[7],T=i[11],M=i[15],w=r[0],L=r[4],F=r[8],I=r[12],z=r[1],G=r[5],H=r[9],V=r[13],k=r[2],W=r[6],Y=r[10],Z=r[14],pe=r[3],Me=r[7],xe=r[11],Se=r[15];return s[0]=a*w+o*z+l*k+c*pe,s[4]=a*L+o*G+l*W+c*Me,s[8]=a*F+o*H+l*Y+c*xe,s[12]=a*I+o*V+l*Z+c*Se,s[1]=h*w+u*z+d*k+p*pe,s[5]=h*L+u*G+d*W+p*Me,s[9]=h*F+u*H+d*Y+p*xe,s[13]=h*I+u*V+d*Z+p*Se,s[2]=f*w+m*z+_*k+g*pe,s[6]=f*L+m*G+_*W+g*Me,s[10]=f*F+m*H+_*Y+g*xe,s[14]=f*I+m*V+_*Z+g*Se,s[3]=v*w+y*z+T*k+M*pe,s[7]=v*L+y*G+T*W+M*Me,s[11]=v*F+y*H+T*Y+M*xe,s[15]=v*I+y*V+T*Z+M*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],m=e[7],_=e[11],g=e[15],v=l*p-c*d,y=o*p-c*u,T=o*d-l*u,M=a*p-c*h,w=a*d-l*h,L=a*u-o*h;return t*(m*v-_*y+g*T)-i*(f*v-_*M+g*w)+r*(f*y-m*M+g*L)-s*(f*T-m*w+_*L)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],_=e[14],g=e[15],v=t*o-i*a,y=t*l-r*a,T=t*c-s*a,M=i*l-r*o,w=i*c-s*o,L=r*c-s*l,F=h*m-u*f,I=h*_-d*f,z=h*g-p*f,G=u*_-d*m,H=u*g-p*m,V=d*g-p*_,k=v*V-y*H+T*G+M*z-w*I+L*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/k;return e[0]=(o*V-l*H+c*G)*W,e[1]=(r*H-i*V-s*G)*W,e[2]=(m*L-_*w+g*M)*W,e[3]=(d*w-u*L-p*M)*W,e[4]=(l*z-a*V-c*I)*W,e[5]=(t*V-r*z+s*I)*W,e[6]=(_*T-f*L-g*y)*W,e[7]=(h*L-d*T+p*y)*W,e[8]=(a*H-o*z+c*F)*W,e[9]=(i*z-t*H-s*F)*W,e[10]=(f*w-m*T+g*v)*W,e[11]=(u*T-h*w-p*v)*W,e[12]=(o*I-a*G-l*F)*W,e[13]=(t*G-i*I+r*F)*W,e[14]=(m*y-f*M-_*v)*W,e[15]=(h*M-u*y+d*v)*W,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,_=a*u,g=o*u,v=l*c,y=l*h,T=l*u,M=i.x,w=i.y,L=i.z;return r[0]=(1-(m+g))*M,r[1]=(p+T)*M,r[2]=(f-y)*M,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(d+g))*w,r[6]=(_+v)*w,r[7]=0,r[8]=(f+y)*L,r[9]=(_-v)*L,r[10]=(1-(d+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=sr.set(r[0],r[1],r[2]).length(),o=sr.set(r[4],r[5],r[6]).length(),l=sr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yi.copy(this);let c=1/a,h=1/o,u=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),f,m;if(l)f=s/(a-s),m=a*s/(a-s);else if(o===rn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==yr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),f,m;if(l)f=1/(a-s),m=a/(a-s);else if(o===rn)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==yr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},sr=new C,yi=new Ve,pp=new C(0,0,0),mp=new C(1,1,1),dn=new C,ca=new C,ei=new C,kh=new Ve,Gh=new kt,bi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fp=0,Vh=new C,ar=new kt,Ji=new Ve,ha=new C,ns=new C,gp=new C,vp=new kt,Hh=new C(1,0,0),Wh=new C(0,1,0),Xh=new C(0,0,1),jh={type:"added"},_p={type:"removed"},or={type:"childadded",child:null},ml={type:"childremoved",child:null},At=class n extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new bi,i=new kt,r=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new We}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ns,ha,this.up):Ji.lookAt(ha,ns,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Ji),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),or.child=e,this.dispatchEvent(or),or.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};At.DEFAULT_UP=new C(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let _=t.getJointPose(m,i),g=this._getHandJoint(c,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},ua={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Hl(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=yt){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return rt.workingToColorSpace(Bt.copy(this),e),65536*Math.round(Je(255*Bt.r,0,255))+256*Math.round(Je(255*Bt.g,0,255))+Math.round(Je(255*Bt.b,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Bt.copy(this),t);let i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=yt){rt.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,r=Bt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(ua);let i=us(pn.h,ua.h,t),r=us(pn.s,ua.s,t),s=us(pn.l,ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new ye;ye.NAMES=td;var xs=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ys=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new C,Ki=new C,gl=new C,$i=new C,lr=new C,cr=new C,qh=new C,vl=new C,_l=new C,xl=new C,yl=new gt,Ml=new gt,Sl=new gt,tn=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mi.subVectors(e,t),r.cross(Mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mi.subVectors(r,t),Ki.subVectors(i,t),gl.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(Ki),l=Mi.dot(gl),c=Ki.dot(Ki),h=Ki.dot(gl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$i)!==null&&$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(Ml,s.y),a.addScaledVector(Sl,s.z),a}static isFrontFacing(e,t,i,r){return Mi.subVectors(i,t),Ki.subVectors(e,t),Mi.cross(Ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),.5*Mi.cross(Ki).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;lr.subVectors(r,i),cr.subVectors(s,i),vl.subVectors(e,i);let l=lr.dot(vl),c=cr.dot(vl);if(l<=0&&c<=0)return t.copy(i);_l.subVectors(e,r);let h=lr.dot(_l),u=cr.dot(_l);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(lr,a);xl.subVectors(e,s);let p=lr.dot(xl),f=cr.dot(xl);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(cr,o);let _=h*f-p*u;if(_<=0&&u-h>=0&&p-f>=0)return qh.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(qh,o);let g=1/(_+m+d);return a=m*g,o=d*g,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),pa.subVectors(this.max,rs),hr.subVectors(e.a,rs),ur.subVectors(e.b,rs),dr.subVectors(e.c,rs),mn.subVectors(ur,hr),fn.subVectors(dr,ur),Rn.subVectors(hr,dr);let t=[0,-mn.z,mn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!!bl(t,hr,ur,dr,pa)&&(t=[1,0,0,0,1,0,0,0,1],!!bl(t,hr,ur,dr,pa)&&(ma.crossVectors(mn,fn),t=[ma.x,ma.y,ma.z],bl(t,hr,ur,dr,pa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Si).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qi=[new C,new C,new C,new C,new C,new C,new C,new C],Si=new C,da=new fi,hr=new C,ur=new C,dr=new C,mn=new C,fn=new C,Rn=new C,rs=new C,pa=new C,ma=new C,In=new C;function bl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){In.fromArray(n,s);let o=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Sg=yp();function yp(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var wt=new C,fa=new le,Mp=0,Et=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vl,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}};var Ms=class extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ss=class extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var De=class extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sp=new fi,ss=new C,Tl=new C,gi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);let t=ss.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(Tl)),this.expandByPoint(ss.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bp=0,pi=new Ve,El=new At,pr=new C,ti=new fi,as=new fi,Pt=new C,st=class n extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Ss:Ms)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(ti.min,as.min),ti.expandByPoint(Pt),Pt.addVectors(ti.max,as.max),ti.expandByPoint(Pt)):(ti.expandByPoint(as.min),ti.expandByPoint(as.max))}ti.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),Pt.add(pr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new C,l[F]=new C;let c=new C,h=new C,u=new C,d=new le,p=new le,f=new le,m=new C,_=new C;function g(F,I,z){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,z),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,z),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let G=1/(p.x*f.y-f.x*p.y);isFinite(G)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(G),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(G),o[F].add(m),o[I].add(m),o[z].add(m),l[F].add(_),l[I].add(_),l[z].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,I=v.length;F<I;++F){let z=v[F],G=z.start;for(let H=G,V=G+z.count;H<V;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let y=new C,T=new C,M=new C,w=new C;function L(F){M.fromBufferAttribute(r,F),w.copy(M);let I=o[F];y.copy(I),y.sub(M.multiplyScalar(M.dot(I))).normalize(),T.crossVectors(w,I);let z=T.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,z)}for(let F=0,I=v.length;F<I;++F){let z=v[F],G=z.start;for(let H=G,V=G+z.count;H<V;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Et(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,_=l.length;m<_;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Et(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bg=new C;var Tp=0,Oi=class extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Le(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Tg=new C,Eg=new C,wg=new C,Ag=new le,Cg=new le,Rg=new Ve,Ig=new C,Pg=new C,Lg=new C,Dg=new le,Ug=new le,Ng=new le;var Fg=new C,Og=new C;var en=new C,wl=new C,ga=new C,gn=new C,Al=new C,va=new C,Cl=new C,Fn=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wl.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(wl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ga),o=gn.dot(this.direction),l=-gn.dot(ga),c=gn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(wl).addScaledVector(ga,d),p}intersectSphere(e,t){en.subVectors(e.center,this.origin);let i=en.dot(this.direction),r=en.dot(en)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,i,r,s){Al.subVectors(t,e),va.subVectors(i,e),Cl.crossVectors(Al,va);let a,o=this.direction.dot(Cl);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}gn.subVectors(this.origin,e);let l=a*this.direction.dot(va.crossVectors(gn,va));if(l<0)return null;let c=a*this.direction.dot(Al.cross(gn));if(c<0||l+c>o)return null;let h=-a*gn.dot(Cl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yh=new Ve,Pn=new Fn,_a=new gi,Zh=new C,xa=new C,ya=new C,Ma=new C,Rl=new C,Sa=new C,Jh=new C,ba=new C,qe=class extends At{constructor(e=new st,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Rl.fromBufferAttribute(u,e),a?Sa.addScaledVector(Rl,h):Sa.addScaledVector(Rl.sub(t),h))}t.add(Sa)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),Pn.copy(e.ray).recast(e.near),_a.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(_a,Zh)===null||Pn.origin.distanceToSquared(Zh)>(e.far-e.near)**2))return;Yh.copy(s).invert(),Pn.copy(e.ray).applyMatrix4(Yh),i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Pn)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),y=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));v<y;v+=3)r=Ta(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=Ta(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),y=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));v<y;v+=3)r=Ta(this,g,e,i,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)r=Ta(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Ta(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xa),n.getVertexPosition(l,ya),n.getVertexPosition(c,Ma);let h=(function(u,d,p,f,m,_,g,v){let y;if(y=d.side===1?f.intersectTriangle(g,_,m,!0,v):f.intersectTriangle(m,_,g,d.side===0,v),y===null)return null;ba.copy(v),ba.applyMatrix4(u.matrixWorld);let T=p.ray.origin.distanceTo(ba);return T<p.near||T>p.far?null:{distance:T,point:ba.clone(),object:u}})(n,e,t,i,xa,ya,Ma,Jh);if(h){let u=new C;tn.getBarycoord(Jh,xa,ya,Ma,u),r&&(h.uv=tn.getInterpolatedAttribute(r,o,l,c,u,new le)),s&&(h.uv1=tn.getInterpolatedAttribute(s,o,l,c,u,new le)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};tn.getNormal(xa,ya,Ma,d.normal),h.face=d,h.barycoord=u}return h}var Bg=new C,zg=new gt,kg=new gt,Gg=new C,Vg=new Ve,Hg=new C,Wg=new gi,Xg=new Ve,jg=new Fn;var On=class extends zt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qg=new Ve,Yg=new Ve;var bs=class extends Et{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Ve,Kh=new Ve,Ea=[],$h=new fi,Ep=new Ve,os=new qe,ls=new gi,Bn=class extends qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ep)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),$h.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union($h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),ls.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(i),e.ray.intersectsSphere(ls)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),Kh.multiplyMatrices(i,mr),os.matrixWorld=Kh,os.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=s,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new On(new Float32Array(r*this.count),r,this.count,ko,_i));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Il=new C,wp=new C,Ap=new We,Ni=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Il.subVectors(i,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ap.getNormalMatrix(e),r=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ln=new gi,Cp=new le(.5,.5),wa=new C,Mn=class{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],m=s[9],_=s[10],g=s[11],v=s[12],y=s[13],T=s[14],M=s[15];if(r[0].setComponents(c-a,p-h,g-f,M-v).normalize(),r[1].setComponents(c+a,p+h,g+f,M+v).normalize(),r[2].setComponents(c+o,p+u,g+m,M+y).normalize(),r[3].setComponents(c-o,p-u,g-m,M-y).normalize(),i)r[4].setComponents(l,d,_,T).normalize(),r[5].setComponents(c-l,p-d,g-_,M-T).normalize();else if(r[4].setComponents(c-l,p-d,g-_,M-T).normalize(),t===rn)r[5].setComponents(c+l,p+d,g+_,M+T).normalize();else{if(t!==yr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,_,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){Ln.center.set(0,0,0);let t=Cp.distanceTo(e.center);return Ln.radius=.7071067811865476+t,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(wa.x=r.normal.x>0?e.max.x:e.min.x,wa.y=r.normal.y>0?e.max.y:e.min.y,wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Li=new Ve,Di=new Mn,qa=class n{constructor(){this.coordinateSystem=rn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Li.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Di.setFromProjectionMatrix(Li,r.coordinateSystem,r.reversedDepth),Di.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Li.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Di.setFromProjectionMatrix(Li,r.coordinateSystem,r.reversedDepth),Di.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Li.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Di.setFromProjectionMatrix(Li,r.coordinateSystem,r.reversedDepth),Di.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Li.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Di.setFromProjectionMatrix(Li,r.coordinateSystem,r.reversedDepth),Di.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Li.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Di.setFromProjectionMatrix(Li,r.coordinateSystem,r.reversedDepth),Di.containsPoint(e))return!0}return!1}clone(){return new n}};var Wl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},Zg=new Ve,Jg=new ye(1,1,1),Kg=new Mn,$g=new qa,Qg=new fi,e0=new gi,t0=new C,i0=new C,n0=new C,r0=new Wl,s0=new qe;var wr=class extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ya=new C,Za=new C,Qh=new Ve,cs=new Fn,Aa=new gi,Pl=new C,eu=new C,Ts=class extends At{constructor(e=new st,t=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ya.fromBufferAttribute(t,r-1),Za.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ya.distanceTo(Za);e.setAttribute("lineDistance",new De(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;Qh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Qh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=h.getX(f),g=h.getX(f+1),v=Ca(this,e,cs,l,_,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(d),_=Ca(this,e,cs,l,f,m,p-1);_&&t.push(_)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=Ca(this,e,cs,l,f,f+1,f);_&&t.push(_)}if(this.isLineLoop){let f=Ca(this,e,cs,l,p-1,d,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ca(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Ya.fromBufferAttribute(o,r),Za.fromBufferAttribute(o,s),t.distanceSqToSegment(Ya,Za,Pl,eu)>i)return;Pl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Pl);return l<e.near||l>e.far?void 0:{distance:l,point:eu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var a0=new C,o0=new C;var Sn=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tu=new Ve,Xl=new Fn,Ra=new gi,Ia=new C,zn=class extends At{constructor(e=new st,t=new Sn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;tu.copy(r).invert(),Xl.copy(e.ray).applyMatrix4(tu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Ia.fromBufferAttribute(h,p),iu(Ia,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ia.fromBufferAttribute(h,u),iu(Ia,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function iu(n,e,t,i,r,s,a){let o=Xl.distanceSqToPoint(n);if(o<t){let l=new C;Xl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Es=class extends zt{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends zt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class extends zt{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==An&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ja=class extends bn{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ws=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class n extends st{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,_,g,v,y,T,M,w,L,F,I){let z=T/L,G=M/F,H=T/2,V=M/2,k=w/2,W=L+1,Y=F+1,Z=0,pe=0,Me=new C;for(let xe=0;xe<Y;xe++){let Se=xe*G-V;for(let me=0;me<W;me++){let te=me*z-H;Me[m]=te*v,Me[_]=Se*y,Me[g]=k,c.push(Me.x,Me.y,Me.z),Me[m]=0,Me[_]=0,Me[g]=w>0?1:-1,h.push(Me.x,Me.y,Me.z),u.push(me/L),u.push(1-xe/F),Z+=1}}for(let xe=0;xe<F;xe++)for(let Se=0;Se<L;Se++){let me=d+Se+W*xe,te=d+Se+W*(xe+1),ae=d+(Se+1)+W*(xe+1),he=d+(Se+1)+W*xe;l.push(me,te,he),l.push(te,ae,he),pe+=6}o.addGroup(p,pe,I),p+=pe,d+=Z}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ka=class n extends st{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*i+s,m=r+1,_=new C,g=new C;for(let v=0;v<=f;v++){let y=0,T=0,M=0,w=0;if(v<=i){let I=v/i,z=I*Math.PI/2;T=-h-e*Math.cos(z),M=e*Math.sin(z),w=-e*Math.cos(z),y=I*u}else if(v<=i+s){let I=(v-i)/s;T=I*t-h,M=e,w=0,y=u+I*d}else{let I=(v-i-s)/i,z=I*Math.PI/2;T=h+e*Math.sin(z),M=e*Math.cos(z),w=e*Math.sin(z),y=u+d+I*u}let L=Math.max(0,Math.min(1,y/p)),F=0;v===0?F=.5/r:v===f&&(F=-.5/r);for(let I=0;I<=r;I++){let z=I/r,G=z*Math.PI*2,H=Math.sin(G),V=Math.cos(G);g.x=-M*V,g.y=T,g.z=M*H,o.push(g.x,g.y,g.z),_.set(-M*V,w,M*H),_.normalize(),l.push(_.x,_.y,_.z),c.push(z+F,L)}if(v>0){let I=(v-1)*m;for(let z=0;z<r;z++){let G=I+z,H=I+z+1,V=v*m+z,k=v*m+z+1;a.push(G,H,V),a.push(H,k,V)}}}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},$a=class n extends st{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new C,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class n extends st{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],_=i/2,g=0;function v(y){let T=f,M=new le,w=new C,L=0,F=y===!0?e:t,I=y===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,_*I,0),d.push(0,I,0),p.push(.5,.5),f++;let z=f;for(let G=0;G<=r;G++){let H=G/r*l+o,V=Math.cos(H),k=Math.sin(H);w.x=F*k,w.y=_*I,w.z=F*V,u.push(w.x,w.y,w.z),d.push(0,I,0),M.x=.5*V+.5,M.y=.5*k*I+.5,p.push(M.x,M.y),f++}for(let G=0;G<r;G++){let H=T+G,V=z+G;y===!0?h.push(V,V+1,H):h.push(V+1,V,H),L+=3}c.addGroup(g,L,y===!0?1:2),g+=L}(function(){let y=new C,T=new C,M=0,w=(t-e)/i;for(let L=0;L<=s;L++){let F=[],I=L/s,z=I*(t-e)+e;for(let G=0;G<=r;G++){let H=G/r,V=H*l+o,k=Math.sin(V),W=Math.cos(V);T.x=z*k,T.y=-I*i+_,T.z=z*W,u.push(T.x,T.y,T.z),y.set(k,w,W).normalize(),d.push(y.x,y.y,y.z),p.push(H,1-I),F.push(f++)}m.push(F)}for(let L=0;L<r;L++)for(let F=0;F<s;F++){let I=m[F][L],z=m[F+1][L],G=m[F+1][L+1],H=m[F][L+1];(e>0||F!==0)&&(h.push(I,z,H),M+=3),(t>0||F!==s-1)&&(h.push(z,G,H),M+=3)}c.addGroup(g,M,0),g+=M})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zi=class n extends Zt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tn=class n extends st{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,f,m,_){let g=_+1,v=[];for(let y=0;y<=g;y++){v[y]=[];let T=p.clone().lerp(m,y/g),M=f.clone().lerp(m,y/g),w=g-y;for(let L=0;L<=w;L++)v[y][L]=L===0&&y===g?T:T.clone().lerp(M,L/w)}for(let y=0;y<g;y++)for(let T=0;T<2*(g-y)-1;T++){let M=Math.floor(T/2);T%2==0?(l(v[y][M+1]),l(v[y+1][M]),l(v[y][M])):(l(v[y][M+1]),l(v[y+1][M+1]),l(v[y+1][M]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let m=3*p;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(p,f,m,_){_<0&&p.x===1&&(a[f]=p.x-1),m.x===0&&m.z===0&&(a[f]=_/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new C,m=new C,_=new C;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],m),c(t[g+2],_),o(f,m,_,p)})(r),(function(p){let f=new C;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(p),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let p=new C;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let m=u(p)/2/Math.PI+.5,_=d(p)/Math.PI+.5;a.push(m,1-_)}(function(){let f=new C,m=new C,_=new C,g=new C,v=new le,y=new le,T=new le;for(let M=0,w=0;M<s.length;M+=9,w+=6){f.set(s[M+0],s[M+1],s[M+2]),m.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),v.set(a[w+0],a[w+1]),y.set(a[w+2],a[w+3]),T.set(a[w+4],a[w+5]),g.copy(f).add(m).add(_).divideScalar(3);let L=u(g);h(v,w+0,f,L),h(y,w+2,m,L),h(T,w+4,_,L)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],_=a[f+2],g=a[f+4],v=Math.max(m,_,g),y=Math.min(m,_,g);v>.9&&y<.1&&(m<.2&&(a[f+0]+=1),_<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Qa=class n extends Tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Pa=new C,La=new C,Ll=new C,Da=new tn,eo=class extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(_r*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:_,c:g}=Da;if(m.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Da.getNormal(Ll),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,T=u[v],M=u[y],w=Da[h[v]],L=Da[h[y]],F=`${T}_${M}`,I=`${M}_${T}`;I in d&&d[I]?(Ll.dot(d[I].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(L.x,L.y,L.z)),d[I]=null):F in d||(d[F]={index0:c[v],index1:c[y],normal:Ll.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:_}=d[f];Pa.fromBufferAttribute(o,m),La.fromBufferAttribute(o,_),p.push(Pa.x,Pa.y,Pa.z),p.push(La.x,La.y,La.z)}this.setAttribute("position",new De(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],s=[],a=[],o=new C,l=new Ve;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends ri{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},to=class extends Ar{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function th(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Ua=new C,Dl=new th,Ul=new th,Nl=new th,io=class extends ri{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ua.subVectors(r[0],r[1]).add(r[0]),o=Ua);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ua.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),_<1e-4&&(_=m),Dl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,_),Ul.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,_),Nl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,_)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Ul.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Nl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Dl.calc(h),Ul.calc(h),Nl.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nu(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function ds(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function ps(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var As=class extends ri{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ps(e,r.x,s.x,a.x,o.x),ps(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends ri{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ps(e,r.x,s.x,a.x,o.x),ps(e,r.y,s.y,a.y,o.y),ps(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cs=class extends ri{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends ri{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rs=class extends ri{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ds(e,r.x,s.x,a.x),ds(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends ri{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ds(e,r.x,s.x,a.x),ds(e,r.y,s.y,a.y),ds(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},so=Object.freeze({__proto__:null,ArcCurve:to,CatmullRomCurve3:io,CubicBezierCurve:As,CubicBezierCurve3:no,EllipseCurve:Ar,LineCurve:Cs,LineCurve3:ro,QuadraticBezierCurve:Rs,QuadraticBezierCurve3:Is,SplineCurve:Ps}),ao=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new so[r.type]().fromJSON(r))}return this}},Ls=class extends ao{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Cs(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Rs(this.currentPoint.clone(),new le(e,t),new le(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new As(this.currentPoint.clone(),new le(e,t),new le(i,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ps(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Ar(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kn=class extends Ls{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ls().fromJSON(r))}return this}};function Rp(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=ru(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let f=[];for(let m=0,_=u.length;m<_;m++){let g=ru(h,u[m]*p,m<_-1?u[m+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Op(g))}f.sort(Up);for(let m=0;m<f.length;m++)d=Np(f[m],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],f=n[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ds(s,a,t,o,l,c,0),a}function ru(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=su(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=su(a/i|0,n[a],n[a+1],s);return s&&Cr(s,s.next)&&(Ns(s),s=s.next),s}function Gn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Cr(i,i.next)&&Mt(i.prev,i,i.next)!==0)i=i.next;else{if(Ns(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ds(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=jl(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,m=1;do{let _,g=p;p=null;let v=null;for(f=0;g;){f++;let y=g,T=0;for(let w=0;w<m&&(T++,y=y.nextZ,y);w++);let M=m;for(;T>0||M>0&&y;)T!==0&&(M===0||!y||g.z<=y.z)?(_=g,g=g.nextZ,T--):(_=y,y=y.nextZ,M--),v?v.nextZ=_:p=_,_.prevZ=v,v=_;g=y}v.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Pp(n,i,r,s):Ip(n))e.push(l.i,n.i,c.i),Ns(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?Ds(n=Lp(Gn(n),e),e,t,i,r,s,2):a===2&&Dp(n,e,t,i,r,s):Ds(Gn(n),e,t,i,r,s,1);break}}}function Ip(n){let e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&hs(r,o,s,l,a,c,f.x,f.y)&&Mt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Pp(n,e,t,i){let r=n.prev,s=n,a=n.next;if(Mt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),m=Math.max(o,l,c),_=Math.max(h,u,d),g=jl(p,f,e,t,i),v=jl(m,_,e,t,i),y=n.prevZ,T=n.nextZ;for(;y&&y.z>=g&&T&&T.z<=v;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=_&&y!==r&&y!==a&&hs(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=p&&T.x<=m&&T.y>=f&&T.y<=_&&T!==r&&T!==a&&hs(o,h,l,u,c,d,T.x,T.y)&&Mt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=_&&y!==r&&y!==a&&hs(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=v;){if(T.x>=p&&T.x<=m&&T.y>=f&&T.y<=_&&T!==r&&T!==a&&hs(o,h,l,u,c,d,T.x,T.y)&&Mt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Lp(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Cr(i,r)&&nd(i,t,t.next,r)&&Us(i,r)&&Us(r,i)&&(e.push(i.i,t.i,r.i),Ns(t),Ns(t.next),t=n=r),t=t.next}while(t!==n);return Gn(t)}function Dp(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bp(a,o)){let l=rd(a,o);return a=Gn(a,a.next),l=Gn(l,l.next),Ds(a,e,t,i,r,s,0),void Ds(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Up(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Np(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(Cr(r,a))return a;do{if(Cr(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&id(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);Us(a,r)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&Fp(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=rd(t,n);return Gn(i,i.next),Gn(t,t.next)}function Fp(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function jl(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Op(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function id(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function hs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&id(n,e,t,i,r,s,a,o)}function Bp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&nd(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Us(n,e)&&Us(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||Cr(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Cr(n,e){return n.x===e.x&&n.y===e.y}function nd(n,e,t,i){let r=Fa(Mt(n,e,t)),s=Fa(Mt(n,e,i)),a=Fa(Mt(t,i,n)),o=Fa(Mt(t,i,e));return r!==s&&a!==o||!(r!==0||!Na(n,t,e))||!(s!==0||!Na(n,i,e))||!(a!==0||!Na(t,n,i))||!(o!==0||!Na(t,e,i))}function Na(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fa(n){return n>0?1:n<0?-1:0}function Us(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function rd(n,e){let t=ql(n.i,n.x,n.y),i=ql(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function su(n,e,t,i){let r=ql(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ns(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Yl=class{static triangulate(e,t,i=2){return Rp(e,t,i)}},Fi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];au(e),ou(i,e);let a=e.length;t.forEach(au);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,ou(i,t[l]);let o=Yl.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function au(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ou(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Rr=class n extends st{constructor(e=new kn([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:zp,y,T,M,w,L,F=!1;if(g){y=g.getSpacedPoints(h),F=!0,d=!1;let D=!!g.isCatmullRomCurve3&&g.closed;T=g.computeFrenetFrames(h,D),M=new C,w=new C,L=new C}d||(_=0,p=0,f=0,m=0);let I=o.extractPoints(c),z=I.shape,G=I.holes;if(!Fi.isClockWise(z)){z=z.reverse();for(let D=0,x=G.length;D<x;D++){let R=G[D];Fi.isClockWise(R)&&(G[D]=R.reverse())}}function H(D){let x=10000000000000001e-36,R=D[0];for(let P=1;P<=D.length;P++){let O=P%D.length,q=D[O],J=q.x-R.x,j=q.y-R.y,re=J*J+j*j,ie=Math.max(Math.abs(q.x),Math.abs(q.y),Math.abs(R.x),Math.abs(R.y));re<=x*ie*ie?(D.splice(O,1),P--):R=q}}H(z),G.forEach(H);let V=G.length,k=z;for(let D=0;D<V;D++){let x=G[D];z=z.concat(x)}function W(D,x,R){return x||Fe("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(x,R)}let Y=z.length;function Z(D,x,R){let P,O,q,J=D.x-x.x,j=D.y-x.y,re=R.x-D.x,ie=R.y-D.y,oe=J*J+j*j,se=J*ie-j*re;if(Math.abs(se)>Number.EPSILON){let ue=Math.sqrt(oe),Ie=Math.sqrt(re*re+ie*ie),Be=x.x-j/ue,Ke=x.y+J/ue,je=((R.x-ie/Ie-Be)*ie-(R.y+re/Ie-Ke)*re)/(J*ie-j*re);P=Be+J*je-D.x,O=Ke+j*je-D.y;let fe=P*P+O*O;if(fe<=2)return new le(P,O);q=Math.sqrt(fe/2)}else{let ue=!1;J>Number.EPSILON?re>Number.EPSILON&&(ue=!0):J<-Number.EPSILON?re<-Number.EPSILON&&(ue=!0):Math.sign(j)===Math.sign(ie)&&(ue=!0),ue?(P=-j,O=J,q=Math.sqrt(oe)):(P=J,O=j,q=Math.sqrt(oe/2))}return new le(P/q,O/q)}let pe=[];for(let D=0,x=k.length,R=x-1,P=D+1;D<x;D++,R++,P++)R===x&&(R=0),P===x&&(P=0),pe[D]=Z(k[D],k[R],k[P]);let Me=[],xe,Se,me=pe.concat();for(let D=0,x=V;D<x;D++){let R=G[D];xe=[];for(let P=0,O=R.length,q=O-1,J=P+1;P<O;P++,q++,J++)q===O&&(q=0),J===O&&(J=0),xe[P]=Z(R[P],R[q],R[J]);Me.push(xe),me=me.concat(xe)}if(_===0)Se=Fi.triangulateShape(k,G);else{let D=[],x=[];for(let R=0;R<_;R++){let P=R/_,O=p*Math.cos(P*Math.PI/2),q=f*Math.sin(P*Math.PI/2)+m;for(let J=0,j=k.length;J<j;J++){let re=W(k[J],pe[J],q);Ae(re.x,re.y,-O),P===0&&D.push(re)}for(let J=0,j=V;J<j;J++){let re=G[J];xe=Me[J];let ie=[];for(let oe=0,se=re.length;oe<se;oe++){let ue=W(re[oe],xe[oe],q);Ae(ue.x,ue.y,-O),P===0&&ie.push(ue)}P===0&&x.push(ie)}}Se=Fi.triangulateShape(D,x)}let te=Se.length,ae=f+m;for(let D=0;D<Y;D++){let x=d?W(z[D],me[D],ae):z[D];F?(w.copy(T.normals[0]).multiplyScalar(x.x),M.copy(T.binormals[0]).multiplyScalar(x.y),L.copy(y[0]).add(w).add(M),Ae(L.x,L.y,L.z)):Ae(x.x,x.y,0)}for(let D=1;D<=h;D++)for(let x=0;x<Y;x++){let R=d?W(z[x],me[x],ae):z[x];F?(w.copy(T.normals[D]).multiplyScalar(R.x),M.copy(T.binormals[D]).multiplyScalar(R.y),L.copy(y[D]).add(w).add(M),Ae(L.x,L.y,L.z)):Ae(R.x,R.y,u/h*D)}for(let D=_-1;D>=0;D--){let x=D/_,R=p*Math.cos(x*Math.PI/2),P=f*Math.sin(x*Math.PI/2)+m;for(let O=0,q=k.length;O<q;O++){let J=W(k[O],pe[O],P);Ae(J.x,J.y,u+R)}for(let O=0,q=G.length;O<q;O++){let J=G[O];xe=Me[O];for(let j=0,re=J.length;j<re;j++){let ie=W(J[j],xe[j],P);F?Ae(ie.x,ie.y+y[h-1].y,y[h-1].x+R):Ae(ie.x,ie.y,u+R)}}}function he(D,x){let R=D.length;for(;--R>=0;){let P=R,O=R-1;O<0&&(O=D.length-1);for(let q=0,J=h+2*_;q<J;q++){let j=Y*q,re=Y*(q+1);b(x+P+j,x+O+j,x+O+re,x+P+re)}}}function Ae(D,x,R){l.push(D),l.push(x),l.push(R)}function ze(D,x,R){S(D),S(x),S(R);let P=r.length/3,O=v.generateTopUV(i,r,P-3,P-2,P-1);U(O[0]),U(O[1]),U(O[2])}function b(D,x,R,P){S(D),S(x),S(P),S(x),S(R),S(P);let O=r.length/3,q=v.generateSideWallUV(i,r,O-6,O-3,O-2,O-1);U(q[0]),U(q[1]),U(q[3]),U(q[1]),U(q[2]),U(q[3])}function S(D){r.push(l[3*D+0]),r.push(l[3*D+1]),r.push(l[3*D+2])}function U(D){s.push(D.x),s.push(D.y)}(function(){let D=r.length/3;if(d){let x=0,R=Y*x;for(let P=0;P<te;P++){let O=Se[P];ze(O[2]+R,O[1]+R,O[0]+R)}x=h+2*_,R=Y*x;for(let P=0;P<te;P++){let O=Se[P];ze(O[0]+R,O[1]+R,O[2]+R)}}else{for(let x=0;x<te;x++){let R=Se[x];ze(R[2],R[1],R[0])}for(let x=0;x<te;x++){let R=Se[x];ze(R[0]+Y*h,R[1]+Y*h,R[2]+Y*h)}}i.addGroup(D,r.length/3-D,0)})(),(function(){let D=r.length/3,x=0;he(k,x),x+=k.length;for(let R=0,P=G.length;R<P;R++){let O=G[R];he(O,x),x+=O.length}i.addGroup(D,r.length/3-D,1)})()}this.setAttribute("position",new De(r,3)),this.setAttribute("uv",new De(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new so[r.type]().fromJSON(r)),new n(i,e.options)}},zp={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new le(s,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*s],_=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-f),new le(m,1-g)]:[new le(o,1-l),new le(h,1-u),new le(p,1-f),new le(_,1-g)]}},Vn=class n extends Tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},oo=class n extends st{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Je(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new le,p=new C,f=new C,m=new C,_=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){let y=i+v*h*r,T=Math.sin(y),M=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*T,u.y=e[w].y,u.z=e[w].x*M,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);let L=l[3*w+0]*T,F=l[3*w+1],I=l[3*w+0]*M;c.push(L,F,I)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let T=y+v*e.length,M=T,w=T+e.length,L=T+e.length+1,F=T+1;s.push(M,w,F),s.push(L,F,w)}this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},lo=class n extends Tn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},vi=class n extends st{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],_=[];for(let g=0;g<h;g++){let v=g*d-a;for(let y=0;y<c;y++){let T=y*u-s;f.push(T,-v,0),m.push(0,0,1),_.push(y/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let y=v+c*g,T=v+c*(g+1),M=v+1+c*(g+1),w=v+1+c*g;p.push(y,T,w),p.push(T,M,w)}this.setIndex(p),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(m,3)),this.setAttribute("uv",new De(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},co=class n extends st{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new C,f=new le;for(let m=0;m<=r;m++){for(let _=0;_<=i;_++){let g=s+_/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<r;m++){let _=m*(i+1);for(let g=0;g<i;g++){let v=g+_,y=v,T=v+i+1,M=v+i+2,w=v+1;o.push(y,T,w),o.push(T,M,w)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ho=class n extends st{constructor(e=new kn([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Fi.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,g=f.length;_<g;_++){let v=f[_];Fi.isClockWise(v)===!0&&(f[_]=v.reverse())}let m=Fi.triangulateShape(p,f);for(let _=0,g=f.length;_<g;_++){let v=f[_];p=p.concat(v)}for(let _=0,g=p.length;_<g;_++){let v=p[_];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let _=0,g=m.length;_<g;_++){let v=m[_],y=v[0]+u,T=v[1]+u,M=v[2]+u;i.push(y,T,M),l+=3}}this.setIndex(i),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(s,3)),this.setAttribute("uv",new De(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},ki=class n extends st{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],m=[],_=[];for(let g=0;g<=i;g++){let v=[],y=g/i,T=0;g===0&&a===0?T=.5/t:g===i&&l===Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){let w=M/t;u.x=-e*Math.cos(r+w*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+w*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),_.push(w+T,1-y),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let y=h[g][v+1],T=h[g][v],M=h[g+1][v],w=h[g+1][v+1];(g!==0||a>0)&&p.push(y,T,w),(g!==i-1||l<Math.PI)&&p.push(T,M,w)}this.setIndex(p),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(m,3)),this.setAttribute("uv",new De(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},uo=class n extends Tn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},po=class n extends st{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new C,p=new C,f=new C;for(let m=0;m<=i;m++){let _=a+m/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(_))*Math.cos(v),p.y=(e+t*Math.cos(_))*Math.sin(v),p.z=t*Math.sin(_),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/r),u.push(m/i)}}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){let g=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,y=(r+1)*(m-1)+_,T=(r+1)*m+_;l.push(g,v,T),l.push(v,y,T)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},mo=class n extends st{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,f=new C,m=new C,_=new C,g=new C;for(let y=0;y<=i;++y){let T=y/i*s*Math.PI*2;v(T,s,a,e,p),v(T+.01,s,a,e,f),_.subVectors(f,p),g.addVectors(f,p),m.crossVectors(_,g),g.crossVectors(m,_),m.normalize(),g.normalize();for(let M=0;M<=r;++M){let w=M/r*Math.PI*2,L=-t*Math.cos(w),F=t*Math.sin(w);u.x=p.x+(L*g.x+F*m.x),u.y=p.y+(L*g.y+F*m.y),u.z=p.z+(L*g.z+F*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/i),h.push(M/r)}}for(let y=1;y<=i;y++)for(let T=1;T<=r;T++){let M=(r+1)*(y-1)+(T-1),w=(r+1)*y+(T-1),L=(r+1)*y+T,F=(r+1)*(y-1)+T;o.push(M,w,F),o.push(w,L,F)}function v(y,T,M,w,L){let F=Math.cos(y),I=Math.sin(y),z=M/T*y,G=Math.cos(z);L.x=w*(2+G)*.5*F,L.y=w*(2+G)*I*.5,L.z=w*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},fo=class n extends st{constructor(e=new Is(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new le,h=new C,u=[],d=[],p=[],f=[];function m(_){h=e.getPointAt(_/t,h);let g=a.normals[_],v=a.binormals[_];for(let y=0;y<=r;y++){let T=y/r*Math.PI*2,M=Math.sin(T),w=-Math.cos(T);l.x=w*g.x+M*v.x,l.y=w*g.y+M*v.y,l.z=w*g.z+M*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let g=0;g<=r;g++)c.x=_/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let _=1;_<=t;_++)for(let g=1;g<=r;g++){let v=(r+1)*(_-1)+(g-1),y=(r+1)*_+(g-1),T=(r+1)*_+g,M=(r+1)*(_-1)+g;f.push(v,y,M),f.push(y,T,M)}})()})(),this.setIndex(f),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new so[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},go=class extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let _=o.getX(p+m),g=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,g),lu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),lu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function lu(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var l0=Object.freeze({__proto__:null,BoxGeometry:Gt,CapsuleGeometry:Ka,CircleGeometry:$a,ConeGeometry:zi,CylinderGeometry:Zt,DodecahedronGeometry:Qa,EdgesGeometry:eo,ExtrudeGeometry:Rr,IcosahedronGeometry:Vn,LatheGeometry:oo,OctahedronGeometry:lo,PlaneGeometry:vi,PolyhedronGeometry:Tn,RingGeometry:co,ShapeGeometry:ho,SphereGeometry:ki,TetrahedronGeometry:uo,TorusGeometry:po,TorusKnotGeometry:mo,TubeGeometry:fo,WireframeGeometry:go});function Yn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){let e={};for(let t=0;t<n.length;t++){let i=Yn(n[t]);for(let r in i)e[r]=i[r]}return e}function ih(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var sd={clone:Yn,merge:Ht},si=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},vo=class extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gi=class extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var _o=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var En=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yo=class extends En{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:s=e,o=2*t-i;break;case Gl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*i-t;break;case Gl:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,_=m*f,g=-d*_+2*d*m-d*f,v=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*f+1,y=(-1-p)*_+(1.5+p)*m+.5*f,T=p*_-p*m;for(let M=0;M!==o;++M)s[M]=g*a[h+M]+v*a[c+M]+y*a[l+M]+T*a[u+M];return s}},Mo=class extends En{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},So=class extends En{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bo=class extends En{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let m=(i-t)/(r-t),_=1-m;for(let g=0;g!==o;++g)s[g]=a[c+g]*_+a[l+g]*m;return s}let p=2*o,f=e-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],v=f*p+2*m,y=d[v],T=d[v+1],M=e*p+2*m,w=u[M],L=u[M+1],F,I,z,G,H,V=(i-t)/(r-t);for(let k=0;k<8;k++){F=V*V,I=F*V,z=1-V,G=z*z,H=G*z;let W=H*t+3*G*V*y+3*z*F*w+I*r-i;if(Math.abs(W)<1e-10)break;let Y=3*G*(y-t)+6*z*V*(w-y)+3*F*(r-w);if(Math.abs(Y)<1e-10)break;V-=W/Y,V=Math.max(0,Math.min(1,V))}s[m]=H*_+3*G*V*T+3*z*F*L+I*g}return s}},ii=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break;case Bl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&cp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ka,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ii.prototype.ValueTypeName="",ii.prototype.TimeBufferType=Float32Array,ii.prototype.ValueBufferType=Float32Array,ii.prototype.DefaultInterpolation=Ha;var _n=class extends ii{constructor(e,t,i){super(e,t,i)}};_n.prototype.ValueTypeName="bool",_n.prototype.ValueBufferType=Array,_n.prototype.DefaultInterpolation=ms,_n.prototype.InterpolantFactoryMethodLinear=void 0,_n.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}};To.prototype.ValueTypeName="color";var Eo=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}};Eo.prototype.ValueTypeName="number";var wo=class extends En{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)kt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Fs=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName="quaternion",Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var xn=class extends ii{constructor(e,t,i){super(e,t,i)}};xn.prototype.ValueTypeName="string",xn.prototype.ValueBufferType=Array,xn.prototype.DefaultInterpolation=ms,xn.prototype.InterpolantFactoryMethodLinear=void 0,xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends ii{constructor(e,t,i,r){super(e,t,i,r)}};Ao.prototype.ValueTypeName="vector";var Ga={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(cu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!cu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function cu(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Co=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ad=new Co,Ir=class{constructor(e){this.manager=e!==void 0?e:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=new WeakMap,Ro=class extends Ir{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ga.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=fr.get(a);u===void 0&&(u=[],fr.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Mr("img");function l(){h(),t&&t(this);let u=fr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}fr.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Ga.remove(`image:${e}`);let d=fr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}fr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ga.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Os=class extends Ir{constructor(e){super(e)}load(e,t,i,r){let s=new zt,a=new Ro(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Pr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bs=class extends Pr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fl=new Ve,hu=new C,uu=new C,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mn,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===yr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ba=new C,za=new kt,Ui=new C,Lr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,za,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ba,za,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vn=new C,du=new le,pu=new le,Ut=class extends Lr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*br*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*_r*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*br*Math.atan(Math.tan(.5*_r*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*_r*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Zl=class extends Io{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},wn=class extends Pr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Dr=class extends Lr{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jl=class extends Io{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var c0=new Ve,h0=new Ve,u0=new Ve;var gr=-90,Po=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ut(gr,1,e,t);r.layers=this.layers,this.add(r);let s=new Ut(gr,1,e,t);s.layers=this.layers,this.add(s);let a=new Ut(gr,1,e,t);a.layers=this.layers,this.add(a);let o=new Ut(gr,1,e,t);o.layers=this.layers,this.add(o);let l=new Ut(gr,1,e,t);l.layers=this.layers,this.add(l);let c=new Ut(gr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==yr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Lo=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var d0=new C,p0=new kt,m0=new C,f0=new C,g0=new C;var v0=new C,_0=new kt,x0=new C,y0=new C;var nh="\\[\\]\\.:\\/",kp=new RegExp("["+nh+"]","g"),Ol="[^"+nh+"]",Gp="[^"+nh.replace("\\.","")+"]",Vp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ol)+/(WCOD+)?/.source.replace("WCOD",Gp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol)+"$"),Hp=["material","materials","bones","map"],ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kp,"")}static parseTrackName(e){let t=Vp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Hp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Le("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void Fe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=class{constructor(n,e,t){let i=t||ft.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray],ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M0=new Float32Array(1);var S0=new Ve;var b0=new le;var T0=new C,E0=new C,w0=new C,A0=new C,C0=new C,R0=new C,I0=new C;var P0=new C;var L0=new C,D0=new Ve,U0=new Ve;var N0=new C,F0=new ye,O0=new ye;var B0=new C,z0=new C,k0=new C;var G0=new C,V0=new Lr;var H0=new fi;var W0=new C;function rh(n,e,t,i){let r=(function(s){switch(s){case ai:case mc:return{byteLength:1,components:1};case Br:case fc:case Wi:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case an:case Oo:case _i:return{byteLength:4,components:1};case gc:case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case ko:case Go:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case wi:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xp(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var Ye={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ge={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ji={basic:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ht([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ht([ge.lights,ge.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ji.physical={uniforms:Ht([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Yo={r:0,b:0,g:0},Zn=new bi,jp=new Ve;function qp(n,e,t,i,r,s){let a=new ye(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let g=m.backgroundBlurriness>0;_=e.get(_,g)}return _}function f(m,_){m.getRGB(Yo,ih(n)),t.buffers.color.setClear(Yo.r,Yo.g,Yo.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let _=!1,g=p(m);g===null?f(a,c):g&&g.isColor&&(f(g,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,_){let g=p(_);g&&(g.isCubeTexture||g.mapping===Vs)?(l===void 0&&(l=new qe(new Gt(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Yn(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Zn.copy(_.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Zn)),l.material.toneMapped=rt.getTransfer(g.colorSpace)!==ot,h===g&&u===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new qe(new vi(2,2),new si({name:"BackgroundMaterial",uniforms:Yn(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=rt.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Yp(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],y=[],T=[];for(let M=0;M<t;M++)v[M]=0,y[M]=0,T[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:T,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,y=g.length;v<y;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let y=s.newAttributes,T=s.enabledAttributes,M=s.attributeDivisors;y[g]=1,T[g]===0&&(n.enableVertexAttribArray(g),T[g]=1),M[g]!==v&&(n.vertexAttribDivisor(g,v),M[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let y=0,T=v.length;y<T;y++)v[y]!==g[y]&&(n.disableVertexAttribArray(y),v[y]=0)}function f(g,v,y,T,M,w,L){L===!0?n.vertexAttribIPointer(g,v,y,M,w):n.vertexAttribPointer(g,v,y,T,M,w)}function m(){_(),a=!0,s!==r&&(s=r,o(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,y,T,M){let w=!1,L=(function(F,I,z,G){let H=G.wireframe===!0,V=i[I.id];V===void 0&&(V={},i[I.id]=V);let k=F.isInstancedMesh===!0?F.id:0,W=V[k];W===void 0&&(W={},V[k]=W);let Y=W[z.id];Y===void 0&&(Y={},W[z.id]=Y);let Z=Y[H];return Z===void 0&&(Z=c(n.createVertexArray()),Y[H]=Z),Z})(g,T,y,v);s!==L&&(s=L,o(s.object)),w=(function(F,I,z,G){let H=s.attributes,V=I.attributes,k=0,W=z.getAttributes();for(let Y in W)if(W[Y].location>=0){let Z=H[Y],pe=V[Y];if(pe===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor)),Z===void 0||Z.attribute!==pe||pe&&Z.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==G})(g,T,y,M),w&&(function(F,I,z,G){let H={},V=I.attributes,k=0,W=z.getAttributes();for(let Y in W)if(W[Y].location>=0){let Z=V[Y];Z===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor));let pe={};pe.attribute=Z,Z&&Z.data&&(pe.data=Z.data),H[Y]=pe,k++}s.attributes=H,s.attributesNum=k,s.index=G})(g,T,y,M),M!==null&&e.update(M,n.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(F,I,z,G){h();let H=G.attributes,V=z.getAttributes(),k=I.defaultAttributeValues;for(let W in V){let Y=V[W];if(Y.location>=0){let Z=H[W];if(Z===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let pe=Z.normalized,Me=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;let Se=xe.buffer,me=xe.type,te=xe.bytesPerElement,ae=me===n.INT||me===n.UNSIGNED_INT||Z.gpuType===Oo;if(Z.isInterleavedBufferAttribute){let he=Z.data,Ae=he.stride,ze=Z.offset;if(he.isInstancedInterleavedBuffer){for(let b=0;b<Y.locationSize;b++)d(Y.location+b,he.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let b=0;b<Y.locationSize;b++)u(Y.location+b);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let b=0;b<Y.locationSize;b++)f(Y.location+b,Me/Y.locationSize,me,pe,Ae*te,(ze+Me/Y.locationSize*b)*te,ae)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<Y.locationSize;he++)d(Y.location+he,Z.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<Y.locationSize;he++)u(Y.location+he);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let he=0;he<Y.locationSize;he++)f(Y.location+he,Me/Y.locationSize,me,pe,Me*te,Me/Y.locationSize*he*te,ae)}}else if(k!==void 0){let pe=k[W];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Y.location,pe);break;case 3:n.vertexAttrib3fv(Y.location,pe);break;case 4:n.vertexAttrib4fv(Y.location,pe);break;default:n.vertexAttrib1fv(Y.location,pe)}}}}p()})(g,v,y,T),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:m,resetDefaultState:_,dispose:function(){m();for(let g in i){let v=i[g];for(let y in v){let T=v[y];for(let M in T){let w=T[M];for(let L in w)l(w[L].object),delete w[L];delete T[M]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let y in v){let T=v[y];for(let M in T){let w=T[M];for(let L in w)l(w[L].object),delete w[L];delete T[M]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let y=i[v],T=g.isInstancedMesh===!0?g.id:0,M=y[T];if(M!==void 0){for(let w in M){let L=M[w];for(let F in L)l(L[F].object),delete L[F];delete M[w]}delete y[T],Object.keys(y).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let y=i[v];for(let T in y){let M=y[T];if(M[g.id]===void 0)continue;let w=M[g.id];for(let L in w)l(w[L].object),delete w[L];delete M[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Zp(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Jp(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(Le("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===wi||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==ai&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==_i&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Kp(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Ni,o=new We,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,p!==!0||m===null){let _=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=d;v!==f;++v,y+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,y=_.clippingState||null;l.value=y,y=c(p,u,v,d);for(let T=0;T!==v;++T)y[T]=t[T];_.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}var od=[.125,.215,.35,.446,.526,.582],Ws=20,Xs=new Dr,ld=new ye,sh=null,ah=0,oh=0,lh=!1,$p=new C,Jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=$p}=s;sh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,ah,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Wi,format:wi,colorSpace:Nn,depthBuffer:!1},r=cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+od.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=od[d-a+4-1]:d===0&&(f=0),l.push(f);let m=1/(p-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,M=3,w=2,L=1,F=new Float32Array(M*T*y),I=new Float32Array(w*T*y),z=new Float32Array(L*T*y);for(let H=0;H<y;H++){let V=H%3*2/3-1,k=H>2?0:-1,W=[V,k,0,V+2/3,k,0,V+2/3,k+1,0,V,k,0,V+2/3,k+1,0,V,k+1,0];F.set(W,M*T*H),I.set(v,w*T*H);let Y=[H,H,H,H,H,H];z.set(Y,L*T*H)}let G=new st;G.setAttribute("position",new Et(F,M)),G.setAttribute("uv",new Et(I,w)),G.setAttribute("faceIndex",new Et(z,L)),c.push(new qe(G,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Ws),h=new C(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new qe(new st,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,i,r,s){let a=new Ut(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(ld),c.toneMapping=Ti,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new Gt,new bt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(ld),f=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[_],s.y,s.z)):g===1?(a.up.set(0,0,o[_]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[_],s.z)):(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[_]));let v=this._cubeSize;Vr(r,g*v,_>2?v:0,v,v),c.setRenderTarget(r),f&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Or||e.mapping===Wn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Vr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Xs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],f=3*p*(i>d-4?i-d+4:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,Vr(s,f,m,3*p,2*p),r.setRenderTarget(s),r.render(o,Xs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,Vr(e,f,m,3*p,2*p),r.setRenderTarget(e),r.render(o,Xs)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):Ws;m>Ws&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let _=[],g=0;for(let T=0;T<Ws;++T){let M=T/f,w=Math.exp(-M*M/2);_.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<_.length;T++)_[T]=_[T]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let y=this._sizeLods[r];Vr(t,3*y*(r>v-4?r-v+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,Xs)}};function cd(n,e,t){let i=new ni(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hd(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ud(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}var $o=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Es(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gt(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Vi});s.uniforms.tEquirect.value=t;let a=new qe(r,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Lt),new Po(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function Qp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===Uo?o.mapping=Or:l===No&&(o.mapping=Wn),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Uo||h===No,d=h===Or||h===Wn;if(u||d){let p=t.get(c),f=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new Jo(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let m=c.image;return u&&m&&m.height>0||d&&m&&(function(_){let g=0,v=6;for(let y=0;y<v;y++)_[y]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new Jo(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Uo||h===No){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new $o(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function em(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&gs("WebGLRenderer: "+i+" extension not supported."),r}}}function tm(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let _=0,g=m.length;_<g;_+=3){let v=m[_+0],y=m[_+1],T=m[_+2];c.push(v,y,y,T,T,v)}}else{let m=u.array;d=u.version;for(let _=0,g=m.length/3-1;_<g;_+=3){let v=_+0,y=_+1,T=_+2;c.push(v,y,y,T,T,v)}}let p=new(u.count>=65535?Ss:Ms)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function im(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function nm(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Fe("WebGLInfo: Unknown draw mode:",i)}}}}function rm(n,e,t){let i=new WeakMap,r=new gt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let y=a.attributes.position.count*v,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*T*4*h),w=new vs(M,y,T,h);w.type=_i,w.needsUpdate=!0;let L=4*v;for(let I=0;I<h;I++){let z=m[I],G=_[I],H=g[I],V=y*T*4*I;for(let k=0;k<z.count;k++){let W=k*L;d===!0&&(r.fromBufferAttribute(z,k),M[V+W+0]=r.x,M[V+W+1]=r.y,M[V+W+2]=r.z,M[V+W+3]=0),p===!0&&(r.fromBufferAttribute(G,k),M[V+W+4]=r.x,M[V+W+5]=r.y,M[V+W+6]=r.z,M[V+W+7]=0),f===!0&&(r.fromBufferAttribute(H,k),M[V+W+8]=r.x,M[V+W+9]=r.y,M[V+W+10]=r.z,M[V+W+11]=H.itemSize===4?r.w:1)}}u={count:h,texture:w,size:new le(y,T)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function sm(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var am={[oc]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[Gs]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function om(n,e,t,i,r){let s=new ni(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new ni(e,t,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),o=new st;o.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new De([0,2,0,0,2,0],2));let l=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new qe(o,l),h=new Dr(-1,1,1,-1,0,1),u,d=null,p=null,f=!1,m=null,_=[],g=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let T=0;T<_.length;T++){let M=_[T];M.setSize&&M.setSize(v,y)}},this.setEffects=function(v){_=v,g=_.length>0&&_[0].isRenderPass===!0;let y=s.width,T=s.height;for(let M=0;M<_.length;M++){let w=_[M];w.setSize&&w.setSize(y,T)}},this.begin=function(v,y){if(f||v.toneMapping===Ti&&_.length===0)return!1;if(m=y,y!==null){let T=y.width,M=y.height;s.width===T&&s.height===M||this.setSize(T,M)}return g===!1&&v.setRenderTarget(s),u=v.toneMapping,v.toneMapping=Ti,!0},this.hasRenderPass=function(){return g},this.end=function(v,y){v.toneMapping=u,f=!0;let T=s,M=a;for(let w=0;w<_.length;w++){let L=_[w];if(L.enabled!==!1&&(L.render(v,M,T,y),L.needsSwap!==!1)){let F=T;T=M,M=F}}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,l.defines={},rt.getTransfer(d)===ot&&(l.defines.SRGB_TRANSFER="");let w=am[p];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(c,h),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Id=new zt,uh=new bn(1,1),Pd=new vs,Ld=new ja,Dd=new Es,dd=[],pd=[],md=new Float32Array(16),fd=new Float32Array(9),gd=new Float32Array(4);function Wr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=dd[r];if(s===void 0&&(s=new Float32Array(r),dd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function el(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function hm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function um(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function dm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;gd.set(i),n.uniformMatrix2fv(this.addr,!1,gd),Rt(t,i)}}function pm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Rt(t,i)}}function mm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),Rt(t,i)}}function fm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function vm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function _m(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function xm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ym(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Mm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Sm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function bm(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(uh.compareFunction=t.isReversedDepthBuffer()?qo:jo,s=uh):s=Id,t.setTexture2D(e||s,r)}function Tm(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function Em(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function wm(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function Am(n,e){n.uniform1fv(this.addr,e)}function Cm(n,e){let t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rm(n,e){let t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function Im(n,e){let t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Pm(n,e){let t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Lm(n,e){let t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dm(n,e){let t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Um(n,e){n.uniform1iv(this.addr,e)}function Nm(n,e){n.uniform2iv(this.addr,e)}function Fm(n,e){n.uniform3iv(this.addr,e)}function Om(n,e){n.uniform4iv(this.addr,e)}function Bm(n,e){n.uniform1uiv(this.addr,e)}function zm(n,e){n.uniform2uiv(this.addr,e)}function km(n,e){n.uniform3uiv(this.addr,e)}function Gm(n,e){n.uniform4uiv(this.addr,e)}function Vm(n,e,t){let i=this.cache,r=e.length,s=el(t,r),a;Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?uh:Id;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Hm(n,e,t){let i=this.cache,r=e.length,s=el(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ld,s[a])}function Wm(n,e,t){let i=this.cache,r=e.length,s=el(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dd,s[a])}function Xm(n,e,t){let i=this.cache,r=e.length,s=el(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pd,s[a])}var dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return fm;case 35667:case 35671:return gm;case 35668:case 35672:return vm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}})(t.type)}},ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Am;case 35664:return Cm;case 35665:return Rm;case 35666:return Im;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}})(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},ch=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function jm(n,e,t){let i=n.name,r=i.length;for(ch.lastIndex=0;;){let s=ch.exec(i),a=ch.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){vd(t,c===void 0?new dh(o,n,e):new ph(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new mh(o),vd(t,h)),t=h}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);jm(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function _d(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var qm=0,xd=new We;function yd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function Ym(n,e){let t=(function(i){rt._getMatrix(xd,rt.workingColorSpace,i);let r=`mat3( ${xd.elements.map(s=>s.toFixed(4))} )`;switch(rt.getTransfer(i)){case fs:return[r,"LinearTransferOETF"];case ot:return[r,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Zm={[oc]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[Gs]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function Jm(n,e){let t=Zm[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new C;function Km(){return rt.getLuminanceCoefficients(Zo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Zo.x.toFixed(4)}, ${Zo.y.toFixed(4)}, ${Zo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function js(n){return n!==""}function Md(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $m=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(n){return n.replace($m,ef)}var Qm=new Map;function ef(n,e){let t=Ye[e];if(t===void 0){let i=Qm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ye[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return fh(t)}var tf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(n){return n.replace(tf,nf)}function nf(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var rf={[ks]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"},sf={[Or]:"ENVMAP_TYPE_CUBE",[Wn]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"},af={[Wn]:"ENVMAP_MODE_REFRACTION"},of={[Ou]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function lf(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(G){return rf[G.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(G){return G.envMap===!1?"ENVMAP_TYPE_CUBE":sf[G.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(G){return G.envMap===!1?"ENVMAP_MODE_REFLECTION":af[G.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(G){return G.envMap===!1?"ENVMAP_BLENDING_NONE":of[G.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(G){let H=G.envMapCubeUVHeight;if(H===null)return null;let V=Math.log2(H)-2,k=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:k,maxMip:V}})(t),p=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)})(t),f=(function(G){let H=[];for(let V in G){let k=G[V];k!==!1&&H.push("#define "+V+" "+k)}return H.join(`
`)})(s),m=r.createProgram(),_,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(js).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(js).join(`
`),g.length>0&&(g+=`
`)):(_=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),g=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),Km(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=fh(a),a=Md(a,t),a=Sd(a,t),o=fh(o),o=Md(o,t),o=Sd(o,t),a=bd(a),o=bd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+_+a,T=v+g+o,M=_d(r,r.VERTEX_SHADER,y),w=_d(r,r.FRAGMENT_SHADER,T);function L(G){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(m)||"",V=r.getShaderInfoLog(M)||"",k=r.getShaderInfoLog(w)||"",W=H.trim(),Y=V.trim(),Z=k.trim(),pe=!0,Me=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,M,w);else{let xe=yd(r,M,"vertex"),Se=yd(r,w,"fragment");Fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+xe+`
`+Se)}else W!==""?Le("WebGLProgram: Program Info Log:",W):Y!==""&&Z!==""||(Me=!1);Me&&(G.diagnostics={runnable:pe,programLog:W,vertexShader:{log:Y,prefix:_},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(M),r.deleteShader(w),F=new Hr(r,m),I=(function(H,V){let k={},W=H.getProgramParameter(V,H.ACTIVE_ATTRIBUTES);for(let Y=0;Y<W;Y++){let Z=H.getActiveAttrib(V,Y),pe=Z.name,Me=1;Z.type===H.FLOAT_MAT2&&(Me=2),Z.type===H.FLOAT_MAT3&&(Me=3),Z.type===H.FLOAT_MAT4&&(Me=4),k[pe]={type:Z.type,location:H.getAttribLocation(V,pe),locationSize:Me}}return k})(r,m)}let F,I;r.attachShader(m,M),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&L(this),F},this.getAttributes=function(){return I===void 0&&L(this),I};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,37297)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}var cf=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vh(e),t.set(e,i)),i}},vh=class{constructor(e){this.id=cf++,this.code=e,this.usedTimes=0}};function hf(n,e,t,i,r,s){let a=new _s,o=new gh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,v,y){let T=v.fog,M=y.geometry,w=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,L=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=e.get(m.envMap||w,L),I=F&&F.mapping===Vs?F.image.height:null,z=p[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Le("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let G=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,H=G!==void 0?G.length:0,V,k,W,Y,Z=0;if(M.morphAttributes.position!==void 0&&(Z=1),M.morphAttributes.normal!==void 0&&(Z=2),M.morphAttributes.color!==void 0&&(Z=3),z){let nt=ji[z];V=nt.vertexShader,k=nt.fragmentShader}else V=m.vertexShader,k=m.fragmentShader,o.update(m),W=o.getVertexShaderID(m),Y=o.getFragmentShaderID(m);let pe=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),xe=y.isInstancedMesh===!0,Se=y.isBatchedMesh===!0,me=!!m.map,te=!!m.matcap,ae=!!F,he=!!m.aoMap,Ae=!!m.lightMap,ze=!!m.bumpMap,b=!!m.normalMap,S=!!m.displacementMap,U=!!m.emissiveMap,D=!!m.metalnessMap,x=!!m.roughnessMap,R=m.anisotropy>0,P=m.clearcoat>0,O=m.dispersion>0,q=m.iridescence>0,J=m.sheen>0,j=m.transmission>0,re=R&&!!m.anisotropyMap,ie=P&&!!m.clearcoatMap,oe=P&&!!m.clearcoatNormalMap,se=P&&!!m.clearcoatRoughnessMap,ue=q&&!!m.iridescenceMap,Ie=q&&!!m.iridescenceThicknessMap,Be=J&&!!m.sheenColorMap,Ke=J&&!!m.sheenRoughnessMap,je=!!m.specularMap,fe=!!m.specularColorMap,Ue=!!m.specularIntensityMap,it=j&&!!m.transmissionMap,vt=j&&!!m.thicknessMap,ve=!!m.gradientMap,ee=!!m.alphaMap,Ce=m.alphaTest>0,mt=!!m.alphaHash,Xt=!!m.extensions,ht=Ti;m.toneMapped&&(pe!==null&&pe.isXRRenderTarget!==!0||(ht=n.toneMapping));let ut={shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:V,fragmentShader:k,defines:m.defines,customVertexShaderID:W,customFragmentShaderID:Y,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:Se,batchingColor:Se&&y._colorsTexture!==null,instancing:xe,instancingColor:xe&&y.instanceColor!==null,instancingMorph:xe&&y.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Nn,alphaToCoverage:!!m.alphaToCoverage,map:me,matcap:te,envMap:ae,envMapMode:ae&&F.mapping,envMapCubeUVHeight:I,aoMap:he,lightMap:Ae,bumpMap:ze,normalMap:b,displacementMap:S,emissiveMap:U,normalMapObjectSpace:b&&m.normalMapType===Wu,normalMapTangentSpace:b&&m.normalMapType===Hu,metalnessMap:D,roughnessMap:x,anisotropy:R,anisotropyMap:re,clearcoat:P,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:se,dispersion:O,iridescence:q,iridescenceMap:ue,iridescenceThicknessMap:Ie,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Ke,specularMap:je,specularColorMap:fe,specularIntensityMap:Ue,transmission:j,transmissionMap:it,thicknessMap:vt,gradientMap:ve,opaque:m.transparent===!1&&m.blending===Hn&&m.alphaToCoverage===!1,alphaMap:ee,alphaTest:Ce,alphaHash:mt,combine:m.combine,mapUv:me&&f(m.map.channel),aoMapUv:he&&f(m.aoMap.channel),lightMapUv:Ae&&f(m.lightMap.channel),bumpMapUv:ze&&f(m.bumpMap.channel),normalMapUv:b&&f(m.normalMap.channel),displacementMapUv:S&&f(m.displacementMap.channel),emissiveMapUv:U&&f(m.emissiveMap.channel),metalnessMapUv:D&&f(m.metalnessMap.channel),roughnessMapUv:x&&f(m.roughnessMap.channel),anisotropyMapUv:re&&f(m.anisotropyMap.channel),clearcoatMapUv:ie&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&f(m.sheenRoughnessMap.channel),specularMapUv:je&&f(m.specularMap.channel),specularColorMapUv:fe&&f(m.specularColorMap.channel),specularIntensityMapUv:Ue&&f(m.specularIntensityMap.channel),transmissionMapUv:it&&f(m.transmissionMap.channel),thicknessMapUv:vt&&f(m.thicknessMap.channel),alphaMapUv:ee&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(b||R),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!M.attributes.uv&&(me||ee),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&b===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:y.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Z,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:me&&m.map.isVideoTexture===!0&&rt.getTransfer(m.map.colorSpace)===ot,decodeVideoTextureEmissive:U&&m.emissiveMap.isVideoTexture===!0&&rt.getTransfer(m.emissiveMap.colorSpace)===ot,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Vt,flipSided:m.side===Kt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Xt&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&m.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(_,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),g.push(a.mask)})(_,m),_.push(n.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=p[m.type],g;if(_){let v=ji[_];g=sd.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g=h.get(_);return g!==void 0?++g.usedTimes:(g=new lf(n,_,m,r),c.push(g),h.set(_,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=c.indexOf(m);c[_]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function uf(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wd(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||df),i.length>1&&i.sort(l||Ed),r.length>1&&r.sort(l||Ed)}}}function pf(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new wd,n.set(e,[r])):t>=i.length?(r=new wd,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function mf(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ye};break;case"SpotLight":t={position:new C,direction:new C,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new C,halfWidth:new C,halfHeight:new C}}return n[e.id]=t,t}}}var ff=0;function gf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vf(n){let e=new mf,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let r=new C,s=new Ve,a=new Ve;return{setup:function(o){let l=0,c=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,_=0,g=0,v=0,y=0,T=0,M=0;o.sort(gf);for(let L=0,F=o.length;L<F;L++){let I=o[L],z=I.color,G=I.intensity,H=I.distance,V=null;if(I.shadow&&I.shadow.map&&(V=I.shadow.map.texture.format===kr?I.shadow.map.texture:I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)l+=z.r*G,c+=z.g*G,h+=z.b*G;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],G);M++}else if(I.isDirectionalLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,Y=t.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=V,i.directionalShadowMatrix[u]=I.shadow.matrix,_++}i.directional[u]=k,u++}else if(I.isSpotLight){let k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(z).multiplyScalar(G),k.distance=H,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[p]=k;let W=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,W.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[p]=W.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=V,v++}p++}else if(I.isRectAreaLight){let k=e.get(I);k.color.copy(z).multiplyScalar(G),k.halfWidth.set(.5*I.width,0,0),k.halfHeight.set(0,.5*I.height,0),i.rectArea[f]=k,f++}else if(I.isPointLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let W=I.shadow,Y=t.get(I);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=V,i.pointShadowMatrix[d]=I.shadow.matrix,g++}i.point[d]=k,d++}else if(I.isHemisphereLight){let k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(G),k.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[m]=k,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let w=i.hash;w.directionalLength===u&&w.pointLength===d&&w.spotLength===p&&w.rectAreaLength===f&&w.hemiLength===m&&w.numDirectionalShadows===_&&w.numPointShadows===g&&w.numSpotShadows===v&&w.numSpotMaps===y&&w.numLightProbes===M||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=M,w.directionalLength=u,w.pointLength=d,w.spotLength=p,w.rectAreaLength=f,w.hemiLength=m,w.numDirectionalShadows=_,w.numPointShadows=g,w.numSpotShadows=v,w.numSpotMaps=y,w.numLightProbes=M,i.version=ff++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let m=0,_=o.length;m<_;m++){let g=o[m];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function Ad(n){let e=new vf(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function _f(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new Ad(n),e.set(t,[s])):i>=r.length?(s=new Ad(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var xf=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],yf=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Cd=new Ve,qs=new C,hh=new C;function Mf(n,e,t){let i=new Mn,r=new le,s=new le,a=new gt,o=new _o,l=new xo,c={},h=t.maxTextureSize,u={[Nr]:Kt,[Kt]:Nr,[Vt]:Vt},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new st;f.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new qe(f,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let g=this.type;function v(w,L){let F=e.update(m);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y,{format:kr,type:Wi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(L,null,F,d,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(L,null,F,p,m,null)}function y(w,L,F,I){let z=null,G=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(G!==void 0)z=G;else if(z=F.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let H=z.uuid,V=L.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let W=k[V];W===void 0&&(W=z.clone(),k[V]=W,L.addEventListener("dispose",M)),z=W}return z.visible=L.visible,z.wireframe=L.wireframe,z.side=I===Ur?L.shadowSide!==null?L.shadowSide:L.side:L.shadowSide!==null?L.shadowSide:u[L.side],z.alphaMap=L.alphaMap,z.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,z.map=L.map,z.clipShadows=L.clipShadows,z.clippingPlanes=L.clippingPlanes,z.clipIntersection=L.clipIntersection,z.displacementMap=L.displacementMap,z.displacementScale=L.displacementScale,z.displacementBias=L.displacementBias,z.wireframeLinewidth=L.wireframeLinewidth,z.linewidth=L.linewidth,F.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(n.properties.get(z).light=F),z}function T(w,L,F,I,z){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===Ur)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);let H=e.update(w),V=w.material;if(Array.isArray(V)){let k=H.groups;for(let W=0,Y=k.length;W<Y;W++){let Z=k[W],pe=V[Z.materialIndex];if(pe&&pe.visible){let Me=y(w,pe,I,z);w.onBeforeShadow(n,w,L,F,H,Me,Z),n.renderBufferDirect(F,null,H,Me,w,Z),w.onAfterShadow(n,w,L,F,H,Me,Z)}}}else if(V.visible){let k=y(w,V,I,z);w.onBeforeShadow(n,w,L,F,H,k,null),n.renderBufferDirect(F,null,H,k,w,null),w.onAfterShadow(n,w,L,F,H,k,null)}}let G=w.children;for(let H=0,V=G.length;H<V;H++)T(G[H],L,F,I,z)}function M(w){w.target.removeEventListener("dispose",M);for(let L in c){let F=c[L],I=w.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}this.render=function(w,L,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===gu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ks);let I=n.getRenderTarget(),z=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Vi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=g!==this.type;V&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=w.length;k<W;k++){let Y=w[k],Z=Y.shadow;if(Z===void 0){Le("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let pe=Z.getFrameExtents();r.multiply(pe),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/pe.x),r.x=s.x*pe.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/pe.y),r.y=s.y*pe.y,Z.mapSize.y=s.y));let Me=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Me,Z.map===null||V===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ur){if(Y.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ni(r.x,r.y,{format:kr,type:Wi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new bn(r.x,r.y,_i),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=An,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=mi,Z.map.depthTexture.magFilter=mi}else Y.isPointLight?(Z.map=new $o(r.x),Z.map.depthTexture=new Ja(r.x,an)):(Z.map=new ni(r.x,r.y),Z.map.depthTexture=new bn(r.x,r.y,an)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=An,this.type===ks?(Z.map.depthTexture.compareFunction=Me?qo:jo,Z.map.depthTexture.minFilter=Lt,Z.map.depthTexture.magFilter=Lt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=mi,Z.map.depthTexture.magFilter=mi);Z.camera.updateProjectionMatrix()}let xe=Z.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<xe;Se++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(Z.map),n.clear());let me=Z.getViewport(Se);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(a)}if(Y.isPointLight){let me=Z.camera,te=Z.matrix,ae=Y.distance||me.far;ae!==me.far&&(me.far=ae,me.updateProjectionMatrix()),qs.setFromMatrixPosition(Y.matrixWorld),me.position.copy(qs),hh.copy(me.position),hh.add(xf[Se]),me.up.copy(yf[Se]),me.lookAt(hh),me.updateMatrixWorld(),te.makeTranslation(-qs.x,-qs.y,-qs.z),Cd.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Cd,me.coordinateSystem,me.reversedDepth)}else Z.updateMatrices(Y);i=Z.getFrustum(),T(L,F,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===Ur&&v(Z,F),Z.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(I,z,G)}}function Sf(n,e){let t=new function(){let x=!1,R=new gt,P=null,O=new gt(0,0,0,0);return{setMask:function(q){P===q||x||(n.colorMask(q,q,q,q),P=q)},setLocked:function(q){x=q},setClear:function(q,J,j,re,ie){ie===!0&&(q*=re,J*=re,j*=re),R.set(q,J,j,re),O.equals(R)===!1&&(n.clearColor(q,J,j,re),O.copy(R))},reset:function(){x=!1,P=null,O.set(-1,0,0,0)}}},i=new function(){let x=!1,R=!1,P=null,O=null,q=null;return{setReversed:function(J){if(R!==J){let j=e.get("EXT_clip_control");J?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),R=J;let re=q;q=null,this.setClear(re)}},getReversed:function(){return R},setTest:function(J){J?ae(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(J){P===J||x||(n.depthMask(J),P=J)},setFunc:function(J){if(R&&(J=ed[J]),O!==J){switch(J){case ec:n.depthFunc(n.NEVER);break;case tc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case Do:n.depthFunc(n.LEQUAL);break;case nc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case sc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}O=J}},setLocked:function(J){x=J},setClear:function(J){q!==J&&(q=J,R&&(J=1-J),n.clearDepth(J))},reset:function(){x=!1,P=null,O=null,q=null,R=!1}}},r=new function(){let x=!1,R=null,P=null,O=null,q=null,J=null,j=null,re=null,ie=null;return{setTest:function(oe){x||(oe?ae(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(oe){R===oe||x||(n.stencilMask(oe),R=oe)},setFunc:function(oe,se,ue){P===oe&&O===se&&q===ue||(n.stencilFunc(oe,se,ue),P=oe,O=se,q=ue)},setOp:function(oe,se,ue){J===oe&&j===se&&re===ue||(n.stencilOp(oe,se,ue),J=oe,j=se,re=ue)},setLocked:function(oe){x=oe},setClear:function(oe){ie!==oe&&(n.clearStencil(oe),ie=oe)},reset:function(){x=!1,R=null,P=null,O=null,q=null,J=null,j=null,re=null,ie=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,_=null,g=null,v=null,y=null,T=new ye(0,0,0),M=0,w=!1,L=null,F=null,I=null,z=null,G=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,k=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=k>=2);let Y=null,Z={},pe=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),xe=new gt().fromArray(pe),Se=new gt().fromArray(Me);function me(x,R,P,O){let q=new Uint8Array(4),J=n.createTexture();n.bindTexture(x,J),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let j=0;j<P;j++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(R,0,n.RGBA,1,1,O,0,n.RGBA,n.UNSIGNED_BYTE,q):n.texImage2D(R+j,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,q);return J}let te={};function ae(x){o[x]!==!0&&(n.enable(x),o[x]=!0)}function he(x){o[x]!==!1&&(n.disable(x),o[x]=!1)}te[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ae(n.DEPTH_TEST),i.setFunc(Do),S(!1),U(Kl),ae(n.CULL_FACE),b(Vi);let Ae={[Fr]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[xu]:n.FUNC_REVERSE_SUBTRACT};Ae[yu]=n.MIN,Ae[Mu]=n.MAX;let ze={[Su]:n.ZERO,[bu]:n.ONE,[Tu]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[Lu]:n.SRC_ALPHA_SATURATE,[Iu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Eu]:n.ONE_MINUS_SRC_COLOR,[Au]:n.ONE_MINUS_SRC_ALPHA,[Pu]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Du]:n.CONSTANT_COLOR,[Uu]:n.ONE_MINUS_CONSTANT_COLOR,[Nu]:n.CONSTANT_ALPHA,[Fu]:n.ONE_MINUS_CONSTANT_ALPHA};function b(x,R,P,O,q,J,j,re,ie,oe){if(x!==Vi){if(d===!1&&(ae(n.BLEND),d=!0),x===vu)q=q||R,J=J||P,j=j||O,R===f&&q===g||(n.blendEquationSeparate(Ae[R],Ae[q]),f=R,g=q),P===m&&O===_&&J===v&&j===y||(n.blendFuncSeparate(ze[P],ze[O],ze[J],ze[j]),m=P,_=O,v=J,y=j),re.equals(T)!==!1&&ie===M||(n.blendColor(re.r,re.g,re.b,ie),T.copy(re),M=ie),p=x,w=!1;else if(x!==p||oe!==w){if(f===Fr&&g===Fr||(n.blendEquation(n.FUNC_ADD),f=Fr,g=Fr),oe)switch(x){case Hn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hi:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",x)}else switch(x){case Hn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",x)}m=null,_=null,v=null,y=null,T.set(0,0,0),M=0,p=x,w=oe}}else d===!0&&(he(n.BLEND),d=!1)}function S(x){L!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),L=x)}function U(x){x!==mu?(ae(n.CULL_FACE),x!==F&&(x===Kl?n.cullFace(n.BACK):x===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),F=x}function D(x,R,P){x?(ae(n.POLYGON_OFFSET_FILL),z===R&&G===P||(z=R,G=P,i.getReversed()&&(R=-R),n.polygonOffset(R,P))):he(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:ae,disable:he,bindFramebuffer:function(x,R){return l[x]!==R&&(n.bindFramebuffer(x,R),l[x]=R,x===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=R),x===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=R),!0)},drawBuffers:function(x,R){let P=h,O=!1;if(x){P=c.get(R),P===void 0&&(P=[],c.set(R,P));let q=x.textures;if(P.length!==q.length||P[0]!==n.COLOR_ATTACHMENT0){for(let J=0,j=q.length;J<j;J++)P[J]=n.COLOR_ATTACHMENT0+J;P.length=q.length,O=!0}}else P[0]!==n.BACK&&(P[0]=n.BACK,O=!0);O&&n.drawBuffers(P)},useProgram:function(x){return u!==x&&(n.useProgram(x),u=x,!0)},setBlending:b,setMaterial:function(x,R){x.side===Vt?he(n.CULL_FACE):ae(n.CULL_FACE);let P=x.side===Kt;R&&(P=!P),S(P),x.blending===Hn&&x.transparent===!1?b(Vi):b(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let O=x.stencilWrite;r.setTest(O),O&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),D(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:U,setLineWidth:function(x){x!==I&&(V&&n.lineWidth(x),I=x)},setPolygonOffset:D,setScissorTest:function(x){x?ae(n.SCISSOR_TEST):he(n.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=n.TEXTURE0+H-1),Y!==x&&(n.activeTexture(x),Y=x)},bindTexture:function(x,R,P){P===void 0&&(P=Y===null?n.TEXTURE0+H-1:Y);let O=Z[P];O===void 0&&(O={type:void 0,texture:void 0},Z[P]=O),O.type===x&&O.texture===R||(Y!==P&&(n.activeTexture(P),Y=P),n.bindTexture(x,R||te[x]),O.type=x,O.texture=R)},unbindTexture:function(){let x=Z[Y];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(x){Fe("WebGLState:",x)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(x){Fe("WebGLState:",x)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(x){Fe("WebGLState:",x)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(x){Fe("WebGLState:",x)}},updateUBOMapping:function(x,R){let P=a.get(R);P===void 0&&(P=new WeakMap,a.set(R,P));let O=P.get(x);O===void 0&&(O=n.getUniformBlockIndex(R,x.name),P.set(x,O))},uniformBlockBinding:function(x,R){let P=a.get(R).get(x);s.get(R)!==P&&(n.uniformBlockBinding(R,P,x.__bindingPointIndex),s.set(R,P))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(x){Fe("WebGLState:",x)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(x){Fe("WebGLState:",x)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(x){Fe("WebGLState:",x)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(x){Fe("WebGLState:",x)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(x){Fe("WebGLState:",x)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(x){Fe("WebGLState:",x)}},scissor:function(x){xe.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),xe.copy(x))},viewport:function(x){Se.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Se.copy(x))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Y=null,Z={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,_=null,g=null,v=null,y=null,T=new ye(0,0,0),M=0,w=!1,L=null,F=null,I=null,z=null,G=null,xe.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function bf(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,S){return p?new OffscreenCanvas(b,S):Mr("canvas")}function m(b,S,U){let D=1,x=ze(b);if((x.width>U||x.height>U)&&(D=U/Math.max(x.width,x.height)),D<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let R=Math.floor(D*x.width),P=Math.floor(D*x.height);u===void 0&&(u=f(R,P));let O=S?f(R,P):u;return O.width=R,O.height=P,O.getContext("2d").drawImage(b,0,0,R,P),Le("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+R+"x"+P+")."),O}return"data"in b&&Le("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),b}return b}function _(b){return b.generateMipmaps}function g(b){n.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,S,U,D,x=!1){if(b!==null){if(n[b]!==void 0)return n[b];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let R=S;if(S===n.RED&&(U===n.FLOAT&&(R=n.R32F),U===n.HALF_FLOAT&&(R=n.R16F),U===n.UNSIGNED_BYTE&&(R=n.R8)),S===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(R=n.R8UI),U===n.UNSIGNED_SHORT&&(R=n.R16UI),U===n.UNSIGNED_INT&&(R=n.R32UI),U===n.BYTE&&(R=n.R8I),U===n.SHORT&&(R=n.R16I),U===n.INT&&(R=n.R32I)),S===n.RG&&(U===n.FLOAT&&(R=n.RG32F),U===n.HALF_FLOAT&&(R=n.RG16F),U===n.UNSIGNED_BYTE&&(R=n.RG8)),S===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(R=n.RG8UI),U===n.UNSIGNED_SHORT&&(R=n.RG16UI),U===n.UNSIGNED_INT&&(R=n.RG32UI),U===n.BYTE&&(R=n.RG8I),U===n.SHORT&&(R=n.RG16I),U===n.INT&&(R=n.RG32I)),S===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(R=n.RGB8UI),U===n.UNSIGNED_SHORT&&(R=n.RGB16UI),U===n.UNSIGNED_INT&&(R=n.RGB32UI),U===n.BYTE&&(R=n.RGB8I),U===n.SHORT&&(R=n.RGB16I),U===n.INT&&(R=n.RGB32I)),S===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(R=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(R=n.RGBA16UI),U===n.UNSIGNED_INT&&(R=n.RGBA32UI),U===n.BYTE&&(R=n.RGBA8I),U===n.SHORT&&(R=n.RGBA16I),U===n.INT&&(R=n.RGBA32I)),S===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(R=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(R=n.R11F_G11F_B10F)),S===n.RGBA){let P=x?fs:rt.getTransfer(D);U===n.FLOAT&&(R=n.RGBA32F),U===n.HALF_FLOAT&&(R=n.RGBA16F),U===n.UNSIGNED_BYTE&&(R=P===ot?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)}return R!==n.R16F&&R!==n.R32F&&R!==n.RG16F&&R!==n.RG32F&&R!==n.RGBA16F&&R!==n.RGBA32F||e.get("EXT_color_buffer_float"),R}function T(b,S){let U;return b?S===null||S===an||S===zr?U=n.DEPTH24_STENCIL8:S===_i?U=n.DEPTH32F_STENCIL8:S===Br&&(U=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===an||S===zr?U=n.DEPTH_COMPONENT24:S===_i?U=n.DEPTH_COMPONENT32F:S===Br&&(U=n.DEPTH_COMPONENT16),U}function M(b,S){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==mi&&b.minFilter!==Lt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function w(b){let S=b.target;S.removeEventListener("dispose",w),(function(U){let D=i.get(U);if(D.__webglInit===void 0)return;let x=U.source,R=d.get(x);if(R){let P=R[D.__cacheKey];P.usedTimes--,P.usedTimes===0&&F(U),Object.keys(R).length===0&&d.delete(x)}i.remove(U)})(S),S.isVideoTexture&&h.delete(S)}function L(b){let S=b.target;S.removeEventListener("dispose",L),(function(U){let D=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(D.__webglFramebuffer[R]))for(let P=0;P<D.__webglFramebuffer[R].length;P++)n.deleteFramebuffer(D.__webglFramebuffer[R][P]);else n.deleteFramebuffer(D.__webglFramebuffer[R]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[R])}else{if(Array.isArray(D.__webglFramebuffer))for(let R=0;R<D.__webglFramebuffer.length;R++)n.deleteFramebuffer(D.__webglFramebuffer[R]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let R=0;R<D.__webglColorRenderbuffer.length;R++)D.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[R]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let x=U.textures;for(let R=0,P=x.length;R<P;R++){let O=i.get(x[R]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),a.memory.textures--),i.remove(x[R])}i.remove(U)})(S)}function F(b){let S=i.get(b);n.deleteTexture(S.__webglTexture);let U=b.source;delete d.get(U)[S.__cacheKey],a.memory.textures--}let I=0;function z(b,S){let U=i.get(b);if(b.isVideoTexture&&(function(D){let x=a.render.frame;h.get(D)!==x&&(h.set(D,x),D.update())})(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let D=b.image;if(D===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void Z(U,b,S);Le("WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+S)}let G={[Un]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},H={[mi]:n.NEAREST,[ku]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},V={[Xu]:n.NEVER,[Ju]:n.ALWAYS,[ju]:n.LESS,[jo]:n.LEQUAL,[qu]:n.EQUAL,[qo]:n.GEQUAL,[Yu]:n.GREATER,[Zu]:n.NOTEQUAL};function k(b,S){if(S.type!==_i||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Lt&&S.magFilter!==Fo&&S.magFilter!==Hs&&S.magFilter!==Ei&&S.minFilter!==Lt&&S.minFilter!==Fo&&S.minFilter!==Hs&&S.minFilter!==Ei||Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,G[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,G[S.wrapT]),b!==n.TEXTURE_3D&&b!==n.TEXTURE_2D_ARRAY||n.texParameteri(b,n.TEXTURE_WRAP_R,G[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,H[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,H[S.minFilter]),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,V[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mi||S.minFilter!==Hs&&S.minFilter!==Ei||S.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function W(b,S){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",w));let D=S.source,x=d.get(D);x===void 0&&(x={},d.set(D,x));let R=(function(P){let O=[];return O.push(P.wrapS),O.push(P.wrapT),O.push(P.wrapR||0),O.push(P.magFilter),O.push(P.minFilter),O.push(P.anisotropy),O.push(P.internalFormat),O.push(P.format),O.push(P.type),O.push(P.generateMipmaps),O.push(P.premultiplyAlpha),O.push(P.flipY),O.push(P.unpackAlignment),O.push(P.colorSpace),O.join()})(S);if(R!==b.__cacheKey){x[R]===void 0&&(x[R]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),x[R].usedTimes++;let P=x[b.__cacheKey];P!==void 0&&(x[b.__cacheKey].usedTimes--,P.usedTimes===0&&F(S)),b.__cacheKey=R,b.__webglTexture=x[R].texture}return U}function Y(b,S,U){return Math.floor(Math.floor(b/U)/S)}function Z(b,S,U){let D=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=n.TEXTURE_3D);let x=W(b,S),R=S.source;t.bindTexture(D,b.__webglTexture,n.TEXTURE0+U);let P=i.get(R);if(R.version!==P.__version||x===!0){t.activeTexture(n.TEXTURE0+U);let O=rt.getPrimaries(rt.workingColorSpace),q=S.colorSpace===jn?null:rt.getPrimaries(S.colorSpace),J=S.colorSpace===jn||O===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let j=m(S.image,!1,r.maxTextureSize);j=Ae(S,j);let re=s.convert(S.format,S.colorSpace),ie=s.convert(S.type),oe,se=y(S.internalFormat,re,ie,S.colorSpace,S.isVideoTexture);k(D,S);let ue=S.mipmaps,Ie=S.isVideoTexture!==!0,Be=P.__version===void 0||x===!0,Ke=R.dataReady,je=M(S,j);if(S.isDepthTexture)se=T(S.format===Xn,S.type),Be&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,se,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,se,j.width,j.height,0,re,ie,null));else if(S.isDataTexture)if(ue.length>0){Ie&&Be&&t.texStorage2D(n.TEXTURE_2D,je,se,ue[0].width,ue[0].height);for(let fe=0,Ue=ue.length;fe<Ue;fe++)oe=ue[fe],Ie?Ke&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,oe.width,oe.height,re,ie,oe.data):t.texImage2D(n.TEXTURE_2D,fe,se,oe.width,oe.height,0,re,ie,oe.data);S.generateMipmaps=!1}else Ie?(Be&&t.texStorage2D(n.TEXTURE_2D,je,se,j.width,j.height),Ke&&(function(fe,Ue,it,vt){let ve=fe.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue.width,Ue.height,it,vt,Ue.data);else{ve.sort((ht,ut)=>ht.start-ut.start);let ee=0;for(let ht=1;ht<ve.length;ht++){let ut=ve[ee],nt=ve[ht],li=ut.start+ut.count,N=Y(nt.start,Ue.width,4),at=Y(ut.start,Ue.width,4);nt.start<=li+1&&N===at&&Y(nt.start+nt.count-1,Ue.width,4)===N?ut.count=Math.max(ut.count,nt.start+nt.count-ut.start):(++ee,ve[ee]=nt)}ve.length=ee+1;let Ce=n.getParameter(n.UNPACK_ROW_LENGTH),mt=n.getParameter(n.UNPACK_SKIP_PIXELS),Xt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,Ue.width);for(let ht=0,ut=ve.length;ht<ut;ht++){let nt=ve[ht],li=Math.floor(nt.start/4),N=Math.ceil(nt.count/4),at=li%Ue.width,Ri=Math.floor(li/Ue.width),$e=N;n.pixelStorei(n.UNPACK_SKIP_PIXELS,at),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ri),t.texSubImage2D(n.TEXTURE_2D,0,at,Ri,$e,1,it,vt,Ue.data)}fe.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xt)}})(S,j,re,ie)):t.texImage2D(n.TEXTURE_2D,0,se,j.width,j.height,0,re,ie,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,se,ue[0].width,ue[0].height,j.depth);for(let fe=0,Ue=ue.length;fe<Ue;fe++)if(oe=ue[fe],S.format!==wi)if(re!==null)if(Ie){if(Ke)if(S.layerUpdates.size>0){let it=rh(oe.width,oe.height,S.format,S.type);for(let vt of S.layerUpdates){let ve=oe.data.subarray(vt*it/oe.data.BYTES_PER_ELEMENT,(vt+1)*it/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,vt,oe.width,oe.height,1,re,ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,oe.width,oe.height,j.depth,re,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,se,oe.width,oe.height,j.depth,0,oe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,oe.width,oe.height,j.depth,re,ie,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,se,oe.width,oe.height,j.depth,0,re,ie,oe.data)}else{Ie&&Be&&t.texStorage2D(n.TEXTURE_2D,je,se,ue[0].width,ue[0].height);for(let fe=0,Ue=ue.length;fe<Ue;fe++)oe=ue[fe],S.format!==wi?re!==null?Ie?Ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,oe.width,oe.height,re,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,se,oe.width,oe.height,0,oe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Ke&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,oe.width,oe.height,re,ie,oe.data):t.texImage2D(n.TEXTURE_2D,fe,se,oe.width,oe.height,0,re,ie,oe.data)}else if(S.isDataArrayTexture)if(Ie){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,se,j.width,j.height,j.depth),Ke)if(S.layerUpdates.size>0){let fe=rh(j.width,j.height,S.format,S.type);for(let Ue of S.layerUpdates){let it=j.data.subarray(Ue*fe/j.data.BYTES_PER_ELEMENT,(Ue+1)*fe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,j.width,j.height,1,re,ie,it)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,re,ie,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,j.width,j.height,j.depth,0,re,ie,j.data);else if(S.isData3DTexture)Ie?(Be&&t.texStorage3D(n.TEXTURE_3D,je,se,j.width,j.height,j.depth),Ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,re,ie,j.data)):t.texImage3D(n.TEXTURE_3D,0,se,j.width,j.height,j.depth,0,re,ie,j.data);else if(S.isFramebufferTexture){if(Be)if(Ie)t.texStorage2D(n.TEXTURE_2D,je,se,j.width,j.height);else{let fe=j.width,Ue=j.height;for(let it=0;it<je;it++)t.texImage2D(n.TEXTURE_2D,it,se,fe,Ue,0,re,ie,null),fe>>=1,Ue>>=1}}else if(ue.length>0){if(Ie&&Be){let fe=ze(ue[0]);t.texStorage2D(n.TEXTURE_2D,je,se,fe.width,fe.height)}for(let fe=0,Ue=ue.length;fe<Ue;fe++)oe=ue[fe],Ie?Ke&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,re,ie,oe):t.texImage2D(n.TEXTURE_2D,fe,se,re,ie,oe);S.generateMipmaps=!1}else if(Ie){if(Be){let fe=ze(j);t.texStorage2D(n.TEXTURE_2D,je,se,fe.width,fe.height)}Ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,ie,j)}else t.texImage2D(n.TEXTURE_2D,0,se,re,ie,j);_(S)&&g(D),P.__version=R.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function pe(b,S,U,D,x,R){let P=s.convert(U.format,U.colorSpace),O=s.convert(U.type),q=y(U.internalFormat,P,O,U.colorSpace),J=i.get(S),j=i.get(U);if(j.__renderTarget=S,!J.__hasExternalTextures){let re=Math.max(1,S.width>>R),ie=Math.max(1,S.height>>R);x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?t.texImage3D(x,R,q,re,ie,S.depth,0,P,O,null):t.texImage2D(x,R,q,re,ie,0,P,O,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),he(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,x,j.__webglTexture,0,ae(S)):(x===n.TEXTURE_2D||x>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,x,j.__webglTexture,R),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(b,S,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer){let D=S.depthTexture,x=D&&D.isDepthTexture?D.type:null,R=T(S.stencilBuffer,x),P=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(S),R,S.width,S.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(S),R,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,R,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,P,n.RENDERBUFFER,b)}else{let D=S.textures;for(let x=0;x<D.length;x++){let R=D[x],P=s.convert(R.format,R.colorSpace),O=s.convert(R.type),q=y(R.internalFormat,P,O,R.colorSpace);he(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(S),q,S.width,S.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(S),q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(b,S,U){let D=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let x=i.get(S.depthTexture);if(x.__renderTarget=S,x.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D){if(x.__webglInit===void 0&&(x.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),x.__webglTexture===void 0){x.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture),k(n.TEXTURE_CUBE_MAP,S.depthTexture);let J=s.convert(S.depthTexture.format),j=s.convert(S.depthTexture.type),re;S.depthTexture.format===An?re=n.DEPTH_COMPONENT24:S.depthTexture.format===Xn&&(re=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,S.width,S.height,0,J,j,null)}}else z(S.depthTexture,0);let R=x.__webglTexture,P=ae(S),O=D?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,q=S.depthTexture.format===Xn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===An)he(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,O,R,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,q,O,R,0);else{if(S.depthTexture.format!==Xn)throw new Error("Unknown depthTexture format");he(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,O,R,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,q,O,R,0)}}function Se(b){let S=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){let D=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),D){let x=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,D.removeEventListener("dispose",x)};D.addEventListener("dispose",x),S.__depthDisposeCallback=x}S.__boundDepthTexture=D}if(b.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let D=0;D<6;D++)xe(S.__webglFramebuffer[D],b,D);else{let D=b.texture.mipmaps;D&&D.length>0?xe(S.__webglFramebuffer[0],b,0):xe(S.__webglFramebuffer,b,0)}else if(U){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]===void 0)S.__webglDepthbuffer[D]=n.createRenderbuffer(),Me(S.__webglDepthbuffer[D],b,!1);else{let x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=S.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,R)}}else{let D=b.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Me(S.__webglDepthbuffer,b,!1);else{let x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,R)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let me=[],te=[];function ae(b){return Math.min(r.maxSamples,b.samples)}function he(b){let S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(b,S){let U=b.colorSpace,D=b.format,x=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Nn&&U!==jn&&(rt.getTransfer(U)===ot?D===wi&&x===ai||Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",U)),S}function ze(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=function(){let b=I;return b>=r.maxTextures&&Le("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b},this.resetTextureUnits=function(){I=0},this.setTexture2D=z,this.setTexture2DArray=function(b,S){let U=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version?Z(U,b,S):(b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+S))},this.setTexture3D=function(b,S){let U=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version?Z(U,b,S):t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+S)},this.setTextureCube=function(b,S){let U=i.get(b);b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version?(function(D,x,R){if(x.image.length!==6)return;let P=W(D,x),O=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+R);let q=i.get(O);if(O.version!==q.__version||P===!0){t.activeTexture(n.TEXTURE0+R);let J=rt.getPrimaries(rt.workingColorSpace),j=x.colorSpace===jn?null:rt.getPrimaries(x.colorSpace),re=x.colorSpace===jn||J===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ie=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,se=[];for(let ve=0;ve<6;ve++)se[ve]=ie||oe?oe?x.image[ve].image:x.image[ve]:m(x.image[ve],!0,r.maxCubemapSize),se[ve]=Ae(x,se[ve]);let ue=se[0],Ie=s.convert(x.format,x.colorSpace),Be=s.convert(x.type),Ke=y(x.internalFormat,Ie,Be,x.colorSpace),je=x.isVideoTexture!==!0,fe=q.__version===void 0||P===!0,Ue=O.dataReady,it,vt=M(x,ue);if(k(n.TEXTURE_CUBE_MAP,x),ie){je&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ke,ue.width,ue.height);for(let ve=0;ve<6;ve++){it=se[ve].mipmaps;for(let ee=0;ee<it.length;ee++){let Ce=it[ee];x.format!==wi?Ie!==null?je?Ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee,Ke,Ce.width,Ce.height,0,Ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee,0,0,Ce.width,Ce.height,Ie,Be,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee,Ke,Ce.width,Ce.height,0,Ie,Be,Ce.data)}}}else{if(it=x.mipmaps,je&&fe){it.length>0&&vt++;let ve=ze(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ke,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(oe){je?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,se[ve].width,se[ve].height,Ie,Be,se[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ke,se[ve].width,se[ve].height,0,Ie,Be,se[ve].data);for(let ee=0;ee<it.length;ee++){let Ce=it[ee].image[ve].image;je?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee+1,0,0,Ce.width,Ce.height,Ie,Be,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee+1,Ke,Ce.width,Ce.height,0,Ie,Be,Ce.data)}}else{je?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie,Be,se[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ke,Ie,Be,se[ve]);for(let ee=0;ee<it.length;ee++){let Ce=it[ee];je?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee+1,0,0,Ie,Be,Ce.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee+1,Ke,Ie,Be,Ce.image[ve])}}}_(x)&&g(n.TEXTURE_CUBE_MAP),q.__version=O.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version})(U,b,S):t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+S)},this.rebindTextures=function(b,S,U){let D=i.get(b);S!==void 0&&pe(D.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Se(b)},this.setupRenderTarget=function(b){let S=b.texture,U=i.get(b),D=i.get(S);b.addEventListener("dispose",L);let x=b.textures,R=b.isWebGLCubeRenderTarget===!0,P=x.length>1;if(P||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=S.version,a.memory.textures++),R){U.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[O]=[];for(let q=0;q<S.mipmaps.length;q++)U.__webglFramebuffer[O][q]=n.createFramebuffer()}else U.__webglFramebuffer[O]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)U.__webglFramebuffer[O]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(P)for(let O=0,q=x.length;O<q;O++){let J=i.get(x[O]);J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&he(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let O=0;O<x.length;O++){let q=x[O];U.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[O]);let J=s.convert(q.format,q.colorSpace),j=s.convert(q.type),re=y(q.internalFormat,J,j,q.colorSpace,b.isXRRenderTarget===!0),ie=ae(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,re,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,U.__webglColorRenderbuffer[O])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(R){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),k(n.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)pe(U.__webglFramebuffer[O][q],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,q);else pe(U.__webglFramebuffer[O],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);_(S)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){for(let O=0,q=x.length;O<q;O++){let J=x[O],j=i.get(J),re=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),k(re,J),pe(U.__webglFramebuffer,b,J,n.COLOR_ATTACHMENT0+O,re,0),_(J)&&g(re)}t.unbindTexture()}else{let O=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(O=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(O,D.__webglTexture),k(O,S),S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)pe(U.__webglFramebuffer[q],b,S,n.COLOR_ATTACHMENT0,O,q);else pe(U.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,O,0);_(S)&&g(O),t.unbindTexture()}b.depthBuffer&&Se(b)},this.updateRenderTargetMipmap=function(b){let S=b.textures;for(let U=0,D=S.length;U<D;U++){let x=S[U];if(_(x)){let R=v(b),P=i.get(x).__webglTexture;t.bindTexture(R,P),g(R),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(he(b)===!1){let S=b.textures,U=b.width,D=b.height,x=n.COLOR_BUFFER_BIT,R=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=i.get(b),O=S.length>1;if(O)for(let J=0;J<S.length;J++)t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer);let q=b.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let J=0;J<S.length;J++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(x|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(x|=n.STENCIL_BUFFER_BIT)),O){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,P.__webglColorRenderbuffer[J]);let j=i.get(S[J]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,U,D,0,0,U,D,x,n.NEAREST),l===!0&&(me.length=0,te.length=0,me.push(n.COLOR_ATTACHMENT0+J),b.depthBuffer&&b.resolveDepthBuffer===!1&&(me.push(R),te.push(R),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),O)for(let J=0;J<S.length;J++){t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,P.__webglColorRenderbuffer[J]);let j=i.get(S[J]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let S=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tf(n,e){return{convert:function(t,i=jn){let r,s=rt.getTransfer(i);if(t===ai)return n.UNSIGNED_BYTE;if(t===Bo)return n.UNSIGNED_SHORT_4_4_4_4;if(t===zo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===gc)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===vc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===mc)return n.BYTE;if(t===fc)return n.SHORT;if(t===Br)return n.UNSIGNED_SHORT;if(t===Oo)return n.INT;if(t===an)return n.UNSIGNED_INT;if(t===_i)return n.FLOAT;if(t===Wi)return n.HALF_FLOAT;if(t===Gu)return n.ALPHA;if(t===Vu)return n.RGB;if(t===wi)return n.RGBA;if(t===An)return n.DEPTH_COMPONENT;if(t===Xn)return n.DEPTH_STENCIL;if(t===ko)return n.RED;if(t===Go)return n.RED_INTEGER;if(t===kr)return n.RG;if(t===_c)return n.RG_INTEGER;if(t===xc)return n.RGBA_INTEGER;if(t===Vo||t===Ho||t===Wo||t===Xo)if(s===ot){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===yc||t===Mc||t===Sc||t===bc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Tc||t===Ec||t===wc||t===Ac||t===Cc||t===Rc||t===Ic){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Tc||t===Ec)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===wc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Ac)return r.COMPRESSED_R11_EAC;if(t===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Rc)return r.COMPRESSED_RG11_EAC;if(t===Ic)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Pc||t===Lc||t===Dc||t===Uc||t===Nc||t===Fc||t===Oc||t===Bc||t===zc||t===kc||t===Gc||t===Vc||t===Hc||t===Wc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Pc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Lc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Dc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Uc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Nc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Fc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Oc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Bc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===zc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===kc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Gc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Vc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Hc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Wc)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Xc||t===jc||t===qc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Xc)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Yc||t===Zc||t===Jc||t===Kc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===zr?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var _h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ws(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new si({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends sn{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,m=typeof XRWebGLBinding<"u",_=new _h,g={},v=t.getContextAttributes(),y=null,T=null,M=[],w=[],L=new le,F=null,I=new Ut;I.viewport=new gt;let z=new Ut;z.viewport=new gt;let G=[I,z],H=new Lo,V=null,k=null;function W(te){let ae=w.indexOf(te.inputSource);if(ae===-1)return;let he=M[ae];he!==void 0&&(he.update(te.inputSource,te.frame,c||a),he.dispatchEvent({type:te.type,data:te.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<M.length;te++){let ae=w[te];ae!==null&&(w[te]=null,M[te].disconnect(ae))}V=null,k=null,_.reset();for(let te in g)delete g[te];e.setRenderTarget(y),p=null,d=null,u=null,r=null,T=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(te){for(let ae=0;ae<te.removed.length;ae++){let he=te.removed[ae],Ae=w.indexOf(he);Ae>=0&&(w[Ae]=null,M[Ae].disconnect(he))}for(let ae=0;ae<te.added.length;ae++){let he=te.added[ae],Ae=w.indexOf(he);if(Ae===-1){for(let b=0;b<M.length;b++){if(b>=w.length){w.push(he),Ae=b;break}if(w[b]===null){w[b]=he,Ae=b;break}}if(Ae===-1)break}let ze=M[Ae];ze&&ze.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=M[te];return ae===void 0&&(ae=new Er,M[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=M[te];return ae===void 0&&(ae=new Er,M[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=M[te];return ae===void 0&&(ae=new Er,M[te]=ae),ae.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,he=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?Xn:An,he=v.stencil?zr:an);let ze={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ni(d.textureWidth,d.textureHeight,{format:wi,type:ai,depthTexture:new bn(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ni(p.framebufferWidth,p.framebufferHeight,{format:wi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let pe=new C,Me=new C;function xe(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,he=te.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(he=_.depthFar)),H.near=z.near=I.near=ae,H.far=z.far=I.far=he,V===H.near&&k===H.far||(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,k=H.far),H.layers.mask=6|te.layers.mask,I.layers.mask=-5&H.layers.mask,z.layers.mask=-3&H.layers.mask;let Ae=te.parent,ze=H.cameras;xe(H,Ae);for(let b=0;b<ze.length;b++)xe(ze[b],Ae);ze.length===2?(function(b,S,U){pe.setFromMatrixPosition(S.matrixWorld),Me.setFromMatrixPosition(U.matrixWorld);let D=pe.distanceTo(Me),x=S.projectionMatrix.elements,R=U.projectionMatrix.elements,P=x[14]/(x[10]-1),O=x[14]/(x[10]+1),q=(x[9]+1)/x[5],J=(x[9]-1)/x[5],j=(x[8]-1)/x[0],re=(R[8]+1)/R[0],ie=P*j,oe=P*re,se=D/(-j+re),ue=se*-j;if(S.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ue),b.translateZ(se),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),x[10]===-1)b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let Ie=P+se,Be=O+se,Ke=ie-ue,je=oe+(D-ue),fe=q*O/Be*Ie,Ue=J*O/Be*Ie;b.projectionMatrix.makePerspective(Ke,je,fe,Ue,Ie,Be),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}})(H,I,z):H.projectionMatrix.copy(I.projectionMatrix),(function(b,S,U){U===null?b.matrix.copy(S.matrixWorld):(b.matrix.copy(U.matrixWorld),b.matrix.invert(),b.matrix.multiply(S.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*br*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(te,H,Ae)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(H)},this.getCameraTexture=function(te){return g[te]};let Se=null,me=new Rd;me.setAnimationLoop(function(te,ae){if(h=ae.getViewerPose(c||a),f=ae,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Ae=!1;he.length!==H.cameras.length&&(H.cameras.length=0,Ae=!0);for(let b=0;b<he.length;b++){let S=he[b],U=null;if(p!==null)U=p.getViewport(S);else{let x=u.getViewSubImage(d,S);U=x.viewport,b===0&&(e.setRenderTargetTextures(T,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(T))}let D=G[b];D===void 0&&(D=new Ut,D.layers.enable(b),D.viewport=new gt,G[b]=D),D.matrix.fromArray(S.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(S.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(U.x,U.y,U.width,U.height),b===0&&(H.matrix.copy(D.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ae===!0&&H.cameras.push(D)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let b=u.getDepthInformation(he[0]);b&&b.isValid&&b.texture&&_.init(b,r.renderState)}if(ze&&ze.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let b=0;b<he.length;b++){let S=he[b].camera;if(S){let U=g[S];U||(U=new ws,g[S]=U);let D=u.getCameraImage(S);U.sourceTexture=D}}}}for(let he=0;he<M.length;he++){let Ae=w[he],ze=M[he];Ae!==null&&ze!==void 0&&ze.update(Ae,ae,c||a)}Se&&Se(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),f=null}),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}},Jn=new bi,Ef=new Ve;function wf(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Kt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Kt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Jn.copy(l),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),r.envMapRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(Jn)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ih(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Af(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let m=u.value,_=d+"_"+p;if(f[_]===void 0)return f[_]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let g=f[_];if(typeof m=="number"||typeof m=="boolean"){if(g!==m)return f[_]=m,!0}else if(g.equals(m)===!1)return g.copy(m),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(_){let g=_.uniforms,v=0,y=16;for(let M=0,w=g.length;M<w;M++){let L=Array.isArray(g[M])?g[M]:[g[M]];for(let F=0,I=L.length;F<I;F++){let z=L[F],G=Array.isArray(z.value)?z.value:[z.value];for(let H=0,V=G.length;H<V;H++){let k=c(G[H]),W=v%y,Y=W%k.boundary,Z=W+Y;v+=Y,Z!==0&&y-Z<k.storage&&(v+=y-Z),z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=k.storage}}}let T=v%y;T>0&&(v+=y-T),_.__size=v,_.__cache={}})(u),p=(function(_){let g=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();_.__bindingPointIndex=g;let v=n.createBuffer(),y=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,y,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&((function(_){let g=r[_.id],v=_.uniforms,y=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let T=0,M=v.length;T<M;T++){let w=Array.isArray(v[T])?v[T]:[v[T]];for(let L=0,F=w.length;L<F;L++){let I=w[L];if(l(I,T,L,y)===!0){let z=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],H=0;for(let V=0;V<G.length;V++){let k=G[V],W=c(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,z+H,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=m)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var Cf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null,Qo=class{constructor(e={}){let{canvas:t=Ku(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=ai}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=p,_=new Set([xc,_c,Go]),g=new Set([ai,an,Br,zr,Bo,zo]),v=new Uint32Array(4),y=new Int32Array(4),T=null,M=null,w=[],L=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,z=!1;this._outputColorSpace=yt;let G=0,H=0,V=null,k=-1,W=null,Y=new gt,Z=new gt,pe=null,Me=new ye(0),xe=0,Se=t.width,me=t.height,te=1,ae=null,he=null,Ae=new gt(0,0,Se,me),ze=new gt(0,0,Se,me),b=!1,S=new Mn,U=!1,D=!1,x=new Ve,R=new C,P=new gt,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function J(){return V===null?te:1}let j,re,ie,oe,se,ue,Ie,Be,Ke,je,fe,Ue,it,vt,ve,ee,Ce,mt,Xt,ht,ut,nt,li,N=i;function at(E,X){return t.getContext(E,X)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ii,!1),t.addEventListener("webglcontextrestored",$t,!1),t.addEventListener("webglcontextcreationerror",na,!1),N===null){let X="webgl2";if(N=at(X,E),N===null)throw at(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Fe("WebGLRenderer: "+E.message),E}function Ri(){j=new em(N),j.init(),ut=new Tf(N,j),re=new Jp(N,j,e,ut),ie=new Sf(N,j),re.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),oe=new nm(N),se=new uf,ue=new bf(N,j,ie,se,re,ut,oe),Ie=new Qp(I),Be=new Xp(N),nt=new Yp(N,Be),Ke=new tm(N,Be,oe,nt),je=new sm(N,Ke,Be,nt,oe),mt=new rm(N,re,ue),ve=new Kp(se),fe=new hf(I,Ie,j,re,nt,ve),Ue=new wf(I,se),it=new pf,vt=new _f(j),Ce=new qp(I,Ie,ie,je,f,l),ee=new Mf(I,je,re),li=new Af(N,oe,re,ie),Xt=new Zp(N,j,oe),ht=new im(N,j,oe),oe.programs=fe.programs,I.capabilities=re,I.extensions=j,I.properties=se,I.renderLists=it,I.shadowMap=ee,I.state=ie,I.info=oe}Ri(),m!==ai&&(F=new om(m,t.width,t.height,r,s));let $e=new xh(I,N);function Ii(E){E.preventDefault(),Qc("WebGLRenderer: Context Lost."),z=!0}function $t(){Qc("WebGLRenderer: Context Restored."),z=!1;let E=oe.autoReset,X=ee.enabled,K=ee.autoUpdate,ne=ee.needsUpdate,Q=ee.type;Ri(),oe.autoReset=E,ee.enabled=X,ee.autoUpdate=K,ee.needsUpdate=ne,ee.type=Q}function na(E){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ra(E){let X=E.target;X.removeEventListener("dispose",ra),(function(K){(function(ne){let Q=se.get(ne).programs;Q!==void 0&&(Q.forEach(function(de){fe.releaseProgram(de)}),ne.isShaderMaterial&&fe.releaseShaderCache(ne))})(K),se.remove(K)})(X)}function sa(E,X,K){E.transparent===!0&&E.side===Vt&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,cn(E,X,K),E.side=Nr,E.needsUpdate=!0,cn(E,X,K),E.side=Vt):cn(E,X,K)}this.xr=$e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(Se,me,!1))},this.getSize=function(E){return E.set(Se,me)},this.setSize=function(E,X,K=!0){$e.isPresenting?Le("WebGLRenderer: Can't change size while VR device is presenting."):(Se=E,me=X,t.width=Math.floor(E*te),t.height=Math.floor(X*te),K===!0&&(t.style.width=E+"px",t.style.height=X+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,E,X))},this.getDrawingBufferSize=function(E){return E.set(Se*te,me*te).floor()},this.setDrawingBufferSize=function(E,X,K){Se=E,me=X,te=K,t.width=Math.floor(E*K),t.height=Math.floor(X*K),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(m!==ai){if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(E||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,X,K,ne){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,X,K,ne),ie.viewport(Y.copy(Ae).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,X,K,ne){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,X,K,ne),ie.scissor(Z.copy(ze).multiplyScalar(te).round())},this.getScissorTest=function(){return b},this.setScissorTest=function(E){ie.setScissorTest(b=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,K=!0){let ne=0;if(E){let Q=!1;if(V!==null){let de=V.texture.format;Q=_.has(de)}if(Q){let de=V.texture.type,_e=g.has(de),be=Ce.getClearColor(),Te=Ce.getClearAlpha(),Ne=be.r,Qe=be.g,et=be.b;_e?(v[0]=Ne,v[1]=Qe,v[2]=et,v[3]=Te,N.clearBufferuiv(N.COLOR,0,v)):(y[0]=Ne,y[1]=Qe,y[2]=et,y[3]=Te,N.clearBufferiv(N.COLOR,0,y))}else ne|=N.COLOR_BUFFER_BIT}X&&(ne|=N.DEPTH_BUFFER_BIT),K&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ii,!1),t.removeEventListener("webglcontextrestored",$t,!1),t.removeEventListener("webglcontextcreationerror",na,!1),Ce.dispose(),it.dispose(),vt.dispose(),se.dispose(),Ie.dispose(),je.dispose(),nt.dispose(),li.dispose(),fe.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Kn),$e.removeEventListener("sessionend",aa),Pi.stop()},this.renderBufferDirect=function(E,X,K,ne,Q,de){X===null&&(X=O);let _e=Q.isMesh&&Q.matrixWorld.determinant()<0,be=(function(Ze,lt,Tt,Oe,Ge){lt.isScene!==!0&&(lt=O),ue.resetTextureUnits();let Qt=lt.fog,tr=Oe.isMeshStandardMaterial||Oe.isMeshLambertMaterial||Oe.isMeshPhongMaterial?lt.environment:null,ir=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Nn,hn=Oe.isMeshStandardMaterial||Oe.isMeshLambertMaterial&&!Oe.envMap||Oe.isMeshPhongMaterial&&!Oe.envMap,ci=Ie.get(Oe.envMap||tr,hn),Yi=Oe.vertexColors===!0&&!!Tt.attributes.color&&Tt.attributes.color.itemSize===4,hi=!!Tt.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),A=!!Tt.morphAttributes.position,$=!!Tt.morphAttributes.normal,B=!!Tt.morphAttributes.color,we=Ti;Oe.toneMapped&&(V!==null&&V.isXRRenderTarget!==!0||(we=I.toneMapping));let Xe=Tt.morphAttributes.position||Tt.morphAttributes.normal||Tt.morphAttributes.color,He=Xe!==void 0?Xe.length:0,Pe=se.get(Oe),ce=M.state.lights;if(U===!0&&(D===!0||Ze!==W)){let di=Ze===W&&Oe.id===k;ve.setState(Oe,Ze,di)}let Dt=!1;Oe.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==ce.state.version||Pe.outputColorSpace!==ir||Ge.isBatchedMesh&&Pe.batching===!1?Dt=!0:Ge.isBatchedMesh||Pe.batching!==!0?Ge.isBatchedMesh&&Pe.batchingColor===!0&&Ge.colorTexture===null||Ge.isBatchedMesh&&Pe.batchingColor===!1&&Ge.colorTexture!==null||Ge.isInstancedMesh&&Pe.instancing===!1?Dt=!0:Ge.isInstancedMesh||Pe.instancing!==!0?Ge.isSkinnedMesh&&Pe.skinning===!1?Dt=!0:Ge.isSkinnedMesh||Pe.skinning!==!0?Ge.isInstancedMesh&&Pe.instancingColor===!0&&Ge.instanceColor===null||Ge.isInstancedMesh&&Pe.instancingColor===!1&&Ge.instanceColor!==null||Ge.isInstancedMesh&&Pe.instancingMorph===!0&&Ge.morphTexture===null||Ge.isInstancedMesh&&Pe.instancingMorph===!1&&Ge.morphTexture!==null||Pe.envMap!==ci||Oe.fog===!0&&Pe.fog!==Qt?Dt=!0:Pe.numClippingPlanes===void 0||Pe.numClippingPlanes===ve.numPlanes&&Pe.numIntersection===ve.numIntersection?(Pe.vertexAlphas!==Yi||Pe.vertexTangents!==hi||Pe.morphTargets!==A||Pe.morphNormals!==$||Pe.morphColors!==B||Pe.toneMapping!==we||Pe.morphTargetsCount!==He)&&(Dt=!0):Dt=!0:Dt=!0:Dt=!0:Dt=!0:(Dt=!0,Pe.__version=Oe.version);let It=Pe.currentProgram;Dt===!0&&(It=cn(Oe,lt,Ge));let Zi=!1,Ft=!1,nr=!1,pt=It.getUniforms(),jt=Pe.uniforms;if(ie.useProgram(It.program)&&(Zi=!0,Ft=!0,nr=!0),Oe.id!==k&&(k=Oe.id,Ft=!0),Zi||W!==Ze){ie.buffers.depth.getReversed()&&Ze.reversedDepth!==!0&&(Ze._reversedDepth=!0,Ze.updateProjectionMatrix()),pt.setValue(N,"projectionMatrix",Ze.projectionMatrix),pt.setValue(N,"viewMatrix",Ze.matrixWorldInverse);let di=pt.map.cameraPosition;di!==void 0&&di.setValue(N,R.setFromMatrixPosition(Ze.matrixWorld)),re.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(Ze.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&pt.setValue(N,"isOrthographic",Ze.isOrthographicCamera===!0),W!==Ze&&(W=Ze,Ft=!0,nr=!0)}if(Pe.needsLights&&(ce.state.directionalShadowMap.length>0&&pt.setValue(N,"directionalShadowMap",ce.state.directionalShadowMap,ue),ce.state.spotShadowMap.length>0&&pt.setValue(N,"spotShadowMap",ce.state.spotShadowMap,ue),ce.state.pointShadowMap.length>0&&pt.setValue(N,"pointShadowMap",ce.state.pointShadowMap,ue)),Ge.isSkinnedMesh){pt.setOptional(N,Ge,"bindMatrix"),pt.setOptional(N,Ge,"bindMatrixInverse");let di=Ge.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),pt.setValue(N,"boneTexture",di.boneTexture,ue))}Ge.isBatchedMesh&&(pt.setOptional(N,Ge,"batchingTexture"),pt.setValue(N,"batchingTexture",Ge._matricesTexture,ue),pt.setOptional(N,Ge,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",Ge._indirectTexture,ue),pt.setOptional(N,Ge,"batchingColorTexture"),Ge._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",Ge._colorsTexture,ue));let un=Tt.morphAttributes;un.position===void 0&&un.normal===void 0&&un.color===void 0||mt.update(Ge,Tt,It),(Ft||Pe.receiveShadow!==Ge.receiveShadow)&&(Pe.receiveShadow=Ge.receiveShadow,pt.setValue(N,"receiveShadow",Ge.receiveShadow)),(Oe.isMeshStandardMaterial||Oe.isMeshLambertMaterial||Oe.isMeshPhongMaterial)&&Oe.envMap===null&&lt.environment!==null&&(jt.envMapIntensity.value=lt.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=(Xi===null&&(Xi=new On(Cf,16,16,kr,Wi),Xi.name="DFG_LUT",Xi.minFilter=Lt,Xi.magFilter=Lt,Xi.wrapS=yn,Xi.wrapT=yn,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi)),Ft&&(pt.setValue(N,"toneMappingExposure",I.toneMappingExposure),Pe.needsLights&&(qt=nr,(ui=jt).ambientLightColor.needsUpdate=qt,ui.lightProbe.needsUpdate=qt,ui.directionalLights.needsUpdate=qt,ui.directionalLightShadows.needsUpdate=qt,ui.pointLights.needsUpdate=qt,ui.pointLightShadows.needsUpdate=qt,ui.spotLights.needsUpdate=qt,ui.spotLightShadows.needsUpdate=qt,ui.rectAreaLights.needsUpdate=qt,ui.hemisphereLights.needsUpdate=qt),Qt&&Oe.fog===!0&&Ue.refreshFogUniforms(jt,Qt),Ue.refreshMaterialUniforms(jt,Oe,te,me,M.state.transmissionRenderTarget[Ze.id]),Hr.upload(N,er(Pe),jt,ue));var ui,qt;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(Hr.upload(N,er(Pe),jt,ue),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&pt.setValue(N,"center",Ge.center),pt.setValue(N,"modelViewMatrix",Ge.modelViewMatrix),pt.setValue(N,"normalMatrix",Ge.normalMatrix),pt.setValue(N,"modelMatrix",Ge.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let di=Oe.uniformsGroups;for(let cl=0,op=di.length;cl<op;cl++){let Lh=di[cl];li.update(Lh,It),li.bind(Lh,It)}}return It})(E,X,K,ne,Q);ie.setMaterial(ne,_e);let Te=K.index,Ne=1;if(ne.wireframe===!0){if(Te=Ke.getWireframeAttribute(K),Te===void 0)return;Ne=2}let Qe=K.drawRange,et=K.attributes.position,Re=Qe.start*Ne,tt=(Qe.start+Qe.count)*Ne;de!==null&&(Re=Math.max(Re,de.start*Ne),tt=Math.min(tt,(de.start+de.count)*Ne)),Te!==null?(Re=Math.max(Re,0),tt=Math.min(tt,Te.count)):et!=null&&(Re=Math.max(Re,0),tt=Math.min(tt,et.count));let xt=tt-Re;if(xt<0||xt===1/0)return;let _t;nt.setup(Q,ne,be,K,Te);let dt=Xt;if(Te!==null&&(_t=Be.get(Te),dt=ht,dt.setIndex(_t)),Q.isMesh)ne.wireframe===!0?(ie.setLineWidth(ne.wireframeLinewidth*J()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(Q.isLine){let Ze=ne.linewidth;Ze===void 0&&(Ze=1),ie.setLineWidth(Ze*J()),Q.isLineSegments?dt.setMode(N.LINES):Q.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else Q.isPoints?dt.setMode(N.POINTS):Q.isSprite&&dt.setMode(N.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)gs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ze=Q._multiDrawStarts,lt=Q._multiDrawCounts,Tt=Q._multiDrawCount,Oe=Te?Be.get(Te).bytesPerElement:1,Ge=se.get(ne).currentProgram.getUniforms();for(let Qt=0;Qt<Tt;Qt++)Ge.setValue(N,"_gl_DrawID",Qt),dt.render(Ze[Qt]/Oe,lt[Qt])}else if(Q.isInstancedMesh)dt.renderInstances(Re,xt,Q.count);else if(K.isInstancedBufferGeometry){let Ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,lt=Math.min(K.instanceCount,Ze);dt.renderInstances(Re,xt,lt)}else dt.render(Re,xt)},this.compile=function(E,X,K=null){K===null&&(K=E),M=vt.get(K),M.init(X),L.push(M),K.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),E!==K&&E.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights();let ne=new Set;return E.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let de=Q.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){let be=de[_e];sa(be,K,Q),ne.add(be)}else sa(de,K,Q),ne.add(de)}),M=L.pop(),ne},this.compileAsync=function(E,X,K=null){let ne=this.compile(E,X,K);return new Promise(Q=>{function de(){ne.forEach(function(_e){se.get(_e).currentProgram.isReady()&&ne.delete(_e)}),ne.size!==0?setTimeout(de,10):Q(E)}j.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Kr=null;function Kn(){Pi.stop()}function aa(){Pi.start()}let Pi=new Rd;function $r(E,X,K,ne){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||S.intersectsSprite(E)){ne&&P.setFromMatrixPosition(E.matrixWorld).applyMatrix4(x);let de=je.update(E),_e=E.material;_e.visible&&T.push(E,de,_e,K,P.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||S.intersectsObject(E))){let de=je.update(E),_e=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),P.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),P.copy(de.boundingSphere.center)),P.applyMatrix4(E.matrixWorld).applyMatrix4(x)),Array.isArray(_e)){let be=de.groups;for(let Te=0,Ne=be.length;Te<Ne;Te++){let Qe=be[Te],et=_e[Qe.materialIndex];et&&et.visible&&T.push(E,de,et,K,P.z,Qe)}}else _e.visible&&T.push(E,de,_e,K,P.z,null)}}let Q=E.children;for(let de=0,_e=Q.length;de<_e;de++)$r(Q[de],X,K,ne)}function $n(E,X,K,ne){let{opaque:Q,transmissive:de,transparent:_e}=E;M.setupLightsView(K),U===!0&&ve.setGlobalState(I.clippingPlanes,K),ne&&ie.viewport(Y.copy(ne)),Q.length>0&&Qn(Q,X,K),de.length>0&&Qn(de,X,K),_e.length>0&&Qn(_e,X,K),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Qr(E,X,K,ne){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ne.id]===void 0){let et=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ne.id]=new ni(1,1,{generateMipmaps:!0,type:et?Wi:ai,minFilter:Ei,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Q=M.state.transmissionRenderTarget[ne.id],de=ne.viewport||Y;Q.setSize(de.z*I.transmissionResolutionScale,de.w*I.transmissionResolutionScale);let _e=I.getRenderTarget(),be=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget(Q),I.getClearColor(Me),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),q&&Ce.render(K);let Ne=I.toneMapping;I.toneMapping=Ti;let Qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),M.setupLightsView(ne),U===!0&&ve.setGlobalState(I.clippingPlanes,ne),Qn(E,K,ne),ue.updateMultisampleRenderTarget(Q),ue.updateRenderTargetMipmap(Q),j.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Re=0,tt=X.length;Re<tt;Re++){let xt=X[Re],{object:_t,geometry:dt,material:Ze,group:lt}=xt;if(Ze.side===Vt&&_t.layers.test(ne.layers)){let Tt=Ze.side;Ze.side=Kt,Ze.needsUpdate=!0,es(_t,K,ne,dt,Ze,lt),Ze.side=Tt,Ze.needsUpdate=!0,et=!0}}et===!0&&(ue.updateMultisampleRenderTarget(Q),ue.updateRenderTargetMipmap(Q))}I.setRenderTarget(_e,be,Te),I.setClearColor(Me,xe),Qe!==void 0&&(ne.viewport=Qe),I.toneMapping=Ne}function Qn(E,X,K){let ne=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,de=E.length;Q<de;Q++){let _e=E[Q],{object:be,geometry:Te,group:Ne}=_e,Qe=_e.material;Qe.allowOverride===!0&&ne!==null&&(Qe=ne),be.layers.test(K.layers)&&es(be,X,K,Te,Qe,Ne)}}function es(E,X,K,ne,Q,de){E.onBeforeRender(I,X,K,ne,Q,de),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(I,X,K,ne,E,de),Q.transparent===!0&&Q.side===Vt&&Q.forceSinglePass===!1?(Q.side=Kt,Q.needsUpdate=!0,I.renderBufferDirect(K,X,ne,Q,E,de),Q.side=Nr,Q.needsUpdate=!0,I.renderBufferDirect(K,X,ne,Q,E,de),Q.side=Vt):I.renderBufferDirect(K,X,ne,Q,E,de),E.onAfterRender(I,X,K,ne,Q,de)}function cn(E,X,K){X.isScene!==!0&&(X=O);let ne=se.get(E),Q=M.state.lights,de=M.state.shadowsArray,_e=Q.state.version,be=fe.getParameters(E,Q.state,de,X,K),Te=fe.getProgramCacheKey(be),Ne=ne.programs;ne.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;let Qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ne.envMap=Ie.get(E.envMap||ne.environment,Qe),ne.envMapRotation=ne.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",ra),Ne=new Map,ne.programs=Ne);let et=Ne.get(Te);if(et!==void 0){if(ne.currentProgram===et&&ne.lightsStateVersion===_e)return ts(E,be),et}else be.uniforms=fe.getUniforms(E),E.onBeforeCompile(be,I),et=fe.acquireProgram(be,Te),Ne.set(Te,et),ne.uniforms=be.uniforms;let Re=ne.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Re.clippingPlanes=ve.uniform),ts(E,be),ne.needsLights=(function(tt){return tt.isMeshLambertMaterial||tt.isMeshToonMaterial||tt.isMeshPhongMaterial||tt.isMeshStandardMaterial||tt.isShadowMaterial||tt.isShaderMaterial&&tt.lights===!0})(E),ne.lightsStateVersion=_e,ne.needsLights&&(Re.ambientLightColor.value=Q.state.ambient,Re.lightProbe.value=Q.state.probe,Re.directionalLights.value=Q.state.directional,Re.directionalLightShadows.value=Q.state.directionalShadow,Re.spotLights.value=Q.state.spot,Re.spotLightShadows.value=Q.state.spotShadow,Re.rectAreaLights.value=Q.state.rectArea,Re.ltc_1.value=Q.state.rectAreaLTC1,Re.ltc_2.value=Q.state.rectAreaLTC2,Re.pointLights.value=Q.state.point,Re.pointLightShadows.value=Q.state.pointShadow,Re.hemisphereLights.value=Q.state.hemi,Re.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Re.spotLightMatrix.value=Q.state.spotLightMatrix,Re.spotLightMap.value=Q.state.spotLightMap,Re.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=et,ne.uniformsList=null,et}function er(E){if(E.uniformsList===null){let X=E.currentProgram.getUniforms();E.uniformsList=Hr.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function ts(E,X){let K=se.get(E);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}Pi.setAnimationLoop(function(E){Kr&&Kr(E)}),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){Kr=E,$e.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},$e.addEventListener("sessionstart",Kn),$e.addEventListener("sessionend",aa),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0)return void Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(z===!0)return;let K=$e.enabled===!0&&$e.isPresenting===!0,ne=F!==null&&(V===null||K)&&F.begin(I,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),$e.enabled!==!0||$e.isPresenting!==!0||F!==null&&F.isCompositing()!==!1||($e.cameraAutoUpdate===!0&&$e.updateCamera(X),X=$e.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,X,V),M=vt.get(E,L.length),M.init(X),L.push(M),x.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),S.setFromProjectionMatrix(x,rn,X.reversedDepth),D=this.localClippingEnabled,U=ve.init(this.clippingPlanes,D),T=it.get(E,w.length),T.init(),w.push(T),$e.enabled===!0&&$e.isPresenting===!0){let de=I.xr.getDepthSensingMesh();de!==null&&$r(de,X,-1/0,I.sortObjects)}$r(E,X,0,I.sortObjects),T.finish(),I.sortObjects===!0&&T.sort(ae,he),q=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,q&&Ce.addToRenderList(T,E),this.info.render.frame++,U===!0&&ve.beginShadows();let Q=M.state.shadowsArray;if(ee.render(Q,E,X),U===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){let de=T.opaque,_e=T.transmissive;if(M.setupLights(),X.isArrayCamera){let be=X.cameras;if(_e.length>0)for(let Te=0,Ne=be.length;Te<Ne;Te++)Qr(de,_e,E,be[Te]);q&&Ce.render(E);for(let Te=0,Ne=be.length;Te<Ne;Te++){let Qe=be[Te];$n(T,E,Qe,Qe.viewport)}}else _e.length>0&&Qr(de,_e,E,X),q&&Ce.render(E),$n(T,E,X)}V!==null&&H===0&&(ue.updateMultisampleRenderTarget(V),ue.updateRenderTargetMipmap(V)),ne&&F.end(I),E.isScene===!0&&E.onAfterRender(I,E,X),nt.resetDefaultState(),k=-1,W=null,L.pop(),L.length>0?(M=L[L.length-1],U===!0&&ve.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,w.pop(),T=w.length>0?w[w.length-1]:null},this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,X,K){let ne=se.get(E);ne.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(E.texture).__webglTexture=X,se.get(E.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:K,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){let K=se.get(E);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0};let is=N.createFramebuffer();this.setRenderTarget=function(E,X=0,K=0){V=E,G=X,H=K;let ne=null,Q=!1,de=!1;if(E){let _e=se.get(E);if(_e.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(N.FRAMEBUFFER,_e.__webglFramebuffer),Y.copy(E.viewport),Z.copy(E.scissor),pe=E.scissorTest,ie.viewport(Y),ie.scissor(Z),ie.setScissorTest(pe),void(k=-1);if(_e.__webglFramebuffer===void 0)ue.setupRenderTarget(E);else if(_e.__hasExternalTextures)ue.rebindTextures(E,se.get(E.texture).__webglTexture,se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ne=E.depthTexture;if(_e.__boundDepthTexture!==Ne){if(Ne!==null&&se.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(E)}}let be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);let Te=se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ne=Array.isArray(Te[X])?Te[X][K]:Te[X],Q=!0):ne=E.samples>0&&ue.useMultisampledRTT(E)===!1?se.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[K]:Te,Y.copy(E.viewport),Z.copy(E.scissor),pe=E.scissorTest}else Y.copy(Ae).multiplyScalar(te).floor(),Z.copy(ze).multiplyScalar(te).floor(),pe=b;if(K!==0&&(ne=is),ie.bindFramebuffer(N.FRAMEBUFFER,ne)&&ie.drawBuffers(E,ne),ie.viewport(Y),ie.scissor(Z),ie.setScissorTest(pe),Q){let _e=se.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e.__webglTexture,K)}else if(de){let _e=X;for(let be=0;be<E.textures.length;be++){let Te=se.get(E.textures[be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+be,Te.__webglTexture,K,_e)}}else if(E!==null&&K!==0){let _e=se.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,K)}k=-1},this.readRenderTargetPixels=function(E,X,K,ne,Q,de,_e,be=0){if(!E||!E.isWebGLRenderTarget)return void Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ie.bindFramebuffer(N.FRAMEBUFFER,Te);try{let Ne=E.textures[be],Qe=Ne.format,et=Ne.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(Qe))return void Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))return void Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");X>=0&&X<=E.width-ne&&K>=0&&K<=E.height-Q&&N.readPixels(X,K,ne,Q,ut.convert(Qe),ut.convert(et),de)}finally{let Ne=V!==null?se.get(V).__webglFramebuffer:null;ie.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,X,K,ne,Q,de,_e,be=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){if(X>=0&&X<=E.width-ne&&K>=0&&K<=E.height-Q){ie.bindFramebuffer(N.FRAMEBUFFER,Te);let Ne=E.textures[be],Qe=Ne.format,et=Ne.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(X,K,ne,Q,ut.convert(Qe),ut.convert(et),0);let tt=V!==null?se.get(V).__webglFramebuffer:null;ie.bindFramebuffer(N.FRAMEBUFFER,tt);let xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qu(N,xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(Re),N.deleteSync(xt),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,X=null,K=0){let ne=Math.pow(2,-K),Q=Math.floor(E.image.width*ne),de=Math.floor(E.image.height*ne),_e=X!==null?X.x:0,be=X!==null?X.y:0;ue.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,_e,be,Q,de),ie.unbindTexture()};let oa=N.createFramebuffer(),la=N.createFramebuffer();this.copyTextureToTexture=function(E,X,K=null,ne=null,Q=0,de=0){let _e,be,Te,Ne,Qe,et,Re,tt,xt,_t=E.isCompressedTexture?E.mipmaps[de]:E.image;if(K!==null)_e=K.max.x-K.min.x,be=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,Qe=K.min.y,et=K.isBox3?K.min.z:0;else{let ci=Math.pow(2,-Q);_e=Math.floor(_t.width*ci),be=Math.floor(_t.height*ci),Te=E.isDataArrayTexture?_t.depth:E.isData3DTexture?Math.floor(_t.depth*ci):1,Ne=0,Qe=0,et=0}ne!==null?(Re=ne.x,tt=ne.y,xt=ne.z):(Re=0,tt=0,xt=0);let dt=ut.convert(X.format),Ze=ut.convert(X.type),lt;X.isData3DTexture?(ue.setTexture3D(X,0),lt=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ue.setTexture2DArray(X,0),lt=N.TEXTURE_2D_ARRAY):(ue.setTexture2D(X,0),lt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);let Tt=N.getParameter(N.UNPACK_ROW_LENGTH),Oe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ge=N.getParameter(N.UNPACK_SKIP_PIXELS),Qt=N.getParameter(N.UNPACK_SKIP_ROWS),tr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let ir=E.isDataArrayTexture||E.isData3DTexture,hn=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){let ci=se.get(E),Yi=se.get(X),hi=se.get(ci.__renderTarget),A=se.get(Yi.__renderTarget);ie.bindFramebuffer(N.READ_FRAMEBUFFER,hi.__webglFramebuffer),ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,A.__webglFramebuffer);for(let $=0;$<Te;$++)ir&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,se.get(E).__webglTexture,Q,et+$),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,se.get(X).__webglTexture,de,xt+$)),N.blitFramebuffer(Ne,Qe,_e,be,Re,tt,_e,be,N.DEPTH_BUFFER_BIT,N.NEAREST);ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Q!==0||E.isRenderTargetTexture||se.has(E)){let ci=se.get(E),Yi=se.get(X);ie.bindFramebuffer(N.READ_FRAMEBUFFER,oa),ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,la);for(let hi=0;hi<Te;hi++)ir?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ci.__webglTexture,Q,et+hi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ci.__webglTexture,Q),hn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yi.__webglTexture,de,xt+hi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yi.__webglTexture,de),Q!==0?N.blitFramebuffer(Ne,Qe,_e,be,Re,tt,_e,be,N.COLOR_BUFFER_BIT,N.NEAREST):hn?N.copyTexSubImage3D(lt,de,Re,tt,xt+hi,Ne,Qe,_e,be):N.copyTexSubImage2D(lt,de,Re,tt,Ne,Qe,_e,be);ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else hn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(lt,de,Re,tt,xt,_e,be,Te,dt,Ze,_t.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(lt,de,Re,tt,xt,_e,be,Te,dt,_t.data):N.texSubImage3D(lt,de,Re,tt,xt,_e,be,Te,dt,Ze,_t):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,Re,tt,_e,be,dt,Ze,_t.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,Re,tt,_t.width,_t.height,dt,_t.data):N.texSubImage2D(N.TEXTURE_2D,de,Re,tt,_e,be,dt,Ze,_t);N.pixelStorei(N.UNPACK_ROW_LENGTH,Tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Oe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,tr),de===0&&X.generateMipmaps&&N.generateMipmap(lt),ie.unbindTexture()},this.initRenderTarget=function(E){se.get(E).__webglFramebuffer===void 0&&ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ue.setTextureCube(E,0):E.isData3DTexture?ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ue.setTexture2DArray(E,0):ue.setTexture2D(E,0),ie.unbindTexture()},this.resetState=function(){G=0,H=0,V=null,ie.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var yh=.55,Rf="./assets/hero-monkey-chase-v2.png",If=new C(0,0,-1),Pf=new C(0,1,0);function qi(n,e,t){return Math.max(e,Math.min(t,n))}function Ys(n,e,t,i){return eh.damp(n,e,t,i)}function Lf(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function Df(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function Ud(n,e,t){let i=qi((t-n)/(e-n),0,1);return i*i*(3-2*i)}function Uf(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],f=c[u+2],m=p-Math.max(d,f),_=Ud(24,92,m)*Ud(72,180,p);if(_<=0)continue;c[u+3]=Math.round(c[u+3]*(1-_));let g=_*.78;c[u+1]=Math.round(p*(1-g)+Math.max(d,f)*g)}o.putImageData(l,0,0);let h=new Bi(a);return h.colorSpace=yt,h.minFilter=Ei,h.magFilter=Lt,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function Nd(n,e){let t=new st;t.setAttribute("position",new Et(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new bt({color:n,transparent:!0,opacity:e,depthWrite:!1,side:Vt,blending:Hn}),r=new qe(t,i);return r.frustumCulled=!1,r}function Fd(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function Nf(){let n=new Float32Array(24),e=new st;e.setAttribute("position",new Et(n,3));let t=new wr({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new Ts(e,t);return i.frustumCulled=!1,i}function Ff(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function Od(n,e){let t=new St;t.position.set(n*.27,.14,.055);let i=new qe(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new qe(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new qe(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new qe(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function Bd({scene:n,camera:e,renderer:t,assetUrl:i=Rf,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await Df(i),o=Uf(a,t),l=new St;l.name="playerRig";let c=new St;c.name="playerAttitude",l.add(c);let h=new bt({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:Vt,toneMapped:!0}),u=new qe(new vi(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new Zt(.018,.025,.62,6),jointGeometry:new ki(.065,8,5),thrusterGeometry:new Zt(.045,.06,.14,7),trailGeometry:new zi(.06,.48,7,1,!0),metalMaterial:new Gi({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new Gi({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new bt({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new bt({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:Vt,blending:Hi})},p=Od(-1,d),f=Od(1,d);c.add(p,f);let m=Nd(12853285,.88),_=Nd(9376024,.78);c.add(m,_);let g=Nf();c.add(g);let v=new wn(16757051,r?1.4:2.1,4.5,2);v.position.set(0,-.04,.34),c.add(v),n.add(l);let y={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:yh,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,f],scarves:[m,_],tail:g,engineLight:v,cameraVelocity:new C,cameraTarget:new C,lookTarget:new C,aimForward:If.clone(),disposed:!1};return Sh(y,r),y}function Zs(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=qi(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=qi(t.bank??-(t.vx||0)*.08,-.52,.52),a=qi(t.pitch??-(t.vy||0)*.045,-.36,.36),o=qi(-(t.vx||0)*.022,-.18,.18),l=qi(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=Ys(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=Ys(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=Ys(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=Ys(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=Ys(n.wings[1].rotation.z,-u,12,r),Fd(n.scarves[0],n.time,-1,l),Fd(n.scarves[1],n.time+.17,1,l),Ff(n.tail,n.time,s);let d=qi(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((f,m)=>{let _=f.userData.trail,g=.9+Math.sin(n.time*28+m)*.12;_.scale.set(.85+d*.25,.55+d*.7*g,.85+d*.25),_.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function Mh(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=qi(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),Lf(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=qi(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(Pf),r.lookAt(n.lookTarget),r.rotateZ(qi(-(t.bank||0)*.12,-.07,.07))}function Sh(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}var Bf=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg"],Wt=-5.32,zf=18,kf=11.5,Gf=10.7,Vf=3,Ai=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8})]);function jr(n,e,t){return Math.max(e,Math.min(t,n))}function kd(n){return jr(Math.round(Number(n)||0),0,Vf)}function il(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function bh(n,e,t=0){let i=il(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function Th(n){let e=il(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ct(n,e,t){return e+(t-e)*n()}function Gd(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function Hf(n,e,t){let i=Gd(128,256);if(!i){let m=new ye(n.facade[e]),_=new Uint8Array([m.r*255,m.g*255,m.b*255,255]),g=new On(_,1,1);return g.needsUpdate=!0,g}let r=Th(bh(t,e,41)),s=i.getContext("2d"),a=new ye(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new ye(16777215),.12),c=n.windows.map(m=>new ye(m));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let m=0;m<u;m+=1)for(let _=0;_<h;_+=1){let g=_*d,v=m*p;s.fillStyle=`#${l.clone().multiplyScalar(ct(r,.66,1.08)).getHexString()}`,s.fillRect(g+1,v+1,d-2,p-2);let y=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,T=r()<y?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${T.clone().multiplyScalar(ct(r,.72,1.08)).getHexString()}`;let M=e===1?3:4,w=e===2?3:2;s.fillRect(g+M,v+w,Math.max(2,d-M*2),Math.max(2,p-w*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let m=0;m<16;m+=1){let _=Math.floor(r()*h)*d,g=Math.floor(r()*u)*p;s.fillRect(_+1,g+1,d-2,p-2)}}let f=new Bi(i);return f.colorSpace=yt,f.wrapS=Un,f.wrapT=Un,f.repeat.set(e===1?1.5:1,e===2?1.5:2),f.needsUpdate=!0,f}function Wf(n,e){let t=Gd(1024,320);if(!t)return null;let i=Th(bh(e,813,Ai.indexOf(n))),r=t.getContext("2d"),s=new ye(n.sky),a=new ye(n.fog).lerp(new ye(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=ct(i,18,54),u=ct(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-ct(i,12,55),2,ct(i,12,55)),l+=h+ct(i,3,13)}let c=new Bi(t);return c.colorSpace=yt,c.needsUpdate=!0,c}function Xr(n){return new Gi({roughness:.76,metalness:.24,...n})}function zd(n,e,t,i){let r=new Bn(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(Gr),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function xi(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function Js(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function qr(n,e,t){let i=Ai[t],r=Th(bh(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;xi(s.road,0,Wt+.035,0,a*2,.07,o-.08,{color:i.road}),xi(s.sidewalk,-(a+.72),Wt+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),xi(s.sidewalk,a+.72,Wt+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])xi(s.markings,c,Wt+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);Js(s.metalCylinder,u,Wt+1.5,h,.055,2.85,{color:i.metal}),xi(s.metalBox,u-c*.27,Wt+2.83,h,.58,.06,.06,{color:i.metal}),xi(s.lights,u-c*.52,Wt+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density===9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=ct(r,t===1?3.4:2.5,t===2?5.8:5.1),p=ct(r,2.8,4.8),f=a+1.45+u*4.6+ct(r,0,1.2),m=c*(f+d/2),_=ct(r,-o*.42,o*.42),g=ct(r,i.minHeight,i.maxHeight);t===1&&h>1&&(g*=.72),t===3&&r()<.22&&(g*=.58);let v=Math.floor(r()*3),y=jr(g*ct(r,.18,.28),1.2,3.4),T=g-y;s.facade.push({level:t,family:v,x:m,y:Wt+y/2,z:_,sx:d*1.14,sy:y,sz:p*1.12,ry:0});let M=t===2||g>10||r()<.42,w=M?ct(r,.58,.74):1,L=T*w;s.facade.push({level:t,family:v,x:m,y:Wt+y+L/2,z:_,sx:d,sy:L,sz:p,ry:0});let F=Wt+y+L,I=d,z=p;if(M){let G=T-L;I=d*ct(r,.58,.78),z=p*ct(r,.6,.82),s.facade.push({level:t,family:(v+1)%3,x:m,y:F+G/2,z:_,sx:I,sy:G,sz:z,ry:0}),F+=G}if(xi(s.roof,m,F+.11,_,I*.88,.22,z*.86,{color:i.roof}),r()<.78&&xi(s.metalBox,m+ct(r,-I*.2,I*.2),F+.35,_,I*.24,.5,z*.24,{color:i.metal}),g>11&&r()<.46){let G=ct(r,1.1,t===2?3.8:2.5);Js(s.metalCylinder,m,F+G/2,_,.055,G,{color:i.metal}),xi(s.lights,m,F+G,_,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){xi(s.metalBox,0,Wt+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])Js(s.metalCylinder,c*(a+.32),Wt+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+ct(r,0,3));if(e%2===0){let u=ct(r,7,13);Js(s.metalCylinder,h,Wt+u/2,ct(r,-3,3),.52,u,{color:6643288}),xi(s.lights,h,Wt+u+.15,0,.22,.22,.22,{color:i.beacon})}else Js(s.metalCylinder,h,Wt+1.15,ct(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+ct(r,4.5,10));xi(s.lights,h,Wt+ct(r,1.2,5),ct(r,-4,4),ct(r,.35,.75),ct(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}return s}function Xf(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function Yr(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(Xf(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function jf(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=yt,s.minFilter=Ei;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function Vd(n,e,t){let i=Wf(Ai[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,jf(n,e,t,n.backdropTokens[t])}function qf(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=qr(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,Yr(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:Ai[t.fromLevel],to:Ai[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=qr(n,n.blocks[c].serial,t.toLevel));Yr(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function Yf(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new Gt(1,1,1),s=new Zt(.5,.5,1,8,1,!1),a=new vi(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=Ai.map((l,c)=>l.facade.map((h,u)=>{let d=Hf(l,u,n.seed);n.generatedTextures.add(d);let p=Xr({color:h,map:d,emissiveMap:d,emissive:new ye(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let f=zd(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(f),n.movingRoot.add(f),f}));let o=(l,c,h,u)=>{n.materials.add(h);let d=zd(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,Xr({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,Xr({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,Xr({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,Xr({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,Xr({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new bt({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new bt({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new bt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:Vt});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new qe(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),Vd(n,n.level,0),n.backdropMaterials[0].opacity=1}function Hd(n={}){let e=jr(Math.floor(n.blockCount||zf),10,24),t=jr(Number(n.blockSpacing)||kf,9,16),i=Math.max(Gf,Number(n.corridorHalfWidth)||0),r=kd(n.level),s=new St;s.name="streamed-city";let a=new St;a.name="streamed-city-blocks";let o=new St;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:il(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,4):Bf.slice(),textureLoader:typeof document>"u"?null:new Os,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new At,color:new ye,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};Yf(l);for(let h=0;h<e;h+=1)l.blocks.push(qr(l,h,r));Yr(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return Zf(c,h,u)},setLevel(h,u){return Jf(c,h,u)},setSeed(h,u){return Kf(c,h,u)},getEnvironment(){return Wd(c)},getStats(){return{...l.stats}},dispose(){$f(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function nl(n){let e=n?._cityState;return!e||e.disposed?null:e}function Zf(n,e,t={}){let i=nl(n);if(!i)return null;let r=jr(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push(qr(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&Yr(i),qf(i,r),Wd(n)}function Jf(n,e,t={}){let i=nl(n);if(!i)return!1;let r=kd(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=jr(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,Vd(i,r,c),s?(i.blocks=i.blocks.map(h=>qr(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,Yr(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:Ai[r],to:Ai[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function Kf(n,e,t={}){let i=nl(n);if(!i)return!1;let r=il(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push(qr(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,Yr(i)}return!0}function Wd(n){let e=nl(n);if(!e)return null;if(!e.transition){let o=Ai[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=Ai[t],a=Ai[i];return{level:i,mix:r,sky:new ye(s.sky).lerp(new ye(a.sky),r).getHex(),fog:new ye(s.fog).lerp(new ye(a.fog),r).getHex(),light:new ye(s.light).lerp(new ye(a.light),r).getHex(),theme:a}}function $f(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var Qf=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])})]),Ks=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var eg=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),Ci=(n,e,t)=>Math.max(e,Math.min(t,n)),Zr=(n,e)=>Number.isFinite(n)?n:e;function Xd(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function tg(n=7646257){let e=Xd(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=Xd(i)||1831565813},t}function ig(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>Ci(Zr(n(),.5),0,.999999999999)}function ng(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var Ee,rl,oi,wh,jd,sl,al,Ah,$s,qd,Yd,Zd,Jd,ol,on,Eh=class{constructor({seed:e=7646257,rng:t=tg(e),levels:i=Qf,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){Uh(this,Ee);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=ig(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=Ci(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=Ci(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),ke(this,Ee,on).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&ke(this,Ee,Ah).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();ke(this,Ee,Zd).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values(Ks).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,ke(this,Ee,Ah).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};Ee=new WeakSet,rl=function(e){let t=this.levels[this.levelIndex],i=Ci(this.survivalTime/180,0,.42),r=Ci(Zr(e.difficulty,0),-.25,.5);return{scalar:Ci(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor(Zr(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor(Zr(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor(Zr(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor(Zr(e.activeMissiles,0)))}},oi=function(e,t){return e+(t-e)*this.random()},wh=function(e){return e[Math.floor(this.random()*e.length)]},jd=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||Ks.FORMATION},sl=function(e){return this.serial+=1,`${e}-${this.serial}`},al=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},Ah=function(e,t){let i=this.levels[this.levelIndex],r=ke(this,Ee,rl).call(this,t),s=e||ke(this,Ee,jd).call(this,i.weights),a=ke(this,Ee,sl).call(this,"encounter"),o=ke(this,Ee,Yd).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,ke(this,Ee,on).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)ke(this,Ee,al).call(this,l.at,l.kind,l.payload);ke(this,Ee,al).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},$s=function(e,t,i,r={}){return{entityId:ke(this,Ee,sl).call(this,"aircraft"),encounterId:e,typeHint:ke(this,Ee,wh).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:ke(this,Ee,oi).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*ke(this,Ee,oi).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:ke(this,Ee,oi).call(this,0,Math.PI*2),amplitude:ke(this,Ee,oi).call(this,.75,1.8),...r}},qd=function(e,t,i,r,s,a){let o=ke(this,Ee,sl).call(this,"missile"),[l,c]=i.warningLead,h=ke(this,Ee,oi).call(this,l,c)/Ci(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:Ci(.92+r.scalar*.2,1,1.28),guidanceScale:Ci(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},Yd=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=ng([0,1,2],this.random),l=5;if(e===Ks.FORMATION){let d=Math.min(a,Ci(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=ke(this,Ee,wh).call(this,["vee","echelon","stack"]);for(let f=0;f<d;f+=1){let m=o[f%o.length];s.push({at:f*ke(this,Ee,oi).call(this,.42,.7),kind:"aircraftSpawn",payload:ke(this,Ee,$s).call(this,t,i,r,{role:p,lane:m,altitude:.2+(p==="stack"?f*1.25:f%2?1.5:0),spawnZ:-82-f*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===Ks.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:ke(this,Ee,$s).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:ke(this,Ee,oi).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*ke(this,Ee,oi).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===Ks.MISSILE_SORTIE){let d=Math.min(a,this.levelIndex>=3&&this.random()<.45?2:1),p=Math.max(0,r.maxMissiles-r.activeMissiles);for(let f=0;f<d;f+=1){let m=ke(this,Ee,$s).call(this,t,i,r,{role:"missile-carrier",lane:o[f],altitude:ke(this,Ee,oi).call(this,1.2,5),spawnZ:-88-f*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:f*1.05,kind:"aircraftSpawn",payload:m}),f<p&&s.push(...ke(this,Ee,qd).call(this,t,m.entityId,i,r,2.1+f*1.1,m.lane===0?"left":m.lane===2?"right":"ahead"))}l=6.4+d*.8}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let f=0;f<d;f+=1){let m=p[f];s.push({at:f<2?f*.18:1.05,kind:"aircraftSpawn",payload:ke(this,Ee,$s).call(this,t,i,r,{role:m===0?"left-flanker":"right-flanker",lane:m,altitude:ke(this,Ee,oi).call(this,-.8,4.3),spawnZ:-78-f*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:ke(this,Ee,oi).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,ke(this,Ee,oi).call(this,c,h)/Ci(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},Zd=function(e,t){if(e.kind==="aircraftSpawn"){let i=ke(this,Ee,rl).call(this,t);if(i.activeAircraft>=i.maxAircraft){ke(this,Ee,Jd).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,ke(this,Ee,on).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=ke(this,Ee,rl).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),ke(this,Ee,ol).call(this,e,"missile-cap");return}ke(this,Ee,on).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){ke(this,Ee,ol).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,ke(this,Ee,on).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",ke(this,Ee,on).call(this,"recoveryStart",e.payload),ke(this,Ee,al).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,ke(this,Ee,on).call(this,"recoveryEnd",e.payload))},Jd=function(e,t){if(e.retries>=this.maxSpawnRetries){ke(this,Ee,ol).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},ol=function(e,t){this.stats.actionsSkipped+=1,ke(this,Ee,on).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},on=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[eg[e]]?.(i)===!1||r===!1)};function Kd(n){return new Eh(n)}var ll=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),Cn=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35}]),ln=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),$d=new C(0,0,1),ep=new C(0,0,0),tp=new kt,rg=new ye(16777215);function Qd(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new Bi(e);return i.colorSpace=yt,i.needsUpdate=!0,i}function sg(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function Qs(n,e,t,i,r){let s=new Bn(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(Gr),s.renderOrder=i.blending===Hi?30:20;let a=Array.from({length:r},sg);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,tp,ep),s.setMatrixAt(o,n.matrix),s.setColorAt(o,rg);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function Ch(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function Nt(n,e,t){return e+(t-e)*Ch(n)}function Jr(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function ag(n,e){n.x=Jr(e,"x"),n.y=Jr(e,"y"),n.z=Jr(e,"z")}function og(n,e){n.vx=Jr(e,"x"),n.vy=Jr(e,"y"),n.vz=Jr(e,"z")}function lg(n,e,t){let i=e??t;i&&i.isColor?ea.copy(i):ea.set(i),n.r=ea.r,n.g=ea.g,n.b=ea.b}var ea=new ye;function cg(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function ia(n,e,t,i){let r=cg(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??Nt(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,ag(r,t.position),og(r,t.velocity),lg(r,t.color,i.color),r}function Rh(n,e){let t=ll[e]||ll.medium;n.resolvedQuality=e in ll?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor(ln.weather*t.weatherLimit*(n.reducedMotion?.3:1)),np(n,!0)}function ip(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+Nt(n,-18,18),n.weatherPositions[r+1]=i.y+Nt(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+Nt(n,-28,12),n.weatherPhases[e]=Nt(n,0,Math.PI*2)}function np(n,e){let t=Cn[n.level]||Cn[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)ip(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function hg(n,e,t){if(!n.weatherCount)return;let i=Cn[n.level]||Cn[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&ip(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function ta(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,tp,ep),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle($d,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors($d,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function Ih(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function ug(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function dg(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function pg(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&Rh(n,t)}function mg(n,e){let t=ia(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function fg(n,e){return n.reducedMotion&&Ch(n)>.42?null:ia(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:Nt(n,-1.8,1.8),color:14276559})}function gg(n,e){return n.reducedMotion&&Ch(n)>.6?null:ia(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function vg(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*ll[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(Nt(n,-1,1),Nt(n,-.75,1),Nt(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*Nt(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=Nt(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=Nt(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=Nt(n,1.2,3.2),n.spawnOptions.gravity=Nt(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=ia(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return Ih(n,e.impulse??.55*s,Nt(n,-.018,.018)),a}function _g(n,e){if(n.reducedMotion)return null;let t=ia(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return Ih(n,e.impulse??.22,e.roll??Nt(n,-.01,.01)),t}function xg(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),Ih(n,e.impulse??.85,e.roll??Nt(n,-.025,.025)),n.hitFlash}function rp({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new St,pools:{},resources:new Set,matrix:new Ve,position:new C,direction:new C,scale:new C,quaternion:new kt,rollQuaternion:new kt,color:new ye,hiddenPosition:new C(0,-1e4,0),weatherCenter:new C,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:ln.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new bt({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:Hi,toneMapped:!1,vertexColors:!0}),l=d=>new bt({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=Qs(a,"projectileTrail",new Gt(1,1,1),o(.95),ln.projectileTrail),a.pools.missileSmoke=Qs(a,"missileSmoke",new Vn(1,1),l(.42),ln.missileSmoke),a.pools.jetExhaust=Qs(a,"jetExhaust",new Gt(1,1,1),o(.72),ln.jetExhaust),a.pools.explosion=Qs(a,"explosion",new Vn(1,0),o(.9),ln.explosion),a.pools.nearMiss=Qs(a,"nearMiss",new Gt(1,1,1),o(.84),ln.nearMiss),a.softTexture=Qd("soft"),a.streakTexture=Qd("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array(ln.weather*3),a.weatherPhases=new Float32Array(ln.weather);let c=new st;c.setAttribute("position",new Et(a.weatherPositions,3).setUsage(Gr));let h=new Sn({color:Cn[0].color,size:Cn[0].size,map:a.softTexture,transparent:!0,opacity:Cn[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:Hi});a.weather=new zn(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new bt({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Hi,toneMapped:!1});return a.hitFlash=new qe(new vi(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),Rh(a,a.resolvedQuality),a}function Ph(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),pg(n,i),ta(n,n.pools.projectileTrail,i,"streak"),ta(n,n.pools.missileSmoke,i,"smoke"),ta(n,n.pools.jetExhaust,i,"streak"),ta(n,n.pools.explosion,i,"explosion"),ta(n,n.pools.nearMiss,i,"streak"),hg(n,i,t),ug(n,i),dg(n,i),n.cameraImpulse}function Jt(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return mg(n,t);case"missileSmoke":return fg(n,t);case"jetExhaust":return gg(n,t);case"explosion":return vg(n,t);case"nearMiss":return _g(n,t);case"hitFlash":return xg(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function sp(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(Cn.length-1,Math.floor(e))),np(n,!0))}function ap(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;Rh(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("startButton"),s=document.getElementById("pauseOverlay"),a=document.getElementById("resumeButton"),o=document.getElementById("restartButton"),l=document.getElementById("pauseButton"),c=document.getElementById("muteButton"),h=document.getElementById("shootButton"),u=document.getElementById("score"),d=document.getElementById("best"),p=document.getElementById("points"),f=document.getElementById("multiplier"),m=document.getElementById("level"),_=document.getElementById("threatBar"),g=document.getElementById("missileWarning"),v=document.getElementById("lockMeter"),y=document.getElementById("missileBearing"),T=document.getElementById("missileDirection"),M=document.getElementById("targetingHud"),w=document.getElementById("targetStatus"),L=document.getElementById("targetRange"),F=document.getElementById("weaponCooldown"),I=document.getElementById("touchControls"),z=document.getElementById("steerZone"),G=document.getElementById("liftButton"),H=document.getElementById("statusRegion"),V=window.GameAudio||{},k=1/60,W=[-6.2,0,6.2],Y=-3.2,Z=5.8,pe=1.4,Me=window.matchMedia("(prefers-reduced-motion: reduce)").matches,xe=[{time:0,name:"PATROL",threat:20,spawn:2.15,maxJets:3,missileChance:.2,missileCap:1,speed:16,sky:1453113,fog:2441805,city:2505539,lights:5824449},{time:22,name:"INTERCEPT",threat:46,spawn:1.82,maxJets:4,missileChance:.38,missileCap:1,speed:18.5,sky:3746867,fog:6440522,city:3354424,lights:15254612},{time:52,name:"MISSILE LOCK",threat:74,spawn:1.55,maxJets:5,missileChance:.56,missileCap:2,speed:21,sky:1515564,fog:3488587,city:2107702,lights:16740431},{time:92,name:"OVERDRIVE",threat:100,spawn:1.28,maxJets:6,missileChance:.72,missileCap:3,speed:24,sky:2232087,fog:4858407,city:2431521,lights:16731960}],Se={f16:{name:"F-16",color:9411488,accent:4282208,hp:2,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:3,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:2,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:5,speed:.72,agility:.62,score:980,scale:1.18}},me,te,ae,he,Ae,ze,b,S,U,D,x,R,P="loading",O="playing",q=0,J=0,j=0,re=0,ie=1,oe=0,se=0,ue=performance.now(),Ie=0,Be=0,Ke=1,je=0,fe=7646257,Ue=null,it=null,vt=!1,ve=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),ee={x:0,y:.7,z:pe,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:yh},Ce=[],mt=[],Xt=[],ht=new Set,ut=new ye,nt=new C,li=new C;d.textContent=String(Math.floor(ve));function N(A){H.textContent="",requestAnimationFrame(()=>{H.textContent=A})}function at(A,$,B){return Math.max($,Math.min(B,A))}function Ri(){return fe=fe*1664525+1013904223>>>0,fe/4294967296}function $e(A,$){return A+($-A)*Ri()}function Ii(A,$={}){return new Gi({color:A,roughness:$.roughness??.58,metalness:$.metalness??.45,emissive:$.emissive||0,emissiveIntensity:$.emissiveIntensity||0})}function $t(A){A&&(te.remove(A),A.traverse?.($=>{$.geometry?.dispose?.(),Array.isArray($.material)?$.material.forEach(B=>B.dispose?.()):$.material?.dispose?.()}))}function na(A){let $=Se[A],B=new St,we=Ii($.color,{metalness:.72,roughness:.34}),Xe=Ii($.accent,{metalness:.62,roughness:.42}),He=Ii(1582893,{metalness:.75,roughness:.16}),Pe=Ii(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),ce=new qe(new Zt(.34,.5,4.2,10),we);ce.rotation.x=Math.PI/2,B.add(ce);let Dt=new qe(new zi(.34,1.35,10),we);Dt.rotation.x=Math.PI/2,Dt.position.z=2.72,B.add(Dt);let It=new qe(new ki(.38,10,6),He);It.scale.set(.75,.55,1.35),It.position.set(0,.32,.8),B.add(It);let Zi=new kn;Zi.moveTo(0,1.2),Zi.lineTo(2.7,-1.2),Zi.lineTo(.45,-.65),Zi.lineTo(0,-1.1);let Ft=new qe(new Rr(Zi,{depth:.1,bevelEnabled:!1}),we);Ft.rotation.x=-Math.PI/2,Ft.rotation.z=Math.PI/2,Ft.position.set(-.05,-.03,.3),Ft.geometry.center(),B.add(Ft);let nr=new qe(new Gt(2.5,.08,.65),Xe);nr.position.z=-1.55,B.add(nr);let pt=new qe(new Gt(.1,.85,.9),Xe);pt.position.set(0,.46,-1.55),B.add(pt);let jt=new qe(new Zt(.18,.28,.72,8),Pe);if(jt.rotation.x=Math.PI/2,jt.position.z=-2.38,B.add(jt),A==="fa18"||A==="f22"){let un=jt.clone();jt.position.x=-.24,un.position.x=.24,B.add(un)}if(A==="a10"){let un=new Zt(.28,.34,1.45,9);[-.82,.82].forEach(ui=>{let qt=new qe(un,Xe);qt.rotation.x=Math.PI/2,qt.position.set(ui,.35,-.75),B.add(qt)}),Ft.scale.x=1.15}return A==="f22"&&(Ft.scale.z=1.25),B.scale.setScalar($.scale),B.userData.engine=jt,B}function ra(){let A=new St,$=new qe(new Zt(.09,.13,1.15,8),Ii(13095121,{metalness:.75,roughness:.3}));$.rotation.x=Math.PI/2,A.add($);let B=new qe(new zi(.1,.34,8),Ii(14739172));B.rotation.x=-Math.PI/2,B.position.z=-.74,A.add(B);let we=new qe(new zi(.11,.55,8),new bt({color:16757051,transparent:!0,opacity:.9}));return we.rotation.x=Math.PI/2,we.position.z=.83,A.add(we),A.userData.flame=we,A}function sa(){let A=new St,$=new qe(new ki(.13,8,6),new bt({color:16772983}));$.scale.z=4.2,A.add($);let B=new wn(16762685,2.2,5);return A.add(B),A}function Kr(){let A=new Float32Array(1080);for(let we=0;we<360;we+=1)A[we*3]=$e(-60,60),A[we*3+1]=$e(-1,28),A[we*3+2]=$e(-150,-12);let $=new st;$.setAttribute("position",new Et(A,3)),ze=new zn($,new Sn({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),te.add(ze),Ae=new St;let B=new bt({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let we=0;we<24;we+=1){let Xe=new qe(new ki(1,8,5),B);Xe.scale.set($e(4,9),$e(.7,1.6),$e(2,5)),Xe.position.set($e(-28,28),$e(4,15),$e(-130,-12)),Ae.add(Xe)}te.add(Ae)}function Kn(A){!A||!te||(te.background.setHex(A.sky),te.fog.color.setHex(A.fog),D?.color.setHex(A.light),R?.color.setHex(A.light))}function aa(A){return Ce.find($=>$.entityId===A)||null}function Pi(){return Kd({seed:fe,callbacks:{onAircraftSpawn(A){return P!=="playing"?!1:(K(A),!0)},onMissileWarning(A){if(P!=="playing")return!1;let $=aa(A.sourceEntityId);return $?ne($,A):!1},onMissileLaunch(A){let $=mt.find(B=>B.directorId===A.missileId&&B.state==="locking");return $?($.pendingLaunch=A,$.timer<=0&&Q($,A),!0):!1}}})}async function $r(){try{me=new Qo({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),me.outputColorSpace=yt,me.toneMapping=Gs,me.toneMappingExposure=1.12,te=new ys,te.background=new ye(xe[0].sky),te.fog=new xs(xe[0].fog,.018),ae=new Ut(56,1,.1,220),ae.position.set(0,3.1,13.5),ae.lookAt(0,1,-26),D=new Bs(12446178,659736,2.25),te.add(D),x=new zs(16769187,3.1),x.position.set(-8,13,8),te.add(x),R=new wn(16762699,4.2,14),R.position.set(0,3,5),te.add(R),Kr(),he=Hd({scene:te,level:0,seed:fe,speed:xe[0].speed*.5}),Kn(he.getEnvironment()),U=rp({scene:te,camera:ae,mobile:innerWidth<=700,reducedMotion:Me,quality:"auto",seed:fe}),b=await Bd({scene:te,camera:ae,renderer:me,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:Me}),Zs(b,0,ee,{active:!1,speed:xe[0].speed}),Mh(b,k,ee),S=Pi(),$n(),P="ready",i.textContent="Thread the city canyon, break missile locks, and clear the hostile formation.",r.disabled=!1,r.textContent="Begin 3D Flight",N("3D flight systems ready.")}catch(A){console.error(A),P="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",r.hidden=!0}}function $n(){if(!me||!ae)return;let A=n.clientWidth||innerWidth,$=n.clientHeight||innerHeight,B=A<=700;vt=B,me.setPixelRatio(Math.min(devicePixelRatio||1,B?1.5:2)*Ke),me.setSize(A,$,!1),ae.aspect=A/Math.max(1,$),ae.fov=B&&$>A?65:55,ae.updateProjectionMatrix(),Sh(b,B),document.body.classList.toggle("touch-controls-ready",B&&matchMedia("(pointer: coarse)").matches),I?.setAttribute("aria-hidden",String(!(B&&matchMedia("(pointer: coarse)").matches)))}function Qr(A){e.classList.toggle("is-visible",A),e.setAttribute("aria-hidden",String(!A)),n.inert=A}function Qn(){Ce.splice(0).forEach(A=>$t(A.view)),mt.splice(0).forEach(A=>$t(A.view)),Xt.splice(0).forEach(A=>$t(A.view)),J=0,j=0,re=0,ie=1,oe=0,se=0,q=0,fe=(Date.now()^7646257)>>>0,he?.setSeed(fe,{regenerate:!0}),he?.setLevel(0,{immediate:!0}),S?.stop({clearSchedule:!0}),S=Pi(),S.reset({levelIndex:0,delay:.85}),Object.assign(ee,{x:0,y:.7,z:pe,vy:0,vx:0,lane:1,bank:0,pitch:0}),u.textContent="0",p.textContent="0",f.textContent="1.00\xD7",g.hidden=!0,v.style.width="0%",M?.classList.remove("is-locked"),w&&(w.textContent="Scanning"),L&&(L.hidden=!0),is(),la(0,!1)}function es(){P==="loading"||P==="unsupported"||(Qn(),P="playing",Qr(!1),h.disabled=!1,l.disabled=!1,G&&(G.disabled=!1),S?.start({levelIndex:0,delay:.85}),V.startRun?.(0),n.focus({preventScroll:!0}),N("3D flight started."))}function cn(){P==="playing"&&(ee.vy=Math.min(ee.vy+3.5,6.4),ee.pitch=.34,Jt(U,"jetExhaust",{position:{x:ee.x,y:ee.y-.1,z:ee.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),V.playFlap?.(at(ee.vy/6,.45,1)))}function er(A){P==="playing"&&(ee.lane=at(ee.lane+A,0,W.length-1))}function ts(){let A=null,$=1/0;for(let B of Ce){if(B.z>pe||B.z<-82)continue;let we=B.x-ee.x,Xe=B.y-ee.y,He=Math.hypot(we,Xe)+Math.abs(B.z)*.018;He<7.4&&He<$&&(A=B,$=He)}return A}function is(){let A=Math.round(at(1-se/.2,0,1)*100);F?.style.setProperty("--weapon-charge",String(A)),F?.setAttribute("aria-valuenow",String(A))}function oa(){if(P!=="playing"||se>0)return;se=.2;let A=ts(),$=new C(0,0,-1);A&&(nt.set(A.x-ee.x,A.y-ee.y,A.z-ee.z).normalize(),$.lerp(nt,innerWidth<=700?.82:.68).normalize());let B=sa();B.position.set(ee.x,ee.y,ee.z-.9),te.add(B),Xt.push({x:ee.x,y:ee.y,z:ee.z-.9,previous:new C(ee.x,ee.y,ee.z-.9),velocity:$.multiplyScalar(54),life:1.9,trailTimer:0,view:B}),Jt(U,"projectileTrail",{position:B.position,velocity:Xt[Xt.length-1].velocity,life:.14,width:.075,length:1.2,color:16772456}),is(),V.playShot?.()}function la(A,$=!0){if(A===q&&J>0)return;q=A;let B=xe[A];m.textContent=`LEVEL ${A+1} \xB7 ${B.name}`,_.style.width=`${B.threat}%`,_.style.background=A>=2?"var(--danger)":A===1?"var(--accent)":"var(--signal)",_.parentElement.setAttribute("aria-valuenow",String(B.threat)),te&&(he?.setLevel(A,{duration:$?3.1:.4,immediate:!$}),$||Kn(he?.getEnvironment()),sp(U,A)),S?.setLevel(A,{clearSchedule:$}),V.playLevel?.(A),$&&N(`Level ${A+1}: ${B.name}. City sector changed.`)}function E(){let A=0;for(let $=xe.length-1;$>=0;$-=1)if(J>=xe[$].time){A=$;break}A!==q&&la(A)}function X(){let A=q===0?["f16","fa18"]:q===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return A[Math.floor(Ri()*A.length)]}function K(A={}){let $=Se[A.typeHint]?A.typeHint:X(),B=Se[$],we=at(Number.isInteger(A.lane)?A.lane:Math.floor(Ri()*W.length),0,W.length-1),Xe=na($),He=A.behavior||["intercept","sweep","dive"][Math.floor(Ri()*3)],Pe={entityId:A.entityId||`legacy-${fe}-${Ce.length}`,encounterId:A.encounterId||null,role:A.role||"interceptor",typeId:$,spec:B,view:Xe,hp:B.hp,lane:we,x:W[we]+$e(-.8,.8),y:Number.isFinite(A.altitude)?A.altitude:$e(-1.6,5.2),z:Number.isFinite(A.spawnZ)?A.spawnZ:-82,speed:xe[q].speed*B.speed*at(A.speedScale||1,.78,1.42),phase:Number.isFinite(A.phase)?A.phase:$e(0,Math.PI*2),amplitude:(Number.isFinite(A.amplitude)?A.amplitude:$e(.7,2.1))*B.agility,behavior:He,passed:!1,exhaustTimer:$e(0,.08)};return Xe.position.set(Pe.x,Pe.y,Pe.z),te.add(Xe),Ce.push(Pe),Pe}function ne(A,$={}){let B=xe[q];if(!A||mt.length>=B.missileCap)return!1;let we=ra();we.visible=!1,te.add(we);let Xe=at($.leadTime||[1.45,1.22,1.02,.84][q],.8,3),He={directorId:$.missileId||`missile-${fe}-${mt.length}`,bearingHint:$.bearingHint||"ahead",state:"locking",source:A,view:we,x:A.x,y:A.y,z:A.z,timer:Xe,lockDuration:Xe,speed:19,direction:new C(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return mt.push(He),g.hidden=!1,V.playMissileLock?.(He),!0}function Q(A,$={}){A.state="active",A.view.visible=!0,A.source=null,A.speed=19*at($.speedScale||1,.9,1.35),A.guidanceScale=at($.guidanceScale||1,.88,1.25),A.life=at($.lifetime||5.5,3.5,7),A.direction.set(ee.x-A.x,ee.y-A.y,ee.z-A.z).normalize(),Jt(U,"explosion",{position:A,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),V.playMissileLaunch?.(A)}function de(A){(ht.has("Space")||ht.has("KeyW")||ht.has("ArrowUp")||ht.has("TouchLift"))&&(ee.vy+=5.8*A),ee.vy=at(ee.vy-3.1*A,-3.6,6.4),ee.y+=ee.vy*A,(ee.y<Y||ee.y>Z)&&(ee.y=at(ee.y,Y,Z),ee.vy*=-.15,Be=Math.max(Be,.08));let B=W[ee.lane];ee.vx+=(B-ee.x)*34*A,ee.vx*=Math.exp(-9*A),ee.x+=ee.vx*A,ee.bank+=(at(-ee.vx*.08,-.48,.48)-ee.bank)*A*8,ee.pitch+=(at(-ee.vy*.045,-.34,.34)-ee.pitch)*A*7,Zs(b,A,ee,{active:P==="playing",speed:xe[q].speed,thrust:.52+at(Math.abs(ee.vy)/6.4,0,1)*.42})}function _e(A){for(let $=Ce.length-1;$>=0;$-=1){let B=Ce[$];B.z+=B.speed*A,B.phase+=A*(1.25+B.spec.agility*.55);let we=W[B.lane];B.behavior==="sweep"?B.x=we+Math.sin(B.phase)*B.amplitude*1.8:B.behavior==="flank"?B.x=we+Math.sin(B.phase*.82)*B.amplitude*2.35:B.x+=(we+Math.sin(B.phase)*B.amplitude-B.x)*A*1.8,B.behavior==="dive"?B.y+=Math.sin(B.phase*.68)*A*2.4:B.y+=Math.cos(B.phase)*A*B.amplitude*(B.behavior==="missile-sortie"?.2:.42),B.view.position.set(B.x,B.y,B.z),B.view.rotation.z=Math.sin(B.phase)*.28*B.spec.agility,B.view.rotation.x=Math.cos(B.phase*.7)*.06,B.view.userData.engine.scale.setScalar(.8+Math.sin(J*26+B.phase)*.18),B.exhaustTimer-=A,B.exhaustTimer<=0&&(B.exhaustTimer=vt?.09:.055,Jt(U,"jetExhaust",{position:{x:B.x,y:B.y,z:B.z-2.35*B.spec.scale},velocity:{x:0,y:0,z:-B.speed*.16},color:B.typeId==="a10"?16753487:6674943}));let Xe=B.z-ee.z;if(Math.abs(Xe)<1.2&&Math.hypot(B.x-ee.x,B.y-ee.y)<ee.radius+.7*B.spec.scale){Ze(`${B.spec.name} collision`);return}B.z>10&&(Math.hypot(B.x-ee.x,B.y-ee.y)<3.3&&(Re("CLOSE PASS",120),Jt(U,"nearMiss",{position:B,velocity:{x:0,y:0,z:B.speed},impulse:.14,roll:at((B.x-ee.x)/8,-1,1)*.008})),$t(B.view),Ce.splice($,1))}}function be(A,$){if(!A||!y||!T)return;let B=A.x-ee.x,we=A.z-ee.z,Xe=Math.atan2(B,-we)*180/Math.PI;y.style.setProperty("--missile-bearing",`${Xe.toFixed(1)}deg`);let He="Ahead";Math.abs(Xe)>135?He="Behind":Xe<-35?He="Left":Xe>35&&(He="Right"),T.textContent=$?`${He} \xB7 inbound`:`${He} \xB7 locking`}function Te(A){let $=0,B=null,we=null;for(let Pe=mt.length-1;Pe>=0;Pe-=1){let ce=mt[Pe];if(ce.state==="locking"){if(!ce.source||!Ce.includes(ce.source)){$t(ce.view),mt.splice(Pe,1);continue}ce.x=ce.source.x,ce.y=ce.source.y-.4,ce.z=ce.source.z+.4,ce.timer=Math.max(0,ce.timer-A),(Math.abs(ee.vx)>2.2||Math.abs(ee.vy)>6.2)&&(ce.timer=Math.min(ce.lockDuration,ce.timer+A*.22));let Ft=1-ce.timer/ce.lockDuration;Ft>=$&&($=Ft,B=ce),ce.timer<=0&&ce.pendingLaunch&&Q(ce,ce.pendingLaunch);continue}ce.life-=A,nt.set(ee.x-ce.x,ee.y-ce.y,ee.z-ce.z).normalize();let Dt=(ce.life>3?2.8:1.2)*(ce.guidanceScale||1);ce.direction.lerp(nt,1-Math.exp(-Dt*A)).normalize(),ce.speed=Math.min(31,ce.speed+7*A),ce.x+=ce.direction.x*ce.speed*A,ce.y+=ce.direction.y*ce.speed*A,ce.z+=ce.direction.z*ce.speed*A,ce.view.position.set(ce.x,ce.y,ce.z),ce.view.lookAt(ce.x-ce.direction.x,ce.y-ce.direction.y,ce.z-ce.direction.z),ce.view.userData.flame.scale.y=.8+Math.sin(J*32)*.2,ce.smokeTimer-=A,ce.smokeTimer<=0&&(ce.smokeTimer=vt?.075:.045,Jt(U,"missileSmoke",{position:ce,velocity:{x:-ce.direction.x*1.8,y:-ce.direction.y*1.8,z:-ce.direction.z*1.8}}));let It=Math.hypot(ce.x-ee.x,ce.y-ee.y,ce.z-ee.z);if(ce.closestDistance=Math.min(ce.closestDistance,It),!ce.nearMissShown&&ce.closestDistance<3.1&&ce.closestDistance>ee.radius+.35&&It>ce.lastDistance+.16&&(ce.nearMissShown=!0,Jt(U,"nearMiss",{position:ce,velocity:ce.direction,impulse:.26,roll:at((ce.x-ee.x)/8,-1,1)*.014})),ce.lastDistance=It,(!we||It<we.distance)&&(we={missile:ce,distance:It}),It<ee.radius+.4){Jt(U,"explosion",{position:ce,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),Jt(U,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),Ze("missile strike");return}(ce.life<=0||ce.z>18||Math.abs(ce.x)>22||Math.abs(ce.y)>16)&&($t(ce.view),mt.splice(Pe,1))}let Xe=!!we;we&&(B=we.missile);let He=Xe?100:Math.round($*100);g.hidden=!B,v.style.width=`${He}%`,v.setAttribute("aria-valuenow",String(He)),be(B,Xe)}function Ne(A,$,B){nt.copy(B).sub($);let we=nt.lengthSq();if(!we)return A.distanceTo($);let Xe=at(li.copy(A).sub($).dot(nt)/we,0,1);return li.copy($).addScaledVector(nt,Xe).distanceTo(A)}function Qe(A){for(let $=Xt.length-1;$>=0;$-=1){let B=Xt[$];B.previous.set(B.x,B.y,B.z),B.x+=B.velocity.x*A,B.y+=B.velocity.y*A,B.z+=B.velocity.z*A,B.life-=A,B.view.position.set(B.x,B.y,B.z),B.trailTimer-=A,B.trailTimer<=0&&(B.trailTimer=vt?.06:.035,Jt(U,"projectileTrail",{start:B.previous,end:B.view.position,life:.16,width:.055,color:16770443}));let we=!1;for(let Xe=mt.length-1;Xe>=0;Xe-=1){let He=mt[Xe];if(He.state==="active"&&Ne(new C(He.x,He.y,He.z),B.previous,B.view.position)<.62){Jt(U,"explosion",{position:He,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),$t(He.view),mt.splice(Xe,1),Re("MISSILE DOWN",300),we=!0;break}}if(!we)for(let Xe=Ce.length-1;Xe>=0;Xe-=1){let He=Ce[Xe];if(Ne(new C(He.x,He.y,He.z),B.previous,B.view.position)<1.05*He.spec.scale){He.hp-=1,Jt(U,"explosion",{position:He,count:He.hp<=0?20:6,scale:He.hp<=0?1.05:.32,speed:He.hp<=0?7:4,color:He.hp<=0?16738866:16769130,impulse:He.hp<=0?.55:.08}),He.hp<=0&&et(Xe),we=!0;break}}(we||B.life<=0||B.z<-110)&&($t(B.view),Xt.splice($,1))}}function et(A){let $=Ce[A];$t($.view),Ce.splice(A,1);for(let B=mt.length-1;B>=0;B-=1)mt[B].source===$&&($t(mt[B].view),mt.splice(B,1));Re(`${$.spec.name} DOWN`,$.spec.score),V.playJetDestroyed?.(at($.x/8,-1,1)),Be=Me?.04:.15}function Re(A,$){re+=Math.round($*ie),ie=at(ie+.25,1,5),oe=3.4,p.textContent=String(re),f.textContent=`${ie.toFixed(2)}\xD7`,N(`${A}. ${Math.round($*ie)} points.`)}function tt(){let A=ts();if(!A||P!=="playing"){M?.classList.remove("is-locked"),w&&(w.textContent="Scanning"),L&&(L.hidden=!0),M&&(M.style.left="50%",M.style.top="50%");return}nt.set(A.x,A.y,A.z).project(ae);let $=at((nt.x*.5+.5)*100,10,90),B=at((-nt.y*.5+.5)*100,16,84);M?.classList.add("is-locked"),M&&(M.style.left=`${$}%`,M.style.top=`${B}%`),w&&(w.textContent=`${A.spec.name} locked`),L&&(L.hidden=!1,L.textContent=`${Math.max(1,Math.round((ee.z-A.z)*12))} m`)}function xt(A){let $=xe[q].speed*.5;Kn(he?.update(A,{speed:$}));for(let we of Ae.children)we.position.z+=$*A*.34,we.position.z>18&&(we.position.z-=148);let B=ze.geometry.attributes.position;for(let we=2;we<B.array.length;we+=3)B.array[we]+=$*A*.55,B.array[we]>6&&(B.array[we]-=150);B.needsUpdate=!0}function _t(A){let $=Be;Be=Math.max(0,Be-A);let B=Ph(U,A,{camera:ae,playerPosition:ee,cameraPosition:ae.position});Mh(b,A,ee,{camera:ae,shake:$,lookAhead:vt?29:32}),B&&(ae.position.x+=B.x,ae.position.y+=B.y,ae.position.z+=B.z,ae.rotateZ(B.roll))}function dt(A){if(P!=="playing"){P==="ready"?(ee.y=.65+Math.sin(performance.now()/700)*.18,Zs(b,A,ee,{active:!1,speed:xe[0].speed}),xt(A*.35),_t(A)):P==="crashing"?(Zs(b,A,ee,{active:!1,speed:xe[q].speed}),xt(A*.45),_t(A)):Ph(U,A,{camera:ae,playerPosition:ee,cameraPosition:ae?.position}),tt();return}J+=A,j+=A*(1.5+q*.18),se=Math.max(0,se-A),is(),oe-=A,oe<=0&&ie>1&&(ie=Math.max(1,ie-A*.75),f.textContent=`${ie.toFixed(2)}\xD7`),E(),S?.update(A,{activeAircraft:Ce.length,activeMissiles:mt.length,maxAircraft:xe[q].maxJets,maxMissiles:xe[q].missileCap,difficulty:q*.03}),de(A),_e(A),P==="playing"&&(Te(A),P==="playing"&&(Qe(A),xt(A),_t(A),tt(),u.textContent=String(Math.floor(j)),V.update?.(A,{state:P,level:q,monkey:ee,jets:Ce,missiles:mt})))}function Ze(A){if(P!=="playing")return;P="crashing",h.disabled=!0,G&&(G.disabled=!0),ht.delete("TouchLift"),S?.stop({clearSchedule:!0}),g.hidden=!0,Be=Me?.08:.28,Jt(U,"explosion",{position:ee,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),Jt(U,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),V.playImpact?.(A),V.stopRun?.(A);let $=Math.floor(j);$>ve&&(ve=$,d.textContent=String(ve),localStorage.setItem("monkeyNoFlyBest3D",String(ve))),window.setTimeout(()=>{P="gameover",t.textContent="Flight terminated.",i.textContent=`${A}. You survived ${$} km and scored ${re.toLocaleString()} skill points.`,r.textContent="Fly Again",Qr(!0),N(`Flight terminated by ${A}.`)},Me?120:650)}function lt(){P==="playing"&&(O=P,P="paused",s.hidden=!1,s.inert=!1,s.setAttribute("aria-hidden","false"),h.disabled=!0,G&&(G.disabled=!0),ht.delete("TouchLift"),V.setPaused?.(!0),a.focus())}function Tt(){P==="paused"&&(P=O,s.setAttribute("aria-hidden","true"),s.hidden=!0,s.inert=!0,h.disabled=!1,G&&(G.disabled=!1),V.setPaused?.(!1),ue=performance.now(),n.focus({preventScroll:!0}))}function Oe(){let A=V.isMuted?.()||!1;c.setAttribute("aria-pressed",String(A)),c.setAttribute("aria-label",A?"Unmute sound":"Mute sound"),c.title=A?"Unmute sound":"Mute sound",c.querySelector("span").textContent=A?"\u{1F507}":"\u{1F50A}"}function Ge(A){A.target.closest("button")||A.pointerType!=="touch"&&(Ue={x:A.clientX,y:A.clientY,time:performance.now()},P==="playing"&&cn())}function Qt(A){if(!Ue||P!=="playing"){Ue=null;return}let $=A.clientX-Ue.x,B=A.clientY-Ue.y;Math.abs($)>42&&Math.abs($)>Math.abs(B)*1.2&&er($>0?1:-1),Ue=null}function tr(A){if(P!=="playing"||A.pointerId!==it)return;let $=z.getBoundingClientRect(),B=at((A.clientX-$.left)/Math.max(1,$.width),0,1);ee.lane=at(Math.round(B*(W.length-1)),0,W.length-1)}function ir(A){P==="playing"&&(A.preventDefault(),it=A.pointerId,z.setPointerCapture?.(A.pointerId),tr(A))}function hn(A){A.pointerId===it&&(it=null)}function ci(A){P==="playing"&&(A.preventDefault(),G.setPointerCapture?.(A.pointerId),ht.add("TouchLift"),cn())}function Yi(A){A.preventDefault(),ht.delete("TouchLift")}r.addEventListener("click",es),l.addEventListener("click",lt),a.addEventListener("click",Tt),o.addEventListener("click",()=>{Tt(),es()}),c.addEventListener("click",()=>{V.setMuted?.(!V.isMuted?.()),Oe()}),h.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),oa()}),z?.addEventListener("pointerdown",ir),z?.addEventListener("pointermove",tr),z?.addEventListener("pointerup",hn),z?.addEventListener("pointercancel",hn),G?.addEventListener("pointerdown",ci),G?.addEventListener("pointerup",Yi),G?.addEventListener("pointercancel",Yi),n.addEventListener("pointerdown",Ge),n.addEventListener("pointerup",Qt),n.addEventListener("pointercancel",()=>{Ue=null}),n.addEventListener("webglcontextlost",A=>{A.preventDefault(),P==="playing"&&lt(),N("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",$n),window.addEventListener("blur",()=>{P==="playing"&&lt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&P==="playing"&&lt()}),window.addEventListener("keydown",A=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(A.code)&&A.preventDefault(),!(A.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(A.code))&&(ht.add(A.code),P==="playing"?((A.code==="Space"||A.code==="KeyW"||A.code==="ArrowUp")&&cn(),(A.code==="KeyA"||A.code==="ArrowLeft")&&er(-1),(A.code==="KeyD"||A.code==="ArrowRight")&&er(1),(A.code==="KeyX"||A.code==="KeyF"||A.code==="ShiftLeft")&&oa(),(A.code==="Escape"||A.code==="KeyP")&&lt()):P==="paused"&&(A.code==="Escape"||A.code==="KeyP")&&Tt())}),window.addEventListener("keyup",A=>ht.delete(A.code));function hi(A){let $=Math.min(.1,(A-ue)/1e3);for(ue=A,je=$>.026?je+1:Math.max(0,je-2),je>90&&Ke>.72&&(Ke=Math.max(.72,Ke-.12),je=0,ap(U,Ke<.84?"low":"medium",{reducedMotion:Me}),$n()),Ie+=$;Ie>=k;)dt(k),Ie-=k;me&&te&&ae&&P!=="paused"&&!document.hidden&&me.render(te,ae),requestAnimationFrame(hi)}n.tabIndex=0,r.disabled=!0,r.textContent="Loading 3D Flight",Oe(),$r(),requestAnimationFrame(hi)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
