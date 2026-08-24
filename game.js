(()=>{var jd=n=>{throw TypeError(n)};var Ag=(n,e,t)=>e.has(n)||jd("Cannot "+t);var Xd=(n,e,t)=>e.has(n)?jd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Ve=(n,e,t)=>(Ag(n,e,"access private method"),t);var Tp=0,kh=1,Ap=2;var oo=1,Cp=2,Qs=3,ea=0,Ni=1,wi=2,Pn=0,ss=1,en=2,Hh=3,Gh=4,Rp=5;var ta=100,Ip=101,Pp=102,Lp=103,Dp=104,Np=200,Up=201,Fp=202,Op=203,Bp=204,zp=205,kp=206,Hp=207,Gp=208,Vp=209,Wp=210,jp=211,Xp=212,qp=213,Yp=214,Vh=0,Wh=1,jh=2,ec=3,Xh=4,qh=5,Yh=6,Zh=7,Zp=0,Jp=1,Kp=2,un=0,Jh=1,Kh=2,$h=3,nr=4,Qh=5,eu=6,tu=7;var iu=300,ia=301,as=302,tc=303,ic=304,lo=306,Jr=1e3,Er=1001,pl=1002,Ki=1003,$p=1004;var co=1005;var ci=1006,nc=1007;var dn=1008;var ji=1009,nu=1010,ru=1011,na=1012,rc=1013,rr=1014,tn=1015,Ln=1016,sc=1017,ac=1018,ra=1020,su=35902,au=35899,Qp=1021,em=1022,pn=1023,Ir=1026,os=1027,oc=1028,lc=1029,sa=1030,ou=1031;var lu=1033,cc=33776,hc=33777,uc=33778,dc=33779,cu=35840,hu=35841,uu=35842,du=35843,pu=36196,mu=37492,fu=37496,gu=37488,vu=37489,yu=37490,xu=37491,_u=37808,Mu=37809,Su=37810,bu=37811,Eu=37812,wu=37813,Tu=37814,Au=37815,Cu=37816,Ru=37817,Iu=37818,Pu=37819,Lu=37820,Du=37821,Nu=36492,Uu=36494,Fu=36495,Ou=36283,Bu=36284,zu=36285,ku=36286;var ka=2300,ml=2301,ul=2302,Ah=2303,Ch=2400,Rh=2401,Ih=2402;var tm=0,im=1,ls="",wt="srgb",Kr="srgb-linear",Ha="linear",St="srgb";var Zr=7680;var nm=512,rm=513,sm=514,pc=515,am=516,om=517,mc=518,lm=519,Ph=35044,aa=35048;var Hu="300 es",Jn=2e3,Bs=2001;function Cg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cm(){let n=zs("canvas");return n.style.display="block",n}var qd={},ks=null;function Gu(...n){let e="THREE."+n.shift();ks?ks("log",e,...n):console.log(e,...n)}function hm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){let e="THREE."+(n=hm(n)).shift();if(ks)ks("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){let e="THREE."+(n=hm(n)).shift();if(ks)ks("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ga(...n){let e=n.join(" ");e in qd||(qd[e]=!0,Fe(...n))}function um(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var dm={[Vh]:1,[jh]:6,[Xh]:7,[ec]:5,[Wh]:0,[Yh]:2,[Zh]:4,[qh]:3},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=1234567,Fs=Math.PI/180,Hs=180/Math.PI;function cs(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Mi[255&n]+Mi[n>>8&255]+Mi[n>>16&255]+Mi[n>>24&255]+"-"+Mi[255&e]+Mi[e>>8&255]+"-"+Mi[e>>16&15|64]+Mi[e>>24&255]+"-"+Mi[63&t|128]+Mi[t>>8&255]+"-"+Mi[t>>16&255]+Mi[t>>24&255]+Mi[255&i]+Mi[i>>8&255]+Mi[i>>16&255]+Mi[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function Lh(n,e){return(n%e+e)%e}function Oa(n,e,t){return(1-t)*n+t*e}function Us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var Vu={DEG2RAD:Fs,RAD2DEG:Hs,generateUUID:cs,clamp:ht,euclideanModulo:Lh,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Oa,damp:function(n,e,t,i){return Oa(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Lh(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(Yd=n);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Fs},radToDeg:function(n){return n*Hs},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*p,o*h,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Pi,denormalize:Us},pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ei=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(u!==m||l!==d||c!==p||h!==f){let x=l*d+c*p+h*f+u*m;x<0&&(d=-d,p=-p,f=-f,m=-m,x=-x);let v=1-o;if(x<.9995){let y=Math.acos(x),S=Math.sin(y);v=Math.sin(v*y)/S,l=l*v+d*(o=Math.sin(o*y)/S),c=c*v+p*o,h=h*v+f*o,u=u*v+m*o}else{l=l*v+d*o,c=c*v+p*o,h=h*v+f*o,u=u*v+m*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qc=new C,Zd=new Ei,nt=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=r[0],x=r[3],v=r[6],y=r[1],S=r[4],E=r[7],b=r[2],R=r[5],U=r[8];return s[0]=a*m+o*y+l*b,s[3]=a*x+o*S+l*R,s[6]=a*v+o*E+l*U,s[1]=c*m+h*y+u*b,s[4]=c*x+h*S+u*R,s[7]=c*v+h*E+u*U,s[2]=d*m+p*y+f*b,s[5]=d*x+p*S+f*R,s[8]=d*v+p*E+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(r*c-h*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(h*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eh=new nt,Jd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rg(){let n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===St&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ha:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:Ha,toXYZ:Jd,fromXYZ:Kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Jd,fromXYZ:Kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),n}var mt=Rg();function Zn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Os(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Ss,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=zs("canvas")),Ss.width=e.width,Ss.height=e.height;let r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Zn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Zn(t[i]/255)):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ig=0,Gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(th(r[a].image)):s.push(th(r[a]))}else s=th(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Pg=0,ih=new C,bi=class n extends Kn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=cs(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Fe(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bi.DEFAULT_IMAGE=null,bi.DEFAULT_MAPPING=iu,bi.DEFAULT_ANISOTROPY=1;var Ut=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],x=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+x)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,E=(p+1)/2,b=(v+1)/2,R=(h+d)/4,U=(u+m)/4,F=(f+x)/4;return S>E&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=U/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=F/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=U/s,r=F/s),this.set(i,r,s,t),this}let y=Math.sqrt((x-f)*(x-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-f)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gl=class extends Kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new bi(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends gl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Va=class extends bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,x)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,f,m,x){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=f,v[11]=m,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),a=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lg,e,Dg)}lookAt(e,t,i){let r=this.elements;return Oi.subVectors(e,t),Oi.lengthSq()===0&&(Oi.z=1),Oi.normalize(),gr.crossVectors(i,Oi),gr.lengthSq()===0&&(Math.abs(i.z)===1?Oi.x+=1e-4:Oi.z+=1e-4,Oi.normalize(),gr.crossVectors(i,Oi)),gr.normalize(),No.crossVectors(Oi,gr),r[0]=gr.x,r[4]=No.x,r[8]=Oi.x,r[1]=gr.y,r[5]=No.y,r[9]=Oi.y,r[2]=gr.z,r[6]=No.z,r[10]=Oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],x=i[10],v=i[14],y=i[3],S=i[7],E=i[11],b=i[15],R=r[0],U=r[4],F=r[8],P=r[12],k=r[1],W=r[5],H=r[9],j=r[13],G=r[2],X=r[6],Z=r[10],J=r[14],te=r[3],xe=r[7],Se=r[11],Re=r[15];return s[0]=a*R+o*k+l*G+c*te,s[4]=a*U+o*W+l*X+c*xe,s[8]=a*F+o*H+l*Z+c*Se,s[12]=a*P+o*j+l*J+c*Re,s[1]=h*R+u*k+d*G+p*te,s[5]=h*U+u*W+d*X+p*xe,s[9]=h*F+u*H+d*Z+p*Se,s[13]=h*P+u*j+d*J+p*Re,s[2]=f*R+m*k+x*G+v*te,s[6]=f*U+m*W+x*X+v*xe,s[10]=f*F+m*H+x*Z+v*Se,s[14]=f*P+m*j+x*J+v*Re,s[3]=y*R+S*k+E*G+b*te,s[7]=y*U+S*W+E*X+b*xe,s[11]=y*F+S*H+E*Z+b*Se,s[15]=y*P+S*j+E*J+b*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],m=e[7],x=e[11],v=e[15],y=l*p-c*d,S=o*p-c*u,E=o*d-l*u,b=a*p-c*h,R=a*d-l*h,U=a*u-o*h;return t*(m*y-x*S+v*E)-i*(f*y-x*b+v*R)+r*(f*S-m*b+v*U)-s*(f*E-m*R+x*U)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],x=e[14],v=e[15],y=t*o-i*a,S=t*l-r*a,E=t*c-s*a,b=i*l-r*o,R=i*c-s*o,U=r*c-s*l,F=h*m-u*f,P=h*x-d*f,k=h*v-p*f,W=u*x-d*m,H=u*v-p*m,j=d*v-p*x,G=y*j-S*H+E*W+b*k-R*P+U*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/G;return e[0]=(o*j-l*H+c*W)*X,e[1]=(r*H-i*j-s*W)*X,e[2]=(m*U-x*R+v*b)*X,e[3]=(d*R-u*U-p*b)*X,e[4]=(l*k-a*j-c*P)*X,e[5]=(t*j-r*k+s*P)*X,e[6]=(x*E-f*U-v*S)*X,e[7]=(h*U-d*E+p*S)*X,e[8]=(a*H-o*k+c*F)*X,e[9]=(i*k-t*H-s*F)*X,e[10]=(f*R-m*E+v*y)*X,e[11]=(u*E-h*R-p*y)*X,e[12]=(o*P-a*W-l*F)*X,e[13]=(t*W-i*P+r*F)*X,e[14]=(m*S-f*b-x*y)*X,e[15]=(h*b-u*S+d*y)*X,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,x=a*u,v=o*u,y=l*c,S=l*h,E=l*u,b=i.x,R=i.y,U=i.z;return r[0]=(1-(m+v))*b,r[1]=(p+E)*b,r[2]=(f-S)*b,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(d+v))*R,r[6]=(x+y)*R,r[7]=0,r[8]=(f+S)*U,r[9]=(x-y)*U,r[10]=(1-(d+m))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=bs.set(r[0],r[1],r[2]).length(),o=bs.set(r[4],r[5],r[6]).length(),l=bs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),on.copy(this);let c=1/a,h=1/o,u=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),f,m;if(l)f=s/(a-s),m=a*s/(a-s);else if(o===Jn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Bs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),f,m;if(l)f=1/(a-s),m=a/(a-s);else if(o===Jn)f=-2/(a-s),m=-(a+s)/(a-s);else{if(o!==Bs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),m=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},bs=new C,on=new $e,Lg=new C(0,0,0),Dg=new C(1,1,1),gr=new C,No=new C,Oi=new C,$d=new $e,Qd=new Ei,hn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ng=0,ep=new C,Es=new Ei,Vn=new $e,Uo=new C,Ra=new C,Ug=new C,Fg=new Ei,tp=new C(1,0,0),ip=new C(0,1,0),np=new C(0,0,1),rp={type:"added"},Og={type:"removed"},ws={type:"childadded",child:null},nh={type:"childremoved",child:null},ti=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new hn,i=new Ei,r=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new nt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(np,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ra,Uo,this.up):Vn.lookAt(Uo,Ra,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Vn),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),ws.child=e,this.dispatchEvent(ws),ws.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Og),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};ti.DEFAULT_UP=new C(0,1,0),ti.DEFAULT_MATRIX_AUTO_UPDATE=!0,ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let x=t.getJointPose(m,i),v=this._getHandJoint(c,m);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=Lh(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=rh(a,s,e+1/3),this.g=rh(a,s,e),this.b=rh(a,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=wt){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return mt.workingToColorSpace(Si.copy(this),e),65536*Math.round(ht(255*Si.r,0,255))+256*Math.round(ht(255*Si.g,0,255))+Math.round(ht(255*Si.b,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Si.copy(this),t);let i=Si.r,r=Si.g,s=Si.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Si.copy(this),t),e.r=Si.r,e.g=Si.g,e.b=Si.b,e}getStyle(e=wt){mt.workingToColorSpace(Si.copy(this),e);let t=Si.r,i=Si.g,r=Si.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(Fo);let i=Oa(vr.h,Fo.h,t),r=Oa(vr.s,Fo.s,t),s=Oa(vr.l,Fo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Si=new Ae;Ae.NAMES=pm;var $n=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qn=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ln=new C,Wn=new C,sh=new C,jn=new C,Ts=new C,As=new C,sp=new C,ah=new C,oh=new C,lh=new C,ch=new Ut,hh=new Ut,uh=new Ut,Yn=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Wn.subVectors(i,t),sh.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(Wn),l=ln.dot(sh),c=Wn.dot(Wn),h=Wn.dot(sh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)!==null&&jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ch.setScalar(0),hh.setScalar(0),uh.setScalar(0),ch.fromBufferAttribute(e,t),hh.fromBufferAttribute(e,i),uh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ch,s.x),a.addScaledVector(hh,s.y),a.addScaledVector(uh,s.z),a}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Wn.subVectors(e,t),ln.cross(Wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),.5*ln.cross(Wn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Ts.subVectors(r,i),As.subVectors(s,i),ah.subVectors(e,i);let l=Ts.dot(ah),c=As.dot(ah);if(l<=0&&c<=0)return t.copy(i);oh.subVectors(e,r);let h=Ts.dot(oh),u=As.dot(oh);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ts,a);lh.subVectors(e,s);let p=Ts.dot(lh),f=As.dot(lh);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(As,o);let x=h*f-p*u;if(x<=0&&u-h>=0&&p-f>=0)return sp.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(sp,o);let v=1/(x+m+d);return a=m*v,o=d*v,t.copy(i).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$i=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Bo.subVectors(this.max,Ia),Cs.subVectors(e.a,Ia),Rs.subVectors(e.b,Ia),Is.subVectors(e.c,Ia),yr.subVectors(Rs,Cs),xr.subVectors(Is,Rs),jr.subVectors(Cs,Is);let t=[0,-yr.z,yr.y,0,-xr.z,xr.y,0,-jr.z,jr.y,yr.z,0,-yr.x,xr.z,0,-xr.x,jr.z,0,-jr.x,-yr.y,yr.x,0,-xr.y,xr.x,0,-jr.y,jr.x,0];return!!dh(t,Cs,Rs,Is,Bo)&&(t=[1,0,0,0,1,0,0,0,1],!!dh(t,Cs,Rs,Is,Bo)&&(zo.crossVectors(yr,xr),t=[zo.x,zo.y,zo.z],dh(t,Cs,Rs,Is,Bo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(cn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,Oo=new $i,Cs=new C,Rs=new C,Is=new C,yr=new C,xr=new C,jr=new C,Ia=new C,Bo=new C,zo=new C,Xr=new C;function dh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xr.fromArray(n,s);let o=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),h=i.dot(Xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qy=zg();function zg(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var ei=new C,ko=new pe,kg=0,Gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix3(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pi(t,this.array),i=Pi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pi(t,this.array),i=Pi(i,this.array),r=Pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pi(t,this.array),i=Pi(i,this.array),r=Pi(r,this.array),s=Pi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),e}};var ja=class extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xa=class extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hg=new $i,Pa=new C,ph=new C,Qi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(ph)),this.expandByPoint(Pa.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gg=0,Ji=new $e,mh=new ti,Ps=new C,Bi=new $i,La=new $i,li=new C,pt=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Xa:ja)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Bi.setFromBufferAttribute(s),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(li.addVectors(Bi.min,La.min),Bi.expandByPoint(li),li.addVectors(Bi.max,La.max),Bi.expandByPoint(li)):(Bi.expandByPoint(La.min),Bi.expandByPoint(La.max))}Bi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)li.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(li));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)li.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),li.add(Ps)),r=Math.max(r,i.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new C,l[F]=new C;let c=new C,h=new C,u=new C,d=new pe,p=new pe,f=new pe,m=new C,x=new C;function v(F,P,k){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,k),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,P),f.fromBufferAttribute(s,k),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let W=1/(p.x*f.y-f.x*p.y);isFinite(W)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(W),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(W),o[F].add(m),o[P].add(m),o[k].add(m),l[F].add(x),l[P].add(x),l[k].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,P=y.length;F<P;++F){let k=y[F],W=k.start;for(let H=W,j=W+k.count;H<j;H+=3)v(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new C,E=new C,b=new C,R=new C;function U(F){b.fromBufferAttribute(r,F),R.copy(b);let P=o[F];S.copy(P),S.sub(b.multiplyScalar(b.dot(P))).normalize(),E.crossVectors(R,P);let k=E.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,k)}for(let F=0,P=y.length;F<P;++F){let k=y[F],W=k.start;for(let H=W,j=W+k.count;H<j;H+=3)U(e.getX(H+0)),U(e.getX(H+1)),U(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,x=l.length;m<x;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let v=0;v<h;v++)d[f++]=c[p++]}return new Gt(d,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Yy=new C;var Vg=0,Cn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Fe(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Zy=new C,Jy=new C,Ky=new C,$y=new pe,Qy=new pe,ex=new $e,tx=new C,ix=new C,nx=new C,rx=new pe,sx=new pe,ax=new pe;var ox=new C,lx=new C;var qn=new C,fh=new C,Ho=new C,_r=new C,gh=new C,Go=new C,vh=new C,$r=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fh.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(fh);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ho),o=_r.dot(this.direction),l=-_r.dot(Ho),c=_r.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fh).addScaledVector(Ho,d),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){gh.subVectors(t,e),Go.subVectors(i,e),vh.crossVectors(gh,Go);let a,o=this.direction.dot(vh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}_r.subVectors(this.origin,e);let l=a*this.direction.dot(Go.crossVectors(_r,Go));if(l<0)return null;let c=a*this.direction.dot(gh.cross(_r));if(c<0||l+c>o)return null;let h=-a*_r.dot(vh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ap=new $e,qr=new $r,Vo=new Qi,op=new C,Wo=new C,jo=new C,Xo=new C,yh=new C,qo=new C,lp=new C,Yo=new C,ve=class extends ti{constructor(e=new pt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(yh.fromBufferAttribute(u,e),a?qo.addScaledVector(yh,h):qo.addScaledVector(yh.sub(t),h))}t.add(qo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),qr.copy(e.ray).recast(e.near),Vo.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Vo,op)===null||qr.origin.distanceToSquared(op)>(e.far-e.near)**2))return;ap.copy(s).invert(),qr.copy(e.ray).applyMatrix4(ap),i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,qr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let x=d[f],v=a[x.materialIndex];for(let y=Math.max(x.start,p.start),S=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));y<S;y+=3)r=Zo(this,v,e,i,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)r=Zo(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=d.length;f<m;f++){let x=d[f],v=a[x.materialIndex];for(let y=Math.max(x.start,p.start),S=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));y<S;y+=3)r=Zo(this,v,e,i,c,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)r=Zo(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Zo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Wo),n.getVertexPosition(l,jo),n.getVertexPosition(c,Xo);let h=(function(u,d,p,f,m,x,v,y){let S;if(S=d.side===1?f.intersectTriangle(v,x,m,!0,y):f.intersectTriangle(m,x,v,d.side===0,y),S===null)return null;Yo.copy(y),Yo.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(Yo);return E<p.near||E>p.far?null:{distance:E,point:Yo.clone(),object:u}})(n,e,t,i,Wo,jo,Xo,lp);if(h){let u=new C;Yn.getBarycoord(lp,Wo,jo,Xo,u),r&&(h.uv=Yn.getInterpolatedAttribute(r,o,l,c,u,new pe)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,o,l,c,u,new pe)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Yn.getNormal(Wo,jo,Xo,d.normal),h.face=d,h.barycoord=u}return h}var cx=new C,hx=new Ut,ux=new Ut,dx=new C,px=new $e,mx=new C,fx=new Qi,gx=new $e,vx=new $r;var Qr=class extends bi{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yx=new $e,xx=new $e;var qa=class extends Gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new $e,cp=new $e,Jo=[],hp=new $i,Wg=new $e,Da=new ve,Na=new Qi,es=class extends ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qa(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Wg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),hp.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Na.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(i),e.ray.intersectsSphere(Na)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ls),cp.multiplyMatrices(i,Ls),Da.matrixWorld=cp,Da.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){let l=Jo[a];l.instanceId=s,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qa(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(r*this.count),r,this.count,oc,tn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xh=new C,jg=new C,Xg=new nt,Tn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=xh.subVectors(i,t).cross(jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Xg.getNormalMatrix(e),r=this.coplanarPoint(xh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yr=new Qi,qg=new pe(.5,.5),Ko=new C,wr=class{constructor(e=new Tn,t=new Tn,i=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],m=s[9],x=s[10],v=s[11],y=s[12],S=s[13],E=s[14],b=s[15];if(r[0].setComponents(c-a,p-h,v-f,b-y).normalize(),r[1].setComponents(c+a,p+h,v+f,b+y).normalize(),r[2].setComponents(c+o,p+u,v+m,b+S).normalize(),r[3].setComponents(c-o,p-u,v-m,b-S).normalize(),i)r[4].setComponents(l,d,x,E).normalize(),r[5].setComponents(c-l,p-d,v-x,b-E).normalize();else if(r[4].setComponents(c-l,p-d,v-x,b-E).normalize(),t===Jn)r[5].setComponents(c+l,p+d,v+x,b+E).normalize();else{if(t!==Bs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,x,E).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);let t=qg.distanceTo(e.center);return Yr.radius=.7071067811865476+t,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bn=new $e,En=new wr,yl=class n{constructor(){this.coordinateSystem=Jn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(bn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),En.setFromProjectionMatrix(bn,r.coordinateSystem,r.reversedDepth),En.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(bn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),En.setFromProjectionMatrix(bn,r.coordinateSystem,r.reversedDepth),En.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(bn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),En.setFromProjectionMatrix(bn,r.coordinateSystem,r.reversedDepth),En.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(bn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),En.setFromProjectionMatrix(bn,r.coordinateSystem,r.reversedDepth),En.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(bn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),En.setFromProjectionMatrix(bn,r.coordinateSystem,r.reversedDepth),En.containsPoint(e))return!0}return!1}clone(){return new n}};var Dh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},_x=new $e,Mx=new Ae(1,1,1),Sx=new wr,bx=new yl,Ex=new $i,wx=new Qi,Tx=new C,Ax=new C,Cx=new C,Rx=new Dh,Ix=new ve;var Ws=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new C,_l=new C,up=new $e,Ua=new $r,$o=new Qi,_h=new C,dp=new C,Ya=class extends ti{constructor(e=new pt,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)xl.fromBufferAttribute(t,r-1),_l.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=xl.distanceTo(_l);e.setAttribute("lineDistance",new Oe(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),$o.radius+=s,e.ray.intersectsSphere($o)===!1)return;up.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(up);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let x=h.getX(f),v=h.getX(f+1),y=Qo(this,e,Ua,l,x,v,f);y&&t.push(y)}if(this.isLineLoop){let f=h.getX(p-1),m=h.getX(d),x=Qo(this,e,Ua,l,f,m,p-1);x&&t.push(x)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,m=p-1;f<m;f+=c){let x=Qo(this,e,Ua,l,f,f+1,f);x&&t.push(x)}if(this.isLineLoop){let f=Qo(this,e,Ua,l,p-1,d,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qo(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(xl.fromBufferAttribute(o,r),_l.fromBufferAttribute(o,s),t.distanceSqToSegment(xl,_l,_h,dp)>i)return;_h.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(_h);return l<e.near||l>e.far?void 0:{distance:l,point:dp.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Px=new C,Lx=new C;var Rn=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pp=new $e,Nh=new $r,el=new Qi,tl=new C,er=class extends ti{constructor(e=new pt,t=new Rn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;pp.copy(r).invert(),Nh.copy(e.ray).applyMatrix4(pp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);tl.fromBufferAttribute(h,p),mp(tl,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)tl.fromBufferAttribute(h,u),mp(tl,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mp(n,e,t,i,r,s,a){let o=Nh.distanceSqToPoint(n);if(o<t){let l=new C;Nh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Za=class extends bi{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},In=class extends bi{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tr=class extends bi{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Ir&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ml=class extends Tr{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ja=class extends bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ct=class n extends pt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,x,v,y,S,E,b,R,U,F,P){let k=E/U,W=b/F,H=E/2,j=b/2,G=R/2,X=U+1,Z=F+1,J=0,te=0,xe=new C;for(let Se=0;Se<Z;Se++){let Re=Se*W-j;for(let _e=0;_e<X;_e++){let re=_e*k-H;xe[m]=re*y,xe[x]=Re*S,xe[v]=G,c.push(xe.x,xe.y,xe.z),xe[m]=0,xe[x]=0,xe[v]=R>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(_e/U),u.push(1-Se/F),J+=1}}for(let Se=0;Se<F;Se++)for(let Re=0;Re<U;Re++){let _e=d+Re+X*Se,re=d+Re+X*(Se+1),de=d+(Re+1)+X*(Se+1),ge=d+(Re+1)+X*Se;l.push(_e,re,ge),l.push(re,de,ge),te+=6}o.addGroup(p,te,P),p+=te,d+=J}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Sl=class n extends pt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*i+s,m=r+1,x=new C,v=new C;for(let y=0;y<=f;y++){let S=0,E=0,b=0,R=0;if(y<=i){let P=y/i,k=P*Math.PI/2;E=-h-e*Math.cos(k),b=e*Math.sin(k),R=-e*Math.cos(k),S=P*u}else if(y<=i+s){let P=(y-i)/s;E=P*t-h,b=e,R=0,S=u+P*d}else{let P=(y-i-s)/i,k=P*Math.PI/2;E=h+e*Math.sin(k),b=e*Math.cos(k),R=e*Math.sin(k),S=u+d+P*u}let U=Math.max(0,Math.min(1,S/p)),F=0;y===0?F=.5/r:y===f&&(F=-.5/r);for(let P=0;P<=r;P++){let k=P/r,W=k*Math.PI*2,H=Math.sin(W),j=Math.cos(W);v.x=-b*j,v.y=E,v.z=b*H,o.push(v.x,v.y,v.z),x.set(-b*j,R,b*H),x.normalize(),l.push(x.x,x.y,x.z),c.push(k+F,U)}if(y>0){let P=(y-1)*m;for(let k=0;k<r;k++){let W=P+k,H=P+k+1,j=y*m+k,G=y*m+k+1;a.push(W,H,j),a.push(H,G,j)}}}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},bl=class n extends pt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new C,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vt=class n extends pt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],x=i/2,v=0;function y(S){let E=f,b=new pe,R=new C,U=0,F=S===!0?e:t,P=S===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,x*P,0),d.push(0,P,0),p.push(.5,.5),f++;let k=f;for(let W=0;W<=r;W++){let H=W/r*l+o,j=Math.cos(H),G=Math.sin(H);R.x=F*G,R.y=x*P,R.z=F*j,u.push(R.x,R.y,R.z),d.push(0,P,0),b.x=.5*j+.5,b.y=.5*G*P+.5,p.push(b.x,b.y),f++}for(let W=0;W<r;W++){let H=E+W,j=k+W;S===!0?h.push(j,j+1,H):h.push(j+1,j,H),U+=3}c.addGroup(v,U,S===!0?1:2),v+=U}(function(){let S=new C,E=new C,b=0,R=(t-e)/i;for(let U=0;U<=s;U++){let F=[],P=U/s,k=P*(t-e)+e;for(let W=0;W<=r;W++){let H=W/r,j=H*l+o,G=Math.sin(j),X=Math.cos(j);E.x=k*G,E.y=-P*i+x,E.z=k*X,u.push(E.x,E.y,E.z),S.set(G,R,X).normalize(),d.push(S.x,S.y,S.z),p.push(H,1-P),F.push(f++)}m.push(F)}for(let U=0;U<r;U++)for(let F=0;F<s;F++){let P=m[F][U],k=m[F+1][U],W=m[F+1][U+1],H=m[F][U+1];(e>0||F!==0)&&(h.push(P,k,H),b+=3),(t>0||F!==s-1)&&(h.push(k,W,H),b+=3)}c.addGroup(v,b,0),v+=b})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hi=class n extends Vt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ar=class n extends pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,f,m,x){let v=x+1,y=[];for(let S=0;S<=v;S++){y[S]=[];let E=p.clone().lerp(m,S/v),b=f.clone().lerp(m,S/v),R=v-S;for(let U=0;U<=R;U++)y[S][U]=U===0&&S===v?E:E.clone().lerp(b,U/R)}for(let S=0;S<v;S++)for(let E=0;E<2*(v-S)-1;E++){let b=Math.floor(E/2);E%2==0?(l(y[S][b+1]),l(y[S+1][b]),l(y[S][b])):(l(y[S][b+1]),l(y[S+1][b+1]),l(y[S+1][b]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let m=3*p;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(p,f,m,x){x<0&&p.x===1&&(a[f]=p.x-1),m.x===0&&m.z===0&&(a[f]=x/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new C,m=new C,x=new C;for(let v=0;v<t.length;v+=3)c(t[v+0],f),c(t[v+1],m),c(t[v+2],x),o(f,m,x,p)})(r),(function(p){let f=new C;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(p),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z})(i),(function(){let p=new C;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let m=u(p)/2/Math.PI+.5,x=d(p)/Math.PI+.5;a.push(m,1-x)}(function(){let f=new C,m=new C,x=new C,v=new C,y=new pe,S=new pe,E=new pe;for(let b=0,R=0;b<s.length;b+=9,R+=6){f.set(s[b+0],s[b+1],s[b+2]),m.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),y.set(a[R+0],a[R+1]),S.set(a[R+2],a[R+3]),E.set(a[R+4],a[R+5]),v.copy(f).add(m).add(x).divideScalar(3);let U=u(v);h(y,R+0,f,U),h(S,R+2,m,U),h(E,R+4,x,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],x=a[f+2],v=a[f+4],y=Math.max(m,x,v),S=Math.min(m,x,v);y>.9&&S<.1&&(m<.2&&(a[f+0]+=1),x<.2&&(a[f+2]+=1),v<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},El=class n extends Ar{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},il=new C,nl=new C,Mh=new C,rl=new Yn,wl=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Fs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:x,c:v}=rl;if(m.fromBufferAttribute(o,c[0]),x.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),rl.getNormal(Mh),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let S=(y+1)%3,E=u[y],b=u[S],R=rl[h[y]],U=rl[h[S]],F=`${E}_${b}`,P=`${b}_${E}`;P in d&&d[P]?(Mh.dot(d[P].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(U.x,U.y,U.z)),d[P]=null):F in d||(d[F]={index0:c[y],index1:c[S],normal:Mh.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:x}=d[f];il.fromBufferAttribute(o,m),nl.fromBufferAttribute(o,x),p.push(il.x,il.y,il.z),p.push(nl.x,nl.y,nl.z)}this.setAttribute("position",new Oe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new pe:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,r=[],s=[],a=[],o=new C,l=new $e;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},js=class extends Gi{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tl=class extends js{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wu(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var sl=new C,Sh=new Wu,bh=new Wu,Eh=new Wu,Cr=class extends Gi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(sl.subVectors(r[0],r[1]).add(r[0]),o=sl);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(sl.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=sl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),x<1e-4&&(x=m),Sh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,x),bh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,x),Eh.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,x)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),bh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Eh.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Sh.calc(h),bh.calc(h),Eh.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fp(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function Ba(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function za(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Ka=class extends Gi{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(za(e,r.x,s.x,a.x,o.x),za(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Al=class extends Gi{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(za(e,r.x,s.x,a.x,o.x),za(e,r.y,s.y,a.y,o.y),za(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Gi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Gi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Gi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ba(e,r.x,s.x,a.x),Ba(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends Gi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ba(e,r.x,s.x,a.x),Ba(e,r.y,s.y,a.y),Ba(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(fp(o,l.x,c.x,h.x,u.x),fp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},Rl=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:Cr,CubicBezierCurve:Ka,CubicBezierCurve3:Al,EllipseCurve:js,LineCurve:$a,LineCurve3:Cl,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:eo,SplineCurve:to}),Il=class extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Rl[r.type]().fromJSON(r))}return this}},io=class extends Il{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new $a(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Qa(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Ka(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new to(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new js(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ts=class extends io{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new io().fromJSON(r))}return this}};function Yg(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=gp(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let f=[];for(let m=0,x=u.length;m<x;m++){let v=gp(h,u[m]*p,m<x-1?u[m+1]*p:h.length,p,!1);v===v.next&&(v.steiner=!0),f.push(i0(v))}f.sort(Qg);for(let m=0;m<f.length;m++)d=e0(f[m],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],f=n[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return no(s,a,t,o,l,c,0),a}function gp(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=vp(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=vp(a/i|0,n[a],n[a+1],s);return s&&Xs(s,s.next)&&(so(s),s=s.next),s}function is(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Xs(i,i.next)&&Ht(i.prev,i,i.next)!==0)i=i.next;else{if(so(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function no(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Uh(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,m=1;do{let x,v=p;p=null;let y=null;for(f=0;v;){f++;let S=v,E=0;for(let R=0;R<m&&(E++,S=S.nextZ,S);R++);let b=m;for(;E>0||b>0&&S;)E!==0&&(b===0||!S||v.z<=S.z)?(x=v,v=v.nextZ,E--):(x=S,S=S.nextZ,b--),y?y.nextZ=x:p=x,x.prevZ=y,y=x;v=S}y.nextZ=null,m*=2}while(f>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Jg(n,i,r,s):Zg(n))e.push(l.i,n.i,c.i),so(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?no(n=Kg(is(n),e),e,t,i,r,s,2):a===2&&$g(n,e,t,i,r,s):no(is(n),e,t,i,r,s,1);break}}}function Zg(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Fa(r,o,s,l,a,c,f.x,f.y)&&Ht(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Jg(n,e,t,i){let r=n.prev,s=n,a=n.next;if(Ht(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),m=Math.max(o,l,c),x=Math.max(h,u,d),v=Uh(p,f,e,t,i),y=Uh(m,x,e,t,i),S=n.prevZ,E=n.nextZ;for(;S&&S.z>=v&&E&&E.z<=y;){if(S.x>=p&&S.x<=m&&S.y>=f&&S.y<=x&&S!==r&&S!==a&&Fa(o,h,l,u,c,d,S.x,S.y)&&Ht(S.prev,S,S.next)>=0||(S=S.prevZ,E.x>=p&&E.x<=m&&E.y>=f&&E.y<=x&&E!==r&&E!==a&&Fa(o,h,l,u,c,d,E.x,E.y)&&Ht(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=m&&S.y>=f&&S.y<=x&&S!==r&&S!==a&&Fa(o,h,l,u,c,d,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;E&&E.z<=y;){if(E.x>=p&&E.x<=m&&E.y>=f&&E.y<=x&&E!==r&&E!==a&&Fa(o,h,l,u,c,d,E.x,E.y)&&Ht(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Kg(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Xs(i,r)&&fm(i,t,t.next,r)&&ro(i,r)&&ro(r,i)&&(e.push(i.i,t.i,r.i),so(t),so(t.next),t=n=r),t=t.next}while(t!==n);return is(t)}function $g(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&n0(a,o)){let l=gm(a,o);return a=is(a,a.next),l=is(l,l.next),no(a,e,t,i,r,s,0),void no(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Qg(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function e0(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(Xs(r,a))return a;do{if(Xs(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&mm(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);ro(a,r)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&t0(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=gm(t,n);return is(i,i.next),is(t,t.next)}function t0(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function Uh(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function i0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mm(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Fa(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&mm(n,e,t,i,r,s,a,o)}function n0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&fm(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(ro(n,e)&&ro(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||Xs(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xs(n,e){return n.x===e.x&&n.y===e.y}function fm(n,e,t,i){let r=ol(Ht(n,e,t)),s=ol(Ht(n,e,i)),a=ol(Ht(t,i,n)),o=ol(Ht(t,i,e));return r!==s&&a!==o||!(r!==0||!al(n,t,e))||!(s!==0||!al(n,i,e))||!(a!==0||!al(t,n,i))||!(o!==0||!al(t,e,i))}function al(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ol(n){return n>0?1:n<0?-1:0}function ro(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function gm(n,e){let t=Fh(n.i,n.x,n.y),i=Fh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function vp(n,e,t,i){let r=Fh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function so(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Oh=class{static triangulate(e,t,i=2){return Yg(e,t,i)}},An=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];yp(e),xp(i,e);let a=e.length;t.forEach(yp);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,xp(i,t[l]);let o=Oh.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function yp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function xp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qs=class n extends pt{constructor(e=new ts([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:r0,S,E,b,R,U,F=!1;if(v){S=v.getSpacedPoints(h),F=!0,d=!1;let D=!!v.isCatmullRomCurve3&&v.closed;E=v.computeFrenetFrames(h,D),b=new C,R=new C,U=new C}d||(x=0,p=0,f=0,m=0);let P=o.extractPoints(c),k=P.shape,W=P.holes;if(!An.isClockWise(k)){k=k.reverse();for(let D=0,_=W.length;D<_;D++){let L=W[D];An.isClockWise(L)&&(W[D]=L.reverse())}}function H(D){let _=10000000000000001e-36,L=D[0];for(let O=1;O<=D.length;O++){let z=O%D.length,K=D[z],$=K.x-L.x,q=K.y-L.y,le=$*$+q*q,oe=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(L.x),Math.abs(L.y));le<=_*oe*oe?(D.splice(z,1),O--):L=K}}H(k),W.forEach(H);let j=W.length,G=k;for(let D=0;D<j;D++){let _=W[D];k=k.concat(_)}function X(D,_,L){return _||ze("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(_,L)}let Z=k.length;function J(D,_,L){let O,z,K,$=D.x-_.x,q=D.y-_.y,le=L.x-D.x,oe=L.y-D.y,ce=$*$+q*q,ne=$*oe-q*le;if(Math.abs(ne)>Number.EPSILON){let fe=Math.sqrt(ce),Ue=Math.sqrt(le*le+oe*oe),Qe=_.x-q/fe,lt=_.y+$/fe,et=((L.x-oe/Ue-Qe)*oe-(L.y+le/Ue-lt)*le)/($*oe-q*le);O=Qe+$*et-D.x,z=lt+q*et-D.y;let Te=O*O+z*z;if(Te<=2)return new pe(O,z);K=Math.sqrt(Te/2)}else{let fe=!1;$>Number.EPSILON?le>Number.EPSILON&&(fe=!0):$<-Number.EPSILON?le<-Number.EPSILON&&(fe=!0):Math.sign(q)===Math.sign(oe)&&(fe=!0),fe?(O=-q,z=$,K=Math.sqrt(ce)):(O=$,z=q,K=Math.sqrt(ce/2))}return new pe(O/K,z/K)}let te=[];for(let D=0,_=G.length,L=_-1,O=D+1;D<_;D++,L++,O++)L===_&&(L=0),O===_&&(O=0),te[D]=J(G[D],G[L],G[O]);let xe=[],Se,Re,_e=te.concat();for(let D=0,_=j;D<_;D++){let L=W[D];Se=[];for(let O=0,z=L.length,K=z-1,$=O+1;O<z;O++,K++,$++)K===z&&(K=0),$===z&&($=0),Se[O]=J(L[O],L[K],L[$]);xe.push(Se),_e=_e.concat(Se)}if(x===0)Re=An.triangulateShape(G,W);else{let D=[],_=[];for(let L=0;L<x;L++){let O=L/x,z=p*Math.cos(O*Math.PI/2),K=f*Math.sin(O*Math.PI/2)+m;for(let $=0,q=G.length;$<q;$++){let le=X(G[$],te[$],K);Le(le.x,le.y,-z),O===0&&D.push(le)}for(let $=0,q=j;$<q;$++){let le=W[$];Se=xe[$];let oe=[];for(let ce=0,ne=le.length;ce<ne;ce++){let fe=X(le[ce],Se[ce],K);Le(fe.x,fe.y,-z),O===0&&oe.push(fe)}O===0&&_.push(oe)}}Re=An.triangulateShape(D,_)}let re=Re.length,de=f+m;for(let D=0;D<Z;D++){let _=d?X(k[D],_e[D],de):k[D];F?(R.copy(E.normals[0]).multiplyScalar(_.x),b.copy(E.binormals[0]).multiplyScalar(_.y),U.copy(S[0]).add(R).add(b),Le(U.x,U.y,U.z)):Le(_.x,_.y,0)}for(let D=1;D<=h;D++)for(let _=0;_<Z;_++){let L=d?X(k[_],_e[_],de):k[_];F?(R.copy(E.normals[D]).multiplyScalar(L.x),b.copy(E.binormals[D]).multiplyScalar(L.y),U.copy(S[D]).add(R).add(b),Le(U.x,U.y,U.z)):Le(L.x,L.y,u/h*D)}for(let D=x-1;D>=0;D--){let _=D/x,L=p*Math.cos(_*Math.PI/2),O=f*Math.sin(_*Math.PI/2)+m;for(let z=0,K=G.length;z<K;z++){let $=X(G[z],te[z],O);Le($.x,$.y,u+L)}for(let z=0,K=W.length;z<K;z++){let $=W[z];Se=xe[z];for(let q=0,le=$.length;q<le;q++){let oe=X($[q],Se[q],O);F?Le(oe.x,oe.y+S[h-1].y,S[h-1].x+L):Le(oe.x,oe.y,u+L)}}}function ge(D,_){let L=D.length;for(;--L>=0;){let O=L,z=L-1;z<0&&(z=D.length-1);for(let K=0,$=h+2*x;K<$;K++){let q=Z*K,le=Z*(K+1);w(_+O+q,_+z+q,_+z+le,_+O+le)}}}function Le(D,_,L){l.push(D),l.push(_),l.push(L)}function Be(D,_,L){M(D),M(_),M(L);let O=r.length/3,z=y.generateTopUV(i,r,O-3,O-2,O-1);N(z[0]),N(z[1]),N(z[2])}function w(D,_,L,O){M(D),M(_),M(O),M(_),M(L),M(O);let z=r.length/3,K=y.generateSideWallUV(i,r,z-6,z-3,z-2,z-1);N(K[0]),N(K[1]),N(K[3]),N(K[1]),N(K[2]),N(K[3])}function M(D){r.push(l[3*D+0]),r.push(l[3*D+1]),r.push(l[3*D+2])}function N(D){s.push(D.x),s.push(D.y)}(function(){let D=r.length/3;if(d){let _=0,L=Z*_;for(let O=0;O<re;O++){let z=Re[O];Be(z[2]+L,z[1]+L,z[0]+L)}_=h+2*x,L=Z*_;for(let O=0;O<re;O++){let z=Re[O];Be(z[0]+L,z[1]+L,z[2]+L)}}else{for(let _=0;_<re;_++){let L=Re[_];Be(L[2],L[1],L[0])}for(let _=0;_<re;_++){let L=Re[_];Be(L[0]+Z*h,L[1]+Z*h,L[2]+Z*h)}}i.addGroup(D,r.length/3-D,0)})(),(function(){let D=r.length/3,_=0;ge(G,_),_+=G.length;for(let L=0,O=W.length;L<O;L++){let z=W[L];ge(z,_),_+=z.length}i.addGroup(D,r.length/3-D,1)})()}this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Rl[r.type]().fromJSON(r)),new n(i,e.options)}},r0={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new pe(s,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],m=e[3*s],x=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(d,1-f),new pe(m,1-v)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-f),new pe(x,1-v)]}},ns=class n extends Ar{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Pl=class n extends pt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ht(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new pe,p=new C,f=new C,m=new C,x=0,v=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,p.x=1*v,p.y=-x,p.z=0*v,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,p.x=1*v,p.y=-x,p.z=0*v,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let y=0;y<=t;y++){let S=i+y*h*r,E=Math.sin(S),b=Math.cos(S);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*E,u.y=e[R].y,u.z=e[R].x*b,a.push(u.x,u.y,u.z),d.x=y/t,d.y=R/(e.length-1),o.push(d.x,d.y);let U=l[3*R+0]*E,F=l[3*R+1],P=l[3*R+0]*b;c.push(U,F,P)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let E=S+y*e.length,b=E,R=E+e.length,U=E+e.length+1,F=E+1;s.push(b,R,F),s.push(U,F,R)}this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ll=class n extends Ar{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},hi=class n extends pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],x=[];for(let v=0;v<h;v++){let y=v*d-a;for(let S=0;S<c;S++){let E=S*u-s;f.push(E,-y,0),m.push(0,0,1),x.push(S/o),x.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<o;y++){let S=y+c*v,E=y+c*(v+1),b=y+1+c*(v+1),R=y+1+c*v;p.push(S,E,R),p.push(E,b,R)}this.setIndex(p),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Dl=class n extends pt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new C,f=new pe;for(let m=0;m<=r;m++){for(let x=0;x<=i;x++){let v=s+x/i*a;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<r;m++){let x=m*(i+1);for(let v=0;v<i;v++){let y=v+x,S=y,E=y+i+1,b=y+i+2,R=y+1;o.push(S,E,R),o.push(E,b,R)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nl=class n extends pt{constructor(e=new ts([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;An.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,v=f.length;x<v;x++){let y=f[x];An.isClockWise(y)===!0&&(f[x]=y.reverse())}let m=An.triangulateShape(p,f);for(let x=0,v=f.length;x<v;x++){let y=f[x];p=p.concat(y)}for(let x=0,v=p.length;x<v;x++){let y=p[x];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let x=0,v=m.length;x<v;x++){let y=m[x],S=y[0]+u,E=y[1]+u,b=y[2]+u;i.push(S,E,b),l+=3}}this.setIndex(i),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Jt=class n extends pt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],m=[],x=[];for(let v=0;v<=i;v++){let y=[],S=v/i,E=0;v===0&&a===0?E=.5/t:v===i&&l===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){let R=b/t;u.x=-e*Math.cos(r+R*s)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(r+R*s)*Math.sin(a+S*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),x.push(R+E,1-S),y.push(c++)}h.push(y)}for(let v=0;v<i;v++)for(let y=0;y<t;y++){let S=h[v][y+1],E=h[v][y],b=h[v+1][y],R=h[v+1][y+1];(v!==0||a>0)&&p.push(S,E,R),(v!==i-1||l<Math.PI)&&p.push(E,b,R)}this.setIndex(p),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ul=class n extends Ar{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vi=class n extends pt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new C,p=new C,f=new C;for(let m=0;m<=i;m++){let x=a+m/i*o;for(let v=0;v<=r;v++){let y=v/r*s;p.x=(e+t*Math.cos(x))*Math.cos(y),p.y=(e+t*Math.cos(x))*Math.sin(y),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(v/r),u.push(m/i)}}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){let v=(r+1)*m+x-1,y=(r+1)*(m-1)+x-1,S=(r+1)*(m-1)+x,E=(r+1)*m+x;l.push(v,y,E),l.push(y,S,E)}this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Fl=class n extends pt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,f=new C,m=new C,x=new C,v=new C;for(let S=0;S<=i;++S){let E=S/i*s*Math.PI*2;y(E,s,a,e,p),y(E+.01,s,a,e,f),x.subVectors(f,p),v.addVectors(f,p),m.crossVectors(x,v),v.crossVectors(m,x),m.normalize(),v.normalize();for(let b=0;b<=r;++b){let R=b/r*Math.PI*2,U=-t*Math.cos(R),F=t*Math.sin(R);u.x=p.x+(U*v.x+F*m.x),u.y=p.y+(U*v.y+F*m.y),u.z=p.z+(U*v.z+F*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(S/i),h.push(b/r)}}for(let S=1;S<=i;S++)for(let E=1;E<=r;E++){let b=(r+1)*(S-1)+(E-1),R=(r+1)*S+(E-1),U=(r+1)*S+E,F=(r+1)*(S-1)+E;o.push(b,R,F),o.push(R,U,F)}function y(S,E,b,R,U){let F=Math.cos(S),P=Math.sin(S),k=b/E*S,W=Math.cos(k);U.x=R*(2+W)*.5*F,U.y=R*(2+W)*P*.5,U.z=R*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ys=class n extends pt{constructor(e=new eo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new pe,h=new C,u=[],d=[],p=[],f=[];function m(x){h=e.getPointAt(x/t,h);let v=a.normals[x],y=a.binormals[x];for(let S=0;S<=r;S++){let E=S/r*Math.PI*2,b=Math.sin(E),R=-Math.cos(E);l.x=R*v.x+b*y.x,l.y=R*v.y+b*y.y,l.z=R*v.z+b*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),(function(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)c.x=x/t,c.y=v/r,p.push(c.x,c.y)})(),(function(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){let y=(r+1)*(x-1)+(v-1),S=(r+1)*x+(v-1),E=(r+1)*x+v,b=(r+1)*(x-1)+v;f.push(y,S,b),f.push(S,E,b)}})()})(),this.setIndex(f),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Rl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ol=class extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let x=o.getX(p+m),v=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,x),s.fromBufferAttribute(a,v),_p(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),_p(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function _p(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var Dx=Object.freeze({__proto__:null,BoxGeometry:Ct,CapsuleGeometry:Sl,CircleGeometry:bl,ConeGeometry:Hi,CylinderGeometry:Vt,DodecahedronGeometry:El,EdgesGeometry:wl,ExtrudeGeometry:qs,IcosahedronGeometry:ns,LatheGeometry:Pl,OctahedronGeometry:Ll,PlaneGeometry:hi,PolyhedronGeometry:Ar,RingGeometry:Dl,ShapeGeometry:Nl,SphereGeometry:Jt,TetrahedronGeometry:Ul,TorusGeometry:Vi,TorusKnotGeometry:Fl,TubeGeometry:Ys,WireframeGeometry:Ol});function hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ti(n){let e={};for(let t=0;t<n.length;t++){let i=hs(n[t]);for(let r in i)e[r]=i[r]}return e}function ju(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var vm={clone:hs,merge:Ti},Wi=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Bl=class extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ui=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zl=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ll(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var Rr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hl=class extends Rr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:s=e,o=2*t-i;break;case Ih:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=e,l=2*i-t;break;case Ih:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),m=f*f,x=m*f,v=-d*x+2*d*m-d*f,y=(1+d)*x+(-1.5-2*d)*m+(-.5+d)*f+1,S=(-1-p)*x+(1.5+p)*m+.5*f,E=p*x-p*m;for(let b=0;b!==o;++b)s[b]=v*a[h+b]+y*a[c+b]+S*a[l+b]+E*a[u+b];return s}},Gl=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Vl=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wl=class extends Rr{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let m=(i-t)/(r-t),x=1-m;for(let v=0;v!==o;++v)s[v]=a[c+v]*x+a[l+v]*m;return s}let p=2*o,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],v=a[l+m],y=f*p+2*m,S=d[y],E=d[y+1],b=e*p+2*m,R=u[b],U=u[b+1],F,P,k,W,H,j=(i-t)/(r-t);for(let G=0;G<8;G++){F=j*j,P=F*j,k=1-j,W=k*k,H=W*k;let X=H*t+3*W*j*S+3*k*F*R+P*r-i;if(Math.abs(X)<1e-10)break;let Z=3*W*(S-t)+6*k*j*(R-S)+3*F*(r-R);if(Math.abs(Z)<1e-10)break;j-=X/Z,j=Math.max(0,Math.min(1,j))}s[m]=H*x+3*W*j*E+3*k*F*U+P*v}return s}},zi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ll(t,this.TimeBufferType),this.values=ll(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ll(e.times,Array),values:ll(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ka:t=this.InterpolantFactoryMethodDiscrete;break;case ml:t=this.InterpolantFactoryMethodLinear;break;case ul:t=this.InterpolantFactoryMethodSmooth;break;case Ah:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return ul;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Cg(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ul,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zi.prototype.ValueTypeName="",zi.prototype.TimeBufferType=Float32Array,zi.prototype.ValueBufferType=Float32Array,zi.prototype.DefaultInterpolation=ml;var Sr=class extends zi{constructor(e,t,i){super(e,t,i)}};Sr.prototype.ValueTypeName="bool",Sr.prototype.ValueBufferType=Array,Sr.prototype.DefaultInterpolation=ka,Sr.prototype.InterpolantFactoryMethodLinear=void 0,Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}};jl.prototype.ValueTypeName="color";var Xl=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}};Xl.prototype.ValueTypeName="number";var ql=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ei.slerpFlat(s,0,a,c-o,a,c,l);return s}},ao=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName="quaternion",ao.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends zi{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="string",br.prototype.ValueBufferType=Array,br.prototype.DefaultInterpolation=ka,br.prototype.InterpolantFactoryMethodLinear=void 0,br.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}};Yl.prototype.ValueTypeName="vector";var dl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Mp(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Mp(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Mp(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Zl=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ym=new Zl,Zs=class{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=new WeakMap,Jl=class extends Zs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=dl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ds.get(a);u===void 0&&(u=[],Ds.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=zs("img");function l(){h(),t&&t(this);let u=Ds.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Ds.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),dl.remove(`image:${e}`);let d=Ds.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Ds.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),dl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var tr=class extends Zs{constructor(e){super(e)}load(e,t,i,r){let s=new bi,a=new Jl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Js=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ir=class extends Js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wh=new $e,Sp=new C,bp=new C,Kl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=ji,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sp),bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bp),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cl=new C,hl=new Ei,wn=new C,Ks=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,hl,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(cl,hl,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,hl,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mr=new C,Ep=new pe,wp=new pe,Zt=class extends Ks{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Hs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Fs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Hs*Math.atan(Math.tan(.5*Fs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Ep,wp),t.subVectors(wp,Ep)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Fs*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bh=class extends Kl{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},fi=class extends Js{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$s=class extends Ks{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends Kl{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Nx=new $e,Ux=new $e,Fx=new $e;var Ns=-90,$l=class extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Ns,1,e,t);r.layers=this.layers,this.add(r);let s=new Zt(Ns,1,e,t);s.layers=this.layers,this.add(s);let a=new Zt(Ns,1,e,t);a.layers=this.layers,this.add(a);let o=new Zt(Ns,1,e,t);o.layers=this.layers,this.add(o);let l=new Zt(Ns,1,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Ns,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Bs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;x=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Ql=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ox=new C,Bx=new Ei,zx=new C,kx=new C,Hx=new C;var Gx=new C,Vx=new Ei,Wx=new C,jx=new C;var Xu="\\[\\]\\.:\\/",s0=new RegExp("["+Xu+"]","g"),Th="[^"+Xu+"]",a0="[^"+Xu.replace("\\.","")+"]",o0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Th)+/(WCOD+)?/.source.replace("WCOD",a0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th)+"$"),l0=["material","materials","bones","map"],Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(e){let t=o0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);l0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Fe("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void ze("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void ze("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=class{constructor(n,e,t){let i=t||Nt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray],Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xx=new Float32Array(1);var qx=new $e;var Yx=new pe;var Zx=new C,Jx=new C,Kx=new C,$x=new C,Qx=new C,e_=new C,t_=new C;var i_=new C;var n_=new C,r_=new $e,s_=new $e;var a_=new C,o_=new Ae,l_=new Ae;var c_=new C,h_=new C,u_=new C;var d_=new C,p_=new Ks;var m_=new $i;var f_=new C;function qu(n,e,t,i){let r=(function(s){switch(s){case ji:case nu:return{byteLength:1,components:1};case na:case ru:case Ln:return{byteLength:2,components:1};case sc:case ac:return{byteLength:2,components:4};case rr:case rc:case tn:return{byteLength:4,components:1};case su:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case oc:case lc:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case pn:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Hm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function h0(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var ot={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Me={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ti([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Ti([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Ti([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Ti([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Ti([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Ti([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Ti([Me.points,Me.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Ti([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Ti([Me.common,Me.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Ti([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Ti([Me.sprite,Me.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Ti([Me.common,Me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Ti([Me.lights,Me.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Nn.physical={uniforms:Ti([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var fc={r:0,b:0,g:0},us=new hn,u0=new $e;function d0(n,e,t,i,r,s){let a=new Ae(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let v=m.backgroundBlurriness>0;x=e.get(x,v)}return x}function f(m,x){m.getRGB(fc,ju(n)),t.buffers.color.setClear(fc.r,fc.g,fc.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let x=!1,v=p(m);v===null?f(a,c):v&&v.isColor&&(f(v,1),x=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,x){let v=p(x);v&&(v.isCubeTexture||v.mapping===lo)?(l===void 0&&(l=new ve(new Ct(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:hs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),us.copy(x.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(us)),l.material.toneMapped=mt.getTransfer(v.colorSpace)!==St,h===v&&u===v.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(o===void 0&&(o=new ve(new hi(2,2),new Wi({name:"BackgroundMaterial",uniforms:hs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=v,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.toneMapped=mt.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),h===v&&u===v.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function p0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(v){return n.bindVertexArray(v)}function l(v){return n.deleteVertexArray(v)}function c(v){let y=[],S=[],E=[];for(let b=0;b<t;b++)y[b]=0,S[b]=0,E[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:S,attributeDivisors:E,object:v,attributes:{},index:null}}function h(){let v=s.newAttributes;for(let y=0,S=v.length;y<S;y++)v[y]=0}function u(v){d(v,0)}function d(v,y){let S=s.newAttributes,E=s.enabledAttributes,b=s.attributeDivisors;S[v]=1,E[v]===0&&(n.enableVertexAttribArray(v),E[v]=1),b[v]!==y&&(n.vertexAttribDivisor(v,y),b[v]=y)}function p(){let v=s.newAttributes,y=s.enabledAttributes;for(let S=0,E=y.length;S<E;S++)y[S]!==v[S]&&(n.disableVertexAttribArray(S),y[S]=0)}function f(v,y,S,E,b,R,U){U===!0?n.vertexAttribIPointer(v,y,S,b,R):n.vertexAttribPointer(v,y,S,E,b,R)}function m(){x(),a=!0,s!==r&&(s=r,o(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(v,y,S,E,b){let R=!1,U=(function(F,P,k,W){let H=W.wireframe===!0,j=i[P.id];j===void 0&&(j={},i[P.id]=j);let G=F.isInstancedMesh===!0?F.id:0,X=j[G];X===void 0&&(X={},j[G]=X);let Z=X[k.id];Z===void 0&&(Z={},X[k.id]=Z);let J=Z[H];return J===void 0&&(J=c(n.createVertexArray()),Z[H]=J),J})(v,E,S,y);s!==U&&(s=U,o(s.object)),R=(function(F,P,k,W){let H=s.attributes,j=P.attributes,G=0,X=k.getAttributes();for(let Z in X)if(X[Z].location>=0){let J=H[Z],te=j[Z];if(te===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),J===void 0||J.attribute!==te||te&&J.data!==te.data)return!0;G++}return s.attributesNum!==G||s.index!==W})(v,E,S,b),R&&(function(F,P,k,W){let H={},j=P.attributes,G=0,X=k.getAttributes();for(let Z in X)if(X[Z].location>=0){let J=j[Z];J===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));let te={};te.attribute=J,J&&J.data&&(te.data=J.data),H[Z]=te,G++}s.attributes=H,s.attributesNum=G,s.index=W})(v,E,S,b),b!==null&&e.update(b,n.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,(function(F,P,k,W){h();let H=W.attributes,j=k.getAttributes(),G=P.defaultAttributeValues;for(let X in j){let Z=j[X];if(Z.location>=0){let J=H[X];if(J===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){let te=J.normalized,xe=J.itemSize,Se=e.get(J);if(Se===void 0)continue;let Re=Se.buffer,_e=Se.type,re=Se.bytesPerElement,de=_e===n.INT||_e===n.UNSIGNED_INT||J.gpuType===rc;if(J.isInterleavedBufferAttribute){let ge=J.data,Le=ge.stride,Be=J.offset;if(ge.isInstancedInterleavedBuffer){for(let w=0;w<Z.locationSize;w++)d(Z.location+w,ge.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let w=0;w<Z.locationSize;w++)u(Z.location+w);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let w=0;w<Z.locationSize;w++)f(Z.location+w,xe/Z.locationSize,_e,te,Le*re,(Be+xe/Z.locationSize*w)*re,de)}else{if(J.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)d(Z.location+ge,J.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<Z.locationSize;ge++)u(Z.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let ge=0;ge<Z.locationSize;ge++)f(Z.location+ge,xe/Z.locationSize,_e,te,xe*re,xe/Z.locationSize*ge*re,de)}}else if(G!==void 0){let te=G[X];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Z.location,te);break;case 3:n.vertexAttrib3fv(Z.location,te);break;case 4:n.vertexAttrib4fv(Z.location,te);break;default:n.vertexAttrib1fv(Z.location,te)}}}}p()})(v,y,S,E),b!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))},reset:m,resetDefaultState:x,dispose:function(){m();for(let v in i){let y=i[v];for(let S in y){let E=y[S];for(let b in E){let R=E[b];for(let U in R)l(R[U].object),delete R[U];delete E[b]}}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let y=i[v.id];for(let S in y){let E=y[S];for(let b in E){let R=E[b];for(let U in R)l(R[U].object),delete R[U];delete E[b]}}delete i[v.id]},releaseStatesOfObject:function(v){for(let y in i){let S=i[y],E=v.isInstancedMesh===!0?v.id:0,b=S[E];if(b!==void 0){for(let R in b){let U=b[R];for(let F in U)l(U[F].object),delete U[F];delete b[R]}delete S[E],Object.keys(S).length===0&&delete i[y]}}},releaseStatesOfProgram:function(v){for(let y in i){let S=i[y];for(let E in S){let b=S[E];if(b[v.id]===void 0)continue;let R=b[v.id];for(let U in R)l(R[U].object),delete R[U];delete b[v.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function m0(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function f0(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(Fe("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===pn||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==ji&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==tn&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function g0(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Tn,o=new nt,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,p!==!0||m===null){let x=d+4*f,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,S=d;y!==f;++y,S+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let v=s?0:i,y=4*v,S=x.clippingState||null;l.value=S,S=c(p,u,y,d);for(let E=0;E!==y;++E)S[E]=t[E];x.clippingState=S,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}}}var xm=[.125,.215,.35,.446,.526,.582],ho=20,uo=new $s,_m=new Ae,Yu=null,Zu=0,Ju=0,Ku=!1,v0=new C,vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=v0}=s;Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Zu,Ju),this._renderer.xr.enabled=Ku,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Ln,format:pn,colorSpace:Kr,depthBuffer:!1},r=Mm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+xm.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=xm[d-a+4-1]:d===0&&(f=0),l.push(f);let m=1/(p-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,E=6,b=3,R=2,U=1,F=new Float32Array(b*E*S),P=new Float32Array(R*E*S),k=new Float32Array(U*E*S);for(let H=0;H<S;H++){let j=H%3*2/3-1,G=H>2?0:-1,X=[j,G,0,j+2/3,G,0,j+2/3,G+1,0,j,G,0,j+2/3,G+1,0,j,G+1,0];F.set(X,b*E*H),P.set(y,R*E*H);let Z=[H,H,H,H,H,H];k.set(Z,U*E*H)}let W=new pt;W.setAttribute("position",new Gt(F,b)),W.setAttribute("uv",new Gt(P,R)),W.setAttribute("faceIndex",new Gt(k,U)),c.push(new ve(W,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(ho),h=new C(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new ve(new pt,e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,r,s){let a=new Zt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(_m),c.toneMapping=un,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Ct,new ut({name:"PMREM.Background",side:Ni,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(_m),f=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[x],s.y,s.z)):v===1?(a.up.set(0,0,o[x]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[x],s.z)):(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[x]));let y=this._cubeSize;oa(r,v*y,x>2?y:0,y,y),c.setRenderTarget(r),f&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ia||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;oa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,uo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],f=3*p*(i>d-4?i-d+4:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,oa(s,f,m,3*p,2*p),r.setRenderTarget(s),r.render(o,uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,oa(e,f,m,3*p,2*p),r.setRenderTarget(e),r.render(o,uo)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):ho;m>ho&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let x=[],v=0;for(let E=0;E<ho;++E){let b=E/f,R=Math.exp(-b*b/2);x.push(R),E===0?v+=R:E<m&&(v+=2*R)}for(let E=0;E<x.length;E++)x[E]=x[E]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=x,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let S=this._sizeLods[r];oa(t,3*S*(r>y-4?r-y+4:0),4*(this._cubeSize-S),3*S,2*S),l.setRenderTarget(t),l.render(h,uo)}};function Mm(n,e,t){let i=new ki(n,e,t);return i.texture.mapping=lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function bm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}var xc=class extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Za(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ct(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ni,blending:Pn});s.uniforms.tEquirect.value=t;let a=new ve(r,s),o=t.minFilter;return t.minFilter===dn&&(t.minFilter=ci),new $l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function y0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===tc?o.mapping=ia:l===ic&&(o.mapping=as),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===tc||h===ic,d=h===ia||h===as;if(u||d){let p=t.get(c),f=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new vc(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let m=c.image;return u&&m&&m.height>0||d&&m&&(function(x){let v=0,y=6;for(let S=0;S<y;S++)x[S]!==void 0&&v++;return v===y})(m)?(i===null&&(i=new vc(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===tc||h===ic){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new xc(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function x0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ga("WebGLRenderer: "+i+" extension not supported."),r}}}function _0(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let x=0,v=m.length;x<v;x+=3){let y=m[x+0],S=m[x+1],E=m[x+2];c.push(y,S,S,E,E,y)}}else{let m=u.array;d=u.version;for(let x=0,v=m.length/3-1;x<v;x+=3){let y=x+0,S=x+1,E=x+2;c.push(y,S,S,E,E,y)}}let p=new(u.count>=65535?Xa:ja)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function M0(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function S0(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:ze("WebGLInfo: Unknown draw mode:",i)}}}}function b0(n,e,t){let i=new WeakMap,r=new Ut;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),f===!0&&(y=3);let S=a.attributes.position.count*y,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*E*4*h),R=new Va(b,S,E,h);R.type=tn,R.needsUpdate=!0;let U=4*y;for(let P=0;P<h;P++){let k=m[P],W=x[P],H=v[P],j=S*E*4*P;for(let G=0;G<k.count;G++){let X=G*U;d===!0&&(r.fromBufferAttribute(k,G),b[j+X+0]=r.x,b[j+X+1]=r.y,b[j+X+2]=r.z,b[j+X+3]=0),p===!0&&(r.fromBufferAttribute(W,G),b[j+X+4]=r.x,b[j+X+5]=r.y,b[j+X+6]=r.z,b[j+X+7]=0),f===!0&&(r.fromBufferAttribute(H,G),b[j+X+8]=r.x,b[j+X+9]=r.y,b[j+X+10]=r.z,b[j+X+11]=H.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new pe(S,E)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function E0(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var w0={[Jh]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[nr]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[Qh]:"CUSTOM_TONE_MAPPING"};function T0(n,e,t,i,r){let s=new ki(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new ki(e,t,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),o=new pt;o.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let l=new Bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ve(o,l),h=new $s(-1,1,1,-1,0,1),u,d=null,p=null,f=!1,m=null,x=[],v=!1;this.setSize=function(y,S){s.setSize(y,S),a.setSize(y,S);for(let E=0;E<x.length;E++){let b=x[E];b.setSize&&b.setSize(y,S)}},this.setEffects=function(y){x=y,v=x.length>0&&x[0].isRenderPass===!0;let S=s.width,E=s.height;for(let b=0;b<x.length;b++){let R=x[b];R.setSize&&R.setSize(S,E)}},this.begin=function(y,S){if(f||y.toneMapping===un&&x.length===0)return!1;if(m=S,S!==null){let E=S.width,b=S.height;s.width===E&&s.height===b||this.setSize(E,b)}return v===!1&&y.setRenderTarget(s),u=y.toneMapping,y.toneMapping=un,!0},this.hasRenderPass=function(){return v},this.end=function(y,S){y.toneMapping=u,f=!0;let E=s,b=a;for(let R=0;R<x.length;R++){let U=x[R];if(U.enabled!==!1&&(U.render(y,b,E,S),U.needsSwap!==!1)){let F=E;E=b,b=F}}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,l.defines={},mt.getTransfer(d)===St&&(l.defines.SRGB_TRANSFER="");let R=w0[p];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(c,h),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Gm=new bi,ed=new Tr(1,1),Vm=new Va,Wm=new vl,jm=new Za,Em=[],wm=[],Tm=new Float32Array(16),Am=new Float32Array(9),Cm=new Float32Array(4);function ca(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Em[r];if(s===void 0&&(s=new Float32Array(r),Em[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function si(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ai(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _c(n,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;n.uniform2fv(this.addr,e),ai(t,e)}}function R0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(si(t,e))return;n.uniform3fv(this.addr,e),ai(t,e)}}function I0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;n.uniform4fv(this.addr,e),ai(t,e)}}function P0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ai(t,e)}else{if(si(t,i))return;Cm.set(i),n.uniformMatrix2fv(this.addr,!1,Cm),ai(t,i)}}function L0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ai(t,e)}else{if(si(t,i))return;Am.set(i),n.uniformMatrix3fv(this.addr,!1,Am),ai(t,i)}}function D0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ai(t,e)}else{if(si(t,i))return;Tm.set(i),n.uniformMatrix4fv(this.addr,!1,Tm),ai(t,i)}}function N0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;n.uniform2iv(this.addr,e),ai(t,e)}}function F0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(si(t,e))return;n.uniform3iv(this.addr,e),ai(t,e)}}function O0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;n.uniform4iv(this.addr,e),ai(t,e)}}function B0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;n.uniform2uiv(this.addr,e),ai(t,e)}}function k0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(si(t,e))return;n.uniform3uiv(this.addr,e),ai(t,e)}}function H0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;n.uniform4uiv(this.addr,e),ai(t,e)}}function G0(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(ed.compareFunction=t.isReversedDepthBuffer()?mc:pc,s=ed):s=Gm,t.setTexture2D(e||s,r)}function V0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wm,r)}function W0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jm,r)}function j0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vm,r)}function X0(n,e){n.uniform1fv(this.addr,e)}function q0(n,e){let t=ca(e,this.size,2);n.uniform2fv(this.addr,t)}function Y0(n,e){let t=ca(e,this.size,3);n.uniform3fv(this.addr,t)}function Z0(n,e){let t=ca(e,this.size,4);n.uniform4fv(this.addr,t)}function J0(n,e){let t=ca(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K0(n,e){let t=ca(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $0(n,e){let t=ca(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q0(n,e){n.uniform1iv(this.addr,e)}function ev(n,e){n.uniform2iv(this.addr,e)}function tv(n,e){n.uniform3iv(this.addr,e)}function iv(n,e){n.uniform4iv(this.addr,e)}function nv(n,e){n.uniform1uiv(this.addr,e)}function rv(n,e){n.uniform2uiv(this.addr,e)}function sv(n,e){n.uniform3uiv(this.addr,e)}function av(n,e){n.uniform4uiv(this.addr,e)}function ov(n,e,t){let i=this.cache,r=e.length,s=_c(t,r),a;si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?ed:Gm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function lv(n,e,t){let i=this.cache,r=e.length,s=_c(t,r);si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wm,s[a])}function cv(n,e,t){let i=this.cache,r=e.length,s=_c(t,r);si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||jm,s[a])}function hv(n,e,t){let i=this.cache,r=e.length,s=_c(t,r);si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vm,s[a])}var td=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return A0;case 35664:return C0;case 35665:return R0;case 35666:return I0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return j0}})(t.type)}},id=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return J0;case 35675:return K0;case 35676:return $0;case 5124:case 35670:return Q0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return iv;case 5125:return nv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}})(t.type)}},nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},$u=/(\w+)(\])?(\[|\.)?/g;function Rm(n,e){n.seq.push(e),n.map[e.id]=e}function uv(n,e,t){let i=n.name,r=i.length;for($u.lastIndex=0;;){let s=$u.exec(i),a=$u.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Rm(t,c===void 0?new td(o,n,e):new id(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new nd(o),Rm(t,h)),t=h}}}var la=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);uv(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Im(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var dv=0,Pm=new nt;function Lm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function pv(n,e){let t=(function(i){mt._getMatrix(Pm,mt.workingColorSpace,i);let r=`mat3( ${Pm.elements.map(s=>s.toFixed(4))} )`;switch(mt.getTransfer(i)){case Ha:return[r,"LinearTransferOETF"];case St:return[r,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var mv={[Jh]:"Linear",[Kh]:"Reinhard",[$h]:"Cineon",[nr]:"ACESFilmic",[eu]:"AgX",[tu]:"Neutral",[Qh]:"Custom"};function fv(n,e){let t=mv[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new C;function gv(){return mt.getLuminanceCoefficients(gc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${gc.x.toFixed(4)}, ${gc.y.toFixed(4)}, ${gc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function po(n){return n!==""}function Dm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(n){return n.replace(vv,xv)}var yv=new Map;function xv(n,e){let t=ot[e];if(t===void 0){let i=yv.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=ot[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return rd(t)}var _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(n){return n.replace(_v,Mv)}function Mv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Sv={[oo]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"},bv={[ia]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE_UV"},Ev={[as]:"ENVMAP_MODE_REFRACTION"},wv={[Zp]:"ENVMAP_BLENDING_MULTIPLY",[Jp]:"ENVMAP_BLENDING_MIX",[Kp]:"ENVMAP_BLENDING_ADD"};function Tv(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(W){return Sv[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(W){return W.envMap===!1?"ENVMAP_TYPE_CUBE":bv[W.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(W){return W.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[W.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(W){return W.envMap===!1?"ENVMAP_BLENDING_NONE":wv[W.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(W){let H=W.envMapCubeUVHeight;if(H===null)return null;let j=Math.log2(H)-2,G=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:G,maxMip:j}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)})(t),f=(function(W){let H=[];for(let j in W){let G=W[j];G!==!1&&H.push("#define "+j+" "+G)}return H.join(`
`)})(s),m=r.createProgram(),x,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(po).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(po).join(`
`),v.length>0&&(v+=`
`)):(x=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),v=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?ot.tonemapping_pars_fragment:"",t.toneMapping!==un?fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,pv("linearToOutputTexel",t.outputColorSpace),gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),a=rd(a),a=Dm(a,t),a=Nm(a,t),o=rd(o),o=Dm(o,t),o=Nm(o,t),a=Um(a),o=Um(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=y+x+a,E=y+v+o,b=Im(r,r.VERTEX_SHADER,S),R=Im(r,r.FRAGMENT_SHADER,E);function U(W){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(m)||"",j=r.getShaderInfoLog(b)||"",G=r.getShaderInfoLog(R)||"",X=H.trim(),Z=j.trim(),J=G.trim(),te=!0,xe=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,b,R);else{let Se=Lm(r,b,"vertex"),Re=Lm(r,R,"fragment");ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+X+`
`+Se+`
`+Re)}else X!==""?Fe("WebGLProgram: Program Info Log:",X):Z!==""&&J!==""||(xe=!1);xe&&(W.diagnostics={runnable:te,programLog:X,vertexShader:{log:Z,prefix:x},fragmentShader:{log:J,prefix:v}})}r.deleteShader(b),r.deleteShader(R),F=new la(r,m),P=(function(H,j){let G={},X=H.getProgramParameter(j,H.ACTIVE_ATTRIBUTES);for(let Z=0;Z<X;Z++){let J=H.getActiveAttrib(j,Z),te=J.name,xe=1;J.type===H.FLOAT_MAT2&&(xe=2),J.type===H.FLOAT_MAT3&&(xe=3),J.type===H.FLOAT_MAT4&&(xe=4),G[te]={type:J.type,location:H.getAttribLocation(j,te),locationSize:xe}}return G})(r,m)}let F,P;r.attachShader(m,b),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&U(this),F},this.getAttributes=function(){return P===void 0&&U(this),P};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,37297)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}var Av=0,sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ad(e),t.set(e,i)),i}},ad=class{constructor(e){this.id=Av++,this.code=e,this.usedTimes=0}};function Cv(n,e,t,i,r,s){let a=new Wa,o=new sd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,x,v,y,S){let E=y.fog,b=S.geometry,R=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?y.environment:null,U=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=e.get(m.envMap||R,U),P=F&&F.mapping===lo?F.image.height:null,k=p[m.type];m.precision!==null&&(d=i.getMaxPrecision(m.precision),d!==m.precision&&Fe("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let W=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,H=W!==void 0?W.length:0,j,G,X,Z,J=0;if(b.morphAttributes.position!==void 0&&(J=1),b.morphAttributes.normal!==void 0&&(J=2),b.morphAttributes.color!==void 0&&(J=3),k){let Pt=Nn[k];j=Pt.vertexShader,G=Pt.fragmentShader}else j=m.vertexShader,G=m.fragmentShader,o.update(m),X=o.getVertexShaderID(m),Z=o.getFragmentShaderID(m);let te=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Se=S.isInstancedMesh===!0,Re=S.isBatchedMesh===!0,_e=!!m.map,re=!!m.matcap,de=!!F,ge=!!m.aoMap,Le=!!m.lightMap,Be=!!m.bumpMap,w=!!m.normalMap,M=!!m.displacementMap,N=!!m.emissiveMap,D=!!m.metalnessMap,_=!!m.roughnessMap,L=m.anisotropy>0,O=m.clearcoat>0,z=m.dispersion>0,K=m.iridescence>0,$=m.sheen>0,q=m.transmission>0,le=L&&!!m.anisotropyMap,oe=O&&!!m.clearcoatMap,ce=O&&!!m.clearcoatNormalMap,ne=O&&!!m.clearcoatRoughnessMap,fe=K&&!!m.iridescenceMap,Ue=K&&!!m.iridescenceThicknessMap,Qe=$&&!!m.sheenColorMap,lt=$&&!!m.sheenRoughnessMap,et=!!m.specularMap,Te=!!m.specularColorMap,je=!!m.specularIntensityMap,gt=q&&!!m.transmissionMap,qt=q&&!!m.thicknessMap,be=!!m.gradientMap,He=!!m.alphaMap,qe=m.alphaTest>0,On=!!m.alphaHash,fn=!!m.extensions,oi=un;m.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(oi=n.toneMapping));let bt={shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:j,fragmentShader:G,defines:m.defines,customVertexShaderID:X,customFragmentShaderID:Z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:Re,batchingColor:Re&&S._colorsTexture!==null,instancing:Se,instancingColor:Se&&S.instanceColor!==null,instancingMorph:Se&&S.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Kr,alphaToCoverage:!!m.alphaToCoverage,map:_e,matcap:re,envMap:de,envMapMode:de&&F.mapping,envMapCubeUVHeight:P,aoMap:ge,lightMap:Le,bumpMap:Be,normalMap:w,displacementMap:M,emissiveMap:N,normalMapObjectSpace:w&&m.normalMapType===im,normalMapTangentSpace:w&&m.normalMapType===tm,metalnessMap:D,roughnessMap:_,anisotropy:L,anisotropyMap:le,clearcoat:O,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:ne,dispersion:z,iridescence:K,iridescenceMap:fe,iridescenceThicknessMap:Ue,sheen:$,sheenColorMap:Qe,sheenRoughnessMap:lt,specularMap:et,specularColorMap:Te,specularIntensityMap:je,transmission:q,transmissionMap:gt,thicknessMap:qt,gradientMap:be,opaque:m.transparent===!1&&m.blending===ss&&m.alphaToCoverage===!1,alphaMap:He,alphaTest:qe,alphaHash:On,combine:m.combine,mapUv:_e&&f(m.map.channel),aoMapUv:ge&&f(m.aoMap.channel),lightMapUv:Le&&f(m.lightMap.channel),bumpMapUv:Be&&f(m.bumpMap.channel),normalMapUv:w&&f(m.normalMap.channel),displacementMapUv:M&&f(m.displacementMap.channel),emissiveMapUv:N&&f(m.emissiveMap.channel),metalnessMapUv:D&&f(m.metalnessMap.channel),roughnessMapUv:_&&f(m.roughnessMap.channel),anisotropyMapUv:le&&f(m.anisotropyMap.channel),clearcoatMapUv:oe&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:ce&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:lt&&f(m.sheenRoughnessMap.channel),specularMapUv:et&&f(m.specularMap.channel),specularColorMapUv:Te&&f(m.specularColorMap.channel),specularIntensityMapUv:je&&f(m.specularIntensityMap.channel),transmissionMapUv:gt&&f(m.transmissionMap.channel),thicknessMapUv:qt&&f(m.thicknessMap.channel),alphaMapUv:He&&f(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(w||L),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!b.attributes.uv&&(_e||He),fog:!!E,useFog:m.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||b.attributes.normal===void 0&&w===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:S.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:J,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&v.length>0,shadowMapType:n.shadowMap.type,toneMapping:oi,decodeVideoTexture:_e&&m.map.isVideoTexture===!0&&mt.getTransfer(m.map.colorSpace)===St,decodeVideoTextureEmissive:N&&m.emissiveMap.isVideoTexture===!0&&mt.getTransfer(m.emissiveMap.colorSpace)===St,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===wi,flipSided:m.side===Ni,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:fn&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fn&&m.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)x.push(v),x.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(x,m),(function(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)})(x,m),x.push(n.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=p[m.type],v;if(x){let y=Nn[x];v=vm.clone(y.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,x){let v=h.get(x);return v!==void 0?++v.usedTimes:(v=new Tv(n,x,m,r),c.push(v),h.set(x,v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function Rv(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Om(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bm(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||Iv),i.length>1&&i.sort(l||Om),r.length>1&&r.sort(l||Om)}}}function Pv(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Bm,n.set(e,[r])):t>=i.length?(r=new Bm,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function Lv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ae};break;case"SpotLight":t={position:new C,direction:new C,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new C,halfWidth:new C,halfHeight:new C}}return n[e.id]=t,t}}}var Dv=0;function Nv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uv(n){let e=new Lv,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let r=new C,s=new $e,a=new $e;return{setup:function(o){let l=0,c=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,d=0,p=0,f=0,m=0,x=0,v=0,y=0,S=0,E=0,b=0;o.sort(Nv);for(let U=0,F=o.length;U<F;U++){let P=o[U],k=P.color,W=P.intensity,H=P.distance,j=null;if(P.shadow&&P.shadow.map&&(j=P.shadow.map.texture.format===sa?P.shadow.map.texture:P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=k.r*W,c+=k.g*W,h+=k.b*W;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],W);b++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.directionalShadow[u]=Z,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=P.shadow.matrix,x++}i.directional[u]=G,u++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(W),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[p]=G;let X=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,X.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[p]=X.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=j,y++}p++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(k).multiplyScalar(W),G.halfWidth.set(.5*P.width,0,0),G.halfHeight.set(0,.5*P.height,0),i.rectArea[f]=G,f++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let X=P.shadow,Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=P.shadow.matrix,v++}i.point[d]=G,d++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(W),G.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[m]=G,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let R=i.hash;R.directionalLength===u&&R.pointLength===d&&R.spotLength===p&&R.rectAreaLength===f&&R.hemiLength===m&&R.numDirectionalShadows===x&&R.numPointShadows===v&&R.numSpotShadows===y&&R.numSpotMaps===S&&R.numLightProbes===b||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,R.directionalLength=u,R.pointLength=d,R.spotLength=p,R.rectAreaLength=f,R.hemiLength=m,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=S,R.numLightProbes=b,i.version=Dv++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let m=0,x=o.length;m<x;m++){let v=o[m];if(v.isDirectionalLight){let y=i.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),c++}else if(v.isSpotLight){let y=i.spot[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),u++}else if(v.isRectAreaLight){let y=i.rectArea[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(v.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(.5*v.width,0,0),y.halfHeight.set(0,.5*v.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),p++}}},state:i}}function zm(n){let e=new Uv(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Fv(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new zm(n),e.set(t,[s])):i>=r.length?(s=new zm(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var Ov=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Bv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],km=new $e,mo=new C,Qu=new C;function zv(n,e,t){let i=new wr,r=new pe,s=new pe,a=new Ut,o=new zl,l=new kl,c={},h=t.maxTextureSize,u={[ea]:Ni,[Ni]:ea,[wi]:wi},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new pt;f.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ve(f,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let v=this.type;function y(R,U){let F=e.update(m);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ki(r.x,r.y,{format:sa,type:Ln})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(U,null,F,d,m,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(U,null,F,p,m,null)}function S(R,U,F,P){let k=null,W=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)k=W;else if(k=F.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let H=k.uuid,j=U.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let X=G[j];X===void 0&&(X=k.clone(),G[j]=X,U.addEventListener("dispose",b)),k=X}return k.visible=U.visible,k.wireframe=U.wireframe,k.side=P===Qs?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(n.properties.get(k).light=F),k}function E(R,U,F,P,k){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===Qs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let H=e.update(R),j=R.material;if(Array.isArray(j)){let G=H.groups;for(let X=0,Z=G.length;X<Z;X++){let J=G[X],te=j[J.materialIndex];if(te&&te.visible){let xe=S(R,te,P,k);R.onBeforeShadow(n,R,U,F,H,xe,J),n.renderBufferDirect(F,null,H,xe,R,J),R.onAfterShadow(n,R,U,F,H,xe,J)}}}else if(j.visible){let G=S(R,j,P,k);R.onBeforeShadow(n,R,U,F,H,G,null),n.renderBufferDirect(F,null,H,G,R,null),R.onAfterShadow(n,R,U,F,H,G,null)}}let W=R.children;for(let H=0,j=W.length;H<j;H++)E(W[H],U,F,P,k)}function b(R){R.target.removeEventListener("dispose",b);for(let U in c){let F=c[U],P=R.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}this.render=function(R,U,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===Cp&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oo);let P=n.getRenderTarget(),k=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Pn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=v!==this.type;j&&U.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(X=>X.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,X=R.length;G<X;G++){let Z=R[G],J=Z.shadow;if(J===void 0){Fe("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let te=J.getFrameExtents();r.multiply(te),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,J.mapSize.y=s.y));let xe=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=xe,J.map===null||j===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Qs){if(Z.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ki(r.x,r.y,{format:sa,type:Ln,minFilter:ci,magFilter:ci,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Tr(r.x,r.y,tn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=Ir,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ki,J.map.depthTexture.magFilter=Ki}else Z.isPointLight?(J.map=new xc(r.x),J.map.depthTexture=new Ml(r.x,rr)):(J.map=new ki(r.x,r.y),J.map.depthTexture=new Tr(r.x,r.y,rr)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=Ir,this.type===oo?(J.map.depthTexture.compareFunction=xe?mc:pc,J.map.depthTexture.minFilter=ci,J.map.depthTexture.magFilter=ci):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ki,J.map.depthTexture.magFilter=Ki);J.camera.updateProjectionMatrix()}let Se=J.map.isWebGLCubeRenderTarget?6:1;for(let Re=0;Re<Se;Re++){if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,Re),n.clear();else{Re===0&&(n.setRenderTarget(J.map),n.clear());let _e=J.getViewport(Re);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),H.viewport(a)}if(Z.isPointLight){let _e=J.camera,re=J.matrix,de=Z.distance||_e.far;de!==_e.far&&(_e.far=de,_e.updateProjectionMatrix()),mo.setFromMatrixPosition(Z.matrixWorld),_e.position.copy(mo),Qu.copy(_e.position),Qu.add(Ov[Re]),_e.up.copy(Bv[Re]),_e.lookAt(Qu),_e.updateMatrixWorld(),re.makeTranslation(-mo.x,-mo.y,-mo.z),km.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),J._frustum.setFromProjectionMatrix(km,_e.coordinateSystem,_e.reversedDepth)}else J.updateMatrices(Z);i=J.getFrustum(),E(U,F,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Qs&&y(J,F),J.needsUpdate=!1}v=this.type,x.needsUpdate=!1,n.setRenderTarget(P,k,W)}}function kv(n,e){let t=new function(){let _=!1,L=new Ut,O=null,z=new Ut(0,0,0,0);return{setMask:function(K){O===K||_||(n.colorMask(K,K,K,K),O=K)},setLocked:function(K){_=K},setClear:function(K,$,q,le,oe){oe===!0&&(K*=le,$*=le,q*=le),L.set(K,$,q,le),z.equals(L)===!1&&(n.clearColor(K,$,q,le),z.copy(L))},reset:function(){_=!1,O=null,z.set(-1,0,0,0)}}},i=new function(){let _=!1,L=!1,O=null,z=null,K=null;return{setReversed:function($){if(L!==$){let q=e.get("EXT_clip_control");$?q.clipControlEXT(q.LOWER_LEFT_EXT,q.ZERO_TO_ONE_EXT):q.clipControlEXT(q.LOWER_LEFT_EXT,q.NEGATIVE_ONE_TO_ONE_EXT),L=$;let le=K;K=null,this.setClear(le)}},getReversed:function(){return L},setTest:function($){$?de(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function($){O===$||_||(n.depthMask($),O=$)},setFunc:function($){if(L&&($=dm[$]),z!==$){switch($){case Vh:n.depthFunc(n.NEVER);break;case Wh:n.depthFunc(n.ALWAYS);break;case jh:n.depthFunc(n.LESS);break;case ec:n.depthFunc(n.LEQUAL);break;case Xh:n.depthFunc(n.EQUAL);break;case qh:n.depthFunc(n.GEQUAL);break;case Yh:n.depthFunc(n.GREATER);break;case Zh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=$}},setLocked:function($){_=$},setClear:function($){K!==$&&(K=$,L&&($=1-$),n.clearDepth($))},reset:function(){_=!1,O=null,z=null,K=null,L=!1}}},r=new function(){let _=!1,L=null,O=null,z=null,K=null,$=null,q=null,le=null,oe=null;return{setTest:function(ce){_||(ce?de(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ce){L===ce||_||(n.stencilMask(ce),L=ce)},setFunc:function(ce,ne,fe){O===ce&&z===ne&&K===fe||(n.stencilFunc(ce,ne,fe),O=ce,z=ne,K=fe)},setOp:function(ce,ne,fe){$===ce&&q===ne&&le===fe||(n.stencilOp(ce,ne,fe),$=ce,q=ne,le=fe)},setLocked:function(ce){_=ce},setClear:function(ce){oe!==ce&&(n.clearStencil(ce),oe=ce)},reset:function(){_=!1,L=null,O=null,z=null,K=null,$=null,q=null,le=null,oe=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,x=null,v=null,y=null,S=null,E=new Ae(0,0,0),b=0,R=!1,U=null,F=null,P=null,k=null,W=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,G=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=G>=2);let Z=null,J={},te=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Se=new Ut().fromArray(te),Re=new Ut().fromArray(xe);function _e(_,L,O,z){let K=new Uint8Array(4),$=n.createTexture();n.bindTexture(_,$),n.texParameteri(_,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(_,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let q=0;q<O;q++)_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(L+q,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return $}let re={};function de(_){o[_]!==!0&&(n.enable(_),o[_]=!0)}function ge(_){o[_]!==!1&&(n.disable(_),o[_]=!1)}re[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),de(n.DEPTH_TEST),i.setFunc(ec),M(!1),N(kh),de(n.CULL_FACE),w(Pn);let Le={[ta]:n.FUNC_ADD,[Ip]:n.FUNC_SUBTRACT,[Pp]:n.FUNC_REVERSE_SUBTRACT};Le[Lp]=n.MIN,Le[Dp]=n.MAX;let Be={[Np]:n.ZERO,[Up]:n.ONE,[Fp]:n.SRC_COLOR,[Bp]:n.SRC_ALPHA,[Wp]:n.SRC_ALPHA_SATURATE,[Gp]:n.DST_COLOR,[kp]:n.DST_ALPHA,[Op]:n.ONE_MINUS_SRC_COLOR,[zp]:n.ONE_MINUS_SRC_ALPHA,[Vp]:n.ONE_MINUS_DST_COLOR,[Hp]:n.ONE_MINUS_DST_ALPHA,[jp]:n.CONSTANT_COLOR,[Xp]:n.ONE_MINUS_CONSTANT_COLOR,[qp]:n.CONSTANT_ALPHA,[Yp]:n.ONE_MINUS_CONSTANT_ALPHA};function w(_,L,O,z,K,$,q,le,oe,ce){if(_!==Pn){if(d===!1&&(de(n.BLEND),d=!0),_===Rp)K=K||L,$=$||O,q=q||z,L===f&&K===v||(n.blendEquationSeparate(Le[L],Le[K]),f=L,v=K),O===m&&z===x&&$===y&&q===S||(n.blendFuncSeparate(Be[O],Be[z],Be[$],Be[q]),m=O,x=z,y=$,S=q),le.equals(E)!==!1&&oe===b||(n.blendColor(le.r,le.g,le.b,oe),E.copy(le),b=oe),p=_,R=!1;else if(_!==p||ce!==R){if(f===ta&&v===ta||(n.blendEquation(n.FUNC_ADD),f=ta,v=ta),ce)switch(_){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case en:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",_)}else switch(_){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case en:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",_)}m=null,x=null,y=null,S=null,E.set(0,0,0),b=0,p=_,R=ce}}else d===!0&&(ge(n.BLEND),d=!1)}function M(_){U!==_&&(_?n.frontFace(n.CW):n.frontFace(n.CCW),U=_)}function N(_){_!==Tp?(de(n.CULL_FACE),_!==F&&(_===kh?n.cullFace(n.BACK):_===Ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),F=_}function D(_,L,O){_?(de(n.POLYGON_OFFSET_FILL),k===L&&W===O||(k=L,W=O,i.getReversed()&&(L=-L),n.polygonOffset(L,O))):ge(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:de,disable:ge,bindFramebuffer:function(_,L){return l[_]!==L&&(n.bindFramebuffer(_,L),l[_]=L,_===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=L),_===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(_,L){let O=h,z=!1;if(_){O=c.get(L),O===void 0&&(O=[],c.set(L,O));let K=_.textures;if(O.length!==K.length||O[0]!==n.COLOR_ATTACHMENT0){for(let $=0,q=K.length;$<q;$++)O[$]=n.COLOR_ATTACHMENT0+$;O.length=K.length,z=!0}}else O[0]!==n.BACK&&(O[0]=n.BACK,z=!0);z&&n.drawBuffers(O)},useProgram:function(_){return u!==_&&(n.useProgram(_),u=_,!0)},setBlending:w,setMaterial:function(_,L){_.side===wi?ge(n.CULL_FACE):de(n.CULL_FACE);let O=_.side===Ni;L&&(O=!O),M(O),_.blending===ss&&_.transparent===!1?w(Pn):w(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),i.setFunc(_.depthFunc),i.setTest(_.depthTest),i.setMask(_.depthWrite),t.setMask(_.colorWrite);let z=_.stencilWrite;r.setTest(z),z&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),D(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:M,setCullFace:N,setLineWidth:function(_){_!==P&&(j&&n.lineWidth(_),P=_)},setPolygonOffset:D,setScissorTest:function(_){_?de(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)},activeTexture:function(_){_===void 0&&(_=n.TEXTURE0+H-1),Z!==_&&(n.activeTexture(_),Z=_)},bindTexture:function(_,L,O){O===void 0&&(O=Z===null?n.TEXTURE0+H-1:Z);let z=J[O];z===void 0&&(z={type:void 0,texture:void 0},J[O]=z),z.type===_&&z.texture===L||(Z!==O&&(n.activeTexture(O),Z=O),n.bindTexture(_,L||re[_]),z.type=_,z.texture=L)},unbindTexture:function(){let _=J[Z];_!==void 0&&_.type!==void 0&&(n.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(_){ze("WebGLState:",_)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(_){ze("WebGLState:",_)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(_){ze("WebGLState:",_)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(_){ze("WebGLState:",_)}},updateUBOMapping:function(_,L){let O=a.get(L);O===void 0&&(O=new WeakMap,a.set(L,O));let z=O.get(_);z===void 0&&(z=n.getUniformBlockIndex(L,_.name),O.set(_,z))},uniformBlockBinding:function(_,L){let O=a.get(L).get(_);s.get(L)!==O&&(n.uniformBlockBinding(L,O,_.__bindingPointIndex),s.set(L,O))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(_){ze("WebGLState:",_)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(_){ze("WebGLState:",_)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(_){ze("WebGLState:",_)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(_){ze("WebGLState:",_)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(_){ze("WebGLState:",_)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(_){ze("WebGLState:",_)}},scissor:function(_){Se.equals(_)===!1&&(n.scissor(_.x,_.y,_.z,_.w),Se.copy(_))},viewport:function(_){Re.equals(_)===!1&&(n.viewport(_.x,_.y,_.z,_.w),Re.copy(_))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Z=null,J={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,m=null,x=null,v=null,y=null,S=null,E=new Ae(0,0,0),b=0,R=!1,U=null,F=null,P=null,k=null,W=null,Se.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function Hv(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,M){return p?new OffscreenCanvas(w,M):zs("canvas")}function m(w,M,N){let D=1,_=Be(w);if((_.width>N||_.height>N)&&(D=N/Math.max(_.width,_.height)),D<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let L=Math.floor(D*_.width),O=Math.floor(D*_.height);u===void 0&&(u=f(L,O));let z=M?f(L,O):u;return z.width=L,z.height=O,z.getContext("2d").drawImage(w,0,0,L,O),Fe("WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+L+"x"+O+")."),z}return"data"in w&&Fe("WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),w}return w}function x(w){return w.generateMipmaps}function v(w){n.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,M,N,D,_=!1){if(w!==null){if(n[w]!==void 0)return n[w];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let L=M;if(M===n.RED&&(N===n.FLOAT&&(L=n.R32F),N===n.HALF_FLOAT&&(L=n.R16F),N===n.UNSIGNED_BYTE&&(L=n.R8)),M===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.R8UI),N===n.UNSIGNED_SHORT&&(L=n.R16UI),N===n.UNSIGNED_INT&&(L=n.R32UI),N===n.BYTE&&(L=n.R8I),N===n.SHORT&&(L=n.R16I),N===n.INT&&(L=n.R32I)),M===n.RG&&(N===n.FLOAT&&(L=n.RG32F),N===n.HALF_FLOAT&&(L=n.RG16F),N===n.UNSIGNED_BYTE&&(L=n.RG8)),M===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.RG8UI),N===n.UNSIGNED_SHORT&&(L=n.RG16UI),N===n.UNSIGNED_INT&&(L=n.RG32UI),N===n.BYTE&&(L=n.RG8I),N===n.SHORT&&(L=n.RG16I),N===n.INT&&(L=n.RG32I)),M===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.RGB8UI),N===n.UNSIGNED_SHORT&&(L=n.RGB16UI),N===n.UNSIGNED_INT&&(L=n.RGB32UI),N===n.BYTE&&(L=n.RGB8I),N===n.SHORT&&(L=n.RGB16I),N===n.INT&&(L=n.RGB32I)),M===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),N===n.UNSIGNED_INT&&(L=n.RGBA32UI),N===n.BYTE&&(L=n.RGBA8I),N===n.SHORT&&(L=n.RGBA16I),N===n.INT&&(L=n.RGBA32I)),M===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(L=n.R11F_G11F_B10F)),M===n.RGBA){let O=_?Ha:mt.getTransfer(D);N===n.FLOAT&&(L=n.RGBA32F),N===n.HALF_FLOAT&&(L=n.RGBA16F),N===n.UNSIGNED_BYTE&&(L=O===St?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return L!==n.R16F&&L!==n.R32F&&L!==n.RG16F&&L!==n.RG32F&&L!==n.RGBA16F&&L!==n.RGBA32F||e.get("EXT_color_buffer_float"),L}function E(w,M){let N;return w?M===null||M===rr||M===ra?N=n.DEPTH24_STENCIL8:M===tn?N=n.DEPTH32F_STENCIL8:M===na&&(N=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rr||M===ra?N=n.DEPTH_COMPONENT24:M===tn?N=n.DEPTH_COMPONENT32F:M===na&&(N=n.DEPTH_COMPONENT16),N}function b(w,M){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ki&&w.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){let M=w.target;M.removeEventListener("dispose",R),(function(N){let D=i.get(N);if(D.__webglInit===void 0)return;let _=N.source,L=d.get(_);if(L){let O=L[D.__cacheKey];O.usedTimes--,O.usedTimes===0&&F(N),Object.keys(L).length===0&&d.delete(_)}i.remove(N)})(M),M.isVideoTexture&&h.delete(M)}function U(w){let M=w.target;M.removeEventListener("dispose",U),(function(N){let D=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(D.__webglFramebuffer[L]))for(let O=0;O<D.__webglFramebuffer[L].length;O++)n.deleteFramebuffer(D.__webglFramebuffer[L][O]);else n.deleteFramebuffer(D.__webglFramebuffer[L]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[L])}else{if(Array.isArray(D.__webglFramebuffer))for(let L=0;L<D.__webglFramebuffer.length;L++)n.deleteFramebuffer(D.__webglFramebuffer[L]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let L=0;L<D.__webglColorRenderbuffer.length;L++)D.__webglColorRenderbuffer[L]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[L]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let _=N.textures;for(let L=0,O=_.length;L<O;L++){let z=i.get(_[L]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(_[L])}i.remove(N)})(M)}function F(w){let M=i.get(w);n.deleteTexture(M.__webglTexture);let N=w.source;delete d.get(N)[M.__cacheKey],a.memory.textures--}let P=0;function k(w,M){let N=i.get(w);if(w.isVideoTexture&&(function(D){let _=a.render.frame;h.get(D)!==_&&(h.set(D,_),D.update())})(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){let D=w.image;if(D===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void J(N,w,M);Fe("WebGLRenderer: Texture marked for update but image is incomplete")}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+M)}let W={[Jr]:n.REPEAT,[Er]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},H={[Ki]:n.NEAREST,[$p]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[nc]:n.LINEAR_MIPMAP_NEAREST,[dn]:n.LINEAR_MIPMAP_LINEAR},j={[nm]:n.NEVER,[lm]:n.ALWAYS,[rm]:n.LESS,[pc]:n.LEQUAL,[sm]:n.EQUAL,[mc]:n.GEQUAL,[am]:n.GREATER,[om]:n.NOTEQUAL};function G(w,M){if(M.type!==tn||e.has("OES_texture_float_linear")!==!1||M.magFilter!==ci&&M.magFilter!==nc&&M.magFilter!==co&&M.magFilter!==dn&&M.minFilter!==ci&&M.minFilter!==nc&&M.minFilter!==co&&M.minFilter!==dn||Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,W[M.wrapT]),w!==n.TEXTURE_3D&&w!==n.TEXTURE_2D_ARRAY||n.texParameteri(w,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,H[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ki||M.minFilter!==co&&M.minFilter!==dn||M.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function X(w,M){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let D=M.source,_=d.get(D);_===void 0&&(_={},d.set(D,_));let L=(function(O){let z=[];return z.push(O.wrapS),z.push(O.wrapT),z.push(O.wrapR||0),z.push(O.magFilter),z.push(O.minFilter),z.push(O.anisotropy),z.push(O.internalFormat),z.push(O.format),z.push(O.type),z.push(O.generateMipmaps),z.push(O.premultiplyAlpha),z.push(O.flipY),z.push(O.unpackAlignment),z.push(O.colorSpace),z.join()})(M);if(L!==w.__cacheKey){_[L]===void 0&&(_[L]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),_[L].usedTimes++;let O=_[w.__cacheKey];O!==void 0&&(_[w.__cacheKey].usedTimes--,O.usedTimes===0&&F(M)),w.__cacheKey=L,w.__webglTexture=_[L].texture}return N}function Z(w,M,N){return Math.floor(Math.floor(w/N)/M)}function J(w,M,N){let D=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(D=n.TEXTURE_3D);let _=X(w,M),L=M.source;t.bindTexture(D,w.__webglTexture,n.TEXTURE0+N);let O=i.get(L);if(L.version!==O.__version||_===!0){t.activeTexture(n.TEXTURE0+N);let z=mt.getPrimaries(mt.workingColorSpace),K=M.colorSpace===ls?null:mt.getPrimaries(M.colorSpace),$=M.colorSpace===ls||z===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let q=m(M.image,!1,r.maxTextureSize);q=Le(M,q);let le=s.convert(M.format,M.colorSpace),oe=s.convert(M.type),ce,ne=S(M.internalFormat,le,oe,M.colorSpace,M.isVideoTexture);G(D,M);let fe=M.mipmaps,Ue=M.isVideoTexture!==!0,Qe=O.__version===void 0||_===!0,lt=L.dataReady,et=b(M,q);if(M.isDepthTexture)ne=E(M.format===os,M.type),Qe&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,ne,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,ne,q.width,q.height,0,le,oe,null));else if(M.isDataTexture)if(fe.length>0){Ue&&Qe&&t.texStorage2D(n.TEXTURE_2D,et,ne,fe[0].width,fe[0].height);for(let Te=0,je=fe.length;Te<je;Te++)ce=fe[Te],Ue?lt&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,ce.width,ce.height,le,oe,ce.data):t.texImage2D(n.TEXTURE_2D,Te,ne,ce.width,ce.height,0,le,oe,ce.data);M.generateMipmaps=!1}else Ue?(Qe&&t.texStorage2D(n.TEXTURE_2D,et,ne,q.width,q.height),lt&&(function(Te,je,gt,qt){let be=Te.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,je.width,je.height,gt,qt,je.data);else{be.sort((oi,bt)=>oi.start-bt.start);let He=0;for(let oi=1;oi<be.length;oi++){let bt=be[He],Pt=be[oi],Li=bt.start+bt.count,B=Z(Pt.start,je.width,4),gn=Z(bt.start,je.width,4);Pt.start<=Li+1&&B===gn&&Z(Pt.start+Pt.count-1,je.width,4)===B?bt.count=Math.max(bt.count,Pt.start+Pt.count-bt.start):(++He,be[He]=Pt)}be.length=He+1;let qe=n.getParameter(n.UNPACK_ROW_LENGTH),On=n.getParameter(n.UNPACK_SKIP_PIXELS),fn=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,je.width);for(let oi=0,bt=be.length;oi<bt;oi++){let Pt=be[oi],Li=Math.floor(Pt.start/4),B=Math.ceil(Pt.count/4),gn=Li%je.width,or=Math.floor(Li/je.width),Ot=B;n.pixelStorei(n.UNPACK_SKIP_PIXELS,gn),n.pixelStorei(n.UNPACK_SKIP_ROWS,or),t.texSubImage2D(n.TEXTURE_2D,0,gn,or,Ot,1,gt,qt,je.data)}Te.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,qe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,On),n.pixelStorei(n.UNPACK_SKIP_ROWS,fn)}})(M,q,le,oe)):t.texImage2D(n.TEXTURE_2D,0,ne,q.width,q.height,0,le,oe,q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,ne,fe[0].width,fe[0].height,q.depth);for(let Te=0,je=fe.length;Te<je;Te++)if(ce=fe[Te],M.format!==pn)if(le!==null)if(Ue){if(lt)if(M.layerUpdates.size>0){let gt=qu(ce.width,ce.height,M.format,M.type);for(let qt of M.layerUpdates){let be=ce.data.subarray(qt*gt/ce.data.BYTES_PER_ELEMENT,(qt+1)*gt/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,qt,ce.width,ce.height,1,le,be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,ce.width,ce.height,q.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,ne,ce.width,ce.height,q.depth,0,ce.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?lt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,ce.width,ce.height,q.depth,le,oe,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,ne,ce.width,ce.height,q.depth,0,le,oe,ce.data)}else{Ue&&Qe&&t.texStorage2D(n.TEXTURE_2D,et,ne,fe[0].width,fe[0].height);for(let Te=0,je=fe.length;Te<je;Te++)ce=fe[Te],M.format!==pn?le!==null?Ue?lt&&t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,ne,ce.width,ce.height,0,ce.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?lt&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,ce.width,ce.height,le,oe,ce.data):t.texImage2D(n.TEXTURE_2D,Te,ne,ce.width,ce.height,0,le,oe,ce.data)}else if(M.isDataArrayTexture)if(Ue){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,ne,q.width,q.height,q.depth),lt)if(M.layerUpdates.size>0){let Te=qu(q.width,q.height,M.format,M.type);for(let je of M.layerUpdates){let gt=q.data.subarray(je*Te/q.data.BYTES_PER_ELEMENT,(je+1)*Te/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,q.width,q.height,1,le,oe,gt)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,le,oe,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,q.width,q.height,q.depth,0,le,oe,q.data);else if(M.isData3DTexture)Ue?(Qe&&t.texStorage3D(n.TEXTURE_3D,et,ne,q.width,q.height,q.depth),lt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,le,oe,q.data)):t.texImage3D(n.TEXTURE_3D,0,ne,q.width,q.height,q.depth,0,le,oe,q.data);else if(M.isFramebufferTexture){if(Qe)if(Ue)t.texStorage2D(n.TEXTURE_2D,et,ne,q.width,q.height);else{let Te=q.width,je=q.height;for(let gt=0;gt<et;gt++)t.texImage2D(n.TEXTURE_2D,gt,ne,Te,je,0,le,oe,null),Te>>=1,je>>=1}}else if(fe.length>0){if(Ue&&Qe){let Te=Be(fe[0]);t.texStorage2D(n.TEXTURE_2D,et,ne,Te.width,Te.height)}for(let Te=0,je=fe.length;Te<je;Te++)ce=fe[Te],Ue?lt&&t.texSubImage2D(n.TEXTURE_2D,Te,0,0,le,oe,ce):t.texImage2D(n.TEXTURE_2D,Te,ne,le,oe,ce);M.generateMipmaps=!1}else if(Ue){if(Qe){let Te=Be(q);t.texStorage2D(n.TEXTURE_2D,et,ne,Te.width,Te.height)}lt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,oe,q)}else t.texImage2D(n.TEXTURE_2D,0,ne,le,oe,q);x(M)&&v(D),O.__version=L.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function te(w,M,N,D,_,L){let O=s.convert(N.format,N.colorSpace),z=s.convert(N.type),K=S(N.internalFormat,O,z,N.colorSpace),$=i.get(M),q=i.get(N);if(q.__renderTarget=M,!$.__hasExternalTextures){let le=Math.max(1,M.width>>L),oe=Math.max(1,M.height>>L);_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?t.texImage3D(_,L,K,le,oe,M.depth,0,O,z,null):t.texImage2D(_,L,K,le,oe,0,O,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,_,q.__webglTexture,0,de(M)):(_===n.TEXTURE_2D||_>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,_,q.__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(w,M,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){let D=M.depthTexture,_=D&&D.isDepthTexture?D.type:null,L=E(M.stencilBuffer,_),O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(M),L,M.width,M.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(M),L,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,L,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,w)}else{let D=M.textures;for(let _=0;_<D.length;_++){let L=D[_],O=s.convert(L.format,L.colorSpace),z=s.convert(L.type),K=S(L.internalFormat,O,z,L.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(M),K,M.width,M.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(M),K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,M,N){let D=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _=i.get(M.depthTexture);if(_.__renderTarget=M,_.__webglTexture&&M.depthTexture.image.width===M.width&&M.depthTexture.image.height===M.height||(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D){if(_.__webglInit===void 0&&(_.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),_.__webglTexture===void 0){_.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture),G(n.TEXTURE_CUBE_MAP,M.depthTexture);let $=s.convert(M.depthTexture.format),q=s.convert(M.depthTexture.type),le;M.depthTexture.format===Ir?le=n.DEPTH_COMPONENT24:M.depthTexture.format===os&&(le=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,le,M.width,M.height,0,$,q,null)}}else k(M.depthTexture,0);let L=_.__webglTexture,O=de(M),z=D?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,K=M.depthTexture.format===os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ir)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,z,L,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,K,z,L,0);else{if(M.depthTexture.format!==os)throw new Error("Unknown depthTexture format");ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,z,L,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,K,z,L,0)}}function Re(w){let M=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let D=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),D){let _=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,D.removeEventListener("dispose",_)};D.addEventListener("dispose",_),M.__depthDisposeCallback=_}M.__boundDepthTexture=D}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let D=0;D<6;D++)Se(M.__webglFramebuffer[D],w,D);else{let D=w.texture.mipmaps;D&&D.length>0?Se(M.__webglFramebuffer[0],w,0):Se(M.__webglFramebuffer,w,0)}else if(N){M.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[D]),M.__webglDepthbuffer[D]===void 0)M.__webglDepthbuffer[D]=n.createRenderbuffer(),xe(M.__webglDepthbuffer[D],w,!1);else{let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=M.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,L)}}else{let D=w.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),xe(M.__webglDepthbuffer,w,!1);else{let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,L)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let _e=[],re=[];function de(w){return Math.min(r.maxSamples,w.samples)}function ge(w){let M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(w,M){let N=w.colorSpace,D=w.format,_=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Kr&&N!==ls&&(mt.getTransfer(N)===St?D===pn&&_===ji||Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",N)),M}function Be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){let w=P;return w>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w},this.resetTextureUnits=function(){P=0},this.setTexture2D=k,this.setTexture2DArray=function(w,M){let N=i.get(w);w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version?J(N,w,M):(w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+M))},this.setTexture3D=function(w,M){let N=i.get(w);w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version?J(N,w,M):t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+M)},this.setTextureCube=function(w,M){let N=i.get(w);w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version?(function(D,_,L){if(_.image.length!==6)return;let O=X(D,_),z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+L);let K=i.get(z);if(z.version!==K.__version||O===!0){t.activeTexture(n.TEXTURE0+L);let $=mt.getPrimaries(mt.workingColorSpace),q=_.colorSpace===ls?null:mt.getPrimaries(_.colorSpace),le=_.colorSpace===ls||$===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let oe=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let be=0;be<6;be++)ne[be]=oe||ce?ce?_.image[be].image:_.image[be]:m(_.image[be],!0,r.maxCubemapSize),ne[be]=Le(_,ne[be]);let fe=ne[0],Ue=s.convert(_.format,_.colorSpace),Qe=s.convert(_.type),lt=S(_.internalFormat,Ue,Qe,_.colorSpace),et=_.isVideoTexture!==!0,Te=K.__version===void 0||O===!0,je=z.dataReady,gt,qt=b(_,fe);if(G(n.TEXTURE_CUBE_MAP,_),oe){et&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qt,lt,fe.width,fe.height);for(let be=0;be<6;be++){gt=ne[be].mipmaps;for(let He=0;He<gt.length;He++){let qe=gt[He];_.format!==pn?Ue!==null?et?je&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,0,0,qe.width,qe.height,Ue,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,lt,qe.width,qe.height,0,qe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,0,0,qe.width,qe.height,Ue,Qe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,lt,qe.width,qe.height,0,Ue,Qe,qe.data)}}}else{if(gt=_.mipmaps,et&&Te){gt.length>0&&qt++;let be=Be(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qt,lt,be.width,be.height)}for(let be=0;be<6;be++)if(ce){et?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ne[be].width,ne[be].height,Ue,Qe,ne[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,ne[be].width,ne[be].height,0,Ue,Qe,ne[be].data);for(let He=0;He<gt.length;He++){let qe=gt[He].image[be].image;et?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,0,0,qe.width,qe.height,Ue,Qe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,lt,qe.width,qe.height,0,Ue,Qe,qe.data)}}else{et?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ue,Qe,ne[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,Ue,Qe,ne[be]);for(let He=0;He<gt.length;He++){let qe=gt[He];et?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,0,0,Ue,Qe,qe.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,lt,Ue,Qe,qe.image[be])}}}x(_)&&v(n.TEXTURE_CUBE_MAP),K.__version=z.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version})(N,w,M):t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+M)},this.rebindTextures=function(w,M,N){let D=i.get(w);M!==void 0&&te(D.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Re(w)},this.setupRenderTarget=function(w){let M=w.texture,N=i.get(w),D=i.get(M);w.addEventListener("dispose",U);let _=w.textures,L=w.isWebGLCubeRenderTarget===!0,O=_.length>1;if(O||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=M.version,a.memory.textures++),L){N.__webglFramebuffer=[];for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[z]=[];for(let K=0;K<M.mipmaps.length;K++)N.__webglFramebuffer[z][K]=n.createFramebuffer()}else N.__webglFramebuffer[z]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let z=0;z<M.mipmaps.length;z++)N.__webglFramebuffer[z]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(O)for(let z=0,K=_.length;z<K;z++){let $=i.get(_[z]);$.__webglTexture===void 0&&($.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let z=0;z<_.length;z++){let K=_[z];N.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[z]);let $=s.convert(K.format,K.colorSpace),q=s.convert(K.type),le=S(K.internalFormat,$,q,K.colorSpace,w.isXRRenderTarget===!0),oe=de(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,N.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),G(n.TEXTURE_CUBE_MAP,M);for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)te(N.__webglFramebuffer[z][K],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,K);else te(N.__webglFramebuffer[z],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);x(M)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let z=0,K=_.length;z<K;z++){let $=_[z],q=i.get($),le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),G(le,$),te(N.__webglFramebuffer,w,$,n.COLOR_ATTACHMENT0+z,le,0),x($)&&v(le)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(z=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(z,D.__webglTexture),G(z,M),M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)te(N.__webglFramebuffer[K],w,M,n.COLOR_ATTACHMENT0,z,K);else te(N.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,z,0);x(M)&&v(z),t.unbindTexture()}w.depthBuffer&&Re(w)},this.updateRenderTargetMipmap=function(w){let M=w.textures;for(let N=0,D=M.length;N<D;N++){let _=M[N];if(x(_)){let L=y(w),O=i.get(_).__webglTexture;t.bindTexture(L,O),v(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(ge(w)===!1){let M=w.textures,N=w.width,D=w.height,_=n.COLOR_BUFFER_BIT,L=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=i.get(w),z=M.length>1;if(z)for(let $=0;$<M.length;$++)t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer);let K=w.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let $=0;$<M.length;$++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(_|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(_|=n.STENCIL_BUFFER_BIT)),z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,O.__webglColorRenderbuffer[$]);let q=i.get(M[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,N,D,0,0,N,D,_,n.NEAREST),l===!0&&(_e.length=0,re.length=0,_e.push(n.COLOR_ATTACHMENT0+$),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_e.push(L),re.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let $=0;$<M.length;$++){t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,O.__webglColorRenderbuffer[$]);let q=i.get(M[$]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gv(n,e){return{convert:function(t,i=ls){let r,s=mt.getTransfer(i);if(t===ji)return n.UNSIGNED_BYTE;if(t===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(t===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(t===su)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===nu)return n.BYTE;if(t===ru)return n.SHORT;if(t===na)return n.UNSIGNED_SHORT;if(t===rc)return n.INT;if(t===rr)return n.UNSIGNED_INT;if(t===tn)return n.FLOAT;if(t===Ln)return n.HALF_FLOAT;if(t===Qp)return n.ALPHA;if(t===em)return n.RGB;if(t===pn)return n.RGBA;if(t===Ir)return n.DEPTH_COMPONENT;if(t===os)return n.DEPTH_STENCIL;if(t===oc)return n.RED;if(t===lc)return n.RED_INTEGER;if(t===sa)return n.RG;if(t===ou)return n.RG_INTEGER;if(t===lu)return n.RGBA_INTEGER;if(t===cc||t===hc||t===uc||t===dc)if(s===St){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===hc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===uc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===cu||t===hu||t===uu||t===du){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===pu||t===mu||t===fu||t===gu||t===vu||t===yu||t===xu){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===pu||t===mu)return s===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===fu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===gu)return r.COMPRESSED_R11_EAC;if(t===vu)return r.COMPRESSED_SIGNED_R11_EAC;if(t===yu)return r.COMPRESSED_RG11_EAC;if(t===xu)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===_u||t===Mu||t===Su||t===bu||t===Eu||t===wu||t===Tu||t===Au||t===Cu||t===Ru||t===Iu||t===Pu||t===Lu||t===Du){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===_u)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Mu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Su)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===bu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Eu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===wu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Tu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Au)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Cu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Ru)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Iu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Pu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Lu)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Du)return s===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Nu||t===Uu||t===Fu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Nu)return s===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Ou||t===Bu||t===zu||t===ku){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Ou)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Bu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ra?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ja(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Wi({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends Kn{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,m=typeof XRWebGLBinding<"u",x=new od,v={},y=t.getContextAttributes(),S=null,E=null,b=[],R=[],U=new pe,F=null,P=new Zt;P.viewport=new Ut;let k=new Zt;k.viewport=new Ut;let W=[P,k],H=new Ql,j=null,G=null;function X(re){let de=R.indexOf(re.inputSource);if(de===-1)return;let ge=b[de];ge!==void 0&&(ge.update(re.inputSource,re.frame,c||a),ge.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",J);for(let re=0;re<b.length;re++){let de=R[re];de!==null&&(R[re]=null,b[re].disconnect(de))}j=null,G=null,x.reset();for(let re in v)delete v[re];e.setRenderTarget(S),p=null,d=null,u=null,r=null,E=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}function J(re){for(let de=0;de<re.removed.length;de++){let ge=re.removed[de],Le=R.indexOf(ge);Le>=0&&(R[Le]=null,b[Le].disconnect(ge))}for(let de=0;de<re.added.length;de++){let ge=re.added[de],Le=R.indexOf(ge);if(Le===-1){for(let w=0;w<b.length;w++){if(w>=R.length){R.push(ge),Le=w;break}if(R[w]===null){R[w]=ge,Le=w;break}}if(Le===-1)break}let Be=b[Le];Be&&Be.connect(ge)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=b[re];return de===void 0&&(de=new Vs,b[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=b[re];return de===void 0&&(de=new Vs,b[re]=de),de.getGripSpace()},this.getHand=function(re){let de=b[re];return de===void 0&&(de=new Vs,b[re]=de),de.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(U),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ge=null,Le=null;y.depth&&(Le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?os:Ir,ge=y.stencil?ra:rr);let Be={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ki(d.textureWidth,d.textureHeight,{format:pn,type:ji,depthTexture:new Tr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ki(p.framebufferWidth,p.framebufferHeight,{format:pn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let te=new C,xe=new C;function Se(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let de=re.near,ge=re.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),H.near=k.near=P.near=de,H.far=k.far=P.far=ge,j===H.near&&G===H.far||(r.updateRenderState({depthNear:H.near,depthFar:H.far}),j=H.near,G=H.far),H.layers.mask=6|re.layers.mask,P.layers.mask=-5&H.layers.mask,k.layers.mask=-3&H.layers.mask;let Le=re.parent,Be=H.cameras;Se(H,Le);for(let w=0;w<Be.length;w++)Se(Be[w],Le);Be.length===2?(function(w,M,N){te.setFromMatrixPosition(M.matrixWorld),xe.setFromMatrixPosition(N.matrixWorld);let D=te.distanceTo(xe),_=M.projectionMatrix.elements,L=N.projectionMatrix.elements,O=_[14]/(_[10]-1),z=_[14]/(_[10]+1),K=(_[9]+1)/_[5],$=(_[9]-1)/_[5],q=(_[8]-1)/_[0],le=(L[8]+1)/L[0],oe=O*q,ce=O*le,ne=D/(-q+le),fe=ne*-q;if(M.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(fe),w.translateZ(ne),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),_[10]===-1)w.projectionMatrix.copy(M.projectionMatrix),w.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let Ue=O+ne,Qe=z+ne,lt=oe-fe,et=ce+(D-fe),Te=K*z/Qe*Ue,je=$*z/Qe*Ue;w.projectionMatrix.makePerspective(lt,et,Te,je,Ue,Qe),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(H,P,k):H.projectionMatrix.copy(P.projectionMatrix),(function(w,M,N){N===null?w.matrix.copy(M.matrixWorld):(w.matrix.copy(N.matrixWorld),w.matrix.invert(),w.matrix.multiply(M.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(M.projectionMatrix),w.projectionMatrixInverse.copy(M.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Hs*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(re,H,Le)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(re){return v[re]};let Re=null,_e=new Hm;_e.setAnimationLoop(function(re,de){if(h=de.getViewerPose(c||a),f=de,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Le=!1;ge.length!==H.cameras.length&&(H.cameras.length=0,Le=!0);for(let w=0;w<ge.length;w++){let M=ge[w],N=null;if(p!==null)N=p.getViewport(M);else{let _=u.getViewSubImage(d,M);N=_.viewport,w===0&&(e.setRenderTargetTextures(E,_.colorTexture,_.depthStencilTexture),e.setRenderTarget(E))}let D=W[w];D===void 0&&(D=new Zt,D.layers.enable(w),D.viewport=new Ut,W[w]=D),D.matrix.fromArray(M.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(M.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(N.x,N.y,N.width,N.height),w===0&&(H.matrix.copy(D.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Le===!0&&H.cameras.push(D)}let Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let w=u.getDepthInformation(ge[0]);w&&w.isValid&&w.texture&&x.init(w,r.renderState)}if(Be&&Be.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let w=0;w<ge.length;w++){let M=ge[w].camera;if(M){let N=v[M];N||(N=new Ja,v[M]=N);let D=u.getCameraImage(M);N.sourceTexture=D}}}}for(let ge=0;ge<b.length;ge++){let Le=R[ge],Be=b[ge];Le!==null&&Be!==void 0&&Be.update(Le,de,c||a)}Re&&Re(re,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),f=null}),this.setAnimationLoop=function(re){Re=re},this.dispose=function(){}}},ds=new hn,Vv=new $e;function Wv(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ni&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ni&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,ds.copy(l),ds.x*=-1,ds.y*=-1,ds.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),r.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(ds)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ju(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ni&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function jv(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let m=u.value,x=d+"_"+p;if(f[x]===void 0)return f[x]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let v=f[x];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return f[x]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(x){let v=x.uniforms,y=0,S=16;for(let b=0,R=v.length;b<R;b++){let U=Array.isArray(v[b])?v[b]:[v[b]];for(let F=0,P=U.length;F<P;F++){let k=U[F],W=Array.isArray(k.value)?k.value:[k.value];for(let H=0,j=W.length;H<j;H++){let G=c(W[H]),X=y%S,Z=X%G.boundary,J=X+Z;y+=Z,J!==0&&S-J<G.storage&&(y+=S-J),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=G.storage}}}let E=y%S;E>0&&(y+=S-E),x.__size=y,x.__cache={}})(u),p=(function(x){let v=(function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=v;let y=n.createBuffer(),S=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&((function(x){let v=r[x.id],y=x.uniforms,S=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,b=y.length;E<b;E++){let R=Array.isArray(y[E])?y[E]:[y[E]];for(let U=0,F=R.length;U<F;U++){let P=R[U];if(l(P,E,U,S)===!0){let k=P.__offset,W=Array.isArray(P.value)?P.value:[P.value],H=0;for(let j=0;j<W.length;j++){let G=W[j],X=c(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,k+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=m)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null,Pr=class{constructor(e={}){let{canvas:t=cm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=ji}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=p,x=new Set([lu,ou,lc]),v=new Set([ji,rr,na,ra,sc,ac]),y=new Uint32Array(4),S=new Int32Array(4),E=null,b=null,R=[],U=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,k=!1;this._outputColorSpace=wt;let W=0,H=0,j=null,G=-1,X=null,Z=new Ut,J=new Ut,te=null,xe=new Ae(0),Se=0,Re=t.width,_e=t.height,re=1,de=null,ge=null,Le=new Ut(0,0,Re,_e),Be=new Ut(0,0,Re,_e),w=!1,M=new wr,N=!1,D=!1,_=new $e,L=new C,O=new Ut,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function $(){return j===null?re:1}let q,le,oe,ce,ne,fe,Ue,Qe,lt,et,Te,je,gt,qt,be,He,qe,On,fn,oi,bt,Pt,Li,B=i;function gn(A,Y){return t.getContext(A,Y)}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",lr,!1),t.addEventListener("webglcontextrestored",To,!1),t.addEventListener("webglcontextcreationerror",ms,!1),B===null){let Y="webgl2";if(B=gn(Y,A),B===null)throw gn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw ze("WebGLRenderer: "+A.message),A}function or(){q=new x0(B),q.init(),bt=new Gv(B,q),le=new f0(B,q,e,bt),oe=new kv(B,q),le.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),ce=new S0(B),ne=new Rv,fe=new Hv(B,q,oe,ne,le,bt,ce),Ue=new y0(P),Qe=new h0(B),Pt=new p0(B,Qe),lt=new _0(B,Qe,ce,Pt),et=new E0(B,lt,Qe,Pt,ce),On=new b0(B,le,fe),be=new g0(ne),Te=new Cv(P,Ue,q,le,Pt,be),je=new Wv(P,ne),gt=new Pv,qt=new Fv(q),qe=new d0(P,Ue,oe,et,f,l),He=new zv(P,et,le),Li=new jv(B,ce,le,oe),fn=new m0(B,q,ce),oi=new M0(B,q,ce),ce.programs=Te.programs,P.capabilities=le,P.extensions=q,P.properties=ne,P.renderLists=gt,P.shadowMap=He,P.state=oe,P.info=ce}or(),m!==ji&&(F=new T0(m,t.width,t.height,r,s));let Ot=new ld(P,B);function lr(A){A.preventDefault(),Gu("WebGLRenderer: Context Lost."),k=!0}function To(){Gu("WebGLRenderer: Context Restored."),k=!1;let A=ce.autoReset,Y=He.enabled,Q=He.autoUpdate,ie=He.needsUpdate,ee=He.type;or(),ce.autoReset=A,He.enabled=Y,He.autoUpdate=Q,He.needsUpdate=ie,He.type=ee}function ms(A){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function va(A){let Y=A.target;Y.removeEventListener("dispose",va),(function(Q){(function(ie){let ee=ne.get(ie).programs;ee!==void 0&&(ee.forEach(function(me){Te.releaseProgram(me)}),ie.isShaderMaterial&&Te.releaseShaderCache(ie))})(Q),ne.remove(Q)})(Y)}function ya(A,Y,Q){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=Ni,A.needsUpdate=!0,ii(A,Y,Q),A.side=ea,A.needsUpdate=!0,ii(A,Y,Q),A.side=wi):ii(A,Y,Q)}this.xr=Ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(Re,_e,!1))},this.getSize=function(A){return A.set(Re,_e)},this.setSize=function(A,Y,Q=!0){Ot.isPresenting?Fe("WebGLRenderer: Can't change size while VR device is presenting."):(Re=A,_e=Y,t.width=Math.floor(A*re),t.height=Math.floor(Y*re),Q===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,A,Y))},this.getDrawingBufferSize=function(A){return A.set(Re*re,_e*re).floor()},this.setDrawingBufferSize=function(A,Y,Q){Re=A,_e=Y,re=Q,t.width=Math.floor(A*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(m!==ji){if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Le)},this.setViewport=function(A,Y,Q,ie){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,Y,Q,ie),oe.viewport(Z.copy(Le).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,Y,Q,ie){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,Y,Q,ie),oe.scissor(J.copy(Be).multiplyScalar(re).round())},this.getScissorTest=function(){return w},this.setScissorTest=function(A){oe.setScissorTest(w=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,Q=!0){let ie=0;if(A){let ee=!1;if(j!==null){let me=j.texture.format;ee=x.has(me)}if(ee){let me=j.texture.type,Ee=v.has(me),Ie=qe.getClearColor(),ye=qe.getClearAlpha(),ke=Ie.r,ct=Ie.g,We=Ie.b;Ee?(y[0]=ke,y[1]=ct,y[2]=We,y[3]=ye,B.clearBufferuiv(B.COLOR,0,y)):(S[0]=ke,S[1]=ct,S[2]=We,S[3]=ye,B.clearBufferiv(B.COLOR,0,S))}else ie|=B.COLOR_BUFFER_BIT}Y&&(ie|=B.DEPTH_BUFFER_BIT),Q&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lr,!1),t.removeEventListener("webglcontextrestored",To,!1),t.removeEventListener("webglcontextcreationerror",ms,!1),qe.dispose(),gt.dispose(),qt.dispose(),ne.dispose(),Ue.dispose(),et.dispose(),Pt.dispose(),Li.dispose(),Te.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",fs),Ot.removeEventListener("sessionend",_a),rn.stop()},this.renderBufferDirect=function(A,Y,Q,ie,ee,me){Y===null&&(Y=z);let Ee=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=(function(Ze,Lt,Xe,Ce,Ne){Lt.isScene!==!0&&(Lt=z),fe.resetTextureUnits();let yi=Lt.fog,Or=Ce.isMeshStandardMaterial||Ce.isMeshLambertMaterial||Ce.isMeshPhongMaterial?Lt.environment:null,xi=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Kr,Ri=Ce.isMeshStandardMaterial||Ce.isMeshLambertMaterial&&!Ce.envMap||Ce.isMeshPhongMaterial&&!Ce.envMap,at=Ue.get(Ce.envMap||Or,Ri),yn=Ce.vertexColors===!0&&!!Xe.attributes.color&&Xe.attributes.color.itemSize===4,Ui=!!Xe.attributes.tangent&&(!!Ce.normalMap||Ce.anisotropy>0),cr=!!Xe.morphAttributes.position,we=!!Xe.morphAttributes.normal,qi=!!Xe.morphAttributes.color,ba=un;Ce.toneMapped&&(j!==null&&j.isXRRenderTarget!==!0||(ba=P.toneMapping));let Dt=Xe.morphAttributes.position||Xe.morphAttributes.normal||Xe.morphAttributes.color,Kt=Dt!==void 0?Dt.length:0,Je=ne.get(Ce),Fi=b.state.lights;if(N===!0&&(D===!0||Ze!==X)){let di=Ze===X&&Ce.id===G;be.setState(Ce,Ze,di)}let jt=!1;Ce.version===Je.__version?Je.needsLights&&Je.lightsStateVersion!==Fi.state.version||Je.outputColorSpace!==xi||Ne.isBatchedMesh&&Je.batching===!1?jt=!0:Ne.isBatchedMesh||Je.batching!==!0?Ne.isBatchedMesh&&Je.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&Je.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&Je.instancing===!1?jt=!0:Ne.isInstancedMesh||Je.instancing!==!0?Ne.isSkinnedMesh&&Je.skinning===!1?jt=!0:Ne.isSkinnedMesh||Je.skinning!==!0?Ne.isInstancedMesh&&Je.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&Je.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&Je.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&Je.instancingMorph===!1&&Ne.morphTexture!==null||Je.envMap!==at||Ce.fog===!0&&Je.fog!==yi?jt=!0:Je.numClippingPlanes===void 0||Je.numClippingPlanes===be.numPlanes&&Je.numIntersection===be.numIntersection?(Je.vertexAlphas!==yn||Je.vertexTangents!==Ui||Je.morphTargets!==cr||Je.morphNormals!==we||Je.morphColors!==qi||Je.toneMapping!==ba||Je.morphTargetsCount!==Kt)&&(jt=!0):jt=!0:jt=!0:jt=!0:jt=!0:(jt=!0,Je.__version=Ce.version);let Yi=Je.currentProgram;jt===!0&&(Yi=ii(Ce,Lt,Ne));let xn=!1,_n=!1,Br=!1,vt=Yi.getUniforms(),Di=Je.uniforms;if(oe.useProgram(Yi.program)&&(xn=!0,_n=!0,Br=!0),Ce.id!==G&&(G=Ce.id,_n=!0),xn||X!==Ze){oe.buffers.depth.getReversed()&&Ze.reversedDepth!==!0&&(Ze._reversedDepth=!0,Ze.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",Ze.projectionMatrix),vt.setValue(B,"viewMatrix",Ze.matrixWorldInverse);let di=vt.map.cameraPosition;di!==void 0&&di.setValue(B,L.setFromMatrixPosition(Ze.matrixWorld)),le.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(Ze.far+1)/Math.LN2)),(Ce.isMeshPhongMaterial||Ce.isMeshToonMaterial||Ce.isMeshLambertMaterial||Ce.isMeshBasicMaterial||Ce.isMeshStandardMaterial||Ce.isShaderMaterial)&&vt.setValue(B,"isOrthographic",Ze.isOrthographicCamera===!0),X!==Ze&&(X=Ze,_n=!0,Br=!0)}if(Je.needsLights&&(Fi.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",Fi.state.directionalShadowMap,fe),Fi.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",Fi.state.spotShadowMap,fe),Fi.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",Fi.state.pointShadowMap,fe)),Ne.isSkinnedMesh){vt.setOptional(B,Ne,"bindMatrix"),vt.setOptional(B,Ne,"bindMatrixInverse");let di=Ne.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),vt.setValue(B,"boneTexture",di.boneTexture,fe))}Ne.isBatchedMesh&&(vt.setOptional(B,Ne,"batchingTexture"),vt.setValue(B,"batchingTexture",Ne._matricesTexture,fe),vt.setOptional(B,Ne,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",Ne._indirectTexture,fe),vt.setOptional(B,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",Ne._colorsTexture,fe));let Bn=Xe.morphAttributes;Bn.position===void 0&&Bn.normal===void 0&&Bn.color===void 0||On.update(Ne,Xe,Yi),(_n||Je.receiveShadow!==Ne.receiveShadow)&&(Je.receiveShadow=Ne.receiveShadow,vt.setValue(B,"receiveShadow",Ne.receiveShadow)),(Ce.isMeshStandardMaterial||Ce.isMeshLambertMaterial||Ce.isMeshPhongMaterial)&&Ce.envMap===null&&Lt.environment!==null&&(Di.envMapIntensity.value=Lt.environmentIntensity),Di.dfgLUT!==void 0&&(Di.dfgLUT.value=(Dn===null&&(Dn=new Qr(Xv,16,16,sa,Ln),Dn.name="DFG_LUT",Dn.minFilter=ci,Dn.magFilter=ci,Dn.wrapS=Er,Dn.wrapT=Er,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn)),_n&&(vt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&(ni=Br,(Xt=Di).ambientLightColor.needsUpdate=ni,Xt.lightProbe.needsUpdate=ni,Xt.directionalLights.needsUpdate=ni,Xt.directionalLightShadows.needsUpdate=ni,Xt.pointLights.needsUpdate=ni,Xt.pointLightShadows.needsUpdate=ni,Xt.spotLights.needsUpdate=ni,Xt.spotLightShadows.needsUpdate=ni,Xt.rectAreaLights.needsUpdate=ni,Xt.hemisphereLights.needsUpdate=ni),yi&&Ce.fog===!0&&je.refreshFogUniforms(Di,yi),je.refreshMaterialUniforms(Di,Ce,re,_e,b.state.transmissionRenderTarget[Ze.id]),la.upload(B,Ma(Je),Di,fe));var Xt,ni;if(Ce.isShaderMaterial&&Ce.uniformsNeedUpdate===!0&&(la.upload(B,Ma(Je),Di,fe),Ce.uniformsNeedUpdate=!1),Ce.isSpriteMaterial&&vt.setValue(B,"center",Ne.center),vt.setValue(B,"modelViewMatrix",Ne.modelViewMatrix),vt.setValue(B,"normalMatrix",Ne.normalMatrix),vt.setValue(B,"modelMatrix",Ne.matrixWorld),Ce.isShaderMaterial||Ce.isRawShaderMaterial){let di=Ce.uniformsGroups;for(let zn=0,$t=di.length;zn<$t;zn++){let Mn=di[zn];Li.update(Mn,Yi),Li.bind(Mn,Yi)}}return Yi})(A,Y,Q,ie,ee);oe.setMaterial(ie,Ee);let ye=Q.index,ke=1;if(ie.wireframe===!0){if(ye=lt.getWireframeAttribute(Q),ye===void 0)return;ke=2}let ct=Q.drawRange,We=Q.attributes.position,Pe=ct.start*ke,Ye=(ct.start+ct.count)*ke;me!==null&&(Pe=Math.max(Pe,me.start*ke),Ye=Math.min(Ye,(me.start+me.count)*ke)),ye!==null?(Pe=Math.max(Pe,0),Ye=Math.min(Ye,ye.count)):We!=null&&(Pe=Math.max(Pe,0),Ye=Math.min(Ye,We.count));let tt=Ye-Pe;if(tt<0||tt===1/0)return;let At;Pt.setup(ee,ie,Ie,Q,ye);let dt=fn;if(ye!==null&&(At=Qe.get(ye),dt=oi,dt.setIndex(At)),ee.isMesh)ie.wireframe===!0?(oe.setLineWidth(ie.wireframeLinewidth*$()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if(ee.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),oe.setLineWidth(Ze*$()),ee.isLineSegments?dt.setMode(B.LINES):ee.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else ee.isPoints?dt.setMode(B.POINTS):ee.isSprite&&dt.setMode(B.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Ze=ee._multiDrawStarts,Lt=ee._multiDrawCounts,Xe=ee._multiDrawCount,Ce=ye?Qe.get(ye).bytesPerElement:1,Ne=ne.get(ie).currentProgram.getUniforms();for(let yi=0;yi<Xe;yi++)Ne.setValue(B,"_gl_DrawID",yi),dt.render(Ze[yi]/Ce,Lt[yi])}else if(ee.isInstancedMesh)dt.renderInstances(Pe,tt,ee.count);else if(Q.isInstancedBufferGeometry){let Ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Lt=Math.min(Q.instanceCount,Ze);dt.renderInstances(Pe,tt,Lt)}else dt.render(Pe,tt)},this.compile=function(A,Y,Q=null){Q===null&&(Q=A),b=qt.get(Q),b.init(Y),U.push(b),Q.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),A!==Q&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(b.pushLight(ee),ee.castShadow&&b.pushShadow(ee))}),b.setupLights();let ie=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let me=ee.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){let Ie=me[Ee];ya(Ie,Q,ee),ie.add(Ie)}else ya(me,Q,ee),ie.add(me)}),b=U.pop(),ie},this.compileAsync=function(A,Y,Q=null){let ie=this.compile(A,Y,Q);return new Promise(ee=>{function me(){ie.forEach(function(Ee){ne.get(Ee).currentProgram.isReady()&&ie.delete(Ee)}),ie.size!==0?setTimeout(me,10):ee(A)}q.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let xa=null;function fs(){rn.stop()}function _a(){rn.start()}let rn=new Hm;function Dr(A,Y,Q,ie){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||M.intersectsSprite(A)){ie&&O.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_);let me=et.update(A),Ee=A.material;Ee.visible&&E.push(A,me,Ee,Q,O.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||M.intersectsObject(A))){let me=et.update(A),Ee=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),O.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),O.copy(me.boundingSphere.center)),O.applyMatrix4(A.matrixWorld).applyMatrix4(_)),Array.isArray(Ee)){let Ie=me.groups;for(let ye=0,ke=Ie.length;ye<ke;ye++){let ct=Ie[ye],We=Ee[ct.materialIndex];We&&We.visible&&E.push(A,me,We,Q,O.z,ct)}}else Ee.visible&&E.push(A,me,Ee,Q,O.z,null)}}let ee=A.children;for(let me=0,Ee=ee.length;me<Ee;me++)Dr(ee[me],Y,Q,ie)}function gs(A,Y,Q,ie){let{opaque:ee,transmissive:me,transparent:Ee}=A;b.setupLightsView(Q),N===!0&&be.setGlobalState(P.clippingPlanes,Q),ie&&oe.viewport(Z.copy(ie)),ee.length>0&&rt(ee,Y,Q),me.length>0&&rt(me,Y,Q),Ee.length>0&&rt(Ee,Y,Q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Nr(A,Y,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ie.id]===void 0){let We=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ie.id]=new ki(1,1,{generateMipmaps:!0,type:We?Ln:ji,minFilter:dn,samples:Math.max(4,le.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let ee=b.state.transmissionRenderTarget[ie.id],me=ie.viewport||Z;ee.setSize(me.z*P.transmissionResolutionScale,me.w*P.transmissionResolutionScale);let Ee=P.getRenderTarget(),Ie=P.getActiveCubeFace(),ye=P.getActiveMipmapLevel();P.setRenderTarget(ee),P.getClearColor(xe),Se=P.getClearAlpha(),Se<1&&P.setClearColor(16777215,.5),P.clear(),K&&qe.render(Q);let ke=P.toneMapping;P.toneMapping=un;let ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),b.setupLightsView(ie),N===!0&&be.setGlobalState(P.clippingPlanes,ie),rt(A,Q,ie),fe.updateMultisampleRenderTarget(ee),fe.updateRenderTargetMipmap(ee),q.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Pe=0,Ye=Y.length;Pe<Ye;Pe++){let tt=Y[Pe],{object:At,geometry:dt,material:Ze,group:Lt}=tt;if(Ze.side===wi&&At.layers.test(ie.layers)){let Xe=Ze.side;Ze.side=Ni,Ze.needsUpdate=!0,Ur(At,Q,ie,dt,Ze,Lt),Ze.side=Xe,Ze.needsUpdate=!0,We=!0}}We===!0&&(fe.updateMultisampleRenderTarget(ee),fe.updateRenderTargetMipmap(ee))}P.setRenderTarget(Ee,Ie,ye),P.setClearColor(xe,Se),ct!==void 0&&(ie.viewport=ct),P.toneMapping=ke}function rt(A,Y,Q){let ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,me=A.length;ee<me;ee++){let Ee=A[ee],{object:Ie,geometry:ye,group:ke}=Ee,ct=Ee.material;ct.allowOverride===!0&&ie!==null&&(ct=ie),Ie.layers.test(Q.layers)&&Ur(Ie,Y,Q,ye,ct,ke)}}function Ur(A,Y,Q,ie,ee,me){A.onBeforeRender(P,Y,Q,ie,ee,me),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(P,Y,Q,ie,A,me),ee.transparent===!0&&ee.side===wi&&ee.forceSinglePass===!1?(ee.side=Ni,ee.needsUpdate=!0,P.renderBufferDirect(Q,Y,ie,ee,A,me),ee.side=ea,ee.needsUpdate=!0,P.renderBufferDirect(Q,Y,ie,ee,A,me),ee.side=wi):P.renderBufferDirect(Q,Y,ie,ee,A,me),A.onAfterRender(P,Y,Q,ie,ee,me)}function ii(A,Y,Q){Y.isScene!==!0&&(Y=z);let ie=ne.get(A),ee=b.state.lights,me=b.state.shadowsArray,Ee=ee.state.version,Ie=Te.getParameters(A,ee.state,me,Y,Q),ye=Te.getProgramCacheKey(Ie),ke=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;let ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ue.get(A.envMap||ie.environment,ct),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",va),ke=new Map,ie.programs=ke);let We=ke.get(ye);if(We!==void 0){if(ie.currentProgram===We&&ie.lightsStateVersion===Ee)return Sa(A,Ie),We}else Ie.uniforms=Te.getUniforms(A),A.onBeforeCompile(Ie,P),We=Te.acquireProgram(Ie,ye),ke.set(ye,We),ie.uniforms=Ie.uniforms;let Pe=ie.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Pe.clippingPlanes=be.uniform),Sa(A,Ie),ie.needsLights=(function(Ye){return Ye.isMeshLambertMaterial||Ye.isMeshToonMaterial||Ye.isMeshPhongMaterial||Ye.isMeshStandardMaterial||Ye.isShadowMaterial||Ye.isShaderMaterial&&Ye.lights===!0})(A),ie.lightsStateVersion=Ee,ie.needsLights&&(Pe.ambientLightColor.value=ee.state.ambient,Pe.lightProbe.value=ee.state.probe,Pe.directionalLights.value=ee.state.directional,Pe.directionalLightShadows.value=ee.state.directionalShadow,Pe.spotLights.value=ee.state.spot,Pe.spotLightShadows.value=ee.state.spotShadow,Pe.rectAreaLights.value=ee.state.rectArea,Pe.ltc_1.value=ee.state.rectAreaLTC1,Pe.ltc_2.value=ee.state.rectAreaLTC2,Pe.pointLights.value=ee.state.point,Pe.pointLightShadows.value=ee.state.pointShadow,Pe.hemisphereLights.value=ee.state.hemi,Pe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Pe.spotLightMatrix.value=ee.state.spotLightMatrix,Pe.spotLightMap.value=ee.state.spotLightMap,Pe.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=We,ie.uniformsList=null,We}function Ma(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=la.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Sa(A,Y){let Q=ne.get(A);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}rn.setAnimationLoop(function(A){xa&&xa(A)}),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(A){xa=A,Ot.setAnimationLoop(A),A===null?rn.stop():rn.start()},Ot.addEventListener("sessionstart",fs),Ot.addEventListener("sessionend",_a),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0)return void ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(k===!0)return;let Q=Ot.enabled===!0&&Ot.isPresenting===!0,ie=F!==null&&(j===null||Q)&&F.begin(P,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ot.enabled!==!0||Ot.isPresenting!==!0||F!==null&&F.isCompositing()!==!1||(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(Y),Y=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,Y,j),b=qt.get(A,U.length),b.init(Y),U.push(b),_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),M.setFromProjectionMatrix(_,Jn,Y.reversedDepth),D=this.localClippingEnabled,N=be.init(this.clippingPlanes,D),E=gt.get(A,R.length),E.init(),R.push(E),Ot.enabled===!0&&Ot.isPresenting===!0){let me=P.xr.getDepthSensingMesh();me!==null&&Dr(me,Y,-1/0,P.sortObjects)}Dr(A,Y,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(de,ge),K=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,K&&qe.addToRenderList(E,A),this.info.render.frame++,N===!0&&be.beginShadows();let ee=b.state.shadowsArray;if(He.render(ee,A,Y),N===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&F.hasRenderPass())===!1){let me=E.opaque,Ee=E.transmissive;if(b.setupLights(),Y.isArrayCamera){let Ie=Y.cameras;if(Ee.length>0)for(let ye=0,ke=Ie.length;ye<ke;ye++)Nr(me,Ee,A,Ie[ye]);K&&qe.render(A);for(let ye=0,ke=Ie.length;ye<ke;ye++){let ct=Ie[ye];gs(E,A,ct,ct.viewport)}}else Ee.length>0&&Nr(me,Ee,A,Y),K&&qe.render(A),gs(E,A,Y)}j!==null&&H===0&&(fe.updateMultisampleRenderTarget(j),fe.updateRenderTargetMipmap(j)),ie&&F.end(P),A.isScene===!0&&A.onAfterRender(P,A,Y),Pt.resetDefaultState(),G=-1,X=null,U.pop(),U.length>0?(b=U[U.length-1],N===!0&&be.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),E=R.length>0?R[R.length-1]:null},this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,Y,Q){let ie=ne.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=Y,ne.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:Q,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){let Q=ne.get(A);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};let Fr=B.createFramebuffer();this.setRenderTarget=function(A,Y=0,Q=0){j=A,W=Y,H=Q;let ie=null,ee=!1,me=!1;if(A){let Ee=ne.get(A);if(Ee.__useDefaultFramebuffer!==void 0)return oe.bindFramebuffer(B.FRAMEBUFFER,Ee.__webglFramebuffer),Z.copy(A.viewport),J.copy(A.scissor),te=A.scissorTest,oe.viewport(Z),oe.scissor(J),oe.setScissorTest(te),void(G=-1);if(Ee.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Ee.__hasExternalTextures)fe.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ke=A.depthTexture;if(Ee.__boundDepthTexture!==ke){if(ke!==null&&ne.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);let ye=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ie=Array.isArray(ye[Y])?ye[Y][Q]:ye[Y],ee=!0):ie=A.samples>0&&fe.useMultisampledRTT(A)===!1?ne.get(A).__webglMultisampledFramebuffer:Array.isArray(ye)?ye[Q]:ye,Z.copy(A.viewport),J.copy(A.scissor),te=A.scissorTest}else Z.copy(Le).multiplyScalar(re).floor(),J.copy(Be).multiplyScalar(re).floor(),te=w;if(Q!==0&&(ie=Fr),oe.bindFramebuffer(B.FRAMEBUFFER,ie)&&oe.drawBuffers(A,ie),oe.viewport(Z),oe.scissor(J),oe.setScissorTest(te),ee){let Ee=ne.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee.__webglTexture,Q)}else if(me){let Ee=Y;for(let Ie=0;Ie<A.textures.length;Ie++){let ye=ne.get(A.textures[Ie]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ie,ye.__webglTexture,Q,Ee)}}else if(A!==null&&Q!==0){let Ee=ne.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,Q)}G=-1},this.readRenderTargetPixels=function(A,Y,Q,ie,ee,me,Ee,Ie=0){if(!A||!A.isWebGLRenderTarget)return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(ye=ye[Ee]),ye){oe.bindFramebuffer(B.FRAMEBUFFER,ye);try{let ke=A.textures[Ie],ct=ke.format,We=ke.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ie),!le.textureFormatReadable(ct))return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(We))return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=A.width-ie&&Q>=0&&Q<=A.height-ee&&B.readPixels(Y,Q,ie,ee,bt.convert(ct),bt.convert(We),me)}finally{let ke=j!==null?ne.get(j).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,Y,Q,ie,ee,me,Ee,Ie=0){if(!A||!A.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(ye=ye[Ee]),ye){if(Y>=0&&Y<=A.width-ie&&Q>=0&&Q<=A.height-ee){oe.bindFramebuffer(B.FRAMEBUFFER,ye);let ke=A.textures[Ie],ct=ke.format,We=ke.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ie),!le.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(Y,Q,ie,ee,bt.convert(ct),bt.convert(We),0);let Ye=j!==null?ne.get(j).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,Ye);let tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await um(B,tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.deleteBuffer(Pe),B.deleteSync(tt),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,Q=0){let ie=Math.pow(2,-Q),ee=Math.floor(A.image.width*ie),me=Math.floor(A.image.height*ie),Ee=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;fe.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ee,Ie,ee,me),oe.unbindTexture()};let vn=B.createFramebuffer(),vs=B.createFramebuffer();this.copyTextureToTexture=function(A,Y,Q=null,ie=null,ee=0,me=0){let Ee,Ie,ye,ke,ct,We,Pe,Ye,tt,At=A.isCompressedTexture?A.mipmaps[me]:A.image;if(Q!==null)Ee=Q.max.x-Q.min.x,Ie=Q.max.y-Q.min.y,ye=Q.isBox3?Q.max.z-Q.min.z:1,ke=Q.min.x,ct=Q.min.y,We=Q.isBox3?Q.min.z:0;else{let at=Math.pow(2,-ee);Ee=Math.floor(At.width*at),Ie=Math.floor(At.height*at),ye=A.isDataArrayTexture?At.depth:A.isData3DTexture?Math.floor(At.depth*at):1,ke=0,ct=0,We=0}ie!==null?(Pe=ie.x,Ye=ie.y,tt=ie.z):(Pe=0,Ye=0,tt=0);let dt=bt.convert(Y.format),Ze=bt.convert(Y.type),Lt;Y.isData3DTexture?(fe.setTexture3D(Y,0),Lt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),Lt=B.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),Lt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);let Xe=B.getParameter(B.UNPACK_ROW_LENGTH),Ce=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ne=B.getParameter(B.UNPACK_SKIP_PIXELS),yi=B.getParameter(B.UNPACK_SKIP_ROWS),Or=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,ct),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We);let xi=A.isDataArrayTexture||A.isData3DTexture,Ri=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){let at=ne.get(A),yn=ne.get(Y),Ui=ne.get(at.__renderTarget),cr=ne.get(yn.__renderTarget);oe.bindFramebuffer(B.READ_FRAMEBUFFER,Ui.__webglFramebuffer),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let we=0;we<ye;we++)xi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,ee,We+we),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(Y).__webglTexture,me,tt+we)),B.blitFramebuffer(ke,ct,Ee,Ie,Pe,Ye,Ee,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||ne.has(A)){let at=ne.get(A),yn=ne.get(Y);oe.bindFramebuffer(B.READ_FRAMEBUFFER,vn),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,vs);for(let Ui=0;Ui<ye;Ui++)xi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,at.__webglTexture,ee,We+Ui):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,at.__webglTexture,ee),Ri?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,me,tt+Ui):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,me),ee!==0?B.blitFramebuffer(ke,ct,Ee,Ie,Pe,Ye,Ee,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):Ri?B.copyTexSubImage3D(Lt,me,Pe,Ye,tt+Ui,ke,ct,Ee,Ie):B.copyTexSubImage2D(Lt,me,Pe,Ye,ke,ct,Ee,Ie);oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ri?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Lt,me,Pe,Ye,tt,Ee,Ie,ye,dt,Ze,At.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Lt,me,Pe,Ye,tt,Ee,Ie,ye,dt,At.data):B.texSubImage3D(Lt,me,Pe,Ye,tt,Ee,Ie,ye,dt,Ze,At):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,Pe,Ye,Ee,Ie,dt,Ze,At.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,Pe,Ye,At.width,At.height,dt,At.data):B.texSubImage2D(B.TEXTURE_2D,me,Pe,Ye,Ee,Ie,dt,Ze,At);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ce),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,yi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Or),me===0&&Y.generateMipmaps&&B.generateMipmap(Lt),oe.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),oe.unbindTexture()},this.resetState=function(){W=0,H=0,j=null,oe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var cd=.55,qv="./assets/hero-monkey-chase-v2.png",Yv=new C(0,0,-1),Zv=new C(0,1,0);function Un(n,e,t){return Math.max(e,Math.min(t,n))}function fo(n,e,t,i){return Vu.damp(n,e,t,i)}function Jv(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function Kv(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function Xm(n,e,t){let i=Un((t-n)/(e-n),0,1);return i*i*(3-2*i)}function $v(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],f=c[u+2],m=p-Math.max(d,f),x=Xm(24,92,m)*Xm(72,180,p);if(x<=0)continue;c[u+3]=Math.round(c[u+3]*(1-x));let v=x*.78;c[u+1]=Math.round(p*(1-v)+Math.max(d,f)*v)}o.putImageData(l,0,0);let h=new In(a);return h.colorSpace=wt,h.minFilter=dn,h.magFilter=ci,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function qm(n,e){let t=new pt;t.setAttribute("position",new Gt(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new ut({color:n,transparent:!0,opacity:e,depthWrite:!1,side:wi,blending:ss}),r=new ve(t,i);return r.frustumCulled=!1,r}function Ym(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function Qv(){let n=new Float32Array(24),e=new pt;e.setAttribute("position",new Gt(n,3));let t=new Ws({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new Ya(e,t);return i.frustumCulled=!1,i}function ey(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function Zm(n,e){let t=new ft;t.position.set(n*.27,.14,.055);let i=new ve(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new ve(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new ve(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new ve(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function Jm({scene:n,camera:e,renderer:t,assetUrl:i=qv,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await Kv(i),o=$v(a,t),l=new ft;l.name="playerRig";let c=new ft;c.name="playerAttitude",l.add(c);let h=new ut({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:wi,toneMapped:!0}),u=new ve(new hi(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new Vt(.018,.025,.62,6),jointGeometry:new Jt(.065,8,5),thrusterGeometry:new Vt(.045,.06,.14,7),trailGeometry:new Hi(.06,.48,7,1,!0),metalMaterial:new ui({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new ui({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new ut({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new ut({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:wi,blending:en})},p=Zm(-1,d),f=Zm(1,d);c.add(p,f);let m=qm(12853285,.88),x=qm(9376024,.78);c.add(m,x);let v=Qv();c.add(v);let y=new fi(16757051,r?1.4:2.1,4.5,2);y.position.set(0,-.04,.34),c.add(y),n.add(l);let S={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:cd,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,f],scarves:[m,x],tail:v,engineLight:y,materials:{metal:d.metalMaterial,brass:d.brassMaterial,thruster:d.thrusterMaterial,trail:d.trailMaterial,scarves:[m.material,x.material]},cameraVelocity:new C,cameraTarget:new C,lookTarget:new C,aimForward:Yv.clone(),disposed:!1};return ud(S,r),S}function go(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=Un(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=Un(t.bank??-(t.vx||0)*.08,-.52,.52),a=Un(t.pitch??-(t.vy||0)*.045,-.36,.36),o=Un(-(t.vx||0)*.022,-.18,.18),l=Un(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=fo(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=fo(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=fo(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=fo(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=fo(n.wings[1].rotation.z,-u,12,r),Ym(n.scarves[0],n.time,-1,l),Ym(n.scarves[1],n.time+.17,1,l),ey(n.tail,n.time,s);let d=Un(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((f,m)=>{let x=f.userData.trail,v=.9+Math.sin(n.time*28+m)*.12;x.scale.set(.85+d*.25,.55+d*.7*v,.85+d*.25),x.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function hd(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=Un(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),Jv(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=Un(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(Zv),r.lookAt(n.lookTarget),r.rotateZ(Un(-(t.bank||0)*.12,-.07,.07))}function ud(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}function Mc(n,e={}){if(!n||n.disposed)return;let t=e.airframe||"clockwork-pinions",i=e.outfit||"rescue-scarf",r=n.materials,s={"clockwork-pinions":{metal:8226181,brass:12094010,trail:16747058,scaleX:1,scaleY:1},"howler-rocket-rig":{metal:9128243,brass:14983750,trail:16734756,scaleX:.92,scaleY:1.16},"thunderbird-glider":{metal:4943731,brass:8317139,trail:5564640,scaleX:1.18,scaleY:.96}}[t];r.metal.color.setHex(s.metal),r.brass.color.setHex(s.brass),r.trail.color.setHex(s.trail),n.engineLight.color.setHex(s.trail),n.wings.forEach(o=>o.scale.set(s.scaleX,s.scaleY,1));let a={"rescue-scarf":{left:12853285,right:9376024,tint:16777215},"ace-jacket":{left:14721595,right:10313504,tint:16773592},"midnight-suit":{left:2847348,right:1457992,tint:13230559}}[i];r.scarves[0].color.setHex(a.left),r.scarves[1].color.setHex(a.right),n.hero.material.color.setHex(a.tint)}var iy=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg",null,null,null,null],Wt=-5.32,ny=18,ry=11.5,sy=10.7,ay=7,nn=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8}),Object.freeze({id:"frozen-transit-grid",name:"Frozen Transit Grid",sky:2705232,fog:7902362,road:1581863,sidewalk:8557463,roof:4347483,metal:9413544,marking:14218482,light:7337960,beacon:16766036,facade:[5072748,7440267,3561054],windows:[13172735,7727069,16769953],minHeight:8,maxHeight:23,density:9}),Object.freeze({id:"neon-arcology",name:"Neon Arcology",sky:3157317,fog:5591914,road:1119517,sidewalk:5067616,roof:2370101,metal:6648189,marking:9369040,light:6684618,beacon:16735354,facade:[3294032,4931419,2571075],windows:[7143375,16740246,15918975],minHeight:12,maxHeight:29,density:10}),Object.freeze({id:"desert-fortress",name:"Desert Fortress",sky:7166020,fog:9467485,road:2564637,sidewalk:7695197,roof:5327424,metal:7761764,marking:15781490,light:16765791,beacon:16733248,facade:[6511697,5199699,7693650],windows:[16768899,16745552,12379080],minHeight:6,maxHeight:18,density:8}),Object.freeze({id:"skyshield-command-core",name:"Skyshield Command Core",sky:1186592,fog:3555656,road:593168,sidewalk:5331551,roof:2436401,metal:8293007,marking:15265263,light:16055295,beacon:16725039,facade:[4147534,2503739,5857895],windows:[15924223,16730947,8313071],minHeight:14,maxHeight:34,density:10})]);function da(n,e,t){return Math.max(e,Math.min(t,n))}function $m(n){return da(Math.round(Number(n)||0),0,ay)}function Sc(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function dd(n,e,t=0){let i=Sc(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function pd(n){let e=Sc(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Rt(n,e,t){return e+(t-e)*n()}function Qm(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function oy(n,e,t){let i=Qm(128,256);if(!i){let m=new Ae(n.facade[e]),x=new Uint8Array([m.r*255,m.g*255,m.b*255,255]),v=new Qr(x,1,1);return v.needsUpdate=!0,v}let r=pd(dd(t,e,41)),s=i.getContext("2d"),a=new Ae(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new Ae(16777215),.12),c=n.windows.map(m=>new Ae(m));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let m=0;m<u;m+=1)for(let x=0;x<h;x+=1){let v=x*d,y=m*p;s.fillStyle=`#${l.clone().multiplyScalar(Rt(r,.66,1.08)).getHexString()}`,s.fillRect(v+1,y+1,d-2,p-2);let S=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,E=r()<S?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${E.clone().multiplyScalar(Rt(r,.72,1.08)).getHexString()}`;let b=e===1?3:4,R=e===2?3:2;s.fillRect(v+b,y+R,Math.max(2,d-b*2),Math.max(2,p-R*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let m=0;m<16;m+=1){let x=Math.floor(r()*h)*d,v=Math.floor(r()*u)*p;s.fillRect(x+1,v+1,d-2,p-2)}}let f=new In(i);return f.colorSpace=wt,f.wrapS=Jr,f.wrapT=Jr,f.repeat.set(e===1?1.5:1,e===2?1.5:2),f.needsUpdate=!0,f}function ly(n,e){let t=Qm(1024,320);if(!t)return null;let i=pd(dd(e,813,nn.indexOf(n))),r=t.getContext("2d"),s=new Ae(n.sky),a=new Ae(n.fog).lerp(new Ae(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=Rt(i,18,54),u=Rt(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-Rt(i,12,55),2,Rt(i,12,55)),l+=h+Rt(i,3,13)}let c=new In(t);return c.colorSpace=wt,c.needsUpdate=!0,c}function ua(n){return new ui({roughness:.76,metalness:.24,...n})}function Km(n,e,t,i){let r=new es(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(aa),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function gi(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function ps(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function pa(n,e,t){let i=nn[t],r=pd(dd(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;gi(s.road,0,Wt+.035,0,a*2,.07,o-.08,{color:i.road}),gi(s.sidewalk,-(a+.72),Wt+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),gi(s.sidewalk,a+.72,Wt+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])gi(s.markings,c,Wt+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);ps(s.metalCylinder,u,Wt+1.5,h,.055,2.85,{color:i.metal}),gi(s.metalBox,u-c*.27,Wt+2.83,h,.58,.06,.06,{color:i.metal}),gi(s.lights,u-c*.52,Wt+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density>=9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=Rt(r,t===1?3.4:2.5,t===2?5.8:5.1),p=Rt(r,2.8,4.8),f=a+1.45+u*4.6+Rt(r,0,1.2),m=c*(f+d/2),x=Rt(r,-o*.42,o*.42),v=Rt(r,i.minHeight,i.maxHeight);t===1&&h>1&&(v*=.72),t===3&&r()<.22&&(v*=.58);let y=Math.floor(r()*3),S=da(v*Rt(r,.18,.28),1.2,3.4),E=v-S;s.facade.push({level:t,family:y,x:m,y:Wt+S/2,z:x,sx:d*1.14,sy:S,sz:p*1.12,ry:0});let b=t===2||v>10||r()<.42,R=b?Rt(r,.58,.74):1,U=E*R;s.facade.push({level:t,family:y,x:m,y:Wt+S+U/2,z:x,sx:d,sy:U,sz:p,ry:0});let F=Wt+S+U,P=d,k=p;if(b){let W=E-U;P=d*Rt(r,.58,.78),k=p*Rt(r,.6,.82),s.facade.push({level:t,family:(y+1)%3,x:m,y:F+W/2,z:x,sx:P,sy:W,sz:k,ry:0}),F+=W}if(gi(s.roof,m,F+.11,x,P*.88,.22,k*.86,{color:i.roof}),r()<.78&&gi(s.metalBox,m+Rt(r,-P*.2,P*.2),F+.35,x,P*.24,.5,k*.24,{color:i.metal}),v>11&&r()<.46){let W=Rt(r,1.1,t===2?3.8:2.5);ps(s.metalCylinder,m,F+W/2,x,.055,W,{color:i.metal}),gi(s.lights,m,F+W,x,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){gi(s.metalBox,0,Wt+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])ps(s.metalCylinder,c*(a+.32),Wt+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+Rt(r,0,3));if(e%2===0){let u=Rt(r,7,13);ps(s.metalCylinder,h,Wt+u/2,Rt(r,-3,3),.52,u,{color:6643288}),gi(s.lights,h,Wt+u+.15,0,.22,.22,.22,{color:i.beacon})}else ps(s.metalCylinder,h,Wt+1.15,Rt(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+Rt(r,4.5,10));gi(s.lights,h,Wt+Rt(r,1.2,5),Rt(r,-4,4),Rt(r,.35,.75),Rt(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}if(t===4&&e%3===1){gi(s.metalBox,0,Wt+5.8,0,a*2+3,.32,1.1,{color:i.metal});for(let c of[-1,1])ps(s.metalCylinder,c*(a+.8),Wt+2.9,0,.18,5.8,{color:i.metal})}if(t===5)for(let c of[-1,1])gi(s.lights,c*(a+2.2),Wt+4.8+e%3,0,.16,5.5,.16,{color:e%2?i.light:i.beacon});if(t===6&&e%2===0)for(let c of[-1,1]){let h=c*(a+3.4);gi(s.metalBox,h,Wt+3.2,0,2.4,6.4,2.4,{color:i.metal}),gi(s.lights,h,Wt+6.55,0,.3,.3,.3,{color:i.beacon})}if(t===7){let c=9+e%4*2.2;for(let h of[-1,1]){let u=h*(a+4.8+e%2*2.4);ps(s.metalCylinder,u,Wt+c/2,0,.7,c,{color:i.metal}),gi(s.lights,u,Wt+c,0,.42,.42,.42,{color:i.beacon})}}return s}function cy(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function ma(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(cy(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function hy(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=wt,s.minFilter=dn;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function ef(n,e,t){let i=ly(nn[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,hy(n,e,t,n.backdropTokens[t])}function uy(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=pa(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,ma(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:nn[t.fromLevel],to:nn[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=pa(n,n.blocks[c].serial,t.toLevel));ma(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function dy(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new Ct(1,1,1),s=new Vt(.5,.5,1,8,1,!1),a=new hi(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=nn.map((l,c)=>l.facade.map((h,u)=>{let d=oy(l,u,n.seed);n.generatedTextures.add(d);let p=ua({color:h,map:d,emissiveMap:d,emissive:new Ae(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let f=Km(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(f),n.movingRoot.add(f),f}));let o=(l,c,h,u)=>{n.materials.add(h);let d=Km(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,ua({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,ua({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,ua({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,ua({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,ua({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new ut({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new ut({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new ut({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:wi});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new ve(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),ef(n,n.level,0),n.backdropMaterials[0].opacity=1}function tf(n={}){let e=da(Math.floor(n.blockCount||ny),10,24),t=da(Number(n.blockSpacing)||ry,9,16),i=Math.max(sy,Number(n.corridorHalfWidth)||0),r=$m(n.level),s=new ft;s.name="streamed-city";let a=new ft;a.name="streamed-city-blocks";let o=new ft;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:Sc(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,nn.length):iy.slice(),textureLoader:typeof document>"u"?null:new tr,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new ti,color:new Ae,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};dy(l);for(let h=0;h<e;h+=1)l.blocks.push(pa(l,h,r));ma(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return py(c,h,u)},setLevel(h,u){return my(c,h,u)},setSeed(h,u){return fy(c,h,u)},getEnvironment(){return nf(c)},getStats(){return{...l.stats}},dispose(){gy(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function bc(n){let e=n?._cityState;return!e||e.disposed?null:e}function py(n,e,t={}){let i=bc(n);if(!i)return null;let r=da(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push(pa(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&ma(i),uy(i,r),nf(n)}function my(n,e,t={}){let i=bc(n);if(!i)return!1;let r=$m(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=da(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,ef(i,r,c),s?(i.blocks=i.blocks.map(h=>pa(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,ma(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:nn[r],to:nn[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function fy(n,e,t={}){let i=bc(n);if(!i)return!1;let r=Sc(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push(pa(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,ma(i)}return!0}function nf(n){let e=bc(n);if(!e)return null;if(!e.transition){let o=nn[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=nn[t],a=nn[i];return{level:i,mix:r,sky:new Ae(s.sky).lerp(new Ae(a.sky),r).getHex(),fog:new Ae(s.fog).lerp(new Ae(a.fog),r).getHex(),light:new Ae(s.light).lerp(new Ae(a.light),r).getHex(),theme:a}}function gy(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var vy=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,missileSalvo:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,missileSalvo:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,missileSalvo:1,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,missileSalvo:1,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])}),Object.freeze({id:"crossfire",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:16,intercept:20,missileSortie:44,flankingRun:20}),baseAircraft:3,maxAircraft:7,maxMissiles:4,missileSalvo:2,speedScale:1.3,recovery:Object.freeze([1.65,2.45]),warningLead:Object.freeze([1.2,1.72])}),Object.freeze({id:"tempest",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:13,intercept:18,missileSortie:49,flankingRun:20}),baseAircraft:4,maxAircraft:7,maxMissiles:5,missileSalvo:2,speedScale:1.36,recovery:Object.freeze([1.55,2.25]),warningLead:Object.freeze([1.18,1.62])}),Object.freeze({id:"killbox",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:10,intercept:16,missileSortie:54,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:6,missileSalvo:2,speedScale:1.42,recovery:Object.freeze([1.45,2.05]),warningLead:Object.freeze([1.15,1.55])}),Object.freeze({id:"last-stand",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:8,intercept:14,missileSortie:58,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:7,missileSalvo:3,speedScale:1.48,recovery:Object.freeze([1.4,1.9]),warningLead:Object.freeze([1.15,1.48])})]),vo=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var yy=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),mn=(n,e,t)=>Math.max(e,Math.min(t,n)),fa=(n,e)=>Number.isFinite(n)?n:e;function rf(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function xy(n=7646257){let e=rf(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=rf(i)||1831565813},t}function _y(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>mn(fa(n(),.5),0,.999999999999)}function My(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var De,Ec,Xi,fd,sf,wc,Tc,gd,yo,af,of,lf,cf,Ac,sr,md=class{constructor({seed:e=7646257,rng:t=xy(e),levels:i=vy,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){Xd(this,De);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=_y(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=mn(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=mn(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),Ve(this,De,sr).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&Ve(this,De,gd).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();Ve(this,De,lf).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values(vo).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,Ve(this,De,gd).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};De=new WeakSet,Ec=function(e){let t=this.levels[this.levelIndex],i=mn(this.survivalTime/180,0,.42),r=mn(fa(e.difficulty,0),-.25,.5);return{scalar:mn(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor(fa(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor(fa(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor(fa(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor(fa(e.activeMissiles,0)))}},Xi=function(e,t){return e+(t-e)*this.random()},fd=function(e){return e[Math.floor(this.random()*e.length)]},sf=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||vo.FORMATION},wc=function(e){return this.serial+=1,`${e}-${this.serial}`},Tc=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},gd=function(e,t){let i=this.levels[this.levelIndex],r=Ve(this,De,Ec).call(this,t),s=e||Ve(this,De,sf).call(this,i.weights),a=Ve(this,De,wc).call(this,"encounter"),o=Ve(this,De,of).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,Ve(this,De,sr).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)Ve(this,De,Tc).call(this,l.at,l.kind,l.payload);Ve(this,De,Tc).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},yo=function(e,t,i,r={}){return{entityId:Ve(this,De,wc).call(this,"aircraft"),encounterId:e,typeHint:Ve(this,De,fd).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:Ve(this,De,Xi).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*Ve(this,De,Xi).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:Ve(this,De,Xi).call(this,0,Math.PI*2),amplitude:Ve(this,De,Xi).call(this,.75,1.8),...r}},af=function(e,t,i,r,s,a){let o=Ve(this,De,wc).call(this,"missile"),[l,c]=i.warningLead,h=Ve(this,De,Xi).call(this,l,c)/mn(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:mn(.92+r.scalar*.2,1,1.28),guidanceScale:mn(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},of=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=My([0,1,2],this.random),l=5;if(e===vo.FORMATION){let d=Math.min(a,mn(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=Ve(this,De,fd).call(this,["vee","echelon","stack"]);for(let f=0;f<d;f+=1){let m=o[f%o.length];s.push({at:f*Ve(this,De,Xi).call(this,.42,.7),kind:"aircraftSpawn",payload:Ve(this,De,yo).call(this,t,i,r,{role:p,lane:m,altitude:.2+(p==="stack"?f*1.25:f%2?1.5:0),spawnZ:-82-f*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===vo.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:Ve(this,De,yo).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:Ve(this,De,Xi).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*Ve(this,De,Xi).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===vo.MISSILE_SORTIE){let d=Math.min(a,1+(this.levelIndex>=3?1:0)+(this.levelIndex>=6&&this.random()<.55?1:0)),p=Math.max(0,r.maxMissiles-r.activeMissiles),f=0;for(let m=0;m<d;m+=1){let x=Ve(this,De,yo).call(this,t,i,r,{role:"missile-carrier",lane:o[m],altitude:Ve(this,De,Xi).call(this,1.2,5),spawnZ:-88-m*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:m*1.05,kind:"aircraftSpawn",payload:x});let v=Math.max(1,Math.floor(i.missileSalvo||1));for(let y=0;y<v&&f<p;y+=1)s.push(...Ve(this,De,af).call(this,t,x.entityId,i,r,2.1+m*1.1+y*.78,x.lane===0?"left":x.lane===2?"right":"ahead")),f+=1}l=6.4+d*.8+Math.max(0,(i.missileSalvo||1)-1)*.78}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let f=0;f<d;f+=1){let m=p[f];s.push({at:f<2?f*.18:1.05,kind:"aircraftSpawn",payload:Ve(this,De,yo).call(this,t,i,r,{role:m===0?"left-flanker":"right-flanker",lane:m,altitude:Ve(this,De,Xi).call(this,-.8,4.3),spawnZ:-78-f*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:Ve(this,De,Xi).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,Ve(this,De,Xi).call(this,c,h)/mn(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},lf=function(e,t){if(e.kind==="aircraftSpawn"){let i=Ve(this,De,Ec).call(this,t);if(i.activeAircraft>=i.maxAircraft){Ve(this,De,cf).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,Ve(this,De,sr).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=Ve(this,De,Ec).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),Ve(this,De,Ac).call(this,e,"missile-cap");return}Ve(this,De,sr).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){Ve(this,De,Ac).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,Ve(this,De,sr).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",Ve(this,De,sr).call(this,"recoveryStart",e.payload),Ve(this,De,Tc).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,Ve(this,De,sr).call(this,"recoveryEnd",e.payload))},cf=function(e,t){if(e.retries>=this.maxSpawnRetries){Ve(this,De,Ac).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},Ac=function(e,t){this.stats.actionsSkipped+=1,Ve(this,De,sr).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},sr=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[yy[e]]?.(i)===!1||r===!1)};function hf(n){return new md(n)}var xo=56,Cc=7.05,vd=14.4,Ai=Object.freeze(["./assets/voices/01-skyshield-breach.mp3","./assets/voices/02-earth-loses-sky.mp3","./assets/voices/03-rescue-ace.mp3","./assets/voices/04-direction.mp3","./assets/voices/05-office.mp3","./assets/voices/06-found-you.mp3","./assets/voices/07-first-wings.mp3","./assets/voices/08-invisible-pilot.mp3","./assets/voices/09-recognition.mp3","./assets/voices/10-mission.mp3","./assets/voices/11-open-armory.mp3","./assets/voices/12-why-bananas.mp3","./assets/voices/13-armory-response.mp3","./assets/voices/14-potassium.mp3"]);function Rc(n){let e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}function yd(){let n=new ft,e=new ui({color:5661546,metalness:.82,roughness:.3}),t=new ve(new Vt(.09,.16,1.25,7),e);t.rotation.x=Math.PI/2,n.add(t);let i=new ve(new Ct(1.1,.035,.36),e);i.position.z=.08,n.add(i);let r=new ve(new Ct(.48,.03,.2),e);r.position.z=.48,n.add(r);let s=new fi(16736050,2.4,3);return s.position.z=.7,n.add(s),n}function Sy(n=17){let e=new ft,t=n>>>0,i=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=new ui({color:1319465,emissive:1523526,emissiveIntensity:.44,metalness:.28,roughness:.78});for(let s=0;s<52;s+=1){let a=1.1+i()*5.5,o=new ve(new Ct(.7+i()*1.1,a,.7+i()*1.1),r),l=s%2?-1:1;o.position.set(l*(2.3+i()*7.5),a*.5-1.2,-s*.9+i()*2),e.add(o)}return e.userData.material=r,e}function uf(n){let e=new tr().load(n);e.colorSpace=wt;let t=new ut({map:e,transparent:!0,toneMapped:!1}),i=new ve(new hi(4.35,5.35),t);return i.position.set(0,1.25,-4),i.visible=!1,{mesh:i,texture:e,material:t}}function by(){let n=new ft,e=new ve(new Jt(2.25,24,16),new ut({color:4774096,wireframe:!0,transparent:!0,opacity:.38}));n.add(e);let t=new ut({color:16729661,transparent:!0,opacity:.8});[0,1,2].forEach(s=>{let a=new ve(new Vi(3+s*.18,.018,5,72),t);a.rotation.set(Math.PI*(.18+s*.19),Math.PI*(.1+s*.24),0),n.add(a)});let i=new ut({color:16735304});return[[-1.4,1.2,1.3],[1.6,.65,1.25],[.5,-1.65,1.3],[-1.7,-.7,-1.15],[1.35,1.45,-1.15]].forEach(s=>{let a=new ve(new Jt(.09,8,6),i);a.position.set(...s),n.add(a)}),n.position.set(0,1.25,-5.5),n.userData.shell=e,n}function Ey(){let n=new ft,e=new ut({color:16727350,transparent:!0,opacity:.72}),t=new ve(new Vi(1.65,.075,8,48),e),i=new ve(new Ct(3.5,.14,.08),e);return i.rotation.z=-Math.PI/4,n.add(t,i),n.position.set(0,1.3,-4.4),n.visible=!1,n}function df({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onChoice:s=()=>{},onComplete:a=()=>{},isVoicePlaying:o=()=>!1}={}){if(!n)return null;let l=new Pr({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches,alpha:!1});l.outputColorSpace=wt,l.toneMapping=nr,l.toneMappingExposure=1.05;let c=new Qn;c.background=new Ae(133131),c.fog=new $n(463642,.035);let h=new Zt(52,1,.1,140),u=Sy();c.add(u);let d=by(),p=Ey();c.add(d,p);let f=new ve(new hi(30,120),new ui({color:330253,metalness:.55,roughness:.62}));f.rotation.x=-Math.PI/2,f.position.set(0,-1.2,-34),c.add(f);let m=new ir(7985364,197894,1.5),x=new fi(16729144,0,24,2);x.position.set(-2,4,-12),c.add(m,x);let v=[yd(),yd(),yd()];v.forEach((M,N)=>{M.position.set(-9-N*2.4,3.4+N*.7,-8-N*5),M.scale.setScalar(.78+N*.1),c.add(M)});let y=new ve(new Jt(.55,14,9),new ut({color:16747580,transparent:!0,opacity:0}));y.position.set(-2.4,2.1,-13),c.add(y);let S=uf(e),E=uf(t);c.add(S.mesh,E.mesh);let b=new ve(new hi(5.05,6.05),new ut({color:864052,transparent:!0,opacity:.72}));b.position.set(0,1.25,-4.18),b.visible=!1,c.add(b);let R=new Cr([new C(0,2.4,14),new C(.8,1.65,5),new C(-1.5,2.1,-5),new C(1.2,2.8,-13)]),U=new C,F=new Set,P=!1,k=!1,W=!1,H=!1,j=0,G=0,X=0,Z=-1;function J(M,N){let D=performance.now()+M,_=()=>{if(!P)return;if(performance.now()>=D&&!o()){N();return}let O=setTimeout(_,80);F.add(O)},L=setTimeout(_,Math.min(250,M));F.add(L)}let te=[{at:0,speaker:"Emergency broadcast",text:"At 04:17, Black Flag uploaded a command virus during a global defense drill.",voice:Ai[0],subject:"globe",telemetry:["SKYSHIELD DRILL // ACTIVE","COMMAND VIRUS // UPLOADED"]},{at:Cc,speaker:"Emergency broadcast",text:"Skyshield seized every connected aircraft and turned Earth's defenses against its cities.",voice:Ai[1],subject:"city",telemetry:["IFF DATABASE // REWRITTEN","DEFENSE FLEET // HOSTILE"]},{at:vd,speaker:"Commander Vesper",text:"I know one pilot it never studied. Project Canopy's analog rescue ace.",voice:Ai[2],subject:"vesper",telemetry:["PROJECT CANOPY // OFF-GRID","RESCUE ACE // WINGTAIL"]},{at:21.1,speaker:"Wingtail",text:"You forgot my excellent sense of direction.",voice:Ai[3],subject:"wingtail",telemetry:["CANOPY RESCUES // 47","UNAUTHORIZED LANDINGS // 12"]},{at:24.05,speaker:"Commander Vesper",text:"You landed in my office.",voice:Ai[4],subject:"vesper",telemetry:["VESPER'S OFFICE // REPAIRED","INCIDENT REPORT // SEALED"]},{at:26.28,speaker:"Wingtail",text:"I found you.",voice:Ai[5],subject:"wingtail",telemetry:["FLIGHT LOG // DISPUTED"]},{at:28.12,speaker:"Commander Vesper",text:"I built your wings. You crossed three cyclones and brought forty-seven people home.",voice:Ai[6],subject:"vesper",telemetry:["ANALOG WING RIG // VESPER MK I","CIVILIANS RECOVERED // 47"]},{at:35.23,speaker:"Commander Vesper",text:"No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist.",voice:Ai[7],subject:"wingtail",telemetry:["BIO-SIGNATURE // NO MATCH","FLIGHT SYSTEM // ANALOG","ORDNANCE // UNHACKABLE"]},{at:46.02,speaker:"Wingtail",text:"Finally. Professional recognition.",voice:Ai[8],subject:"wingtail",telemetry:["SKYSHIELD VISIBILITY // ZERO"]},{at:49.13,speaker:"Commander Vesper",text:"Destroy the command relays and give humanity back its sky. Are you in?",voice:Ai[9],subject:"vesper",telemetry:["MISSION // OPERATION BANANA SKY","PRIMARY TARGET // COMMAND RELAYS"]}];function xe(){let M=Math.max(2,n.clientWidth||640),N=Math.max(2,n.clientHeight||420),D=M<=700;l.setPixelRatio(Math.min(devicePixelRatio||1,D?1.15:1.45)),l.setSize(M,N,!1),h.aspect=M/N,h.fov=D&&N>M?62:52,h.updateProjectionMatrix()}function Se(M){d.visible=!1,p.visible=!1,u.visible=!1,f.visible=!1,v.forEach(N=>{N.visible=!1}),b.visible=!0,S.mesh.visible=M==="vesper",E.mesh.visible=M==="wingtail",h.position.set(0,1.35,2.4),h.lookAt(0,1.2,-4)}function Re(M){let N=0;for(let D=0;D<te.length;D+=1)M>=te[D].at&&(N=D);N!==Z&&(Z=N,r({...te[N],progress:M/xo}))}function _e(M){if(Re(M),M<Cc)d.visible=!0,p.visible=!1,u.visible=!1,f.visible=!1,v.forEach(N=>{N.visible=!1}),b.visible=!1,S.mesh.visible=!1,E.mesh.visible=!1,h.position.set(0,1.4,2.4),h.lookAt(0,1.25,-5.5),d.rotation.y=M*(i?.08:.28),d.rotation.x=Math.sin(M*.55)*.08,d.userData.shell.material.color.setHex(M>1.5?16730946:4774096),x.intensity=Rc((M-1.2)/1.3)*4;else if(M<vd){d.visible=!1,u.visible=!0,f.visible=!0,p.visible=!1,b.visible=!1,S.mesh.visible=!1,E.mesh.visible=!1;let N=M-Cc,D=vd-Cc,_=i?Math.floor(N/1.2)/5:Rc(N/D);h.position.copy(R.getPoint(Math.min(.98,_))),U.set(0,1.1,h.position.z-13),h.lookAt(U),v.forEach((z,K)=>{z.visible=!0,z.position.x=-9-K*2.2+N*(4.8+K*.35),z.position.y+=Math.sin(M*2.2+K)*.002});let L=Rc((N-1.2)/3.1);u.userData.material.emissiveIntensity=.44*(1-L)+.035,x.intensity=L*7;let O=Math.max(0,Math.min(1,(N-2.1)/1.8));y.material.opacity=Math.sin(O*Math.PI)*.88,y.scale.setScalar(1+O*6),p.visible=N>=3.1,p.visible&&(p.rotation.z=i?0:Math.sin(M*4)*.025,p.scale.setScalar(.92+Rc((N-3.1)/.5)*.08))}else{let N=te[0];for(let _ of te)M>=_.at&&(N=_);Se(N.subject==="wingtail"?"wingtail":"vesper");let D=1+Math.sin(M*3.4)*.006;(S.mesh.visible?S.mesh:E.mesh).scale.setScalar(i?1:D)}}function re(M){if(P){if(!k&&!W&&!H){let N=Math.min(xo,(M-j)/1e3),D=te[Z+1]?.at??xo;if(Z>=0&&N>=D&&o()){let _=Math.max(0,D-.02);j+=(N-_)*1e3,N=_}_e(N),r({progress:N/xo}),N>=xo&&(W=!0,Se("wingtail"),s())}else if(W||H){let N=S.mesh.visible?S.mesh:E.mesh;i||(N.rotation.z=Math.sin(M*.0017)*.008)}l.render(c,h),X=requestAnimationFrame(re)}}function de(){P||(P=!0,k=!1,W=!1,H=!1,Z=-1,n.hidden=!1,xe(),j=performance.now(),X=requestAnimationFrame(re))}function ge(M){if(!W||H)return;W=!1,H=!0,Se("wingtail"),r({speaker:"Wingtail",text:M==="doubt"?"One question. Why bananas?":"Open the armory. Let's make history nervous.",voice:M==="doubt"?Ai[11]:Ai[10],telemetry:["WINGTAIL // MISSION ACCEPTANCE PENDING"],progress:1}),J(M==="doubt"?3500:4e3,()=>{Se("vesper"),r({speaker:"Commander Vesper",text:M==="doubt"?"Because nobody has ever hacked potassium.":"That's the rescue ace I remember.",voice:M==="doubt"?Ai[13]:Ai[12],telemetry:["OPERATION BANANA SKY // AUTHORIZED"],progress:1}),J(M==="doubt"?4e3:2400,()=>Le(!1))})}function Le(M=!0){P&&(P=!1,cancelAnimationFrame(X),F.forEach(clearTimeout),F.clear(),n.hidden=!0,a({skipped:M}))}function Be(M){!P||W||H||(M&&!k?(k=!0,G=performance.now()):!M&&k&&(j+=performance.now()-G,k=!1))}function w(){P=!1,cancelAnimationFrame(X),F.forEach(clearTimeout),c.traverse(M=>{M.geometry?.dispose?.(),Array.isArray(M.material)?M.material.forEach(N=>N.dispose?.()):M.material?.dispose?.()}),S.texture.dispose(),E.texture.dispose(),l.dispose()}return{start:de,choose:ge,skip:()=>Le(!0),setPaused:Be,resize:xe,dispose:w}}var Ic=8.6,pf=14,Pc=19.7,_o=Object.freeze(["./assets/voices/15-relays-down.mp3","./assets/voices/16-wingtail-victory.mp3","./assets/voices/17-sky-restored.mp3"]);function wy(){let n=new ft,e=new ui({color:1515814,emissive:462866,roughness:.82}),t=new ui({color:4215899,emissive:4836792,emissiveIntensity:0,roughness:.68});for(let i=0;i<48;i+=1){let r=i%2?-1:1,s=1.6+i*47%19*.24,a=new ve(new Ct(1.1+i%3*.28,s,1.4),i%3?e:t);a.position.set(r*(2.7+i%8*1.15),s*.5-2.2,-i*1.45),n.add(a)}return n.userData.litMaterial=t,n}function Ty(){let n=new ft,e=new ui({color:3884877,metalness:.78,roughness:.3}),t=new ut({color:16727606,transparent:!0,opacity:.95}),i=new ve(new Vt(.6,.85,3.8,10),e);n.add(i);let r=new ve(new Jt(.52,16,12),t);n.add(r);let s=[];for(let a=0;a<3;a+=1){let o=new ve(new Vi(1.05+a*.32,.055,8,48),t);o.rotation.set(Math.PI/2+a*.35,a*.48,0),n.add(o),s.push(o)}return n.userData={core:r,rings:s},n}function mf(n){let e=new tr().load(n);e.colorSpace=wt;let t=new ut({map:e,transparent:!0,toneMapped:!1}),i=new ve(new hi(4.1,5.1),t);return i.position.set(0,1.1,-4.4),i.visible=!1,{mesh:i,texture:e,material:t}}function ff({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onComplete:s=()=>{}}={}){if(!n)return null;let a=new Pr({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches});a.outputColorSpace=wt,a.toneMapping=nr,a.toneMappingExposure=1.08;let o=new Qn;o.background=new Ae(198666),o.fog=new $n(464666,.028);let l=new Zt(52,1,.1,140),c=wy(),h=Ty();h.position.set(0,1,-8),o.add(c,h);let u=mf(e),d=mf(t);o.add(u.mesh,d.mesh);let p=new ir(11005674,395530,1.5),f=new fi(16727606,5,22,2);f.position.set(0,2,-7);let m=new rs(16769185,0);m.position.set(-6,8,4),o.add(p,f,m);let x=90,v=new Float32Array(x*3);for(let te=0;te<x;te+=1)v[te*3]=(Math.random()-.5)*2,v[te*3+1]=1+(Math.random()-.5)*2,v[te*3+2]=-8+(Math.random()-.5)*2;let y=new pt;y.setAttribute("position",new Gt(v,3));let S=new er(y,new Rn({color:16762718,size:.11,transparent:!0,opacity:0,blending:en}));o.add(S);let E=[{at:0,speaker:"Commander Vesper",text:"The relays are down. Skyshield is blind, and every stolen aircraft is returning to human control.",voice:_o[0]},{at:Ic,speaker:"Wingtail",text:"Tell humanity the sky is open. And tell them to keep the fruit bowl stocked.",voice:_o[1]},{at:pf,speaker:"Commander Vesper",text:"Operation Banana Sky is complete. Welcome home, Wingtail.",voice:_o[2]}],b=!1,R=!1,U=0,F=0,P=0,k=-1;function W(){let te=Math.max(2,n.clientWidth||640),xe=Math.max(2,n.clientHeight||420);a.setPixelRatio(Math.min(devicePixelRatio||1,te<=700?1.1:1.45)),a.setSize(te,xe,!1),l.aspect=te/xe,l.fov=te<=700&&xe>te?62:52,l.updateProjectionMatrix()}function H(te){let xe=0;for(let Se=0;Se<E.length;Se+=1)te>=E[Se].at&&(xe=Se);if(xe!==k?(k=xe,r({...E[xe],progress:te/Pc})):r({progress:te/Pc}),te<Ic){h.visible=!0,c.visible=!0,u.mesh.visible=!1,d.mesh.visible=!1,l.position.set(0,2.1,5.5-te*.24),l.lookAt(0,1,-8),h.userData.rings.forEach((Re,_e)=>{Re.rotation.z+=.02+_e*.006});let Se=Math.max(0,(te-2.4)/3.5);h.scale.setScalar(1+Math.sin(te*9)*Se*.08),h.userData.core.material.opacity=Math.max(0,1-Se),f.intensity=Math.max(0,5*(1-Se)),S.material.opacity=Math.min(.9,Se*1.4),S.scale.setScalar(1+Se*6)}else te<pf?(h.visible=!1,u.mesh.visible=!1,d.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),c.userData.litMaterial.emissiveIntensity=Math.min(1.7,(te-Ic)*.35),m.intensity=Math.min(3.2,(te-Ic)*.55),d.mesh.scale.setScalar(i?1:1+Math.sin(te*2.8)*.006)):(h.visible=!1,d.mesh.visible=!1,u.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),m.intensity=3.2,c.userData.litMaterial.emissiveIntensity=1.7,u.mesh.scale.setScalar(i?1:1+Math.sin(te*2.4)*.005))}function j(te){if(b){if(!R){let xe=Math.min(Pc,(te-U)/1e3);if(H(xe),xe>=Pc){b=!1,s();return}}a.render(o,l),P=requestAnimationFrame(j)}}function G(){b||(b=!0,R=!1,k=-1,n.hidden=!1,W(),U=performance.now(),P=requestAnimationFrame(j))}function X(){b&&(b=!1,cancelAnimationFrame(P),s())}function Z(te){b&&(te&&!R?(R=!0,F=performance.now()):!te&&R&&(U+=performance.now()-F,R=!1))}function J(){b=!1,cancelAnimationFrame(P),o.traverse(te=>{te.geometry?.dispose?.(),Array.isArray(te.material)?te.material.forEach(xe=>xe.dispose?.()):te.material?.dispose?.()}),u.texture.dispose(),d.texture.dispose(),a.dispose()}return{start:G,skip:X,setPaused:Z,resize:W,dispose:J}}var gf="monkeySeeMonkeyPewProfileV1",Fn={airframe:[{id:"clockwork-pinions",name:"Clockwork Pinions",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Balanced",description:"Reliable brass-and-steel wings with forgiving controls.",benefit:"Balanced baseline flight with predictable lift, turning, and cruising speed.",specs:["Lift 100","Handling 100","Speed 100"],modifiers:{lift:1,handling:1,speed:1,armor:0}},{id:"howler-rocket-rig",name:"Howler Rocket Rig",previewAsset:"./assets/wingtail-howler-rig-v1.webp",cost:60,tag:"High lift",description:"Twin coconut-fuel turbines trade finesse for violent acceleration.",benefit:"28% more lift and 14% more speed, but 12% less turning agility.",specs:["Lift 128","Handling 88","Speed 114"],modifiers:{lift:1.28,handling:.88,speed:1.14,armor:0}},{id:"thunderbird-glider",name:"Thunderbird Glider",previewAsset:"./assets/wingtail-thunderbird-v1.webp",cost:110,tag:"Elite",description:"Wide control surfaces, armored spars, and excellent pursuit speed.",benefit:"21% more agility, 18% more speed, and light protection against missile locks.",specs:["Lift 112","Handling 121","Speed 118"],modifiers:{lift:1.12,handling:1.21,speed:1.18,armor:.12}}],weapon:[{id:"ripe-repeater",name:"Ripe Repeater",previewAsset:"./assets/wingtail-ripe-repeater-v1.webp",cost:0,tag:"Standard",description:"Single ripe bananas with a quick, predictable throwing cycle.",benefit:"Rapid single-banana fire for accurate, sustained attacks.",specs:["Damage 1","Rate 5/sec","Bananas 1"],modifiers:{damage:1,cooldown:.2,projectiles:1,spread:0,velocity:54}},{id:"plantain-piercer",name:"Plantain Piercer",previewAsset:"./assets/wingtail-plantain-piercer-v1.webp",cost:45,tag:"Heavy",description:"Dense green plantains hit twice as hard but need a longer reload.",benefit:"Double damage and higher velocity, with a slightly slower firing cycle.",specs:["Damage 2","Rate 4/sec","Bananas 1"],modifiers:{damage:2,cooldown:.25,projectiles:1,spread:0,velocity:58}},{id:"cluster-bunch",name:"Cluster Bunch",previewAsset:"./assets/wingtail-cluster-bunch-v1.webp",cost:95,tag:"Spread",description:"Throws three smaller bananas in a fighter-clearing fan.",benefit:"Launches three bananas at once to cover a wide area and catch agile fighters.",specs:["Damage 1","Rate 3.6/sec","Bananas 3"],modifiers:{damage:1,cooldown:.28,projectiles:3,spread:.065,velocity:52}}],outfit:[{id:"rescue-scarf",name:"Red Rescue Scarf",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Classic",description:"Bright, aerodynamic, and accepted by absolutely no air force.",benefit:"No stat tradeoffs. Pure heroic scarf energy.",specs:["Coconuts 100%","Shield 0","Lock resist 0%"],modifiers:{income:1,shield:0,lockResistance:0}},{id:"ace-jacket",name:"Coconut Ace Jacket",previewAsset:"./assets/wingtail-ace-jacket-v1.webp",cost:30,tag:"Fortune",description:"Lucky leather pockets recover more coconuts from every takedown.",benefit:"Earn 20% more coconuts and resist missile locks 8% longer.",specs:["Coconuts 120%","Shield 0","Lock resist 8%"],modifiers:{income:1.2,shield:0,lockResistance:.08}},{id:"midnight-suit",name:"Midnight Monkey Suit",previewAsset:"./assets/wingtail-midnight-suit-v1.webp",cost:70,tag:"Defense",description:"Radar-dampening fabric and one emergency coconut armor plate.",benefit:"Start with one impact shield and resist missile locks 22% longer.",specs:["Coconuts 108%","Shield 1","Lock resist 22%"],modifiers:{income:1.08,shield:1,lockResistance:.22}}]},vf=[{id:"flight",name:"Turbo Feathering",tag:"Flight",description:"Increase lift, lane response, and top control authority for this run.",effect:"+10% lift and handling"},{id:"arsenal",name:"Peel Velocity",tag:"Weapons",description:"Tighten the throwing cycle and make every banana hit harder.",effect:"-12% reload, +0.35 damage"},{id:"armor",name:"Coconut Plating",tag:"Defense",description:"Bolt another sacrificial coconut shell around the flight harness.",effect:"+1 impact shield"}],Ay={coconuts:120,owned:{airframe:["clockwork-pinions"],weapon:["ripe-repeater"],outfit:["rescue-scarf"]},equipped:{airframe:"clockwork-pinions",weapon:"ripe-repeater",outfit:"rescue-scarf"}};function yf(){return JSON.parse(JSON.stringify(Ay))}function Ci(n,e){return Fn[n]?.find(t=>t.id===e)||Fn[n]?.[0]||null}function xf(n=globalThis.localStorage){let e=yf();try{let t=JSON.parse(n?.getItem(gf)||"null");if(!t||typeof t!="object")return e;e.coconuts=Math.max(0,Math.floor(Number(t.coconuts)||0));for(let i of Object.keys(Fn)){let r=new Set(Fn[i].map(a=>a.id)),s=Array.isArray(t.owned?.[i])?t.owned[i].filter(a=>r.has(a)):[];e.owned[i]=[...new Set([Fn[i][0].id,...s])],e.equipped[i]=e.owned[i].includes(t.equipped?.[i])?t.equipped[i]:Fn[i][0].id}}catch{return e}return e}function xd(n,e=globalThis.localStorage){try{e?.setItem(gf,JSON.stringify(n))}catch{}return n}function _f(n,e,t,i=globalThis.localStorage){let r=Ci(e,t);if(!r||!n.owned?.[e])return{ok:!1,reason:"Unknown equipment."};let s=n.owned[e].includes(t);return!s&&n.coconuts<r.cost?{ok:!1,reason:"Need "+(r.cost-n.coconuts)+" more coconuts."}:(s||(n.coconuts-=r.cost,n.owned[e].push(t)),n.equipped[e]=t,xd(n,i),{ok:!0,action:s?"equipped":"purchased",item:r})}function Mf(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return n.coconuts+=t,xd(n),t}function _d(n,e=globalThis.localStorage){let t=yf();return n.coconuts=t.coconuts,n.owned=t.owned,n.equipped=t.equipped,xd(n,e),n}function Lc(){return{flight:0,arsenal:0,armor:0}}function Mo(n,e=Lc()){let t=Ci("airframe",n.equipped.airframe).modifiers,i=Ci("weapon",n.equipped.weapon).modifiers,r=Ci("outfit",n.equipped.outfit).modifiers;return{lift:t.lift*(1+e.flight*.1),handling:t.handling*(1+e.flight*.1),speed:t.speed,armor:t.armor,damage:i.damage+e.arsenal*.35,cooldown:i.cooldown*Math.pow(.88,e.arsenal),projectiles:i.projectiles,spread:i.spread,projectileVelocity:i.velocity*(1+e.arsenal*.04),income:r.income,lockResistance:Math.min(.45,r.lockResistance+t.armor*.25),maxShields:r.shield+e.armor}}function Sf(n){let e=Mo(n),t=i=>Math.max(8,Math.min(100,Math.round(i)));return{lift:t(e.lift*72),handling:t(e.handling*72),firepower:t(e.damage*e.projectiles*32),survival:t(18+e.maxShields*35+e.lockResistance*100+e.armor*90)}}var Dc=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),Lr=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35},{kind:"snow",color:13238271,density:.72,speed:2.2,drift:2.8,size:.2,opacity:.42},{kind:"rain",color:7995347,density:.86,speed:29,drift:6.2,size:.24,opacity:.42},{kind:"dust",color:15908722,density:.88,speed:3.2,drift:5.4,size:.25,opacity:.38},{kind:"ash",color:16120831,density:.68,speed:2.5,drift:4.2,size:.18,opacity:.44}]),ar=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),bf=new C(0,0,1),wf=new C(0,0,0),Tf=new Ei,Cy=new Ae(16777215);function Ef(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new In(e);return i.colorSpace=wt,i.needsUpdate=!0,i}function Ry(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function So(n,e,t,i,r){let s=new es(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(aa),s.renderOrder=i.blending===en?30:20;let a=Array.from({length:r},Ry);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,Tf,wf),s.setMatrixAt(o,n.matrix),s.setColorAt(o,Cy);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function Md(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function vi(n,e,t){return e+(t-e)*Md(n)}function ga(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function Iy(n,e){n.x=ga(e,"x"),n.y=ga(e,"y"),n.z=ga(e,"z")}function Py(n,e){n.vx=ga(e,"x"),n.vy=ga(e,"y"),n.vz=ga(e,"z")}function Ly(n,e,t){let i=e??t;i&&i.isColor?bo.copy(i):bo.set(i),n.r=bo.r,n.g=bo.g,n.b=bo.b}var bo=new Ae;function Dy(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function wo(n,e,t,i){let r=Dy(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??vi(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,Iy(r,t.position),Py(r,t.velocity),Ly(r,t.color,i.color),r}function Sd(n,e){let t=Dc[e]||Dc.medium;n.resolvedQuality=e in Dc?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor(ar.weather*t.weatherLimit*(n.reducedMotion?.3:1)),Cf(n,!0)}function Af(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+vi(n,-18,18),n.weatherPositions[r+1]=i.y+vi(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+vi(n,-28,12),n.weatherPhases[e]=vi(n,0,Math.PI*2)}function Cf(n,e){let t=Lr[n.level]||Lr[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)Af(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function Ny(n,e,t){if(!n.weatherCount)return;let i=Lr[n.level]||Lr[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&Af(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function Eo(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,Tf,wf),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle(bf,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors(bf,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function bd(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function Uy(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function Fy(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function Oy(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&Sd(n,t)}function By(n,e){let t=wo(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function zy(n,e){return n.reducedMotion&&Md(n)>.42?null:wo(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:vi(n,-1.8,1.8),color:14276559})}function ky(n,e){return n.reducedMotion&&Md(n)>.6?null:wo(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function Hy(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*Dc[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(vi(n,-1,1),vi(n,-.75,1),vi(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*vi(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=vi(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=vi(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=vi(n,1.2,3.2),n.spawnOptions.gravity=vi(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=wo(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return bd(n,e.impulse??.55*s,vi(n,-.018,.018)),a}function Gy(n,e){if(n.reducedMotion)return null;let t=wo(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return bd(n,e.impulse??.22,e.roll??vi(n,-.01,.01)),t}function Vy(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),bd(n,e.impulse??.85,e.roll??vi(n,-.025,.025)),n.hitFlash}function Rf({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new ft,pools:{},resources:new Set,matrix:new $e,position:new C,direction:new C,scale:new C,quaternion:new Ei,rollQuaternion:new Ei,color:new Ae,hiddenPosition:new C(0,-1e4,0),weatherCenter:new C,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:ar.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new ut({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:en,toneMapped:!1,vertexColors:!0}),l=d=>new ut({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=So(a,"projectileTrail",new Ct(1,1,1),o(.95),ar.projectileTrail),a.pools.missileSmoke=So(a,"missileSmoke",new ns(1,1),l(.42),ar.missileSmoke),a.pools.jetExhaust=So(a,"jetExhaust",new Ct(1,1,1),o(.72),ar.jetExhaust),a.pools.explosion=So(a,"explosion",new ns(1,0),o(.9),ar.explosion),a.pools.nearMiss=So(a,"nearMiss",new Ct(1,1,1),o(.84),ar.nearMiss),a.softTexture=Ef("soft"),a.streakTexture=Ef("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array(ar.weather*3),a.weatherPhases=new Float32Array(ar.weather);let c=new pt;c.setAttribute("position",new Gt(a.weatherPositions,3).setUsage(aa));let h=new Rn({color:Lr[0].color,size:Lr[0].size,map:a.softTexture,transparent:!0,opacity:Lr[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:en});a.weather=new er(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new ut({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:en,toneMapped:!1});return a.hitFlash=new ve(new hi(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),Sd(a,a.resolvedQuality),a}function Ed(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),Oy(n,i),Eo(n,n.pools.projectileTrail,i,"streak"),Eo(n,n.pools.missileSmoke,i,"smoke"),Eo(n,n.pools.jetExhaust,i,"streak"),Eo(n,n.pools.explosion,i,"explosion"),Eo(n,n.pools.nearMiss,i,"streak"),Ny(n,i,t),Uy(n,i),Fy(n,i),n.cameraImpulse}function Ft(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return By(n,t);case"missileSmoke":return zy(n,t);case"jetExhaust":return ky(n,t);case"explosion":return Hy(n,t);case"nearMiss":return Gy(n,t);case"hitFlash":return Vy(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function If(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(Lr.length-1,Math.floor(e))),Cf(n,!0))}function Pf(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;Sd(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("briefingOrder"),s=document.getElementById("startButton"),a=document.getElementById("skipIntroButton"),o=document.getElementById("briefingFallback"),l=document.getElementById("briefingCanvas"),c=document.getElementById("cinematicSlate"),h=document.getElementById("cinematicSpeaker"),u=document.getElementById("cinematicSubtitle"),d=document.getElementById("cinematicProgress"),p=document.getElementById("cinematicTelemetry"),f=document.getElementById("cinematicDialogue"),m=document.getElementById("dialogueSpeaker"),x=document.getElementById("dialogueSubtitle"),v=document.getElementById("dialogueChoices"),y=document.getElementById("briefingIdentity"),S=document.getElementById("briefingChannel"),E=document.getElementById("pauseOverlay"),b=document.getElementById("resumeButton"),R=document.getElementById("restartButton"),U=document.getElementById("pauseButton"),F=document.getElementById("muteButton"),P=document.getElementById("shootButton"),k=document.getElementById("score"),W=document.getElementById("best"),H=document.getElementById("points"),j=document.getElementById("multiplier"),G=document.getElementById("coconutCount"),X=document.getElementById("shieldCount"),Z=document.getElementById("rageHud"),J=document.getElementById("rageActionButton"),te=document.getElementById("rageLabel"),xe=document.getElementById("rageCount"),Se=document.getElementById("rageMeter"),Re=document.getElementById("objectiveHud"),_e=document.getElementById("objectiveLabel"),re=document.getElementById("objectiveMeter"),de=document.getElementById("objectiveCount"),ge=document.getElementById("objectiveStatus"),Le=document.getElementById("objectiveUnit"),Be=document.getElementById("vesperComms"),w=document.getElementById("vesperCommsTitle"),M=document.getElementById("vesperCommsText"),N=document.getElementById("level"),D=document.getElementById("threatBar"),_=document.getElementById("missileWarning"),L=document.getElementById("lockMeter"),O=document.getElementById("missileBearing"),z=document.getElementById("missileDirection"),K=document.getElementById("targetingHud"),$=document.getElementById("targetStatus"),q=document.getElementById("targetRange"),le=document.getElementById("weaponCooldown"),oe=document.getElementById("touchControls"),ce=document.getElementById("steerZone"),ne=document.getElementById("liftButton"),fe=document.getElementById("statusRegion"),Ue=document.getElementById("hangarOverlay"),Qe=document.getElementById("hangarWallet"),lt=document.getElementById("hangarPreview"),et=document.getElementById("hangarPortrait"),Te=document.getElementById("previewState"),je=document.getElementById("previewRig"),gt=document.getElementById("previewWeapon"),qt=document.getElementById("previewOutfit"),be=document.getElementById("loadoutTabs"),He=document.getElementById("loadoutItems"),qe=document.getElementById("hangarStatus"),On=document.getElementById("selectionName"),fn=document.getElementById("selectionBenefit"),oi=document.getElementById("selectionDeltas"),bt=document.getElementById("selectionPrice"),Pt=document.getElementById("selectionBalance"),Li=document.getElementById("loadoutAction"),B=document.getElementById("deployButton"),gn=document.getElementById("difficultyOptions"),or=document.getElementById("difficultyDescription"),Ot={lift:document.getElementById("statLift"),handling:document.getElementById("statHandling"),firepower:document.getElementById("statFirepower"),survival:document.getElementById("statSurvival")},lr=document.getElementById("upgradeOverlay"),To=document.getElementById("upgradeTitle"),ms=document.getElementById("upgradeGrid"),va=document.getElementById("upgradeWallet"),ya=document.getElementById("victoryOverlay"),xa=document.getElementById("victoryCanvas"),fs=document.getElementById("victorySpeaker"),_a=document.getElementById("victoryTitle"),rn=document.getElementById("victorySubtitle"),Dr=document.getElementById("victoryProgress"),gs=document.getElementById("victorySkipButton"),Nr=document.getElementById("victoryContinueButton"),rt=window.GameAudio||{},Ur=1/60,ii=[-6.2,0,6.2],Ma=-3.2,Sa=5.8,Fr=1.4,vn=10,vs=8,A=.34,Y=36,Q=120,ie=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ee="./assets/voices/18-relay-directive.mp3",me=["localhost","127.0.0.1"].includes(location.hostname)&&new URLSearchParams(location.search).has("boss-preview"),Ee=["localhost","127.0.0.1"].includes(location.hostname)&&new URLSearchParams(location.search).has("relay-preview"),Ie=Object.freeze({easy:{name:"Easy",speed:.88,enemyHealth:.82,encounter:-.16,jetBonus:-1,missileBonus:0,missileSpeed:.92,crosswind:.68,startingShields:2,bossHp:55,bossFireInterval:4.8,altitudeTracking:.22,ceilingDelay:6.5,ceilingHunters:1,description:"Slower pursuit, lighter armor, two emergency shields, fewer fighters, and a 55-hit-point final Titan."},hard:{name:"Hard",speed:1.08,enemyHealth:1.18,encounter:.12,jetBonus:0,missileBonus:1,missileSpeed:1.08,crosswind:1,startingShields:1,bossHp:85,bossFireInterval:3.5,altitudeTracking:.58,ceilingDelay:3.2,ceilingHunters:1,description:"Faster airspace, armored fighters, one emergency shield, aggressive missile formations, and an 85-hit-point final Titan."},insanity:{name:"Banana Insanity",speed:1.42,enemyHealth:1.8,encounter:.72,jetBonus:3,missileBonus:5,missileSpeed:1.38,crosswind:1.7,startingShields:0,bossHp:150,bossFireInterval:1.8,altitudeTracking:.9,ceilingDelay:1.35,ceilingHunters:2,description:"Extreme velocity, hunter squadrons, five extra missiles, violent crosswinds, no starting shields, and a 150-hit-point Titan."}}),ye=[{time:0,name:"PATROL",threat:20,maxJets:3,missileCap:1,speed:16,hazard:"Clear airspace"},{time:32,name:"INTERCEPT",threat:46,maxJets:4,missileCap:1,speed:20,hazard:"Industrial turbulence"},{time:72,name:"MISSILE LOCK",threat:74,maxJets:5,missileCap:2,speed:24,crosswind:.7,hazard:"Storm crosswinds"},{time:122,name:"OVERDRIVE",threat:100,maxJets:6,missileCap:3,speed:28.5,crosswind:1.15,hazard:"Ash and blackout conditions"},{time:182,name:"CROSSFIRE",threat:100,maxJets:7,missileCap:4,speed:32,crosswind:1.65,altitudeMin:-3,altitudeMax:5.55,hazard:"Freezing tower wake"},{time:252,name:"TEMPEST",threat:100,maxJets:7,missileCap:5,speed:35.5,crosswind:2.15,altitudeMin:-2.85,altitudeMax:5.35,hazard:"Electrical shear"},{time:332,name:"KILLBOX",threat:100,maxJets:8,missileCap:6,speed:39.5,crosswind:2.75,altitudeMin:-2.65,altitudeMax:5.1,hazard:"Fortress crossfire"},{time:422,name:"LAST STAND",threat:100,maxJets:8,missileCap:7,speed:44,crosswind:3.35,altitudeMin:-2.45,altitudeMax:4.85,hazard:"Command-core kill corridor"}],ke=Object.freeze({1:{type:"pickup",label:"Supply Sweep",unit:"caches",target:3,briefing:"Recover three airborne supply caches before leaving the industrial sector."},3:{type:"jet",label:"Air Superiority",unit:"fighters",target:5,briefing:"Break the strike formation. Destroy five hostile aircraft to open the next corridor."},5:{type:"missile",label:"Missile Screen",unit:"missiles",target:4,briefing:"Shoot down four incoming missiles before the fortress approach."}}),ct={f16:{name:"F-16",color:9411488,accent:4282208,hp:3,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:5,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:4,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:8,speed:.72,agility:.62,score:980,scale:1.18}},We,Pe,Ye,tt=new Audio;tt.preload="auto";let At=!1;tt.addEventListener("ended",()=>{At=!1}),tt.addEventListener("error",()=>{At=!1});let dt=new Audio(ee);dt.preload="auto";let Ze=0;dt.addEventListener("ended",()=>{clearTimeout(Ze),Ze=window.setTimeout(()=>Ro(),1200)});let Lt=[...Ai,..._o].map(g=>{let I=new Audio;return I.preload="auto",I.src=g,I.load(),I}),Xe,Ce,Ne,yi,Or,xi,Ri,at,yn,Ui,cr,we="loading",qi="ready",ba="playing",Dt=0,Kt=0,Je=0,Fi=0,jt=1,Yi=0,xn=0,_n=performance.now(),Br=0,vt=0,Di=1,Bn=0,Xt=7646257,ni=null,di=null,zn=!1,$t="airframe",Mn="hard",Et=Ie[Mn],yt=xf();_d(yt);let zr={...yt.equipped},ys=Lc(),zt=Mo(yt,ys),hr=zt.maxShields,Ao=0,sn=0,_i=0,Ea=0,Co=!1,xs=2.4,wd=0,kr=!1,Hr=0,wa=!1,st=null,Tt=null,_s=0,Ta=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),ue={x:0,y:.7,z:Fr,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:cd},pi=[],Yt=[],Gr=[],ur=[],Sn=[],Zi=new Set,jy=new Ae,an=new C,Td=new C;W.textContent=String(Math.floor(Ta)),G&&(G.textContent=String(yt.coconuts));for(let g of Object.values(Fn).flat())if(g.previewAsset){let I=new Image;I.src=g.previewAsset}function It(g){fe.textContent="",requestAnimationFrame(()=>{fe.textContent=g})}function Ro(){clearTimeout(Ze),Ze=0,Be&&(Be.hidden=!0)}function Lf(){Be&&(clearTimeout(Ze),w&&(w.textContent="Final directive"),M&&(M.textContent="The command relays are exposed. Take them down now. Every city below is counting on you."),Be.hidden=!1,dt.pause(),dt.currentTime=0,dt.muted=!!rt.isMuted?.(),dt.play().catch(()=>{Ze=window.setTimeout(()=>Ro(),9e3)}))}function xt(g,I,T){return Math.max(I,Math.min(T,g))}function dr(g=Dt){return ye[g].speed*Et.speed}function Ad(){return Math.max(2,ye[Dt].maxJets+Et.jetBonus)}function Nc(){return Math.max(1,ye[Dt].missileCap+Et.missileBonus)}function Cd(){if(Et=Ie[Mn]||Ie.hard,gn?.querySelectorAll("[data-difficulty]").forEach(g=>{g.setAttribute("aria-pressed",String(g.dataset.difficulty===Mn))}),or&&(or.textContent=Et.description),B){let g=Ci("airframe",yt.equipped.airframe).name,I=Ci("weapon",yt.equipped.weapon).name;B.textContent=`Deploy \xB7 ${Et.name}`,B.setAttribute("aria-label",`Deploy ${Et.name} mission with ${g} and ${I}`)}}function pr(g,I){g&&(g.hidden=!I,g.inert=!I,g.setAttribute("aria-hidden",String(!I)),g.classList.toggle("is-visible",I))}function Vr(){G&&(G.textContent=String(yt.coconuts)),Qe&&(Qe.textContent=String(yt.coconuts)),va&&(va.textContent=String(yt.coconuts)),X&&(X.textContent=String(hr))}function Uc(){let g={...yt,equipped:{...yt.equipped,...zr}},I=Ci("airframe",g.equipped.airframe),T=Ci("weapon",g.equipped.weapon),V=Ci("outfit",g.equipped.outfit),ae=Ci($t,zr[$t]),he=yt.equipped[$t]===ae.id;lt&&(lt.dataset.airframe=I.id,lt.dataset.weapon=T.id,lt.dataset.outfit=V.id,lt.classList.remove("is-swapping"),lt.offsetWidth,lt.classList.add("is-swapping")),et&&et.getAttribute("src")!==ae.previewAsset&&(et.src=ae.previewAsset),et&&(et.alt="Wingtail previewing "+ae.name+" in the equipment hangar"),Te&&(Te.textContent=he?"Current loadout":"Preview only",Te.dataset.current=String(he));let it={airframe:"Flight rig",weapon:"Banana system",outfit:"Flight clothing"}[$t];je&&(je.textContent=ae.name),gt&&(gt.textContent=it+" preview"),qt&&(qt.textContent=he?"Equipped item":"Store preview");let se=Sf(g);for(let[Ke,Ge]of Object.entries(Ot))Ge&&(Ge.style.width=se[Ke]+"%");Vr()}function Df(g,I=""){if(Math.abs(g)<.005)return"No change";let T=Number.isInteger(g)?g:Math.round(g*10)/10;return(T>0?"+":"")+T+I}function Nf(g,I,T){let V=I.modifiers,ae=T.modifiers;return g==="airframe"?[["Lift",Math.round(V.lift*100),Math.round(ae.lift*100),"%"],["Agility",Math.round(V.handling*100),Math.round(ae.handling*100),"%"],["Speed",Math.round(V.speed*100),Math.round(ae.speed*100),"%"]]:g==="weapon"?[["Damage",V.damage,ae.damage,""],["Fire rate",Math.round(10/V.cooldown)/10,Math.round(10/ae.cooldown)/10,"/sec"],["Payload",V.projectiles,ae.projectiles,"x"]]:[["Coconut yield",Math.round(V.income*100),Math.round(ae.income*100),"%"],["Impact shields",V.shield,ae.shield,""],["Lock resistance",Math.round(V.lockResistance*100),Math.round(ae.lockResistance*100),"%"]]}function Uf(g){if(!oi)return;let I=Ci($t,yt.equipped[$t]),V=Nf($t,I,g).map(([ae,he,it,se])=>{let Ke=document.createElement("span"),Ge=document.createElement("b"),Bt=document.createElement("i"),_t=document.createElement("em"),Qt=it-he;return Ge.textContent=ae,Bt.textContent=he+se+" \u2192 "+it+se,_t.textContent=Df(Qt,se),_t.dataset.direction=Qt>0?"up":Qt<0?"down":"same",Ke.append(Ge,Bt,_t),Ke});oi.replaceChildren(...V)}function Ff(){let g=Ci($t,zr[$t]);if(!g)return;let I=yt.owned[$t].includes(g.id),T=yt.equipped[$t]===g.id,V=yt.coconuts>=g.cost;if(On&&(On.textContent=g.name),fn&&(fn.textContent=g.benefit),Uf(g),bt&&(bt.textContent=I?"Owned":g.cost+" coconuts",bt.dataset.affordable=String(V||I)),Pt&&(Pt.textContent=String(yt.coconuts)),Li&&(Li.disabled=T||!I&&!V,Li.textContent=T?"Equipped":I?"Equip "+g.name:V?"Buy & Equip \xB7 "+g.cost:"Need "+(g.cost-yt.coconuts)+" more"),B){let ae=Ci("airframe",yt.equipped.airframe).name,he=Ci("weapon",yt.equipped.weapon).name;B.textContent=`Deploy \xB7 ${Et.name}`,B.setAttribute("aria-label",`Deploy ${Et.name} mission with ${ae} and ${he}`)}}function Of(g,I){let T=yt.owned[I].includes(g.id),V=yt.equipped[I]===g.id,ae=document.createElement("button");ae.type="button",ae.className="loadout-item",ae.dataset.itemId=g.id,ae.dataset.owned=String(T);let he=zr[I]===g.id;ae.setAttribute("aria-pressed",String(he)),ae.dataset.equipped=String(V);let it=document.createElement("span");it.className="loadout-item__title",it.textContent=g.name;let se=document.createElement("span");se.className="loadout-item__tag",se.textContent=g.tag;let Ke=document.createElement("span");Ke.className="loadout-item__description",Ke.textContent=g.description;let Ge=document.createElement("span");Ge.className="loadout-item__footer";let Bt=document.createElement("span");Bt.className="loadout-item__specs",Bt.textContent=g.specs.join(" \xB7 ");let _t=document.createElement("span");return _t.className="loadout-item__price",_t.textContent=V?"Equipped":T?"Owned":g.cost+" coconuts",Ge.append(Bt,_t),ae.append(it,se,Ke,Ge),ae.addEventListener("click",()=>{zr[I]=g.id,qe.textContent=g.name+" is a preview only. Deploy uses equipped gear until you buy or equip it.",Io(I)}),ae}function Io(g=$t){if(!(!Fn[g]||!He)){$t=g;for(let I of be?.querySelectorAll("[data-category]")||[])I.setAttribute("aria-selected",String(I.dataset.category===g));He.replaceChildren(...Fn[g].map(I=>Of(I,g))),Ff(),Uc(),matchMedia("(max-width: 700px) and (min-height: 501px)").matches&&requestAnimationFrame(()=>{let I=He.querySelector('[aria-pressed="true"]');I&&He.scrollTo({left:I.offsetLeft-(He.clientWidth-I.offsetWidth)/2,behavior:"auto"})})}}function Aa(){we==="loading"||we==="unsupported"||(we="hangar",Bc(!1),pr(lr,!1),pr(Ue,!0),_d(yt),zr={...yt.equipped},P.disabled=!0,U.disabled=!0,qe.textContent=`New sortie budget: ${Q} coconuts. Select gear for this run.`,Cd(),Io($t),be?.querySelector('[aria-selected="true"]')?.focus({preventScroll:!0}),It("Wingtail loadout hangar opened."))}function Bf(){ms&&ms.replaceChildren(...vf.map(g=>{let I=document.createElement("button");I.type="button",I.className="upgrade-choice";let T=document.createElement("small");T.textContent=g.tag+" \xB7 Tier "+(ys[g.id]+1);let V=document.createElement("strong");V.textContent=g.name;let ae=document.createElement("span");ae.textContent=g.description;let he=document.createElement("b");return he.textContent=g.effect,I.append(T,V,ae,he),I.addEventListener("click",()=>kf(g)),I}))}function zf(g){we="upgrading",P.disabled=!0,ne&&(ne.disabled=!0),Zi.delete("TouchLift"),To.textContent="Level "+(g+1)+" field upgrade",Bf(),Vr(),pr(lr,!0),rt.setPaused?.(!0),ms?.querySelector("button")?.focus()}function kf(g){ys[g.id]+=1,zt=Mo(yt,ys),g.id==="armor"&&(hr+=1),pr(lr,!1),we="playing",P.disabled=!1,ne&&(ne.disabled=!1),rt.setPaused?.(!1),_n=performance.now(),Vr(),n.focus({preventScroll:!0}),It(g.name+" installed.")}function mr(g,I){let T=Mf(yt,Math.max(1,Math.round(g*zt.income)));return Ao+=T,Vr(),I&&It(I+". "+T+" coconuts recovered."),T}function Wr(){return Xt=Xt*1664525+1013904223>>>0,Xt/4294967296}function Mt(g,I){return g+(I-g)*Wr()}function Ii(g,I={}){return new ui({color:g,roughness:I.roughness??.58,metalness:I.metalness??.45,emissive:I.emissive||0,emissiveIntensity:I.emissiveIntensity||0})}function kt(g){g&&(Xe.remove(g),g.traverse?.(I=>{I.geometry?.dispose?.(),Array.isArray(I.material)?I.material.forEach(T=>T.dispose?.()):I.material?.dispose?.()}))}function Hf(g){let I=ct[g],T=new ft,V=Ii(I.color,{metalness:.72,roughness:.34}),ae=Ii(I.accent,{metalness:.62,roughness:.42}),he=Ii(1582893,{metalness:.75,roughness:.16}),it=Ii(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),se=new ve(new Vt(.34,.5,4.2,10),V);se.rotation.x=Math.PI/2,T.add(se);let Ke=new ve(new Hi(.34,1.35,10),V);Ke.rotation.x=Math.PI/2,Ke.position.z=2.72,T.add(Ke);let Ge=new ve(new Jt(.38,10,6),he);Ge.scale.set(.75,.55,1.35),Ge.position.set(0,.32,.8),T.add(Ge);let Bt=new ts;Bt.moveTo(0,1.2),Bt.lineTo(2.7,-1.2),Bt.lineTo(.45,-.65),Bt.lineTo(0,-1.1);let _t=new ve(new qs(Bt,{depth:.1,bevelEnabled:!1}),V);_t.rotation.x=-Math.PI/2,_t.rotation.z=Math.PI/2,_t.position.set(-.05,-.03,.3),_t.geometry.center(),T.add(_t);let Qt=new ve(new Ct(2.5,.08,.65),ae);Qt.position.z=-1.55,T.add(Qt);let Ms=new ve(new Ct(.1,.85,.9),ae);Ms.position.set(0,.46,-1.55),T.add(Ms);let ri=new ve(new Vt(.18,.28,.72,8),it);if(ri.rotation.x=Math.PI/2,ri.position.z=-2.38,T.add(ri),g==="fa18"||g==="f22"){let mi=ri.clone();ri.position.x=-.24,mi.position.x=.24,T.add(mi)}if(g==="a10"){let mi=new Vt(.28,.34,1.45,9);[-.82,.82].forEach(Gn=>{let $c=new ve(mi,ae);$c.rotation.x=Math.PI/2,$c.position.set(Gn,.35,-.75),T.add($c)}),_t.scale.x=1.15}return g==="f22"&&(_t.scale.z=1.25),T.scale.setScalar(I.scale),T.userData.engine=ri,T}function Gf(){let g=new ft,I=new ve(new Vt(.09,.13,1.15,8),Ii(13095121,{metalness:.75,roughness:.3}));I.rotation.x=Math.PI/2,g.add(I);let T=new ve(new Hi(.1,.34,8),Ii(14739172));T.rotation.x=-Math.PI/2,T.position.z=-.74,g.add(T);let V=new ve(new Hi(.11,.55,8),new ut({color:16757051,transparent:!0,opacity:.9}));return V.rotation.x=Math.PI/2,V.position.z=.83,g.add(V),g.userData.flame=V,g}function Vf(){let g=new ft,I=Ii(3884877,{metalness:.82,roughness:.28}),T=Ii(6911868,{metalness:.72,roughness:.34}),V=new ut({color:16727861,transparent:!0,opacity:.96}),ae=new ve(new Vt(.72,1.05,4.3,10),I);g.add(ae);for(let Ke of[-1.25,1.25]){let Ge=new ve(new Vt(1.08,1.08,.3,10),T);Ge.position.y=Ke,g.add(Ge)}let he=new ve(new Jt(.58,14,10),V);g.add(he);let it=[];for(let Ke=0;Ke<3;Ke+=1){let Ge=new ve(new Vi(1.2+Ke*.34,.065,7,42),V);Ge.rotation.set(Math.PI/2+Ke*.32,Ke*.52,0),g.add(Ge),it.push(Ge)}let se=new fi(16727861,4.8,12,2);return g.add(se),g.userData={core:he,rings:it,beacon:se},g}function Wf(){let g=new ft,I=Ii(3425098,{metalness:.88,roughness:.24,emissive:663592,emissiveIntensity:.48}),T=Ii(7439242,{metalness:.8,roughness:.3,emissive:1059378,emissiveIntensity:.34}),V=Ii(1054749,{metalness:.72,roughness:.38}),ae=new ut({color:16726831,transparent:!0,opacity:1,toneMapped:!1}),he=new ve(new Ct(5.8,1.35,8.8),I);he.position.z=.4,g.add(he);let it=new ve(new Hi(2.9,5.2,4),T);it.rotation.x=-Math.PI/2,it.rotation.z=Math.PI/4,it.position.z=-6.2,g.add(it);let se=new ve(new Ct(14.5,.35,4.8),T);se.position.z=.6,g.add(se);let Ke=new ve(new Ct(2.2,2.5,2.8),V);Ke.position.set(0,1.75,1.2),g.add(Ke);let Ge=[];for(let ri of[-4.4,-1.65,1.65,4.4]){let mi=new ve(new Vt(.48,.7,2.4,10),V);mi.rotation.x=Math.PI/2,mi.position.set(ri,-.25,4.15),g.add(mi);let Gn=new ve(new Hi(.5,2.3,10),new ut({color:16741432,transparent:!0,opacity:.9}));Gn.rotation.x=Math.PI/2,Gn.position.set(ri,-.25,6.25),g.add(Gn),Ge.push(Gn)}let Bt=new ve(new Ct(3.8,1.8,.34),ae);Bt.position.set(0,.35,4.82),g.add(Bt);let _t=new ve(new Jt(1.32,20,14),ae);_t.position.set(0,.35,5.08),g.add(_t);let Qt=[];for(let ri=0;ri<2;ri+=1){let mi=new ve(new Vi(1.5+ri*.42,.09,8,48),ae);mi.position.copy(_t.position),mi.rotation.set(Math.PI/2+ri*.55,ri*.7,0),g.add(mi),Qt.push(mi)}let Ms=new fi(16726831,8,24,2);Ms.position.copy(_t.position),g.add(Ms);for(let ri of[-6.5,6.5]){let mi=new fi(ri<0?5627903:16734540,5,15,2);mi.position.set(ri,.45,1.5),g.add(mi);let Gn=new ve(new Jt(.18,8,6),new ut({color:ri<0?5627903:16734540,toneMapped:!1}));Gn.position.copy(mi.position),g.add(Gn)}return g.userData={core:_t,coreMaterial:ae,rings:Qt,engines:Ge,beacon:Ms},g}function Rd(g="ripe-repeater",I=!1){let T=new ft,V=g==="plantain-piercer",ae=new Cr([new C(-.44,.16,0),new C(-.24,-.03,0),new C(0,-.11,0),new C(.24,-.03,0),new C(.44,.16,0)]),he=new ve(new Ys(ae,12,.095,7,!1),Ii(V?9424690:16767279,{metalness:.05,roughness:.48,emissive:V?2640648:10182400,emissiveIntensity:.72}));T.add(he);let it=new Jt(.082,7,5),se=Ii(5977365,{metalness:.02,roughness:.86}),Ke=new ve(it,se);Ke.position.set(-.46,.18,0),Ke.scale.set(.72,1.35,.72),Ke.rotation.z=-.62,T.add(Ke);let Ge=Ke.clone();Ge.position.x=.46,Ge.rotation.z=.62,T.add(Ge);let Bt=new fi(V?10479181:16762685,1.5,4);if(T.add(Bt),I){let _t=new ve(new Vt(.11,.16,.75,8),Ii(3688011,{metalness:.72,roughness:.3}));_t.rotation.z=Math.PI/2,_t.position.x=.72,T.add(_t);let Qt=new ve(new Hi(.14,.6,8),new ut({color:16738861,transparent:!0,opacity:.92}));Qt.rotation.z=-Math.PI/2,Qt.position.x=1.28,T.add(Qt),T.userData.flame=Qt}return T.scale.setScalar(g==="cluster-bunch"?.86:V?1.3:1.18),I&&T.scale.multiplyScalar(1.18),T.userData.isBananaProjectile=!0,T.userData.isRageRocket=I,T}function jf(g){let I=new ft;if(g==="banana"){let ae=Rd("ripe-repeater");ae.scale.multiplyScalar(1.28),I.add(ae)}else{let ae=new ve(new Jt(.48,14,10),Ii(9195816,{metalness:.05,roughness:.88,emissive:2888199,emissiveIntensity:.45}));ae.scale.y=.9,I.add(ae);let he=new ut({color:2363659});[[-.13,.14],[.13,.14],[0,-.08]].forEach(([it,se])=>{let Ke=new ve(new Jt(.045,7,5),he);Ke.position.set(it,se,.44),I.add(Ke)})}let T=new ve(new Vi(.72,.035,7,32),new ut({color:g==="banana"?16768853:6482640,transparent:!0,opacity:.78}));T.rotation.x=Math.PI/2,I.add(T);let V=new fi(g==="banana"?16767311:6482640,2.2,6);return I.add(V),I.userData.ring=T,I}function Xf(){let g=new Float32Array(1080);for(let V=0;V<360;V+=1)g[V*3]=Mt(-60,60),g[V*3+1]=Mt(-1,28),g[V*3+2]=Mt(-150,-12);let I=new pt;I.setAttribute("position",new Gt(g,3)),Or=new er(I,new Rn({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),Xe.add(Or),yi=new ft;let T=new ut({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let V=0;V<24;V+=1){let ae=new ve(new Jt(1,8,5),T);ae.scale.set(Mt(4,9),Mt(.7,1.6),Mt(2,5)),ae.position.set(Mt(-28,28),Mt(4,15),Mt(-130,-12)),yi.add(ae)}Xe.add(yi)}function Fc(g){!g||!Xe||(Xe.background.setHex(g.sky),Xe.fog.color.setHex(g.fog),yn?.color.setHex(g.light),cr?.color.setHex(g.light))}function qf(g){return pi.find(I=>I.entityId===g)||null}function Id(){return hf({seed:Xt,callbacks:{onAircraftSpawn(g){return we!=="playing"?!1:(Fd(g),!0)},onMissileWarning(g){if(we!=="playing")return!1;let I=qf(g.sourceEntityId);return I?Xc(I,g):!1},onMissileLaunch(g){let I=Yt.find(T=>T.directorId===g.missileId&&T.state==="locking");return I?(I.pendingLaunch=g,I.timer<=0&&Od(I,g),!0):!1}}})}async function Yf(){try{We=new Pr({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),We.outputColorSpace=wt,We.toneMapping=nr,We.toneMappingExposure=1.12,Xe=new Qn,Xe.background=new Ae(ye[0].sky),Xe.fog=new $n(ye[0].fog,.018),Ce=new Zt(56,1,.1,220),Ce.position.set(0,3.1,13.5),Ce.lookAt(0,1,-26),yn=new ir(12446178,659736,2.25),Xe.add(yn),Ui=new rs(16769187,3.1),Ui.position.set(-8,13,8),Xe.add(Ui),cr=new fi(16762699,4.2,14),cr.position.set(0,3,5),Xe.add(cr),Xf(),Ne=tf({scene:Xe,level:0,seed:Xt,speed:ye[0].speed*.5}),Fc(Ne.getEnvironment()),at=Rf({scene:Xe,camera:Ce,mobile:innerWidth<=700,reducedMotion:ie,quality:"auto",seed:Xt}),xi=await Jm({scene:Xe,camera:Ce,renderer:We,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:ie}),Mc(xi,yt.equipped),go(xi,0,ue,{active:!1,speed:ye[0].speed}),hd(xi,Ur,ue),Ri=Id();try{Pe=df({canvas:l,vesperAsset:o.currentSrc||o.src,wingtailAsset:et.currentSrc||et.src,reducedMotion:ie,onCue:Zf,onChoice:Kf,onComplete:Qf,isVoicePlaying:()=>At})}catch(g){console.warn("Cinematic renderer unavailable; using direct briefing.",g),Pe=null}Oc(),we="ready",s.disabled=!1,s.textContent="Start Transmission",It("3D flight systems ready.")}catch(g){console.error(g),we="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",s.hidden=!0}}function Oc(){if(!We||!Ce)return;let g=n.clientWidth||innerWidth,I=n.clientHeight||innerHeight,T=g<=700;zn=T,We.setPixelRatio(Math.min(devicePixelRatio||1,T?1.5:2)*Di),We.setSize(g,I,!1),Ce.aspect=g/Math.max(1,I),Ce.fov=T&&I>g?65:55,Ce.updateProjectionMatrix(),ud(xi,T),Pe?.resize(),Ye?.resize(),document.body.classList.toggle("touch-controls-ready",T&&matchMedia("(pointer: coarse)").matches),oe?.setAttribute("aria-hidden",String(!(T&&matchMedia("(pointer: coarse)").matches)))}function Bc(g){e.classList.toggle("is-visible",g),e.setAttribute("aria-hidden",String(!g)),n.inert=g}function Zf(g={}){Number.isFinite(g.progress)&&d&&(d.style.width=Math.round(g.progress*100)+"%"),!(!g.speaker&&!g.text)&&(g.speaker&&(h.textContent=g.speaker,m.textContent=g.speaker),g.text&&(u.textContent=g.text,x.textContent=g.text),Array.isArray(g.telemetry)&&p&&(p.replaceChildren(...g.telemetry.map(I=>{let T=document.createElement("span"),[V,ae=""]=I.split(" // ");T.append(document.createTextNode(V));let he=document.createElement("strong");return he.textContent=ae,T.append(he),T})),p.hidden=!1,p.setAttribute("aria-hidden","false")),g.voice&&Pd(g.voice),g.speaker==="Skyshield command"?rt.playMissileLaunch?.():g.speaker==="Evacuation channel"?rt.playImpact?.(!0):g.speaker==="Commander Vesper"&&rt.playLevel?.())}function Pd(g){tt.pause(),tt.currentTime=0,At=!0,tt.src=g,tt.muted=!!rt.isMuted?.(),tt.volume=.92,tt.play().catch(()=>{At=!1})}function Po(){At=!1,tt.pause(),tt.currentTime=0,tt.removeAttribute("src"),tt.load()}function Jf(){if(qi==="ready"){if(!Pe){qi="complete",Aa();return}qi="playing",we="cinematic",rt.init?.(),rt.setPaused?.(!1),Po(),e.dataset.mode="cinematic",t.hidden=!0,i.hidden=!0,r.hidden=!0,o.hidden=!0,c.hidden=!1,p.hidden=!1,f.hidden=!1,v.hidden=!0,s.hidden=!0,a.hidden=!1,y.textContent="Field Transmission",S.textContent="Archive 72H // Live reconstruction",Pe.start(),It("Emergency transmission started. Skip Intro is available.")}}function Kf(){qi="choice",we="dialogue",a.hidden=!0,m.textContent="Wingtail",x.textContent="Vesper is waiting for your answer.",h.textContent="Wingtail",u.textContent="YOUR RESPONSE REQUIRED",v.hidden=!1,v.querySelector("button")?.focus({preventScroll:!0}),It("Choose Wingtail's response.")}function $f(g){qi==="choice"&&(qi="resolving",we="cinematic",v.hidden=!0,Pe.choose(g))}function Qf(){qi!=="complete"&&(qi="complete",localStorage.setItem("monkeySeeMonkeyPewIntroSeen","1"),rt.setPaused?.(!0),Po(),Pe?.dispose(),Pe=null,Lt.splice(0),c.hidden=!0,p.hidden=!0,f.hidden=!0,a.hidden=!0,Aa())}function Ld(){["playing","choice","resolving"].includes(qi)&&Pe?.skip()}function eg(){pi.splice(0).forEach(g=>kt(g.view)),Yt.splice(0).forEach(g=>kt(g.view)),Gr.splice(0).forEach(g=>kt(g.view)),ur.splice(0).forEach(g=>kt(g.view)),Sn.splice(0).forEach(g=>kt(g.view)),st&&kt(st.view),st=null,Kt=0,Je=0,Fi=0,jt=1,Yi=0,xn=0,ys=Lc(),zt=Mo(yt,ys),hr=zt.maxShields+Et.startingShields,Ao=0,sn=0,_i=0,Ea=0,Co=!1,xs=2.4,wd=0,kr=!1,Hr=0,wa=!1,Tt=null,_s=0,dt.pause(),dt.currentTime=0,Ro(),Dt=0,Xt=(Date.now()^7646257)>>>0,Ne?.setSeed(Xt,{regenerate:!0}),Ne?.setLevel(0,{immediate:!0}),Ri?.stop({clearSchedule:!0}),Ri=Id(),Ri.reset({levelIndex:0,delay:.85}),Object.assign(ue,{x:0,y:.7,z:Fr,vy:0,vx:0,lane:1,bank:0,pitch:0}),k.textContent="0",H.textContent="0",j.textContent="1.00\xD7",Mc(xi,yt.equipped),Vr(),_.hidden=!0,L.style.width="0%",K?.classList.remove("is-locked"),$&&($.textContent="Scanning"),q&&(q.hidden=!0),Hc(),kn(),fr(),jc(0,!1)}function tg(){we==="loading"||we==="unsupported"||(eg(),pr(Ue,!1),pr(lr,!1),we="playing",e.dataset.mode="flight",Bc(!1),P.disabled=!1,U.disabled=!1,ne&&(ne.disabled=!1),Ri?.start({levelIndex:0,delay:.85}),(me||Ee)&&(Kt=ye.at(-1).time,jc(ye.length-1,!1),me?Ud():Nd()),rt.init?.(),rt.setPaused?.(!1),rt.startRun?.(0),kn(),n.focus({preventScroll:!0}),It("3D flight started."))}function zc(){we==="playing"&&(ue.vy=Math.min(ue.vy+3.5*Math.sqrt(zt.lift),6.4*zt.lift),ue.pitch=.34,Ft(at,"jetExhaust",{position:{x:ue.x,y:ue.y-.1,z:ue.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),rt.playFlap?.(xt(ue.vy/6,.45,1)))}function kc(g){we==="playing"&&(ue.lane=xt(ue.lane+g,0,ii.length-1))}function Dd(){let g=null,I=1/0;if(st&&st.z<=Fr&&st.z>=-120&&Math.hypot(st.x-ue.x,st.y-ue.y)*.45+Math.abs(st.z)*.008<9.8)return st;for(let T of Sn){if(T.z>Fr||T.z<-115)continue;let V=Math.hypot(T.x-ue.x,T.y-ue.y)*.72+Math.abs(T.z)*.012;V<9.8&&V<I&&(g=T,I=V)}if(g)return g;for(let T of pi){if(T.z>Fr||T.z<-82)continue;let V=T.x-ue.x,ae=T.y-ue.y,he=Math.hypot(V,ae)+Math.abs(T.z)*.018;he<7.4&&he<I&&(g=T,I=he)}return g}function Hc(){let g=_i>0?A:zt.cooldown,I=Math.round(xt(1-xn/g,0,1)*100);le?.style.setProperty("--weapon-charge",String(I)),le?.setAttribute("aria-valuenow",String(I))}function kn(){let g=_i>0,I=!g&&sn>=vn,T=xt(g?_i/vs:sn/vn,0,1);Z?.classList.toggle("is-active",g),Z?.classList.toggle("is-ready",I),Z&&(Z.disabled=!I||we!=="playing",Z.setAttribute("aria-label",g?"Go Bananas active":I?"Activate Go Bananas":"Go Bananas charge")),J&&(J.hidden=!I,J.disabled=!I||we!=="playing"),te&&(te.textContent=g?"Banana Rage":I?"Go Bananas Ready":"Go Bananas"),xe&&(xe.textContent=g?`${_i.toFixed(1)}s`:I?"READY":`${Math.floor(sn)} / ${vn}`),Se?.style.setProperty("width",`${Math.round(T*100)}%`),Se?.parentElement?.setAttribute("aria-valuenow",String(g?Math.ceil(_i):Math.floor(sn))),Se?.parentElement?.setAttribute("aria-valuemax",String(g?vs:vn))}function Gc(){return we!=="playing"||_i>0||sn<vn?!1:(sn=0,_i=vs,Ea=0,Co=!1,Hn("GO BANANAS",750),Ft(at,"hitFlash",{color:16758062,intensity:.7,impulse:.32}),rt.playLevel?.(3),kn(),It("Go Bananas activated. Heavy banana rockets online for eight seconds."),!0)}function Lo(g){if(_i>0)_i=Math.min(vs+2,_i+Number(g||0)*.18);else{let I=sn>=vn;sn=Math.min(vn,sn+Math.max(0,Number(g)||0)),!I&&sn>=vn&&!Co&&(Co=!0,It("Go Bananas is ready."))}kn()}function ig(g){_i<=0||(_i=Math.max(0,_i-g),Ea-=g,Ea<=0&&(xn=0,Vc(!0),Ea=A),_i<=0&&(Z?.classList.remove("is-active"),It("Banana rage depleted.")),kn())}function Vc(g=_i>0){if(we!=="playing"||xn>0)return;xn=g?A:zt.cooldown;let I=Dd(),T=new C(0,0,-1);I&&(an.set(I.x-ue.x,I.y-ue.y,I.z-ue.z).normalize(),T.lerp(an,innerWidth<=700?.82:.68).normalize());let V=yt.equipped.weapon,ae=g?1:zt.projectiles,he=g?0:zt.spread;for(let it=0;it<ae;it+=1){let se=it-(ae-1)/2,Ke=T.clone();Ke.x+=se*he,Ke.y+=Math.abs(se)*he*.16,Ke.normalize();let Ge=Rd(V,g);if(Gr.length>=Y){let _t=Gr.shift();kt(_t?.view)}Ge.position.set(ue.x+se*.16,ue.y,ue.z-.9),Xe.add(Ge);let Bt={x:Ge.position.x,y:Ge.position.y,z:Ge.position.z,previous:Ge.position.clone(),velocity:Ke.multiplyScalar(g?Math.max(72,zt.projectileVelocity*1.25):zt.projectileVelocity),damage:g?Math.max(4,zt.damage*2):zt.damage,life:g?2.5:1.9,rage:g,trailTimer:0,spin:Mt(11,16)*(Wr()>.5?1:-1),tumble:Mt(7,11),view:Ge};Gr.push(Bt),Ft(at,"projectileTrail",{position:Ge.position,velocity:Bt.velocity,life:.14,width:g?.11:V==="cluster-bunch"?.05:.075,length:g?1.8:1.2,color:g?16738866:V==="plantain-piercer"?11070552:16772456})}Hc(),rt.playShot?.()}function fr(){let g=Math.max(0,3-Hr),I=!!Tt||kr||wa;if(Re&&(Re.hidden=!I||we==="victory"||we==="victory-result"),wa&&st){let T=Math.max(0,Math.ceil(st.hp)),V=Math.round((1-T/st.maxHp)*100);_e&&(_e.textContent="Skyshield Titan"),de&&(de.textContent=String(T)),Le&&(Le.textContent=`/ ${st.maxHp} HP`),re?.style.setProperty("width",`${V}%`),re?.parentElement?.setAttribute("aria-label","Skyshield Titan damage"),re?.parentElement?.setAttribute("aria-valuemax","100"),re?.parentElement?.setAttribute("aria-valuenow",String(V))}else if(kr)_e&&(_e.textContent="Relay Hunt"),de&&(de.textContent=String(g)),Le&&(Le.textContent="remaining"),re?.style.setProperty("width",`${Math.round(Hr/3*100)}%`),re?.parentElement?.setAttribute("aria-label","Command relays destroyed"),re?.parentElement?.setAttribute("aria-valuemax","3"),re?.parentElement?.setAttribute("aria-valuenow",String(Hr));else if(Tt){let T=Math.min(Tt.target,Tt.progress);_e&&(_e.textContent=Tt.label),de&&(de.textContent=`${T} / ${Tt.target}`),Le&&(Le.textContent=Tt.unit),re?.style.setProperty("width",`${Math.round(T/Tt.target*100)}%`),re?.parentElement?.setAttribute("aria-label",Tt.label+" progress"),re?.parentElement?.setAttribute("aria-valuemax",String(Tt.target)),re?.parentElement?.setAttribute("aria-valuenow",String(T))}}function ng(g){let I=ke[g];Tt=I?{...I,progress:0,complete:!1,levelIndex:g}:null,Tt?.type==="pickup"&&(xs=Math.min(xs,1.2)),fr()}function Wc(g){!Tt||Tt.complete||Tt.type!==g||(Tt.progress=Math.min(Tt.target,Tt.progress+1),Tt.progress>=Tt.target&&(Tt.complete=!0,mr(15),Hn(`${Tt.label.toUpperCase()} COMPLETE`,1200),It(`${Tt.label} complete. The next city sector is open.`)),fr())}function Nd(){if(kr||!Xe)return;kr=!0,Hr=0;let g=[0,2,1],I=[.1,2.15,-.65];for(let T=0;T<3;T+=1){let V=Vf(),ae={spec:{name:`COMMAND RELAY ${T+1}`},view:V,hp:Math.ceil((8+T*2)*Et.enemyHealth),maxHp:Math.ceil((8+T*2)*Et.enemyHealth),lane:g[T],x:ii[g[T]],y:I[T],z:-72-T*48,phase:T*2.1,radius:1.42};V.position.set(ae.x,ae.y,ae.z),Xe.add(V),Sn.push(ae)}fr(),Lf(),It("Relay Hunt active. Destroy all three command relays to free the stolen fleet.")}function rg(g){let I=Sn[g];I&&(Ft(at,"explosion",{position:I,count:38,scale:1.9,speed:9,color:16733757,impulse:1.05}),Ft(at,"hitFlash",{color:16757051,intensity:.78,impulse:.45}),kt(I.view),Sn.splice(g,1),Hr+=1,mr(20),Lo(3),Hn("COMMAND RELAY DESTROYED",2400),rt.playJetDestroyed?.(xt(I.x/8,-1,1)),fr(),Hr>=3&&Ud())}function Ud(){if(wa||!Xe)return;wa=!0,kr=!1;let g=Wf();st={spec:{name:"SKYSHIELD TITAN"},view:g,hp:Et.bossHp,maxHp:Et.bossHp,x:0,y:2.1,z:-108,phase:0,radius:3.45,fireTimer:2.4},g.position.set(st.x,st.y,st.z),Xe.add(g),fr(),Ft(at,"hitFlash",{color:16726063,intensity:.72,impulse:.5}),rt.playLevel?.(7),It("The relays were only its shield. Skyshield Titan inbound. Destroy the command core.")}function sg(g){if(!st)return;let I=st;if(I.phase+=g,I.z<-55&&(I.z=Math.min(-55,I.z+dr()*.2*g)),I.x=Math.sin(I.phase*.46)*5.1,I.y=1.75+Math.sin(I.phase*.73)*1.25,I.view.position.set(I.x,I.y,I.z),I.view.rotation.z=Math.sin(I.phase*.46)*-.08,I.view.userData.rings.forEach((T,V)=>{T.rotation.z+=g*(.8+V*.35)}),I.view.userData.engines.forEach((T,V)=>{T.scale.y=.82+Math.sin(Kt*22+V)*.18}),I.view.userData.core.scale.setScalar(.9+Math.sin(Kt*5.5)*.12),I.view.userData.beacon.intensity=7+Math.sin(Kt*6)*2,I.fireTimer-=g,I.z>=-72&&I.fireTimer<=0&&Yt.length<Nc()){let T=Xc(I,{missileId:`titan-${Xt}-${Math.floor(Kt*1e3)}`,leadTime:xt(1.25/Et.missileSpeed,.72,1.45),bearingHint:I.x<-1?"left":I.x>1?"right":"ahead"});T&&(T.pendingLaunch={speedScale:Et.missileSpeed,guidanceScale:xt(Et.missileSpeed,.95,1.25),lifetime:Mn==="insanity"?6.6:5.8}),I.fireTimer=Et.bossFireInterval*Mt(.82,1.14)}}function ag(){if(!st)return;let g=st;for(let I=0;I<4;I+=1)Ft(at,"explosion",{position:{x:g.x+Mt(-3.5,3.5),y:g.y+Mt(-1.2,1.2),z:g.z+Mt(-3.5,3.5)},count:34,scale:2.2,speed:10,color:I%2?16760909:16730421,impulse:1.1});kt(g.view),st=null,Hn("SKYSHIELD TITAN DESTROYED",12e3),mr(100),rt.playJetDestroyed?.(0),hg()}function og(g){if(!kr)return;let I=dr()*.43;for(let T=Sn.length-1;T>=0;T-=1){let V=Sn[T];if(V.z+=I*g,V.phase+=g,V.x=ii[V.lane]+Math.sin(V.phase*.82)*.55,V.y+=Math.sin(V.phase*1.13)*g*.12,V.view.position.set(V.x,V.y,V.z),V.view.rotation.y+=g*.34,V.view.userData.rings.forEach((ae,he)=>{ae.rotation.z+=g*(.9+he*.25)}),V.view.userData.core.scale.setScalar(.9+Math.sin(Kt*6+V.phase)*.12),V.view.userData.beacon.intensity=3.8+Math.sin(Kt*7+V.phase)*1.2,Math.abs(V.z-ue.z)<1.6&&Math.hypot(V.x-ue.x,V.y-ue.y)<V.radius+ue.radius){if(!qc("command relay collision",V)){Jc("command relay collision");return}V.z=-112}else V.z>14&&(V.z=-112-T*18,V.lane=(V.lane+1)%ii.length,It(`${V.spec.name} escaped the firing lane and is cycling back.`))}}function lg(g={}){Number.isFinite(g.progress)&&Dr?.style.setProperty("width",`${Math.round(g.progress*100)}%`),g.speaker&&(fs.textContent=g.speaker),g.text&&(rn.textContent=g.text),g.voice&&Pd(g.voice)}function cg(){we="victory-result",Po(),_a.textContent="Humanity has its sky back.",rn.textContent=`All three relays and the Skyshield Titan destroyed. ${Math.floor(Je)} km survived, ${Fi.toLocaleString()} points scored, and ${Ao} coconuts recovered.`,fs.textContent="Mission accomplished",Dr?.style.setProperty("width","100%"),gs.hidden=!0,Nr.hidden=!1,Nr.focus({preventScroll:!0}),It("Operation Banana Sky complete. Humanity is safe.")}function hg(){["victory","victory-result"].includes(we)||(we="victory",Sn.splice(0).forEach(g=>kt(g.view)),st&&kt(st.view),st=null,pi.splice(0).forEach(g=>kt(g.view)),Yt.splice(0).forEach(g=>kt(g.view)),Ri?.stop({clearSchedule:!0}),P.disabled=!0,U.disabled=!0,ne&&(ne.disabled=!0),Zi.clear(),fr(),kn(),mr(75),rt.stopRun?.(),rt.setPaused?.(!1),_a.textContent="The Titan is down.",rn.textContent="Its relays are rubble. Skyshield has lost the stolen fleet.",fs.textContent="Commander Vesper",Dr?.style.setProperty("width","0%"),gs.hidden=!1,Nr.hidden=!0,pr(ya,!0),n.inert=!0,Ye=ff({canvas:xa,vesperAsset:"./assets/commander-vesper-v1.png",wingtailAsset:"./assets/wingtail-hangar-front-v1.png",reducedMotion:ie,onCue:lg,onComplete:cg}),Ye?.start())}function ug(){Po(),Ye?.dispose(),Ye=null,pr(ya,!1),n.inert=!1,Aa()}function dg(){if(ur.length>=5)return;let g=Wr()<.68?"coconut":"banana",I=Math.floor(Wr()*ii.length),T=jf(g),V={type:g,x:ii[I]+Mt(-.45,.45),y:Mt(-1.1,4.8),z:Mt(-88,-72),phase:Mt(0,Math.PI*2),view:T};T.position.set(V.x,V.y,V.z),Xe.add(T),ur.push(V)}function pg(g){let I=ur[g];if(I){if(Ft(at,"explosion",{position:I,count:10,scale:.42,speed:3.8,color:I.type==="banana"?16768853:6482640,impulse:.08}),I.type==="banana"){let T=Math.max(2,zt.maxShields+1);hr=Math.min(T,hr+1),Hn("RESCUE BANANA",250),Lo(2),It("Rescue banana collected. Coconut armor restored.")}else mr(5),Hn("COCONUT CACHE",125),Lo(1),It("Coconut collected. Five coconuts secured.");Vr(),Wc("pickup"),rt.playFlap?.(1.35),kt(I.view),ur.splice(g,1)}}function mg(g){xs-=g,xs<=0&&(dg(),xs=Math.max(3.2,5.2-Dt*.45)+Mt(0,1.2));let I=dr()*1.08;for(let T=ur.length-1;T>=0;T-=1){let V=ur[T];V.z+=I*g,V.phase+=g*2.4,V.view.position.set(V.x,V.y+Math.sin(V.phase)*.16,V.z),V.view.rotation.y+=g*1.9,V.view.rotation.z=Math.sin(V.phase*.7)*.18,V.view.userData.ring&&(V.view.userData.ring.rotation.z+=g*1.6),Math.abs(V.z-ue.z)<1.25&&Math.hypot(V.x-ue.x,V.y-ue.y)<1.35?pg(T):V.z>14&&(kt(V.view),ur.splice(T,1))}}function jc(g,I=!0){if(g===Dt&&Kt>0)return;Dt=g;let T=ye[g];if(N.textContent=`LEVEL ${g+1} / ${ye.length} \xB7 ${T.name}`,D.style.width=`${T.threat}%`,D.style.background=g>=2?"var(--danger)":g===1?"var(--accent)":"var(--signal)",D.parentElement.setAttribute("aria-valuenow",String(T.threat)),Xe&&(Ne?.setLevel(g,{duration:I?3.1:.4,immediate:!I}),I||Fc(Ne?.getEnvironment()),If(at,g)),Ri?.setLevel(g,{clearSchedule:I}),rt.playLevel?.(g),ng(g),I&&g>0&&(mr(12+g*4),zf(g)),I&&g===ye.length-1&&Nd(),I){let V=Tt?` Mission: ${Tt.briefing}`:"";It(`Level ${g+1}: ${T.name}. ${T.hazard}. City sector changed.${V}`)}}function fg(){let g=ye[Dt+1];if(g&&Tt&&!Tt.complete&&Kt>=g.time){Kt=g.time-.01;return}let I=0;for(let T=ye.length-1;T>=0;T-=1)if(Kt>=ye[T].time){I=T;break}I!==Dt&&jc(I)}function gg(){let g=Dt===0?["f16","fa18"]:Dt===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return g[Math.floor(Wr()*g.length)]}function Fd(g={}){let I=ct[g.typeHint]?g.typeHint:gg(),T=ct[I],V=xt(Number.isInteger(g.lane)?g.lane:Math.floor(Wr()*ii.length),0,ii.length-1),ae=Hf(I),he=g.behavior||["intercept","sweep","dive"][Math.floor(Wr()*3)],it=ye[Dt],se=it.altitudeMin??Ma,Ke=it.altitudeMax??Sa,Ge=Number.isFinite(g.altitude)?g.altitude:Mt(-1.6,5.2),Bt=g.trackPlayer===!1?0:Et.altitudeTracking,_t=xt(Ge+(ue.y-Ge)*Bt+Mt(-.3,.3)*Bt,se+.25,Ke-.2),Qt={entityId:g.entityId||`legacy-${Xt}-${pi.length}`,encounterId:g.encounterId||null,role:g.role||"interceptor",typeId:I,spec:T,view:ae,hp:Math.ceil(T.hp*(1+Dt*.12)*Et.enemyHealth),maxHp:Math.ceil(T.hp*(1+Dt*.12)*Et.enemyHealth),lane:V,x:ii[V]+Mt(-.8,.8),y:_t,z:Number.isFinite(g.spawnZ)?g.spawnZ:-82,speed:dr()*T.speed*xt(g.speedScale||1,.78,1.42),phase:Number.isFinite(g.phase)?g.phase:Mt(0,Math.PI*2),amplitude:(Number.isFinite(g.amplitude)?g.amplitude:Mt(.7,2.1))*T.agility,behavior:he,passed:!1,exhaustTimer:Mt(0,.08)};return ae.position.set(Qt.x,Qt.y,Qt.z),Xe.add(ae),pi.push(Qt),Qt}function Xc(g,I={}){let T=ye[Dt];if(!g||Yt.length>=Nc())return!1;let V=Gf();V.visible=!1,Xe.add(V);let ae=xt(I.leadTime||[1.45,1.22,1.02,.84][Dt],.8,3),he={directorId:I.missileId||`missile-${Xt}-${Yt.length}`,bearingHint:I.bearingHint||"ahead",state:"locking",source:g,view:V,x:g.x,y:g.y,z:g.z,timer:ae,lockDuration:ae,speed:19,direction:new C(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return Yt.push(he),_.hidden=!1,rt.playMissileLock?.(he),he}function Od(g,I={}){g.state="active",g.view.visible=!0,g.source=null,g.speed=19*xt((I.speedScale||1)*Et.missileSpeed,.9,1.55),g.guidanceScale=xt(I.guidanceScale||1,.88,1.25),g.life=xt(I.lifetime||5.5,3.5,7),g.direction.set(ue.x-g.x,ue.y-g.y,ue.z-g.z).normalize(),Ft(at,"explosion",{position:g,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),rt.playMissileLaunch?.(g)}function vg(g){let I=ye[Dt];if((Zi.has("Space")||Zi.has("KeyW")||Zi.has("ArrowUp")||Zi.has("TouchLift"))&&(ue.vy+=5.8*zt.lift*g),ue.vy=xt(ue.vy-3.1*g,-3.6,6.4*zt.lift),I.crosswind){let it=Math.sin(Kt*.83+Dt*1.7)+Math.sin(Kt*2.17)*.42;ue.vx+=it*I.crosswind*Et.crosswind*g,ue.vy+=Math.cos(Kt*1.31+Dt)*I.crosswind*Et.crosswind*.12*g}ue.y+=ue.vy*g;let V=I.altitudeMin??Ma,ae=I.altitudeMax??Sa;if((ue.y<V||ue.y>ae)&&(ue.y=xt(ue.y,V,ae),ue.vy*=-.15,vt=Math.max(vt,.08)),ue.y>ae-.55?_s+=g:_s=Math.max(0,_s-g*1.8),_s>=Et.ceilingDelay&&pi.length<Ad()+Et.ceilingHunters){_s=0;let it=null;for(let se=0;se<Et.ceilingHunters;se+=1){let Ke=Fd({typeHint:Dt>=2?"f22":"f16",lane:xt(ue.lane+(se%2?-1:1),0,ii.length-1),altitude:ue.y+Mt(-.22,.18),spawnZ:-54-se*8,speedScale:Mn==="insanity"?1.38:1.2,behavior:"dive",role:"ceiling-hunter"});it||(it=Ke)}it&&Xc(it,{leadTime:Mn==="insanity"?.82:1.12}),It("Altitude hunter squadron inbound. Break away from the ceiling.")}let he=ii[ue.lane];ue.vx+=(he-ue.x)*34*zt.handling*g,ue.vx*=Math.exp(-9*Math.sqrt(zt.handling)*g),ue.x+=ue.vx*g,ue.bank+=(xt(-ue.vx*.08,-.48,.48)-ue.bank)*g*8,ue.pitch+=(xt(-ue.vy*.045,-.34,.34)-ue.pitch)*g*7,go(xi,g,ue,{active:we==="playing",speed:dr(),thrust:.52+xt(Math.abs(ue.vy)/6.4,0,1)*.42})}function qc(g,I){return hr<=0?!1:(hr-=1,Vr(),vt=ie?.05:.2,Ft(at,"explosion",{position:I,count:16,scale:.82,speed:5.5,color:6482640,impulse:.32}),Ft(at,"hitFlash",{color:6482640,intensity:.62,impulse:.32}),It("Coconut shield absorbed "+g+". "+hr+" remaining."),!0)}function yg(g){for(let I=pi.length-1;I>=0;I-=1){let T=pi[I];T.z+=T.speed*g,T.phase+=g*(1.25+T.spec.agility*.55);let V=ii[T.lane];T.behavior==="sweep"?T.x=V+Math.sin(T.phase)*T.amplitude*1.8:T.behavior==="flank"?T.x=V+Math.sin(T.phase*.82)*T.amplitude*2.35:T.x+=(V+Math.sin(T.phase)*T.amplitude-T.x)*g*1.8,T.behavior==="dive"?T.y+=Math.sin(T.phase*.68)*g*2.4:T.y+=Math.cos(T.phase)*g*T.amplitude*(T.behavior==="missile-sortie"?.2:.42),T.view.position.set(T.x,T.y,T.z),T.view.rotation.z=Math.sin(T.phase)*.28*T.spec.agility,T.view.rotation.x=Math.cos(T.phase*.7)*.06,T.view.userData.engine.scale.setScalar(.8+Math.sin(Kt*26+T.phase)*.18),T.exhaustTimer-=g,T.exhaustTimer<=0&&(T.exhaustTimer=zn?.09:.055,Ft(at,"jetExhaust",{position:{x:T.x,y:T.y,z:T.z-2.35*T.spec.scale},velocity:{x:0,y:0,z:-T.speed*.16},color:T.typeId==="a10"?16753487:6674943}));let ae=T.z-ue.z;if(Math.abs(ae)<1.2&&Math.hypot(T.x-ue.x,T.y-ue.y)<ue.radius+.7*T.spec.scale){if(qc(T.spec.name+" collision",T)){Bd(I);continue}Jc(`${T.spec.name} collision`);return}T.z>10&&(Math.hypot(T.x-ue.x,T.y-ue.y)<3.3&&(Hn("CLOSE PASS",120),Ft(at,"nearMiss",{position:T,velocity:{x:0,y:0,z:T.speed},impulse:.14,roll:xt((T.x-ue.x)/8,-1,1)*.008})),kt(T.view),pi.splice(I,1))}}function xg(g,I){if(!g||!O||!z)return;let T=g.x-ue.x,V=g.z-ue.z,ae=Math.atan2(T,-V)*180/Math.PI;O.style.setProperty("--missile-bearing",`${ae.toFixed(1)}deg`);let he="Ahead";Math.abs(ae)>135?he="Behind":ae<-35?he="Left":ae>35&&(he="Right"),z.textContent=I?`${he} \xB7 inbound`:`${he} \xB7 locking`}function _g(g){let I=0,T=null,V=null;for(let it=Yt.length-1;it>=0;it-=1){let se=Yt[it];if(se.state==="locking"){if(!se.source||!pi.includes(se.source)&&se.source!==st){kt(se.view),Yt.splice(it,1);continue}se.x=se.source.x,se.y=se.source.y-.4,se.z=se.source.z+.4,se.timer=Math.max(0,se.timer-g*(1-zt.lockResistance)),(Math.abs(ue.vx)>2.2||Math.abs(ue.vy)>6.2)&&(se.timer=Math.min(se.lockDuration,se.timer+g*.22));let _t=1-se.timer/se.lockDuration;_t>=I&&(I=_t,T=se),se.timer<=0&&se.pendingLaunch&&Od(se,se.pendingLaunch);continue}se.life-=g,an.set(ue.x-se.x,ue.y-se.y,ue.z-se.z).normalize();let Ke=(se.life>3?2.8:1.2)*(se.guidanceScale||1);se.direction.lerp(an,1-Math.exp(-Ke*g)).normalize(),se.speed=Math.min(31,se.speed+7*g),se.x+=se.direction.x*se.speed*g,se.y+=se.direction.y*se.speed*g,se.z+=se.direction.z*se.speed*g,se.view.position.set(se.x,se.y,se.z),se.view.lookAt(se.x-se.direction.x,se.y-se.direction.y,se.z-se.direction.z),se.view.userData.flame.scale.y=.8+Math.sin(Kt*32)*.2,se.smokeTimer-=g,se.smokeTimer<=0&&(se.smokeTimer=zn?.075:.045,Ft(at,"missileSmoke",{position:se,velocity:{x:-se.direction.x*1.8,y:-se.direction.y*1.8,z:-se.direction.z*1.8}}));let Ge=Math.hypot(se.x-ue.x,se.y-ue.y,se.z-ue.z);if(se.closestDistance=Math.min(se.closestDistance,Ge),!se.nearMissShown&&se.closestDistance<3.1&&se.closestDistance>ue.radius+.35&&Ge>se.lastDistance+.16&&(se.nearMissShown=!0,Ft(at,"nearMiss",{position:se,velocity:se.direction,impulse:.26,roll:xt((se.x-ue.x)/8,-1,1)*.014})),se.lastDistance=Ge,(!V||Ge<V.distance)&&(V={missile:se,distance:Ge}),Ge<ue.radius+.4){if(Ft(at,"explosion",{position:se,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),qc("missile strike",se)){kt(se.view),Yt.splice(it,1);continue}Ft(at,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),Jc("missile strike");return}(se.life<=0||se.z>18||Math.abs(se.x)>22||Math.abs(se.y)>16)&&(kt(se.view),Yt.splice(it,1))}let ae=!!V;V&&(T=V.missile);let he=ae?100:Math.round(I*100);_.hidden=!T,L.style.width=`${he}%`,L.setAttribute("aria-valuenow",String(he)),xg(T,ae)}function Do(g,I,T){an.copy(T).sub(I);let V=an.lengthSq();if(!V)return g.distanceTo(I);let ae=xt(Td.copy(g).sub(I).dot(an)/V,0,1);return Td.copy(I).addScaledVector(an,ae).distanceTo(g)}function Mg(g){for(let I=Gr.length-1;I>=0;I-=1){let T=Gr[I];T.previous.set(T.x,T.y,T.z),T.x+=T.velocity.x*g,T.y+=T.velocity.y*g,T.z+=T.velocity.z*g,T.life-=g,T.view.position.set(T.x,T.y,T.z),T.view.rotation.z+=T.spin*g,T.view.rotation.x=Math.sin((1.9-T.life)*T.tumble)*.32,T.view.rotation.y=Math.cos((1.9-T.life)*T.tumble*.74)*.24,T.rage&&T.view.userData.flame&&(T.view.userData.flame.scale.y=.82+Math.sin(performance.now()*.03)*.18),T.trailTimer-=g,T.trailTimer<=0&&(T.trailTimer=T.rage?.09:zn?.06:.035,Ft(at,"projectileTrail",{start:T.previous,end:T.view.position,life:.16,width:T.rage?.105:.055,color:T.rage?16738613:16770443}));let V=!1;for(let ae=Yt.length-1;ae>=0;ae-=1){let he=Yt[ae];if(he.state==="active"&&Do(new C(he.x,he.y,he.z),T.previous,T.view.position)<.62){Ft(at,"explosion",{position:he,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),kt(he.view),Yt.splice(ae,1),Hn("MISSILE DOWN",300),Wc("missile"),V=!0;break}}if(!V&&st&&Do(new C(st.x,st.y,st.z),T.previous,T.view.position)<st.radius){st.hp-=T.damage;let ae=st.hp<=0;Ft(at,"explosion",{position:{x:st.x+Mt(-2.4,2.4),y:st.y+Mt(-.8,.8),z:st.z+Mt(-2.8,2.8)},count:ae?42:9,scale:ae?2.3:.52,speed:ae?10:5,color:ae?16730421:16757572,impulse:ae?1.1:.14}),ae?ag():(st.view.userData.coreMaterial.opacity=xt(st.hp/st.maxHp,.3,1),fr()),V=!0}if(!V)for(let ae=Sn.length-1;ae>=0;ae-=1){let he=Sn[ae];if(Do(new C(he.x,he.y,he.z),T.previous,T.view.position)<he.radius){he.hp-=T.damage,Ft(at,"explosion",{position:he,count:he.hp<=0?30:8,scale:he.hp<=0?1.6:.42,speed:he.hp<=0?8:4.5,color:he.hp<=0?16733757:16761690,impulse:he.hp<=0?.8:.12}),he.view.userData.core.material.opacity=xt(he.hp/he.maxHp,.28,1),he.hp<=0?rg(ae):It(`${he.spec.name} integrity ${Math.max(0,Math.ceil(he.hp/he.maxHp*100))} percent.`),V=!0;break}}if(!V)for(let ae=pi.length-1;ae>=0;ae-=1){let he=pi[ae];if(Do(new C(he.x,he.y,he.z),T.previous,T.view.position)<1.05*he.spec.scale){he.hp-=T.damage,Ft(at,"explosion",{position:he,count:he.hp<=0?20:6,scale:he.hp<=0?1.05:.32,speed:he.hp<=0?7:4,color:he.hp<=0?16738866:16769130,impulse:he.hp<=0?.55:.08}),he.hp<=0?Bd(ae):It(`${he.spec.name} armor ${Math.ceil(he.hp)} of ${he.maxHp}.`),V=!0;break}}(V||T.life<=0||T.z<-110)&&(kt(T.view),Gr.splice(I,1))}}function Bd(g){let I=pi[g];kt(I.view),pi.splice(g,1);for(let T=Yt.length-1;T>=0;T-=1)Yt[T].source===I&&(kt(Yt[T].view),Yt.splice(T,1));mr(Math.max(2,Math.round(I.spec.score/190))),wd+=1,Wc("jet"),Lo(2.5),Hn(`${I.spec.name} DOWN`,I.spec.score),rt.playJetDestroyed?.(xt(I.x/8,-1,1)),vt=ie?.04:.15}function Hn(g,I){Fi+=Math.round(I*jt),jt=xt(jt+.25,1,5),Yi=3.4,H.textContent=String(Fi),j.textContent=`${jt.toFixed(2)}\xD7`,It(`${g}. ${Math.round(I*jt)} points.`)}function zd(){let g=Dd();if(!g||we!=="playing"){K?.classList.remove("is-locked"),$&&($.textContent="Scanning"),q&&(q.hidden=!0),K&&(K.style.left="50%",K.style.top="50%");return}an.set(g.x,g.y,g.z).project(Ce);let I=xt((an.x*.5+.5)*100,10,90),T=xt((-an.y*.5+.5)*100,16,84);if(K?.classList.add("is-locked"),K&&(K.style.left=`${I}%`,K.style.top=`${T}%`),$){let V=g===st?"TITAN":g.spec.name;$.textContent=`${V} \xB7 ${Math.max(0,Math.ceil(g.hp||0))} HP`}q&&(q.hidden=!1,q.textContent=`${Math.max(1,Math.round((ue.z-g.z)*12))} m`)}function Yc(g){let I=dr()*.5*zt.speed;Fc(Ne?.update(g,{speed:I}));for(let V of yi.children)V.position.z+=I*g*.34,V.position.z>18&&(V.position.z-=148);let T=Or.geometry.attributes.position;for(let V=2;V<T.array.length;V+=3)T.array[V]+=I*g*.55,T.array[V]>6&&(T.array[V]-=150);T.needsUpdate=!0}function Zc(g){let I=vt;vt=Math.max(0,vt-g);let T=Ed(at,g,{camera:Ce,playerPosition:ue,cameraPosition:Ce.position});hd(xi,g,ue,{camera:Ce,shake:I,lookAhead:zn?29:32}),T&&(Ce.position.x+=T.x,Ce.position.y+=T.y,Ce.position.z+=T.z,Ce.rotateZ(T.roll))}function Sg(g){if(we!=="playing"){we==="ready"?(ue.y=.65+Math.sin(performance.now()/700)*.18,go(xi,g,ue,{active:!1,speed:ye[0].speed}),Yc(g*.35),Zc(g)):we==="crashing"?(go(xi,g,ue,{active:!1,speed:dr()}),Yc(g*.45),Zc(g)):Ed(at,g,{camera:Ce,playerPosition:ue,cameraPosition:Ce?.position}),zd();return}Kt+=g,Je+=g*(1.25+dr()*.032)*zt.speed,xn=Math.max(0,xn-g),ig(g),Hc(),Yi-=g,Yi<=0&&jt>1&&(jt=Math.max(1,jt-g*.75),j.textContent=`${jt.toFixed(2)}\xD7`),fg(),we==="playing"&&(Ri?.update(g,{activeAircraft:pi.length,activeMissiles:Yt.length,maxAircraft:Ad(),maxMissiles:Nc(),difficulty:Dt*.03+Et.encounter}),vg(g),yg(g),we==="playing"&&(_g(g),we==="playing"&&(og(g),we==="playing"&&(sg(g),we==="playing"&&(mg(g),Mg(g),we==="playing"&&(Yc(g),Zc(g),zd(),k.textContent=String(Math.floor(Je)),rt.update?.(g,{state:we,level:Dt,monkey:ue,jets:pi,missiles:Yt})))))))}function Jc(g){if(we!=="playing")return;we="crashing",dt.pause(),Ro(),kn(),P.disabled=!0,ne&&(ne.disabled=!0),Zi.delete("TouchLift"),Ri?.stop({clearSchedule:!0}),_.hidden=!0,vt=ie?.08:.28,Ft(at,"explosion",{position:ue,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),Ft(at,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),rt.playImpact?.(g),rt.stopRun?.(g);let I=Math.floor(Je);I>=8&&mr(Math.max(1,Math.floor(I/12))),I>Ta&&(Ta=I,W.textContent=String(Ta),localStorage.setItem("monkeyNoFlyBest3D",String(Ta))),window.setTimeout(()=>{we="gameover",e.dataset.mode="result",t.hidden=!1,i.hidden=!1,t.textContent="Flight terminated.",i.textContent=`${g}. You survived ${I} km, scored ${Fi.toLocaleString()} points, and recovered ${Ao} coconuts.`,r&&(r.hidden=!0),s.textContent="Return to Hangar",s.hidden=!1,Bc(!0),It(`Flight terminated by ${g}.`)},ie?120:650)}function Ca(){we==="playing"&&(ba=we,we="paused",kn(),E.hidden=!1,E.inert=!1,E.setAttribute("aria-hidden","false"),P.disabled=!0,ne&&(ne.disabled=!0),Zi.delete("TouchLift"),rt.setPaused?.(!0),b.focus())}function Kc(){we==="paused"&&(we=ba,kn(),E.setAttribute("aria-hidden","true"),E.hidden=!0,E.inert=!0,P.disabled=!1,ne&&(ne.disabled=!1),rt.setPaused?.(!1),_n=performance.now(),n.focus({preventScroll:!0}))}function kd(){let g=rt.isMuted?.()||!1;F.setAttribute("aria-pressed",String(g)),F.setAttribute("aria-label",g?"Unmute sound":"Mute sound"),F.title=g?"Unmute sound":"Mute sound",F.querySelector("span").textContent=g?"\u{1F507}":"\u{1F50A}"}function bg(g){g.target.closest("button")||g.pointerType!=="touch"&&(ni={x:g.clientX,y:g.clientY,time:performance.now()},we==="playing"&&zc())}function Eg(g){if(!ni||we!=="playing"){ni=null;return}let I=g.clientX-ni.x,T=g.clientY-ni.y;Math.abs(I)>42&&Math.abs(I)>Math.abs(T)*1.2&&kc(I>0?1:-1),ni=null}function Hd(g){if(we!=="playing"||g.pointerId!==di)return;let I=ce.getBoundingClientRect(),T=xt((g.clientX-I.left)/Math.max(1,I.width),0,1);ue.lane=xt(Math.round(T*(ii.length-1)),0,ii.length-1)}function wg(g){we==="playing"&&(g.preventDefault(),di=g.pointerId,ce.setPointerCapture?.(g.pointerId),Hd(g))}function Gd(g){g.pointerId===di&&(di=null)}function Tg(g){we==="playing"&&(g.preventDefault(),ne.setPointerCapture?.(g.pointerId),Zi.add("TouchLift"),zc())}function Vd(g){g.preventDefault(),Zi.delete("TouchLift")}s.addEventListener("click",()=>{e.dataset.mode==="result"||qi==="complete"?Aa():Jf()}),a?.addEventListener("click",Ld),v?.addEventListener("click",g=>{let I=g.target.closest("[data-response]");I&&$f(I.dataset.response)}),B?.addEventListener("click",tg),gs?.addEventListener("click",()=>Ye?.skip()),Nr?.addEventListener("click",ug),Li?.addEventListener("click",()=>{let g=Ci($t,zr[$t]);if(!g)return;let I=_f(yt,$t,g.id);qe.textContent=I.ok?I.item.name+(I.action==="purchased"?" purchased and equipped.":" equipped."):I.reason,Mc?.(xi,yt.equipped),Io($t),Uc()}),be?.addEventListener("click",g=>{let I=g.target.closest("[data-category]");I&&Io(I.dataset.category)}),gn?.addEventListener("click",g=>{let I=g.target.closest("[data-difficulty]");!I||!Ie[I.dataset.difficulty]||(Mn=I.dataset.difficulty,Cd(),Uc(),It(`${Et.name} difficulty selected.`))}),U.addEventListener("click",Ca),b.addEventListener("click",Kc),R.addEventListener("click",()=>{Kc(),Aa()}),F.addEventListener("click",()=>{rt.setMuted?.(!rt.isMuted?.()),tt.muted=!!rt.isMuted?.(),dt.muted=!!rt.isMuted?.(),kd()}),P.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),Vc()}),Z?.addEventListener("click",Gc),J?.addEventListener("click",Gc),ce?.addEventListener("pointerdown",wg),ce?.addEventListener("pointermove",Hd),ce?.addEventListener("pointerup",Gd),ce?.addEventListener("pointercancel",Gd),ne?.addEventListener("pointerdown",Tg),ne?.addEventListener("pointerup",Vd),ne?.addEventListener("pointercancel",Vd),n.addEventListener("pointerdown",bg),n.addEventListener("pointerup",Eg),n.addEventListener("pointercancel",()=>{ni=null}),n.addEventListener("webglcontextlost",g=>{g.preventDefault(),we==="playing"&&Ca(),It("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",Oc),window.addEventListener("blur",()=>{we==="playing"&&Ca(),Pe?.setPaused(!0),Ye?.setPaused(!0),tt.pause()}),window.addEventListener("focus",()=>{Pe?.setPaused(!1),Ye?.setPaused(!1),["cinematic","dialogue","victory"].includes(we)&&tt.src&&!tt.ended&&tt.play().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.hidden&&we==="playing"&&Ca(),Pe?.setPaused(document.hidden),Ye?.setPaused(document.hidden),document.hidden?tt.pause():["cinematic","dialogue","victory"].includes(we)&&tt.src&&!tt.ended&&tt.play().catch(()=>{})}),window.addEventListener("keydown",g=>{if((["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(g.code)||we==="playing"&&g.code==="Enter")&&g.preventDefault(),!(g.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(g.code))){if(Zi.add(g.code),we==="victory"&&g.code==="Escape"){g.preventDefault(),Ye?.skip();return}if(["cinematic","dialogue"].includes(we)&&g.code==="Escape"){g.preventDefault(),Ld();return}if(we==="dialogue"&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(g.code)){g.preventDefault();let I=[...v.querySelectorAll("button")],T=Math.max(0,I.indexOf(document.activeElement));I[g.code==="ArrowLeft"||g.code==="KeyA"?Math.max(0,T-1):Math.min(I.length-1,T+1)]?.focus();return}we==="playing"?((g.code==="Space"||g.code==="KeyW"||g.code==="ArrowUp")&&zc(),(g.code==="KeyA"||g.code==="ArrowLeft")&&kc(-1),(g.code==="KeyD"||g.code==="ArrowRight")&&kc(1),(g.code==="Enter"||g.code==="KeyX"||g.code==="KeyF"||g.code==="ShiftLeft")&&Vc(),(g.code==="KeyR"||g.code==="KeyG"||g.code==="KeyB")&&Gc(),(g.code==="Escape"||g.code==="KeyP")&&Ca()):we==="paused"&&(g.code==="Escape"||g.code==="KeyP")&&Kc()}}),window.addEventListener("keyup",g=>Zi.delete(g.code));function Wd(g){let I=Math.min(.1,(g-_n)/1e3);for(_n=g,Bn=I>.026?Bn+1:Math.max(0,Bn-2),Bn>90&&Di>.72&&(Di=Math.max(.72,Di-.12),Bn=0,Pf(at,Di<.84?"low":"medium",{reducedMotion:ie}),Oc()),Br+=I;Br>=Ur;)Sg(Ur),Br-=Ur;We&&Xe&&Ce&&!["paused","victory","victory-result"].includes(we)&&!document.hidden&&We.render(Xe,Ce),requestAnimationFrame(Wd)}n.tabIndex=0,s.disabled=!0,s.textContent="Loading 3D Flight",kd(),Yf(),requestAnimationFrame(Wd)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
