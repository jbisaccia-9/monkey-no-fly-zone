(()=>{var fd=n=>{throw TypeError(n)};var qm=(n,e,t)=>e.has(n)||fd("Cannot "+t);var md=(n,e,t)=>e.has(n)?fd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var We=(n,e,t)=>(qm(n,e,"access private method"),t);var Zd=0,uh=1,Jd=2;var Fa=1,Kd=2,Bs=3,zs=0,Ti=1,ui=2,Sn=0,Yr=1,Xi=2,dh=3,ph=4,$d=5;var ks=100,Qd=101,ep=102,tp=103,ip=104,np=200,rp=201,sp=202,ap=203,op=204,lp=205,cp=206,hp=207,up=208,dp=209,pp=210,fp=211,mp=212,gp=213,vp=214,fh=0,mh=1,gh=2,Rl=3,vh=4,_h=5,xh=6,yh=7,_p=0,xp=1,yp=2,on=0,Mh=1,Sh=2,bh=3,Zn=4,Eh=5,Th=6,wh=7;var Ah=300,Hs=301,Zr=302,Il=303,Pl=304,Oa=306,zr=1e3,gr=1001,Go=1002,Gi=1003,Mp=1004;var Ba=1005;var Qt=1006,Ll=1007;var ln=1008;var Di=1009,Ch=1010,Rh=1011,Gs=1012,Dl=1013,Jn=1014,qi=1015,bn=1016,Nl=1017,Ul=1018,Vs=1020,Ih=35902,Ph=35899,Sp=1021,bp=1022,cn=1023,Sr=1026,Jr=1027,Fl=1028,Ol=1029,Ws=1030,Lh=1031;var Dh=1033,Bl=33776,zl=33777,kl=33778,Hl=33779,Nh=35840,Uh=35841,Fh=35842,Oh=35843,Bh=36196,zh=37492,kh=37496,Hh=37488,Gh=37489,Vh=37490,Wh=37491,jh=37808,Xh=37809,qh=37810,Yh=37811,Zh=37812,Jh=37813,Kh=37814,$h=37815,Qh=37816,eu=37817,tu=37818,iu=37819,nu=37820,ru=37821,su=36492,au=36494,ou=36495,lu=36283,cu=36284,hu=36285,uu=36286;var ma=2300,Vo=2301,ko=2302,$c=2303,Qc=2400,eh=2401,th=2402;var Ep=0,Tp=1,Kr="",_t="srgb",kr="srgb-linear",ga="linear",gt="srgb";var Br=7680;var wp=512,Ap=513,Cp=514,Gl=515,Rp=516,Ip=517,Vl=518,Pp=519,ih=35044,js=35048;var du="300 es",Gn=2e3,bs=2001;function Ym(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lp(){let n=Es("canvas");return n.style.display="block",n}var gd={},Ts=null;function pu(...n){let e="THREE."+n.shift();Ts?Ts("log",e,...n):console.log(e,...n)}function Dp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Be(...n){let e="THREE."+(n=Dp(n)).shift();if(Ts)Ts("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){let e="THREE."+(n=Dp(n)).shift();if(Ts)Ts("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function va(...n){let e=n.join(" ");e in gd||(gd[e]=!0,Be(...n))}function Np(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Up={[fh]:1,[gh]:6,[vh]:7,[Rl]:5,[mh]:0,[xh]:2,[yh]:4,[_h]:3},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=1234567,Ms=Math.PI/180,ws=180/Math.PI;function $r(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(oi[255&n]+oi[n>>8&255]+oi[n>>16&255]+oi[n>>24&255]+"-"+oi[255&e]+oi[e>>8&255]+"-"+oi[e>>16&15|64]+oi[e>>24&255]+"-"+oi[63&t|128]+oi[t>>8&255]+"-"+oi[t>>16&255]+oi[t>>24&255]+oi[255&i]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function nh(n,e){return(n%e+e)%e}function da(n,e,t){return(1-t)*n+t*e}function ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var fu={DEG2RAD:Ms,RAD2DEG:ws,generateUUID:$r,clamp:nt,euclideanModulo:nh,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:da,damp:function(n,e,t,i){return da(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(nh(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(vd=n);let e=vd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Ms},radToDeg:function(n){return n*ws},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*h,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:xi,denormalize:ys},ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],m=s[a+2],f=s[a+3];if(u!==f||l!==d||c!==p||h!==m){let x=l*d+c*p+h*m+u*f;x<0&&(d=-d,p=-p,m=-m,f=-f,x=-x);let g=1-o;if(x<.9995){let v=Math.acos(x),S=Math.sin(v);g=Math.sin(g*v)/S,l=l*g+d*(o=Math.sin(o*v)/S),c=c*g+p*o,h=h*g+m*o,u=u*g+f*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+m*o,u=u*g+f*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new A,_d=new hi,Ke=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],f=r[0],x=r[3],g=r[6],v=r[1],S=r[4],E=r[7],b=r[2],C=r[5],U=r[8];return s[0]=a*f+o*v+l*b,s[3]=a*x+o*S+l*C,s[6]=a*g+o*E+l*U,s[1]=c*f+h*v+u*b,s[4]=c*x+h*S+u*C,s[7]=c*g+h*E+u*U,s[2]=d*f+p*v+m*b,s[5]=d*x+p*S+m*C,s[8]=d*g+p*E+m*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/m;return e[0]=u*f,e[1]=(r*c-h*i)*f,e[2]=(o*i-r*a)*f,e[3]=d*f,e[4]=(h*t-r*l)*f,e[5]=(r*s-o*t)*f,e[6]=p*f,e[7]=(i*l-c*t)*f,e[8]=(a*t-i*s)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new Ke,xd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zm(){let n={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===gt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?ga:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[kr]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),n}var dt=Zm();function Hn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Ss(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var os,Wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=Es("canvas")),os.width=e.width,os.height=e.height;let r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Hn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Hn(t[i]/255)):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jm=0,As=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wc(r[a].image)):s.push(wc(r[a]))}else s=wc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Km=0,Ac=new A,ci=class n extends Vn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=$r(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Be(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null,ci.DEFAULT_MAPPING=Ah,ci.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],f=l[2],x=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(m+x)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,E=(p+1)/2,b=(g+1)/2,C=(h+d)/4,U=(u+f)/4,F=(m+x)/4;return S>E&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=U/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=F/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=U/s,r=F/s),this.set(i,r,s,t),this}let v=Math.sqrt((x-m)*(x-m)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-m)/v,this.y=(u-f)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends Vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new ci(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new As(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gi,this.minFilter=Gi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gi,this.minFilter=Gi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,m,f,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,m,f,x)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,m,f,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=f,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,f=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,f=c*u;t[0]=d+f*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=f+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,f=c*u;t[0]=d-f*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=f-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,f=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+f,t[1]=l*u,t[5]=f*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,f=o*c;t[0]=l*h,t[4]=f-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-f*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,f=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+f,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=f*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,Qm)}lookAt(e,t,i){let r=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),lr.crossVectors(i,Ai),lr.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),lr.crossVectors(i,Ai)),lr.normalize(),lo.crossVectors(Ai,lr),r[0]=lr.x,r[4]=lo.x,r[8]=Ai.x,r[1]=lr.y,r[5]=lo.y,r[9]=Ai.y,r[2]=lr.z,r[6]=lo.z,r[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],f=i[6],x=i[10],g=i[14],v=i[3],S=i[7],E=i[11],b=i[15],C=r[0],U=r[4],F=r[8],R=r[12],k=r[1],W=r[5],H=r[9],j=r[13],G=r[2],q=r[6],Y=r[10],$=r[14],te=r[3],xe=r[7],Me=r[11],Ce=r[15];return s[0]=a*C+o*k+l*G+c*te,s[4]=a*U+o*W+l*q+c*xe,s[8]=a*F+o*H+l*Y+c*Me,s[12]=a*R+o*j+l*$+c*Ce,s[1]=h*C+u*k+d*G+p*te,s[5]=h*U+u*W+d*q+p*xe,s[9]=h*F+u*H+d*Y+p*Me,s[13]=h*R+u*j+d*$+p*Ce,s[2]=m*C+f*k+x*G+g*te,s[6]=m*U+f*W+x*q+g*xe,s[10]=m*F+f*H+x*Y+g*Me,s[14]=m*R+f*j+x*$+g*Ce,s[3]=v*C+S*k+E*G+b*te,s[7]=v*U+S*W+E*q+b*xe,s[11]=v*F+S*H+E*Y+b*Me,s[15]=v*R+S*j+E*$+b*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],f=e[7],x=e[11],g=e[15],v=l*p-c*d,S=o*p-c*u,E=o*d-l*u,b=a*p-c*h,C=a*d-l*h,U=a*u-o*h;return t*(f*v-x*S+g*E)-i*(m*v-x*b+g*C)+r*(m*S-f*b+g*U)-s*(m*E-f*C+x*U)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],f=e[13],x=e[14],g=e[15],v=t*o-i*a,S=t*l-r*a,E=t*c-s*a,b=i*l-r*o,C=i*c-s*o,U=r*c-s*l,F=h*f-u*m,R=h*x-d*m,k=h*g-p*m,W=u*x-d*f,H=u*g-p*f,j=d*g-p*x,G=v*j-S*H+E*W+b*k-C*R+U*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/G;return e[0]=(o*j-l*H+c*W)*q,e[1]=(r*H-i*j-s*W)*q,e[2]=(f*U-x*C+g*b)*q,e[3]=(d*C-u*U-p*b)*q,e[4]=(l*k-a*j-c*R)*q,e[5]=(t*j-r*k+s*R)*q,e[6]=(x*E-m*U-g*S)*q,e[7]=(h*U-d*E+p*S)*q,e[8]=(a*H-o*k+c*F)*q,e[9]=(i*k-t*H-s*F)*q,e[10]=(m*C-f*E+g*v)*q,e[11]=(u*E-h*C-p*v)*q,e[12]=(o*R-a*W-l*F)*q,e[13]=(t*W-i*R+r*F)*q,e[14]=(f*S-m*b-x*v)*q,e[15]=(h*b-u*S+d*v)*q,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,f=a*h,x=a*u,g=o*u,v=l*c,S=l*h,E=l*u,b=i.x,C=i.y,U=i.z;return r[0]=(1-(f+g))*b,r[1]=(p+E)*b,r[2]=(m-S)*b,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+g))*C,r[6]=(x+v)*C,r[7]=0,r[8]=(m+S)*U,r[9]=(x-v)*U,r[10]=(1-(d+f))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ls.set(r[0],r[1],r[2]).length(),o=ls.set(r[4],r[5],r[6]).length(),l=ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),tn.copy(this);let c=1/a,h=1/o,u=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),m,f;if(l)m=s/(a-s),f=a*s/(a-s);else if(o===Gn)m=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==bs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),f=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),m,f;if(l)m=1/(a-s),f=a/(a-s);else if(o===Gn)m=-2/(a-s),f=-(a+s)/(a-s);else{if(o!==bs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),f=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ls=new A,tn=new Ze,$m=new A(0,0,0),Qm=new A(1,1,1),lr=new A,lo=new A,Ai=new A,Md=new Ze,Sd=new hi,sn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},eg=0,bd=new A,cs=new hi,Un=new Ze,co=new A,ra=new A,tg=new A,ig=new hi,Ed=new A(1,0,0),Td=new A(0,1,0),wd=new A(0,0,1),Ad={type:"added"},ng={type:"removed"},hs={type:"childadded",child:null},Cc={type:"childremoved",child:null},jt=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new sn,i=new hi,r=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Ed,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(wd,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ed,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?co.copy(e):co.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ra,co,this.up):Un.lookAt(co,ra,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Un),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),hs.child=e,this.dispatchEvent(hs),hs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};jt.DEFAULT_UP=new A(0,1,0),jt.DEFAULT_MATRIX_AUTO_UPDATE=!0,jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rg={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let f of e.hand.values()){let x=t.getJointPose(f,i),g=this._getHandJoint(c,f);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=nh(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Rc(a,s,e+1/3),this.g=Rc(a,s,e),this.b=Rc(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=Fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return dt.workingToColorSpace(li.copy(this),e),65536*Math.round(nt(255*li.r,0,255))+256*Math.round(nt(255*li.g,0,255))+Math.round(nt(255*li.b,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(li.copy(this),t);let i=li.r,r=li.g,s=li.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=_t){dt.workingToColorSpace(li.copy(this),e);let t=li.r,i=li.g,r=li.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(ho);let i=da(cr.h,ho.h,t),r=da(cr.s,ho.s,t),s=da(cr.l,ho.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new Ae;Ae.NAMES=Fp;var Wn=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var jn=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nn=new A,Fn=new A,Ic=new A,On=new A,us=new A,ds=new A,Cd=new A,Pc=new A,Lc=new A,Dc=new A,Nc=new Tt,Uc=new Tt,Fc=new Tt,kn=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Fn.subVectors(i,t),Ic.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(Fn),l=nn.dot(Ic),c=Fn.dot(Fn),h=Fn.dot(Ic),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)!==null&&On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Nc.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Nc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,i),Fc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nc,s.x),a.addScaledVector(Uc,s.y),a.addScaledVector(Fc,s.z),a}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Fn.subVectors(e,t),nn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),.5*nn.cross(Fn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;us.subVectors(r,i),ds.subVectors(s,i),Pc.subVectors(e,i);let l=us.dot(Pc),c=ds.dot(Pc);if(l<=0&&c<=0)return t.copy(i);Lc.subVectors(e,r);let h=us.dot(Lc),u=ds.dot(Lc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(us,a);Dc.subVectors(e,s);let p=us.dot(Dc),m=ds.dot(Dc);if(m>=0&&p<=m)return t.copy(s);let f=p*c-l*m;if(f<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(ds,o);let x=h*m-p*u;if(x<=0&&u-h>=0&&p-m>=0)return Cd.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(Cd,o);let g=1/(x+f+d);return a=f*g,o=d*g,t.copy(i).addScaledVector(us,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),po.subVectors(this.max,sa),ps.subVectors(e.a,sa),fs.subVectors(e.b,sa),ms.subVectors(e.c,sa),hr.subVectors(fs,ps),ur.subVectors(ms,fs),Nr.subVectors(ps,ms);let t=[0,-hr.z,hr.y,0,-ur.z,ur.y,0,-Nr.z,Nr.y,hr.z,0,-hr.x,ur.z,0,-ur.x,Nr.z,0,-Nr.x,-hr.y,hr.x,0,-ur.y,ur.x,0,-Nr.y,Nr.x,0];return!!Oc(t,ps,fs,ms,po)&&(t=[1,0,0,0,1,0,0,0,1],!!Oc(t,ps,fs,ms,po)&&(fo.crossVectors(hr,ur),t=[fo.x,fo.y,fo.z],Oc(t,ps,fs,ms,po)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(rn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new A,new A,new A,new A,new A,new A,new A,new A],rn=new A,uo=new Vi,ps=new A,fs=new A,ms=new A,hr=new A,ur=new A,Nr=new A,sa=new A,po=new A,fo=new A,Ur=new A;function Oc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ur.fromArray(n,s);let o=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),h=i.dot(Ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var f_=sg();function sg(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Wt=new A,mo=new ue,ag=0,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),i=xi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),i=xi(i,this.array),r=xi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),i=xi(i,this.array),r=xi(r,this.array),s=xi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ih&&(e.usage=this.usage),e}};var ya=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ma=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ze=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},og=new Vi,aa=new A,Bc=new A,Wi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):og.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Bc)),this.expandByPoint(aa.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lg=0,Hi=new Ze,zc=new jt,gs=new A,Ci=new Vi,oa=new Vi,$t=new A,ut=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Ma:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,i){return Hi.makeTranslation(e,t,i),this.applyMatrix4(Hi),this}scale(e,t,i){return Hi.makeScale(e,t,i),this.applyMatrix4(Hi),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Ci.min,oa.min),Ci.expandByPoint($t),$t.addVectors(Ci.max,oa.max),Ci.expandByPoint($t)):(Ci.expandByPoint(oa.min),Ci.expandByPoint(oa.max))}Ci.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),$t.add(gs)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new A,l[F]=new A;let c=new A,h=new A,u=new A,d=new ue,p=new ue,m=new ue,f=new A,x=new A;function g(F,R,k){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,k),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,k),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let W=1/(p.x*m.y-m.x*p.y);isFinite(W)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(W),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(W),o[F].add(f),o[R].add(f),o[k].add(f),l[F].add(x),l[R].add(x),l[k].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,R=v.length;F<R;++F){let k=v[F],W=k.start;for(let H=W,j=W+k.count;H<j;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new A,E=new A,b=new A,C=new A;function U(F){b.fromBufferAttribute(r,F),C.copy(b);let R=o[F];S.copy(R),S.sub(b.multiplyScalar(b.dot(R))).normalize(),E.crossVectors(C,R);let k=E.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,k)}for(let F=0,R=v.length;F<R;++F){let k=v[F],W=k.start;for(let H=W,j=W+k.count;H<j;H+=3)U(e.getX(H+0)),U(e.getX(H+1)),U(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),f=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,f),a.fromBufferAttribute(t,x),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let f=0,x=l.length;f<x;f++){p=o.isInterleavedBufferAttribute?l[f]*o.data.stride+o.offset:l[f]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new It(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var m_=new A;var cg=0,xn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Be(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var g_=new A,v_=new A,__=new A,x_=new ue,y_=new ue,M_=new Ze,S_=new A,b_=new A,E_=new A,T_=new ue,w_=new ue,A_=new ue;var C_=new A,R_=new A;var zn=new A,kc=new A,go=new A,dr=new A,Hc=new A,vo=new A,Gc=new A,Hr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kc.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(kc);let s=.5*e.distanceTo(t),a=-this.direction.dot(go),o=dr.dot(this.direction),l=-dr.dot(go),c=dr.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let f=1/h;u*=f,d*=f,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(kc).addScaledVector(go,d),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);let i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){Hc.subVectors(t,e),vo.subVectors(i,e),Gc.crossVectors(Hc,vo);let a,o=this.direction.dot(Gc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}dr.subVectors(this.origin,e);let l=a*this.direction.dot(vo.crossVectors(dr,vo));if(l<0)return null;let c=a*this.direction.dot(Hc.cross(dr));if(c<0||l+c>o)return null;let h=-a*dr.dot(Gc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rd=new Ze,Fr=new Hr,_o=new Wi,Id=new A,xo=new A,yo=new A,Mo=new A,Vc=new A,So=new A,Pd=new A,bo=new A,Ee=class extends jt{constructor(e=new ut,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Vc.fromBufferAttribute(u,e),a?So.addScaledVector(Vc,h):So.addScaledVector(Vc.sub(t),h))}t.add(So)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),_o.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(_o,Id)===null||Fr.origin.distanceToSquared(Id)>(e.far-e.near)**2))return;Rd.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Rd),i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Fr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,f=d.length;m<f;m++){let x=d[m],g=a[x.materialIndex];for(let v=Math.max(x.start,p.start),S=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));v<S;v+=3)r=Eo(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),f=Math.min(o.count,p.start+p.count);m<f;m+=3)r=Eo(this,a,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,f=d.length;m<f;m++){let x=d[m],g=a[x.materialIndex];for(let v=Math.max(x.start,p.start),S=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));v<S;v+=3)r=Eo(this,g,e,i,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),f=Math.min(l.count,p.start+p.count);m<f;m+=3)r=Eo(this,a,e,i,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function Eo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xo),n.getVertexPosition(l,yo),n.getVertexPosition(c,Mo);let h=(function(u,d,p,m,f,x,g,v){let S;if(S=d.side===1?m.intersectTriangle(g,x,f,!0,v):m.intersectTriangle(f,x,g,d.side===0,v),S===null)return null;bo.copy(v),bo.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(bo);return E<p.near||E>p.far?null:{distance:E,point:bo.clone(),object:u}})(n,e,t,i,xo,yo,Mo,Pd);if(h){let u=new A;kn.getBarycoord(Pd,xo,yo,Mo,u),r&&(h.uv=kn.getInterpolatedAttribute(r,o,l,c,u,new ue)),s&&(h.uv1=kn.getInterpolatedAttribute(s,o,l,c,u,new ue)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};kn.getNormal(xo,yo,Mo,d.normal),h.face=d,h.barycoord=u}return h}var I_=new A,P_=new Tt,L_=new Tt,D_=new A,N_=new Ze,U_=new A,F_=new Wi,O_=new Ze,B_=new Hr;var Gr=class extends ci{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},z_=new Ze,k_=new Ze;var Sa=class extends It{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new Ze,Ld=new Ze,To=[],Dd=new Vi,hg=new Ze,la=new Ee,ca=new Wi,Vr=class extends Ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,hg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Dd.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),ca.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),e.ray.intersectsSphere(ca)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),Ld.multiplyMatrices(i,vs),la.matrixWorld=Ld,la.raycast(e,To);for(let a=0,o=To.length;a<o;a++){let l=To[a];l.instanceId=s,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(r*this.count),r,this.count,Fl,qi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wc=new A,ug=new A,dg=new Ke,vn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Wc.subVectors(i,t).cross(ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dg.getNormalMatrix(e),r=this.coplanarPoint(Wc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new Wi,pg=new ue(.5,.5),wo=new A,vr=class{constructor(e=new vn,t=new vn,i=new vn,r=new vn,s=new vn,a=new vn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],m=s[8],f=s[9],x=s[10],g=s[11],v=s[12],S=s[13],E=s[14],b=s[15];if(r[0].setComponents(c-a,p-h,g-m,b-v).normalize(),r[1].setComponents(c+a,p+h,g+m,b+v).normalize(),r[2].setComponents(c+o,p+u,g+f,b+S).normalize(),r[3].setComponents(c-o,p-u,g-f,b-S).normalize(),i)r[4].setComponents(l,d,x,E).normalize(),r[5].setComponents(c-l,p-d,g-x,b-E).normalize();else if(r[4].setComponents(c-l,p-d,g-x,b-E).normalize(),t===Gn)r[5].setComponents(c+l,p+d,g+x,b+E).normalize();else{if(t!==bs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,x,E).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);let t=pg.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fn=new Ze,mn=new vr,qo=class n{constructor(){this.coordinateSystem=Gn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(fn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),mn.setFromProjectionMatrix(fn,r.coordinateSystem,r.reversedDepth),mn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(fn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),mn.setFromProjectionMatrix(fn,r.coordinateSystem,r.reversedDepth),mn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(fn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),mn.setFromProjectionMatrix(fn,r.coordinateSystem,r.reversedDepth),mn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(fn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),mn.setFromProjectionMatrix(fn,r.coordinateSystem,r.reversedDepth),mn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(fn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),mn.setFromProjectionMatrix(fn,r.coordinateSystem,r.reversedDepth),mn.containsPoint(e))return!0}return!1}clone(){return new n}};var rh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},H_=new Ze,G_=new Ae(1,1,1),V_=new vr,W_=new qo,j_=new Vi,X_=new Wi,q_=new A,Y_=new A,Z_=new A,J_=new rh,K_=new Ee;var Rs=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yo=new A,Zo=new A,Nd=new Ze,ha=new Hr,Ao=new Wi,jc=new A,Ud=new A,ba=class extends jt{constructor(e=new ut,t=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Yo.fromBufferAttribute(t,r-1),Zo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Yo.distanceTo(Zo);e.setAttribute("lineDistance",new ze(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;Nd.copy(r).invert(),ha.copy(e.ray).applyMatrix4(Nd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,f=p-1;m<f;m+=c){let x=h.getX(m),g=h.getX(m+1),v=Co(this,e,ha,l,x,g,m);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),f=h.getX(d),x=Co(this,e,ha,l,m,f,p-1);x&&t.push(x)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,f=p-1;m<f;m+=c){let x=Co(this,e,ha,l,m,m+1,m);x&&t.push(x)}if(this.isLineLoop){let m=Co(this,e,ha,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Co(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Yo.fromBufferAttribute(o,r),Zo.fromBufferAttribute(o,s),t.distanceSqToSegment(Yo,Zo,jc,Ud)>i)return;jc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(jc);return l<e.near||l>e.far?void 0:{distance:l,point:Ud.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var $_=new A,Q_=new A;var yn=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fd=new Ze,sh=new Hr,Ro=new Wi,Io=new A,Xn=class extends jt{constructor(e=new ut,t=new yn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Fd.copy(r).invert(),sh.copy(e.ray).applyMatrix4(Fd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Io.fromBufferAttribute(h,p),Od(Io,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Io.fromBufferAttribute(h,u),Od(Io,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Od(n,e,t,i,r,s,a){let o=sh.distanceSqToPoint(n);if(o<t){let l=new A;sh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ea=class extends ci{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mn=class extends ci{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_r=class extends ci{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Sr&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jo=class extends _r{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class n extends ut{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(f,x,g,v,S,E,b,C,U,F,R){let k=E/U,W=b/F,H=E/2,j=b/2,G=C/2,q=U+1,Y=F+1,$=0,te=0,xe=new A;for(let Me=0;Me<Y;Me++){let Ce=Me*W-j;for(let be=0;be<q;be++){let re=be*k-H;xe[f]=re*v,xe[x]=Ce*S,xe[g]=G,c.push(xe.x,xe.y,xe.z),xe[f]=0,xe[x]=0,xe[g]=C>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(be/U),u.push(1-Me/F),$+=1}}for(let Me=0;Me<F;Me++)for(let Ce=0;Ce<U;Ce++){let be=d+Ce+q*Me,re=d+Ce+q*(Me+1),fe=d+(Ce+1)+q*(Me+1),me=d+(Ce+1)+q*Me;l.push(be,re,me),l.push(re,fe,me),te+=6}o.addGroup(p,te,R),p+=te,d+=$}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ko=class n extends ut{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*i+s,f=r+1,x=new A,g=new A;for(let v=0;v<=m;v++){let S=0,E=0,b=0,C=0;if(v<=i){let R=v/i,k=R*Math.PI/2;E=-h-e*Math.cos(k),b=e*Math.sin(k),C=-e*Math.cos(k),S=R*u}else if(v<=i+s){let R=(v-i)/s;E=R*t-h,b=e,C=0,S=u+R*d}else{let R=(v-i-s)/i,k=R*Math.PI/2;E=h+e*Math.sin(k),b=e*Math.cos(k),C=e*Math.sin(k),S=u+d+R*u}let U=Math.max(0,Math.min(1,S/p)),F=0;v===0?F=.5/r:v===m&&(F=-.5/r);for(let R=0;R<=r;R++){let k=R/r,W=k*Math.PI*2,H=Math.sin(W),j=Math.cos(W);g.x=-b*j,g.y=E,g.z=b*H,o.push(g.x,g.y,g.z),x.set(-b*j,C,b*H),x.normalize(),l.push(x.x,x.y,x.z),c.push(k+F,U)}if(v>0){let R=(v-1)*f;for(let k=0;k<r;k++){let W=R+k,H=R+k+1,j=v*f+k,G=v*f+k+1;a.push(W,H,j),a.push(H,G,j)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},$o=class n extends ut{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class n extends ut{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,f=[],x=i/2,g=0;function v(S){let E=m,b=new ue,C=new A,U=0,F=S===!0?e:t,R=S===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,x*R,0),d.push(0,R,0),p.push(.5,.5),m++;let k=m;for(let W=0;W<=r;W++){let H=W/r*l+o,j=Math.cos(H),G=Math.sin(H);C.x=F*G,C.y=x*R,C.z=F*j,u.push(C.x,C.y,C.z),d.push(0,R,0),b.x=.5*j+.5,b.y=.5*G*R+.5,p.push(b.x,b.y),m++}for(let W=0;W<r;W++){let H=E+W,j=k+W;S===!0?h.push(j,j+1,H):h.push(j+1,j,H),U+=3}c.addGroup(g,U,S===!0?1:2),g+=U}(function(){let S=new A,E=new A,b=0,C=(t-e)/i;for(let U=0;U<=s;U++){let F=[],R=U/s,k=R*(t-e)+e;for(let W=0;W<=r;W++){let H=W/r,j=H*l+o,G=Math.sin(j),q=Math.cos(j);E.x=k*G,E.y=-R*i+x,E.z=k*q,u.push(E.x,E.y,E.z),S.set(G,C,q).normalize(),d.push(S.x,S.y,S.z),p.push(H,1-R),F.push(m++)}f.push(F)}for(let U=0;U<r;U++)for(let F=0;F<s;F++){let R=f[F][U],k=f[F+1][U],W=f[F+1][U+1],H=f[F][U+1];(e>0||F!==0)&&(h.push(R,k,H),b+=3),(t>0||F!==s-1)&&(h.push(k,W,H),b+=3)}c.addGroup(g,b,0),g+=b})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},an=class n extends Nt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xr=class n extends ut{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,m,f,x){let g=x+1,v=[];for(let S=0;S<=g;S++){v[S]=[];let E=p.clone().lerp(f,S/g),b=m.clone().lerp(f,S/g),C=g-S;for(let U=0;U<=C;U++)v[S][U]=U===0&&S===g?E:E.clone().lerp(b,U/C)}for(let S=0;S<g;S++)for(let E=0;E<2*(g-S)-1;E++){let b=Math.floor(E/2);E%2==0?(l(v[S][b+1]),l(v[S+1][b]),l(v[S][b])):(l(v[S][b+1]),l(v[S+1][b+1]),l(v[S+1][b]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,m){let f=3*p;m.x=e[f+0],m.y=e[f+1],m.z=e[f+2]}function h(p,m,f,x){x<0&&p.x===1&&(a[m]=p.x-1),f.x===0&&f.z===0&&(a[m]=x/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new A,f=new A,x=new A;for(let g=0;g<t.length;g+=3)c(t[g+0],m),c(t[g+1],f),c(t[g+2],x),o(m,f,x,p)})(r),(function(p){let m=new A;for(let f=0;f<s.length;f+=3)m.x=s[f+0],m.y=s[f+1],m.z=s[f+2],m.normalize().multiplyScalar(p),s[f+0]=m.x,s[f+1]=m.y,s[f+2]=m.z})(i),(function(){let p=new A;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let f=u(p)/2/Math.PI+.5,x=d(p)/Math.PI+.5;a.push(f,1-x)}(function(){let m=new A,f=new A,x=new A,g=new A,v=new ue,S=new ue,E=new ue;for(let b=0,C=0;b<s.length;b+=9,C+=6){m.set(s[b+0],s[b+1],s[b+2]),f.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),v.set(a[C+0],a[C+1]),S.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),g.copy(m).add(f).add(x).divideScalar(3);let U=u(g);h(v,C+0,m,U),h(S,C+2,f,U),h(E,C+4,x,U)}})(),(function(){for(let m=0;m<a.length;m+=6){let f=a[m+0],x=a[m+2],g=a[m+4],v=Math.max(f,x,g),S=Math.min(f,x,g);v>.9&&S<.1&&(f<.2&&(a[m+0]+=1),x<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Qo=class n extends xr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Po=new A,Lo=new A,Xc=new A,Do=new kn,el=class extends ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ms*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:f,b:x,c:g}=Do;if(f.fromBufferAttribute(o,c[0]),x.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Do.getNormal(Xc),u[0]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let S=(v+1)%3,E=u[v],b=u[S],C=Do[h[v]],U=Do[h[S]],F=`${E}_${b}`,R=`${b}_${E}`;R in d&&d[R]?(Xc.dot(d[R].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(U.x,U.y,U.z)),d[R]=null):F in d||(d[F]={index0:c[v],index1:c[S],normal:Xc.clone()})}}for(let m in d)if(d[m]){let{index0:f,index1:x}=d[m];Po.fromBufferAttribute(o,f),Lo.fromBufferAttribute(o,x),p.push(Po.x,Po.y,Po.z),p.push(Lo.x,Lo.y,Lo.z)}this.setAttribute("position",new ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ue:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,r=[],s=[],a=[],o=new A,l=new Ze;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(nt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(nt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Is=class extends Pi{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends Is{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var No=new A,qc=new mu,Yc=new mu,Zc=new mu,yr=class extends Pi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(No.subVectors(r[0],r[1]).add(r[0]),o=No);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(No.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=No),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(l),p);f<1e-4&&(f=1),m<1e-4&&(m=f),x<1e-4&&(x=f),qc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,f,x),Yc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,f,x),Zc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,f,x)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Yc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Zc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(qc.calc(h),Yc.calc(h),Zc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bd(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function pa(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function fa(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var wa=class extends Pi{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(fa(e,r.x,s.x,a.x,o.x),fa(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends Pi{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(fa(e,r.x,s.x,a.x,o.x),fa(e,r.y,s.y,a.y,o.y),fa(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Pi{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends Pi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Pi{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(pa(e,r.x,s.x,a.x),pa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Pi{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(pa(e,r.x,s.x,a.x),pa(e,r.y,s.y,a.y),pa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Bd(o,l.x,c.x,h.x,u.x),Bd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},rl=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:yr,CubicBezierCurve:wa,CubicBezierCurve3:il,EllipseCurve:Is,LineCurve:Aa,LineCurve3:nl,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Ra,SplineCurve:Ia}),sl=class extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new rl[r.type]().fromJSON(r))}return this}},Pa=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ca(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new wa(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ia(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Is(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wr=class extends Pa{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Pa().fromJSON(r))}return this}};function fg(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=zd(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let m=[];for(let f=0,x=u.length;f<x;f++){let g=zd(h,u[f]*p,f<x-1?u[f+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),m.push(Sg(g))}m.sort(xg);for(let f=0;f<m.length;f++)d=yg(m[f],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],m=n[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return La(s,a,t,o,l,c,0),a}function zd(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=kd(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=kd(a/i|0,n[a],n[a+1],s);return s&&Ps(s,s.next)&&(Na(s),s=s.next),s}function jr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Ps(i,i.next)&&Rt(i.prev,i,i.next)!==0)i=i.next;else{if(Na(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function La(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=ah(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,f=1;do{let x,g=p;p=null;let v=null;for(m=0;g;){m++;let S=g,E=0;for(let C=0;C<f&&(E++,S=S.nextZ,S);C++);let b=f;for(;E>0||b>0&&S;)E!==0&&(b===0||!S||g.z<=S.z)?(x=g,g=g.nextZ,E--):(x=S,S=S.nextZ,b--),v?v.nextZ=x:p=x,x.prevZ=v,v=x;g=S}v.nextZ=null,f*=2}while(m>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?gg(n,i,r,s):mg(n))e.push(l.i,n.i,c.i),Na(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?La(n=vg(jr(n),e),e,t,i,r,s,2):a===2&&_g(n,e,t,i,r,s):La(jr(n),e,t,i,r,s,1);break}}}function mg(n){let e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ua(r,o,s,l,a,c,m.x,m.y)&&Rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gg(n,e,t,i){let r=n.prev,s=n,a=n.next;if(Rt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),f=Math.max(o,l,c),x=Math.max(h,u,d),g=ah(p,m,e,t,i),v=ah(f,x,e,t,i),S=n.prevZ,E=n.nextZ;for(;S&&S.z>=g&&E&&E.z<=v;){if(S.x>=p&&S.x<=f&&S.y>=m&&S.y<=x&&S!==r&&S!==a&&ua(o,h,l,u,c,d,S.x,S.y)&&Rt(S.prev,S,S.next)>=0||(S=S.prevZ,E.x>=p&&E.x<=f&&E.y>=m&&E.y<=x&&E!==r&&E!==a&&ua(o,h,l,u,c,d,E.x,E.y)&&Rt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;S&&S.z>=g;){if(S.x>=p&&S.x<=f&&S.y>=m&&S.y<=x&&S!==r&&S!==a&&ua(o,h,l,u,c,d,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=f&&E.y>=m&&E.y<=x&&E!==r&&E!==a&&ua(o,h,l,u,c,d,E.x,E.y)&&Rt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function vg(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Ps(i,r)&&Bp(i,t,t.next,r)&&Da(i,r)&&Da(r,i)&&(e.push(i.i,t.i,r.i),Na(t),Na(t.next),t=n=r),t=t.next}while(t!==n);return jr(t)}function _g(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bg(a,o)){let l=zp(a,o);return a=jr(a,a.next),l=jr(l,l.next),La(a,e,t,i,r,s,0),void La(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function xg(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function yg(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(Ps(r,a))return a;do{if(Ps(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let f=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(f<=o&&f>h&&(h=f,c=a.x<a.next.x?a:a.next,f===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,m=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Op(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let f=Math.abs(l-a.y)/(o-a.x);Da(a,r)&&(f<m||f===m&&(a.x>c.x||a.x===c.x&&Mg(c,a)))&&(c=a,m=f)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=zp(t,n);return jr(i,i.next),jr(t,t.next)}function Mg(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function ah(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Sg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Op(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function ua(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Op(n,e,t,i,r,s,a,o)}function bg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Bp(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Da(n,e)&&Da(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||Ps(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ps(n,e){return n.x===e.x&&n.y===e.y}function Bp(n,e,t,i){let r=Fo(Rt(n,e,t)),s=Fo(Rt(n,e,i)),a=Fo(Rt(t,i,n)),o=Fo(Rt(t,i,e));return r!==s&&a!==o||!(r!==0||!Uo(n,t,e))||!(s!==0||!Uo(n,i,e))||!(a!==0||!Uo(t,n,i))||!(o!==0||!Uo(t,e,i))}function Uo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fo(n){return n>0?1:n<0?-1:0}function Da(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function zp(n,e){let t=oh(n.i,n.x,n.y),i=oh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function kd(n,e,t,i){let r=oh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function oh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var lh=class{static triangulate(e,t,i=2){return fg(e,t,i)}},_n=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Hd(e),Gd(i,e);let a=e.length;t.forEach(Hd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Gd(i,t[l]);let o=lh.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Hd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Gd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ls=class n extends ut{constructor(e=new Wr([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Eg,S,E,b,C,U,F=!1;if(g){S=g.getSpacedPoints(h),F=!0,d=!1;let N=!!g.isCatmullRomCurve3&&g.closed;E=g.computeFrenetFrames(h,N),b=new A,C=new A,U=new A}d||(x=0,p=0,m=0,f=0);let R=o.extractPoints(c),k=R.shape,W=R.holes;if(!_n.isClockWise(k)){k=k.reverse();for(let N=0,y=W.length;N<y;N++){let P=W[N];_n.isClockWise(P)&&(W[N]=P.reverse())}}function H(N){let y=10000000000000001e-36,P=N[0];for(let O=1;O<=N.length;O++){let B=O%N.length,J=N[B],ee=J.x-P.x,Z=J.y-P.y,se=ee*ee+Z*Z,ie=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(P.x),Math.abs(P.y));se<=y*ie*ie?(N.splice(B,1),O--):P=J}}H(k),W.forEach(H);let j=W.length,G=k;for(let N=0;N<j;N++){let y=W[N];k=k.concat(y)}function q(N,y,P){return y||He("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(y,P)}let Y=k.length;function $(N,y,P){let O,B,J,ee=N.x-y.x,Z=N.y-y.y,se=P.x-N.x,ie=P.y-N.y,oe=ee*ee+Z*Z,ce=ee*ie-Z*se;if(Math.abs(ce)>Number.EPSILON){let ge=Math.sqrt(oe),Oe=Math.sqrt(se*se+ie*ie),Je=y.x-Z/ge,lt=y.y+ee/ge,$e=((P.x-ie/Oe-Je)*ie-(P.y+se/Oe-lt)*se)/(ee*ie-Z*se);O=Je+ee*$e-N.x,B=lt+Z*$e-N.y;let Te=O*O+B*B;if(Te<=2)return new ue(O,B);J=Math.sqrt(Te/2)}else{let ge=!1;ee>Number.EPSILON?se>Number.EPSILON&&(ge=!0):ee<-Number.EPSILON?se<-Number.EPSILON&&(ge=!0):Math.sign(Z)===Math.sign(ie)&&(ge=!0),ge?(O=-Z,B=ee,J=Math.sqrt(oe)):(O=ee,B=Z,J=Math.sqrt(oe/2))}return new ue(O/J,B/J)}let te=[];for(let N=0,y=G.length,P=y-1,O=N+1;N<y;N++,P++,O++)P===y&&(P=0),O===y&&(O=0),te[N]=$(G[N],G[P],G[O]);let xe=[],Me,Ce,be=te.concat();for(let N=0,y=j;N<y;N++){let P=W[N];Me=[];for(let O=0,B=P.length,J=B-1,ee=O+1;O<B;O++,J++,ee++)J===B&&(J=0),ee===B&&(ee=0),Me[O]=$(P[O],P[J],P[ee]);xe.push(Me),be=be.concat(Me)}if(x===0)Ce=_n.triangulateShape(G,W);else{let N=[],y=[];for(let P=0;P<x;P++){let O=P/x,B=p*Math.cos(O*Math.PI/2),J=m*Math.sin(O*Math.PI/2)+f;for(let ee=0,Z=G.length;ee<Z;ee++){let se=q(G[ee],te[ee],J);De(se.x,se.y,-B),O===0&&N.push(se)}for(let ee=0,Z=j;ee<Z;ee++){let se=W[ee];Me=xe[ee];let ie=[];for(let oe=0,ce=se.length;oe<ce;oe++){let ge=q(se[oe],Me[oe],J);De(ge.x,ge.y,-B),O===0&&ie.push(ge)}O===0&&y.push(ie)}}Ce=_n.triangulateShape(N,y)}let re=Ce.length,fe=m+f;for(let N=0;N<Y;N++){let y=d?q(k[N],be[N],fe):k[N];F?(C.copy(E.normals[0]).multiplyScalar(y.x),b.copy(E.binormals[0]).multiplyScalar(y.y),U.copy(S[0]).add(C).add(b),De(U.x,U.y,U.z)):De(y.x,y.y,0)}for(let N=1;N<=h;N++)for(let y=0;y<Y;y++){let P=d?q(k[y],be[y],fe):k[y];F?(C.copy(E.normals[N]).multiplyScalar(P.x),b.copy(E.binormals[N]).multiplyScalar(P.y),U.copy(S[N]).add(C).add(b),De(U.x,U.y,U.z)):De(P.x,P.y,u/h*N)}for(let N=x-1;N>=0;N--){let y=N/x,P=p*Math.cos(y*Math.PI/2),O=m*Math.sin(y*Math.PI/2)+f;for(let B=0,J=G.length;B<J;B++){let ee=q(G[B],te[B],O);De(ee.x,ee.y,u+P)}for(let B=0,J=W.length;B<J;B++){let ee=W[B];Me=xe[B];for(let Z=0,se=ee.length;Z<se;Z++){let ie=q(ee[Z],Me[Z],O);F?De(ie.x,ie.y+S[h-1].y,S[h-1].x+P):De(ie.x,ie.y,u+P)}}}function me(N,y){let P=N.length;for(;--P>=0;){let O=P,B=P-1;B<0&&(B=N.length-1);for(let J=0,ee=h+2*x;J<ee;J++){let Z=Y*J,se=Y*(J+1);T(y+O+Z,y+B+Z,y+B+se,y+O+se)}}}function De(N,y,P){l.push(N),l.push(y),l.push(P)}function Ge(N,y,P){M(N),M(y),M(P);let O=r.length/3,B=v.generateTopUV(i,r,O-3,O-2,O-1);D(B[0]),D(B[1]),D(B[2])}function T(N,y,P,O){M(N),M(y),M(O),M(y),M(P),M(O);let B=r.length/3,J=v.generateSideWallUV(i,r,B-6,B-3,B-2,B-1);D(J[0]),D(J[1]),D(J[3]),D(J[1]),D(J[2]),D(J[3])}function M(N){r.push(l[3*N+0]),r.push(l[3*N+1]),r.push(l[3*N+2])}function D(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(d){let y=0,P=Y*y;for(let O=0;O<re;O++){let B=Ce[O];Ge(B[2]+P,B[1]+P,B[0]+P)}y=h+2*x,P=Y*y;for(let O=0;O<re;O++){let B=Ce[O];Ge(B[0]+P,B[1]+P,B[2]+P)}}else{for(let y=0;y<re;y++){let P=Ce[y];Ge(P[2],P[1],P[0])}for(let y=0;y<re;y++){let P=Ce[y];Ge(P[0]+Y*h,P[1]+Y*h,P[2]+Y*h)}}i.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,y=0;me(G,y),y+=G.length;for(let P=0,O=W.length;P<O;P++){let B=W[P];me(B,y),y+=B.length}i.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new rl[r.type]().fromJSON(r)),new n(i,e.options)}},Eg={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new ue(s,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],x=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(d,1-m),new ue(f,1-g)]:[new ue(o,1-l),new ue(h,1-u),new ue(p,1-m),new ue(x,1-g)]}},Xr=class n extends xr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},al=class n extends ut{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=nt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new ue,p=new A,m=new A,f=new A,x=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-x,p.z=0*g,f.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(f.x,f.y,f.z);break;default:x=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-x,p.z=0*g,m.copy(p),p.x+=f.x,p.y+=f.y,p.z+=f.z,p.normalize(),l.push(p.x,p.y,p.z),f.copy(m)}for(let v=0;v<=t;v++){let S=i+v*h*r,E=Math.sin(S),b=Math.cos(S);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*E,u.y=e[C].y,u.z=e[C].x*b,a.push(u.x,u.y,u.z),d.x=v/t,d.y=C/(e.length-1),o.push(d.x,d.y);let U=l[3*C+0]*E,F=l[3*C+1],R=l[3*C+0]*b;c.push(U,F,R)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let E=S+v*e.length,b=E,C=E+e.length,U=E+e.length+1,F=E+1;s.push(b,C,F),s.push(U,F,C)}this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("uv",new ze(o,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ol=class n extends xr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ei=class n extends ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],f=[],x=[];for(let g=0;g<h;g++){let v=g*d-a;for(let S=0;S<c;S++){let E=S*u-s;m.push(E,-v,0),f.push(0,0,1),x.push(S/o),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let S=v+c*g,E=v+c*(g+1),b=v+1+c*(g+1),C=v+1+c*g;p.push(S,E,C),p.push(E,b,C)}this.setIndex(p),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ll=class n extends ut{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new A,m=new ue;for(let f=0;f<=r;f++){for(let x=0;x<=i;x++){let g=s+x/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let f=0;f<r;f++){let x=f*(i+1);for(let g=0;g<i;g++){let v=g+x,S=v,E=v+i+1,b=v+i+2,C=v+1;o.push(S,E,C),o.push(E,b,C)}}this.setIndex(o),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},cl=class n extends ut{constructor(e=new Wr([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;_n.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,g=m.length;x<g;x++){let v=m[x];_n.isClockWise(v)===!0&&(m[x]=v.reverse())}let f=_n.triangulateShape(p,m);for(let x=0,g=m.length;x<g;x++){let v=m[x];p=p.concat(v)}for(let x=0,g=p.length;x<g;x++){let v=p[x];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let x=0,g=f.length;x<g;x++){let v=f[x],S=v[0]+u,E=v[1]+u,b=v[2]+u;i.push(S,E,b),l+=3}}this.setIndex(i),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(s,3)),this.setAttribute("uv",new ze(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Xt=class n extends ut{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],m=[],f=[],x=[];for(let g=0;g<=i;g++){let v=[],S=g/i,E=0;g===0&&a===0?E=.5/t:g===i&&l===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){let C=b/t;u.x=-e*Math.cos(r+C*s)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+S*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),x.push(C+E,1-S),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let S=h[g][v+1],E=h[g][v],b=h[g+1][v],C=h[g+1][v+1];(g!==0||a>0)&&p.push(S,E,C),(g!==i-1||l<Math.PI)&&p.push(E,b,C)}this.setIndex(p),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},hl=class n extends xr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ji=class n extends ut{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new A,p=new A,m=new A;for(let f=0;f<=i;f++){let x=a+f/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(x))*Math.cos(v),p.y=(e+t*Math.cos(x))*Math.sin(v),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(p,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/r),u.push(f/i)}}for(let f=1;f<=i;f++)for(let x=1;x<=r;x++){let g=(r+1)*f+x-1,v=(r+1)*(f-1)+x-1,S=(r+1)*(f-1)+x,E=(r+1)*f+x;l.push(g,v,E),l.push(v,S,E)}this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ul=class n extends ut{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,m=new A,f=new A,x=new A,g=new A;for(let S=0;S<=i;++S){let E=S/i*s*Math.PI*2;v(E,s,a,e,p),v(E+.01,s,a,e,m),x.subVectors(m,p),g.addVectors(m,p),f.crossVectors(x,g),g.crossVectors(f,x),f.normalize(),g.normalize();for(let b=0;b<=r;++b){let C=b/r*Math.PI*2,U=-t*Math.cos(C),F=t*Math.sin(C);u.x=p.x+(U*g.x+F*f.x),u.y=p.y+(U*g.y+F*f.y),u.z=p.z+(U*g.z+F*f.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(S/i),h.push(b/r)}}for(let S=1;S<=i;S++)for(let E=1;E<=r;E++){let b=(r+1)*(S-1)+(E-1),C=(r+1)*S+(E-1),U=(r+1)*S+E,F=(r+1)*(S-1)+E;o.push(b,C,F),o.push(C,U,F)}function v(S,E,b,C,U){let F=Math.cos(S),R=Math.sin(S),k=b/E*S,W=Math.cos(k);U.x=C*(2+W)*.5*F,U.y=C*(2+W)*R*.5,U.z=C*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ds=class n extends ut{constructor(e=new Ra(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new ue,h=new A,u=[],d=[],p=[],m=[];function f(x){h=e.getPointAt(x/t,h);let g=a.normals[x],v=a.binormals[x];for(let S=0;S<=r;S++){let E=S/r*Math.PI*2,b=Math.sin(E),C=-Math.cos(E);l.x=C*g.x+b*v.x,l.y=C*g.y+b*v.y,l.z=C*g.z+b*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)f(x);f(s===!1?t:0),(function(){for(let x=0;x<=t;x++)for(let g=0;g<=r;g++)c.x=x/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let x=1;x<=t;x++)for(let g=1;g<=r;g++){let v=(r+1)*(x-1)+(g-1),S=(r+1)*x+(g-1),E=(r+1)*x+g,b=(r+1)*(x-1)+g;m.push(v,S,b),m.push(S,E,b)}})()})(),this.setIndex(m),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new rl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},dl=class extends ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let f=0;f<3;f++){let x=o.getX(p+f),g=o.getX(p+(f+1)%3);r.fromBufferAttribute(a,x),s.fromBufferAttribute(a,g),Vd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Vd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Vd(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var ex=Object.freeze({__proto__:null,BoxGeometry:Pt,CapsuleGeometry:Ko,CircleGeometry:$o,ConeGeometry:an,CylinderGeometry:Nt,DodecahedronGeometry:Qo,EdgesGeometry:el,ExtrudeGeometry:Ls,IcosahedronGeometry:Xr,LatheGeometry:al,OctahedronGeometry:ol,PlaneGeometry:ei,PolyhedronGeometry:xr,RingGeometry:ll,ShapeGeometry:cl,SphereGeometry:Xt,TetrahedronGeometry:hl,TorusGeometry:ji,TorusKnotGeometry:ul,TubeGeometry:Ds,WireframeGeometry:dl});function Qr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function di(n){let e={};for(let t=0;t<n.length;t++){let i=Qr(n[t]);for(let r in i)e[r]=i[r]}return e}function gu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var kp={clone:Qr,merge:di},Li=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},pl=class extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ti=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fl=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oo(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var Mr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gl=class extends Mr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case eh:s=e,o=2*t-i;break;case th:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:a=e,l=2*i-t;break;case th:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),f=m*m,x=f*m,g=-d*x+2*d*f-d*m,v=(1+d)*x+(-1.5-2*d)*f+(-.5+d)*m+1,S=(-1-p)*x+(1.5+p)*f+.5*m,E=p*x-p*f;for(let b=0;b!==o;++b)s[b]=g*a[h+b]+v*a[c+b]+S*a[l+b]+E*a[u+b];return s}},vl=class extends Mr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},_l=class extends Mr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends Mr{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let f=(i-t)/(r-t),x=1-f;for(let g=0;g!==o;++g)s[g]=a[c+g]*x+a[l+g]*f;return s}let p=2*o,m=e-1;for(let f=0;f!==o;++f){let x=a[c+f],g=a[l+f],v=m*p+2*f,S=d[v],E=d[v+1],b=e*p+2*f,C=u[b],U=u[b+1],F,R,k,W,H,j=(i-t)/(r-t);for(let G=0;G<8;G++){F=j*j,R=F*j,k=1-j,W=k*k,H=W*k;let q=H*t+3*W*j*S+3*k*F*C+R*r-i;if(Math.abs(q)<1e-10)break;let Y=3*W*(S-t)+6*k*j*(C-S)+3*F*(r-C);if(Math.abs(Y)<1e-10)break;j-=q/Y,j=Math.max(0,Math.min(1,j))}s[f]=H*x+3*W*j*E+3*k*F*U+R*g}return s}},Ri=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case Vo:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ym(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ko,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ri.prototype.ValueTypeName="",Ri.prototype.TimeBufferType=Float32Array,Ri.prototype.ValueBufferType=Float32Array,Ri.prototype.DefaultInterpolation=Vo;var fr=class extends Ri{constructor(e,t,i){super(e,t,i)}};fr.prototype.ValueTypeName="bool",fr.prototype.ValueBufferType=Array,fr.prototype.DefaultInterpolation=ma,fr.prototype.InterpolantFactoryMethodLinear=void 0,fr.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}};yl.prototype.ValueTypeName="color";var Ml=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}};Ml.prototype.ValueTypeName="number";var Sl=class extends Mr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)hi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ua=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};Ua.prototype.ValueTypeName="quaternion",Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Ri{constructor(e,t,i){super(e,t,i)}};mr.prototype.ValueTypeName="string",mr.prototype.ValueBufferType=Array,mr.prototype.DefaultInterpolation=ma,mr.prototype.InterpolantFactoryMethodLinear=void 0,mr.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Ri{constructor(e,t,i,r){super(e,t,i,r)}};bl.prototype.ValueTypeName="vector";var Ho={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Wd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Wd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Wd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var El=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hp=new El,Ns=class{constructor(e){this.manager=e!==void 0?e:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=new WeakMap,Tl=class extends Ns{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ho.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=_s.get(a);u===void 0&&(u=[],_s.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Es("img");function l(){h(),t&&t(this);let u=_s.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}_s.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Ho.remove(`image:${e}`);let d=_s.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}_s.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ho.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var qn=class extends Ns{constructor(e){super(e)}load(e,t,i,r){let s=new ci,a=new Tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Us=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yn=class extends Us{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jc=new Ze,jd=new A,Xd=new A,wl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xd),t.updateMatrixWorld(),Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===bs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bo=new A,zo=new hi,gn=new A,Fs=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,zo,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Bo,zo,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pr=new A,qd=new ue,Yd=new ue,zt=class extends Fs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ws*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ms*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ws*Math.atan(Math.tan(.5*Ms*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,qd,Yd),t.subVectors(Yd,qd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ms*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ch=class extends wl{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},yi=class extends Us{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ch}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Os=class extends Fs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends wl{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var tx=new Ze,ix=new Ze,nx=new Ze;var xs=-90,Al=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zt(xs,1,e,t);r.layers=this.layers,this.add(r);let s=new zt(xs,1,e,t);s.layers=this.layers,this.add(s);let a=new zt(xs,1,e,t);a.layers=this.layers,this.add(a);let o=new zt(xs,1,e,t);o.layers=this.layers,this.add(o);let l=new zt(xs,1,e,t);l.layers=this.layers,this.add(l);let c=new zt(xs,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==bs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;x=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Cl=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rx=new A,sx=new hi,ax=new A,ox=new A,lx=new A;var cx=new A,hx=new hi,ux=new A,dx=new A;var vu="\\[\\]\\.:\\/",Tg=new RegExp("["+vu+"]","g"),Kc="[^"+vu+"]",wg="[^"+vu.replace("\\.","")+"]",Ag=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Kc)+/(WCOD+)?/.source.replace("WCOD",wg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc)+"$"),Cg=["material","materials","bones","map"],Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(e){let t=Ag.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Cg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Be("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void He("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void He("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void He("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void He("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=class{constructor(n,e,t){let i=t||Et.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray],Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var px=new Float32Array(1);var fx=new Ze;var mx=new ue;var gx=new A,vx=new A,_x=new A,xx=new A,yx=new A,Mx=new A,Sx=new A;var bx=new A;var Ex=new A,Tx=new Ze,wx=new Ze;var Ax=new A,Cx=new Ae,Rx=new Ae;var Ix=new A,Px=new A,Lx=new A;var Dx=new A,Nx=new Fs;var Ux=new Vi;var Fx=new A;function _u(n,e,t,i){let r=(function(s){switch(s){case Di:case Ch:return{byteLength:1,components:1};case Gs:case Rh:case bn:return{byteLength:2,components:1};case Nl:case Ul:return{byteLength:2,components:4};case Jn:case Dl:case qi:return{byteLength:4,components:1};case Ih:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case Fl:case Ol:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case cn:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function uf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ig(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var tt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ye={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Tn={basic:{uniforms:di([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:di([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:di([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:di([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:di([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ae(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:di([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:di([ye.points,ye.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:di([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:di([ye.common,ye.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:di([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:di([ye.sprite,ye.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:di([ye.common,ye.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:di([ye.lights,ye.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Tn.physical={uniforms:di([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Wl={r:0,b:0,g:0},es=new sn,Pg=new Ze;function Lg(n,e,t,i,r,s){let a=new Ae(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(f){let x=f.isScene===!0?f.background:null;if(x&&x.isTexture){let g=f.backgroundBlurriness>0;x=e.get(x,g)}return x}function m(f,x){f.getRGB(Wl,gu(n)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(f,x=1){a.set(f),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(a,c)},render:function(f){let x=!1,g=p(f);g===null?m(a,c):g&&g.isColor&&(m(g,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(f,x){let g=p(x);g&&(g.isCubeTexture||g.mapping===Oa)?(l===void 0&&(l=new Ee(new Pt(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Qr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),es.copy(x.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(es)),l.material.toneMapped=dt.getTransfer(g.colorSpace)!==gt,h===g&&u===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new Ee(new ei(2,2),new Li({name:"BackgroundMaterial",uniforms:Qr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.toneMapped=dt.getTransfer(g.colorSpace)!==gt,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Dg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],S=[],E=[];for(let b=0;b<t;b++)v[b]=0,S[b]=0,E[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:S,attributeDivisors:E,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,S=g.length;v<S;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let S=s.newAttributes,E=s.enabledAttributes,b=s.attributeDivisors;S[g]=1,E[g]===0&&(n.enableVertexAttribArray(g),E[g]=1),b[g]!==v&&(n.vertexAttribDivisor(g,v),b[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let S=0,E=v.length;S<E;S++)v[S]!==g[S]&&(n.disableVertexAttribArray(S),v[S]=0)}function m(g,v,S,E,b,C,U){U===!0?n.vertexAttribIPointer(g,v,S,b,C):n.vertexAttribPointer(g,v,S,E,b,C)}function f(){x(),a=!0,s!==r&&(s=r,o(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,S,E,b){let C=!1,U=(function(F,R,k,W){let H=W.wireframe===!0,j=i[R.id];j===void 0&&(j={},i[R.id]=j);let G=F.isInstancedMesh===!0?F.id:0,q=j[G];q===void 0&&(q={},j[G]=q);let Y=q[k.id];Y===void 0&&(Y={},q[k.id]=Y);let $=Y[H];return $===void 0&&($=c(n.createVertexArray()),Y[H]=$),$})(g,E,S,v);s!==U&&(s=U,o(s.object)),C=(function(F,R,k,W){let H=s.attributes,j=R.attributes,G=0,q=k.getAttributes();for(let Y in q)if(q[Y].location>=0){let $=H[Y],te=j[Y];if(te===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),$===void 0||$.attribute!==te||te&&$.data!==te.data)return!0;G++}return s.attributesNum!==G||s.index!==W})(g,E,S,b),C&&(function(F,R,k,W){let H={},j=R.attributes,G=0,q=k.getAttributes();for(let Y in q)if(q[Y].location>=0){let $=j[Y];$===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&($=F.instanceColor));let te={};te.attribute=$,$&&$.data&&(te.data=$.data),H[Y]=te,G++}s.attributes=H,s.attributesNum=G,s.index=W})(g,E,S,b),b!==null&&e.update(b,n.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,(function(F,R,k,W){h();let H=W.attributes,j=k.getAttributes(),G=R.defaultAttributeValues;for(let q in j){let Y=j[q];if(Y.location>=0){let $=H[q];if($===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){let te=$.normalized,xe=$.itemSize,Me=e.get($);if(Me===void 0)continue;let Ce=Me.buffer,be=Me.type,re=Me.bytesPerElement,fe=be===n.INT||be===n.UNSIGNED_INT||$.gpuType===Dl;if($.isInterleavedBufferAttribute){let me=$.data,De=me.stride,Ge=$.offset;if(me.isInstancedInterleavedBuffer){for(let T=0;T<Y.locationSize;T++)d(Y.location+T,me.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let T=0;T<Y.locationSize;T++)u(Y.location+T);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let T=0;T<Y.locationSize;T++)m(Y.location+T,xe/Y.locationSize,be,te,De*re,(Ge+xe/Y.locationSize*T)*re,fe)}else{if($.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)d(Y.location+me,$.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<Y.locationSize;me++)u(Y.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let me=0;me<Y.locationSize;me++)m(Y.location+me,xe/Y.locationSize,be,te,xe*re,xe/Y.locationSize*me*re,fe)}}else if(G!==void 0){let te=G[q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Y.location,te);break;case 3:n.vertexAttrib3fv(Y.location,te);break;case 4:n.vertexAttrib4fv(Y.location,te);break;default:n.vertexAttrib1fv(Y.location,te)}}}}p()})(g,v,S,E),b!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))},reset:f,resetDefaultState:x,dispose:function(){f();for(let g in i){let v=i[g];for(let S in v){let E=v[S];for(let b in E){let C=E[b];for(let U in C)l(C[U].object),delete C[U];delete E[b]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let S in v){let E=v[S];for(let b in E){let C=E[b];for(let U in C)l(C[U].object),delete C[U];delete E[b]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let S=i[v],E=g.isInstancedMesh===!0?g.id:0,b=S[E];if(b!==void 0){for(let C in b){let U=b[C];for(let F in U)l(U[F].object),delete U[F];delete b[C]}delete S[E],Object.keys(S).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let S=i[v];for(let E in S){let b=S[E];if(b[g.id]===void 0)continue;let C=b[g.id];for(let U in C)l(C[U].object),delete C[U];delete b[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Ng(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Ug(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(Be("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===cn||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==Di&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==qi&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Fg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new vn,o=new Ke,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,f=null;if(m!==0){if(f=l.value,p!==!0||f===null){let x=d+4*m,g=u.matrixWorldInverse;o.getNormalMatrix(g),(f===null||f.length<x)&&(f=new Float32Array(x));for(let v=0,S=d;v!==m;++v,S+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,x=n.get(h);if(!r||p===null||p.length===0||s&&!f)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,S=x.clippingState||null;l.value=S,S=c(p,u,v,d);for(let E=0;E!==v;++E)S[E]=t[E];x.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}var Gp=[.125,.215,.35,.446,.526,.582],za=20,ka=new Os,Vp=new Ae,xu=null,yu=0,Mu=0,Su=!1,Og=new A,Xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Og}=s;xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,yu,Mu),this._renderer.xr.enabled=Su,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:bn,format:cn,colorSpace:kr,depthBuffer:!1},r=Wp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Gp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let m=1/p;d>a-4?m=Gp[d-a+4-1]:d===0&&(m=0),l.push(m);let f=1/(p-2),x=-f,g=1+f,v=[x,x,g,x,g,g,x,x,g,g,x,g],S=6,E=6,b=3,C=2,U=1,F=new Float32Array(b*E*S),R=new Float32Array(C*E*S),k=new Float32Array(U*E*S);for(let H=0;H<S;H++){let j=H%3*2/3-1,G=H>2?0:-1,q=[j,G,0,j+2/3,G,0,j+2/3,G+1,0,j,G,0,j+2/3,G+1,0,j,G+1,0];F.set(q,b*E*H),R.set(v,C*E*H);let Y=[H,H,H,H,H,H];k.set(Y,U*E*H)}let W=new ut;W.setAttribute("position",new It(F,b)),W.setAttribute("uv",new It(R,C)),W.setAttribute("faceIndex",new It(k,U)),c.push(new Ee(W,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(za),h=new A(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:za,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Ee(new ut,e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,r,s){let a=new zt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Vp),c.toneMapping=on,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new Pt,new ot({name:"PMREM.Background",side:Ti,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,m=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Vp),m=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[x],s.y,s.z)):g===1?(a.up.set(0,0,o[x]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[x],s.z)):(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[x]));let v=this._cubeSize;Xs(r,g*v,x>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Hs||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Xs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,ka)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],m=3*p*(i>d-4?i-d+4:0),f=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,Xs(s,m,f,3*p,2*p),r.setRenderTarget(s),r.render(o,ka),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,Xs(e,m,f,3*p,2*p),r.setRenderTarget(e),r.render(o,ka)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,f=isFinite(s)?1+Math.floor(3*m):za;f>za&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let x=[],g=0;for(let E=0;E<za;++E){let b=E/m,C=Math.exp(-b*b/2);x.push(C),E===0?g+=C:E<f&&(g+=2*C)}for(let E=0;E<x.length;E++)x[E]=x[E]/g;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let S=this._sizeLods[r];Xs(t,3*S*(r>v-4?r-v+4:0),4*(this._cubeSize-S),3*S,2*S),l.setRenderTarget(t),l.render(h,ka)}};function Wp(n,e,t){let i=new Ii(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jp(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Xp(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}var Yl=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ea(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pt(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ti,blending:Sn});s.uniforms.tEquirect.value=t;let a=new Ee(r,s),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=Qt),new Al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function Bg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===Il?o.mapping=Hs:l===Pl&&(o.mapping=Zr),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Il||h===Pl,d=h===Hs||h===Zr;if(u||d){let p=t.get(c),m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return i===null&&(i=new Xl(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let f=c.image;return u&&f&&f.height>0||d&&f&&(function(x){let g=0,v=6;for(let S=0;S<v;S++)x[S]!==void 0&&g++;return g===v})(f)?(i===null&&(i=new Xl(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Il||h===Pl){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new Yl(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function zg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&va("WebGLRenderer: "+i+" extension not supported."),r}}}function kg(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let f=h.array;d=h.version;for(let x=0,g=f.length;x<g;x+=3){let v=f[x+0],S=f[x+1],E=f[x+2];c.push(v,S,S,E,E,v)}}else{let f=u.array;d=u.version;for(let x=0,g=f.length/3-1;x<g;x+=3){let v=x+0,S=x+1,E=x+2;c.push(v,S,S,E,E,v)}}let p=new(u.count>=65535?Ma:ya)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Hg(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function Gg(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:He("WebGLInfo: Unknown draw mode:",i)}}}}function Vg(n,e,t){let i=new WeakMap,r=new Tt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let S=a.attributes.position.count*v,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*E*4*h),C=new _a(b,S,E,h);C.type=qi,C.needsUpdate=!0;let U=4*v;for(let R=0;R<h;R++){let k=f[R],W=x[R],H=g[R],j=S*E*4*R;for(let G=0;G<k.count;G++){let q=G*U;d===!0&&(r.fromBufferAttribute(k,G),b[j+q+0]=r.x,b[j+q+1]=r.y,b[j+q+2]=r.z,b[j+q+3]=0),p===!0&&(r.fromBufferAttribute(W,G),b[j+q+4]=r.x,b[j+q+5]=r.y,b[j+q+6]=r.z,b[j+q+7]=0),m===!0&&(r.fromBufferAttribute(H,G),b[j+q+8]=r.x,b[j+q+9]=r.y,b[j+q+10]=r.z,b[j+q+11]=H.itemSize===4?r.w:1)}}u={count:h,texture:C,size:new ue(S,E)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function Wg(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var jg={[Mh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[Zn]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[wh]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function Xg(n,e,t,i,r){let s=new Ii(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Ii(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),o=new ut;o.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ze([0,2,0,0,2,0],2));let l=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ee(o,l),h=new Os(-1,1,1,-1,0,1),u,d=null,p=null,m=!1,f=null,x=[],g=!1;this.setSize=function(v,S){s.setSize(v,S),a.setSize(v,S);for(let E=0;E<x.length;E++){let b=x[E];b.setSize&&b.setSize(v,S)}},this.setEffects=function(v){x=v,g=x.length>0&&x[0].isRenderPass===!0;let S=s.width,E=s.height;for(let b=0;b<x.length;b++){let C=x[b];C.setSize&&C.setSize(S,E)}},this.begin=function(v,S){if(m||v.toneMapping===on&&x.length===0)return!1;if(f=S,S!==null){let E=S.width,b=S.height;s.width===E&&s.height===b||this.setSize(E,b)}return g===!1&&v.setRenderTarget(s),u=v.toneMapping,v.toneMapping=on,!0},this.hasRenderPass=function(){return g},this.end=function(v,S){v.toneMapping=u,m=!0;let E=s,b=a;for(let C=0;C<x.length;C++){let U=x[C];if(U.enabled!==!1&&(U.render(v,b,E,S),U.needsSwap!==!1)){let F=E;E=b,b=F}}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,l.defines={},dt.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");let C=jg[p];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(f),v.render(c,h),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var df=new ci,Tu=new _r(1,1),pf=new _a,ff=new Xo,mf=new Ea,qp=[],Yp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),Kp=new Float32Array(4);function Ys(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zl(n,e){let t=Yp[e];t===void 0&&(t=new Int32Array(e),Yp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function Jg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function Kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Kp.set(i),n.uniformMatrix2fv(this.addr,!1,Kp),Yt(t,i)}}function $g(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Jp.set(i),n.uniformMatrix3fv(this.addr,!1,Jp),Yt(t,i)}}function Qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Zp.set(i),n.uniformMatrix4fv(this.addr,!1,Zp),Yt(t,i)}}function e0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function i0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function n0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function r0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function a0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function o0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function l0(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=t.isReversedDepthBuffer()?Vl:Gl,s=Tu):s=df,t.setTexture2D(e||s,r)}function c0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ff,r)}function h0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mf,r)}function u0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pf,r)}function d0(n,e){n.uniform1fv(this.addr,e)}function p0(n,e){let t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function f0(n,e){let t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){let t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){let t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v0(n,e){let t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _0(n,e){let t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x0(n,e){n.uniform1iv(this.addr,e)}function y0(n,e){n.uniform2iv(this.addr,e)}function M0(n,e){n.uniform3iv(this.addr,e)}function S0(n,e){n.uniform4iv(this.addr,e)}function b0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function T0(n,e){n.uniform3uiv(this.addr,e)}function w0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){let i=this.cache,r=e.length,s=Zl(t,r),a;qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?Tu:df;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function C0(n,e,t){let i=this.cache,r=e.length,s=Zl(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ff,s[a])}function R0(n,e,t){let i=this.cache,r=e.length,s=Zl(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mf,s[a])}function I0(n,e,t){let i=this.cache,r=e.length,s=Zl(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pf,s[a])}var wu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return $g;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return i0;case 35669:case 35673:return n0;case 5125:return r0;case 36294:return s0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}})(t.type)}},Au=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return d0;case 35664:return p0;case 35665:return f0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return E0;case 36295:return T0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return I0}})(t.type)}},Cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},bu=/(\w+)(\])?(\[|\.)?/g;function $p(n,e){n.seq.push(e),n.map[e.id]=e}function P0(n,e,t){let i=n.name,r=i.length;for(bu.lastIndex=0;;){let s=bu.exec(i),a=bu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){$p(t,c===void 0?new wu(o,n,e):new Au(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Cu(o),$p(t,h)),t=h}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);P0(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Qp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var L0=0,ef=new Ke;function tf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function D0(n,e){let t=(function(i){dt._getMatrix(ef,dt.workingColorSpace,i);let r=`mat3( ${ef.elements.map(s=>s.toFixed(4))} )`;switch(dt.getTransfer(i)){case ga:return[r,"LinearTransferOETF"];case gt:return[r,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var N0={[Mh]:"Linear",[Sh]:"Reinhard",[bh]:"Cineon",[Zn]:"ACESFilmic",[Th]:"AgX",[wh]:"Neutral",[Eh]:"Custom"};function U0(n,e){let t=N0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new A;function F0(){return dt.getLuminanceCoefficients(jl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${jl.x.toFixed(4)}, ${jl.y.toFixed(4)}, ${jl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ha(n){return n!==""}function nf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(n){return n.replace(O0,z0)}var B0=new Map;function z0(n,e){let t=tt[e];if(t===void 0){let i=B0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=tt[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Ru(t)}var k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(k0,H0)}function H0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function af(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var G0={[Fa]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"},V0={[Hs]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"},W0={[Zr]:"ENVMAP_MODE_REFRACTION"},j0={[_p]:"ENVMAP_BLENDING_MULTIPLY",[xp]:"ENVMAP_BLENDING_MIX",[yp]:"ENVMAP_BLENDING_ADD"};function X0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(W){return G0[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(W){return W.envMap===!1?"ENVMAP_TYPE_CUBE":V0[W.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(W){return W.envMap===!1?"ENVMAP_MODE_REFLECTION":W0[W.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(W){return W.envMap===!1?"ENVMAP_BLENDING_NONE":j0[W.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(W){let H=W.envMapCubeUVHeight;if(H===null)return null;let j=Math.log2(H)-2,G=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:G,maxMip:j}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)})(t),m=(function(W){let H=[];for(let j in W){let G=W[j];G!==!1&&H.push("#define "+j+" "+G)}return H.join(`
`)})(s),f=r.createProgram(),x,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ha).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ha).join(`
`),g.length>0&&(g+=`
`)):(x=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),g=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?tt.tonemapping_pars_fragment:"",t.toneMapping!==on?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,D0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Ru(a),a=nf(a,t),a=rf(a,t),o=Ru(o),o=nf(o,t),o=rf(o,t),a=sf(a),o=sf(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=v+x+a,E=v+g+o,b=Qp(r,r.VERTEX_SHADER,S),C=Qp(r,r.FRAGMENT_SHADER,E);function U(W){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(f)||"",j=r.getShaderInfoLog(b)||"",G=r.getShaderInfoLog(C)||"",q=H.trim(),Y=j.trim(),$=G.trim(),te=!0,xe=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,b,C);else{let Me=tf(r,b,"vertex"),Ce=tf(r,C,"fragment");He("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+q+`
`+Me+`
`+Ce)}else q!==""?Be("WebGLProgram: Program Info Log:",q):Y!==""&&$!==""||(xe=!1);xe&&(W.diagnostics={runnable:te,programLog:q,vertexShader:{log:Y,prefix:x},fragmentShader:{log:$,prefix:g}})}r.deleteShader(b),r.deleteShader(C),F=new qs(r,f),R=(function(H,j){let G={},q=H.getProgramParameter(j,H.ACTIVE_ATTRIBUTES);for(let Y=0;Y<q;Y++){let $=H.getActiveAttrib(j,Y),te=$.name,xe=1;$.type===H.FLOAT_MAT2&&(xe=2),$.type===H.FLOAT_MAT3&&(xe=3),$.type===H.FLOAT_MAT4&&(xe=4),G[te]={type:$.type,location:H.getAttribLocation(j,te),locationSize:xe}}return G})(r,f)}let F,R;r.attachShader(f,b),r.attachShader(f,C),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),this.getUniforms=function(){return F===void 0&&U(this),F},this.getAttributes=function(){return R===void 0&&U(this),R};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(f,37297)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=C,this}var q0=0,Iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pu(e),t.set(e,i)),i}},Pu=class{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}};function Y0(n,e,t,i,r,s){let a=new xa,o=new Iu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,x,g,v,S){let E=v.fog,b=S.geometry,C=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?v.environment:null,U=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,F=e.get(f.envMap||C,U),R=F&&F.mapping===Oa?F.image.height:null,k=p[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&Be("WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let W=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,H=W!==void 0?W.length:0,j,G,q,Y,$=0;if(b.morphAttributes.position!==void 0&&($=1),b.morphAttributes.normal!==void 0&&($=2),b.morphAttributes.color!==void 0&&($=3),k){let St=Tn[k];j=St.vertexShader,G=St.fragmentShader}else j=f.vertexShader,G=f.fragmentShader,o.update(f),q=o.getVertexShaderID(f),Y=o.getFragmentShaderID(f);let te=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Me=S.isInstancedMesh===!0,Ce=S.isBatchedMesh===!0,be=!!f.map,re=!!f.matcap,fe=!!F,me=!!f.aoMap,De=!!f.lightMap,Ge=!!f.bumpMap,T=!!f.normalMap,M=!!f.displacementMap,D=!!f.emissiveMap,N=!!f.metalnessMap,y=!!f.roughnessMap,P=f.anisotropy>0,O=f.clearcoat>0,B=f.dispersion>0,J=f.iridescence>0,ee=f.sheen>0,Z=f.transmission>0,se=P&&!!f.anisotropyMap,ie=O&&!!f.clearcoatMap,oe=O&&!!f.clearcoatNormalMap,ce=O&&!!f.clearcoatRoughnessMap,ge=J&&!!f.iridescenceMap,Oe=J&&!!f.iridescenceThicknessMap,Je=ee&&!!f.sheenColorMap,lt=ee&&!!f.sheenRoughnessMap,$e=!!f.specularMap,Te=!!f.specularColorMap,Xe=!!f.specularIntensityMap,pt=Z&&!!f.transmissionMap,Ft=Z&&!!f.thicknessMap,Se=!!f.gradientMap,Ye=!!f.alphaMap,qe=f.alphaTest>0,Zi=!!f.alphaHash,Cn=!!f.extensions,kt=on;f.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(kt=n.toneMapping));let xt={shaderID:k,shaderType:f.type,shaderName:f.name,vertexShader:j,fragmentShader:G,defines:f.defines,customVertexShaderID:q,customFragmentShaderID:Y,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&S._colorsTexture!==null,instancing:Me,instancingColor:Me&&S.instanceColor!==null,instancingMorph:Me&&S.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:kr,alphaToCoverage:!!f.alphaToCoverage,map:be,matcap:re,envMap:fe,envMapMode:fe&&F.mapping,envMapCubeUVHeight:R,aoMap:me,lightMap:De,bumpMap:Ge,normalMap:T,displacementMap:M,emissiveMap:D,normalMapObjectSpace:T&&f.normalMapType===Tp,normalMapTangentSpace:T&&f.normalMapType===Ep,metalnessMap:N,roughnessMap:y,anisotropy:P,anisotropyMap:se,clearcoat:O,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,dispersion:B,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Oe,sheen:ee,sheenColorMap:Je,sheenRoughnessMap:lt,specularMap:$e,specularColorMap:Te,specularIntensityMap:Xe,transmission:Z,transmissionMap:pt,thicknessMap:Ft,gradientMap:Se,opaque:f.transparent===!1&&f.blending===Yr&&f.alphaToCoverage===!1,alphaMap:Ye,alphaTest:qe,alphaHash:Zi,combine:f.combine,mapUv:be&&m(f.map.channel),aoMapUv:me&&m(f.aoMap.channel),lightMapUv:De&&m(f.lightMap.channel),bumpMapUv:Ge&&m(f.bumpMap.channel),normalMapUv:T&&m(f.normalMap.channel),displacementMapUv:M&&m(f.displacementMap.channel),emissiveMapUv:D&&m(f.emissiveMap.channel),metalnessMapUv:N&&m(f.metalnessMap.channel),roughnessMapUv:y&&m(f.roughnessMap.channel),anisotropyMapUv:se&&m(f.anisotropyMap.channel),clearcoatMapUv:ie&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:lt&&m(f.sheenRoughnessMap.channel),specularMapUv:$e&&m(f.specularMap.channel),specularColorMapUv:Te&&m(f.specularColorMap.channel),specularIntensityMapUv:Xe&&m(f.specularIntensityMap.channel),transmissionMapUv:pt&&m(f.transmissionMap.channel),thicknessMapUv:Ft&&m(f.thicknessMap.channel),alphaMapUv:Ye&&m(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(T||P),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!b.attributes.uv&&(be||Ye),fog:!!E,useFog:f.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||b.attributes.normal===void 0&&T===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:S.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:$,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:be&&f.map.isVideoTexture===!0&&dt.getTransfer(f.map.colorSpace)===gt,decodeVideoTextureEmissive:D&&f.emissiveMap.isVideoTexture===!0&&dt.getTransfer(f.emissiveMap.colorSpace)===gt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===ui,flipSided:f.side===Ti,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Cn&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Cn&&f.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)x.push(g),x.push(f.defines[g]);return f.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(x,f),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),g.push(a.mask)})(x,f),x.push(n.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=p[f.type],g;if(x){let v=Tn[x];g=kp.clone(v.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,x){let g=h.get(x);return g!==void 0?++g.usedTimes:(g=new X0(n,x,f,r),c.push(g),h.set(x,g)),g},releaseProgram:function(f){if(--f.usedTimes===0){let x=c.indexOf(f);c[x]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}},releaseShaderCache:function(f){o.remove(f)},programs:c,dispose:function(){o.dispose()}}}function Z0(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function J0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lf(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||J0),i.length>1&&i.sort(l||of),r.length>1&&r.sort(l||of)}}}function K0(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new lf,n.set(e,[r])):t>=i.length?(r=new lf,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function $0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ae};break;case"SpotLight":t={position:new A,direction:new A,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new A,halfWidth:new A,halfHeight:new A}}return n[e.id]=t,t}}}var Q0=0;function ev(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tv(n){let e=new $0,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let r=new A,s=new Ze,a=new Ze;return{setup:function(o){let l=0,c=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,d=0,p=0,m=0,f=0,x=0,g=0,v=0,S=0,E=0,b=0;o.sort(ev);for(let U=0,F=o.length;U<F;U++){let R=o[U],k=R.color,W=R.intensity,H=R.distance,j=null;if(R.shadow&&R.shadow.map&&(j=R.shadow.map.texture.format===Ws?R.shadow.map.texture:R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)l+=k.r*W,c+=k.g*W,h+=k.b*W;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],W);b++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=R.shadow.matrix,x++}i.directional[u]=G,u++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(k).multiplyScalar(W),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[p]=G;let q=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,q.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[p]=q.matrix,R.castShadow){let Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=j,v++}p++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(k).multiplyScalar(W),G.halfWidth.set(.5*R.width,0,0),G.halfHeight.set(0,.5*R.height,0),i.rectArea[m]=G,m++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let q=R.shadow,Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=R.shadow.matrix,g++}i.point[d]=G,d++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(W),G.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let C=i.hash;C.directionalLength===u&&C.pointLength===d&&C.spotLength===p&&C.rectAreaLength===m&&C.hemiLength===f&&C.numDirectionalShadows===x&&C.numPointShadows===g&&C.numSpotShadows===v&&C.numSpotMaps===S&&C.numLightProbes===b||(i.directional.length=u,i.spot.length=p,i.rectArea.length=m,i.point.length=d,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,C.directionalLength=u,C.pointLength=d,C.spotLength=p,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=x,C.numPointShadows=g,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=b,i.version=Q0++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let f=0,x=o.length;f<x;f++){let g=o[f];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:i}}function cf(n){let e=new tv(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function iv(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new cf(n),e.set(t,[s])):i>=r.length?(s=new cf(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var nv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],rv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],hf=new Ze,Ga=new A,Eu=new A;function sv(n,e,t){let i=new vr,r=new ue,s=new ue,a=new Tt,o=new fl,l=new ml,c={},h=t.maxTextureSize,u={[zs]:Ti,[Ti]:zs,[ui]:ui},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new ut;m.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new Ee(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let g=this.type;function v(C,U){let F=e.update(f);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ii(r.x,r.y,{format:Ws,type:bn})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(U,null,F,d,f,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(U,null,F,p,f,null)}function S(C,U,F,R){let k=null,W=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)k=W;else if(k=F.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let H=k.uuid,j=U.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let q=G[j];q===void 0&&(q=k.clone(),G[j]=q,U.addEventListener("dispose",b)),k=q}return k.visible=U.visible,k.wireframe=U.wireframe,k.side=R===Bs?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(n.properties.get(k).light=F),k}function E(C,U,F,R,k){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===Bs)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let H=e.update(C),j=C.material;if(Array.isArray(j)){let G=H.groups;for(let q=0,Y=G.length;q<Y;q++){let $=G[q],te=j[$.materialIndex];if(te&&te.visible){let xe=S(C,te,R,k);C.onBeforeShadow(n,C,U,F,H,xe,$),n.renderBufferDirect(F,null,H,xe,C,$),C.onAfterShadow(n,C,U,F,H,xe,$)}}}else if(j.visible){let G=S(C,j,R,k);C.onBeforeShadow(n,C,U,F,H,G,null),n.renderBufferDirect(F,null,H,G,C,null),C.onAfterShadow(n,C,U,F,H,G,null)}}let W=C.children;for(let H=0,j=W.length;H<j;H++)E(W[H],U,F,R,k)}function b(C){C.target.removeEventListener("dispose",b);for(let U in c){let F=c[U],R=C.target.uuid;R in F&&(F[R].dispose(),delete F[R])}}this.render=function(C,U,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Kd&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fa);let R=n.getRenderTarget(),k=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Sn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=g!==this.type;j&&U.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(q=>q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,q=C.length;G<q;G++){let Y=C[G],$=Y.shadow;if($===void 0){Be("WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let te=$.getFrameExtents();r.multiply(te),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,$.mapSize.y=s.y));let xe=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=xe,$.map===null||j===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Bs){if(Y.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ii(r.x,r.y,{format:Ws,type:bn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),$.map.texture.name=Y.name+".shadowMap",$.map.depthTexture=new _r(r.x,r.y,qi),$.map.depthTexture.name=Y.name+".shadowMapDepth",$.map.depthTexture.format=Sr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Gi,$.map.depthTexture.magFilter=Gi}else Y.isPointLight?($.map=new Yl(r.x),$.map.depthTexture=new Jo(r.x,Jn)):($.map=new Ii(r.x,r.y),$.map.depthTexture=new _r(r.x,r.y,Jn)),$.map.depthTexture.name=Y.name+".shadowMap",$.map.depthTexture.format=Sr,this.type===Fa?($.map.depthTexture.compareFunction=xe?Vl:Gl,$.map.depthTexture.minFilter=Qt,$.map.depthTexture.magFilter=Qt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Gi,$.map.depthTexture.magFilter=Gi);$.camera.updateProjectionMatrix()}let Me=$.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<Me;Ce++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,Ce),n.clear();else{Ce===0&&(n.setRenderTarget($.map),n.clear());let be=$.getViewport(Ce);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),H.viewport(a)}if(Y.isPointLight){let be=$.camera,re=$.matrix,fe=Y.distance||be.far;fe!==be.far&&(be.far=fe,be.updateProjectionMatrix()),Ga.setFromMatrixPosition(Y.matrixWorld),be.position.copy(Ga),Eu.copy(be.position),Eu.add(nv[Ce]),be.up.copy(rv[Ce]),be.lookAt(Eu),be.updateMatrixWorld(),re.makeTranslation(-Ga.x,-Ga.y,-Ga.z),hf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),$._frustum.setFromProjectionMatrix(hf,be.coordinateSystem,be.reversedDepth)}else $.updateMatrices(Y);i=$.getFrustum(),E(U,F,$.camera,Y,this.type)}$.isPointLightShadow!==!0&&this.type===Bs&&v($,F),$.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(R,k,W)}}function av(n,e){let t=new function(){let y=!1,P=new Tt,O=null,B=new Tt(0,0,0,0);return{setMask:function(J){O===J||y||(n.colorMask(J,J,J,J),O=J)},setLocked:function(J){y=J},setClear:function(J,ee,Z,se,ie){ie===!0&&(J*=se,ee*=se,Z*=se),P.set(J,ee,Z,se),B.equals(P)===!1&&(n.clearColor(J,ee,Z,se),B.copy(P))},reset:function(){y=!1,O=null,B.set(-1,0,0,0)}}},i=new function(){let y=!1,P=!1,O=null,B=null,J=null;return{setReversed:function(ee){if(P!==ee){let Z=e.get("EXT_clip_control");ee?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),P=ee;let se=J;J=null,this.setClear(se)}},getReversed:function(){return P},setTest:function(ee){ee?fe(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ee){O===ee||y||(n.depthMask(ee),O=ee)},setFunc:function(ee){if(P&&(ee=Up[ee]),B!==ee){switch(ee){case fh:n.depthFunc(n.NEVER);break;case mh:n.depthFunc(n.ALWAYS);break;case gh:n.depthFunc(n.LESS);break;case Rl:n.depthFunc(n.LEQUAL);break;case vh:n.depthFunc(n.EQUAL);break;case _h:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}B=ee}},setLocked:function(ee){y=ee},setClear:function(ee){J!==ee&&(J=ee,P&&(ee=1-ee),n.clearDepth(ee))},reset:function(){y=!1,O=null,B=null,J=null,P=!1}}},r=new function(){let y=!1,P=null,O=null,B=null,J=null,ee=null,Z=null,se=null,ie=null;return{setTest:function(oe){y||(oe?fe(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(oe){P===oe||y||(n.stencilMask(oe),P=oe)},setFunc:function(oe,ce,ge){O===oe&&B===ce&&J===ge||(n.stencilFunc(oe,ce,ge),O=oe,B=ce,J=ge)},setOp:function(oe,ce,ge){ee===oe&&Z===ce&&se===ge||(n.stencilOp(oe,ce,ge),ee=oe,Z=ce,se=ge)},setLocked:function(oe){y=oe},setClear:function(oe){ie!==oe&&(n.clearStencil(oe),ie=oe)},reset:function(){y=!1,P=null,O=null,B=null,J=null,ee=null,Z=null,se=null,ie=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,f=null,x=null,g=null,v=null,S=null,E=new Ae(0,0,0),b=0,C=!1,U=null,F=null,R=null,k=null,W=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,G=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=G>=2);let Y=null,$={},te=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Me=new Tt().fromArray(te),Ce=new Tt().fromArray(xe);function be(y,P,O,B){let J=new Uint8Array(4),ee=n.createTexture();n.bindTexture(y,ee),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Z=0;Z<O;Z++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(P,0,n.RGBA,1,1,B,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(P+Z,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return ee}let re={};function fe(y){o[y]!==!0&&(n.enable(y),o[y]=!0)}function me(y){o[y]!==!1&&(n.disable(y),o[y]=!1)}re[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),fe(n.DEPTH_TEST),i.setFunc(Rl),M(!1),D(uh),fe(n.CULL_FACE),T(Sn);let De={[ks]:n.FUNC_ADD,[Qd]:n.FUNC_SUBTRACT,[ep]:n.FUNC_REVERSE_SUBTRACT};De[tp]=n.MIN,De[ip]=n.MAX;let Ge={[np]:n.ZERO,[rp]:n.ONE,[sp]:n.SRC_COLOR,[op]:n.SRC_ALPHA,[pp]:n.SRC_ALPHA_SATURATE,[up]:n.DST_COLOR,[cp]:n.DST_ALPHA,[ap]:n.ONE_MINUS_SRC_COLOR,[lp]:n.ONE_MINUS_SRC_ALPHA,[dp]:n.ONE_MINUS_DST_COLOR,[hp]:n.ONE_MINUS_DST_ALPHA,[fp]:n.CONSTANT_COLOR,[mp]:n.ONE_MINUS_CONSTANT_COLOR,[gp]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function T(y,P,O,B,J,ee,Z,se,ie,oe){if(y!==Sn){if(d===!1&&(fe(n.BLEND),d=!0),y===$d)J=J||P,ee=ee||O,Z=Z||B,P===m&&J===g||(n.blendEquationSeparate(De[P],De[J]),m=P,g=J),O===f&&B===x&&ee===v&&Z===S||(n.blendFuncSeparate(Ge[O],Ge[B],Ge[ee],Ge[Z]),f=O,x=B,v=ee,S=Z),se.equals(E)!==!1&&ie===b||(n.blendColor(se.r,se.g,se.b,ie),E.copy(se),b=ie),p=y,C=!1;else if(y!==p||oe!==C){if(m===ks&&g===ks||(n.blendEquation(n.FUNC_ADD),m=ks,g=ks),oe)switch(y){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xi:n.blendFunc(n.ONE,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",y)}else switch(y){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",y)}f=null,x=null,v=null,S=null,E.set(0,0,0),b=0,p=y,C=oe}}else d===!0&&(me(n.BLEND),d=!1)}function M(y){U!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),U=y)}function D(y){y!==Zd?(fe(n.CULL_FACE),y!==F&&(y===uh?n.cullFace(n.BACK):y===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),F=y}function N(y,P,O){y?(fe(n.POLYGON_OFFSET_FILL),k===P&&W===O||(k=P,W=O,i.getReversed()&&(P=-P),n.polygonOffset(P,O))):me(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:fe,disable:me,bindFramebuffer:function(y,P){return l[y]!==P&&(n.bindFramebuffer(y,P),l[y]=P,y===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=P),y===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(y,P){let O=h,B=!1;if(y){O=c.get(P),O===void 0&&(O=[],c.set(P,O));let J=y.textures;if(O.length!==J.length||O[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Z=J.length;ee<Z;ee++)O[ee]=n.COLOR_ATTACHMENT0+ee;O.length=J.length,B=!0}}else O[0]!==n.BACK&&(O[0]=n.BACK,B=!0);B&&n.drawBuffers(O)},useProgram:function(y){return u!==y&&(n.useProgram(y),u=y,!0)},setBlending:T,setMaterial:function(y,P){y.side===ui?me(n.CULL_FACE):fe(n.CULL_FACE);let O=y.side===Ti;P&&(O=!O),M(O),y.blending===Yr&&y.transparent===!1?T(Sn):T(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let B=y.stencilWrite;r.setTest(B),B&&(r.setMask(y.stencilWriteMask),r.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),r.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),N(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:M,setCullFace:D,setLineWidth:function(y){y!==R&&(j&&n.lineWidth(y),R=y)},setPolygonOffset:N,setScissorTest:function(y){y?fe(n.SCISSOR_TEST):me(n.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=n.TEXTURE0+H-1),Y!==y&&(n.activeTexture(y),Y=y)},bindTexture:function(y,P,O){O===void 0&&(O=Y===null?n.TEXTURE0+H-1:Y);let B=$[O];B===void 0&&(B={type:void 0,texture:void 0},$[O]=B),B.type===y&&B.texture===P||(Y!==O&&(n.activeTexture(O),Y=O),n.bindTexture(y,P||re[y]),B.type=y,B.texture=P)},unbindTexture:function(){let y=$[Y];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(y){He("WebGLState:",y)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(y){He("WebGLState:",y)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(y){He("WebGLState:",y)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(y){He("WebGLState:",y)}},updateUBOMapping:function(y,P){let O=a.get(P);O===void 0&&(O=new WeakMap,a.set(P,O));let B=O.get(y);B===void 0&&(B=n.getUniformBlockIndex(P,y.name),O.set(y,B))},uniformBlockBinding:function(y,P){let O=a.get(P).get(y);s.get(P)!==O&&(n.uniformBlockBinding(P,O,y.__bindingPointIndex),s.set(P,O))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(y){He("WebGLState:",y)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(y){He("WebGLState:",y)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(y){He("WebGLState:",y)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(y){He("WebGLState:",y)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(y){He("WebGLState:",y)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(y){He("WebGLState:",y)}},scissor:function(y){Me.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),Me.copy(y))},viewport:function(y){Ce.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),Ce.copy(y))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Y=null,$={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,f=null,x=null,g=null,v=null,S=null,E=new Ae(0,0,0),b=0,C=!1,U=null,F=null,R=null,k=null,W=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function ov(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return p?new OffscreenCanvas(T,M):Es("canvas")}function f(T,M,D){let N=1,y=Ge(T);if((y.width>D||y.height>D)&&(N=D/Math.max(y.width,y.height)),N<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let P=Math.floor(N*y.width),O=Math.floor(N*y.height);u===void 0&&(u=m(P,O));let B=M?m(P,O):u;return B.width=P,B.height=O,B.getContext("2d").drawImage(T,0,0,P,O),Be("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+P+"x"+O+")."),B}return"data"in T&&Be("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),T}return T}function x(T){return T.generateMipmaps}function g(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,M,D,N,y=!1){if(T!==null){if(n[T]!==void 0)return n[T];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let P=M;if(M===n.RED&&(D===n.FLOAT&&(P=n.R32F),D===n.HALF_FLOAT&&(P=n.R16F),D===n.UNSIGNED_BYTE&&(P=n.R8)),M===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(P=n.R8UI),D===n.UNSIGNED_SHORT&&(P=n.R16UI),D===n.UNSIGNED_INT&&(P=n.R32UI),D===n.BYTE&&(P=n.R8I),D===n.SHORT&&(P=n.R16I),D===n.INT&&(P=n.R32I)),M===n.RG&&(D===n.FLOAT&&(P=n.RG32F),D===n.HALF_FLOAT&&(P=n.RG16F),D===n.UNSIGNED_BYTE&&(P=n.RG8)),M===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(P=n.RG8UI),D===n.UNSIGNED_SHORT&&(P=n.RG16UI),D===n.UNSIGNED_INT&&(P=n.RG32UI),D===n.BYTE&&(P=n.RG8I),D===n.SHORT&&(P=n.RG16I),D===n.INT&&(P=n.RG32I)),M===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(P=n.RGB8UI),D===n.UNSIGNED_SHORT&&(P=n.RGB16UI),D===n.UNSIGNED_INT&&(P=n.RGB32UI),D===n.BYTE&&(P=n.RGB8I),D===n.SHORT&&(P=n.RGB16I),D===n.INT&&(P=n.RGB32I)),M===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),D===n.UNSIGNED_INT&&(P=n.RGBA32UI),D===n.BYTE&&(P=n.RGBA8I),D===n.SHORT&&(P=n.RGBA16I),D===n.INT&&(P=n.RGBA32I)),M===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(P=n.R11F_G11F_B10F)),M===n.RGBA){let O=y?ga:dt.getTransfer(N);D===n.FLOAT&&(P=n.RGBA32F),D===n.HALF_FLOAT&&(P=n.RGBA16F),D===n.UNSIGNED_BYTE&&(P=O===gt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return P!==n.R16F&&P!==n.R32F&&P!==n.RG16F&&P!==n.RG32F&&P!==n.RGBA16F&&P!==n.RGBA32F||e.get("EXT_color_buffer_float"),P}function E(T,M){let D;return T?M===null||M===Jn||M===Vs?D=n.DEPTH24_STENCIL8:M===qi?D=n.DEPTH32F_STENCIL8:M===Gs&&(D=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===Vs?D=n.DEPTH_COMPONENT24:M===qi?D=n.DEPTH_COMPONENT32F:M===Gs&&(D=n.DEPTH_COMPONENT16),D}function b(T,M){return x(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gi&&T.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){let M=T.target;M.removeEventListener("dispose",C),(function(D){let N=i.get(D);if(N.__webglInit===void 0)return;let y=D.source,P=d.get(y);if(P){let O=P[N.__cacheKey];O.usedTimes--,O.usedTimes===0&&F(D),Object.keys(P).length===0&&d.delete(y)}i.remove(D)})(M),M.isVideoTexture&&h.delete(M)}function U(T){let M=T.target;M.removeEventListener("dispose",U),(function(D){let N=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(N.__webglFramebuffer[P]))for(let O=0;O<N.__webglFramebuffer[P].length;O++)n.deleteFramebuffer(N.__webglFramebuffer[P][O]);else n.deleteFramebuffer(N.__webglFramebuffer[P]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[P])}else{if(Array.isArray(N.__webglFramebuffer))for(let P=0;P<N.__webglFramebuffer.length;P++)n.deleteFramebuffer(N.__webglFramebuffer[P]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let P=0;P<N.__webglColorRenderbuffer.length;P++)N.__webglColorRenderbuffer[P]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[P]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let y=D.textures;for(let P=0,O=y.length;P<O;P++){let B=i.get(y[P]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(y[P])}i.remove(D)})(M)}function F(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let D=T.source;delete d.get(D)[M.__cacheKey],a.memory.textures--}let R=0;function k(T,M){let D=i.get(T);if(T.isVideoTexture&&(function(N){let y=a.render.frame;h.get(N)!==y&&(h.set(N,y),N.update())})(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){let N=T.image;if(N===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void $(D,T,M);Be("WebGLRenderer: Texture marked for update but image is incomplete")}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+M)}let W={[zr]:n.REPEAT,[gr]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},H={[Gi]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[ln]:n.LINEAR_MIPMAP_LINEAR},j={[wp]:n.NEVER,[Pp]:n.ALWAYS,[Ap]:n.LESS,[Gl]:n.LEQUAL,[Cp]:n.EQUAL,[Vl]:n.GEQUAL,[Rp]:n.GREATER,[Ip]:n.NOTEQUAL};function G(T,M){if(M.type!==qi||e.has("OES_texture_float_linear")!==!1||M.magFilter!==Qt&&M.magFilter!==Ll&&M.magFilter!==Ba&&M.magFilter!==ln&&M.minFilter!==Qt&&M.minFilter!==Ll&&M.minFilter!==Ba&&M.minFilter!==ln||Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,W[M.wrapT]),T!==n.TEXTURE_3D&&T!==n.TEXTURE_2D_ARRAY||n.texParameteri(T,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,H[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gi||M.minFilter!==Ba&&M.minFilter!==ln||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function q(T,M){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));let N=M.source,y=d.get(N);y===void 0&&(y={},d.set(N,y));let P=(function(O){let B=[];return B.push(O.wrapS),B.push(O.wrapT),B.push(O.wrapR||0),B.push(O.magFilter),B.push(O.minFilter),B.push(O.anisotropy),B.push(O.internalFormat),B.push(O.format),B.push(O.type),B.push(O.generateMipmaps),B.push(O.premultiplyAlpha),B.push(O.flipY),B.push(O.unpackAlignment),B.push(O.colorSpace),B.join()})(M);if(P!==T.__cacheKey){y[P]===void 0&&(y[P]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),y[P].usedTimes++;let O=y[T.__cacheKey];O!==void 0&&(y[T.__cacheKey].usedTimes--,O.usedTimes===0&&F(M)),T.__cacheKey=P,T.__webglTexture=y[P].texture}return D}function Y(T,M,D){return Math.floor(Math.floor(T/D)/M)}function $(T,M,D){let N=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(N=n.TEXTURE_3D);let y=q(T,M),P=M.source;t.bindTexture(N,T.__webglTexture,n.TEXTURE0+D);let O=i.get(P);if(P.version!==O.__version||y===!0){t.activeTexture(n.TEXTURE0+D);let B=dt.getPrimaries(dt.workingColorSpace),J=M.colorSpace===Kr?null:dt.getPrimaries(M.colorSpace),ee=M.colorSpace===Kr||B===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Z=f(M.image,!1,r.maxTextureSize);Z=De(M,Z);let se=s.convert(M.format,M.colorSpace),ie=s.convert(M.type),oe,ce=S(M.internalFormat,se,ie,M.colorSpace,M.isVideoTexture);G(N,M);let ge=M.mipmaps,Oe=M.isVideoTexture!==!0,Je=O.__version===void 0||y===!0,lt=P.dataReady,$e=b(M,Z);if(M.isDepthTexture)ce=E(M.format===Jr,M.type),Je&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,ce,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ce,Z.width,Z.height,0,se,ie,null));else if(M.isDataTexture)if(ge.length>0){Oe&&Je&&t.texStorage2D(n.TEXTURE_2D,$e,ce,ge[0].width,ge[0].height);for(let Te=0,Xe=ge.length;Te<Xe;Te++)oe=ge[Te],Oe?lt&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,oe.width,oe.height,se,ie,oe.data):t.texImage2D(n.TEXTURE_2D,Te,ce,oe.width,oe.height,0,se,ie,oe.data);M.generateMipmaps=!1}else Oe?(Je&&t.texStorage2D(n.TEXTURE_2D,$e,ce,Z.width,Z.height),lt&&(function(Te,Xe,pt,Ft){let Se=Te.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe.width,Xe.height,pt,Ft,Xe.data);else{Se.sort((kt,xt)=>kt.start-xt.start);let Ye=0;for(let kt=1;kt<Se.length;kt++){let xt=Se[Ye],St=Se[kt],Ui=xt.start+xt.count,z=Y(St.start,Xe.width,4),Rn=Y(xt.start,Xe.width,4);St.start<=Ui+1&&z===Rn&&Y(St.start+St.count-1,Xe.width,4)===z?xt.count=Math.max(xt.count,St.start+St.count-xt.start):(++Ye,Se[Ye]=St)}Se.length=Ye+1;let qe=n.getParameter(n.UNPACK_ROW_LENGTH),Zi=n.getParameter(n.UNPACK_SKIP_PIXELS),Cn=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,Xe.width);for(let kt=0,xt=Se.length;kt<xt;kt++){let St=Se[kt],Ui=Math.floor(St.start/4),z=Math.ceil(St.count/4),Rn=Ui%Xe.width,In=Math.floor(Ui/Xe.width),bt=z;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Rn),n.pixelStorei(n.UNPACK_SKIP_ROWS,In),t.texSubImage2D(n.TEXTURE_2D,0,Rn,In,bt,1,pt,Ft,Xe.data)}Te.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,qe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Zi),n.pixelStorei(n.UNPACK_SKIP_ROWS,Cn)}})(M,Z,se,ie)):t.texImage2D(n.TEXTURE_2D,0,ce,Z.width,Z.height,0,se,ie,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,ce,ge[0].width,ge[0].height,Z.depth);for(let Te=0,Xe=ge.length;Te<Xe;Te++)if(oe=ge[Te],M.format!==cn)if(se!==null)if(Oe){if(lt)if(M.layerUpdates.size>0){let pt=_u(oe.width,oe.height,M.format,M.type);for(let Ft of M.layerUpdates){let Se=oe.data.subarray(Ft*pt/oe.data.BYTES_PER_ELEMENT,(Ft+1)*pt/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,Ft,oe.width,oe.height,1,se,Se)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,oe.width,oe.height,Z.depth,se,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,ce,oe.width,oe.height,Z.depth,0,oe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?lt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,oe.width,oe.height,Z.depth,se,ie,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,ce,oe.width,oe.height,Z.depth,0,se,ie,oe.data)}else{Oe&&Je&&t.texStorage2D(n.TEXTURE_2D,$e,ce,ge[0].width,ge[0].height);for(let Te=0,Xe=ge.length;Te<Xe;Te++)oe=ge[Te],M.format!==cn?se!==null?Oe?lt&&t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,oe.width,oe.height,se,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,ce,oe.width,oe.height,0,oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?lt&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,oe.width,oe.height,se,ie,oe.data):t.texImage2D(n.TEXTURE_2D,Te,ce,oe.width,oe.height,0,se,ie,oe.data)}else if(M.isDataArrayTexture)if(Oe){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,ce,Z.width,Z.height,Z.depth),lt)if(M.layerUpdates.size>0){let Te=_u(Z.width,Z.height,M.format,M.type);for(let Xe of M.layerUpdates){let pt=Z.data.subarray(Xe*Te/Z.data.BYTES_PER_ELEMENT,(Xe+1)*Te/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Xe,Z.width,Z.height,1,se,ie,pt)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,se,ie,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,Z.width,Z.height,Z.depth,0,se,ie,Z.data);else if(M.isData3DTexture)Oe?(Je&&t.texStorage3D(n.TEXTURE_3D,$e,ce,Z.width,Z.height,Z.depth),lt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,se,ie,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ce,Z.width,Z.height,Z.depth,0,se,ie,Z.data);else if(M.isFramebufferTexture){if(Je)if(Oe)t.texStorage2D(n.TEXTURE_2D,$e,ce,Z.width,Z.height);else{let Te=Z.width,Xe=Z.height;for(let pt=0;pt<$e;pt++)t.texImage2D(n.TEXTURE_2D,pt,ce,Te,Xe,0,se,ie,null),Te>>=1,Xe>>=1}}else if(ge.length>0){if(Oe&&Je){let Te=Ge(ge[0]);t.texStorage2D(n.TEXTURE_2D,$e,ce,Te.width,Te.height)}for(let Te=0,Xe=ge.length;Te<Xe;Te++)oe=ge[Te],Oe?lt&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,se,ie,oe):t.texImage2D(n.TEXTURE_2D,Te,ce,se,ie,oe);M.generateMipmaps=!1}else if(Oe){if(Je){let Te=Ge(Z);t.texStorage2D(n.TEXTURE_2D,$e,ce,Te.width,Te.height)}lt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,ie,Z)}else t.texImage2D(n.TEXTURE_2D,0,ce,se,ie,Z);x(M)&&g(N),O.__version=P.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function te(T,M,D,N,y,P){let O=s.convert(D.format,D.colorSpace),B=s.convert(D.type),J=S(D.internalFormat,O,B,D.colorSpace),ee=i.get(M),Z=i.get(D);if(Z.__renderTarget=M,!ee.__hasExternalTextures){let se=Math.max(1,M.width>>P),ie=Math.max(1,M.height>>P);y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?t.texImage3D(y,P,J,se,ie,M.depth,0,O,B,null):t.texImage2D(y,P,J,se,ie,0,O,B,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,y,Z.__webglTexture,0,fe(M)):(y===n.TEXTURE_2D||y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,y,Z.__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(T,M,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let N=M.depthTexture,y=N&&N.isDepthTexture?N.type:null,P=E(M.stencilBuffer,y),O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(M),P,M.width,M.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(M),P,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,P,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,T)}else{let N=M.textures;for(let y=0;y<N.length;y++){let P=N[y],O=s.convert(P.format,P.colorSpace),B=s.convert(P.type),J=S(P.internalFormat,O,B,P.colorSpace);me(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(M),J,M.width,M.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(T,M,D){let N=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let y=i.get(M.depthTexture);if(y.__renderTarget=M,y.__webglTexture&&M.depthTexture.image.width===M.width&&M.depthTexture.image.height===M.height||(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N){if(y.__webglInit===void 0&&(y.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),y.__webglTexture===void 0){y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture),G(n.TEXTURE_CUBE_MAP,M.depthTexture);let ee=s.convert(M.depthTexture.format),Z=s.convert(M.depthTexture.type),se;M.depthTexture.format===Sr?se=n.DEPTH_COMPONENT24:M.depthTexture.format===Jr&&(se=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,se,M.width,M.height,0,ee,Z,null)}}else k(M.depthTexture,0);let P=y.__webglTexture,O=fe(M),B=N?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,J=M.depthTexture.format===Jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Sr)me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,B,P,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,J,B,P,0);else{if(M.depthTexture.format!==Jr)throw new Error("Unknown depthTexture format");me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,B,P,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,J,B,P,0)}}function Ce(T){let M=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let N=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),N){let y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,N.removeEventListener("dispose",y)};N.addEventListener("dispose",y),M.__depthDisposeCallback=y}M.__boundDepthTexture=N}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(D)for(let N=0;N<6;N++)Me(M.__webglFramebuffer[N],T,N);else{let N=T.texture.mipmaps;N&&N.length>0?Me(M.__webglFramebuffer[0],T,0):Me(M.__webglFramebuffer,T,0)}else if(D){M.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[N]),M.__webglDepthbuffer[N]===void 0)M.__webglDepthbuffer[N]=n.createRenderbuffer(),xe(M.__webglDepthbuffer[N],T,!1);else{let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,P)}}else{let N=T.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),xe(M.__webglDepthbuffer,T,!1);else{let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,y,n.RENDERBUFFER,P)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let be=[],re=[];function fe(T){return Math.min(r.maxSamples,T.samples)}function me(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(T,M){let D=T.colorSpace,N=T.format,y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==kr&&D!==Kr&&(dt.getTransfer(D)===gt?N===cn&&y===Di||Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",D)),M}function Ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=function(){let T=R;return T>=r.maxTextures&&Be("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T},this.resetTextureUnits=function(){R=0},this.setTexture2D=k,this.setTexture2DArray=function(T,M){let D=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version?$(D,T,M):(T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+M))},this.setTexture3D=function(T,M){let D=i.get(T);T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version?$(D,T,M):t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+M)},this.setTextureCube=function(T,M){let D=i.get(T);T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version?(function(N,y,P){if(y.image.length!==6)return;let O=q(N,y),B=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+P);let J=i.get(B);if(B.version!==J.__version||O===!0){t.activeTexture(n.TEXTURE0+P);let ee=dt.getPrimaries(dt.workingColorSpace),Z=y.colorSpace===Kr?null:dt.getPrimaries(y.colorSpace),se=y.colorSpace===Kr||ee===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ie=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let Se=0;Se<6;Se++)ce[Se]=ie||oe?oe?y.image[Se].image:y.image[Se]:f(y.image[Se],!0,r.maxCubemapSize),ce[Se]=De(y,ce[Se]);let ge=ce[0],Oe=s.convert(y.format,y.colorSpace),Je=s.convert(y.type),lt=S(y.internalFormat,Oe,Je,y.colorSpace),$e=y.isVideoTexture!==!0,Te=J.__version===void 0||O===!0,Xe=B.dataReady,pt,Ft=b(y,ge);if(G(n.TEXTURE_CUBE_MAP,y),ie){$e&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,lt,ge.width,ge.height);for(let Se=0;Se<6;Se++){pt=ce[Se].mipmaps;for(let Ye=0;Ye<pt.length;Ye++){let qe=pt[Ye];y.format!==cn?Oe!==null?$e?Xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,qe.width,qe.height,Oe,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,lt,qe.width,qe.height,0,qe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,qe.width,qe.height,Oe,Je,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,lt,qe.width,qe.height,0,Oe,Je,qe.data)}}}else{if(pt=y.mipmaps,$e&&Te){pt.length>0&&Ft++;let Se=Ge(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,lt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(oe){$e?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ce[Se].width,ce[Se].height,Oe,Je,ce[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,lt,ce[Se].width,ce[Se].height,0,Oe,Je,ce[Se].data);for(let Ye=0;Ye<pt.length;Ye++){let qe=pt[Ye].image[Se].image;$e?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,qe.width,qe.height,Oe,Je,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,lt,qe.width,qe.height,0,Oe,Je,qe.data)}}else{$e?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Oe,Je,ce[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,lt,Oe,Je,ce[Se]);for(let Ye=0;Ye<pt.length;Ye++){let qe=pt[Ye];$e?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,Oe,Je,qe.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,lt,Oe,Je,qe.image[Se])}}}x(y)&&g(n.TEXTURE_CUBE_MAP),J.__version=B.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version})(D,T,M):t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+M)},this.rebindTextures=function(T,M,D){let N=i.get(T);M!==void 0&&te(N.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ce(T)},this.setupRenderTarget=function(T){let M=T.texture,D=i.get(T),N=i.get(M);T.addEventListener("dispose",U);let y=T.textures,P=T.isWebGLCubeRenderTarget===!0,O=y.length>1;if(O||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=M.version,a.memory.textures++),P){D.__webglFramebuffer=[];for(let B=0;B<6;B++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[B]=[];for(let J=0;J<M.mipmaps.length;J++)D.__webglFramebuffer[B][J]=n.createFramebuffer()}else D.__webglFramebuffer[B]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let B=0;B<M.mipmaps.length;B++)D.__webglFramebuffer[B]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(O)for(let B=0,J=y.length;B<J;B++){let ee=i.get(y[B]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let B=0;B<y.length;B++){let J=y[B];D.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[B]);let ee=s.convert(J.format,J.colorSpace),Z=s.convert(J.type),se=S(J.internalFormat,ee,Z,J.colorSpace,T.isXRRenderTarget===!0),ie=fe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,D.__webglColorRenderbuffer[B])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(P){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),G(n.TEXTURE_CUBE_MAP,M);for(let B=0;B<6;B++)if(M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)te(D.__webglFramebuffer[B][J],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J);else te(D.__webglFramebuffer[B],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);x(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let B=0,J=y.length;B<J;B++){let ee=y[B],Z=i.get(ee),se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),G(se,ee),te(D.__webglFramebuffer,T,ee,n.COLOR_ATTACHMENT0+B,se,0),x(ee)&&g(se)}t.unbindTexture()}else{let B=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(B=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(B,N.__webglTexture),G(B,M),M.mipmaps&&M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)te(D.__webglFramebuffer[J],T,M,n.COLOR_ATTACHMENT0,B,J);else te(D.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,B,0);x(M)&&g(B),t.unbindTexture()}T.depthBuffer&&Ce(T)},this.updateRenderTargetMipmap=function(T){let M=T.textures;for(let D=0,N=M.length;D<N;D++){let y=M[D];if(x(y)){let P=v(T),O=i.get(y).__webglTexture;t.bindTexture(P,O),g(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(me(T)===!1){let M=T.textures,D=T.width,N=T.height,y=n.COLOR_BUFFER_BIT,P=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=i.get(T),B=M.length>1;if(B)for(let ee=0;ee<M.length;ee++)t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer);let J=T.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(y|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(y|=n.STENCIL_BUFFER_BIT)),B){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);let Z=i.get(M[ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,D,N,0,0,D,N,y,n.NEAREST),l===!0&&(be.length=0,re.length=0,be.push(n.COLOR_ATTACHMENT0+ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(P),re.push(P),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),B)for(let ee=0;ee<M.length;ee++){t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);let Z=i.get(M[ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lv(n,e){return{convert:function(t,i=Kr){let r,s=dt.getTransfer(i);if(t===Di)return n.UNSIGNED_BYTE;if(t===Nl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Ul)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===Ch)return n.BYTE;if(t===Rh)return n.SHORT;if(t===Gs)return n.UNSIGNED_SHORT;if(t===Dl)return n.INT;if(t===Jn)return n.UNSIGNED_INT;if(t===qi)return n.FLOAT;if(t===bn)return n.HALF_FLOAT;if(t===Sp)return n.ALPHA;if(t===bp)return n.RGB;if(t===cn)return n.RGBA;if(t===Sr)return n.DEPTH_COMPONENT;if(t===Jr)return n.DEPTH_STENCIL;if(t===Fl)return n.RED;if(t===Ol)return n.RED_INTEGER;if(t===Ws)return n.RG;if(t===Lh)return n.RG_INTEGER;if(t===Dh)return n.RGBA_INTEGER;if(t===Bl||t===zl||t===kl||t===Hl)if(s===gt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===zl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===kl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Nh||t===Uh||t===Fh||t===Oh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Nh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Bh||t===zh||t===kh||t===Hh||t===Gh||t===Vh||t===Wh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Bh||t===zh)return s===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===kh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Hh)return r.COMPRESSED_R11_EAC;if(t===Gh)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Vh)return r.COMPRESSED_RG11_EAC;if(t===Wh)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===jh||t===Xh||t===qh||t===Yh||t===Zh||t===Jh||t===Kh||t===$h||t===Qh||t===eu||t===tu||t===iu||t===nu||t===ru){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===jh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Xh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===qh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Yh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Zh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Jh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Kh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===$h)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Qh)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===eu)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===tu)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===iu)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===nu)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===ru)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===su||t===au||t===ou){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===su)return s===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===lu||t===cu||t===hu||t===uu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(t===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Vs?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ta(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Li({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends Vn{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,f=typeof XRWebGLBinding<"u",x=new Lu,g={},v=t.getContextAttributes(),S=null,E=null,b=[],C=[],U=new ue,F=null,R=new zt;R.viewport=new Tt;let k=new zt;k.viewport=new Tt;let W=[R,k],H=new Cl,j=null,G=null;function q(re){let fe=C.indexOf(re.inputSource);if(fe===-1)return;let me=b[fe];me!==void 0&&(me.update(re.inputSource,re.frame,c||a),me.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let re=0;re<b.length;re++){let fe=C[re];fe!==null&&(C[re]=null,b[re].disconnect(fe))}j=null,G=null,x.reset();for(let re in g)delete g[re];e.setRenderTarget(S),p=null,d=null,u=null,r=null,E=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}function $(re){for(let fe=0;fe<re.removed.length;fe++){let me=re.removed[fe],De=C.indexOf(me);De>=0&&(C[De]=null,b[De].disconnect(me))}for(let fe=0;fe<re.added.length;fe++){let me=re.added[fe],De=C.indexOf(me);if(De===-1){for(let T=0;T<b.length;T++){if(T>=C.length){C.push(me),De=T;break}if(C[T]===null){C[T]=me,De=T;break}}if(De===-1)break}let Ge=b[De];Ge&&Ge.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=b[re];return fe===void 0&&(fe=new Cs,b[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=b[re];return fe===void 0&&(fe=new Cs,b[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=b[re];return fe===void 0&&(fe=new Cs,b[re]=fe),fe.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&f&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(U),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,me=null,De=null;v.depth&&(De=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?Jr:Sr,me=v.stencil?Vs:Jn);let Ge={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ii(d.textureWidth,d.textureHeight,{format:cn,type:Di,depthTexture:new _r(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ii(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let te=new A,xe=new A;function Me(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let fe=re.near,me=re.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(me=x.depthFar)),H.near=k.near=R.near=fe,H.far=k.far=R.far=me,j===H.near&&G===H.far||(r.updateRenderState({depthNear:H.near,depthFar:H.far}),j=H.near,G=H.far),H.layers.mask=6|re.layers.mask,R.layers.mask=-5&H.layers.mask,k.layers.mask=-3&H.layers.mask;let De=re.parent,Ge=H.cameras;Me(H,De);for(let T=0;T<Ge.length;T++)Me(Ge[T],De);Ge.length===2?(function(T,M,D){te.setFromMatrixPosition(M.matrixWorld),xe.setFromMatrixPosition(D.matrixWorld);let N=te.distanceTo(xe),y=M.projectionMatrix.elements,P=D.projectionMatrix.elements,O=y[14]/(y[10]-1),B=y[14]/(y[10]+1),J=(y[9]+1)/y[5],ee=(y[9]-1)/y[5],Z=(y[8]-1)/y[0],se=(P[8]+1)/P[0],ie=O*Z,oe=O*se,ce=N/(-Z+se),ge=ce*-Z;if(M.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ge),T.translateZ(ce),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),y[10]===-1)T.projectionMatrix.copy(M.projectionMatrix),T.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let Oe=O+ce,Je=B+ce,lt=ie-ge,$e=oe+(N-ge),Te=J*B/Je*Oe,Xe=ee*B/Je*Oe;T.projectionMatrix.makePerspective(lt,$e,Te,Xe,Oe,Je),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}})(H,R,k):H.projectionMatrix.copy(R.projectionMatrix),(function(T,M,D){D===null?T.matrix.copy(M.matrixWorld):(T.matrix.copy(D.matrixWorld),T.matrix.invert(),T.matrix.multiply(M.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(M.projectionMatrix),T.projectionMatrixInverse.copy(M.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*ws*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(re,H,De)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(re){return g[re]};let Ce=null,be=new uf;be.setAnimationLoop(function(re,fe){if(h=fe.getViewerPose(c||a),m=fe,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let De=!1;me.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let T=0;T<me.length;T++){let M=me[T],D=null;if(p!==null)D=p.getViewport(M);else{let y=u.getViewSubImage(d,M);D=y.viewport,T===0&&(e.setRenderTargetTextures(E,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(E))}let N=W[T];N===void 0&&(N=new zt,N.layers.enable(T),N.viewport=new Tt,W[T]=N),N.matrix.fromArray(M.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(M.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(D.x,D.y,D.width,D.height),T===0&&(H.matrix.copy(N.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(N)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){u=i.getBinding();let T=u.getDepthInformation(me[0]);T&&T.isValid&&T.texture&&x.init(T,r.renderState)}if(Ge&&Ge.includes("camera-access")&&f){e.state.unbindTexture(),u=i.getBinding();for(let T=0;T<me.length;T++){let M=me[T].camera;if(M){let D=g[M];D||(D=new Ta,g[M]=D);let N=u.getCameraImage(M);D.sourceTexture=N}}}}for(let me=0;me<b.length;me++){let De=C[me],Ge=b[me];De!==null&&Ge!==void 0&&Ge.update(De,fe,c||a)}Ce&&Ce(re,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}),this.setAnimationLoop=function(re){Ce=re},this.dispose=function(){}}},ts=new sn,cv=new Ze;function hv(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ti&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ti&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,ts.copy(l),ts.x*=-1,ts.y*=-1,ts.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),r.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(ts)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,gu(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ti&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function uv(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let f=u.value,x=d+"_"+p;if(m[x]===void 0)return m[x]=typeof f=="number"||typeof f=="boolean"?f:f.clone(),!0;{let g=m[x];if(typeof f=="number"||typeof f=="boolean"){if(g!==f)return m[x]=f,!0}else if(g.equals(f)===!1)return g.copy(f),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(x){let g=x.uniforms,v=0,S=16;for(let b=0,C=g.length;b<C;b++){let U=Array.isArray(g[b])?g[b]:[g[b]];for(let F=0,R=U.length;F<R;F++){let k=U[F],W=Array.isArray(k.value)?k.value:[k.value];for(let H=0,j=W.length;H<j;H++){let G=c(W[H]),q=v%S,Y=q%G.boundary,$=q+Y;v+=Y,$!==0&&S-$<G.storage&&(v+=S-$),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=G.storage}}}let E=v%S;E>0&&(v+=S-E),x.__size=v,x.__cache={}})(u),p=(function(x){let g=(function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=g;let v=n.createBuffer(),S=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;i.updateUBOMapping(u,m);let f=e.render.frame;s[u.id]!==f&&((function(x){let g=r[x.id],v=x.uniforms,S=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,b=v.length;E<b;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let U=0,F=C.length;U<F;U++){let R=C[U];if(l(R,E,U,S)===!0){let k=R.__offset,W=Array.isArray(R.value)?R.value:[R.value],H=0;for(let j=0;j<W.length;j++){let G=W[j],q=c(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,k+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=f)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),En=null,br=class{constructor(e={}){let{canvas:t=Lp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Di}=e,m;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let f=p,x=new Set([Dh,Lh,Ol]),g=new Set([Di,Jn,Gs,Vs,Nl,Ul]),v=new Uint32Array(4),S=new Int32Array(4),E=null,b=null,C=[],U=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1;this._outputColorSpace=_t;let W=0,H=0,j=null,G=-1,q=null,Y=new Tt,$=new Tt,te=null,xe=new Ae(0),Me=0,Ce=t.width,be=t.height,re=1,fe=null,me=null,De=new Tt(0,0,Ce,be),Ge=new Tt(0,0,Ce,be),T=!1,M=new vr,D=!1,N=!1,y=new Ze,P=new A,O=new Tt,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function ee(){return j===null?re:1}let Z,se,ie,oe,ce,ge,Oe,Je,lt,$e,Te,Xe,pt,Ft,Se,Ye,qe,Zi,Cn,kt,xt,St,Ui,z=i;function Rn(w,V){return t.getContext(w,V)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Tr,!1),t.addEventListener("webglcontextrestored",ns,!1),t.addEventListener("webglcontextcreationerror",rs,!1),z===null){let V="webgl2";if(z=Rn(V,w),z===null)throw Rn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw He("WebGLRenderer: "+w.message),w}function In(){Z=new zg(z),Z.init(),xt=new lv(z,Z),se=new Ug(z,Z,e,xt),ie=new av(z,Z),se.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),oe=new Gg(z),ce=new Z0,ge=new ov(z,Z,ie,ce,se,xt,oe),Oe=new Bg(R),Je=new Ig(z),St=new Dg(z,Je),lt=new kg(z,Je,oe,St),$e=new Wg(z,lt,Je,St,oe),Zi=new Vg(z,se,ge),Se=new Fg(ce),Te=new Y0(R,Oe,Z,se,St,Se),Xe=new hv(R,ce),pt=new K0,Ft=new iv(Z),qe=new Lg(R,Oe,ie,$e,m,l),Ye=new sv(R,$e,se),Ui=new uv(z,oe,se,ie),Cn=new Ng(z,Z,oe),kt=new Hg(z,Z,oe),oe.programs=Te.programs,R.capabilities=se,R.extensions=Z,R.properties=ce,R.renderLists=pt,R.shadowMap=Ye,R.state=ie,R.info=oe}In(),f!==Di&&(F=new Xg(f,t.width,t.height,r,s));let bt=new Du(R,z);function Tr(w){w.preventDefault(),pu("WebGLRenderer: Context Lost."),k=!0}function ns(){pu("WebGLRenderer: Context Restored."),k=!1;let w=oe.autoReset,V=Ye.enabled,Q=Ye.autoUpdate,ne=Ye.needsUpdate,K=Ye.type;In(),oe.autoReset=w,Ye.enabled=V,Ye.autoUpdate=Q,Ye.needsUpdate=ne,Ye.type=K}function rs(w){He("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wr(w){let V=w.target;V.removeEventListener("dispose",wr),(function(Q){(function(ne){let K=ce.get(ne).programs;K!==void 0&&(K.forEach(function(le){Te.releaseProgram(le)}),ne.isShaderMaterial&&Te.releaseShaderCache(ne))})(Q),ce.remove(Q)})(V)}function ct(w,V,Q){w.transparent===!0&&w.side===ui&&w.forceSinglePass===!1?(w.side=Ti,w.needsUpdate=!0,ir(w,V,Q),w.side=zs,w.needsUpdate=!0,ir(w,V,Q),w.side=ui):ir(w,V,Q)}this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(Ce,be,!1))},this.getSize=function(w){return w.set(Ce,be)},this.setSize=function(w,V,Q=!0){bt.isPresenting?Be("WebGLRenderer: Can't change size while VR device is presenting."):(Ce=w,be=V,t.width=Math.floor(w*re),t.height=Math.floor(V*re),Q===!0&&(t.style.width=w+"px",t.style.height=V+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,w,V))},this.getDrawingBufferSize=function(w){return w.set(Ce*re,be*re).floor()},this.setDrawingBufferSize=function(w,V,Q){Ce=w,be=V,re=Q,t.width=Math.floor(w*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(f!==Di){if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(De)},this.setViewport=function(w,V,Q,ne){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,V,Q,ne),ie.viewport(Y.copy(De).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(Ge)},this.setScissor=function(w,V,Q,ne){w.isVector4?Ge.set(w.x,w.y,w.z,w.w):Ge.set(w,V,Q,ne),ie.scissor($.copy(Ge).multiplyScalar(re).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(w){ie.setScissorTest(T=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Q=!0){let ne=0;if(w){let K=!1;if(j!==null){let le=j.texture.format;K=x.has(le)}if(K){let le=j.texture.type,_e=g.has(le),Re=qe.getClearColor(),Ie=qe.getClearAlpha(),Ne=Re.r,je=Re.g,Pe=Re.b;_e?(v[0]=Ne,v[1]=je,v[2]=Pe,v[3]=Ie,z.clearBufferuiv(z.COLOR,0,v)):(S[0]=Ne,S[1]=je,S[2]=Pe,S[3]=Ie,z.clearBufferiv(z.COLOR,0,S))}else ne|=z.COLOR_BUFFER_BIT}V&&(ne|=z.DEPTH_BUFFER_BIT),Q&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tr,!1),t.removeEventListener("webglcontextrestored",ns,!1),t.removeEventListener("webglcontextcreationerror",rs,!1),qe.dispose(),pt.dispose(),Ft.dispose(),ce.dispose(),Oe.dispose(),$e.dispose(),St.dispose(),Ui.dispose(),Te.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",si),bt.removeEventListener("sessionend",eo),Pn.stop()},this.renderBufferDirect=function(w,V,Q,ne,K,le){V===null&&(V=B);let _e=K.isMesh&&K.matrixWorld.determinant()<0,Re=(function(it,Ve,vt,Fe,ke){Ve.isScene!==!0&&(Ve=B),ge.resetTextureUnits();let Dt=Ve.fog,nr=Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial||Fe.isMeshPhongMaterial?Ve.environment:null,Bi=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kr,un=Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial&&!Fe.envMap||Fe.isMeshPhongMaterial&&!Fe.envMap,Si=Oe.get(Fe.envMap||nr,un),fi=Fe.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,mi=!!vt.attributes.tangent&&(!!Fe.normalMap||Fe.anisotropy>0),Ln=!!vt.morphAttributes.position,ii=!!vt.morphAttributes.normal,Dn=!!vt.morphAttributes.color,Cr=on;Fe.toneMapped&&(j!==null&&j.isXRRenderTarget!==!0||(Cr=R.toneMapping));let rr=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,Ht=rr!==void 0?rr.length:0,we=ce.get(Fe),gi=b.state.lights;if(D===!0&&(N===!0||it!==q)){let Jt=it===q&&Fe.id===G;Se.setState(Fe,it,Jt)}let Zt=!1;Fe.version===we.__version?we.needsLights&&we.lightsStateVersion!==gi.state.version||we.outputColorSpace!==Bi||ke.isBatchedMesh&&we.batching===!1?Zt=!0:ke.isBatchedMesh||we.batching!==!0?ke.isBatchedMesh&&we.batchingColor===!0&&ke.colorTexture===null||ke.isBatchedMesh&&we.batchingColor===!1&&ke.colorTexture!==null||ke.isInstancedMesh&&we.instancing===!1?Zt=!0:ke.isInstancedMesh||we.instancing!==!0?ke.isSkinnedMesh&&we.skinning===!1?Zt=!0:ke.isSkinnedMesh||we.skinning!==!0?ke.isInstancedMesh&&we.instancingColor===!0&&ke.instanceColor===null||ke.isInstancedMesh&&we.instancingColor===!1&&ke.instanceColor!==null||ke.isInstancedMesh&&we.instancingMorph===!0&&ke.morphTexture===null||ke.isInstancedMesh&&we.instancingMorph===!1&&ke.morphTexture!==null||we.envMap!==Si||Fe.fog===!0&&we.fog!==Dt?Zt=!0:we.numClippingPlanes===void 0||we.numClippingPlanes===Se.numPlanes&&we.numIntersection===Se.numIntersection?(we.vertexAlphas!==fi||we.vertexTangents!==mi||we.morphTargets!==Ln||we.morphNormals!==ii||we.morphColors!==Dn||we.toneMapping!==Cr||we.morphTargetsCount!==Ht)&&(Zt=!0):Zt=!0:Zt=!0:Zt=!0:Zt=!0:(Zt=!0,we.__version=Fe.version);let mt=we.currentProgram;Zt===!0&&(mt=ir(Fe,Ve,ke));let Ki=!1,dn=!1,vi=!1,Qe=mt.getUniforms(),bi=we.uniforms;if(ie.useProgram(mt.program)&&(Ki=!0,dn=!0,vi=!0),Fe.id!==G&&(G=Fe.id,dn=!0),Ki||q!==it){ie.buffers.depth.getReversed()&&it.reversedDepth!==!0&&(it._reversedDepth=!0,it.updateProjectionMatrix()),Qe.setValue(z,"projectionMatrix",it.projectionMatrix),Qe.setValue(z,"viewMatrix",it.matrixWorldInverse);let Jt=Qe.map.cameraPosition;Jt!==void 0&&Jt.setValue(z,P.setFromMatrixPosition(it.matrixWorld)),se.logarithmicDepthBuffer&&Qe.setValue(z,"logDepthBufFC",2/(Math.log(it.far+1)/Math.LN2)),(Fe.isMeshPhongMaterial||Fe.isMeshToonMaterial||Fe.isMeshLambertMaterial||Fe.isMeshBasicMaterial||Fe.isMeshStandardMaterial||Fe.isShaderMaterial)&&Qe.setValue(z,"isOrthographic",it.isOrthographicCamera===!0),q!==it&&(q=it,dn=!0,vi=!0)}if(we.needsLights&&(gi.state.directionalShadowMap.length>0&&Qe.setValue(z,"directionalShadowMap",gi.state.directionalShadowMap,ge),gi.state.spotShadowMap.length>0&&Qe.setValue(z,"spotShadowMap",gi.state.spotShadowMap,ge),gi.state.pointShadowMap.length>0&&Qe.setValue(z,"pointShadowMap",gi.state.pointShadowMap,ge)),ke.isSkinnedMesh){Qe.setOptional(z,ke,"bindMatrix"),Qe.setOptional(z,ke,"bindMatrixInverse");let Jt=ke.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Qe.setValue(z,"boneTexture",Jt.boneTexture,ge))}ke.isBatchedMesh&&(Qe.setOptional(z,ke,"batchingTexture"),Qe.setValue(z,"batchingTexture",ke._matricesTexture,ge),Qe.setOptional(z,ke,"batchingIdTexture"),Qe.setValue(z,"batchingIdTexture",ke._indirectTexture,ge),Qe.setOptional(z,ke,"batchingColorTexture"),ke._colorsTexture!==null&&Qe.setValue(z,"batchingColorTexture",ke._colorsTexture,ge));let sr=vt.morphAttributes;sr.position===void 0&&sr.normal===void 0&&sr.color===void 0||Zi.update(ke,vt,mt),(dn||we.receiveShadow!==ke.receiveShadow)&&(we.receiveShadow=ke.receiveShadow,Qe.setValue(z,"receiveShadow",ke.receiveShadow)),(Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial||Fe.isMeshPhongMaterial)&&Fe.envMap===null&&Ve.environment!==null&&(bi.envMapIntensity.value=Ve.environmentIntensity),bi.dfgLUT!==void 0&&(bi.dfgLUT.value=(En===null&&(En=new Gr(dv,16,16,Ws,bn),En.name="DFG_LUT",En.minFilter=Qt,En.magFilter=Qt,En.wrapS=gr,En.wrapT=gr,En.generateMipmaps=!1,En.needsUpdate=!0),En)),dn&&(Qe.setValue(z,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&(Ei=vi,(_i=bi).ambientLightColor.needsUpdate=Ei,_i.lightProbe.needsUpdate=Ei,_i.directionalLights.needsUpdate=Ei,_i.directionalLightShadows.needsUpdate=Ei,_i.pointLights.needsUpdate=Ei,_i.pointLightShadows.needsUpdate=Ei,_i.spotLights.needsUpdate=Ei,_i.spotLightShadows.needsUpdate=Ei,_i.rectAreaLights.needsUpdate=Ei,_i.hemisphereLights.needsUpdate=Ei),Dt&&Fe.fog===!0&&Xe.refreshFogUniforms(bi,Dt),Xe.refreshMaterialUniforms(bi,Fe,re,be,b.state.transmissionRenderTarget[it.id]),qs.upload(z,Fi(we),bi,ge));var _i,Ei;if(Fe.isShaderMaterial&&Fe.uniformsNeedUpdate===!0&&(qs.upload(z,Fi(we),bi,ge),Fe.uniformsNeedUpdate=!1),Fe.isSpriteMaterial&&Qe.setValue(z,"center",ke.center),Qe.setValue(z,"modelViewMatrix",ke.modelViewMatrix),Qe.setValue(z,"normalMatrix",ke.normalMatrix),Qe.setValue(z,"modelMatrix",ke.matrixWorld),Fe.isShaderMaterial||Fe.isRawShaderMaterial){let Jt=Fe.uniformsGroups;for(let $i=0,Rr=Jt.length;$i<Rr;$i++){let de=Jt[$i];Ui.update(de,mt),Ui.bind(de,mt)}}return mt})(w,V,Q,ne,K);ie.setMaterial(ne,_e);let Ie=Q.index,Ne=1;if(ne.wireframe===!0){if(Ie=lt.getWireframeAttribute(Q),Ie===void 0)return;Ne=2}let je=Q.drawRange,Pe=Q.attributes.position,Ue=je.start*Ne,rt=(je.start+je.count)*Ne;le!==null&&(Ue=Math.max(Ue,le.start*Ne),rt=Math.min(rt,(le.start+le.count)*Ne)),Ie!==null?(Ue=Math.max(Ue,0),rt=Math.min(rt,Ie.count)):Pe!=null&&(Ue=Math.max(Ue,0),rt=Math.min(rt,Pe.count));let wt=rt-Ue;if(wt<0||wt===1/0)return;let ve;St.setup(K,ne,Re,Q,Ie);let ht=Cn;if(Ie!==null&&(ve=Je.get(Ie),ht=kt,ht.setIndex(ve)),K.isMesh)ne.wireframe===!0?(ie.setLineWidth(ne.wireframeLinewidth*ee()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(K.isLine){let it=ne.linewidth;it===void 0&&(it=1),ie.setLineWidth(it*ee()),K.isLineSegments?ht.setMode(z.LINES):K.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else K.isPoints?ht.setMode(z.POINTS):K.isSprite&&ht.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)va("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ht.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let it=K._multiDrawStarts,Ve=K._multiDrawCounts,vt=K._multiDrawCount,Fe=Ie?Je.get(Ie).bytesPerElement:1,ke=ce.get(ne).currentProgram.getUniforms();for(let Dt=0;Dt<vt;Dt++)ke.setValue(z,"_gl_DrawID",Dt),ht.render(it[Dt]/Fe,Ve[Dt])}else if(K.isInstancedMesh)ht.renderInstances(Ue,wt,K.count);else if(Q.isInstancedBufferGeometry){let it=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ve=Math.min(Q.instanceCount,it);ht.renderInstances(Ue,wt,Ve)}else ht.render(Ue,wt)},this.compile=function(w,V,Q=null){Q===null&&(Q=w),b=Ft.get(Q),b.init(V),U.push(b),Q.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),w!==Q&&w.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights();let ne=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let le=K.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){let Re=le[_e];ct(Re,Q,K),ne.add(Re)}else ct(le,Q,K),ne.add(le)}),b=U.pop(),ne},this.compileAsync=function(w,V,Q=null){let ne=this.compile(w,V,Q);return new Promise(K=>{function le(){ne.forEach(function(_e){ce.get(_e).currentProgram.isReady()&&ne.delete(_e)}),ne.size!==0?setTimeout(le,10):K(w)}Z.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Qn=null;function si(){Pn.stop()}function eo(){Pn.start()}let Pn=new uf;function er(w,V,Q,ne){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||M.intersectsSprite(w)){ne&&O.setFromMatrixPosition(w.matrixWorld).applyMatrix4(y);let le=$e.update(w),_e=w.material;_e.visible&&E.push(w,le,_e,Q,O.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||M.intersectsObject(w))){let le=$e.update(w),_e=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),O.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),O.copy(le.boundingSphere.center)),O.applyMatrix4(w.matrixWorld).applyMatrix4(y)),Array.isArray(_e)){let Re=le.groups;for(let Ie=0,Ne=Re.length;Ie<Ne;Ie++){let je=Re[Ie],Pe=_e[je.materialIndex];Pe&&Pe.visible&&E.push(w,le,Pe,Q,O.z,je)}}else _e.visible&&E.push(w,le,_e,Q,O.z,null)}}let K=w.children;for(let le=0,_e=K.length;le<_e;le++)er(K[le],V,Q,ne)}function Ji(w,V,Q,ne){let{opaque:K,transmissive:le,transparent:_e}=w;b.setupLightsView(Q),D===!0&&Se.setGlobalState(R.clippingPlanes,Q),ne&&ie.viewport(Y.copy(ne)),K.length>0&&tr(K,V,Q),le.length>0&&tr(le,V,Q),_e.length>0&&tr(_e,V,Q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ar(w,V,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ne.id]===void 0){let Pe=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ne.id]=new Ii(1,1,{generateMipmaps:!0,type:Pe?bn:Di,minFilter:ln,samples:Math.max(4,se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let K=b.state.transmissionRenderTarget[ne.id],le=ne.viewport||Y;K.setSize(le.z*R.transmissionResolutionScale,le.w*R.transmissionResolutionScale);let _e=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(K),R.getClearColor(xe),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),J&&qe.render(Q);let Ne=R.toneMapping;R.toneMapping=on;let je=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),b.setupLightsView(ne),D===!0&&Se.setGlobalState(R.clippingPlanes,ne),tr(w,Q,ne),ge.updateMultisampleRenderTarget(K),ge.updateRenderTargetMipmap(K),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Ue=0,rt=V.length;Ue<rt;Ue++){let wt=V[Ue],{object:ve,geometry:ht,material:it,group:Ve}=wt;if(it.side===ui&&ve.layers.test(ne.layers)){let vt=it.side;it.side=Ti,it.needsUpdate=!0,to(ve,Q,ne,ht,it,Ve),it.side=vt,it.needsUpdate=!0,Pe=!0}}Pe===!0&&(ge.updateMultisampleRenderTarget(K),ge.updateRenderTargetMipmap(K))}R.setRenderTarget(_e,Re,Ie),R.setClearColor(xe,Me),je!==void 0&&(ne.viewport=je),R.toneMapping=Ne}function tr(w,V,Q){let ne=V.isScene===!0?V.overrideMaterial:null;for(let K=0,le=w.length;K<le;K++){let _e=w[K],{object:Re,geometry:Ie,group:Ne}=_e,je=_e.material;je.allowOverride===!0&&ne!==null&&(je=ne),Re.layers.test(Q.layers)&&to(Re,V,Q,Ie,je,Ne)}}function to(w,V,Q,ne,K,le){w.onBeforeRender(R,V,Q,ne,K,le),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(R,V,Q,ne,w,le),K.transparent===!0&&K.side===ui&&K.forceSinglePass===!1?(K.side=Ti,K.needsUpdate=!0,R.renderBufferDirect(Q,V,ne,K,w,le),K.side=zs,K.needsUpdate=!0,R.renderBufferDirect(Q,V,ne,K,w,le),K.side=ui):R.renderBufferDirect(Q,V,ne,K,w,le),w.onAfterRender(R,V,Q,ne,K,le)}function ir(w,V,Q){V.isScene!==!0&&(V=B);let ne=ce.get(w),K=b.state.lights,le=b.state.shadowsArray,_e=K.state.version,Re=Te.getParameters(w,K.state,le,V,Q),Ie=Te.getProgramCacheKey(Re),Ne=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,ne.fog=V.fog;let je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=Oe.get(w.envMap||ne.environment,je),ne.envMapRotation=ne.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",wr),Ne=new Map,ne.programs=Ne);let Pe=Ne.get(Ie);if(Pe!==void 0){if(ne.currentProgram===Pe&&ne.lightsStateVersion===_e)return Ct(w,Re),Pe}else Re.uniforms=Te.getUniforms(w),w.onBeforeCompile(Re,R),Pe=Te.acquireProgram(Re,Ie),Ne.set(Ie,Pe),ne.uniforms=Re.uniforms;let Ue=ne.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(Ue.clippingPlanes=Se.uniform),Ct(w,Re),ne.needsLights=(function(rt){return rt.isMeshLambertMaterial||rt.isMeshToonMaterial||rt.isMeshPhongMaterial||rt.isMeshStandardMaterial||rt.isShadowMaterial||rt.isShaderMaterial&&rt.lights===!0})(w),ne.lightsStateVersion=_e,ne.needsLights&&(Ue.ambientLightColor.value=K.state.ambient,Ue.lightProbe.value=K.state.probe,Ue.directionalLights.value=K.state.directional,Ue.directionalLightShadows.value=K.state.directionalShadow,Ue.spotLights.value=K.state.spot,Ue.spotLightShadows.value=K.state.spotShadow,Ue.rectAreaLights.value=K.state.rectArea,Ue.ltc_1.value=K.state.rectAreaLTC1,Ue.ltc_2.value=K.state.rectAreaLTC2,Ue.pointLights.value=K.state.point,Ue.pointLightShadows.value=K.state.pointShadow,Ue.hemisphereLights.value=K.state.hemi,Ue.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ue.spotLightMatrix.value=K.state.spotLightMatrix,Ue.spotLightMap.value=K.state.spotLightMap,Ue.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=Pe,ne.uniformsList=null,Pe}function Fi(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=qs.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ct(w,V){let Q=ce.get(w);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}Pn.setAnimationLoop(function(w){Qn&&Qn(w)}),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(w){Qn=w,bt.setAnimationLoop(w),w===null?Pn.stop():Pn.start()},bt.addEventListener("sessionstart",si),bt.addEventListener("sessionend",eo),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0)return void He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(k===!0)return;let Q=bt.enabled===!0&&bt.isPresenting===!0,ne=F!==null&&(j===null||Q)&&F.begin(R,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),bt.enabled!==!0||bt.isPresenting!==!0||F!==null&&F.isCompositing()!==!1||(bt.cameraAutoUpdate===!0&&bt.updateCamera(V),V=bt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,V,j),b=Ft.get(w,U.length),b.init(V),U.push(b),y.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),M.setFromProjectionMatrix(y,Gn,V.reversedDepth),N=this.localClippingEnabled,D=Se.init(this.clippingPlanes,N),E=pt.get(w,C.length),E.init(),C.push(E),bt.enabled===!0&&bt.isPresenting===!0){let le=R.xr.getDepthSensingMesh();le!==null&&er(le,V,-1/0,R.sortObjects)}er(w,V,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(fe,me),J=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,J&&qe.addToRenderList(E,w),this.info.render.frame++,D===!0&&Se.beginShadows();let K=b.state.shadowsArray;if(Ye.render(K,w,V),D===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){let le=E.opaque,_e=E.transmissive;if(b.setupLights(),V.isArrayCamera){let Re=V.cameras;if(_e.length>0)for(let Ie=0,Ne=Re.length;Ie<Ne;Ie++)Ar(le,_e,w,Re[Ie]);J&&qe.render(w);for(let Ie=0,Ne=Re.length;Ie<Ne;Ie++){let je=Re[Ie];Ji(E,w,je,je.viewport)}}else _e.length>0&&Ar(le,_e,w,V),J&&qe.render(w),Ji(E,w,V)}j!==null&&H===0&&(ge.updateMultisampleRenderTarget(j),ge.updateRenderTargetMipmap(j)),ne&&F.end(R),w.isScene===!0&&w.onAfterRender(R,w,V),St.resetDefaultState(),G=-1,q=null,U.pop(),U.length>0?(b=U[U.length-1],D===!0&&Se.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),E=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,V,Q){let ne=ce.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ce.get(w.texture).__webglTexture=V,ce.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:Q,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let Q=ce.get(w);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};let ia=z.createFramebuffer();this.setRenderTarget=function(w,V=0,Q=0){j=w,W=V,H=Q;let ne=null,K=!1,le=!1;if(w){let _e=ce.get(w);if(_e.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(z.FRAMEBUFFER,_e.__webglFramebuffer),Y.copy(w.viewport),$.copy(w.scissor),te=w.scissorTest,ie.viewport(Y),ie.scissor($),ie.setScissorTest(te),void(G=-1);if(_e.__webglFramebuffer===void 0)ge.setupRenderTarget(w);else if(_e.__hasExternalTextures)ge.rebindTextures(w,ce.get(w.texture).__webglTexture,ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ne=w.depthTexture;if(_e.__boundDepthTexture!==Ne){if(Ne!==null&&ce.has(Ne)&&(w.width!==Ne.image.width||w.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(w)}}let Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);let Ie=ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ne=Array.isArray(Ie[V])?Ie[V][Q]:Ie[V],K=!0):ne=w.samples>0&&ge.useMultisampledRTT(w)===!1?ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[Q]:Ie,Y.copy(w.viewport),$.copy(w.scissor),te=w.scissorTest}else Y.copy(De).multiplyScalar(re).floor(),$.copy(Ge).multiplyScalar(re).floor(),te=T;if(Q!==0&&(ne=ia),ie.bindFramebuffer(z.FRAMEBUFFER,ne)&&ie.drawBuffers(w,ne),ie.viewport(Y),ie.scissor($),ie.setScissorTest(te),K){let _e=ce.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e.__webglTexture,Q)}else if(le){let _e=V;for(let Re=0;Re<w.textures.length;Re++){let Ie=ce.get(w.textures[Re]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,Q,_e)}}else if(w!==null&&Q!==0){let _e=ce.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,_e.__webglTexture,Q)}G=-1},this.readRenderTargetPixels=function(w,V,Q,ne,K,le,_e,Re=0){if(!w||!w.isWebGLRenderTarget)return void He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ie=Ie[_e]),Ie){ie.bindFramebuffer(z.FRAMEBUFFER,Ie);try{let Ne=w.textures[Re],je=Ne.format,Pe=Ne.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!se.textureFormatReadable(je))return void He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Pe))return void He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=w.width-ne&&Q>=0&&Q<=w.height-K&&z.readPixels(V,Q,ne,K,xt.convert(je),xt.convert(Pe),le)}finally{let Ne=j!==null?ce.get(j).__webglFramebuffer:null;ie.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,V,Q,ne,K,le,_e,Re=0){if(!w||!w.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ie=Ie[_e]),Ie){if(V>=0&&V<=w.width-ne&&Q>=0&&Q<=w.height-K){ie.bindFramebuffer(z.FRAMEBUFFER,Ie);let Ne=w.textures[Re],je=Ne.format,Pe=Ne.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!se.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ue),z.bufferData(z.PIXEL_PACK_BUFFER,le.byteLength,z.STREAM_READ),z.readPixels(V,Q,ne,K,xt.convert(je),xt.convert(Pe),0);let rt=j!==null?ce.get(j).__webglFramebuffer:null;ie.bindFramebuffer(z.FRAMEBUFFER,rt);let wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Np(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,le),z.deleteBuffer(Ue),z.deleteSync(wt),le}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,Q=0){let ne=Math.pow(2,-Q),K=Math.floor(w.image.width*ne),le=Math.floor(w.image.height*ne),_e=V!==null?V.x:0,Re=V!==null?V.y:0;ge.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,_e,Re,K,le),ie.unbindTexture()};let Oi=z.createFramebuffer(),Mi=z.createFramebuffer();this.copyTextureToTexture=function(w,V,Q=null,ne=null,K=0,le=0){let _e,Re,Ie,Ne,je,Pe,Ue,rt,wt,ve=w.isCompressedTexture?w.mipmaps[le]:w.image;if(Q!==null)_e=Q.max.x-Q.min.x,Re=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Ne=Q.min.x,je=Q.min.y,Pe=Q.isBox3?Q.min.z:0;else{let Si=Math.pow(2,-K);_e=Math.floor(ve.width*Si),Re=Math.floor(ve.height*Si),Ie=w.isDataArrayTexture?ve.depth:w.isData3DTexture?Math.floor(ve.depth*Si):1,Ne=0,je=0,Pe=0}ne!==null?(Ue=ne.x,rt=ne.y,wt=ne.z):(Ue=0,rt=0,wt=0);let ht=xt.convert(V.format),it=xt.convert(V.type),Ve;V.isData3DTexture?(ge.setTexture3D(V,0),Ve=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ge.setTexture2DArray(V,0),Ve=z.TEXTURE_2D_ARRAY):(ge.setTexture2D(V,0),Ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let vt=z.getParameter(z.UNPACK_ROW_LENGTH),Fe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ke=z.getParameter(z.UNPACK_SKIP_PIXELS),Dt=z.getParameter(z.UNPACK_SKIP_ROWS),nr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pe);let Bi=w.isDataArrayTexture||w.isData3DTexture,un=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Si=ce.get(w),fi=ce.get(V),mi=ce.get(Si.__renderTarget),Ln=ce.get(fi.__renderTarget);ie.bindFramebuffer(z.READ_FRAMEBUFFER,mi.__webglFramebuffer),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let ii=0;ii<Ie;ii++)Bi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.get(w).__webglTexture,K,Pe+ii),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.get(V).__webglTexture,le,wt+ii)),z.blitFramebuffer(Ne,je,_e,Re,Ue,rt,_e,Re,z.DEPTH_BUFFER_BIT,z.NEAREST);ie.bindFramebuffer(z.READ_FRAMEBUFFER,null),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||ce.has(w)){let Si=ce.get(w),fi=ce.get(V);ie.bindFramebuffer(z.READ_FRAMEBUFFER,Oi),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mi);for(let mi=0;mi<Ie;mi++)Bi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Si.__webglTexture,K,Pe+mi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Si.__webglTexture,K),un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fi.__webglTexture,le,wt+mi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fi.__webglTexture,le),K!==0?z.blitFramebuffer(Ne,je,_e,Re,Ue,rt,_e,Re,z.COLOR_BUFFER_BIT,z.NEAREST):un?z.copyTexSubImage3D(Ve,le,Ue,rt,wt+mi,Ne,je,_e,Re):z.copyTexSubImage2D(Ve,le,Ue,rt,Ne,je,_e,Re);ie.bindFramebuffer(z.READ_FRAMEBUFFER,null),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Ve,le,Ue,rt,wt,_e,Re,Ie,ht,it,ve.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Ve,le,Ue,rt,wt,_e,Re,Ie,ht,ve.data):z.texSubImage3D(Ve,le,Ue,rt,wt,_e,Re,Ie,ht,it,ve):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,le,Ue,rt,_e,Re,ht,it,ve.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,le,Ue,rt,ve.width,ve.height,ht,ve.data):z.texSubImage2D(z.TEXTURE_2D,le,Ue,rt,_e,Re,ht,it,ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nr),le===0&&V.generateMipmaps&&z.generateMipmap(Ve),ie.unbindTexture()},this.initRenderTarget=function(w){ce.get(w).__webglFramebuffer===void 0&&ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ge.setTextureCube(w,0):w.isData3DTexture?ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ge.setTexture2DArray(w,0):ge.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){W=0,H=0,j=null,ie.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Nu=.55,pv="./assets/hero-monkey-chase-v2.png",fv=new A(0,0,-1),mv=new A(0,1,0);function wn(n,e,t){return Math.max(e,Math.min(t,n))}function Va(n,e,t,i){return fu.damp(n,e,t,i)}function gv(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function vv(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function gf(n,e,t){let i=wn((t-n)/(e-n),0,1);return i*i*(3-2*i)}function _v(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],m=c[u+2],f=p-Math.max(d,m),x=gf(24,92,f)*gf(72,180,p);if(x<=0)continue;c[u+3]=Math.round(c[u+3]*(1-x));let g=x*.78;c[u+1]=Math.round(p*(1-g)+Math.max(d,m)*g)}o.putImageData(l,0,0);let h=new Mn(a);return h.colorSpace=_t,h.minFilter=ln,h.magFilter=Qt,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function vf(n,e){let t=new ut;t.setAttribute("position",new It(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new ot({color:n,transparent:!0,opacity:e,depthWrite:!1,side:ui,blending:Yr}),r=new Ee(t,i);return r.frustumCulled=!1,r}function _f(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function xv(){let n=new Float32Array(24),e=new ut;e.setAttribute("position",new It(n,3));let t=new Rs({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new ba(e,t);return i.frustumCulled=!1,i}function yv(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function xf(n,e){let t=new ft;t.position.set(n*.27,.14,.055);let i=new Ee(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new Ee(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new Ee(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new Ee(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function yf({scene:n,camera:e,renderer:t,assetUrl:i=pv,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await vv(i),o=_v(a,t),l=new ft;l.name="playerRig";let c=new ft;c.name="playerAttitude",l.add(c);let h=new ot({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:ui,toneMapped:!0}),u=new Ee(new ei(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new Nt(.018,.025,.62,6),jointGeometry:new Xt(.065,8,5),thrusterGeometry:new Nt(.045,.06,.14,7),trailGeometry:new an(.06,.48,7,1,!0),metalMaterial:new ti({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new ti({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new ot({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new ot({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:ui,blending:Xi})},p=xf(-1,d),m=xf(1,d);c.add(p,m);let f=vf(12853285,.88),x=vf(9376024,.78);c.add(f,x);let g=xv();c.add(g);let v=new yi(16757051,r?1.4:2.1,4.5,2);v.position.set(0,-.04,.34),c.add(v),n.add(l);let S={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:Nu,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,m],scarves:[f,x],tail:g,engineLight:v,materials:{metal:d.metalMaterial,brass:d.brassMaterial,thruster:d.thrusterMaterial,trail:d.trailMaterial,scarves:[f.material,x.material]},cameraVelocity:new A,cameraTarget:new A,lookTarget:new A,aimForward:fv.clone(),disposed:!1};return Fu(S,r),S}function Wa(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=wn(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=wn(t.bank??-(t.vx||0)*.08,-.52,.52),a=wn(t.pitch??-(t.vy||0)*.045,-.36,.36),o=wn(-(t.vx||0)*.022,-.18,.18),l=wn(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=Va(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=Va(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=Va(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=Va(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=Va(n.wings[1].rotation.z,-u,12,r),_f(n.scarves[0],n.time,-1,l),_f(n.scarves[1],n.time+.17,1,l),yv(n.tail,n.time,s);let d=wn(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((m,f)=>{let x=m.userData.trail,g=.9+Math.sin(n.time*28+f)*.12;x.scale.set(.85+d*.25,.55+d*.7*g,.85+d*.25),x.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function Uu(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=wn(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),gv(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=wn(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(mv),r.lookAt(n.lookTarget),r.rotateZ(wn(-(t.bank||0)*.12,-.07,.07))}function Fu(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}function Jl(n,e={}){if(!n||n.disposed)return;let t=e.airframe||"clockwork-pinions",i=e.outfit||"rescue-scarf",r=n.materials,s={"clockwork-pinions":{metal:8226181,brass:12094010,trail:16747058,scaleX:1,scaleY:1},"howler-rocket-rig":{metal:9128243,brass:14983750,trail:16734756,scaleX:.92,scaleY:1.16},"thunderbird-glider":{metal:4943731,brass:8317139,trail:5564640,scaleX:1.18,scaleY:.96}}[t];r.metal.color.setHex(s.metal),r.brass.color.setHex(s.brass),r.trail.color.setHex(s.trail),n.engineLight.color.setHex(s.trail),n.wings.forEach(o=>o.scale.set(s.scaleX,s.scaleY,1));let a={"rescue-scarf":{left:12853285,right:9376024,tint:16777215},"ace-jacket":{left:14721595,right:10313504,tint:16773592},"midnight-suit":{left:2847348,right:1457992,tint:13230559}}[i];r.scarves[0].color.setHex(a.left),r.scarves[1].color.setHex(a.right),n.hero.material.color.setHex(a.tint)}var Sv=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg",null,null,null,null],Lt=-5.32,bv=18,Ev=11.5,Tv=10.7,wv=7,Yi=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8}),Object.freeze({id:"frozen-transit-grid",name:"Frozen Transit Grid",sky:2705232,fog:7902362,road:1581863,sidewalk:8557463,roof:4347483,metal:9413544,marking:14218482,light:7337960,beacon:16766036,facade:[5072748,7440267,3561054],windows:[13172735,7727069,16769953],minHeight:8,maxHeight:23,density:9}),Object.freeze({id:"neon-arcology",name:"Neon Arcology",sky:3157317,fog:5591914,road:1119517,sidewalk:5067616,roof:2370101,metal:6648189,marking:9369040,light:6684618,beacon:16735354,facade:[3294032,4931419,2571075],windows:[7143375,16740246,15918975],minHeight:12,maxHeight:29,density:10}),Object.freeze({id:"desert-fortress",name:"Desert Fortress",sky:7166020,fog:9467485,road:2564637,sidewalk:7695197,roof:5327424,metal:7761764,marking:15781490,light:16765791,beacon:16733248,facade:[6511697,5199699,7693650],windows:[16768899,16745552,12379080],minHeight:6,maxHeight:18,density:8}),Object.freeze({id:"skyshield-command-core",name:"Skyshield Command Core",sky:1186592,fog:3555656,road:593168,sidewalk:5331551,roof:2436401,metal:8293007,marking:15265263,light:16055295,beacon:16725039,facade:[4147534,2503739,5857895],windows:[15924223,16730947,8313071],minHeight:14,maxHeight:34,density:10})]);function Ks(n,e,t){return Math.max(e,Math.min(t,n))}function Sf(n){return Ks(Math.round(Number(n)||0),0,wv)}function Kl(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function Ou(n,e,t=0){let i=Kl(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function Bu(n){let e=Kl(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Mt(n,e,t){return e+(t-e)*n()}function bf(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function Av(n,e,t){let i=bf(128,256);if(!i){let f=new Ae(n.facade[e]),x=new Uint8Array([f.r*255,f.g*255,f.b*255,255]),g=new Gr(x,1,1);return g.needsUpdate=!0,g}let r=Bu(Ou(t,e,41)),s=i.getContext("2d"),a=new Ae(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new Ae(16777215),.12),c=n.windows.map(f=>new Ae(f));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let f=0;f<u;f+=1)for(let x=0;x<h;x+=1){let g=x*d,v=f*p;s.fillStyle=`#${l.clone().multiplyScalar(Mt(r,.66,1.08)).getHexString()}`,s.fillRect(g+1,v+1,d-2,p-2);let S=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,E=r()<S?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${E.clone().multiplyScalar(Mt(r,.72,1.08)).getHexString()}`;let b=e===1?3:4,C=e===2?3:2;s.fillRect(g+b,v+C,Math.max(2,d-b*2),Math.max(2,p-C*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let f=0;f<16;f+=1){let x=Math.floor(r()*h)*d,g=Math.floor(r()*u)*p;s.fillRect(x+1,g+1,d-2,p-2)}}let m=new Mn(i);return m.colorSpace=_t,m.wrapS=zr,m.wrapT=zr,m.repeat.set(e===1?1.5:1,e===2?1.5:2),m.needsUpdate=!0,m}function Cv(n,e){let t=bf(1024,320);if(!t)return null;let i=Bu(Ou(e,813,Yi.indexOf(n))),r=t.getContext("2d"),s=new Ae(n.sky),a=new Ae(n.fog).lerp(new Ae(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=Mt(i,18,54),u=Mt(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-Mt(i,12,55),2,Mt(i,12,55)),l+=h+Mt(i,3,13)}let c=new Mn(t);return c.colorSpace=_t,c.needsUpdate=!0,c}function Js(n){return new ti({roughness:.76,metalness:.24,...n})}function Mf(n,e,t,i){let r=new Vr(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(js),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function ni(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function is(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function $s(n,e,t){let i=Yi[t],r=Bu(Ou(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;ni(s.road,0,Lt+.035,0,a*2,.07,o-.08,{color:i.road}),ni(s.sidewalk,-(a+.72),Lt+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),ni(s.sidewalk,a+.72,Lt+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])ni(s.markings,c,Lt+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);is(s.metalCylinder,u,Lt+1.5,h,.055,2.85,{color:i.metal}),ni(s.metalBox,u-c*.27,Lt+2.83,h,.58,.06,.06,{color:i.metal}),ni(s.lights,u-c*.52,Lt+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density>=9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=Mt(r,t===1?3.4:2.5,t===2?5.8:5.1),p=Mt(r,2.8,4.8),m=a+1.45+u*4.6+Mt(r,0,1.2),f=c*(m+d/2),x=Mt(r,-o*.42,o*.42),g=Mt(r,i.minHeight,i.maxHeight);t===1&&h>1&&(g*=.72),t===3&&r()<.22&&(g*=.58);let v=Math.floor(r()*3),S=Ks(g*Mt(r,.18,.28),1.2,3.4),E=g-S;s.facade.push({level:t,family:v,x:f,y:Lt+S/2,z:x,sx:d*1.14,sy:S,sz:p*1.12,ry:0});let b=t===2||g>10||r()<.42,C=b?Mt(r,.58,.74):1,U=E*C;s.facade.push({level:t,family:v,x:f,y:Lt+S+U/2,z:x,sx:d,sy:U,sz:p,ry:0});let F=Lt+S+U,R=d,k=p;if(b){let W=E-U;R=d*Mt(r,.58,.78),k=p*Mt(r,.6,.82),s.facade.push({level:t,family:(v+1)%3,x:f,y:F+W/2,z:x,sx:R,sy:W,sz:k,ry:0}),F+=W}if(ni(s.roof,f,F+.11,x,R*.88,.22,k*.86,{color:i.roof}),r()<.78&&ni(s.metalBox,f+Mt(r,-R*.2,R*.2),F+.35,x,R*.24,.5,k*.24,{color:i.metal}),g>11&&r()<.46){let W=Mt(r,1.1,t===2?3.8:2.5);is(s.metalCylinder,f,F+W/2,x,.055,W,{color:i.metal}),ni(s.lights,f,F+W,x,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){ni(s.metalBox,0,Lt+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])is(s.metalCylinder,c*(a+.32),Lt+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+Mt(r,0,3));if(e%2===0){let u=Mt(r,7,13);is(s.metalCylinder,h,Lt+u/2,Mt(r,-3,3),.52,u,{color:6643288}),ni(s.lights,h,Lt+u+.15,0,.22,.22,.22,{color:i.beacon})}else is(s.metalCylinder,h,Lt+1.15,Mt(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+Mt(r,4.5,10));ni(s.lights,h,Lt+Mt(r,1.2,5),Mt(r,-4,4),Mt(r,.35,.75),Mt(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}if(t===4&&e%3===1){ni(s.metalBox,0,Lt+5.8,0,a*2+3,.32,1.1,{color:i.metal});for(let c of[-1,1])is(s.metalCylinder,c*(a+.8),Lt+2.9,0,.18,5.8,{color:i.metal})}if(t===5)for(let c of[-1,1])ni(s.lights,c*(a+2.2),Lt+4.8+e%3,0,.16,5.5,.16,{color:e%2?i.light:i.beacon});if(t===6&&e%2===0)for(let c of[-1,1]){let h=c*(a+3.4);ni(s.metalBox,h,Lt+3.2,0,2.4,6.4,2.4,{color:i.metal}),ni(s.lights,h,Lt+6.55,0,.3,.3,.3,{color:i.beacon})}if(t===7){let c=9+e%4*2.2;for(let h of[-1,1]){let u=h*(a+4.8+e%2*2.4);is(s.metalCylinder,u,Lt+c/2,0,.7,c,{color:i.metal}),ni(s.lights,u,Lt+c,0,.42,.42,.42,{color:i.beacon})}}return s}function Rv(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function Qs(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(Rv(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function Iv(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=_t,s.minFilter=ln;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function Ef(n,e,t){let i=Cv(Yi[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,Iv(n,e,t,n.backdropTokens[t])}function Pv(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=$s(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,Qs(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:Yi[t.fromLevel],to:Yi[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=$s(n,n.blocks[c].serial,t.toLevel));Qs(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function Lv(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new Pt(1,1,1),s=new Nt(.5,.5,1,8,1,!1),a=new ei(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=Yi.map((l,c)=>l.facade.map((h,u)=>{let d=Av(l,u,n.seed);n.generatedTextures.add(d);let p=Js({color:h,map:d,emissiveMap:d,emissive:new Ae(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let m=Mf(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(m),n.movingRoot.add(m),m}));let o=(l,c,h,u)=>{n.materials.add(h);let d=Mf(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,Js({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,Js({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,Js({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,Js({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,Js({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new ot({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new ot({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new ot({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:ui});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new Ee(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),Ef(n,n.level,0),n.backdropMaterials[0].opacity=1}function Tf(n={}){let e=Ks(Math.floor(n.blockCount||bv),10,24),t=Ks(Number(n.blockSpacing)||Ev,9,16),i=Math.max(Tv,Number(n.corridorHalfWidth)||0),r=Sf(n.level),s=new ft;s.name="streamed-city";let a=new ft;a.name="streamed-city-blocks";let o=new ft;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:Kl(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,Yi.length):Sv.slice(),textureLoader:typeof document>"u"?null:new qn,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new jt,color:new Ae,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};Lv(l);for(let h=0;h<e;h+=1)l.blocks.push($s(l,h,r));Qs(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return Dv(c,h,u)},setLevel(h,u){return Nv(c,h,u)},setSeed(h,u){return Uv(c,h,u)},getEnvironment(){return wf(c)},getStats(){return{...l.stats}},dispose(){Fv(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function $l(n){let e=n?._cityState;return!e||e.disposed?null:e}function Dv(n,e,t={}){let i=$l(n);if(!i)return null;let r=Ks(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push($s(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&Qs(i),Pv(i,r),wf(n)}function Nv(n,e,t={}){let i=$l(n);if(!i)return!1;let r=Sf(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=Ks(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,Ef(i,r,c),s?(i.blocks=i.blocks.map(h=>$s(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,Qs(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:Yi[r],to:Yi[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function Uv(n,e,t={}){let i=$l(n);if(!i)return!1;let r=Kl(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push($s(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,Qs(i)}return!0}function wf(n){let e=$l(n);if(!e)return null;if(!e.transition){let o=Yi[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=Yi[t],a=Yi[i];return{level:i,mix:r,sky:new Ae(s.sky).lerp(new Ae(a.sky),r).getHex(),fog:new Ae(s.fog).lerp(new Ae(a.fog),r).getHex(),light:new Ae(s.light).lerp(new Ae(a.light),r).getHex(),theme:a}}function Fv(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var Ov=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,missileSalvo:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,missileSalvo:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,missileSalvo:1,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,missileSalvo:1,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])}),Object.freeze({id:"crossfire",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:16,intercept:20,missileSortie:44,flankingRun:20}),baseAircraft:3,maxAircraft:7,maxMissiles:4,missileSalvo:2,speedScale:1.3,recovery:Object.freeze([1.65,2.45]),warningLead:Object.freeze([1.2,1.72])}),Object.freeze({id:"tempest",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:13,intercept:18,missileSortie:49,flankingRun:20}),baseAircraft:4,maxAircraft:7,maxMissiles:5,missileSalvo:2,speedScale:1.36,recovery:Object.freeze([1.55,2.25]),warningLead:Object.freeze([1.18,1.62])}),Object.freeze({id:"killbox",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:10,intercept:16,missileSortie:54,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:6,missileSalvo:2,speedScale:1.42,recovery:Object.freeze([1.45,2.05]),warningLead:Object.freeze([1.15,1.55])}),Object.freeze({id:"last-stand",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:8,intercept:14,missileSortie:58,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:7,missileSalvo:3,speedScale:1.48,recovery:Object.freeze([1.4,1.9]),warningLead:Object.freeze([1.15,1.48])})]),ja=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var Bv=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),hn=(n,e,t)=>Math.max(e,Math.min(t,n)),ea=(n,e)=>Number.isFinite(n)?n:e;function Af(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function zv(n=7646257){let e=Af(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=Af(i)||1831565813},t}function kv(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>hn(ea(n(),.5),0,.999999999999)}function Hv(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var Le,Ql,Ni,ku,Cf,ec,tc,Hu,Xa,Rf,If,Pf,Lf,ic,Kn,zu=class{constructor({seed:e=7646257,rng:t=zv(e),levels:i=Ov,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){md(this,Le);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=kv(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=hn(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=hn(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),We(this,Le,Kn).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&We(this,Le,Hu).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();We(this,Le,Pf).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values(ja).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,We(this,Le,Hu).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};Le=new WeakSet,Ql=function(e){let t=this.levels[this.levelIndex],i=hn(this.survivalTime/180,0,.42),r=hn(ea(e.difficulty,0),-.25,.5);return{scalar:hn(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor(ea(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor(ea(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor(ea(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor(ea(e.activeMissiles,0)))}},Ni=function(e,t){return e+(t-e)*this.random()},ku=function(e){return e[Math.floor(this.random()*e.length)]},Cf=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||ja.FORMATION},ec=function(e){return this.serial+=1,`${e}-${this.serial}`},tc=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},Hu=function(e,t){let i=this.levels[this.levelIndex],r=We(this,Le,Ql).call(this,t),s=e||We(this,Le,Cf).call(this,i.weights),a=We(this,Le,ec).call(this,"encounter"),o=We(this,Le,If).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,We(this,Le,Kn).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)We(this,Le,tc).call(this,l.at,l.kind,l.payload);We(this,Le,tc).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},Xa=function(e,t,i,r={}){return{entityId:We(this,Le,ec).call(this,"aircraft"),encounterId:e,typeHint:We(this,Le,ku).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:We(this,Le,Ni).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*We(this,Le,Ni).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:We(this,Le,Ni).call(this,0,Math.PI*2),amplitude:We(this,Le,Ni).call(this,.75,1.8),...r}},Rf=function(e,t,i,r,s,a){let o=We(this,Le,ec).call(this,"missile"),[l,c]=i.warningLead,h=We(this,Le,Ni).call(this,l,c)/hn(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:hn(.92+r.scalar*.2,1,1.28),guidanceScale:hn(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},If=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=Hv([0,1,2],this.random),l=5;if(e===ja.FORMATION){let d=Math.min(a,hn(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=We(this,Le,ku).call(this,["vee","echelon","stack"]);for(let m=0;m<d;m+=1){let f=o[m%o.length];s.push({at:m*We(this,Le,Ni).call(this,.42,.7),kind:"aircraftSpawn",payload:We(this,Le,Xa).call(this,t,i,r,{role:p,lane:f,altitude:.2+(p==="stack"?m*1.25:m%2?1.5:0),spawnZ:-82-m*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===ja.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:We(this,Le,Xa).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:We(this,Le,Ni).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*We(this,Le,Ni).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===ja.MISSILE_SORTIE){let d=Math.min(a,1+(this.levelIndex>=3?1:0)+(this.levelIndex>=6&&this.random()<.55?1:0)),p=Math.max(0,r.maxMissiles-r.activeMissiles),m=0;for(let f=0;f<d;f+=1){let x=We(this,Le,Xa).call(this,t,i,r,{role:"missile-carrier",lane:o[f],altitude:We(this,Le,Ni).call(this,1.2,5),spawnZ:-88-f*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:f*1.05,kind:"aircraftSpawn",payload:x});let g=Math.max(1,Math.floor(i.missileSalvo||1));for(let v=0;v<g&&m<p;v+=1)s.push(...We(this,Le,Rf).call(this,t,x.entityId,i,r,2.1+f*1.1+v*.78,x.lane===0?"left":x.lane===2?"right":"ahead")),m+=1}l=6.4+d*.8+Math.max(0,(i.missileSalvo||1)-1)*.78}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let m=0;m<d;m+=1){let f=p[m];s.push({at:m<2?m*.18:1.05,kind:"aircraftSpawn",payload:We(this,Le,Xa).call(this,t,i,r,{role:f===0?"left-flanker":"right-flanker",lane:f,altitude:We(this,Le,Ni).call(this,-.8,4.3),spawnZ:-78-m*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:We(this,Le,Ni).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,We(this,Le,Ni).call(this,c,h)/hn(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},Pf=function(e,t){if(e.kind==="aircraftSpawn"){let i=We(this,Le,Ql).call(this,t);if(i.activeAircraft>=i.maxAircraft){We(this,Le,Lf).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,We(this,Le,Kn).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=We(this,Le,Ql).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),We(this,Le,ic).call(this,e,"missile-cap");return}We(this,Le,Kn).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){We(this,Le,ic).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,We(this,Le,Kn).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",We(this,Le,Kn).call(this,"recoveryStart",e.payload),We(this,Le,tc).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,We(this,Le,Kn).call(this,"recoveryEnd",e.payload))},Lf=function(e,t){if(e.retries>=this.maxSpawnRetries){We(this,Le,ic).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},ic=function(e,t){this.stats.actionsSkipped+=1,We(this,Le,Kn).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},Kn=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[Bv[e]]?.(i)===!1||r===!1)};function Df(n){return new zu(n)}var qa=56,nc=7.05,Gu=14.4,pi=Object.freeze(["./assets/voices/01-skyshield-breach.mp3","./assets/voices/02-earth-loses-sky.mp3","./assets/voices/03-rescue-ace.mp3","./assets/voices/04-direction.mp3","./assets/voices/05-office.mp3","./assets/voices/06-found-you.mp3","./assets/voices/07-first-wings.mp3","./assets/voices/08-invisible-pilot.mp3","./assets/voices/09-recognition.mp3","./assets/voices/10-mission.mp3","./assets/voices/11-open-armory.mp3","./assets/voices/12-why-bananas.mp3","./assets/voices/13-armory-response.mp3","./assets/voices/14-potassium.mp3"]);function rc(n){let e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}function Vu(){let n=new ft,e=new ti({color:5661546,metalness:.82,roughness:.3}),t=new Ee(new Nt(.09,.16,1.25,7),e);t.rotation.x=Math.PI/2,n.add(t);let i=new Ee(new Pt(1.1,.035,.36),e);i.position.z=.08,n.add(i);let r=new Ee(new Pt(.48,.03,.2),e);r.position.z=.48,n.add(r);let s=new yi(16736050,2.4,3);return s.position.z=.7,n.add(s),n}function Gv(n=17){let e=new ft,t=n>>>0,i=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=new ti({color:1319465,emissive:1523526,emissiveIntensity:.44,metalness:.28,roughness:.78});for(let s=0;s<52;s+=1){let a=1.1+i()*5.5,o=new Ee(new Pt(.7+i()*1.1,a,.7+i()*1.1),r),l=s%2?-1:1;o.position.set(l*(2.3+i()*7.5),a*.5-1.2,-s*.9+i()*2),e.add(o)}return e.userData.material=r,e}function Nf(n){let e=new qn().load(n);e.colorSpace=_t;let t=new ot({map:e,transparent:!0,toneMapped:!1}),i=new Ee(new ei(4.35,5.35),t);return i.position.set(0,1.25,-4),i.visible=!1,{mesh:i,texture:e,material:t}}function Vv(){let n=new ft,e=new Ee(new Xt(2.25,24,16),new ot({color:4774096,wireframe:!0,transparent:!0,opacity:.38}));n.add(e);let t=new ot({color:16729661,transparent:!0,opacity:.8});[0,1,2].forEach(s=>{let a=new Ee(new ji(3+s*.18,.018,5,72),t);a.rotation.set(Math.PI*(.18+s*.19),Math.PI*(.1+s*.24),0),n.add(a)});let i=new ot({color:16735304});return[[-1.4,1.2,1.3],[1.6,.65,1.25],[.5,-1.65,1.3],[-1.7,-.7,-1.15],[1.35,1.45,-1.15]].forEach(s=>{let a=new Ee(new Xt(.09,8,6),i);a.position.set(...s),n.add(a)}),n.position.set(0,1.25,-5.5),n.userData.shell=e,n}function Wv(){let n=new ft,e=new ot({color:16727350,transparent:!0,opacity:.72}),t=new Ee(new ji(1.65,.075,8,48),e),i=new Ee(new Pt(3.5,.14,.08),e);return i.rotation.z=-Math.PI/4,n.add(t,i),n.position.set(0,1.3,-4.4),n.visible=!1,n}function Uf({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onChoice:s=()=>{},onComplete:a=()=>{},isVoicePlaying:o=()=>!1}={}){if(!n)return null;let l=new br({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches,alpha:!1});l.outputColorSpace=_t,l.toneMapping=Zn,l.toneMappingExposure=1.05;let c=new jn;c.background=new Ae(133131),c.fog=new Wn(463642,.035);let h=new zt(52,1,.1,140),u=Gv();c.add(u);let d=Vv(),p=Wv();c.add(d,p);let m=new Ee(new ei(30,120),new ti({color:330253,metalness:.55,roughness:.62}));m.rotation.x=-Math.PI/2,m.position.set(0,-1.2,-34),c.add(m);let f=new Yn(7985364,197894,1.5),x=new yi(16729144,0,24,2);x.position.set(-2,4,-12),c.add(f,x);let g=[Vu(),Vu(),Vu()];g.forEach((M,D)=>{M.position.set(-9-D*2.4,3.4+D*.7,-8-D*5),M.scale.setScalar(.78+D*.1),c.add(M)});let v=new Ee(new Xt(.55,14,9),new ot({color:16747580,transparent:!0,opacity:0}));v.position.set(-2.4,2.1,-13),c.add(v);let S=Nf(e),E=Nf(t);c.add(S.mesh,E.mesh);let b=new Ee(new ei(5.05,6.05),new ot({color:864052,transparent:!0,opacity:.72}));b.position.set(0,1.25,-4.18),b.visible=!1,c.add(b);let C=new yr([new A(0,2.4,14),new A(.8,1.65,5),new A(-1.5,2.1,-5),new A(1.2,2.8,-13)]),U=new A,F=new Set,R=!1,k=!1,W=!1,H=!1,j=0,G=0,q=0,Y=-1;function $(M,D){let N=performance.now()+M,y=()=>{if(!R)return;if(performance.now()>=N&&!o()){D();return}let O=setTimeout(y,80);F.add(O)},P=setTimeout(y,Math.min(250,M));F.add(P)}let te=[{at:0,speaker:"Emergency broadcast",text:"At 04:17, Black Flag uploaded a command virus during a global defense drill.",voice:pi[0],subject:"globe",telemetry:["SKYSHIELD DRILL // ACTIVE","COMMAND VIRUS // UPLOADED"]},{at:nc,speaker:"Emergency broadcast",text:"Skyshield seized every connected aircraft and turned Earth's defenses against its cities.",voice:pi[1],subject:"city",telemetry:["IFF DATABASE // REWRITTEN","DEFENSE FLEET // HOSTILE"]},{at:Gu,speaker:"Commander Vesper",text:"I know one pilot it never studied. Project Canopy's analog rescue ace.",voice:pi[2],subject:"vesper",telemetry:["PROJECT CANOPY // OFF-GRID","RESCUE ACE // WINGTAIL"]},{at:21.1,speaker:"Wingtail",text:"You forgot my excellent sense of direction.",voice:pi[3],subject:"wingtail",telemetry:["CANOPY RESCUES // 47","UNAUTHORIZED LANDINGS // 12"]},{at:24.05,speaker:"Commander Vesper",text:"You landed in my office.",voice:pi[4],subject:"vesper",telemetry:["VESPER'S OFFICE // REPAIRED","INCIDENT REPORT // SEALED"]},{at:26.28,speaker:"Wingtail",text:"I found you.",voice:pi[5],subject:"wingtail",telemetry:["FLIGHT LOG // DISPUTED"]},{at:28.12,speaker:"Commander Vesper",text:"I built your wings. You crossed three cyclones and brought forty-seven people home.",voice:pi[6],subject:"vesper",telemetry:["ANALOG WING RIG // VESPER MK I","CIVILIANS RECOVERED // 47"]},{at:35.23,speaker:"Commander Vesper",text:"No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist.",voice:pi[7],subject:"wingtail",telemetry:["BIO-SIGNATURE // NO MATCH","FLIGHT SYSTEM // ANALOG","ORDNANCE // UNHACKABLE"]},{at:46.02,speaker:"Wingtail",text:"Finally. Professional recognition.",voice:pi[8],subject:"wingtail",telemetry:["SKYSHIELD VISIBILITY // ZERO"]},{at:49.13,speaker:"Commander Vesper",text:"Destroy the command relays and give humanity back its sky. Are you in?",voice:pi[9],subject:"vesper",telemetry:["MISSION // OPERATION BANANA SKY","PRIMARY TARGET // COMMAND RELAYS"]}];function xe(){let M=Math.max(2,n.clientWidth||640),D=Math.max(2,n.clientHeight||420),N=M<=700;l.setPixelRatio(Math.min(devicePixelRatio||1,N?1.15:1.45)),l.setSize(M,D,!1),h.aspect=M/D,h.fov=N&&D>M?62:52,h.updateProjectionMatrix()}function Me(M){d.visible=!1,p.visible=!1,u.visible=!1,m.visible=!1,g.forEach(D=>{D.visible=!1}),b.visible=!0,S.mesh.visible=M==="vesper",E.mesh.visible=M==="wingtail",h.position.set(0,1.35,2.4),h.lookAt(0,1.2,-4)}function Ce(M){let D=0;for(let N=0;N<te.length;N+=1)M>=te[N].at&&(D=N);D!==Y&&(Y=D,r({...te[D],progress:M/qa}))}function be(M){if(Ce(M),M<nc)d.visible=!0,p.visible=!1,u.visible=!1,m.visible=!1,g.forEach(D=>{D.visible=!1}),b.visible=!1,S.mesh.visible=!1,E.mesh.visible=!1,h.position.set(0,1.4,2.4),h.lookAt(0,1.25,-5.5),d.rotation.y=M*(i?.08:.28),d.rotation.x=Math.sin(M*.55)*.08,d.userData.shell.material.color.setHex(M>1.5?16730946:4774096),x.intensity=rc((M-1.2)/1.3)*4;else if(M<Gu){d.visible=!1,u.visible=!0,m.visible=!0,p.visible=!1,b.visible=!1,S.mesh.visible=!1,E.mesh.visible=!1;let D=M-nc,N=Gu-nc,y=i?Math.floor(D/1.2)/5:rc(D/N);h.position.copy(C.getPoint(Math.min(.98,y))),U.set(0,1.1,h.position.z-13),h.lookAt(U),g.forEach((B,J)=>{B.visible=!0,B.position.x=-9-J*2.2+D*(4.8+J*.35),B.position.y+=Math.sin(M*2.2+J)*.002});let P=rc((D-1.2)/3.1);u.userData.material.emissiveIntensity=.44*(1-P)+.035,x.intensity=P*7;let O=Math.max(0,Math.min(1,(D-2.1)/1.8));v.material.opacity=Math.sin(O*Math.PI)*.88,v.scale.setScalar(1+O*6),p.visible=D>=3.1,p.visible&&(p.rotation.z=i?0:Math.sin(M*4)*.025,p.scale.setScalar(.92+rc((D-3.1)/.5)*.08))}else{let D=te[0];for(let y of te)M>=y.at&&(D=y);Me(D.subject==="wingtail"?"wingtail":"vesper");let N=1+Math.sin(M*3.4)*.006;(S.mesh.visible?S.mesh:E.mesh).scale.setScalar(i?1:N)}}function re(M){if(R){if(!k&&!W&&!H){let D=Math.min(qa,(M-j)/1e3),N=te[Y+1]?.at??qa;if(Y>=0&&D>=N&&o()){let y=Math.max(0,N-.02);j+=(D-y)*1e3,D=y}be(D),r({progress:D/qa}),D>=qa&&(W=!0,Me("wingtail"),s())}else if(W||H){let D=S.mesh.visible?S.mesh:E.mesh;i||(D.rotation.z=Math.sin(M*.0017)*.008)}l.render(c,h),q=requestAnimationFrame(re)}}function fe(){R||(R=!0,k=!1,W=!1,H=!1,Y=-1,n.hidden=!1,xe(),j=performance.now(),q=requestAnimationFrame(re))}function me(M){if(!W||H)return;W=!1,H=!0,Me("wingtail"),r({speaker:"Wingtail",text:M==="doubt"?"One question. Why bananas?":"Open the armory. Let's make history nervous.",voice:M==="doubt"?pi[11]:pi[10],telemetry:["WINGTAIL // MISSION ACCEPTANCE PENDING"],progress:1}),$(M==="doubt"?3500:4e3,()=>{Me("vesper"),r({speaker:"Commander Vesper",text:M==="doubt"?"Because nobody has ever hacked potassium.":"That's the rescue ace I remember.",voice:M==="doubt"?pi[13]:pi[12],telemetry:["OPERATION BANANA SKY // AUTHORIZED"],progress:1}),$(M==="doubt"?4e3:2400,()=>De(!1))})}function De(M=!0){R&&(R=!1,cancelAnimationFrame(q),F.forEach(clearTimeout),F.clear(),n.hidden=!0,a({skipped:M}))}function Ge(M){!R||W||H||(M&&!k?(k=!0,G=performance.now()):!M&&k&&(j+=performance.now()-G,k=!1))}function T(){R=!1,cancelAnimationFrame(q),F.forEach(clearTimeout),c.traverse(M=>{M.geometry?.dispose?.(),Array.isArray(M.material)?M.material.forEach(D=>D.dispose?.()):M.material?.dispose?.()}),S.texture.dispose(),E.texture.dispose(),l.dispose()}return{start:fe,choose:me,skip:()=>De(!0),setPaused:Ge,resize:xe,dispose:T}}var sc=8.6,Ff=14,ac=19.7,Ya=Object.freeze(["./assets/voices/15-relays-down.mp3","./assets/voices/16-wingtail-victory.mp3","./assets/voices/17-sky-restored.mp3"]);function jv(){let n=new ft,e=new ti({color:1515814,emissive:462866,roughness:.82}),t=new ti({color:4215899,emissive:4836792,emissiveIntensity:0,roughness:.68});for(let i=0;i<48;i+=1){let r=i%2?-1:1,s=1.6+i*47%19*.24,a=new Ee(new Pt(1.1+i%3*.28,s,1.4),i%3?e:t);a.position.set(r*(2.7+i%8*1.15),s*.5-2.2,-i*1.45),n.add(a)}return n.userData.litMaterial=t,n}function Xv(){let n=new ft,e=new ti({color:3884877,metalness:.78,roughness:.3}),t=new ot({color:16727606,transparent:!0,opacity:.95}),i=new Ee(new Nt(.6,.85,3.8,10),e);n.add(i);let r=new Ee(new Xt(.52,16,12),t);n.add(r);let s=[];for(let a=0;a<3;a+=1){let o=new Ee(new ji(1.05+a*.32,.055,8,48),t);o.rotation.set(Math.PI/2+a*.35,a*.48,0),n.add(o),s.push(o)}return n.userData={core:r,rings:s},n}function Of(n){let e=new qn().load(n);e.colorSpace=_t;let t=new ot({map:e,transparent:!0,toneMapped:!1}),i=new Ee(new ei(4.1,5.1),t);return i.position.set(0,1.1,-4.4),i.visible=!1,{mesh:i,texture:e,material:t}}function Bf({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onComplete:s=()=>{}}={}){if(!n)return null;let a=new br({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches});a.outputColorSpace=_t,a.toneMapping=Zn,a.toneMappingExposure=1.08;let o=new jn;o.background=new Ae(198666),o.fog=new Wn(464666,.028);let l=new zt(52,1,.1,140),c=jv(),h=Xv();h.position.set(0,1,-8),o.add(c,h);let u=Of(e),d=Of(t);o.add(u.mesh,d.mesh);let p=new Yn(11005674,395530,1.5),m=new yi(16727606,5,22,2);m.position.set(0,2,-7);let f=new qr(16769185,0);f.position.set(-6,8,4),o.add(p,m,f);let x=90,g=new Float32Array(x*3);for(let te=0;te<x;te+=1)g[te*3]=(Math.random()-.5)*2,g[te*3+1]=1+(Math.random()-.5)*2,g[te*3+2]=-8+(Math.random()-.5)*2;let v=new ut;v.setAttribute("position",new It(g,3));let S=new Xn(v,new yn({color:16762718,size:.11,transparent:!0,opacity:0,blending:Xi}));o.add(S);let E=[{at:0,speaker:"Commander Vesper",text:"The relays are down. Skyshield is blind, and every stolen aircraft is returning to human control.",voice:Ya[0]},{at:sc,speaker:"Wingtail",text:"Tell humanity the sky is open. And tell them to keep the fruit bowl stocked.",voice:Ya[1]},{at:Ff,speaker:"Commander Vesper",text:"Operation Banana Sky is complete. Welcome home, Wingtail.",voice:Ya[2]}],b=!1,C=!1,U=0,F=0,R=0,k=-1;function W(){let te=Math.max(2,n.clientWidth||640),xe=Math.max(2,n.clientHeight||420);a.setPixelRatio(Math.min(devicePixelRatio||1,te<=700?1.1:1.45)),a.setSize(te,xe,!1),l.aspect=te/xe,l.fov=te<=700&&xe>te?62:52,l.updateProjectionMatrix()}function H(te){let xe=0;for(let Me=0;Me<E.length;Me+=1)te>=E[Me].at&&(xe=Me);if(xe!==k?(k=xe,r({...E[xe],progress:te/ac})):r({progress:te/ac}),te<sc){h.visible=!0,c.visible=!0,u.mesh.visible=!1,d.mesh.visible=!1,l.position.set(0,2.1,5.5-te*.24),l.lookAt(0,1,-8),h.userData.rings.forEach((Ce,be)=>{Ce.rotation.z+=.02+be*.006});let Me=Math.max(0,(te-2.4)/3.5);h.scale.setScalar(1+Math.sin(te*9)*Me*.08),h.userData.core.material.opacity=Math.max(0,1-Me),m.intensity=Math.max(0,5*(1-Me)),S.material.opacity=Math.min(.9,Me*1.4),S.scale.setScalar(1+Me*6)}else te<Ff?(h.visible=!1,u.mesh.visible=!1,d.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),c.userData.litMaterial.emissiveIntensity=Math.min(1.7,(te-sc)*.35),f.intensity=Math.min(3.2,(te-sc)*.55),d.mesh.scale.setScalar(i?1:1+Math.sin(te*2.8)*.006)):(h.visible=!1,d.mesh.visible=!1,u.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),f.intensity=3.2,c.userData.litMaterial.emissiveIntensity=1.7,u.mesh.scale.setScalar(i?1:1+Math.sin(te*2.4)*.005))}function j(te){if(b){if(!C){let xe=Math.min(ac,(te-U)/1e3);if(H(xe),xe>=ac){b=!1,s();return}}a.render(o,l),R=requestAnimationFrame(j)}}function G(){b||(b=!0,C=!1,k=-1,n.hidden=!1,W(),U=performance.now(),R=requestAnimationFrame(j))}function q(){b&&(b=!1,cancelAnimationFrame(R),s())}function Y(te){b&&(te&&!C?(C=!0,F=performance.now()):!te&&C&&(U+=performance.now()-F,C=!1))}function $(){b=!1,cancelAnimationFrame(R),o.traverse(te=>{te.geometry?.dispose?.(),Array.isArray(te.material)?te.material.forEach(xe=>xe.dispose?.()):te.material?.dispose?.()}),u.texture.dispose(),d.texture.dispose(),a.dispose()}return{start:G,skip:q,setPaused:Y,resize:W,dispose:$}}var zf="monkeySeeMonkeyPewProfileV1",An={airframe:[{id:"clockwork-pinions",name:"Clockwork Pinions",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Balanced",description:"Reliable brass-and-steel wings with forgiving controls.",benefit:"Balanced baseline flight with predictable lift, turning, and cruising speed.",specs:["Lift 100","Handling 100","Speed 100"],modifiers:{lift:1,handling:1,speed:1,armor:0}},{id:"howler-rocket-rig",name:"Howler Rocket Rig",previewAsset:"./assets/wingtail-howler-rig-v1.webp",cost:60,tag:"High lift",description:"Twin coconut-fuel turbines trade finesse for violent acceleration.",benefit:"28% more lift and 14% more speed, but 12% less turning agility.",specs:["Lift 128","Handling 88","Speed 114"],modifiers:{lift:1.28,handling:.88,speed:1.14,armor:0}},{id:"thunderbird-glider",name:"Thunderbird Glider",previewAsset:"./assets/wingtail-thunderbird-v1.webp",cost:110,tag:"Elite",description:"Wide control surfaces, armored spars, and excellent pursuit speed.",benefit:"21% more agility, 18% more speed, and light protection against missile locks.",specs:["Lift 112","Handling 121","Speed 118"],modifiers:{lift:1.12,handling:1.21,speed:1.18,armor:.12}}],weapon:[{id:"ripe-repeater",name:"Ripe Repeater",previewAsset:"./assets/wingtail-ripe-repeater-v1.webp",cost:0,tag:"Standard",description:"Single ripe bananas with a quick, predictable throwing cycle.",benefit:"Rapid single-banana fire for accurate, sustained attacks.",specs:["Damage 1","Rate 5/sec","Bananas 1"],modifiers:{damage:1,cooldown:.2,projectiles:1,spread:0,velocity:54}},{id:"plantain-piercer",name:"Plantain Piercer",previewAsset:"./assets/wingtail-plantain-piercer-v1.webp",cost:45,tag:"Heavy",description:"Dense green plantains hit twice as hard but need a longer reload.",benefit:"Double damage and higher velocity, with a slightly slower firing cycle.",specs:["Damage 2","Rate 4/sec","Bananas 1"],modifiers:{damage:2,cooldown:.25,projectiles:1,spread:0,velocity:58}},{id:"cluster-bunch",name:"Cluster Bunch",previewAsset:"./assets/wingtail-cluster-bunch-v1.webp",cost:95,tag:"Spread",description:"Throws three smaller bananas in a fighter-clearing fan.",benefit:"Launches three bananas at once to cover a wide area and catch agile fighters.",specs:["Damage 1","Rate 3.6/sec","Bananas 3"],modifiers:{damage:1,cooldown:.28,projectiles:3,spread:.065,velocity:52}}],outfit:[{id:"rescue-scarf",name:"Red Rescue Scarf",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Classic",description:"Bright, aerodynamic, and accepted by absolutely no air force.",benefit:"No stat tradeoffs. Pure heroic scarf energy.",specs:["Coconuts 100%","Shield 0","Lock resist 0%"],modifiers:{income:1,shield:0,lockResistance:0}},{id:"ace-jacket",name:"Coconut Ace Jacket",previewAsset:"./assets/wingtail-ace-jacket-v1.webp",cost:30,tag:"Fortune",description:"Lucky leather pockets recover more coconuts from every takedown.",benefit:"Earn 20% more coconuts and resist missile locks 8% longer.",specs:["Coconuts 120%","Shield 0","Lock resist 8%"],modifiers:{income:1.2,shield:0,lockResistance:.08}},{id:"midnight-suit",name:"Midnight Monkey Suit",previewAsset:"./assets/wingtail-midnight-suit-v1.webp",cost:70,tag:"Defense",description:"Radar-dampening fabric and one emergency coconut armor plate.",benefit:"Start with one impact shield and resist missile locks 22% longer.",specs:["Coconuts 108%","Shield 1","Lock resist 22%"],modifiers:{income:1.08,shield:1,lockResistance:.22}}]},kf=[{id:"flight",name:"Turbo Feathering",tag:"Flight",description:"Increase lift, lane response, and top control authority for this run.",effect:"+10% lift and handling"},{id:"arsenal",name:"Peel Velocity",tag:"Weapons",description:"Tighten the throwing cycle and make every banana hit harder.",effect:"-12% reload, +0.35 damage"},{id:"armor",name:"Coconut Plating",tag:"Defense",description:"Bolt another sacrificial coconut shell around the flight harness.",effect:"+1 impact shield"}],qv={coconuts:120,owned:{airframe:["clockwork-pinions"],weapon:["ripe-repeater"],outfit:["rescue-scarf"]},equipped:{airframe:"clockwork-pinions",weapon:"ripe-repeater",outfit:"rescue-scarf"}};function Yv(){return JSON.parse(JSON.stringify(qv))}function wi(n,e){return An[n]?.find(t=>t.id===e)||An[n]?.[0]||null}function Hf(n=globalThis.localStorage){let e=Yv();try{let t=JSON.parse(n?.getItem(zf)||"null");if(!t||typeof t!="object")return e;e.coconuts=Math.max(0,Math.floor(Number(t.coconuts)||0));for(let i of Object.keys(An)){let r=new Set(An[i].map(a=>a.id)),s=Array.isArray(t.owned?.[i])?t.owned[i].filter(a=>r.has(a)):[];e.owned[i]=[...new Set([An[i][0].id,...s])],e.equipped[i]=e.owned[i].includes(t.equipped?.[i])?t.equipped[i]:An[i][0].id}}catch{return e}return e}function Wu(n,e=globalThis.localStorage){try{e?.setItem(zf,JSON.stringify(n))}catch{}return n}function Gf(n,e,t,i=globalThis.localStorage){let r=wi(e,t);if(!r||!n.owned?.[e])return{ok:!1,reason:"Unknown equipment."};let s=n.owned[e].includes(t);return!s&&n.coconuts<r.cost?{ok:!1,reason:"Need "+(r.cost-n.coconuts)+" more coconuts."}:(s||(n.coconuts-=r.cost,n.owned[e].push(t)),n.equipped[e]=t,Wu(n,i),{ok:!0,action:s?"equipped":"purchased",item:r})}function Vf(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return n.coconuts+=t,Wu(n),t}function ju(n,e=120,t=globalThis.localStorage){let i=Math.max(0,Math.floor(Number(e)||0));return n.coconuts=i,Wu(n,t),i}function oc(){return{flight:0,arsenal:0,armor:0}}function Za(n,e=oc()){let t=wi("airframe",n.equipped.airframe).modifiers,i=wi("weapon",n.equipped.weapon).modifiers,r=wi("outfit",n.equipped.outfit).modifiers;return{lift:t.lift*(1+e.flight*.1),handling:t.handling*(1+e.flight*.1),speed:t.speed,armor:t.armor,damage:i.damage+e.arsenal*.35,cooldown:i.cooldown*Math.pow(.88,e.arsenal),projectiles:i.projectiles,spread:i.spread,projectileVelocity:i.velocity*(1+e.arsenal*.04),income:r.income,lockResistance:Math.min(.45,r.lockResistance+t.armor*.25),maxShields:r.shield+e.armor}}function Wf(n){let e=Za(n),t=i=>Math.max(8,Math.min(100,Math.round(i)));return{lift:t(e.lift*72),handling:t(e.handling*72),firepower:t(e.damage*e.projectiles*32),survival:t(18+e.maxShields*35+e.lockResistance*100+e.armor*90)}}var lc=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),Er=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35},{kind:"snow",color:13238271,density:.72,speed:2.2,drift:2.8,size:.2,opacity:.42},{kind:"rain",color:7995347,density:.86,speed:29,drift:6.2,size:.24,opacity:.42},{kind:"dust",color:15908722,density:.88,speed:3.2,drift:5.4,size:.25,opacity:.38},{kind:"ash",color:16120831,density:.68,speed:2.5,drift:4.2,size:.18,opacity:.44}]),$n=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),jf=new A(0,0,1),qf=new A(0,0,0),Yf=new hi,Zv=new Ae(16777215);function Xf(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new Mn(e);return i.colorSpace=_t,i.needsUpdate=!0,i}function Jv(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function Ja(n,e,t,i,r){let s=new Vr(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(js),s.renderOrder=i.blending===Xi?30:20;let a=Array.from({length:r},Jv);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,Yf,qf),s.setMatrixAt(o,n.matrix),s.setColorAt(o,Zv);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function Xu(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function ri(n,e,t){return e+(t-e)*Xu(n)}function ta(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function Kv(n,e){n.x=ta(e,"x"),n.y=ta(e,"y"),n.z=ta(e,"z")}function $v(n,e){n.vx=ta(e,"x"),n.vy=ta(e,"y"),n.vz=ta(e,"z")}function Qv(n,e,t){let i=e??t;i&&i.isColor?Ka.copy(i):Ka.set(i),n.r=Ka.r,n.g=Ka.g,n.b=Ka.b}var Ka=new Ae;function e_(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function Qa(n,e,t,i){let r=e_(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??ri(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,Kv(r,t.position),$v(r,t.velocity),Qv(r,t.color,i.color),r}function qu(n,e){let t=lc[e]||lc.medium;n.resolvedQuality=e in lc?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor($n.weather*t.weatherLimit*(n.reducedMotion?.3:1)),Jf(n,!0)}function Zf(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+ri(n,-18,18),n.weatherPositions[r+1]=i.y+ri(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+ri(n,-28,12),n.weatherPhases[e]=ri(n,0,Math.PI*2)}function Jf(n,e){let t=Er[n.level]||Er[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)Zf(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function t_(n,e,t){if(!n.weatherCount)return;let i=Er[n.level]||Er[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&Zf(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function $a(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,Yf,qf),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle(jf,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors(jf,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function Yu(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function i_(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function n_(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function r_(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&qu(n,t)}function s_(n,e){let t=Qa(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function a_(n,e){return n.reducedMotion&&Xu(n)>.42?null:Qa(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:ri(n,-1.8,1.8),color:14276559})}function o_(n,e){return n.reducedMotion&&Xu(n)>.6?null:Qa(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function l_(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*lc[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(ri(n,-1,1),ri(n,-.75,1),ri(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*ri(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=ri(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=ri(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=ri(n,1.2,3.2),n.spawnOptions.gravity=ri(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=Qa(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return Yu(n,e.impulse??.55*s,ri(n,-.018,.018)),a}function c_(n,e){if(n.reducedMotion)return null;let t=Qa(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return Yu(n,e.impulse??.22,e.roll??ri(n,-.01,.01)),t}function h_(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),Yu(n,e.impulse??.85,e.roll??ri(n,-.025,.025)),n.hitFlash}function Kf({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new ft,pools:{},resources:new Set,matrix:new Ze,position:new A,direction:new A,scale:new A,quaternion:new hi,rollQuaternion:new hi,color:new Ae,hiddenPosition:new A(0,-1e4,0),weatherCenter:new A,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:$n.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new ot({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:Xi,toneMapped:!1,vertexColors:!0}),l=d=>new ot({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=Ja(a,"projectileTrail",new Pt(1,1,1),o(.95),$n.projectileTrail),a.pools.missileSmoke=Ja(a,"missileSmoke",new Xr(1,1),l(.42),$n.missileSmoke),a.pools.jetExhaust=Ja(a,"jetExhaust",new Pt(1,1,1),o(.72),$n.jetExhaust),a.pools.explosion=Ja(a,"explosion",new Xr(1,0),o(.9),$n.explosion),a.pools.nearMiss=Ja(a,"nearMiss",new Pt(1,1,1),o(.84),$n.nearMiss),a.softTexture=Xf("soft"),a.streakTexture=Xf("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array($n.weather*3),a.weatherPhases=new Float32Array($n.weather);let c=new ut;c.setAttribute("position",new It(a.weatherPositions,3).setUsage(js));let h=new yn({color:Er[0].color,size:Er[0].size,map:a.softTexture,transparent:!0,opacity:Er[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:Xi});a.weather=new Xn(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new ot({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Xi,toneMapped:!1});return a.hitFlash=new Ee(new ei(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),qu(a,a.resolvedQuality),a}function Zu(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),r_(n,i),$a(n,n.pools.projectileTrail,i,"streak"),$a(n,n.pools.missileSmoke,i,"smoke"),$a(n,n.pools.jetExhaust,i,"streak"),$a(n,n.pools.explosion,i,"explosion"),$a(n,n.pools.nearMiss,i,"streak"),t_(n,i,t),i_(n,i),n_(n,i),n.cameraImpulse}function Ut(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return s_(n,t);case"missileSmoke":return a_(n,t);case"jetExhaust":return o_(n,t);case"explosion":return l_(n,t);case"nearMiss":return c_(n,t);case"hitFlash":return h_(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function $f(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(Er.length-1,Math.floor(e))),Jf(n,!0))}function Qf(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;qu(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("briefingOrder"),s=document.getElementById("startButton"),a=document.getElementById("skipIntroButton"),o=document.getElementById("briefingFallback"),l=document.getElementById("briefingCanvas"),c=document.getElementById("cinematicSlate"),h=document.getElementById("cinematicSpeaker"),u=document.getElementById("cinematicSubtitle"),d=document.getElementById("cinematicProgress"),p=document.getElementById("cinematicTelemetry"),m=document.getElementById("cinematicDialogue"),f=document.getElementById("dialogueSpeaker"),x=document.getElementById("dialogueSubtitle"),g=document.getElementById("dialogueChoices"),v=document.getElementById("briefingIdentity"),S=document.getElementById("briefingChannel"),E=document.getElementById("pauseOverlay"),b=document.getElementById("resumeButton"),C=document.getElementById("restartButton"),U=document.getElementById("pauseButton"),F=document.getElementById("muteButton"),R=document.getElementById("shootButton"),k=document.getElementById("score"),W=document.getElementById("best"),H=document.getElementById("points"),j=document.getElementById("multiplier"),G=document.getElementById("coconutCount"),q=document.getElementById("shieldCount"),Y=document.getElementById("rageHud"),$=document.getElementById("rageActionButton"),te=document.getElementById("rageLabel"),xe=document.getElementById("rageCount"),Me=document.getElementById("rageMeter"),Ce=document.getElementById("objectiveHud"),be=document.getElementById("objectiveMeter"),re=document.getElementById("objectiveCount"),fe=document.getElementById("level"),me=document.getElementById("threatBar"),De=document.getElementById("missileWarning"),Ge=document.getElementById("lockMeter"),T=document.getElementById("missileBearing"),M=document.getElementById("missileDirection"),D=document.getElementById("targetingHud"),N=document.getElementById("targetStatus"),y=document.getElementById("targetRange"),P=document.getElementById("weaponCooldown"),O=document.getElementById("touchControls"),B=document.getElementById("steerZone"),J=document.getElementById("liftButton"),ee=document.getElementById("statusRegion"),Z=document.getElementById("hangarOverlay"),se=document.getElementById("hangarWallet"),ie=document.getElementById("hangarPreview"),oe=document.getElementById("hangarPortrait"),ce=document.getElementById("previewState"),ge=document.getElementById("previewRig"),Oe=document.getElementById("previewWeapon"),Je=document.getElementById("previewOutfit"),lt=document.getElementById("loadoutTabs"),$e=document.getElementById("loadoutItems"),Te=document.getElementById("hangarStatus"),Xe=document.getElementById("selectionName"),pt=document.getElementById("selectionBenefit"),Ft=document.getElementById("selectionDeltas"),Se=document.getElementById("selectionPrice"),Ye=document.getElementById("selectionBalance"),qe=document.getElementById("loadoutAction"),Zi=document.getElementById("deployButton"),Cn={lift:document.getElementById("statLift"),handling:document.getElementById("statHandling"),firepower:document.getElementById("statFirepower"),survival:document.getElementById("statSurvival")},kt=document.getElementById("upgradeOverlay"),xt=document.getElementById("upgradeTitle"),St=document.getElementById("upgradeGrid"),Ui=document.getElementById("upgradeWallet"),z=document.getElementById("victoryOverlay"),Rn=document.getElementById("victoryCanvas"),In=document.getElementById("victorySpeaker"),bt=document.getElementById("victoryTitle"),Tr=document.getElementById("victorySubtitle"),ns=document.getElementById("victoryProgress"),rs=document.getElementById("victorySkipButton"),wr=document.getElementById("victoryContinueButton"),ct=window.GameAudio||{},Qn=1/60,si=[-6.2,0,6.2],eo=-3.2,Pn=5.8,er=1.4,Ji=10,Ar=8,tr=.34,to=36,ir=120,Fi=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ct=[{time:0,name:"PATROL",threat:20,maxJets:3,missileCap:1,speed:16,hazard:"Clear airspace"},{time:32,name:"INTERCEPT",threat:46,maxJets:4,missileCap:1,speed:18.5,hazard:"Industrial turbulence"},{time:72,name:"MISSILE LOCK",threat:74,maxJets:5,missileCap:2,speed:21,crosswind:.7,hazard:"Storm crosswinds"},{time:122,name:"OVERDRIVE",threat:100,maxJets:6,missileCap:3,speed:24,crosswind:1.15,hazard:"Ash and blackout conditions"},{time:182,name:"CROSSFIRE",threat:100,maxJets:7,missileCap:4,speed:26,crosswind:1.65,altitudeMin:-3,altitudeMax:5.55,hazard:"Freezing tower wake"},{time:252,name:"TEMPEST",threat:100,maxJets:7,missileCap:5,speed:27.5,crosswind:2.15,altitudeMin:-2.85,altitudeMax:5.35,hazard:"Electrical shear"},{time:332,name:"KILLBOX",threat:100,maxJets:8,missileCap:6,speed:29,crosswind:2.75,altitudeMin:-2.65,altitudeMax:5.1,hazard:"Fortress crossfire"},{time:422,name:"LAST STAND",threat:100,maxJets:8,missileCap:7,speed:30.5,crosswind:3.35,altitudeMin:-2.45,altitudeMax:4.85,hazard:"Command-core kill corridor"}],ia={f16:{name:"F-16",color:9411488,accent:4282208,hp:2,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:3,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:2,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:5,speed:.72,agility:.62,score:980,scale:1.18}},Oi,Mi,w,V=new Audio;V.preload="auto";let Q=!1;V.addEventListener("ended",()=>{Q=!1}),V.addEventListener("error",()=>{Q=!1});let ne=[...pi,...Ya].map(_=>{let L=new Audio;return L.preload="auto",L.src=_,L.load(),L}),K,le,_e,Re,Ie,Ne,je,Pe,Ue,rt,wt,ve="loading",ht="ready",it="playing",Ve=0,vt=0,Fe=0,ke=0,Dt=1,nr=0,Bi=0,un=performance.now(),Si=0,fi=0,mi=1,Ln=0,ii=7646257,Dn=null,Cr=null,rr=!1,Ht="airframe",we=Hf();ju(we,ir);let gi={...we.equipped},Zt=oc(),mt=Za(we,Zt),Ki=mt.maxShields,dn=0,vi=0,Qe=0,bi=0,sr=!1,_i=2.4,Ei=0,Jt=!1,$i=0,Rr=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),de={x:0,y:.7,z:er,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:Nu},ai=[],Gt=[],Ir=[],ar=[],pn=[],zi=new Set,d_=new Ae,Qi=new A,Ju=new A;W.textContent=String(Math.floor(Rr)),G&&(G.textContent=String(we.coconuts));for(let _ of Object.values(An).flat())if(_.previewAsset){let L=new Image;L.src=_.previewAsset}function Ot(_){ee.textContent="",requestAnimationFrame(()=>{ee.textContent=_})}function yt(_,L,I){return Math.max(L,Math.min(I,_))}function or(_,L){_&&(_.hidden=!L,_.inert=!L,_.setAttribute("aria-hidden",String(!L)),_.classList.toggle("is-visible",L))}function Pr(){G&&(G.textContent=String(we.coconuts)),se&&(se.textContent=String(we.coconuts)),Ui&&(Ui.textContent=String(we.coconuts)),q&&(q.textContent=String(Ki))}function Ku(){let _={...we,equipped:{...we.equipped,...gi}},L=wi("airframe",_.equipped.airframe),I=wi("weapon",_.equipped.weapon),X=wi("outfit",_.equipped.outfit),he=wi(Ht,gi[Ht]),pe=we.equipped[Ht]===he.id;ie&&(ie.dataset.airframe=L.id,ie.dataset.weapon=I.id,ie.dataset.outfit=X.id,ie.classList.remove("is-swapping"),ie.offsetWidth,ie.classList.add("is-swapping")),oe&&oe.getAttribute("src")!==he.previewAsset&&(oe.src=he.previewAsset),oe&&(oe.alt="Wingtail previewing "+he.name+" in the equipment hangar"),ce&&(ce.textContent=pe?"Current loadout":"Preview only",ce.dataset.current=String(pe));let st={airframe:"Flight rig",weapon:"Banana system",outfit:"Flight clothing"}[Ht];ge&&(ge.textContent=he.name),Oe&&(Oe.textContent=st+" preview"),Je&&(Je.textContent=pe?"Equipped item":"Store preview");let ae=Wf(_);for(let[at,et]of Object.entries(Cn))et&&(et.style.width=ae[at]+"%");Pr()}function em(_,L=""){if(Math.abs(_)<.005)return"No change";let I=Number.isInteger(_)?_:Math.round(_*10)/10;return(I>0?"+":"")+I+L}function tm(_,L,I){let X=L.modifiers,he=I.modifiers;return _==="airframe"?[["Lift",Math.round(X.lift*100),Math.round(he.lift*100),"%"],["Agility",Math.round(X.handling*100),Math.round(he.handling*100),"%"],["Speed",Math.round(X.speed*100),Math.round(he.speed*100),"%"]]:_==="weapon"?[["Damage",X.damage,he.damage,""],["Fire rate",Math.round(10/X.cooldown)/10,Math.round(10/he.cooldown)/10,"/sec"],["Payload",X.projectiles,he.projectiles,"x"]]:[["Coconut yield",Math.round(X.income*100),Math.round(he.income*100),"%"],["Impact shields",X.shield,he.shield,""],["Lock resistance",Math.round(X.lockResistance*100),Math.round(he.lockResistance*100),"%"]]}function im(_){if(!Ft)return;let L=wi(Ht,we.equipped[Ht]),X=tm(Ht,L,_).map(([he,pe,st,ae])=>{let at=document.createElement("span"),et=document.createElement("b"),Kt=document.createElement("i"),At=document.createElement("em"),en=st-pe;return et.textContent=he,Kt.textContent=pe+ae+" \u2192 "+st+ae,At.textContent=em(en,ae),At.dataset.direction=en>0?"up":en<0?"down":"same",at.append(et,Kt,At),at});Ft.replaceChildren(...X)}function nm(){let _=wi(Ht,gi[Ht]);if(!_)return;let L=we.owned[Ht].includes(_.id),I=we.equipped[Ht]===_.id,X=we.coconuts>=_.cost;if(Xe&&(Xe.textContent=_.name),pt&&(pt.textContent=_.benefit),im(_),Se&&(Se.textContent=L?"Owned":_.cost+" coconuts",Se.dataset.affordable=String(X||L)),Ye&&(Ye.textContent=String(we.coconuts)),qe&&(qe.disabled=I||!L&&!X,qe.textContent=I?"Equipped":L?"Equip "+_.name:X?"Buy & Equip \xB7 "+_.cost:"Need "+(_.cost-we.coconuts)+" more"),Zi){let he=wi("airframe",we.equipped.airframe).name,pe=wi("weapon",we.equipped.weapon).name;Zi.textContent="Deploy Current Build",Zi.setAttribute("aria-label","Deploy current build: "+he+" and "+pe)}}function rm(_,L){let I=we.owned[L].includes(_.id),X=we.equipped[L]===_.id,he=document.createElement("button");he.type="button",he.className="loadout-item",he.dataset.itemId=_.id,he.dataset.owned=String(I);let pe=gi[L]===_.id;he.setAttribute("aria-pressed",String(pe)),he.dataset.equipped=String(X);let st=document.createElement("span");st.className="loadout-item__title",st.textContent=_.name;let ae=document.createElement("span");ae.className="loadout-item__tag",ae.textContent=_.tag;let at=document.createElement("span");at.className="loadout-item__description",at.textContent=_.description;let et=document.createElement("span");et.className="loadout-item__footer";let Kt=document.createElement("span");Kt.className="loadout-item__specs",Kt.textContent=_.specs.join(" \xB7 ");let At=document.createElement("span");return At.className="loadout-item__price",At.textContent=X?"Equipped":I?"Owned":_.cost+" coconuts",et.append(Kt,At),he.append(st,ae,at,et),he.addEventListener("click",()=>{gi[L]=_.id,Te.textContent=_.name+" is a preview only. Deploy uses equipped gear until you buy or equip it.",io(L)}),he}function io(_=Ht){if(!(!An[_]||!$e)){Ht=_;for(let L of lt?.querySelectorAll("[data-category]")||[])L.setAttribute("aria-selected",String(L.dataset.category===_));$e.replaceChildren(...An[_].map(L=>rm(L,_))),nm(),Ku(),matchMedia("(max-width: 700px) and (min-height: 501px)").matches&&requestAnimationFrame(()=>{let L=$e.querySelector('[aria-pressed="true"]');L&&$e.scrollTo({left:L.offsetLeft-($e.clientWidth-L.offsetWidth)/2,behavior:"auto"})})}}function no(){ve==="loading"||ve==="unsupported"||(ve="hangar",uc(!1),or(kt,!1),or(Z,!0),ju(we,ir),gi={...we.equipped},R.disabled=!0,U.disabled=!0,Te.textContent=`New sortie budget: ${ir} coconuts. Select gear for this run.`,io(Ht),lt?.querySelector('[aria-selected="true"]')?.focus({preventScroll:!0}),Ot("Wingtail loadout hangar opened."))}function sm(){St&&St.replaceChildren(...kf.map(_=>{let L=document.createElement("button");L.type="button",L.className="upgrade-choice";let I=document.createElement("small");I.textContent=_.tag+" \xB7 Tier "+(Zt[_.id]+1);let X=document.createElement("strong");X.textContent=_.name;let he=document.createElement("span");he.textContent=_.description;let pe=document.createElement("b");return pe.textContent=_.effect,L.append(I,X,he,pe),L.addEventListener("click",()=>om(_)),L}))}function am(_){ve="upgrading",R.disabled=!0,J&&(J.disabled=!0),zi.delete("TouchLift"),xt.textContent="Level "+(_+1)+" field upgrade",sm(),Pr(),or(kt,!0),ct.setPaused?.(!0),St?.querySelector("button")?.focus()}function om(_){Zt[_.id]+=1,mt=Za(we,Zt),_.id==="armor"&&(Ki+=1),or(kt,!1),ve="playing",R.disabled=!1,J&&(J.disabled=!1),ct.setPaused?.(!1),un=performance.now(),Pr(),n.focus({preventScroll:!0}),Ot(_.name+" installed.")}function ss(_,L){let I=Vf(we,Math.max(1,Math.round(_*mt.income)));return dn+=I,Pr(),L&&Ot(L+". "+I+" coconuts recovered."),I}function Lr(){return ii=ii*1664525+1013904223>>>0,ii/4294967296}function Bt(_,L){return _+(L-_)*Lr()}function ki(_,L={}){return new ti({color:_,roughness:L.roughness??.58,metalness:L.metalness??.45,emissive:L.emissive||0,emissiveIntensity:L.emissiveIntensity||0})}function Vt(_){_&&(K.remove(_),_.traverse?.(L=>{L.geometry?.dispose?.(),Array.isArray(L.material)?L.material.forEach(I=>I.dispose?.()):L.material?.dispose?.()}))}function lm(_){let L=ia[_],I=new ft,X=ki(L.color,{metalness:.72,roughness:.34}),he=ki(L.accent,{metalness:.62,roughness:.42}),pe=ki(1582893,{metalness:.75,roughness:.16}),st=ki(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),ae=new Ee(new Nt(.34,.5,4.2,10),X);ae.rotation.x=Math.PI/2,I.add(ae);let at=new Ee(new an(.34,1.35,10),X);at.rotation.x=Math.PI/2,at.position.z=2.72,I.add(at);let et=new Ee(new Xt(.38,10,6),pe);et.scale.set(.75,.55,1.35),et.position.set(0,.32,.8),I.add(et);let Kt=new Wr;Kt.moveTo(0,1.2),Kt.lineTo(2.7,-1.2),Kt.lineTo(.45,-.65),Kt.lineTo(0,-1.1);let At=new Ee(new Ls(Kt,{depth:.1,bevelEnabled:!1}),X);At.rotation.x=-Math.PI/2,At.rotation.z=Math.PI/2,At.position.set(-.05,-.03,.3),At.geometry.center(),I.add(At);let en=new Ee(new Pt(2.5,.08,.65),he);en.position.z=-1.55,I.add(en);let pd=new Ee(new Pt(.1,.85,.9),he);pd.position.set(0,.46,-1.55),I.add(pd);let as=new Ee(new Nt(.18,.28,.72,8),st);if(as.rotation.x=Math.PI/2,as.position.z=-2.38,I.add(as),_==="fa18"||_==="f22"){let oo=as.clone();as.position.x=-.24,oo.position.x=.24,I.add(oo)}if(_==="a10"){let oo=new Nt(.28,.34,1.45,9);[-.82,.82].forEach(Xm=>{let bc=new Ee(oo,he);bc.rotation.x=Math.PI/2,bc.position.set(Xm,.35,-.75),I.add(bc)}),At.scale.x=1.15}return _==="f22"&&(At.scale.z=1.25),I.scale.setScalar(L.scale),I.userData.engine=as,I}function cm(){let _=new ft,L=new Ee(new Nt(.09,.13,1.15,8),ki(13095121,{metalness:.75,roughness:.3}));L.rotation.x=Math.PI/2,_.add(L);let I=new Ee(new an(.1,.34,8),ki(14739172));I.rotation.x=-Math.PI/2,I.position.z=-.74,_.add(I);let X=new Ee(new an(.11,.55,8),new ot({color:16757051,transparent:!0,opacity:.9}));return X.rotation.x=Math.PI/2,X.position.z=.83,_.add(X),_.userData.flame=X,_}function hm(){let _=new ft,L=ki(3884877,{metalness:.82,roughness:.28}),I=ki(6911868,{metalness:.72,roughness:.34}),X=new ot({color:16727861,transparent:!0,opacity:.96}),he=new Ee(new Nt(.72,1.05,4.3,10),L);_.add(he);for(let at of[-1.25,1.25]){let et=new Ee(new Nt(1.08,1.08,.3,10),I);et.position.y=at,_.add(et)}let pe=new Ee(new Xt(.58,14,10),X);_.add(pe);let st=[];for(let at=0;at<3;at+=1){let et=new Ee(new ji(1.2+at*.34,.065,7,42),X);et.rotation.set(Math.PI/2+at*.32,at*.52,0),_.add(et),st.push(et)}let ae=new yi(16727861,4.8,12,2);return _.add(ae),_.userData={core:pe,rings:st,beacon:ae},_}function $u(_="ripe-repeater",L=!1){let I=new ft,X=_==="plantain-piercer",he=new yr([new A(-.44,.16,0),new A(-.24,-.03,0),new A(0,-.11,0),new A(.24,-.03,0),new A(.44,.16,0)]),pe=new Ee(new Ds(he,12,.095,7,!1),ki(X?9424690:16767279,{metalness:.05,roughness:.48,emissive:X?2640648:10182400,emissiveIntensity:.72}));I.add(pe);let st=new Xt(.082,7,5),ae=ki(5977365,{metalness:.02,roughness:.86}),at=new Ee(st,ae);at.position.set(-.46,.18,0),at.scale.set(.72,1.35,.72),at.rotation.z=-.62,I.add(at);let et=at.clone();et.position.x=.46,et.rotation.z=.62,I.add(et);let Kt=new yi(X?10479181:16762685,1.5,4);if(I.add(Kt),L){let At=new Ee(new Nt(.11,.16,.75,8),ki(3688011,{metalness:.72,roughness:.3}));At.rotation.z=Math.PI/2,At.position.x=.72,I.add(At);let en=new Ee(new an(.14,.6,8),new ot({color:16738861,transparent:!0,opacity:.92}));en.rotation.z=-Math.PI/2,en.position.x=1.28,I.add(en),I.userData.flame=en}return I.scale.setScalar(_==="cluster-bunch"?.86:X?1.3:1.18),L&&I.scale.multiplyScalar(1.18),I.userData.isBananaProjectile=!0,I.userData.isRageRocket=L,I}function um(_){let L=new ft;if(_==="banana"){let he=$u("ripe-repeater");he.scale.multiplyScalar(1.28),L.add(he)}else{let he=new Ee(new Xt(.48,14,10),ki(9195816,{metalness:.05,roughness:.88,emissive:2888199,emissiveIntensity:.45}));he.scale.y=.9,L.add(he);let pe=new ot({color:2363659});[[-.13,.14],[.13,.14],[0,-.08]].forEach(([st,ae])=>{let at=new Ee(new Xt(.045,7,5),pe);at.position.set(st,ae,.44),L.add(at)})}let I=new Ee(new ji(.72,.035,7,32),new ot({color:_==="banana"?16768853:6482640,transparent:!0,opacity:.78}));I.rotation.x=Math.PI/2,L.add(I);let X=new yi(_==="banana"?16767311:6482640,2.2,6);return L.add(X),L.userData.ring=I,L}function dm(){let _=new Float32Array(1080);for(let X=0;X<360;X+=1)_[X*3]=Bt(-60,60),_[X*3+1]=Bt(-1,28),_[X*3+2]=Bt(-150,-12);let L=new ut;L.setAttribute("position",new It(_,3)),Ie=new Xn(L,new yn({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),K.add(Ie),Re=new ft;let I=new ot({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let X=0;X<24;X+=1){let he=new Ee(new Xt(1,8,5),I);he.scale.set(Bt(4,9),Bt(.7,1.6),Bt(2,5)),he.position.set(Bt(-28,28),Bt(4,15),Bt(-130,-12)),Re.add(he)}K.add(Re)}function cc(_){!_||!K||(K.background.setHex(_.sky),K.fog.color.setHex(_.fog),Ue?.color.setHex(_.light),wt?.color.setHex(_.light))}function pm(_){return ai.find(L=>L.entityId===_)||null}function Qu(){return Df({seed:ii,callbacks:{onAircraftSpawn(_){return ve!=="playing"?!1:(Nm(_),!0)},onMissileWarning(_){if(ve!=="playing")return!1;let L=pm(_.sourceEntityId);return L?Um(L,_):!1},onMissileLaunch(_){let L=Gt.find(I=>I.directorId===_.missileId&&I.state==="locking");return L?(L.pendingLaunch=_,L.timer<=0&&sd(L,_),!0):!1}}})}async function fm(){try{Oi=new br({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),Oi.outputColorSpace=_t,Oi.toneMapping=Zn,Oi.toneMappingExposure=1.12,K=new jn,K.background=new Ae(Ct[0].sky),K.fog=new Wn(Ct[0].fog,.018),le=new zt(56,1,.1,220),le.position.set(0,3.1,13.5),le.lookAt(0,1,-26),Ue=new Yn(12446178,659736,2.25),K.add(Ue),rt=new qr(16769187,3.1),rt.position.set(-8,13,8),K.add(rt),wt=new yi(16762699,4.2,14),wt.position.set(0,3,5),K.add(wt),dm(),_e=Tf({scene:K,level:0,seed:ii,speed:Ct[0].speed*.5}),cc(_e.getEnvironment()),Pe=Kf({scene:K,camera:le,mobile:innerWidth<=700,reducedMotion:Fi,quality:"auto",seed:ii}),Ne=await yf({scene:K,camera:le,renderer:Oi,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:Fi}),Jl(Ne,we.equipped),Wa(Ne,0,de,{active:!1,speed:Ct[0].speed}),Uu(Ne,Qn,de),je=Qu();try{Mi=Uf({canvas:l,vesperAsset:o.currentSrc||o.src,wingtailAsset:oe.currentSrc||oe.src,reducedMotion:Fi,onCue:mm,onChoice:vm,onComplete:xm,isVoicePlaying:()=>Q})}catch(_){console.warn("Cinematic renderer unavailable; using direct briefing.",_),Mi=null}hc(),ve="ready",s.disabled=!1,s.textContent="Start Transmission",Ot("3D flight systems ready.")}catch(_){console.error(_),ve="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",s.hidden=!0}}function hc(){if(!Oi||!le)return;let _=n.clientWidth||innerWidth,L=n.clientHeight||innerHeight,I=_<=700;rr=I,Oi.setPixelRatio(Math.min(devicePixelRatio||1,I?1.5:2)*mi),Oi.setSize(_,L,!1),le.aspect=_/Math.max(1,L),le.fov=I&&L>_?65:55,le.updateProjectionMatrix(),Fu(Ne,I),Mi?.resize(),w?.resize(),document.body.classList.toggle("touch-controls-ready",I&&matchMedia("(pointer: coarse)").matches),O?.setAttribute("aria-hidden",String(!(I&&matchMedia("(pointer: coarse)").matches)))}function uc(_){e.classList.toggle("is-visible",_),e.setAttribute("aria-hidden",String(!_)),n.inert=_}function mm(_={}){Number.isFinite(_.progress)&&d&&(d.style.width=Math.round(_.progress*100)+"%"),!(!_.speaker&&!_.text)&&(_.speaker&&(h.textContent=_.speaker,f.textContent=_.speaker),_.text&&(u.textContent=_.text,x.textContent=_.text),Array.isArray(_.telemetry)&&p&&(p.replaceChildren(..._.telemetry.map(L=>{let I=document.createElement("span"),[X,he=""]=L.split(" // ");I.append(document.createTextNode(X));let pe=document.createElement("strong");return pe.textContent=he,I.append(pe),I})),p.hidden=!1,p.setAttribute("aria-hidden","false")),_.voice&&ed(_.voice),_.speaker==="Skyshield command"?ct.playMissileLaunch?.():_.speaker==="Evacuation channel"?ct.playImpact?.(!0):_.speaker==="Commander Vesper"&&ct.playLevel?.())}function ed(_){V.pause(),V.currentTime=0,Q=!0,V.src=_,V.muted=!!ct.isMuted?.(),V.volume=.92,V.play().catch(()=>{Q=!1})}function ro(){Q=!1,V.pause(),V.currentTime=0,V.removeAttribute("src"),V.load()}function gm(){if(ht==="ready"){if(!Mi){ht="complete",no();return}ht="playing",ve="cinematic",ct.init?.(),ct.setPaused?.(!1),ro(),e.dataset.mode="cinematic",t.hidden=!0,i.hidden=!0,r.hidden=!0,o.hidden=!0,c.hidden=!1,p.hidden=!1,m.hidden=!1,g.hidden=!0,s.hidden=!0,a.hidden=!1,v.textContent="Field Transmission",S.textContent="Archive 72H // Live reconstruction",Mi.start(),Ot("Emergency transmission started. Skip Intro is available.")}}function vm(){ht="choice",ve="dialogue",a.hidden=!0,f.textContent="Wingtail",x.textContent="Vesper is waiting for your answer.",h.textContent="Wingtail",u.textContent="YOUR RESPONSE REQUIRED",g.hidden=!1,g.querySelector("button")?.focus({preventScroll:!0}),Ot("Choose Wingtail's response.")}function _m(_){ht==="choice"&&(ht="resolving",ve="cinematic",g.hidden=!0,Mi.choose(_))}function xm(){ht!=="complete"&&(ht="complete",localStorage.setItem("monkeySeeMonkeyPewIntroSeen","1"),ct.setPaused?.(!0),ro(),Mi?.dispose(),Mi=null,ne.splice(0),c.hidden=!0,p.hidden=!0,m.hidden=!0,a.hidden=!0,no())}function td(){["playing","choice","resolving"].includes(ht)&&Mi?.skip()}function ym(){ai.splice(0).forEach(_=>Vt(_.view)),Gt.splice(0).forEach(_=>Vt(_.view)),Ir.splice(0).forEach(_=>Vt(_.view)),ar.splice(0).forEach(_=>Vt(_.view)),pn.splice(0).forEach(_=>Vt(_.view)),vt=0,Fe=0,ke=0,Dt=1,nr=0,Bi=0,Zt=oc(),mt=Za(we,Zt),Ki=mt.maxShields,dn=0,vi=0,Qe=0,bi=0,sr=!1,_i=2.4,Ei=0,Jt=!1,$i=0,Ve=0,ii=(Date.now()^7646257)>>>0,_e?.setSeed(ii,{regenerate:!0}),_e?.setLevel(0,{immediate:!0}),je?.stop({clearSchedule:!0}),je=Qu(),je.reset({levelIndex:0,delay:.85}),Object.assign(de,{x:0,y:.7,z:er,vy:0,vx:0,lane:1,bank:0,pitch:0}),k.textContent="0",H.textContent="0",j.textContent="1.00\xD7",Jl(Ne,we.equipped),Pr(),De.hidden=!0,Ge.style.width="0%",D?.classList.remove("is-locked"),N&&(N.textContent="Scanning"),y&&(y.hidden=!0),fc(),Nn(),ao(),rd(0,!1)}function id(){ve==="loading"||ve==="unsupported"||(ym(),or(Z,!1),or(kt,!1),ve="playing",e.dataset.mode="flight",uc(!1),R.disabled=!1,U.disabled=!1,J&&(J.disabled=!1),je?.start({levelIndex:0,delay:.85}),ct.init?.(),ct.setPaused?.(!1),ct.startRun?.(0),Nn(),n.focus({preventScroll:!0}),Ot("3D flight started."))}function dc(){ve==="playing"&&(de.vy=Math.min(de.vy+3.5*Math.sqrt(mt.lift),6.4*mt.lift),de.pitch=.34,Ut(Pe,"jetExhaust",{position:{x:de.x,y:de.y-.1,z:de.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),ct.playFlap?.(yt(de.vy/6,.45,1)))}function pc(_){ve==="playing"&&(de.lane=yt(de.lane+_,0,si.length-1))}function nd(){let _=null,L=1/0;for(let I of pn){if(I.z>er||I.z<-115)continue;let X=Math.hypot(I.x-de.x,I.y-de.y)*.72+Math.abs(I.z)*.012;X<9.8&&X<L&&(_=I,L=X)}if(_)return _;for(let I of ai){if(I.z>er||I.z<-82)continue;let X=I.x-de.x,he=I.y-de.y,pe=Math.hypot(X,he)+Math.abs(I.z)*.018;pe<7.4&&pe<L&&(_=I,L=pe)}return _}function fc(){let _=Qe>0?tr:mt.cooldown,L=Math.round(yt(1-Bi/_,0,1)*100);P?.style.setProperty("--weapon-charge",String(L)),P?.setAttribute("aria-valuenow",String(L))}function Nn(){let _=Qe>0,L=!_&&vi>=Ji,I=yt(_?Qe/Ar:vi/Ji,0,1);Y?.classList.toggle("is-active",_),Y?.classList.toggle("is-ready",L),Y&&(Y.disabled=!L||ve!=="playing",Y.setAttribute("aria-label",_?"Go Bananas active":L?"Activate Go Bananas":"Go Bananas charge")),$&&($.hidden=!L,$.disabled=!L||ve!=="playing"),te&&(te.textContent=_?"Banana Rage":L?"Go Bananas Ready":"Go Bananas"),xe&&(xe.textContent=_?`${Qe.toFixed(1)}s`:L?"READY":`${Math.floor(vi)} / ${Ji}`),Me?.style.setProperty("width",`${Math.round(I*100)}%`),Me?.parentElement?.setAttribute("aria-valuenow",String(_?Math.ceil(Qe):Math.floor(vi))),Me?.parentElement?.setAttribute("aria-valuemax",String(_?Ar:Ji))}function mc(){return ve!=="playing"||Qe>0||vi<Ji?!1:(vi=0,Qe=Ar,bi=0,sr=!1,Dr("GO BANANAS",750),Ut(Pe,"hitFlash",{color:16758062,intensity:.7,impulse:.32}),ct.playLevel?.(3),Nn(),Ot("Go Bananas activated. Heavy banana rockets online for eight seconds."),!0)}function so(_){if(Qe>0)Qe=Math.min(Ar+2,Qe+Number(_||0)*.18);else{let L=vi>=Ji;vi=Math.min(Ji,vi+Math.max(0,Number(_)||0)),!L&&vi>=Ji&&!sr&&(sr=!0,Ot("Go Bananas is ready."))}Nn()}function Mm(_){Qe<=0||(Qe=Math.max(0,Qe-_),bi-=_,bi<=0&&(Bi=0,gc(!0),bi=tr),Qe<=0&&(Y?.classList.remove("is-active"),Ot("Banana rage depleted.")),Nn())}function gc(_=Qe>0){if(ve!=="playing"||Bi>0)return;Bi=_?tr:mt.cooldown;let L=nd(),I=new A(0,0,-1);L&&(Qi.set(L.x-de.x,L.y-de.y,L.z-de.z).normalize(),I.lerp(Qi,innerWidth<=700?.82:.68).normalize());let X=we.equipped.weapon,he=_?1:mt.projectiles,pe=_?0:mt.spread;for(let st=0;st<he;st+=1){let ae=st-(he-1)/2,at=I.clone();at.x+=ae*pe,at.y+=Math.abs(ae)*pe*.16,at.normalize();let et=$u(X,_);if(Ir.length>=to){let At=Ir.shift();Vt(At?.view)}et.position.set(de.x+ae*.16,de.y,de.z-.9),K.add(et);let Kt={x:et.position.x,y:et.position.y,z:et.position.z,previous:et.position.clone(),velocity:at.multiplyScalar(_?Math.max(72,mt.projectileVelocity*1.25):mt.projectileVelocity),damage:_?Math.max(4,mt.damage*2):mt.damage,life:_?2.5:1.9,rage:_,trailTimer:0,spin:Bt(11,16)*(Lr()>.5?1:-1),tumble:Bt(7,11),view:et};Ir.push(Kt),Ut(Pe,"projectileTrail",{position:et.position,velocity:Kt.velocity,life:.14,width:_?.11:X==="cluster-bunch"?.05:.075,length:_?1.8:1.2,color:_?16738866:X==="plantain-piercer"?11070552:16772456})}fc(),ct.playShot?.()}function ao(){let _=Math.max(0,3-$i);Ce&&(Ce.hidden=!Jt||ve==="victory"||ve==="victory-result"),re&&(re.textContent=String(_)),be?.style.setProperty("width",`${Math.round($i/3*100)}%`),be?.parentElement?.setAttribute("aria-valuenow",String($i))}function Sm(){if(Jt||!K)return;Jt=!0,$i=0;let _=[0,2,1],L=[.1,2.15,-.65];for(let I=0;I<3;I+=1){let X=hm(),he={spec:{name:`COMMAND RELAY ${I+1}`},view:X,hp:8+I*2,maxHp:8+I*2,lane:_[I],x:si[_[I]],y:L[I],z:-72-I*48,phase:I*2.1,radius:1.42};X.position.set(he.x,he.y,he.z),K.add(X),pn.push(he)}ao(),Ot("Relay Hunt active. Destroy all three command relays to free the stolen fleet.")}function bm(_){let L=pn[_];L&&(Ut(Pe,"explosion",{position:L,count:38,scale:1.9,speed:9,color:16733757,impulse:1.05}),Ut(Pe,"hitFlash",{color:16757051,intensity:.78,impulse:.45}),Vt(L.view),pn.splice(_,1),$i+=1,ss(20),so(3),Dr("COMMAND RELAY DESTROYED",2400),ct.playJetDestroyed?.(yt(L.x/8,-1,1)),ao(),$i>=3&&Am())}function Em(_){if(!Jt)return;let L=Ct[Ve].speed*.43;for(let I=pn.length-1;I>=0;I-=1){let X=pn[I];if(X.z+=L*_,X.phase+=_,X.x=si[X.lane]+Math.sin(X.phase*.82)*.55,X.y+=Math.sin(X.phase*1.13)*_*.12,X.view.position.set(X.x,X.y,X.z),X.view.rotation.y+=_*.34,X.view.userData.rings.forEach((he,pe)=>{he.rotation.z+=_*(.9+pe*.25)}),X.view.userData.core.scale.setScalar(.9+Math.sin(vt*6+X.phase)*.12),X.view.userData.beacon.intensity=3.8+Math.sin(vt*7+X.phase)*1.2,Math.abs(X.z-de.z)<1.6&&Math.hypot(X.x-de.x,X.y-de.y)<X.radius+de.radius){if(!vc("command relay collision",X)){Mc("command relay collision");return}X.z=-112}else X.z>14&&(X.z=-112-I*18,X.lane=(X.lane+1)%si.length,Ot(`${X.spec.name} escaped the firing lane and is cycling back.`))}}function Tm(_={}){Number.isFinite(_.progress)&&ns?.style.setProperty("width",`${Math.round(_.progress*100)}%`),_.speaker&&(In.textContent=_.speaker),_.text&&(Tr.textContent=_.text),_.voice&&ed(_.voice)}function wm(){ve="victory-result",ro(),bt.textContent="Humanity has its sky back.",Tr.textContent=`All three relays destroyed. ${Math.floor(Fe)} km survived, ${ke.toLocaleString()} points scored, and ${dn} coconuts recovered.`,In.textContent="Mission accomplished",ns?.style.setProperty("width","100%"),rs.hidden=!0,wr.hidden=!1,wr.focus({preventScroll:!0}),Ot("Operation Banana Sky complete. Humanity is safe.")}function Am(){["victory","victory-result"].includes(ve)||(ve="victory",pn.splice(0).forEach(_=>Vt(_.view)),ai.splice(0).forEach(_=>Vt(_.view)),Gt.splice(0).forEach(_=>Vt(_.view)),je?.stop({clearSchedule:!0}),R.disabled=!0,U.disabled=!0,J&&(J.disabled=!0),zi.clear(),ao(),Nn(),ss(75),ct.stopRun?.(),ct.setPaused?.(!1),bt.textContent="The relays are down.",Tr.textContent="Skyshield is losing control of the stolen fleet.",In.textContent="Commander Vesper",ns?.style.setProperty("width","0%"),rs.hidden=!1,wr.hidden=!0,or(z,!0),n.inert=!0,w=Bf({canvas:Rn,vesperAsset:"./assets/commander-vesper-v1.png",wingtailAsset:"./assets/wingtail-hangar-front-v1.png",reducedMotion:Fi,onCue:Tm,onComplete:wm}),w?.start())}function Cm(){ro(),w?.dispose(),w=null,or(z,!1),n.inert=!1,no()}function Rm(){if(ar.length>=5)return;let _=Lr()<.68?"coconut":"banana",L=Math.floor(Lr()*si.length),I=um(_),X={type:_,x:si[L]+Bt(-.45,.45),y:Bt(-1.1,4.8),z:Bt(-88,-72),phase:Bt(0,Math.PI*2),view:I};I.position.set(X.x,X.y,X.z),K.add(I),ar.push(X)}function Im(_){let L=ar[_];if(L){if(Ut(Pe,"explosion",{position:L,count:10,scale:.42,speed:3.8,color:L.type==="banana"?16768853:6482640,impulse:.08}),L.type==="banana"){let I=Math.max(2,mt.maxShields+1);Ki=Math.min(I,Ki+1),Dr("RESCUE BANANA",250),so(2),Ot("Rescue banana collected. Coconut armor restored.")}else ss(5),Dr("COCONUT CACHE",125),so(1),Ot("Coconut collected. Five coconuts secured.");Pr(),ct.playFlap?.(1.35),Vt(L.view),ar.splice(_,1)}}function Pm(_){_i-=_,_i<=0&&(Rm(),_i=Math.max(3.2,5.2-Ve*.45)+Bt(0,1.2));let L=Ct[Ve].speed*1.08;for(let I=ar.length-1;I>=0;I-=1){let X=ar[I];X.z+=L*_,X.phase+=_*2.4,X.view.position.set(X.x,X.y+Math.sin(X.phase)*.16,X.z),X.view.rotation.y+=_*1.9,X.view.rotation.z=Math.sin(X.phase*.7)*.18,X.view.userData.ring&&(X.view.userData.ring.rotation.z+=_*1.6),Math.abs(X.z-de.z)<1.25&&Math.hypot(X.x-de.x,X.y-de.y)<1.35?Im(I):X.z>14&&(Vt(X.view),ar.splice(I,1))}}function rd(_,L=!0){if(_===Ve&&vt>0)return;Ve=_;let I=Ct[_];fe.textContent=`LEVEL ${_+1} / ${Ct.length} \xB7 ${I.name}`,me.style.width=`${I.threat}%`,me.style.background=_>=2?"var(--danger)":_===1?"var(--accent)":"var(--signal)",me.parentElement.setAttribute("aria-valuenow",String(I.threat)),K&&(_e?.setLevel(_,{duration:L?3.1:.4,immediate:!L}),L||cc(_e?.getEnvironment()),$f(Pe,_)),je?.setLevel(_,{clearSchedule:L}),ct.playLevel?.(_),L&&_>0&&(ss(12+_*4),am(_)),L&&_===Ct.length-1&&Sm(),L&&Ot(`Level ${_+1}: ${I.name}. ${I.hazard}. City sector changed.`)}function Lm(){let _=0;for(let L=Ct.length-1;L>=0;L-=1)if(vt>=Ct[L].time){_=L;break}_!==Ve&&rd(_)}function Dm(){let _=Ve===0?["f16","fa18"]:Ve===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return _[Math.floor(Lr()*_.length)]}function Nm(_={}){let L=ia[_.typeHint]?_.typeHint:Dm(),I=ia[L],X=yt(Number.isInteger(_.lane)?_.lane:Math.floor(Lr()*si.length),0,si.length-1),he=lm(L),pe=_.behavior||["intercept","sweep","dive"][Math.floor(Lr()*3)],st={entityId:_.entityId||`legacy-${ii}-${ai.length}`,encounterId:_.encounterId||null,role:_.role||"interceptor",typeId:L,spec:I,view:he,hp:I.hp,lane:X,x:si[X]+Bt(-.8,.8),y:Number.isFinite(_.altitude)?_.altitude:Bt(-1.6,5.2),z:Number.isFinite(_.spawnZ)?_.spawnZ:-82,speed:Ct[Ve].speed*I.speed*yt(_.speedScale||1,.78,1.42),phase:Number.isFinite(_.phase)?_.phase:Bt(0,Math.PI*2),amplitude:(Number.isFinite(_.amplitude)?_.amplitude:Bt(.7,2.1))*I.agility,behavior:pe,passed:!1,exhaustTimer:Bt(0,.08)};return he.position.set(st.x,st.y,st.z),K.add(he),ai.push(st),st}function Um(_,L={}){let I=Ct[Ve];if(!_||Gt.length>=I.missileCap)return!1;let X=cm();X.visible=!1,K.add(X);let he=yt(L.leadTime||[1.45,1.22,1.02,.84][Ve],.8,3),pe={directorId:L.missileId||`missile-${ii}-${Gt.length}`,bearingHint:L.bearingHint||"ahead",state:"locking",source:_,view:X,x:_.x,y:_.y,z:_.z,timer:he,lockDuration:he,speed:19,direction:new A(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return Gt.push(pe),De.hidden=!1,ct.playMissileLock?.(pe),!0}function sd(_,L={}){_.state="active",_.view.visible=!0,_.source=null,_.speed=19*yt(L.speedScale||1,.9,1.35),_.guidanceScale=yt(L.guidanceScale||1,.88,1.25),_.life=yt(L.lifetime||5.5,3.5,7),_.direction.set(de.x-_.x,de.y-_.y,de.z-_.z).normalize(),Ut(Pe,"explosion",{position:_,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),ct.playMissileLaunch?.(_)}function Fm(_){let L=Ct[Ve];if((zi.has("Space")||zi.has("KeyW")||zi.has("ArrowUp")||zi.has("TouchLift"))&&(de.vy+=5.8*mt.lift*_),de.vy=yt(de.vy-3.1*_,-3.6,6.4*mt.lift),L.crosswind){let st=Math.sin(vt*.83+Ve*1.7)+Math.sin(vt*2.17)*.42;de.vx+=st*L.crosswind*_,de.vy+=Math.cos(vt*1.31+Ve)*L.crosswind*.12*_}de.y+=de.vy*_;let X=L.altitudeMin??eo,he=L.altitudeMax??Pn;(de.y<X||de.y>he)&&(de.y=yt(de.y,X,he),de.vy*=-.15,fi=Math.max(fi,.08));let pe=si[de.lane];de.vx+=(pe-de.x)*34*mt.handling*_,de.vx*=Math.exp(-9*Math.sqrt(mt.handling)*_),de.x+=de.vx*_,de.bank+=(yt(-de.vx*.08,-.48,.48)-de.bank)*_*8,de.pitch+=(yt(-de.vy*.045,-.34,.34)-de.pitch)*_*7,Wa(Ne,_,de,{active:ve==="playing",speed:Ct[Ve].speed,thrust:.52+yt(Math.abs(de.vy)/6.4,0,1)*.42})}function vc(_,L){return Ki<=0?!1:(Ki-=1,Pr(),fi=Fi?.05:.2,Ut(Pe,"explosion",{position:L,count:16,scale:.82,speed:5.5,color:6482640,impulse:.32}),Ut(Pe,"hitFlash",{color:6482640,intensity:.62,impulse:.32}),Ot("Coconut shield absorbed "+_+". "+Ki+" remaining."),!0)}function Om(_){for(let L=ai.length-1;L>=0;L-=1){let I=ai[L];I.z+=I.speed*_,I.phase+=_*(1.25+I.spec.agility*.55);let X=si[I.lane];I.behavior==="sweep"?I.x=X+Math.sin(I.phase)*I.amplitude*1.8:I.behavior==="flank"?I.x=X+Math.sin(I.phase*.82)*I.amplitude*2.35:I.x+=(X+Math.sin(I.phase)*I.amplitude-I.x)*_*1.8,I.behavior==="dive"?I.y+=Math.sin(I.phase*.68)*_*2.4:I.y+=Math.cos(I.phase)*_*I.amplitude*(I.behavior==="missile-sortie"?.2:.42),I.view.position.set(I.x,I.y,I.z),I.view.rotation.z=Math.sin(I.phase)*.28*I.spec.agility,I.view.rotation.x=Math.cos(I.phase*.7)*.06,I.view.userData.engine.scale.setScalar(.8+Math.sin(vt*26+I.phase)*.18),I.exhaustTimer-=_,I.exhaustTimer<=0&&(I.exhaustTimer=rr?.09:.055,Ut(Pe,"jetExhaust",{position:{x:I.x,y:I.y,z:I.z-2.35*I.spec.scale},velocity:{x:0,y:0,z:-I.speed*.16},color:I.typeId==="a10"?16753487:6674943}));let he=I.z-de.z;if(Math.abs(he)<1.2&&Math.hypot(I.x-de.x,I.y-de.y)<de.radius+.7*I.spec.scale){if(vc(I.spec.name+" collision",I)){ad(L);continue}Mc(`${I.spec.name} collision`);return}I.z>10&&(Math.hypot(I.x-de.x,I.y-de.y)<3.3&&(Dr("CLOSE PASS",120),Ut(Pe,"nearMiss",{position:I,velocity:{x:0,y:0,z:I.speed},impulse:.14,roll:yt((I.x-de.x)/8,-1,1)*.008})),Vt(I.view),ai.splice(L,1))}}function Bm(_,L){if(!_||!T||!M)return;let I=_.x-de.x,X=_.z-de.z,he=Math.atan2(I,-X)*180/Math.PI;T.style.setProperty("--missile-bearing",`${he.toFixed(1)}deg`);let pe="Ahead";Math.abs(he)>135?pe="Behind":he<-35?pe="Left":he>35&&(pe="Right"),M.textContent=L?`${pe} \xB7 inbound`:`${pe} \xB7 locking`}function zm(_){let L=0,I=null,X=null;for(let st=Gt.length-1;st>=0;st-=1){let ae=Gt[st];if(ae.state==="locking"){if(!ae.source||!ai.includes(ae.source)){Vt(ae.view),Gt.splice(st,1);continue}ae.x=ae.source.x,ae.y=ae.source.y-.4,ae.z=ae.source.z+.4,ae.timer=Math.max(0,ae.timer-_*(1-mt.lockResistance)),(Math.abs(de.vx)>2.2||Math.abs(de.vy)>6.2)&&(ae.timer=Math.min(ae.lockDuration,ae.timer+_*.22));let At=1-ae.timer/ae.lockDuration;At>=L&&(L=At,I=ae),ae.timer<=0&&ae.pendingLaunch&&sd(ae,ae.pendingLaunch);continue}ae.life-=_,Qi.set(de.x-ae.x,de.y-ae.y,de.z-ae.z).normalize();let at=(ae.life>3?2.8:1.2)*(ae.guidanceScale||1);ae.direction.lerp(Qi,1-Math.exp(-at*_)).normalize(),ae.speed=Math.min(31,ae.speed+7*_),ae.x+=ae.direction.x*ae.speed*_,ae.y+=ae.direction.y*ae.speed*_,ae.z+=ae.direction.z*ae.speed*_,ae.view.position.set(ae.x,ae.y,ae.z),ae.view.lookAt(ae.x-ae.direction.x,ae.y-ae.direction.y,ae.z-ae.direction.z),ae.view.userData.flame.scale.y=.8+Math.sin(vt*32)*.2,ae.smokeTimer-=_,ae.smokeTimer<=0&&(ae.smokeTimer=rr?.075:.045,Ut(Pe,"missileSmoke",{position:ae,velocity:{x:-ae.direction.x*1.8,y:-ae.direction.y*1.8,z:-ae.direction.z*1.8}}));let et=Math.hypot(ae.x-de.x,ae.y-de.y,ae.z-de.z);if(ae.closestDistance=Math.min(ae.closestDistance,et),!ae.nearMissShown&&ae.closestDistance<3.1&&ae.closestDistance>de.radius+.35&&et>ae.lastDistance+.16&&(ae.nearMissShown=!0,Ut(Pe,"nearMiss",{position:ae,velocity:ae.direction,impulse:.26,roll:yt((ae.x-de.x)/8,-1,1)*.014})),ae.lastDistance=et,(!X||et<X.distance)&&(X={missile:ae,distance:et}),et<de.radius+.4){if(Ut(Pe,"explosion",{position:ae,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),vc("missile strike",ae)){Vt(ae.view),Gt.splice(st,1);continue}Ut(Pe,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),Mc("missile strike");return}(ae.life<=0||ae.z>18||Math.abs(ae.x)>22||Math.abs(ae.y)>16)&&(Vt(ae.view),Gt.splice(st,1))}let he=!!X;X&&(I=X.missile);let pe=he?100:Math.round(L*100);De.hidden=!I,Ge.style.width=`${pe}%`,Ge.setAttribute("aria-valuenow",String(pe)),Bm(I,he)}function _c(_,L,I){Qi.copy(I).sub(L);let X=Qi.lengthSq();if(!X)return _.distanceTo(L);let he=yt(Ju.copy(_).sub(L).dot(Qi)/X,0,1);return Ju.copy(L).addScaledVector(Qi,he).distanceTo(_)}function km(_){for(let L=Ir.length-1;L>=0;L-=1){let I=Ir[L];I.previous.set(I.x,I.y,I.z),I.x+=I.velocity.x*_,I.y+=I.velocity.y*_,I.z+=I.velocity.z*_,I.life-=_,I.view.position.set(I.x,I.y,I.z),I.view.rotation.z+=I.spin*_,I.view.rotation.x=Math.sin((1.9-I.life)*I.tumble)*.32,I.view.rotation.y=Math.cos((1.9-I.life)*I.tumble*.74)*.24,I.rage&&I.view.userData.flame&&(I.view.userData.flame.scale.y=.82+Math.sin(performance.now()*.03)*.18),I.trailTimer-=_,I.trailTimer<=0&&(I.trailTimer=I.rage?.09:rr?.06:.035,Ut(Pe,"projectileTrail",{start:I.previous,end:I.view.position,life:.16,width:I.rage?.105:.055,color:I.rage?16738613:16770443}));let X=!1;for(let he=Gt.length-1;he>=0;he-=1){let pe=Gt[he];if(pe.state==="active"&&_c(new A(pe.x,pe.y,pe.z),I.previous,I.view.position)<.62){Ut(Pe,"explosion",{position:pe,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),Vt(pe.view),Gt.splice(he,1),Dr("MISSILE DOWN",300),X=!0;break}}if(!X)for(let he=pn.length-1;he>=0;he-=1){let pe=pn[he];if(_c(new A(pe.x,pe.y,pe.z),I.previous,I.view.position)<pe.radius){pe.hp-=I.damage,Ut(Pe,"explosion",{position:pe,count:pe.hp<=0?30:8,scale:pe.hp<=0?1.6:.42,speed:pe.hp<=0?8:4.5,color:pe.hp<=0?16733757:16761690,impulse:pe.hp<=0?.8:.12}),pe.view.userData.core.material.opacity=yt(pe.hp/pe.maxHp,.28,1),pe.hp<=0?bm(he):Ot(`${pe.spec.name} integrity ${Math.max(0,Math.ceil(pe.hp/pe.maxHp*100))} percent.`),X=!0;break}}if(!X)for(let he=ai.length-1;he>=0;he-=1){let pe=ai[he];if(_c(new A(pe.x,pe.y,pe.z),I.previous,I.view.position)<1.05*pe.spec.scale){pe.hp-=I.damage,Ut(Pe,"explosion",{position:pe,count:pe.hp<=0?20:6,scale:pe.hp<=0?1.05:.32,speed:pe.hp<=0?7:4,color:pe.hp<=0?16738866:16769130,impulse:pe.hp<=0?.55:.08}),pe.hp<=0&&ad(he),X=!0;break}}(X||I.life<=0||I.z<-110)&&(Vt(I.view),Ir.splice(L,1))}}function ad(_){let L=ai[_];Vt(L.view),ai.splice(_,1);for(let I=Gt.length-1;I>=0;I-=1)Gt[I].source===L&&(Vt(Gt[I].view),Gt.splice(I,1));ss(Math.max(2,Math.round(L.spec.score/190))),Ei+=1,so(2.5),Dr(`${L.spec.name} DOWN`,L.spec.score),ct.playJetDestroyed?.(yt(L.x/8,-1,1)),fi=Fi?.04:.15}function Dr(_,L){ke+=Math.round(L*Dt),Dt=yt(Dt+.25,1,5),nr=3.4,H.textContent=String(ke),j.textContent=`${Dt.toFixed(2)}\xD7`,Ot(`${_}. ${Math.round(L*Dt)} points.`)}function od(){let _=nd();if(!_||ve!=="playing"){D?.classList.remove("is-locked"),N&&(N.textContent="Scanning"),y&&(y.hidden=!0),D&&(D.style.left="50%",D.style.top="50%");return}Qi.set(_.x,_.y,_.z).project(le);let L=yt((Qi.x*.5+.5)*100,10,90),I=yt((-Qi.y*.5+.5)*100,16,84);D?.classList.add("is-locked"),D&&(D.style.left=`${L}%`,D.style.top=`${I}%`),N&&(N.textContent=`${_.spec.name} locked`),y&&(y.hidden=!1,y.textContent=`${Math.max(1,Math.round((de.z-_.z)*12))} m`)}function xc(_){let L=Ct[Ve].speed*.5*mt.speed;cc(_e?.update(_,{speed:L}));for(let X of Re.children)X.position.z+=L*_*.34,X.position.z>18&&(X.position.z-=148);let I=Ie.geometry.attributes.position;for(let X=2;X<I.array.length;X+=3)I.array[X]+=L*_*.55,I.array[X]>6&&(I.array[X]-=150);I.needsUpdate=!0}function yc(_){let L=fi;fi=Math.max(0,fi-_);let I=Zu(Pe,_,{camera:le,playerPosition:de,cameraPosition:le.position});Uu(Ne,_,de,{camera:le,shake:L,lookAhead:rr?29:32}),I&&(le.position.x+=I.x,le.position.y+=I.y,le.position.z+=I.z,le.rotateZ(I.roll))}function Hm(_){if(ve!=="playing"){ve==="ready"?(de.y=.65+Math.sin(performance.now()/700)*.18,Wa(Ne,_,de,{active:!1,speed:Ct[0].speed}),xc(_*.35),yc(_)):ve==="crashing"?(Wa(Ne,_,de,{active:!1,speed:Ct[Ve].speed}),xc(_*.45),yc(_)):Zu(Pe,_,{camera:le,playerPosition:de,cameraPosition:le?.position}),od();return}vt+=_,Fe+=_*(1.5+Ve*.18)*mt.speed,Bi=Math.max(0,Bi-_),Mm(_),fc(),nr-=_,nr<=0&&Dt>1&&(Dt=Math.max(1,Dt-_*.75),j.textContent=`${Dt.toFixed(2)}\xD7`),Lm(),ve==="playing"&&(je?.update(_,{activeAircraft:ai.length,activeMissiles:Gt.length,maxAircraft:Ct[Ve].maxJets,maxMissiles:Ct[Ve].missileCap,difficulty:Ve*.03}),Fm(_),Om(_),ve==="playing"&&(zm(_),ve==="playing"&&(Em(_),ve==="playing"&&(Pm(_),km(_),ve==="playing"&&(xc(_),yc(_),od(),k.textContent=String(Math.floor(Fe)),ct.update?.(_,{state:ve,level:Ve,monkey:de,jets:ai,missiles:Gt}))))))}function Mc(_){if(ve!=="playing")return;ve="crashing",Nn(),R.disabled=!0,J&&(J.disabled=!0),zi.delete("TouchLift"),je?.stop({clearSchedule:!0}),De.hidden=!0,fi=Fi?.08:.28,Ut(Pe,"explosion",{position:de,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),Ut(Pe,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),ct.playImpact?.(_),ct.stopRun?.(_);let L=Math.floor(Fe);L>=8&&ss(Math.max(1,Math.floor(L/12))),L>Rr&&(Rr=L,W.textContent=String(Rr),localStorage.setItem("monkeyNoFlyBest3D",String(Rr))),window.setTimeout(()=>{ve="gameover",e.dataset.mode="result",t.hidden=!1,i.hidden=!1,t.textContent="Flight terminated.",i.textContent=`${_}. You survived ${L} km, scored ${ke.toLocaleString()} points, and recovered ${dn} coconuts.`,r&&(r.hidden=!0),s.textContent="Return to Hangar",s.hidden=!1,uc(!0),Ot(`Flight terminated by ${_}.`)},Fi?120:650)}function na(){ve==="playing"&&(it=ve,ve="paused",Nn(),E.hidden=!1,E.inert=!1,E.setAttribute("aria-hidden","false"),R.disabled=!0,J&&(J.disabled=!0),zi.delete("TouchLift"),ct.setPaused?.(!0),b.focus())}function Sc(){ve==="paused"&&(ve=it,Nn(),E.setAttribute("aria-hidden","true"),E.hidden=!0,E.inert=!0,R.disabled=!1,J&&(J.disabled=!1),ct.setPaused?.(!1),un=performance.now(),n.focus({preventScroll:!0}))}function ld(){let _=ct.isMuted?.()||!1;F.setAttribute("aria-pressed",String(_)),F.setAttribute("aria-label",_?"Unmute sound":"Mute sound"),F.title=_?"Unmute sound":"Mute sound",F.querySelector("span").textContent=_?"\u{1F507}":"\u{1F50A}"}function Gm(_){_.target.closest("button")||_.pointerType!=="touch"&&(Dn={x:_.clientX,y:_.clientY,time:performance.now()},ve==="playing"&&dc())}function Vm(_){if(!Dn||ve!=="playing"){Dn=null;return}let L=_.clientX-Dn.x,I=_.clientY-Dn.y;Math.abs(L)>42&&Math.abs(L)>Math.abs(I)*1.2&&pc(L>0?1:-1),Dn=null}function cd(_){if(ve!=="playing"||_.pointerId!==Cr)return;let L=B.getBoundingClientRect(),I=yt((_.clientX-L.left)/Math.max(1,L.width),0,1);de.lane=yt(Math.round(I*(si.length-1)),0,si.length-1)}function Wm(_){ve==="playing"&&(_.preventDefault(),Cr=_.pointerId,B.setPointerCapture?.(_.pointerId),cd(_))}function hd(_){_.pointerId===Cr&&(Cr=null)}function jm(_){ve==="playing"&&(_.preventDefault(),J.setPointerCapture?.(_.pointerId),zi.add("TouchLift"),dc())}function ud(_){_.preventDefault(),zi.delete("TouchLift")}s.addEventListener("click",()=>{e.dataset.mode==="result"||ht==="complete"?no():gm()}),a?.addEventListener("click",td),g?.addEventListener("click",_=>{let L=_.target.closest("[data-response]");L&&_m(L.dataset.response)}),Zi?.addEventListener("click",id),rs?.addEventListener("click",()=>w?.skip()),wr?.addEventListener("click",Cm),qe?.addEventListener("click",()=>{let _=wi(Ht,gi[Ht]);if(!_)return;let L=Gf(we,Ht,_.id);Te.textContent=L.ok?L.item.name+(L.action==="purchased"?" purchased and equipped.":" equipped."):L.reason,Jl?.(Ne,we.equipped),io(Ht),Ku()}),lt?.addEventListener("click",_=>{let L=_.target.closest("[data-category]");L&&io(L.dataset.category)}),U.addEventListener("click",na),b.addEventListener("click",Sc),C.addEventListener("click",()=>{Sc(),id()}),F.addEventListener("click",()=>{ct.setMuted?.(!ct.isMuted?.()),V.muted=!!ct.isMuted?.(),ld()}),R.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),gc()}),Y?.addEventListener("click",mc),$?.addEventListener("click",mc),B?.addEventListener("pointerdown",Wm),B?.addEventListener("pointermove",cd),B?.addEventListener("pointerup",hd),B?.addEventListener("pointercancel",hd),J?.addEventListener("pointerdown",jm),J?.addEventListener("pointerup",ud),J?.addEventListener("pointercancel",ud),n.addEventListener("pointerdown",Gm),n.addEventListener("pointerup",Vm),n.addEventListener("pointercancel",()=>{Dn=null}),n.addEventListener("webglcontextlost",_=>{_.preventDefault(),ve==="playing"&&na(),Ot("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",hc),window.addEventListener("blur",()=>{ve==="playing"&&na(),Mi?.setPaused(!0),w?.setPaused(!0),V.pause()}),window.addEventListener("focus",()=>{Mi?.setPaused(!1),w?.setPaused(!1),["cinematic","dialogue","victory"].includes(ve)&&V.src&&!V.ended&&V.play().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.hidden&&ve==="playing"&&na(),Mi?.setPaused(document.hidden),w?.setPaused(document.hidden),document.hidden?V.pause():["cinematic","dialogue","victory"].includes(ve)&&V.src&&!V.ended&&V.play().catch(()=>{})}),window.addEventListener("keydown",_=>{if((["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(_.code)||ve==="playing"&&_.code==="Enter")&&_.preventDefault(),!(_.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(_.code))){if(zi.add(_.code),ve==="victory"&&_.code==="Escape"){_.preventDefault(),w?.skip();return}if(["cinematic","dialogue"].includes(ve)&&_.code==="Escape"){_.preventDefault(),td();return}if(ve==="dialogue"&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(_.code)){_.preventDefault();let L=[...g.querySelectorAll("button")],I=Math.max(0,L.indexOf(document.activeElement));L[_.code==="ArrowLeft"||_.code==="KeyA"?Math.max(0,I-1):Math.min(L.length-1,I+1)]?.focus();return}ve==="playing"?((_.code==="Space"||_.code==="KeyW"||_.code==="ArrowUp")&&dc(),(_.code==="KeyA"||_.code==="ArrowLeft")&&pc(-1),(_.code==="KeyD"||_.code==="ArrowRight")&&pc(1),(_.code==="Enter"||_.code==="KeyX"||_.code==="KeyF"||_.code==="ShiftLeft")&&gc(),(_.code==="KeyR"||_.code==="KeyG"||_.code==="KeyB")&&mc(),(_.code==="Escape"||_.code==="KeyP")&&na()):ve==="paused"&&(_.code==="Escape"||_.code==="KeyP")&&Sc()}}),window.addEventListener("keyup",_=>zi.delete(_.code));function dd(_){let L=Math.min(.1,(_-un)/1e3);for(un=_,Ln=L>.026?Ln+1:Math.max(0,Ln-2),Ln>90&&mi>.72&&(mi=Math.max(.72,mi-.12),Ln=0,Qf(Pe,mi<.84?"low":"medium",{reducedMotion:Fi}),hc()),Si+=L;Si>=Qn;)Hm(Qn),Si-=Qn;Oi&&K&&le&&!["paused","victory","victory-result"].includes(ve)&&!document.hidden&&Oi.render(K,le),requestAnimationFrame(dd)}n.tabIndex=0,s.disabled=!0,s.textContent="Loading 3D Flight",ld(),fm(),requestAnimationFrame(dd)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
