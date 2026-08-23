(()=>{var Dh=n=>{throw TypeError(n)};var lp=(n,e,t)=>e.has(n)||Dh("Cannot "+t);var Uh=(n,e,t)=>e.has(n)?Dh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var ke=(n,e,t)=>(lp(n,e,"access private method"),t);var mu=0,Kl=1,fu=2;var Gs=1,gu=2,Br=3,zr=0,$t=1,Ht=2,Wi=0,jn=1,Xi=2,$l=3,Ql=4,vu=5;var kr=100,_u=101,xu=102,yu=103,Mu=104,Su=200,bu=201,Tu=202,Eu=203,wu=204,Au=205,Cu=206,Ru=207,Iu=208,Pu=209,Lu=210,Du=211,Uu=212,Nu=213,Fu=214,ec=0,tc=1,ic=2,Do=3,nc=4,rc=5,sc=6,ac=7,Ou=0,Bu=1,zu=2,Ci=0,oc=1,lc=2,cc=3,Vs=4,hc=5,uc=6,dc=7;var pc=300,Gr=301,qn=302,Uo=303,No=304,Hs=306,On=1e3,xn=1001,Wa=1002,gi=1003,ku=1004;var Ws=1005;var Ut=1006,Fo=1007;var Ri=1008;var ui=1009,mc=1010,fc=1011,Vr=1012,Oo=1013,on=1014,yi=1015,ji=1016,Bo=1017,zo=1018,Hr=1020,gc=35902,vc=35899,Gu=1021,Vu=1022,Ii=1023,wn=1026,Yn=1027,ko=1028,Go=1029,Wr=1030,_c=1031;var xc=1033,Vo=33776,Ho=33777,Wo=33778,Xo=33779,yc=35840,Mc=35841,Sc=35842,bc=35843,Tc=36196,Ec=37492,wc=37496,Ac=37488,Cc=37489,Rc=37490,Ic=37491,Pc=37808,Lc=37809,Dc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,kc=37817,Gc=37818,Vc=37819,Hc=37820,Wc=37821,Xc=36492,jc=36494,qc=36495,Yc=36283,Zc=36284,Jc=36285,Kc=36286;var fs=2300,Xa=2301,Va=2302,Bl=2303,zl=2400,kl=2401,Gl=2402;var Hu=0,Wu=1,Zn="",yt="srgb",Bn="srgb-linear",gs="linear",rt="srgb";var Fn=7680;var Xu=512,ju=513,qu=514,jo=515,Yu=516,Zu=517,qo=518,Ju=519,Vl=35044,Xr=35048;var $c="300 es",sn=2e3,Sr=2001;function cp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ku(){let n=br("canvas");return n.style.display="block",n}var Nh={},Tr=null;function Qc(...n){let e="THREE."+n.shift();Tr?Tr("log",e,...n):console.log(e,...n)}function $u(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){let e="THREE."+(n=$u(n)).shift();if(Tr)Tr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){let e="THREE."+(n=$u(n)).shift();if(Tr)Tr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vs(...n){let e=n.join(" ");e in Nh||(Nh[e]=!0,Le(...n))}function Qu(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var ed={[ec]:1,[ic]:6,[nc]:7,[Do]:5,[tc]:0,[sc]:2,[ac]:4,[rc]:3},an=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,yr=Math.PI/180,Er=180/Math.PI;function Jn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Bt[255&n]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[255&e]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[63&t|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[255&i]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Hl(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var eh={DEG2RAD:yr,RAD2DEG:Er,generateUUID:Jn,clamp:Ze,euclideanModulo:Hl,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:ds,damp:function(n,e,t,i){return ds(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Hl(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(Fh=n);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*yr},radToDeg:function(n){return n*Er},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*p,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:qt,denormalize:xr},he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(u!==m||l!==d||c!==p||h!==f){let _=l*d+c*p+h*f+u*m;_<0&&(d=-d,p=-p,f=-f,m=-m,_=-_);let g=1-o;if(_<.9995){let v=Math.acos(_),y=Math.sin(v);g=Math.sin(g*v)/y,l=l*g+d*(o=Math.sin(o*v)/y),c=c*g+p*o,h=h*g+f*o,u=u*g+m*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+f*o,u=u*g+m*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new C,Oh=new Gt,We=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=r[0],_=r[3],g=r[6],v=r[1],y=r[4],b=r[7],S=r[2],A=r[5],D=r[8];return s[0]=a*m+o*v+l*S,s[3]=a*_+o*y+l*A,s[6]=a*g+o*b+l*D,s[1]=c*m+h*v+u*S,s[4]=c*_+h*y+u*A,s[7]=c*g+h*b+u*D,s[2]=d*m+p*v+f*S,s[5]=d*_+p*y+f*A,s[8]=d*g+p*b+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(r*c-h*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ul=new We,Bh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){let n={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===rt&&(r.r=rn(r.r),r.g=rn(r.g),r.b=rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bn]:{primaries:e,whitePoint:i,transfer:gs,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}var it=hp();function rn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Mr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var ar,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=br("canvas")),ar.width=e.width,ar.height=e.height;let r=ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*rn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*rn(t[i]/255)):t[i]=rn(t[i]);return{data:t,width:e.width,height:e.height}}return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},up=0,wr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(dl(r[a].image)):s.push(dl(r[a]))}else s=dl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var dp=0,pl=new C,kt=class n extends an{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Jn(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Le(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=pc,kt.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],_=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+_)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(p+1)/2,S=(g+1)/2,A=(h+d)/4,D=(u+m)/4,F=(f+_)/4;return y>b&&y>S?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=D/i):b>S?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=F/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=D/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-f)*(_-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(_-f)/v,this.y=(u-m)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends an{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_s=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,i){let r=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),un.crossVectors(i,si),un.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),un.crossVectors(i,si)),un.normalize(),ua.crossVectors(si,un),r[0]=un.x,r[4]=ua.x,r[8]=si.x,r[1]=un.y,r[5]=ua.y,r[9]=si.y,r[2]=un.z,r[6]=ua.z,r[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],_=i[10],g=i[14],v=i[3],y=i[7],b=i[11],S=i[15],A=r[0],D=r[4],F=r[8],I=r[12],G=r[1],V=r[5],k=r[9],H=r[13],z=r[2],X=r[6],q=r[10],Z=r[14],me=r[3],we=r[7],Ae=r[11],ge=r[15];return s[0]=a*A+o*G+l*z+c*me,s[4]=a*D+o*V+l*X+c*we,s[8]=a*F+o*k+l*q+c*Ae,s[12]=a*I+o*H+l*Z+c*ge,s[1]=h*A+u*G+d*z+p*me,s[5]=h*D+u*V+d*X+p*we,s[9]=h*F+u*k+d*q+p*Ae,s[13]=h*I+u*H+d*Z+p*ge,s[2]=f*A+m*G+_*z+g*me,s[6]=f*D+m*V+_*X+g*we,s[10]=f*F+m*k+_*q+g*Ae,s[14]=f*I+m*H+_*Z+g*ge,s[3]=v*A+y*G+b*z+S*me,s[7]=v*D+y*V+b*X+S*we,s[11]=v*F+y*k+b*q+S*Ae,s[15]=v*I+y*H+b*Z+S*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],m=e[7],_=e[11],g=e[15],v=l*p-c*d,y=o*p-c*u,b=o*d-l*u,S=a*p-c*h,A=a*d-l*h,D=a*u-o*h;return t*(m*v-_*y+g*b)-i*(f*v-_*S+g*A)+r*(f*y-m*S+g*D)-s*(f*b-m*A+_*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],_=e[14],g=e[15],v=t*o-i*a,y=t*l-r*a,b=t*c-s*a,S=i*l-r*o,A=i*c-s*o,D=r*c-s*l,F=h*m-u*f,I=h*_-d*f,G=h*g-p*f,V=u*_-d*m,k=u*g-p*m,H=d*g-p*_,z=v*H-y*k+b*V+S*G-A*I+D*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/z;return e[0]=(o*H-l*k+c*V)*X,e[1]=(r*k-i*H-s*V)*X,e[2]=(m*D-_*A+g*S)*X,e[3]=(d*A-u*D-p*S)*X,e[4]=(l*G-a*H-c*I)*X,e[5]=(t*H-r*G+s*I)*X,e[6]=(_*b-f*D-g*y)*X,e[7]=(h*D-d*b+p*y)*X,e[8]=(a*k-o*G+c*F)*X,e[9]=(i*G-t*k-s*F)*X,e[10]=(f*A-m*b+g*v)*X,e[11]=(u*b-h*A-p*v)*X,e[12]=(o*I-a*V-l*F)*X,e[13]=(t*V-i*I+r*F)*X,e[14]=(m*y-f*S-_*v)*X,e[15]=(h*S-u*y+d*v)*X,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,_=a*u,g=o*u,v=l*c,y=l*h,b=l*u,S=i.x,A=i.y,D=i.z;return r[0]=(1-(m+g))*S,r[1]=(p+b)*S,r[2]=(f-y)*S,r[3]=0,r[4]=(p-b)*A,r[5]=(1-(d+g))*A,r[6]=(_+v)*A,r[7]=0,r[8]=(f+y)*D,r[9]=(_-v)*D,r[10]=(1-(d+m))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=or.set(r[0],r[1],r[2]).length(),o=or.set(r[4],r[5],r[6]).length(),l=or.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ti.copy(this);let c=1/a,h=1/o,u=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),f,m;if(l)f=s/(a-s),m=a*s/(a-s);else if(o===sn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Sr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),f,m;if(l)f=1/(a-s),m=a/(a-s);else if(o===sn)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==Sr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},or=new C,Ti=new Ve,pp=new C(0,0,0),mp=new C(1,1,1),un=new C,ua=new C,si=new C,kh=new Ve,Gh=new Gt,Ai=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fp=0,Vh=new C,lr=new Gt,Ki=new Ve,da=new C,rs=new C,gp=new C,vp=new Gt,Hh=new C(1,0,0),Wh=new C(0,1,0),Xh=new C(0,0,1),jh={type:"added"},_p={type:"removed"},cr={type:"childadded",child:null},ml={type:"childremoved",child:null},It=class n extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Ai,i=new Gt,r=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new We}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(rs,da,this.up):Ki.lookAt(da,rs,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Ki),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),cr.child=e,this.dispatchEvent(cr),cr.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};It.DEFAULT_UP=new C(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let _=t.getJointPose(m,i),g=this._getHandJoint(c,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},pa={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Hl(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=yt){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return it.workingToColorSpace(zt.copy(this),e),65536*Math.round(Ze(255*zt.r,0,255))+256*Math.round(Ze(255*zt.g,0,255))+Math.round(Ze(255*zt.b,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=yt){it.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(pa);let i=ds(dn.h,pa.h,t),r=ds(dn.s,pa.s,t),s=ds(dn.l,pa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Me;Me.NAMES=td;var ys=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ms=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new C,$i=new C,gl=new C,Qi=new C,hr=new C,ur=new C,qh=new C,vl=new C,_l=new C,xl=new C,yl=new mt,Ml=new mt,Sl=new mt,nn=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ei.subVectors(e,t),r.cross(Ei);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ei.subVectors(r,t),$i.subVectors(i,t),gl.subVectors(e,t);let a=Ei.dot(Ei),o=Ei.dot($i),l=Ei.dot(gl),c=$i.dot($i),h=$i.dot(gl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qi)!==null&&Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(Ml,s.y),a.addScaledVector(Sl,s.z),a}static isFrontFacing(e,t,i,r){return Ei.subVectors(i,t),$i.subVectors(e,t),Ei.cross($i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),.5*Ei.cross($i).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;hr.subVectors(r,i),ur.subVectors(s,i),vl.subVectors(e,i);let l=hr.dot(vl),c=ur.dot(vl);if(l<=0&&c<=0)return t.copy(i);_l.subVectors(e,r);let h=hr.dot(_l),u=ur.dot(_l);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(hr,a);xl.subVectors(e,s);let p=hr.dot(xl),f=ur.dot(xl);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(ur,o);let _=h*f-p*u;if(_<=0&&u-h>=0&&p-f>=0)return qh.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(qh,o);let g=1/(_+m+d);return a=m*g,o=d*g,t.copy(i).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),fa.subVectors(this.max,ss),dr.subVectors(e.a,ss),pr.subVectors(e.b,ss),mr.subVectors(e.c,ss),pn.subVectors(pr,dr),mn.subVectors(mr,pr),Ln.subVectors(dr,mr);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Ln.z,Ln.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Ln.z,0,-Ln.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Ln.y,Ln.x,0];return!!bl(t,dr,pr,mr,fa)&&(t=[1,0,0,0,1,0,0,0,1],!!bl(t,dr,pr,mr,fa)&&(ga.crossVectors(pn,mn),t=[ga.x,ga.y,ga.z],bl(t,dr,pr,mr,fa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(wi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},en=[new C,new C,new C,new C,new C,new C,new C,new C],wi=new C,ma=new vi,dr=new C,pr=new C,mr=new C,pn=new C,mn=new C,Ln=new C,ss=new C,fa=new C,ga=new C,Dn=new C;function bl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Dn.fromArray(n,s);let o=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Sg=yp();function yp(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Rt=new C,va=new he,Mp=0,wt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vl,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}};var Ss=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var bs=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var De=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sp=new vi,as=new C,Tl=new C,_i=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Tl)),this.expandByPoint(as.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bp=0,fi=new Ve,El=new It,fr=new C,ai=new vi,os=new vi,Dt=new C,nt=class n extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?bs:Ss)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ai.min,os.min),ai.expandByPoint(Dt),Dt.addVectors(ai.max,os.max),ai.expandByPoint(Dt)):(ai.expandByPoint(os.min),ai.expandByPoint(os.max))}ai.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),Dt.add(fr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new C,l[F]=new C;let c=new C,h=new C,u=new C,d=new he,p=new he,f=new he,m=new C,_=new C;function g(F,I,G){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,G),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,G),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(V),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[F].add(m),o[I].add(m),o[G].add(m),l[F].add(_),l[I].add(_),l[G].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,I=v.length;F<I;++F){let G=v[F],V=G.start;for(let k=V,H=V+G.count;k<H;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new C,b=new C,S=new C,A=new C;function D(F){S.fromBufferAttribute(r,F),A.copy(S);let I=o[F];y.copy(I),y.sub(S.multiplyScalar(S.dot(I))).normalize(),b.crossVectors(A,I);let G=b.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,G)}for(let F=0,I=v.length;F<I;++F){let G=v[F],V=G.start;for(let k=V,H=V+G.count;k<H;k+=3)D(e.getX(k+0)),D(e.getX(k+1)),D(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,_=l.length;m<_;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new wt(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bg=new C;var Tp=0,zi=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Le(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Tg=new C,Eg=new C,wg=new C,Ag=new he,Cg=new he,Rg=new Ve,Ig=new C,Pg=new C,Lg=new C,Dg=new he,Ug=new he,Ng=new he;var Fg=new C,Og=new C;var tn=new C,wl=new C,_a=new C,fn=new C,Al=new C,xa=new C,Cl=new C,zn=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wl.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(wl);let s=.5*e.distanceTo(t),a=-this.direction.dot(_a),o=fn.dot(this.direction),l=-fn.dot(_a),c=fn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(wl).addScaledVector(_a,d),p}intersectSphere(e,t){tn.subVectors(e.center,this.origin);let i=tn.dot(this.direction),r=tn.dot(tn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,i,r,s){Al.subVectors(t,e),xa.subVectors(i,e),Cl.crossVectors(Al,xa);let a,o=this.direction.dot(Cl);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}fn.subVectors(this.origin,e);let l=a*this.direction.dot(xa.crossVectors(fn,xa));if(l<0)return null;let c=a*this.direction.dot(Al.cross(fn));if(c<0||l+c>o)return null;let h=-a*fn.dot(Cl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yh=new Ve,Un=new zn,ya=new _i,Zh=new C,Ma=new C,Sa=new C,ba=new C,Rl=new C,Ta=new C,Jh=new C,Ea=new C,Xe=class extends It{constructor(e=new nt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Rl.fromBufferAttribute(u,e),a?Ta.addScaledVector(Rl,h):Ta.addScaledVector(Rl.sub(t),h))}t.add(Ta)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Un.copy(e.ray).recast(e.near),ya.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ya,Zh)===null||Un.origin.distanceToSquared(Zh)>(e.far-e.near)**2))return;Yh.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Yh),i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Un)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),y=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));v<y;v+=3)r=wa(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=wa(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let _=d[f],g=a[_.materialIndex];for(let v=Math.max(_.start,p.start),y=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));v<y;v+=3)r=wa(this,g,e,i,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)r=wa(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function wa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ma),n.getVertexPosition(l,Sa),n.getVertexPosition(c,ba);let h=(function(u,d,p,f,m,_,g,v){let y;if(y=d.side===1?f.intersectTriangle(g,_,m,!0,v):f.intersectTriangle(m,_,g,d.side===0,v),y===null)return null;Ea.copy(v),Ea.applyMatrix4(u.matrixWorld);let b=p.ray.origin.distanceTo(Ea);return b<p.near||b>p.far?null:{distance:b,point:Ea.clone(),object:u}})(n,e,t,i,Ma,Sa,ba,Jh);if(h){let u=new C;nn.getBarycoord(Jh,Ma,Sa,ba,u),r&&(h.uv=nn.getInterpolatedAttribute(r,o,l,c,u,new he)),s&&(h.uv1=nn.getInterpolatedAttribute(s,o,l,c,u,new he)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(Ma,Sa,ba,d.normal),h.face=d,h.barycoord=u}return h}var Bg=new C,zg=new mt,kg=new mt,Gg=new C,Vg=new Ve,Hg=new C,Wg=new _i,Xg=new Ve,jg=new zn;var kn=class extends kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qg=new Ve,Yg=new Ve;var Ts=class extends wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Ve,Kh=new Ve,Aa=[],$h=new vi,Ep=new Ve,ls=new Xe,cs=new _i,Gn=class extends Xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ep)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gr),$h.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union($h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gr),cs.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(i),e.ray.intersectsSphere(cs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gr),Kh.multiplyMatrices(i,gr),ls.matrixWorld=Kh,ls.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=s,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kn(new Float32Array(r*this.count),r,this.count,ko,yi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Il=new C,wp=new C,Ap=new We,Oi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Il.subVectors(i,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ap.getNormalMatrix(e),r=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new _i,Cp=new he(.5,.5),Ca=new C,yn=class{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],m=s[9],_=s[10],g=s[11],v=s[12],y=s[13],b=s[14],S=s[15];if(r[0].setComponents(c-a,p-h,g-f,S-v).normalize(),r[1].setComponents(c+a,p+h,g+f,S+v).normalize(),r[2].setComponents(c+o,p+u,g+m,S+y).normalize(),r[3].setComponents(c-o,p-u,g-m,S-y).normalize(),i)r[4].setComponents(l,d,_,b).normalize(),r[5].setComponents(c-l,p-d,g-_,S-b).normalize();else if(r[4].setComponents(c-l,p-d,g-_,S-b).normalize(),t===sn)r[5].setComponents(c+l,p+d,g+_,S+b).normalize();else{if(t!==Sr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,_,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);let t=Cp.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ui=new Ve,Ni=new yn,Za=class n{constructor(){this.coordinateSystem=sn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ni.setFromProjectionMatrix(Ui,r.coordinateSystem,r.reversedDepth),Ni.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ni.setFromProjectionMatrix(Ui,r.coordinateSystem,r.reversedDepth),Ni.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ni.setFromProjectionMatrix(Ui,r.coordinateSystem,r.reversedDepth),Ni.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ni.setFromProjectionMatrix(Ui,r.coordinateSystem,r.reversedDepth),Ni.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(Ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ni.setFromProjectionMatrix(Ui,r.coordinateSystem,r.reversedDepth),Ni.containsPoint(e))return!0}return!1}clone(){return new n}};var Wl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},Zg=new Ve,Jg=new Me(1,1,1),Kg=new yn,$g=new Za,Qg=new vi,e0=new _i,t0=new C,i0=new C,n0=new C,r0=new Wl,s0=new Xe;var Cr=class extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ja=new C,Ka=new C,Qh=new Ve,hs=new zn,Ra=new _i,Pl=new C,eu=new C,Es=class extends It{constructor(e=new nt,t=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ja.fromBufferAttribute(t,r-1),Ka.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ja.distanceTo(Ka);e.setAttribute("lineDistance",new De(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Qh.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Qh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=h.getX(f),g=h.getX(f+1),v=Ia(this,e,hs,l,_,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(d),_=Ia(this,e,hs,l,f,m,p-1);_&&t.push(_)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let _=Ia(this,e,hs,l,f,f+1,f);_&&t.push(_)}if(this.isLineLoop){let f=Ia(this,e,hs,l,p-1,d,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ia(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Ja.fromBufferAttribute(o,r),Ka.fromBufferAttribute(o,s),t.distanceSqToSegment(Ja,Ka,Pl,eu)>i)return;Pl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Pl);return l<e.near||l>e.far?void 0:{distance:l,point:eu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var a0=new C,o0=new C;var Mn=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tu=new Ve,Xl=new zn,Pa=new _i,La=new C,Vn=class extends It{constructor(e=new nt,t=new Mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;tu.copy(r).invert(),Xl.copy(e.ray).applyMatrix4(tu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);La.fromBufferAttribute(h,p),iu(La,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)La.fromBufferAttribute(h,u),iu(La,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function iu(n,e,t,i,r,s,a){let o=Xl.distanceSqToPoint(n);if(o<t){let l=new C;Xl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ws=class extends kt{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ki=class extends kt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class extends kt{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==wn&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$a=class extends Sn{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},As=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class n extends nt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,_,g,v,y,b,S,A,D,F,I){let G=b/D,V=S/F,k=b/2,H=S/2,z=A/2,X=D+1,q=F+1,Z=0,me=0,we=new C;for(let Ae=0;Ae<q;Ae++){let ge=Ae*V-H;for(let ye=0;ye<X;ye++){let ie=ye*G-k;we[m]=ie*v,we[_]=ge*y,we[g]=z,c.push(we.x,we.y,we.z),we[m]=0,we[_]=0,we[g]=A>0?1:-1,h.push(we.x,we.y,we.z),u.push(ye/D),u.push(1-Ae/F),Z+=1}}for(let Ae=0;Ae<F;Ae++)for(let ge=0;ge<D;ge++){let ye=d+ge+X*Ae,ie=d+ge+X*(Ae+1),ae=d+(ge+1)+X*(Ae+1),le=d+(ge+1)+X*Ae;l.push(ye,ie,le),l.push(ie,ae,le),me+=6}o.addGroup(p,me,I),p+=me,d+=Z}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Qa=class n extends nt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*i+s,m=r+1,_=new C,g=new C;for(let v=0;v<=f;v++){let y=0,b=0,S=0,A=0;if(v<=i){let I=v/i,G=I*Math.PI/2;b=-h-e*Math.cos(G),S=e*Math.sin(G),A=-e*Math.cos(G),y=I*u}else if(v<=i+s){let I=(v-i)/s;b=I*t-h,S=e,A=0,y=u+I*d}else{let I=(v-i-s)/i,G=I*Math.PI/2;b=h+e*Math.sin(G),S=e*Math.cos(G),A=e*Math.sin(G),y=u+d+I*u}let D=Math.max(0,Math.min(1,y/p)),F=0;v===0?F=.5/r:v===f&&(F=-.5/r);for(let I=0;I<=r;I++){let G=I/r,V=G*Math.PI*2,k=Math.sin(V),H=Math.cos(V);g.x=-S*H,g.y=b,g.z=S*k,o.push(g.x,g.y,g.z),_.set(-S*H,A,S*k),_.normalize(),l.push(_.x,_.y,_.z),c.push(G+F,D)}if(v>0){let I=(v-1)*m;for(let G=0;G<r;G++){let V=I+G,k=I+G+1,H=v*m+G,z=v*m+G+1;a.push(V,k,H),a.push(k,z,H)}}}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},eo=class n extends nt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new C,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class n extends nt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],_=i/2,g=0;function v(y){let b=f,S=new he,A=new C,D=0,F=y===!0?e:t,I=y===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,_*I,0),d.push(0,I,0),p.push(.5,.5),f++;let G=f;for(let V=0;V<=r;V++){let k=V/r*l+o,H=Math.cos(k),z=Math.sin(k);A.x=F*z,A.y=_*I,A.z=F*H,u.push(A.x,A.y,A.z),d.push(0,I,0),S.x=.5*H+.5,S.y=.5*z*I+.5,p.push(S.x,S.y),f++}for(let V=0;V<r;V++){let k=b+V,H=G+V;y===!0?h.push(H,H+1,k):h.push(H+1,H,k),D+=3}c.addGroup(g,D,y===!0?1:2),g+=D}(function(){let y=new C,b=new C,S=0,A=(t-e)/i;for(let D=0;D<=s;D++){let F=[],I=D/s,G=I*(t-e)+e;for(let V=0;V<=r;V++){let k=V/r,H=k*l+o,z=Math.sin(H),X=Math.cos(H);b.x=G*z,b.y=-I*i+_,b.z=G*X,u.push(b.x,b.y,b.z),y.set(z,A,X).normalize(),d.push(y.x,y.y,y.z),p.push(k,1-I),F.push(f++)}m.push(F)}for(let D=0;D<r;D++)for(let F=0;F<s;F++){let I=m[F][D],G=m[F+1][D],V=m[F+1][D+1],k=m[F][D+1];(e>0||F!==0)&&(h.push(I,G,k),S+=3),(t>0||F!==s-1)&&(h.push(G,V,k),S+=3)}c.addGroup(g,S,0),g+=S})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gi=class n extends Yt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bn=class n extends nt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,f,m,_){let g=_+1,v=[];for(let y=0;y<=g;y++){v[y]=[];let b=p.clone().lerp(m,y/g),S=f.clone().lerp(m,y/g),A=g-y;for(let D=0;D<=A;D++)v[y][D]=D===0&&y===g?b:b.clone().lerp(S,D/A)}for(let y=0;y<g;y++)for(let b=0;b<2*(g-y)-1;b++){let S=Math.floor(b/2);b%2==0?(l(v[y][S+1]),l(v[y+1][S]),l(v[y][S])):(l(v[y][S+1]),l(v[y+1][S+1]),l(v[y+1][S]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let m=3*p;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(p,f,m,_){_<0&&p.x===1&&(a[f]=p.x-1),m.x===0&&m.z===0&&(a[f]=_/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new C,m=new C,_=new C;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],m),c(t[g+2],_),o(f,m,_,p)})(r),(function(p){let f=new C;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(p),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let p=new C;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let m=u(p)/2/Math.PI+.5,_=d(p)/Math.PI+.5;a.push(m,1-_)}(function(){let f=new C,m=new C,_=new C,g=new C,v=new he,y=new he,b=new he;for(let S=0,A=0;S<s.length;S+=9,A+=6){f.set(s[S+0],s[S+1],s[S+2]),m.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),v.set(a[A+0],a[A+1]),y.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),g.copy(f).add(m).add(_).divideScalar(3);let D=u(g);h(v,A+0,f,D),h(y,A+2,m,D),h(b,A+4,_,D)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],_=a[f+2],g=a[f+4],v=Math.max(m,_,g),y=Math.min(m,_,g);v>.9&&y<.1&&(m<.2&&(a[f+0]+=1),_<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},to=class n extends bn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Da=new C,Ua=new C,Ll=new C,Na=new nn,io=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(yr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:_,c:g}=Na;if(m.fromBufferAttribute(o,c[0]),_.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Na.getNormal(Ll),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,b=u[v],S=u[y],A=Na[h[v]],D=Na[h[y]],F=`${b}_${S}`,I=`${S}_${b}`;I in d&&d[I]?(Ll.dot(d[I].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(D.x,D.y,D.z)),d[I]=null):F in d||(d[F]={index0:c[v],index1:c[y],normal:Ll.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:_}=d[f];Da.fromBufferAttribute(o,m),Ua.fromBufferAttribute(o,_),p.push(Da.x,Da.y,Da.z),p.push(Ua.x,Ua.y,Ua.z)}this.setAttribute("position",new De(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],s=[],a=[],o=new C,l=new Ve;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rr=class extends ci{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},no=class extends Rr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function th(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Fa=new C,Dl=new th,Ul=new th,Nl=new th,Ir=class extends ci{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Fa.subVectors(r[0],r[1]).add(r[0]),o=Fa);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Fa.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),_<1e-4&&(_=m),Dl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,_),Ul.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,_),Nl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,_)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Ul.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Nl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Dl.calc(h),Ul.calc(h),Nl.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nu(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function ps(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function ms(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Cs=class extends ci{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ms(e,r.x,s.x,a.x,o.x),ms(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends ci{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ms(e,r.x,s.x,a.x,o.x),ms(e,r.y,s.y,a.y,o.y),ms(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rs=class extends ci{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends ci{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends ci{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ps(e,r.x,s.x,a.x),ps(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends ci{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ps(e,r.x,s.x,a.x),ps(e,r.y,s.y,a.y),ps(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},ao=Object.freeze({__proto__:null,ArcCurve:no,CatmullRomCurve3:Ir,CubicBezierCurve:Cs,CubicBezierCurve3:ro,EllipseCurve:Rr,LineCurve:Rs,LineCurve3:so,QuadraticBezierCurve:Is,QuadraticBezierCurve3:Ps,SplineCurve:Ls}),oo=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ao[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ao[r.type]().fromJSON(r))}return this}},Ds=class extends oo{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Rs(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Is(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Cs(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ls(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Rr(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hn=class extends Ds{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ds().fromJSON(r))}return this}};function Rp(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=ru(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let f=[];for(let m=0,_=u.length;m<_;m++){let g=ru(h,u[m]*p,m<_-1?u[m+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Op(g))}f.sort(Up);for(let m=0;m<f.length;m++)d=Np(f[m],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],f=n[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Us(s,a,t,o,l,c,0),a}function ru(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=su(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=su(a/i|0,n[a],n[a+1],s);return s&&Pr(s,s.next)&&(Fs(s),s=s.next),s}function Wn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Pr(i,i.next)&&Mt(i.prev,i,i.next)!==0)i=i.next;else{if(Fs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Us(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=jl(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,m=1;do{let _,g=p;p=null;let v=null;for(f=0;g;){f++;let y=g,b=0;for(let A=0;A<m&&(b++,y=y.nextZ,y);A++);let S=m;for(;b>0||S>0&&y;)b!==0&&(S===0||!y||g.z<=y.z)?(_=g,g=g.nextZ,b--):(_=y,y=y.nextZ,S--),v?v.nextZ=_:p=_,_.prevZ=v,v=_;g=y}v.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Pp(n,i,r,s):Ip(n))e.push(l.i,n.i,c.i),Fs(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?Us(n=Lp(Wn(n),e),e,t,i,r,s,2):a===2&&Dp(n,e,t,i,r,s):Us(Wn(n),e,t,i,r,s,1);break}}}function Ip(n){let e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&us(r,o,s,l,a,c,f.x,f.y)&&Mt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Pp(n,e,t,i){let r=n.prev,s=n,a=n.next;if(Mt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),m=Math.max(o,l,c),_=Math.max(h,u,d),g=jl(p,f,e,t,i),v=jl(m,_,e,t,i),y=n.prevZ,b=n.nextZ;for(;y&&y.z>=g&&b&&b.z<=v;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=_&&y!==r&&y!==a&&us(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=m&&b.y>=f&&b.y<=_&&b!==r&&b!==a&&us(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=_&&y!==r&&y!==a&&us(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=m&&b.y>=f&&b.y<=_&&b!==r&&b!==a&&us(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Lp(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Pr(i,r)&&nd(i,t,t.next,r)&&Ns(i,r)&&Ns(r,i)&&(e.push(i.i,t.i,r.i),Fs(t),Fs(t.next),t=n=r),t=t.next}while(t!==n);return Wn(t)}function Dp(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bp(a,o)){let l=rd(a,o);return a=Wn(a,a.next),l=Wn(l,l.next),Us(a,e,t,i,r,s,0),void Us(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Up(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Np(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(Pr(r,a))return a;do{if(Pr(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&id(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);Ns(a,r)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&Fp(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=rd(t,n);return Wn(i,i.next),Wn(t,t.next)}function Fp(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function jl(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Op(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function id(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function us(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&id(n,e,t,i,r,s,a,o)}function Bp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&nd(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Ns(n,e)&&Ns(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||Pr(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Pr(n,e){return n.x===e.x&&n.y===e.y}function nd(n,e,t,i){let r=Ba(Mt(n,e,t)),s=Ba(Mt(n,e,i)),a=Ba(Mt(t,i,n)),o=Ba(Mt(t,i,e));return r!==s&&a!==o||!(r!==0||!Oa(n,t,e))||!(s!==0||!Oa(n,i,e))||!(a!==0||!Oa(t,n,i))||!(o!==0||!Oa(t,e,i))}function Oa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ba(n){return n>0?1:n<0?-1:0}function Ns(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function rd(n,e){let t=ql(n.i,n.x,n.y),i=ql(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function su(n,e,t,i){let r=ql(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Fs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Yl=class{static triangulate(e,t,i=2){return Rp(e,t,i)}},Bi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];au(e),ou(i,e);let a=e.length;t.forEach(au);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,ou(i,t[l]);let o=Yl.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function au(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ou(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Lr=class n extends nt{constructor(e=new Hn([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:zp,y,b,S,A,D,F=!1;if(g){y=g.getSpacedPoints(h),F=!0,d=!1;let P=!!g.isCatmullRomCurve3&&g.closed;b=g.computeFrenetFrames(h,P),S=new C,A=new C,D=new C}d||(_=0,p=0,f=0,m=0);let I=o.extractPoints(c),G=I.shape,V=I.holes;if(!Bi.isClockWise(G)){G=G.reverse();for(let P=0,x=V.length;P<x;P++){let R=V[P];Bi.isClockWise(R)&&(V[P]=R.reverse())}}function k(P){let x=10000000000000001e-36,R=P[0];for(let U=1;U<=P.length;U++){let L=U%P.length,J=P[L],Y=J.x-R.x,j=J.y-R.y,re=Y*Y+j*j,te=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(R.x),Math.abs(R.y));re<=x*te*te?(P.splice(L,1),U--):R=J}}k(G),V.forEach(k);let H=V.length,z=G;for(let P=0;P<H;P++){let x=V[P];G=G.concat(x)}function X(P,x,R){return x||Ne("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(x,R)}let q=G.length;function Z(P,x,R){let U,L,J,Y=P.x-x.x,j=P.y-x.y,re=R.x-P.x,te=R.y-P.y,se=Y*Y+j*j,oe=Y*te-j*re;if(Math.abs(oe)>Number.EPSILON){let ue=Math.sqrt(se),Ie=Math.sqrt(re*re+te*te),Ge=x.x-j/ue,Ye=x.y+Y/ue,je=((R.x-te/Ie-Ge)*te-(R.y+re/Ie-Ye)*re)/(Y*te-j*re);U=Ge+Y*je-P.x,L=Ye+j*je-P.y;let xe=U*U+L*L;if(xe<=2)return new he(U,L);J=Math.sqrt(xe/2)}else{let ue=!1;Y>Number.EPSILON?re>Number.EPSILON&&(ue=!0):Y<-Number.EPSILON?re<-Number.EPSILON&&(ue=!0):Math.sign(j)===Math.sign(te)&&(ue=!0),ue?(U=-j,L=Y,J=Math.sqrt(se)):(U=Y,L=j,J=Math.sqrt(se/2))}return new he(U/J,L/J)}let me=[];for(let P=0,x=z.length,R=x-1,U=P+1;P<x;P++,R++,U++)R===x&&(R=0),U===x&&(U=0),me[P]=Z(z[P],z[R],z[U]);let we=[],Ae,ge,ye=me.concat();for(let P=0,x=H;P<x;P++){let R=V[P];Ae=[];for(let U=0,L=R.length,J=L-1,Y=U+1;U<L;U++,J++,Y++)J===L&&(J=0),Y===L&&(Y=0),Ae[U]=Z(R[U],R[J],R[Y]);we.push(Ae),ye=ye.concat(Ae)}if(_===0)ge=Bi.triangulateShape(z,V);else{let P=[],x=[];for(let R=0;R<_;R++){let U=R/_,L=p*Math.cos(U*Math.PI/2),J=f*Math.sin(U*Math.PI/2)+m;for(let Y=0,j=z.length;Y<j;Y++){let re=X(z[Y],me[Y],J);Ce(re.x,re.y,-L),U===0&&P.push(re)}for(let Y=0,j=H;Y<j;Y++){let re=V[Y];Ae=we[Y];let te=[];for(let se=0,oe=re.length;se<oe;se++){let ue=X(re[se],Ae[se],J);Ce(ue.x,ue.y,-L),U===0&&te.push(ue)}U===0&&x.push(te)}}ge=Bi.triangulateShape(P,x)}let ie=ge.length,ae=f+m;for(let P=0;P<q;P++){let x=d?X(G[P],ye[P],ae):G[P];F?(A.copy(b.normals[0]).multiplyScalar(x.x),S.copy(b.binormals[0]).multiplyScalar(x.y),D.copy(y[0]).add(A).add(S),Ce(D.x,D.y,D.z)):Ce(x.x,x.y,0)}for(let P=1;P<=h;P++)for(let x=0;x<q;x++){let R=d?X(G[x],ye[x],ae):G[x];F?(A.copy(b.normals[P]).multiplyScalar(R.x),S.copy(b.binormals[P]).multiplyScalar(R.y),D.copy(y[P]).add(A).add(S),Ce(D.x,D.y,D.z)):Ce(R.x,R.y,u/h*P)}for(let P=_-1;P>=0;P--){let x=P/_,R=p*Math.cos(x*Math.PI/2),U=f*Math.sin(x*Math.PI/2)+m;for(let L=0,J=z.length;L<J;L++){let Y=X(z[L],me[L],U);Ce(Y.x,Y.y,u+R)}for(let L=0,J=V.length;L<J;L++){let Y=V[L];Ae=we[L];for(let j=0,re=Y.length;j<re;j++){let te=X(Y[j],Ae[j],U);F?Ce(te.x,te.y+y[h-1].y,y[h-1].x+R):Ce(te.x,te.y,u+R)}}}function le(P,x){let R=P.length;for(;--R>=0;){let U=R,L=R-1;L<0&&(L=P.length-1);for(let J=0,Y=h+2*_;J<Y;J++){let j=q*J,re=q*(J+1);T(x+U+j,x+L+j,x+L+re,x+U+re)}}}function Ce(P,x,R){l.push(P),l.push(x),l.push(R)}function Oe(P,x,R){M(P),M(x),M(R);let U=r.length/3,L=v.generateTopUV(i,r,U-3,U-2,U-1);O(L[0]),O(L[1]),O(L[2])}function T(P,x,R,U){M(P),M(x),M(U),M(x),M(R),M(U);let L=r.length/3,J=v.generateSideWallUV(i,r,L-6,L-3,L-2,L-1);O(J[0]),O(J[1]),O(J[3]),O(J[1]),O(J[2]),O(J[3])}function M(P){r.push(l[3*P+0]),r.push(l[3*P+1]),r.push(l[3*P+2])}function O(P){s.push(P.x),s.push(P.y)}(function(){let P=r.length/3;if(d){let x=0,R=q*x;for(let U=0;U<ie;U++){let L=ge[U];Oe(L[2]+R,L[1]+R,L[0]+R)}x=h+2*_,R=q*x;for(let U=0;U<ie;U++){let L=ge[U];Oe(L[0]+R,L[1]+R,L[2]+R)}}else{for(let x=0;x<ie;x++){let R=ge[x];Oe(R[2],R[1],R[0])}for(let x=0;x<ie;x++){let R=ge[x];Oe(R[0]+q*h,R[1]+q*h,R[2]+q*h)}}i.addGroup(P,r.length/3-P,0)})(),(function(){let P=r.length/3,x=0;le(z,x),x+=z.length;for(let R=0,U=V.length;R<U;R++){let L=V[R];le(L,x),x+=L.length}i.addGroup(P,r.length/3-P,1)})()}this.setAttribute("position",new De(r,3)),this.setAttribute("uv",new De(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ao[r.type]().fromJSON(r)),new n(i,e.options)}},zp={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*s],_=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-f),new he(m,1-g)]:[new he(o,1-l),new he(h,1-u),new he(p,1-f),new he(_,1-g)]}},Xn=class n extends bn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},lo=class n extends nt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ze(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new he,p=new C,f=new C,m=new C,_=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:_=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-_,p.z=0*g,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){let y=i+v*h*r,b=Math.sin(y),S=Math.cos(y);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*S,a.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),o.push(d.x,d.y);let D=l[3*A+0]*b,F=l[3*A+1],I=l[3*A+0]*S;c.push(D,F,I)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let b=y+v*e.length,S=b,A=b+e.length,D=b+e.length+1,F=b+1;s.push(S,A,F),s.push(D,F,A)}this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},co=class n extends bn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},xi=class n extends nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],_=[];for(let g=0;g<h;g++){let v=g*d-a;for(let y=0;y<c;y++){let b=y*u-s;f.push(b,-v,0),m.push(0,0,1),_.push(y/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let y=v+c*g,b=v+c*(g+1),S=v+1+c*(g+1),A=v+1+c*g;p.push(y,b,A),p.push(b,S,A)}this.setIndex(p),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(m,3)),this.setAttribute("uv",new De(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ho=class n extends nt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new C,f=new he;for(let m=0;m<=r;m++){for(let _=0;_<=i;_++){let g=s+_/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<r;m++){let _=m*(i+1);for(let g=0;g<i;g++){let v=g+_,y=v,b=v+i+1,S=v+i+2,A=v+1;o.push(y,b,A),o.push(b,S,A)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},uo=class n extends nt{constructor(e=new Hn([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Bi.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,g=f.length;_<g;_++){let v=f[_];Bi.isClockWise(v)===!0&&(f[_]=v.reverse())}let m=Bi.triangulateShape(p,f);for(let _=0,g=f.length;_<g;_++){let v=f[_];p=p.concat(v)}for(let _=0,g=p.length;_<g;_++){let v=p[_];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let _=0,g=m.length;_<g;_++){let v=m[_],y=v[0]+u,b=v[1]+u,S=v[2]+u;i.push(y,b,S),l+=3}}this.setIndex(i),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(s,3)),this.setAttribute("uv",new De(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Vi=class n extends nt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],m=[],_=[];for(let g=0;g<=i;g++){let v=[],y=g/i,b=0;g===0&&a===0?b=.5/t:g===i&&l===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){let A=S/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),_.push(A+b,1-y),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let y=h[g][v+1],b=h[g][v],S=h[g+1][v],A=h[g+1][v+1];(g!==0||a>0)&&p.push(y,b,A),(g!==i-1||l<Math.PI)&&p.push(b,S,A)}this.setIndex(p),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(m,3)),this.setAttribute("uv",new De(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},po=class n extends bn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mo=class n extends nt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new C,p=new C,f=new C;for(let m=0;m<=i;m++){let _=a+m/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(_))*Math.cos(v),p.y=(e+t*Math.cos(_))*Math.sin(v),p.z=t*Math.sin(_),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(g/r),u.push(m/i)}}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){let g=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,y=(r+1)*(m-1)+_,b=(r+1)*m+_;l.push(g,v,b),l.push(v,y,b)}this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},fo=class n extends nt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,f=new C,m=new C,_=new C,g=new C;for(let y=0;y<=i;++y){let b=y/i*s*Math.PI*2;v(b,s,a,e,p),v(b+.01,s,a,e,f),_.subVectors(f,p),g.addVectors(f,p),m.crossVectors(_,g),g.crossVectors(m,_),m.normalize(),g.normalize();for(let S=0;S<=r;++S){let A=S/r*Math.PI*2,D=-t*Math.cos(A),F=t*Math.sin(A);u.x=p.x+(D*g.x+F*m.x),u.y=p.y+(D*g.y+F*m.y),u.z=p.z+(D*g.z+F*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/i),h.push(S/r)}}for(let y=1;y<=i;y++)for(let b=1;b<=r;b++){let S=(r+1)*(y-1)+(b-1),A=(r+1)*y+(b-1),D=(r+1)*y+b,F=(r+1)*(y-1)+b;o.push(S,A,F),o.push(A,D,F)}function v(y,b,S,A,D){let F=Math.cos(y),I=Math.sin(y),G=S/b*y,V=Math.cos(G);D.x=A*(2+V)*.5*F,D.y=A*(2+V)*I*.5,D.z=A*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Dr=class n extends nt{constructor(e=new Ps(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new he,h=new C,u=[],d=[],p=[],f=[];function m(_){h=e.getPointAt(_/t,h);let g=a.normals[_],v=a.binormals[_];for(let y=0;y<=r;y++){let b=y/r*Math.PI*2,S=Math.sin(b),A=-Math.cos(b);l.x=A*g.x+S*v.x,l.y=A*g.y+S*v.y,l.z=A*g.z+S*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),(function(){for(let _=0;_<=t;_++)for(let g=0;g<=r;g++)c.x=_/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let _=1;_<=t;_++)for(let g=1;g<=r;g++){let v=(r+1)*(_-1)+(g-1),y=(r+1)*_+(g-1),b=(r+1)*_+g,S=(r+1)*(_-1)+g;f.push(v,y,S),f.push(y,b,S)}})()})(),this.setIndex(f),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ao[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},go=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let _=o.getX(p+m),g=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,g),lu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),lu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function lu(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var l0=Object.freeze({__proto__:null,BoxGeometry:Vt,CapsuleGeometry:Qa,CircleGeometry:eo,ConeGeometry:Gi,CylinderGeometry:Yt,DodecahedronGeometry:to,EdgesGeometry:io,ExtrudeGeometry:Lr,IcosahedronGeometry:Xn,LatheGeometry:lo,OctahedronGeometry:co,PlaneGeometry:xi,PolyhedronGeometry:bn,RingGeometry:ho,ShapeGeometry:uo,SphereGeometry:Vi,TetrahedronGeometry:po,TorusGeometry:mo,TorusKnotGeometry:fo,TubeGeometry:Dr,WireframeGeometry:go});function Kn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=Kn(n[t]);for(let r in i)e[r]=i[r]}return e}function ih(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var sd={clone:Kn,merge:Wt},hi=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},vo=class extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hi=class extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var _o=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function za(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var Tn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yo=class extends Tn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:s=e,o=2*t-i;break;case Gl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*i-t;break;case Gl:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,_=m*f,g=-d*_+2*d*m-d*f,v=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*f+1,y=(-1-p)*_+(1.5+p)*m+.5*f,b=p*_-p*m;for(let S=0;S!==o;++S)s[S]=g*a[h+S]+v*a[c+S]+y*a[l+S]+b*a[u+S];return s}},Mo=class extends Tn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},So=class extends Tn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bo=class extends Tn{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let m=(i-t)/(r-t),_=1-m;for(let g=0;g!==o;++g)s[g]=a[c+g]*_+a[l+g]*m;return s}let p=2*o,f=e-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],v=f*p+2*m,y=d[v],b=d[v+1],S=e*p+2*m,A=u[S],D=u[S+1],F,I,G,V,k,H=(i-t)/(r-t);for(let z=0;z<8;z++){F=H*H,I=F*H,G=1-H,V=G*G,k=V*G;let X=k*t+3*V*H*y+3*G*F*A+I*r-i;if(Math.abs(X)<1e-10)break;let q=3*V*(y-t)+6*G*H*(A-y)+3*F*(r-A);if(Math.abs(q)<1e-10)break;H-=X/q,H=Math.max(0,Math.min(1,H))}s[m]=k*_+3*V*H*b+3*G*F*D+I*g}return s}},oi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case Xa:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case Bl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&cp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Va,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};oi.prototype.ValueTypeName="",oi.prototype.TimeBufferType=Float32Array,oi.prototype.ValueBufferType=Float32Array,oi.prototype.DefaultInterpolation=Xa;var vn=class extends oi{constructor(e,t,i){super(e,t,i)}};vn.prototype.ValueTypeName="bool",vn.prototype.ValueBufferType=Array,vn.prototype.DefaultInterpolation=fs,vn.prototype.InterpolantFactoryMethodLinear=void 0,vn.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}};To.prototype.ValueTypeName="color";var Eo=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}};Eo.prototype.ValueTypeName="number";var wo=class extends Tn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Os=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Os.prototype.ValueTypeName="quaternion",Os.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends oi{constructor(e,t,i){super(e,t,i)}};_n.prototype.ValueTypeName="string",_n.prototype.ValueBufferType=Array,_n.prototype.DefaultInterpolation=fs,_n.prototype.InterpolantFactoryMethodLinear=void 0,_n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}};Ao.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(cu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!cu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function cu(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Co=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ad=new Co,Ur=class{constructor(e){this.manager=e!==void 0?e:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=new WeakMap,Ro=class extends Ur{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ha.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=vr.get(a);u===void 0&&(u=[],vr.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=br("img");function l(){h(),t&&t(this);let u=vr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}vr.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Ha.remove(`image:${e}`);let d=vr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}vr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Bs=class extends Ur{constructor(e){super(e)}load(e,t,i,r){let s=new kt,a=new Ro(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Nr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zs=class extends Nr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fl=new Ve,hu=new C,uu=new C,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yn,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Sr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ka=new C,Ga=new Gt,Fi=new C,Fr=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ga,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ka,Ga,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gn=new C,du=new he,pu=new he,Nt=class extends Fr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Er*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*yr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Er*Math.atan(Math.tan(.5*yr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*yr*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Zl=class extends Io{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},En=class extends Nr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Or=class extends Fr{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jl=class extends Io{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var c0=new Ve,h0=new Ve,u0=new Ve;var _r=-90,Po=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(_r,1,e,t);r.layers=this.layers,this.add(r);let s=new Nt(_r,1,e,t);s.layers=this.layers,this.add(s);let a=new Nt(_r,1,e,t);a.layers=this.layers,this.add(a);let o=new Nt(_r,1,e,t);o.layers=this.layers,this.add(o);let l=new Nt(_r,1,e,t);l.layers=this.layers,this.add(l);let c=new Nt(_r,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Sr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;_=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Lo=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var d0=new C,p0=new Gt,m0=new C,f0=new C,g0=new C;var v0=new C,_0=new Gt,x0=new C,y0=new C;var nh="\\[\\]\\.:\\/",kp=new RegExp("["+nh+"]","g"),Ol="[^"+nh+"]",Gp="[^"+nh.replace("\\.","")+"]",Vp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ol)+/(WCOD+)?/.source.replace("WCOD",Gp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol)+"$"),Hp=["material","materials","bones","map"],pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kp,"")}static parseTrackName(e){let t=Vp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Hp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Le("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void Ne("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=class{constructor(n,e,t){let i=t||pt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray],pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M0=new Float32Array(1);var S0=new Ve;var b0=new he;var T0=new C,E0=new C,w0=new C,A0=new C,C0=new C,R0=new C,I0=new C;var P0=new C;var L0=new C,D0=new Ve,U0=new Ve;var N0=new C,F0=new Me,O0=new Me;var B0=new C,z0=new C,k0=new C;var G0=new C,V0=new Fr;var H0=new vi;var W0=new C;function rh(n,e,t,i){let r=(function(s){switch(s){case ui:case mc:return{byteLength:1,components:1};case Vr:case fc:case ji:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case on:case Oo:case yi:return{byteLength:4,components:1};case gc:case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case ko:case Go:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case Ii:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xp(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var qe={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},fe={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Yi={basic:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Wt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Wt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Wt([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Wt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Wt([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Wt([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Wt([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Wt([fe.lights,fe.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Yi.physical={uniforms:Wt([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Yo={r:0,b:0,g:0},$n=new Ai,jp=new Ve;function qp(n,e,t,i,r,s){let a=new Me(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let g=m.backgroundBlurriness>0;_=e.get(_,g)}return _}function f(m,_){m.getRGB(Yo,ih(n)),t.buffers.color.setClear(Yo.r,Yo.g,Yo.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),c=_,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let _=!1,g=p(m);g===null?f(a,c):g&&g.isColor&&(f(g,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,_){let g=p(_);g&&(g.isCubeTexture||g.mapping===Hs)?(l===void 0&&(l=new Xe(new Vt(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Kn(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),$n.copy(_.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler($n)),l.material.toneMapped=it.getTransfer(g.colorSpace)!==rt,h===g&&u===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new Xe(new xi(2,2),new hi({name:"BackgroundMaterial",uniforms:Kn(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=it.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Yp(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],y=[],b=[];for(let S=0;S<t;S++)v[S]=0,y[S]=0,b[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,y=g.length;v<y;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let y=s.newAttributes,b=s.enabledAttributes,S=s.attributeDivisors;y[g]=1,b[g]===0&&(n.enableVertexAttribArray(g),b[g]=1),S[g]!==v&&(n.vertexAttribDivisor(g,v),S[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let y=0,b=v.length;y<b;y++)v[y]!==g[y]&&(n.disableVertexAttribArray(y),v[y]=0)}function f(g,v,y,b,S,A,D){D===!0?n.vertexAttribIPointer(g,v,y,S,A):n.vertexAttribPointer(g,v,y,b,S,A)}function m(){_(),a=!0,s!==r&&(s=r,o(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,y,b,S){let A=!1,D=(function(F,I,G,V){let k=V.wireframe===!0,H=i[I.id];H===void 0&&(H={},i[I.id]=H);let z=F.isInstancedMesh===!0?F.id:0,X=H[z];X===void 0&&(X={},H[z]=X);let q=X[G.id];q===void 0&&(q={},X[G.id]=q);let Z=q[k];return Z===void 0&&(Z=c(n.createVertexArray()),q[k]=Z),Z})(g,b,y,v);s!==D&&(s=D,o(s.object)),A=(function(F,I,G,V){let k=s.attributes,H=I.attributes,z=0,X=G.getAttributes();for(let q in X)if(X[q].location>=0){let Z=k[q],me=H[q];if(me===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),Z===void 0||Z.attribute!==me||me&&Z.data!==me.data)return!0;z++}return s.attributesNum!==z||s.index!==V})(g,b,y,S),A&&(function(F,I,G,V){let k={},H=I.attributes,z=0,X=G.getAttributes();for(let q in X)if(X[q].location>=0){let Z=H[q];Z===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor));let me={};me.attribute=Z,Z&&Z.data&&(me.data=Z.data),k[q]=me,z++}s.attributes=k,s.attributesNum=z,s.index=V})(g,b,y,S),S!==null&&e.update(S,n.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,(function(F,I,G,V){h();let k=V.attributes,H=G.getAttributes(),z=I.defaultAttributeValues;for(let X in H){let q=H[X];if(q.location>=0){let Z=k[X];if(Z===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let me=Z.normalized,we=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let ge=Ae.buffer,ye=Ae.type,ie=Ae.bytesPerElement,ae=ye===n.INT||ye===n.UNSIGNED_INT||Z.gpuType===Oo;if(Z.isInterleavedBufferAttribute){let le=Z.data,Ce=le.stride,Oe=Z.offset;if(le.isInstancedInterleavedBuffer){for(let T=0;T<q.locationSize;T++)d(q.location+T,le.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let T=0;T<q.locationSize;T++)u(q.location+T);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let T=0;T<q.locationSize;T++)f(q.location+T,we/q.locationSize,ye,me,Ce*ie,(Oe+we/q.locationSize*T)*ie,ae)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)d(q.location+le,Z.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<q.locationSize;le++)u(q.location+le);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let le=0;le<q.locationSize;le++)f(q.location+le,we/q.locationSize,ye,me,we*ie,we/q.locationSize*le*ie,ae)}}else if(z!==void 0){let me=z[X];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(q.location,me);break;case 3:n.vertexAttrib3fv(q.location,me);break;case 4:n.vertexAttrib4fv(q.location,me);break;default:n.vertexAttrib1fv(q.location,me)}}}}p()})(g,v,y,b),S!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:m,resetDefaultState:_,dispose:function(){m();for(let g in i){let v=i[g];for(let y in v){let b=v[y];for(let S in b){let A=b[S];for(let D in A)l(A[D].object),delete A[D];delete b[S]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let y in v){let b=v[y];for(let S in b){let A=b[S];for(let D in A)l(A[D].object),delete A[D];delete b[S]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let y=i[v],b=g.isInstancedMesh===!0?g.id:0,S=y[b];if(S!==void 0){for(let A in S){let D=S[A];for(let F in D)l(D[F].object),delete D[F];delete S[A]}delete y[b],Object.keys(y).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let y=i[v];for(let b in y){let S=y[b];if(S[g.id]===void 0)continue;let A=S[g.id];for(let D in A)l(A[D].object),delete A[D];delete S[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Zp(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Jp(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(Le("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===Ii||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==ui&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==yi&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Kp(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Oi,o=new We,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,p!==!0||m===null){let _=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=d;v!==f;++v,y+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,y=_.clippingState||null;l.value=y,y=c(p,u,v,d);for(let b=0;b!==v;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}var od=[.125,.215,.35,.446,.526,.582],Xs=20,js=new Or,ld=new Me,sh=null,ah=0,oh=0,lh=!1,$p=new C,Jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=$p}=s;sh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,ah,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:ji,format:Ii,colorSpace:Bn,depthBuffer:!1},r=cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+od.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=od[d-a+4-1]:d===0&&(f=0),l.push(f);let m=1/(p-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,S=3,A=2,D=1,F=new Float32Array(S*b*y),I=new Float32Array(A*b*y),G=new Float32Array(D*b*y);for(let k=0;k<y;k++){let H=k%3*2/3-1,z=k>2?0:-1,X=[H,z,0,H+2/3,z,0,H+2/3,z+1,0,H,z,0,H+2/3,z+1,0,H,z+1,0];F.set(X,S*b*k),I.set(v,A*b*k);let q=[k,k,k,k,k,k];G.set(q,D*b*k)}let V=new nt;V.setAttribute("position",new wt(F,S)),V.setAttribute("uv",new wt(I,A)),V.setAttribute("faceIndex",new wt(G,D)),c.push(new Xe(V,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Xs),h=new C(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Xe(new nt,e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,i,r,s){let a=new Nt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(ld),c.toneMapping=Ci,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Vt,new At({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(ld),f=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[_],s.y,s.z)):g===1?(a.up.set(0,0,o[_]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[_],s.z)):(a.up.set(0,o[_],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[_]));let v=this._cubeSize;jr(r,g*v,_>2?v:0,v,v),c.setRenderTarget(r),f&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Gr||e.mapping===qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;jr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,js)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],f=3*p*(i>d-4?i-d+4:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,jr(s,f,m,3*p,2*p),r.setRenderTarget(s),r.render(o,js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,jr(e,f,m,3*p,2*p),r.setRenderTarget(e),r.render(o,js)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):Xs;m>Xs&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let _=[],g=0;for(let b=0;b<Xs;++b){let S=b/f,A=Math.exp(-S*S/2);_.push(A),b===0?g+=A:b<m&&(g+=2*A)}for(let b=0;b<_.length;b++)_[b]=_[b]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let y=this._sizeLods[r];jr(t,3*y*(r>v-4?r-v+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,js)}};function cd(n,e,t){let i=new li(n,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hd(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ud(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}var $o=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ws(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vt(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Wi});s.uniforms.tEquirect.value=t;let a=new Xe(r,s),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Ut),new Po(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function Qp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===Uo?o.mapping=Gr:l===No&&(o.mapping=qn),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Uo||h===No,d=h===Gr||h===qn;if(u||d){let p=t.get(c),f=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new Jo(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let m=c.image;return u&&m&&m.height>0||d&&m&&(function(_){let g=0,v=6;for(let y=0;y<v;y++)_[y]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new Jo(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Uo||h===No){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new $o(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function em(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&vs("WebGLRenderer: "+i+" extension not supported."),r}}}function tm(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let _=0,g=m.length;_<g;_+=3){let v=m[_+0],y=m[_+1],b=m[_+2];c.push(v,y,y,b,b,v)}}else{let m=u.array;d=u.version;for(let _=0,g=m.length/3-1;_<g;_+=3){let v=_+0,y=_+1,b=_+2;c.push(v,y,y,b,b,v)}}let p=new(u.count>=65535?bs:Ss)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function im(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function nm(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:Ne("WebGLInfo: Unknown draw mode:",i)}}}}function rm(n,e,t){let i=new WeakMap,r=new mt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*b*4*h),A=new _s(S,y,b,h);A.type=yi,A.needsUpdate=!0;let D=4*v;for(let I=0;I<h;I++){let G=m[I],V=_[I],k=g[I],H=y*b*4*I;for(let z=0;z<G.count;z++){let X=z*D;d===!0&&(r.fromBufferAttribute(G,z),S[H+X+0]=r.x,S[H+X+1]=r.y,S[H+X+2]=r.z,S[H+X+3]=0),p===!0&&(r.fromBufferAttribute(V,z),S[H+X+4]=r.x,S[H+X+5]=r.y,S[H+X+6]=r.z,S[H+X+7]=0),f===!0&&(r.fromBufferAttribute(k,z),S[H+X+8]=r.x,S[H+X+9]=r.y,S[H+X+10]=r.z,S[H+X+11]=k.itemSize===4?r.w:1)}}u={count:h,texture:A,size:new he(y,b)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function sm(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var am={[oc]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function om(n,e,t,i,r){let s=new li(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new li(e,t,{type:ji,depthBuffer:!1,stencilBuffer:!1}),o=new nt;o.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new De([0,2,0,0,2,0],2));let l=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xe(o,l),h=new Or(-1,1,1,-1,0,1),u,d=null,p=null,f=!1,m=null,_=[],g=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let b=0;b<_.length;b++){let S=_[b];S.setSize&&S.setSize(v,y)}},this.setEffects=function(v){_=v,g=_.length>0&&_[0].isRenderPass===!0;let y=s.width,b=s.height;for(let S=0;S<_.length;S++){let A=_[S];A.setSize&&A.setSize(y,b)}},this.begin=function(v,y){if(f||v.toneMapping===Ci&&_.length===0)return!1;if(m=y,y!==null){let b=y.width,S=y.height;s.width===b&&s.height===S||this.setSize(b,S)}return g===!1&&v.setRenderTarget(s),u=v.toneMapping,v.toneMapping=Ci,!0},this.hasRenderPass=function(){return g},this.end=function(v,y){v.toneMapping=u,f=!0;let b=s,S=a;for(let A=0;A<_.length;A++){let D=_[A];if(D.enabled!==!1&&(D.render(v,S,b,y),D.needsSwap!==!1)){let F=b;b=S,S=F}}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,l.defines={},it.getTransfer(d)===rt&&(l.defines.SRGB_TRANSFER="");let A=am[p];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(c,h),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Id=new kt,uh=new Sn(1,1),Pd=new _s,Ld=new Ya,Dd=new ws,dd=[],pd=[],md=new Float32Array(16),fd=new Float32Array(9),gd=new Float32Array(4);function Yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=dd[r];if(s===void 0&&(s=new Float32Array(r),dd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function el(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function hm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function um(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function dm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;gd.set(i),n.uniformMatrix2fv(this.addr,!1,gd),Lt(t,i)}}function pm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Lt(t,i)}}function mm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),Lt(t,i)}}function fm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function vm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function _m(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function xm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ym(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Mm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Sm(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function bm(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(uh.compareFunction=t.isReversedDepthBuffer()?qo:jo,s=uh):s=Id,t.setTexture2D(e||s,r)}function Tm(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function Em(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function wm(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function Am(n,e){n.uniform1fv(this.addr,e)}function Cm(n,e){let t=Yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rm(n,e){let t=Yr(e,this.size,3);n.uniform3fv(this.addr,t)}function Im(n,e){let t=Yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Pm(n,e){let t=Yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Lm(n,e){let t=Yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dm(n,e){let t=Yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Um(n,e){n.uniform1iv(this.addr,e)}function Nm(n,e){n.uniform2iv(this.addr,e)}function Fm(n,e){n.uniform3iv(this.addr,e)}function Om(n,e){n.uniform4iv(this.addr,e)}function Bm(n,e){n.uniform1uiv(this.addr,e)}function zm(n,e){n.uniform2uiv(this.addr,e)}function km(n,e){n.uniform3uiv(this.addr,e)}function Gm(n,e){n.uniform4uiv(this.addr,e)}function Vm(n,e,t){let i=this.cache,r=e.length,s=el(t,r),a;Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?uh:Id;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Hm(n,e,t){let i=this.cache,r=e.length,s=el(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ld,s[a])}function Wm(n,e,t){let i=this.cache,r=e.length,s=el(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dd,s[a])}function Xm(n,e,t){let i=this.cache,r=e.length,s=el(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pd,s[a])}var dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return fm;case 35667:case 35671:return gm;case 35668:case 35672:return vm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}})(t.type)}},ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Am;case 35664:return Cm;case 35665:return Rm;case 35666:return Im;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}})(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},ch=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function jm(n,e,t){let i=n.name,r=i.length;for(ch.lastIndex=0;;){let s=ch.exec(i),a=ch.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){vd(t,c===void 0?new dh(o,n,e):new ph(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new mh(o),vd(t,h)),t=h}}}var qr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);jm(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function _d(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var qm=0,xd=new We;function yd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function Ym(n,e){let t=(function(i){it._getMatrix(xd,it.workingColorSpace,i);let r=`mat3( ${xd.elements.map(s=>s.toFixed(4))} )`;switch(it.getTransfer(i)){case gs:return[r,"LinearTransferOETF"];case rt:return[r,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Zm={[oc]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[Vs]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function Jm(n,e){let t=Zm[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new C;function Km(){return it.getLuminanceCoefficients(Zo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Zo.x.toFixed(4)}, ${Zo.y.toFixed(4)}, ${Zo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qs(n){return n!==""}function Md(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $m=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(n){return n.replace($m,ef)}var Qm=new Map;function ef(n,e){let t=qe[e];if(t===void 0){let i=Qm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=qe[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return fh(t)}var tf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(n){return n.replace(tf,nf)}function nf(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var rf={[Gs]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"},sf={[Gr]:"ENVMAP_TYPE_CUBE",[qn]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"},af={[qn]:"ENVMAP_MODE_REFRACTION"},of={[Ou]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function lf(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){return rf[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":sf[V.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":af[V.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":of[V.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(V){let k=V.envMapCubeUVHeight;if(k===null)return null;let H=Math.log2(k)-2,z=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:z,maxMip:H}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)})(t),f=(function(V){let k=[];for(let H in V){let z=V[H];z!==!1&&k.push("#define "+H+" "+z)}return k.join(`
`)})(s),m=r.createProgram(),_,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(qs).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(qs).join(`
`),g.length>0&&(g+=`
`)):(_=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),g=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),Km(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=fh(a),a=Md(a,t),a=Sd(a,t),o=fh(o),o=Md(o,t),o=Sd(o,t),a=bd(a),o=bd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+_+a,b=v+g+o,S=_d(r,r.VERTEX_SHADER,y),A=_d(r,r.FRAGMENT_SHADER,b);function D(V){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(m)||"",H=r.getShaderInfoLog(S)||"",z=r.getShaderInfoLog(A)||"",X=k.trim(),q=H.trim(),Z=z.trim(),me=!0,we=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,A);else{let Ae=yd(r,S,"vertex"),ge=yd(r,A,"fragment");Ne("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+Ae+`
`+ge)}else X!==""?Le("WebGLProgram: Program Info Log:",X):q!==""&&Z!==""||(we=!1);we&&(V.diagnostics={runnable:me,programLog:X,vertexShader:{log:q,prefix:_},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(S),r.deleteShader(A),F=new qr(r,m),I=(function(k,H){let z={},X=k.getProgramParameter(H,k.ACTIVE_ATTRIBUTES);for(let q=0;q<X;q++){let Z=k.getActiveAttrib(H,q),me=Z.name,we=1;Z.type===k.FLOAT_MAT2&&(we=2),Z.type===k.FLOAT_MAT3&&(we=3),Z.type===k.FLOAT_MAT4&&(we=4),z[me]={type:Z.type,location:k.getAttribLocation(H,me),locationSize:we}}return z})(r,m)}let F,I;r.attachShader(m,S),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&D(this),F},this.getAttributes=function(){return I===void 0&&D(this),I};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(m,37297)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=A,this}var cf=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vh(e),t.set(e,i)),i}},vh=class{constructor(e){this.id=cf++,this.code=e,this.usedTimes=0}};function hf(n,e,t,i,r,s){let a=new xs,o=new gh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,v,y){let b=v.fog,S=y.geometry,A=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,D=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=e.get(m.envMap||A,D),I=F&&F.mapping===Hs?F.image.height:null,G=p[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Le("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let V=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,k=V!==void 0?V.length:0,H,z,X,q,Z=0;if(S.morphAttributes.position!==void 0&&(Z=1),S.morphAttributes.normal!==void 0&&(Z=2),S.morphAttributes.color!==void 0&&(Z=3),G){let _t=Yi[G];H=_t.vertexShader,z=_t.fragmentShader}else H=m.vertexShader,z=m.fragmentShader,o.update(m),X=o.getVertexShaderID(m),q=o.getFragmentShaderID(m);let me=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ae=y.isInstancedMesh===!0,ge=y.isBatchedMesh===!0,ye=!!m.map,ie=!!m.matcap,ae=!!F,le=!!m.aoMap,Ce=!!m.lightMap,Oe=!!m.bumpMap,T=!!m.normalMap,M=!!m.displacementMap,O=!!m.emissiveMap,P=!!m.metalnessMap,x=!!m.roughnessMap,R=m.anisotropy>0,U=m.clearcoat>0,L=m.dispersion>0,J=m.iridescence>0,Y=m.sheen>0,j=m.transmission>0,re=R&&!!m.anisotropyMap,te=U&&!!m.clearcoatMap,se=U&&!!m.clearcoatNormalMap,oe=U&&!!m.clearcoatRoughnessMap,ue=J&&!!m.iridescenceMap,Ie=J&&!!m.iridescenceThicknessMap,Ge=Y&&!!m.sheenColorMap,Ye=Y&&!!m.sheenRoughnessMap,je=!!m.specularMap,xe=!!m.specularColorMap,Re=!!m.specularIntensityMap,$e=j&&!!m.transmissionMap,gt=j&&!!m.thicknessMap,ve=!!m.gradientMap,Be=!!m.alphaMap,Q=m.alphaTest>0,St=!!m.alphaHash,ct=!!m.extensions,vt=Ci;m.toneMapped&&(me!==null&&me.isXRRenderTarget!==!0||(vt=n.toneMapping));let Qe={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:z,defines:m.defines,customVertexShaderID:X,customFragmentShaderID:q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:ge,batchingColor:ge&&y._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&y.instanceColor!==null,instancingMorph:Ae&&y.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Bn,alphaToCoverage:!!m.alphaToCoverage,map:ye,matcap:ie,envMap:ae,envMapMode:ae&&F.mapping,envMapCubeUVHeight:I,aoMap:le,lightMap:Ce,bumpMap:Oe,normalMap:T,displacementMap:M,emissiveMap:O,normalMapObjectSpace:T&&m.normalMapType===Wu,normalMapTangentSpace:T&&m.normalMapType===Hu,metalnessMap:P,roughnessMap:x,anisotropy:R,anisotropyMap:re,clearcoat:U,clearcoatMap:te,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:L,iridescence:J,iridescenceMap:ue,iridescenceThicknessMap:Ie,sheen:Y,sheenColorMap:Ge,sheenRoughnessMap:Ye,specularMap:je,specularColorMap:xe,specularIntensityMap:Re,transmission:j,transmissionMap:$e,thicknessMap:gt,gradientMap:ve,opaque:m.transparent===!1&&m.blending===jn&&m.alphaToCoverage===!1,alphaMap:Be,alphaTest:Q,alphaHash:St,combine:m.combine,mapUv:ye&&f(m.map.channel),aoMapUv:le&&f(m.aoMap.channel),lightMapUv:Ce&&f(m.lightMap.channel),bumpMapUv:Oe&&f(m.bumpMap.channel),normalMapUv:T&&f(m.normalMap.channel),displacementMapUv:M&&f(m.displacementMap.channel),emissiveMapUv:O&&f(m.emissiveMap.channel),metalnessMapUv:P&&f(m.metalnessMap.channel),roughnessMapUv:x&&f(m.roughnessMap.channel),anisotropyMapUv:re&&f(m.anisotropyMap.channel),clearcoatMapUv:te&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:se&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&f(m.sheenRoughnessMap.channel),specularMapUv:je&&f(m.specularMap.channel),specularColorMapUv:xe&&f(m.specularColorMap.channel),specularIntensityMapUv:Re&&f(m.specularIntensityMap.channel),transmissionMapUv:$e&&f(m.transmissionMap.channel),thicknessMapUv:gt&&f(m.thicknessMap.channel),alphaMapUv:Be&&f(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(T||R),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(ye||Be),fog:!!b,useFog:m.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||S.attributes.normal===void 0&&T===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:y.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:ye&&m.map.isVideoTexture===!0&&it.getTransfer(m.map.colorSpace)===rt,decodeVideoTextureEmissive:O&&m.emissiveMap.isVideoTexture===!0&&it.getTransfer(m.emissiveMap.colorSpace)===rt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ht,flipSided:m.side===$t,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ct&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&m.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(_,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),g.push(a.mask)})(_,m),_.push(n.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=p[m.type],g;if(_){let v=Yi[_];g=sd.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g=h.get(_);return g!==void 0?++g.usedTimes:(g=new lf(n,_,m,r),c.push(g),h.set(_,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=c.indexOf(m);c[_]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function uf(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wd(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||df),i.length>1&&i.sort(l||Ed),r.length>1&&r.sort(l||Ed)}}}function pf(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new wd,n.set(e,[r])):t>=i.length?(r=new wd,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function mf(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Me};break;case"SpotLight":t={position:new C,direction:new C,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new C,halfWidth:new C,halfHeight:new C}}return n[e.id]=t,t}}}var ff=0;function gf(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vf(n){let e=new mf,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let r=new C,s=new Ve,a=new Ve;return{setup:function(o){let l=0,c=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,_=0,g=0,v=0,y=0,b=0,S=0;o.sort(gf);for(let D=0,F=o.length;D<F;D++){let I=o[D],G=I.color,V=I.intensity,k=I.distance,H=null;if(I.shadow&&I.shadow.map&&(H=I.shadow.map.texture.format===Wr?I.shadow.map.texture:I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)l+=G.r*V,c+=G.g*V,h+=G.b*V;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],V);S++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,q=t.get(I);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.directionalShadow[u]=q,i.directionalShadowMap[u]=H,i.directionalShadowMatrix[u]=I.shadow.matrix,_++}i.directional[u]=z,u++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(G).multiplyScalar(V),z.distance=k,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[p]=z;let X=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,X.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[p]=X.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=H,v++}p++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(G).multiplyScalar(V),z.halfWidth.set(.5*I.width,0,0),z.halfHeight.set(0,.5*I.height,0),i.rectArea[f]=z,f++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let X=I.shadow,q=t.get(I);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=H,i.pointShadowMatrix[d]=I.shadow.matrix,g++}i.point[d]=z,d++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(V),z.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[m]=z,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let A=i.hash;A.directionalLength===u&&A.pointLength===d&&A.spotLength===p&&A.rectAreaLength===f&&A.hemiLength===m&&A.numDirectionalShadows===_&&A.numPointShadows===g&&A.numSpotShadows===v&&A.numSpotMaps===y&&A.numLightProbes===S||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=S,A.directionalLength=u,A.pointLength=d,A.spotLength=p,A.rectAreaLength=f,A.hemiLength=m,A.numDirectionalShadows=_,A.numPointShadows=g,A.numSpotShadows=v,A.numSpotMaps=y,A.numLightProbes=S,i.version=ff++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let m=0,_=o.length;m<_;m++){let g=o[m];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function Ad(n){let e=new vf(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function _f(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new Ad(n),e.set(t,[s])):i>=r.length?(s=new Ad(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var xf=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],yf=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Cd=new Ve,Ys=new C,hh=new C;function Mf(n,e,t){let i=new yn,r=new he,s=new he,a=new mt,o=new _o,l=new xo,c={},h=t.maxTextureSize,u={[zr]:$t,[$t]:zr,[Ht]:Ht},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new nt;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Xe(f,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let g=this.type;function v(A,D){let F=e.update(m);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(r.x,r.y,{format:Wr,type:ji})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,F,d,m,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,F,p,m,null)}function y(A,D,F,I){let G=null,V=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)G=V;else if(G=F.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let k=G.uuid,H=D.uuid,z=c[k];z===void 0&&(z={},c[k]=z);let X=z[H];X===void 0&&(X=G.clone(),z[H]=X,D.addEventListener("dispose",S)),G=X}return G.visible=D.visible,G.wireframe=D.wireframe,G.side=I===Br?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:u[D.side],G.alphaMap=D.alphaMap,G.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,G.map=D.map,G.clipShadows=D.clipShadows,G.clippingPlanes=D.clippingPlanes,G.clipIntersection=D.clipIntersection,G.displacementMap=D.displacementMap,G.displacementScale=D.displacementScale,G.displacementBias=D.displacementBias,G.wireframeLinewidth=D.wireframeLinewidth,G.linewidth=D.linewidth,F.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(n.properties.get(G).light=F),G}function b(A,D,F,I,G){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&G===Br)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let k=e.update(A),H=A.material;if(Array.isArray(H)){let z=k.groups;for(let X=0,q=z.length;X<q;X++){let Z=z[X],me=H[Z.materialIndex];if(me&&me.visible){let we=y(A,me,I,G);A.onBeforeShadow(n,A,D,F,k,we,Z),n.renderBufferDirect(F,null,k,we,A,Z),A.onAfterShadow(n,A,D,F,k,we,Z)}}}else if(H.visible){let z=y(A,H,I,G);A.onBeforeShadow(n,A,D,F,k,z,null),n.renderBufferDirect(F,null,k,z,A,null),A.onAfterShadow(n,A,D,F,k,z,null)}}let V=A.children;for(let k=0,H=V.length;k<H;k++)b(V[k],D,F,I,G)}function S(A){A.target.removeEventListener("dispose",S);for(let D in c){let F=c[D],I=A.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}this.render=function(A,D,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===gu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gs);let I=n.getRenderTarget(),G=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Wi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=g!==this.type;H&&D.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=A.length;z<X;z++){let q=A[z],Z=q.shadow;if(Z===void 0){Le("WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let me=Z.getFrameExtents();r.multiply(me),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/me.x),r.x=s.x*me.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/me.y),r.y=s.y*me.y,Z.mapSize.y=s.y));let we=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=we,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Br){if(q.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new li(r.x,r.y,{format:Wr,type:ji,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),Z.map.texture.name=q.name+".shadowMap",Z.map.depthTexture=new Sn(r.x,r.y,yi),Z.map.depthTexture.name=q.name+".shadowMapDepth",Z.map.depthTexture.format=wn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=gi,Z.map.depthTexture.magFilter=gi}else q.isPointLight?(Z.map=new $o(r.x),Z.map.depthTexture=new $a(r.x,on)):(Z.map=new li(r.x,r.y),Z.map.depthTexture=new Sn(r.x,r.y,on)),Z.map.depthTexture.name=q.name+".shadowMap",Z.map.depthTexture.format=wn,this.type===Gs?(Z.map.depthTexture.compareFunction=we?qo:jo,Z.map.depthTexture.minFilter=Ut,Z.map.depthTexture.magFilter=Ut):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=gi,Z.map.depthTexture.magFilter=gi);Z.camera.updateProjectionMatrix()}let Ae=Z.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<Ae;ge++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(Z.map),n.clear());let ye=Z.getViewport(ge);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),k.viewport(a)}if(q.isPointLight){let ye=Z.camera,ie=Z.matrix,ae=q.distance||ye.far;ae!==ye.far&&(ye.far=ae,ye.updateProjectionMatrix()),Ys.setFromMatrixPosition(q.matrixWorld),ye.position.copy(Ys),hh.copy(ye.position),hh.add(xf[ge]),ye.up.copy(yf[ge]),ye.lookAt(hh),ye.updateMatrixWorld(),ie.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Cd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Cd,ye.coordinateSystem,ye.reversedDepth)}else Z.updateMatrices(q);i=Z.getFrustum(),b(D,F,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===Br&&v(Z,F),Z.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(I,G,V)}}function Sf(n,e){let t=new function(){let x=!1,R=new mt,U=null,L=new mt(0,0,0,0);return{setMask:function(J){U===J||x||(n.colorMask(J,J,J,J),U=J)},setLocked:function(J){x=J},setClear:function(J,Y,j,re,te){te===!0&&(J*=re,Y*=re,j*=re),R.set(J,Y,j,re),L.equals(R)===!1&&(n.clearColor(J,Y,j,re),L.copy(R))},reset:function(){x=!1,U=null,L.set(-1,0,0,0)}}},i=new function(){let x=!1,R=!1,U=null,L=null,J=null;return{setReversed:function(Y){if(R!==Y){let j=e.get("EXT_clip_control");Y?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),R=Y;let re=J;J=null,this.setClear(re)}},getReversed:function(){return R},setTest:function(Y){Y?ae(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Y){U===Y||x||(n.depthMask(Y),U=Y)},setFunc:function(Y){if(R&&(Y=ed[Y]),L!==Y){switch(Y){case ec:n.depthFunc(n.NEVER);break;case tc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case Do:n.depthFunc(n.LEQUAL);break;case nc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case sc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}L=Y}},setLocked:function(Y){x=Y},setClear:function(Y){J!==Y&&(J=Y,R&&(Y=1-Y),n.clearDepth(Y))},reset:function(){x=!1,U=null,L=null,J=null,R=!1}}},r=new function(){let x=!1,R=null,U=null,L=null,J=null,Y=null,j=null,re=null,te=null;return{setTest:function(se){x||(se?ae(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(se){R===se||x||(n.stencilMask(se),R=se)},setFunc:function(se,oe,ue){U===se&&L===oe&&J===ue||(n.stencilFunc(se,oe,ue),U=se,L=oe,J=ue)},setOp:function(se,oe,ue){Y===se&&j===oe&&re===ue||(n.stencilOp(se,oe,ue),Y=se,j=oe,re=ue)},setLocked:function(se){x=se},setClear:function(se){te!==se&&(n.clearStencil(se),te=se)},reset:function(){x=!1,R=null,U=null,L=null,J=null,Y=null,j=null,re=null,te=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,_=null,g=null,v=null,y=null,b=new Me(0,0,0),S=0,A=!1,D=null,F=null,I=null,G=null,V=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=z>=2);let q=null,Z={},me=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ae=new mt().fromArray(me),ge=new mt().fromArray(we);function ye(x,R,U,L){let J=new Uint8Array(4),Y=n.createTexture();n.bindTexture(x,Y),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let j=0;j<U;j++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(R,0,n.RGBA,1,1,L,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(R+j,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return Y}let ie={};function ae(x){o[x]!==!0&&(n.enable(x),o[x]=!0)}function le(x){o[x]!==!1&&(n.disable(x),o[x]=!1)}ie[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ae(n.DEPTH_TEST),i.setFunc(Do),M(!1),O(Kl),ae(n.CULL_FACE),T(Wi);let Ce={[kr]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[xu]:n.FUNC_REVERSE_SUBTRACT};Ce[yu]=n.MIN,Ce[Mu]=n.MAX;let Oe={[Su]:n.ZERO,[bu]:n.ONE,[Tu]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[Lu]:n.SRC_ALPHA_SATURATE,[Iu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Eu]:n.ONE_MINUS_SRC_COLOR,[Au]:n.ONE_MINUS_SRC_ALPHA,[Pu]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Du]:n.CONSTANT_COLOR,[Uu]:n.ONE_MINUS_CONSTANT_COLOR,[Nu]:n.CONSTANT_ALPHA,[Fu]:n.ONE_MINUS_CONSTANT_ALPHA};function T(x,R,U,L,J,Y,j,re,te,se){if(x!==Wi){if(d===!1&&(ae(n.BLEND),d=!0),x===vu)J=J||R,Y=Y||U,j=j||L,R===f&&J===g||(n.blendEquationSeparate(Ce[R],Ce[J]),f=R,g=J),U===m&&L===_&&Y===v&&j===y||(n.blendFuncSeparate(Oe[U],Oe[L],Oe[Y],Oe[j]),m=U,_=L,v=Y,y=j),re.equals(b)!==!1&&te===S||(n.blendColor(re.r,re.g,re.b,te),b.copy(re),S=te),p=x,A=!1;else if(x!==p||se!==A){if(f===kr&&g===kr||(n.blendEquation(n.FUNC_ADD),f=kr,g=kr),se)switch(x){case jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xi:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",x)}else switch(x){case jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",x)}m=null,_=null,v=null,y=null,b.set(0,0,0),S=0,p=x,A=se}}else d===!0&&(le(n.BLEND),d=!1)}function M(x){D!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),D=x)}function O(x){x!==mu?(ae(n.CULL_FACE),x!==F&&(x===Kl?n.cullFace(n.BACK):x===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),F=x}function P(x,R,U){x?(ae(n.POLYGON_OFFSET_FILL),G===R&&V===U||(G=R,V=U,i.getReversed()&&(R=-R),n.polygonOffset(R,U))):le(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:ae,disable:le,bindFramebuffer:function(x,R){return l[x]!==R&&(n.bindFramebuffer(x,R),l[x]=R,x===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=R),x===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=R),!0)},drawBuffers:function(x,R){let U=h,L=!1;if(x){U=c.get(R),U===void 0&&(U=[],c.set(R,U));let J=x.textures;if(U.length!==J.length||U[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,j=J.length;Y<j;Y++)U[Y]=n.COLOR_ATTACHMENT0+Y;U.length=J.length,L=!0}}else U[0]!==n.BACK&&(U[0]=n.BACK,L=!0);L&&n.drawBuffers(U)},useProgram:function(x){return u!==x&&(n.useProgram(x),u=x,!0)},setBlending:T,setMaterial:function(x,R){x.side===Ht?le(n.CULL_FACE):ae(n.CULL_FACE);let U=x.side===$t;R&&(U=!U),M(U),x.blending===jn&&x.transparent===!1?T(Wi):T(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let L=x.stencilWrite;r.setTest(L),L&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),P(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:M,setCullFace:O,setLineWidth:function(x){x!==I&&(H&&n.lineWidth(x),I=x)},setPolygonOffset:P,setScissorTest:function(x){x?ae(n.SCISSOR_TEST):le(n.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=n.TEXTURE0+k-1),q!==x&&(n.activeTexture(x),q=x)},bindTexture:function(x,R,U){U===void 0&&(U=q===null?n.TEXTURE0+k-1:q);let L=Z[U];L===void 0&&(L={type:void 0,texture:void 0},Z[U]=L),L.type===x&&L.texture===R||(q!==U&&(n.activeTexture(U),q=U),n.bindTexture(x,R||ie[x]),L.type=x,L.texture=R)},unbindTexture:function(){let x=Z[q];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(x){Ne("WebGLState:",x)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(x){Ne("WebGLState:",x)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(x){Ne("WebGLState:",x)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(x){Ne("WebGLState:",x)}},updateUBOMapping:function(x,R){let U=a.get(R);U===void 0&&(U=new WeakMap,a.set(R,U));let L=U.get(x);L===void 0&&(L=n.getUniformBlockIndex(R,x.name),U.set(x,L))},uniformBlockBinding:function(x,R){let U=a.get(R).get(x);s.get(R)!==U&&(n.uniformBlockBinding(R,U,x.__bindingPointIndex),s.set(R,U))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(x){Ne("WebGLState:",x)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(x){Ne("WebGLState:",x)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(x){Ne("WebGLState:",x)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(x){Ne("WebGLState:",x)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(x){Ne("WebGLState:",x)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(x){Ne("WebGLState:",x)}},scissor:function(x){Ae.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),Ae.copy(x))},viewport:function(x){ge.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),ge.copy(x))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},q=null,Z={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,_=null,g=null,v=null,y=null,b=new Me(0,0,0),S=0,A=!1,D=null,F=null,I=null,G=null,V=null,Ae.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function bf(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,M){return p?new OffscreenCanvas(T,M):br("canvas")}function m(T,M,O){let P=1,x=Oe(T);if((x.width>O||x.height>O)&&(P=O/Math.max(x.width,x.height)),P<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let R=Math.floor(P*x.width),U=Math.floor(P*x.height);u===void 0&&(u=f(R,U));let L=M?f(R,U):u;return L.width=R,L.height=U,L.getContext("2d").drawImage(T,0,0,R,U),Le("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+R+"x"+U+")."),L}return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),T}return T}function _(T){return T.generateMipmaps}function g(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,M,O,P,x=!1){if(T!==null){if(n[T]!==void 0)return n[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let R=M;if(M===n.RED&&(O===n.FLOAT&&(R=n.R32F),O===n.HALF_FLOAT&&(R=n.R16F),O===n.UNSIGNED_BYTE&&(R=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(R=n.R8UI),O===n.UNSIGNED_SHORT&&(R=n.R16UI),O===n.UNSIGNED_INT&&(R=n.R32UI),O===n.BYTE&&(R=n.R8I),O===n.SHORT&&(R=n.R16I),O===n.INT&&(R=n.R32I)),M===n.RG&&(O===n.FLOAT&&(R=n.RG32F),O===n.HALF_FLOAT&&(R=n.RG16F),O===n.UNSIGNED_BYTE&&(R=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(R=n.RG8UI),O===n.UNSIGNED_SHORT&&(R=n.RG16UI),O===n.UNSIGNED_INT&&(R=n.RG32UI),O===n.BYTE&&(R=n.RG8I),O===n.SHORT&&(R=n.RG16I),O===n.INT&&(R=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(R=n.RGB8UI),O===n.UNSIGNED_SHORT&&(R=n.RGB16UI),O===n.UNSIGNED_INT&&(R=n.RGB32UI),O===n.BYTE&&(R=n.RGB8I),O===n.SHORT&&(R=n.RGB16I),O===n.INT&&(R=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(R=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(R=n.RGBA16UI),O===n.UNSIGNED_INT&&(R=n.RGBA32UI),O===n.BYTE&&(R=n.RGBA8I),O===n.SHORT&&(R=n.RGBA16I),O===n.INT&&(R=n.RGBA32I)),M===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(R=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(R=n.R11F_G11F_B10F)),M===n.RGBA){let U=x?gs:it.getTransfer(P);O===n.FLOAT&&(R=n.RGBA32F),O===n.HALF_FLOAT&&(R=n.RGBA16F),O===n.UNSIGNED_BYTE&&(R=U===rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)}return R!==n.R16F&&R!==n.R32F&&R!==n.RG16F&&R!==n.RG32F&&R!==n.RGBA16F&&R!==n.RGBA32F||e.get("EXT_color_buffer_float"),R}function b(T,M){let O;return T?M===null||M===on||M===Hr?O=n.DEPTH24_STENCIL8:M===yi?O=n.DEPTH32F_STENCIL8:M===Vr&&(O=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===on||M===Hr?O=n.DEPTH_COMPONENT24:M===yi?O=n.DEPTH_COMPONENT32F:M===Vr&&(O=n.DEPTH_COMPONENT16),O}function S(T,M){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==gi&&T.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){let M=T.target;M.removeEventListener("dispose",A),(function(O){let P=i.get(O);if(P.__webglInit===void 0)return;let x=O.source,R=d.get(x);if(R){let U=R[P.__cacheKey];U.usedTimes--,U.usedTimes===0&&F(O),Object.keys(R).length===0&&d.delete(x)}i.remove(O)})(M),M.isVideoTexture&&h.delete(M)}function D(T){let M=T.target;M.removeEventListener("dispose",D),(function(O){let P=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(P.__webglFramebuffer[R]))for(let U=0;U<P.__webglFramebuffer[R].length;U++)n.deleteFramebuffer(P.__webglFramebuffer[R][U]);else n.deleteFramebuffer(P.__webglFramebuffer[R]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[R])}else{if(Array.isArray(P.__webglFramebuffer))for(let R=0;R<P.__webglFramebuffer.length;R++)n.deleteFramebuffer(P.__webglFramebuffer[R]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let R=0;R<P.__webglColorRenderbuffer.length;R++)P.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[R]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let x=O.textures;for(let R=0,U=x.length;R<U;R++){let L=i.get(x[R]);L.__webglTexture&&(n.deleteTexture(L.__webglTexture),a.memory.textures--),i.remove(x[R])}i.remove(O)})(M)}function F(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let O=T.source;delete d.get(O)[M.__cacheKey],a.memory.textures--}let I=0;function G(T,M){let O=i.get(T);if(T.isVideoTexture&&(function(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())})(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let P=T.image;if(P===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else{if(P.complete!==!1)return void Z(O,T,M);Le("WebGLRenderer: Texture marked for update but image is incomplete")}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}let V={[On]:n.REPEAT,[xn]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},k={[gi]:n.NEAREST,[ku]:n.NEAREST_MIPMAP_NEAREST,[Ws]:n.NEAREST_MIPMAP_LINEAR,[Ut]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},H={[Xu]:n.NEVER,[Ju]:n.ALWAYS,[ju]:n.LESS,[jo]:n.LEQUAL,[qu]:n.EQUAL,[qo]:n.GEQUAL,[Yu]:n.GREATER,[Zu]:n.NOTEQUAL};function z(T,M){if(M.type!==yi||e.has("OES_texture_float_linear")!==!1||M.magFilter!==Ut&&M.magFilter!==Fo&&M.magFilter!==Ws&&M.magFilter!==Ri&&M.minFilter!==Ut&&M.minFilter!==Fo&&M.minFilter!==Ws&&M.minFilter!==Ri||Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,V[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,V[M.wrapT]),T!==n.TEXTURE_3D&&T!==n.TEXTURE_2D_ARRAY||n.texParameteri(T,n.TEXTURE_WRAP_R,V[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,k[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,k[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gi||M.minFilter!==Ws&&M.minFilter!==Ri||M.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function X(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));let P=M.source,x=d.get(P);x===void 0&&(x={},d.set(P,x));let R=(function(U){let L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()})(M);if(R!==T.__cacheKey){x[R]===void 0&&(x[R]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),x[R].usedTimes++;let U=x[T.__cacheKey];U!==void 0&&(x[T.__cacheKey].usedTimes--,U.usedTimes===0&&F(M)),T.__cacheKey=R,T.__webglTexture=x[R].texture}return O}function q(T,M,O){return Math.floor(Math.floor(T/O)/M)}function Z(T,M,O){let P=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(P=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(P=n.TEXTURE_3D);let x=X(T,M),R=M.source;t.bindTexture(P,T.__webglTexture,n.TEXTURE0+O);let U=i.get(R);if(R.version!==U.__version||x===!0){t.activeTexture(n.TEXTURE0+O);let L=it.getPrimaries(it.workingColorSpace),J=M.colorSpace===Zn?null:it.getPrimaries(M.colorSpace),Y=M.colorSpace===Zn||L===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let j=m(M.image,!1,r.maxTextureSize);j=Ce(M,j);let re=s.convert(M.format,M.colorSpace),te=s.convert(M.type),se,oe=y(M.internalFormat,re,te,M.colorSpace,M.isVideoTexture);z(P,M);let ue=M.mipmaps,Ie=M.isVideoTexture!==!0,Ge=U.__version===void 0||x===!0,Ye=R.dataReady,je=S(M,j);if(M.isDepthTexture)oe=b(M.format===Yn,M.type),Ge&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,oe,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,oe,j.width,j.height,0,re,te,null));else if(M.isDataTexture)if(ue.length>0){Ie&&Ge&&t.texStorage2D(n.TEXTURE_2D,je,oe,ue[0].width,ue[0].height);for(let xe=0,Re=ue.length;xe<Re;xe++)se=ue[xe],Ie?Ye&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,se.width,se.height,re,te,se.data):t.texImage2D(n.TEXTURE_2D,xe,oe,se.width,se.height,0,re,te,se.data);M.generateMipmaps=!1}else Ie?(Ge&&t.texStorage2D(n.TEXTURE_2D,je,oe,j.width,j.height),Ye&&(function(xe,Re,$e,gt){let ve=xe.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re.width,Re.height,$e,gt,Re.data);else{ve.sort((vt,Qe)=>vt.start-Qe.start);let Be=0;for(let vt=1;vt<ve.length;vt++){let Qe=ve[Be],_t=ve[vt],Et=Qe.start+Qe.count,N=q(_t.start,Re.width,4),Jt=q(Qe.start,Re.width,4);_t.start<=Et+1&&N===Jt&&q(_t.start+_t.count-1,Re.width,4)===N?Qe.count=Math.max(Qe.count,_t.start+_t.count-Qe.start):(++Be,ve[Be]=_t)}ve.length=Be+1;let Q=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),ct=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,Re.width);for(let vt=0,Qe=ve.length;vt<Qe;vt++){let _t=ve[vt],Et=Math.floor(_t.start/4),N=Math.ceil(_t.count/4),Jt=Et%Re.width,st=Math.floor(Et/Re.width),at=N;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),n.pixelStorei(n.UNPACK_SKIP_ROWS,st),t.texSubImage2D(n.TEXTURE_2D,0,Jt,st,at,1,$e,gt,Re.data)}xe.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Q),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}})(M,j,re,te)):t.texImage2D(n.TEXTURE_2D,0,oe,j.width,j.height,0,re,te,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,oe,ue[0].width,ue[0].height,j.depth);for(let xe=0,Re=ue.length;xe<Re;xe++)if(se=ue[xe],M.format!==Ii)if(re!==null)if(Ie){if(Ye)if(M.layerUpdates.size>0){let $e=rh(se.width,se.height,M.format,M.type);for(let gt of M.layerUpdates){let ve=se.data.subarray(gt*$e/se.data.BYTES_PER_ELEMENT,(gt+1)*$e/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,gt,se.width,se.height,1,re,ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,se.width,se.height,j.depth,re,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,oe,se.width,se.height,j.depth,0,se.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,se.width,se.height,j.depth,re,te,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,oe,se.width,se.height,j.depth,0,re,te,se.data)}else{Ie&&Ge&&t.texStorage2D(n.TEXTURE_2D,je,oe,ue[0].width,ue[0].height);for(let xe=0,Re=ue.length;xe<Re;xe++)se=ue[xe],M.format!==Ii?re!==null?Ie?Ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,se.width,se.height,re,se.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,oe,se.width,se.height,0,se.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Ye&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,se.width,se.height,re,te,se.data):t.texImage2D(n.TEXTURE_2D,xe,oe,se.width,se.height,0,re,te,se.data)}else if(M.isDataArrayTexture)if(Ie){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,oe,j.width,j.height,j.depth),Ye)if(M.layerUpdates.size>0){let xe=rh(j.width,j.height,M.format,M.type);for(let Re of M.layerUpdates){let $e=j.data.subarray(Re*xe/j.data.BYTES_PER_ELEMENT,(Re+1)*xe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,j.width,j.height,1,re,te,$e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,re,te,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,j.width,j.height,j.depth,0,re,te,j.data);else if(M.isData3DTexture)Ie?(Ge&&t.texStorage3D(n.TEXTURE_3D,je,oe,j.width,j.height,j.depth),Ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,re,te,j.data)):t.texImage3D(n.TEXTURE_3D,0,oe,j.width,j.height,j.depth,0,re,te,j.data);else if(M.isFramebufferTexture){if(Ge)if(Ie)t.texStorage2D(n.TEXTURE_2D,je,oe,j.width,j.height);else{let xe=j.width,Re=j.height;for(let $e=0;$e<je;$e++)t.texImage2D(n.TEXTURE_2D,$e,oe,xe,Re,0,re,te,null),xe>>=1,Re>>=1}}else if(ue.length>0){if(Ie&&Ge){let xe=Oe(ue[0]);t.texStorage2D(n.TEXTURE_2D,je,oe,xe.width,xe.height)}for(let xe=0,Re=ue.length;xe<Re;xe++)se=ue[xe],Ie?Ye&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,re,te,se):t.texImage2D(n.TEXTURE_2D,xe,oe,re,te,se);M.generateMipmaps=!1}else if(Ie){if(Ge){let xe=Oe(j);t.texStorage2D(n.TEXTURE_2D,je,oe,xe.width,xe.height)}Ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,te,j)}else t.texImage2D(n.TEXTURE_2D,0,oe,re,te,j);_(M)&&g(P),U.__version=R.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,O,P,x,R){let U=s.convert(O.format,O.colorSpace),L=s.convert(O.type),J=y(O.internalFormat,U,L,O.colorSpace),Y=i.get(M),j=i.get(O);if(j.__renderTarget=M,!Y.__hasExternalTextures){let re=Math.max(1,M.width>>R),te=Math.max(1,M.height>>R);x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?t.texImage3D(x,R,J,re,te,M.depth,0,U,L,null):t.texImage2D(x,R,J,re,te,0,U,L,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),le(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,P,x,j.__webglTexture,0,ae(M)):(x===n.TEXTURE_2D||x>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,P,x,j.__webglTexture,R),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(T,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let P=M.depthTexture,x=P&&P.isDepthTexture?P.type:null,R=b(M.stencilBuffer,x),U=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;le(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(M),R,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(M),R,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,R,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,T)}else{let P=M.textures;for(let x=0;x<P.length;x++){let R=P[x],U=s.convert(R.format,R.colorSpace),L=s.convert(R.type),J=y(R.internalFormat,U,L,R.colorSpace);le(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(M),J,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(T,M,O){let P=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let x=i.get(M.depthTexture);if(x.__renderTarget=M,x.__webglTexture&&M.depthTexture.image.width===M.width&&M.depthTexture.image.height===M.height||(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P){if(x.__webglInit===void 0&&(x.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),x.__webglTexture===void 0){x.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture),z(n.TEXTURE_CUBE_MAP,M.depthTexture);let Y=s.convert(M.depthTexture.format),j=s.convert(M.depthTexture.type),re;M.depthTexture.format===wn?re=n.DEPTH_COMPONENT24:M.depthTexture.format===Yn&&(re=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,M.width,M.height,0,Y,j,null)}}else G(M.depthTexture,0);let R=x.__webglTexture,U=ae(M),L=P?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,J=M.depthTexture.format===Yn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===wn)le(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,L,R,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,J,L,R,0);else{if(M.depthTexture.format!==Yn)throw new Error("Unknown depthTexture format");le(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,L,R,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,J,L,R,0)}}function ge(T){let M=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let P=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),P){let x=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,P.removeEventListener("dispose",x)};P.addEventListener("dispose",x),M.__depthDisposeCallback=x}M.__boundDepthTexture=P}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let P=0;P<6;P++)Ae(M.__webglFramebuffer[P],T,P);else{let P=T.texture.mipmaps;P&&P.length>0?Ae(M.__webglFramebuffer[0],T,0):Ae(M.__webglFramebuffer,T,0)}else if(O){M.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[P]),M.__webglDepthbuffer[P]===void 0)M.__webglDepthbuffer[P]=n.createRenderbuffer(),we(M.__webglDepthbuffer[P],T,!1);else{let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=M.__webglDepthbuffer[P];n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,R)}}else{let P=T.texture.mipmaps;if(P&&P.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),we(M.__webglDepthbuffer,T,!1);else{let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,R)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let ye=[],ie=[];function ae(T){return Math.min(r.maxSamples,T.samples)}function le(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(T,M){let O=T.colorSpace,P=T.format,x=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Bn&&O!==Zn&&(it.getTransfer(O)===rt?P===Ii&&x===ui||Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",O)),M}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=function(){let T=I;return T>=r.maxTextures&&Le("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T},this.resetTextureUnits=function(){I=0},this.setTexture2D=G,this.setTexture2DArray=function(T,M){let O=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version?Z(O,T,M):(T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M))},this.setTexture3D=function(T,M){let O=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version?Z(O,T,M):t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)},this.setTextureCube=function(T,M){let O=i.get(T);T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version?(function(P,x,R){if(x.image.length!==6)return;let U=X(P,x),L=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+R);let J=i.get(L);if(L.version!==J.__version||U===!0){t.activeTexture(n.TEXTURE0+R);let Y=it.getPrimaries(it.workingColorSpace),j=x.colorSpace===Zn?null:it.getPrimaries(x.colorSpace),re=x.colorSpace===Zn||Y===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let te=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let ve=0;ve<6;ve++)oe[ve]=te||se?se?x.image[ve].image:x.image[ve]:m(x.image[ve],!0,r.maxCubemapSize),oe[ve]=Ce(x,oe[ve]);let ue=oe[0],Ie=s.convert(x.format,x.colorSpace),Ge=s.convert(x.type),Ye=y(x.internalFormat,Ie,Ge,x.colorSpace),je=x.isVideoTexture!==!0,xe=J.__version===void 0||U===!0,Re=L.dataReady,$e,gt=S(x,ue);if(z(n.TEXTURE_CUBE_MAP,x),te){je&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ye,ue.width,ue.height);for(let ve=0;ve<6;ve++){$e=oe[ve].mipmaps;for(let Be=0;Be<$e.length;Be++){let Q=$e[Be];x.format!==Ii?Ie!==null?je?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Q.width,Q.height,Ie,Q.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,Ye,Q.width,Q.height,0,Q.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Q.width,Q.height,Ie,Ge,Q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,Ye,Q.width,Q.height,0,Ie,Ge,Q.data)}}}else{if($e=x.mipmaps,je&&xe){$e.length>0&&gt++;let ve=Oe(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ye,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(se){je?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,oe[ve].width,oe[ve].height,Ie,Ge,oe[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ye,oe[ve].width,oe[ve].height,0,Ie,Ge,oe[ve].data);for(let Be=0;Be<$e.length;Be++){let Q=$e[Be].image[ve].image;je?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,Q.width,Q.height,Ie,Ge,Q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,Ye,Q.width,Q.height,0,Ie,Ge,Q.data)}}else{je?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie,Ge,oe[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ye,Ie,Ge,oe[ve]);for(let Be=0;Be<$e.length;Be++){let Q=$e[Be];je?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,Ie,Ge,Q.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,Ye,Ie,Ge,Q.image[ve])}}}_(x)&&g(n.TEXTURE_CUBE_MAP),J.__version=L.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version})(O,T,M):t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)},this.rebindTextures=function(T,M,O){let P=i.get(T);M!==void 0&&me(P.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ge(T)},this.setupRenderTarget=function(T){let M=T.texture,O=i.get(T),P=i.get(M);T.addEventListener("dispose",D);let x=T.textures,R=T.isWebGLCubeRenderTarget===!0,U=x.length>1;if(U||(P.__webglTexture===void 0&&(P.__webglTexture=n.createTexture()),P.__version=M.version,a.memory.textures++),R){O.__webglFramebuffer=[];for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[L]=[];for(let J=0;J<M.mipmaps.length;J++)O.__webglFramebuffer[L][J]=n.createFramebuffer()}else O.__webglFramebuffer[L]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let L=0;L<M.mipmaps.length;L++)O.__webglFramebuffer[L]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(U)for(let L=0,J=x.length;L<J;L++){let Y=i.get(x[L]);Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&le(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let L=0;L<x.length;L++){let J=x[L];O.__webglColorRenderbuffer[L]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[L]);let Y=s.convert(J.format,J.colorSpace),j=s.convert(J.type),re=y(J.internalFormat,Y,j,J.colorSpace,T.isXRRenderTarget===!0),te=ae(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,re,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,O.__webglColorRenderbuffer[L])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),we(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(R){t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture),z(n.TEXTURE_CUBE_MAP,M);for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)me(O.__webglFramebuffer[L][J],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,J);else me(O.__webglFramebuffer[L],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);_(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let L=0,J=x.length;L<J;L++){let Y=x[L],j=i.get(Y),re=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),z(re,Y),me(O.__webglFramebuffer,T,Y,n.COLOR_ATTACHMENT0+L,re,0),_(Y)&&g(re)}t.unbindTexture()}else{let L=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(L=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(L,P.__webglTexture),z(L,M),M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)me(O.__webglFramebuffer[J],T,M,n.COLOR_ATTACHMENT0,L,J);else me(O.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,L,0);_(M)&&g(L),t.unbindTexture()}T.depthBuffer&&ge(T)},this.updateRenderTargetMipmap=function(T){let M=T.textures;for(let O=0,P=M.length;O<P;O++){let x=M[O];if(_(x)){let R=v(T),U=i.get(x).__webglTexture;t.bindTexture(R,U),g(R),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(le(T)===!1){let M=T.textures,O=T.width,P=T.height,x=n.COLOR_BUFFER_BIT,R=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=i.get(T),L=M.length>1;if(L)for(let Y=0;Y<M.length;Y++)t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let J=T.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let Y=0;Y<M.length;Y++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(x|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(x|=n.STENCIL_BUFFER_BIT)),L){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let j=i.get(M[Y]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,O,P,0,0,O,P,x,n.NEAREST),l===!0&&(ye.length=0,ie.length=0,ye.push(n.COLOR_ATTACHMENT0+Y),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ye.push(R),ie.push(R),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),L)for(let Y=0;Y<M.length;Y++){t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let j=i.get(M[Y]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tf(n,e){return{convert:function(t,i=Zn){let r,s=it.getTransfer(i);if(t===ui)return n.UNSIGNED_BYTE;if(t===Bo)return n.UNSIGNED_SHORT_4_4_4_4;if(t===zo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===gc)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===vc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===mc)return n.BYTE;if(t===fc)return n.SHORT;if(t===Vr)return n.UNSIGNED_SHORT;if(t===Oo)return n.INT;if(t===on)return n.UNSIGNED_INT;if(t===yi)return n.FLOAT;if(t===ji)return n.HALF_FLOAT;if(t===Gu)return n.ALPHA;if(t===Vu)return n.RGB;if(t===Ii)return n.RGBA;if(t===wn)return n.DEPTH_COMPONENT;if(t===Yn)return n.DEPTH_STENCIL;if(t===ko)return n.RED;if(t===Go)return n.RED_INTEGER;if(t===Wr)return n.RG;if(t===_c)return n.RG_INTEGER;if(t===xc)return n.RGBA_INTEGER;if(t===Vo||t===Ho||t===Wo||t===Xo)if(s===rt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===yc||t===Mc||t===Sc||t===bc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Tc||t===Ec||t===wc||t===Ac||t===Cc||t===Rc||t===Ic){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Tc||t===Ec)return s===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===wc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Ac)return r.COMPRESSED_R11_EAC;if(t===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Rc)return r.COMPRESSED_RG11_EAC;if(t===Ic)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Pc||t===Lc||t===Dc||t===Uc||t===Nc||t===Fc||t===Oc||t===Bc||t===zc||t===kc||t===Gc||t===Vc||t===Hc||t===Wc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Pc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Lc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Dc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Uc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Nc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Fc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Oc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Bc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===zc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===kc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Gc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Vc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Hc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Wc)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Xc||t===jc||t===qc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Xc)return s===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Yc||t===Zc||t===Jc||t===Kc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Hr?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var _h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new As(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hi({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends an{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,m=typeof XRWebGLBinding<"u",_=new _h,g={},v=t.getContextAttributes(),y=null,b=null,S=[],A=[],D=new he,F=null,I=new Nt;I.viewport=new mt;let G=new Nt;G.viewport=new mt;let V=[I,G],k=new Lo,H=null,z=null;function X(ie){let ae=A.indexOf(ie.inputSource);if(ae===-1)return;let le=S[ae];le!==void 0&&(le.update(ie.inputSource,ie.frame,c||a),le.dispatchEvent({type:ie.type,data:ie.inputSource}))}function q(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<S.length;ie++){let ae=A[ie];ae!==null&&(A[ie]=null,S[ie].disconnect(ae))}H=null,z=null,_.reset();for(let ie in g)delete g[ie];e.setRenderTarget(y),p=null,d=null,u=null,r=null,b=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(ie){for(let ae=0;ae<ie.removed.length;ae++){let le=ie.removed[ae],Ce=A.indexOf(le);Ce>=0&&(A[Ce]=null,S[Ce].disconnect(le))}for(let ae=0;ae<ie.added.length;ae++){let le=ie.added[ae],Ce=A.indexOf(le);if(Ce===-1){for(let T=0;T<S.length;T++){if(T>=A.length){A.push(le),Ce=T;break}if(A[T]===null){A[T]=le,Ce=T;break}}if(Ce===-1)break}let Oe=S[Ce];Oe&&Oe.connect(le)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ae=S[ie];return ae===void 0&&(ae=new Ar,S[ie]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ie){let ae=S[ie];return ae===void 0&&(ae=new Ar,S[ie]=ae),ae.getGripSpace()},this.getHand=function(ie){let ae=S[ie];return ae===void 0&&(ae=new Ar,S[ie]=ae),ae.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,le=null,Ce=null;v.depth&&(Ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?Yn:wn,le=v.stencil?Hr:on);let Oe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new li(d.textureWidth,d.textureHeight,{format:Ii,type:ui,depthTexture:new Sn(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new li(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let me=new C,we=new C;function Ae(ie,ae){ae===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ae.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ae=ie.near,le=ie.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(le=_.depthFar)),k.near=G.near=I.near=ae,k.far=G.far=I.far=le,H===k.near&&z===k.far||(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,z=k.far),k.layers.mask=6|ie.layers.mask,I.layers.mask=-5&k.layers.mask,G.layers.mask=-3&k.layers.mask;let Ce=ie.parent,Oe=k.cameras;Ae(k,Ce);for(let T=0;T<Oe.length;T++)Ae(Oe[T],Ce);Oe.length===2?(function(T,M,O){me.setFromMatrixPosition(M.matrixWorld),we.setFromMatrixPosition(O.matrixWorld);let P=me.distanceTo(we),x=M.projectionMatrix.elements,R=O.projectionMatrix.elements,U=x[14]/(x[10]-1),L=x[14]/(x[10]+1),J=(x[9]+1)/x[5],Y=(x[9]-1)/x[5],j=(x[8]-1)/x[0],re=(R[8]+1)/R[0],te=U*j,se=U*re,oe=P/(-j+re),ue=oe*-j;if(M.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ue),T.translateZ(oe),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),x[10]===-1)T.projectionMatrix.copy(M.projectionMatrix),T.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let Ie=U+oe,Ge=L+oe,Ye=te-ue,je=se+(P-ue),xe=J*L/Ge*Ie,Re=Y*L/Ge*Ie;T.projectionMatrix.makePerspective(Ye,je,xe,Re,Ie,Ge),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}})(k,I,G):k.projectionMatrix.copy(I.projectionMatrix),(function(T,M,O){O===null?T.matrix.copy(M.matrixWorld):(T.matrix.copy(O.matrixWorld),T.matrix.invert(),T.matrix.multiply(M.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(M.projectionMatrix),T.projectionMatrixInverse.copy(M.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*Er*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(ie,k,Ce)},this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(ie){return g[ie]};let ge=null,ye=new Rd;ye.setAnimationLoop(function(ie,ae){if(h=ae.getViewerPose(c||a),f=ae,h!==null){let le=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ce=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Ce=!0);for(let T=0;T<le.length;T++){let M=le[T],O=null;if(p!==null)O=p.getViewport(M);else{let x=u.getViewSubImage(d,M);O=x.viewport,T===0&&(e.setRenderTargetTextures(b,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(b))}let P=V[T];P===void 0&&(P=new Nt,P.layers.enable(T),P.viewport=new mt,V[T]=P),P.matrix.fromArray(M.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(M.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(O.x,O.y,O.width,O.height),T===0&&(k.matrix.copy(P.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ce===!0&&k.cameras.push(P)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let T=u.getDepthInformation(le[0]);T&&T.isValid&&T.texture&&_.init(T,r.renderState)}if(Oe&&Oe.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let T=0;T<le.length;T++){let M=le[T].camera;if(M){let O=g[M];O||(O=new As,g[M]=O);let P=u.getCameraImage(M);O.sourceTexture=P}}}}for(let le=0;le<S.length;le++){let Ce=A[le],Oe=S[le];Ce!==null&&Oe!==void 0&&Oe.update(Ce,ae,c||a)}ge&&ge(ie,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),f=null}),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}},Qn=new Ai,Ef=new Ve;function wf(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===$t&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===$t&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Qn.copy(l),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),r.envMapRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(Qn)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ih(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$t&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Af(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let m=u.value,_=d+"_"+p;if(f[_]===void 0)return f[_]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let g=f[_];if(typeof m=="number"||typeof m=="boolean"){if(g!==m)return f[_]=m,!0}else if(g.equals(m)===!1)return g.copy(m),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(_){let g=_.uniforms,v=0,y=16;for(let S=0,A=g.length;S<A;S++){let D=Array.isArray(g[S])?g[S]:[g[S]];for(let F=0,I=D.length;F<I;F++){let G=D[F],V=Array.isArray(G.value)?G.value:[G.value];for(let k=0,H=V.length;k<H;k++){let z=c(V[k]),X=v%y,q=X%z.boundary,Z=X+q;v+=q,Z!==0&&y-Z<z.storage&&(v+=y-Z),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=z.storage}}}let b=v%y;b>0&&(v+=y-b),_.__size=v,_.__cache={}})(u),p=(function(_){let g=(function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();_.__bindingPointIndex=g;let v=n.createBuffer(),y=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,y,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&((function(_){let g=r[_.id],v=_.uniforms,y=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let b=0,S=v.length;b<S;b++){let A=Array.isArray(v[b])?v[b]:[v[b]];for(let D=0,F=A.length;D<F;D++){let I=A[D];if(l(I,b,D,y)===!0){let G=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],k=0;for(let H=0;H<V.length;H++){let z=V[H],X=c(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,G+k,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=m)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var Cf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null,Qo=class{constructor(e={}){let{canvas:t=Ku(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=ui}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=p,_=new Set([xc,_c,Go]),g=new Set([ui,on,Vr,Hr,Bo,zo]),v=new Uint32Array(4),y=new Int32Array(4),b=null,S=null,A=[],D=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,G=!1;this._outputColorSpace=yt;let V=0,k=0,H=null,z=-1,X=null,q=new mt,Z=new mt,me=null,we=new Me(0),Ae=0,ge=t.width,ye=t.height,ie=1,ae=null,le=null,Ce=new mt(0,0,ge,ye),Oe=new mt(0,0,ge,ye),T=!1,M=new yn,O=!1,P=!1,x=new Ve,R=new C,U=new mt,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function Y(){return H===null?ie:1}let j,re,te,se,oe,ue,Ie,Ge,Ye,je,xe,Re,$e,gt,ve,Be,Q,St,ct,vt,Qe,_t,Et,N=i;function Jt(E,W){return t.getContext(E,W)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Si,!1),t.addEventListener("webglcontextcreationerror",Qt,!1),N===null){let W="webgl2";if(N=Jt(W,E),N===null)throw Jt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ne("WebGLRenderer: "+E.message),E}function st(){j=new em(N),j.init(),Qe=new Tf(N,j),re=new Jp(N,j,e,Qe),te=new Sf(N,j),re.reversedDepthBuffer&&d&&te.buffers.depth.setReversed(!0),se=new nm(N),oe=new uf,ue=new bf(N,j,te,oe,re,Qe,se),Ie=new Qp(I),Ge=new Xp(N),_t=new Yp(N,Ge),Ye=new tm(N,Ge,se,_t),je=new sm(N,Ye,Ge,_t,se),St=new rm(N,re,ue),ve=new Kp(oe),xe=new hf(I,Ie,j,re,_t,ve),Re=new wf(I,oe),$e=new pf,gt=new _f(j),Q=new qp(I,Ie,te,je,f,l),Be=new Mf(I,je,re),Et=new Af(N,se,re,te),ct=new Zp(N,j,se),vt=new im(N,j,se),se.programs=xe.programs,I.capabilities=re,I.extensions=j,I.properties=oe,I.renderLists=$e,I.shadowMap=Be,I.state=te,I.info=se}st(),m!==ui&&(F=new om(m,t.width,t.height,r,s));let at=new xh(I,N);function Ct(E){E.preventDefault(),Qc("WebGLRenderer: Context Lost."),G=!0}function Si(){Qc("WebGLRenderer: Context Restored."),G=!1;let E=se.autoReset,W=Be.enabled,K=Be.autoUpdate,ne=Be.needsUpdate,$=Be.type;st(),se.autoReset=E,Be.enabled=W,Be.autoUpdate=K,Be.needsUpdate=ne,Be.type=$}function Qt(E){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ra(E){let W=E.target;W.removeEventListener("dispose",ra),(function(K){(function(ne){let $=oe.get(ne).programs;$!==void 0&&($.forEach(function(de){xe.releaseProgram(de)}),ne.isShaderMaterial&&xe.releaseShaderCache(ne))})(K),oe.remove(K)})(W)}function sa(E,W,K){E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,Rn(E,W,K),E.side=zr,E.needsUpdate=!0,Rn(E,W,K),E.side=Ht):Rn(E,W,K)}this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(ge,ye,!1))},this.getSize=function(E){return E.set(ge,ye)},this.setSize=function(E,W,K=!0){at.isPresenting?Le("WebGLRenderer: Can't change size while VR device is presenting."):(ge=E,ye=W,t.width=Math.floor(E*ie),t.height=Math.floor(W*ie),K===!0&&(t.style.width=E+"px",t.style.height=W+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,E,W))},this.getDrawingBufferSize=function(E){return E.set(ge*ie,ye*ie).floor()},this.setDrawingBufferSize=function(E,W,K){ge=E,ye=W,ie=K,t.width=Math.floor(E*K),t.height=Math.floor(W*K),this.setViewport(0,0,E,W)},this.setEffects=function(E){if(m!==ui){if(E){for(let W=0;W<E.length;W++)if(E[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(E||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(Ce)},this.setViewport=function(E,W,K,ne){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,W,K,ne),te.viewport(q.copy(Ce).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,W,K,ne){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,W,K,ne),te.scissor(Z.copy(Oe).multiplyScalar(ie).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(E){te.setScissorTest(T=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,K=!0){let ne=0;if(E){let $=!1;if(H!==null){let de=H.texture.format;$=_.has(de)}if($){let de=H.texture.type,_e=g.has(de),Se=Q.getClearColor(),Te=Q.getClearAlpha(),Fe=Se.r,Je=Se.g,et=Se.b;_e?(v[0]=Fe,v[1]=Je,v[2]=et,v[3]=Te,N.clearBufferuiv(N.COLOR,0,v)):(y[0]=Fe,y[1]=Je,y[2]=et,y[3]=Te,N.clearBufferiv(N.COLOR,0,y))}else ne|=N.COLOR_BUFFER_BIT}W&&(ne|=N.DEPTH_BUFFER_BIT),K&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Si,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),Q.dispose(),$e.dispose(),gt.dispose(),oe.dispose(),Ie.dispose(),je.dispose(),_t.dispose(),Et.dispose(),xe.dispose(),at.dispose(),at.removeEventListener("sessionstart",aa),at.removeEventListener("sessionend",er),Ji.stop()},this.renderBufferDirect=function(E,W,K,ne,$,de){W===null&&(W=L);let _e=$.isMesh&&$.matrixWorld.determinant()<0,Se=(function(Ke,ht,xt,Ue,ze){ht.isScene!==!0&&(ht=L),ue.resetTextureUnits();let ei=ht.fog,ns=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial?ht.environment:null,In=H===null?I.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Bn,Pn=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial&&!Ue.envMap||Ue.isMeshPhongMaterial&&!Ue.envMap,ti=Ie.get(Ue.envMap||ns,Pn),hn=Ue.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pi=!!xt.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),sr=!!xt.morphAttributes.position,w=!!xt.morphAttributes.normal,ee=!!xt.morphAttributes.color,B=Ci;Ue.toneMapped&&(H!==null&&H.isXRRenderTarget!==!0||(B=I.toneMapping));let be=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,He=be!==void 0?be.length:0,pe=oe.get(Ue),dt=S.state.lights;if(O===!0&&(P===!0||Ke!==X)){let Ot=Ke===X&&Ue.id===z;ve.setState(Ue,Ke,Ot)}let ce=!1;Ue.version===pe.__version?pe.needsLights&&pe.lightsStateVersion!==dt.state.version||pe.outputColorSpace!==In||ze.isBatchedMesh&&pe.batching===!1?ce=!0:ze.isBatchedMesh||pe.batching!==!0?ze.isBatchedMesh&&pe.batchingColor===!0&&ze.colorTexture===null||ze.isBatchedMesh&&pe.batchingColor===!1&&ze.colorTexture!==null||ze.isInstancedMesh&&pe.instancing===!1?ce=!0:ze.isInstancedMesh||pe.instancing!==!0?ze.isSkinnedMesh&&pe.skinning===!1?ce=!0:ze.isSkinnedMesh||pe.skinning!==!0?ze.isInstancedMesh&&pe.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&pe.instancingColor===!1&&ze.instanceColor!==null||ze.isInstancedMesh&&pe.instancingMorph===!0&&ze.morphTexture===null||ze.isInstancedMesh&&pe.instancingMorph===!1&&ze.morphTexture!==null||pe.envMap!==ti||Ue.fog===!0&&pe.fog!==ei?ce=!0:pe.numClippingPlanes===void 0||pe.numClippingPlanes===ve.numPlanes&&pe.numIntersection===ve.numIntersection?(pe.vertexAlphas!==hn||pe.vertexTangents!==pi||pe.morphTargets!==sr||pe.morphNormals!==w||pe.morphColors!==ee||pe.toneMapping!==B||pe.morphTargetsCount!==He)&&(ce=!0):ce=!0:ce=!0:ce=!0:ce=!0:(ce=!0,pe.__version=Ue.version);let ii=pe.currentProgram;ce===!0&&(ii=Rn(Ue,ht,ze));let ni=!1,mi=!1,Kt=!1,ut=ii.getUniforms(),bi=pe.uniforms;if(te.useProgram(ii.program)&&(ni=!0,mi=!0,Kt=!0),Ue.id!==z&&(z=Ue.id,mi=!0),ni||X!==Ke){te.buffers.depth.getReversed()&&Ke.reversedDepth!==!0&&(Ke._reversedDepth=!0,Ke.updateProjectionMatrix()),ut.setValue(N,"projectionMatrix",Ke.projectionMatrix),ut.setValue(N,"viewMatrix",Ke.matrixWorldInverse);let Ot=ut.map.cameraPosition;Ot!==void 0&&Ot.setValue(N,R.setFromMatrixPosition(Ke.matrixWorld)),re.logarithmicDepthBuffer&&ut.setValue(N,"logDepthBufFC",2/(Math.log(Ke.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&ut.setValue(N,"isOrthographic",Ke.isOrthographicCamera===!0),X!==Ke&&(X=Ke,mi=!0,Kt=!0)}if(pe.needsLights&&(dt.state.directionalShadowMap.length>0&&ut.setValue(N,"directionalShadowMap",dt.state.directionalShadowMap,ue),dt.state.spotShadowMap.length>0&&ut.setValue(N,"spotShadowMap",dt.state.spotShadowMap,ue),dt.state.pointShadowMap.length>0&&ut.setValue(N,"pointShadowMap",dt.state.pointShadowMap,ue)),ze.isSkinnedMesh){ut.setOptional(N,ze,"bindMatrix"),ut.setOptional(N,ze,"bindMatrixInverse");let Ot=ze.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ut.setValue(N,"boneTexture",Ot.boneTexture,ue))}ze.isBatchedMesh&&(ut.setOptional(N,ze,"batchingTexture"),ut.setValue(N,"batchingTexture",ze._matricesTexture,ue),ut.setOptional(N,ze,"batchingIdTexture"),ut.setValue(N,"batchingIdTexture",ze._indirectTexture,ue),ut.setOptional(N,ze,"batchingColorTexture"),ze._colorsTexture!==null&&ut.setValue(N,"batchingColorTexture",ze._colorsTexture,ue));let Di=xt.morphAttributes;Di.position===void 0&&Di.normal===void 0&&Di.color===void 0||St.update(ze,xt,ii),(mi||pe.receiveShadow!==ze.receiveShadow)&&(pe.receiveShadow=ze.receiveShadow,ut.setValue(N,"receiveShadow",ze.receiveShadow)),(Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial)&&Ue.envMap===null&&ht.environment!==null&&(bi.envMapIntensity.value=ht.environmentIntensity),bi.dfgLUT!==void 0&&(bi.dfgLUT.value=(qi===null&&(qi=new kn(Cf,16,16,Wr,ji),qi.name="DFG_LUT",qi.minFilter=Ut,qi.magFilter=Ut,qi.wrapS=xn,qi.wrapT=xn,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi)),mi&&(ut.setValue(N,"toneMappingExposure",I.toneMappingExposure),pe.needsLights&&(ri=Kt,(jt=bi).ambientLightColor.needsUpdate=ri,jt.lightProbe.needsUpdate=ri,jt.directionalLights.needsUpdate=ri,jt.directionalLightShadows.needsUpdate=ri,jt.pointLights.needsUpdate=ri,jt.pointLightShadows.needsUpdate=ri,jt.spotLights.needsUpdate=ri,jt.spotLightShadows.needsUpdate=ri,jt.rectAreaLights.needsUpdate=ri,jt.hemisphereLights.needsUpdate=ri),ei&&Ue.fog===!0&&Re.refreshFogUniforms(bi,ei),Re.refreshMaterialUniforms(bi,Ue,ie,ye,S.state.transmissionRenderTarget[Ke.id]),qr.upload(N,nr(pe),bi,ue));var jt,ri;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(qr.upload(N,nr(pe),bi,ue),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&ut.setValue(N,"center",ze.center),ut.setValue(N,"modelViewMatrix",ze.modelViewMatrix),ut.setValue(N,"normalMatrix",ze.normalMatrix),ut.setValue(N,"modelMatrix",ze.matrixWorld),Ue.isShaderMaterial||Ue.isRawShaderMaterial){let Ot=Ue.uniformsGroups;for(let cl=0,op=Ot.length;cl<op;cl++){let Lh=Ot[cl];Et.update(Lh,ii),Et.bind(Lh,ii)}}return ii})(E,W,K,ne,$);te.setMaterial(ne,_e);let Te=K.index,Fe=1;if(ne.wireframe===!0){if(Te=Ye.getWireframeAttribute(K),Te===void 0)return;Fe=2}let Je=K.drawRange,et=K.attributes.position,Pe=Je.start*Fe,tt=(Je.start+Je.count)*Fe;de!==null&&(Pe=Math.max(Pe,de.start*Fe),tt=Math.min(tt,(de.start+de.count)*Fe)),Te!==null?(Pe=Math.max(Pe,0),tt=Math.min(tt,Te.count)):et!=null&&(Pe=Math.max(Pe,0),tt=Math.min(tt,et.count));let bt=tt-Pe;if(bt<0||bt===1/0)return;let ft;_t.setup($,ne,Se,K,Te);let ot=ct;if(Te!==null&&(ft=Ge.get(Te),ot=vt,ot.setIndex(ft)),$.isMesh)ne.wireframe===!0?(te.setLineWidth(ne.wireframeLinewidth*Y()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if($.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),te.setLineWidth(Ke*Y()),$.isLineSegments?ot.setMode(N.LINES):$.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else $.isPoints?ot.setMode(N.POINTS):$.isSprite&&ot.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)vs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ke=$._multiDrawStarts,ht=$._multiDrawCounts,xt=$._multiDrawCount,Ue=Te?Ge.get(Te).bytesPerElement:1,ze=oe.get(ne).currentProgram.getUniforms();for(let ei=0;ei<xt;ei++)ze.setValue(N,"_gl_DrawID",ei),ot.render(Ke[ei]/Ue,ht[ei])}else if($.isInstancedMesh)ot.renderInstances(Pe,bt,$.count);else if(K.isInstancedBufferGeometry){let Ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ht=Math.min(K.instanceCount,Ke);ot.renderInstances(Pe,bt,ht)}else ot.render(Pe,bt)},this.compile=function(E,W,K=null){K===null&&(K=E),S=gt.get(K),S.init(W),D.push(S),K.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),E!==K&&E.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights();let ne=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let de=$.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){let Se=de[_e];sa(Se,K,$),ne.add(Se)}else sa(de,K,$),ne.add(de)}),S=D.pop(),ne},this.compileAsync=function(E,W,K=null){let ne=this.compile(E,W,K);return new Promise($=>{function de(){ne.forEach(function(_e){oe.get(_e).currentProgram.isReady()&&ne.delete(_e)}),ne.size!==0?setTimeout(de,10):$(E)}j.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ts=null;function aa(){Ji.stop()}function er(){Ji.start()}let Ji=new Rd;function tr(E,W,K,ne){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||M.intersectsSprite(E)){ne&&U.setFromMatrixPosition(E.matrixWorld).applyMatrix4(x);let de=je.update(E),_e=E.material;_e.visible&&b.push(E,de,_e,K,U.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||M.intersectsObject(E))){let de=je.update(E),_e=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),U.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),U.copy(de.boundingSphere.center)),U.applyMatrix4(E.matrixWorld).applyMatrix4(x)),Array.isArray(_e)){let Se=de.groups;for(let Te=0,Fe=Se.length;Te<Fe;Te++){let Je=Se[Te],et=_e[Je.materialIndex];et&&et.visible&&b.push(E,de,et,K,U.z,Je)}}else _e.visible&&b.push(E,de,_e,K,U.z,null)}}let $=E.children;for(let de=0,_e=$.length;de<_e;de++)tr($[de],W,K,ne)}function oa(E,W,K,ne){let{opaque:$,transmissive:de,transparent:_e}=E;S.setupLightsView(K),O===!0&&ve.setGlobalState(I.clippingPlanes,K),ne&&te.viewport(q.copy(ne)),$.length>0&&Cn($,W,K),de.length>0&&Cn(de,W,K),_e.length>0&&Cn(_e,W,K),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function ir(E,W,K,ne){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ne.id]===void 0){let et=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ne.id]=new li(1,1,{generateMipmaps:!0,type:et?ji:ui,minFilter:Ri,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}let $=S.state.transmissionRenderTarget[ne.id],de=ne.viewport||q;$.setSize(de.z*I.transmissionResolutionScale,de.w*I.transmissionResolutionScale);let _e=I.getRenderTarget(),Se=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget($),I.getClearColor(we),Ae=I.getClearAlpha(),Ae<1&&I.setClearColor(16777215,.5),I.clear(),J&&Q.render(K);let Fe=I.toneMapping;I.toneMapping=Ci;let Je=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),S.setupLightsView(ne),O===!0&&ve.setGlobalState(I.clippingPlanes,ne),Cn(E,K,ne),ue.updateMultisampleRenderTarget($),ue.updateRenderTargetMipmap($),j.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Pe=0,tt=W.length;Pe<tt;Pe++){let bt=W[Pe],{object:ft,geometry:ot,material:Ke,group:ht}=bt;if(Ke.side===Ht&&ft.layers.test(ne.layers)){let xt=Ke.side;Ke.side=$t,Ke.needsUpdate=!0,la(ft,K,ne,ot,Ke,ht),Ke.side=xt,Ke.needsUpdate=!0,et=!0}}et===!0&&(ue.updateMultisampleRenderTarget($),ue.updateRenderTargetMipmap($))}I.setRenderTarget(_e,Se,Te),I.setClearColor(we,Ae),Je!==void 0&&(ne.viewport=Je),I.toneMapping=Fe}function Cn(E,W,K){let ne=W.isScene===!0?W.overrideMaterial:null;for(let $=0,de=E.length;$<de;$++){let _e=E[$],{object:Se,geometry:Te,group:Fe}=_e,Je=_e.material;Je.allowOverride===!0&&ne!==null&&(Je=ne),Se.layers.test(K.layers)&&la(Se,W,K,Te,Je,Fe)}}function la(E,W,K,ne,$,de){E.onBeforeRender(I,W,K,ne,$,de),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(I,W,K,ne,E,de),$.transparent===!0&&$.side===Ht&&$.forceSinglePass===!1?($.side=$t,$.needsUpdate=!0,I.renderBufferDirect(K,W,ne,$,E,de),$.side=zr,$.needsUpdate=!0,I.renderBufferDirect(K,W,ne,$,E,de),$.side=Ht):I.renderBufferDirect(K,W,ne,$,E,de),E.onAfterRender(I,W,K,ne,$,de)}function Rn(E,W,K){W.isScene!==!0&&(W=L);let ne=oe.get(E),$=S.state.lights,de=S.state.shadowsArray,_e=$.state.version,Se=xe.getParameters(E,$.state,de,W,K),Te=xe.getProgramCacheKey(Se),Fe=ne.programs;ne.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;let Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ne.envMap=Ie.get(E.envMap||ne.environment,Je),ne.envMapRotation=ne.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ra),Fe=new Map,ne.programs=Fe);let et=Fe.get(Te);if(et!==void 0){if(ne.currentProgram===et&&ne.lightsStateVersion===_e)return rr(E,Se),et}else Se.uniforms=xe.getUniforms(E),E.onBeforeCompile(Se,I),et=xe.acquireProgram(Se,Te),Fe.set(Te,et),ne.uniforms=Se.uniforms;let Pe=ne.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Pe.clippingPlanes=ve.uniform),rr(E,Se),ne.needsLights=(function(tt){return tt.isMeshLambertMaterial||tt.isMeshToonMaterial||tt.isMeshPhongMaterial||tt.isMeshStandardMaterial||tt.isShadowMaterial||tt.isShaderMaterial&&tt.lights===!0})(E),ne.lightsStateVersion=_e,ne.needsLights&&(Pe.ambientLightColor.value=$.state.ambient,Pe.lightProbe.value=$.state.probe,Pe.directionalLights.value=$.state.directional,Pe.directionalLightShadows.value=$.state.directionalShadow,Pe.spotLights.value=$.state.spot,Pe.spotLightShadows.value=$.state.spotShadow,Pe.rectAreaLights.value=$.state.rectArea,Pe.ltc_1.value=$.state.rectAreaLTC1,Pe.ltc_2.value=$.state.rectAreaLTC2,Pe.pointLights.value=$.state.point,Pe.pointLightShadows.value=$.state.pointShadow,Pe.hemisphereLights.value=$.state.hemi,Pe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pe.spotLightMatrix.value=$.state.spotLightMatrix,Pe.spotLightMap.value=$.state.spotLightMap,Pe.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.currentProgram=et,ne.uniformsList=null,et}function nr(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=qr.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function rr(E,W){let K=oe.get(E);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}Ji.setAnimationLoop(function(E){ts&&ts(E)}),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(E){ts=E,at.setAnimationLoop(E),E===null?Ji.stop():Ji.start()},at.addEventListener("sessionstart",aa),at.addEventListener("sessionend",er),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0)return void Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;let K=at.enabled===!0&&at.isPresenting===!0,ne=F!==null&&(H===null||K)&&F.begin(I,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),at.enabled!==!0||at.isPresenting!==!0||F!==null&&F.isCompositing()!==!1||(at.cameraAutoUpdate===!0&&at.updateCamera(W),W=at.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,W,H),S=gt.get(E,D.length),S.init(W),D.push(S),x.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),M.setFromProjectionMatrix(x,sn,W.reversedDepth),P=this.localClippingEnabled,O=ve.init(this.clippingPlanes,P),b=$e.get(E,A.length),b.init(),A.push(b),at.enabled===!0&&at.isPresenting===!0){let de=I.xr.getDepthSensingMesh();de!==null&&tr(de,W,-1/0,I.sortObjects)}tr(E,W,0,I.sortObjects),b.finish(),I.sortObjects===!0&&b.sort(ae,le),J=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,J&&Q.addToRenderList(b,E),this.info.render.frame++,O===!0&&ve.beginShadows();let $=S.state.shadowsArray;if(Be.render($,E,W),O===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){let de=b.opaque,_e=b.transmissive;if(S.setupLights(),W.isArrayCamera){let Se=W.cameras;if(_e.length>0)for(let Te=0,Fe=Se.length;Te<Fe;Te++)ir(de,_e,E,Se[Te]);J&&Q.render(E);for(let Te=0,Fe=Se.length;Te<Fe;Te++){let Je=Se[Te];oa(b,E,Je,Je.viewport)}}else _e.length>0&&ir(de,_e,E,W),J&&Q.render(E),oa(b,E,W)}H!==null&&k===0&&(ue.updateMultisampleRenderTarget(H),ue.updateRenderTargetMipmap(H)),ne&&F.end(I),E.isScene===!0&&E.onAfterRender(I,E,W),_t.resetDefaultState(),z=-1,X=null,D.pop(),D.length>0?(S=D[D.length-1],O===!0&&ve.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,A.pop(),b=A.length>0?A[A.length-1]:null},this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,W,K){let ne=oe.get(E);ne.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(E.texture).__webglTexture=W,oe.get(E.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:K,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){let K=oe.get(E);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};let ca=N.createFramebuffer();this.setRenderTarget=function(E,W=0,K=0){H=E,V=W,k=K;let ne=null,$=!1,de=!1;if(E){let _e=oe.get(E);if(_e.__useDefaultFramebuffer!==void 0)return te.bindFramebuffer(N.FRAMEBUFFER,_e.__webglFramebuffer),q.copy(E.viewport),Z.copy(E.scissor),me=E.scissorTest,te.viewport(q),te.scissor(Z),te.setScissorTest(me),void(z=-1);if(_e.__webglFramebuffer===void 0)ue.setupRenderTarget(E);else if(_e.__hasExternalTextures)ue.rebindTextures(E,oe.get(E.texture).__webglTexture,oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Fe=E.depthTexture;if(_e.__boundDepthTexture!==Fe){if(Fe!==null&&oe.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(de=!0);let Te=oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ne=Array.isArray(Te[W])?Te[W][K]:Te[W],$=!0):ne=E.samples>0&&ue.useMultisampledRTT(E)===!1?oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[K]:Te,q.copy(E.viewport),Z.copy(E.scissor),me=E.scissorTest}else q.copy(Ce).multiplyScalar(ie).floor(),Z.copy(Oe).multiplyScalar(ie).floor(),me=T;if(K!==0&&(ne=ca),te.bindFramebuffer(N.FRAMEBUFFER,ne)&&te.drawBuffers(E,ne),te.viewport(q),te.scissor(Z),te.setScissorTest(me),$){let _e=oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e.__webglTexture,K)}else if(de){let _e=W;for(let Se=0;Se<E.textures.length;Se++){let Te=oe.get(E.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,Te.__webglTexture,K,_e)}}else if(E!==null&&K!==0){let _e=oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,K)}z=-1},this.readRenderTargetPixels=function(E,W,K,ne,$,de,_e,Se=0){if(!E||!E.isWebGLRenderTarget)return void Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){te.bindFramebuffer(N.FRAMEBUFFER,Te);try{let Fe=E.textures[Se],Je=Fe.format,et=Fe.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!re.textureFormatReadable(Je))return void Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))return void Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=E.width-ne&&K>=0&&K<=E.height-$&&N.readPixels(W,K,ne,$,Qe.convert(Je),Qe.convert(et),de)}finally{let Fe=H!==null?oe.get(H).__webglFramebuffer:null;te.bindFramebuffer(N.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,W,K,ne,$,de,_e,Se=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){if(W>=0&&W<=E.width-ne&&K>=0&&K<=E.height-$){te.bindFramebuffer(N.FRAMEBUFFER,Te);let Fe=E.textures[Se],Je=Fe.format,et=Fe.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!re.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(W,K,ne,$,Qe.convert(Je),Qe.convert(et),0);let tt=H!==null?oe.get(H).__webglFramebuffer:null;te.bindFramebuffer(N.FRAMEBUFFER,tt);let bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qu(N,bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(Pe),N.deleteSync(bt),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,K=0){let ne=Math.pow(2,-K),$=Math.floor(E.image.width*ne),de=Math.floor(E.image.height*ne),_e=W!==null?W.x:0,Se=W!==null?W.y:0;ue.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,_e,Se,$,de),te.unbindTexture()};let is=N.createFramebuffer(),ha=N.createFramebuffer();this.copyTextureToTexture=function(E,W,K=null,ne=null,$=0,de=0){let _e,Se,Te,Fe,Je,et,Pe,tt,bt,ft=E.isCompressedTexture?E.mipmaps[de]:E.image;if(K!==null)_e=K.max.x-K.min.x,Se=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Fe=K.min.x,Je=K.min.y,et=K.isBox3?K.min.z:0;else{let ti=Math.pow(2,-$);_e=Math.floor(ft.width*ti),Se=Math.floor(ft.height*ti),Te=E.isDataArrayTexture?ft.depth:E.isData3DTexture?Math.floor(ft.depth*ti):1,Fe=0,Je=0,et=0}ne!==null?(Pe=ne.x,tt=ne.y,bt=ne.z):(Pe=0,tt=0,bt=0);let ot=Qe.convert(W.format),Ke=Qe.convert(W.type),ht;W.isData3DTexture?(ue.setTexture3D(W,0),ht=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ue.setTexture2DArray(W,0),ht=N.TEXTURE_2D_ARRAY):(ue.setTexture2D(W,0),ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let xt=N.getParameter(N.UNPACK_ROW_LENGTH),Ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ze=N.getParameter(N.UNPACK_SKIP_PIXELS),ei=N.getParameter(N.UNPACK_SKIP_ROWS),ns=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let In=E.isDataArrayTexture||E.isData3DTexture,Pn=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){let ti=oe.get(E),hn=oe.get(W),pi=oe.get(ti.__renderTarget),sr=oe.get(hn.__renderTarget);te.bindFramebuffer(N.READ_FRAMEBUFFER,pi.__webglFramebuffer),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let w=0;w<Te;w++)In&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oe.get(E).__webglTexture,$,et+w),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oe.get(W).__webglTexture,de,bt+w)),N.blitFramebuffer(Fe,Je,_e,Se,Pe,tt,_e,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);te.bindFramebuffer(N.READ_FRAMEBUFFER,null),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||oe.has(E)){let ti=oe.get(E),hn=oe.get(W);te.bindFramebuffer(N.READ_FRAMEBUFFER,is),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,ha);for(let pi=0;pi<Te;pi++)In?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ti.__webglTexture,$,et+pi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ti.__webglTexture,$),Pn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,hn.__webglTexture,de,bt+pi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,hn.__webglTexture,de),$!==0?N.blitFramebuffer(Fe,Je,_e,Se,Pe,tt,_e,Se,N.COLOR_BUFFER_BIT,N.NEAREST):Pn?N.copyTexSubImage3D(ht,de,Pe,tt,bt+pi,Fe,Je,_e,Se):N.copyTexSubImage2D(ht,de,Pe,tt,Fe,Je,_e,Se);te.bindFramebuffer(N.READ_FRAMEBUFFER,null),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Pn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(ht,de,Pe,tt,bt,_e,Se,Te,ot,Ke,ft.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(ht,de,Pe,tt,bt,_e,Se,Te,ot,ft.data):N.texSubImage3D(ht,de,Pe,tt,bt,_e,Se,Te,ot,Ke,ft):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,Pe,tt,_e,Se,ot,Ke,ft.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,Pe,tt,ft.width,ft.height,ot,ft.data):N.texSubImage2D(N.TEXTURE_2D,de,Pe,tt,_e,Se,ot,Ke,ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,xt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ns),de===0&&W.generateMipmaps&&N.generateMipmap(ht),te.unbindTexture()},this.initRenderTarget=function(E){oe.get(E).__webglFramebuffer===void 0&&ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ue.setTextureCube(E,0):E.isData3DTexture?ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ue.setTexture2DArray(E,0):ue.setTexture2D(E,0),te.unbindTexture()},this.resetState=function(){V=0,k=0,H=null,te.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var yh=.55,Rf="./assets/hero-monkey-chase-v2.png",If=new C(0,0,-1),Pf=new C(0,1,0);function Zi(n,e,t){return Math.max(e,Math.min(t,n))}function Zs(n,e,t,i){return eh.damp(n,e,t,i)}function Lf(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function Df(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function Ud(n,e,t){let i=Zi((t-n)/(e-n),0,1);return i*i*(3-2*i)}function Uf(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],f=c[u+2],m=p-Math.max(d,f),_=Ud(24,92,m)*Ud(72,180,p);if(_<=0)continue;c[u+3]=Math.round(c[u+3]*(1-_));let g=_*.78;c[u+1]=Math.round(p*(1-g)+Math.max(d,f)*g)}o.putImageData(l,0,0);let h=new ki(a);return h.colorSpace=yt,h.minFilter=Ri,h.magFilter=Ut,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function Nd(n,e){let t=new nt;t.setAttribute("position",new wt(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new At({color:n,transparent:!0,opacity:e,depthWrite:!1,side:Ht,blending:jn}),r=new Xe(t,i);return r.frustumCulled=!1,r}function Fd(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function Nf(){let n=new Float32Array(24),e=new nt;e.setAttribute("position",new wt(n,3));let t=new Cr({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new Es(e,t);return i.frustumCulled=!1,i}function Ff(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function Od(n,e){let t=new Tt;t.position.set(n*.27,.14,.055);let i=new Xe(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new Xe(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new Xe(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new Xe(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function Bd({scene:n,camera:e,renderer:t,assetUrl:i=Rf,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await Df(i),o=Uf(a,t),l=new Tt;l.name="playerRig";let c=new Tt;c.name="playerAttitude",l.add(c);let h=new At({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:Ht,toneMapped:!0}),u=new Xe(new xi(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new Yt(.018,.025,.62,6),jointGeometry:new Vi(.065,8,5),thrusterGeometry:new Yt(.045,.06,.14,7),trailGeometry:new Gi(.06,.48,7,1,!0),metalMaterial:new Hi({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new Hi({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new At({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new At({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:Ht,blending:Xi})},p=Od(-1,d),f=Od(1,d);c.add(p,f);let m=Nd(12853285,.88),_=Nd(9376024,.78);c.add(m,_);let g=Nf();c.add(g);let v=new En(16757051,r?1.4:2.1,4.5,2);v.position.set(0,-.04,.34),c.add(v),n.add(l);let y={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:yh,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,f],scarves:[m,_],tail:g,engineLight:v,cameraVelocity:new C,cameraTarget:new C,lookTarget:new C,aimForward:If.clone(),disposed:!1};return Sh(y,r),y}function Js(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=Zi(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=Zi(t.bank??-(t.vx||0)*.08,-.52,.52),a=Zi(t.pitch??-(t.vy||0)*.045,-.36,.36),o=Zi(-(t.vx||0)*.022,-.18,.18),l=Zi(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=Zs(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=Zs(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=Zs(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=Zs(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=Zs(n.wings[1].rotation.z,-u,12,r),Fd(n.scarves[0],n.time,-1,l),Fd(n.scarves[1],n.time+.17,1,l),Ff(n.tail,n.time,s);let d=Zi(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((f,m)=>{let _=f.userData.trail,g=.9+Math.sin(n.time*28+m)*.12;_.scale.set(.85+d*.25,.55+d*.7*g,.85+d*.25),_.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function Mh(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=Zi(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),Lf(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=Zi(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(Pf),r.lookAt(n.lookTarget),r.rotateZ(Zi(-(t.bank||0)*.12,-.07,.07))}function Sh(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}var Bf=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg"],Xt=-5.32,zf=18,kf=11.5,Gf=10.7,Vf=3,Pi=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8})]);function Jr(n,e,t){return Math.max(e,Math.min(t,n))}function kd(n){return Jr(Math.round(Number(n)||0),0,Vf)}function il(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function bh(n,e,t=0){let i=il(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function Th(n){let e=il(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function lt(n,e,t){return e+(t-e)*n()}function Gd(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function Hf(n,e,t){let i=Gd(128,256);if(!i){let m=new Me(n.facade[e]),_=new Uint8Array([m.r*255,m.g*255,m.b*255,255]),g=new kn(_,1,1);return g.needsUpdate=!0,g}let r=Th(bh(t,e,41)),s=i.getContext("2d"),a=new Me(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new Me(16777215),.12),c=n.windows.map(m=>new Me(m));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let m=0;m<u;m+=1)for(let _=0;_<h;_+=1){let g=_*d,v=m*p;s.fillStyle=`#${l.clone().multiplyScalar(lt(r,.66,1.08)).getHexString()}`,s.fillRect(g+1,v+1,d-2,p-2);let y=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,b=r()<y?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${b.clone().multiplyScalar(lt(r,.72,1.08)).getHexString()}`;let S=e===1?3:4,A=e===2?3:2;s.fillRect(g+S,v+A,Math.max(2,d-S*2),Math.max(2,p-A*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let m=0;m<16;m+=1){let _=Math.floor(r()*h)*d,g=Math.floor(r()*u)*p;s.fillRect(_+1,g+1,d-2,p-2)}}let f=new ki(i);return f.colorSpace=yt,f.wrapS=On,f.wrapT=On,f.repeat.set(e===1?1.5:1,e===2?1.5:2),f.needsUpdate=!0,f}function Wf(n,e){let t=Gd(1024,320);if(!t)return null;let i=Th(bh(e,813,Pi.indexOf(n))),r=t.getContext("2d"),s=new Me(n.sky),a=new Me(n.fog).lerp(new Me(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=lt(i,18,54),u=lt(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-lt(i,12,55),2,lt(i,12,55)),l+=h+lt(i,3,13)}let c=new ki(t);return c.colorSpace=yt,c.needsUpdate=!0,c}function Zr(n){return new Hi({roughness:.76,metalness:.24,...n})}function zd(n,e,t,i){let r=new Gn(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(Xr),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function Mi(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function Ks(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function Kr(n,e,t){let i=Pi[t],r=Th(bh(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;Mi(s.road,0,Xt+.035,0,a*2,.07,o-.08,{color:i.road}),Mi(s.sidewalk,-(a+.72),Xt+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),Mi(s.sidewalk,a+.72,Xt+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])Mi(s.markings,c,Xt+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);Ks(s.metalCylinder,u,Xt+1.5,h,.055,2.85,{color:i.metal}),Mi(s.metalBox,u-c*.27,Xt+2.83,h,.58,.06,.06,{color:i.metal}),Mi(s.lights,u-c*.52,Xt+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density===9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=lt(r,t===1?3.4:2.5,t===2?5.8:5.1),p=lt(r,2.8,4.8),f=a+1.45+u*4.6+lt(r,0,1.2),m=c*(f+d/2),_=lt(r,-o*.42,o*.42),g=lt(r,i.minHeight,i.maxHeight);t===1&&h>1&&(g*=.72),t===3&&r()<.22&&(g*=.58);let v=Math.floor(r()*3),y=Jr(g*lt(r,.18,.28),1.2,3.4),b=g-y;s.facade.push({level:t,family:v,x:m,y:Xt+y/2,z:_,sx:d*1.14,sy:y,sz:p*1.12,ry:0});let S=t===2||g>10||r()<.42,A=S?lt(r,.58,.74):1,D=b*A;s.facade.push({level:t,family:v,x:m,y:Xt+y+D/2,z:_,sx:d,sy:D,sz:p,ry:0});let F=Xt+y+D,I=d,G=p;if(S){let V=b-D;I=d*lt(r,.58,.78),G=p*lt(r,.6,.82),s.facade.push({level:t,family:(v+1)%3,x:m,y:F+V/2,z:_,sx:I,sy:V,sz:G,ry:0}),F+=V}if(Mi(s.roof,m,F+.11,_,I*.88,.22,G*.86,{color:i.roof}),r()<.78&&Mi(s.metalBox,m+lt(r,-I*.2,I*.2),F+.35,_,I*.24,.5,G*.24,{color:i.metal}),g>11&&r()<.46){let V=lt(r,1.1,t===2?3.8:2.5);Ks(s.metalCylinder,m,F+V/2,_,.055,V,{color:i.metal}),Mi(s.lights,m,F+V,_,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){Mi(s.metalBox,0,Xt+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])Ks(s.metalCylinder,c*(a+.32),Xt+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+lt(r,0,3));if(e%2===0){let u=lt(r,7,13);Ks(s.metalCylinder,h,Xt+u/2,lt(r,-3,3),.52,u,{color:6643288}),Mi(s.lights,h,Xt+u+.15,0,.22,.22,.22,{color:i.beacon})}else Ks(s.metalCylinder,h,Xt+1.15,lt(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+lt(r,4.5,10));Mi(s.lights,h,Xt+lt(r,1.2,5),lt(r,-4,4),lt(r,.35,.75),lt(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}return s}function Xf(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function $r(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(Xf(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function jf(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=yt,s.minFilter=Ri;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function Vd(n,e,t){let i=Wf(Pi[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,jf(n,e,t,n.backdropTokens[t])}function qf(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=Kr(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,$r(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:Pi[t.fromLevel],to:Pi[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=Kr(n,n.blocks[c].serial,t.toLevel));$r(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function Yf(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new Vt(1,1,1),s=new Yt(.5,.5,1,8,1,!1),a=new xi(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=Pi.map((l,c)=>l.facade.map((h,u)=>{let d=Hf(l,u,n.seed);n.generatedTextures.add(d);let p=Zr({color:h,map:d,emissiveMap:d,emissive:new Me(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let f=zd(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(f),n.movingRoot.add(f),f}));let o=(l,c,h,u)=>{n.materials.add(h);let d=zd(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,Zr({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,Zr({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,Zr({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,Zr({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,Zr({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new At({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new At({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new At({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:Ht});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new Xe(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),Vd(n,n.level,0),n.backdropMaterials[0].opacity=1}function Hd(n={}){let e=Jr(Math.floor(n.blockCount||zf),10,24),t=Jr(Number(n.blockSpacing)||kf,9,16),i=Math.max(Gf,Number(n.corridorHalfWidth)||0),r=kd(n.level),s=new Tt;s.name="streamed-city";let a=new Tt;a.name="streamed-city-blocks";let o=new Tt;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:il(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,4):Bf.slice(),textureLoader:typeof document>"u"?null:new Bs,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new It,color:new Me,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};Yf(l);for(let h=0;h<e;h+=1)l.blocks.push(Kr(l,h,r));$r(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return Zf(c,h,u)},setLevel(h,u){return Jf(c,h,u)},setSeed(h,u){return Kf(c,h,u)},getEnvironment(){return Wd(c)},getStats(){return{...l.stats}},dispose(){$f(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function nl(n){let e=n?._cityState;return!e||e.disposed?null:e}function Zf(n,e,t={}){let i=nl(n);if(!i)return null;let r=Jr(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push(Kr(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&$r(i),qf(i,r),Wd(n)}function Jf(n,e,t={}){let i=nl(n);if(!i)return!1;let r=kd(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=Jr(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,Vd(i,r,c),s?(i.blocks=i.blocks.map(h=>Kr(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,$r(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:Pi[r],to:Pi[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function Kf(n,e,t={}){let i=nl(n);if(!i)return!1;let r=il(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push(Kr(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,$r(i)}return!0}function Wd(n){let e=nl(n);if(!e)return null;if(!e.transition){let o=Pi[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=Pi[t],a=Pi[i];return{level:i,mix:r,sky:new Me(s.sky).lerp(new Me(a.sky),r).getHex(),fog:new Me(s.fog).lerp(new Me(a.fog),r).getHex(),light:new Me(s.light).lerp(new Me(a.light),r).getHex(),theme:a}}function $f(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var Qf=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])})]),$s=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var eg=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),Li=(n,e,t)=>Math.max(e,Math.min(t,n)),Qr=(n,e)=>Number.isFinite(n)?n:e;function Xd(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function tg(n=7646257){let e=Xd(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=Xd(i)||1831565813},t}function ig(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>Li(Qr(n(),.5),0,.999999999999)}function ng(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var Ee,rl,di,wh,jd,sl,al,Ah,Qs,qd,Yd,Zd,Jd,ol,ln,Eh=class{constructor({seed:e=7646257,rng:t=tg(e),levels:i=Qf,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){Uh(this,Ee);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=ig(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=Li(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=Li(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),ke(this,Ee,ln).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&ke(this,Ee,Ah).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();ke(this,Ee,Zd).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values($s).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,ke(this,Ee,Ah).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};Ee=new WeakSet,rl=function(e){let t=this.levels[this.levelIndex],i=Li(this.survivalTime/180,0,.42),r=Li(Qr(e.difficulty,0),-.25,.5);return{scalar:Li(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor(Qr(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor(Qr(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor(Qr(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor(Qr(e.activeMissiles,0)))}},di=function(e,t){return e+(t-e)*this.random()},wh=function(e){return e[Math.floor(this.random()*e.length)]},jd=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||$s.FORMATION},sl=function(e){return this.serial+=1,`${e}-${this.serial}`},al=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},Ah=function(e,t){let i=this.levels[this.levelIndex],r=ke(this,Ee,rl).call(this,t),s=e||ke(this,Ee,jd).call(this,i.weights),a=ke(this,Ee,sl).call(this,"encounter"),o=ke(this,Ee,Yd).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,ke(this,Ee,ln).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)ke(this,Ee,al).call(this,l.at,l.kind,l.payload);ke(this,Ee,al).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},Qs=function(e,t,i,r={}){return{entityId:ke(this,Ee,sl).call(this,"aircraft"),encounterId:e,typeHint:ke(this,Ee,wh).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:ke(this,Ee,di).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*ke(this,Ee,di).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:ke(this,Ee,di).call(this,0,Math.PI*2),amplitude:ke(this,Ee,di).call(this,.75,1.8),...r}},qd=function(e,t,i,r,s,a){let o=ke(this,Ee,sl).call(this,"missile"),[l,c]=i.warningLead,h=ke(this,Ee,di).call(this,l,c)/Li(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:Li(.92+r.scalar*.2,1,1.28),guidanceScale:Li(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},Yd=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=ng([0,1,2],this.random),l=5;if(e===$s.FORMATION){let d=Math.min(a,Li(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=ke(this,Ee,wh).call(this,["vee","echelon","stack"]);for(let f=0;f<d;f+=1){let m=o[f%o.length];s.push({at:f*ke(this,Ee,di).call(this,.42,.7),kind:"aircraftSpawn",payload:ke(this,Ee,Qs).call(this,t,i,r,{role:p,lane:m,altitude:.2+(p==="stack"?f*1.25:f%2?1.5:0),spawnZ:-82-f*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===$s.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:ke(this,Ee,Qs).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:ke(this,Ee,di).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*ke(this,Ee,di).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===$s.MISSILE_SORTIE){let d=Math.min(a,this.levelIndex>=3&&this.random()<.45?2:1),p=Math.max(0,r.maxMissiles-r.activeMissiles);for(let f=0;f<d;f+=1){let m=ke(this,Ee,Qs).call(this,t,i,r,{role:"missile-carrier",lane:o[f],altitude:ke(this,Ee,di).call(this,1.2,5),spawnZ:-88-f*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:f*1.05,kind:"aircraftSpawn",payload:m}),f<p&&s.push(...ke(this,Ee,qd).call(this,t,m.entityId,i,r,2.1+f*1.1,m.lane===0?"left":m.lane===2?"right":"ahead"))}l=6.4+d*.8}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let f=0;f<d;f+=1){let m=p[f];s.push({at:f<2?f*.18:1.05,kind:"aircraftSpawn",payload:ke(this,Ee,Qs).call(this,t,i,r,{role:m===0?"left-flanker":"right-flanker",lane:m,altitude:ke(this,Ee,di).call(this,-.8,4.3),spawnZ:-78-f*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:ke(this,Ee,di).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,ke(this,Ee,di).call(this,c,h)/Li(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},Zd=function(e,t){if(e.kind==="aircraftSpawn"){let i=ke(this,Ee,rl).call(this,t);if(i.activeAircraft>=i.maxAircraft){ke(this,Ee,Jd).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,ke(this,Ee,ln).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=ke(this,Ee,rl).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),ke(this,Ee,ol).call(this,e,"missile-cap");return}ke(this,Ee,ln).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){ke(this,Ee,ol).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,ke(this,Ee,ln).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",ke(this,Ee,ln).call(this,"recoveryStart",e.payload),ke(this,Ee,al).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,ke(this,Ee,ln).call(this,"recoveryEnd",e.payload))},Jd=function(e,t){if(e.retries>=this.maxSpawnRetries){ke(this,Ee,ol).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},ol=function(e,t){this.stats.actionsSkipped+=1,ke(this,Ee,ln).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},ln=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[eg[e]]?.(i)===!1||r===!1)};function Kd(n){return new Eh(n)}var ll=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),An=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35}]),cn=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),$d=new C(0,0,1),ep=new C(0,0,0),tp=new Gt,rg=new Me(16777215);function Qd(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new ki(e);return i.colorSpace=yt,i.needsUpdate=!0,i}function sg(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function ea(n,e,t,i,r){let s=new Gn(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(Xr),s.renderOrder=i.blending===Xi?30:20;let a=Array.from({length:r},sg);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,tp,ep),s.setMatrixAt(o,n.matrix),s.setColorAt(o,rg);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function Ch(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function Ft(n,e,t){return e+(t-e)*Ch(n)}function es(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function ag(n,e){n.x=es(e,"x"),n.y=es(e,"y"),n.z=es(e,"z")}function og(n,e){n.vx=es(e,"x"),n.vy=es(e,"y"),n.vz=es(e,"z")}function lg(n,e,t){let i=e??t;i&&i.isColor?ta.copy(i):ta.set(i),n.r=ta.r,n.g=ta.g,n.b=ta.b}var ta=new Me;function cg(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function na(n,e,t,i){let r=cg(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??Ft(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,ag(r,t.position),og(r,t.velocity),lg(r,t.color,i.color),r}function Rh(n,e){let t=ll[e]||ll.medium;n.resolvedQuality=e in ll?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor(cn.weather*t.weatherLimit*(n.reducedMotion?.3:1)),np(n,!0)}function ip(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+Ft(n,-18,18),n.weatherPositions[r+1]=i.y+Ft(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+Ft(n,-28,12),n.weatherPhases[e]=Ft(n,0,Math.PI*2)}function np(n,e){let t=An[n.level]||An[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)ip(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function hg(n,e,t){if(!n.weatherCount)return;let i=An[n.level]||An[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&ip(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function ia(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,tp,ep),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle($d,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors($d,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function Ih(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function ug(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function dg(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function pg(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&Rh(n,t)}function mg(n,e){let t=na(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function fg(n,e){return n.reducedMotion&&Ch(n)>.42?null:na(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:Ft(n,-1.8,1.8),color:14276559})}function gg(n,e){return n.reducedMotion&&Ch(n)>.6?null:na(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function vg(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*ll[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(Ft(n,-1,1),Ft(n,-.75,1),Ft(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*Ft(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=Ft(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=Ft(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=Ft(n,1.2,3.2),n.spawnOptions.gravity=Ft(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=na(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return Ih(n,e.impulse??.55*s,Ft(n,-.018,.018)),a}function _g(n,e){if(n.reducedMotion)return null;let t=na(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return Ih(n,e.impulse??.22,e.roll??Ft(n,-.01,.01)),t}function xg(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),Ih(n,e.impulse??.85,e.roll??Ft(n,-.025,.025)),n.hitFlash}function rp({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new Tt,pools:{},resources:new Set,matrix:new Ve,position:new C,direction:new C,scale:new C,quaternion:new Gt,rollQuaternion:new Gt,color:new Me,hiddenPosition:new C(0,-1e4,0),weatherCenter:new C,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:cn.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new At({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:Xi,toneMapped:!1,vertexColors:!0}),l=d=>new At({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=ea(a,"projectileTrail",new Vt(1,1,1),o(.95),cn.projectileTrail),a.pools.missileSmoke=ea(a,"missileSmoke",new Xn(1,1),l(.42),cn.missileSmoke),a.pools.jetExhaust=ea(a,"jetExhaust",new Vt(1,1,1),o(.72),cn.jetExhaust),a.pools.explosion=ea(a,"explosion",new Xn(1,0),o(.9),cn.explosion),a.pools.nearMiss=ea(a,"nearMiss",new Vt(1,1,1),o(.84),cn.nearMiss),a.softTexture=Qd("soft"),a.streakTexture=Qd("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array(cn.weather*3),a.weatherPhases=new Float32Array(cn.weather);let c=new nt;c.setAttribute("position",new wt(a.weatherPositions,3).setUsage(Xr));let h=new Mn({color:An[0].color,size:An[0].size,map:a.softTexture,transparent:!0,opacity:An[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:Xi});a.weather=new Vn(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new At({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Xi,toneMapped:!1});return a.hitFlash=new Xe(new xi(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),Rh(a,a.resolvedQuality),a}function Ph(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),pg(n,i),ia(n,n.pools.projectileTrail,i,"streak"),ia(n,n.pools.missileSmoke,i,"smoke"),ia(n,n.pools.jetExhaust,i,"streak"),ia(n,n.pools.explosion,i,"explosion"),ia(n,n.pools.nearMiss,i,"streak"),hg(n,i,t),ug(n,i),dg(n,i),n.cameraImpulse}function Zt(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return mg(n,t);case"missileSmoke":return fg(n,t);case"jetExhaust":return gg(n,t);case"explosion":return vg(n,t);case"nearMiss":return _g(n,t);case"hitFlash":return xg(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function sp(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(An.length-1,Math.floor(e))),np(n,!0))}function ap(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;Rh(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("briefingOrder"),s=document.getElementById("startButton"),a=document.getElementById("pauseOverlay"),o=document.getElementById("resumeButton"),l=document.getElementById("restartButton"),c=document.getElementById("pauseButton"),h=document.getElementById("muteButton"),u=document.getElementById("shootButton"),d=document.getElementById("score"),p=document.getElementById("best"),f=document.getElementById("points"),m=document.getElementById("multiplier"),_=document.getElementById("level"),g=document.getElementById("threatBar"),v=document.getElementById("missileWarning"),y=document.getElementById("lockMeter"),b=document.getElementById("missileBearing"),S=document.getElementById("missileDirection"),A=document.getElementById("targetingHud"),D=document.getElementById("targetStatus"),F=document.getElementById("targetRange"),I=document.getElementById("weaponCooldown"),G=document.getElementById("touchControls"),V=document.getElementById("steerZone"),k=document.getElementById("liftButton"),H=document.getElementById("statusRegion"),z=window.GameAudio||{},X=1/60,q=[-6.2,0,6.2],Z=-3.2,me=5.8,we=1.4,Ae=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ge=[{time:0,name:"PATROL",threat:20,spawn:2.15,maxJets:3,missileChance:.2,missileCap:1,speed:16,sky:1453113,fog:2441805,city:2505539,lights:5824449},{time:22,name:"INTERCEPT",threat:46,spawn:1.82,maxJets:4,missileChance:.38,missileCap:1,speed:18.5,sky:3746867,fog:6440522,city:3354424,lights:15254612},{time:52,name:"MISSILE LOCK",threat:74,spawn:1.55,maxJets:5,missileChance:.56,missileCap:2,speed:21,sky:1515564,fog:3488587,city:2107702,lights:16740431},{time:92,name:"OVERDRIVE",threat:100,spawn:1.28,maxJets:6,missileChance:.72,missileCap:3,speed:24,sky:2232087,fog:4858407,city:2431521,lights:16731960}],ye={f16:{name:"F-16",color:9411488,accent:4282208,hp:2,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:3,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:2,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:5,speed:.72,agility:.62,score:980,scale:1.18}},ie,ae,le,Ce,Oe,T,M,O,P,x,R,U,L="loading",J="playing",Y=0,j=0,re=0,te=0,se=1,oe=0,ue=0,Ie=performance.now(),Ge=0,Ye=0,je=1,xe=0,Re=7646257,$e=null,gt=null,ve=!1,Be=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),Q={x:0,y:.7,z:we,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:yh},St=[],ct=[],vt=[],Qe=new Set,_t=new Me,Et=new C,N=new C;p.textContent=String(Math.floor(Be));function Jt(w){H.textContent="",requestAnimationFrame(()=>{H.textContent=w})}function st(w,ee,B){return Math.max(ee,Math.min(B,w))}function at(){return Re=Re*1664525+1013904223>>>0,Re/4294967296}function Ct(w,ee){return w+(ee-w)*at()}function Si(w,ee={}){return new Hi({color:w,roughness:ee.roughness??.58,metalness:ee.metalness??.45,emissive:ee.emissive||0,emissiveIntensity:ee.emissiveIntensity||0})}function Qt(w){w&&(ae.remove(w),w.traverse?.(ee=>{ee.geometry?.dispose?.(),Array.isArray(ee.material)?ee.material.forEach(B=>B.dispose?.()):ee.material?.dispose?.()}))}function ra(w){let ee=ye[w],B=new Tt,be=Si(ee.color,{metalness:.72,roughness:.34}),He=Si(ee.accent,{metalness:.62,roughness:.42}),pe=Si(1582893,{metalness:.75,roughness:.16}),dt=Si(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),ce=new Xe(new Yt(.34,.5,4.2,10),be);ce.rotation.x=Math.PI/2,B.add(ce);let ii=new Xe(new Gi(.34,1.35,10),be);ii.rotation.x=Math.PI/2,ii.position.z=2.72,B.add(ii);let ni=new Xe(new Vi(.38,10,6),pe);ni.scale.set(.75,.55,1.35),ni.position.set(0,.32,.8),B.add(ni);let mi=new Hn;mi.moveTo(0,1.2),mi.lineTo(2.7,-1.2),mi.lineTo(.45,-.65),mi.lineTo(0,-1.1);let Kt=new Xe(new Lr(mi,{depth:.1,bevelEnabled:!1}),be);Kt.rotation.x=-Math.PI/2,Kt.rotation.z=Math.PI/2,Kt.position.set(-.05,-.03,.3),Kt.geometry.center(),B.add(Kt);let ut=new Xe(new Vt(2.5,.08,.65),He);ut.position.z=-1.55,B.add(ut);let bi=new Xe(new Vt(.1,.85,.9),He);bi.position.set(0,.46,-1.55),B.add(bi);let Di=new Xe(new Yt(.18,.28,.72,8),dt);if(Di.rotation.x=Math.PI/2,Di.position.z=-2.38,B.add(Di),w==="fa18"||w==="f22"){let jt=Di.clone();Di.position.x=-.24,jt.position.x=.24,B.add(jt)}if(w==="a10"){let jt=new Yt(.28,.34,1.45,9);[-.82,.82].forEach(ri=>{let Ot=new Xe(jt,He);Ot.rotation.x=Math.PI/2,Ot.position.set(ri,.35,-.75),B.add(Ot)}),Kt.scale.x=1.15}return w==="f22"&&(Kt.scale.z=1.25),B.scale.setScalar(ee.scale),B.userData.engine=Di,B}function sa(){let w=new Tt,ee=new Xe(new Yt(.09,.13,1.15,8),Si(13095121,{metalness:.75,roughness:.3}));ee.rotation.x=Math.PI/2,w.add(ee);let B=new Xe(new Gi(.1,.34,8),Si(14739172));B.rotation.x=-Math.PI/2,B.position.z=-.74,w.add(B);let be=new Xe(new Gi(.11,.55,8),new At({color:16757051,transparent:!0,opacity:.9}));return be.rotation.x=Math.PI/2,be.position.z=.83,w.add(be),w.userData.flame=be,w}function ts(){let w=new Tt,ee=new Ir([new C(-.44,.16,0),new C(-.24,-.03,0),new C(0,-.11,0),new C(.24,-.03,0),new C(.44,.16,0)]),B=new Xe(new Dr(ee,12,.095,7,!1),Si(16767279,{metalness:.05,roughness:.48,emissive:10182400,emissiveIntensity:.72}));w.add(B);let be=new Vi(.082,7,5),He=Si(5977365,{metalness:.02,roughness:.86}),pe=new Xe(be,He);pe.position.set(-.46,.18,0),pe.scale.set(.72,1.35,.72),pe.rotation.z=-.62,w.add(pe);let dt=pe.clone();dt.position.x=.46,dt.rotation.z=.62,w.add(dt);let ce=new En(16762685,1.5,4);return w.add(ce),w.scale.setScalar(1.18),w.userData.isBananaProjectile=!0,w}function aa(){let w=new Float32Array(1080);for(let be=0;be<360;be+=1)w[be*3]=Ct(-60,60),w[be*3+1]=Ct(-1,28),w[be*3+2]=Ct(-150,-12);let ee=new nt;ee.setAttribute("position",new wt(w,3)),T=new Vn(ee,new Mn({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),ae.add(T),Oe=new Tt;let B=new At({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let be=0;be<24;be+=1){let He=new Xe(new Vi(1,8,5),B);He.scale.set(Ct(4,9),Ct(.7,1.6),Ct(2,5)),He.position.set(Ct(-28,28),Ct(4,15),Ct(-130,-12)),Oe.add(He)}ae.add(Oe)}function er(w){!w||!ae||(ae.background.setHex(w.sky),ae.fog.color.setHex(w.fog),x?.color.setHex(w.light),U?.color.setHex(w.light))}function Ji(w){return St.find(ee=>ee.entityId===w)||null}function tr(){return Kd({seed:Re,callbacks:{onAircraftSpawn(w){return L!=="playing"?!1:(ne(w),!0)},onMissileWarning(w){if(L!=="playing")return!1;let ee=Ji(w.sourceEntityId);return ee?$(ee,w):!1},onMissileLaunch(w){let ee=ct.find(B=>B.directorId===w.missileId&&B.state==="locking");return ee?(ee.pendingLaunch=w,ee.timer<=0&&de(ee,w),!0):!1}}})}async function oa(){try{ie=new Qo({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),ie.outputColorSpace=yt,ie.toneMapping=Vs,ie.toneMappingExposure=1.12,ae=new Ms,ae.background=new Me(ge[0].sky),ae.fog=new ys(ge[0].fog,.018),le=new Nt(56,1,.1,220),le.position.set(0,3.1,13.5),le.lookAt(0,1,-26),x=new zs(12446178,659736,2.25),ae.add(x),R=new ks(16769187,3.1),R.position.set(-8,13,8),ae.add(R),U=new En(16762699,4.2,14),U.position.set(0,3,5),ae.add(U),aa(),Ce=Hd({scene:ae,level:0,seed:Re,speed:ge[0].speed*.5}),er(Ce.getEnvironment()),P=rp({scene:ae,camera:le,mobile:innerWidth<=700,reducedMotion:Ae,quality:"auto",seed:Re}),M=await Bd({scene:ae,camera:le,renderer:ie,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:Ae}),Js(M,0,Q,{active:!1,speed:ge[0].speed}),Mh(M,X,Q),O=tr(),ir(),L="ready",s.disabled=!1,s.textContent="Accept Mission",Jt("3D flight systems ready.")}catch(w){console.error(w),L="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",s.hidden=!0}}function ir(){if(!ie||!le)return;let w=n.clientWidth||innerWidth,ee=n.clientHeight||innerHeight,B=w<=700;ve=B,ie.setPixelRatio(Math.min(devicePixelRatio||1,B?1.5:2)*je),ie.setSize(w,ee,!1),le.aspect=w/Math.max(1,ee),le.fov=B&&ee>w?65:55,le.updateProjectionMatrix(),Sh(M,B),document.body.classList.toggle("touch-controls-ready",B&&matchMedia("(pointer: coarse)").matches),G?.setAttribute("aria-hidden",String(!(B&&matchMedia("(pointer: coarse)").matches)))}function Cn(w){e.classList.toggle("is-visible",w),e.setAttribute("aria-hidden",String(!w)),n.inert=w}function la(){St.splice(0).forEach(w=>Qt(w.view)),ct.splice(0).forEach(w=>Qt(w.view)),vt.splice(0).forEach(w=>Qt(w.view)),j=0,re=0,te=0,se=1,oe=0,ue=0,Y=0,Re=(Date.now()^7646257)>>>0,Ce?.setSeed(Re,{regenerate:!0}),Ce?.setLevel(0,{immediate:!0}),O?.stop({clearSchedule:!0}),O=tr(),O.reset({levelIndex:0,delay:.85}),Object.assign(Q,{x:0,y:.7,z:we,vy:0,vx:0,lane:1,bank:0,pitch:0}),d.textContent="0",f.textContent="0",m.textContent="1.00\xD7",v.hidden=!0,y.style.width="0%",A?.classList.remove("is-locked"),D&&(D.textContent="Scanning"),F&&(F.hidden=!0),is(),E(0,!1)}function Rn(){L==="loading"||L==="unsupported"||(la(),L="playing",e.dataset.mode="flight",Cn(!1),u.disabled=!1,c.disabled=!1,k&&(k.disabled=!1),O?.start({levelIndex:0,delay:.85}),z.startRun?.(0),n.focus({preventScroll:!0}),Jt("3D flight started."))}function nr(){L==="playing"&&(Q.vy=Math.min(Q.vy+3.5,6.4),Q.pitch=.34,Zt(P,"jetExhaust",{position:{x:Q.x,y:Q.y-.1,z:Q.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),z.playFlap?.(st(Q.vy/6,.45,1)))}function rr(w){L==="playing"&&(Q.lane=st(Q.lane+w,0,q.length-1))}function ca(){let w=null,ee=1/0;for(let B of St){if(B.z>we||B.z<-82)continue;let be=B.x-Q.x,He=B.y-Q.y,pe=Math.hypot(be,He)+Math.abs(B.z)*.018;pe<7.4&&pe<ee&&(w=B,ee=pe)}return w}function is(){let w=Math.round(st(1-ue/.2,0,1)*100);I?.style.setProperty("--weapon-charge",String(w)),I?.setAttribute("aria-valuenow",String(w))}function ha(){if(L!=="playing"||ue>0)return;ue=.2;let w=ca(),ee=new C(0,0,-1);w&&(Et.set(w.x-Q.x,w.y-Q.y,w.z-Q.z).normalize(),ee.lerp(Et,innerWidth<=700?.82:.68).normalize());let B=ts();B.position.set(Q.x,Q.y,Q.z-.9),ae.add(B),vt.push({x:Q.x,y:Q.y,z:Q.z-.9,previous:new C(Q.x,Q.y,Q.z-.9),velocity:ee.multiplyScalar(54),life:1.9,trailTimer:0,spin:Ct(11,16)*(at()>.5?1:-1),tumble:Ct(7,11),view:B}),Zt(P,"projectileTrail",{position:B.position,velocity:vt[vt.length-1].velocity,life:.14,width:.075,length:1.2,color:16772456}),is(),z.playShot?.()}function E(w,ee=!0){if(w===Y&&j>0)return;Y=w;let B=ge[w];_.textContent=`LEVEL ${w+1} \xB7 ${B.name}`,g.style.width=`${B.threat}%`,g.style.background=w>=2?"var(--danger)":w===1?"var(--accent)":"var(--signal)",g.parentElement.setAttribute("aria-valuenow",String(B.threat)),ae&&(Ce?.setLevel(w,{duration:ee?3.1:.4,immediate:!ee}),ee||er(Ce?.getEnvironment()),sp(P,w)),O?.setLevel(w,{clearSchedule:ee}),z.playLevel?.(w),ee&&Jt(`Level ${w+1}: ${B.name}. City sector changed.`)}function W(){let w=0;for(let ee=ge.length-1;ee>=0;ee-=1)if(j>=ge[ee].time){w=ee;break}w!==Y&&E(w)}function K(){let w=Y===0?["f16","fa18"]:Y===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return w[Math.floor(at()*w.length)]}function ne(w={}){let ee=ye[w.typeHint]?w.typeHint:K(),B=ye[ee],be=st(Number.isInteger(w.lane)?w.lane:Math.floor(at()*q.length),0,q.length-1),He=ra(ee),pe=w.behavior||["intercept","sweep","dive"][Math.floor(at()*3)],dt={entityId:w.entityId||`legacy-${Re}-${St.length}`,encounterId:w.encounterId||null,role:w.role||"interceptor",typeId:ee,spec:B,view:He,hp:B.hp,lane:be,x:q[be]+Ct(-.8,.8),y:Number.isFinite(w.altitude)?w.altitude:Ct(-1.6,5.2),z:Number.isFinite(w.spawnZ)?w.spawnZ:-82,speed:ge[Y].speed*B.speed*st(w.speedScale||1,.78,1.42),phase:Number.isFinite(w.phase)?w.phase:Ct(0,Math.PI*2),amplitude:(Number.isFinite(w.amplitude)?w.amplitude:Ct(.7,2.1))*B.agility,behavior:pe,passed:!1,exhaustTimer:Ct(0,.08)};return He.position.set(dt.x,dt.y,dt.z),ae.add(He),St.push(dt),dt}function $(w,ee={}){let B=ge[Y];if(!w||ct.length>=B.missileCap)return!1;let be=sa();be.visible=!1,ae.add(be);let He=st(ee.leadTime||[1.45,1.22,1.02,.84][Y],.8,3),pe={directorId:ee.missileId||`missile-${Re}-${ct.length}`,bearingHint:ee.bearingHint||"ahead",state:"locking",source:w,view:be,x:w.x,y:w.y,z:w.z,timer:He,lockDuration:He,speed:19,direction:new C(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return ct.push(pe),v.hidden=!1,z.playMissileLock?.(pe),!0}function de(w,ee={}){w.state="active",w.view.visible=!0,w.source=null,w.speed=19*st(ee.speedScale||1,.9,1.35),w.guidanceScale=st(ee.guidanceScale||1,.88,1.25),w.life=st(ee.lifetime||5.5,3.5,7),w.direction.set(Q.x-w.x,Q.y-w.y,Q.z-w.z).normalize(),Zt(P,"explosion",{position:w,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),z.playMissileLaunch?.(w)}function _e(w){(Qe.has("Space")||Qe.has("KeyW")||Qe.has("ArrowUp")||Qe.has("TouchLift"))&&(Q.vy+=5.8*w),Q.vy=st(Q.vy-3.1*w,-3.6,6.4),Q.y+=Q.vy*w,(Q.y<Z||Q.y>me)&&(Q.y=st(Q.y,Z,me),Q.vy*=-.15,Ye=Math.max(Ye,.08));let B=q[Q.lane];Q.vx+=(B-Q.x)*34*w,Q.vx*=Math.exp(-9*w),Q.x+=Q.vx*w,Q.bank+=(st(-Q.vx*.08,-.48,.48)-Q.bank)*w*8,Q.pitch+=(st(-Q.vy*.045,-.34,.34)-Q.pitch)*w*7,Js(M,w,Q,{active:L==="playing",speed:ge[Y].speed,thrust:.52+st(Math.abs(Q.vy)/6.4,0,1)*.42})}function Se(w){for(let ee=St.length-1;ee>=0;ee-=1){let B=St[ee];B.z+=B.speed*w,B.phase+=w*(1.25+B.spec.agility*.55);let be=q[B.lane];B.behavior==="sweep"?B.x=be+Math.sin(B.phase)*B.amplitude*1.8:B.behavior==="flank"?B.x=be+Math.sin(B.phase*.82)*B.amplitude*2.35:B.x+=(be+Math.sin(B.phase)*B.amplitude-B.x)*w*1.8,B.behavior==="dive"?B.y+=Math.sin(B.phase*.68)*w*2.4:B.y+=Math.cos(B.phase)*w*B.amplitude*(B.behavior==="missile-sortie"?.2:.42),B.view.position.set(B.x,B.y,B.z),B.view.rotation.z=Math.sin(B.phase)*.28*B.spec.agility,B.view.rotation.x=Math.cos(B.phase*.7)*.06,B.view.userData.engine.scale.setScalar(.8+Math.sin(j*26+B.phase)*.18),B.exhaustTimer-=w,B.exhaustTimer<=0&&(B.exhaustTimer=ve?.09:.055,Zt(P,"jetExhaust",{position:{x:B.x,y:B.y,z:B.z-2.35*B.spec.scale},velocity:{x:0,y:0,z:-B.speed*.16},color:B.typeId==="a10"?16753487:6674943}));let He=B.z-Q.z;if(Math.abs(He)<1.2&&Math.hypot(B.x-Q.x,B.y-Q.y)<Q.radius+.7*B.spec.scale){ht(`${B.spec.name} collision`);return}B.z>10&&(Math.hypot(B.x-Q.x,B.y-Q.y)<3.3&&(tt("CLOSE PASS",120),Zt(P,"nearMiss",{position:B,velocity:{x:0,y:0,z:B.speed},impulse:.14,roll:st((B.x-Q.x)/8,-1,1)*.008})),Qt(B.view),St.splice(ee,1))}}function Te(w,ee){if(!w||!b||!S)return;let B=w.x-Q.x,be=w.z-Q.z,He=Math.atan2(B,-be)*180/Math.PI;b.style.setProperty("--missile-bearing",`${He.toFixed(1)}deg`);let pe="Ahead";Math.abs(He)>135?pe="Behind":He<-35?pe="Left":He>35&&(pe="Right"),S.textContent=ee?`${pe} \xB7 inbound`:`${pe} \xB7 locking`}function Fe(w){let ee=0,B=null,be=null;for(let dt=ct.length-1;dt>=0;dt-=1){let ce=ct[dt];if(ce.state==="locking"){if(!ce.source||!St.includes(ce.source)){Qt(ce.view),ct.splice(dt,1);continue}ce.x=ce.source.x,ce.y=ce.source.y-.4,ce.z=ce.source.z+.4,ce.timer=Math.max(0,ce.timer-w),(Math.abs(Q.vx)>2.2||Math.abs(Q.vy)>6.2)&&(ce.timer=Math.min(ce.lockDuration,ce.timer+w*.22));let Kt=1-ce.timer/ce.lockDuration;Kt>=ee&&(ee=Kt,B=ce),ce.timer<=0&&ce.pendingLaunch&&de(ce,ce.pendingLaunch);continue}ce.life-=w,Et.set(Q.x-ce.x,Q.y-ce.y,Q.z-ce.z).normalize();let ii=(ce.life>3?2.8:1.2)*(ce.guidanceScale||1);ce.direction.lerp(Et,1-Math.exp(-ii*w)).normalize(),ce.speed=Math.min(31,ce.speed+7*w),ce.x+=ce.direction.x*ce.speed*w,ce.y+=ce.direction.y*ce.speed*w,ce.z+=ce.direction.z*ce.speed*w,ce.view.position.set(ce.x,ce.y,ce.z),ce.view.lookAt(ce.x-ce.direction.x,ce.y-ce.direction.y,ce.z-ce.direction.z),ce.view.userData.flame.scale.y=.8+Math.sin(j*32)*.2,ce.smokeTimer-=w,ce.smokeTimer<=0&&(ce.smokeTimer=ve?.075:.045,Zt(P,"missileSmoke",{position:ce,velocity:{x:-ce.direction.x*1.8,y:-ce.direction.y*1.8,z:-ce.direction.z*1.8}}));let ni=Math.hypot(ce.x-Q.x,ce.y-Q.y,ce.z-Q.z);if(ce.closestDistance=Math.min(ce.closestDistance,ni),!ce.nearMissShown&&ce.closestDistance<3.1&&ce.closestDistance>Q.radius+.35&&ni>ce.lastDistance+.16&&(ce.nearMissShown=!0,Zt(P,"nearMiss",{position:ce,velocity:ce.direction,impulse:.26,roll:st((ce.x-Q.x)/8,-1,1)*.014})),ce.lastDistance=ni,(!be||ni<be.distance)&&(be={missile:ce,distance:ni}),ni<Q.radius+.4){Zt(P,"explosion",{position:ce,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),Zt(P,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),ht("missile strike");return}(ce.life<=0||ce.z>18||Math.abs(ce.x)>22||Math.abs(ce.y)>16)&&(Qt(ce.view),ct.splice(dt,1))}let He=!!be;be&&(B=be.missile);let pe=He?100:Math.round(ee*100);v.hidden=!B,y.style.width=`${pe}%`,y.setAttribute("aria-valuenow",String(pe)),Te(B,He)}function Je(w,ee,B){Et.copy(B).sub(ee);let be=Et.lengthSq();if(!be)return w.distanceTo(ee);let He=st(N.copy(w).sub(ee).dot(Et)/be,0,1);return N.copy(ee).addScaledVector(Et,He).distanceTo(w)}function et(w){for(let ee=vt.length-1;ee>=0;ee-=1){let B=vt[ee];B.previous.set(B.x,B.y,B.z),B.x+=B.velocity.x*w,B.y+=B.velocity.y*w,B.z+=B.velocity.z*w,B.life-=w,B.view.position.set(B.x,B.y,B.z),B.view.rotation.z+=B.spin*w,B.view.rotation.x=Math.sin((1.9-B.life)*B.tumble)*.32,B.view.rotation.y=Math.cos((1.9-B.life)*B.tumble*.74)*.24,B.trailTimer-=w,B.trailTimer<=0&&(B.trailTimer=ve?.06:.035,Zt(P,"projectileTrail",{start:B.previous,end:B.view.position,life:.16,width:.055,color:16770443}));let be=!1;for(let He=ct.length-1;He>=0;He-=1){let pe=ct[He];if(pe.state==="active"&&Je(new C(pe.x,pe.y,pe.z),B.previous,B.view.position)<.62){Zt(P,"explosion",{position:pe,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),Qt(pe.view),ct.splice(He,1),tt("MISSILE DOWN",300),be=!0;break}}if(!be)for(let He=St.length-1;He>=0;He-=1){let pe=St[He];if(Je(new C(pe.x,pe.y,pe.z),B.previous,B.view.position)<1.05*pe.spec.scale){pe.hp-=1,Zt(P,"explosion",{position:pe,count:pe.hp<=0?20:6,scale:pe.hp<=0?1.05:.32,speed:pe.hp<=0?7:4,color:pe.hp<=0?16738866:16769130,impulse:pe.hp<=0?.55:.08}),pe.hp<=0&&Pe(He),be=!0;break}}(be||B.life<=0||B.z<-110)&&(Qt(B.view),vt.splice(ee,1))}}function Pe(w){let ee=St[w];Qt(ee.view),St.splice(w,1);for(let B=ct.length-1;B>=0;B-=1)ct[B].source===ee&&(Qt(ct[B].view),ct.splice(B,1));tt(`${ee.spec.name} DOWN`,ee.spec.score),z.playJetDestroyed?.(st(ee.x/8,-1,1)),Ye=Ae?.04:.15}function tt(w,ee){te+=Math.round(ee*se),se=st(se+.25,1,5),oe=3.4,f.textContent=String(te),m.textContent=`${se.toFixed(2)}\xD7`,Jt(`${w}. ${Math.round(ee*se)} points.`)}function bt(){let w=ca();if(!w||L!=="playing"){A?.classList.remove("is-locked"),D&&(D.textContent="Scanning"),F&&(F.hidden=!0),A&&(A.style.left="50%",A.style.top="50%");return}Et.set(w.x,w.y,w.z).project(le);let ee=st((Et.x*.5+.5)*100,10,90),B=st((-Et.y*.5+.5)*100,16,84);A?.classList.add("is-locked"),A&&(A.style.left=`${ee}%`,A.style.top=`${B}%`),D&&(D.textContent=`${w.spec.name} locked`),F&&(F.hidden=!1,F.textContent=`${Math.max(1,Math.round((Q.z-w.z)*12))} m`)}function ft(w){let ee=ge[Y].speed*.5;er(Ce?.update(w,{speed:ee}));for(let be of Oe.children)be.position.z+=ee*w*.34,be.position.z>18&&(be.position.z-=148);let B=T.geometry.attributes.position;for(let be=2;be<B.array.length;be+=3)B.array[be]+=ee*w*.55,B.array[be]>6&&(B.array[be]-=150);B.needsUpdate=!0}function ot(w){let ee=Ye;Ye=Math.max(0,Ye-w);let B=Ph(P,w,{camera:le,playerPosition:Q,cameraPosition:le.position});Mh(M,w,Q,{camera:le,shake:ee,lookAhead:ve?29:32}),B&&(le.position.x+=B.x,le.position.y+=B.y,le.position.z+=B.z,le.rotateZ(B.roll))}function Ke(w){if(L!=="playing"){L==="ready"?(Q.y=.65+Math.sin(performance.now()/700)*.18,Js(M,w,Q,{active:!1,speed:ge[0].speed}),ft(w*.35),ot(w)):L==="crashing"?(Js(M,w,Q,{active:!1,speed:ge[Y].speed}),ft(w*.45),ot(w)):Ph(P,w,{camera:le,playerPosition:Q,cameraPosition:le?.position}),bt();return}j+=w,re+=w*(1.5+Y*.18),ue=Math.max(0,ue-w),is(),oe-=w,oe<=0&&se>1&&(se=Math.max(1,se-w*.75),m.textContent=`${se.toFixed(2)}\xD7`),W(),O?.update(w,{activeAircraft:St.length,activeMissiles:ct.length,maxAircraft:ge[Y].maxJets,maxMissiles:ge[Y].missileCap,difficulty:Y*.03}),_e(w),Se(w),L==="playing"&&(Fe(w),L==="playing"&&(et(w),ft(w),ot(w),bt(),d.textContent=String(Math.floor(re)),z.update?.(w,{state:L,level:Y,monkey:Q,jets:St,missiles:ct})))}function ht(w){if(L!=="playing")return;L="crashing",u.disabled=!0,k&&(k.disabled=!0),Qe.delete("TouchLift"),O?.stop({clearSchedule:!0}),v.hidden=!0,Ye=Ae?.08:.28,Zt(P,"explosion",{position:Q,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),Zt(P,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),z.playImpact?.(w),z.stopRun?.(w);let ee=Math.floor(re);ee>Be&&(Be=ee,p.textContent=String(Be),localStorage.setItem("monkeyNoFlyBest3D",String(Be))),window.setTimeout(()=>{L="gameover",e.dataset.mode="result",t.textContent="Flight terminated.",i.textContent=`${w}. You survived ${ee} km and scored ${te.toLocaleString()} skill points.`,r&&(r.hidden=!0),s.textContent="Fly Again",Cn(!0),Jt(`Flight terminated by ${w}.`)},Ae?120:650)}function xt(){L==="playing"&&(J=L,L="paused",a.hidden=!1,a.inert=!1,a.setAttribute("aria-hidden","false"),u.disabled=!0,k&&(k.disabled=!0),Qe.delete("TouchLift"),z.setPaused?.(!0),o.focus())}function Ue(){L==="paused"&&(L=J,a.setAttribute("aria-hidden","true"),a.hidden=!0,a.inert=!0,u.disabled=!1,k&&(k.disabled=!1),z.setPaused?.(!1),Ie=performance.now(),n.focus({preventScroll:!0}))}function ze(){let w=z.isMuted?.()||!1;h.setAttribute("aria-pressed",String(w)),h.setAttribute("aria-label",w?"Unmute sound":"Mute sound"),h.title=w?"Unmute sound":"Mute sound",h.querySelector("span").textContent=w?"\u{1F507}":"\u{1F50A}"}function ei(w){w.target.closest("button")||w.pointerType!=="touch"&&($e={x:w.clientX,y:w.clientY,time:performance.now()},L==="playing"&&nr())}function ns(w){if(!$e||L!=="playing"){$e=null;return}let ee=w.clientX-$e.x,B=w.clientY-$e.y;Math.abs(ee)>42&&Math.abs(ee)>Math.abs(B)*1.2&&rr(ee>0?1:-1),$e=null}function In(w){if(L!=="playing"||w.pointerId!==gt)return;let ee=V.getBoundingClientRect(),B=st((w.clientX-ee.left)/Math.max(1,ee.width),0,1);Q.lane=st(Math.round(B*(q.length-1)),0,q.length-1)}function Pn(w){L==="playing"&&(w.preventDefault(),gt=w.pointerId,V.setPointerCapture?.(w.pointerId),In(w))}function ti(w){w.pointerId===gt&&(gt=null)}function hn(w){L==="playing"&&(w.preventDefault(),k.setPointerCapture?.(w.pointerId),Qe.add("TouchLift"),nr())}function pi(w){w.preventDefault(),Qe.delete("TouchLift")}s.addEventListener("click",Rn),c.addEventListener("click",xt),o.addEventListener("click",Ue),l.addEventListener("click",()=>{Ue(),Rn()}),h.addEventListener("click",()=>{z.setMuted?.(!z.isMuted?.()),ze()}),u.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),ha()}),V?.addEventListener("pointerdown",Pn),V?.addEventListener("pointermove",In),V?.addEventListener("pointerup",ti),V?.addEventListener("pointercancel",ti),k?.addEventListener("pointerdown",hn),k?.addEventListener("pointerup",pi),k?.addEventListener("pointercancel",pi),n.addEventListener("pointerdown",ei),n.addEventListener("pointerup",ns),n.addEventListener("pointercancel",()=>{$e=null}),n.addEventListener("webglcontextlost",w=>{w.preventDefault(),L==="playing"&&xt(),Jt("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",ir),window.addEventListener("blur",()=>{L==="playing"&&xt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&L==="playing"&&xt()}),window.addEventListener("keydown",w=>{(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(w.code)||L==="playing"&&w.code==="Enter")&&w.preventDefault(),!(w.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(w.code))&&(Qe.add(w.code),L==="playing"?((w.code==="Space"||w.code==="KeyW"||w.code==="ArrowUp")&&nr(),(w.code==="KeyA"||w.code==="ArrowLeft")&&rr(-1),(w.code==="KeyD"||w.code==="ArrowRight")&&rr(1),(w.code==="Enter"||w.code==="KeyX"||w.code==="KeyF"||w.code==="ShiftLeft")&&ha(),(w.code==="Escape"||w.code==="KeyP")&&xt()):L==="paused"&&(w.code==="Escape"||w.code==="KeyP")&&Ue())}),window.addEventListener("keyup",w=>Qe.delete(w.code));function sr(w){let ee=Math.min(.1,(w-Ie)/1e3);for(Ie=w,xe=ee>.026?xe+1:Math.max(0,xe-2),xe>90&&je>.72&&(je=Math.max(.72,je-.12),xe=0,ap(P,je<.84?"low":"medium",{reducedMotion:Ae}),ir()),Ge+=ee;Ge>=X;)Ke(X),Ge-=X;ie&&ae&&le&&L!=="paused"&&!document.hidden&&ie.render(ae,le),requestAnimationFrame(sr)}n.tabIndex=0,s.disabled=!0,s.textContent="Loading 3D Flight",ze(),oa(),requestAnimationFrame(sr)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
