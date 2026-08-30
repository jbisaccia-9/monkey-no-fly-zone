(()=>{var lp=n=>{throw TypeError(n)};var Wg=(n,e,t)=>e.has(n)||lp("Cannot "+t);var cp=(n,e,t)=>e.has(n)?lp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Ke=(n,e,t)=>(Wg(n,e,"access private method"),t);var Vp=0,tu=1,Wp=2;var yo=1,jp=2,la=3,ca=0,ki=1,Ii=2,Bn=0,us=1,sn=2,iu=3,nu=4,Xp=5;var ha=100,qp=101,Yp=102,Zp=103,Jp=104,Kp=200,$p=201,Qp=202,ef=203,tf=204,nf=205,rf=206,sf=207,af=208,of=209,lf=210,cf=211,hf=212,uf=213,df=214,ru=0,su=1,au=2,gc=3,ou=4,lu=5,cu=6,hu=7,pf=0,ff=1,mf=2,Mn=0,uu=1,du=2,pu=3,pr=4,fu=5,mu=6,gu=7;var vu=300,ua=301,ds=302,vc=303,yc=304,xo=306,is=1e3,Dr=1001,Rl=1002,tn=1003,gf=1004;var _o=1005;var fi=1006,xc=1007;var Sn=1008;var Yi=1009,yu=1010,xu=1011,da=1012,_c=1013,fr=1014,an=1015,zn=1016,Mc=1017,Sc=1018,pa=1020,_u=35902,Mu=35899,vf=1021,yf=1022,bn=1023,zr=1026,ps=1027,bc=1028,Ec=1029,fa=1030,Su=1031;var bu=1033,wc=33776,Tc=33777,Ac=33778,Cc=33779,Eu=35840,wu=35841,Tu=35842,Au=35843,Cu=36196,Ru=37492,Iu=37496,Pu=37488,Lu=37489,Du=37490,Nu=37491,Uu=37808,Fu=37809,Ou=37810,Bu=37811,zu=37812,ku=37813,Hu=37814,Gu=37815,Vu=37816,Wu=37817,ju=37818,Xu=37819,qu=37820,Yu=37821,Zu=36492,Ju=36494,Ku=36495,$u=36283,Qu=36284,ed=36285,td=36286;var Ja=2300,Il=2301,Al=2302,Gh=2303,Vh=2400,Wh=2401,jh=2402;var xf=0,_f=1,fs="",Tt="srgb",ns="srgb-linear",Ka="linear",bt="srgb";var ts=7680;var Mf=512,Sf=513,bf=514,Rc=515,Ef=516,wf=517,Ic=518,Tf=519,Xh=35044,ma=35048;var id="300 es",or=2e3,qs=2001;function jg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){let n=Ys("canvas");return n.style.display="block",n}var hp={},Zs=null;function nd(...n){let e="THREE."+n.shift();Zs?Zs("log",e,...n):console.log(e,...n)}function Cf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){let e="THREE."+(n=Cf(n)).shift();if(Zs)Zs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){let e="THREE."+(n=Cf(n)).shift();if(Zs)Zs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $a(...n){let e=n.join(" ");e in hp||(hp[e]=!0,He(...n))}function Rf(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var If={[ru]:1,[au]:6,[ou]:7,[gc]:5,[su]:0,[cu]:2,[hu]:4,[lu]:3},lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=1234567,js=Math.PI/180,Js=180/Math.PI;function ms(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ti[255&n]+Ti[n>>8&255]+Ti[n>>16&255]+Ti[n>>24&255]+"-"+Ti[255&e]+Ti[e>>8&255]+"-"+Ti[e>>16&15|64]+Ti[e>>24&255]+"-"+Ti[63&t|128]+Ti[t>>8&255]+"-"+Ti[t>>16&255]+Ti[t>>24&255]+Ti[255&i]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function qh(n,e){return(n%e+e)%e}function qa(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var rd={DEG2RAD:js,RAD2DEG:Js,generateUUID:ms,clamp:at,euclideanModulo:qh,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:qa,damp:function(n,e,t,i){return qa(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(qh(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(up=n);let e=up+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*js},radToDeg:function(n){return n*Js},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Fi,denormalize:Ws},pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ri=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],f=s[a+3];if(u!==f||l!==d||c!==p||h!==g){let x=l*d+c*p+h*g+u*f;x<0&&(d=-d,p=-p,g=-g,f=-f,x=-x);let v=1-o;if(x<.9995){let y=Math.acos(x),S=Math.sin(y);v=Math.sin(v*y)/S,l=l*v+d*(o=Math.sin(o*y)/S),c=c*v+p*o,h=h*v+g*o,u=u*v+f*o}else{l=l*v+d*o,c=c*v+p*o,h=h*v+g*o,u=u*v+f*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fh=new R,dp=new Ri,nt=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],f=r[0],x=r[3],v=r[6],y=r[1],S=r[4],T=r[7],b=r[2],I=r[5],U=r[8];return s[0]=a*f+o*y+l*b,s[3]=a*x+o*S+l*I,s[6]=a*v+o*T+l*U,s[1]=c*f+h*y+u*b,s[4]=c*x+h*S+u*I,s[7]=c*v+h*T+u*U,s[2]=d*f+p*y+g*b,s[5]=d*x+p*S+g*I,s[8]=d*v+p*T+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/g;return e[0]=u*f,e[1]=(r*c-h*i)*f,e[2]=(o*i-r*a)*f,e[3]=d*f,e[4]=(h*t-r*l)*f,e[5]=(r*s-o*t)*f,e[6]=p*f,e[7]=(i*l-c*t)*f,e[8]=(a*t-i*s)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mh=new nt,pp=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fp=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xg(){let n={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===bt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ka:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ns]:{primaries:e,whitePoint:i,transfer:Ka,toXYZ:pp,fromXYZ:fp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:pp,fromXYZ:fp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}var gt=Xg();function ar(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Xs(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Ps,Pl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=Ys("canvas")),Ps.width=e.width,Ps.height=e.height;let r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*ar(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*ar(t[i]/255)):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qg=0,Ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gh(r[a].image)):s.push(gh(r[a]))}else s=gh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Yg=0,vh=new R,Ci=class n extends lr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ms(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:He(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ci.DEFAULT_IMAGE=null,Ci.DEFAULT_MAPPING=vu,Ci.DEFAULT_ANISOTROPY=1;var Bt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],f=l[2],x=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,T=(p+1)/2,b=(v+1)/2,I=(h+d)/4,U=(u+f)/4,O=(g+x)/4;return S>T&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=I/i,s=U/i):T>b?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=I/r,s=O/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=U/s,r=O/s),this.set(i,r,s,t),this}let y=Math.sqrt((x-g)*(x-g)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(u-f)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ll=class extends lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Ci(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ji=class extends Ll{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qa=class extends Ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dl=class extends Ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tt=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,g,f,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,f,x)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,f,x){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=g,v[11]=f,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,f=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,f=c*u;t[0]=d+f*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=f+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,f=c*u;t[0]=d-f*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=f-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,f=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+f,t[1]=l*u,t[5]=f*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,f=o*c;t[0]=l*h,t[4]=f-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-f*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,f=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+f,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=f*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,i){let r=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),wr.crossVectors(i,Gi),wr.lengthSq()===0&&(Math.abs(i.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),wr.crossVectors(i,Gi)),wr.normalize(),Jo.crossVectors(Gi,wr),r[0]=wr.x,r[4]=Jo.x,r[8]=Gi.x,r[1]=wr.y,r[5]=Jo.y,r[9]=Gi.y,r[2]=wr.z,r[6]=Jo.z,r[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],f=i[6],x=i[10],v=i[14],y=i[3],S=i[7],T=i[11],b=i[15],I=r[0],U=r[4],O=r[8],P=r[12],H=r[1],W=r[5],G=r[9],j=r[13],V=r[2],q=r[6],Y=r[10],J=r[14],ne=r[3],ye=r[7],Me=r[11],Ce=r[15];return s[0]=a*I+o*H+l*V+c*ne,s[4]=a*U+o*W+l*q+c*ye,s[8]=a*O+o*G+l*Y+c*Me,s[12]=a*P+o*j+l*J+c*Ce,s[1]=h*I+u*H+d*V+p*ne,s[5]=h*U+u*W+d*q+p*ye,s[9]=h*O+u*G+d*Y+p*Me,s[13]=h*P+u*j+d*J+p*Ce,s[2]=g*I+f*H+x*V+v*ne,s[6]=g*U+f*W+x*q+v*ye,s[10]=g*O+f*G+x*Y+v*Me,s[14]=g*P+f*j+x*J+v*Ce,s[3]=y*I+S*H+T*V+b*ne,s[7]=y*U+S*W+T*q+b*ye,s[11]=y*O+S*G+T*Y+b*Me,s[15]=y*P+S*j+T*J+b*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],f=e[7],x=e[11],v=e[15],y=l*p-c*d,S=o*p-c*u,T=o*d-l*u,b=a*p-c*h,I=a*d-l*h,U=a*u-o*h;return t*(f*y-x*S+v*T)-i*(g*y-x*b+v*I)+r*(g*S-f*b+v*U)-s*(g*T-f*I+x*U)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],f=e[13],x=e[14],v=e[15],y=t*o-i*a,S=t*l-r*a,T=t*c-s*a,b=i*l-r*o,I=i*c-s*o,U=r*c-s*l,O=h*f-u*g,P=h*x-d*g,H=h*v-p*g,W=u*x-d*f,G=u*v-p*f,j=d*v-p*x,V=y*j-S*G+T*W+b*H-I*P+U*O;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/V;return e[0]=(o*j-l*G+c*W)*q,e[1]=(r*G-i*j-s*W)*q,e[2]=(f*U-x*I+v*b)*q,e[3]=(d*I-u*U-p*b)*q,e[4]=(l*H-a*j-c*P)*q,e[5]=(t*j-r*H+s*P)*q,e[6]=(x*T-g*U-v*S)*q,e[7]=(h*U-d*T+p*S)*q,e[8]=(a*G-o*H+c*O)*q,e[9]=(i*H-t*G-s*O)*q,e[10]=(g*I-f*T+v*y)*q,e[11]=(u*T-h*I-p*y)*q,e[12]=(o*P-a*W-l*O)*q,e[13]=(t*W-i*P+r*O)*q,e[14]=(f*S-g*b-x*y)*q,e[15]=(h*b-u*S+d*y)*q,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,f=a*h,x=a*u,v=o*u,y=l*c,S=l*h,T=l*u,b=i.x,I=i.y,U=i.z;return r[0]=(1-(f+v))*b,r[1]=(p+T)*b,r[2]=(g-S)*b,r[3]=0,r[4]=(p-T)*I,r[5]=(1-(d+v))*I,r[6]=(x+y)*I,r[7]=0,r[8]=(g+S)*U,r[9]=(x-y)*U,r[10]=(1-(d+f))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),l=Ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gn.copy(this);let c=1/a,h=1/o,u=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),g,f;if(l)g=s/(a-s),f=a*s/(a-s);else if(o===or)g=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==qs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-s),f=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),g,f;if(l)g=1/(a-s),f=a/(a-s);else if(o===or)g=-2/(a-s),f=-(a+s)/(a-s);else{if(o!==qs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-s),f=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new R,gn=new tt,Zg=new R(0,0,0),Jg=new R(1,1,1),wr=new R,Jo=new R,Gi=new R,mp=new tt,gp=new Ri,xn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Kg=0,vp=new R,Ds=new Ri,er=new tt,Ko=new R,za=new R,$g=new R,Qg=new Ri,yp=new R(1,0,0),xp=new R(0,1,0),_p=new R(0,0,1),Mp={type:"added"},e0={type:"removed"},Ns={type:"childadded",child:null},yh={type:"childremoved",child:null},ii=class n extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new xn,i=new Ri,r=new R(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new nt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ko.copy(e):Ko.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(za,Ko,this.up):er.lookAt(Ko,za,this.up),this.quaternion.setFromRotationMatrix(er),r&&(er.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(er),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e0),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};ii.DEFAULT_UP=new R(0,1,0),ii.DEFAULT_MATRIX_AUTO_UPDATE=!0,ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let f of e.hand.values()){let x=t.getJointPose(f,i),v=this._getHandJoint(c,f);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},$o={h:0,s:0,l:0};function xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Te=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=qh(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xh(a,s,e+1/3),this.g=xh(a,s,e),this.b=xh(a,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=Pf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return gt.workingToColorSpace(Ai.copy(this),e),65536*Math.round(at(255*Ai.r,0,255))+256*Math.round(at(255*Ai.g,0,255))+Math.round(at(255*Ai.b,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Ai.copy(this),t);let i=Ai.r,r=Ai.g,s=Ai.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=Tt){gt.workingToColorSpace(Ai.copy(this),e);let t=Ai.r,i=Ai.g,r=Ai.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL($o);let i=qa(Tr.h,$o.h,t),r=qa(Tr.s,$o.s,t),s=qa(Tr.l,$o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ai=new Te;Te.NAMES=Pf;var cr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hr=class extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new R,tr=new R,_h=new R,ir=new R,Us=new R,Fs=new R,Sp=new R,Mh=new R,Sh=new R,bh=new R,Eh=new Bt,wh=new Bt,Th=new Bt,sr=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),tr.subVectors(i,t),_h.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(tr),l=vn.dot(_h),c=tr.dot(tr),h=tr.dot(_h),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ir)!==null&&ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(a,ir.y),l.addScaledVector(o,ir.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Eh.setScalar(0),wh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Eh,s.x),a.addScaledVector(wh,s.y),a.addScaledVector(Th,s.z),a}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),tr.subVectors(e,t),vn.cross(tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),.5*vn.cross(tr).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Us.subVectors(r,i),Fs.subVectors(s,i),Mh.subVectors(e,i);let l=Us.dot(Mh),c=Fs.dot(Mh);if(l<=0&&c<=0)return t.copy(i);Sh.subVectors(e,r);let h=Us.dot(Sh),u=Fs.dot(Sh);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Us,a);bh.subVectors(e,s);let p=Us.dot(bh),g=Fs.dot(bh);if(g>=0&&p<=g)return t.copy(s);let f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Fs,o);let x=h*g-p*u;if(x<=0&&u-h>=0&&p-g>=0)return Sp.subVectors(s,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Sp,o);let v=1/(x+f+d);return a=f*v,o=d*v,t.copy(i).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),el.subVectors(this.max,ka),Os.subVectors(e.a,ka),Bs.subVectors(e.b,ka),zs.subVectors(e.c,ka),Ar.subVectors(Bs,Os),Cr.subVectors(zs,Bs),Kr.subVectors(Os,zs);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-Kr.z,Kr.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,Kr.z,0,-Kr.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-Kr.y,Kr.x,0];return!!Ah(t,Os,Bs,zs,el)&&(t=[1,0,0,0,1,0,0,0,1],!!Ah(t,Os,Bs,zs,el)&&(tl.crossVectors(Ar,Cr),t=[tl.x,tl.y,tl.z],Ah(t,Os,Bs,zs,el)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(yn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,Qo=new nn,Os=new R,Bs=new R,zs=new R,Ar=new R,Cr=new R,Kr=new R,ka=new R,el=new R,tl=new R,$r=new R;function Ah(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$r.fromArray(n,s);let o=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=t.dot($r),h=i.dot($r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hx=i0();function i0(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var ti=new R,il=new pe,n0=0,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xh,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Fi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Fi(t,this.array),i=Fi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Fi(t,this.array),i=Fi(i,this.array),r=Fi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Fi(t,this.array),i=Fi(i,this.array),r=Fi(r,this.array),s=Fi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}};var to=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var io=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ge=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},r0=new nn,Ha=new R,Ch=new R,rn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):r0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);let t=Ha.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Ch)),this.expandByPoint(Ha.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},s0=0,en=new tt,Rh=new ii,ks=new R,Vi=new nn,Ga=new nn,pi=new R,pt=class n extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?io:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Vi.setFromBufferAttribute(s),this.morphTargetsRelative?(pi.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint(pi),pi.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint(pi)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(Vi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(pi.addVectors(Vi.min,Ga.min),Vi.expandByPoint(pi),pi.addVectors(Vi.max,Ga.max),Vi.expandByPoint(pi)):(Vi.expandByPoint(Ga.min),Vi.expandByPoint(Ga.max))}Vi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pi.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pi));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pi.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),pi.add(ks)),r=Math.max(r,i.distanceToSquared(pi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new R,l[O]=new R;let c=new R,h=new R,u=new R,d=new pe,p=new pe,g=new pe,f=new R,x=new R;function v(O,P,H){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,H),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,P),g.fromBufferAttribute(s,H),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let W=1/(p.x*g.y-g.x*p.y);isFinite(W)&&(f.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(W),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(W),o[O].add(f),o[P].add(f),o[H].add(f),l[O].add(x),l[P].add(x),l[H].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,P=y.length;O<P;++O){let H=y[O],W=H.start;for(let G=W,j=W+H.count;G<j;G+=3)v(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new R,T=new R,b=new R,I=new R;function U(O){b.fromBufferAttribute(r,O),I.copy(b);let P=o[O];S.copy(P),S.sub(b.multiplyScalar(b.dot(P))).normalize(),T.crossVectors(I,P);let H=T.dot(l[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,H)}for(let O=0,P=y.length;O<P;++O){let H=y[O],W=H.start;for(let G=W,j=W+H.count;G<j;G+=3)U(e.getX(G+0)),U(e.getX(G+1)),U(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),f=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),a.fromBufferAttribute(t,x),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pi.fromBufferAttribute(e,t),pi.normalize(),e.setXYZ(t,pi.x,pi.y,pi.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let f=0,x=l.length;f<x;f++){p=o.isInterleavedBufferAttribute?l[f]*o.data.stride+o.offset:l[f]*h;for(let v=0;v<h;v++)d[g++]=c[p++]}return new zt(d,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ux=new R;var a0=0,Un=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:He(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var dx=new R,px=new R,fx=new R,mx=new pe,gx=new pe,vx=new tt,yx=new R,xx=new R,_x=new R,Mx=new pe,Sx=new pe,bx=new pe;var Ex=new R,wx=new R;var rr=new R,Ih=new R,nl=new R,Rr=new R,Ph=new R,rl=new R,Lh=new R,rs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ih.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Ih);let s=.5*e.distanceTo(t),a=-this.direction.dot(nl),o=Rr.dot(this.direction),l=-Rr.dot(nl),c=Rr.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let f=1/h;u*=f,d*=f,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ih).addScaledVector(nl,d),p}intersectSphere(e,t){rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),r=rr.dot(rr)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,r,s){Ph.subVectors(t,e),rl.subVectors(i,e),Lh.crossVectors(Ph,rl);let a,o=this.direction.dot(Lh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Rr.subVectors(this.origin,e);let l=a*this.direction.dot(rl.crossVectors(Rr,rl));if(l<0)return null;let c=a*this.direction.dot(Ph.cross(Rr));if(c<0||l+c>o)return null;let h=-a*Rr.dot(Lh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bp=new tt,Qr=new rs,sl=new rn,Ep=new R,al=new R,ol=new R,ll=new R,Dh=new R,cl=new R,wp=new R,hl=new R,ge=class extends ii{constructor(e=new pt,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Dh.fromBufferAttribute(u,e),a?cl.addScaledVector(Dh,h):cl.addScaledVector(Dh.sub(t),h))}t.add(cl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),sl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(sl,Ep)===null||Qr.origin.distanceToSquared(Ep)>(e.far-e.near)**2))return;bp.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(bp),i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Qr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,f=d.length;g<f;g++){let x=d[g],v=a[x.materialIndex];for(let y=Math.max(x.start,p.start),S=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));y<S;y+=3)r=ul(this,v,e,i,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let g=Math.max(0,p.start),f=Math.min(o.count,p.start+p.count);g<f;g+=3)r=ul(this,a,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let g=0,f=d.length;g<f;g++){let x=d[g],v=a[x.materialIndex];for(let y=Math.max(x.start,p.start),S=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));y<S;y+=3)r=ul(this,v,e,i,c,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}else for(let g=Math.max(0,p.start),f=Math.min(l.count,p.start+p.count);g<f;g+=3)r=ul(this,a,e,i,c,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}};function ul(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,al),n.getVertexPosition(l,ol),n.getVertexPosition(c,ll);let h=(function(u,d,p,g,f,x,v,y){let S;if(S=d.side===1?g.intersectTriangle(v,x,f,!0,y):g.intersectTriangle(f,x,v,d.side===0,y),S===null)return null;hl.copy(y),hl.applyMatrix4(u.matrixWorld);let T=p.ray.origin.distanceTo(hl);return T<p.near||T>p.far?null:{distance:T,point:hl.clone(),object:u}})(n,e,t,i,al,ol,ll,wp);if(h){let u=new R;sr.getBarycoord(wp,al,ol,ll,u),r&&(h.uv=sr.getInterpolatedAttribute(r,o,l,c,u,new pe)),s&&(h.uv1=sr.getInterpolatedAttribute(s,o,l,c,u,new pe)),a&&(h.normal=sr.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};sr.getNormal(al,ol,ll,d.normal),h.face=d,h.barycoord=u}return h}var Tx=new R,Ax=new Bt,Cx=new Bt,Rx=new R,Ix=new tt,Px=new R,Lx=new rn,Dx=new tt,Nx=new rs;var ss=class extends Ci{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ux=new tt,Fx=new tt;var no=class extends zt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new tt,Tp=new tt,dl=[],Ap=new nn,o0=new tt,Va=new ge,Wa=new rn,as=class extends ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,o0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),Ap.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),Wa.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Va.geometry=this.geometry,Va.material=this.material,Va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(i),e.ray.intersectsSphere(Wa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Hs),Tp.multiplyMatrices(i,Hs),Va.matrixWorld=Tp,Va.raycast(e,dl);for(let a=0,o=dl.length;a<o;a++){let l=dl[a];l.instanceId=s,l.object=this,t.push(l)}dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ss(new Float32Array(r*this.count),r,this.count,bc,an));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nh=new R,l0=new R,c0=new nt,Dn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Nh.subVectors(i,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||c0.getNormalMatrix(e),r=this.coplanarPoint(Nh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new rn,h0=new pe(.5,.5),pl=new R,Nr=class{constructor(e=new Dn,t=new Dn,i=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],f=s[9],x=s[10],v=s[11],y=s[12],S=s[13],T=s[14],b=s[15];if(r[0].setComponents(c-a,p-h,v-g,b-y).normalize(),r[1].setComponents(c+a,p+h,v+g,b+y).normalize(),r[2].setComponents(c+o,p+u,v+f,b+S).normalize(),r[3].setComponents(c-o,p-u,v-f,b-S).normalize(),i)r[4].setComponents(l,d,x,T).normalize(),r[5].setComponents(c-l,p-d,v-x,b-T).normalize();else if(r[4].setComponents(c-l,p-d,v-x,b-T).normalize(),t===or)r[5].setComponents(c+l,p+d,v+x,b+T).normalize();else{if(t!==qs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,x,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);let t=h0.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},In=new tt,Pn=new Nr,Nl=class n{constructor(){this.coordinateSystem=or}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(In.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Pn.setFromProjectionMatrix(In,r.coordinateSystem,r.reversedDepth),Pn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(In.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Pn.setFromProjectionMatrix(In,r.coordinateSystem,r.reversedDepth),Pn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(In.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Pn.setFromProjectionMatrix(In,r.coordinateSystem,r.reversedDepth),Pn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(In.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Pn.setFromProjectionMatrix(In,r.coordinateSystem,r.reversedDepth),Pn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(In.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Pn.setFromProjectionMatrix(In,r.coordinateSystem,r.reversedDepth),Pn.containsPoint(e))return!0}return!1}clone(){return new n}};var Yh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},Ox=new tt,Bx=new Te(1,1,1),zx=new Nr,kx=new Nl,Hx=new nn,Gx=new rn,Vx=new R,Wx=new R,jx=new R,Xx=new Yh,qx=new ge;var Qs=class extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ul=new R,Fl=new R,Cp=new tt,ja=new rs,fl=new rn,Uh=new R,Rp=new R,ro=class extends ii{constructor(e=new pt,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ul.fromBufferAttribute(t,r-1),Fl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Fl);e.setAttribute("lineDistance",new Ge(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Cp.copy(r).invert(),ja.copy(e.ray).applyMatrix4(Cp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,f=p-1;g<f;g+=c){let x=h.getX(g),v=h.getX(g+1),y=ml(this,e,ja,l,x,v,g);y&&t.push(y)}if(this.isLineLoop){let g=h.getX(p-1),f=h.getX(d),x=ml(this,e,ja,l,g,f,p-1);x&&t.push(x)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,f=p-1;g<f;g+=c){let x=ml(this,e,ja,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=ml(this,e,ja,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ml(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Ul.fromBufferAttribute(o,r),Fl.fromBufferAttribute(o,s),t.distanceSqToSegment(Ul,Fl,Uh,Rp)>i)return;Uh.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Uh);return l<e.near||l>e.far?void 0:{distance:l,point:Rp.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Yx=new R,Zx=new R;var _n=class extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ip=new tt,Zh=new rs,gl=new rn,vl=new R,Fn=class extends ii{constructor(e=new pt,t=new _n){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;Ip.copy(r).invert(),Zh.copy(e.ray).applyMatrix4(Ip);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);vl.fromBufferAttribute(h,p),Pp(vl,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)vl.fromBufferAttribute(h,u),Pp(vl,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pp(n,e,t,i,r,s,a){let o=Zh.distanceSqToPoint(n);if(o<t){let l=new R;Zh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var so=class extends Ci{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends Ci{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ur=class extends Ci{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==zr&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ol=class extends Ur{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends Ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rt=class n extends pt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function g(f,x,v,y,S,T,b,I,U,O,P){let H=T/U,W=b/O,G=T/2,j=b/2,V=I/2,q=U+1,Y=O+1,J=0,ne=0,ye=new R;for(let Me=0;Me<Y;Me++){let Ce=Me*W-j;for(let xe=0;xe<q;xe++){let re=xe*H-G;ye[f]=re*y,ye[x]=Ce*S,ye[v]=V,c.push(ye.x,ye.y,ye.z),ye[f]=0,ye[x]=0,ye[v]=I>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(xe/U),u.push(1-Me/O),J+=1}}for(let Me=0;Me<O;Me++)for(let Ce=0;Ce<U;Ce++){let xe=d+Ce+q*Me,re=d+Ce+q*(Me+1),de=d+(Ce+1)+q*(Me+1),ve=d+(Ce+1)+q*Me;l.push(xe,re,ve),l.push(re,de,ve),ne+=6}o.addGroup(p,ne,P),p+=ne,d+=J}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Bl=class n extends pt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=2*i+s,f=r+1,x=new R,v=new R;for(let y=0;y<=g;y++){let S=0,T=0,b=0,I=0;if(y<=i){let P=y/i,H=P*Math.PI/2;T=-h-e*Math.cos(H),b=e*Math.sin(H),I=-e*Math.cos(H),S=P*u}else if(y<=i+s){let P=(y-i)/s;T=P*t-h,b=e,I=0,S=u+P*d}else{let P=(y-i-s)/i,H=P*Math.PI/2;T=h+e*Math.sin(H),b=e*Math.cos(H),I=e*Math.sin(H),S=u+d+P*u}let U=Math.max(0,Math.min(1,S/p)),O=0;y===0?O=.5/r:y===g&&(O=-.5/r);for(let P=0;P<=r;P++){let H=P/r,W=H*Math.PI*2,G=Math.sin(W),j=Math.cos(W);v.x=-b*j,v.y=T,v.z=b*G,o.push(v.x,v.y,v.z),x.set(-b*j,I,b*G),x.normalize(),l.push(x.x,x.y,x.z),c.push(H+O,U)}if(y>0){let P=(y-1)*f;for(let H=0;H<r;H++){let W=P+H,G=P+H+1,j=y*f+H,V=y*f+H+1;a.push(W,G,j),a.push(G,V,j)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zl=class n extends pt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new R,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},kt=class n extends pt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],g=0,f=[],x=i/2,v=0;function y(S){let T=g,b=new pe,I=new R,U=0,O=S===!0?e:t,P=S===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,x*P,0),d.push(0,P,0),p.push(.5,.5),g++;let H=g;for(let W=0;W<=r;W++){let G=W/r*l+o,j=Math.cos(G),V=Math.sin(G);I.x=O*V,I.y=x*P,I.z=O*j,u.push(I.x,I.y,I.z),d.push(0,P,0),b.x=.5*j+.5,b.y=.5*V*P+.5,p.push(b.x,b.y),g++}for(let W=0;W<r;W++){let G=T+W,j=H+W;S===!0?h.push(j,j+1,G):h.push(j+1,j,G),U+=3}c.addGroup(v,U,S===!0?1:2),v+=U}(function(){let S=new R,T=new R,b=0,I=(t-e)/i;for(let U=0;U<=s;U++){let O=[],P=U/s,H=P*(t-e)+e;for(let W=0;W<=r;W++){let G=W/r,j=G*l+o,V=Math.sin(j),q=Math.cos(j);T.x=H*V,T.y=-P*i+x,T.z=H*q,u.push(T.x,T.y,T.z),S.set(V,I,q).normalize(),d.push(S.x,S.y,S.z),p.push(G,1-P),O.push(g++)}f.push(O)}for(let U=0;U<r;U++)for(let O=0;O<s;O++){let P=f[O][U],H=f[O+1][U],W=f[O+1][U+1],G=f[O][U+1];(e>0||O!==0)&&(h.push(P,H,G),b+=3),(t>0||O!==s-1)&&(h.push(H,W,G),b+=3)}c.addGroup(v,b,0),v+=b})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oi=class n extends kt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fr=class n extends pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,g,f,x){let v=x+1,y=[];for(let S=0;S<=v;S++){y[S]=[];let T=p.clone().lerp(f,S/v),b=g.clone().lerp(f,S/v),I=v-S;for(let U=0;U<=I;U++)y[S][U]=U===0&&S===v?T:T.clone().lerp(b,U/I)}for(let S=0;S<v;S++)for(let T=0;T<2*(v-S)-1;T++){let b=Math.floor(T/2);T%2==0?(l(y[S][b+1]),l(y[S+1][b]),l(y[S][b])):(l(y[S][b+1]),l(y[S+1][b+1]),l(y[S+1][b]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,g){let f=3*p;g.x=e[f+0],g.y=e[f+1],g.z=e[f+2]}function h(p,g,f,x){x<0&&p.x===1&&(a[g]=p.x-1),f.x===0&&f.z===0&&(a[g]=x/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let g=new R,f=new R,x=new R;for(let v=0;v<t.length;v+=3)c(t[v+0],g),c(t[v+1],f),c(t[v+2],x),o(g,f,x,p)})(r),(function(p){let g=new R;for(let f=0;f<s.length;f+=3)g.x=s[f+0],g.y=s[f+1],g.z=s[f+2],g.normalize().multiplyScalar(p),s[f+0]=g.x,s[f+1]=g.y,s[f+2]=g.z})(i),(function(){let p=new R;for(let g=0;g<s.length;g+=3){p.x=s[g+0],p.y=s[g+1],p.z=s[g+2];let f=u(p)/2/Math.PI+.5,x=d(p)/Math.PI+.5;a.push(f,1-x)}(function(){let g=new R,f=new R,x=new R,v=new R,y=new pe,S=new pe,T=new pe;for(let b=0,I=0;b<s.length;b+=9,I+=6){g.set(s[b+0],s[b+1],s[b+2]),f.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),y.set(a[I+0],a[I+1]),S.set(a[I+2],a[I+3]),T.set(a[I+4],a[I+5]),v.copy(g).add(f).add(x).divideScalar(3);let U=u(v);h(y,I+0,g,U),h(S,I+2,f,U),h(T,I+4,x,U)}})(),(function(){for(let g=0;g<a.length;g+=6){let f=a[g+0],x=a[g+2],v=a[g+4],y=Math.max(f,x,v),S=Math.min(f,x,v);y>.9&&S<.1&&(f<.2&&(a[g+0]+=1),x<.2&&(a[g+2]+=1),v<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},kl=class n extends Fr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},yl=new R,xl=new R,Fh=new R,_l=new sr,Hl=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(js*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:f,b:x,c:v}=_l;if(f.fromBufferAttribute(o,c[0]),x.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),_l.getNormal(Fh),u[0]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let S=(y+1)%3,T=u[y],b=u[S],I=_l[h[y]],U=_l[h[S]],O=`${T}_${b}`,P=`${b}_${T}`;P in d&&d[P]?(Fh.dot(d[P].normal)<=s&&(p.push(I.x,I.y,I.z),p.push(U.x,U.y,U.z)),d[P]=null):O in d||(d[O]={index0:c[y],index1:c[S],normal:Fh.clone()})}}for(let g in d)if(d[g]){let{index0:f,index1:x}=d[g];yl.fromBufferAttribute(o,f),xl.fromBufferAttribute(o,x),p.push(yl.x,yl.y,yl.z),p.push(xl.x,xl.y,xl.z)}this.setAttribute("position",new Ge(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new pe:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],s=[],a=[],o=new R,l=new tt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(at(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(at(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ea=class extends Xi{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gl=class extends ea{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sd(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Ml=new R,Oh=new sd,Bh=new sd,zh=new sd,Or=class extends Xi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ml.subVectors(r[0],r[1]).add(r[0]),o=Ml);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ml.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ml),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(l),p);f<1e-4&&(f=1),g<1e-4&&(g=f),x<1e-4&&(x=f),Oh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,g,f,x),Bh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,g,f,x),zh.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,g,f,x)}else this.curveType==="catmullrom"&&(Oh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Bh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),zh.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Oh.calc(h),Bh.calc(h),zh.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lp(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function Ya(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function Za(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var oo=class extends Xi{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Za(e,r.x,s.x,a.x,o.x),Za(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vl=class extends Xi{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Za(e,r.x,s.x,a.x,o.x),Za(e,r.y,s.y,a.y,o.y),Za(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends Xi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends Xi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Xi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ya(e,r.x,s.x,a.x),Ya(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends Xi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ya(e,r.x,s.x,a.x),Ya(e,r.y,s.y,a.y),Ya(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Lp(o,l.x,c.x,h.x,u.x),Lp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},jl=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:Or,CubicBezierCurve:oo,CubicBezierCurve3:Vl,EllipseCurve:ea,LineCurve:lo,LineCurve3:Wl,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),Xl=class extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new jl[r.type]().fromJSON(r))}return this}},po=class extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new lo(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new co(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new oo(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new uo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new ea(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},os=class extends po{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new po().fromJSON(r))}return this}};function u0(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Dp(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let g=[];for(let f=0,x=u.length;f<x;f++){let v=Dp(h,u[f]*p,f<x-1?u[f+1]*p:h.length,p,!1);v===v.next&&(v.steiner=!0),g.push(x0(v))}g.sort(g0);for(let f=0;f<g.length;f++)d=v0(g[f],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],g=n[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return fo(s,a,t,o,l,c,0),a}function Dp(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Np(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Np(a/i|0,n[a],n[a+1],s);return s&&ta(s,s.next)&&(go(s),s=s.next),s}function ls(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!ta(i,i.next)&&Vt(i.prev,i,i.next)!==0)i=i.next;else{if(go(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function fo(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Jh(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let g,f=1;do{let x,v=p;p=null;let y=null;for(g=0;v;){g++;let S=v,T=0;for(let I=0;I<f&&(T++,S=S.nextZ,S);I++);let b=f;for(;T>0||b>0&&S;)T!==0&&(b===0||!S||v.z<=S.z)?(x=v,v=v.nextZ,T--):(x=S,S=S.nextZ,b--),y?y.nextZ=x:p=x,x.prevZ=y,y=x;v=S}y.nextZ=null,f*=2}while(g>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?p0(n,i,r,s):d0(n))e.push(l.i,n.i,c.i),go(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?fo(n=f0(ls(n),e),e,t,i,r,s,2):a===2&&m0(n,e,t,i,r,s):fo(ls(n),e,t,i,r,s,1);break}}}function d0(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Xa(r,o,s,l,a,c,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function p0(n,e,t,i){let r=n.prev,s=n,a=n.next;if(Vt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),f=Math.max(o,l,c),x=Math.max(h,u,d),v=Jh(p,g,e,t,i),y=Jh(f,x,e,t,i),S=n.prevZ,T=n.nextZ;for(;S&&S.z>=v&&T&&T.z<=y;){if(S.x>=p&&S.x<=f&&S.y>=g&&S.y<=x&&S!==r&&S!==a&&Xa(o,h,l,u,c,d,S.x,S.y)&&Vt(S.prev,S,S.next)>=0||(S=S.prevZ,T.x>=p&&T.x<=f&&T.y>=g&&T.y<=x&&T!==r&&T!==a&&Xa(o,h,l,u,c,d,T.x,T.y)&&Vt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=f&&S.y>=g&&S.y<=x&&S!==r&&S!==a&&Xa(o,h,l,u,c,d,S.x,S.y)&&Vt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;T&&T.z<=y;){if(T.x>=p&&T.x<=f&&T.y>=g&&T.y<=x&&T!==r&&T!==a&&Xa(o,h,l,u,c,d,T.x,T.y)&&Vt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function f0(n,e){let t=n;do{let i=t.prev,r=t.next.next;!ta(i,r)&&Df(i,t,t.next,r)&&mo(i,r)&&mo(r,i)&&(e.push(i.i,t.i,r.i),go(t),go(t.next),t=n=r),t=t.next}while(t!==n);return ls(t)}function m0(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_0(a,o)){let l=Nf(a,o);return a=ls(a,a.next),l=ls(l,l.next),fo(a,e,t,i,r,s,0),void fo(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function g0(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function v0(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(ta(r,a))return a;do{if(ta(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let f=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(f<=o&&f>h&&(h=f,c=a.x<a.next.x?a:a.next,f===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,g=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Lf(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let f=Math.abs(l-a.y)/(o-a.x);mo(a,r)&&(f<g||f===g&&(a.x>c.x||a.x===c.x&&y0(c,a)))&&(c=a,g=f)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=Nf(t,n);return ls(i,i.next),ls(t,t.next)}function y0(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function Jh(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function x0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lf(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Xa(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Lf(n,e,t,i,r,s,a,o)}function _0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Df(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(mo(n,e)&&mo(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||ta(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ta(n,e){return n.x===e.x&&n.y===e.y}function Df(n,e,t,i){let r=bl(Vt(n,e,t)),s=bl(Vt(n,e,i)),a=bl(Vt(t,i,n)),o=bl(Vt(t,i,e));return r!==s&&a!==o||!(r!==0||!Sl(n,t,e))||!(s!==0||!Sl(n,i,e))||!(a!==0||!Sl(t,n,i))||!(o!==0||!Sl(t,e,i))}function Sl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bl(n){return n>0?1:n<0?-1:0}function mo(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function Nf(n,e){let t=Kh(n.i,n.x,n.y),i=Kh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Np(n,e,t,i){let r=Kh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var $h=class{static triangulate(e,t,i=2){return u0(e,t,i)}},Nn=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Up(e),Fp(i,e);let a=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Fp(i,t[l]);let o=$h.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Up(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ia=class n extends pt{constructor(e=new os([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:M0,S,T,b,I,U,O=!1;if(v){S=v.getSpacedPoints(h),O=!0,d=!1;let D=!!v.isCatmullRomCurve3&&v.closed;T=v.computeFrenetFrames(h,D),b=new R,I=new R,U=new R}d||(x=0,p=0,g=0,f=0);let P=o.extractPoints(c),H=P.shape,W=P.holes;if(!Nn.isClockWise(H)){H=H.reverse();for(let D=0,_=W.length;D<_;D++){let L=W[D];Nn.isClockWise(L)&&(W[D]=L.reverse())}}function G(D){let _=10000000000000001e-36,L=D[0];for(let F=1;F<=D.length;F++){let z=F%D.length,$=D[z],ee=$.x-L.x,Z=$.y-L.y,le=ee*ee+Z*Z,se=Math.max(Math.abs($.x),Math.abs($.y),Math.abs(L.x),Math.abs(L.y));le<=_*se*se?(D.splice(z,1),F--):L=$}}G(H),W.forEach(G);let j=W.length,V=H;for(let D=0;D<j;D++){let _=W[D];H=H.concat(_)}function q(D,_,L){return _||We("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(_,L)}let Y=H.length;function J(D,_,L){let F,z,$,ee=D.x-_.x,Z=D.y-_.y,le=L.x-D.x,se=L.y-D.y,he=ee*ee+Z*Z,ce=ee*se-Z*le;if(Math.abs(ce)>Number.EPSILON){let fe=Math.sqrt(he),Be=Math.sqrt(le*le+se*se),qe=_.x-Z/fe,mt=_.y+ee/fe,ct=((L.x-se/Be-qe)*se-(L.y+le/Be-mt)*le)/(ee*se-Z*le);F=qe+ee*ct-D.x,z=mt+Z*ct-D.y;let be=F*F+z*z;if(be<=2)return new pe(F,z);$=Math.sqrt(be/2)}else{let fe=!1;ee>Number.EPSILON?le>Number.EPSILON&&(fe=!0):ee<-Number.EPSILON?le<-Number.EPSILON&&(fe=!0):Math.sign(Z)===Math.sign(se)&&(fe=!0),fe?(F=-Z,z=ee,$=Math.sqrt(he)):(F=ee,z=Z,$=Math.sqrt(he/2))}return new pe(F/$,z/$)}let ne=[];for(let D=0,_=V.length,L=_-1,F=D+1;D<_;D++,L++,F++)L===_&&(L=0),F===_&&(F=0),ne[D]=J(V[D],V[L],V[F]);let ye=[],Me,Ce,xe=ne.concat();for(let D=0,_=j;D<_;D++){let L=W[D];Me=[];for(let F=0,z=L.length,$=z-1,ee=F+1;F<z;F++,$++,ee++)$===z&&($=0),ee===z&&(ee=0),Me[F]=J(L[F],L[$],L[ee]);ye.push(Me),xe=xe.concat(Me)}if(x===0)Ce=Nn.triangulateShape(V,W);else{let D=[],_=[];for(let L=0;L<x;L++){let F=L/x,z=p*Math.cos(F*Math.PI/2),$=g*Math.sin(F*Math.PI/2)+f;for(let ee=0,Z=V.length;ee<Z;ee++){let le=q(V[ee],ne[ee],$);Pe(le.x,le.y,-z),F===0&&D.push(le)}for(let ee=0,Z=j;ee<Z;ee++){let le=W[ee];Me=ye[ee];let se=[];for(let he=0,ce=le.length;he<ce;he++){let fe=q(le[he],Me[he],$);Pe(fe.x,fe.y,-z),F===0&&se.push(fe)}F===0&&_.push(se)}}Ce=Nn.triangulateShape(D,_)}let re=Ce.length,de=g+f;for(let D=0;D<Y;D++){let _=d?q(H[D],xe[D],de):H[D];O?(I.copy(T.normals[0]).multiplyScalar(_.x),b.copy(T.binormals[0]).multiplyScalar(_.y),U.copy(S[0]).add(I).add(b),Pe(U.x,U.y,U.z)):Pe(_.x,_.y,0)}for(let D=1;D<=h;D++)for(let _=0;_<Y;_++){let L=d?q(H[_],xe[_],de):H[_];O?(I.copy(T.normals[D]).multiplyScalar(L.x),b.copy(T.binormals[D]).multiplyScalar(L.y),U.copy(S[D]).add(I).add(b),Pe(U.x,U.y,U.z)):Pe(L.x,L.y,u/h*D)}for(let D=x-1;D>=0;D--){let _=D/x,L=p*Math.cos(_*Math.PI/2),F=g*Math.sin(_*Math.PI/2)+f;for(let z=0,$=V.length;z<$;z++){let ee=q(V[z],ne[z],F);Pe(ee.x,ee.y,u+L)}for(let z=0,$=W.length;z<$;z++){let ee=W[z];Me=ye[z];for(let Z=0,le=ee.length;Z<le;Z++){let se=q(ee[Z],Me[Z],F);O?Pe(se.x,se.y+S[h-1].y,S[h-1].x+L):Pe(se.x,se.y,u+L)}}}function ve(D,_){let L=D.length;for(;--L>=0;){let F=L,z=L-1;z<0&&(z=D.length-1);for(let $=0,ee=h+2*x;$<ee;$++){let Z=Y*$,le=Y*($+1);A(_+F+Z,_+z+Z,_+z+le,_+F+le)}}}function Pe(D,_,L){l.push(D),l.push(_),l.push(L)}function Ve(D,_,L){M(D),M(_),M(L);let F=r.length/3,z=y.generateTopUV(i,r,F-3,F-2,F-1);N(z[0]),N(z[1]),N(z[2])}function A(D,_,L,F){M(D),M(_),M(F),M(_),M(L),M(F);let z=r.length/3,$=y.generateSideWallUV(i,r,z-6,z-3,z-2,z-1);N($[0]),N($[1]),N($[3]),N($[1]),N($[2]),N($[3])}function M(D){r.push(l[3*D+0]),r.push(l[3*D+1]),r.push(l[3*D+2])}function N(D){s.push(D.x),s.push(D.y)}(function(){let D=r.length/3;if(d){let _=0,L=Y*_;for(let F=0;F<re;F++){let z=Ce[F];Ve(z[2]+L,z[1]+L,z[0]+L)}_=h+2*x,L=Y*_;for(let F=0;F<re;F++){let z=Ce[F];Ve(z[0]+L,z[1]+L,z[2]+L)}}else{for(let _=0;_<re;_++){let L=Ce[_];Ve(L[2],L[1],L[0])}for(let _=0;_<re;_++){let L=Ce[_];Ve(L[0]+Y*h,L[1]+Y*h,L[2]+Y*h)}}i.addGroup(D,r.length/3-D,0)})(),(function(){let D=r.length/3,_=0;ve(V,_),_+=V.length;for(let L=0,F=W.length;L<F;L++){let z=W[L];ve(z,_),_+=z.length}i.addGroup(D,r.length/3-D,1)})()}this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new jl[r.type]().fromJSON(r)),new n(i,e.options)}},M0={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new pe(s,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],g=e[3*r+2],f=e[3*s],x=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(d,1-g),new pe(f,1-v)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-g),new pe(x,1-v)]}},cs=class n extends Fr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ql=class n extends pt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=at(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,d=new pe,p=new R,g=new R,f=new R,x=0,v=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,p.x=1*v,p.y=-x,p.z=0*v,f.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(f.x,f.y,f.z);break;default:x=e[y+1].x-e[y].x,v=e[y+1].y-e[y].y,p.x=1*v,p.y=-x,p.z=0*v,g.copy(p),p.x+=f.x,p.y+=f.y,p.z+=f.z,p.normalize(),l.push(p.x,p.y,p.z),f.copy(g)}for(let y=0;y<=t;y++){let S=i+y*h*r,T=Math.sin(S),b=Math.cos(S);for(let I=0;I<=e.length-1;I++){u.x=e[I].x*T,u.y=e[I].y,u.z=e[I].x*b,a.push(u.x,u.y,u.z),d.x=y/t,d.y=I/(e.length-1),o.push(d.x,d.y);let U=l[3*I+0]*T,O=l[3*I+1],P=l[3*I+0]*b;c.push(U,O,P)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let T=S+y*e.length,b=T,I=T+e.length,U=T+e.length+1,O=T+1;s.push(b,I,O),s.push(U,O,I)}this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Yl=class n extends Fr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mi=class n extends pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],f=[],x=[];for(let v=0;v<h;v++){let y=v*d-a;for(let S=0;S<c;S++){let T=S*u-s;g.push(T,-y,0),f.push(0,0,1),x.push(S/o),x.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<o;y++){let S=y+c*v,T=y+c*(v+1),b=y+1+c*(v+1),I=y+1+c*v;p.push(S,T,I),p.push(T,b,I)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Zl=class n extends pt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new R,g=new pe;for(let f=0;f<=r;f++){for(let x=0;x<=i;x++){let v=s+x/i*a;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let f=0;f<r;f++){let x=f*(i+1);for(let v=0;v<i;v++){let y=v+x,S=y,T=y+i+1,b=y+i+2,I=y+1;o.push(S,T,I),o.push(T,b,I)}}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Jl=class n extends pt{constructor(e=new os([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Nn.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,v=g.length;x<v;x++){let y=g[x];Nn.isClockWise(y)===!0&&(g[x]=y.reverse())}let f=Nn.triangulateShape(p,g);for(let x=0,v=g.length;x<v;x++){let y=g[x];p=p.concat(y)}for(let x=0,v=p.length;x<v;x++){let y=p[x];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let x=0,v=f.length;x<v;x++){let y=f[x],S=y[0]+u,T=y[1]+u,b=y[2]+u;i.push(S,T,b),l+=3}}this.setIndex(i),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(s,3)),this.setAttribute("uv",new Ge(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Qt=class n extends pt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,p=[],g=[],f=[],x=[];for(let v=0;v<=i;v++){let y=[],S=v/i,T=0;v===0&&a===0?T=.5/t:v===i&&l===Math.PI&&(T=-.5/t);for(let b=0;b<=t;b++){let I=b/t;u.x=-e*Math.cos(r+I*s)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(r+I*s)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),x.push(I+T,1-S),y.push(c++)}h.push(y)}for(let v=0;v<i;v++)for(let y=0;y<t;y++){let S=h[v][y+1],T=h[v][y],b=h[v+1][y],I=h[v+1][y+1];(v!==0||a>0)&&p.push(S,T,I),(v!==i-1||l<Math.PI)&&p.push(T,b,I)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Kl=class n extends Fr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bi=class n extends pt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new R,p=new R,g=new R;for(let f=0;f<=i;f++){let x=a+f/i*o;for(let v=0;v<=r;v++){let y=v/r*s;p.x=(e+t*Math.cos(x))*Math.cos(y),p.y=(e+t*Math.cos(x))*Math.sin(y),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),u.push(v/r),u.push(f/i)}}for(let f=1;f<=i;f++)for(let x=1;x<=r;x++){let v=(r+1)*f+x-1,y=(r+1)*(f-1)+x-1,S=(r+1)*(f-1)+x,T=(r+1)*f+x;l.push(v,y,T),l.push(y,S,T)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},$l=class n extends pt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new R,d=new R,p=new R,g=new R,f=new R,x=new R,v=new R;for(let S=0;S<=i;++S){let T=S/i*s*Math.PI*2;y(T,s,a,e,p),y(T+.01,s,a,e,g),x.subVectors(g,p),v.addVectors(g,p),f.crossVectors(x,v),v.crossVectors(f,x),f.normalize(),v.normalize();for(let b=0;b<=r;++b){let I=b/r*Math.PI*2,U=-t*Math.cos(I),O=t*Math.sin(I);u.x=p.x+(U*v.x+O*f.x),u.y=p.y+(U*v.y+O*f.y),u.z=p.z+(U*v.z+O*f.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(S/i),h.push(b/r)}}for(let S=1;S<=i;S++)for(let T=1;T<=r;T++){let b=(r+1)*(S-1)+(T-1),I=(r+1)*S+(T-1),U=(r+1)*S+T,O=(r+1)*(S-1)+T;o.push(b,I,O),o.push(I,U,O)}function y(S,T,b,I,U){let O=Math.cos(S),P=Math.sin(S),H=b/T*S,W=Math.cos(H);U.x=I*(2+W)*.5*O,U.y=I*(2+W)*P*.5,U.z=I*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},na=class n extends pt{constructor(e=new ho(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new pe,h=new R,u=[],d=[],p=[],g=[];function f(x){h=e.getPointAt(x/t,h);let v=a.normals[x],y=a.binormals[x];for(let S=0;S<=r;S++){let T=S/r*Math.PI*2,b=Math.sin(T),I=-Math.cos(T);l.x=I*v.x+b*y.x,l.y=I*v.y+b*y.y,l.z=I*v.z+b*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)f(x);f(s===!1?t:0),(function(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)c.x=x/t,c.y=v/r,p.push(c.x,c.y)})(),(function(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){let y=(r+1)*(x-1)+(v-1),S=(r+1)*x+(v-1),T=(r+1)*x+v,b=(r+1)*(x-1)+v;g.push(y,S,b),g.push(S,T,b)}})()})(),this.setIndex(g),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new jl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ql=class extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let f=0;f<3;f++){let x=o.getX(p+f),v=o.getX(p+(f+1)%3);r.fromBufferAttribute(a,x),s.fromBufferAttribute(a,v),Op(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Op(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Op(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var Jx=Object.freeze({__proto__:null,BoxGeometry:Rt,CapsuleGeometry:Bl,CircleGeometry:zl,ConeGeometry:Oi,CylinderGeometry:kt,DodecahedronGeometry:kl,EdgesGeometry:Hl,ExtrudeGeometry:ia,IcosahedronGeometry:cs,LatheGeometry:ql,OctahedronGeometry:Yl,PlaneGeometry:mi,PolyhedronGeometry:Fr,RingGeometry:Zl,ShapeGeometry:Jl,SphereGeometry:Qt,TetrahedronGeometry:Kl,TorusGeometry:Bi,TorusKnotGeometry:$l,TubeGeometry:na,WireframeGeometry:Ql});function gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pi(n){let e={};for(let t=0;t<n.length;t++){let i=gs(n[t]);for(let r in i)e[r]=i[r]}return e}function ad(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Uf={clone:gs,merge:Pi},qi=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ec=class extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gi=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var tc=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ic=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function El(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var Br=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Br{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wh:s=e,o=2*t-i;break;case jh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:a=e,l=2*i-t;break;case jh:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),f=g*g,x=f*g,v=-d*x+2*d*f-d*g,y=(1+d)*x+(-1.5-2*d)*f+(-.5+d)*g+1,S=(-1-p)*x+(1.5+p)*f+.5*g,T=p*x-p*f;for(let b=0;b!==o;++b)s[b]=v*a[h+b]+y*a[c+b]+S*a[l+b]+T*a[u+b];return s}},rc=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},sc=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ac=class extends Br{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let f=(i-t)/(r-t),x=1-f;for(let v=0;v!==o;++v)s[v]=a[c+v]*x+a[l+v]*f;return s}let p=2*o,g=e-1;for(let f=0;f!==o;++f){let x=a[c+f],v=a[l+f],y=g*p+2*f,S=d[y],T=d[y+1],b=e*p+2*f,I=u[b],U=u[b+1],O,P,H,W,G,j=(i-t)/(r-t);for(let V=0;V<8;V++){O=j*j,P=O*j,H=1-j,W=H*H,G=W*H;let q=G*t+3*W*j*S+3*H*O*I+P*r-i;if(Math.abs(q)<1e-10)break;let Y=3*W*(S-t)+6*H*j*(I-S)+3*O*(r-I);if(Math.abs(Y)<1e-10)break;j-=q/Y,j=Math.max(0,Math.min(1,j))}s[f]=G*x+3*W*j*T+3*H*O*U+P*v}return s}},Wi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=El(t,this.TimeBufferType),this.values=El(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:El(e.times,Array),values:El(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ja:t=this.InterpolantFactoryMethodDiscrete;break;case Il:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ja;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&jg(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Al,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wi.prototype.ValueTypeName="",Wi.prototype.TimeBufferType=Float32Array,Wi.prototype.ValueBufferType=Float32Array,Wi.prototype.DefaultInterpolation=Il;var Pr=class extends Wi{constructor(e,t,i){super(e,t,i)}};Pr.prototype.ValueTypeName="bool",Pr.prototype.ValueBufferType=Array,Pr.prototype.DefaultInterpolation=Ja,Pr.prototype.InterpolantFactoryMethodLinear=void 0,Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}};oc.prototype.ValueTypeName="color";var lc=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}};lc.prototype.ValueTypeName="number";var cc=class extends Br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ri.slerpFlat(s,0,a,c-o,a,c,l);return s}},vo=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}};vo.prototype.ValueTypeName="quaternion",vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Wi{constructor(e,t,i){super(e,t,i)}};Lr.prototype.ValueTypeName="string",Lr.prototype.ValueBufferType=Array,Lr.prototype.DefaultInterpolation=Ja,Lr.prototype.InterpolantFactoryMethodLinear=void 0,Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends Wi{constructor(e,t,i,r){super(e,t,i,r)}};hc.prototype.ValueTypeName="vector";var Cl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Bp(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Bp(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Bp(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var uc=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new uc,ra=class{constructor(e){this.manager=e!==void 0?e:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=new WeakMap,dc=class extends ra{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Cl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Gs.get(a);u===void 0&&(u=[],Gs.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Ys("img");function l(){h(),t&&t(this);let u=Gs.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Gs.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Cl.remove(`image:${e}`);let d=Gs.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}Gs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ur=class extends ra{constructor(e){super(e)}load(e,t,i,r){let s=new Ci,a=new dc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},sa=class extends ii{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},dr=class extends sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ii.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kh=new tt,zp=new R,kp=new R,pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wl=new R,Tl=new Ri,Ln=new R,aa=class extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wl,Tl,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Tl,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wl,Tl,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Tl,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ir=new R,Hp=new pe,Gp=new pe,$t=class extends aa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Js*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*js*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Js*Math.atan(Math.tan(.5*js*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Hp,Gp),t.subVectors(Gp,Hp)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*js*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Qh=class extends pc{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},ri=class extends sa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Qh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},oa=class extends aa{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eu=class extends pc{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ii.DEFAULT_UP),this.updateMatrix(),this.target=new ii,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Kx=new tt,$x=new tt,Qx=new tt;var Vs=-90,fc=class extends ii{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(Vs,1,e,t);r.layers=this.layers,this.add(r);let s=new $t(Vs,1,e,t);s.layers=this.layers,this.add(s);let a=new $t(Vs,1,e,t);a.layers=this.layers,this.add(a);let o=new $t(Vs,1,e,t);o.layers=this.layers,this.add(o);let l=new $t(Vs,1,e,t);l.layers=this.layers,this.add(l);let c=new $t(Vs,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==qs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;x=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},mc=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var e_=new R,t_=new Ri,i_=new R,n_=new R,r_=new R;var s_=new R,a_=new Ri,o_=new R,l_=new R;var od="\\[\\]\\.:\\/",S0=new RegExp("["+od+"]","g"),Hh="[^"+od+"]",b0="[^"+od.replace("\\.","")+"]",E0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Hh)+/(WCOD+)?/.source.replace("WCOD",b0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh)+"$"),w0=["material","materials","bones","map"],Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S0,"")}static parseTrackName(e){let t=E0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);w0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void He("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void We("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void We("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void We("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void We("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=class{constructor(n,e,t){let i=t||Ot.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray],Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c_=new Float32Array(1);var h_=new tt;var u_=new pe;var d_=new R,p_=new R,f_=new R,m_=new R,g_=new R,v_=new R,y_=new R;var x_=new R;var __=new R,M_=new tt,S_=new tt;var b_=new R,E_=new Te,w_=new Te;var T_=new R,A_=new R,C_=new R;var R_=new R,I_=new aa;var P_=new nn;var L_=new R;function ld(n,e,t,i){let r=(function(s){switch(s){case Yi:case yu:return{byteLength:1,components:1};case da:case xu:case zn:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case fr:case _c:case an:return{byteLength:4,components:1};case _u:case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case bc:case Ec:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case bn:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function sm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function A0(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var st={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},_e={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Hn={basic:{uniforms:Pi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Pi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Pi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Pi([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Pi([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Te(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Pi([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Pi([_e.points,_e.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Pi([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Pi([_e.common,_e.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Pi([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Pi([_e.sprite,_e.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Pi([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Pi([_e.lights,_e.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Hn.physical={uniforms:Pi([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Pc={r:0,b:0,g:0},vs=new xn,C0=new tt;function R0(n,e,t,i,r,s){let a=new Te(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(f){let x=f.isScene===!0?f.background:null;if(x&&x.isTexture){let v=f.backgroundBlurriness>0;x=e.get(x,v)}return x}function g(f,x){f.getRGB(Pc,ad(n)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(f,x=1){a.set(f),c=x,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,g(a,c)},render:function(f){let x=!1,v=p(f);v===null?g(a,c):v&&v.isColor&&(g(v,1),x=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(f,x){let v=p(x);v&&(v.isCubeTexture||v.mapping===xo)?(l===void 0&&(l=new ge(new Rt(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:gs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),vs.copy(x.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(vs)),l.material.toneMapped=gt.getTransfer(v.colorSpace)!==bt,h===v&&u===v.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(o===void 0&&(o=new ge(new mi(2,2),new qi({name:"BackgroundMaterial",uniforms:gs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=v,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.toneMapped=gt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),h===v&&u===v.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function I0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(v){return n.bindVertexArray(v)}function l(v){return n.deleteVertexArray(v)}function c(v){let y=[],S=[],T=[];for(let b=0;b<t;b++)y[b]=0,S[b]=0,T[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:S,attributeDivisors:T,object:v,attributes:{},index:null}}function h(){let v=s.newAttributes;for(let y=0,S=v.length;y<S;y++)v[y]=0}function u(v){d(v,0)}function d(v,y){let S=s.newAttributes,T=s.enabledAttributes,b=s.attributeDivisors;S[v]=1,T[v]===0&&(n.enableVertexAttribArray(v),T[v]=1),b[v]!==y&&(n.vertexAttribDivisor(v,y),b[v]=y)}function p(){let v=s.newAttributes,y=s.enabledAttributes;for(let S=0,T=y.length;S<T;S++)y[S]!==v[S]&&(n.disableVertexAttribArray(S),y[S]=0)}function g(v,y,S,T,b,I,U){U===!0?n.vertexAttribIPointer(v,y,S,b,I):n.vertexAttribPointer(v,y,S,T,b,I)}function f(){x(),a=!0,s!==r&&(s=r,o(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(v,y,S,T,b){let I=!1,U=(function(O,P,H,W){let G=W.wireframe===!0,j=i[P.id];j===void 0&&(j={},i[P.id]=j);let V=O.isInstancedMesh===!0?O.id:0,q=j[V];q===void 0&&(q={},j[V]=q);let Y=q[H.id];Y===void 0&&(Y={},q[H.id]=Y);let J=Y[G];return J===void 0&&(J=c(n.createVertexArray()),Y[G]=J),J})(v,T,S,y);s!==U&&(s=U,o(s.object)),I=(function(O,P,H,W){let G=s.attributes,j=P.attributes,V=0,q=H.getAttributes();for(let Y in q)if(q[Y].location>=0){let J=G[Y],ne=j[Y];if(ne===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),J===void 0||J.attribute!==ne||ne&&J.data!==ne.data)return!0;V++}return s.attributesNum!==V||s.index!==W})(v,T,S,b),I&&(function(O,P,H,W){let G={},j=P.attributes,V=0,q=H.getAttributes();for(let Y in q)if(q[Y].location>=0){let J=j[Y];J===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let ne={};ne.attribute=J,J&&J.data&&(ne.data=J.data),G[Y]=ne,V++}s.attributes=G,s.attributesNum=V,s.index=W})(v,T,S,b),b!==null&&e.update(b,n.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,(function(O,P,H,W){h();let G=W.attributes,j=H.getAttributes(),V=P.defaultAttributeValues;for(let q in j){let Y=j[q];if(Y.location>=0){let J=G[q];if(J===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){let ne=J.normalized,ye=J.itemSize,Me=e.get(J);if(Me===void 0)continue;let Ce=Me.buffer,xe=Me.type,re=Me.bytesPerElement,de=xe===n.INT||xe===n.UNSIGNED_INT||J.gpuType===_c;if(J.isInterleavedBufferAttribute){let ve=J.data,Pe=ve.stride,Ve=J.offset;if(ve.isInstancedInterleavedBuffer){for(let A=0;A<Y.locationSize;A++)d(Y.location+A,ve.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let A=0;A<Y.locationSize;A++)u(Y.location+A);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let A=0;A<Y.locationSize;A++)g(Y.location+A,ye/Y.locationSize,xe,ne,Pe*re,(Ve+ye/Y.locationSize*A)*re,de)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)d(Y.location+ve,J.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<Y.locationSize;ve++)u(Y.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ve=0;ve<Y.locationSize;ve++)g(Y.location+ve,ye/Y.locationSize,xe,ne,ye*re,ye/Y.locationSize*ve*re,de)}}else if(V!==void 0){let ne=V[q];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}p()})(v,y,S,T),b!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))},reset:f,resetDefaultState:x,dispose:function(){f();for(let v in i){let y=i[v];for(let S in y){let T=y[S];for(let b in T){let I=T[b];for(let U in I)l(I[U].object),delete I[U];delete T[b]}}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let y=i[v.id];for(let S in y){let T=y[S];for(let b in T){let I=T[b];for(let U in I)l(I[U].object),delete I[U];delete T[b]}}delete i[v.id]},releaseStatesOfObject:function(v){for(let y in i){let S=i[y],T=v.isInstancedMesh===!0?v.id:0,b=S[T];if(b!==void 0){for(let I in b){let U=b[I];for(let O in U)l(U[O].object),delete U[O];delete b[I]}delete S[T],Object.keys(S).length===0&&delete i[y]}}},releaseStatesOfProgram:function(v){for(let y in i){let S=i[y];for(let T in S){let b=S[T];if(b[v.id]===void 0)continue;let I=b[v.id];for(let U in I)l(I[U].object),delete I[U];delete b[v.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function P0(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function L0(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(He("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===bn||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==Yi&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==an&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function D0(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Dn,o=new nt,l={value:null,needsUpdate:!1};function c(h,u,d,p){let g=h!==null?h.length:0,f=null;if(g!==0){if(f=l.value,p!==!0||f===null){let x=d+4*g,v=u.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<x)&&(f=new Float32Array(x));for(let y=0,S=d;y!==g;++y,S+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,x=n.get(h);if(!r||p===null||p.length===0||s&&!f)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let v=s?0:i,y=4*v,S=x.clippingState||null;l.value=S,S=c(p,u,y,d);for(let T=0;T!==y;++T)S[T]=t[T];x.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}}}var Of=[.125,.215,.35,.446,.526,.582],Mo=20,So=new oa,Bf=new Te,cd=null,hd=0,ud=0,dd=!1,N0=new R,Dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=N0}=s;cd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,hd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:zn,format:bn,colorSpace:ns,depthBuffer:!1},r=zf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Of.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let g=1/p;d>a-4?g=Of[d-a+4-1]:d===0&&(g=0),l.push(g);let f=1/(p-2),x=-f,v=1+f,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,T=6,b=3,I=2,U=1,O=new Float32Array(b*T*S),P=new Float32Array(I*T*S),H=new Float32Array(U*T*S);for(let G=0;G<S;G++){let j=G%3*2/3-1,V=G>2?0:-1,q=[j,V,0,j+2/3,V,0,j+2/3,V+1,0,j,V,0,j+2/3,V+1,0,j,V+1,0];O.set(q,b*T*G),P.set(y,I*T*G);let Y=[G,G,G,G,G,G];H.set(Y,U*T*G)}let W=new pt;W.setAttribute("position",new zt(O,b)),W.setAttribute("uv",new zt(P,I)),W.setAttribute("faceIndex",new zt(H,U)),c.push(new ge(W,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Mo),h=new R(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Mo,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new ge(new pt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r,s){let a=new $t(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Bf),c.toneMapping=Mn,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new Rt,new it({name:"PMREM.Background",side:ki,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,g=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,g=!0):(p.color.copy(Bf),g=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[x],s.y,s.z)):v===1?(a.up.set(0,0,o[x]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[x],s.z)):(a.up.set(0,o[x],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[x]));let y=this._cubeSize;ga(r,v*y,x>2?y:0,y,y),c.setRenderTarget(r),g&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ua||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;ga(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,So)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],g=3*p*(i>d-4?i-d+4:0),f=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,ga(s,g,f,3*p,2*p),r.setRenderTarget(s),r.render(o,So),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,ga(e,g,f,3*p,2*p),r.setRenderTarget(e),r.render(o,So)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/p,f=isFinite(s)?1+Math.floor(3*g):Mo;f>Mo&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let x=[],v=0;for(let T=0;T<Mo;++T){let b=T/g,I=Math.exp(-b*b/2);x.push(I),T===0?v+=I:T<f&&(v+=2*I)}for(let T=0;T<x.length;T++)x[T]=x[T]/v;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let S=this._sizeLods[r];ga(t,3*S*(r>y-4?r-y+4:0),4*(this._cubeSize-S),3*S,2*S),l.setRenderTarget(t),l.render(h,So)}};function zf(n,e,t){let i=new ji(n,e,t);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kf(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Hf(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}var Uc=class extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new so(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rt(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ki,blending:Bn});s.uniforms.tEquirect.value=t;let a=new ge(r,s),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=fi),new fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function U0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===vc?o.mapping=ua:l===yc&&(o.mapping=ds),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===vc||h===yc,d=h===ua||h===ds;if(u||d){let p=t.get(c),g=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return i===null&&(i=new Dc(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let f=c.image;return u&&f&&f.height>0||d&&f&&(function(x){let v=0,y=6;for(let S=0;S<y;S++)x[S]!==void 0&&v++;return v===y})(f)?(i===null&&(i=new Dc(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===vc||h===yc){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new Uc(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function F0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&$a("WebGLRenderer: "+i+" extension not supported."),r}}}function O0(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let f=h.array;d=h.version;for(let x=0,v=f.length;x<v;x+=3){let y=f[x+0],S=f[x+1],T=f[x+2];c.push(y,S,S,T,T,y)}}else{let f=u.array;d=u.version;for(let x=0,v=f.length/3-1;x<v;x+=3){let y=x+0,S=x+1,T=x+2;c.push(y,S,S,T,T,y)}}let p=new(u.count>=65535?io:to)(c,1);p.version=d;let g=s.get(l);g&&e.remove(g),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function B0(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function z0(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:We("WebGLInfo: Unknown draw mode:",i)}}}}function k0(n,e,t){let i=new WeakMap,r=new Bt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let O=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),g===!0&&(y=3);let S=a.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*T*4*h),I=new Qa(b,S,T,h);I.type=an,I.needsUpdate=!0;let U=4*y;for(let P=0;P<h;P++){let H=f[P],W=x[P],G=v[P],j=S*T*4*P;for(let V=0;V<H.count;V++){let q=V*U;d===!0&&(r.fromBufferAttribute(H,V),b[j+q+0]=r.x,b[j+q+1]=r.y,b[j+q+2]=r.z,b[j+q+3]=0),p===!0&&(r.fromBufferAttribute(W,V),b[j+q+4]=r.x,b[j+q+5]=r.y,b[j+q+6]=r.z,b[j+q+7]=0),g===!0&&(r.fromBufferAttribute(G,V),b[j+q+8]=r.x,b[j+q+9]=r.y,b[j+q+10]=r.z,b[j+q+11]=G.itemSize===4?r.w:1)}}u={count:h,texture:I,size:new pe(S,T)},i.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function H0(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var G0={[uu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[pu]:"CINEON_TONE_MAPPING",[pr]:"ACES_FILMIC_TONE_MAPPING",[mu]:"AGX_TONE_MAPPING",[gu]:"NEUTRAL_TONE_MAPPING",[fu]:"CUSTOM_TONE_MAPPING"};function V0(n,e,t,i,r){let s=new ji(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new ji(e,t,{type:zn,depthBuffer:!1,stencilBuffer:!1}),o=new pt;o.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let l=new ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ge(o,l),h=new oa(-1,1,1,-1,0,1),u,d=null,p=null,g=!1,f=null,x=[],v=!1;this.setSize=function(y,S){s.setSize(y,S),a.setSize(y,S);for(let T=0;T<x.length;T++){let b=x[T];b.setSize&&b.setSize(y,S)}},this.setEffects=function(y){x=y,v=x.length>0&&x[0].isRenderPass===!0;let S=s.width,T=s.height;for(let b=0;b<x.length;b++){let I=x[b];I.setSize&&I.setSize(S,T)}},this.begin=function(y,S){if(g||y.toneMapping===Mn&&x.length===0)return!1;if(f=S,S!==null){let T=S.width,b=S.height;s.width===T&&s.height===b||this.setSize(T,b)}return v===!1&&y.setRenderTarget(s),u=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return v},this.end=function(y,S){y.toneMapping=u,g=!0;let T=s,b=a;for(let I=0;I<x.length;I++){let U=x[I];if(U.enabled!==!1&&(U.render(y,b,T,S),U.needsSwap!==!1)){let O=T;T=b,b=O}}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,l.defines={},gt.getTransfer(d)===bt&&(l.defines.SRGB_TRANSFER="");let I=G0[p];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(f),y.render(c,h),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var am=new Ci,md=new Ur(1,1),om=new Qa,lm=new Dl,cm=new so,Gf=[],Vf=[],Wf=new Float32Array(16),jf=new Float32Array(9),Xf=new Float32Array(4);function ya(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Gf[r];if(s===void 0&&(s=new Float32Array(r),Gf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function si(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ai(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fc(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function W0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;n.uniform2fv(this.addr,e),ai(t,e)}}function X0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(si(t,e))return;n.uniform3fv(this.addr,e),ai(t,e)}}function q0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;n.uniform4fv(this.addr,e),ai(t,e)}}function Y0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ai(t,e)}else{if(si(t,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),ai(t,i)}}function Z0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ai(t,e)}else{if(si(t,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),ai(t,i)}}function J0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(si(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ai(t,e)}else{if(si(t,i))return;Wf.set(i),n.uniformMatrix4fv(this.addr,!1,Wf),ai(t,i)}}function K0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;n.uniform2iv(this.addr,e),ai(t,e)}}function Q0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(si(t,e))return;n.uniform3iv(this.addr,e),ai(t,e)}}function ev(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;n.uniform4iv(this.addr,e),ai(t,e)}}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(si(t,e))return;n.uniform2uiv(this.addr,e),ai(t,e)}}function nv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(si(t,e))return;n.uniform3uiv(this.addr,e),ai(t,e)}}function rv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(si(t,e))return;n.uniform4uiv(this.addr,e),ai(t,e)}}function sv(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(md.compareFunction=t.isReversedDepthBuffer()?Ic:Rc,s=md):s=am,t.setTexture2D(e||s,r)}function av(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lm,r)}function ov(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cm,r)}function lv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||om,r)}function cv(n,e){n.uniform1fv(this.addr,e)}function hv(n,e){let t=ya(e,this.size,2);n.uniform2fv(this.addr,t)}function uv(n,e){let t=ya(e,this.size,3);n.uniform3fv(this.addr,t)}function dv(n,e){let t=ya(e,this.size,4);n.uniform4fv(this.addr,t)}function pv(n,e){let t=ya(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fv(n,e){let t=ya(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mv(n,e){let t=ya(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gv(n,e){n.uniform1iv(this.addr,e)}function vv(n,e){n.uniform2iv(this.addr,e)}function yv(n,e){n.uniform3iv(this.addr,e)}function xv(n,e){n.uniform4iv(this.addr,e)}function _v(n,e){n.uniform1uiv(this.addr,e)}function Mv(n,e){n.uniform2uiv(this.addr,e)}function Sv(n,e){n.uniform3uiv(this.addr,e)}function bv(n,e){n.uniform4uiv(this.addr,e)}function Ev(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r),a;si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?md:am;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function wv(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lm,s[a])}function Tv(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cm,s[a])}function Av(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);si(i,s)||(n.uniform1iv(this.addr,s),ai(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||om,s[a])}var gd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return W0;case 35664:return j0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return Q0;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return iv;case 36295:return nv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}})(t.type)}},vd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return pv;case 35675:return fv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return xv;case 5125:return _v;case 36294:return Mv;case 36295:return Sv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}})(t.type)}},yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},pd=/(\w+)(\])?(\[|\.)?/g;function qf(n,e){n.seq.push(e),n.map[e.id]=e}function Cv(n,e,t){let i=n.name,r=i.length;for(pd.lastIndex=0;;){let s=pd.exec(i),a=pd.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){qf(t,c===void 0?new gd(o,n,e):new vd(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new yd(o),qf(t,h)),t=h}}}var va=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Cv(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Yf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Rv=0,Zf=new nt;function Jf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===l?">":" "} ${g}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function Iv(n,e){let t=(function(i){gt._getMatrix(Zf,gt.workingColorSpace,i);let r=`mat3( ${Zf.elements.map(s=>s.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ka:return[r,"LinearTransferOETF"];case bt:return[r,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Pv={[uu]:"Linear",[du]:"Reinhard",[pu]:"Cineon",[pr]:"ACESFilmic",[mu]:"AgX",[gu]:"Neutral",[fu]:"Custom"};function Lv(n,e){let t=Pv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new R;function Dv(){return gt.getLuminanceCoefficients(Lc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Lc.x.toFixed(4)}, ${Lc.y.toFixed(4)}, ${Lc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bo(n){return n!==""}function Kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(n){return n.replace(Nv,Fv)}var Uv=new Map;function Fv(n,e){let t=st[e];if(t===void 0){let i=Uv.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=st[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return xd(t)}var Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(n){return n.replace(Ov,Bv)}function Bv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var zv={[yo]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"},kv={[ua]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"},Hv={[ds]:"ENVMAP_MODE_REFRACTION"},Gv={[pf]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[mf]:"ENVMAP_BLENDING_ADD"};function Vv(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(W){return zv[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(W){return W.envMap===!1?"ENVMAP_TYPE_CUBE":kv[W.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(W){return W.envMap===!1?"ENVMAP_MODE_REFLECTION":Hv[W.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(W){return W.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[W.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(W){let G=W.envMapCubeUVHeight;if(G===null)return null;let j=Math.log2(G)-2,V=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:V,maxMip:j}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)})(t),g=(function(W){let G=[];for(let j in W){let V=W[j];V!==!1&&G.push("#define "+j+" "+V)}return G.join(`
`)})(s),f=r.createProgram(),x,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),v.length>0&&(v+=`
`)):(x=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),v=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?st.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),Dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),a=xd(a),a=Kf(a,t),a=$f(a,t),o=xd(o),o=Kf(o,t),o=$f(o,t),a=Qf(a),o=Qf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=y+x+a,T=y+v+o,b=Yf(r,r.VERTEX_SHADER,S),I=Yf(r,r.FRAGMENT_SHADER,T);function U(W){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(f)||"",j=r.getShaderInfoLog(b)||"",V=r.getShaderInfoLog(I)||"",q=G.trim(),Y=j.trim(),J=V.trim(),ne=!0,ye=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,b,I);else{let Me=Jf(r,b,"vertex"),Ce=Jf(r,I,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+q+`
`+Me+`
`+Ce)}else q!==""?He("WebGLProgram: Program Info Log:",q):Y!==""&&J!==""||(ye=!1);ye&&(W.diagnostics={runnable:ne,programLog:q,vertexShader:{log:Y,prefix:x},fragmentShader:{log:J,prefix:v}})}r.deleteShader(b),r.deleteShader(I),O=new va(r,f),P=(function(G,j){let V={},q=G.getProgramParameter(j,G.ACTIVE_ATTRIBUTES);for(let Y=0;Y<q;Y++){let J=G.getActiveAttrib(j,Y),ne=J.name,ye=1;J.type===G.FLOAT_MAT2&&(ye=2),J.type===G.FLOAT_MAT3&&(ye=3),J.type===G.FLOAT_MAT4&&(ye=4),V[ne]={type:J.type,location:G.getAttribLocation(j,ne),locationSize:ye}}return V})(r,f)}let O,P;r.attachShader(f,b),r.attachShader(f,I),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),this.getUniforms=function(){return O===void 0&&U(this),O},this.getAttributes=function(){return P===void 0&&U(this),P};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(f,37297)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=I,this}var Wv=0,_d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Md(e),t.set(e,i)),i}},Md=class{constructor(e){this.id=Wv++,this.code=e,this.usedTimes=0}};function jv(n,e,t,i,r,s){let a=new eo,o=new _d,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,x,v,y,S){let T=y.fog,b=S.geometry,I=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?y.environment:null,U=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,O=e.get(f.envMap||I,U),P=O&&O.mapping===xo?O.image.height:null,H=p[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&He("WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let W=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,G=W!==void 0?W.length:0,j,V,q,Y,J=0;if(b.morphAttributes.position!==void 0&&(J=1),b.morphAttributes.normal!==void 0&&(J=2),b.morphAttributes.color!==void 0&&(J=3),H){let Lt=Hn[H];j=Lt.vertexShader,V=Lt.fragmentShader}else j=f.vertexShader,V=f.fragmentShader,o.update(f),q=o.getVertexShaderID(f),Y=o.getFragmentShaderID(f);let ne=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Me=S.isInstancedMesh===!0,Ce=S.isBatchedMesh===!0,xe=!!f.map,re=!!f.matcap,de=!!O,ve=!!f.aoMap,Pe=!!f.lightMap,Ve=!!f.bumpMap,A=!!f.normalMap,M=!!f.displacementMap,N=!!f.emissiveMap,D=!!f.metalnessMap,_=!!f.roughnessMap,L=f.anisotropy>0,F=f.clearcoat>0,z=f.dispersion>0,$=f.iridescence>0,ee=f.sheen>0,Z=f.transmission>0,le=L&&!!f.anisotropyMap,se=F&&!!f.clearcoatMap,he=F&&!!f.clearcoatNormalMap,ce=F&&!!f.clearcoatRoughnessMap,fe=$&&!!f.iridescenceMap,Be=$&&!!f.iridescenceThicknessMap,qe=ee&&!!f.sheenColorMap,mt=ee&&!!f.sheenRoughnessMap,ct=!!f.specularMap,be=!!f.specularColorMap,De=!!f.specularIntensityMap,xt=Z&&!!f.transmissionMap,Jt=Z&&!!f.thicknessMap,Ee=!!f.gradientMap,je=!!f.alphaMap,Ye=f.alphaTest>0,wn=!!f.alphaHash,Tn=!!f.extensions,oi=Mn;f.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(oi=n.toneMapping));let Ct={shaderID:H,shaderType:f.type,shaderName:f.name,vertexShader:j,fragmentShader:V,defines:f.defines,customVertexShaderID:q,customFragmentShaderID:Y,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&S._colorsTexture!==null,instancing:Me,instancingColor:Me&&S.instanceColor!==null,instancingMorph:Me&&S.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ns,alphaToCoverage:!!f.alphaToCoverage,map:xe,matcap:re,envMap:de,envMapMode:de&&O.mapping,envMapCubeUVHeight:P,aoMap:ve,lightMap:Pe,bumpMap:Ve,normalMap:A,displacementMap:M,emissiveMap:N,normalMapObjectSpace:A&&f.normalMapType===_f,normalMapTangentSpace:A&&f.normalMapType===xf,metalnessMap:D,roughnessMap:_,anisotropy:L,anisotropyMap:le,clearcoat:F,clearcoatMap:se,clearcoatNormalMap:he,clearcoatRoughnessMap:ce,dispersion:z,iridescence:$,iridescenceMap:fe,iridescenceThicknessMap:Be,sheen:ee,sheenColorMap:qe,sheenRoughnessMap:mt,specularMap:ct,specularColorMap:be,specularIntensityMap:De,transmission:Z,transmissionMap:xt,thicknessMap:Jt,gradientMap:Ee,opaque:f.transparent===!1&&f.blending===us&&f.alphaToCoverage===!1,alphaMap:je,alphaTest:Ye,alphaHash:wn,combine:f.combine,mapUv:xe&&g(f.map.channel),aoMapUv:ve&&g(f.aoMap.channel),lightMapUv:Pe&&g(f.lightMap.channel),bumpMapUv:Ve&&g(f.bumpMap.channel),normalMapUv:A&&g(f.normalMap.channel),displacementMapUv:M&&g(f.displacementMap.channel),emissiveMapUv:N&&g(f.emissiveMap.channel),metalnessMapUv:D&&g(f.metalnessMap.channel),roughnessMapUv:_&&g(f.roughnessMap.channel),anisotropyMapUv:le&&g(f.anisotropyMap.channel),clearcoatMapUv:se&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(f.sheenRoughnessMap.channel),specularMapUv:ct&&g(f.specularMap.channel),specularColorMapUv:be&&g(f.specularColorMap.channel),specularIntensityMapUv:De&&g(f.specularIntensityMap.channel),transmissionMapUv:xt&&g(f.transmissionMap.channel),thicknessMapUv:Jt&&g(f.thicknessMap.channel),alphaMapUv:je&&g(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(A||L),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!b.attributes.uv&&(xe||je),fog:!!T,useFog:f.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||b.attributes.normal===void 0&&A===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:S.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:J,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:n.shadowMap.enabled&&v.length>0,shadowMapType:n.shadowMap.type,toneMapping:oi,decodeVideoTexture:xe&&f.map.isVideoTexture===!0&&gt.getTransfer(f.map.colorSpace)===bt,decodeVideoTextureEmissive:N&&f.emissiveMap.isVideoTexture===!0&&gt.getTransfer(f.emissiveMap.colorSpace)===bt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Ii,flipSided:f.side===ki,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Tn&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tn&&f.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)x.push(v),x.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(x,f),(function(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)})(x,f),x.push(n.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=p[f.type],v;if(x){let y=Hn[x];v=Uf.clone(y.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,x){let v=h.get(x);return v!==void 0?++v.usedTimes:(v=new Vv(n,x,f,r),c.push(v),h.set(x,v)),v},releaseProgram:function(f){if(--f.usedTimes===0){let x=c.indexOf(f);c[x]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}},releaseShaderCache:function(f){o.remove(f)},programs:c,dispose:function(){o.dispose()}}}function Xv(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function im(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||qv),i.length>1&&i.sort(l||tm),r.length>1&&r.sort(l||tm)}}}function Yv(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new im,n.set(e,[r])):t>=i.length?(r=new im,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function Zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Te};break;case"SpotLight":t={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new R,halfWidth:new R,halfHeight:new R}}return n[e.id]=t,t}}}var Jv=0;function Kv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $v(n){let e=new Zv,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new R);let r=new R,s=new tt,a=new tt;return{setup:function(o){let l=0,c=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,d=0,p=0,g=0,f=0,x=0,v=0,y=0,S=0,T=0,b=0;o.sort(Kv);for(let U=0,O=o.length;U<O;U++){let P=o[U],H=P.color,W=P.intensity,G=P.distance,j=null;if(P.shadow&&P.shadow.map&&(j=P.shadow.map.texture.format===fa?P.shadow.map.texture:P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=H.r*W,c+=H.g*W,h+=H.b*W;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],W);b++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=P.shadow.matrix,x++}i.directional[u]=V,u++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(H).multiplyScalar(W),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[p]=V;let q=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[p]=q.matrix,P.castShadow){let Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=j,y++}p++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(H).multiplyScalar(W),V.halfWidth.set(.5*P.width,0,0),V.halfHeight.set(0,.5*P.height,0),i.rectArea[g]=V,g++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let q=P.shadow,Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=P.shadow.matrix,v++}i.point[d]=V,d++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(W),V.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[f]=V,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let I=i.hash;I.directionalLength===u&&I.pointLength===d&&I.spotLength===p&&I.rectAreaLength===g&&I.hemiLength===f&&I.numDirectionalShadows===x&&I.numPointShadows===v&&I.numSpotShadows===y&&I.numSpotMaps===S&&I.numLightProbes===b||(i.directional.length=u,i.spot.length=p,i.rectArea.length=g,i.point.length=d,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,I.directionalLength=u,I.pointLength=d,I.spotLength=p,I.rectAreaLength=g,I.hemiLength=f,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=S,I.numLightProbes=b,i.version=Jv++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,g=l.matrixWorldInverse;for(let f=0,x=o.length;f<x;f++){let v=o[f];if(v.isDirectionalLight){let y=i.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),c++}else if(v.isSpotLight){let y=i.spot[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),u++}else if(v.isRectAreaLight){let y=i.rectArea[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(.5*v.width,0,0),y.halfHeight.set(0,.5*v.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),p++}}},state:i}}function nm(n){let e=new $v(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Qv(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new nm(n),e.set(t,[s])):i>=r.length?(s=new nm(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var ey=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ty=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],rm=new tt,Eo=new R,fd=new R;function iy(n,e,t){let i=new Nr,r=new pe,s=new pe,a=new Bt,o=new tc,l=new ic,c={},h=t.maxTextureSize,u={[ca]:ki,[ki]:ca,[Ii]:Ii},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new ge(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let v=this.type;function y(I,U){let O=e.update(f);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ji(r.x,r.y,{format:fa,type:zn})),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(U,null,O,d,f,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(U,null,O,p,f,null)}function S(I,U,O,P){let H=null,W=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(W!==void 0)H=W;else if(H=O.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let G=H.uuid,j=U.uuid,V=c[G];V===void 0&&(V={},c[G]=V);let q=V[j];q===void 0&&(q=H.clone(),V[j]=q,U.addEventListener("dispose",b)),H=q}return H.visible=U.visible,H.wireframe=U.wireframe,H.side=P===la?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],H.alphaMap=U.alphaMap,H.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,H.map=U.map,H.clipShadows=U.clipShadows,H.clippingPlanes=U.clippingPlanes,H.clipIntersection=U.clipIntersection,H.displacementMap=U.displacementMap,H.displacementScale=U.displacementScale,H.displacementBias=U.displacementBias,H.wireframeLinewidth=U.wireframeLinewidth,H.linewidth=U.linewidth,O.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(n.properties.get(H).light=O),H}function T(I,U,O,P,H){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&H===la)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let G=e.update(I),j=I.material;if(Array.isArray(j)){let V=G.groups;for(let q=0,Y=V.length;q<Y;q++){let J=V[q],ne=j[J.materialIndex];if(ne&&ne.visible){let ye=S(I,ne,P,H);I.onBeforeShadow(n,I,U,O,G,ye,J),n.renderBufferDirect(O,null,G,ye,I,J),I.onAfterShadow(n,I,U,O,G,ye,J)}}}else if(j.visible){let V=S(I,j,P,H);I.onBeforeShadow(n,I,U,O,G,V,null),n.renderBufferDirect(O,null,G,V,I,null),I.onAfterShadow(n,I,U,O,G,V,null)}}let W=I.children;for(let G=0,j=W.length;G<j;G++)T(W[G],U,O,P,H)}function b(I){I.target.removeEventListener("dispose",b);for(let U in c){let O=c[U],P=I.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}this.render=function(I,U,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===jp&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yo);let P=n.getRenderTarget(),H=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Bn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=v!==this.type;j&&U.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(q=>q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,q=I.length;V<q;V++){let Y=I[V],J=Y.shadow;if(J===void 0){He("WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let ne=J.getFrameExtents();r.multiply(ne),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,J.mapSize.y=s.y));let ye=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ye,J.map===null||j===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===la){if(Y.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ji(r.x,r.y,{format:fa,type:zn,minFilter:fi,magFilter:fi,generateMipmaps:!1}),J.map.texture.name=Y.name+".shadowMap",J.map.depthTexture=new Ur(r.x,r.y,an),J.map.depthTexture.name=Y.name+".shadowMapDepth",J.map.depthTexture.format=zr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn}else Y.isPointLight?(J.map=new Uc(r.x),J.map.depthTexture=new Ol(r.x,fr)):(J.map=new ji(r.x,r.y),J.map.depthTexture=new Ur(r.x,r.y,fr)),J.map.depthTexture.name=Y.name+".shadowMap",J.map.depthTexture.format=zr,this.type===yo?(J.map.depthTexture.compareFunction=ye?Ic:Rc,J.map.depthTexture.minFilter=fi,J.map.depthTexture.magFilter=fi):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn);J.camera.updateProjectionMatrix()}let Me=J.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<Me;Ce++){if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,Ce),n.clear();else{Ce===0&&(n.setRenderTarget(J.map),n.clear());let xe=J.getViewport(Ce);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),G.viewport(a)}if(Y.isPointLight){let xe=J.camera,re=J.matrix,de=Y.distance||xe.far;de!==xe.far&&(xe.far=de,xe.updateProjectionMatrix()),Eo.setFromMatrixPosition(Y.matrixWorld),xe.position.copy(Eo),fd.copy(xe.position),fd.add(ey[Ce]),xe.up.copy(ty[Ce]),xe.lookAt(fd),xe.updateMatrixWorld(),re.makeTranslation(-Eo.x,-Eo.y,-Eo.z),rm.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(rm,xe.coordinateSystem,xe.reversedDepth)}else J.updateMatrices(Y);i=J.getFrustum(),T(U,O,J.camera,Y,this.type)}J.isPointLightShadow!==!0&&this.type===la&&y(J,O),J.needsUpdate=!1}v=this.type,x.needsUpdate=!1,n.setRenderTarget(P,H,W)}}function ny(n,e){let t=new function(){let _=!1,L=new Bt,F=null,z=new Bt(0,0,0,0);return{setMask:function($){F===$||_||(n.colorMask($,$,$,$),F=$)},setLocked:function($){_=$},setClear:function($,ee,Z,le,se){se===!0&&($*=le,ee*=le,Z*=le),L.set($,ee,Z,le),z.equals(L)===!1&&(n.clearColor($,ee,Z,le),z.copy(L))},reset:function(){_=!1,F=null,z.set(-1,0,0,0)}}},i=new function(){let _=!1,L=!1,F=null,z=null,$=null;return{setReversed:function(ee){if(L!==ee){let Z=e.get("EXT_clip_control");ee?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),L=ee;let le=$;$=null,this.setClear(le)}},getReversed:function(){return L},setTest:function(ee){ee?de(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ee){F===ee||_||(n.depthMask(ee),F=ee)},setFunc:function(ee){if(L&&(ee=If[ee]),z!==ee){switch(ee){case ru:n.depthFunc(n.NEVER);break;case su:n.depthFunc(n.ALWAYS);break;case au:n.depthFunc(n.LESS);break;case gc:n.depthFunc(n.LEQUAL);break;case ou:n.depthFunc(n.EQUAL);break;case lu:n.depthFunc(n.GEQUAL);break;case cu:n.depthFunc(n.GREATER);break;case hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=ee}},setLocked:function(ee){_=ee},setClear:function(ee){$!==ee&&($=ee,L&&(ee=1-ee),n.clearDepth(ee))},reset:function(){_=!1,F=null,z=null,$=null,L=!1}}},r=new function(){let _=!1,L=null,F=null,z=null,$=null,ee=null,Z=null,le=null,se=null;return{setTest:function(he){_||(he?de(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(he){L===he||_||(n.stencilMask(he),L=he)},setFunc:function(he,ce,fe){F===he&&z===ce&&$===fe||(n.stencilFunc(he,ce,fe),F=he,z=ce,$=fe)},setOp:function(he,ce,fe){ee===he&&Z===ce&&le===fe||(n.stencilOp(he,ce,fe),ee=he,Z=ce,le=fe)},setLocked:function(he){_=he},setClear:function(he){se!==he&&(n.clearStencil(he),se=he)},reset:function(){_=!1,L=null,F=null,z=null,$=null,ee=null,Z=null,le=null,se=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,f=null,x=null,v=null,y=null,S=null,T=new Te(0,0,0),b=0,I=!1,U=null,O=null,P=null,H=null,W=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,V=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=V>=2);let Y=null,J={},ne=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Me=new Bt().fromArray(ne),Ce=new Bt().fromArray(ye);function xe(_,L,F,z){let $=new Uint8Array(4),ee=n.createTexture();n.bindTexture(_,ee),n.texParameteri(_,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(_,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Z=0;Z<F;Z++)_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,$):n.texImage2D(L+Z,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$);return ee}let re={};function de(_){o[_]!==!0&&(n.enable(_),o[_]=!0)}function ve(_){o[_]!==!1&&(n.disable(_),o[_]=!1)}re[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),de(n.DEPTH_TEST),i.setFunc(gc),M(!1),N(tu),de(n.CULL_FACE),A(Bn);let Pe={[ha]:n.FUNC_ADD,[qp]:n.FUNC_SUBTRACT,[Yp]:n.FUNC_REVERSE_SUBTRACT};Pe[Zp]=n.MIN,Pe[Jp]=n.MAX;let Ve={[Kp]:n.ZERO,[$p]:n.ONE,[Qp]:n.SRC_COLOR,[tf]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[af]:n.DST_COLOR,[rf]:n.DST_ALPHA,[ef]:n.ONE_MINUS_SRC_COLOR,[nf]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[sf]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[hf]:n.ONE_MINUS_CONSTANT_COLOR,[uf]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function A(_,L,F,z,$,ee,Z,le,se,he){if(_!==Bn){if(d===!1&&(de(n.BLEND),d=!0),_===Xp)$=$||L,ee=ee||F,Z=Z||z,L===g&&$===v||(n.blendEquationSeparate(Pe[L],Pe[$]),g=L,v=$),F===f&&z===x&&ee===y&&Z===S||(n.blendFuncSeparate(Ve[F],Ve[z],Ve[ee],Ve[Z]),f=F,x=z,y=ee,S=Z),le.equals(T)!==!1&&se===b||(n.blendColor(le.r,le.g,le.b,se),T.copy(le),b=se),p=_,I=!1;else if(_!==p||he!==I){if(g===ha&&v===ha||(n.blendEquation(n.FUNC_ADD),g=ha,v=ha),he)switch(_){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sn:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",_)}else switch(_){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case iu:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",_)}f=null,x=null,y=null,S=null,T.set(0,0,0),b=0,p=_,I=he}}else d===!0&&(ve(n.BLEND),d=!1)}function M(_){U!==_&&(_?n.frontFace(n.CW):n.frontFace(n.CCW),U=_)}function N(_){_!==Vp?(de(n.CULL_FACE),_!==O&&(_===tu?n.cullFace(n.BACK):_===Wp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),O=_}function D(_,L,F){_?(de(n.POLYGON_OFFSET_FILL),H===L&&W===F||(H=L,W=F,i.getReversed()&&(L=-L),n.polygonOffset(L,F))):ve(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:de,disable:ve,bindFramebuffer:function(_,L){return l[_]!==L&&(n.bindFramebuffer(_,L),l[_]=L,_===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=L),_===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(_,L){let F=h,z=!1;if(_){F=c.get(L),F===void 0&&(F=[],c.set(L,F));let $=_.textures;if(F.length!==$.length||F[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Z=$.length;ee<Z;ee++)F[ee]=n.COLOR_ATTACHMENT0+ee;F.length=$.length,z=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,z=!0);z&&n.drawBuffers(F)},useProgram:function(_){return u!==_&&(n.useProgram(_),u=_,!0)},setBlending:A,setMaterial:function(_,L){_.side===Ii?ve(n.CULL_FACE):de(n.CULL_FACE);let F=_.side===ki;L&&(F=!F),M(F),_.blending===us&&_.transparent===!1?A(Bn):A(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),i.setFunc(_.depthFunc),i.setTest(_.depthTest),i.setMask(_.depthWrite),t.setMask(_.colorWrite);let z=_.stencilWrite;r.setTest(z),z&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),D(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:M,setCullFace:N,setLineWidth:function(_){_!==P&&(j&&n.lineWidth(_),P=_)},setPolygonOffset:D,setScissorTest:function(_){_?de(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)},activeTexture:function(_){_===void 0&&(_=n.TEXTURE0+G-1),Y!==_&&(n.activeTexture(_),Y=_)},bindTexture:function(_,L,F){F===void 0&&(F=Y===null?n.TEXTURE0+G-1:Y);let z=J[F];z===void 0&&(z={type:void 0,texture:void 0},J[F]=z),z.type===_&&z.texture===L||(Y!==F&&(n.activeTexture(F),Y=F),n.bindTexture(_,L||re[_]),z.type=_,z.texture=L)},unbindTexture:function(){let _=J[Y];_!==void 0&&_.type!==void 0&&(n.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(_){We("WebGLState:",_)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(_){We("WebGLState:",_)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(_){We("WebGLState:",_)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(_){We("WebGLState:",_)}},updateUBOMapping:function(_,L){let F=a.get(L);F===void 0&&(F=new WeakMap,a.set(L,F));let z=F.get(_);z===void 0&&(z=n.getUniformBlockIndex(L,_.name),F.set(_,z))},uniformBlockBinding:function(_,L){let F=a.get(L).get(_);s.get(L)!==F&&(n.uniformBlockBinding(L,F,_.__bindingPointIndex),s.set(L,F))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(_){We("WebGLState:",_)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(_){We("WebGLState:",_)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(_){We("WebGLState:",_)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(_){We("WebGLState:",_)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(_){We("WebGLState:",_)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(_){We("WebGLState:",_)}},scissor:function(_){Me.equals(_)===!1&&(n.scissor(_.x,_.y,_.z,_.w),Me.copy(_))},viewport:function(_){Ce.equals(_)===!1&&(n.viewport(_.x,_.y,_.z,_.w),Ce.copy(_))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Y=null,J={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,f=null,x=null,v=null,y=null,S=null,T=new Te(0,0,0),b=0,I=!1,U=null,O=null,P=null,H=null,W=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function ry(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Ys("canvas")}function f(A,M,N){let D=1,_=Ve(A);if((_.width>N||_.height>N)&&(D=N/Math.max(_.width,_.height)),D<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let L=Math.floor(D*_.width),F=Math.floor(D*_.height);u===void 0&&(u=g(L,F));let z=M?g(L,F):u;return z.width=L,z.height=F,z.getContext("2d").drawImage(A,0,0,L,F),He("WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+L+"x"+F+")."),z}return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),A}return A}function x(A){return A.generateMipmaps}function v(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,M,N,D,_=!1){if(A!==null){if(n[A]!==void 0)return n[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let L=M;if(M===n.RED&&(N===n.FLOAT&&(L=n.R32F),N===n.HALF_FLOAT&&(L=n.R16F),N===n.UNSIGNED_BYTE&&(L=n.R8)),M===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.R8UI),N===n.UNSIGNED_SHORT&&(L=n.R16UI),N===n.UNSIGNED_INT&&(L=n.R32UI),N===n.BYTE&&(L=n.R8I),N===n.SHORT&&(L=n.R16I),N===n.INT&&(L=n.R32I)),M===n.RG&&(N===n.FLOAT&&(L=n.RG32F),N===n.HALF_FLOAT&&(L=n.RG16F),N===n.UNSIGNED_BYTE&&(L=n.RG8)),M===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.RG8UI),N===n.UNSIGNED_SHORT&&(L=n.RG16UI),N===n.UNSIGNED_INT&&(L=n.RG32UI),N===n.BYTE&&(L=n.RG8I),N===n.SHORT&&(L=n.RG16I),N===n.INT&&(L=n.RG32I)),M===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.RGB8UI),N===n.UNSIGNED_SHORT&&(L=n.RGB16UI),N===n.UNSIGNED_INT&&(L=n.RGB32UI),N===n.BYTE&&(L=n.RGB8I),N===n.SHORT&&(L=n.RGB16I),N===n.INT&&(L=n.RGB32I)),M===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),N===n.UNSIGNED_INT&&(L=n.RGBA32UI),N===n.BYTE&&(L=n.RGBA8I),N===n.SHORT&&(L=n.RGBA16I),N===n.INT&&(L=n.RGBA32I)),M===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(L=n.R11F_G11F_B10F)),M===n.RGBA){let F=_?Ka:gt.getTransfer(D);N===n.FLOAT&&(L=n.RGBA32F),N===n.HALF_FLOAT&&(L=n.RGBA16F),N===n.UNSIGNED_BYTE&&(L=F===bt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return L!==n.R16F&&L!==n.R32F&&L!==n.RG16F&&L!==n.RG32F&&L!==n.RGBA16F&&L!==n.RGBA32F||e.get("EXT_color_buffer_float"),L}function T(A,M){let N;return A?M===null||M===fr||M===pa?N=n.DEPTH24_STENCIL8:M===an?N=n.DEPTH32F_STENCIL8:M===da&&(N=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fr||M===pa?N=n.DEPTH_COMPONENT24:M===an?N=n.DEPTH_COMPONENT32F:M===da&&(N=n.DEPTH_COMPONENT16),N}function b(A,M){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==fi?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){let M=A.target;M.removeEventListener("dispose",I),(function(N){let D=i.get(N);if(D.__webglInit===void 0)return;let _=N.source,L=d.get(_);if(L){let F=L[D.__cacheKey];F.usedTimes--,F.usedTimes===0&&O(N),Object.keys(L).length===0&&d.delete(_)}i.remove(N)})(M),M.isVideoTexture&&h.delete(M)}function U(A){let M=A.target;M.removeEventListener("dispose",U),(function(N){let D=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(D.__webglFramebuffer[L]))for(let F=0;F<D.__webglFramebuffer[L].length;F++)n.deleteFramebuffer(D.__webglFramebuffer[L][F]);else n.deleteFramebuffer(D.__webglFramebuffer[L]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[L])}else{if(Array.isArray(D.__webglFramebuffer))for(let L=0;L<D.__webglFramebuffer.length;L++)n.deleteFramebuffer(D.__webglFramebuffer[L]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let L=0;L<D.__webglColorRenderbuffer.length;L++)D.__webglColorRenderbuffer[L]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[L]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let _=N.textures;for(let L=0,F=_.length;L<F;L++){let z=i.get(_[L]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(_[L])}i.remove(N)})(M)}function O(A){let M=i.get(A);n.deleteTexture(M.__webglTexture);let N=A.source;delete d.get(N)[M.__cacheKey],a.memory.textures--}let P=0;function H(A,M){let N=i.get(A);if(A.isVideoTexture&&(function(D){let _=a.render.frame;h.get(D)!==_&&(h.set(D,_),D.update())})(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){let D=A.image;if(D===null)He("WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void J(N,A,M);He("WebGLRenderer: Texture marked for update but image is incomplete")}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+M)}let W={[is]:n.REPEAT,[Dr]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},G={[tn]:n.NEAREST,[gf]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[xc]:n.LINEAR_MIPMAP_NEAREST,[Sn]:n.LINEAR_MIPMAP_LINEAR},j={[Mf]:n.NEVER,[Tf]:n.ALWAYS,[Sf]:n.LESS,[Rc]:n.LEQUAL,[bf]:n.EQUAL,[Ic]:n.GEQUAL,[Ef]:n.GREATER,[wf]:n.NOTEQUAL};function V(A,M){if(M.type!==an||e.has("OES_texture_float_linear")!==!1||M.magFilter!==fi&&M.magFilter!==xc&&M.magFilter!==_o&&M.magFilter!==Sn&&M.minFilter!==fi&&M.minFilter!==xc&&M.minFilter!==_o&&M.minFilter!==Sn||He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,W[M.wrapT]),A!==n.TEXTURE_3D&&A!==n.TEXTURE_2D_ARRAY||n.texParameteri(A,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,G[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,G[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==_o&&M.minFilter!==Sn||M.type===an&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function q(A,M){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",I));let D=M.source,_=d.get(D);_===void 0&&(_={},d.set(D,_));let L=(function(F){let z=[];return z.push(F.wrapS),z.push(F.wrapT),z.push(F.wrapR||0),z.push(F.magFilter),z.push(F.minFilter),z.push(F.anisotropy),z.push(F.internalFormat),z.push(F.format),z.push(F.type),z.push(F.generateMipmaps),z.push(F.premultiplyAlpha),z.push(F.flipY),z.push(F.unpackAlignment),z.push(F.colorSpace),z.join()})(M);if(L!==A.__cacheKey){_[L]===void 0&&(_[L]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),_[L].usedTimes++;let F=_[A.__cacheKey];F!==void 0&&(_[A.__cacheKey].usedTimes--,F.usedTimes===0&&O(M)),A.__cacheKey=L,A.__webglTexture=_[L].texture}return N}function Y(A,M,N){return Math.floor(Math.floor(A/N)/M)}function J(A,M,N){let D=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(D=n.TEXTURE_3D);let _=q(A,M),L=M.source;t.bindTexture(D,A.__webglTexture,n.TEXTURE0+N);let F=i.get(L);if(L.version!==F.__version||_===!0){t.activeTexture(n.TEXTURE0+N);let z=gt.getPrimaries(gt.workingColorSpace),$=M.colorSpace===fs?null:gt.getPrimaries(M.colorSpace),ee=M.colorSpace===fs||z===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Z=f(M.image,!1,r.maxTextureSize);Z=Pe(M,Z);let le=s.convert(M.format,M.colorSpace),se=s.convert(M.type),he,ce=S(M.internalFormat,le,se,M.colorSpace,M.isVideoTexture);V(D,M);let fe=M.mipmaps,Be=M.isVideoTexture!==!0,qe=F.__version===void 0||_===!0,mt=L.dataReady,ct=b(M,Z);if(M.isDepthTexture)ce=T(M.format===ps,M.type),qe&&(Be?t.texStorage2D(n.TEXTURE_2D,1,ce,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ce,Z.width,Z.height,0,le,se,null));else if(M.isDataTexture)if(fe.length>0){Be&&qe&&t.texStorage2D(n.TEXTURE_2D,ct,ce,fe[0].width,fe[0].height);for(let be=0,De=fe.length;be<De;be++)he=fe[be],Be?mt&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,he.width,he.height,le,se,he.data):t.texImage2D(n.TEXTURE_2D,be,ce,he.width,he.height,0,le,se,he.data);M.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(n.TEXTURE_2D,ct,ce,Z.width,Z.height),mt&&(function(be,De,xt,Jt){let Ee=be.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,De.width,De.height,xt,Jt,De.data);else{Ee.sort((oi,Ct)=>oi.start-Ct.start);let je=0;for(let oi=1;oi<Ee.length;oi++){let Ct=Ee[je],Lt=Ee[oi],Ni=Ct.start+Ct.count,B=Y(Lt.start,De.width,4),An=Y(Ct.start,De.width,4);Lt.start<=Ni+1&&B===An&&Y(Lt.start+Lt.count-1,De.width,4)===B?Ct.count=Math.max(Ct.count,Lt.start+Lt.count-Ct.start):(++je,Ee[je]=Lt)}Ee.length=je+1;let Ye=n.getParameter(n.UNPACK_ROW_LENGTH),wn=n.getParameter(n.UNPACK_SKIP_PIXELS),Tn=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,De.width);for(let oi=0,Ct=Ee.length;oi<Ct;oi++){let Lt=Ee[oi],Ni=Math.floor(Lt.start/4),B=Math.ceil(Lt.count/4),An=Ni%De.width,vr=Math.floor(Ni/De.width),Nt=B;n.pixelStorei(n.UNPACK_SKIP_PIXELS,An),n.pixelStorei(n.UNPACK_SKIP_ROWS,vr),t.texSubImage2D(n.TEXTURE_2D,0,An,vr,Nt,1,xt,Jt,De.data)}be.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ye),n.pixelStorei(n.UNPACK_SKIP_PIXELS,wn),n.pixelStorei(n.UNPACK_SKIP_ROWS,Tn)}})(M,Z,le,se)):t.texImage2D(n.TEXTURE_2D,0,ce,Z.width,Z.height,0,le,se,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ce,fe[0].width,fe[0].height,Z.depth);for(let be=0,De=fe.length;be<De;be++)if(he=fe[be],M.format!==bn)if(le!==null)if(Be){if(mt)if(M.layerUpdates.size>0){let xt=ld(he.width,he.height,M.format,M.type);for(let Jt of M.layerUpdates){let Ee=he.data.subarray(Jt*xt/he.data.BYTES_PER_ELEMENT,(Jt+1)*xt/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Jt,he.width,he.height,1,le,Ee)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,he.width,he.height,Z.depth,le,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,ce,he.width,he.height,Z.depth,0,he.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?mt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,he.width,he.height,Z.depth,le,se,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,ce,he.width,he.height,Z.depth,0,le,se,he.data)}else{Be&&qe&&t.texStorage2D(n.TEXTURE_2D,ct,ce,fe[0].width,fe[0].height);for(let be=0,De=fe.length;be<De;be++)he=fe[be],M.format!==bn?le!==null?Be?mt&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(n.TEXTURE_2D,be,ce,he.width,he.height,0,he.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?mt&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,he.width,he.height,le,se,he.data):t.texImage2D(n.TEXTURE_2D,be,ce,he.width,he.height,0,le,se,he.data)}else if(M.isDataArrayTexture)if(Be){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ce,Z.width,Z.height,Z.depth),mt)if(M.layerUpdates.size>0){let be=ld(Z.width,Z.height,M.format,M.type);for(let De of M.layerUpdates){let xt=Z.data.subarray(De*be/Z.data.BYTES_PER_ELEMENT,(De+1)*be/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,Z.width,Z.height,1,le,se,xt)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,se,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,Z.width,Z.height,Z.depth,0,le,se,Z.data);else if(M.isData3DTexture)Be?(qe&&t.texStorage3D(n.TEXTURE_3D,ct,ce,Z.width,Z.height,Z.depth),mt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,se,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ce,Z.width,Z.height,Z.depth,0,le,se,Z.data);else if(M.isFramebufferTexture){if(qe)if(Be)t.texStorage2D(n.TEXTURE_2D,ct,ce,Z.width,Z.height);else{let be=Z.width,De=Z.height;for(let xt=0;xt<ct;xt++)t.texImage2D(n.TEXTURE_2D,xt,ce,be,De,0,le,se,null),be>>=1,De>>=1}}else if(fe.length>0){if(Be&&qe){let be=Ve(fe[0]);t.texStorage2D(n.TEXTURE_2D,ct,ce,be.width,be.height)}for(let be=0,De=fe.length;be<De;be++)he=fe[be],Be?mt&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le,se,he):t.texImage2D(n.TEXTURE_2D,be,ce,le,se,he);M.generateMipmaps=!1}else if(Be){if(qe){let be=Ve(Z);t.texStorage2D(n.TEXTURE_2D,ct,ce,be.width,be.height)}mt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,se,Z)}else t.texImage2D(n.TEXTURE_2D,0,ce,le,se,Z);x(M)&&v(D),F.__version=L.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ne(A,M,N,D,_,L){let F=s.convert(N.format,N.colorSpace),z=s.convert(N.type),$=S(N.internalFormat,F,z,N.colorSpace),ee=i.get(M),Z=i.get(N);if(Z.__renderTarget=M,!ee.__hasExternalTextures){let le=Math.max(1,M.width>>L),se=Math.max(1,M.height>>L);_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?t.texImage3D(_,L,$,le,se,M.depth,0,F,z,null):t.texImage2D(_,L,$,le,se,0,F,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ve(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,_,Z.__webglTexture,0,de(M)):(_===n.TEXTURE_2D||_>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,_,Z.__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(A,M,N){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){let D=M.depthTexture,_=D&&D.isDepthTexture?D.type:null,L=T(M.stencilBuffer,_),F=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(M),L,M.width,M.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(M),L,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,L,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,A)}else{let D=M.textures;for(let _=0;_<D.length;_++){let L=D[_],F=s.convert(L.format,L.colorSpace),z=s.convert(L.type),$=S(L.internalFormat,F,z,L.colorSpace);ve(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(M),$,M.width,M.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(M),$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(A,M,N){let D=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _=i.get(M.depthTexture);if(_.__renderTarget=M,_.__webglTexture&&M.depthTexture.image.width===M.width&&M.depthTexture.image.height===M.height||(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D){if(_.__webglInit===void 0&&(_.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),_.__webglTexture===void 0){_.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture),V(n.TEXTURE_CUBE_MAP,M.depthTexture);let ee=s.convert(M.depthTexture.format),Z=s.convert(M.depthTexture.type),le;M.depthTexture.format===zr?le=n.DEPTH_COMPONENT24:M.depthTexture.format===ps&&(le=n.DEPTH24_STENCIL8);for(let se=0;se<6;se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,le,M.width,M.height,0,ee,Z,null)}}else H(M.depthTexture,0);let L=_.__webglTexture,F=de(M),z=D?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,$=M.depthTexture.format===ps?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===zr)ve(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,z,L,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,$,z,L,0);else{if(M.depthTexture.format!==ps)throw new Error("Unknown depthTexture format");ve(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,z,L,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,$,z,L,0)}}function Ce(A){let M=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let D=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),D){let _=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,D.removeEventListener("dispose",_)};D.addEventListener("dispose",_),M.__depthDisposeCallback=_}M.__boundDepthTexture=D}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let D=0;D<6;D++)Me(M.__webglFramebuffer[D],A,D);else{let D=A.texture.mipmaps;D&&D.length>0?Me(M.__webglFramebuffer[0],A,0):Me(M.__webglFramebuffer,A,0)}else if(N){M.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[D]),M.__webglDepthbuffer[D]===void 0)M.__webglDepthbuffer[D]=n.createRenderbuffer(),ye(M.__webglDepthbuffer[D],A,!1);else{let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=M.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,L)}}else{let D=A.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ye(M.__webglDepthbuffer,A,!1);else{let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,L)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let xe=[],re=[];function de(A){return Math.min(r.maxSamples,A.samples)}function ve(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(A,M){let N=A.colorSpace,D=A.format,_=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==ns&&N!==fs&&(gt.getTransfer(N)===bt?D===bn&&_===Yi||He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",N)),M}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=P;return A>=r.maxTextures&&He("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A},this.resetTextureUnits=function(){P=0},this.setTexture2D=H,this.setTexture2DArray=function(A,M){let N=i.get(A);A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version?J(N,A,M):(A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+M))},this.setTexture3D=function(A,M){let N=i.get(A);A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version?J(N,A,M):t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+M)},this.setTextureCube=function(A,M){let N=i.get(A);A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version?(function(D,_,L){if(_.image.length!==6)return;let F=q(D,_),z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+L);let $=i.get(z);if(z.version!==$.__version||F===!0){t.activeTexture(n.TEXTURE0+L);let ee=gt.getPrimaries(gt.workingColorSpace),Z=_.colorSpace===fs?null:gt.getPrimaries(_.colorSpace),le=_.colorSpace===fs||ee===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let se=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let Ee=0;Ee<6;Ee++)ce[Ee]=se||he?he?_.image[Ee].image:_.image[Ee]:f(_.image[Ee],!0,r.maxCubemapSize),ce[Ee]=Pe(_,ce[Ee]);let fe=ce[0],Be=s.convert(_.format,_.colorSpace),qe=s.convert(_.type),mt=S(_.internalFormat,Be,qe,_.colorSpace),ct=_.isVideoTexture!==!0,be=$.__version===void 0||F===!0,De=z.dataReady,xt,Jt=b(_,fe);if(V(n.TEXTURE_CUBE_MAP,_),se){ct&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,mt,fe.width,fe.height);for(let Ee=0;Ee<6;Ee++){xt=ce[Ee].mipmaps;for(let je=0;je<xt.length;je++){let Ye=xt[je];_.format!==bn?Be!==null?ct?De&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,0,0,Ye.width,Ye.height,Be,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,mt,Ye.width,Ye.height,0,Ye.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,0,0,Ye.width,Ye.height,Be,qe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,mt,Ye.width,Ye.height,0,Be,qe,Ye.data)}}}else{if(xt=_.mipmaps,ct&&be){xt.length>0&&Jt++;let Ee=Ve(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,mt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(he){ct?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ce[Ee].width,ce[Ee].height,Be,qe,ce[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,mt,ce[Ee].width,ce[Ee].height,0,Be,qe,ce[Ee].data);for(let je=0;je<xt.length;je++){let Ye=xt[je].image[Ee].image;ct?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,0,0,Ye.width,Ye.height,Be,qe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,mt,Ye.width,Ye.height,0,Be,qe,Ye.data)}}else{ct?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Be,qe,ce[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,mt,Be,qe,ce[Ee]);for(let je=0;je<xt.length;je++){let Ye=xt[je];ct?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,0,0,Be,qe,Ye.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,mt,Be,qe,Ye.image[Ee])}}}x(_)&&v(n.TEXTURE_CUBE_MAP),$.__version=z.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version})(N,A,M):t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+M)},this.rebindTextures=function(A,M,N){let D=i.get(A);M!==void 0&&ne(D.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ce(A)},this.setupRenderTarget=function(A){let M=A.texture,N=i.get(A),D=i.get(M);A.addEventListener("dispose",U);let _=A.textures,L=A.isWebGLCubeRenderTarget===!0,F=_.length>1;if(F||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=M.version,a.memory.textures++),L){N.__webglFramebuffer=[];for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[z]=[];for(let $=0;$<M.mipmaps.length;$++)N.__webglFramebuffer[z][$]=n.createFramebuffer()}else N.__webglFramebuffer[z]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let z=0;z<M.mipmaps.length;z++)N.__webglFramebuffer[z]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(F)for(let z=0,$=_.length;z<$;z++){let ee=i.get(_[z]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let z=0;z<_.length;z++){let $=_[z];N.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[z]);let ee=s.convert($.format,$.colorSpace),Z=s.convert($.type),le=S($.internalFormat,ee,Z,$.colorSpace,A.isXRRenderTarget===!0),se=de(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,le,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,N.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),V(n.TEXTURE_CUBE_MAP,M);for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)ne(N.__webglFramebuffer[z][$],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,$);else ne(N.__webglFramebuffer[z],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);x(M)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let z=0,$=_.length;z<$;z++){let ee=_[z],Z=i.get(ee),le=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),V(le,ee),ne(N.__webglFramebuffer,A,ee,n.COLOR_ATTACHMENT0+z,le,0),x(ee)&&v(le)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(z,D.__webglTexture),V(z,M),M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)ne(N.__webglFramebuffer[$],A,M,n.COLOR_ATTACHMENT0,z,$);else ne(N.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,z,0);x(M)&&v(z),t.unbindTexture()}A.depthBuffer&&Ce(A)},this.updateRenderTargetMipmap=function(A){let M=A.textures;for(let N=0,D=M.length;N<D;N++){let _=M[N];if(x(_)){let L=y(A),F=i.get(_).__webglTexture;t.bindTexture(L,F),v(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ve(A)===!1){let M=A.textures,N=A.width,D=A.height,_=n.COLOR_BUFFER_BIT,L=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=i.get(A),z=M.length>1;if(z)for(let ee=0;ee<M.length;ee++)t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);let $=A.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(_|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(_|=n.STENCIL_BUFFER_BIT)),z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);let Z=i.get(M[ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,N,D,0,0,N,D,_,n.NEAREST),l===!0&&(xe.length=0,re.length=0,xe.push(n.COLOR_ATTACHMENT0+ee),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push(L),re.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let ee=0;ee<M.length;ee++){t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);let Z=i.get(M[ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sy(n,e){return{convert:function(t,i=fs){let r,s=gt.getTransfer(i);if(t===Yi)return n.UNSIGNED_BYTE;if(t===Mc)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(t===_u)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Mu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===yu)return n.BYTE;if(t===xu)return n.SHORT;if(t===da)return n.UNSIGNED_SHORT;if(t===_c)return n.INT;if(t===fr)return n.UNSIGNED_INT;if(t===an)return n.FLOAT;if(t===zn)return n.HALF_FLOAT;if(t===vf)return n.ALPHA;if(t===yf)return n.RGB;if(t===bn)return n.RGBA;if(t===zr)return n.DEPTH_COMPONENT;if(t===ps)return n.DEPTH_STENCIL;if(t===bc)return n.RED;if(t===Ec)return n.RED_INTEGER;if(t===fa)return n.RG;if(t===Su)return n.RG_INTEGER;if(t===bu)return n.RGBA_INTEGER;if(t===wc||t===Tc||t===Ac||t===Cc)if(s===bt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===wc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===wc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Tc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Eu||t===wu||t===Tu||t===Au){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Eu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Cu||t===Ru||t===Iu||t===Pu||t===Lu||t===Du||t===Nu){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Cu||t===Ru)return s===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Iu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Pu)return r.COMPRESSED_R11_EAC;if(t===Lu)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Du)return r.COMPRESSED_RG11_EAC;if(t===Nu)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Uu||t===Fu||t===Ou||t===Bu||t===zu||t===ku||t===Hu||t===Gu||t===Vu||t===Wu||t===ju||t===Xu||t===qu||t===Yu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Uu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Fu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ou)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Bu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===zu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ku)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Hu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Gu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Vu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Wu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ju)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Xu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===qu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Yu)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Zu||t===Ju||t===Ku){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Zu)return s===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===$u||t===Qu||t===ed||t===td){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===$u)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Qu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ed)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===td)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===pa?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var Sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ao(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qi({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bd=class extends lr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,f=typeof XRWebGLBinding<"u",x=new Sd,v={},y=t.getContextAttributes(),S=null,T=null,b=[],I=[],U=new pe,O=null,P=new $t;P.viewport=new Bt;let H=new $t;H.viewport=new Bt;let W=[P,H],G=new mc,j=null,V=null;function q(re){let de=I.indexOf(re.inputSource);if(de===-1)return;let ve=b[de];ve!==void 0&&(ve.update(re.inputSource,re.frame,c||a),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let re=0;re<b.length;re++){let de=I[re];de!==null&&(I[re]=null,b[re].disconnect(de))}j=null,V=null,x.reset();for(let re in v)delete v[re];e.setRenderTarget(S),p=null,d=null,u=null,r=null,T=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}function J(re){for(let de=0;de<re.removed.length;de++){let ve=re.removed[de],Pe=I.indexOf(ve);Pe>=0&&(I[Pe]=null,b[Pe].disconnect(ve))}for(let de=0;de<re.added.length;de++){let ve=re.added[de],Pe=I.indexOf(ve);if(Pe===-1){for(let A=0;A<b.length;A++){if(A>=I.length){I.push(ve),Pe=A;break}if(I[A]===null){I[A]=ve,Pe=A;break}}if(Pe===-1)break}let Ve=b[Pe];Ve&&Ve.connect(ve)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=b[re];return de===void 0&&(de=new $s,b[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=b[re];return de===void 0&&(de=new $s,b[re]=de),de.getGripSpace()},this.getHand=function(re){let de=b[re];return de===void 0&&(de=new $s,b[re]=de),de.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&f&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(U),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ve=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?ps:zr,ve=y.stencil?pa:fr);let Ve={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ji(d.textureWidth,d.textureHeight,{format:bn,type:Yi,depthTexture:new Ur(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ji(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let ne=new R,ye=new R;function Me(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let de=re.near,ve=re.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),G.near=H.near=P.near=de,G.far=H.far=P.far=ve,j===G.near&&V===G.far||(r.updateRenderState({depthNear:G.near,depthFar:G.far}),j=G.near,V=G.far),G.layers.mask=6|re.layers.mask,P.layers.mask=-5&G.layers.mask,H.layers.mask=-3&G.layers.mask;let Pe=re.parent,Ve=G.cameras;Me(G,Pe);for(let A=0;A<Ve.length;A++)Me(Ve[A],Pe);Ve.length===2?(function(A,M,N){ne.setFromMatrixPosition(M.matrixWorld),ye.setFromMatrixPosition(N.matrixWorld);let D=ne.distanceTo(ye),_=M.projectionMatrix.elements,L=N.projectionMatrix.elements,F=_[14]/(_[10]-1),z=_[14]/(_[10]+1),$=(_[9]+1)/_[5],ee=(_[9]-1)/_[5],Z=(_[8]-1)/_[0],le=(L[8]+1)/L[0],se=F*Z,he=F*le,ce=D/(-Z+le),fe=ce*-Z;if(M.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(fe),A.translateZ(ce),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),_[10]===-1)A.projectionMatrix.copy(M.projectionMatrix),A.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let Be=F+ce,qe=z+ce,mt=se-fe,ct=he+(D-fe),be=$*z/qe*Be,De=ee*z/qe*Be;A.projectionMatrix.makePerspective(mt,ct,be,De,Be,qe),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(G,P,H):G.projectionMatrix.copy(P.projectionMatrix),(function(A,M,N){N===null?A.matrix.copy(M.matrixWorld):(A.matrix.copy(N.matrixWorld),A.matrix.invert(),A.matrix.multiply(M.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(M.projectionMatrix),A.projectionMatrixInverse.copy(M.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Js*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(re,G,Pe)},this.getCamera=function(){return G},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(G)},this.getCameraTexture=function(re){return v[re]};let Ce=null,xe=new sm;xe.setAnimationLoop(function(re,de){if(h=de.getViewerPose(c||a),g=de,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Pe=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,Pe=!0);for(let A=0;A<ve.length;A++){let M=ve[A],N=null;if(p!==null)N=p.getViewport(M);else{let _=u.getViewSubImage(d,M);N=_.viewport,A===0&&(e.setRenderTargetTextures(T,_.colorTexture,_.depthStencilTexture),e.setRenderTarget(T))}let D=W[A];D===void 0&&(D=new $t,D.layers.enable(A),D.viewport=new Bt,W[A]=D),D.matrix.fromArray(M.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(M.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(N.x,N.y,N.width,N.height),A===0&&(G.matrix.copy(D.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pe===!0&&G.cameras.push(D)}let Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){u=i.getBinding();let A=u.getDepthInformation(ve[0]);A&&A.isValid&&A.texture&&x.init(A,r.renderState)}if(Ve&&Ve.includes("camera-access")&&f){e.state.unbindTexture(),u=i.getBinding();for(let A=0;A<ve.length;A++){let M=ve[A].camera;if(M){let N=v[M];N||(N=new ao,v[M]=N);let D=u.getCameraImage(M);N.sourceTexture=D}}}}for(let ve=0;ve<b.length;ve++){let Pe=I[ve],Ve=b[ve];Pe!==null&&Ve!==void 0&&Ve.update(Pe,de,c||a)}Ce&&Ce(re,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}),this.setAnimationLoop=function(re){Ce=re},this.dispose=function(){}}},ys=new xn,ay=new tt;function oy(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===ki&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===ki&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,ys.copy(l),ys.x*=-1,ys.y*=-1,ys.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),r.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(ys)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ad(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ki&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function ly(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,g){let f=u.value,x=d+"_"+p;if(g[x]===void 0)return g[x]=typeof f=="number"||typeof f=="boolean"?f:f.clone(),!0;{let v=g[x];if(typeof f=="number"||typeof f=="boolean"){if(v!==f)return g[x]=f,!0}else if(v.equals(f)===!1)return v.copy(f),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(x){let v=x.uniforms,y=0,S=16;for(let b=0,I=v.length;b<I;b++){let U=Array.isArray(v[b])?v[b]:[v[b]];for(let O=0,P=U.length;O<P;O++){let H=U[O],W=Array.isArray(H.value)?H.value:[H.value];for(let G=0,j=W.length;G<j;G++){let V=c(W[G]),q=y%S,Y=q%V.boundary,J=q+Y;y+=Y,J!==0&&S-J<V.storage&&(y+=S-J),H.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=V.storage}}}let T=y%S;T>0&&(y+=S-T),x.__size=y,x.__cache={}})(u),p=(function(x){let v=(function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=v;let y=n.createBuffer(),S=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y})(u),r[u.id]=p,u.addEventListener("dispose",h));let g=d.program;i.updateUBOMapping(u,g);let f=e.render.frame;s[u.id]!==f&&((function(x){let v=r[x.id],y=x.uniforms,S=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,b=y.length;T<b;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let U=0,O=I.length;U<O;U++){let P=I[U];if(l(P,T,U,S)===!0){let H=P.__offset,W=Array.isArray(P.value)?P.value:[P.value],G=0;for(let j=0;j<W.length;j++){let V=W[j],q=c(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,H+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=f)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null,kr=class{constructor(e={}){let{canvas:t=Af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Yi}=e,g;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let f=p,x=new Set([bu,Su,Ec]),v=new Set([Yi,fr,da,pa,Mc,Sc]),y=new Uint32Array(4),S=new Int32Array(4),T=null,b=null,I=[],U=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,H=!1;this._outputColorSpace=Tt;let W=0,G=0,j=null,V=-1,q=null,Y=new Bt,J=new Bt,ne=null,ye=new Te(0),Me=0,Ce=t.width,xe=t.height,re=1,de=null,ve=null,Pe=new Bt(0,0,Ce,xe),Ve=new Bt(0,0,Ce,xe),A=!1,M=new Nr,N=!1,D=!1,_=new tt,L=new R,F=new Bt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function ee(){return j===null?re:1}let Z,le,se,he,ce,fe,Be,qe,mt,ct,be,De,xt,Jt,Ee,je,Ye,wn,Tn,oi,Ct,Lt,Ni,B=i;function An(C,X){return t.getContext(C,X)}try{let C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Gr,!1),t.addEventListener("webglcontextrestored",Ta,!1),t.addEventListener("webglcontextcreationerror",Vr,!1),B===null){let X="webgl2";if(B=An(X,C),B===null)throw An(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw We("WebGLRenderer: "+C.message),C}function vr(){Z=new F0(B),Z.init(),Ct=new sy(B,Z),le=new L0(B,Z,e,Ct),se=new ny(B,Z),le.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),he=new z0(B),ce=new Xv,fe=new ry(B,Z,se,ce,le,Ct,he),Be=new U0(P),qe=new A0(B),Lt=new I0(B,qe),mt=new O0(B,qe,he,Lt),ct=new H0(B,mt,qe,Lt,he),wn=new k0(B,le,fe),Ee=new D0(ce),be=new jv(P,Be,Z,le,Lt,Ee),De=new oy(P,ce),xt=new Yv,Jt=new Qv(Z),Ye=new R0(P,Be,se,ct,g,l),je=new iy(P,ct,le),Ni=new ly(B,he,le,se),Tn=new P0(B,Z,he),oi=new B0(B,Z,he),he.programs=be.programs,P.capabilities=le,P.extensions=Z,P.properties=ce,P.renderLists=xt,P.shadowMap=je,P.state=se,P.info=he}vr(),f!==Yi&&(O=new V0(f,t.width,t.height,r,s));let Nt=new bd(P,B);function Gr(C){C.preventDefault(),nd("WebGLRenderer: Context Lost."),H=!0}function Ta(){nd("WebGLRenderer: Context Restored."),H=!1;let C=he.autoReset,X=je.enabled,Q=je.autoUpdate,ae=je.needsUpdate,te=je.type;vr(),he.autoReset=C,je.enabled=X,je.autoUpdate=Q,je.needsUpdate=ae,je.type=te}function Vr(C){We("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Cn(C){let X=C.target;X.removeEventListener("dispose",Cn),(function(Q){(function(ae){let te=ce.get(ae).programs;te!==void 0&&(te.forEach(function(me){be.releaseProgram(me)}),ae.isShaderMaterial&&be.releaseShaderCache(ae))})(Q),ce.remove(Q)})(X)}function Aa(C,X,Q){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=ki,C.needsUpdate=!0,jn(C,X,Q),C.side=ca,C.needsUpdate=!0,jn(C,X,Q),C.side=Ii):jn(C,X,Q)}this.xr=Nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize(Ce,xe,!1))},this.getSize=function(C){return C.set(Ce,xe)},this.setSize=function(C,X,Q=!0){Nt.isPresenting?He("WebGLRenderer: Can't change size while VR device is presenting."):(Ce=C,xe=X,t.width=Math.floor(C*re),t.height=Math.floor(X*re),Q===!0&&(t.style.width=C+"px",t.style.height=X+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,C,X))},this.getDrawingBufferSize=function(C){return C.set(Ce*re,xe*re).floor()},this.setDrawingBufferSize=function(C,X,Q){Ce=C,xe=X,re=Q,t.width=Math.floor(C*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(f!==Yi){if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(C||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(C){return C.copy(Y)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,X,Q,ae){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,X,Q,ae),se.viewport(Y.copy(Pe).multiplyScalar(re).round())},this.getScissor=function(C){return C.copy(Ve)},this.setScissor=function(C,X,Q,ae){C.isVector4?Ve.set(C.x,C.y,C.z,C.w):Ve.set(C,X,Q,ae),se.scissor(J.copy(Ve).multiplyScalar(re).round())},this.getScissorTest=function(){return A},this.setScissorTest=function(C){se.setScissorTest(A=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){ve=C},this.getClearColor=function(C){return C.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,Q=!0){let ae=0;if(C){let te=!1;if(j!==null){let me=j.texture.format;te=x.has(me)}if(te){let me=j.texture.type,Se=v.has(me),Re=Ye.getClearColor(),Ie=Ye.getClearAlpha(),Xe=Re.r,Ze=Re.g,ht=Re.b;Se?(y[0]=Xe,y[1]=Ze,y[2]=ht,y[3]=Ie,B.clearBufferuiv(B.COLOR,0,y)):(S[0]=Xe,S[1]=Ze,S[2]=ht,S[3]=Ie,B.clearBufferiv(B.COLOR,0,S))}else ae|=B.COLOR_BUFFER_BIT}X&&(ae|=B.DEPTH_BUFFER_BIT),Q&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Gr,!1),t.removeEventListener("webglcontextrestored",Ta,!1),t.removeEventListener("webglcontextcreationerror",Vr,!1),Ye.dispose(),xt.dispose(),Jt.dispose(),ce.dispose(),Be.dispose(),ct.dispose(),Lt.dispose(),Ni.dispose(),be.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Fo),Nt.removeEventListener("sessionend",Ca),Wn.stop()},this.renderBufferDirect=function(C,X,Q,ae,te,me){X===null&&(X=z);let Se=te.isMesh&&te.matrixWorld.determinant()<0,Re=(function(Ne,Ut,Kt,Ue,Fe){Ut.isScene!==!0&&(Ut=z),fe.resetTextureUnits();let qt=Ut.fog,Dt=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial?Ut.environment:null,ln=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ns,bi=Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial&&!Ue.envMap||Ue.isMeshPhongMaterial&&!Ue.envMap,vi=Be.get(Ue.envMap||Dt,bi),_r=Ue.vertexColors===!0&&!!Kt.attributes.color&&Kt.attributes.color.itemSize===4,rt=!!Kt.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),Ft=!!Kt.morphAttributes.position,ei=!!Kt.morphAttributes.normal,bs=!!Kt.morphAttributes.color,Es=Mn;Ue.toneMapped&&(j!==null&&j.isXRRenderTarget!==!0||(Es=P.toneMapping));let zi=Kt.morphAttributes.position||Kt.morphAttributes.normal||Kt.morphAttributes.color,Ji=zi!==void 0?zi.length:0,we=ce.get(Ue),Ki=b.state.lights;if(N===!0&&(D===!0||Ne!==q)){let yi=Ne===q&&Ue.id===V;Ee.setState(Ue,Ne,yi)}let Ui=!1;Ue.version===we.__version?we.needsLights&&we.lightsStateVersion!==Ki.state.version||we.outputColorSpace!==ln||Fe.isBatchedMesh&&we.batching===!1?Ui=!0:Fe.isBatchedMesh||we.batching!==!0?Fe.isBatchedMesh&&we.batchingColor===!0&&Fe.colorTexture===null||Fe.isBatchedMesh&&we.batchingColor===!1&&Fe.colorTexture!==null||Fe.isInstancedMesh&&we.instancing===!1?Ui=!0:Fe.isInstancedMesh||we.instancing!==!0?Fe.isSkinnedMesh&&we.skinning===!1?Ui=!0:Fe.isSkinnedMesh||we.skinning!==!0?Fe.isInstancedMesh&&we.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&we.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&we.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&we.instancingMorph===!1&&Fe.morphTexture!==null||we.envMap!==vi||Ue.fog===!0&&we.fog!==qt?Ui=!0:we.numClippingPlanes===void 0||we.numClippingPlanes===Ee.numPlanes&&we.numIntersection===Ee.numIntersection?(we.vertexAlphas!==_r||we.vertexTangents!==rt||we.morphTargets!==Ft||we.morphNormals!==ei||we.morphColors!==bs||we.toneMapping!==Es||we.morphTargetsCount!==Ji)&&(Ui=!0):Ui=!0:Ui=!0:Ui=!0:Ui=!0:(Ui=!0,we.__version=Ue.version);let Hi=we.currentProgram;Ui===!0&&(Hi=jn(Ue,Ut,Fe));let Ae=!1,li=!1,ws=!1,Je=Hi.getUniforms(),Mt=we.uniforms;if(se.useProgram(Hi.program)&&(Ae=!0,li=!0,ws=!0),Ue.id!==V&&(V=Ue.id,li=!0),Ae||q!==Ne){se.buffers.depth.getReversed()&&Ne.reversedDepth!==!0&&(Ne._reversedDepth=!0,Ne.updateProjectionMatrix()),Je.setValue(B,"projectionMatrix",Ne.projectionMatrix),Je.setValue(B,"viewMatrix",Ne.matrixWorldInverse);let yi=Je.map.cameraPosition;yi!==void 0&&yi.setValue(B,L.setFromMatrixPosition(Ne.matrixWorld)),le.logarithmicDepthBuffer&&Je.setValue(B,"logDepthBufFC",2/(Math.log(Ne.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&Je.setValue(B,"isOrthographic",Ne.isOrthographicCamera===!0),q!==Ne&&(q=Ne,li=!0,ws=!0)}if(we.needsLights&&(Ki.state.directionalShadowMap.length>0&&Je.setValue(B,"directionalShadowMap",Ki.state.directionalShadowMap,fe),Ki.state.spotShadowMap.length>0&&Je.setValue(B,"spotShadowMap",Ki.state.spotShadowMap,fe),Ki.state.pointShadowMap.length>0&&Je.setValue(B,"pointShadowMap",Ki.state.pointShadowMap,fe)),Fe.isSkinnedMesh){Je.setOptional(B,Fe,"bindMatrix"),Je.setOptional(B,Fe,"bindMatrixInverse");let yi=Fe.skeleton;yi&&(yi.boneTexture===null&&yi.computeBoneTexture(),Je.setValue(B,"boneTexture",yi.boneTexture,fe))}Fe.isBatchedMesh&&(Je.setOptional(B,Fe,"batchingTexture"),Je.setValue(B,"batchingTexture",Fe._matricesTexture,fe),Je.setOptional(B,Fe,"batchingIdTexture"),Je.setValue(B,"batchingIdTexture",Fe._indirectTexture,fe),Je.setOptional(B,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&Je.setValue(B,"batchingColorTexture",Fe._colorsTexture,fe));let Xn=Kt.morphAttributes;Xn.position===void 0&&Xn.normal===void 0&&Xn.color===void 0||wn.update(Fe,Kt,Hi),(li||we.receiveShadow!==Fe.receiveShadow)&&(we.receiveShadow=Fe.receiveShadow,Je.setValue(B,"receiveShadow",Fe.receiveShadow)),(Ue.isMeshStandardMaterial||Ue.isMeshLambertMaterial||Ue.isMeshPhongMaterial)&&Ue.envMap===null&&Ut.environment!==null&&(Mt.envMapIntensity.value=Ut.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=(kn===null&&(kn=new ss(cy,16,16,fa,zn),kn.name="DFG_LUT",kn.minFilter=fi,kn.magFilter=fi,kn.wrapS=Dr,kn.wrapT=Dr,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn)),li&&(Je.setValue(B,"toneMappingExposure",P.toneMappingExposure),we.needsLights&&(Yt=ws,(Ei=Mt).ambientLightColor.needsUpdate=Yt,Ei.lightProbe.needsUpdate=Yt,Ei.directionalLights.needsUpdate=Yt,Ei.directionalLightShadows.needsUpdate=Yt,Ei.pointLights.needsUpdate=Yt,Ei.pointLightShadows.needsUpdate=Yt,Ei.spotLights.needsUpdate=Yt,Ei.spotLightShadows.needsUpdate=Yt,Ei.rectAreaLights.needsUpdate=Yt,Ei.hemisphereLights.needsUpdate=Yt),qt&&Ue.fog===!0&&De.refreshFogUniforms(Mt,qt),De.refreshMaterialUniforms(Mt,Ue,re,xe,b.state.transmissionRenderTarget[Ne.id]),va.upload(B,lt(we),Mt,fe));var Ei,Yt;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(va.upload(B,lt(we),Mt,fe),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&Je.setValue(B,"center",Fe.center),Je.setValue(B,"modelViewMatrix",Fe.modelViewMatrix),Je.setValue(B,"normalMatrix",Fe.normalMatrix),Je.setValue(B,"modelMatrix",Fe.matrixWorld),Ue.isShaderMaterial||Ue.isRawShaderMaterial){let yi=Ue.uniformsGroups;for(let $i=0,Ia=yi.length;$i<Ia;$i++){let Ts=yi[$i];Ni.update(Ts,Hi),Ni.bind(Ts,Hi)}}return Hi})(C,X,Q,ae,te);se.setMaterial(ae,Se);let Ie=Q.index,Xe=1;if(ae.wireframe===!0){if(Ie=mt.getWireframeAttribute(Q),Ie===void 0)return;Xe=2}let Ze=Q.drawRange,ht=Q.attributes.position,ze=Ze.start*Xe,et=(Ze.start+Ze.count)*Xe;me!==null&&(ze=Math.max(ze,me.start*Xe),et=Math.min(et,(me.start+me.count)*Xe)),Ie!==null?(ze=Math.max(ze,0),et=Math.min(et,Ie.count)):ht!=null&&(ze=Math.max(ze,0),et=Math.min(et,ht.count));let jt=et-ze;if(jt<0||jt===1/0)return;let Xt;Lt.setup(te,ae,Re,Q,Ie);let Et=Tn;if(Ie!==null&&(Xt=qe.get(Ie),Et=oi,Et.setIndex(Xt)),te.isMesh)ae.wireframe===!0?(se.setLineWidth(ae.wireframeLinewidth*ee()),Et.setMode(B.LINES)):Et.setMode(B.TRIANGLES);else if(te.isLine){let Ne=ae.linewidth;Ne===void 0&&(Ne=1),se.setLineWidth(Ne*ee()),te.isLineSegments?Et.setMode(B.LINES):te.isLineLoop?Et.setMode(B.LINE_LOOP):Et.setMode(B.LINE_STRIP)}else te.isPoints?Et.setMode(B.POINTS):te.isSprite&&Et.setMode(B.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)$a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Et.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Ne=te._multiDrawStarts,Ut=te._multiDrawCounts,Kt=te._multiDrawCount,Ue=Ie?qe.get(Ie).bytesPerElement:1,Fe=ce.get(ae).currentProgram.getUniforms();for(let qt=0;qt<Kt;qt++)Fe.setValue(B,"_gl_DrawID",qt),Et.render(Ne[qt]/Ue,Ut[qt])}else if(te.isInstancedMesh)Et.renderInstances(ze,jt,te.count);else if(Q.isInstancedBufferGeometry){let Ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,Ne);Et.renderInstances(ze,jt,Ut)}else Et.render(ze,jt)},this.compile=function(C,X,Q=null){Q===null&&(Q=C),b=Jt.get(Q),b.init(X),U.push(b),Q.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),C!==Q&&C.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),b.setupLights();let ae=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let me=te.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){let Re=me[Se];Aa(Re,Q,te),ae.add(Re)}else Aa(me,Q,te),ae.add(me)}),b=U.pop(),ae},this.compileAsync=function(C,X,Q=null){let ae=this.compile(C,X,Q);return new Promise(te=>{function me(){ae.forEach(function(Se){ce.get(Se).currentProgram.isReady()&&ae.delete(Se)}),ae.size!==0?setTimeout(me,10):te(C)}Z.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let _s=null;function Fo(){Wn.stop()}function Ca(){Wn.start()}let Wn=new sm;function Wr(C,X,Q,ae){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||M.intersectsSprite(C)){ae&&F.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_);let me=ct.update(C),Se=C.material;Se.visible&&T.push(C,me,Se,Q,F.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||M.intersectsObject(C))){let me=ct.update(C),Se=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),F.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),F.copy(me.boundingSphere.center)),F.applyMatrix4(C.matrixWorld).applyMatrix4(_)),Array.isArray(Se)){let Re=me.groups;for(let Ie=0,Xe=Re.length;Ie<Xe;Ie++){let Ze=Re[Ie],ht=Se[Ze.materialIndex];ht&&ht.visible&&T.push(C,me,ht,Q,F.z,Ze)}}else Se.visible&&T.push(C,me,Se,Q,F.z,null)}}let te=C.children;for(let me=0,Se=te.length;me<Se;me++)Wr(te[me],X,Q,ae)}function Ra(C,X,Q,ae){let{opaque:te,transmissive:me,transparent:Se}=C;b.setupLightsView(Q),N===!0&&Ee.setGlobalState(P.clippingPlanes,Q),ae&&se.viewport(Y.copy(ae)),te.length>0&&yr(te,X,Q),me.length>0&&yr(me,X,Q),Se.length>0&&yr(Se,X,Q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ms(C,X,Q,ae){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ae.id]===void 0){let ht=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ae.id]=new ji(1,1,{generateMipmaps:!0,type:ht?zn:Yi,minFilter:Sn,samples:Math.max(4,le.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let te=b.state.transmissionRenderTarget[ae.id],me=ae.viewport||Y;te.setSize(me.z*P.transmissionResolutionScale,me.w*P.transmissionResolutionScale);let Se=P.getRenderTarget(),Re=P.getActiveCubeFace(),Ie=P.getActiveMipmapLevel();P.setRenderTarget(te),P.getClearColor(ye),Me=P.getClearAlpha(),Me<1&&P.setClearColor(16777215,.5),P.clear(),$&&Ye.render(Q);let Xe=P.toneMapping;P.toneMapping=Mn;let Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),b.setupLightsView(ae),N===!0&&Ee.setGlobalState(P.clippingPlanes,ae),yr(C,Q,ae),fe.updateMultisampleRenderTarget(te),fe.updateRenderTargetMipmap(te),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let ze=0,et=X.length;ze<et;ze++){let jt=X[ze],{object:Xt,geometry:Et,material:Ne,group:Ut}=jt;if(Ne.side===Ii&&Xt.layers.test(ae.layers)){let Kt=Ne.side;Ne.side=ki,Ne.needsUpdate=!0,Ss(Xt,Q,ae,Et,Ne,Ut),Ne.side=Kt,Ne.needsUpdate=!0,ht=!0}}ht===!0&&(fe.updateMultisampleRenderTarget(te),fe.updateRenderTargetMipmap(te))}P.setRenderTarget(Se,Re,Ie),P.setClearColor(ye,Me),Ze!==void 0&&(ae.viewport=Ze),P.toneMapping=Xe}function yr(C,X,Q){let ae=X.isScene===!0?X.overrideMaterial:null;for(let te=0,me=C.length;te<me;te++){let Se=C[te],{object:Re,geometry:Ie,group:Xe}=Se,Ze=Se.material;Ze.allowOverride===!0&&ae!==null&&(Ze=ae),Re.layers.test(Q.layers)&&Ss(Re,X,Q,Ie,Ze,Xe)}}function Ss(C,X,Q,ae,te,me){C.onBeforeRender(P,X,Q,ae,te,me),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(P,X,Q,ae,C,me),te.transparent===!0&&te.side===Ii&&te.forceSinglePass===!1?(te.side=ki,te.needsUpdate=!0,P.renderBufferDirect(Q,X,ae,te,C,me),te.side=ca,te.needsUpdate=!0,P.renderBufferDirect(Q,X,ae,te,C,me),te.side=Ii):P.renderBufferDirect(Q,X,ae,te,C,me),C.onAfterRender(P,X,Q,ae,te,me)}function jn(C,X,Q){X.isScene!==!0&&(X=z);let ae=ce.get(C),te=b.state.lights,me=b.state.shadowsArray,Se=te.state.version,Re=be.getParameters(C,te.state,me,X,Q),Ie=be.getProgramCacheKey(Re),Xe=ae.programs;ae.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,ae.fog=X.fog;let Ze=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ae.envMap=Be.get(C.envMap||ae.environment,Ze),ae.envMapRotation=ae.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",Cn),Xe=new Map,ae.programs=Xe);let ht=Xe.get(Ie);if(ht!==void 0){if(ae.currentProgram===ht&&ae.lightsStateVersion===Se)return xr(C,Re),ht}else Re.uniforms=be.getUniforms(C),C.onBeforeCompile(Re,P),ht=be.acquireProgram(Re,Ie),Xe.set(Ie,ht),ae.uniforms=Re.uniforms;let ze=ae.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(ze.clippingPlanes=Ee.uniform),xr(C,Re),ae.needsLights=(function(et){return et.isMeshLambertMaterial||et.isMeshToonMaterial||et.isMeshPhongMaterial||et.isMeshStandardMaterial||et.isShadowMaterial||et.isShaderMaterial&&et.lights===!0})(C),ae.lightsStateVersion=Se,ae.needsLights&&(ze.ambientLightColor.value=te.state.ambient,ze.lightProbe.value=te.state.probe,ze.directionalLights.value=te.state.directional,ze.directionalLightShadows.value=te.state.directionalShadow,ze.spotLights.value=te.state.spot,ze.spotLightShadows.value=te.state.spotShadow,ze.rectAreaLights.value=te.state.rectArea,ze.ltc_1.value=te.state.rectAreaLTC1,ze.ltc_2.value=te.state.rectAreaLTC2,ze.pointLights.value=te.state.point,ze.pointLightShadows.value=te.state.pointShadow,ze.hemisphereLights.value=te.state.hemi,ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ze.spotLightMatrix.value=te.state.spotLightMatrix,ze.spotLightMap.value=te.state.spotLightMap,ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.currentProgram=ht,ae.uniformsList=null,ht}function lt(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=va.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function xr(C,X){let Q=ce.get(C);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}Wn.setAnimationLoop(function(C){_s&&_s(C)}),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){_s=C,Nt.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},Nt.addEventListener("sessionstart",Fo),Nt.addEventListener("sessionend",Ca),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0)return void We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(H===!0)return;let Q=Nt.enabled===!0&&Nt.isPresenting===!0,ae=O!==null&&(j===null||Q)&&O.begin(P,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Nt.enabled!==!0||Nt.isPresenting!==!0||O!==null&&O.isCompositing()!==!1||(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(X),X=Nt.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,X,j),b=Jt.get(C,U.length),b.init(X),U.push(b),_.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),M.setFromProjectionMatrix(_,or,X.reversedDepth),D=this.localClippingEnabled,N=Ee.init(this.clippingPlanes,D),T=xt.get(C,I.length),T.init(),I.push(T),Nt.enabled===!0&&Nt.isPresenting===!0){let me=P.xr.getDepthSensingMesh();me!==null&&Wr(me,X,-1/0,P.sortObjects)}Wr(C,X,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(de,ve),$=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,$&&Ye.addToRenderList(T,C),this.info.render.frame++,N===!0&&Ee.beginShadows();let te=b.state.shadowsArray;if(je.render(te,C,X),N===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&O.hasRenderPass())===!1){let me=T.opaque,Se=T.transmissive;if(b.setupLights(),X.isArrayCamera){let Re=X.cameras;if(Se.length>0)for(let Ie=0,Xe=Re.length;Ie<Xe;Ie++)Ms(me,Se,C,Re[Ie]);$&&Ye.render(C);for(let Ie=0,Xe=Re.length;Ie<Xe;Ie++){let Ze=Re[Ie];Ra(T,C,Ze,Ze.viewport)}}else Se.length>0&&Ms(me,Se,C,X),$&&Ye.render(C),Ra(T,C,X)}j!==null&&G===0&&(fe.updateMultisampleRenderTarget(j),fe.updateRenderTargetMipmap(j)),ae&&O.end(P),C.isScene===!0&&C.onAfterRender(P,C,X),Lt.resetDefaultState(),V=-1,q=null,U.pop(),U.length>0?(b=U[U.length-1],N===!0&&Ee.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,I.pop(),T=I.length>0?I[I.length-1]:null},this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,X,Q){let ae=ce.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=X,ce.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:Q,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){let Q=ce.get(C);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};let Si=B.createFramebuffer();this.setRenderTarget=function(C,X=0,Q=0){j=C,W=X,G=Q;let ae=null,te=!1,me=!1;if(C){let Se=ce.get(C);if(Se.__useDefaultFramebuffer!==void 0)return se.bindFramebuffer(B.FRAMEBUFFER,Se.__webglFramebuffer),Y.copy(C.viewport),J.copy(C.scissor),ne=C.scissorTest,se.viewport(Y),se.scissor(J),se.setScissorTest(ne),void(V=-1);if(Se.__webglFramebuffer===void 0)fe.setupRenderTarget(C);else if(Se.__hasExternalTextures)fe.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Xe=C.depthTexture;if(Se.__boundDepthTexture!==Xe){if(Xe!==null&&ce.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(C)}}let Re=C.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(me=!0);let Ie=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ae=Array.isArray(Ie[X])?Ie[X][Q]:Ie[X],te=!0):ae=C.samples>0&&fe.useMultisampledRTT(C)===!1?ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[Q]:Ie,Y.copy(C.viewport),J.copy(C.scissor),ne=C.scissorTest}else Y.copy(Pe).multiplyScalar(re).floor(),J.copy(Ve).multiplyScalar(re).floor(),ne=A;if(Q!==0&&(ae=Si),se.bindFramebuffer(B.FRAMEBUFFER,ae)&&se.drawBuffers(C,ae),se.viewport(Y),se.scissor(J),se.setScissorTest(ne),te){let Se=ce.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se.__webglTexture,Q)}else if(me){let Se=X;for(let Re=0;Re<C.textures.length;Re++){let Ie=ce.get(C.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,Q,Se)}}else if(C!==null&&Q!==0){let Se=ce.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,Q)}V=-1},this.readRenderTargetPixels=function(C,X,Q,ae,te,me,Se,Re=0){if(!C||!C.isWebGLRenderTarget)return void We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ie=Ie[Se]),Ie){se.bindFramebuffer(B.FRAMEBUFFER,Ie);try{let Xe=C.textures[Re],Ze=Xe.format,ht=Xe.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!le.textureFormatReadable(Ze))return void We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ht))return void We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");X>=0&&X<=C.width-ae&&Q>=0&&Q<=C.height-te&&B.readPixels(X,Q,ae,te,Ct.convert(Ze),Ct.convert(ht),me)}finally{let Xe=j!==null?ce.get(j).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,X,Q,ae,te,me,Se,Re=0){if(!C||!C.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ie=Ie[Se]),Ie){if(X>=0&&X<=C.width-ae&&Q>=0&&Q<=C.height-te){se.bindFramebuffer(B.FRAMEBUFFER,Ie);let Xe=C.textures[Re],Ze=Xe.format,ht=Xe.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!le.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(X,Q,ae,te,Ct.convert(Ze),Ct.convert(ht),0);let et=j!==null?ce.get(j).__webglFramebuffer:null;se.bindFramebuffer(B.FRAMEBUFFER,et);let jt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Rf(B,jt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.deleteBuffer(ze),B.deleteSync(jt),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,Q=0){let ae=Math.pow(2,-Q),te=Math.floor(C.image.width*ae),me=Math.floor(C.image.height*ae),Se=X!==null?X.x:0,Re=X!==null?X.y:0;fe.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Se,Re,te,me),se.unbindTexture()};let Oo=B.createFramebuffer(),Bo=B.createFramebuffer();this.copyTextureToTexture=function(C,X,Q=null,ae=null,te=0,me=0){let Se,Re,Ie,Xe,Ze,ht,ze,et,jt,Xt=C.isCompressedTexture?C.mipmaps[me]:C.image;if(Q!==null)Se=Q.max.x-Q.min.x,Re=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Xe=Q.min.x,Ze=Q.min.y,ht=Q.isBox3?Q.min.z:0;else{let vi=Math.pow(2,-te);Se=Math.floor(Xt.width*vi),Re=Math.floor(Xt.height*vi),Ie=C.isDataArrayTexture?Xt.depth:C.isData3DTexture?Math.floor(Xt.depth*vi):1,Xe=0,Ze=0,ht=0}ae!==null?(ze=ae.x,et=ae.y,jt=ae.z):(ze=0,et=0,jt=0);let Et=Ct.convert(X.format),Ne=Ct.convert(X.type),Ut;X.isData3DTexture?(fe.setTexture3D(X,0),Ut=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(fe.setTexture2DArray(X,0),Ut=B.TEXTURE_2D_ARRAY):(fe.setTexture2D(X,0),Ut=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);let Kt=B.getParameter(B.UNPACK_ROW_LENGTH),Ue=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Fe=B.getParameter(B.UNPACK_SKIP_PIXELS),qt=B.getParameter(B.UNPACK_SKIP_ROWS),Dt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ht);let ln=C.isDataArrayTexture||C.isData3DTexture,bi=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){let vi=ce.get(C),_r=ce.get(X),rt=ce.get(vi.__renderTarget),Ft=ce.get(_r.__renderTarget);se.bindFramebuffer(B.READ_FRAMEBUFFER,rt.__webglFramebuffer),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let ei=0;ei<Ie;ei++)ln&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,te,ht+ei),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.get(X).__webglTexture,me,jt+ei)),B.blitFramebuffer(Xe,Ze,Se,Re,ze,et,Se,Re,B.DEPTH_BUFFER_BIT,B.NEAREST);se.bindFramebuffer(B.READ_FRAMEBUFFER,null),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||ce.has(C)){let vi=ce.get(C),_r=ce.get(X);se.bindFramebuffer(B.READ_FRAMEBUFFER,Oo),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bo);for(let rt=0;rt<Ie;rt++)ln?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vi.__webglTexture,te,ht+rt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vi.__webglTexture,te),bi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_r.__webglTexture,me,jt+rt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_r.__webglTexture,me),te!==0?B.blitFramebuffer(Xe,Ze,Se,Re,ze,et,Se,Re,B.COLOR_BUFFER_BIT,B.NEAREST):bi?B.copyTexSubImage3D(Ut,me,ze,et,jt+rt,Xe,Ze,Se,Re):B.copyTexSubImage2D(Ut,me,ze,et,Xe,Ze,Se,Re);se.bindFramebuffer(B.READ_FRAMEBUFFER,null),se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bi?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ut,me,ze,et,jt,Se,Re,Ie,Et,Ne,Xt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,me,ze,et,jt,Se,Re,Ie,Et,Xt.data):B.texSubImage3D(Ut,me,ze,et,jt,Se,Re,Ie,Et,Ne,Xt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,ze,et,Se,Re,Et,Ne,Xt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,ze,et,Xt.width,Xt.height,Et,Xt.data):B.texSubImage2D(B.TEXTURE_2D,me,ze,et,Se,Re,Et,Ne,Xt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Kt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),B.pixelStorei(B.UNPACK_SKIP_ROWS,qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Dt),me===0&&X.generateMipmaps&&B.generateMipmap(Ut),se.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){W=0,G=0,j=null,se.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Ed=.55,hy="./assets/hero-monkey-chase-v2.png",uy=new R(0,0,-1),dy=new R(0,1,0);function Gn(n,e,t){return Math.max(e,Math.min(t,n))}function wo(n,e,t,i){return rd.damp(n,e,t,i)}function py(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function fy(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function hm(n,e,t){let i=Gn((t-n)/(e-n),0,1);return i*i*(3-2*i)}function my(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],g=c[u+2],f=p-Math.max(d,g),x=hm(24,92,f)*hm(72,180,p);if(x<=0)continue;c[u+3]=Math.round(c[u+3]*(1-x));let v=x*.78;c[u+1]=Math.round(p*(1-v)+Math.max(d,g)*v)}o.putImageData(l,0,0);let h=new On(a);return h.colorSpace=Tt,h.minFilter=Sn,h.magFilter=fi,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function um(n,e){let t=new pt;t.setAttribute("position",new zt(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new it({color:n,transparent:!0,opacity:e,depthWrite:!1,side:Ii,blending:us}),r=new ge(t,i);return r.frustumCulled=!1,r}function dm(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function gy(){let n=new Float32Array(24),e=new pt;e.setAttribute("position",new zt(n,3));let t=new Qs({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new ro(e,t);return i.frustumCulled=!1,i}function vy(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function pm(n,e){let t=new ft;t.position.set(n*.27,.14,.055);let i=new ge(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new ge(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new ge(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new ge(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function fm({scene:n,camera:e,renderer:t,assetUrl:i=hy,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await fy(i),o=my(a,t),l=new ft;l.name="playerRig";let c=new ft;c.name="playerAttitude",l.add(c);let h=new it({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:Ii,toneMapped:!0}),u=new ge(new mi(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new kt(.018,.025,.62,6),jointGeometry:new Qt(.065,8,5),thrusterGeometry:new kt(.045,.06,.14,7),trailGeometry:new Oi(.06,.48,7,1,!0),metalMaterial:new gi({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new gi({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new it({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new it({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:Ii,blending:sn})},p=pm(-1,d),g=pm(1,d);c.add(p,g);let f=um(12853285,.88),x=um(9376024,.78);c.add(f,x);let v=gy();c.add(v);let y=new ri(16757051,r?1.4:2.1,4.5,2);y.position.set(0,-.04,.34),c.add(y),n.add(l);let S={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:Ed,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,g],scarves:[f,x],tail:v,engineLight:y,materials:{metal:d.metalMaterial,brass:d.brassMaterial,thruster:d.thrusterMaterial,trail:d.trailMaterial,scarves:[f.material,x.material]},cameraVelocity:new R,cameraTarget:new R,lookTarget:new R,aimForward:uy.clone(),disposed:!1};return Td(S,r),S}function To(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=Gn(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=Gn(t.bank??-(t.vx||0)*.08,-.52,.52),a=Gn(t.pitch??-(t.vy||0)*.045,-.36,.36),o=Gn(-(t.vx||0)*.022,-.18,.18),l=Gn(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=wo(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=wo(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=wo(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=wo(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=wo(n.wings[1].rotation.z,-u,12,r),dm(n.scarves[0],n.time,-1,l),dm(n.scarves[1],n.time+.17,1,l),vy(n.tail,n.time,s);let d=Gn(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((g,f)=>{let x=g.userData.trail,v=.9+Math.sin(n.time*28+f)*.12;x.scale.set(.85+d*.25,.55+d*.7*v,.85+d*.25),x.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function wd(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=Gn(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),py(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=Gn(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(dy),r.lookAt(n.lookTarget),r.rotateZ(Gn(-(t.bank||0)*.12,-.07,.07))}function Td(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}function Oc(n,e={}){if(!n||n.disposed)return;let t=e.airframe||"clockwork-pinions",i=e.outfit||"rescue-scarf",r=n.materials,s={"clockwork-pinions":{metal:8226181,brass:12094010,trail:16747058,scaleX:1,scaleY:1},"howler-rocket-rig":{metal:9128243,brass:14983750,trail:16734756,scaleX:.92,scaleY:1.16},"thunderbird-glider":{metal:4943731,brass:8317139,trail:5564640,scaleX:1.18,scaleY:.96}}[t];r.metal.color.setHex(s.metal),r.brass.color.setHex(s.brass),r.trail.color.setHex(s.trail),n.engineLight.color.setHex(s.trail),n.wings.forEach(o=>o.scale.set(s.scaleX,s.scaleY,1));let a={"rescue-scarf":{left:12853285,right:9376024,tint:16777215},"ace-jacket":{left:14721595,right:10313504,tint:16773592},"midnight-suit":{left:2847348,right:1457992,tint:13230559}}[i];r.scarves[0].color.setHex(a.left),r.scarves[1].color.setHex(a.right),n.hero.material.color.setHex(a.tint)}var xy=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg",null,null,null,null],Wt=-5.32,_y=18,My=11.5,Sy=10.7,by=7,on=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8}),Object.freeze({id:"frozen-transit-grid",name:"Frozen Transit Grid",sky:2705232,fog:7902362,road:1581863,sidewalk:8557463,roof:4347483,metal:9413544,marking:14218482,light:7337960,beacon:16766036,facade:[5072748,7440267,3561054],windows:[13172735,7727069,16769953],minHeight:8,maxHeight:23,density:9}),Object.freeze({id:"neon-arcology",name:"Neon Arcology",sky:3157317,fog:5591914,road:1119517,sidewalk:5067616,roof:2370101,metal:6648189,marking:9369040,light:6684618,beacon:16735354,facade:[3294032,4931419,2571075],windows:[7143375,16740246,15918975],minHeight:12,maxHeight:29,density:10}),Object.freeze({id:"desert-fortress",name:"Desert Fortress",sky:7166020,fog:9467485,road:2564637,sidewalk:7695197,roof:5327424,metal:7761764,marking:15781490,light:16765791,beacon:16733248,facade:[6511697,5199699,7693650],windows:[16768899,16745552,12379080],minHeight:6,maxHeight:18,density:8}),Object.freeze({id:"skyshield-command-core",name:"Skyshield Command Core",sky:1186592,fog:3555656,road:593168,sidewalk:5331551,roof:2436401,metal:8293007,marking:15265263,light:16055295,beacon:16725039,facade:[4147534,2503739,5857895],windows:[15924223,16730947,8313071],minHeight:14,maxHeight:34,density:10})]);function Ma(n,e,t){return Math.max(e,Math.min(t,n))}function gm(n){return Ma(Math.round(Number(n)||0),0,by)}function Bc(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function Ad(n,e,t=0){let i=Bc(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function Cd(n){let e=Bc(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Pt(n,e,t){return e+(t-e)*n()}function vm(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function Ey(n,e,t){let i=vm(128,256);if(!i){let f=new Te(n.facade[e]),x=new Uint8Array([f.r*255,f.g*255,f.b*255,255]),v=new ss(x,1,1);return v.needsUpdate=!0,v}let r=Cd(Ad(t,e,41)),s=i.getContext("2d"),a=new Te(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new Te(16777215),.12),c=n.windows.map(f=>new Te(f));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let f=0;f<u;f+=1)for(let x=0;x<h;x+=1){let v=x*d,y=f*p;s.fillStyle=`#${l.clone().multiplyScalar(Pt(r,.66,1.08)).getHexString()}`,s.fillRect(v+1,y+1,d-2,p-2);let S=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,T=r()<S?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${T.clone().multiplyScalar(Pt(r,.72,1.08)).getHexString()}`;let b=e===1?3:4,I=e===2?3:2;s.fillRect(v+b,y+I,Math.max(2,d-b*2),Math.max(2,p-I*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let f=0;f<16;f+=1){let x=Math.floor(r()*h)*d,v=Math.floor(r()*u)*p;s.fillRect(x+1,v+1,d-2,p-2)}}let g=new On(i);return g.colorSpace=Tt,g.wrapS=is,g.wrapT=is,g.repeat.set(e===1?1.5:1,e===2?1.5:2),g.needsUpdate=!0,g}function wy(n,e){let t=vm(1024,320);if(!t)return null;let i=Cd(Ad(e,813,on.indexOf(n))),r=t.getContext("2d"),s=new Te(n.sky),a=new Te(n.fog).lerp(new Te(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=Pt(i,18,54),u=Pt(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-Pt(i,12,55),2,Pt(i,12,55)),l+=h+Pt(i,3,13)}let c=new On(t);return c.colorSpace=Tt,c.needsUpdate=!0,c}function _a(n){return new gi({roughness:.76,metalness:.24,...n})}function mm(n,e,t,i){let r=new as(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(ma),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function _i(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function xs(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function Sa(n,e,t){let i=on[t],r=Cd(Ad(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;_i(s.road,0,Wt+.035,0,a*2,.07,o-.08,{color:i.road}),_i(s.sidewalk,-(a+.72),Wt+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),_i(s.sidewalk,a+.72,Wt+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])_i(s.markings,c,Wt+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);xs(s.metalCylinder,u,Wt+1.5,h,.055,2.85,{color:i.metal}),_i(s.metalBox,u-c*.27,Wt+2.83,h,.58,.06,.06,{color:i.metal}),_i(s.lights,u-c*.52,Wt+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density>=9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=Pt(r,t===1?3.4:2.5,t===2?5.8:5.1),p=Pt(r,2.8,4.8),g=a+1.45+u*4.6+Pt(r,0,1.2),f=c*(g+d/2),x=Pt(r,-o*.42,o*.42),v=Pt(r,i.minHeight,i.maxHeight);t===1&&h>1&&(v*=.72),t===3&&r()<.22&&(v*=.58);let y=Math.floor(r()*3),S=Ma(v*Pt(r,.18,.28),1.2,3.4),T=v-S;s.facade.push({level:t,family:y,x:f,y:Wt+S/2,z:x,sx:d*1.14,sy:S,sz:p*1.12,ry:0});let b=t===2||v>10||r()<.42,I=b?Pt(r,.58,.74):1,U=T*I;s.facade.push({level:t,family:y,x:f,y:Wt+S+U/2,z:x,sx:d,sy:U,sz:p,ry:0});let O=Wt+S+U,P=d,H=p;if(b){let W=T-U;P=d*Pt(r,.58,.78),H=p*Pt(r,.6,.82),s.facade.push({level:t,family:(y+1)%3,x:f,y:O+W/2,z:x,sx:P,sy:W,sz:H,ry:0}),O+=W}if(_i(s.roof,f,O+.11,x,P*.88,.22,H*.86,{color:i.roof}),r()<.78&&_i(s.metalBox,f+Pt(r,-P*.2,P*.2),O+.35,x,P*.24,.5,H*.24,{color:i.metal}),v>11&&r()<.46){let W=Pt(r,1.1,t===2?3.8:2.5);xs(s.metalCylinder,f,O+W/2,x,.055,W,{color:i.metal}),_i(s.lights,f,O+W,x,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){_i(s.metalBox,0,Wt+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])xs(s.metalCylinder,c*(a+.32),Wt+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+Pt(r,0,3));if(e%2===0){let u=Pt(r,7,13);xs(s.metalCylinder,h,Wt+u/2,Pt(r,-3,3),.52,u,{color:6643288}),_i(s.lights,h,Wt+u+.15,0,.22,.22,.22,{color:i.beacon})}else xs(s.metalCylinder,h,Wt+1.15,Pt(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+Pt(r,4.5,10));_i(s.lights,h,Wt+Pt(r,1.2,5),Pt(r,-4,4),Pt(r,.35,.75),Pt(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}if(t===4&&e%3===1){_i(s.metalBox,0,Wt+5.8,0,a*2+3,.32,1.1,{color:i.metal});for(let c of[-1,1])xs(s.metalCylinder,c*(a+.8),Wt+2.9,0,.18,5.8,{color:i.metal})}if(t===5)for(let c of[-1,1])_i(s.lights,c*(a+2.2),Wt+4.8+e%3,0,.16,5.5,.16,{color:e%2?i.light:i.beacon});if(t===6&&e%2===0)for(let c of[-1,1]){let h=c*(a+3.4);_i(s.metalBox,h,Wt+3.2,0,2.4,6.4,2.4,{color:i.metal}),_i(s.lights,h,Wt+6.55,0,.3,.3,.3,{color:i.beacon})}if(t===7){let c=9+e%4*2.2;for(let h of[-1,1]){let u=h*(a+4.8+e%2*2.4);xs(s.metalCylinder,u,Wt+c/2,0,.7,c,{color:i.metal}),_i(s.lights,u,Wt+c,0,.42,.42,.42,{color:i.beacon})}}return s}function Ty(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function ba(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(Ty(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function Ay(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=Tt,s.minFilter=Sn;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function ym(n,e,t){let i=wy(on[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,Ay(n,e,t,n.backdropTokens[t])}function Cy(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=Sa(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,ba(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:on[t.fromLevel],to:on[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=Sa(n,n.blocks[c].serial,t.toLevel));ba(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function Ry(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new Rt(1,1,1),s=new kt(.5,.5,1,8,1,!1),a=new mi(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=on.map((l,c)=>l.facade.map((h,u)=>{let d=Ey(l,u,n.seed);n.generatedTextures.add(d);let p=_a({color:h,map:d,emissiveMap:d,emissive:new Te(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let g=mm(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(g),n.movingRoot.add(g),g}));let o=(l,c,h,u)=>{n.materials.add(h);let d=mm(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,_a({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,_a({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,_a({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,_a({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,_a({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new it({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new it({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new it({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:Ii});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new ge(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),ym(n,n.level,0),n.backdropMaterials[0].opacity=1}function xm(n={}){let e=Ma(Math.floor(n.blockCount||_y),10,24),t=Ma(Number(n.blockSpacing)||My,9,16),i=Math.max(Sy,Number(n.corridorHalfWidth)||0),r=gm(n.level),s=new ft;s.name="streamed-city";let a=new ft;a.name="streamed-city-blocks";let o=new ft;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:Bc(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,on.length):xy.slice(),textureLoader:typeof document>"u"?null:new ur,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new ii,color:new Te,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};Ry(l);for(let h=0;h<e;h+=1)l.blocks.push(Sa(l,h,r));ba(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return Iy(c,h,u)},setLevel(h,u){return Py(c,h,u)},setSeed(h,u){return Ly(c,h,u)},getEnvironment(){return _m(c)},getStats(){return{...l.stats}},dispose(){Dy(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function zc(n){let e=n?._cityState;return!e||e.disposed?null:e}function Iy(n,e,t={}){let i=zc(n);if(!i)return null;let r=Ma(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push(Sa(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&ba(i),Cy(i,r),_m(n)}function Py(n,e,t={}){let i=zc(n);if(!i)return!1;let r=gm(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=Ma(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,ym(i,r,c),s?(i.blocks=i.blocks.map(h=>Sa(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,ba(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:on[r],to:on[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function Ly(n,e,t={}){let i=zc(n);if(!i)return!1;let r=Bc(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push(Sa(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,ba(i)}return!0}function _m(n){let e=zc(n);if(!e)return null;if(!e.transition){let o=on[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=on[t],a=on[i];return{level:i,mix:r,sky:new Te(s.sky).lerp(new Te(a.sky),r).getHex(),fog:new Te(s.fog).lerp(new Te(a.fog),r).getHex(),light:new Te(s.light).lerp(new Te(a.light),r).getHex(),theme:a}}function Dy(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var Ny=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,missileSalvo:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,missileSalvo:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,missileSalvo:1,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,missileSalvo:1,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])}),Object.freeze({id:"crossfire",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:16,intercept:20,missileSortie:44,flankingRun:20}),baseAircraft:3,maxAircraft:7,maxMissiles:4,missileSalvo:2,speedScale:1.3,recovery:Object.freeze([1.65,2.45]),warningLead:Object.freeze([1.2,1.72])}),Object.freeze({id:"tempest",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:13,intercept:18,missileSortie:49,flankingRun:20}),baseAircraft:4,maxAircraft:7,maxMissiles:5,missileSalvo:2,speedScale:1.36,recovery:Object.freeze([1.55,2.25]),warningLead:Object.freeze([1.18,1.62])}),Object.freeze({id:"killbox",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:10,intercept:16,missileSortie:54,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:6,missileSalvo:2,speedScale:1.42,recovery:Object.freeze([1.45,2.05]),warningLead:Object.freeze([1.15,1.55])}),Object.freeze({id:"last-stand",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:8,intercept:14,missileSortie:58,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:7,missileSalvo:3,speedScale:1.48,recovery:Object.freeze([1.4,1.9]),warningLead:Object.freeze([1.15,1.48])})]),Ao=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var Uy=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),En=(n,e,t)=>Math.max(e,Math.min(t,n)),Ea=(n,e)=>Number.isFinite(n)?n:e;function Mm(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function Fy(n=7646257){let e=Mm(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=Mm(i)||1831565813},t}function Oy(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>En(Ea(n(),.5),0,.999999999999)}function By(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var Le,kc,Zi,Id,Sm,Hc,Gc,Pd,Co,bm,Em,wm,Tm,Vc,mr,Rd=class{constructor({seed:e=7646257,rng:t=Fy(e),levels:i=Ny,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){cp(this,Le);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=Oy(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=En(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=En(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),Ke(this,Le,mr).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&Ke(this,Le,Pd).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();Ke(this,Le,wm).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values(Ao).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,Ke(this,Le,Pd).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};Le=new WeakSet,kc=function(e){let t=this.levels[this.levelIndex],i=En(this.survivalTime/180,0,.42),r=En(Ea(e.difficulty,0),-.25,.5);return{scalar:En(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor(Ea(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor(Ea(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor(Ea(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor(Ea(e.activeMissiles,0)))}},Zi=function(e,t){return e+(t-e)*this.random()},Id=function(e){return e[Math.floor(this.random()*e.length)]},Sm=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||Ao.FORMATION},Hc=function(e){return this.serial+=1,`${e}-${this.serial}`},Gc=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},Pd=function(e,t){let i=this.levels[this.levelIndex],r=Ke(this,Le,kc).call(this,t),s=e||Ke(this,Le,Sm).call(this,i.weights),a=Ke(this,Le,Hc).call(this,"encounter"),o=Ke(this,Le,Em).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,Ke(this,Le,mr).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)Ke(this,Le,Gc).call(this,l.at,l.kind,l.payload);Ke(this,Le,Gc).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},Co=function(e,t,i,r={}){return{entityId:Ke(this,Le,Hc).call(this,"aircraft"),encounterId:e,typeHint:Ke(this,Le,Id).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:Ke(this,Le,Zi).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*Ke(this,Le,Zi).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:Ke(this,Le,Zi).call(this,0,Math.PI*2),amplitude:Ke(this,Le,Zi).call(this,.75,1.8),...r}},bm=function(e,t,i,r,s,a){let o=Ke(this,Le,Hc).call(this,"missile"),[l,c]=i.warningLead,h=Ke(this,Le,Zi).call(this,l,c)/En(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:En(.92+r.scalar*.2,1,1.28),guidanceScale:En(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},Em=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=By([0,1,2],this.random),l=5;if(e===Ao.FORMATION){let d=Math.min(a,En(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=Ke(this,Le,Id).call(this,["vee","echelon","stack"]);for(let g=0;g<d;g+=1){let f=o[g%o.length];s.push({at:g*Ke(this,Le,Zi).call(this,.42,.7),kind:"aircraftSpawn",payload:Ke(this,Le,Co).call(this,t,i,r,{role:p,lane:f,altitude:.2+(p==="stack"?g*1.25:g%2?1.5:0),spawnZ:-82-g*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===Ao.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:Ke(this,Le,Co).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:Ke(this,Le,Zi).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*Ke(this,Le,Zi).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===Ao.MISSILE_SORTIE){let d=Math.min(a,1+(this.levelIndex>=3?1:0)+(this.levelIndex>=6&&this.random()<.55?1:0)),p=Math.max(0,r.maxMissiles-r.activeMissiles),g=0;for(let f=0;f<d;f+=1){let x=Ke(this,Le,Co).call(this,t,i,r,{role:"missile-carrier",lane:o[f],altitude:Ke(this,Le,Zi).call(this,1.2,5),spawnZ:-88-f*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:f*1.05,kind:"aircraftSpawn",payload:x});let v=Math.max(1,Math.floor(i.missileSalvo||1));for(let y=0;y<v&&g<p;y+=1)s.push(...Ke(this,Le,bm).call(this,t,x.entityId,i,r,2.1+f*1.1+y*.78,x.lane===0?"left":x.lane===2?"right":"ahead")),g+=1}l=6.4+d*.8+Math.max(0,(i.missileSalvo||1)-1)*.78}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let g=0;g<d;g+=1){let f=p[g];s.push({at:g<2?g*.18:1.05,kind:"aircraftSpawn",payload:Ke(this,Le,Co).call(this,t,i,r,{role:f===0?"left-flanker":"right-flanker",lane:f,altitude:Ke(this,Le,Zi).call(this,-.8,4.3),spawnZ:-78-g*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:Ke(this,Le,Zi).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,Ke(this,Le,Zi).call(this,c,h)/En(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},wm=function(e,t){if(e.kind==="aircraftSpawn"){let i=Ke(this,Le,kc).call(this,t);if(i.activeAircraft>=i.maxAircraft){Ke(this,Le,Tm).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,Ke(this,Le,mr).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=Ke(this,Le,kc).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),Ke(this,Le,Vc).call(this,e,"missile-cap");return}Ke(this,Le,mr).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){Ke(this,Le,Vc).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,Ke(this,Le,mr).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",Ke(this,Le,mr).call(this,"recoveryStart",e.payload),Ke(this,Le,Gc).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,Ke(this,Le,mr).call(this,"recoveryEnd",e.payload))},Tm=function(e,t){if(e.retries>=this.maxSpawnRetries){Ke(this,Le,Vc).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},Vc=function(e,t){this.stats.actionsSkipped+=1,Ke(this,Le,mr).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},mr=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[Uy[e]]?.(i)===!1||r===!1)};function Am(n){return new Rd(n)}var Ro=56,Wc=7.05,Ld=14.4,Li=Object.freeze(["./assets/voices/01-skyshield-breach.mp3","./assets/voices/02-earth-loses-sky.mp3","./assets/voices/03-rescue-ace.mp3","./assets/voices/04-direction.mp3","./assets/voices/05-office.mp3","./assets/voices/06-found-you.mp3","./assets/voices/07-first-wings.mp3","./assets/voices/08-invisible-pilot.mp3","./assets/voices/09-recognition.mp3","./assets/voices/10-mission.mp3","./assets/voices/11-open-armory.mp3","./assets/voices/12-why-bananas.mp3","./assets/voices/13-armory-response.mp3","./assets/voices/14-potassium.mp3"]);function jc(n){let e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}function Dd(){let n=new ft,e=new gi({color:5661546,metalness:.82,roughness:.3}),t=new ge(new kt(.09,.16,1.25,7),e);t.rotation.x=Math.PI/2,n.add(t);let i=new ge(new Rt(1.1,.035,.36),e);i.position.z=.08,n.add(i);let r=new ge(new Rt(.48,.03,.2),e);r.position.z=.48,n.add(r);let s=new ri(16736050,2.4,3);return s.position.z=.7,n.add(s),n}function zy(n=17){let e=new ft,t=n>>>0,i=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=new gi({color:1319465,emissive:1523526,emissiveIntensity:.44,metalness:.28,roughness:.78});for(let s=0;s<52;s+=1){let a=1.1+i()*5.5,o=new ge(new Rt(.7+i()*1.1,a,.7+i()*1.1),r),l=s%2?-1:1;o.position.set(l*(2.3+i()*7.5),a*.5-1.2,-s*.9+i()*2),e.add(o)}return e.userData.material=r,e}function Cm(n){let e=new ur().load(n);e.colorSpace=Tt;let t=new it({map:e,transparent:!0,toneMapped:!1}),i=new ge(new mi(4.35,5.35),t);return i.position.set(0,1.25,-4),i.visible=!1,{mesh:i,texture:e,material:t}}function ky(){let n=new ft,e=new ge(new Qt(2.25,24,16),new it({color:4774096,wireframe:!0,transparent:!0,opacity:.38}));n.add(e);let t=new it({color:16729661,transparent:!0,opacity:.8});[0,1,2].forEach(s=>{let a=new ge(new Bi(3+s*.18,.018,5,72),t);a.rotation.set(Math.PI*(.18+s*.19),Math.PI*(.1+s*.24),0),n.add(a)});let i=new it({color:16735304});return[[-1.4,1.2,1.3],[1.6,.65,1.25],[.5,-1.65,1.3],[-1.7,-.7,-1.15],[1.35,1.45,-1.15]].forEach(s=>{let a=new ge(new Qt(.09,8,6),i);a.position.set(...s),n.add(a)}),n.position.set(0,1.25,-5.5),n.userData.shell=e,n}function Hy(){let n=new ft,e=new it({color:16727350,transparent:!0,opacity:.72}),t=new ge(new Bi(1.65,.075,8,48),e),i=new ge(new Rt(3.5,.14,.08),e);return i.rotation.z=-Math.PI/4,n.add(t,i),n.position.set(0,1.3,-4.4),n.visible=!1,n}function Rm({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onChoice:s=()=>{},onComplete:a=()=>{},isVoicePlaying:o=()=>!1}={}){if(!n)return null;let l=new kr({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches,alpha:!1});l.outputColorSpace=Tt,l.toneMapping=pr,l.toneMappingExposure=1.05;let c=new hr;c.background=new Te(133131),c.fog=new cr(463642,.035);let h=new $t(52,1,.1,140),u=zy();c.add(u);let d=ky(),p=Hy();c.add(d,p);let g=new ge(new mi(30,120),new gi({color:330253,metalness:.55,roughness:.62}));g.rotation.x=-Math.PI/2,g.position.set(0,-1.2,-34),c.add(g);let f=new dr(7985364,197894,1.5),x=new ri(16729144,0,24,2);x.position.set(-2,4,-12),c.add(f,x);let v=[Dd(),Dd(),Dd()];v.forEach((M,N)=>{M.position.set(-9-N*2.4,3.4+N*.7,-8-N*5),M.scale.setScalar(.78+N*.1),c.add(M)});let y=new ge(new Qt(.55,14,9),new it({color:16747580,transparent:!0,opacity:0}));y.position.set(-2.4,2.1,-13),c.add(y);let S=Cm(e),T=Cm(t);c.add(S.mesh,T.mesh);let b=new ge(new mi(5.05,6.05),new it({color:864052,transparent:!0,opacity:.72}));b.position.set(0,1.25,-4.18),b.visible=!1,c.add(b);let I=new Or([new R(0,2.4,14),new R(.8,1.65,5),new R(-1.5,2.1,-5),new R(1.2,2.8,-13)]),U=new R,O=new Set,P=!1,H=!1,W=!1,G=!1,j=0,V=0,q=0,Y=-1;function J(M,N){let D=performance.now()+M,_=()=>{if(!P)return;if(performance.now()>=D&&!o()){N();return}let F=setTimeout(_,80);O.add(F)},L=setTimeout(_,Math.min(250,M));O.add(L)}let ne=[{at:0,speaker:"Emergency broadcast",text:"At 04:17, Black Flag uploaded a command virus during a global defense drill.",voice:Li[0],subject:"globe",telemetry:["SKYSHIELD DRILL // ACTIVE","COMMAND VIRUS // UPLOADED"]},{at:Wc,speaker:"Emergency broadcast",text:"Skyshield seized every connected aircraft and turned Earth's defenses against its cities.",voice:Li[1],subject:"city",telemetry:["IFF DATABASE // REWRITTEN","DEFENSE FLEET // HOSTILE"]},{at:Ld,speaker:"Commander Vesper",text:"I know one pilot it never studied. Project Canopy's analog rescue ace.",voice:Li[2],subject:"vesper",telemetry:["PROJECT CANOPY // OFF-GRID","RESCUE ACE // WINGTAIL"]},{at:21.1,speaker:"Wingtail",text:"You forgot my excellent sense of direction.",voice:Li[3],subject:"wingtail",telemetry:["CANOPY RESCUES // 47","UNAUTHORIZED LANDINGS // 12"]},{at:24.05,speaker:"Commander Vesper",text:"You landed in my office.",voice:Li[4],subject:"vesper",telemetry:["VESPER'S OFFICE // REPAIRED","INCIDENT REPORT // SEALED"]},{at:26.28,speaker:"Wingtail",text:"I found you.",voice:Li[5],subject:"wingtail",telemetry:["FLIGHT LOG // DISPUTED"]},{at:28.12,speaker:"Commander Vesper",text:"I built your wings. You crossed three cyclones and brought forty-seven people home.",voice:Li[6],subject:"vesper",telemetry:["ANALOG WING RIG // VESPER MK I","CIVILIANS RECOVERED // 47"]},{at:35.23,speaker:"Commander Vesper",text:"No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist.",voice:Li[7],subject:"wingtail",telemetry:["BIO-SIGNATURE // NO MATCH","FLIGHT SYSTEM // ANALOG","ORDNANCE // UNHACKABLE"]},{at:46.02,speaker:"Wingtail",text:"Finally. Professional recognition.",voice:Li[8],subject:"wingtail",telemetry:["SKYSHIELD VISIBILITY // ZERO"]},{at:49.13,speaker:"Commander Vesper",text:"Destroy the command relays and give humanity back its sky. Are you in?",voice:Li[9],subject:"vesper",telemetry:["MISSION // OPERATION BANANA SKY","PRIMARY TARGET // COMMAND RELAYS"]}];function ye(){let M=Math.max(2,n.clientWidth||640),N=Math.max(2,n.clientHeight||420),D=M<=700;l.setPixelRatio(Math.min(devicePixelRatio||1,D?1.15:1.45)),l.setSize(M,N,!1),h.aspect=M/N,h.fov=D&&N>M?62:52,h.updateProjectionMatrix()}function Me(M){d.visible=!1,p.visible=!1,u.visible=!1,g.visible=!1,v.forEach(N=>{N.visible=!1}),b.visible=!0,S.mesh.visible=M==="vesper",T.mesh.visible=M==="wingtail",h.position.set(0,1.35,2.4),h.lookAt(0,1.2,-4)}function Ce(M){let N=0;for(let D=0;D<ne.length;D+=1)M>=ne[D].at&&(N=D);N!==Y&&(Y=N,r({...ne[N],progress:M/Ro}))}function xe(M){if(Ce(M),M<Wc)d.visible=!0,p.visible=!1,u.visible=!1,g.visible=!1,v.forEach(N=>{N.visible=!1}),b.visible=!1,S.mesh.visible=!1,T.mesh.visible=!1,h.position.set(0,1.4,2.4),h.lookAt(0,1.25,-5.5),d.rotation.y=M*(i?.08:.28),d.rotation.x=Math.sin(M*.55)*.08,d.userData.shell.material.color.setHex(M>1.5?16730946:4774096),x.intensity=jc((M-1.2)/1.3)*4;else if(M<Ld){d.visible=!1,u.visible=!0,g.visible=!0,p.visible=!1,b.visible=!1,S.mesh.visible=!1,T.mesh.visible=!1;let N=M-Wc,D=Ld-Wc,_=i?Math.floor(N/1.2)/5:jc(N/D);h.position.copy(I.getPoint(Math.min(.98,_))),U.set(0,1.1,h.position.z-13),h.lookAt(U),v.forEach((z,$)=>{z.visible=!0,z.position.x=-9-$*2.2+N*(4.8+$*.35),z.position.y+=Math.sin(M*2.2+$)*.002});let L=jc((N-1.2)/3.1);u.userData.material.emissiveIntensity=.44*(1-L)+.035,x.intensity=L*7;let F=Math.max(0,Math.min(1,(N-2.1)/1.8));y.material.opacity=Math.sin(F*Math.PI)*.88,y.scale.setScalar(1+F*6),p.visible=N>=3.1,p.visible&&(p.rotation.z=i?0:Math.sin(M*4)*.025,p.scale.setScalar(.92+jc((N-3.1)/.5)*.08))}else{let N=ne[0];for(let _ of ne)M>=_.at&&(N=_);Me(N.subject==="wingtail"?"wingtail":"vesper");let D=1+Math.sin(M*3.4)*.006;(S.mesh.visible?S.mesh:T.mesh).scale.setScalar(i?1:D)}}function re(M){if(P){if(!H&&!W&&!G){let N=Math.min(Ro,(M-j)/1e3),D=ne[Y+1]?.at??Ro;if(Y>=0&&N>=D&&o()){let _=Math.max(0,D-.02);j+=(N-_)*1e3,N=_}xe(N),r({progress:N/Ro}),N>=Ro&&(W=!0,Me("wingtail"),s())}else if(W||G){let N=S.mesh.visible?S.mesh:T.mesh;i||(N.rotation.z=Math.sin(M*.0017)*.008)}l.render(c,h),q=requestAnimationFrame(re)}}function de(){P||(P=!0,H=!1,W=!1,G=!1,Y=-1,n.hidden=!1,ye(),j=performance.now(),q=requestAnimationFrame(re))}function ve(M){if(!W||G)return;W=!1,G=!0,Me("wingtail"),r({speaker:"Wingtail",text:M==="doubt"?"One question. Why bananas?":"Open the armory. Let's make history nervous.",voice:M==="doubt"?Li[11]:Li[10],telemetry:["WINGTAIL // MISSION ACCEPTANCE PENDING"],progress:1}),J(M==="doubt"?3500:4e3,()=>{Me("vesper"),r({speaker:"Commander Vesper",text:M==="doubt"?"Because nobody has ever hacked potassium.":"That's the rescue ace I remember.",voice:M==="doubt"?Li[13]:Li[12],telemetry:["OPERATION BANANA SKY // AUTHORIZED"],progress:1}),J(M==="doubt"?4e3:2400,()=>Pe(!1))})}function Pe(M=!0){P&&(P=!1,cancelAnimationFrame(q),O.forEach(clearTimeout),O.clear(),n.hidden=!0,a({skipped:M}))}function Ve(M){!P||W||G||(M&&!H?(H=!0,V=performance.now()):!M&&H&&(j+=performance.now()-V,H=!1))}function A(){P=!1,cancelAnimationFrame(q),O.forEach(clearTimeout),c.traverse(M=>{M.geometry?.dispose?.(),Array.isArray(M.material)?M.material.forEach(N=>N.dispose?.()):M.material?.dispose?.()}),S.texture.dispose(),T.texture.dispose(),l.dispose()}return{start:de,choose:ve,skip:()=>Pe(!0),setPaused:Ve,resize:ye,dispose:A}}var Xc=8.6,Im=14,qc=19.7,Io=Object.freeze(["./assets/voices/15-relays-down.mp3","./assets/voices/16-wingtail-victory.mp3","./assets/voices/17-sky-restored.mp3"]);function Gy(){let n=new ft,e=new gi({color:1515814,emissive:462866,roughness:.82}),t=new gi({color:4215899,emissive:4836792,emissiveIntensity:0,roughness:.68});for(let i=0;i<48;i+=1){let r=i%2?-1:1,s=1.6+i*47%19*.24,a=new ge(new Rt(1.1+i%3*.28,s,1.4),i%3?e:t);a.position.set(r*(2.7+i%8*1.15),s*.5-2.2,-i*1.45),n.add(a)}return n.userData.litMaterial=t,n}function Vy(){let n=new ft,e=new gi({color:3884877,metalness:.78,roughness:.3}),t=new it({color:16727606,transparent:!0,opacity:.95}),i=new ge(new kt(.6,.85,3.8,10),e);n.add(i);let r=new ge(new Qt(.52,16,12),t);n.add(r);let s=[];for(let a=0;a<3;a+=1){let o=new ge(new Bi(1.05+a*.32,.055,8,48),t);o.rotation.set(Math.PI/2+a*.35,a*.48,0),n.add(o),s.push(o)}return n.userData={core:r,rings:s},n}function Pm(n){let e=new ur().load(n);e.colorSpace=Tt;let t=new it({map:e,transparent:!0,toneMapped:!1}),i=new ge(new mi(4.1,5.1),t);return i.position.set(0,1.1,-4.4),i.visible=!1,{mesh:i,texture:e,material:t}}function Lm({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onComplete:s=()=>{}}={}){if(!n)return null;let a=new kr({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches});a.outputColorSpace=Tt,a.toneMapping=pr,a.toneMappingExposure=1.08;let o=new hr;o.background=new Te(198666),o.fog=new cr(464666,.028);let l=new $t(52,1,.1,140),c=Gy(),h=Vy();h.position.set(0,1,-8),o.add(c,h);let u=Pm(e),d=Pm(t);o.add(u.mesh,d.mesh);let p=new dr(11005674,395530,1.5),g=new ri(16727606,5,22,2);g.position.set(0,2,-7);let f=new hs(16769185,0);f.position.set(-6,8,4),o.add(p,g,f);let x=90,v=new Float32Array(x*3);for(let ne=0;ne<x;ne+=1)v[ne*3]=(Math.random()-.5)*2,v[ne*3+1]=1+(Math.random()-.5)*2,v[ne*3+2]=-8+(Math.random()-.5)*2;let y=new pt;y.setAttribute("position",new zt(v,3));let S=new Fn(y,new _n({color:16762718,size:.11,transparent:!0,opacity:0,blending:sn}));o.add(S);let T=[{at:0,speaker:"Commander Vesper",text:"The relays are down. Skyshield is blind, and every stolen aircraft is returning to human control.",voice:Io[0]},{at:Xc,speaker:"Wingtail",text:"Tell humanity the sky is open. And tell them to keep the fruit bowl stocked.",voice:Io[1]},{at:Im,speaker:"Commander Vesper",text:"Operation Banana Sky is complete. Welcome home, Wingtail.",voice:Io[2]}],b=!1,I=!1,U=0,O=0,P=0,H=-1;function W(){let ne=Math.max(2,n.clientWidth||640),ye=Math.max(2,n.clientHeight||420);a.setPixelRatio(Math.min(devicePixelRatio||1,ne<=700?1.1:1.45)),a.setSize(ne,ye,!1),l.aspect=ne/ye,l.fov=ne<=700&&ye>ne?62:52,l.updateProjectionMatrix()}function G(ne){let ye=0;for(let Me=0;Me<T.length;Me+=1)ne>=T[Me].at&&(ye=Me);if(ye!==H?(H=ye,r({...T[ye],progress:ne/qc})):r({progress:ne/qc}),ne<Xc){h.visible=!0,c.visible=!0,u.mesh.visible=!1,d.mesh.visible=!1,l.position.set(0,2.1,5.5-ne*.24),l.lookAt(0,1,-8),h.userData.rings.forEach((Ce,xe)=>{Ce.rotation.z+=.02+xe*.006});let Me=Math.max(0,(ne-2.4)/3.5);h.scale.setScalar(1+Math.sin(ne*9)*Me*.08),h.userData.core.material.opacity=Math.max(0,1-Me),g.intensity=Math.max(0,5*(1-Me)),S.material.opacity=Math.min(.9,Me*1.4),S.scale.setScalar(1+Me*6)}else ne<Im?(h.visible=!1,u.mesh.visible=!1,d.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),c.userData.litMaterial.emissiveIntensity=Math.min(1.7,(ne-Xc)*.35),f.intensity=Math.min(3.2,(ne-Xc)*.55),d.mesh.scale.setScalar(i?1:1+Math.sin(ne*2.8)*.006)):(h.visible=!1,d.mesh.visible=!1,u.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),f.intensity=3.2,c.userData.litMaterial.emissiveIntensity=1.7,u.mesh.scale.setScalar(i?1:1+Math.sin(ne*2.4)*.005))}function j(ne){if(b){if(!I){let ye=Math.min(qc,(ne-U)/1e3);if(G(ye),ye>=qc){b=!1,s();return}}a.render(o,l),P=requestAnimationFrame(j)}}function V(){b||(b=!0,I=!1,H=-1,n.hidden=!1,W(),U=performance.now(),P=requestAnimationFrame(j))}function q(){b&&(b=!1,cancelAnimationFrame(P),s())}function Y(ne){b&&(ne&&!I?(I=!0,O=performance.now()):!ne&&I&&(U+=performance.now()-O,I=!1))}function J(){b=!1,cancelAnimationFrame(P),o.traverse(ne=>{ne.geometry?.dispose?.(),Array.isArray(ne.material)?ne.material.forEach(ye=>ye.dispose?.()):ne.material?.dispose?.()}),u.texture.dispose(),d.texture.dispose(),a.dispose()}return{start:V,skip:q,setPaused:Y,resize:W,dispose:J}}var Dm="monkeySeeMonkeyPewProfileV1",Vn={airframe:[{id:"clockwork-pinions",name:"Clockwork Pinions",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Balanced",description:"Reliable brass-and-steel wings with forgiving controls.",benefit:"Balanced baseline flight with predictable lift, turning, and cruising speed.",specs:["Lift 100","Handling 100","Speed 100"],modifiers:{lift:1,handling:1,speed:1,armor:0}},{id:"howler-rocket-rig",name:"Howler Rocket Rig",previewAsset:"./assets/wingtail-howler-rig-v1.webp",cost:60,tag:"High lift",description:"Twin coconut-fuel turbines trade finesse for violent acceleration.",benefit:"28% more lift and 14% more speed, but 12% less turning agility.",specs:["Lift 128","Handling 88","Speed 114"],modifiers:{lift:1.28,handling:.88,speed:1.14,armor:0}},{id:"thunderbird-glider",name:"Thunderbird Glider",previewAsset:"./assets/wingtail-thunderbird-v1.webp",cost:110,tag:"Elite",description:"Wide control surfaces, armored spars, and excellent pursuit speed.",benefit:"21% more agility, 18% more speed, and light protection against missile locks.",specs:["Lift 112","Handling 121","Speed 118"],modifiers:{lift:1.12,handling:1.21,speed:1.18,armor:.12}}],weapon:[{id:"ripe-repeater",name:"Ripe Repeater",previewAsset:"./assets/wingtail-ripe-repeater-v1.webp",cost:0,tag:"Standard",description:"Single ripe bananas with a quick, predictable throwing cycle.",benefit:"Rapid single-banana fire for accurate, sustained attacks.",specs:["Damage 1","Rate 5/sec","Bananas 1"],modifiers:{damage:1,cooldown:.2,projectiles:1,spread:0,velocity:54}},{id:"plantain-piercer",name:"Plantain Piercer",previewAsset:"./assets/wingtail-plantain-piercer-v1.webp",cost:45,tag:"Heavy",description:"Dense green plantains hit twice as hard but need a longer reload.",benefit:"Double damage and higher velocity, with a slightly slower firing cycle.",specs:["Damage 2","Rate 4/sec","Bananas 1"],modifiers:{damage:2,cooldown:.25,projectiles:1,spread:0,velocity:58}},{id:"cluster-bunch",name:"Cluster Bunch",previewAsset:"./assets/wingtail-cluster-bunch-v1.webp",cost:95,tag:"Spread",description:"Throws three smaller bananas in a fighter-clearing fan.",benefit:"Launches three bananas at once to cover a wide area and catch agile fighters.",specs:["Damage 1","Rate 3.6/sec","Bananas 3"],modifiers:{damage:1,cooldown:.28,projectiles:3,spread:.065,velocity:52}}],outfit:[{id:"rescue-scarf",name:"Red Rescue Scarf",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Classic",description:"Bright, aerodynamic, and accepted by absolutely no air force.",benefit:"No stat tradeoffs. Pure heroic scarf energy.",specs:["Coconuts 100%","Shield 0","Lock resist 0%"],modifiers:{income:1,shield:0,lockResistance:0}},{id:"ace-jacket",name:"Coconut Ace Jacket",previewAsset:"./assets/wingtail-ace-jacket-v1.webp",cost:30,tag:"Fortune",description:"Lucky leather pockets recover more coconuts from every takedown.",benefit:"Earn 20% more coconuts and resist missile locks 8% longer.",specs:["Coconuts 120%","Shield 0","Lock resist 8%"],modifiers:{income:1.2,shield:0,lockResistance:.08}},{id:"midnight-suit",name:"Midnight Monkey Suit",previewAsset:"./assets/wingtail-midnight-suit-v1.webp",cost:70,tag:"Defense",description:"Radar-dampening fabric and one emergency coconut armor plate.",benefit:"Start with one impact shield and resist missile locks 22% longer.",specs:["Coconuts 108%","Shield 1","Lock resist 22%"],modifiers:{income:1.08,shield:1,lockResistance:.22}}]},Nd=[{id:"flight",name:"Turbo Feathering",tag:"Flight",description:"Increase lift, lane response, and top control authority for this run.",effect:"+10% lift and handling"},{id:"arsenal",name:"Peel Velocity",tag:"Weapons",description:"Tighten the throwing cycle and make every banana hit harder.",effect:"-12% reload, +0.35 damage"},{id:"armor",name:"Coconut Plating",tag:"Defense",description:"Bolt another sacrificial coconut shell around the flight harness.",effect:"+1 impact shield"}],Wy={coconuts:120,owned:{airframe:["clockwork-pinions"],weapon:["ripe-repeater"],outfit:["rescue-scarf"]},equipped:{airframe:"clockwork-pinions",weapon:"ripe-repeater",outfit:"rescue-scarf"}};function Nm(){return JSON.parse(JSON.stringify(Wy))}function Di(n,e){return Vn[n]?.find(t=>t.id===e)||Vn[n]?.[0]||null}function Um(n=globalThis.localStorage){let e=Nm();try{let t=JSON.parse(n?.getItem(Dm)||"null");if(!t||typeof t!="object")return e;e.coconuts=Math.max(0,Math.floor(Number(t.coconuts)||0));for(let i of Object.keys(Vn)){let r=new Set(Vn[i].map(a=>a.id)),s=Array.isArray(t.owned?.[i])?t.owned[i].filter(a=>r.has(a)):[];e.owned[i]=[...new Set([Vn[i][0].id,...s])],e.equipped[i]=e.owned[i].includes(t.equipped?.[i])?t.equipped[i]:Vn[i][0].id}}catch{return e}return e}function Ud(n,e=globalThis.localStorage){try{e?.setItem(Dm,JSON.stringify(n))}catch{}return n}function Fm(n,e,t,i=globalThis.localStorage){let r=Di(e,t);if(!r||!n.owned?.[e])return{ok:!1,reason:"Unknown equipment."};let s=n.owned[e].includes(t);return!s&&n.coconuts<r.cost?{ok:!1,reason:"Need "+(r.cost-n.coconuts)+" more coconuts."}:(s||(n.coconuts-=r.cost,n.owned[e].push(t)),n.equipped[e]=t,Ud(n,i),{ok:!0,action:s?"equipped":"purchased",item:r})}function Om(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return n.coconuts+=t,Ud(n),t}function Fd(n,e=globalThis.localStorage){let t=Nm();return n.coconuts=t.coconuts,n.owned=t.owned,n.equipped=t.equipped,Ud(n,e),n}function Yc(){return{flight:0,arsenal:0,armor:0}}function Po(n,e=Yc()){let t=Di("airframe",n.equipped.airframe).modifiers,i=Di("weapon",n.equipped.weapon).modifiers,r=Di("outfit",n.equipped.outfit).modifiers;return{lift:t.lift*(1+e.flight*.1),handling:t.handling*(1+e.flight*.1),speed:t.speed,armor:t.armor,damage:i.damage+e.arsenal*.35,cooldown:i.cooldown*Math.pow(.88,e.arsenal),projectiles:i.projectiles,spread:i.spread,projectileVelocity:i.velocity*(1+e.arsenal*.04),income:r.income,lockResistance:Math.min(.45,r.lockResistance+t.armor*.25),maxShields:r.shield+e.armor}}function Bm(n){let e=Po(n),t=i=>Math.max(8,Math.min(100,Math.round(i)));return{lift:t(e.lift*72),handling:t(e.handling*72),firepower:t(e.damage*e.projectiles*32),survival:t(18+e.maxShields*35+e.lockResistance*100+e.armor*90)}}var Zc=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),Hr=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35},{kind:"snow",color:13238271,density:.72,speed:2.2,drift:2.8,size:.2,opacity:.42},{kind:"rain",color:7995347,density:.86,speed:29,drift:6.2,size:.24,opacity:.42},{kind:"dust",color:15908722,density:.88,speed:3.2,drift:5.4,size:.25,opacity:.38},{kind:"ash",color:16120831,density:.68,speed:2.5,drift:4.2,size:.18,opacity:.44}]),gr=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),zm=new R(0,0,1),Hm=new R(0,0,0),Gm=new Ri,jy=new Te(16777215);function km(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new On(e);return i.colorSpace=Tt,i.needsUpdate=!0,i}function Xy(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function Lo(n,e,t,i,r){let s=new as(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(ma),s.renderOrder=i.blending===sn?30:20;let a=Array.from({length:r},Xy);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,Gm,Hm),s.setMatrixAt(o,n.matrix),s.setColorAt(o,jy);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function Od(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function Mi(n,e,t){return e+(t-e)*Od(n)}function wa(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function qy(n,e){n.x=wa(e,"x"),n.y=wa(e,"y"),n.z=wa(e,"z")}function Yy(n,e){n.vx=wa(e,"x"),n.vy=wa(e,"y"),n.vz=wa(e,"z")}function Zy(n,e,t){let i=e??t;i&&i.isColor?Do.copy(i):Do.set(i),n.r=Do.r,n.g=Do.g,n.b=Do.b}var Do=new Te;function Jy(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function Uo(n,e,t,i){let r=Jy(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??Mi(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,qy(r,t.position),Yy(r,t.velocity),Zy(r,t.color,i.color),r}function Bd(n,e){let t=Zc[e]||Zc.medium;n.resolvedQuality=e in Zc?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor(gr.weather*t.weatherLimit*(n.reducedMotion?.3:1)),Wm(n,!0)}function Vm(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+Mi(n,-18,18),n.weatherPositions[r+1]=i.y+Mi(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+Mi(n,-28,12),n.weatherPhases[e]=Mi(n,0,Math.PI*2)}function Wm(n,e){let t=Hr[n.level]||Hr[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)Vm(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function Ky(n,e,t){if(!n.weatherCount)return;let i=Hr[n.level]||Hr[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&Vm(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function No(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,Gm,Hm),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle(zm,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors(zm,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function zd(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function $y(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function Qy(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function ex(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&Bd(n,t)}function tx(n,e){let t=Uo(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function ix(n,e){return n.reducedMotion&&Od(n)>.42?null:Uo(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:Mi(n,-1.8,1.8),color:14276559})}function nx(n,e){return n.reducedMotion&&Od(n)>.6?null:Uo(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function rx(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*Zc[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(Mi(n,-1,1),Mi(n,-.75,1),Mi(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*Mi(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=Mi(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=Mi(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=Mi(n,1.2,3.2),n.spawnOptions.gravity=Mi(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=Uo(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return zd(n,e.impulse??.55*s,Mi(n,-.018,.018)),a}function sx(n,e){if(n.reducedMotion)return null;let t=Uo(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return zd(n,e.impulse??.22,e.roll??Mi(n,-.01,.01)),t}function ax(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),zd(n,e.impulse??.85,e.roll??Mi(n,-.025,.025)),n.hitFlash}function jm({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new ft,pools:{},resources:new Set,matrix:new tt,position:new R,direction:new R,scale:new R,quaternion:new Ri,rollQuaternion:new Ri,color:new Te,hiddenPosition:new R(0,-1e4,0),weatherCenter:new R,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:gr.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new it({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:sn,toneMapped:!1,vertexColors:!0}),l=d=>new it({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=Lo(a,"projectileTrail",new Rt(1,1,1),o(.95),gr.projectileTrail),a.pools.missileSmoke=Lo(a,"missileSmoke",new cs(1,1),l(.42),gr.missileSmoke),a.pools.jetExhaust=Lo(a,"jetExhaust",new Rt(1,1,1),o(.72),gr.jetExhaust),a.pools.explosion=Lo(a,"explosion",new cs(1,0),o(.9),gr.explosion),a.pools.nearMiss=Lo(a,"nearMiss",new Rt(1,1,1),o(.84),gr.nearMiss),a.softTexture=km("soft"),a.streakTexture=km("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array(gr.weather*3),a.weatherPhases=new Float32Array(gr.weather);let c=new pt;c.setAttribute("position",new zt(a.weatherPositions,3).setUsage(ma));let h=new _n({color:Hr[0].color,size:Hr[0].size,map:a.softTexture,transparent:!0,opacity:Hr[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:sn});a.weather=new Fn(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new it({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:sn,toneMapped:!1});return a.hitFlash=new ge(new mi(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),Bd(a,a.resolvedQuality),a}function kd(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),ex(n,i),No(n,n.pools.projectileTrail,i,"streak"),No(n,n.pools.missileSmoke,i,"smoke"),No(n,n.pools.jetExhaust,i,"streak"),No(n,n.pools.explosion,i,"explosion"),No(n,n.pools.nearMiss,i,"streak"),Ky(n,i,t),$y(n,i),Qy(n,i),n.cameraImpulse}function At(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return tx(n,t);case"missileSmoke":return ix(n,t);case"jetExhaust":return nx(n,t);case"explosion":return rx(n,t);case"nearMiss":return sx(n,t);case"hitFlash":return ax(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function Xm(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(Hr.length-1,Math.floor(e))),Wm(n,!0))}function qm(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;Bd(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("briefingOrder"),s=document.getElementById("startButton"),a=document.getElementById("skipIntroButton"),o=document.getElementById("briefingFallback"),l=document.getElementById("briefingCanvas"),c=document.getElementById("cinematicSlate"),h=document.getElementById("cinematicSpeaker"),u=document.getElementById("cinematicSubtitle"),d=document.getElementById("cinematicProgress"),p=document.getElementById("cinematicTelemetry"),g=document.getElementById("cinematicDialogue"),f=document.getElementById("dialogueSpeaker"),x=document.getElementById("dialogueSubtitle"),v=document.getElementById("dialogueChoices"),y=document.getElementById("briefingIdentity"),S=document.getElementById("briefingChannel"),T=document.getElementById("pauseOverlay"),b=document.getElementById("resumeButton"),I=document.getElementById("restartButton"),U=document.getElementById("pauseButton"),O=document.getElementById("muteButton"),P=document.getElementById("shootButton"),H=document.getElementById("score"),W=document.getElementById("best"),G=document.getElementById("points"),j=document.getElementById("multiplier"),V=document.getElementById("coconutCount"),q=document.getElementById("shieldCount"),Y=document.getElementById("rageHud"),J=document.getElementById("rageActionButton"),ne=document.getElementById("rageLabel"),ye=document.getElementById("rageCount"),Me=document.getElementById("rageMeter"),Ce=document.getElementById("objectiveHud"),xe=document.getElementById("objectiveLabel"),re=document.getElementById("objectiveMeter"),de=document.getElementById("objectiveCount"),ve=document.getElementById("objectiveStatus"),Pe=document.getElementById("objectiveUnit"),Ve=document.getElementById("bossBattleHud"),A=document.getElementById("wingtailHealthMeter"),M=document.getElementById("wingtailHealthText"),N=document.getElementById("rpgStatus"),D=document.getElementById("titanPhase"),_=document.getElementById("titanHealthMeter"),L=document.getElementById("titanHealthText"),F=document.getElementById("vesperComms"),z=document.getElementById("vesperCommsTitle"),$=document.getElementById("vesperCommsText"),ee=document.getElementById("level"),Z=document.getElementById("threatBar"),le=document.getElementById("missileWarning"),se=document.getElementById("lockMeter"),he=document.getElementById("missileBearing"),ce=document.getElementById("missileDirection"),fe=document.getElementById("targetingHud"),Be=document.getElementById("targetStatus"),qe=document.getElementById("targetRange"),mt=document.getElementById("weaponCooldown"),ct=document.getElementById("touchControls"),be=document.getElementById("steerZone"),De=document.getElementById("liftButton"),xt=document.getElementById("statusRegion"),Jt=document.getElementById("hangarOverlay"),Ee=document.getElementById("hangarWallet"),je=document.getElementById("hangarPreview"),Ye=document.getElementById("hangarPortrait"),wn=document.getElementById("previewState"),Tn=document.getElementById("previewRig"),oi=document.getElementById("previewWeapon"),Ct=document.getElementById("previewOutfit"),Lt=document.getElementById("loadoutTabs"),Ni=document.getElementById("loadoutItems"),B=document.getElementById("hangarStatus"),An=document.getElementById("selectionName"),vr=document.getElementById("selectionBenefit"),Nt=document.getElementById("selectionDeltas"),Gr=document.getElementById("selectionPrice"),Ta=document.getElementById("selectionBalance"),Vr=document.getElementById("loadoutAction"),Cn=document.getElementById("deployButton"),Aa=document.getElementById("difficultyOptions"),_s=document.getElementById("difficultyDescription"),Fo={lift:document.getElementById("statLift"),handling:document.getElementById("statHandling"),firepower:document.getElementById("statFirepower"),survival:document.getElementById("statSurvival")},Ca=document.getElementById("victoryOverlay"),Wn=document.getElementById("victoryCanvas"),Wr=document.getElementById("victorySpeaker"),Ra=document.getElementById("victoryTitle"),Ms=document.getElementById("victorySubtitle"),yr=document.getElementById("victoryProgress"),Ss=document.getElementById("victorySkipButton"),jn=document.getElementById("victoryContinueButton"),lt=window.GameAudio||{},xr=1/60,Si=[-6.2,0,6.2],Oo=-3.2,Bo=5.8,C=1.4,X=10,Q=8,ae=.34,te=36,me=100,Se=1.12,Re=8,Ie=4.8,Xe=120,Ze=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ht="./assets/voices/18-relay-directive.mp3",ze=new URLSearchParams(location.search),et=ze.has("finale-preview"),jt=["localhost","127.0.0.1"].includes(location.hostname)&&ze.has("boss-preview"),Xt=["localhost","127.0.0.1"].includes(location.hostname)&&ze.has("relay-preview"),Et=Object.freeze({easy:{name:"Easy",speed:.88,enemyHealth:.82,encounter:-.16,jetBonus:-1,missileBonus:0,missileSpeed:.92,crosswind:.68,startingShields:2,bossHp:160,bossFireInterval:3.8,altitudeTracking:.22,ceilingDelay:6.5,ceilingHunters:1,description:"Slower pursuit, lighter armor, two emergency shields, fewer fighters, and a 160-hit-point final Titan."},hard:{name:"Hard",speed:1.08,enemyHealth:1.18,encounter:.12,jetBonus:0,missileBonus:1,missileSpeed:1.08,crosswind:1,startingShields:1,bossHp:240,bossFireInterval:2.8,altitudeTracking:.58,ceilingDelay:3.2,ceilingHunters:1,description:"Faster airspace, armored fighters, one emergency shield, aggressive missile formations, and a 240-hit-point final Titan."},insanity:{name:"Banana Insanity",speed:1.42,enemyHealth:1.8,encounter:.72,jetBonus:3,missileBonus:5,missileSpeed:1.38,crosswind:1.7,startingShields:0,bossHp:340,bossFireInterval:1.7,altitudeTracking:.9,ceilingDelay:1.35,ceilingHunters:2,description:"Extreme velocity, hunter squadrons, five extra missiles, violent crosswinds, no starting shields, and a 340-hit-point Titan."}}),Ne=[{time:0,name:"PATROL",threat:20,maxJets:3,missileCap:1,speed:16,hazard:"Clear airspace"},{time:32,name:"INTERCEPT",threat:46,maxJets:4,missileCap:1,speed:20,hazard:"Industrial turbulence"},{time:72,name:"MISSILE LOCK",threat:74,maxJets:5,missileCap:2,speed:24,crosswind:.7,hazard:"Storm crosswinds"},{time:122,name:"OVERDRIVE",threat:100,maxJets:6,missileCap:3,speed:28.5,crosswind:1.15,hazard:"Ash and blackout conditions"},{time:182,name:"CROSSFIRE",threat:100,maxJets:7,missileCap:4,speed:32,crosswind:1.65,altitudeMin:-3,altitudeMax:5.55,hazard:"Freezing tower wake"},{time:252,name:"TEMPEST",threat:100,maxJets:7,missileCap:5,speed:35.5,crosswind:2.15,altitudeMin:-2.85,altitudeMax:5.35,hazard:"Electrical shear"},{time:332,name:"KILLBOX",threat:100,maxJets:8,missileCap:6,speed:39.5,crosswind:2.75,altitudeMin:-2.65,altitudeMax:5.1,hazard:"Fortress crossfire"},{time:422,name:"LAST STAND",threat:100,maxJets:8,missileCap:7,speed:44,crosswind:3.35,altitudeMin:-2.45,altitudeMax:4.85,hazard:"Command-core kill corridor"}],Ut=Object.freeze({1:{type:"pickup",label:"Supply Sweep",unit:"caches",target:3,briefing:"Recover three airborne supply caches before leaving the industrial sector."},3:{type:"jet",label:"Air Superiority",unit:"fighters",target:4,briefing:"Break the strike formation. Destroy four hostile aircraft to open the next corridor."},5:{type:"missile",label:"Missile Screen",unit:"missiles",target:4,briefing:"Shoot down four incoming missiles before the fortress approach."}}),Kt={f16:{name:"F-16",color:9411488,accent:4282208,hp:3,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:5,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:4,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:8,speed:.72,agility:.62,score:980,scale:1.18}},Ue,Fe,qt,Dt=new Audio;Dt.preload="auto";let ln=!1;Dt.addEventListener("ended",()=>{ln=!1}),Dt.addEventListener("error",()=>{ln=!1});let bi=new Audio(ht);bi.preload="auto";let vi=0;bi.addEventListener("ended",()=>{clearTimeout(vi),vi=window.setTimeout(()=>Vo(),1200)});let _r=[...Li,...Io].map(m=>{let w=new Audio;return w.preload="auto",w.src=m,w.load(),w}),rt,Ft,ei,bs,Es,zi,Ji,we,Ki,Ui,Hi,Ae="loading",li="ready",ws="playing",Je=0,Mt=0,Xn=0,Ei=0,Yt=1,yi=0,$i=0,Ia=performance.now(),Ts=0,qn=0,Pa=1,La=0,cn=7646257,jr=null,zo=null,Da=!1,ci="airframe",Yn="hard",wt=Et[Yn],_t=Um();Fd(_t);let Xr={..._t.equipped},Na=Yc(),Ht=Po(_t,Na),Rn=Ht.maxShields,ko=0,hn=0,wi=0,Ua=0,Ho=!1,As=2.4,Hd=0,Mr=!1,qr=0,Qi=!1,Qe=null,un=!1,hi=null,Fa=0,dn=me,vt=null,Go=0,Cs=0,Oa=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),ue={x:0,y:.7,z:C,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:Ed},ui=[],Gt=[],Yr=[],Sr=[],pn=[],fn=new Set,lx=new Te,mn=new R,Gd=new R;W.textContent=String(Math.floor(Oa)),V&&(V.textContent=String(_t.coconuts)),et&&(s.textContent="Open Finale Loadout",t.textContent="Finale test flight ready.",i.textContent="Configure Wingtail, then deploy directly into the command-relay assault.",r.textContent="Destroy all three relays, defeat the Skyshield Titan, and the closing transmission will play automatically.");for(let m of Object.values(Vn).flat())if(m.previewAsset){let w=new Image;w.src=m.previewAsset}function St(m){xt.textContent="",requestAnimationFrame(()=>{xt.textContent=m})}function Vo(){clearTimeout(vi),vi=0,F&&(F.hidden=!0)}function Ym(){F&&(clearTimeout(vi),z&&(z.textContent="Final directive"),$&&($.textContent="The command relays are exposed. Take them down now. Every city below is counting on you."),F.hidden=!1,bi.pause(),bi.currentTime=0,bi.muted=!!lt.isMuted?.(),bi.play().catch(()=>{vi=window.setTimeout(()=>Vo(),9e3)}))}function ut(m,w,E){return Math.max(w,Math.min(E,m))}function br(m=Je){return Ne[m].speed*wt.speed}function Vd(){return Math.max(2,Ne[Je].maxJets+wt.jetBonus)}function Wo(){return Math.max(1,Ne[Je].missileCap+wt.missileBonus)}function Wd(){if(wt=Et[Yn]||Et.hard,Aa?.querySelectorAll("[data-difficulty]").forEach(m=>{m.setAttribute("aria-pressed",String(m.dataset.difficulty===Yn))}),_s&&(_s.textContent=wt.description),Cn){let m=Di("airframe",_t.equipped.airframe).name,w=Di("weapon",_t.equipped.weapon).name;Cn.textContent=`Deploy \xB7 ${wt.name}`,Cn.setAttribute("aria-label",`Deploy ${wt.name} mission with ${m} and ${w}`)}}function jo(m,w){m&&(m.hidden=!w,m.inert=!w,m.setAttribute("aria-hidden",String(!w)),m.classList.toggle("is-visible",w))}function Zr(){V&&(V.textContent=String(_t.coconuts)),Ee&&(Ee.textContent=String(_t.coconuts)),q&&(q.textContent=String(Rn))}function Jc(){let m={..._t,equipped:{..._t.equipped,...Xr}},w=Di("airframe",m.equipped.airframe),E=Di("weapon",m.equipped.weapon),k=Di("outfit",m.equipped.outfit),K=Di(ci,Xr[ci]),oe=_t.equipped[ci]===K.id;je&&(je.dataset.airframe=w.id,je.dataset.weapon=E.id,je.dataset.outfit=k.id,je.classList.remove("is-swapping"),je.offsetWidth,je.classList.add("is-swapping")),Ye&&Ye.getAttribute("src")!==K.previewAsset&&(Ye.src=K.previewAsset),Ye&&(Ye.alt="Wingtail previewing "+K.name+" in the equipment hangar"),wn&&(wn.textContent=oe?"Current loadout":"Preview only",wn.dataset.current=String(oe));let ke={airframe:"Flight rig",weapon:"Banana system",outfit:"Flight clothing"}[ci];Tn&&(Tn.textContent=K.name),oi&&(oi.textContent=ke+" preview"),Ct&&(Ct.textContent=oe?"Equipped item":"Store preview");let ie=Bm(m);for(let[$e,Oe]of Object.entries(Fo))Oe&&(Oe.style.width=ie[$e]+"%");Zr()}function Zm(m,w=""){if(Math.abs(m)<.005)return"No change";let E=Number.isInteger(m)?m:Math.round(m*10)/10;return(E>0?"+":"")+E+w}function Jm(m,w,E){let k=w.modifiers,K=E.modifiers;return m==="airframe"?[["Lift",Math.round(k.lift*100),Math.round(K.lift*100),"%"],["Agility",Math.round(k.handling*100),Math.round(K.handling*100),"%"],["Speed",Math.round(k.speed*100),Math.round(K.speed*100),"%"]]:m==="weapon"?[["Damage",k.damage,K.damage,""],["Fire rate",Math.round(10/k.cooldown)/10,Math.round(10/K.cooldown)/10,"/sec"],["Payload",k.projectiles,K.projectiles,"x"]]:[["Coconut yield",Math.round(k.income*100),Math.round(K.income*100),"%"],["Impact shields",k.shield,K.shield,""],["Lock resistance",Math.round(k.lockResistance*100),Math.round(K.lockResistance*100),"%"]]}function Km(m){if(!Nt)return;let w=Di(ci,_t.equipped[ci]),k=Jm(ci,w,m).map(([K,oe,ke,ie])=>{let $e=document.createElement("span"),Oe=document.createElement("b"),ot=document.createElement("i"),dt=document.createElement("em"),Zt=ke-oe;return Oe.textContent=K,ot.textContent=oe+ie+" \u2192 "+ke+ie,dt.textContent=Zm(Zt,ie),dt.dataset.direction=Zt>0?"up":Zt<0?"down":"same",$e.append(Oe,ot,dt),$e});Nt.replaceChildren(...k)}function $m(){let m=Di(ci,Xr[ci]);if(!m)return;let w=_t.owned[ci].includes(m.id),E=_t.equipped[ci]===m.id,k=_t.coconuts>=m.cost;if(An&&(An.textContent=m.name),vr&&(vr.textContent=m.benefit),Km(m),Gr&&(Gr.textContent=w?"Owned":m.cost+" coconuts",Gr.dataset.affordable=String(k||w)),Ta&&(Ta.textContent=String(_t.coconuts)),Vr&&(Vr.disabled=E||!w&&!k,Vr.textContent=E?"Equipped":w?"Equip "+m.name:k?"Buy & Equip \xB7 "+m.cost:"Need "+(m.cost-_t.coconuts)+" more"),Cn){let K=Di("airframe",_t.equipped.airframe).name,oe=Di("weapon",_t.equipped.weapon).name;Cn.textContent=`Deploy \xB7 ${wt.name}`,Cn.setAttribute("aria-label",`Deploy ${wt.name} mission with ${K} and ${oe}`)}}function Qm(m,w){let E=_t.owned[w].includes(m.id),k=_t.equipped[w]===m.id,K=document.createElement("button");K.type="button",K.className="loadout-item",K.dataset.itemId=m.id,K.dataset.owned=String(E);let oe=Xr[w]===m.id;K.setAttribute("aria-pressed",String(oe)),K.dataset.equipped=String(k);let ke=document.createElement("span");ke.className="loadout-item__title",ke.textContent=m.name;let ie=document.createElement("span");ie.className="loadout-item__tag",ie.textContent=m.tag;let $e=document.createElement("span");$e.className="loadout-item__description",$e.textContent=m.description;let Oe=document.createElement("span");Oe.className="loadout-item__footer";let ot=document.createElement("span");ot.className="loadout-item__specs",ot.textContent=m.specs.join(" \xB7 ");let dt=document.createElement("span");return dt.className="loadout-item__price",dt.textContent=k?"Equipped":E?"Owned":m.cost+" coconuts",Oe.append(ot,dt),K.append(ke,ie,$e,Oe),K.addEventListener("click",()=>{Xr[w]=m.id,B.textContent=m.name+" is a preview only. Deploy uses equipped gear until you buy or equip it.",Xo(w)}),K}function Xo(m=ci){if(!(!Vn[m]||!Ni)){ci=m;for(let w of Lt?.querySelectorAll("[data-category]")||[])w.setAttribute("aria-selected",String(w.dataset.category===m));Ni.replaceChildren(...Vn[m].map(w=>Qm(w,m))),$m(),Jc(),matchMedia("(max-width: 700px) and (min-height: 501px)").matches&&requestAnimationFrame(()=>{let w=Ni.querySelector('[aria-pressed="true"]');w&&Ni.scrollTo({left:w.offsetLeft-(Ni.clientWidth-w.offsetWidth)/2,behavior:"auto"})})}}function Rs(){Ae==="loading"||Ae==="unsupported"||(Ae="hangar",Qc(!1),jo(Jt,!0),Fd(_t),Xr={..._t.equipped},P.disabled=!0,U.disabled=!0,B.textContent=`New sortie budget: ${Xe} coconuts. Select gear for this run.`,Wd(),Xo(ci),Lt?.querySelector('[aria-selected="true"]')?.focus({preventScroll:!0}),St("Wingtail loadout hangar opened."))}function eg(m){let w=Nd[(m-1)%Nd.length];return Na[w.id]+=1,Ht=Po(_t,Na),w.id==="armor"&&(Rn+=1),Zr(),w}function Er(m,w){let E=Om(_t,Math.max(1,Math.round(m*Ht.income)));return ko+=E,Zr(),w&&St(w+". "+E+" coconuts recovered."),E}function Jr(){return cn=cn*1664525+1013904223>>>0,cn/4294967296}function yt(m,w){return m+(w-m)*Jr()}function di(m,w={}){return new gi({color:m,roughness:w.roughness??.58,metalness:w.metalness??.45,emissive:w.emissive||0,emissiveIntensity:w.emissiveIntensity||0})}function It(m){m&&(rt.remove(m),m.traverse?.(w=>{w.geometry?.dispose?.(),Array.isArray(w.material)?w.material.forEach(E=>E.dispose?.()):w.material?.dispose?.()}))}function tg(m){let w=Kt[m],E=new ft,k=di(w.color,{metalness:.72,roughness:.34}),K=di(w.accent,{metalness:.62,roughness:.42}),oe=di(1582893,{metalness:.75,roughness:.16}),ke=di(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),ie=new ge(new kt(.34,.5,4.2,10),k);ie.rotation.x=Math.PI/2,E.add(ie);let $e=new ge(new Oi(.34,1.35,10),k);$e.rotation.x=Math.PI/2,$e.position.z=2.72,E.add($e);let Oe=new ge(new Qt(.38,10,6),oe);Oe.scale.set(.75,.55,1.35),Oe.position.set(0,.32,.8),E.add(Oe);let ot=new os;ot.moveTo(0,1.2),ot.lineTo(2.7,-1.2),ot.lineTo(.45,-.65),ot.lineTo(0,-1.1);let dt=new ge(new ia(ot,{depth:.1,bevelEnabled:!1}),k);dt.rotation.x=-Math.PI/2,dt.rotation.z=Math.PI/2,dt.position.set(-.05,-.03,.3),dt.geometry.center(),E.add(dt);let Zt=new ge(new Rt(2.5,.08,.65),K);Zt.position.z=-1.55,E.add(Zt);let Is=new ge(new Rt(.1,.85,.9),K);Is.position.set(0,.46,-1.55),E.add(Is);let ni=new ge(new kt(.18,.28,.72,8),ke);if(ni.rotation.x=Math.PI/2,ni.position.z=-2.38,E.add(ni),m==="fa18"||m==="f22"){let xi=ni.clone();ni.position.x=-.24,xi.position.x=.24,E.add(xi)}if(m==="a10"){let xi=new kt(.28,.34,1.45,9);[-.82,.82].forEach(Qn=>{let ph=new ge(xi,K);ph.rotation.x=Math.PI/2,ph.position.set(Qn,.35,-.75),E.add(ph)}),dt.scale.x=1.15}return m==="f22"&&(dt.scale.z=1.25),E.scale.setScalar(w.scale),E.userData.engine=ni,E}function ig(){let m=new ft,w=new ge(new kt(.09,.13,1.15,8),di(13095121,{metalness:.75,roughness:.3}));w.rotation.x=Math.PI/2,m.add(w);let E=new ge(new Oi(.1,.34,8),di(14739172));E.rotation.x=-Math.PI/2,E.position.z=-.74,m.add(E);let k=new ge(new Oi(.11,.55,8),new it({color:16757051,transparent:!0,opacity:.9}));return k.rotation.x=Math.PI/2,k.position.z=.83,m.add(k),m.userData.flame=k,m}function ng(){let m=new ft,w=di(3884877,{metalness:.82,roughness:.28}),E=di(6911868,{metalness:.72,roughness:.34}),k=new it({color:16727861,transparent:!0,opacity:.96}),K=new ge(new kt(.72,1.05,4.3,10),w);m.add(K);for(let $e of[-1.25,1.25]){let Oe=new ge(new kt(1.08,1.08,.3,10),E);Oe.position.y=$e,m.add(Oe)}let oe=new ge(new Qt(.58,14,10),k);m.add(oe);let ke=[];for(let $e=0;$e<3;$e+=1){let Oe=new ge(new Bi(1.2+$e*.34,.065,7,42),k);Oe.rotation.set(Math.PI/2+$e*.32,$e*.52,0),m.add(Oe),ke.push(Oe)}let ie=new ri(16727861,4.8,12,2);return m.add(ie),m.userData={core:oe,rings:ke,beacon:ie},m}function rg(){let m=new ft,w=di(3425098,{metalness:.88,roughness:.24,emissive:663592,emissiveIntensity:.48}),E=di(7439242,{metalness:.8,roughness:.3,emissive:1059378,emissiveIntensity:.34}),k=di(1054749,{metalness:.72,roughness:.38}),K=new it({color:16726831,transparent:!0,opacity:1,toneMapped:!1}),oe=new ge(new Rt(5.8,1.35,8.8),w);oe.position.z=.4,m.add(oe);let ke=new ge(new Oi(2.9,5.2,4),E);ke.rotation.x=-Math.PI/2,ke.rotation.z=Math.PI/4,ke.position.z=-6.2,m.add(ke);let ie=new ge(new Rt(14.5,.35,4.8),E);ie.position.z=.6,m.add(ie);let $e=new ge(new Rt(2.2,2.5,2.8),k);$e.position.set(0,1.75,1.2),m.add($e);let Oe=[];for(let ni of[-4.4,-1.65,1.65,4.4]){let xi=new ge(new kt(.48,.7,2.4,10),k);xi.rotation.x=Math.PI/2,xi.position.set(ni,-.25,4.15),m.add(xi);let Qn=new ge(new Oi(.5,2.3,10),new it({color:16741432,transparent:!0,opacity:.9}));Qn.rotation.x=Math.PI/2,Qn.position.set(ni,-.25,6.25),m.add(Qn),Oe.push(Qn)}let ot=new ge(new Rt(3.8,1.8,.34),K);ot.position.set(0,.35,4.82),m.add(ot);let dt=new ge(new Qt(1.32,20,14),K);dt.position.set(0,.35,5.08),m.add(dt);let Zt=[];for(let ni=0;ni<2;ni+=1){let xi=new ge(new Bi(1.5+ni*.42,.09,8,48),K);xi.position.copy(dt.position),xi.rotation.set(Math.PI/2+ni*.55,ni*.7,0),m.add(xi),Zt.push(xi)}let Is=new ri(16726831,8,24,2);Is.position.copy(dt.position),m.add(Is);for(let ni of[-6.5,6.5]){let xi=new ri(ni<0?5627903:16734540,5,15,2);xi.position.set(ni,.45,1.5),m.add(xi);let Qn=new ge(new Qt(.18,8,6),new it({color:ni<0?5627903:16734540,toneMapped:!1}));Qn.position.copy(xi.position),m.add(Qn)}return m.userData={core:dt,coreMaterial:K,rings:Zt,engines:Oe,beacon:Is},m}function jd(){let m=new ft,w=[],E=new it({color:6288603,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),k=new it({color:16737608,transparent:!0,opacity:.42,depthWrite:!1,toneMapped:!1});for(let Oe=0;Oe<15;Oe+=1){let ot=new ge(new Bi(10.5+Math.sin(Oe*1.7)*.8,.12+Oe%3*.035,8,64),Oe%4===3?k:E);ot.position.z=-18-Oe*11,ot.rotation.z=Oe*.47,m.add(ot),w.push(ot)}let K=new ge(new Bi(11.6,.48,12,72),new it({color:16764757,transparent:!0,opacity:.86,toneMapped:!1}));K.position.z=-52,m.add(K);let oe=new ri(6418909,18,80,1.7);oe.position.set(0,2,-42),m.add(oe);let ke=new Float32Array(520*3);for(let Oe=0;Oe<520;Oe+=1){let ot=yt(3.8,10.2),dt=yt(0,Math.PI*2);ke[Oe*3]=Math.cos(dt)*ot,ke[Oe*3+1]=1.5+Math.sin(dt)*ot,ke[Oe*3+2]=yt(-170,8)}let ie=new pt;ie.setAttribute("position",new zt(ke,3));let $e=new Fn(ie,new _n({color:9175024,size:.12,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1}));return m.add($e),m.userData={rings:w,gate:K,portalLight:oe,particles:$e},m}function sg(){let m=new ft,w=new ge(new kt(.17,.23,1.45,10),di(4346951,{metalness:.7,roughness:.3,emissive:1385235,emissiveIntensity:.35}));w.rotation.x=Math.PI/2,m.add(w);let E=new ge(new Oi(.24,.62,10),di(16764731,{metalness:.32,roughness:.36,emissive:10107904,emissiveIntensity:.8}));E.rotation.x=-Math.PI/2,E.position.z=-1.02,m.add(E);for(let oe=0;oe<4;oe+=1){let ke=new ge(new Rt(.06,.36,.45),di(2569274,{metalness:.76,roughness:.28}));ke.position.z=.67,ke.rotation.z=oe*Math.PI/2,m.add(ke)}let k=new ge(new Oi(.2,1.1,10),new it({color:16735016,transparent:!0,opacity:.94,toneMapped:!1}));k.rotation.x=Math.PI/2,k.position.z=1.26,m.add(k);let K=new ri(16751158,4.5,9,2);return K.position.z=.7,m.add(K),m.userData={flame:k,isPotassiumRpg:!0},m}function Xd(m="ripe-repeater",w=!1){let E=new ft,k=m==="plantain-piercer",K=new Or([new R(-.44,.16,0),new R(-.24,-.03,0),new R(0,-.11,0),new R(.24,-.03,0),new R(.44,.16,0)]),oe=new ge(new na(K,12,.095,7,!1),di(k?9424690:16767279,{metalness:.05,roughness:.48,emissive:k?2640648:10182400,emissiveIntensity:.72}));E.add(oe);let ke=new Qt(.082,7,5),ie=di(5977365,{metalness:.02,roughness:.86}),$e=new ge(ke,ie);$e.position.set(-.46,.18,0),$e.scale.set(.72,1.35,.72),$e.rotation.z=-.62,E.add($e);let Oe=$e.clone();Oe.position.x=.46,Oe.rotation.z=.62,E.add(Oe);let ot=new ri(k?10479181:16762685,1.5,4);if(E.add(ot),w){let dt=new ge(new kt(.11,.16,.75,8),di(3688011,{metalness:.72,roughness:.3}));dt.rotation.z=Math.PI/2,dt.position.x=.72,E.add(dt);let Zt=new ge(new Oi(.14,.6,8),new it({color:16738861,transparent:!0,opacity:.92}));Zt.rotation.z=-Math.PI/2,Zt.position.x=1.28,E.add(Zt),E.userData.flame=Zt}return E.scale.setScalar(m==="cluster-bunch"?.86:k?1.3:1.18),w&&E.scale.multiplyScalar(1.18),E.userData.isBananaProjectile=!0,E.userData.isRageRocket=w,E}function ag(m){let w=new ft;if(m==="banana"){let K=Xd("ripe-repeater");K.scale.multiplyScalar(1.28),w.add(K)}else{let K=new ge(new Qt(.48,14,10),di(9195816,{metalness:.05,roughness:.88,emissive:2888199,emissiveIntensity:.45}));K.scale.y=.9,w.add(K);let oe=new it({color:2363659});[[-.13,.14],[.13,.14],[0,-.08]].forEach(([ke,ie])=>{let $e=new ge(new Qt(.045,7,5),oe);$e.position.set(ke,ie,.44),w.add($e)})}let E=new ge(new Bi(.72,.035,7,32),new it({color:m==="banana"?16768853:6482640,transparent:!0,opacity:.78}));E.rotation.x=Math.PI/2,w.add(E);let k=new ri(m==="banana"?16767311:6482640,2.2,6);return w.add(k),w.userData.ring=E,w}function og(){let m=new Float32Array(1080);for(let k=0;k<360;k+=1)m[k*3]=yt(-60,60),m[k*3+1]=yt(-1,28),m[k*3+2]=yt(-150,-12);let w=new pt;w.setAttribute("position",new zt(m,3)),Es=new Fn(w,new _n({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),rt.add(Es),bs=new ft;let E=new it({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let k=0;k<24;k+=1){let K=new ge(new Qt(1,8,5),E);K.scale.set(yt(4,9),yt(.7,1.6),yt(2,5)),K.position.set(yt(-28,28),yt(4,15),yt(-130,-12)),bs.add(K)}rt.add(bs)}function Kc(m){!m||!rt||(rt.background.setHex(m.sky),rt.fog.color.setHex(m.fog),Ki?.color.setHex(m.light),Hi?.color.setHex(m.light))}function lg(m){return ui.find(w=>w.entityId===m)||null}function qd(){return Am({seed:cn,callbacks:{onAircraftSpawn(m){return Ae!=="playing"?!1:(Qd(m),!0)},onMissileWarning(m){if(Ae!=="playing")return!1;let w=lg(m.sourceEntityId);return w?oh(w,m):!1},onMissileLaunch(m){let w=Gt.find(E=>E.directorId===m.missileId&&E.state==="locking");return w?(w.pendingLaunch=m,w.timer<=0&&ep(w,m),!0):!1}}})}async function cg(){try{Ue=new kr({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),Ue.outputColorSpace=Tt,Ue.toneMapping=pr,Ue.toneMappingExposure=1.12,rt=new hr,rt.background=new Te(Ne[0].sky),rt.fog=new cr(Ne[0].fog,.018),Ft=new $t(56,1,.1,220),Ft.position.set(0,3.1,13.5),Ft.lookAt(0,1,-26),Ki=new dr(12446178,659736,2.25),rt.add(Ki),Ui=new hs(16769187,3.1),Ui.position.set(-8,13,8),rt.add(Ui),Hi=new ri(16762699,4.2,14),Hi.position.set(0,3,5),rt.add(Hi),og(),ei=xm({scene:rt,level:0,seed:cn,speed:Ne[0].speed*.5}),Kc(ei.getEnvironment()),we=jm({scene:rt,camera:Ft,mobile:innerWidth<=700,reducedMotion:Ze,quality:"auto",seed:cn}),zi=await fm({scene:rt,camera:Ft,renderer:Ue,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:Ze}),Oc(zi,_t.equipped),To(zi,0,ue,{active:!1,speed:Ne[0].speed}),wd(zi,xr,ue),Ji=qd();try{Fe=Rm({canvas:l,vesperAsset:o.currentSrc||o.src,wingtailAsset:Ye.currentSrc||Ye.src,reducedMotion:Ze,onCue:hg,onChoice:dg,onComplete:fg,isVoicePlaying:()=>ln})}catch(m){console.warn("Cinematic renderer unavailable; using direct briefing.",m),Fe=null}$c(),Ae="ready",s.disabled=!1,s.textContent=et?"Open Finale Loadout":"Start Transmission",St("3D flight systems ready.")}catch(m){console.error(m),Ae="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",s.hidden=!0}}function $c(){if(!Ue||!Ft)return;let m=n.clientWidth||innerWidth,w=n.clientHeight||innerHeight,E=m<=700;Da=E,Ue.setPixelRatio(Math.min(devicePixelRatio||1,E?1.5:2)*Pa),Ue.setSize(m,w,!1),Ft.aspect=m/Math.max(1,w),Ft.fov=E&&w>m?65:55,Ft.updateProjectionMatrix(),Td(zi,E),Fe?.resize(),qt?.resize(),document.body.classList.toggle("touch-controls-ready",E&&matchMedia("(pointer: coarse)").matches),ct?.setAttribute("aria-hidden",String(!(E&&matchMedia("(pointer: coarse)").matches)))}function Qc(m){e.classList.toggle("is-visible",m),e.setAttribute("aria-hidden",String(!m)),n.inert=m}function hg(m={}){Number.isFinite(m.progress)&&d&&(d.style.width=Math.round(m.progress*100)+"%"),!(!m.speaker&&!m.text)&&(m.speaker&&(h.textContent=m.speaker,f.textContent=m.speaker),m.text&&(u.textContent=m.text,x.textContent=m.text),Array.isArray(m.telemetry)&&p&&(p.replaceChildren(...m.telemetry.map(w=>{let E=document.createElement("span"),[k,K=""]=w.split(" // ");E.append(document.createTextNode(k));let oe=document.createElement("strong");return oe.textContent=K,E.append(oe),E})),p.hidden=!1,p.setAttribute("aria-hidden","false")),m.voice&&Yd(m.voice),m.speaker==="Skyshield command"?lt.playMissileLaunch?.():m.speaker==="Evacuation channel"?lt.playImpact?.(!0):m.speaker==="Commander Vesper"&&lt.playLevel?.())}function Yd(m){Dt.pause(),Dt.currentTime=0,ln=!0,Dt.src=m,Dt.muted=!!lt.isMuted?.(),Dt.volume=.92,Dt.play().catch(()=>{ln=!1})}function qo(){ln=!1,Dt.pause(),Dt.currentTime=0,Dt.removeAttribute("src"),Dt.load()}function ug(){if(li==="ready"){if(!Fe){li="complete",Rs();return}li="playing",Ae="cinematic",lt.init?.(),lt.setPaused?.(!1),qo(),e.dataset.mode="cinematic",t.hidden=!0,i.hidden=!0,r.hidden=!0,o.hidden=!0,c.hidden=!1,p.hidden=!1,g.hidden=!1,v.hidden=!0,s.hidden=!0,a.hidden=!1,y.textContent="Field Transmission",S.textContent="Archive 72H // Live reconstruction",Fe.start(),St("Emergency transmission started. Skip Intro is available.")}}function dg(){li="choice",Ae="dialogue",a.hidden=!0,f.textContent="Wingtail",x.textContent="Vesper is waiting for your answer.",h.textContent="Wingtail",u.textContent="YOUR RESPONSE REQUIRED",v.hidden=!1,v.querySelector("button")?.focus({preventScroll:!0}),St("Choose Wingtail's response.")}function pg(m){li==="choice"&&(li="resolving",Ae="cinematic",v.hidden=!0,Fe.choose(m))}function fg(){li!=="complete"&&(li="complete",localStorage.setItem("monkeySeeMonkeyPewIntroSeen","1"),lt.setPaused?.(!0),qo(),Fe?.dispose(),Fe=null,_r.splice(0),c.hidden=!0,p.hidden=!0,g.hidden=!0,a.hidden=!0,Rs())}function Zd(){["playing","choice","resolving"].includes(li)&&Fe?.skip()}function mg(){ui.splice(0).forEach(m=>It(m.view)),Gt.splice(0).forEach(m=>It(m.view)),Yr.splice(0).forEach(m=>It(m.view)),Sr.splice(0).forEach(m=>It(m.view)),pn.splice(0).forEach(m=>It(m.view)),Qe&&It(Qe.view),hi&&It(hi),Qe=null,hi=null,Mt=0,Xn=0,Ei=0,Yt=1,yi=0,$i=0,Na=Yc(),Ht=Po(_t,Na),Rn=Ht.maxShields+wt.startingShields,ko=0,hn=0,wi=0,Ua=0,Ho=!1,As=2.4,Hd=0,Mr=!1,qr=0,Qi=!1,un=!1,Fa=0,dn=me,vt=null,Go=0,Cs=0,bi.pause(),bi.currentTime=0,Vo(),Je=0,cn=(Date.now()^7646257)>>>0,ei?.setSeed(cn,{regenerate:!0}),ei?.setLevel(0,{immediate:!0}),ei?.root&&(ei.root.visible=!0),Ji?.stop({clearSchedule:!0}),ei?.root&&(ei.root.visible=!1),Ji=qd(),Ji.reset({levelIndex:0,delay:.85}),Object.assign(ue,{x:0,y:.7,z:C,vy:0,vx:0,lane:1,bank:0,pitch:0}),H.textContent="0",G.textContent="0",j.textContent="1.00\xD7",Oc(zi,_t.equipped),Zr(),le.hidden=!0,se.style.width="0%",fe?.classList.remove("is-locked"),Be&&(Be.textContent="Scanning"),qe&&(qe.hidden=!0),ih(),Zn(),Jn(),Kn(),ah(0,!1)}function gg(){Ae==="loading"||Ae==="unsupported"||(mg(),jo(Jt,!1),Ae="playing",e.dataset.mode="flight",Qc(!1),P.disabled=!1,U.disabled=!1,De&&(De.disabled=!1),Ji?.start({levelIndex:0,delay:.85}),(jt||Xt||et)&&(Mt=Ne.at(-1).time,ah(Ne.length-1,!1),et&&(Rn=Math.max(Rn,5),Zr()),jt?$d():Kd()),lt.init?.(),lt.setPaused?.(!1),lt.startRun?.(0),Zn(),n.focus({preventScroll:!0}),St("3D flight started."))}function eh(){Ae==="playing"&&(ue.vy=Math.min(ue.vy+3.5*Math.sqrt(Ht.lift),6.4*Ht.lift),ue.pitch=.34,At(we,"jetExhaust",{position:{x:ue.x,y:ue.y-.1,z:ue.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),lt.playFlap?.(ut(ue.vy/6,.45,1)))}function th(m){Ae==="playing"&&(ue.lane=ut(ue.lane+m,0,Si.length-1))}function Jd(){let m=null,w=1/0;if(Qe&&Qe.z<=C&&Qe.z>=-120&&Math.hypot(Qe.x-ue.x,Qe.y-ue.y)*.45+Math.abs(Qe.z)*.008<9.8)return Qe;for(let E of pn){if(E.z>C||E.z<-115)continue;let k=Math.hypot(E.x-ue.x,E.y-ue.y)*.72+Math.abs(E.z)*.012;k<9.8&&k<w&&(m=E,w=k)}if(m)return m;for(let E of ui){if(E.z>C||E.z<-82)continue;let k=E.x-ue.x,K=E.y-ue.y,oe=Math.hypot(k,K)+Math.abs(E.z)*.018;oe<7.4&&oe<w&&(m=E,w=oe)}return m}function ih(){let m=Qi?Se:wi>0?ae:Ht.cooldown,w=Math.round(ut(1-$i/m,0,1)*100);mt?.style.setProperty("--weapon-charge",String(w)),mt?.setAttribute("aria-valuenow",String(w))}function Zn(){let m=wi>0,w=!m&&hn>=X,E=ut(m?wi/Q:hn/X,0,1);Y?.classList.toggle("is-active",m),Y?.classList.toggle("is-ready",w),Y&&(Y.disabled=!w||Ae!=="playing",Y.setAttribute("aria-label",m?"Go Bananas active":w?"Activate Go Bananas":"Go Bananas charge")),J&&(J.hidden=!w,J.disabled=!w||Ae!=="playing"),ne&&(ne.textContent=m?"Banana Rage":w?"Go Bananas Ready":"Go Bananas"),ye&&(ye.textContent=m?`${wi.toFixed(1)}s`:w?"READY":`${Math.floor(hn)} / ${X}`),Me?.style.setProperty("width",`${Math.round(E*100)}%`),Me?.parentElement?.setAttribute("aria-valuenow",String(m?Math.ceil(wi):Math.floor(hn))),Me?.parentElement?.setAttribute("aria-valuemax",String(m?Q:X))}function nh(){return Ae!=="playing"||wi>0||hn<X?!1:(hn=0,wi=Q,Ua=0,Ho=!1,$n("GO BANANAS",750),At(we,"hitFlash",{color:16758062,intensity:.7,impulse:.32}),lt.playLevel?.(3),Zn(),St("Go Bananas activated. Heavy banana rockets online for eight seconds."),!0)}function Yo(m){if(wi>0)wi=Math.min(Q+2,wi+Number(m||0)*.18);else{let w=hn>=X;hn=Math.min(X,hn+Math.max(0,Number(m)||0)),!w&&hn>=X&&!Ho&&(Ho=!0,St("Go Bananas is ready."))}Zn()}function vg(m){wi<=0||(wi=Math.max(0,wi-m),Ua-=m,Ua<=0&&($i=0,rh(!0),Ua=ae),wi<=0&&(Y?.classList.remove("is-active"),St("Banana rage depleted.")),Zn())}function rh(m=wi>0){if(Ae!=="playing"||$i>0)return;let w=Qi&&!!Qe;$i=w?Se:m?ae:Ht.cooldown;let E=Jd(),k=new R(0,0,-1);if(E){mn.set(E.x-ue.x,E.y-ue.y,E.z-ue.z).normalize();let ie=E===Qe||pn.includes(E);k.lerp(mn,ie?.96:innerWidth<=700?.82:.68).normalize()}let K=_t.equipped.weapon,oe=w||m?1:Ht.projectiles,ke=w||m?0:Ht.spread;for(let ie=0;ie<oe;ie+=1){let $e=ie-(oe-1)/2,Oe=k.clone();Oe.x+=$e*ke,Oe.y+=Math.abs($e)*ke*.16,Oe.normalize();let ot=w?sg():Xd(K,m);if(Yr.length>=te){let Zt=Yr.shift();It(Zt?.view)}ot.position.set(ue.x+$e*.16,ue.y,ue.z-.9),rt.add(ot);let dt={x:ot.position.x,y:ot.position.y,z:ot.position.z,previous:ot.position.clone(),velocity:Oe.multiplyScalar(w?68:m?Math.max(72,Ht.projectileVelocity*1.25):Ht.projectileVelocity),damage:w?et?8:Re:m?Math.max(4,Ht.damage*2):Ht.damage,life:w?2.8:m?2.5:1.9,rage:m,rpg:w,trailTimer:0,spin:yt(11,16)*(Jr()>.5?1:-1),tumble:yt(7,11),view:ot};Yr.push(dt),At(we,"projectileTrail",{position:ot.position,velocity:dt.velocity,life:.14,width:w?.18:m?.11:K==="cluster-bunch"?.05:.075,length:w?2.5:m?1.8:1.2,color:w?16757051:m?16738866:K==="plantain-piercer"?11070552:16772456})}Kn(),ih(),lt.playShot?.()}function Jn(){let m=Math.max(0,3-qr),w=!!vt||Mr||un;if(Ce&&(Ce.hidden=!w||Ae==="victory"||Ae==="victory-result"),un){let E=Math.round(ut(Fa/Ie,0,1)*100);xe&&(xe.textContent="Survival Portal"),de&&(de.textContent=String(E)),Pe&&(Pe.textContent="% breach"),re?.style.setProperty("width",`${E}%`),re?.parentElement?.setAttribute("aria-label","Survival portal breach"),re?.parentElement?.setAttribute("aria-valuemax","100"),re?.parentElement?.setAttribute("aria-valuenow",String(E))}else if(Mr)xe&&(xe.textContent="Relay Hunt"),de&&(de.textContent=String(m)),Pe&&(Pe.textContent="remaining"),re?.style.setProperty("width",`${Math.round(qr/3*100)}%`),re?.parentElement?.setAttribute("aria-label","Command relays destroyed"),re?.parentElement?.setAttribute("aria-valuemax","3"),re?.parentElement?.setAttribute("aria-valuenow",String(qr));else if(vt){let E=Math.min(vt.target,vt.progress);xe&&(xe.textContent=vt.label),de&&(de.textContent=`${E} / ${vt.target}`),Pe&&(Pe.textContent=vt.unit),re?.style.setProperty("width",`${Math.round(E/vt.target*100)}%`),re?.parentElement?.setAttribute("aria-label",vt.label+" progress"),re?.parentElement?.setAttribute("aria-valuemax",String(vt.target)),re?.parentElement?.setAttribute("aria-valuenow",String(E))}}function Kn(){let m=Qi&&!!Qe&&Ae==="playing";if(Ve&&(Ve.hidden=!m),document.body.classList.toggle("boss-battle-active",m),!m)return;let w=Math.round(ut(dn/me,0,1)*100),E=Math.round(ut(Qe.hp/Qe.maxHp,0,1)*100);A?.style.setProperty("width",`${w}%`),A?.parentElement?.setAttribute("aria-valuenow",String(w)),M&&(M.textContent=String(Math.ceil(dn))),_?.style.setProperty("width",`${E}%`),_?.parentElement?.setAttribute("aria-valuenow",String(E)),L&&(L.textContent=`${E}%`),D&&(D.textContent=`Titan \xB7 Phase ${["I","II","III"][Qe.phaseIndex-1]||"I"}`),N&&(N.textContent=$i<=0?"Armed":"Reloading")}function yg(m){let w=Ut[m];vt=w?{...w,progress:0,complete:!1,levelIndex:m}:null,Go=0,vt?.type==="pickup"&&(As=Math.min(As,1.2)),Jn()}function sh(m){!vt||vt.complete||vt.type!==m||(vt.progress=Math.min(vt.target,vt.progress+1),vt.progress>=vt.target&&(vt.complete=!0,Er(15),$n(`${vt.label.toUpperCase()} COMPLETE`,1200),St(`${vt.label} complete. The next city sector is open.`)),Jn())}function Kd(){if(Mr||!rt)return;Mr=!0,qr=0;let m=[0,2,1],w=[.1,2.15,-.65];for(let E=0;E<3;E+=1){let k=ng(),K={spec:{name:`COMMAND RELAY ${E+1}`},view:k,hp:et?1:Math.ceil((8+E*2)*wt.enemyHealth),maxHp:et?1:Math.ceil((8+E*2)*wt.enemyHealth),lane:m[E],x:Si[m[E]],y:w[E],z:-72-E*48,phase:E*2.1,radius:1.42};k.position.set(K.x,K.y,K.z),rt.add(k),pn.push(K)}Jn(),Ym(),St("Relay Hunt active. Destroy all three command relays to free the stolen fleet.")}function xg(m){let w=pn[m];w&&(At(we,"explosion",{position:w,count:38,scale:1.9,speed:9,color:16733757,impulse:1.05}),At(we,"hitFlash",{color:16757051,intensity:.78,impulse:.45}),It(w.view),pn.splice(m,1),qr+=1,Er(20),Yo(3),$n("COMMAND RELAY DESTROYED",2400),lt.playJetDestroyed?.(ut(w.x/8,-1,1)),Jn(),qr>=3&&_g())}function _g(){un||Qi||!rt||(Mr=!1,un=!0,Fa=0,dn=me,ui.splice(0).forEach(m=>It(m.view)),Gt.splice(0).forEach(m=>It(m.view)),le.hidden=!0,se.style.width="0%",Ji?.stop({clearSchedule:!0}),hi=jd(),rt.add(hi),Jn(),At(we,"hitFlash",{color:6417109,intensity:.9,impulse:.6}),St("Vesper: Relay lattice collapsing. Enter the survival portal. I am arming Wingtail with the Potassium RPG."))}function Mg(m){if(!hi)return;Fa+=un?m:0;let w=un?34:22+(Qe?.phaseIndex||1)*5;hi.userData.rings.forEach((k,K)=>{k.position.z+=w*m,k.position.z>10&&(k.position.z-=165),k.rotation.z+=m*(.36+K*.025)*(K%2?-1:1),k.material.opacity=.34+Math.sin(Mt*2.8+K)*.16}),hi.userData.gate.rotation.z-=m*.7,hi.userData.gate.scale.setScalar(1+Math.sin(Mt*3.8)*.035),hi.userData.portalLight.intensity=14+Math.sin(Mt*4.5)*4;let E=hi.userData.particles.geometry.attributes.position;for(let k=2;k<E.array.length;k+=3)E.array[k]+=w*m*1.35,E.array[k]>12&&(E.array[k]-=180);E.needsUpdate=!0,hi.userData.particles.rotation.z+=m*.035,un&&(Jn(),Fa>=Ie&&$d())}function $d(){if(Qi||!rt)return;Qi=!0,un=!1,Mr=!1,hi||(hi=jd(),rt.add(hi)),ei?.root&&(ei.root.visible=!1);let m=rg();Qe={spec:{name:"SKYSHIELD TITAN"},view:m,hp:et?24:wt.bossHp,maxHp:et?24:wt.bossHp,x:0,y:2.1,z:-108,phase:0,phaseIndex:1,radius:3.45,fireTimer:2.4},m.position.set(Qe.x,Qe.y,Qe.z),rt.add(m),Jn(),Kn(),At(we,"hitFlash",{color:16726063,intensity:.72,impulse:.5}),lt.playLevel?.(7),St("Portal breach complete. Potassium RPG armed. Break the Titan across all three combat phases.")}function Sg(m){if(!Qe)return;let w=Qe;w.phase+=m;let E=ut(w.hp/w.maxHp,0,1),k=E>.66?1:E>.33?2:3;if(k!==w.phaseIndex&&(w.phaseIndex=k,w.fireTimer=Math.min(w.fireTimer,.75),dn=Math.min(me,dn+18),Kn(),At(we,"hitFlash",{color:k===3?16727599:16757051,intensity:.84,impulse:.55}),St(k===2?"Titan armor breached. Vesper patched 18 health. Phase two: missile lattice deployed.":"Titan core exposed. Emergency repair complete. Final phase: survive the saturation barrage.")),w.z<-55&&(w.z=Math.min(-55,w.z+br()*.2*m)),w.x=Math.sin(w.phase*(.42+w.phaseIndex*.11))*(4.2+w.phaseIndex*1.25),w.y=1.75+Math.sin(w.phase*(.68+w.phaseIndex*.08))*(.9+w.phaseIndex*.42),w.view.position.set(w.x,w.y,w.z),w.view.rotation.z=Math.sin(w.phase*.46)*-.08,w.view.userData.rings.forEach((K,oe)=>{K.rotation.z+=m*(.8+oe*.35)}),w.view.userData.engines.forEach((K,oe)=>{K.scale.y=.82+Math.sin(Mt*22+oe)*.18}),w.view.userData.core.scale.setScalar(.9+Math.sin(Mt*5.5)*.12),w.view.userData.beacon.intensity=7+Math.sin(Mt*6)*2,w.fireTimer-=m,w.z>=-72&&w.fireTimer<=0&&Gt.length<Wo()+2){for(let K=0;K<w.phaseIndex&&!(Gt.length>=Wo()+2);K+=1){let oe=oh(w,{missileId:`titan-${cn}-${Math.floor(Mt*1e3)}-${K}`,leadTime:ut((1.35-K*.12)/wt.missileSpeed,.62,1.45),bearingHint:K%2?"left":w.x>1?"right":"ahead"});oe&&(oe.pendingLaunch={speedScale:wt.missileSpeed*(1+w.phaseIndex*.05),guidanceScale:ut(wt.missileSpeed+w.phaseIndex*.05,.95,1.4),lifetime:Yn==="insanity"?7.2:6.2})}w.fireTimer=wt.bossFireInterval*[1,.78,.58][w.phaseIndex-1]*yt(.86,1.12)}Kn()}function bg(){if(!Qe)return;let m=Qe;for(let w=0;w<4;w+=1)At(we,"explosion",{position:{x:m.x+yt(-3.5,3.5),y:m.y+yt(-1.2,1.2),z:m.z+yt(-3.5,3.5)},count:34,scale:2.2,speed:10,color:w%2?16760909:16730421,impulse:1.1});It(m.view),Qe=null,Kn(),$n("SKYSHIELD TITAN DESTROYED",12e3),Er(100),lt.playJetDestroyed?.(0),Ag()}function Eg(m){if(!Mr)return;let w=br()*.43;for(let E=pn.length-1;E>=0;E-=1){let k=pn[E];if(k.z+=w*m,k.phase+=m,k.x=Si[k.lane]+Math.sin(k.phase*.82)*.55,k.y+=Math.sin(k.phase*1.13)*m*.12,k.view.position.set(k.x,k.y,k.z),k.view.rotation.y+=m*.34,k.view.userData.rings.forEach((K,oe)=>{K.rotation.z+=m*(.9+oe*.25)}),k.view.userData.core.scale.setScalar(.9+Math.sin(Mt*6+k.phase)*.12),k.view.userData.beacon.intensity=3.8+Math.sin(Mt*7+k.phase)*1.2,Math.abs(k.z-ue.z)<1.6&&Math.hypot(k.x-ue.x,k.y-ue.y)<k.radius+ue.radius){if(!lh("command relay collision",k)){uh("command relay collision");return}k.z=-112}else k.z>14&&(k.z=-112-E*18,k.lane=(k.lane+1)%Si.length,St(`${k.spec.name} escaped the firing lane and is cycling back.`))}}function wg(m={}){Number.isFinite(m.progress)&&yr?.style.setProperty("width",`${Math.round(m.progress*100)}%`),m.speaker&&(Wr.textContent=m.speaker),m.text&&(Ms.textContent=m.text),m.voice&&Yd(m.voice)}function Tg(){Ae="victory-result",qo(),Ra.textContent="Humanity has its sky back.",Ms.textContent=`All three relays and the Skyshield Titan destroyed. ${Math.floor(Xn)} km survived, ${Ei.toLocaleString()} points scored, and ${ko} coconuts recovered.`,Wr.textContent="Mission accomplished",yr?.style.setProperty("width","100%"),Ss.hidden=!0,jn.hidden=!1,jn.focus({preventScroll:!0}),St("Operation Banana Sky complete. Humanity is safe.")}function Ag(){["victory","victory-result"].includes(Ae)||(Ae="victory",pn.splice(0).forEach(m=>It(m.view)),Qe&&It(Qe.view),Qe=null,hi&&It(hi),hi=null,un=!1,Qi=!1,ui.splice(0).forEach(m=>It(m.view)),Gt.splice(0).forEach(m=>It(m.view)),Ji?.stop({clearSchedule:!0}),P.disabled=!0,U.disabled=!0,De&&(De.disabled=!0),fn.clear(),Jn(),Kn(),Zn(),Er(75),lt.stopRun?.(),lt.setPaused?.(!1),Ra.textContent="The Titan is down.",Ms.textContent="Its relays are rubble. Skyshield has lost the stolen fleet.",Wr.textContent="Commander Vesper",yr?.style.setProperty("width","0%"),Ss.hidden=!1,jn.hidden=!0,jo(Ca,!0),n.inert=!0,qt=Lm({canvas:Wn,vesperAsset:"./assets/commander-vesper-v1.png",wingtailAsset:"./assets/wingtail-hangar-front-v1.png",reducedMotion:Ze,onCue:wg,onComplete:Tg}),qt?.start())}function Cg(){qo(),qt?.dispose(),qt=null,jo(Ca,!1),n.inert=!1,Rs()}function Rg(){if(Sr.length>=5)return;let m=Jr()<.68?"coconut":"banana",w=Math.floor(Jr()*Si.length),E=ag(m),k={type:m,x:Si[w]+yt(-.45,.45),y:yt(-1.1,4.8),z:yt(-88,-72),phase:yt(0,Math.PI*2),view:E};E.position.set(k.x,k.y,k.z),rt.add(E),Sr.push(k)}function Ig(m){let w=Sr[m];if(w){if(At(we,"explosion",{position:w,count:10,scale:.42,speed:3.8,color:w.type==="banana"?16768853:6482640,impulse:.08}),w.type==="banana"){let E=Math.max(2,Ht.maxShields+1);Rn=Math.min(E,Rn+1),$n("RESCUE BANANA",250),Yo(2),St("Rescue banana collected. Coconut armor restored.")}else Er(5),$n("COCONUT CACHE",125),Yo(1),St("Coconut collected. Five coconuts secured.");Zr(),sh("pickup"),lt.playFlap?.(1.35),It(w.view),Sr.splice(m,1)}}function Pg(m){As-=m,As<=0&&(Rg(),As=Math.max(3.2,5.2-Je*.45)+yt(0,1.2));let w=br()*1.08;for(let E=Sr.length-1;E>=0;E-=1){let k=Sr[E];k.z+=w*m,k.phase+=m*2.4,k.view.position.set(k.x,k.y+Math.sin(k.phase)*.16,k.z),k.view.rotation.y+=m*1.9,k.view.rotation.z=Math.sin(k.phase*.7)*.18,k.view.userData.ring&&(k.view.userData.ring.rotation.z+=m*1.6),Math.abs(k.z-ue.z)<1.25&&Math.hypot(k.x-ue.x,k.y-ue.y)<1.35?Ig(E):k.z>14&&(It(k.view),Sr.splice(E,1))}}function ah(m,w=!0){if(m===Je&&Mt>0)return;Je=m;let E=Ne[m];ee.textContent=`LEVEL ${m+1} / ${Ne.length} \xB7 ${E.name}`,Z.style.width=`${E.threat}%`,Z.style.background=m>=2?"var(--danger)":m===1?"var(--accent)":"var(--signal)",Z.parentElement.setAttribute("aria-valuenow",String(E.threat)),rt&&(ei?.setLevel(m,{duration:w?3.1:.4,immediate:!w}),w||Kc(ei?.getEnvironment()),Xm(we,m)),Ji?.setLevel(m,{clearSchedule:w}),lt.playLevel?.(m),yg(m);let k=null;if(w&&m>0&&(Er(12+m*4),k=eg(m)),w&&m===Ne.length-1&&Kd(),w){let K=vt?` Mission: ${vt.briefing}`:"",oe=k?` Auto-installed: ${k.name}.`:"";St(`Level ${m+1}: ${E.name}. ${E.hazard}. City sector changed.${oe}${K}`)}}function Lg(){let m=Ne[Je+1];if(m&&vt&&!vt.complete&&Mt>=m.time){if(Go+=xr,Mt=m.time-.01,vt.overtimeAnnounced||(vt.overtimeAnnounced=!0,St(`${vt.label} overtime. Finish the objective or hold the corridor for six seconds.`)),Go<6)return;vt.complete=!0,St(`${vt.label} window closed. Vesper opened the next corridor.`)}let w=0;for(let E=Ne.length-1;E>=0;E-=1)if(Mt>=Ne[E].time){w=E;break}w!==Je&&ah(w)}function Dg(){let m=Je===0?["f16","fa18"]:Je===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return m[Math.floor(Jr()*m.length)]}function Qd(m={}){let w=Kt[m.typeHint]?m.typeHint:Dg(),E=Kt[w],k=ut(Number.isInteger(m.lane)?m.lane:Math.floor(Jr()*Si.length),0,Si.length-1),K=tg(w),oe=m.behavior||["intercept","sweep","dive"][Math.floor(Jr()*3)],ke=Ne[Je],ie=ke.altitudeMin??Oo,$e=ke.altitudeMax??Bo,Oe=Number.isFinite(m.altitude)?m.altitude:yt(-1.6,5.2),ot=m.trackPlayer===!1?0:wt.altitudeTracking,dt=ut(Oe+(ue.y-Oe)*ot+yt(-.3,.3)*ot,ie+.25,$e-.2),Zt={entityId:m.entityId||`legacy-${cn}-${ui.length}`,encounterId:m.encounterId||null,role:m.role||"interceptor",typeId:w,spec:E,view:K,hp:Math.ceil(E.hp*(1+Je*.12)*wt.enemyHealth),maxHp:Math.ceil(E.hp*(1+Je*.12)*wt.enemyHealth),lane:k,x:Si[k]+yt(-.8,.8),y:dt,z:Number.isFinite(m.spawnZ)?m.spawnZ:-82,speed:br()*E.speed*ut(m.speedScale||1,.78,1.42),phase:Number.isFinite(m.phase)?m.phase:yt(0,Math.PI*2),amplitude:(Number.isFinite(m.amplitude)?m.amplitude:yt(.7,2.1))*E.agility,behavior:oe,passed:!1,exhaustTimer:yt(0,.08)};return K.position.set(Zt.x,Zt.y,Zt.z),rt.add(K),ui.push(Zt),Zt}function oh(m,w={}){let E=Ne[Je];if(!m||Gt.length>=Wo())return!1;let k=ig();k.visible=!1,rt.add(k);let K=ut(w.leadTime||[1.45,1.22,1.02,.84][Je],.8,3),oe={directorId:w.missileId||`missile-${cn}-${Gt.length}`,bearingHint:w.bearingHint||"ahead",state:"locking",source:m,view:k,x:m.x,y:m.y,z:m.z,timer:K,lockDuration:K,speed:19,direction:new R(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return Gt.push(oe),le.hidden=!1,lt.playMissileLock?.(oe),oe}function ep(m,w={}){m.state="active",m.view.visible=!0,m.source=null,m.speed=19*ut((w.speedScale||1)*wt.missileSpeed,.9,1.55),m.guidanceScale=ut(w.guidanceScale||1,.88,1.25),m.life=ut(w.lifetime||5.5,3.5,7),m.direction.set(ue.x-m.x,ue.y-m.y,ue.z-m.z).normalize(),At(we,"explosion",{position:m,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),lt.playMissileLaunch?.(m)}function Ng(m){let w=Ne[Je];if((fn.has("Space")||fn.has("KeyW")||fn.has("ArrowUp")||fn.has("TouchLift"))&&(ue.vy+=5.8*Ht.lift*m),ue.vy=ut(ue.vy-3.1*m,-3.6,6.4*Ht.lift),w.crosswind){let ke=Math.sin(Mt*.83+Je*1.7)+Math.sin(Mt*2.17)*.42;ue.vx+=ke*w.crosswind*wt.crosswind*m,ue.vy+=Math.cos(Mt*1.31+Je)*w.crosswind*wt.crosswind*.12*m}ue.y+=ue.vy*m;let k=w.altitudeMin??Oo,K=w.altitudeMax??Bo;if((ue.y<k||ue.y>K)&&(ue.y=ut(ue.y,k,K),ue.vy*=-.15,qn=Math.max(qn,.08)),ue.y>K-.55?Cs+=m:Cs=Math.max(0,Cs-m*1.8),Cs>=wt.ceilingDelay&&ui.length<Vd()+wt.ceilingHunters){Cs=0;let ke=null;for(let ie=0;ie<wt.ceilingHunters;ie+=1){let $e=Qd({typeHint:Je>=2?"f22":"f16",lane:ut(ue.lane+(ie%2?-1:1),0,Si.length-1),altitude:ue.y+yt(-.22,.18),spawnZ:-54-ie*8,speedScale:Yn==="insanity"?1.38:1.2,behavior:"dive",role:"ceiling-hunter"});ke||(ke=$e)}ke&&oh(ke,{leadTime:Yn==="insanity"?.82:1.12}),St("Altitude hunter squadron inbound. Break away from the ceiling.")}let oe=Si[ue.lane];ue.vx+=(oe-ue.x)*34*Ht.handling*m,ue.vx*=Math.exp(-9*Math.sqrt(Ht.handling)*m),ue.x+=ue.vx*m,ue.bank+=(ut(-ue.vx*.08,-.48,.48)-ue.bank)*m*8,ue.pitch+=(ut(-ue.vy*.045,-.34,.34)-ue.pitch)*m*7,To(zi,m,ue,{active:Ae==="playing",speed:br(),thrust:.52+ut(Math.abs(ue.vy)/6.4,0,1)*.42})}function lh(m,w){if(Rn>0)return Rn-=1,Zr(),qn=Ze?.05:.2,At(we,"explosion",{position:w,count:16,scale:.82,speed:5.5,color:6482640,impulse:.32}),At(we,"hitFlash",{color:6482640,intensity:.62,impulse:.32}),St("Coconut shield absorbed "+m+". "+Rn+" remaining."),!0;if(!Qi)return!1;let E=m.includes("collision")?28:Yn==="insanity"?18:Yn==="hard"?14:10;return dn=Math.max(0,dn-E),Kn(),qn=Ze?.05:.2,At(we,"explosion",{position:w,count:22,scale:1.05,speed:6.8,color:16738374,impulse:.52}),At(we,"hitFlash",{color:16730421,intensity:.82,impulse:.5}),dn>0&&St(`Wingtail hit by ${m}. ${Math.ceil(dn)} health remaining.`),dn>0}function Ug(m){for(let w=ui.length-1;w>=0;w-=1){let E=ui[w];E.z+=E.speed*m,E.phase+=m*(1.25+E.spec.agility*.55);let k=Si[E.lane];E.behavior==="sweep"?E.x=k+Math.sin(E.phase)*E.amplitude*1.8:E.behavior==="flank"?E.x=k+Math.sin(E.phase*.82)*E.amplitude*2.35:E.x+=(k+Math.sin(E.phase)*E.amplitude-E.x)*m*1.8,E.behavior==="dive"?E.y+=Math.sin(E.phase*.68)*m*2.4:E.y+=Math.cos(E.phase)*m*E.amplitude*(E.behavior==="missile-sortie"?.2:.42),E.view.position.set(E.x,E.y,E.z),E.view.rotation.z=Math.sin(E.phase)*.28*E.spec.agility,E.view.rotation.x=Math.cos(E.phase*.7)*.06,E.view.userData.engine.scale.setScalar(.8+Math.sin(Mt*26+E.phase)*.18),E.exhaustTimer-=m,E.exhaustTimer<=0&&(E.exhaustTimer=Da?.09:.055,At(we,"jetExhaust",{position:{x:E.x,y:E.y,z:E.z-2.35*E.spec.scale},velocity:{x:0,y:0,z:-E.speed*.16},color:E.typeId==="a10"?16753487:6674943}));let K=E.z-ue.z;if(Math.abs(K)<1.2&&Math.hypot(E.x-ue.x,E.y-ue.y)<ue.radius+.7*E.spec.scale){if(lh(E.spec.name+" collision",E)){tp(w);continue}uh(`${E.spec.name} collision`);return}E.z>10&&(Math.hypot(E.x-ue.x,E.y-ue.y)<3.3&&($n("CLOSE PASS",120),At(we,"nearMiss",{position:E,velocity:{x:0,y:0,z:E.speed},impulse:.14,roll:ut((E.x-ue.x)/8,-1,1)*.008})),It(E.view),ui.splice(w,1))}}function Fg(m,w){if(!m||!he||!ce)return;let E=m.x-ue.x,k=m.z-ue.z,K=Math.atan2(E,-k)*180/Math.PI;he.style.setProperty("--missile-bearing",`${K.toFixed(1)}deg`);let oe="Ahead";Math.abs(K)>135?oe="Behind":K<-35?oe="Left":K>35&&(oe="Right"),ce.textContent=w?`${oe} \xB7 inbound`:`${oe} \xB7 locking`}function Og(m){let w=0,E=null,k=null;for(let ke=Gt.length-1;ke>=0;ke-=1){let ie=Gt[ke];if(ie.state==="locking"){if(!ie.source||!ui.includes(ie.source)&&ie.source!==Qe){It(ie.view),Gt.splice(ke,1);continue}ie.x=ie.source.x,ie.y=ie.source.y-.4,ie.z=ie.source.z+.4,ie.timer=Math.max(0,ie.timer-m*(1-Ht.lockResistance)),(Math.abs(ue.vx)>2.2||Math.abs(ue.vy)>6.2)&&(ie.timer=Math.min(ie.lockDuration,ie.timer+m*.22));let dt=1-ie.timer/ie.lockDuration;dt>=w&&(w=dt,E=ie),ie.timer<=0&&ie.pendingLaunch&&ep(ie,ie.pendingLaunch);continue}ie.life-=m,mn.set(ue.x-ie.x,ue.y-ie.y,ue.z-ie.z).normalize();let $e=(ie.life>3?2.8:1.2)*(ie.guidanceScale||1);ie.direction.lerp(mn,1-Math.exp(-$e*m)).normalize(),ie.speed=Math.min(31,ie.speed+7*m),ie.x+=ie.direction.x*ie.speed*m,ie.y+=ie.direction.y*ie.speed*m,ie.z+=ie.direction.z*ie.speed*m,ie.view.position.set(ie.x,ie.y,ie.z),ie.view.lookAt(ie.x-ie.direction.x,ie.y-ie.direction.y,ie.z-ie.direction.z),ie.view.userData.flame.scale.y=.8+Math.sin(Mt*32)*.2,ie.smokeTimer-=m,ie.smokeTimer<=0&&(ie.smokeTimer=Da?.075:.045,At(we,"missileSmoke",{position:ie,velocity:{x:-ie.direction.x*1.8,y:-ie.direction.y*1.8,z:-ie.direction.z*1.8}}));let Oe=Math.hypot(ie.x-ue.x,ie.y-ue.y,ie.z-ue.z);if(ie.closestDistance=Math.min(ie.closestDistance,Oe),!ie.nearMissShown&&ie.closestDistance<3.1&&ie.closestDistance>ue.radius+.35&&Oe>ie.lastDistance+.16&&(ie.nearMissShown=!0,At(we,"nearMiss",{position:ie,velocity:ie.direction,impulse:.26,roll:ut((ie.x-ue.x)/8,-1,1)*.014})),ie.lastDistance=Oe,(!k||Oe<k.distance)&&(k={missile:ie,distance:Oe}),Oe<ue.radius+.4){if(At(we,"explosion",{position:ie,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),lh("missile strike",ie)){It(ie.view),Gt.splice(ke,1);continue}At(we,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),uh("missile strike");return}(ie.life<=0||ie.z>18||Math.abs(ie.x)>22||Math.abs(ie.y)>16)&&(It(ie.view),Gt.splice(ke,1))}let K=!!k;k&&(E=k.missile);let oe=K?100:Math.round(w*100);le.hidden=!E,se.style.width=`${oe}%`,se.setAttribute("aria-valuenow",String(oe)),Fg(E,K)}function Zo(m,w,E){mn.copy(E).sub(w);let k=mn.lengthSq();if(!k)return m.distanceTo(w);let K=ut(Gd.copy(m).sub(w).dot(mn)/k,0,1);return Gd.copy(w).addScaledVector(mn,K).distanceTo(m)}function Bg(m){for(let w=Yr.length-1;w>=0;w-=1){let E=Yr[w];E.previous.set(E.x,E.y,E.z),E.x+=E.velocity.x*m,E.y+=E.velocity.y*m,E.z+=E.velocity.z*m,E.life-=m,E.view.position.set(E.x,E.y,E.z),E.view.rotation.z+=E.spin*m,E.view.rotation.x=Math.sin((1.9-E.life)*E.tumble)*.32,E.view.rotation.y=Math.cos((1.9-E.life)*E.tumble*.74)*.24,(E.rage||E.rpg)&&E.view.userData.flame&&(E.view.userData.flame.scale.y=.82+Math.sin(performance.now()*.03)*.18),E.trailTimer-=m,E.trailTimer<=0&&(E.trailTimer=E.rpg?.055:E.rage?.09:Da?.06:.035,At(we,"projectileTrail",{start:E.previous,end:E.view.position,life:.16,width:E.rpg?.16:E.rage?.105:.055,color:E.rpg?16757051:E.rage?16738613:16770443}));let k=!1;for(let K=Gt.length-1;K>=0;K-=1){let oe=Gt[K];if(oe.state==="active"&&Zo(new R(oe.x,oe.y,oe.z),E.previous,E.view.position)<.62&&(At(we,"explosion",{position:oe,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),It(oe.view),Gt.splice(K,1),$n("MISSILE DOWN",300),sh("missile"),k=!E.rpg,k))break}if(!k&&Qe&&Zo(new R(Qe.x,Qe.y,Qe.z),E.previous,E.view.position)<Qe.radius){Qe.hp-=E.damage;let K=Qe.hp<=0;At(we,"explosion",{position:{x:Qe.x+yt(-2.4,2.4),y:Qe.y+yt(-.8,.8),z:Qe.z+yt(-2.8,2.8)},count:K?42:E.rpg?18:9,scale:K?2.3:E.rpg?1.05:.52,speed:K?10:5,color:K?16730421:16757572,impulse:K?1.1:.14}),K?bg():(Qe.view.userData.coreMaterial.opacity=ut(Qe.hp/Qe.maxHp,.3,1),Kn()),k=!0}if(!k)for(let K=pn.length-1;K>=0;K-=1){let oe=pn[K];if(Zo(new R(oe.x,oe.y,oe.z),E.previous,E.view.position)<oe.radius){oe.hp-=E.damage,At(we,"explosion",{position:oe,count:oe.hp<=0?30:8,scale:oe.hp<=0?1.6:.42,speed:oe.hp<=0?8:4.5,color:oe.hp<=0?16733757:16761690,impulse:oe.hp<=0?.8:.12}),oe.view.userData.core.material.opacity=ut(oe.hp/oe.maxHp,.28,1),oe.hp<=0?xg(K):St(`${oe.spec.name} integrity ${Math.max(0,Math.ceil(oe.hp/oe.maxHp*100))} percent.`),k=!0;break}}if(!k)for(let K=ui.length-1;K>=0;K-=1){let oe=ui[K];if(Zo(new R(oe.x,oe.y,oe.z),E.previous,E.view.position)<1.05*oe.spec.scale){oe.hp-=E.damage,At(we,"explosion",{position:oe,count:oe.hp<=0?20:6,scale:oe.hp<=0?1.05:.32,speed:oe.hp<=0?7:4,color:oe.hp<=0?16738866:16769130,impulse:oe.hp<=0?.55:.08}),oe.hp<=0?tp(K):St(`${oe.spec.name} armor ${Math.ceil(oe.hp)} of ${oe.maxHp}.`),k=!0;break}}(k||E.life<=0||E.z<-110)&&(It(E.view),Yr.splice(w,1))}}function tp(m){let w=ui[m];It(w.view),ui.splice(m,1);for(let E=Gt.length-1;E>=0;E-=1)Gt[E].source===w&&(It(Gt[E].view),Gt.splice(E,1));Er(Math.max(2,Math.round(w.spec.score/190))),Hd+=1,sh("jet"),Yo(2.5),$n(`${w.spec.name} DOWN`,w.spec.score),lt.playJetDestroyed?.(ut(w.x/8,-1,1)),qn=Ze?.04:.15}function $n(m,w){Ei+=Math.round(w*Yt),Yt=ut(Yt+.25,1,5),yi=3.4,G.textContent=String(Ei),j.textContent=`${Yt.toFixed(2)}\xD7`,St(`${m}. ${Math.round(w*Yt)} points.`)}function ip(){let m=Jd();if(!m||Ae!=="playing"){fe?.classList.remove("is-locked"),Be&&(Be.textContent="Scanning"),qe&&(qe.hidden=!0),fe&&(fe.style.left="50%",fe.style.top="50%");return}mn.set(m.x,m.y,m.z).project(Ft);let w=ut((mn.x*.5+.5)*100,10,90),E=ut((-mn.y*.5+.5)*100,16,84);if(fe?.classList.add("is-locked"),fe&&(fe.style.left=`${w}%`,fe.style.top=`${E}%`),Be){let k=m===Qe?"TITAN":m.spec.name;Be.textContent=`${k} \xB7 ${Math.max(0,Math.ceil(m.hp||0))} HP`}qe&&(qe.hidden=!1,qe.textContent=`${Math.max(1,Math.round((ue.z-m.z)*12))} m`)}function ch(m){let w=br()*.5*Ht.speed,E=ei?.update(m,{speed:w});un||Qi?(rt.background.setHex(Qi?329485:464411),rt.fog.color.setHex(Qi?1118235:533802),Ki?.color.setHex(7723216),Hi?.color.setHex(16766315)):Kc(E);for(let K of bs.children)K.position.z+=w*m*.34,K.position.z>18&&(K.position.z-=148);let k=Es.geometry.attributes.position;for(let K=2;K<k.array.length;K+=3)k.array[K]+=w*m*.55,k.array[K]>6&&(k.array[K]-=150);k.needsUpdate=!0}function hh(m){let w=qn;qn=Math.max(0,qn-m);let E=kd(we,m,{camera:Ft,playerPosition:ue,cameraPosition:Ft.position});wd(zi,m,ue,{camera:Ft,shake:w,lookAhead:Da?29:32}),E&&(Ft.position.x+=E.x,Ft.position.y+=E.y,Ft.position.z+=E.z,Ft.rotateZ(E.roll))}function zg(m){if(Ae!=="playing"){Ae==="ready"?(ue.y=.65+Math.sin(performance.now()/700)*.18,To(zi,m,ue,{active:!1,speed:Ne[0].speed}),ch(m*.35),hh(m)):Ae==="crashing"?(To(zi,m,ue,{active:!1,speed:br()}),ch(m*.45),hh(m)):kd(we,m,{camera:Ft,playerPosition:ue,cameraPosition:Ft?.position}),ip();return}Mt+=m,Xn+=m*(1.25+br()*.032)*Ht.speed,$i=Math.max(0,$i-m),vg(m),ih(),yi-=m,yi<=0&&Yt>1&&(Yt=Math.max(1,Yt-m*.75),j.textContent=`${Yt.toFixed(2)}\xD7`),Lg(),Ae==="playing"&&(Ji?.update(m,{activeAircraft:ui.length,activeMissiles:Gt.length,maxAircraft:Vd(),maxMissiles:Wo(),difficulty:Je*.03+wt.encounter}),Ng(m),Ug(m),Ae==="playing"&&(Og(m),Ae==="playing"&&(Eg(m),Ae==="playing"&&(Mg(m),Ae==="playing"&&(Sg(m),Ae==="playing"&&(Pg(m),Bg(m),Ae==="playing"&&(ch(m),hh(m),ip(),H.textContent=String(Math.floor(Xn)),lt.update?.(m,{state:Ae,level:Je,monkey:ue,jets:ui,missiles:Gt}))))))))}function uh(m){if(Ae!=="playing")return;Ae="crashing",bi.pause(),Vo(),Ve&&(Ve.hidden=!0),document.body.classList.remove("boss-battle-active"),Zn(),P.disabled=!0,De&&(De.disabled=!0),fn.delete("TouchLift"),Ji?.stop({clearSchedule:!0}),le.hidden=!0,qn=Ze?.08:.28,At(we,"explosion",{position:ue,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),At(we,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),lt.playImpact?.(m),lt.stopRun?.(m);let w=Math.floor(Xn);w>=8&&Er(Math.max(1,Math.floor(w/12))),w>Oa&&(Oa=w,W.textContent=String(Oa),localStorage.setItem("monkeyNoFlyBest3D",String(Oa))),window.setTimeout(()=>{Ae="gameover",e.dataset.mode="result",t.hidden=!1,i.hidden=!1,t.textContent="Flight terminated.",i.textContent=`${m}. You survived ${w} km, scored ${Ei.toLocaleString()} points, and recovered ${ko} coconuts.`,r&&(r.hidden=!0),s.textContent="Return to Hangar",s.hidden=!1,Qc(!0),St(`Flight terminated by ${m}.`)},Ze?120:650)}function Ba(){Ae==="playing"&&(ws=Ae,Ae="paused",Zn(),T.hidden=!1,T.inert=!1,T.setAttribute("aria-hidden","false"),P.disabled=!0,De&&(De.disabled=!0),fn.delete("TouchLift"),lt.setPaused?.(!0),b.focus())}function dh(){Ae==="paused"&&(Ae=ws,Zn(),T.setAttribute("aria-hidden","true"),T.hidden=!0,T.inert=!0,P.disabled=!1,De&&(De.disabled=!1),lt.setPaused?.(!1),Ia=performance.now(),n.focus({preventScroll:!0}))}function np(){let m=lt.isMuted?.()||!1;O.setAttribute("aria-pressed",String(m)),O.setAttribute("aria-label",m?"Unmute sound":"Mute sound"),O.title=m?"Unmute sound":"Mute sound",O.querySelector("span").textContent=m?"\u{1F507}":"\u{1F50A}"}function kg(m){m.target.closest("button")||m.pointerType!=="touch"&&(jr={x:m.clientX,y:m.clientY,time:performance.now()},Ae==="playing"&&eh())}function Hg(m){if(!jr||Ae!=="playing"){jr=null;return}let w=m.clientX-jr.x,E=m.clientY-jr.y;Math.abs(w)>42&&Math.abs(w)>Math.abs(E)*1.2&&th(w>0?1:-1),jr=null}function rp(m){if(Ae!=="playing"||m.pointerId!==zo)return;let w=be.getBoundingClientRect(),E=ut((m.clientX-w.left)/Math.max(1,w.width),0,1);ue.lane=ut(Math.round(E*(Si.length-1)),0,Si.length-1)}function Gg(m){Ae==="playing"&&(m.preventDefault(),zo=m.pointerId,be.setPointerCapture?.(m.pointerId),rp(m))}function sp(m){m.pointerId===zo&&(zo=null)}function Vg(m){Ae==="playing"&&(m.preventDefault(),De.setPointerCapture?.(m.pointerId),fn.add("TouchLift"),eh())}function ap(m){m.preventDefault(),fn.delete("TouchLift")}s.addEventListener("click",()=>{et&&li==="ready"?(li="complete",Rs()):e.dataset.mode==="result"||li==="complete"?Rs():ug()}),a?.addEventListener("click",Zd),v?.addEventListener("click",m=>{let w=m.target.closest("[data-response]");w&&pg(w.dataset.response)}),Cn?.addEventListener("click",gg),Ss?.addEventListener("click",()=>qt?.skip()),jn?.addEventListener("click",Cg),Vr?.addEventListener("click",()=>{let m=Di(ci,Xr[ci]);if(!m)return;let w=Fm(_t,ci,m.id);B.textContent=w.ok?w.item.name+(w.action==="purchased"?" purchased and equipped.":" equipped."):w.reason,Oc?.(zi,_t.equipped),Xo(ci),Jc()}),Lt?.addEventListener("click",m=>{let w=m.target.closest("[data-category]");w&&Xo(w.dataset.category)}),Aa?.addEventListener("click",m=>{let w=m.target.closest("[data-difficulty]");!w||!Et[w.dataset.difficulty]||(Yn=w.dataset.difficulty,Wd(),Jc(),St(`${wt.name} difficulty selected.`))}),U.addEventListener("click",Ba),b.addEventListener("click",dh),I.addEventListener("click",()=>{dh(),Rs()}),O.addEventListener("click",()=>{lt.setMuted?.(!lt.isMuted?.()),Dt.muted=!!lt.isMuted?.(),bi.muted=!!lt.isMuted?.(),np()}),P.addEventListener("pointerdown",m=>{m.preventDefault(),m.stopPropagation(),rh()}),Y?.addEventListener("click",nh),J?.addEventListener("click",nh),be?.addEventListener("pointerdown",Gg),be?.addEventListener("pointermove",rp),be?.addEventListener("pointerup",sp),be?.addEventListener("pointercancel",sp),De?.addEventListener("pointerdown",Vg),De?.addEventListener("pointerup",ap),De?.addEventListener("pointercancel",ap),n.addEventListener("pointerdown",kg),n.addEventListener("pointerup",Hg),n.addEventListener("pointercancel",()=>{jr=null}),n.addEventListener("webglcontextlost",m=>{m.preventDefault(),Ae==="playing"&&Ba(),St("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",$c),window.addEventListener("blur",()=>{Ae==="playing"&&Ba(),Fe?.setPaused(!0),qt?.setPaused(!0),Dt.pause()}),window.addEventListener("focus",()=>{Fe?.setPaused(!1),qt?.setPaused(!1),["cinematic","dialogue","victory"].includes(Ae)&&Dt.src&&!Dt.ended&&Dt.play().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.hidden&&Ae==="playing"&&Ba(),Fe?.setPaused(document.hidden),qt?.setPaused(document.hidden),document.hidden?Dt.pause():["cinematic","dialogue","victory"].includes(Ae)&&Dt.src&&!Dt.ended&&Dt.play().catch(()=>{})}),window.addEventListener("keydown",m=>{if((["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(m.code)||Ae==="playing"&&m.code==="Enter")&&m.preventDefault(),!(m.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(m.code))){if(fn.add(m.code),Ae==="victory"&&m.code==="Escape"){m.preventDefault(),qt?.skip();return}if(["cinematic","dialogue"].includes(Ae)&&m.code==="Escape"){m.preventDefault(),Zd();return}if(Ae==="dialogue"&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(m.code)){m.preventDefault();let w=[...v.querySelectorAll("button")],E=Math.max(0,w.indexOf(document.activeElement));w[m.code==="ArrowLeft"||m.code==="KeyA"?Math.max(0,E-1):Math.min(w.length-1,E+1)]?.focus();return}Ae==="playing"?((m.code==="Space"||m.code==="KeyW"||m.code==="ArrowUp")&&eh(),(m.code==="KeyA"||m.code==="ArrowLeft")&&th(-1),(m.code==="KeyD"||m.code==="ArrowRight")&&th(1),(m.code==="Enter"||m.code==="KeyX"||m.code==="KeyF"||m.code==="ShiftLeft")&&rh(),(m.code==="KeyR"||m.code==="KeyG"||m.code==="KeyB")&&nh(),(m.code==="Escape"||m.code==="KeyP")&&Ba()):Ae==="paused"&&(m.code==="Escape"||m.code==="KeyP")&&dh()}}),window.addEventListener("keyup",m=>fn.delete(m.code));function op(m){let w=Math.min(.1,(m-Ia)/1e3);for(Ia=m,La=w>.026?La+1:Math.max(0,La-2),La>90&&Pa>.72&&(Pa=Math.max(.72,Pa-.12),La=0,qm(we,Pa<.84?"low":"medium",{reducedMotion:Ze}),$c()),Ts+=w;Ts>=xr;)zg(xr),Ts-=xr;Ue&&rt&&Ft&&!["paused","victory","victory-result"].includes(Ae)&&!document.hidden&&Ue.render(rt,Ft),requestAnimationFrame(op)}n.tabIndex=0,s.disabled=!0,s.textContent="Loading 3D Flight",np(),cg(),requestAnimationFrame(op)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
