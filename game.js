(()=>{var dd=n=>{throw TypeError(n)};var jm=(n,e,t)=>e.has(n)||dd("Cannot "+t);var pd=(n,e,t)=>e.has(n)?dd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Ve=(n,e,t)=>(jm(n,e,"access private method"),t);var qd=0,lh=1,Yd=2;var Na=1,Zd=2,Fs=3,Os=0,Ti=1,gi=2,En=0,Vr=1,Ki=2,ch=3,hh=4,Jd=5;var Bs=100,Kd=101,$d=102,Qd=103,ep=104,tp=200,ip=201,np=202,rp=203,sp=204,ap=205,op=206,lp=207,cp=208,hp=209,up=210,dp=211,pp=212,fp=213,mp=214,uh=0,dh=1,ph=2,wl=3,fh=4,mh=5,gh=6,vh=7,gp=0,vp=1,_p=2,un=0,_h=1,yh=2,xh=3,qn=4,Mh=5,Sh=6,bh=7;var Eh=300,zs=301,Wr=302,Al=303,Cl=304,Ua=306,Nr=1e3,ur=1001,zo=1002,qi=1003,yp=1004;var Fa=1005;var ni=1006,Rl=1007;var dn=1008;var Ni=1009,Th=1010,wh=1011,ks=1012,Il=1013,Yn=1014,$i=1015,Tn=1016,Pl=1017,Ll=1018,Hs=1020,Ah=35902,Ch=35899,xp=1021,Mp=1022,pn=1023,vr=1026,jr=1027,Dl=1028,Nl=1029,Gs=1030,Rh=1031;var Ih=1033,Ul=33776,Fl=33777,Ol=33778,Bl=33779,Ph=35840,Lh=35841,Dh=35842,Nh=35843,Uh=36196,Fh=37492,Oh=37496,Bh=37488,zh=37489,kh=37490,Hh=37491,Gh=37808,Vh=37809,Wh=37810,jh=37811,Xh=37812,qh=37813,Yh=37814,Zh=37815,Jh=37816,Kh=37817,$h=37818,Qh=37819,eu=37820,tu=37821,iu=36492,nu=36494,ru=36495,su=36283,au=36284,ou=36285,lu=36286;var pa=2300,ko=2301,Oo=2302,Zc=2303,Jc=2400,Kc=2401,$c=2402;var Sp=0,bp=1,Xr="",_t="srgb",Ur="srgb-linear",fa="linear",mt="srgb";var Dr=7680;var Ep=512,Tp=513,wp=514,zl=515,Ap=516,Cp=517,kl=518,Rp=519,Qc=35044,Vs=35048;var cu="300 es",kn=2e3,Ms=2001;function Xm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ip(){let n=Ss("canvas");return n.style.display="block",n}var fd={},bs=null;function hu(...n){let e="THREE."+n.shift();bs?bs("log",e,...n):console.log(e,...n)}function Pp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){let e="THREE."+(n=Pp(n)).shift();if(bs)bs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){let e="THREE."+(n=Pp(n)).shift();if(bs)bs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ma(...n){let e=n.join(" ");e in fd||(fd[e]=!0,Oe(...n))}function Lp(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var Dp={[uh]:1,[ph]:6,[fh]:7,[wl]:5,[dh]:0,[gh]:2,[vh]:4,[mh]:3},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=1234567,ys=Math.PI/180,Es=180/Math.PI;function qr(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(di[255&n]+di[n>>8&255]+di[n>>16&255]+di[n>>24&255]+"-"+di[255&e]+di[e>>8&255]+"-"+di[e>>16&15|64]+di[e>>24&255]+"-"+di[63&t|128]+di[t>>8&255]+"-"+di[t>>16&255]+di[t>>24&255]+di[255&i]+di[i>>8&255]+di[i>>16&255]+di[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function eh(n,e){return(n%e+e)%e}function ha(n,e,t){return(1-t)*n+t*e}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var uu={DEG2RAD:ys,RAD2DEG:Es,generateUUID:qr,clamp:et,euclideanModulo:eh,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:ha,damp:function(n,e,t,i){return ha(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(eh(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(md=n);let e=md+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*ys},radToDeg:function(n){return n*Es},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*h,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:yi,denormalize:_s},pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],m=s[a+2],f=s[a+3];if(u!==f||l!==d||c!==p||h!==m){let y=l*d+c*p+h*m+u*f;y<0&&(d=-d,p=-p,m=-m,f=-f,y=-y);let g=1-o;if(y<.9995){let v=Math.acos(y),M=Math.sin(v);g=Math.sin(g*v)/M,l=l*g+d*(o=Math.sin(o*v)/M),c=c*g+p*o,h=h*g+m*o,u=u*g+f*o}else{l=l*g+d*o,c=c*g+p*o,h=h*g+m*o,u=u*g+f*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new A,gd=new mi,Je=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],f=r[0],y=r[3],g=r[6],v=r[1],M=r[4],T=r[7],E=r[2],C=r[5],D=r[8];return s[0]=a*f+o*v+l*E,s[3]=a*y+o*M+l*C,s[6]=a*g+o*T+l*D,s[1]=c*f+h*v+u*E,s[4]=c*y+h*M+u*C,s[7]=c*g+h*T+u*D,s[2]=d*f+p*v+m*E,s[5]=d*y+p*M+m*C,s[8]=d*g+p*T+m*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/m;return e[0]=u*f,e[1]=(r*c-h*i)*f,e[2]=(o*i-r*a)*f,e[3]=d*f,e[4]=(h*t-r*l)*f,e[5]=(r*s-o*t)*f,e[6]=p*f,e[7]=(i*l-c*t)*f,e[8]=(a*t-i*s)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new Je,vd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qm(){let n={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===mt&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ur]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:vd,fromXYZ:_d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:vd,fromXYZ:_d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),n}var ct=qm();function zn(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function xs(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var ss,Ho=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Ss("canvas")),ss.width=e.width,ss.height=e.height;let r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*zn(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*zn(t[i]/255)):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ym=0,Ts=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bc(r[a].image)):s.push(bc(r[a]))}else s=bc(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function bc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ho.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Zm=0,Ec=new A,fi=class n extends Hn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=qr(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Oe(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null,fi.DEFAULT_MAPPING=Eh,fi.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],f=l[2],y=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(m+y)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,T=(p+1)/2,E=(g+1)/2,C=(h+d)/4,D=(u+f)/4,O=(m+y)/4;return M>T&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=D/i):T>E?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=O/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=D/s,r=O/s),this.set(i,r,s,t),this}let v=Math.sqrt((y-m)*(y-m)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(y-m)/v,this.y=(u-f)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Go=class extends Hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new fi(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ts(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends Go{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ga=class extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qi,this.minFilter=qi,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vo=class extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qi,this.minFilter=qi,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,m,f,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,m,f,y)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,m,f,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=f,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,f=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,f=c*u;t[0]=d+f*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=f+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,f=c*u;t[0]=d-f*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=f-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,f=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+f,t[1]=l*u,t[5]=f*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,f=o*c;t[0]=l*h,t[4]=f-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-f*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,f=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+f,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=f*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Km)}lookAt(e,t,i){let r=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),nr.crossVectors(i,Ci),nr.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),nr.crossVectors(i,Ci)),nr.normalize(),so.crossVectors(Ci,nr),r[0]=nr.x,r[4]=so.x,r[8]=Ci.x,r[1]=nr.y,r[5]=so.y,r[9]=Ci.y,r[2]=nr.z,r[6]=so.z,r[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],f=i[6],y=i[10],g=i[14],v=i[3],M=i[7],T=i[11],E=i[15],C=r[0],D=r[4],O=r[8],R=r[12],k=r[1],V=r[5],G=r[9],W=r[13],H=r[2],X=r[6],Y=r[10],K=r[14],ne=r[3],ye=r[7],Ae=r[11],Pe=r[15];return s[0]=a*C+o*k+l*H+c*ne,s[4]=a*D+o*V+l*X+c*ye,s[8]=a*O+o*G+l*Y+c*Ae,s[12]=a*R+o*W+l*K+c*Pe,s[1]=h*C+u*k+d*H+p*ne,s[5]=h*D+u*V+d*X+p*ye,s[9]=h*O+u*G+d*Y+p*Ae,s[13]=h*R+u*W+d*K+p*Pe,s[2]=m*C+f*k+y*H+g*ne,s[6]=m*D+f*V+y*X+g*ye,s[10]=m*O+f*G+y*Y+g*Ae,s[14]=m*R+f*W+y*K+g*Pe,s[3]=v*C+M*k+T*H+E*ne,s[7]=v*D+M*V+T*X+E*ye,s[11]=v*O+M*G+T*Y+E*Ae,s[15]=v*R+M*W+T*K+E*Pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],f=e[7],y=e[11],g=e[15],v=l*p-c*d,M=o*p-c*u,T=o*d-l*u,E=a*p-c*h,C=a*d-l*h,D=a*u-o*h;return t*(f*v-y*M+g*T)-i*(m*v-y*E+g*C)+r*(m*M-f*E+g*D)-s*(m*T-f*C+y*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],f=e[13],y=e[14],g=e[15],v=t*o-i*a,M=t*l-r*a,T=t*c-s*a,E=i*l-r*o,C=i*c-s*o,D=r*c-s*l,O=h*f-u*m,R=h*y-d*m,k=h*g-p*m,V=u*y-d*f,G=u*g-p*f,W=d*g-p*y,H=v*W-M*G+T*V+E*k-C*R+D*O;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/H;return e[0]=(o*W-l*G+c*V)*X,e[1]=(r*G-i*W-s*V)*X,e[2]=(f*D-y*C+g*E)*X,e[3]=(d*C-u*D-p*E)*X,e[4]=(l*k-a*W-c*R)*X,e[5]=(t*W-r*k+s*R)*X,e[6]=(y*T-m*D-g*M)*X,e[7]=(h*D-d*T+p*M)*X,e[8]=(a*G-o*k+c*O)*X,e[9]=(i*k-t*G-s*O)*X,e[10]=(m*C-f*T+g*v)*X,e[11]=(u*T-h*C-p*v)*X,e[12]=(o*R-a*V-l*O)*X,e[13]=(t*V-i*R+r*O)*X,e[14]=(f*M-m*E-y*v)*X,e[15]=(h*E-u*M+d*v)*X,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,f=a*h,y=a*u,g=o*u,v=l*c,M=l*h,T=l*u,E=i.x,C=i.y,D=i.z;return r[0]=(1-(f+g))*E,r[1]=(p+T)*E,r[2]=(m-M)*E,r[3]=0,r[4]=(p-T)*C,r[5]=(1-(d+g))*C,r[6]=(y+v)*C,r[7]=0,r[8]=(m+M)*D,r[9]=(y-v)*D,r[10]=(1-(d+f))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=as.set(r[0],r[1],r[2]).length(),o=as.set(r[4],r[5],r[6]).length(),l=as.set(r[8],r[9],r[10]).length();s<0&&(a=-a),an.copy(this);let c=1/a,h=1/o,u=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),m,f;if(l)m=s/(a-s),f=a*s/(a-s);else if(o===kn)m=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Ms)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),f=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),m,f;if(l)m=1/(a-s),f=a/(a-s);else if(o===kn)m=-2/(a-s),f=-(a+s)/(a-s);else{if(o!==Ms)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),f=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},as=new A,an=new Ze,Jm=new A(0,0,0),Km=new A(1,1,1),nr=new A,so=new A,Ci=new A,yd=new Ze,xd=new mi,cn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},$m=0,Md=new A,os=new mi,Dn=new Ze,ao=new A,ia=new A,Qm=new A,eg=new mi,Sd=new A(1,0,0),bd=new A(0,1,0),Ed=new A(0,0,1),Td={type:"added"},tg={type:"removed"},ls={type:"childadded",child:null},Tc={type:"childremoved",child:null},qt=class n extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new cn,i=new mi,r=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Je}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return Md.copy(e).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ia,ao,this.up):Dn.lookAt(ao,ia,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Dn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Td),ls.child=e,this.dispatchEvent(ls),ls.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tg),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Td),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};qt.DEFAULT_UP=new A(0,1,0),qt.DEFAULT_MATRIX_AUTO_UPDATE=!0,qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let f of e.hand.values()){let y=t.getJointPose(f,i),g=this._getHandJoint(c,f);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},oo={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=eh(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wc(a,s,e+1/3),this.g=wc(a,s,e),this.b=wc(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=Np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ct.workingToColorSpace(pi.copy(this),e),65536*Math.round(et(255*pi.r,0,255))+256*Math.round(et(255*pi.g,0,255))+Math.round(et(255*pi.b,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(pi.copy(this),t);let i=pi.r,r=pi.g,s=pi.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(pi.copy(this),t),e.r=pi.r,e.g=pi.g,e.b=pi.b,e}getStyle(e=_t){ct.workingToColorSpace(pi.copy(this),e);let t=pi.r,i=pi.g,r=pi.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(oo);let i=ha(rr.h,oo.h,t),r=ha(rr.s,oo.s,t),s=ha(rr.l,oo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pi=new Re;Re.NAMES=Np;var Gn=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vn=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new A,Nn=new A,Ac=new A,Un=new A,cs=new A,hs=new A,wd=new A,Cc=new A,Rc=new A,Ic=new A,Pc=new Tt,Lc=new Tt,Dc=new Tt,Bn=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Nn.subVectors(i,t),Ac.subVectors(e,t);let a=on.dot(on),o=on.dot(Nn),l=on.dot(Ac),c=Nn.dot(Nn),h=Nn.dot(Ac),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Pc.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pc,s.x),a.addScaledVector(Lc,s.y),a.addScaledVector(Dc,s.z),a}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Nn.subVectors(e,t),on.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),.5*on.cross(Nn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;cs.subVectors(r,i),hs.subVectors(s,i),Cc.subVectors(e,i);let l=cs.dot(Cc),c=hs.dot(Cc);if(l<=0&&c<=0)return t.copy(i);Rc.subVectors(e,r);let h=cs.dot(Rc),u=hs.dot(Rc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(cs,a);Ic.subVectors(e,s);let p=cs.dot(Ic),m=hs.dot(Ic);if(m>=0&&p<=m)return t.copy(s);let f=p*c-l*m;if(f<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(hs,o);let y=h*m-p*u;if(y<=0&&u-h>=0&&p-m>=0)return wd.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(wd,o);let g=1/(y+f+d);return a=f*g,o=d*g,t.copy(i).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),co.subVectors(this.max,na),us.subVectors(e.a,na),ds.subVectors(e.b,na),ps.subVectors(e.c,na),sr.subVectors(ds,us),ar.subVectors(ps,ds),Rr.subVectors(us,ps);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Rr.z,Rr.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Rr.z,0,-Rr.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Rr.y,Rr.x,0];return!!Nc(t,us,ds,ps,co)&&(t=[1,0,0,0,1,0,0,0,1],!!Nc(t,us,ds,ps,co)&&(ho.crossVectors(sr,ar),t=[ho.x,ho.y,ho.z],Nc(t,us,ds,ps,co)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ln).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new A,new A,new A,new A,new A,new A,new A,new A],ln=new A,lo=new Yi,us=new A,ds=new A,ps=new A,sr=new A,ar=new A,Rr=new A,na=new A,co=new A,ho=new A,Ir=new A;function Nc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ir.fromArray(n,s);let o=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),h=i.dot(Ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var d_=ng();function ng(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Xt=new A,uo=new pe,rg=0,Pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yi(t,this.array),i=yi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yi(t,this.array),i=yi(i,this.array),r=yi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yi(t,this.array),i=yi(i,this.array),r=yi(r,this.array),s=yi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}};var _a=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ya=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Be=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},sg=new Yi,ra=new A,Uc=new A,Zi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Uc)),this.expandByPoint(ra.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ag=0,Xi=new Ze,Fc=new qt,fs=new A,Ri=new Yi,sa=new Yi,ii=new A,lt=class n extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?ya:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,i){return Xi.makeTranslation(e,t,i),this.applyMatrix4(Xi),this}scale(e,t,i){return Xi.makeScale(e,t,i),this.applyMatrix4(Xi),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Ri.setFromBufferAttribute(s),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(ii.addVectors(Ri.min,sa.min),Ri.expandByPoint(ii),ii.addVectors(Ri.max,sa.max),Ri.expandByPoint(ii)):(Ri.expandByPoint(sa.min),Ri.expandByPoint(sa.max))}Ri.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ii.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ii));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ii.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),ii.add(fs)),r=Math.max(r,i.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new A,l[O]=new A;let c=new A,h=new A,u=new A,d=new pe,p=new pe,m=new pe,f=new A,y=new A;function g(O,R,k){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,k),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,k),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let V=1/(p.x*m.y-m.x*p.y);isFinite(V)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(V),y.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(V),o[O].add(f),o[R].add(f),o[k].add(f),l[O].add(y),l[R].add(y),l[k].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let O=0,R=v.length;O<R;++O){let k=v[O],V=k.start;for(let G=V,W=V+k.count;G<W;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let M=new A,T=new A,E=new A,C=new A;function D(O){E.fromBufferAttribute(r,O),C.copy(E);let R=o[O];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(C,R);let k=T.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,k)}for(let O=0,R=v.length;O<R;++O){let k=v[O],V=k.start;for(let G=V,W=V+k.count;G<W;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),f=e.getX(d+1),y=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,f),a.fromBufferAttribute(t,y),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,y),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ii.fromBufferAttribute(e,t),ii.normalize(),e.setXYZ(t,ii.x,ii.y,ii.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let f=0,y=l.length;f<y;f++){p=o.isInterleavedBufferAttribute?l[f]*o.data.stride+o.offset:l[f]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new Pt(d,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var p_=new A;var og=0,Mn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Oe(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var f_=new A,m_=new A,g_=new A,v_=new pe,__=new pe,y_=new Ze,x_=new A,M_=new A,S_=new A,b_=new pe,E_=new pe,T_=new pe;var w_=new A,A_=new A;var On=new A,Oc=new A,po=new A,or=new A,Bc=new A,fo=new A,zc=new A,Fr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oc.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),or.copy(this.origin).sub(Oc);let s=.5*e.distanceTo(t),a=-this.direction.dot(po),o=or.dot(this.direction),l=-or.dot(po),c=or.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let f=1/h;u*=f,d*=f,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Oc).addScaledVector(po,d),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);let i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){Bc.subVectors(t,e),fo.subVectors(i,e),zc.crossVectors(Bc,fo);let a,o=this.direction.dot(zc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}or.subVectors(this.origin,e);let l=a*this.direction.dot(fo.crossVectors(or,fo));if(l<0)return null;let c=a*this.direction.dot(Bc.cross(or));if(c<0||l+c>o)return null;let h=-a*or.dot(zc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ad=new Ze,Pr=new Fr,mo=new Zi,Cd=new A,go=new A,vo=new A,_o=new A,kc=new A,yo=new A,Rd=new A,xo=new A,we=class extends qt{constructor(e=new lt,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(kc.fromBufferAttribute(u,e),a?yo.addScaledVector(kc,h):yo.addScaledVector(kc.sub(t),h))}t.add(yo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),mo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(mo,Cd)===null||Pr.origin.distanceToSquared(Cd)>(e.far-e.near)**2))return;Ad.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Ad),i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Pr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,f=d.length;m<f;m++){let y=d[m],g=a[y.materialIndex];for(let v=Math.max(y.start,p.start),M=Math.min(o.count,Math.min(y.start+y.count,p.start+p.count));v<M;v+=3)r=Mo(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=y.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),f=Math.min(o.count,p.start+p.count);m<f;m+=3)r=Mo(this,a,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,f=d.length;m<f;m++){let y=d[m],g=a[y.materialIndex];for(let v=Math.max(y.start,p.start),M=Math.min(l.count,Math.min(y.start+y.count,p.start+p.count));v<M;v+=3)r=Mo(this,g,e,i,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=y.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),f=Math.min(l.count,p.start+p.count);m<f;m+=3)r=Mo(this,a,e,i,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function Mo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,go),n.getVertexPosition(l,vo),n.getVertexPosition(c,_o);let h=(function(u,d,p,m,f,y,g,v){let M;if(M=d.side===1?m.intersectTriangle(g,y,f,!0,v):m.intersectTriangle(f,y,g,d.side===0,v),M===null)return null;xo.copy(v),xo.applyMatrix4(u.matrixWorld);let T=p.ray.origin.distanceTo(xo);return T<p.near||T>p.far?null:{distance:T,point:xo.clone(),object:u}})(n,e,t,i,go,vo,_o,Rd);if(h){let u=new A;Bn.getBarycoord(Rd,go,vo,_o,u),r&&(h.uv=Bn.getInterpolatedAttribute(r,o,l,c,u,new pe)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,c,u,new pe)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Bn.getNormal(go,vo,_o,d.normal),h.face=d,h.barycoord=u}return h}var C_=new A,R_=new Tt,I_=new Tt,P_=new A,L_=new Ze,D_=new A,N_=new Zi,U_=new Ze,F_=new Fr;var Or=class extends fi{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},O_=new Ze,B_=new Ze;var xa=class extends Pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new Ze,Id=new Ze,So=[],Pd=new Yi,lg=new Ze,aa=new we,oa=new Zi,Br=class extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),Pd.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),oa.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),Id.multiplyMatrices(i,ms),aa.matrixWorld=Id,aa.raycast(e,So);for(let a=0,o=So.length;a<o;a++){let l=So[a];l.instanceId=s,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(r*this.count),r,this.count,Dl,$i));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hc=new A,cg=new A,hg=new Je,yn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Hc.subVectors(i,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hg.getNormalMatrix(e),r=this.coplanarPoint(Hc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Lr=new Zi,ug=new pe(.5,.5),bo=new A,dr=class{constructor(e=new yn,t=new yn,i=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],m=s[8],f=s[9],y=s[10],g=s[11],v=s[12],M=s[13],T=s[14],E=s[15];if(r[0].setComponents(c-a,p-h,g-m,E-v).normalize(),r[1].setComponents(c+a,p+h,g+m,E+v).normalize(),r[2].setComponents(c+o,p+u,g+f,E+M).normalize(),r[3].setComponents(c-o,p-u,g-f,E-M).normalize(),i)r[4].setComponents(l,d,y,T).normalize(),r[5].setComponents(c-l,p-d,g-y,E-T).normalize();else if(r[4].setComponents(c-l,p-d,g-y,E-T).normalize(),t===kn)r[5].setComponents(c+l,p+d,g+y,E+T).normalize();else{if(t!==Ms)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,d,y,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);let t=ug.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gn=new Ze,vn=new dr,Wo=class n{constructor(){this.coordinateSystem=kn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(gn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),vn.setFromProjectionMatrix(gn,r.coordinateSystem,r.reversedDepth),vn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(gn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),vn.setFromProjectionMatrix(gn,r.coordinateSystem,r.reversedDepth),vn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(gn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),vn.setFromProjectionMatrix(gn,r.coordinateSystem,r.reversedDepth),vn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(gn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),vn.setFromProjectionMatrix(gn,r.coordinateSystem,r.reversedDepth),vn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let r=t.cameras[i];if(gn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),vn.setFromProjectionMatrix(gn,r.coordinateSystem,r.reversedDepth),vn.containsPoint(e))return!0}return!1}clone(){return new n}};var th=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},z_=new Ze,k_=new Re(1,1,1),H_=new dr,G_=new Wo,V_=new Yi,W_=new Zi,j_=new A,X_=new A,q_=new A,Y_=new th,Z_=new we;var As=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jo=new A,Xo=new A,Ld=new Ze,la=new Fr,Eo=new Zi,Gc=new A,Dd=new A,Ma=class extends qt{constructor(e=new lt,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)jo.fromBufferAttribute(t,r-1),Xo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jo.distanceTo(Xo);e.setAttribute("lineDistance",new Be(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;Ld.copy(r).invert(),la.copy(e.ray).applyMatrix4(Ld);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,f=p-1;m<f;m+=c){let y=h.getX(m),g=h.getX(m+1),v=To(this,e,la,l,y,g,m);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),f=h.getX(d),y=To(this,e,la,l,m,f,p-1);y&&t.push(y)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,f=p-1;m<f;m+=c){let y=To(this,e,la,l,m,m+1,m);y&&t.push(y)}if(this.isLineLoop){let m=To(this,e,la,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function To(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(jo.fromBufferAttribute(o,r),Xo.fromBufferAttribute(o,s),t.distanceSqToSegment(jo,Xo,Gc,Dd)>i)return;Gc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Gc);return l<e.near||l>e.far?void 0:{distance:l,point:Dd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var J_=new A,K_=new A;var Sn=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nd=new Ze,ih=new Fr,wo=new Zi,Ao=new A,Wn=class extends qt{constructor(e=new lt,t=new Sn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Nd.copy(r).invert(),ih.copy(e.ray).applyMatrix4(Nd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Ao.fromBufferAttribute(h,p),Ud(Ao,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ao.fromBufferAttribute(h,u),Ud(Ao,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ud(n,e,t,i,r,s,a){let o=ih.distanceSqToPoint(n);if(o<t){let l=new A;ih.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Sa=class extends fi{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bn=class extends fi{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pr=class extends fi{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==vr&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qo=class extends pr{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ba=class extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lt=class n extends lt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(f,y,g,v,M,T,E,C,D,O,R){let k=T/D,V=E/O,G=T/2,W=E/2,H=C/2,X=D+1,Y=O+1,K=0,ne=0,ye=new A;for(let Ae=0;Ae<Y;Ae++){let Pe=Ae*V-W;for(let Ee=0;Ee<X;Ee++){let ae=Ee*k-G;ye[f]=ae*v,ye[y]=Pe*M,ye[g]=H,c.push(ye.x,ye.y,ye.z),ye[f]=0,ye[y]=0,ye[g]=C>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(Ee/D),u.push(1-Ae/O),K+=1}}for(let Ae=0;Ae<O;Ae++)for(let Pe=0;Pe<D;Pe++){let Ee=d+Pe+X*Ae,ae=d+Pe+X*(Ae+1),fe=d+(Pe+1)+X*(Ae+1),ve=d+(Pe+1)+X*Ae;l.push(Ee,ae,ve),l.push(ae,fe,ve),ne+=6}o.addGroup(p,ne,R),p+=ne,d+=K}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Yo=class n extends lt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*i+s,f=r+1,y=new A,g=new A;for(let v=0;v<=m;v++){let M=0,T=0,E=0,C=0;if(v<=i){let R=v/i,k=R*Math.PI/2;T=-h-e*Math.cos(k),E=e*Math.sin(k),C=-e*Math.cos(k),M=R*u}else if(v<=i+s){let R=(v-i)/s;T=R*t-h,E=e,C=0,M=u+R*d}else{let R=(v-i-s)/i,k=R*Math.PI/2;T=h+e*Math.sin(k),E=e*Math.cos(k),C=e*Math.sin(k),M=u+d+R*u}let D=Math.max(0,Math.min(1,M/p)),O=0;v===0?O=.5/r:v===m&&(O=-.5/r);for(let R=0;R<=r;R++){let k=R/r,V=k*Math.PI*2,G=Math.sin(V),W=Math.cos(V);g.x=-E*W,g.y=T,g.z=E*G,o.push(g.x,g.y,g.z),y.set(-E*W,C,E*G),y.normalize(),l.push(y.x,y.y,y.z),c.push(k+O,D)}if(v>0){let R=(v-1)*f;for(let k=0;k<r;k++){let V=R+k,G=R+k+1,W=v*f+k,H=v*f+k+1;a.push(V,G,W),a.push(G,H,W)}}}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Zo=class n extends lt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(o,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class n extends lt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,f=[],y=i/2,g=0;function v(M){let T=m,E=new pe,C=new A,D=0,O=M===!0?e:t,R=M===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,y*R,0),d.push(0,R,0),p.push(.5,.5),m++;let k=m;for(let V=0;V<=r;V++){let G=V/r*l+o,W=Math.cos(G),H=Math.sin(G);C.x=O*H,C.y=y*R,C.z=O*W,u.push(C.x,C.y,C.z),d.push(0,R,0),E.x=.5*W+.5,E.y=.5*H*R+.5,p.push(E.x,E.y),m++}for(let V=0;V<r;V++){let G=T+V,W=k+V;M===!0?h.push(W,W+1,G):h.push(W+1,W,G),D+=3}c.addGroup(g,D,M===!0?1:2),g+=D}(function(){let M=new A,T=new A,E=0,C=(t-e)/i;for(let D=0;D<=s;D++){let O=[],R=D/s,k=R*(t-e)+e;for(let V=0;V<=r;V++){let G=V/r,W=G*l+o,H=Math.sin(W),X=Math.cos(W);T.x=k*H,T.y=-R*i+y,T.z=k*X,u.push(T.x,T.y,T.z),M.set(H,C,X).normalize(),d.push(M.x,M.y,M.z),p.push(G,1-R),O.push(m++)}f.push(O)}for(let D=0;D<r;D++)for(let O=0;O<s;O++){let R=f[O][D],k=f[O+1][D],V=f[O+1][D+1],G=f[O][D+1];(e>0||O!==0)&&(h.push(R,k,G),E+=3),(t>0||O!==s-1)&&(h.push(k,V,G),E+=3)}c.addGroup(g,E,0),g+=E})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class n extends Ot{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fr=class n extends lt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,m,f,y){let g=y+1,v=[];for(let M=0;M<=g;M++){v[M]=[];let T=p.clone().lerp(f,M/g),E=m.clone().lerp(f,M/g),C=g-M;for(let D=0;D<=C;D++)v[M][D]=D===0&&M===g?T:T.clone().lerp(E,D/C)}for(let M=0;M<g;M++)for(let T=0;T<2*(g-M)-1;T++){let E=Math.floor(T/2);T%2==0?(l(v[M][E+1]),l(v[M+1][E]),l(v[M][E])):(l(v[M][E+1]),l(v[M+1][E+1]),l(v[M+1][E]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,m){let f=3*p;m.x=e[f+0],m.y=e[f+1],m.z=e[f+2]}function h(p,m,f,y){y<0&&p.x===1&&(a[m]=p.x-1),f.x===0&&f.z===0&&(a[m]=y/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new A,f=new A,y=new A;for(let g=0;g<t.length;g+=3)c(t[g+0],m),c(t[g+1],f),c(t[g+2],y),o(m,f,y,p)})(r),(function(p){let m=new A;for(let f=0;f<s.length;f+=3)m.x=s[f+0],m.y=s[f+1],m.z=s[f+2],m.normalize().multiplyScalar(p),s[f+0]=m.x,s[f+1]=m.y,s[f+2]=m.z})(i),(function(){let p=new A;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let f=u(p)/2/Math.PI+.5,y=d(p)/Math.PI+.5;a.push(f,1-y)}(function(){let m=new A,f=new A,y=new A,g=new A,v=new pe,M=new pe,T=new pe;for(let E=0,C=0;E<s.length;E+=9,C+=6){m.set(s[E+0],s[E+1],s[E+2]),f.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),v.set(a[C+0],a[C+1]),M.set(a[C+2],a[C+3]),T.set(a[C+4],a[C+5]),g.copy(m).add(f).add(y).divideScalar(3);let D=u(g);h(v,C+0,m,D),h(M,C+2,f,D),h(T,C+4,y,D)}})(),(function(){for(let m=0;m<a.length;m+=6){let f=a[m+0],y=a[m+2],g=a[m+4],v=Math.max(f,y,g),M=Math.min(f,y,g);v>.9&&M<.1&&(f<.2&&(a[m+0]+=1),y<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Jo=class n extends fr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Co=new A,Ro=new A,Vc=new A,Io=new Bn,Ko=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ys*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:f,b:y,c:g}=Io;if(f.fromBufferAttribute(o,c[0]),y.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Io.getNormal(Vc),u[0]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[1]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let M=(v+1)%3,T=u[v],E=u[M],C=Io[h[v]],D=Io[h[M]],O=`${T}_${E}`,R=`${E}_${T}`;R in d&&d[R]?(Vc.dot(d[R].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(D.x,D.y,D.z)),d[R]=null):O in d||(d[O]={index0:c[v],index1:c[M],normal:Vc.clone()})}}for(let m in d)if(d[m]){let{index0:f,index1:y}=d[m];Co.fromBufferAttribute(o,f),Ro.fromBufferAttribute(o,y),p.push(Co.x,Co.y,Co.z),p.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new Be(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new pe:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,r=[],s=[],a=[],o=new A,l=new Ze;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(et(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(et(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cs=class extends Li{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$o=class extends Cs{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function du(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Po=new A,Wc=new du,jc=new du,Xc=new du,mr=class extends Li{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Po.subVectors(r[0],r[1]).add(r[0]),o=Po);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Po.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(l),p);f<1e-4&&(f=1),m<1e-4&&(m=f),y<1e-4&&(y=f),Wc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,f,y),jc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,f,y),Xc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,f,y)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),jc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Xc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Wc.calc(h),jc.calc(h),Xc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fd(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function ua(n,e,t,i){return(function(r,s){let a=1-r;return a*a*s})(n,e)+(function(r,s){return 2*(1-r)*r*s})(n,t)+(function(r,s){return r*r*s})(n,i)}function da(n,e,t,i,r){return(function(s,a){let o=1-s;return o*o*o*a})(n,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(n,t)+(function(s,a){return 3*(1-s)*s*s*a})(n,i)+(function(s,a){return s*s*s*a})(n,r)}var Ea=class extends Li{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(da(e,r.x,s.x,a.x,o.x),da(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends Li{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(da(e,r.x,s.x,a.x,o.x),da(e,r.y,s.y,a.y,o.y),da(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends Li{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends Li{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Li{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ua(e,r.x,s.x,a.x),ua(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends Li{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ua(e,r.x,s.x,a.x),ua(e,r.y,s.y,a.y),ua(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Fd(o,l.x,c.x,h.x,u.x),Fd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:mr,CubicBezierCurve:Ea,CubicBezierCurve3:Qo,EllipseCurve:Cs,LineCurve:Ta,LineCurve3:el,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Aa,SplineCurve:Ca}),il=class extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new tl[r.type]().fromJSON(r))}return this}},Ra=class extends il{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ta(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new wa(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Ea(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Cs(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zr=class extends Ra{constructor(e){super(e),this.uuid=qr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ra().fromJSON(r))}return this}};function dg(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Od(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,d,p){let m=[];for(let f=0,y=u.length;f<y;f++){let g=Od(h,u[f]*p,f<y-1?u[f+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),m.push(xg(g))}m.sort(vg);for(let f=0;f<m.length;f++)d=_g(m[f],d);return d})(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<r;d+=t){let p=n[d],m=n[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ia(s,a,t,o,l,c,0),a}function Od(n,e,t,i,r){let s;if(r===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Bd(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Bd(a/i|0,n[a],n[a+1],s);return s&&Rs(s,s.next)&&(La(s),s=s.next),s}function kr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Rs(i,i.next)&&It(i.prev,i,i.next)!==0)i=i.next;else{if(La(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ia(n,e,t,i,r,s,a){if(!n)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=nh(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,f=1;do{let y,g=p;p=null;let v=null;for(m=0;g;){m++;let M=g,T=0;for(let C=0;C<f&&(T++,M=M.nextZ,M);C++);let E=f;for(;T>0||E>0&&M;)T!==0&&(E===0||!M||g.z<=M.z)?(y=g,g=g.nextZ,T--):(y=M,M=M.nextZ,E--),v?v.nextZ=y:p=y,y.prevZ=v,v=y;g=M}v.nextZ=null,f*=2}while(m>1)})(d)})(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?fg(n,i,r,s):pg(n))e.push(l.i,n.i,c.i),La(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?Ia(n=mg(kr(n),e),e,t,i,r,s,2):a===2&&gg(n,e,t,i,r,s):Ia(kr(n),e,t,i,r,s,1);break}}}function pg(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),d=Math.max(r,s,a),p=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ca(r,o,s,l,a,c,m.x,m.y)&&It(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function fg(n,e,t,i){let r=n.prev,s=n,a=n.next;if(It(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),f=Math.max(o,l,c),y=Math.max(h,u,d),g=nh(p,m,e,t,i),v=nh(f,y,e,t,i),M=n.prevZ,T=n.nextZ;for(;M&&M.z>=g&&T&&T.z<=v;){if(M.x>=p&&M.x<=f&&M.y>=m&&M.y<=y&&M!==r&&M!==a&&ca(o,h,l,u,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0||(M=M.prevZ,T.x>=p&&T.x<=f&&T.y>=m&&T.y<=y&&T!==r&&T!==a&&ca(o,h,l,u,c,d,T.x,T.y)&&It(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=f&&M.y>=m&&M.y<=y&&M!==r&&M!==a&&ca(o,h,l,u,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;T&&T.z<=v;){if(T.x>=p&&T.x<=f&&T.y>=m&&T.y<=y&&T!==r&&T!==a&&ca(o,h,l,u,c,d,T.x,T.y)&&It(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function mg(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Rs(i,r)&&Fp(i,t,t.next,r)&&Pa(i,r)&&Pa(r,i)&&(e.push(i.i,t.i,r.i),La(t),La(t.next),t=n=r),t=t.next}while(t!==n);return kr(t)}function gg(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mg(a,o)){let l=Op(a,o);return a=kr(a,a.next),l=kr(l,l.next),Ia(a,e,t,i,r,s,0),void Ia(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function vg(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function _g(n,e){let t=(function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(Rs(r,a))return a;do{if(Rs(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let f=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(f<=o&&f>h&&(h=f,c=a.x<a.next.x?a:a.next,f===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,m=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Up(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let f=Math.abs(l-a.y)/(o-a.x);Pa(a,r)&&(f<m||f===m&&(a.x>c.x||a.x===c.x&&yg(c,a)))&&(c=a,m=f)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=Op(t,n);return kr(i,i.next),kr(t,t.next)}function yg(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function nh(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function xg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Up(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function ca(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Up(n,e,t,i,r,s,a,o)}function Mg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Fp(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Pa(n,e)&&Pa(e,n)&&(function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||Rs(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Rs(n,e){return n.x===e.x&&n.y===e.y}function Fp(n,e,t,i){let r=Do(It(n,e,t)),s=Do(It(n,e,i)),a=Do(It(t,i,n)),o=Do(It(t,i,e));return r!==s&&a!==o||!(r!==0||!Lo(n,t,e))||!(s!==0||!Lo(n,i,e))||!(a!==0||!Lo(t,n,i))||!(o!==0||!Lo(t,e,i))}function Lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Do(n){return n>0?1:n<0?-1:0}function Pa(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function Op(n,e){let t=rh(n.i,n.x,n.y),i=rh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Bd(n,e,t,i){let r=rh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function La(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var sh=class{static triangulate(e,t,i=2){return dg(e,t,i)}},xn=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];zd(e),kd(i,e);let a=e.length;t.forEach(zd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,kd(i,t[l]);let o=sh.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function zd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function kd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Is=class n extends lt{constructor(e=new zr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Sg,M,T,E,C,D,O=!1;if(g){M=g.getSpacedPoints(h),O=!0,d=!1;let N=!!g.isCatmullRomCurve3&&g.closed;T=g.computeFrenetFrames(h,N),E=new A,C=new A,D=new A}d||(y=0,p=0,m=0,f=0);let R=o.extractPoints(c),k=R.shape,V=R.holes;if(!xn.isClockWise(k)){k=k.reverse();for(let N=0,x=V.length;N<x;N++){let P=V[N];xn.isClockWise(P)&&(V[N]=P.reverse())}}function G(N){let x=10000000000000001e-36,P=N[0];for(let U=1;U<=N.length;U++){let F=U%N.length,ee=N[F],te=ee.x-P.x,J=ee.y-P.y,re=te*te+J*J,ie=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(P.x),Math.abs(P.y));re<=x*ie*ie?(N.splice(F,1),U--):P=ee}}G(k),V.forEach(G);let W=V.length,H=k;for(let N=0;N<W;N++){let x=V[N];k=k.concat(x)}function X(N,x,P){return x||ze("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(x,P)}let Y=k.length;function K(N,x,P){let U,F,ee,te=N.x-x.x,J=N.y-x.y,re=P.x-N.x,ie=P.y-N.y,ce=te*te+J*J,oe=te*ie-J*re;if(Math.abs(oe)>Number.EPSILON){let _e=Math.sqrt(ce),Fe=Math.sqrt(re*re+ie*ie),Ye=x.x-J/_e,nt=x.y+te/_e,tt=((P.x-ie/Fe-Ye)*ie-(P.y+re/Fe-nt)*re)/(te*ie-J*re);U=Ye+te*tt-N.x,F=nt+J*tt-N.y;let Ie=U*U+F*F;if(Ie<=2)return new pe(U,F);ee=Math.sqrt(Ie/2)}else{let _e=!1;te>Number.EPSILON?re>Number.EPSILON&&(_e=!0):te<-Number.EPSILON?re<-Number.EPSILON&&(_e=!0):Math.sign(J)===Math.sign(ie)&&(_e=!0),_e?(U=-J,F=te,ee=Math.sqrt(ce)):(U=te,F=J,ee=Math.sqrt(ce/2))}return new pe(U/ee,F/ee)}let ne=[];for(let N=0,x=H.length,P=x-1,U=N+1;N<x;N++,P++,U++)P===x&&(P=0),U===x&&(U=0),ne[N]=K(H[N],H[P],H[U]);let ye=[],Ae,Pe,Ee=ne.concat();for(let N=0,x=W;N<x;N++){let P=V[N];Ae=[];for(let U=0,F=P.length,ee=F-1,te=U+1;U<F;U++,ee++,te++)ee===F&&(ee=0),te===F&&(te=0),Ae[U]=K(P[U],P[ee],P[te]);ye.push(Ae),Ee=Ee.concat(Ae)}if(y===0)Pe=xn.triangulateShape(H,V);else{let N=[],x=[];for(let P=0;P<y;P++){let U=P/y,F=p*Math.cos(U*Math.PI/2),ee=m*Math.sin(U*Math.PI/2)+f;for(let te=0,J=H.length;te<J;te++){let re=X(H[te],ne[te],ee);De(re.x,re.y,-F),U===0&&N.push(re)}for(let te=0,J=W;te<J;te++){let re=V[te];Ae=ye[te];let ie=[];for(let ce=0,oe=re.length;ce<oe;ce++){let _e=X(re[ce],Ae[ce],ee);De(_e.x,_e.y,-F),U===0&&ie.push(_e)}U===0&&x.push(ie)}}Pe=xn.triangulateShape(N,x)}let ae=Pe.length,fe=m+f;for(let N=0;N<Y;N++){let x=d?X(k[N],Ee[N],fe):k[N];O?(C.copy(T.normals[0]).multiplyScalar(x.x),E.copy(T.binormals[0]).multiplyScalar(x.y),D.copy(M[0]).add(C).add(E),De(D.x,D.y,D.z)):De(x.x,x.y,0)}for(let N=1;N<=h;N++)for(let x=0;x<Y;x++){let P=d?X(k[x],Ee[x],fe):k[x];O?(C.copy(T.normals[N]).multiplyScalar(P.x),E.copy(T.binormals[N]).multiplyScalar(P.y),D.copy(M[N]).add(C).add(E),De(D.x,D.y,D.z)):De(P.x,P.y,u/h*N)}for(let N=y-1;N>=0;N--){let x=N/y,P=p*Math.cos(x*Math.PI/2),U=m*Math.sin(x*Math.PI/2)+f;for(let F=0,ee=H.length;F<ee;F++){let te=X(H[F],ne[F],U);De(te.x,te.y,u+P)}for(let F=0,ee=V.length;F<ee;F++){let te=V[F];Ae=ye[F];for(let J=0,re=te.length;J<re;J++){let ie=X(te[J],Ae[J],U);O?De(ie.x,ie.y+M[h-1].y,M[h-1].x+P):De(ie.x,ie.y,u+P)}}}function ve(N,x){let P=N.length;for(;--P>=0;){let U=P,F=P-1;F<0&&(F=N.length-1);for(let ee=0,te=h+2*y;ee<te;ee++){let J=Y*ee,re=Y*(ee+1);S(x+U+J,x+F+J,x+F+re,x+U+re)}}}function De(N,x,P){l.push(N),l.push(x),l.push(P)}function ue(N,x,P){b(N),b(x),b(P);let U=r.length/3,F=v.generateTopUV(i,r,U-3,U-2,U-1);B(F[0]),B(F[1]),B(F[2])}function S(N,x,P,U){b(N),b(x),b(U),b(x),b(P),b(U);let F=r.length/3,ee=v.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);B(ee[0]),B(ee[1]),B(ee[3]),B(ee[1]),B(ee[2]),B(ee[3])}function b(N){r.push(l[3*N+0]),r.push(l[3*N+1]),r.push(l[3*N+2])}function B(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(d){let x=0,P=Y*x;for(let U=0;U<ae;U++){let F=Pe[U];ue(F[2]+P,F[1]+P,F[0]+P)}x=h+2*y,P=Y*x;for(let U=0;U<ae;U++){let F=Pe[U];ue(F[0]+P,F[1]+P,F[2]+P)}}else{for(let x=0;x<ae;x++){let P=Pe[x];ue(P[2],P[1],P[0])}for(let x=0;x<ae;x++){let P=Pe[x];ue(P[0]+Y*h,P[1]+Y*h,P[2]+Y*h)}}i.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,x=0;ve(H,x),x+=H.length;for(let P=0,U=V.length;P<U;P++){let F=V[P];ve(F,x),x+=F.length}i.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new tl[r.type]().fromJSON(r)),new n(i,e.options)}},Sg={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new pe(s,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],y=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(d,1-m),new pe(f,1-g)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-m),new pe(y,1-g)]}},Hr=class n extends fr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},nl=class n extends lt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=et(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new pe,p=new A,m=new A,f=new A,y=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:y=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-y,p.z=0*g,f.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(f.x,f.y,f.z);break;default:y=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-y,p.z=0*g,m.copy(p),p.x+=f.x,p.y+=f.y,p.z+=f.z,p.normalize(),l.push(p.x,p.y,p.z),f.copy(m)}for(let v=0;v<=t;v++){let M=i+v*h*r,T=Math.sin(M),E=Math.cos(M);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*T,u.y=e[C].y,u.z=e[C].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=C/(e.length-1),o.push(d.x,d.y);let D=l[3*C+0]*T,O=l[3*C+1],R=l[3*C+0]*E;c.push(D,O,R)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let T=M+v*e.length,E=T,C=T+e.length,D=T+e.length+1,O=T+1;s.push(E,C,O),s.push(D,O,C)}this.setIndex(s),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},rl=class n extends fr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ri=class n extends lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],f=[],y=[];for(let g=0;g<h;g++){let v=g*d-a;for(let M=0;M<c;M++){let T=M*u-s;m.push(T,-v,0),f.push(0,0,1),y.push(M/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let M=v+c*g,T=v+c*(g+1),E=v+1+c*(g+1),C=v+1+c*g;p.push(M,T,C),p.push(T,E,C)}this.setIndex(p),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},sl=class n extends lt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new A,m=new pe;for(let f=0;f<=r;f++){for(let y=0;y<=i;y++){let g=s+y/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let f=0;f<r;f++){let y=f*(i+1);for(let g=0;g<i;g++){let v=g+y,M=v,T=v+i+1,E=v+i+2,C=v+1;o.push(M,T,C),o.push(T,E,C)}}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},al=class n extends lt{constructor(e=new zr([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;xn.isClockWise(p)===!1&&(p=p.reverse());for(let y=0,g=m.length;y<g;y++){let v=m[y];xn.isClockWise(v)===!0&&(m[y]=v.reverse())}let f=xn.triangulateShape(p,m);for(let y=0,g=m.length;y<g;y++){let v=m[y];p=p.concat(v)}for(let y=0,g=p.length;y<g;y++){let v=p[y];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let y=0,g=f.length;y<g;y++){let v=f[y],M=v[0]+u,T=v[1]+u,E=v[2]+u;i.push(M,T,E),l+=3}}this.setIndex(i),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Jt=class n extends lt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],m=[],f=[],y=[];for(let g=0;g<=i;g++){let v=[],M=g/i,T=0;g===0&&a===0?T=.5/t:g===i&&l===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){let C=E/t;u.x=-e*Math.cos(r+C*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+M*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),y.push(C+T,1-M),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let M=h[g][v+1],T=h[g][v],E=h[g+1][v],C=h[g+1][v+1];(g!==0||a>0)&&p.push(M,T,C),(g!==i-1||l<Math.PI)&&p.push(T,E,C)}this.setIndex(p),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ol=class n extends fr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ji=class n extends lt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=new A,p=new A,m=new A;for(let f=0;f<=i;f++){let y=a+f/i*o;for(let g=0;g<=r;g++){let v=g/r*s;p.x=(e+t*Math.cos(y))*Math.cos(v),p.y=(e+t*Math.cos(y))*Math.sin(v),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(p,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/r),u.push(f/i)}}for(let f=1;f<=i;f++)for(let y=1;y<=r;y++){let g=(r+1)*f+y-1,v=(r+1)*(f-1)+y-1,M=(r+1)*(f-1)+y,T=(r+1)*f+y;l.push(g,v,T),l.push(v,M,T)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ll=class n extends lt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,m=new A,f=new A,y=new A,g=new A;for(let M=0;M<=i;++M){let T=M/i*s*Math.PI*2;v(T,s,a,e,p),v(T+.01,s,a,e,m),y.subVectors(m,p),g.addVectors(m,p),f.crossVectors(y,g),g.crossVectors(f,y),f.normalize(),g.normalize();for(let E=0;E<=r;++E){let C=E/r*Math.PI*2,D=-t*Math.cos(C),O=t*Math.sin(C);u.x=p.x+(D*g.x+O*f.x),u.y=p.y+(D*g.y+O*f.y),u.z=p.z+(D*g.z+O*f.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(M/i),h.push(E/r)}}for(let M=1;M<=i;M++)for(let T=1;T<=r;T++){let E=(r+1)*(M-1)+(T-1),C=(r+1)*M+(T-1),D=(r+1)*M+T,O=(r+1)*(M-1)+T;o.push(E,C,O),o.push(C,D,O)}function v(M,T,E,C,D){let O=Math.cos(M),R=Math.sin(M),k=E/T*M,V=Math.cos(k);D.x=C*(2+V)*.5*O,D.y=C*(2+V)*R*.5,D.z=C*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ps=class n extends lt{constructor(e=new Aa(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new pe,h=new A,u=[],d=[],p=[],m=[];function f(y){h=e.getPointAt(y/t,h);let g=a.normals[y],v=a.binormals[y];for(let M=0;M<=r;M++){let T=M/r*Math.PI*2,E=Math.sin(T),C=-Math.cos(T);l.x=C*g.x+E*v.x,l.y=C*g.y+E*v.y,l.z=C*g.z+E*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let y=0;y<t;y++)f(y);f(s===!1?t:0),(function(){for(let y=0;y<=t;y++)for(let g=0;g<=r;g++)c.x=y/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let y=1;y<=t;y++)for(let g=1;g<=r;g++){let v=(r+1)*(y-1)+(g-1),M=(r+1)*y+(g-1),T=(r+1)*y+g,E=(r+1)*(y-1)+g;m.push(v,M,E),m.push(M,T,E)}})()})(),this.setIndex(m),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},cl=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let f=0;f<3;f++){let y=o.getX(p+f),g=o.getX(p+(f+1)%3);r.fromBufferAttribute(a,y),s.fromBufferAttribute(a,g),Hd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Hd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Hd(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var $_=Object.freeze({__proto__:null,BoxGeometry:Lt,CapsuleGeometry:Yo,CircleGeometry:Zo,ConeGeometry:hn,CylinderGeometry:Ot,DodecahedronGeometry:Jo,EdgesGeometry:Ko,ExtrudeGeometry:Is,IcosahedronGeometry:Hr,LatheGeometry:nl,OctahedronGeometry:rl,PlaneGeometry:ri,PolyhedronGeometry:fr,RingGeometry:sl,ShapeGeometry:al,SphereGeometry:Jt,TetrahedronGeometry:ol,TorusGeometry:Ji,TorusKnotGeometry:ll,TubeGeometry:Ps,WireframeGeometry:cl});function Yr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vi(n){let e={};for(let t=0;t<n.length;t++){let i=Yr(n[t]);for(let r in i)e[r]=i[r]}return e}function pu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Bp={clone:Yr,merge:vi},Di=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},hl=class extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ul=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function No(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var gr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends gr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:s=e,o=2*t-i;break;case $c:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=e,l=2*i-t;break;case $c:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),f=m*m,y=f*m,g=-d*y+2*d*f-d*m,v=(1+d)*y+(-1.5-2*d)*f+(-.5+d)*m+1,M=(-1-p)*y+(1.5+p)*f+.5*m,T=p*y-p*f;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[c+E]+M*a[l+E]+T*a[u+E];return s}},fl=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ml=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},gl=class extends gr{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let f=(i-t)/(r-t),y=1-f;for(let g=0;g!==o;++g)s[g]=a[c+g]*y+a[l+g]*f;return s}let p=2*o,m=e-1;for(let f=0;f!==o;++f){let y=a[c+f],g=a[l+f],v=m*p+2*f,M=d[v],T=d[v+1],E=e*p+2*f,C=u[E],D=u[E+1],O,R,k,V,G,W=(i-t)/(r-t);for(let H=0;H<8;H++){O=W*W,R=O*W,k=1-W,V=k*k,G=V*k;let X=G*t+3*V*W*M+3*k*O*C+R*r-i;if(Math.abs(X)<1e-10)break;let Y=3*V*(M-t)+6*k*W*(C-M)+3*O*(r-C);if(Math.abs(Y)<1e-10)break;W-=X/Y,W=Math.max(0,Math.min(1,W))}s[f]=G*y+3*V*W*T+3*k*O*D+R*g}return s}},Ii=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break;case Zc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Xm(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Oo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ii.prototype.ValueTypeName="",Ii.prototype.TimeBufferType=Float32Array,Ii.prototype.ValueBufferType=Float32Array,Ii.prototype.DefaultInterpolation=ko;var cr=class extends Ii{constructor(e,t,i){super(e,t,i)}};cr.prototype.ValueTypeName="bool",cr.prototype.ValueBufferType=Array,cr.prototype.DefaultInterpolation=pa,cr.prototype.InterpolantFactoryMethodLinear=void 0,cr.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}};vl.prototype.ValueTypeName="color";var _l=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}};_l.prototype.ValueTypeName="number";var yl=class extends gr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)mi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Da=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};Da.prototype.ValueTypeName="quaternion",Da.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Ii{constructor(e,t,i){super(e,t,i)}};hr.prototype.ValueTypeName="string",hr.prototype.ValueBufferType=Array,hr.prototype.DefaultInterpolation=pa,hr.prototype.InterpolantFactoryMethodLinear=void 0,hr.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Ii{constructor(e,t,i,r){super(e,t,i,r)}};xl.prototype.ValueTypeName="vector";var Bo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Gd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Gd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Gd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ml=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zp=new Ml,Ls=class{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=new WeakMap,Sl=class extends Ls{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Bo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=gs.get(a);u===void 0&&(u=[],gs.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Ss("img");function l(){h(),t&&t(this);let u=gs.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}gs.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Bo.remove(`image:${e}`);let d=gs.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}gs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bo.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var jn=class extends Ls{constructor(e){super(e)}load(e,t,i,r){let s=new fi,a=new Sl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Ds=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xn=class extends Ds{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qc=new Ze,Vd=new A,Wd=new A,bl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ms||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uo=new A,Fo=new mi,_n=new A,Ns=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Fo,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Uo,Fo,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},lr=new A,jd=new pe,Xd=new pe,Gt=class extends Ns{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Es*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ys*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Es*Math.atan(Math.tan(.5*ys*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,jd,Xd),t.subVectors(Xd,jd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ys*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ah=class extends bl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},xi=class extends Ds{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ah}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Us=class extends Ns{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oh=class extends bl{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Q_=new Ze,ey=new Ze,ty=new Ze;var vs=-90,El=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(vs,1,e,t);r.layers=this.layers,this.add(r);let s=new Gt(vs,1,e,t);s.layers=this.layers,this.add(s);let a=new Gt(vs,1,e,t);a.layers=this.layers,this.add(a);let o=new Gt(vs,1,e,t);o.layers=this.layers,this.add(o);let l=new Gt(vs,1,e,t);l.layers=this.layers,this.add(l);let c=new Gt(vs,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ms)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;y=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Tl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var iy=new A,ny=new mi,ry=new A,sy=new A,ay=new A;var oy=new A,ly=new mi,cy=new A,hy=new A;var fu="\\[\\]\\.:\\/",bg=new RegExp("["+fu+"]","g"),Yc="[^"+fu+"]",Eg="[^"+fu.replace("\\.","")+"]",Tg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Yc)+/(WCOD+)?/.source.replace("WCOD",Eg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc)+"$"),wg=["material","materials","bones","map"],Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){let t=Tg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);wg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Oe("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void ze("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void ze("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=class{constructor(n,e,t){let i=t||Et.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray],Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uy=new Float32Array(1);var dy=new Ze;var py=new pe;var fy=new A,my=new A,gy=new A,vy=new A,_y=new A,yy=new A,xy=new A;var My=new A;var Sy=new A,by=new Ze,Ey=new Ze;var Ty=new A,wy=new Re,Ay=new Re;var Cy=new A,Ry=new A,Iy=new A;var Py=new A,Ly=new Ns;var Dy=new Yi;var Ny=new A;function mu(n,e,t,i){let r=(function(s){switch(s){case Ni:case Th:return{byteLength:1,components:1};case ks:case wh:case Tn:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case Yn:case Il:case $i:return{byteLength:4,components:1};case Ah:case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return n*e;case Dl:case Nl:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case pn:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}})),typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function cf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cg(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var $e={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},xe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},An={basic:{uniforms:vi([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:vi([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:vi([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:vi([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:vi([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:vi([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:vi([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:vi([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:vi([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:vi([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:vi([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:vi([xe.common,xe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:vi([xe.lights,xe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};An.physical={uniforms:vi([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Hl={r:0,b:0,g:0},Zr=new cn,Rg=new Ze;function Ig(n,e,t,i,r,s){let a=new Re(0),o,l,c=r===!0?0:1,h=null,u=0,d=null;function p(f){let y=f.isScene===!0?f.background:null;if(y&&y.isTexture){let g=f.backgroundBlurriness>0;y=e.get(y,g)}return y}function m(f,y){f.getRGB(Hl,pu(n)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,y,s)}return{getClearColor:function(){return a},setClearColor:function(f,y=1){a.set(f),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(a,c)},render:function(f){let y=!1,g=p(f);g===null?m(a,c):g&&g.isColor&&(m(g,1),y=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(f,y){let g=p(y);g&&(g.isCubeTexture||g.mapping===Ua)?(l===void 0&&(l=new we(new Lt(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Yr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Zr.copy(y.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Zr)),l.material.toneMapped=ct.getTransfer(g.colorSpace)!==mt,h===g&&u===g.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new we(new ri(2,2),new Di({name:"BackgroundMaterial",uniforms:Yr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,o.material.toneMapped=ct.getTransfer(g.colorSpace)!==mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=n.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Pg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],M=[],T=[];for(let E=0;E<t;E++)v[E]=0,M[E]=0,T[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:M,attributeDivisors:T,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,M=g.length;v<M;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let M=s.newAttributes,T=s.enabledAttributes,E=s.attributeDivisors;M[g]=1,T[g]===0&&(n.enableVertexAttribArray(g),T[g]=1),E[g]!==v&&(n.vertexAttribDivisor(g,v),E[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let M=0,T=v.length;M<T;M++)v[M]!==g[M]&&(n.disableVertexAttribArray(M),v[M]=0)}function m(g,v,M,T,E,C,D){D===!0?n.vertexAttribIPointer(g,v,M,E,C):n.vertexAttribPointer(g,v,M,T,E,C)}function f(){y(),a=!0,s!==r&&(s=r,o(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,M,T,E){let C=!1,D=(function(O,R,k,V){let G=V.wireframe===!0,W=i[R.id];W===void 0&&(W={},i[R.id]=W);let H=O.isInstancedMesh===!0?O.id:0,X=W[H];X===void 0&&(X={},W[H]=X);let Y=X[k.id];Y===void 0&&(Y={},X[k.id]=Y);let K=Y[G];return K===void 0&&(K=c(n.createVertexArray()),Y[G]=K),K})(g,T,M,v);s!==D&&(s=D,o(s.object)),C=(function(O,R,k,V){let G=s.attributes,W=R.attributes,H=0,X=k.getAttributes();for(let Y in X)if(X[Y].location>=0){let K=G[Y],ne=W[Y];if(ne===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==V})(g,T,M,E),C&&(function(O,R,k,V){let G={},W=R.attributes,H=0,X=k.getAttributes();for(let Y in X)if(X[Y].location>=0){let K=W[Y];K===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(K=O.instanceColor));let ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),G[Y]=ne,H++}s.attributes=G,s.attributesNum=H,s.index=V})(g,T,M,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,(function(O,R,k,V){h();let G=V.attributes,W=k.getAttributes(),H=R.defaultAttributeValues;for(let X in W){let Y=W[X];if(Y.location>=0){let K=G[X];if(K===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),K!==void 0){let ne=K.normalized,ye=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;let Pe=Ae.buffer,Ee=Ae.type,ae=Ae.bytesPerElement,fe=Ee===n.INT||Ee===n.UNSIGNED_INT||K.gpuType===Il;if(K.isInterleavedBufferAttribute){let ve=K.data,De=ve.stride,ue=K.offset;if(ve.isInstancedInterleavedBuffer){for(let S=0;S<Y.locationSize;S++)d(Y.location+S,ve.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let S=0;S<Y.locationSize;S++)u(Y.location+S);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let S=0;S<Y.locationSize;S++)m(Y.location+S,ye/Y.locationSize,Ee,ne,De*ae,(ue+ye/Y.locationSize*S)*ae,fe)}else{if(K.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)d(Y.location+ve,K.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<Y.locationSize;ve++)u(Y.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ve=0;ve<Y.locationSize;ve++)m(Y.location+ve,ye/Y.locationSize,Ee,ne,ye*ae,ye/Y.locationSize*ve*ae,fe)}}else if(H!==void 0){let ne=H[X];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}p()})(g,v,M,T),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:f,resetDefaultState:y,dispose:function(){f();for(let g in i){let v=i[g];for(let M in v){let T=v[M];for(let E in T){let C=T[E];for(let D in C)l(C[D].object),delete C[D];delete T[E]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let M in v){let T=v[M];for(let E in T){let C=T[E];for(let D in C)l(C[D].object),delete C[D];delete T[E]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let M=i[v],T=g.isInstancedMesh===!0?g.id:0,E=M[T];if(E!==void 0){for(let C in E){let D=E[C];for(let O in D)l(D[O].object),delete D[O];delete E[C]}delete M[T],Object.keys(M).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let M=i[v];for(let T in M){let E=M[T];if(E[g.id]===void 0)continue;let C=E[g.id];for(let D in C)l(C[D].object),delete C[D];delete E[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Lg(n,e,t){let i;function r(s,a,o){o!==0&&(n.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){n.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,i,1)}}}function Dg(n,e,t,i){let r;function s(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(Oe("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(l){return l===pn||i.convert(l)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==Ni&&i.convert(l)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==$i&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Ng(n){let e=this,t=null,i=0,r=!1,s=!1,a=new yn,o=new Je,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,f=null;if(m!==0){if(f=l.value,p!==!0||f===null){let y=d+4*m,g=u.matrixWorldInverse;o.getNormalMatrix(g),(f===null||f.length<y)&&(f=new Float32Array(y));for(let v=0,M=d;v!==m;++v,M+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,y=n.get(h);if(!r||p===null||p.length===0||s&&!f)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,M=y.clippingState||null;l.value=M,M=c(p,u,v,d);for(let T=0;T!==v;++T)M[T]=t[T];y.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}var kp=[.125,.215,.35,.446,.526,.582],Oa=20,Ba=new Us,Hp=new Re,gu=null,vu=0,_u=0,yu=!1,Ug=new A,Vl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Ug}=s;gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,vu,_u),this._renderer.xr.enabled=yu,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Tn,format:pn,colorSpace:Ur,depthBuffer:!1},r=Gp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+kp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let m=1/p;d>a-4?m=kp[d-a+4-1]:d===0&&(m=0),l.push(m);let f=1/(p-2),y=-f,g=1+f,v=[y,y,g,y,g,g,y,y,g,g,y,g],M=6,T=6,E=3,C=2,D=1,O=new Float32Array(E*T*M),R=new Float32Array(C*T*M),k=new Float32Array(D*T*M);for(let G=0;G<M;G++){let W=G%3*2/3-1,H=G>2?0:-1,X=[W,H,0,W+2/3,H,0,W+2/3,H+1,0,W,H,0,W+2/3,H+1,0,W,H+1,0];O.set(X,E*T*G),R.set(v,C*T*G);let Y=[G,G,G,G,G,G];k.set(Y,D*T*G)}let V=new lt;V.setAttribute("position",new Pt(O,E)),V.setAttribute("uv",new Pt(R,C)),V.setAttribute("faceIndex",new Pt(k,D)),c.push(new we(V,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Oa),h=new A(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Oa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new we(new lt,e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,r,s){let a=new Gt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Hp),c.toneMapping=un,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new Lt,new at({name:"PMREM.Background",side:Ti,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,m=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Hp),m=!0);for(let y=0;y<6;y++){let g=y%3;g===0?(a.up.set(0,o[y],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[y],s.y,s.z)):g===1?(a.up.set(0,0,o[y]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[y],s.z)):(a.up.set(0,o[y],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[y]));let v=this._cubeSize;Ws(r,g*v,y>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===zs||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Ws(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Ba)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],m=3*p*(i>d-4?i-d+4:0),f=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,Ws(s,m,f,3*p,2*p),r.setRenderTarget(s),r.render(o,Ba),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-i,Ws(e,m,f,3*p,2*p),r.setRenderTarget(e),r.render(o,Ba)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,f=isFinite(s)?1+Math.floor(3*m):Oa;f>Oa&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let y=[],g=0;for(let T=0;T<Oa;++T){let E=T/m,C=Math.exp(-E*E/2);y.push(C),T===0?g+=C:T<f&&(g+=2*C)}for(let T=0;T<y.length;T++)y[T]=y[T]/g;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=y,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let M=this._sizeLods[r];Ws(t,3*M*(r>v-4?r-v+4:0),4*(this._cubeSize-M),3*M,2*M),l.setRenderTarget(t),l.render(h,Ba)}};function Gp(n,e,t){let i=new Pi(n,e,t);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Vp(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Wp(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}var jl=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lt(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ti,blending:En});s.uniforms.tEquirect.value=t;let a=new we(r,s),o=t.minFilter;return t.minFilter===dn&&(t.minFilter=ni),new El(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function Fg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===Al?o.mapping=zs:l===Cl&&(o.mapping=Wr),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Al||h===Cl,d=h===zs||h===Wr;if(u||d){let p=t.get(c),m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return i===null&&(i=new Vl(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let f=c.image;return u&&f&&f.height>0||d&&f&&(function(y){let g=0,v=6;for(let M=0;M<v;M++)y[M]!==void 0&&g++;return g===v})(f)?(i===null&&(i=new Vl(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Al||h===Cl){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new jl(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",s),r(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Og(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ma("WebGLRenderer: "+i+" extension not supported."),r}}}function Bg(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let f=h.array;d=h.version;for(let y=0,g=f.length;y<g;y+=3){let v=f[y+0],M=f[y+1],T=f[y+2];c.push(v,M,M,T,T,v)}}else{let f=u.array;d=u.version;for(let y=0,g=f.length/3-1;y<g;y+=3){let v=y+0,M=y+1,T=y+2;c.push(v,M,M,T,T,v)}}let p=new(u.count>=65535?ya:_a)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function zg(n,e,t){let i,r,s;function a(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function kg(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:ze("WebGLInfo: Unknown draw mode:",i)}}}}function Hg(n,e,t){let i=new WeakMap,r=new Tt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let O=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let M=a.attributes.position.count*v,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*h),C=new ga(E,M,T,h);C.type=$i,C.needsUpdate=!0;let D=4*v;for(let R=0;R<h;R++){let k=f[R],V=y[R],G=g[R],W=M*T*4*R;for(let H=0;H<k.count;H++){let X=H*D;d===!0&&(r.fromBufferAttribute(k,H),E[W+X+0]=r.x,E[W+X+1]=r.y,E[W+X+2]=r.z,E[W+X+3]=0),p===!0&&(r.fromBufferAttribute(V,H),E[W+X+4]=r.x,E[W+X+5]=r.y,E[W+X+6]=r.z,E[W+X+7]=0),m===!0&&(r.fromBufferAttribute(G,H),E[W+X+8]=r.x,E[W+X+9]=r.y,E[W+X+10]=r.z,E[W+X+11]=G.itemSize===4?r.w:1)}}u={count:h,texture:C,size:new pe(M,T)},i.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function Gg(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var Vg={[_h]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[qn]:"ACES_FILMIC_TONE_MAPPING",[Sh]:"AGX_TONE_MAPPING",[bh]:"NEUTRAL_TONE_MAPPING",[Mh]:"CUSTOM_TONE_MAPPING"};function Wg(n,e,t,i,r){let s=new Pi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Pi(e,t,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),o=new lt;o.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Be([0,2,0,0,2,0],2));let l=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new we(o,l),h=new Us(-1,1,1,-1,0,1),u,d=null,p=null,m=!1,f=null,y=[],g=!1;this.setSize=function(v,M){s.setSize(v,M),a.setSize(v,M);for(let T=0;T<y.length;T++){let E=y[T];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){y=v,g=y.length>0&&y[0].isRenderPass===!0;let M=s.width,T=s.height;for(let E=0;E<y.length;E++){let C=y[E];C.setSize&&C.setSize(M,T)}},this.begin=function(v,M){if(m||v.toneMapping===un&&y.length===0)return!1;if(f=M,M!==null){let T=M.width,E=M.height;s.width===T&&s.height===E||this.setSize(T,E)}return g===!1&&v.setRenderTarget(s),u=v.toneMapping,v.toneMapping=un,!0},this.hasRenderPass=function(){return g},this.end=function(v,M){v.toneMapping=u,m=!0;let T=s,E=a;for(let C=0;C<y.length;C++){let D=y[C];if(D.enabled!==!1&&(D.render(v,E,T,M),D.needsSwap!==!1)){let O=T;T=E,E=O}}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,l.defines={},ct.getTransfer(d)===mt&&(l.defines.SRGB_TRANSFER="");let C=Vg[p];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(c,h),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var hf=new fi,Su=new pr(1,1),uf=new ga,df=new Vo,pf=new Sa,jp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),Zp=new Float32Array(4);function Xs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=jp[r];if(s===void 0&&(s=new Float32Array(r),jp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xl(n,e){let t=Xp[e];t===void 0&&(t=new Int32Array(e),Xp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function qg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Yg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;Zp.set(i),n.uniformMatrix2fv(this.addr,!1,Zp),$t(t,i)}}function Jg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;Yp.set(i),n.uniformMatrix3fv(this.addr,!1,Yp),$t(t,i)}}function Kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,i))return;qp.set(i),n.uniformMatrix4fv(this.addr,!1,qp),$t(t,i)}}function $g(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function e0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function i0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function n0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function r0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function s0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function a0(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=t.isReversedDepthBuffer()?kl:zl,s=Su):s=hf,t.setTexture2D(e||s,r)}function o0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||df,r)}function l0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pf,r)}function c0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||uf,r)}function h0(n,e){n.uniform1fv(this.addr,e)}function u0(n,e){let t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function d0(n,e){let t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function p0(n,e){let t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function f0(n,e){let t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function m0(n,e){let t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function g0(n,e){let t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v0(n,e){n.uniform1iv(this.addr,e)}function _0(n,e){n.uniform2iv(this.addr,e)}function y0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function M0(n,e){n.uniform1uiv(this.addr,e)}function S0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function E0(n,e){n.uniform4uiv(this.addr,e)}function T0(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r),a;Kt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?Su:hf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function w0(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||df,s[a])}function A0(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pf,s[a])}function C0(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||uf,s[a])}var bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return jg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return i0;case 36294:return n0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}})(t.type)}},Eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return p0;case 35674:return f0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return v0;case 35667:case 35671:return _0;case 35668:case 35672:return y0;case 35669:case 35673:return x0;case 5125:return M0;case 36294:return S0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}})(t.type)}},Tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},xu=/(\w+)(\])?(\[|\.)?/g;function Jp(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){let i=n.name,r=i.length;for(xu.lastIndex=0;;){let s=xu.exec(i),a=xu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Jp(t,c===void 0?new bu(o,n,e):new Eu(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Tu(o),Jp(t,h)),t=h}}}var js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);R0(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Kp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var I0=0,$p=new Je;function Qp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return r}function P0(n,e){let t=(function(i){ct._getMatrix($p,ct.workingColorSpace,i);let r=`mat3( ${$p.elements.map(s=>s.toFixed(4))} )`;switch(ct.getTransfer(i)){case fa:return[r,"LinearTransferOETF"];case mt:return[r,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var L0={[_h]:"Linear",[yh]:"Reinhard",[xh]:"Cineon",[qn]:"ACESFilmic",[Sh]:"AgX",[bh]:"Neutral",[Mh]:"Custom"};function D0(n,e){let t=L0[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gl=new A;function N0(){return ct.getLuminanceCoefficients(Gl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Gl.x.toFixed(4)}, ${Gl.y.toFixed(4)}, ${Gl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function za(n){return n!==""}function ef(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(U0,O0)}var F0=new Map;function O0(n,e){let t=$e[e];if(t===void 0){let i=F0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=$e[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return wu(t)}var B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(B0,z0)}function z0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var k0={[Na]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"},H0={[zs]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"},G0={[Wr]:"ENVMAP_MODE_REFRACTION"},V0={[gp]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[_p]:"ENVMAP_BLENDING_ADD"};function W0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){return k0[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":H0[V.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":G0[V.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":V0[V.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(V){let G=V.envMapCubeUVHeight;if(G===null)return null;let W=Math.log2(G)-2,H=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,W),112)),texelHeight:H,maxMip:W}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)})(t),m=(function(V){let G=[];for(let W in V){let H=V[W];H!==!1&&G.push("#define "+W+" "+H)}return G.join(`
`)})(s),f=r.createProgram(),y,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(za).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(za).join(`
`),g.length>0&&(g+=`
`)):(y=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),g=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?$e.tonemapping_pars_fragment:"",t.toneMapping!==un?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),N0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),a=wu(a),a=ef(a,t),a=tf(a,t),o=wu(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=v+y+a,T=v+g+o,E=Kp(r,r.VERTEX_SHADER,M),C=Kp(r,r.FRAGMENT_SHADER,T);function D(V){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(f)||"",W=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(C)||"",X=G.trim(),Y=W.trim(),K=H.trim(),ne=!0,ye=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,E,C);else{let Ae=Qp(r,E,"vertex"),Pe=Qp(r,C,"fragment");ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+Ae+`
`+Pe)}else X!==""?Oe("WebGLProgram: Program Info Log:",X):Y!==""&&K!==""||(ye=!1);ye&&(V.diagnostics={runnable:ne,programLog:X,vertexShader:{log:Y,prefix:y},fragmentShader:{log:K,prefix:g}})}r.deleteShader(E),r.deleteShader(C),O=new js(r,f),R=(function(G,W){let H={},X=G.getProgramParameter(W,G.ACTIVE_ATTRIBUTES);for(let Y=0;Y<X;Y++){let K=G.getActiveAttrib(W,Y),ne=K.name,ye=1;K.type===G.FLOAT_MAT2&&(ye=2),K.type===G.FLOAT_MAT3&&(ye=3),K.type===G.FLOAT_MAT4&&(ye=4),H[ne]={type:K.type,location:G.getAttribLocation(W,ne),locationSize:ye}}return H})(r,f)}let O,R;r.attachShader(f,E),r.attachShader(f,C),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),this.getUniforms=function(){return O===void 0&&D(this),O},this.getAttributes=function(){return R===void 0&&D(this),R};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(f,37297)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=C,this}var j0=0,Au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Cu(e),t.set(e,i)),i}},Cu=class{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}};function X0(n,e,t,i,r,s){let a=new va,o=new Au,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,y,g,v,M){let T=v.fog,E=M.geometry,C=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?v.environment:null,D=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,O=e.get(f.envMap||C,D),R=O&&O.mapping===Ua?O.image.height:null,k=p[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&Oe("WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let V=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,G=V!==void 0?V.length:0,W,H,X,Y,K=0;if(E.morphAttributes.position!==void 0&&(K=1),E.morphAttributes.normal!==void 0&&(K=2),E.morphAttributes.color!==void 0&&(K=3),k){let bt=An[k];W=bt.vertexShader,H=bt.fragmentShader}else W=f.vertexShader,H=f.fragmentShader,o.update(f),X=o.getVertexShaderID(f),Y=o.getFragmentShaderID(f);let ne=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ae=M.isInstancedMesh===!0,Pe=M.isBatchedMesh===!0,Ee=!!f.map,ae=!!f.matcap,fe=!!O,ve=!!f.aoMap,De=!!f.lightMap,ue=!!f.bumpMap,S=!!f.normalMap,b=!!f.displacementMap,B=!!f.emissiveMap,N=!!f.metalnessMap,x=!!f.roughnessMap,P=f.anisotropy>0,U=f.clearcoat>0,F=f.dispersion>0,ee=f.iridescence>0,te=f.sheen>0,J=f.transmission>0,re=P&&!!f.anisotropyMap,ie=U&&!!f.clearcoatMap,ce=U&&!!f.clearcoatNormalMap,oe=U&&!!f.clearcoatRoughnessMap,_e=ee&&!!f.iridescenceMap,Fe=ee&&!!f.iridescenceThicknessMap,Ye=te&&!!f.sheenColorMap,nt=te&&!!f.sheenRoughnessMap,tt=!!f.specularMap,Ie=!!f.specularColorMap,je=!!f.specularIntensityMap,ut=J&&!!f.transmissionMap,Nt=J&&!!f.thicknessMap,Te=!!f.gradientMap,We=!!f.alphaMap,Xe=f.alphaTest>0,Kn=!!f.alphaHash,Fi=!!f.extensions,ai=un;f.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(ai=n.toneMapping));let gt={shaderID:k,shaderType:f.type,shaderName:f.name,vertexShader:W,fragmentShader:H,defines:f.defines,customVertexShaderID:X,customFragmentShaderID:Y,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&M._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&M.instanceColor!==null,instancingMorph:Ae&&M.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ur,alphaToCoverage:!!f.alphaToCoverage,map:Ee,matcap:ae,envMap:fe,envMapMode:fe&&O.mapping,envMapCubeUVHeight:R,aoMap:ve,lightMap:De,bumpMap:ue,normalMap:S,displacementMap:b,emissiveMap:B,normalMapObjectSpace:S&&f.normalMapType===bp,normalMapTangentSpace:S&&f.normalMapType===Sp,metalnessMap:N,roughnessMap:x,anisotropy:P,anisotropyMap:re,clearcoat:U,clearcoatMap:ie,clearcoatNormalMap:ce,clearcoatRoughnessMap:oe,dispersion:F,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Fe,sheen:te,sheenColorMap:Ye,sheenRoughnessMap:nt,specularMap:tt,specularColorMap:Ie,specularIntensityMap:je,transmission:J,transmissionMap:ut,thicknessMap:Nt,gradientMap:Te,opaque:f.transparent===!1&&f.blending===Vr&&f.alphaToCoverage===!1,alphaMap:We,alphaTest:Xe,alphaHash:Kn,combine:f.combine,mapUv:Ee&&m(f.map.channel),aoMapUv:ve&&m(f.aoMap.channel),lightMapUv:De&&m(f.lightMap.channel),bumpMapUv:ue&&m(f.bumpMap.channel),normalMapUv:S&&m(f.normalMap.channel),displacementMapUv:b&&m(f.displacementMap.channel),emissiveMapUv:B&&m(f.emissiveMap.channel),metalnessMapUv:N&&m(f.metalnessMap.channel),roughnessMapUv:x&&m(f.roughnessMap.channel),anisotropyMapUv:re&&m(f.anisotropyMap.channel),clearcoatMapUv:ie&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:nt&&m(f.sheenRoughnessMap.channel),specularMapUv:tt&&m(f.specularMap.channel),specularColorMapUv:Ie&&m(f.specularColorMap.channel),specularIntensityMapUv:je&&m(f.specularIntensityMap.channel),transmissionMapUv:ut&&m(f.transmissionMap.channel),thicknessMapUv:Nt&&m(f.thicknessMap.channel),alphaMapUv:We&&m(f.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(S||P),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!E.attributes.uv&&(Ee||We),fog:!!T,useFog:f.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||E.attributes.normal===void 0&&S===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:M.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:K,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:ai,decodeVideoTexture:Ee&&f.map.isVideoTexture===!0&&ct.getTransfer(f.map.colorSpace)===mt,decodeVideoTextureEmissive:B&&f.emissiveMap.isVideoTexture===!0&&ct.getTransfer(f.emissiveMap.colorSpace)===mt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===gi,flipSided:f.side===Ti,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Fi&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fi&&f.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)y.push(g),y.push(f.defines[g]);return f.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(y,f),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),g.push(a.mask)})(y,f),y.push(n.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=p[f.type],g;if(y){let v=An[y];g=Bp.clone(v.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,y){let g=h.get(y);return g!==void 0?++g.usedTimes:(g=new W0(n,y,f,r),c.push(g),h.set(y,g)),g},releaseProgram:function(f){if(--f.usedTimes===0){let y=c.indexOf(f);c[y]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}},releaseShaderCache:function(f){o.remove(f)},programs:c,dispose:function(){o.dispose()}}}function q0(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Y0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function af(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||Y0),i.length>1&&i.sort(l||sf),r.length>1&&r.sort(l||sf)}}}function Z0(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new af,n.set(e,[r])):t>=i.length?(r=new af,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function J0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Re};break;case"SpotLight":t={position:new A,direction:new A,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new A,halfWidth:new A,halfHeight:new A}}return n[e.id]=t,t}}}var K0=0;function $0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Q0(n){let e=new J0,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let r=new A,s=new Ze,a=new Ze;return{setup:function(o){let l=0,c=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let u=0,d=0,p=0,m=0,f=0,y=0,g=0,v=0,M=0,T=0,E=0;o.sort($0);for(let D=0,O=o.length;D<O;D++){let R=o[D],k=R.color,V=R.intensity,G=R.distance,W=null;if(R.shadow&&R.shadow.map&&(W=R.shadow.map.texture.format===Gs?R.shadow.map.texture:R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)l+=k.r*V,c+=k.g*V,h+=k.b*V;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],V);E++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let X=R.shadow,Y=t.get(R);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=W,i.directionalShadowMatrix[u]=R.shadow.matrix,y++}i.directional[u]=H,u++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(k).multiplyScalar(V),H.distance=G,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[p]=H;let X=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,X.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[p]=X.matrix,R.castShadow){let Y=t.get(R);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=W,v++}p++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(k).multiplyScalar(V),H.halfWidth.set(.5*R.width,0,0),H.halfHeight.set(0,.5*R.height,0),i.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let X=R.shadow,Y=t.get(R);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=W,i.pointShadowMatrix[d]=R.shadow.matrix,g++}i.point[d]=H,d++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(V),H.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let C=i.hash;C.directionalLength===u&&C.pointLength===d&&C.spotLength===p&&C.rectAreaLength===m&&C.hemiLength===f&&C.numDirectionalShadows===y&&C.numPointShadows===g&&C.numSpotShadows===v&&C.numSpotMaps===M&&C.numLightProbes===E||(i.directional.length=u,i.spot.length=p,i.rectArea.length=m,i.point.length=d,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,C.directionalLength=u,C.pointLength=d,C.spotLength=p,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=g,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=E,i.version=K0++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let f=0,y=o.length;f<y;f++){let g=o[f];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:i}}function of(n){let e=new Q0(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function ev(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new of(n),e.set(t,[s])):i>=r.length?(s=new of(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}var tv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],iv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],lf=new Ze,ka=new A,Mu=new A;function nv(n,e,t){let i=new dr,r=new pe,s=new pe,a=new Tt,o=new ul,l=new dl,c={},h=t.maxTextureSize,u={[Os]:Ti,[Ti]:Os,[gi]:gi},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new lt;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new we(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let g=this.type;function v(C,D){let O=e.update(f);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pi(r.x,r.y,{format:Gs,type:Tn})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,O,d,f,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,O,p,f,null)}function M(C,D,O,R){let k=null,V=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)k=V;else if(k=O.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let G=k.uuid,W=D.uuid,H=c[G];H===void 0&&(H={},c[G]=H);let X=H[W];X===void 0&&(X=k.clone(),H[W]=X,D.addEventListener("dispose",E)),k=X}return k.visible=D.visible,k.wireframe=D.wireframe,k.side=R===Fs?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:u[D.side],k.alphaMap=D.alphaMap,k.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,k.map=D.map,k.clipShadows=D.clipShadows,k.clippingPlanes=D.clippingPlanes,k.clipIntersection=D.clipIntersection,k.displacementMap=D.displacementMap,k.displacementScale=D.displacementScale,k.displacementBias=D.displacementBias,k.wireframeLinewidth=D.wireframeLinewidth,k.linewidth=D.linewidth,O.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(n.properties.get(k).light=O),k}function T(C,D,O,R,k){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===Fs)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let G=e.update(C),W=C.material;if(Array.isArray(W)){let H=G.groups;for(let X=0,Y=H.length;X<Y;X++){let K=H[X],ne=W[K.materialIndex];if(ne&&ne.visible){let ye=M(C,ne,R,k);C.onBeforeShadow(n,C,D,O,G,ye,K),n.renderBufferDirect(O,null,G,ye,C,K),C.onAfterShadow(n,C,D,O,G,ye,K)}}}else if(W.visible){let H=M(C,W,R,k);C.onBeforeShadow(n,C,D,O,G,H,null),n.renderBufferDirect(O,null,G,H,C,null),C.onAfterShadow(n,C,D,O,G,H,null)}}let V=C.children;for(let G=0,W=V.length;G<W;G++)T(V[G],D,O,R,k)}function E(C){C.target.removeEventListener("dispose",E);for(let D in c){let O=c[D],R=C.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}this.render=function(C,D,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===Zd&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);let R=n.getRenderTarget(),k=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),G=n.state;G.setBlending(En),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=g!==this.type;W&&D.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(X=>X.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,X=C.length;H<X;H++){let Y=C[H],K=Y.shadow;if(K===void 0){Oe("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let ne=K.getFrameExtents();r.multiply(ne),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,K.mapSize.y=s.y));let ye=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ye,K.map===null||W===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Fs){if(Y.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Pi(r.x,r.y,{format:Gs,type:Tn,minFilter:ni,magFilter:ni,generateMipmaps:!1}),K.map.texture.name=Y.name+".shadowMap",K.map.depthTexture=new pr(r.x,r.y,$i),K.map.depthTexture.name=Y.name+".shadowMapDepth",K.map.depthTexture.format=vr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=qi,K.map.depthTexture.magFilter=qi}else Y.isPointLight?(K.map=new jl(r.x),K.map.depthTexture=new qo(r.x,Yn)):(K.map=new Pi(r.x,r.y),K.map.depthTexture=new pr(r.x,r.y,Yn)),K.map.depthTexture.name=Y.name+".shadowMap",K.map.depthTexture.format=vr,this.type===Na?(K.map.depthTexture.compareFunction=ye?kl:zl,K.map.depthTexture.minFilter=ni,K.map.depthTexture.magFilter=ni):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=qi,K.map.depthTexture.magFilter=qi);K.camera.updateProjectionMatrix()}let Ae=K.map.isWebGLCubeRenderTarget?6:1;for(let Pe=0;Pe<Ae;Pe++){if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,Pe),n.clear();else{Pe===0&&(n.setRenderTarget(K.map),n.clear());let Ee=K.getViewport(Pe);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),G.viewport(a)}if(Y.isPointLight){let Ee=K.camera,ae=K.matrix,fe=Y.distance||Ee.far;fe!==Ee.far&&(Ee.far=fe,Ee.updateProjectionMatrix()),ka.setFromMatrixPosition(Y.matrixWorld),Ee.position.copy(ka),Mu.copy(Ee.position),Mu.add(tv[Pe]),Ee.up.copy(iv[Pe]),Ee.lookAt(Mu),Ee.updateMatrixWorld(),ae.makeTranslation(-ka.x,-ka.y,-ka.z),lf.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(lf,Ee.coordinateSystem,Ee.reversedDepth)}else K.updateMatrices(Y);i=K.getFrustum(),T(D,O,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Fs&&v(K,O),K.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(R,k,V)}}function rv(n,e){let t=new function(){let x=!1,P=new Tt,U=null,F=new Tt(0,0,0,0);return{setMask:function(ee){U===ee||x||(n.colorMask(ee,ee,ee,ee),U=ee)},setLocked:function(ee){x=ee},setClear:function(ee,te,J,re,ie){ie===!0&&(ee*=re,te*=re,J*=re),P.set(ee,te,J,re),F.equals(P)===!1&&(n.clearColor(ee,te,J,re),F.copy(P))},reset:function(){x=!1,U=null,F.set(-1,0,0,0)}}},i=new function(){let x=!1,P=!1,U=null,F=null,ee=null;return{setReversed:function(te){if(P!==te){let J=e.get("EXT_clip_control");te?J.clipControlEXT(J.LOWER_LEFT_EXT,J.ZERO_TO_ONE_EXT):J.clipControlEXT(J.LOWER_LEFT_EXT,J.NEGATIVE_ONE_TO_ONE_EXT),P=te;let re=ee;ee=null,this.setClear(re)}},getReversed:function(){return P},setTest:function(te){te?fe(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(te){U===te||x||(n.depthMask(te),U=te)},setFunc:function(te){if(P&&(te=Dp[te]),F!==te){switch(te){case uh:n.depthFunc(n.NEVER);break;case dh:n.depthFunc(n.ALWAYS);break;case ph:n.depthFunc(n.LESS);break;case wl:n.depthFunc(n.LEQUAL);break;case fh:n.depthFunc(n.EQUAL);break;case mh:n.depthFunc(n.GEQUAL);break;case gh:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}F=te}},setLocked:function(te){x=te},setClear:function(te){ee!==te&&(ee=te,P&&(te=1-te),n.clearDepth(te))},reset:function(){x=!1,U=null,F=null,ee=null,P=!1}}},r=new function(){let x=!1,P=null,U=null,F=null,ee=null,te=null,J=null,re=null,ie=null;return{setTest:function(ce){x||(ce?fe(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(ce){P===ce||x||(n.stencilMask(ce),P=ce)},setFunc:function(ce,oe,_e){U===ce&&F===oe&&ee===_e||(n.stencilFunc(ce,oe,_e),U=ce,F=oe,ee=_e)},setOp:function(ce,oe,_e){te===ce&&J===oe&&re===_e||(n.stencilOp(ce,oe,_e),te=ce,J=oe,re=_e)},setLocked:function(ce){x=ce},setClear:function(ce){ie!==ce&&(n.clearStencil(ce),ie=ce)},reset:function(){x=!1,P=null,U=null,F=null,ee=null,te=null,J=null,re=null,ie=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,f=null,y=null,g=null,v=null,M=null,T=new Re(0,0,0),E=0,C=!1,D=null,O=null,R=null,k=null,V=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,H=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=H>=2);let Y=null,K={},ne=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Ae=new Tt().fromArray(ne),Pe=new Tt().fromArray(ye);function Ee(x,P,U,F){let ee=new Uint8Array(4),te=n.createTexture();n.bindTexture(x,te),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let J=0;J<U;J++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(P,0,n.RGBA,1,1,F,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(P+J,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return te}let ae={};function fe(x){o[x]!==!0&&(n.enable(x),o[x]=!0)}function ve(x){o[x]!==!1&&(n.disable(x),o[x]=!1)}ae[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),fe(n.DEPTH_TEST),i.setFunc(wl),b(!1),B(lh),fe(n.CULL_FACE),S(En);let De={[Bs]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[$d]:n.FUNC_REVERSE_SUBTRACT};De[Qd]=n.MIN,De[ep]=n.MAX;let ue={[tp]:n.ZERO,[ip]:n.ONE,[np]:n.SRC_COLOR,[sp]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[op]:n.DST_ALPHA,[rp]:n.ONE_MINUS_SRC_COLOR,[ap]:n.ONE_MINUS_SRC_ALPHA,[hp]:n.ONE_MINUS_DST_COLOR,[lp]:n.ONE_MINUS_DST_ALPHA,[dp]:n.CONSTANT_COLOR,[pp]:n.ONE_MINUS_CONSTANT_COLOR,[fp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function S(x,P,U,F,ee,te,J,re,ie,ce){if(x!==En){if(d===!1&&(fe(n.BLEND),d=!0),x===Jd)ee=ee||P,te=te||U,J=J||F,P===m&&ee===g||(n.blendEquationSeparate(De[P],De[ee]),m=P,g=ee),U===f&&F===y&&te===v&&J===M||(n.blendFuncSeparate(ue[U],ue[F],ue[te],ue[J]),f=U,y=F,v=te,M=J),re.equals(T)!==!1&&ie===E||(n.blendColor(re.r,re.g,re.b,ie),T.copy(re),E=ie),p=x,C=!1;else if(x!==p||ce!==C){if(m===Bs&&g===Bs||(n.blendEquation(n.FUNC_ADD),m=Bs,g=Bs),ce)switch(x){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFunc(n.ONE,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",x)}else switch(x){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ch:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",x)}f=null,y=null,v=null,M=null,T.set(0,0,0),E=0,p=x,C=ce}}else d===!0&&(ve(n.BLEND),d=!1)}function b(x){D!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),D=x)}function B(x){x!==qd?(fe(n.CULL_FACE),x!==O&&(x===lh?n.cullFace(n.BACK):x===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),O=x}function N(x,P,U){x?(fe(n.POLYGON_OFFSET_FILL),k===P&&V===U||(k=P,V=U,i.getReversed()&&(P=-P),n.polygonOffset(P,U))):ve(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:fe,disable:ve,bindFramebuffer:function(x,P){return l[x]!==P&&(n.bindFramebuffer(x,P),l[x]=P,x===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=P),x===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(x,P){let U=h,F=!1;if(x){U=c.get(P),U===void 0&&(U=[],c.set(P,U));let ee=x.textures;if(U.length!==ee.length||U[0]!==n.COLOR_ATTACHMENT0){for(let te=0,J=ee.length;te<J;te++)U[te]=n.COLOR_ATTACHMENT0+te;U.length=ee.length,F=!0}}else U[0]!==n.BACK&&(U[0]=n.BACK,F=!0);F&&n.drawBuffers(U)},useProgram:function(x){return u!==x&&(n.useProgram(x),u=x,!0)},setBlending:S,setMaterial:function(x,P){x.side===gi?ve(n.CULL_FACE):fe(n.CULL_FACE);let U=x.side===Ti;P&&(U=!U),b(U),x.blending===Vr&&x.transparent===!1?S(En):S(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let F=x.stencilWrite;r.setTest(F),F&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),N(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:B,setLineWidth:function(x){x!==R&&(W&&n.lineWidth(x),R=x)},setPolygonOffset:N,setScissorTest:function(x){x?fe(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=n.TEXTURE0+G-1),Y!==x&&(n.activeTexture(x),Y=x)},bindTexture:function(x,P,U){U===void 0&&(U=Y===null?n.TEXTURE0+G-1:Y);let F=K[U];F===void 0&&(F={type:void 0,texture:void 0},K[U]=F),F.type===x&&F.texture===P||(Y!==U&&(n.activeTexture(U),Y=U),n.bindTexture(x,P||ae[x]),F.type=x,F.texture=P)},unbindTexture:function(){let x=K[Y];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(x){ze("WebGLState:",x)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(x){ze("WebGLState:",x)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(x){ze("WebGLState:",x)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(x){ze("WebGLState:",x)}},updateUBOMapping:function(x,P){let U=a.get(P);U===void 0&&(U=new WeakMap,a.set(P,U));let F=U.get(x);F===void 0&&(F=n.getUniformBlockIndex(P,x.name),U.set(x,F))},uniformBlockBinding:function(x,P){let U=a.get(P).get(x);s.get(P)!==U&&(n.uniformBlockBinding(P,U,x.__bindingPointIndex),s.set(P,U))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(x){ze("WebGLState:",x)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(x){ze("WebGLState:",x)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(x){ze("WebGLState:",x)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(x){ze("WebGLState:",x)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(x){ze("WebGLState:",x)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(x){ze("WebGLState:",x)}},scissor:function(x){Ae.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),Ae.copy(x))},viewport:function(x){Pe.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Pe.copy(x))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Y=null,K={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,f=null,y=null,g=null,v=null,M=null,T=new Re(0,0,0),E=0,C=!1,D=null,O=null,R=null,k=null,V=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function sv(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,b){return p?new OffscreenCanvas(S,b):Ss("canvas")}function f(S,b,B){let N=1,x=ue(S);if((x.width>B||x.height>B)&&(N=B/Math.max(x.width,x.height)),N<1){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let P=Math.floor(N*x.width),U=Math.floor(N*x.height);u===void 0&&(u=m(P,U));let F=b?m(P,U):u;return F.width=P,F.height=U,F.getContext("2d").drawImage(S,0,0,P,U),Oe("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+P+"x"+U+")."),F}return"data"in S&&Oe("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),S}return S}function y(S){return S.generateMipmaps}function g(S){n.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,b,B,N,x=!1){if(S!==null){if(n[S]!==void 0)return n[S];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let P=b;if(b===n.RED&&(B===n.FLOAT&&(P=n.R32F),B===n.HALF_FLOAT&&(P=n.R16F),B===n.UNSIGNED_BYTE&&(P=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(P=n.R8UI),B===n.UNSIGNED_SHORT&&(P=n.R16UI),B===n.UNSIGNED_INT&&(P=n.R32UI),B===n.BYTE&&(P=n.R8I),B===n.SHORT&&(P=n.R16I),B===n.INT&&(P=n.R32I)),b===n.RG&&(B===n.FLOAT&&(P=n.RG32F),B===n.HALF_FLOAT&&(P=n.RG16F),B===n.UNSIGNED_BYTE&&(P=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(P=n.RG8UI),B===n.UNSIGNED_SHORT&&(P=n.RG16UI),B===n.UNSIGNED_INT&&(P=n.RG32UI),B===n.BYTE&&(P=n.RG8I),B===n.SHORT&&(P=n.RG16I),B===n.INT&&(P=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(P=n.RGB8UI),B===n.UNSIGNED_SHORT&&(P=n.RGB16UI),B===n.UNSIGNED_INT&&(P=n.RGB32UI),B===n.BYTE&&(P=n.RGB8I),B===n.SHORT&&(P=n.RGB16I),B===n.INT&&(P=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),B===n.UNSIGNED_INT&&(P=n.RGBA32UI),B===n.BYTE&&(P=n.RGBA8I),B===n.SHORT&&(P=n.RGBA16I),B===n.INT&&(P=n.RGBA32I)),b===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(P=n.R11F_G11F_B10F)),b===n.RGBA){let U=x?fa:ct.getTransfer(N);B===n.FLOAT&&(P=n.RGBA32F),B===n.HALF_FLOAT&&(P=n.RGBA16F),B===n.UNSIGNED_BYTE&&(P=U===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return P!==n.R16F&&P!==n.R32F&&P!==n.RG16F&&P!==n.RG32F&&P!==n.RGBA16F&&P!==n.RGBA32F||e.get("EXT_color_buffer_float"),P}function T(S,b){let B;return S?b===null||b===Yn||b===Hs?B=n.DEPTH24_STENCIL8:b===$i?B=n.DEPTH32F_STENCIL8:b===ks&&(B=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yn||b===Hs?B=n.DEPTH_COMPONENT24:b===$i?B=n.DEPTH_COMPONENT32F:b===ks&&(B=n.DEPTH_COMPONENT16),B}function E(S,b){return y(S)===!0||S.isFramebufferTexture&&S.minFilter!==qi&&S.minFilter!==ni?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function C(S){let b=S.target;b.removeEventListener("dispose",C),(function(B){let N=i.get(B);if(N.__webglInit===void 0)return;let x=B.source,P=d.get(x);if(P){let U=P[N.__cacheKey];U.usedTimes--,U.usedTimes===0&&O(B),Object.keys(P).length===0&&d.delete(x)}i.remove(B)})(b),b.isVideoTexture&&h.delete(b)}function D(S){let b=S.target;b.removeEventListener("dispose",D),(function(B){let N=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(N.__webglFramebuffer[P]))for(let U=0;U<N.__webglFramebuffer[P].length;U++)n.deleteFramebuffer(N.__webglFramebuffer[P][U]);else n.deleteFramebuffer(N.__webglFramebuffer[P]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[P])}else{if(Array.isArray(N.__webglFramebuffer))for(let P=0;P<N.__webglFramebuffer.length;P++)n.deleteFramebuffer(N.__webglFramebuffer[P]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let P=0;P<N.__webglColorRenderbuffer.length;P++)N.__webglColorRenderbuffer[P]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[P]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let x=B.textures;for(let P=0,U=x.length;P<U;P++){let F=i.get(x[P]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(x[P])}i.remove(B)})(b)}function O(S){let b=i.get(S);n.deleteTexture(b.__webglTexture);let B=S.source;delete d.get(B)[b.__cacheKey],a.memory.textures--}let R=0;function k(S,b){let B=i.get(S);if(S.isVideoTexture&&(function(N){let x=a.render.frame;h.get(N)!==x&&(h.set(N,x),N.update())})(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let N=S.image;if(N===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void K(B,S,b);Oe("WebGLRenderer: Texture marked for update but image is incomplete")}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}let V={[Nr]:n.REPEAT,[ur]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},G={[qi]:n.NEAREST,[yp]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Rl]:n.LINEAR_MIPMAP_NEAREST,[dn]:n.LINEAR_MIPMAP_LINEAR},W={[Ep]:n.NEVER,[Rp]:n.ALWAYS,[Tp]:n.LESS,[zl]:n.LEQUAL,[wp]:n.EQUAL,[kl]:n.GEQUAL,[Ap]:n.GREATER,[Cp]:n.NOTEQUAL};function H(S,b){if(b.type!==$i||e.has("OES_texture_float_linear")!==!1||b.magFilter!==ni&&b.magFilter!==Rl&&b.magFilter!==Fa&&b.magFilter!==dn&&b.minFilter!==ni&&b.minFilter!==Rl&&b.minFilter!==Fa&&b.minFilter!==dn||Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,V[b.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,V[b.wrapT]),S!==n.TEXTURE_3D&&S!==n.TEXTURE_2D_ARRAY||n.texParameteri(S,n.TEXTURE_WRAP_R,V[b.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,G[b.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qi||b.minFilter!==Fa&&b.minFilter!==dn||b.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function X(S,b){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",C));let N=b.source,x=d.get(N);x===void 0&&(x={},d.set(N,x));let P=(function(U){let F=[];return F.push(U.wrapS),F.push(U.wrapT),F.push(U.wrapR||0),F.push(U.magFilter),F.push(U.minFilter),F.push(U.anisotropy),F.push(U.internalFormat),F.push(U.format),F.push(U.type),F.push(U.generateMipmaps),F.push(U.premultiplyAlpha),F.push(U.flipY),F.push(U.unpackAlignment),F.push(U.colorSpace),F.join()})(b);if(P!==S.__cacheKey){x[P]===void 0&&(x[P]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),x[P].usedTimes++;let U=x[S.__cacheKey];U!==void 0&&(x[S.__cacheKey].usedTimes--,U.usedTimes===0&&O(b)),S.__cacheKey=P,S.__webglTexture=x[P].texture}return B}function Y(S,b,B){return Math.floor(Math.floor(S/B)/b)}function K(S,b,B){let N=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(N=n.TEXTURE_3D);let x=X(S,b),P=b.source;t.bindTexture(N,S.__webglTexture,n.TEXTURE0+B);let U=i.get(P);if(P.version!==U.__version||x===!0){t.activeTexture(n.TEXTURE0+B);let F=ct.getPrimaries(ct.workingColorSpace),ee=b.colorSpace===Xr?null:ct.getPrimaries(b.colorSpace),te=b.colorSpace===Xr||F===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let J=f(b.image,!1,r.maxTextureSize);J=De(b,J);let re=s.convert(b.format,b.colorSpace),ie=s.convert(b.type),ce,oe=M(b.internalFormat,re,ie,b.colorSpace,b.isVideoTexture);H(N,b);let _e=b.mipmaps,Fe=b.isVideoTexture!==!0,Ye=U.__version===void 0||x===!0,nt=P.dataReady,tt=E(b,J);if(b.isDepthTexture)oe=T(b.format===jr,b.type),Ye&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,oe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,oe,J.width,J.height,0,re,ie,null));else if(b.isDataTexture)if(_e.length>0){Fe&&Ye&&t.texStorage2D(n.TEXTURE_2D,tt,oe,_e[0].width,_e[0].height);for(let Ie=0,je=_e.length;Ie<je;Ie++)ce=_e[Ie],Fe?nt&&t.texSubImage2D(n.TEXTURE_2D,Ie,0,0,ce.width,ce.height,re,ie,ce.data):t.texImage2D(n.TEXTURE_2D,Ie,oe,ce.width,ce.height,0,re,ie,ce.data);b.generateMipmaps=!1}else Fe?(Ye&&t.texStorage2D(n.TEXTURE_2D,tt,oe,J.width,J.height),nt&&(function(Ie,je,ut,Nt){let Te=Ie.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,je.width,je.height,ut,Nt,je.data);else{Te.sort((ai,gt)=>ai.start-gt.start);let We=0;for(let ai=1;ai<Te.length;ai++){let gt=Te[We],bt=Te[ai],Oi=gt.start+gt.count,z=Y(bt.start,je.width,4),en=Y(gt.start,je.width,4);bt.start<=Oi+1&&z===en&&Y(bt.start+bt.count-1,je.width,4)===z?gt.count=Math.max(gt.count,bt.start+bt.count-gt.start):(++We,Te[We]=bt)}Te.length=We+1;let Xe=n.getParameter(n.UNPACK_ROW_LENGTH),Kn=n.getParameter(n.UNPACK_SKIP_PIXELS),Fi=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,je.width);for(let ai=0,gt=Te.length;ai<gt;ai++){let bt=Te[ai],Oi=Math.floor(bt.start/4),z=Math.ceil(bt.count/4),en=Oi%je.width,$n=Math.floor(Oi/je.width),St=z;n.pixelStorei(n.UNPACK_SKIP_PIXELS,en),n.pixelStorei(n.UNPACK_SKIP_ROWS,$n),t.texSubImage2D(n.TEXTURE_2D,0,en,$n,St,1,ut,Nt,je.data)}Ie.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Kn),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fi)}})(b,J,re,ie)):t.texImage2D(n.TEXTURE_2D,0,oe,J.width,J.height,0,re,ie,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,oe,_e[0].width,_e[0].height,J.depth);for(let Ie=0,je=_e.length;Ie<je;Ie++)if(ce=_e[Ie],b.format!==pn)if(re!==null)if(Fe){if(nt)if(b.layerUpdates.size>0){let ut=mu(ce.width,ce.height,b.format,b.type);for(let Nt of b.layerUpdates){let Te=ce.data.subarray(Nt*ut/ce.data.BYTES_PER_ELEMENT,(Nt+1)*ut/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ie,0,0,Nt,ce.width,ce.height,1,re,Te)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ie,0,0,0,ce.width,ce.height,J.depth,re,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ie,oe,ce.width,ce.height,J.depth,0,ce.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ie,0,0,0,ce.width,ce.height,J.depth,re,ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ie,oe,ce.width,ce.height,J.depth,0,re,ie,ce.data)}else{Fe&&Ye&&t.texStorage2D(n.TEXTURE_2D,tt,oe,_e[0].width,_e[0].height);for(let Ie=0,je=_e.length;Ie<je;Ie++)ce=_e[Ie],b.format!==pn?re!==null?Fe?nt&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ie,0,0,ce.width,ce.height,re,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Ie,oe,ce.width,ce.height,0,ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?nt&&t.texSubImage2D(n.TEXTURE_2D,Ie,0,0,ce.width,ce.height,re,ie,ce.data):t.texImage2D(n.TEXTURE_2D,Ie,oe,ce.width,ce.height,0,re,ie,ce.data)}else if(b.isDataArrayTexture)if(Fe){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,oe,J.width,J.height,J.depth),nt)if(b.layerUpdates.size>0){let Ie=mu(J.width,J.height,b.format,b.type);for(let je of b.layerUpdates){let ut=J.data.subarray(je*Ie/J.data.BYTES_PER_ELEMENT,(je+1)*Ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,J.width,J.height,1,re,ie,ut)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,ie,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,J.width,J.height,J.depth,0,re,ie,J.data);else if(b.isData3DTexture)Fe?(Ye&&t.texStorage3D(n.TEXTURE_3D,tt,oe,J.width,J.height,J.depth),nt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,ie,J.data)):t.texImage3D(n.TEXTURE_3D,0,oe,J.width,J.height,J.depth,0,re,ie,J.data);else if(b.isFramebufferTexture){if(Ye)if(Fe)t.texStorage2D(n.TEXTURE_2D,tt,oe,J.width,J.height);else{let Ie=J.width,je=J.height;for(let ut=0;ut<tt;ut++)t.texImage2D(n.TEXTURE_2D,ut,oe,Ie,je,0,re,ie,null),Ie>>=1,je>>=1}}else if(_e.length>0){if(Fe&&Ye){let Ie=ue(_e[0]);t.texStorage2D(n.TEXTURE_2D,tt,oe,Ie.width,Ie.height)}for(let Ie=0,je=_e.length;Ie<je;Ie++)ce=_e[Ie],Fe?nt&&t.texSubImage2D(n.TEXTURE_2D,Ie,0,0,re,ie,ce):t.texImage2D(n.TEXTURE_2D,Ie,oe,re,ie,ce);b.generateMipmaps=!1}else if(Fe){if(Ye){let Ie=ue(J);t.texStorage2D(n.TEXTURE_2D,tt,oe,Ie.width,Ie.height)}nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,ie,J)}else t.texImage2D(n.TEXTURE_2D,0,oe,re,ie,J);y(b)&&g(N),U.__version=P.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function ne(S,b,B,N,x,P){let U=s.convert(B.format,B.colorSpace),F=s.convert(B.type),ee=M(B.internalFormat,U,F,B.colorSpace),te=i.get(b),J=i.get(B);if(J.__renderTarget=b,!te.__hasExternalTextures){let re=Math.max(1,b.width>>P),ie=Math.max(1,b.height>>P);x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?t.texImage3D(x,P,ee,re,ie,b.depth,0,U,F,null):t.texImage2D(x,P,ee,re,ie,0,U,F,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,x,J.__webglTexture,0,fe(b)):(x===n.TEXTURE_2D||x>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,x,J.__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(S,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),b.depthBuffer){let N=b.depthTexture,x=N&&N.isDepthTexture?N.type:null,P=T(b.stencilBuffer,x),U=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(b),P,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(b),P,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,P,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,S)}else{let N=b.textures;for(let x=0;x<N.length;x++){let P=N[x],U=s.convert(P.format,P.colorSpace),F=s.convert(P.type),ee=M(P.internalFormat,U,F,P.colorSpace);ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(b),ee,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(b),ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ee,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(S,b,B){let N=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let x=i.get(b.depthTexture);if(x.__renderTarget=b,x.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N){if(x.__webglInit===void 0&&(x.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),x.__webglTexture===void 0){x.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture),H(n.TEXTURE_CUBE_MAP,b.depthTexture);let te=s.convert(b.depthTexture.format),J=s.convert(b.depthTexture.type),re;b.depthTexture.format===vr?re=n.DEPTH_COMPONENT24:b.depthTexture.format===jr&&(re=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,b.width,b.height,0,te,J,null)}}else k(b.depthTexture,0);let P=x.__webglTexture,U=fe(b),F=N?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ee=b.depthTexture.format===jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===vr)ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,F,P,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,ee,F,P,0);else{if(b.depthTexture.format!==jr)throw new Error("Unknown depthTexture format");ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,F,P,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,ee,F,P,0)}}function Pe(S){let b=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==S.depthTexture){let N=S.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),N){let x=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,N.removeEventListener("dispose",x)};N.addEventListener("dispose",x),b.__depthDisposeCallback=x}b.__boundDepthTexture=N}if(S.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let N=0;N<6;N++)Ae(b.__webglFramebuffer[N],S,N);else{let N=S.texture.mipmaps;N&&N.length>0?Ae(b.__webglFramebuffer[0],S,0):Ae(b.__webglFramebuffer,S,0)}else if(B){b.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[N]),b.__webglDepthbuffer[N]===void 0)b.__webglDepthbuffer[N]=n.createRenderbuffer(),ye(b.__webglDepthbuffer[N],S,!1);else{let x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=b.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,P)}}else{let N=S.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ye(b.__webglDepthbuffer,S,!1);else{let x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,x,n.RENDERBUFFER,P)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let Ee=[],ae=[];function fe(S){return Math.min(r.maxSamples,S.samples)}function ve(S){let b=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function De(S,b){let B=S.colorSpace,N=S.format,x=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==Ur&&B!==Xr&&(ct.getTransfer(B)===mt?N===pn&&x===Ni||Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",B)),b}function ue(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=function(){let S=R;return S>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),R+=1,S},this.resetTextureUnits=function(){R=0},this.setTexture2D=k,this.setTexture2DArray=function(S,b){let B=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version?K(B,S,b):(S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b))},this.setTexture3D=function(S,b){let B=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version?K(B,S,b):t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)},this.setTextureCube=function(S,b){let B=i.get(S);S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version?(function(N,x,P){if(x.image.length!==6)return;let U=X(N,x),F=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+P);let ee=i.get(F);if(F.version!==ee.__version||U===!0){t.activeTexture(n.TEXTURE0+P);let te=ct.getPrimaries(ct.workingColorSpace),J=x.colorSpace===Xr?null:ct.getPrimaries(x.colorSpace),re=x.colorSpace===Xr||te===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ie=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let Te=0;Te<6;Te++)oe[Te]=ie||ce?ce?x.image[Te].image:x.image[Te]:f(x.image[Te],!0,r.maxCubemapSize),oe[Te]=De(x,oe[Te]);let _e=oe[0],Fe=s.convert(x.format,x.colorSpace),Ye=s.convert(x.type),nt=M(x.internalFormat,Fe,Ye,x.colorSpace),tt=x.isVideoTexture!==!0,Ie=ee.__version===void 0||U===!0,je=F.dataReady,ut,Nt=E(x,_e);if(H(n.TEXTURE_CUBE_MAP,x),ie){tt&&Ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,nt,_e.width,_e.height);for(let Te=0;Te<6;Te++){ut=oe[Te].mipmaps;for(let We=0;We<ut.length;We++){let Xe=ut[We];x.format!==pn?Fe!==null?tt?je&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We,0,0,Xe.width,Xe.height,Fe,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We,nt,Xe.width,Xe.height,0,Xe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We,0,0,Xe.width,Xe.height,Fe,Ye,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We,nt,Xe.width,Xe.height,0,Fe,Ye,Xe.data)}}}else{if(ut=x.mipmaps,tt&&Ie){ut.length>0&&Nt++;let Te=ue(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,nt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ce){tt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,oe[Te].width,oe[Te].height,Fe,Ye,oe[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,nt,oe[Te].width,oe[Te].height,0,Fe,Ye,oe[Te].data);for(let We=0;We<ut.length;We++){let Xe=ut[We].image[Te].image;tt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We+1,0,0,Xe.width,Xe.height,Fe,Ye,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We+1,nt,Xe.width,Xe.height,0,Fe,Ye,Xe.data)}}else{tt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Fe,Ye,oe[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,nt,Fe,Ye,oe[Te]);for(let We=0;We<ut.length;We++){let Xe=ut[We];tt?je&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We+1,0,0,Fe,Ye,Xe.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We+1,nt,Fe,Ye,Xe.image[Te])}}}y(x)&&g(n.TEXTURE_CUBE_MAP),ee.__version=F.version,x.onUpdate&&x.onUpdate(x)}N.__version=x.version})(B,S,b):t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)},this.rebindTextures=function(S,b,B){let N=i.get(S);b!==void 0&&ne(N.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Pe(S)},this.setupRenderTarget=function(S){let b=S.texture,B=i.get(S),N=i.get(b);S.addEventListener("dispose",D);let x=S.textures,P=S.isWebGLCubeRenderTarget===!0,U=x.length>1;if(U||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=b.version,a.memory.textures++),P){B.__webglFramebuffer=[];for(let F=0;F<6;F++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[F]=[];for(let ee=0;ee<b.mipmaps.length;ee++)B.__webglFramebuffer[F][ee]=n.createFramebuffer()}else B.__webglFramebuffer[F]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let F=0;F<b.mipmaps.length;F++)B.__webglFramebuffer[F]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(U)for(let F=0,ee=x.length;F<ee;F++){let te=i.get(x[F]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&ve(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let F=0;F<x.length;F++){let ee=x[F];B.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[F]);let te=s.convert(ee.format,ee.colorSpace),J=s.convert(ee.type),re=M(ee.internalFormat,te,J,ee.colorSpace,S.isXRRenderTarget===!0),ie=fe(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,re,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,B.__webglColorRenderbuffer[F])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(P){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),H(n.TEXTURE_CUBE_MAP,b);for(let F=0;F<6;F++)if(b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)ne(B.__webglFramebuffer[F][ee],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee);else ne(B.__webglFramebuffer[F],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);y(b)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let F=0,ee=x.length;F<ee;F++){let te=x[F],J=i.get(te),re=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),H(re,te),ne(B.__webglFramebuffer,S,te,n.COLOR_ATTACHMENT0+F,re,0),y(te)&&g(re)}t.unbindTexture()}else{let F=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(F=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(F,N.__webglTexture),H(F,b),b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)ne(B.__webglFramebuffer[ee],S,b,n.COLOR_ATTACHMENT0,F,ee);else ne(B.__webglFramebuffer,S,b,n.COLOR_ATTACHMENT0,F,0);y(b)&&g(F),t.unbindTexture()}S.depthBuffer&&Pe(S)},this.updateRenderTargetMipmap=function(S){let b=S.textures;for(let B=0,N=b.length;B<N;B++){let x=b[B];if(y(x)){let P=v(S),U=i.get(x).__webglTexture;t.bindTexture(P,U),g(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(S.samples>0){if(ve(S)===!1){let b=S.textures,B=S.width,N=S.height,x=n.COLOR_BUFFER_BIT,P=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=i.get(S),F=b.length>1;if(F)for(let te=0;te<b.length;te++)t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let ee=S.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let te=0;te<b.length;te++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(x|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(x|=n.STENCIL_BUFFER_BIT)),F){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,U.__webglColorRenderbuffer[te]);let J=i.get(b[te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,N,0,0,B,N,x,n.NEAREST),l===!0&&(Ee.length=0,ae.length=0,Ee.push(n.COLOR_ATTACHMENT0+te),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ee.push(P),ae.push(P),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),F)for(let te=0;te<b.length;te++){t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,U.__webglColorRenderbuffer[te]);let J=i.get(b[te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let b=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function av(n,e){return{convert:function(t,i=Xr){let r,s=ct.getTransfer(i);if(t===Ni)return n.UNSIGNED_BYTE;if(t===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===Th)return n.BYTE;if(t===wh)return n.SHORT;if(t===ks)return n.UNSIGNED_SHORT;if(t===Il)return n.INT;if(t===Yn)return n.UNSIGNED_INT;if(t===$i)return n.FLOAT;if(t===Tn)return n.HALF_FLOAT;if(t===xp)return n.ALPHA;if(t===Mp)return n.RGB;if(t===pn)return n.RGBA;if(t===vr)return n.DEPTH_COMPONENT;if(t===jr)return n.DEPTH_STENCIL;if(t===Dl)return n.RED;if(t===Nl)return n.RED_INTEGER;if(t===Gs)return n.RG;if(t===Rh)return n.RG_INTEGER;if(t===Ih)return n.RGBA_INTEGER;if(t===Ul||t===Fl||t===Ol||t===Bl)if(s===mt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Bl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ph||t===Lh||t===Dh||t===Nh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Uh||t===Fh||t===Oh||t===Bh||t===zh||t===kh||t===Hh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Uh||t===Fh)return s===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Oh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Bh)return r.COMPRESSED_R11_EAC;if(t===zh)return r.COMPRESSED_SIGNED_R11_EAC;if(t===kh)return r.COMPRESSED_RG11_EAC;if(t===Hh)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Gh||t===Vh||t===Wh||t===jh||t===Xh||t===qh||t===Yh||t===Zh||t===Jh||t===Kh||t===$h||t===Qh||t===eu||t===tu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Gh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Vh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Wh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===jh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Xh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===qh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Yh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Zh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Jh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Kh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===$h)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Qh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===eu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===tu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===iu||t===nu||t===ru){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===iu)return s===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ru)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===su||t===au||t===ou||t===lu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===su)return r.COMPRESSED_RED_RGTC1_EXT;if(t===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Hs?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ba(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Di({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iu=class extends Hn{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,f=typeof XRWebGLBinding<"u",y=new Ru,g={},v=t.getContextAttributes(),M=null,T=null,E=[],C=[],D=new pe,O=null,R=new Gt;R.viewport=new Tt;let k=new Gt;k.viewport=new Tt;let V=[R,k],G=new Tl,W=null,H=null;function X(ae){let fe=C.indexOf(ae.inputSource);if(fe===-1)return;let ve=E[fe];ve!==void 0&&(ve.update(ae.inputSource,ae.frame,c||a),ve.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let ae=0;ae<E.length;ae++){let fe=C[ae];fe!==null&&(C[ae]=null,E[ae].disconnect(fe))}W=null,H=null,y.reset();for(let ae in g)delete g[ae];e.setRenderTarget(M),p=null,d=null,u=null,r=null,T=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}function K(ae){for(let fe=0;fe<ae.removed.length;fe++){let ve=ae.removed[fe],De=C.indexOf(ve);De>=0&&(C[De]=null,E[De].disconnect(ve))}for(let fe=0;fe<ae.added.length;fe++){let ve=ae.added[fe],De=C.indexOf(ve);if(De===-1){for(let S=0;S<E.length;S++){if(S>=C.length){C.push(ve),De=S;break}if(C[S]===null){C[S]=ve,De=S;break}}if(De===-1)break}let ue=E[De];ue&&ue.connect(ve)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=E[ae];return fe===void 0&&(fe=new ws,E[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=E[ae];return fe===void 0&&(fe=new ws,E[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=E[ae];return fe===void 0&&(fe=new ws,E[ae]=fe),fe.getHandSpace()},this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&f&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ve=null,De=null;v.depth&&(De=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?jr:vr,ve=v.stencil?Hs:Yn);let ue={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Pi(d.textureWidth,d.textureHeight,{format:pn,type:Ni,depthTexture:new pr(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Pi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let ne=new A,ye=new A;function Ae(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let fe=ae.near,ve=ae.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),G.near=k.near=R.near=fe,G.far=k.far=R.far=ve,W===G.near&&H===G.far||(r.updateRenderState({depthNear:G.near,depthFar:G.far}),W=G.near,H=G.far),G.layers.mask=6|ae.layers.mask,R.layers.mask=-5&G.layers.mask,k.layers.mask=-3&G.layers.mask;let De=ae.parent,ue=G.cameras;Ae(G,De);for(let S=0;S<ue.length;S++)Ae(ue[S],De);ue.length===2?(function(S,b,B){ne.setFromMatrixPosition(b.matrixWorld),ye.setFromMatrixPosition(B.matrixWorld);let N=ne.distanceTo(ye),x=b.projectionMatrix.elements,P=B.projectionMatrix.elements,U=x[14]/(x[10]-1),F=x[14]/(x[10]+1),ee=(x[9]+1)/x[5],te=(x[9]-1)/x[5],J=(x[8]-1)/x[0],re=(P[8]+1)/P[0],ie=U*J,ce=U*re,oe=N/(-J+re),_e=oe*-J;if(b.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(_e),S.translateZ(oe),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),x[10]===-1)S.projectionMatrix.copy(b.projectionMatrix),S.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let Fe=U+oe,Ye=F+oe,nt=ie-_e,tt=ce+(N-_e),Ie=ee*F/Ye*Fe,je=te*F/Ye*Fe;S.projectionMatrix.makePerspective(nt,tt,Ie,je,Fe,Ye),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}})(G,R,k):G.projectionMatrix.copy(R.projectionMatrix),(function(S,b,B){B===null?S.matrix.copy(b.matrixWorld):(S.matrix.copy(B.matrixWorld),S.matrix.invert(),S.matrix.multiply(b.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(b.projectionMatrix),S.projectionMatrixInverse.copy(b.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*Es*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(ae,G,De)},this.getCamera=function(){return G},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(G)},this.getCameraTexture=function(ae){return g[ae]};let Pe=null,Ee=new cf;Ee.setAnimationLoop(function(ae,fe){if(h=fe.getViewerPose(c||a),m=fe,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let De=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let S=0;S<ve.length;S++){let b=ve[S],B=null;if(p!==null)B=p.getViewport(b);else{let x=u.getViewSubImage(d,b);B=x.viewport,S===0&&(e.setRenderTargetTextures(T,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(T))}let N=V[S];N===void 0&&(N=new Gt,N.layers.enable(S),N.viewport=new Tt,V[S]=N),N.matrix.fromArray(b.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(b.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(B.x,B.y,B.width,B.height),S===0&&(G.matrix.copy(N.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(N)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){u=i.getBinding();let S=u.getDepthInformation(ve[0]);S&&S.isValid&&S.texture&&y.init(S,r.renderState)}if(ue&&ue.includes("camera-access")&&f){e.state.unbindTexture(),u=i.getBinding();for(let S=0;S<ve.length;S++){let b=ve[S].camera;if(b){let B=g[b];B||(B=new ba,g[b]=B);let N=u.getCameraImage(b);B.sourceTexture=N}}}}for(let ve=0;ve<E.length;ve++){let De=C[ve],ue=E[ve];De!==null&&ue!==void 0&&ue.update(De,fe,c||a)}Pe&&Pe(ae,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}),this.setAnimationLoop=function(ae){Pe=ae},this.dispose=function(){}}},Jr=new cn,ov=new Ze;function lv(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ti&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ti&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Jr.copy(l),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),r.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(Jr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,pu(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ti&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function cv(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let f=u.value,y=d+"_"+p;if(m[y]===void 0)return m[y]=typeof f=="number"||typeof f=="boolean"?f:f.clone(),!0;{let g=m[y];if(typeof f=="number"||typeof f=="boolean"){if(g!==f)return m[y]=f,!0}else if(g.equals(f)===!1)return g.copy(f),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(y){let g=y.uniforms,v=0,M=16;for(let E=0,C=g.length;E<C;E++){let D=Array.isArray(g[E])?g[E]:[g[E]];for(let O=0,R=D.length;O<R;O++){let k=D[O],V=Array.isArray(k.value)?k.value:[k.value];for(let G=0,W=V.length;G<W;G++){let H=c(V[G]),X=v%M,Y=X%H.boundary,K=X+Y;v+=Y,K!==0&&M-K<H.storage&&(v+=M-K),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=H.storage}}}let T=v%M;T>0&&(v+=M-T),y.__size=v,y.__cache={}})(u),p=(function(y){let g=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();y.__bindingPointIndex=g;let v=n.createBuffer(),M=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;i.updateUBOMapping(u,m);let f=e.render.frame;s[u.id]!==f&&((function(y){let g=r[y.id],v=y.uniforms,M=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let T=0,E=v.length;T<E;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let D=0,O=C.length;D<O;D++){let R=C[D];if(l(R,T,D,M)===!0){let k=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],G=0;for(let W=0;W<V.length;W++){let H=V[W],X=c(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,k+G,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,G),G+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=f)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null,_r=class{constructor(e={}){let{canvas:t=Ip(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ni}=e,m;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let f=p,y=new Set([Ih,Rh,Nl]),g=new Set([Ni,Yn,ks,Hs,Pl,Ll]),v=new Uint32Array(4),M=new Int32Array(4),T=null,E=null,C=[],D=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1;this._outputColorSpace=_t;let V=0,G=0,W=null,H=-1,X=null,Y=new Tt,K=new Tt,ne=null,ye=new Re(0),Ae=0,Pe=t.width,Ee=t.height,ae=1,fe=null,ve=null,De=new Tt(0,0,Pe,Ee),ue=new Tt(0,0,Pe,Ee),S=!1,b=new dr,B=!1,N=!1,x=new Ze,P=new A,U=new Tt,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function te(){return W===null?ae:1}let J,re,ie,ce,oe,_e,Fe,Ye,nt,tt,Ie,je,ut,Nt,Te,We,Xe,Kn,Fi,ai,gt,bt,Oi,z=i;function en(w,q){return t.getContext(w,q)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",xr,!1),t.addEventListener("webglcontextrestored",$r,!1),t.addEventListener("webglcontextcreationerror",Mr,!1),z===null){let q="webgl2";if(z=en(q,w),z===null)throw en(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ze("WebGLRenderer: "+w.message),w}function $n(){J=new Og(z),J.init(),gt=new av(z,J),re=new Dg(z,J,e,gt),ie=new rv(z,J),re.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),ce=new kg(z),oe=new q0,_e=new sv(z,J,ie,oe,re,gt,ce),Fe=new Fg(R),Ye=new Cg(z),bt=new Pg(z,Ye),nt=new Bg(z,Ye,ce,bt),tt=new Gg(z,nt,Ye,bt,ce),Kn=new Hg(z,re,_e),Te=new Ng(oe),Ie=new X0(R,Fe,J,re,bt,Te),je=new lv(R,oe),ut=new Z0,Nt=new ev(J),Xe=new Ig(R,Fe,ie,tt,m,l),We=new nv(R,tt,re),Oi=new cv(z,ce,re,ie),Fi=new Lg(z,J,ce),ai=new zg(z,J,ce),ce.programs=Ie.programs,R.capabilities=re,R.extensions=J,R.properties=oe,R.renderLists=ut,R.shadowMap=We,R.state=ie,R.info=ce}$n(),f!==Ni&&(O=new Wg(f,t.width,t.height,r,s));let St=new Iu(R,z);function xr(w){w.preventDefault(),hu("WebGLRenderer: Context Lost."),k=!0}function $r(){hu("WebGLRenderer: Context Restored."),k=!1;let w=ce.autoReset,q=We.enabled,Z=We.autoUpdate,Q=We.needsUpdate,$=We.type;$n(),ce.autoReset=w,We.enabled=q,We.autoUpdate=Z,We.needsUpdate=Q,We.type=$}function Mr(w){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){let q=w.target;q.removeEventListener("dispose",ot),(function(Z){(function(Q){let $=oe.get(Q).programs;$!==void 0&&($.forEach(function(ge){Ie.releaseProgram(ge)}),Q.isShaderMaterial&&Ie.releaseShaderCache(Q))})(Z),oe.remove(Z)})(q)}function Sr(w,q,Z){w.transparent===!0&&w.side===gi&&w.forceSinglePass===!1?(w.side=Ti,w.needsUpdate=!0,Mi(w,q,Z),w.side=Os,w.needsUpdate=!0,Mi(w,q,Z),w.side=gi):Mi(w,q,Z)}this.xr=St,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(w){w!==void 0&&(ae=w,this.setSize(Pe,Ee,!1))},this.getSize=function(w){return w.set(Pe,Ee)},this.setSize=function(w,q,Z=!0){St.isPresenting?Oe("WebGLRenderer: Can't change size while VR device is presenting."):(Pe=w,Ee=q,t.width=Math.floor(w*ae),t.height=Math.floor(q*ae),Z===!0&&(t.style.width=w+"px",t.style.height=q+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,w,q))},this.getDrawingBufferSize=function(w){return w.set(Pe*ae,Ee*ae).floor()},this.setDrawingBufferSize=function(w,q,Z){Pe=w,Ee=q,ae=Z,t.width=Math.floor(w*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(f!==Ni){if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(De)},this.setViewport=function(w,q,Z,Q){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,q,Z,Q),ie.viewport(Y.copy(De).multiplyScalar(ae).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,q,Z,Q){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,q,Z,Q),ie.scissor(K.copy(ue).multiplyScalar(ae).round())},this.getScissorTest=function(){return S},this.setScissorTest=function(w){ie.setScissorTest(S=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,Z=!0){let Q=0;if(w){let $=!1;if(W!==null){let ge=W.texture.format;$=y.has(ge)}if($){let ge=W.texture.type,Me=g.has(ge),be=Xe.getClearColor(),Ce=Xe.getClearAlpha(),Se=be.r,Qe=be.g,it=be.b;Me?(v[0]=Se,v[1]=Qe,v[2]=it,v[3]=Ce,z.clearBufferuiv(z.COLOR,0,v)):(M[0]=Se,M[1]=Qe,M[2]=it,M[3]=Ce,z.clearBufferiv(z.COLOR,0,M))}else Q|=z.COLOR_BUFFER_BIT}q&&(Q|=z.DEPTH_BUFFER_BIT),Z&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xr,!1),t.removeEventListener("webglcontextrestored",$r,!1),t.removeEventListener("webglcontextcreationerror",Mr,!1),Xe.dispose(),ut.dispose(),Nt.dispose(),oe.dispose(),Fe.dispose(),tt.dispose(),bt.dispose(),Oi.dispose(),Ie.dispose(),St.dispose(),St.removeEventListener("sessionstart",Ka),St.removeEventListener("sessionend",$a),Bi.stop()},this.renderBufferDirect=function(w,q,Z,Q,$,ge){q===null&&(q=F);let Me=$.isMesh&&$.matrixWorld.determinant()<0,be=(function(He,vt,Ct,Ne,Ge){vt.isScene!==!0&&(vt=F),_e.resetTextureUnits();let Yt=vt.fog,Qn=Ne.isMeshStandardMaterial||Ne.isMeshLambertMaterial||Ne.isMeshPhongMaterial?vt.environment:null,er=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ur,bi=Ne.isMeshStandardMaterial||Ne.isMeshLambertMaterial&&!Ne.envMap||Ne.isMeshPhongMaterial&&!Ne.envMap,hi=Fe.get(Ne.envMap||Qn,bi),Gi=Ne.vertexColors===!0&&!!Ct.attributes.color&&Ct.attributes.color.itemSize===4,Vt=!!Ct.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),tn=!!Ct.morphAttributes.position,nn=!!Ct.morphAttributes.normal,Er=!!Ct.morphAttributes.color,zt=un;Ne.toneMapped&&(W!==null&&W.isXRRenderTarget!==!0||(zt=R.toneMapping));let ht=Ct.morphAttributes.position||Ct.morphAttributes.normal||Ct.morphAttributes.color,In=ht!==void 0?ht.length:0,qe=oe.get(Ne),pt=E.state.lights;if(B===!0&&(N===!0||He!==X)){let Qt=He===X&&Ne.id===H;Te.setState(Ne,He,Qt)}let Wt=!1;Ne.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==pt.state.version||qe.outputColorSpace!==er||Ge.isBatchedMesh&&qe.batching===!1?Wt=!0:Ge.isBatchedMesh||qe.batching!==!0?Ge.isBatchedMesh&&qe.batchingColor===!0&&Ge.colorTexture===null||Ge.isBatchedMesh&&qe.batchingColor===!1&&Ge.colorTexture!==null||Ge.isInstancedMesh&&qe.instancing===!1?Wt=!0:Ge.isInstancedMesh||qe.instancing!==!0?Ge.isSkinnedMesh&&qe.skinning===!1?Wt=!0:Ge.isSkinnedMesh||qe.skinning!==!0?Ge.isInstancedMesh&&qe.instancingColor===!0&&Ge.instanceColor===null||Ge.isInstancedMesh&&qe.instancingColor===!1&&Ge.instanceColor!==null||Ge.isInstancedMesh&&qe.instancingMorph===!0&&Ge.morphTexture===null||Ge.isInstancedMesh&&qe.instancingMorph===!1&&Ge.morphTexture!==null||qe.envMap!==hi||Ne.fog===!0&&qe.fog!==Yt?Wt=!0:qe.numClippingPlanes===void 0||qe.numClippingPlanes===Te.numPlanes&&qe.numIntersection===Te.numIntersection?(qe.vertexAlphas!==Gi||qe.vertexTangents!==Vt||qe.morphTargets!==tn||qe.morphNormals!==nn||qe.morphColors!==Er||qe.toneMapping!==zt||qe.morphTargetsCount!==In)&&(Wt=!0):Wt=!0:Wt=!0:Wt=!0:Wt=!0:(Wt=!0,qe.__version=Ne.version);let Vi=qe.currentProgram;Wt===!0&&(Vi=Mi(Ne,vt,Ge));let Ei=!1,Ft=!1,Pn=!1,yt=Vi.getUniforms(),Ai=qe.uniforms;if(ie.useProgram(Vi.program)&&(Ei=!0,Ft=!0,Pn=!0),Ne.id!==H&&(H=Ne.id,Ft=!0),Ei||X!==He){ie.buffers.depth.getReversed()&&He.reversedDepth!==!0&&(He._reversedDepth=!0,He.updateProjectionMatrix()),yt.setValue(z,"projectionMatrix",He.projectionMatrix),yt.setValue(z,"viewMatrix",He.matrixWorldInverse);let Qt=yt.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,P.setFromMatrixPosition(He.matrixWorld)),re.logarithmicDepthBuffer&&yt.setValue(z,"logDepthBufFC",2/(Math.log(He.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&yt.setValue(z,"isOrthographic",He.isOrthographicCamera===!0),X!==He&&(X=He,Ft=!0,Pn=!0)}if(qe.needsLights&&(pt.state.directionalShadowMap.length>0&&yt.setValue(z,"directionalShadowMap",pt.state.directionalShadowMap,_e),pt.state.spotShadowMap.length>0&&yt.setValue(z,"spotShadowMap",pt.state.spotShadowMap,_e),pt.state.pointShadowMap.length>0&&yt.setValue(z,"pointShadowMap",pt.state.pointShadowMap,_e)),Ge.isSkinnedMesh){yt.setOptional(z,Ge,"bindMatrix"),yt.setOptional(z,Ge,"bindMatrixInverse");let Qt=Ge.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),yt.setValue(z,"boneTexture",Qt.boneTexture,_e))}Ge.isBatchedMesh&&(yt.setOptional(z,Ge,"batchingTexture"),yt.setValue(z,"batchingTexture",Ge._matricesTexture,_e),yt.setOptional(z,Ge,"batchingIdTexture"),yt.setValue(z,"batchingIdTexture",Ge._indirectTexture,_e),yt.setOptional(z,Ge,"batchingColorTexture"),Ge._colorsTexture!==null&&yt.setValue(z,"batchingColorTexture",Ge._colorsTexture,_e));let is=Ct.morphAttributes;is.position===void 0&&is.normal===void 0&&is.color===void 0||Kn.update(Ge,Ct,Vi),(Ft||qe.receiveShadow!==Ge.receiveShadow)&&(qe.receiveShadow=Ge.receiveShadow,yt.setValue(z,"receiveShadow",Ge.receiveShadow)),(Ne.isMeshStandardMaterial||Ne.isMeshLambertMaterial||Ne.isMeshPhongMaterial)&&Ne.envMap===null&&vt.environment!==null&&(Ai.envMapIntensity.value=vt.environmentIntensity),Ai.dfgLUT!==void 0&&(Ai.dfgLUT.value=(wn===null&&(wn=new Or(hv,16,16,Gs,Tn),wn.name="DFG_LUT",wn.minFilter=ni,wn.magFilter=ni,wn.wrapS=ur,wn.wrapT=ur,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn)),Ft&&(yt.setValue(z,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&(Zt=Pn,(ui=Ai).ambientLightColor.needsUpdate=Zt,ui.lightProbe.needsUpdate=Zt,ui.directionalLights.needsUpdate=Zt,ui.directionalLightShadows.needsUpdate=Zt,ui.pointLights.needsUpdate=Zt,ui.pointLightShadows.needsUpdate=Zt,ui.spotLights.needsUpdate=Zt,ui.spotLightShadows.needsUpdate=Zt,ui.rectAreaLights.needsUpdate=Zt,ui.hemisphereLights.needsUpdate=Zt),Yt&&Ne.fog===!0&&je.refreshFogUniforms(Ai,Yt),je.refreshMaterialUniforms(Ai,Ne,ae,Ee,E.state.transmissionRenderTarget[He.id]),js.upload(z,Ut(qe),Ai,_e));var ui,Zt;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(js.upload(z,Ut(qe),Ai,_e),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&yt.setValue(z,"center",Ge.center),yt.setValue(z,"modelViewMatrix",Ge.modelViewMatrix),yt.setValue(z,"normalMatrix",Ge.normalMatrix),yt.setValue(z,"modelMatrix",Ge.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let Qt=Ne.uniformsGroups;for(let de=0,ei=Qt.length;de<ei;de++){let Rt=Qt[de];Oi.update(Rt,Vi),Oi.bind(Rt,Vi)}}return Vi})(w,q,Z,Q,$);ie.setMaterial(Q,Me);let Ce=Z.index,Se=1;if(Q.wireframe===!0){if(Ce=nt.getWireframeAttribute(Z),Ce===void 0)return;Se=2}let Qe=Z.drawRange,it=Z.attributes.position,Ue=Qe.start*Se,he=(Qe.start+Qe.count)*Se;ge!==null&&(Ue=Math.max(Ue,ge.start*Se),he=Math.min(he,(ge.start+ge.count)*Se)),Ce!==null?(Ue=Math.max(Ue,0),he=Math.min(he,Ce.count)):it!=null&&(Ue=Math.max(Ue,0),he=Math.min(he,it.count));let ft=he-Ue;if(ft<0||ft===1/0)return;let At;bt.setup($,Q,be,Z,Ce);let ke=Fi;if(Ce!==null&&(At=Ye.get(Ce),ke=ai,ke.setIndex(At)),$.isMesh)Q.wireframe===!0?(ie.setLineWidth(Q.wireframeLinewidth*te()),ke.setMode(z.LINES)):ke.setMode(z.TRIANGLES);else if($.isLine){let He=Q.linewidth;He===void 0&&(He=1),ie.setLineWidth(He*te()),$.isLineSegments?ke.setMode(z.LINES):$.isLineLoop?ke.setMode(z.LINE_LOOP):ke.setMode(z.LINE_STRIP)}else $.isPoints?ke.setMode(z.POINTS):$.isSprite&&ke.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ma("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ke.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let He=$._multiDrawStarts,vt=$._multiDrawCounts,Ct=$._multiDrawCount,Ne=Ce?Ye.get(Ce).bytesPerElement:1,Ge=oe.get(Q).currentProgram.getUniforms();for(let Yt=0;Yt<Ct;Yt++)Ge.setValue(z,"_gl_DrawID",Yt),ke.render(He[Yt]/Ne,vt[Yt])}else if($.isInstancedMesh)ke.renderInstances(Ue,ft,$.count);else if(Z.isInstancedBufferGeometry){let He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vt=Math.min(Z.instanceCount,He);ke.renderInstances(Ue,ft,vt)}else ke.render(Ue,ft)},this.compile=function(w,q,Z=null){Z===null&&(Z=w),E=Nt.get(Z),E.init(q),D.push(E),Z.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==Z&&w.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();let Q=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ge=$.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let be=ge[Me];Sr(be,Z,$),Q.add(be)}else Sr(ge,Z,$),Q.add(ge)}),E=D.pop(),Q},this.compileAsync=function(w,q,Z=null){let Q=this.compile(w,q,Z);return new Promise($=>{function ge(){Q.forEach(function(Me){oe.get(Me).currentProgram.isReady()&&Q.delete(Me)}),Q.size!==0?setTimeout(ge,10):$(w)}J.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let oi=null;function Ka(){Bi.stop()}function $a(){Bi.start()}let Bi=new cf;function zi(w,q,Z,Q){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||b.intersectsSprite(w)){Q&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(x);let ge=tt.update(w),Me=w.material;Me.visible&&T.push(w,ge,Me,Z,U.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||b.intersectsObject(w))){let ge=tt.update(w),Me=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),U.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),U.copy(ge.boundingSphere.center)),U.applyMatrix4(w.matrixWorld).applyMatrix4(x)),Array.isArray(Me)){let be=ge.groups;for(let Ce=0,Se=be.length;Ce<Se;Ce++){let Qe=be[Ce],it=Me[Qe.materialIndex];it&&it.visible&&T.push(w,ge,it,Z,U.z,Qe)}}else Me.visible&&T.push(w,ge,Me,Z,U.z,null)}}let $=w.children;for(let ge=0,Me=$.length;ge<Me;ge++)zi($[ge],q,Z,Q)}function br(w,q,Z,Q){let{opaque:$,transmissive:ge,transparent:Me}=w;E.setupLightsView(Z),B===!0&&Te.setGlobalState(R.clippingPlanes,Z),Q&&ie.viewport(Y.copy(Q)),$.length>0&&es($,q,Z),ge.length>0&&es(ge,q,Z),Me.length>0&&es(Me,q,Z),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Qr(w,q,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let it=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new Pi(1,1,{generateMipmaps:!0,type:it?Tn:Ni,minFilter:dn,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let $=E.state.transmissionRenderTarget[Q.id],ge=Q.viewport||Y;$.setSize(ge.z*R.transmissionResolutionScale,ge.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),be=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget($),R.getClearColor(ye),Ae=R.getClearAlpha(),Ae<1&&R.setClearColor(16777215,.5),R.clear(),ee&&Xe.render(Z);let Se=R.toneMapping;R.toneMapping=un;let Qe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),B===!0&&Te.setGlobalState(R.clippingPlanes,Q),es(w,Z,Q),_e.updateMultisampleRenderTarget($),_e.updateRenderTargetMipmap($),J.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ue=0,he=q.length;Ue<he;Ue++){let ft=q[Ue],{object:At,geometry:ke,material:He,group:vt}=ft;if(He.side===gi&&At.layers.test(Q.layers)){let Ct=He.side;He.side=Ti,He.needsUpdate=!0,ea(At,Z,Q,ke,He,vt),He.side=Ct,He.needsUpdate=!0,it=!0}}it===!0&&(_e.updateMultisampleRenderTarget($),_e.updateRenderTargetMipmap($))}R.setRenderTarget(Me,be,Ce),R.setClearColor(ye,Ae),Qe!==void 0&&(Q.viewport=Qe),R.toneMapping=Se}function es(w,q,Z){let Q=q.isScene===!0?q.overrideMaterial:null;for(let $=0,ge=w.length;$<ge;$++){let Me=w[$],{object:be,geometry:Ce,group:Se}=Me,Qe=Me.material;Qe.allowOverride===!0&&Q!==null&&(Qe=Q),be.layers.test(Z.layers)&&ea(be,q,Z,Ce,Qe,Se)}}function ea(w,q,Z,Q,$,ge){w.onBeforeRender(R,q,Z,Q,$,ge),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(R,q,Z,Q,w,ge),$.transparent===!0&&$.side===gi&&$.forceSinglePass===!1?($.side=Ti,$.needsUpdate=!0,R.renderBufferDirect(Z,q,Q,$,w,ge),$.side=Os,$.needsUpdate=!0,R.renderBufferDirect(Z,q,Q,$,w,ge),$.side=gi):R.renderBufferDirect(Z,q,Q,$,w,ge),w.onAfterRender(R,q,Z,Q,$,ge)}function Mi(w,q,Z){q.isScene!==!0&&(q=F);let Q=oe.get(w),$=E.state.lights,ge=E.state.shadowsArray,Me=$.state.version,be=Ie.getParameters(w,$.state,ge,q,Z),Ce=Ie.getProgramCacheKey(be),Se=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,Q.fog=q.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=Fe.get(w.envMap||Q.environment,Qe),Q.envMapRotation=Q.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Se===void 0&&(w.addEventListener("dispose",ot),Se=new Map,Q.programs=Se);let it=Se.get(Ce);if(it!==void 0){if(Q.currentProgram===it&&Q.lightsStateVersion===Me)return ts(w,be),it}else be.uniforms=Ie.getUniforms(w),w.onBeforeCompile(be,R),it=Ie.acquireProgram(be,Ce),Se.set(Ce,it),Q.uniforms=be.uniforms;let Ue=Q.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(Ue.clippingPlanes=Te.uniform),ts(w,be),Q.needsLights=(function(he){return he.isMeshLambertMaterial||he.isMeshToonMaterial||he.isMeshPhongMaterial||he.isMeshStandardMaterial||he.isShadowMaterial||he.isShaderMaterial&&he.lights===!0})(w),Q.lightsStateVersion=Me,Q.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=it,Q.uniformsList=null,it}function Ut(w){if(w.uniformsList===null){let q=w.currentProgram.getUniforms();w.uniformsList=js.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function ts(w,q){let Z=oe.get(w);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.batchingColor=q.batchingColor,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.instancingMorph=q.instancingMorph,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}Bi.setAnimationLoop(function(w){oi&&oi(w)}),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(w){oi=w,St.setAnimationLoop(w),w===null?Bi.stop():Bi.start()},St.addEventListener("sessionstart",Ka),St.addEventListener("sessionend",$a),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0)return void ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(k===!0)return;let Z=St.enabled===!0&&St.isPresenting===!0,Q=O!==null&&(W===null||Z)&&O.begin(R,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),St.enabled!==!0||St.isPresenting!==!0||O!==null&&O.isCompositing()!==!1||(St.cameraAutoUpdate===!0&&St.updateCamera(q),q=St.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,q,W),E=Nt.get(w,D.length),E.init(q),D.push(E),x.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),b.setFromProjectionMatrix(x,kn,q.reversedDepth),N=this.localClippingEnabled,B=Te.init(this.clippingPlanes,N),T=ut.get(w,C.length),T.init(),C.push(T),St.enabled===!0&&St.isPresenting===!0){let ge=R.xr.getDepthSensingMesh();ge!==null&&zi(ge,q,-1/0,R.sortObjects)}zi(w,q,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(fe,ve),ee=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,ee&&Xe.addToRenderList(T,w),this.info.render.frame++,B===!0&&Te.beginShadows();let $=E.state.shadowsArray;if(We.render($,w,q),B===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&O.hasRenderPass())===!1){let ge=T.opaque,Me=T.transmissive;if(E.setupLights(),q.isArrayCamera){let be=q.cameras;if(Me.length>0)for(let Ce=0,Se=be.length;Ce<Se;Ce++)Qr(ge,Me,w,be[Ce]);ee&&Xe.render(w);for(let Ce=0,Se=be.length;Ce<Se;Ce++){let Qe=be[Ce];br(T,w,Qe,Qe.viewport)}}else Me.length>0&&Qr(ge,Me,w,q),ee&&Xe.render(w),br(T,w,q)}W!==null&&G===0&&(_e.updateMultisampleRenderTarget(W),_e.updateRenderTargetMipmap(W)),Q&&O.end(R),w.isScene===!0&&w.onAfterRender(R,w,q),bt.resetDefaultState(),H=-1,X=null,D.pop(),D.length>0?(E=D[D.length-1],B===!0&&Te.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),T=C.length>0?C[C.length-1]:null},this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,q,Z){let Q=oe.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),oe.get(w.texture).__webglTexture=q,oe.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){let Z=oe.get(w);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0};let ki=z.createFramebuffer();this.setRenderTarget=function(w,q=0,Z=0){W=w,V=q,G=Z;let Q=null,$=!1,ge=!1;if(w){let Me=oe.get(w);if(Me.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(z.FRAMEBUFFER,Me.__webglFramebuffer),Y.copy(w.viewport),K.copy(w.scissor),ne=w.scissorTest,ie.viewport(Y),ie.scissor(K),ie.setScissorTest(ne),void(H=-1);if(Me.__webglFramebuffer===void 0)_e.setupRenderTarget(w);else if(Me.__hasExternalTextures)_e.rebindTextures(w,oe.get(w.texture).__webglTexture,oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Se=w.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&oe.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(w)}}let be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Ce=oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Q=Array.isArray(Ce[q])?Ce[q][Z]:Ce[q],$=!0):Q=w.samples>0&&_e.useMultisampledRTT(w)===!1?oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?Ce[Z]:Ce,Y.copy(w.viewport),K.copy(w.scissor),ne=w.scissorTest}else Y.copy(De).multiplyScalar(ae).floor(),K.copy(ue).multiplyScalar(ae).floor(),ne=S;if(Z!==0&&(Q=ki),ie.bindFramebuffer(z.FRAMEBUFFER,Q)&&ie.drawBuffers(w,Q),ie.viewport(Y),ie.scissor(K),ie.setScissorTest(ne),$){let Me=oe.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me.__webglTexture,Z)}else if(ge){let Me=q;for(let be=0;be<w.textures.length;be++){let Ce=oe.get(w.textures[be]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+be,Ce.__webglTexture,Z,Me)}}else if(w!==null&&Z!==0){let Me=oe.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Me.__webglTexture,Z)}H=-1},this.readRenderTargetPixels=function(w,q,Z,Q,$,ge,Me,be=0){if(!w||!w.isWebGLRenderTarget)return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){ie.bindFramebuffer(z.FRAMEBUFFER,Ce);try{let Se=w.textures[be],Qe=Se.format,it=Se.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(Qe))return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(it))return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=w.width-Q&&Z>=0&&Z<=w.height-$&&z.readPixels(q,Z,Q,$,gt.convert(Qe),gt.convert(it),ge)}finally{let Se=W!==null?oe.get(W).__webglFramebuffer:null;ie.bindFramebuffer(z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,q,Z,Q,$,ge,Me,be=0){if(!w||!w.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){if(q>=0&&q<=w.width-Q&&Z>=0&&Z<=w.height-$){ie.bindFramebuffer(z.FRAMEBUFFER,Ce);let Se=w.textures[be],Qe=Se.format,it=Se.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!re.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ue),z.bufferData(z.PIXEL_PACK_BUFFER,ge.byteLength,z.STREAM_READ),z.readPixels(q,Z,Q,$,gt.convert(Qe),gt.convert(it),0);let he=W!==null?oe.get(W).__webglFramebuffer:null;ie.bindFramebuffer(z.FRAMEBUFFER,he);let ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Lp(z,ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ge),z.deleteBuffer(Ue),z.deleteSync(ft),ge}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,q=null,Z=0){let Q=Math.pow(2,-Z),$=Math.floor(w.image.width*Q),ge=Math.floor(w.image.height*Q),Me=q!==null?q.x:0,be=q!==null?q.y:0;_e.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Me,be,$,ge),ie.unbindTexture()};let Si=z.createFramebuffer(),Hi=z.createFramebuffer();this.copyTextureToTexture=function(w,q,Z=null,Q=null,$=0,ge=0){let Me,be,Ce,Se,Qe,it,Ue,he,ft,At=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(Z!==null)Me=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Se=Z.min.x,Qe=Z.min.y,it=Z.isBox3?Z.min.z:0;else{let hi=Math.pow(2,-$);Me=Math.floor(At.width*hi),be=Math.floor(At.height*hi),Ce=w.isDataArrayTexture?At.depth:w.isData3DTexture?Math.floor(At.depth*hi):1,Se=0,Qe=0,it=0}Q!==null?(Ue=Q.x,he=Q.y,ft=Q.z):(Ue=0,he=0,ft=0);let ke=gt.convert(q.format),He=gt.convert(q.type),vt;q.isData3DTexture?(_e.setTexture3D(q,0),vt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(_e.setTexture2DArray(q,0),vt=z.TEXTURE_2D_ARRAY):(_e.setTexture2D(q,0),vt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let Ct=z.getParameter(z.UNPACK_ROW_LENGTH),Ne=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ge=z.getParameter(z.UNPACK_SKIP_PIXELS),Yt=z.getParameter(z.UNPACK_SKIP_ROWS),Qn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,At.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,At.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Se),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,it);let er=w.isDataArrayTexture||w.isData3DTexture,bi=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){let hi=oe.get(w),Gi=oe.get(q),Vt=oe.get(hi.__renderTarget),tn=oe.get(Gi.__renderTarget);ie.bindFramebuffer(z.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let nn=0;nn<Ce;nn++)er&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,oe.get(w).__webglTexture,$,it+nn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,oe.get(q).__webglTexture,ge,ft+nn)),z.blitFramebuffer(Se,Qe,Me,be,Ue,he,Me,be,z.DEPTH_BUFFER_BIT,z.NEAREST);ie.bindFramebuffer(z.READ_FRAMEBUFFER,null),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||oe.has(w)){let hi=oe.get(w),Gi=oe.get(q);ie.bindFramebuffer(z.READ_FRAMEBUFFER,Si),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hi);for(let Vt=0;Vt<Ce;Vt++)er?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hi.__webglTexture,$,it+Vt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hi.__webglTexture,$),bi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gi.__webglTexture,ge,ft+Vt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Gi.__webglTexture,ge),$!==0?z.blitFramebuffer(Se,Qe,Me,be,Ue,he,Me,be,z.COLOR_BUFFER_BIT,z.NEAREST):bi?z.copyTexSubImage3D(vt,ge,Ue,he,ft+Vt,Se,Qe,Me,be):z.copyTexSubImage2D(vt,ge,Ue,he,Se,Qe,Me,be);ie.bindFramebuffer(z.READ_FRAMEBUFFER,null),ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else bi?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(vt,ge,Ue,he,ft,Me,be,Ce,ke,He,At.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(vt,ge,Ue,he,ft,Me,be,Ce,ke,At.data):z.texSubImage3D(vt,ge,Ue,he,ft,Me,be,Ce,ke,He,At):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ge,Ue,he,Me,be,ke,He,At.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ge,Ue,he,At.width,At.height,ke,At.data):z.texSubImage2D(z.TEXTURE_2D,ge,Ue,he,Me,be,ke,He,At);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ct),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,Yt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qn),ge===0&&q.generateMipmaps&&z.generateMipmap(vt),ie.unbindTexture()},this.initRenderTarget=function(w){oe.get(w).__webglFramebuffer===void 0&&_e.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){V=0,G=0,W=null,ie.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Pu=.55,uv="./assets/hero-monkey-chase-v2.png",dv=new A(0,0,-1),pv=new A(0,1,0);function Cn(n,e,t){return Math.max(e,Math.min(t,n))}function Ha(n,e,t,i){return uu.damp(n,e,t,i)}function fv(n,e,t,i,r){let s=i*i,a=r*s,o=1/(1+2*r*i+r*a);for(let l of["x","y","z"]){let c=n[l],h=e[l];n[l]=(c*(1+2*r*i)+r*h+r*a*t[l])*o,e[l]=(h+a*(t[l]-c))*o}}function mv(n){return new Promise((e,t)=>{let i=new Image;i.decoding="async",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Unable to load player art: ${n}`)),i.src=n})}function ff(n,e,t){let i=Cn((t-n)/(e-n),0,1);return i*i*(3-2*i)}function gv(n,e){let i=Math.min(1,1280/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(2,Math.round(n.naturalWidth*i)),s=Math.max(2,Math.round(n.naturalHeight*i)),a=document.createElement("canvas");a.width=r,a.height=s;let o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("Canvas 2D is required to prepare player art.");o.drawImage(n,0,0,r,s);let l=o.getImageData(0,0,r,s),c=l.data;for(let u=0;u<c.length;u+=4){let d=c[u],p=c[u+1],m=c[u+2],f=p-Math.max(d,m),y=ff(24,92,f)*ff(72,180,p);if(y<=0)continue;c[u+3]=Math.round(c[u+3]*(1-y));let g=y*.78;c[u+1]=Math.round(p*(1-g)+Math.max(d,m)*g)}o.putImageData(l,0,0);let h=new bn(a);return h.colorSpace=_t,h.minFilter=dn,h.magFilter=ni,h.generateMipmaps=!0,h.anisotropy=Math.min(4,e?.capabilities?.getMaxAnisotropy?.()||1),h.needsUpdate=!0,h}function mf(n,e){let t=new lt;t.setAttribute("position",new Pt(new Float32Array(18),3)),t.setIndex([0,1,2,2,1,3,2,3,4,4,3,5]);let i=new at({color:n,transparent:!0,opacity:e,depthWrite:!1,side:gi,blending:Vr}),r=new we(t,i);return r.frustumCulled=!1,r}function gf(n,e,t,i){let r=n.geometry.attributes.position.array,s=Math.sin(e*12.5+t*1.7)*.055,a=.5+i*.025,o=[[-.12+t*.03,.18,.08],[-.18+t*.08,.12+s,a*.55],[-.27+t*.12,.05-s*.7,a]],l=0;for(let[c,h,u]of o)r[l++]=c-.035,r[l++]=h,r[l++]=u,r[l++]=c+.035,r[l++]=h+.025,r[l++]=u;n.geometry.attributes.position.needsUpdate=!0}function vv(){let n=new Float32Array(24),e=new lt;e.setAttribute("position",new Pt(n,3));let t=new As({color:3810327,transparent:!0,opacity:.86,depthWrite:!1}),i=new Ma(e,t);return i.frustumCulled=!1,i}function _v(n,e,t){let i=n.geometry.attributes.position.array;for(let r=0;r<8;r+=1){let s=r/7,a=Math.sin(e*5.3-s*4.8)*(.04+s*.1);i[r*3]=-.18-s*.18+a-t*s*.1,i[r*3+1]=-.29-s*.13+Math.cos(e*4.1-s*3.2)*s*.045,i[r*3+2]=.08+s*.78}n.geometry.attributes.position.needsUpdate=!0}function vf(n,e){let t=new dt;t.position.set(n*.27,.14,.055);let i=new we(e.strutGeometry,e.metalMaterial);i.rotation.z=n*-Math.PI/2,i.position.x=n*.31,t.add(i);let r=new we(e.jointGeometry,e.brassMaterial);r.position.x=n*.62,t.add(r);let s=new we(e.thrusterGeometry,e.thrusterMaterial);s.rotation.x=Math.PI/2,s.position.set(n*.62,-.015,.08),t.add(s);let a=new we(e.trailGeometry,e.trailMaterial);return a.rotation.x=Math.PI/2,a.position.set(n*.62,-.015,.31),t.add(a),t.userData.trail=a,t}async function _f({scene:n,camera:e,renderer:t,assetUrl:i=uv,mobile:r=typeof matchMedia=="function"&&matchMedia("(max-width: 700px)").matches,reducedMotion:s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}={}){if(!n||!e)throw new Error("Player visual requires a Three.js scene and camera.");let a=await mv(i),o=gv(a,t),l=new dt;l.name="playerRig";let c=new dt;c.name="playerAttitude",l.add(c);let h=new at({map:o,transparent:!0,alphaTest:.06,depthWrite:!1,side:gi,toneMapped:!0}),u=new we(new ri(1.55,1.03),h);u.name="playerHeroBillboard",u.renderOrder=5,c.add(u);let d={strutGeometry:new Ot(.018,.025,.62,6),jointGeometry:new Jt(.065,8,5),thrusterGeometry:new Ot(.045,.06,.14,7),trailGeometry:new hn(.06,.48,7,1,!0),metalMaterial:new si({color:8226181,metalness:.82,roughness:.28}),brassMaterial:new si({color:12094010,metalness:.78,roughness:.3}),thrusterMaterial:new at({color:16766571,transparent:!0,opacity:.94}),trailMaterial:new at({color:16747058,transparent:!0,opacity:.44,depthWrite:!1,side:gi,blending:Ki})},p=vf(-1,d),m=vf(1,d);c.add(p,m);let f=mf(12853285,.88),y=mf(9376024,.78);c.add(f,y);let g=vv();c.add(g);let v=new xi(16757051,r?1.4:2.1,4.5,2);v.position.set(0,-.04,.34),c.add(v),n.add(l);let M={rig:l,attitude:c,hero:u,texture:o,camera:e,collisionRadius:Pu,mobile:!!r,reducedMotion:!!s,time:0,wings:[p,m],scarves:[f,y],tail:g,engineLight:v,materials:{metal:d.metalMaterial,brass:d.brassMaterial,thruster:d.thrusterMaterial,trail:d.trailMaterial,scarves:[f.material,y.material]},cameraVelocity:new A,cameraTarget:new A,lookTarget:new A,aimForward:dv.clone(),disposed:!1};return Du(M,r),M}function Ga(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=Cn(Number.isFinite(e)?e:0,0,.05);n.time+=r;let s=Cn(t.bank??-(t.vx||0)*.08,-.52,.52),a=Cn(t.pitch??-(t.vy||0)*.045,-.36,.36),o=Cn(-(t.vx||0)*.022,-.18,.18),l=Cn(i.speed??16,8,34),c=i.active!==!1,h=c||n.reducedMotion?0:Math.sin(n.time*2.4)*.045;n.rig.position.set(t.x||0,(t.y||0)+h,t.z||0),n.attitude.rotation.x=Ha(n.attitude.rotation.x,a*.72,9,r),n.attitude.rotation.y=Ha(n.attitude.rotation.y,o,10,r),n.attitude.rotation.z=Ha(n.attitude.rotation.z,s,11,r);let u=Math.sin(n.time*(c?8.5:3.2))*(c?.055:.025);n.wings[0].rotation.z=Ha(n.wings[0].rotation.z,u,12,r),n.wings[1].rotation.z=Ha(n.wings[1].rotation.z,-u,12,r),gf(n.scarves[0],n.time,-1,l),gf(n.scarves[1],n.time+.17,1,l),_v(n.tail,n.time,s);let d=Cn(i.thrust??.55+Math.abs(t.vy||0)*.055,.35,1);n.engineLight.intensity=(n.mobile?1.3:1.9)*d,n.wings.forEach((m,f)=>{let y=m.userData.trail,g=.9+Math.sin(n.time*28+f)*.12;y.scale.set(.85+d*.25,.55+d*.7*g,.85+d*.25),y.material.opacity=.22+d*.32});let p=n.mobile?.92:1;n.attitude.scale.setScalar(p)}function Lu(n,e,t,i={}){if(!n||n.disposed||!t)return;let r=i.camera||n.camera,s=Cn(Number.isFinite(e)?e:0,0,.05),a=n.mobile&&r.aspect<.82,o=a?10.7:n.mobile?9.9:9.35,l=a?2.45:2.05,c=a?.16:.22,h=n.reducedMotion?(i.shake||0)*.12:i.shake||0,u=n.time;n.cameraTarget.set((t.x||0)*c+Math.sin(u*47.1)*h,(t.y||0)+l+Math.cos(u*41.7)*h,(t.z||0)+o),fv(r.position,n.cameraVelocity,n.cameraTarget,a?7.2:8.4,s);let d=Cn(i.lookAhead??(a?29:32),28,35);n.lookTarget.set((t.x||0)*.58,(t.y||0)+(a?1.05:.82),(t.z||0)-d),r.up.copy(pv),r.lookAt(n.lookTarget),r.rotateZ(Cn(-(t.bank||0)*.12,-.07,.07))}function Du(n,e){!n||n.disposed||(n.mobile=!!e,n.hero.scale.setScalar(n.mobile?.94:1),n.engineLight.distance=n.mobile?3.6:4.5)}function ql(n,e={}){if(!n||n.disposed)return;let t=e.airframe||"clockwork-pinions",i=e.outfit||"rescue-scarf",r=n.materials,s={"clockwork-pinions":{metal:8226181,brass:12094010,trail:16747058,scaleX:1,scaleY:1},"howler-rocket-rig":{metal:9128243,brass:14983750,trail:16734756,scaleX:.92,scaleY:1.16},"thunderbird-glider":{metal:4943731,brass:8317139,trail:5564640,scaleX:1.18,scaleY:.96}}[t];r.metal.color.setHex(s.metal),r.brass.color.setHex(s.brass),r.trail.color.setHex(s.trail),n.engineLight.color.setHex(s.trail),n.wings.forEach(o=>o.scale.set(s.scaleX,s.scaleY,1));let a={"rescue-scarf":{left:12853285,right:9376024,tint:16777215},"ace-jacket":{left:14721595,right:10313504,tint:16773592},"midnight-suit":{left:2847348,right:1457992,tint:13230559}}[i];r.scarves[0].color.setHex(a.left),r.scarves[1].color.setHex(a.right),n.hero.material.color.setHex(a.tint)}var xv=["./assets/skyline-level-1.jpg","./assets/skyline-level-2.jpg","./assets/skyline-level-3.jpg","./assets/skyline-level-4.jpg",null,null,null,null],Dt=-5.32,Mv=18,Sv=11.5,bv=10.7,Ev=7,Qi=Object.freeze([Object.freeze({id:"coastal-dawn",name:"Coastal Dawn",sky:3234661,fog:5797754,road:1582634,sidewalk:7569539,roof:4018517,metal:7440266,marking:15259544,light:8320221,beacon:16757839,facade:[5141627,6719891,5335922],windows:[11138795,16767386,7720159],minHeight:5.5,maxHeight:15,density:8}),Object.freeze({id:"industrial-amber",name:"Industrial Amber",sky:6833214,fog:7754828,road:2170657,sidewalk:6775132,roof:4209465,metal:7828330,marking:14923859,light:16761182,beacon:16736837,facade:[6051408,4937556,6706760],windows:[16761187,16747587,14279860],minHeight:4,maxHeight:12.5,density:7}),Object.freeze({id:"storm-finance-core",name:"Storm Finance Core",sky:2108731,fog:4477536,road:1120800,sidewalk:5464427,roof:2569534,metal:6320765,marking:13162457,light:8970239,beacon:16731461,facade:[3493467,4413798,2900300],windows:[10414335,14087679,8042708],minHeight:10,maxHeight:25,density:9}),Object.freeze({id:"blackout-siege",name:"Blackout Siege",sky:3086108,fog:4925740,road:1381139,sidewalk:4800317,roof:2630438,metal:5589575,marking:11044710,light:16732477,beacon:16723753,facade:[3156781,3879474,2631725],windows:[16735039,16752719,8088418],minHeight:7,maxHeight:21,density:8}),Object.freeze({id:"frozen-transit-grid",name:"Frozen Transit Grid",sky:2705232,fog:7902362,road:1581863,sidewalk:8557463,roof:4347483,metal:9413544,marking:14218482,light:7337960,beacon:16766036,facade:[5072748,7440267,3561054],windows:[13172735,7727069,16769953],minHeight:8,maxHeight:23,density:9}),Object.freeze({id:"neon-arcology",name:"Neon Arcology",sky:3157317,fog:5591914,road:1119517,sidewalk:5067616,roof:2370101,metal:6648189,marking:9369040,light:6684618,beacon:16735354,facade:[3294032,4931419,2571075],windows:[7143375,16740246,15918975],minHeight:12,maxHeight:29,density:10}),Object.freeze({id:"desert-fortress",name:"Desert Fortress",sky:7166020,fog:9467485,road:2564637,sidewalk:7695197,roof:5327424,metal:7761764,marking:15781490,light:16765791,beacon:16733248,facade:[6511697,5199699,7693650],windows:[16768899,16745552,12379080],minHeight:6,maxHeight:18,density:8}),Object.freeze({id:"skyshield-command-core",name:"Skyshield Command Core",sky:1186592,fog:3555656,road:593168,sidewalk:5331551,roof:2436401,metal:8293007,marking:15265263,light:16055295,beacon:16725039,facade:[4147534,2503739,5857895],windows:[15924223,16730947,8313071],minHeight:14,maxHeight:34,density:10})]);function Zs(n,e,t){return Math.max(e,Math.min(t,n))}function xf(n){return Zs(Math.round(Number(n)||0),0,Ev)}function Yl(n){if(typeof n=="string"){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}return Number(n)>>>0||1831565813}function Nu(n,e,t=0){let i=Yl(n)^Math.imul(e+1,2654435761)^Math.imul(t+17,2246822507);return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),(i^i>>>16)>>>0}function Uu(n){let e=Yl(n);return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Mt(n,e,t){return e+(t-e)*n()}function Mf(n,e){if(typeof document>"u")return null;let t=document.createElement("canvas");return t.width=n,t.height=e,t}function Tv(n,e,t){let i=Mf(128,256);if(!i){let f=new Re(n.facade[e]),y=new Uint8Array([f.r*255,f.g*255,f.b*255,255]),g=new Or(y,1,1);return g.needsUpdate=!0,g}let r=Uu(Nu(t,e,41)),s=i.getContext("2d"),a=new Re(n.facade[e]),o=a.clone().multiplyScalar(.48),l=a.clone().lerp(new Re(16777215),.12),c=n.windows.map(f=>new Re(f));s.fillStyle=`#${o.getHexString()}`,s.fillRect(0,0,i.width,i.height);let h=e===0?6:e===1?8:5,u=e===2?18:22,d=i.width/h,p=i.height/u;for(let f=0;f<u;f+=1)for(let y=0;y<h;y+=1){let g=y*d,v=f*p;s.fillStyle=`#${l.clone().multiplyScalar(Mt(r,.66,1.08)).getHexString()}`,s.fillRect(g+1,v+1,d-2,p-2);let M=n.id==="blackout-siege"?.16:n.id==="industrial-amber"?.5:.68,T=r()<M?c[Math.floor(r()*c.length)]:o;s.fillStyle=`#${T.clone().multiplyScalar(Mt(r,.72,1.08)).getHexString()}`;let E=e===1?3:4,C=e===2?3:2;s.fillRect(g+E,v+C,Math.max(2,d-E*2),Math.max(2,p-C*2))}if(n.id==="blackout-siege"){s.fillStyle="rgba(5, 4, 4, 0.7)";for(let f=0;f<16;f+=1){let y=Math.floor(r()*h)*d,g=Math.floor(r()*u)*p;s.fillRect(y+1,g+1,d-2,p-2)}}let m=new bn(i);return m.colorSpace=_t,m.wrapS=Nr,m.wrapT=Nr,m.repeat.set(e===1?1.5:1,e===2?1.5:2),m.needsUpdate=!0,m}function wv(n,e){let t=Mf(1024,320);if(!t)return null;let i=Uu(Nu(e,813,Qi.indexOf(n))),r=t.getContext("2d"),s=new Re(n.sky),a=new Re(n.fog).lerp(new Re(n.light),.08),o=r.createLinearGradient(0,0,0,t.height);o.addColorStop(0,`#${s.clone().multiplyScalar(.72).getHexString()}`),o.addColorStop(.66,`#${s.getHexString()}`),o.addColorStop(1,`#${a.getHexString()}`),r.fillStyle=o,r.fillRect(0,0,t.width,t.height);let l=-12;for(;l<t.width+20;){let h=Mt(i,18,54),u=Mt(i,32,n.id==="storm-finance-core"?190:128);r.fillStyle=i()<.28?"rgba(7, 12, 15, 0.76)":"rgba(15, 20, 23, 0.68)",r.fillRect(l,t.height-u,h,u),i()<.25&&r.fillRect(l+h*.42,t.height-u-Mt(i,12,55),2,Mt(i,12,55)),l+=h+Mt(i,3,13)}let c=new bn(t);return c.colorSpace=_t,c.needsUpdate=!0,c}function Ys(n){return new si({roughness:.76,metalness:.24,...n})}function yf(n,e,t,i){let r=new Br(n,e,t);return r.name=i,r.count=0,r.instanceMatrix.setUsage(Vs),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r}function li(n,e,t,i,r,s,a,o={}){n.push({x:e,y:t,z:i,sx:r,sy:s,sz:a,ry:o.ry||0,color:o.color})}function Kr(n,e,t,i,r,s,a={}){n.push({x:e,y:t,z:i,sx:r*2,sy:s,sz:r*2,ry:a.ry||0,color:a.color})}function Js(n,e,t){let i=Qi[t],r=Uu(Nu(n.seed,e,t)),s={serial:e,level:t,facade:[],roof:[],road:[],sidewalk:[],metalBox:[],metalCylinder:[],markings:[],lights:[]},a=n.corridorHalfWidth,o=n.blockSpacing;li(s.road,0,Dt+.035,0,a*2,.07,o-.08,{color:i.road}),li(s.sidewalk,-(a+.72),Dt+.11,0,1.4,.22,o-.1,{color:i.sidewalk}),li(s.sidewalk,a+.72,Dt+.11,0,1.4,.22,o-.1,{color:i.sidewalk});for(let c of[-6.2,0,6.2])for(let h of[-3.7,0,3.7])li(s.markings,c,Dt+.09,h,.12,.035,1.7,{color:i.marking});for(let c of[-1,1])for(let h of[-3.3,3.3]){let u=c*(a+.38);Kr(s.metalCylinder,u,Dt+1.5,h,.055,2.85,{color:i.metal}),li(s.metalBox,u-c*.27,Dt+2.83,h,.58,.06,.06,{color:i.metal}),li(s.lights,u-c*.52,Dt+2.8,h,.14,.12,.24,{color:i.light})}let l=i.density>=9?5:4;for(let c of[-1,1])for(let h=0;h<l;h+=1){let u=h%2,d=Mt(r,t===1?3.4:2.5,t===2?5.8:5.1),p=Mt(r,2.8,4.8),m=a+1.45+u*4.6+Mt(r,0,1.2),f=c*(m+d/2),y=Mt(r,-o*.42,o*.42),g=Mt(r,i.minHeight,i.maxHeight);t===1&&h>1&&(g*=.72),t===3&&r()<.22&&(g*=.58);let v=Math.floor(r()*3),M=Zs(g*Mt(r,.18,.28),1.2,3.4),T=g-M;s.facade.push({level:t,family:v,x:f,y:Dt+M/2,z:y,sx:d*1.14,sy:M,sz:p*1.12,ry:0});let E=t===2||g>10||r()<.42,C=E?Mt(r,.58,.74):1,D=T*C;s.facade.push({level:t,family:v,x:f,y:Dt+M+D/2,z:y,sx:d,sy:D,sz:p,ry:0});let O=Dt+M+D,R=d,k=p;if(E){let V=T-D;R=d*Mt(r,.58,.78),k=p*Mt(r,.6,.82),s.facade.push({level:t,family:(v+1)%3,x:f,y:O+V/2,z:y,sx:R,sy:V,sz:k,ry:0}),O+=V}if(li(s.roof,f,O+.11,y,R*.88,.22,k*.86,{color:i.roof}),r()<.78&&li(s.metalBox,f+Mt(r,-R*.2,R*.2),O+.35,y,R*.24,.5,k*.24,{color:i.metal}),g>11&&r()<.46){let V=Mt(r,1.1,t===2?3.8:2.5);Kr(s.metalCylinder,f,O+V/2,y,.055,V,{color:i.metal}),li(s.lights,f,O+V,y,.12,.12,.12,{color:i.beacon})}}if(t===0&&e%5===2){li(s.metalBox,0,Dt+.38,0,a*2+2.1,.36,1.6,{color:6583673});for(let c of[-1,1])Kr(s.metalCylinder,c*(a+.32),Dt+.18,0,.25,.7,{color:4939362})}if(t===1)for(let c of[-1,1]){let h=c*(a+8.4+Mt(r,0,3));if(e%2===0){let u=Mt(r,7,13);Kr(s.metalCylinder,h,Dt+u/2,Mt(r,-3,3),.52,u,{color:6643288}),li(s.lights,h,Dt+u+.15,0,.22,.22,.22,{color:i.beacon})}else Kr(s.metalCylinder,h,Dt+1.15,Mt(r,-3,3),1.6,2.3,{color:7433314})}if(t===3&&e%3===0)for(let c of[-1,1]){let h=c*(a+Mt(r,4.5,10));li(s.lights,h,Dt+Mt(r,1.2,5),Mt(r,-4,4),Mt(r,.35,.75),Mt(r,.6,1.4),.35,{color:r()<.5?16727331:16751157})}if(t===4&&e%3===1){li(s.metalBox,0,Dt+5.8,0,a*2+3,.32,1.1,{color:i.metal});for(let c of[-1,1])Kr(s.metalCylinder,c*(a+.8),Dt+2.9,0,.18,5.8,{color:i.metal})}if(t===5)for(let c of[-1,1])li(s.lights,c*(a+2.2),Dt+4.8+e%3,0,.16,5.5,.16,{color:e%2?i.light:i.beacon});if(t===6&&e%2===0)for(let c of[-1,1]){let h=c*(a+3.4);li(s.metalBox,h,Dt+3.2,0,2.4,6.4,2.4,{color:i.metal}),li(s.lights,h,Dt+6.55,0,.3,.3,.3,{color:i.beacon})}if(t===7){let c=9+e%4*2.2;for(let h of[-1,1]){let u=h*(a+4.8+e%2*2.4);Kr(s.metalCylinder,u,Dt+c/2,0,.7,c,{color:i.metal}),li(s.lights,u,Dt+c,0,.42,.42,.42,{color:i.beacon})}}return s}function Av(n,e,t,i,r,s){r.position.set(t.x,t.y,i+t.z),r.rotation.set(0,t.ry||0,0),r.scale.set(t.sx,t.sy,t.sz),r.updateMatrix(),n.setMatrixAt(e,r.matrix),t.color!==void 0&&(s.setHex(t.color),n.setColorAt(e,s))}function Ks(n){let e=new Map;for(let s of n.instanceMeshes)s.count=0,e.set(s,0);let t=n.dummy,i=n.color,r=(s,a,o)=>{let l=e.get(s);l>=s.instanceMatrix.count||(Av(s,l,a,o,t,i),e.set(s,l+1))};n.blocks.forEach((s,a)=>{let o=n.frontZ-a*n.blockSpacing;for(let l of s.facade)r(n.facadeMeshes[l.level][l.family],l,o);for(let l of s.roof)r(n.meshes.roof,l,o);for(let l of s.road)r(n.meshes.road,l,o);for(let l of s.sidewalk)r(n.meshes.sidewalk,l,o);for(let l of s.metalBox)r(n.meshes.metalBox,l,o);for(let l of s.metalCylinder)r(n.meshes.metalCylinder,l,o);for(let l of s.markings)r(n.meshes.markings,l,o);for(let l of s.lights)r(n.meshes.lights,l,o)});for(let s of n.instanceMeshes)s.count=e.get(s),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);n.stats.instances=[...e.values()].reduce((s,a)=>s+a,0)}function Cv(n,e,t,i){let r=n.backdropUrls[e];!r||!n.textureLoader||n.textureLoader.load(r,s=>{if(n.disposed||i!==n.backdropTokens[t]){s.dispose();return}s.colorSpace=_t,s.minFilter=dn;let a=n.backdropMaterials[t].map;n.backdropMaterials[t].map=s,n.backdropMaterials[t].needsUpdate=!0,n.externalTextures.add(s),a&&n.generatedTextures.delete(a)&&a.dispose(),a&&n.externalTextures.delete(a)&&a.dispose()},void 0,()=>{})}function Sf(n,e,t){let i=wv(Qi[e],n.seed);if(i){let r=n.backdropMaterials[t].map;n.generatedTextures.add(i),n.backdropMaterials[t].map=i,n.backdropMaterials[t].needsUpdate=!0,r&&n.generatedTextures.delete(r)&&r.dispose(),r&&n.externalTextures.delete(r)&&r.dispose()}n.backdropTokens[t]+=1,Cv(n,e,t,n.backdropTokens[t])}function Rv(n,e){let t=n.transition;if(!t)return;t.elapsed=Math.min(t.duration,t.elapsed+e);let i=t.duration<=0?1:t.elapsed/t.duration,r=i*i*(3-2*i),s=n.backdropMaterials[t.fromSlot],a=n.backdropMaterials[t.toSlot];s.opacity=1-r,a.opacity=r;let o=Math.ceil(i*n.blockCount),l=t.rethemed;for(;l<o;){let c=!1;for(let h=n.blocks.length-1;h>=0;h-=1)if(n.blocks[h].level!==t.toLevel){n.blocks[h]=Js(n,n.blocks[h].serial,t.toLevel),c=!0;break}if(l+=1,!c)break}if(l!==t.rethemed&&(t.rethemed=l,Ks(n)),n.environmentMix=r,n.onThemeMix?.({fromLevel:t.fromLevel,toLevel:t.toLevel,mix:r,from:Qi[t.fromLevel],to:Qi[t.toLevel]}),i>=1){for(let c=0;c<n.blocks.length;c+=1)n.blocks[c].level!==t.toLevel&&(n.blocks[c]=Js(n,n.blocks[c].serial,t.toLevel));Ks(n),n.level=t.toLevel,n.targetLevel=t.toLevel,n.activeBackdropSlot=t.toSlot,s.opacity=0,a.opacity=1,n.transition=null,n.environmentMix=1}}function Iv(n){let e=n.blockCount*5*2*3,t=n.blockCount*48,i=n.blockCount*32,r=new Lt(1,1,1),s=new Ot(.5,.5,1,8,1,!1),a=new ri(340,205,1,1);n.geometries.add(r),n.geometries.add(s),n.geometries.add(a),n.facadeMeshes=Qi.map((l,c)=>l.facade.map((h,u)=>{let d=Tv(l,u,n.seed);n.generatedTextures.add(d);let p=Ys({color:h,map:d,emissiveMap:d,emissive:new Re(l.windows[0]).multiplyScalar(c===3?.08:.14),emissiveIntensity:c===3?.24:.46});n.materials.add(p);let m=yf(r,p,e,`city-facade-${c}-${u}`);return n.instanceMeshes.push(m),n.movingRoot.add(m),m}));let o=(l,c,h,u)=>{n.materials.add(h);let d=yf(c,h,u,l);return n.instanceMeshes.push(d),n.movingRoot.add(d),d};n.meshes={roof:o("city-rooftops",r,Ys({color:16777215,vertexColors:!0,roughness:.92,metalness:.08}),t),road:o("city-roads",r,Ys({color:16777215,vertexColors:!0,roughness:.98,metalness:.02}),n.blockCount*2),sidewalk:o("city-sidewalks",r,Ys({color:16777215,vertexColors:!0,roughness:.9,metalness:.04}),n.blockCount*4),metalBox:o("city-mechanical-boxes",r,Ys({color:16777215,vertexColors:!0,roughness:.58,metalness:.54}),t),metalCylinder:o("city-cylinders",s,Ys({color:16777215,vertexColors:!0,roughness:.55,metalness:.58}),i),markings:o("city-road-markings",r,new at({color:16777215,vertexColors:!0}),n.blockCount*12),lights:o("city-practical-lights",r,new at({color:16777215,vertexColors:!0,toneMapped:!1}),t)},n.backdropMaterials=[0,1].map(()=>{let l=new at({color:16777215,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:gi});return n.materials.add(l),l}),n.backdropMeshes=n.backdropMaterials.map((l,c)=>{let h=new we(a,l);return h.name=`city-distant-skyline-${c}`,h.position.set(0,15,-176-c*.08),h.renderOrder=-5+c,n.backdropRoot.add(h),h}),Sf(n,n.level,0),n.backdropMaterials[0].opacity=1}function bf(n={}){let e=Zs(Math.floor(n.blockCount||Mv),10,24),t=Zs(Number(n.blockSpacing)||Sv,9,16),i=Math.max(bv,Number(n.corridorHalfWidth)||0),r=xf(n.level),s=new dt;s.name="streamed-city";let a=new dt;a.name="streamed-city-blocks";let o=new dt;o.name="streamed-city-backdrops",s.add(o,a);let l={root:s,movingRoot:a,backdropRoot:o,scene:n.scene||null,blockCount:e,blockSpacing:t,corridorHalfWidth:i,frontZ:Number(n.frontZ)||18,seed:Yl(n.seed),speed:Math.max(0,Number(n.speed)||16),level:r,targetLevel:r,scroll:0,nextSerial:e,blocks:[],transition:null,environmentMix:1,activeBackdropSlot:0,backdropTokens:[0,0],backdropUrls:Array.isArray(n.backdropUrls)?n.backdropUrls.slice(0,Qi.length):xv.slice(),textureLoader:typeof document>"u"?null:new jn,onThemeMix:typeof n.onThemeMix=="function"?n.onThemeMix:null,geometries:new Set,materials:new Set,generatedTextures:new Set,externalTextures:new Set,instanceMeshes:[],facadeMeshes:[],meshes:{},backdropMaterials:[],backdropMeshes:[],dummy:new qt,color:new Re,disposed:!1,stats:{drawCalls:0,instances:0,blocks:e}};Iv(l);for(let h=0;h<e;h+=1)l.blocks.push(Js(l,h,r));Ks(l),l.stats.drawCalls=l.instanceMeshes.length+l.backdropMeshes.length,l.scene?.add(s);let c={root:s,get level(){return l.level},get targetLevel(){return l.targetLevel},get seed(){return l.seed},update(h,u){return Pv(c,h,u)},setLevel(h,u){return Lv(c,h,u)},setSeed(h,u){return Dv(c,h,u)},getEnvironment(){return Ef(c)},getStats(){return{...l.stats}},dispose(){Nv(c)}};return Object.defineProperty(c,"_cityState",{value:l}),c}function Zl(n){let e=n?._cityState;return!e||e.disposed?null:e}function Pv(n,e,t={}){let i=Zl(n);if(!i)return null;let r=Zs(Number(e)||0,0,.1),s=typeof t=="number"?t:t.speed,a=Math.max(0,Number.isFinite(s)?s:i.speed);i.speed=a,i.scroll+=a*r;let o=!1;for(;i.scroll>=i.blockSpacing;)i.scroll-=i.blockSpacing,i.blocks.shift(),i.blocks.push(Js(i,i.nextSerial,i.targetLevel)),i.nextSerial+=1,o=!0;return i.movingRoot.position.z=i.scroll,o&&Ks(i),Rv(i,r),Ef(n)}function Lv(n,e,t={}){let i=Zl(n);if(!i)return!1;let r=xf(e);if(r===i.targetLevel&&!t.immediate)return!1;let s=!!t.immediate,a=Zs(Number(t.duration)||2.8,.4,8),o=i.transition?.toLevel??i.level,l=i.activeBackdropSlot,c=1-l;return i.targetLevel=r,Sf(i,r,c),s?(i.blocks=i.blocks.map(h=>Js(i,h.serial,r)),i.level=r,i.targetLevel=r,i.transition=null,i.backdropMaterials[l].opacity=0,i.backdropMaterials[c].opacity=1,i.activeBackdropSlot=c,i.environmentMix=1,Ks(i),i.onThemeMix?.({fromLevel:r,toLevel:r,mix:1,from:Qi[r],to:Qi[r]}),!0):(i.backdropMaterials[l].opacity=1,i.backdropMaterials[c].opacity=0,i.transition={fromLevel:o,toLevel:r,fromSlot:l,toSlot:c,elapsed:0,duration:a,rethemed:0},!0)}function Dv(n,e,t={}){let i=Zl(n);if(!i)return!1;let r=Yl(e);if(r===i.seed&&t.regenerate!==!0)return!1;if(i.seed=r,i.nextSerial=i.blockCount,t.regenerate!==!1){i.blocks=[];for(let s=0;s<i.blockCount;s+=1)i.blocks.push(Js(i,s,i.targetLevel));i.scroll=0,i.movingRoot.position.z=0,Ks(i)}return!0}function Ef(n){let e=Zl(n);if(!e)return null;if(!e.transition){let o=Qi[e.targetLevel];return{level:e.targetLevel,mix:1,sky:o.sky,fog:o.fog,light:o.light,theme:o}}let{fromLevel:t,toLevel:i}=e.transition,r=e.environmentMix,s=Qi[t],a=Qi[i];return{level:i,mix:r,sky:new Re(s.sky).lerp(new Re(a.sky),r).getHex(),fog:new Re(s.fog).lerp(new Re(a.fog),r).getHex(),light:new Re(s.light).lerp(new Re(a.light),r).getHex(),theme:a}}function Nv(n){let e=n?._cityState;if(!(!e||e.disposed)){e.disposed=!0,e.backdropTokens[0]+=1,e.backdropTokens[1]+=1,e.root.parent?.remove(e.root);for(let t of e.geometries)t.dispose();for(let t of e.materials)t.dispose();for(let t of e.generatedTextures)t.dispose();for(let t of e.externalTextures)t.dispose();e.blocks.length=0,e.instanceMeshes.length=0,e.generatedTextures.clear(),e.externalTextures.clear(),e.materials.clear(),e.geometries.clear()}}var Uv=Object.freeze([Object.freeze({id:"patrol",roster:Object.freeze(["f16","fa18"]),weights:Object.freeze({formation:52,intercept:30,missileSortie:12,flankingRun:6}),baseAircraft:2,maxAircraft:3,maxMissiles:1,missileSalvo:1,speedScale:.94,recovery:Object.freeze([3.1,4.2]),warningLead:Object.freeze([2.2,2.7])}),Object.freeze({id:"intercept",roster:Object.freeze(["f16","fa18","a10"]),weights:Object.freeze({formation:34,intercept:34,missileSortie:20,flankingRun:12}),baseAircraft:2,maxAircraft:4,maxMissiles:1,missileSalvo:1,speedScale:1.04,recovery:Object.freeze([2.6,3.7]),warningLead:Object.freeze([1.9,2.45])}),Object.freeze({id:"missile-lock",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:24,intercept:25,missileSortie:34,flankingRun:17}),baseAircraft:3,maxAircraft:5,maxMissiles:2,missileSalvo:1,speedScale:1.13,recovery:Object.freeze([2.2,3.2]),warningLead:Object.freeze([1.55,2.15])}),Object.freeze({id:"overdrive",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:20,intercept:23,missileSortie:34,flankingRun:23}),baseAircraft:3,maxAircraft:6,maxMissiles:3,missileSalvo:1,speedScale:1.24,recovery:Object.freeze([1.8,2.8]),warningLead:Object.freeze([1.25,1.85])}),Object.freeze({id:"crossfire",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:16,intercept:20,missileSortie:44,flankingRun:20}),baseAircraft:3,maxAircraft:7,maxMissiles:4,missileSalvo:2,speedScale:1.3,recovery:Object.freeze([1.65,2.45]),warningLead:Object.freeze([1.2,1.72])}),Object.freeze({id:"tempest",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:13,intercept:18,missileSortie:49,flankingRun:20}),baseAircraft:4,maxAircraft:7,maxMissiles:5,missileSalvo:2,speedScale:1.36,recovery:Object.freeze([1.55,2.25]),warningLead:Object.freeze([1.18,1.62])}),Object.freeze({id:"killbox",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:10,intercept:16,missileSortie:54,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:6,missileSalvo:2,speedScale:1.42,recovery:Object.freeze([1.45,2.05]),warningLead:Object.freeze([1.15,1.55])}),Object.freeze({id:"last-stand",roster:Object.freeze(["f16","fa18","f22","a10"]),weights:Object.freeze({formation:8,intercept:14,missileSortie:58,flankingRun:20}),baseAircraft:4,maxAircraft:8,maxMissiles:7,missileSalvo:3,speedScale:1.48,recovery:Object.freeze([1.4,1.9]),warningLead:Object.freeze([1.15,1.48])})]),Va=Object.freeze({FORMATION:"formation",INTERCEPT:"intercept",MISSILE_SORTIE:"missileSortie",FLANKING_RUN:"flankingRun"});var Fv=Object.freeze({encounterStart:"onEncounterStart",aircraftSpawn:"onAircraftSpawn",missileWarning:"onMissileWarning",missileLaunch:"onMissileLaunch",recoveryStart:"onRecoveryStart",recoveryEnd:"onRecoveryEnd",levelChange:"onLevelChange",actionSkipped:"onActionSkipped"}),fn=(n,e,t)=>Math.max(e,Math.min(t,n)),$s=(n,e)=>Number.isFinite(n)?n:e;function Tf(n){if(typeof n=="number"&&Number.isFinite(n))return n>>>0;let e=String(n??"monkey-no-fly-zone"),t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function Ov(n=7646257){let e=Tf(n)||1831565813,t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return t.getState=()=>e,t.setState=i=>{e=Tf(i)||1831565813},t}function Bv(n){if(typeof n!="function")throw new TypeError("CombatDirector rng must be a function.");return()=>fn($s(n(),.5),0,.999999999999)}function zv(n,e){let t=[...n];for(let i=t.length-1;i>0;i-=1){let r=Math.floor(e()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}var Le,Jl,Ui,Ou,wf,Kl,$l,Bu,Wa,Af,Cf,Rf,If,Ql,Zn,Fu=class{constructor({seed:e=7646257,rng:t=Ov(e),levels:i=Uv,callbacks:r={},initialDelay:s=1.1,warningLeadFloor:a=1.15,spawnRetryDelay:o=.3,maxSpawnRetries:l=4}={}){pd(this,Le);if(!Array.isArray(i)||i.length===0)throw new TypeError("CombatDirector requires level patterns.");this.random=Bv(t),this.levels=i,this.callbacks=r,this.initialDelay=Math.max(0,s),this.warningLeadFloor=Math.max(.8,a),this.spawnRetryDelay=Math.max(.05,o),this.maxSpawnRetries=Math.max(0,Math.floor(l)),this.queue=[],this.cancelledMissiles=new Set,this.serial=0,this.reset()}reset({levelIndex:e=0,delay:t=this.initialDelay}={}){return this.time=0,this.survivalTime=0,this.levelIndex=fn(Math.floor(e),0,this.levels.length-1),this.state="idle",this.running=!1,this.queue.length=0,this.cancelledMissiles.clear(),this.nextWindowAt=Math.max(0,t),this.currentEncounter=null,this.stats={encounters:0,aircraftRequested:0,missilesRequested:0,actionsSkipped:0},this}start(e={}){return e.levelIndex!=null&&this.setLevel(e.levelIndex,{clearSchedule:!0}),e.delay!=null&&(this.nextWindowAt=this.time+Math.max(0,e.delay)),this.running=!0,this}stop({clearSchedule:e=!1}={}){return this.running=!1,e&&(this.queue.length=0,this.currentEncounter=null,this.state="idle"),this}setLevel(e,{clearSchedule:t=!1}={}){let i=fn(Math.floor(e),0,this.levels.length-1);return i===this.levelIndex&&!t?this:(this.levelIndex=i,t&&(this.queue.length=0,this.cancelledMissiles.clear(),this.currentEncounter=null,this.state="idle",this.nextWindowAt=this.time+.65),Ve(this,Le,Zn).call(this,"levelChange",{levelIndex:i,level:this.levels[i]}),this)}update(e,t={}){if(!this.running||!Number.isFinite(e)||e<=0)return this.snapshot();let i=Math.min(e,.25);for(this.time+=i,this.survivalTime+=i,this.state==="idle"&&this.time>=this.nextWindowAt&&Ve(this,Le,Bu).call(this,null,t);this.queue.length&&this.queue[0].at<=this.time;){let r=this.queue.shift();Ve(this,Le,Rf).call(this,r,t)}return this.snapshot()}forceEncounter(e,t={}){if(!Object.values(Va).includes(e))throw new RangeError(`Unknown encounter type: ${e}`);return this.queue.length=0,Ve(this,Le,Bu).call(this,e,t),this.currentEncounter}snapshot(){return Object.freeze({time:this.time,levelIndex:this.levelIndex,levelId:this.levels[this.levelIndex].id,state:this.state,encounter:this.currentEncounter?{...this.currentEncounter}:null,queuedActions:this.queue.length,nextWindowIn:Math.max(0,this.nextWindowAt-this.time),stats:{...this.stats}})}};Le=new WeakSet,Jl=function(e){let t=this.levels[this.levelIndex],i=fn(this.survivalTime/180,0,.42),r=fn($s(e.difficulty,0),-.25,.5);return{scalar:fn(.82+this.levelIndex*.12+i+r,.7,1.65),maxAircraft:Math.max(1,Math.floor($s(e.maxAircraft,t.maxAircraft))),maxMissiles:Math.max(0,Math.floor($s(e.maxMissiles,t.maxMissiles))),activeAircraft:Math.max(0,Math.floor($s(e.activeAircraft,0))),activeMissiles:Math.max(0,Math.floor($s(e.activeMissiles,0)))}},Ui=function(e,t){return e+(t-e)*this.random()},Ou=function(e){return e[Math.floor(this.random()*e.length)]},wf=function(e){let t=Object.entries(e).filter(([,s])=>s>0),i=t.reduce((s,[,a])=>s+a,0),r=this.random()*i;for(let[s,a]of t)if(r-=a,r<=0)return s;return t.at(-1)?.[0]||Va.FORMATION},Kl=function(e){return this.serial+=1,`${e}-${this.serial}`},$l=function(e,t,i={}){this.queue.push({at:this.time+Math.max(0,e),kind:t,payload:i,retries:0}),this.queue.sort((r,s)=>r.at-s.at)},Bu=function(e,t){let i=this.levels[this.levelIndex],r=Ve(this,Le,Jl).call(this,t),s=e||Ve(this,Le,wf).call(this,i.weights),a=Ve(this,Le,Kl).call(this,"encounter"),o=Ve(this,Le,Cf).call(this,s,a,i,r);this.currentEncounter=Object.freeze({encounterId:a,type:s,levelIndex:this.levelIndex,duration:o.duration}),this.state="encounter",this.stats.encounters+=1,Ve(this,Le,Zn).call(this,"encounterStart",{encounterId:a,encounterType:s,levelIndex:this.levelIndex,duration:o.duration,difficulty:r.scalar});for(let l of o.actions)Ve(this,Le,$l).call(this,l.at,l.kind,l.payload);Ve(this,Le,$l).call(this,o.duration,"recoveryStart",{encounterId:a,encounterType:s,recovery:o.recovery})},Wa=function(e,t,i,r={}){return{entityId:Ve(this,Le,Kl).call(this,"aircraft"),encounterId:e,typeHint:Ve(this,Le,Ou).call(this,t.roster),role:"interceptor",lane:Math.floor(this.random()*3),altitude:Ve(this,Le,Ui).call(this,-1.4,5),spawnZ:-82,speedScale:t.speedScale*Ve(this,Le,Ui).call(this,.94,1.08)*i.scalar,behavior:"intercept",phase:Ve(this,Le,Ui).call(this,0,Math.PI*2),amplitude:Ve(this,Le,Ui).call(this,.75,1.8),...r}},Af=function(e,t,i,r,s,a){let o=Ve(this,Le,Kl).call(this,"missile"),[l,c]=i.warningLead,h=Ve(this,Le,Ui).call(this,l,c)/fn(r.scalar,.9,1.35),u=Math.max(this.warningLeadFloor,h);return[{at:s,kind:"missileWarning",payload:{missileId:o,encounterId:e,sourceEntityId:t,leadTime:u,bearingHint:a,severity:this.levelIndex+1}},{at:s+u,kind:"missileLaunch",payload:{missileId:o,encounterId:e,sourceEntityId:t,speedScale:fn(.92+r.scalar*.2,1,1.28),guidanceScale:fn(.88+r.scalar*.16,.96,1.18),lifetime:5.5}}]},Cf=function(e,t,i,r){let s=[],a=Math.max(1,r.maxAircraft-r.activeAircraft),o=zv([0,1,2],this.random),l=5;if(e===Va.FORMATION){let d=Math.min(a,fn(i.baseAircraft+(this.random()<.38?1:0),2,4)),p=Ve(this,Le,Ou).call(this,["vee","echelon","stack"]);for(let m=0;m<d;m+=1){let f=o[m%o.length];s.push({at:m*Ve(this,Le,Ui).call(this,.42,.7),kind:"aircraftSpawn",payload:Ve(this,Le,Wa).call(this,t,i,r,{role:p,lane:f,altitude:.2+(p==="stack"?m*1.25:m%2?1.5:0),spawnZ:-82-m*7,behavior:p==="vee"?"intercept":"sweep"})})}l=4.7+d*.62}else if(e===Va.INTERCEPT){let d=Math.min(a,this.levelIndex>=2&&this.random()<.5?2:1);for(let p=0;p<d;p+=1)s.push({at:p*.8,kind:"aircraftSpawn",payload:Ve(this,Le,Wa).call(this,t,i,r,{role:"high-speed-intercept",lane:o[p],altitude:Ve(this,Le,Ui).call(this,-.5,4.8),spawnZ:-90-p*9,speedScale:i.speedScale*r.scalar*Ve(this,Le,Ui).call(this,1.08,1.2),behavior:this.random()<.55?"dive":"intercept"})});l=5.1+d*.7}else if(e===Va.MISSILE_SORTIE){let d=Math.min(a,1+(this.levelIndex>=3?1:0)+(this.levelIndex>=6&&this.random()<.55?1:0)),p=Math.max(0,r.maxMissiles-r.activeMissiles),m=0;for(let f=0;f<d;f+=1){let y=Ve(this,Le,Wa).call(this,t,i,r,{role:"missile-carrier",lane:o[f],altitude:Ve(this,Le,Ui).call(this,1.2,5),spawnZ:-88-f*11,behavior:"missile-sortie",missileCarrier:!0});s.push({at:f*1.05,kind:"aircraftSpawn",payload:y});let g=Math.max(1,Math.floor(i.missileSalvo||1));for(let v=0;v<g&&m<p;v+=1)s.push(...Ve(this,Le,Af).call(this,t,y.entityId,i,r,2.1+f*1.1+v*.78,y.lane===0?"left":y.lane===2?"right":"ahead")),m+=1}l=6.4+d*.8+Math.max(0,(i.missileSalvo||1)-1)*.78}else{let d=Math.min(a,2+(this.levelIndex>=3&&this.random()<.4?1:0)),p=[0,2,this.random()<.5?0:2];for(let m=0;m<d;m+=1){let f=p[m];s.push({at:m<2?m*.18:1.05,kind:"aircraftSpawn",payload:Ve(this,Le,Wa).call(this,t,i,r,{role:f===0?"left-flanker":"right-flanker",lane:f,altitude:Ve(this,Le,Ui).call(this,-.8,4.3),spawnZ:-78-m*6,speedScale:i.speedScale*r.scalar*1.07,behavior:"flank",amplitude:Ve(this,Le,Ui).call(this,1.6,2.5)})})}l=5.8+d*.55}let[c,h]=i.recovery,u=Math.max(1.35,Ve(this,Le,Ui).call(this,c,h)/fn(r.scalar,.9,1.3));return{actions:s,duration:l,recovery:u}},Rf=function(e,t){if(e.kind==="aircraftSpawn"){let i=Ve(this,Le,Jl).call(this,t);if(i.activeAircraft>=i.maxAircraft){Ve(this,Le,If).call(this,e,"aircraft-cap");return}this.stats.aircraftRequested+=1,Ve(this,Le,Zn).call(this,"aircraftSpawn",e.payload);return}if(e.kind==="missileWarning"){let i=Ve(this,Le,Jl).call(this,t);if(i.activeMissiles>=i.maxMissiles){this.cancelledMissiles.add(e.payload.missileId),Ve(this,Le,Ql).call(this,e,"missile-cap");return}Ve(this,Le,Zn).call(this,"missileWarning",e.payload)===!1&&this.cancelledMissiles.add(e.payload.missileId);return}if(e.kind==="missileLaunch"){if(this.cancelledMissiles.delete(e.payload.missileId)){Ve(this,Le,Ql).call(this,e,"warning-rejected");return}this.stats.missilesRequested+=1,Ve(this,Le,Zn).call(this,"missileLaunch",e.payload);return}if(e.kind==="recoveryStart"){this.state="recovery",Ve(this,Le,Zn).call(this,"recoveryStart",e.payload),Ve(this,Le,$l).call(this,e.payload.recovery,"recoveryEnd",e.payload);return}e.kind==="recoveryEnd"&&(this.state="idle",this.currentEncounter=null,this.nextWindowAt=this.time,Ve(this,Le,Zn).call(this,"recoveryEnd",e.payload))},If=function(e,t){if(e.retries>=this.maxSpawnRetries){Ve(this,Le,Ql).call(this,e,t);return}e.retries+=1,e.at=this.time+this.spawnRetryDelay,this.queue.push(e),this.queue.sort((i,r)=>i.at-r.at)},Ql=function(e,t){this.stats.actionsSkipped+=1,Ve(this,Le,Zn).call(this,"actionSkipped",{kind:e.kind,reason:t,payload:e.payload})},Zn=function(e,t){let i=Object.freeze({...t,type:e,time:this.time,levelIndex:this.levelIndex}),r=this.callbacks.onEvent?.(i);return!(this.callbacks[Fv[e]]?.(i)===!1||r===!1)};function Pf(n){return new Fu(n)}var ec=56,tc=7.05,zu=14.4,_i=Object.freeze(["./assets/voices/01-skyshield-breach.mp3","./assets/voices/02-earth-loses-sky.mp3","./assets/voices/03-rescue-ace.mp3","./assets/voices/04-direction.mp3","./assets/voices/05-office.mp3","./assets/voices/06-found-you.mp3","./assets/voices/07-first-wings.mp3","./assets/voices/08-invisible-pilot.mp3","./assets/voices/09-recognition.mp3","./assets/voices/10-mission.mp3","./assets/voices/11-open-armory.mp3","./assets/voices/12-why-bananas.mp3","./assets/voices/13-armory-response.mp3","./assets/voices/14-potassium.mp3"]);function ic(n){let e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}function ku(){let n=new dt,e=new si({color:5661546,metalness:.82,roughness:.3}),t=new we(new Ot(.09,.16,1.25,7),e);t.rotation.x=Math.PI/2,n.add(t);let i=new we(new Lt(1.1,.035,.36),e);i.position.z=.08,n.add(i);let r=new we(new Lt(.48,.03,.2),e);r.position.z=.48,n.add(r);let s=new xi(16736050,2.4,3);return s.position.z=.7,n.add(s),n}function kv(n=17){let e=new dt,t=n>>>0,i=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=new si({color:1319465,emissive:1523526,emissiveIntensity:.44,metalness:.28,roughness:.78});for(let s=0;s<52;s+=1){let a=1.1+i()*5.5,o=new we(new Lt(.7+i()*1.1,a,.7+i()*1.1),r),l=s%2?-1:1;o.position.set(l*(2.3+i()*7.5),a*.5-1.2,-s*.9+i()*2),e.add(o)}return e.userData.material=r,e}function Lf(n){let e=new jn().load(n);e.colorSpace=_t;let t=new at({map:e,transparent:!0,toneMapped:!1}),i=new we(new ri(4.35,5.35),t);return i.position.set(0,1.25,-4),i.visible=!1,{mesh:i,texture:e,material:t}}function Hv(){let n=new dt,e=new we(new Jt(2.25,24,16),new at({color:4774096,wireframe:!0,transparent:!0,opacity:.38}));n.add(e);let t=new at({color:16729661,transparent:!0,opacity:.8});[0,1,2].forEach(s=>{let a=new we(new Ji(3+s*.18,.018,5,72),t);a.rotation.set(Math.PI*(.18+s*.19),Math.PI*(.1+s*.24),0),n.add(a)});let i=new at({color:16735304});return[[-1.4,1.2,1.3],[1.6,.65,1.25],[.5,-1.65,1.3],[-1.7,-.7,-1.15],[1.35,1.45,-1.15]].forEach(s=>{let a=new we(new Jt(.09,8,6),i);a.position.set(...s),n.add(a)}),n.position.set(0,1.25,-5.5),n.userData.shell=e,n}function Gv(){let n=new dt,e=new at({color:16727350,transparent:!0,opacity:.72}),t=new we(new Ji(1.65,.075,8,48),e),i=new we(new Lt(3.5,.14,.08),e);return i.rotation.z=-Math.PI/4,n.add(t,i),n.position.set(0,1.3,-4.4),n.visible=!1,n}function Df({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onChoice:s=()=>{},onComplete:a=()=>{}}={}){if(!n)return null;let o=new _r({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches,alpha:!1});o.outputColorSpace=_t,o.toneMapping=qn,o.toneMappingExposure=1.05;let l=new Vn;l.background=new Re(133131),l.fog=new Gn(463642,.035);let c=new Gt(52,1,.1,140),h=kv();l.add(h);let u=Hv(),d=Gv();l.add(u,d);let p=new we(new ri(30,120),new si({color:330253,metalness:.55,roughness:.62}));p.rotation.x=-Math.PI/2,p.position.set(0,-1.2,-34),l.add(p);let m=new Xn(7985364,197894,1.5),f=new xi(16729144,0,24,2);f.position.set(-2,4,-12),l.add(m,f);let y=[ku(),ku(),ku()];y.forEach((ue,S)=>{ue.position.set(-9-S*2.4,3.4+S*.7,-8-S*5),ue.scale.setScalar(.78+S*.1),l.add(ue)});let g=new we(new Jt(.55,14,9),new at({color:16747580,transparent:!0,opacity:0}));g.position.set(-2.4,2.1,-13),l.add(g);let v=Lf(e),M=Lf(t);l.add(v.mesh,M.mesh);let T=new we(new ri(5.05,6.05),new at({color:864052,transparent:!0,opacity:.72}));T.position.set(0,1.25,-4.18),T.visible=!1,l.add(T);let E=new mr([new A(0,2.4,14),new A(.8,1.65,5),new A(-1.5,2.1,-5),new A(1.2,2.8,-13)]),C=new A,D=new Set,O=!1,R=!1,k=!1,V=!1,G=0,W=0,H=0,X=-1,Y=[{at:0,speaker:"Emergency broadcast",text:"At 04:17, Black Flag uploaded a command virus during a global defense drill.",voice:_i[0],subject:"globe",telemetry:["SKYSHIELD DRILL // ACTIVE","COMMAND VIRUS // UPLOADED"]},{at:tc,speaker:"Emergency broadcast",text:"Skyshield seized every connected aircraft and turned Earth's defenses against its cities.",voice:_i[1],subject:"city",telemetry:["IFF DATABASE // REWRITTEN","DEFENSE FLEET // HOSTILE"]},{at:zu,speaker:"Commander Vesper",text:"I know one pilot it never studied. Project Canopy's analog rescue ace.",voice:_i[2],subject:"vesper",telemetry:["PROJECT CANOPY // OFF-GRID","RESCUE ACE // WINGTAIL"]},{at:21.1,speaker:"Wingtail",text:"You forgot my excellent sense of direction.",voice:_i[3],subject:"wingtail",telemetry:["CANOPY RESCUES // 47","UNAUTHORIZED LANDINGS // 12"]},{at:24.05,speaker:"Commander Vesper",text:"You landed in my office.",voice:_i[4],subject:"vesper",telemetry:["VESPER'S OFFICE // REPAIRED","INCIDENT REPORT // SEALED"]},{at:26.28,speaker:"Wingtail",text:"I found you.",voice:_i[5],subject:"wingtail",telemetry:["FLIGHT LOG // DISPUTED"]},{at:28.12,speaker:"Commander Vesper",text:"I built your wings. You crossed three cyclones and brought forty-seven people home.",voice:_i[6],subject:"vesper",telemetry:["ANALOG WING RIG // VESPER MK I","CIVILIANS RECOVERED // 47"]},{at:35.23,speaker:"Commander Vesper",text:"No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist.",voice:_i[7],subject:"wingtail",telemetry:["BIO-SIGNATURE // NO MATCH","FLIGHT SYSTEM // ANALOG","ORDNANCE // UNHACKABLE"]},{at:46.02,speaker:"Wingtail",text:"Finally. Professional recognition.",voice:_i[8],subject:"wingtail",telemetry:["SKYSHIELD VISIBILITY // ZERO"]},{at:49.13,speaker:"Commander Vesper",text:"Destroy the command relays and give humanity back its sky. Are you in?",voice:_i[9],subject:"vesper",telemetry:["MISSION // OPERATION BANANA SKY","PRIMARY TARGET // COMMAND RELAYS"]}];function K(){let ue=Math.max(2,n.clientWidth||640),S=Math.max(2,n.clientHeight||420),b=ue<=700;o.setPixelRatio(Math.min(devicePixelRatio||1,b?1.15:1.45)),o.setSize(ue,S,!1),c.aspect=ue/S,c.fov=b&&S>ue?62:52,c.updateProjectionMatrix()}function ne(ue){u.visible=!1,d.visible=!1,h.visible=!1,p.visible=!1,y.forEach(S=>{S.visible=!1}),T.visible=!0,v.mesh.visible=ue==="vesper",M.mesh.visible=ue==="wingtail",c.position.set(0,1.35,2.4),c.lookAt(0,1.2,-4)}function ye(ue){let S=0;for(let b=0;b<Y.length;b+=1)ue>=Y[b].at&&(S=b);S!==X&&(X=S,r({...Y[S],progress:ue/ec}))}function Ae(ue){if(ye(ue),ue<tc)u.visible=!0,d.visible=!1,h.visible=!1,p.visible=!1,y.forEach(S=>{S.visible=!1}),T.visible=!1,v.mesh.visible=!1,M.mesh.visible=!1,c.position.set(0,1.4,2.4),c.lookAt(0,1.25,-5.5),u.rotation.y=ue*(i?.08:.28),u.rotation.x=Math.sin(ue*.55)*.08,u.userData.shell.material.color.setHex(ue>1.5?16730946:4774096),f.intensity=ic((ue-1.2)/1.3)*4;else if(ue<zu){u.visible=!1,h.visible=!0,p.visible=!0,d.visible=!1,T.visible=!1,v.mesh.visible=!1,M.mesh.visible=!1;let S=ue-tc,b=zu-tc,B=i?Math.floor(S/1.2)/5:ic(S/b);c.position.copy(E.getPoint(Math.min(.98,B))),C.set(0,1.1,c.position.z-13),c.lookAt(C),y.forEach((P,U)=>{P.visible=!0,P.position.x=-9-U*2.2+S*(4.8+U*.35),P.position.y+=Math.sin(ue*2.2+U)*.002});let N=ic((S-1.2)/3.1);h.userData.material.emissiveIntensity=.44*(1-N)+.035,f.intensity=N*7;let x=Math.max(0,Math.min(1,(S-2.1)/1.8));g.material.opacity=Math.sin(x*Math.PI)*.88,g.scale.setScalar(1+x*6),d.visible=S>=3.1,d.visible&&(d.rotation.z=i?0:Math.sin(ue*4)*.025,d.scale.setScalar(.92+ic((S-3.1)/.5)*.08))}else{let S=Y[0];for(let B of Y)ue>=B.at&&(S=B);ne(S.subject==="wingtail"?"wingtail":"vesper");let b=1+Math.sin(ue*3.4)*.006;(v.mesh.visible?v.mesh:M.mesh).scale.setScalar(i?1:b)}}function Pe(ue){if(O){if(!R&&!k&&!V){let S=Math.min(ec,(ue-G)/1e3);Ae(S),r({progress:S/ec}),S>=ec&&(k=!0,ne("wingtail"),s())}else if(k||V){let S=v.mesh.visible?v.mesh:M.mesh;i||(S.rotation.z=Math.sin(ue*.0017)*.008)}o.render(l,c),H=requestAnimationFrame(Pe)}}function Ee(){O||(O=!0,R=!1,k=!1,V=!1,X=-1,n.hidden=!1,K(),G=performance.now(),H=requestAnimationFrame(Pe))}function ae(ue){if(!k||V)return;k=!1,V=!0,ne("wingtail"),r({speaker:"Wingtail",text:ue==="doubt"?"One question. Why bananas?":"Open the armory. Let's make history nervous.",voice:ue==="doubt"?_i[11]:_i[10],telemetry:["WINGTAIL // MISSION ACCEPTANCE PENDING"],progress:1});let S=ue==="doubt"?3500:4e3,b=ue==="doubt"?7700:6500,B=setTimeout(()=>{ne("vesper"),r({speaker:"Commander Vesper",text:ue==="doubt"?"Because nobody has ever hacked potassium.":"That's the rescue ace I remember.",voice:ue==="doubt"?_i[13]:_i[12],telemetry:["OPERATION BANANA SKY // AUTHORIZED"],progress:1})},S),N=setTimeout(()=>fe(!1),b);D.add(B),D.add(N)}function fe(ue=!0){O&&(O=!1,cancelAnimationFrame(H),D.forEach(clearTimeout),D.clear(),n.hidden=!0,a({skipped:ue}))}function ve(ue){!O||k||V||(ue&&!R?(R=!0,W=performance.now()):!ue&&R&&(G+=performance.now()-W,R=!1))}function De(){O=!1,cancelAnimationFrame(H),D.forEach(clearTimeout),l.traverse(ue=>{ue.geometry?.dispose?.(),Array.isArray(ue.material)?ue.material.forEach(S=>S.dispose?.()):ue.material?.dispose?.()}),v.texture.dispose(),M.texture.dispose(),o.dispose()}return{start:Ee,choose:ae,skip:()=>fe(!0),setPaused:ve,resize:K,dispose:De}}var nc=8.6,Nf=14,rc=19.7,ja=Object.freeze(["./assets/voices/15-relays-down.mp3","./assets/voices/16-wingtail-victory.mp3","./assets/voices/17-sky-restored.mp3"]);function Vv(){let n=new dt,e=new si({color:1515814,emissive:462866,roughness:.82}),t=new si({color:4215899,emissive:4836792,emissiveIntensity:0,roughness:.68});for(let i=0;i<48;i+=1){let r=i%2?-1:1,s=1.6+i*47%19*.24,a=new we(new Lt(1.1+i%3*.28,s,1.4),i%3?e:t);a.position.set(r*(2.7+i%8*1.15),s*.5-2.2,-i*1.45),n.add(a)}return n.userData.litMaterial=t,n}function Wv(){let n=new dt,e=new si({color:3884877,metalness:.78,roughness:.3}),t=new at({color:16727606,transparent:!0,opacity:.95}),i=new we(new Ot(.6,.85,3.8,10),e);n.add(i);let r=new we(new Jt(.52,16,12),t);n.add(r);let s=[];for(let a=0;a<3;a+=1){let o=new we(new Ji(1.05+a*.32,.055,8,48),t);o.rotation.set(Math.PI/2+a*.35,a*.48,0),n.add(o),s.push(o)}return n.userData={core:r,rings:s},n}function Uf(n){let e=new jn().load(n);e.colorSpace=_t;let t=new at({map:e,transparent:!0,toneMapped:!1}),i=new we(new ri(4.1,5.1),t);return i.position.set(0,1.1,-4.4),i.visible=!1,{mesh:i,texture:e,material:t}}function Ff({canvas:n,vesperAsset:e,wingtailAsset:t,reducedMotion:i=!1,onCue:r=()=>{},onComplete:s=()=>{}}={}){if(!n)return null;let a=new _r({canvas:n,antialias:!matchMedia("(max-width: 700px)").matches});a.outputColorSpace=_t,a.toneMapping=qn,a.toneMappingExposure=1.08;let o=new Vn;o.background=new Re(198666),o.fog=new Gn(464666,.028);let l=new Gt(52,1,.1,140),c=Vv(),h=Wv();h.position.set(0,1,-8),o.add(c,h);let u=Uf(e),d=Uf(t);o.add(u.mesh,d.mesh);let p=new Xn(11005674,395530,1.5),m=new xi(16727606,5,22,2);m.position.set(0,2,-7);let f=new Gr(16769185,0);f.position.set(-6,8,4),o.add(p,m,f);let y=90,g=new Float32Array(y*3);for(let ne=0;ne<y;ne+=1)g[ne*3]=(Math.random()-.5)*2,g[ne*3+1]=1+(Math.random()-.5)*2,g[ne*3+2]=-8+(Math.random()-.5)*2;let v=new lt;v.setAttribute("position",new Pt(g,3));let M=new Wn(v,new Sn({color:16762718,size:.11,transparent:!0,opacity:0,blending:Ki}));o.add(M);let T=[{at:0,speaker:"Commander Vesper",text:"The relays are down. Skyshield is blind, and every stolen aircraft is returning to human control.",voice:ja[0]},{at:nc,speaker:"Wingtail",text:"Tell humanity the sky is open. And tell them to keep the fruit bowl stocked.",voice:ja[1]},{at:Nf,speaker:"Commander Vesper",text:"Operation Banana Sky is complete. Welcome home, Wingtail.",voice:ja[2]}],E=!1,C=!1,D=0,O=0,R=0,k=-1;function V(){let ne=Math.max(2,n.clientWidth||640),ye=Math.max(2,n.clientHeight||420);a.setPixelRatio(Math.min(devicePixelRatio||1,ne<=700?1.1:1.45)),a.setSize(ne,ye,!1),l.aspect=ne/ye,l.fov=ne<=700&&ye>ne?62:52,l.updateProjectionMatrix()}function G(ne){let ye=0;for(let Ae=0;Ae<T.length;Ae+=1)ne>=T[Ae].at&&(ye=Ae);if(ye!==k?(k=ye,r({...T[ye],progress:ne/rc})):r({progress:ne/rc}),ne<nc){h.visible=!0,c.visible=!0,u.mesh.visible=!1,d.mesh.visible=!1,l.position.set(0,2.1,5.5-ne*.24),l.lookAt(0,1,-8),h.userData.rings.forEach((Pe,Ee)=>{Pe.rotation.z+=.02+Ee*.006});let Ae=Math.max(0,(ne-2.4)/3.5);h.scale.setScalar(1+Math.sin(ne*9)*Ae*.08),h.userData.core.material.opacity=Math.max(0,1-Ae),m.intensity=Math.max(0,5*(1-Ae)),M.material.opacity=Math.min(.9,Ae*1.4),M.scale.setScalar(1+Ae*6)}else ne<Nf?(h.visible=!1,u.mesh.visible=!1,d.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),c.userData.litMaterial.emissiveIntensity=Math.min(1.7,(ne-nc)*.35),f.intensity=Math.min(3.2,(ne-nc)*.55),d.mesh.scale.setScalar(i?1:1+Math.sin(ne*2.8)*.006)):(h.visible=!1,d.mesh.visible=!1,u.mesh.visible=!0,l.position.set(0,1.35,2.2),l.lookAt(0,1.1,-4.4),f.intensity=3.2,c.userData.litMaterial.emissiveIntensity=1.7,u.mesh.scale.setScalar(i?1:1+Math.sin(ne*2.4)*.005))}function W(ne){if(E){if(!C){let ye=Math.min(rc,(ne-D)/1e3);if(G(ye),ye>=rc){E=!1,s();return}}a.render(o,l),R=requestAnimationFrame(W)}}function H(){E||(E=!0,C=!1,k=-1,n.hidden=!1,V(),D=performance.now(),R=requestAnimationFrame(W))}function X(){E&&(E=!1,cancelAnimationFrame(R),s())}function Y(ne){E&&(ne&&!C?(C=!0,O=performance.now()):!ne&&C&&(D+=performance.now()-O,C=!1))}function K(){E=!1,cancelAnimationFrame(R),o.traverse(ne=>{ne.geometry?.dispose?.(),Array.isArray(ne.material)?ne.material.forEach(ye=>ye.dispose?.()):ne.material?.dispose?.()}),u.texture.dispose(),d.texture.dispose(),a.dispose()}return{start:H,skip:X,setPaused:Y,resize:V,dispose:K}}var Of="monkeySeeMonkeyPewProfileV1",Rn={airframe:[{id:"clockwork-pinions",name:"Clockwork Pinions",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Balanced",description:"Reliable brass-and-steel wings with forgiving controls.",benefit:"Balanced baseline flight with predictable lift, turning, and cruising speed.",specs:["Lift 100","Handling 100","Speed 100"],modifiers:{lift:1,handling:1,speed:1,armor:0}},{id:"howler-rocket-rig",name:"Howler Rocket Rig",previewAsset:"./assets/wingtail-howler-rig-v1.webp",cost:60,tag:"High lift",description:"Twin coconut-fuel turbines trade finesse for violent acceleration.",benefit:"28% more lift and 14% more speed, but 12% less turning agility.",specs:["Lift 128","Handling 88","Speed 114"],modifiers:{lift:1.28,handling:.88,speed:1.14,armor:0}},{id:"thunderbird-glider",name:"Thunderbird Glider",previewAsset:"./assets/wingtail-thunderbird-v1.webp",cost:110,tag:"Elite",description:"Wide control surfaces, armored spars, and excellent pursuit speed.",benefit:"21% more agility, 18% more speed, and light protection against missile locks.",specs:["Lift 112","Handling 121","Speed 118"],modifiers:{lift:1.12,handling:1.21,speed:1.18,armor:.12}}],weapon:[{id:"ripe-repeater",name:"Ripe Repeater",previewAsset:"./assets/wingtail-ripe-repeater-v1.webp",cost:0,tag:"Standard",description:"Single ripe bananas with a quick, predictable throwing cycle.",benefit:"Rapid single-banana fire for accurate, sustained attacks.",specs:["Damage 1","Rate 5/sec","Bananas 1"],modifiers:{damage:1,cooldown:.2,projectiles:1,spread:0,velocity:54}},{id:"plantain-piercer",name:"Plantain Piercer",previewAsset:"./assets/wingtail-plantain-piercer-v1.webp",cost:45,tag:"Heavy",description:"Dense green plantains hit twice as hard but need a longer reload.",benefit:"Double damage and higher velocity, with a slightly slower firing cycle.",specs:["Damage 2","Rate 4/sec","Bananas 1"],modifiers:{damage:2,cooldown:.25,projectiles:1,spread:0,velocity:58}},{id:"cluster-bunch",name:"Cluster Bunch",previewAsset:"./assets/wingtail-cluster-bunch-v1.webp",cost:95,tag:"Spread",description:"Throws three smaller bananas in a fighter-clearing fan.",benefit:"Launches three bananas at once to cover a wide area and catch agile fighters.",specs:["Damage 1","Rate 3.6/sec","Bananas 3"],modifiers:{damage:1,cooldown:.28,projectiles:3,spread:.065,velocity:52}}],outfit:[{id:"rescue-scarf",name:"Red Rescue Scarf",previewAsset:"./assets/wingtail-hangar-front-v1.png",cost:0,tag:"Classic",description:"Bright, aerodynamic, and accepted by absolutely no air force.",benefit:"No stat tradeoffs. Pure heroic scarf energy.",specs:["Coconuts 100%","Shield 0","Lock resist 0%"],modifiers:{income:1,shield:0,lockResistance:0}},{id:"ace-jacket",name:"Coconut Ace Jacket",previewAsset:"./assets/wingtail-ace-jacket-v1.webp",cost:30,tag:"Fortune",description:"Lucky leather pockets recover more coconuts from every takedown.",benefit:"Earn 20% more coconuts and resist missile locks 8% longer.",specs:["Coconuts 120%","Shield 0","Lock resist 8%"],modifiers:{income:1.2,shield:0,lockResistance:.08}},{id:"midnight-suit",name:"Midnight Monkey Suit",previewAsset:"./assets/wingtail-midnight-suit-v1.webp",cost:70,tag:"Defense",description:"Radar-dampening fabric and one emergency coconut armor plate.",benefit:"Start with one impact shield and resist missile locks 22% longer.",specs:["Coconuts 108%","Shield 1","Lock resist 22%"],modifiers:{income:1.08,shield:1,lockResistance:.22}}]},Bf=[{id:"flight",name:"Turbo Feathering",tag:"Flight",description:"Increase lift, lane response, and top control authority for this run.",effect:"+10% lift and handling"},{id:"arsenal",name:"Peel Velocity",tag:"Weapons",description:"Tighten the throwing cycle and make every banana hit harder.",effect:"-12% reload, +0.35 damage"},{id:"armor",name:"Coconut Plating",tag:"Defense",description:"Bolt another sacrificial coconut shell around the flight harness.",effect:"+1 impact shield"}],jv={coconuts:120,owned:{airframe:["clockwork-pinions"],weapon:["ripe-repeater"],outfit:["rescue-scarf"]},equipped:{airframe:"clockwork-pinions",weapon:"ripe-repeater",outfit:"rescue-scarf"}};function Xv(){return JSON.parse(JSON.stringify(jv))}function wi(n,e){return Rn[n]?.find(t=>t.id===e)||Rn[n]?.[0]||null}function zf(n=globalThis.localStorage){let e=Xv();try{let t=JSON.parse(n?.getItem(Of)||"null");if(!t||typeof t!="object")return e;e.coconuts=Math.max(0,Math.floor(Number(t.coconuts)||0));for(let i of Object.keys(Rn)){let r=new Set(Rn[i].map(a=>a.id)),s=Array.isArray(t.owned?.[i])?t.owned[i].filter(a=>r.has(a)):[];e.owned[i]=[...new Set([Rn[i][0].id,...s])],e.equipped[i]=e.owned[i].includes(t.equipped?.[i])?t.equipped[i]:Rn[i][0].id}}catch{return e}return e}function Hu(n,e=globalThis.localStorage){try{e?.setItem(Of,JSON.stringify(n))}catch{}return n}function kf(n,e,t,i=globalThis.localStorage){let r=wi(e,t);if(!r||!n.owned?.[e])return{ok:!1,reason:"Unknown equipment."};let s=n.owned[e].includes(t);return!s&&n.coconuts<r.cost?{ok:!1,reason:"Need "+(r.cost-n.coconuts)+" more coconuts."}:(s||(n.coconuts-=r.cost,n.owned[e].push(t)),n.equipped[e]=t,Hu(n,i),{ok:!0,action:s?"equipped":"purchased",item:r})}function Hf(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return n.coconuts+=t,Hu(n),t}function Gu(n,e=120,t=globalThis.localStorage){let i=Math.max(0,Math.floor(Number(e)||0)),r=Math.max(0,Math.floor(Number(n.coconuts)||0)),s=Math.max(0,i-r);return s>0&&(n.coconuts=i,Hu(n,t)),s}function sc(){return{flight:0,arsenal:0,armor:0}}function Xa(n,e=sc()){let t=wi("airframe",n.equipped.airframe).modifiers,i=wi("weapon",n.equipped.weapon).modifiers,r=wi("outfit",n.equipped.outfit).modifiers;return{lift:t.lift*(1+e.flight*.1),handling:t.handling*(1+e.flight*.1),speed:t.speed,armor:t.armor,damage:i.damage+e.arsenal*.35,cooldown:i.cooldown*Math.pow(.88,e.arsenal),projectiles:i.projectiles,spread:i.spread,projectileVelocity:i.velocity*(1+e.arsenal*.04),income:r.income,lockResistance:Math.min(.45,r.lockResistance+t.armor*.25),maxShields:r.shield+e.armor}}function Gf(n){let e=Xa(n),t=i=>Math.max(8,Math.min(100,Math.round(i)));return{lift:t(e.lift*72),handling:t(e.handling*72),firepower:t(e.damage*e.projectiles*32),survival:t(18+e.maxShields*35+e.lockResistance*100+e.armor*90)}}var ac=Object.freeze({low:{particleLimit:.48,weatherLimit:.32,weatherStep:2},medium:{particleLimit:.74,weatherLimit:.64,weatherStep:1},high:{particleLimit:1,weatherLimit:1,weatherStep:1}}),yr=Object.freeze([{kind:"haze",color:11133150,density:.16,speed:.65,drift:.3,size:.16,opacity:.16},{kind:"dust",color:15054188,density:.36,speed:1.9,drift:1.1,size:.2,opacity:.26},{kind:"rain",color:10471641,density:1,speed:24,drift:4.8,size:.26,opacity:.46},{kind:"ash",color:16744542,density:.58,speed:1.4,drift:1.8,size:.24,opacity:.35},{kind:"snow",color:13238271,density:.72,speed:2.2,drift:2.8,size:.2,opacity:.42},{kind:"rain",color:7995347,density:.86,speed:29,drift:6.2,size:.24,opacity:.42},{kind:"dust",color:15908722,density:.88,speed:3.2,drift:5.4,size:.25,opacity:.38},{kind:"ash",color:16120831,density:.68,speed:2.5,drift:4.2,size:.18,opacity:.44}]),Jn=Object.freeze({projectileTrail:40,missileSmoke:92,jetExhaust:54,explosion:120,nearMiss:20,weather:260}),Vf=new A(0,0,1),jf=new A(0,0,0),Xf=new mi,qv=new Re(16777215);function Wf(n){let e=document.createElement("canvas");e.width=n==="streak"?16:32,e.height=n==="streak"?64:32;let t=e.getContext("2d");if(n==="streak"){let r=t.createLinearGradient(0,0,0,e.height);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.25,"rgba(255,255,255,0.35)"),r.addColorStop(.72,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(5,0,6,e.height)}else{let r=t.createRadialGradient(16,16,1,16,16,15);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.36,"rgba(255,255,255,0.65)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height)}let i=new bn(e);return i.colorSpace=_t,i.needsUpdate=!0,i}function Yv(){return{active:!1,age:0,life:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,drag:0,gravity:0,width:1,length:1,growth:0,spin:0,rotation:0,r:1,g:1,b:1}}function qa(n,e,t,i,r){let s=new Br(t,i,r);s.name=`VFX:${e}`,s.frustumCulled=!1,s.instanceMatrix.setUsage(Vs),s.renderOrder=i.blending===Ki?30:20;let a=Array.from({length:r},Yv);for(let o=0;o<r;o+=1)n.matrix.compose(n.hiddenPosition,Xf,jf),s.setMatrixAt(o,n.matrix),s.setColorAt(o,qv);return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),n.group.add(s),n.resources.add(t),n.resources.add(i),{name:e,mesh:s,slots:a,capacity:r,limit:r,cursor:0}}function Vu(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function ci(n,e,t){return e+(t-e)*Vu(n)}function Qs(n,e,t=0){return n&&Number.isFinite(n[e])?n[e]:t}function Zv(n,e){n.x=Qs(e,"x"),n.y=Qs(e,"y"),n.z=Qs(e,"z")}function Jv(n,e){n.vx=Qs(e,"x"),n.vy=Qs(e,"y"),n.vz=Qs(e,"z")}function Kv(n,e,t){let i=e??t;i&&i.isColor?Ya.copy(i):Ya.set(i),n.r=Ya.r,n.g=Ya.g,n.b=Ya.b}var Ya=new Re;function $v(n,e){let t=Math.max(1,e.limit);for(let r=0;r<t;r+=1){let s=(e.cursor+r)%t;if(!e.slots[s].active)return e.cursor=(s+1)%t,e.slots[s]}let i=e.cursor%t;return e.cursor=(i+1)%t,e.slots[i]}function Ja(n,e,t,i){let r=$v(n,e);return r.active=!0,r.age=0,r.life=Math.max(.03,t.life??i.life),r.drag=t.drag??i.drag??0,r.gravity=t.gravity??i.gravity??0,r.width=t.width??i.width??1,r.length=t.length??i.length??1,r.growth=t.growth??i.growth??0,r.rotation=t.rotation??ci(n,-Math.PI,Math.PI),r.spin=t.spin??i.spin??0,Zv(r,t.position),Jv(r,t.velocity),Kv(r,t.color,i.color),r}function Wu(n,e){let t=ac[e]||ac.medium;n.resolvedQuality=e in ac?e:"medium";let i=n.reducedMotion?.45:1;for(let r of Object.keys(n.pools)){let s=n.pools[r],a=Math.max(2,Math.floor(s.capacity*t.particleLimit*i));s.limit=a;for(let o=a;o<s.capacity;o+=1)s.slots[o].active=!1}n.weatherStep=t.weatherStep,n.weatherLimit=Math.floor(Jn.weather*t.weatherLimit*(n.reducedMotion?.3:1)),Yf(n,!0)}function qf(n,e,t){let i=n.weatherCenter,r=e*3;n.weatherPositions[r]=i.x+ci(n,-18,18),n.weatherPositions[r+1]=i.y+ci(n,t?-7:9,14),n.weatherPositions[r+2]=i.z+ci(n,-28,12),n.weatherPhases[e]=ci(n,0,Math.PI*2)}function Yf(n,e){let t=yr[n.level]||yr[0],i=Math.floor(n.weatherLimit*t.density);n.weatherCount=i,n.weather.geometry.setDrawRange(0,i),n.weather.material.color.setHex(t.color),n.weather.material.opacity=t.opacity,n.weather.material.size=t.size,n.weather.material.map=t.kind==="rain"?n.streakTexture:n.softTexture,n.weather.material.needsUpdate=!0;for(let r=0;r<i;r+=1)qf(n,r,e);n.weather.geometry.attributes.position.needsUpdate=!0}function Qv(n,e,t){if(!n.weatherCount)return;let i=yr[n.level]||yr[0],r=t.playerPosition||t.cameraPosition||n.camera.position;n.weatherCenter.copy(r);let s=i.speed*e,a=i.drift*e,o=n.weatherPositions;for(let l=0;l<n.weatherCount;l+=n.weatherStep){let c=l*3;n.weatherPhases[l]+=e*(.65+l%5*.09),i.kind==="rain"?(o[c]-=a,o[c+1]-=s,o[c+2]+=s*.34):(o[c]+=Math.sin(n.weatherPhases[l])*a,o[c+1]-=s,o[c+2]+=a*.45),(o[c+1]<r.y-8||o[c+2]>r.z+14||Math.abs(o[c]-r.x)>20)&&qf(n,l,!1)}n.weather.geometry.attributes.position.needsUpdate=!0}function Za(n,e,t,i){let r=!1;for(let s=0;s<e.limit;s+=1){let a=e.slots[s];if(!a.active)continue;if(r=!0,a.age+=t,a.age>=a.life){a.active=!1,n.matrix.compose(n.hiddenPosition,Xf,jf),e.mesh.setMatrixAt(s,n.matrix);continue}let o=Math.max(0,1-a.drag*t);a.vx*=o,a.vy=a.vy*o-a.gravity*t,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.rotation+=a.spin*t;let l=a.age/a.life,c=1-l,h=Math.max(.001,a.width*(c+a.growth*l)),u=Math.max(.001,a.length*(i==="smoke"?.65+l:c));n.position.set(a.x,a.y,a.z),i==="smoke"||i==="explosion"?(n.quaternion.copy(n.camera.quaternion),i==="explosion"&&(n.rollQuaternion.setFromAxisAngle(Vf,a.rotation),n.quaternion.multiply(n.rollQuaternion)),n.scale.set(h,h,u)):(n.direction.set(a.vx,a.vy,a.vz),n.direction.lengthSq()<1e-4?n.direction.set(0,0,-1):n.direction.normalize(),n.quaternion.setFromUnitVectors(Vf,n.direction),n.scale.set(h,h,u)),n.matrix.compose(n.position,n.quaternion,n.scale),e.mesh.setMatrixAt(s,n.matrix),n.color.setRGB(a.r*c,a.g*c,a.b*c),e.mesh.setColorAt(s,n.color)}r&&(e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0))}function ju(n,e,t=0){let i=n.reducedMotion?.12:1;n.impulseStrength=Math.min(1.5,n.impulseStrength+e*i),n.impulseRoll+=t*i}function e_(n,e){n.impulseTime+=e*37,n.impulseStrength*=Math.exp(-11*e),n.impulseRoll*=Math.exp(-9*e);let t=n.impulseStrength;n.cameraImpulse.x=Math.sin(n.impulseTime*1.13)*t*.17,n.cameraImpulse.y=Math.cos(n.impulseTime*1.71)*t*.12,n.cameraImpulse.z=Math.sin(n.impulseTime*.63)*t*.07,n.cameraImpulse.roll=n.impulseRoll+Math.sin(n.impulseTime)*t*.012,n.cameraImpulse.strength=t}function t_(n,e){if(n.hitFlashEnergy*=Math.exp(-13*e),n.hitFlashEnergy<.01){n.hitFlash.visible=!1;return}n.hitFlash.visible=!0,n.direction.set(0,0,-1).applyQuaternion(n.camera.quaternion),n.hitFlash.position.copy(n.camera.position).addScaledVector(n.direction,.32),n.hitFlash.quaternion.copy(n.camera.quaternion);let t=n.camera.aspect||1.78;n.hitFlash.scale.set(.42*t,.42,1),n.hitFlash.material.opacity=Math.min(.68,n.hitFlashEnergy*.58)}function i_(n,e){if(n.qualityMode!=="auto"||(n.frameAverage+=(e-n.frameAverage)*.035,n.qualityTimer+=e,n.qualityTimer<2.2))return;n.qualityTimer=0;let t=n.resolvedQuality;n.frameAverage>1/43?t="low":n.frameAverage>1/54||n.mobile?t="medium":n.frameAverage<1/58&&(t="high"),t!==n.resolvedQuality&&Wu(n,t)}function n_(n,e){let t=Ja(n,n.pools.projectileTrail,e,{life:.18,drag:.4,width:.055,length:1.8,color:16770443});return e.start&&e.end&&(t.x=(e.start.x+e.end.x)*.5,t.y=(e.start.y+e.end.y)*.5,t.z=(e.start.z+e.end.z)*.5,t.vx=e.end.x-e.start.x,t.vy=e.end.y-e.start.y,t.vz=e.end.z-e.start.z,t.length=Math.max(.1,Math.sqrt(t.vx*t.vx+t.vy*t.vy+t.vz*t.vz))),t}function r_(n,e){return n.reducedMotion&&Vu(n)>.42?null:Ja(n,n.pools.missileSmoke,e,{life:.72,drag:1.8,gravity:-.08,width:.18,length:.18,growth:2.8,spin:ci(n,-1.8,1.8),color:14276559})}function s_(n,e){return n.reducedMotion&&Vu(n)>.6?null:Ja(n,n.pools.jetExhaust,e,{life:.22,drag:2.2,width:.08,length:.74,color:6674943})}function a_(n,e){let t=e.count??18,i=Math.max(4,Math.floor(t*ac[n.resolvedQuality].particleLimit*(n.reducedMotion?.48:1))),r=e.speed??4.6,s=e.scale??1,a=null;for(let o=0;o<i;o+=1){n.direction.set(ci(n,-1,1),ci(n,-.75,1),ci(n,-1,1)),n.direction.lengthSq()<.01&&n.direction.set(0,1,0),n.direction.normalize().multiplyScalar(r*ci(n,.45,1.25)),n.spawnOptions.position=e.position,n.spawnOptions.velocity=n.direction,n.spawnOptions.life=ci(n,.3,.82)*(e.lifeScale??1),n.spawnOptions.width=ci(n,.08,.24)*s,n.spawnOptions.length=n.spawnOptions.width,n.spawnOptions.color=o%4===0?e.smokeColor??5985616:e.color??16747058,n.spawnOptions.drag=ci(n,1.2,3.2),n.spawnOptions.gravity=ci(n,.15,1.3),n.spawnOptions.growth=o%4===0?2.5:.7;let l=Ja(n,n.pools.explosion,n.spawnOptions,{life:.55,color:16747058});a||(a=l)}return ju(n,e.impulse??.55*s,ci(n,-.018,.018)),a}function o_(n,e){if(n.reducedMotion)return null;let t=Ja(n,n.pools.nearMiss,e,{life:.2,drag:.08,width:.035,length:5.8,color:15398911});return ju(n,e.impulse??.22,e.roll??ci(n,-.01,.01)),t}function l_(n,e){return n.hitFlashEnergy=Math.max(n.hitFlashEnergy,e.intensity??1),n.hitFlash.material.color.set(e.color??16734781),ju(n,e.impulse??.85,e.roll??ci(n,-.025,.025)),n.hitFlash}function Zf({scene:n,camera:e,mobile:t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,reducedMotion:i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,quality:r="auto",seed:s=2654435769}={}){if(!n||!e)throw new Error("VFX create() requires a Three.js scene and camera.");let a={scene:n,camera:e,mobile:!!t,reducedMotion:!!i,qualityMode:r,resolvedQuality:r==="auto"?t?"medium":"high":r,level:0,seed:s>>>0,disposed:!1,group:new dt,pools:{},resources:new Set,matrix:new Ze,position:new A,direction:new A,scale:new A,quaternion:new mi,rollQuaternion:new mi,color:new Re,hiddenPosition:new A(0,-1e4,0),weatherCenter:new A,frameAverage:1/60,qualityTimer:0,weatherStep:1,weatherLimit:Jn.weather,weatherCount:0,impulseStrength:0,impulseRoll:0,impulseTime:0,hitFlashEnergy:0,cameraImpulse:{x:0,y:0,z:0,roll:0,strength:0},spawnOptions:{position:null,velocity:null,life:0,width:0,length:0,color:0,drag:0,gravity:0,growth:0}};a.group.name="VFXManager",n.add(a.group);let o=d=>new at({color:16777215,transparent:!0,opacity:d,depthWrite:!1,blending:Ki,toneMapped:!1,vertexColors:!0}),l=d=>new at({color:16777215,transparent:!0,opacity:d,depthWrite:!1,vertexColors:!0});a.pools.projectileTrail=qa(a,"projectileTrail",new Lt(1,1,1),o(.95),Jn.projectileTrail),a.pools.missileSmoke=qa(a,"missileSmoke",new Hr(1,1),l(.42),Jn.missileSmoke),a.pools.jetExhaust=qa(a,"jetExhaust",new Lt(1,1,1),o(.72),Jn.jetExhaust),a.pools.explosion=qa(a,"explosion",new Hr(1,0),o(.9),Jn.explosion),a.pools.nearMiss=qa(a,"nearMiss",new Lt(1,1,1),o(.84),Jn.nearMiss),a.softTexture=Wf("soft"),a.streakTexture=Wf("streak"),a.resources.add(a.softTexture),a.resources.add(a.streakTexture),a.weatherPositions=new Float32Array(Jn.weather*3),a.weatherPhases=new Float32Array(Jn.weather);let c=new lt;c.setAttribute("position",new Pt(a.weatherPositions,3).setUsage(Vs));let h=new Sn({color:yr[0].color,size:yr[0].size,map:a.softTexture,transparent:!0,opacity:yr[0].opacity,depthWrite:!1,sizeAttenuation:!0,blending:Ki});a.weather=new Wn(c,h),a.weather.name="VFX:weather",a.weather.frustumCulled=!1,a.weather.renderOrder=10,a.group.add(a.weather),a.resources.add(c),a.resources.add(h);let u=new at({color:16734781,map:a.softTexture,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Ki,toneMapped:!1});return a.hitFlash=new we(new ri(1,1),u),a.hitFlash.name="VFX:hitFlash",a.hitFlash.visible=!1,a.hitFlash.frustumCulled=!1,a.hitFlash.renderOrder=1e3,a.group.add(a.hitFlash),a.resources.add(a.hitFlash.geometry),a.resources.add(u),Wu(a,a.resolvedQuality),a}function Xu(n,e,t={}){if(!n||n.disposed||!Number.isFinite(e)||e<=0)return n?.cameraImpulse||null;let i=Math.min(e,.05);return t.camera&&(n.camera=t.camera),i_(n,i),Za(n,n.pools.projectileTrail,i,"streak"),Za(n,n.pools.missileSmoke,i,"smoke"),Za(n,n.pools.jetExhaust,i,"streak"),Za(n,n.pools.explosion,i,"explosion"),Za(n,n.pools.nearMiss,i,"streak"),Qv(n,i,t),e_(n,i),t_(n,i),n.cameraImpulse}function Bt(n,e,t={}){if(!n||n.disposed)return null;switch(e){case"projectileTrail":return n_(n,t);case"missileSmoke":return r_(n,t);case"jetExhaust":return s_(n,t);case"explosion":return a_(n,t);case"nearMiss":return o_(n,t);case"hitFlash":return l_(n,t);default:throw new Error(`Unknown VFX type: ${e}`)}}function Jf(n,e){!n||n.disposed||(n.level=Math.max(0,Math.min(yr.length-1,Math.floor(e))),Yf(n,!0))}function Kf(n,e,{reducedMotion:t=n?.reducedMotion}={}){if(!n||n.disposed)return;n.reducedMotion=!!t,n.qualityMode=e;let i=e==="auto"?n.mobile?"medium":"high":e;Wu(n,i)}(()=>{"use strict";let n=document.getElementById("game"),e=document.getElementById("overlay"),t=document.getElementById("overlayTitle"),i=document.getElementById("overlayText"),r=document.getElementById("briefingOrder"),s=document.getElementById("startButton"),a=document.getElementById("skipIntroButton"),o=document.getElementById("briefingFallback"),l=document.getElementById("briefingCanvas"),c=document.getElementById("cinematicSlate"),h=document.getElementById("cinematicSpeaker"),u=document.getElementById("cinematicSubtitle"),d=document.getElementById("cinematicProgress"),p=document.getElementById("cinematicTelemetry"),m=document.getElementById("cinematicDialogue"),f=document.getElementById("dialogueSpeaker"),y=document.getElementById("dialogueSubtitle"),g=document.getElementById("dialogueChoices"),v=document.getElementById("briefingIdentity"),M=document.getElementById("briefingChannel"),T=document.getElementById("pauseOverlay"),E=document.getElementById("resumeButton"),C=document.getElementById("restartButton"),D=document.getElementById("pauseButton"),O=document.getElementById("muteButton"),R=document.getElementById("shootButton"),k=document.getElementById("score"),V=document.getElementById("best"),G=document.getElementById("points"),W=document.getElementById("multiplier"),H=document.getElementById("coconutCount"),X=document.getElementById("shieldCount"),Y=document.getElementById("rageHud"),K=document.getElementById("rageLabel"),ne=document.getElementById("rageCount"),ye=document.getElementById("rageMeter"),Ae=document.getElementById("objectiveHud"),Pe=document.getElementById("objectiveMeter"),Ee=document.getElementById("objectiveCount"),ae=document.getElementById("level"),fe=document.getElementById("threatBar"),ve=document.getElementById("missileWarning"),De=document.getElementById("lockMeter"),ue=document.getElementById("missileBearing"),S=document.getElementById("missileDirection"),b=document.getElementById("targetingHud"),B=document.getElementById("targetStatus"),N=document.getElementById("targetRange"),x=document.getElementById("weaponCooldown"),P=document.getElementById("touchControls"),U=document.getElementById("steerZone"),F=document.getElementById("liftButton"),ee=document.getElementById("statusRegion"),te=document.getElementById("hangarOverlay"),J=document.getElementById("hangarWallet"),re=document.getElementById("hangarPreview"),ie=document.getElementById("hangarPortrait"),ce=document.getElementById("previewState"),oe=document.getElementById("previewRig"),_e=document.getElementById("previewWeapon"),Fe=document.getElementById("previewOutfit"),Ye=document.getElementById("loadoutTabs"),nt=document.getElementById("loadoutItems"),tt=document.getElementById("hangarStatus"),Ie=document.getElementById("selectionName"),je=document.getElementById("selectionBenefit"),ut=document.getElementById("selectionDeltas"),Nt=document.getElementById("selectionPrice"),Te=document.getElementById("selectionBalance"),We=document.getElementById("loadoutAction"),Xe=document.getElementById("deployButton"),Kn={lift:document.getElementById("statLift"),handling:document.getElementById("statHandling"),firepower:document.getElementById("statFirepower"),survival:document.getElementById("statSurvival")},Fi=document.getElementById("upgradeOverlay"),ai=document.getElementById("upgradeTitle"),gt=document.getElementById("upgradeGrid"),bt=document.getElementById("upgradeWallet"),Oi=document.getElementById("victoryOverlay"),z=document.getElementById("victoryCanvas"),en=document.getElementById("victorySpeaker"),$n=document.getElementById("victoryTitle"),St=document.getElementById("victorySubtitle"),xr=document.getElementById("victoryProgress"),$r=document.getElementById("victorySkipButton"),Mr=document.getElementById("victoryContinueButton"),ot=window.GameAudio||{},Sr=1/60,oi=[-6.2,0,6.2],Ka=-3.2,$a=5.8,Bi=1.4,zi=10,br=8,Qr=.34,es=36,ea=120,Mi=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ut=[{time:0,name:"PATROL",threat:20,maxJets:3,missileCap:1,speed:16,hazard:"Clear airspace"},{time:32,name:"INTERCEPT",threat:46,maxJets:4,missileCap:1,speed:18.5,hazard:"Industrial turbulence"},{time:72,name:"MISSILE LOCK",threat:74,maxJets:5,missileCap:2,speed:21,crosswind:.7,hazard:"Storm crosswinds"},{time:122,name:"OVERDRIVE",threat:100,maxJets:6,missileCap:3,speed:24,crosswind:1.15,hazard:"Ash and blackout conditions"},{time:182,name:"CROSSFIRE",threat:100,maxJets:7,missileCap:4,speed:26,crosswind:1.65,altitudeMin:-3,altitudeMax:5.55,hazard:"Freezing tower wake"},{time:252,name:"TEMPEST",threat:100,maxJets:7,missileCap:5,speed:27.5,crosswind:2.15,altitudeMin:-2.85,altitudeMax:5.35,hazard:"Electrical shear"},{time:332,name:"KILLBOX",threat:100,maxJets:8,missileCap:6,speed:29,crosswind:2.75,altitudeMin:-2.65,altitudeMax:5.1,hazard:"Fortress crossfire"},{time:422,name:"LAST STAND",threat:100,maxJets:8,missileCap:7,speed:30.5,crosswind:3.35,altitudeMin:-2.45,altitudeMax:4.85,hazard:"Command-core kill corridor"}],ts={f16:{name:"F-16",color:9411488,accent:4282208,hp:2,speed:1.06,agility:1.05,score:500,scale:.92},fa18:{name:"F/A-18",color:8292749,accent:3622991,hp:3,speed:.96,agility:.92,score:600,scale:1.02},f22:{name:"F-22",color:6780027,accent:2504252,hp:2,speed:1.2,agility:1.28,score:760,scale:1.04},a10:{name:"A-10",color:6647903,accent:3291952,hp:5,speed:.72,agility:.62,score:980,scale:1.18}},ki,Si,Hi,w=new Audio;w.preload="auto";let q=[..._i,...ja].map(_=>{let L=new Audio;return L.preload="auto",L.src=_,L.load(),L}),Z,Q,$,ge,Me,be,Ce,Se,Qe,it,Ue,he="loading",ft="ready",At="playing",ke=0,He=0,vt=0,Ct=0,Ne=1,Ge=0,Yt=0,Qn=performance.now(),er=0,bi=0,hi=1,Gi=0,Vt=7646257,tn=null,nn=null,Er=!1,zt="airframe",ht=zf(),In={...ht.equipped},qe=sc(),pt=Xa(ht,qe),Wt=pt.maxShields,Vi=0,Ei=0,Ft=0,Pn=0,yt=!1,Ai=2.4,is=0,ui=!1,Zt=0,Qt=Number(localStorage.getItem("monkeyNoFlyBest3D")||localStorage.getItem("monkeyNoFlyBest")||0),de={x:0,y:.7,z:Bi,vy:0,vx:0,lane:1,bank:0,pitch:0,radius:Pu},ei=[],Rt=[],Tr=[],tr=[],mn=[],Wi=new Set,h_=new Re,rn=new A,qu=new A;V.textContent=String(Math.floor(Qt)),H&&(H.textContent=String(ht.coconuts));for(let _ of Object.values(Rn).flat())if(_.previewAsset){let L=new Image;L.src=_.previewAsset}function kt(_){ee.textContent="",requestAnimationFrame(()=>{ee.textContent=_})}function xt(_,L,I){return Math.max(L,Math.min(I,_))}function ir(_,L){_&&(_.hidden=!L,_.inert=!L,_.setAttribute("aria-hidden",String(!L)),_.classList.toggle("is-visible",L))}function wr(){H&&(H.textContent=String(ht.coconuts)),J&&(J.textContent=String(ht.coconuts)),bt&&(bt.textContent=String(ht.coconuts)),X&&(X.textContent=String(Wt))}function Yu(){let _={...ht,equipped:{...ht.equipped,...In}},L=wi("airframe",_.equipped.airframe),I=wi("weapon",_.equipped.weapon),j=wi("outfit",_.equipped.outfit),le=wi(zt,In[zt]),me=ht.equipped[zt]===le.id;re&&(re.dataset.airframe=L.id,re.dataset.weapon=I.id,re.dataset.outfit=j.id,re.classList.remove("is-swapping"),re.offsetWidth,re.classList.add("is-swapping")),ie&&ie.getAttribute("src")!==le.previewAsset&&(ie.src=le.previewAsset),ie&&(ie.alt="Wingtail previewing "+le.name+" in the equipment hangar"),ce&&(ce.textContent=me?"Current loadout":"Preview only",ce.dataset.current=String(me));let rt={airframe:"Flight rig",weapon:"Banana system",outfit:"Flight clothing"}[zt];oe&&(oe.textContent=le.name),_e&&(_e.textContent=rt+" preview"),Fe&&(Fe.textContent=me?"Equipped item":"Store preview");let se=Gf(_);for(let[st,Ke]of Object.entries(Kn))Ke&&(Ke.style.width=se[st]+"%");wr()}function $f(_,L=""){if(Math.abs(_)<.005)return"No change";let I=Number.isInteger(_)?_:Math.round(_*10)/10;return(I>0?"+":"")+I+L}function Qf(_,L,I){let j=L.modifiers,le=I.modifiers;return _==="airframe"?[["Lift",Math.round(j.lift*100),Math.round(le.lift*100),"%"],["Agility",Math.round(j.handling*100),Math.round(le.handling*100),"%"],["Speed",Math.round(j.speed*100),Math.round(le.speed*100),"%"]]:_==="weapon"?[["Damage",j.damage,le.damage,""],["Fire rate",Math.round(10/j.cooldown)/10,Math.round(10/le.cooldown)/10,"/sec"],["Payload",j.projectiles,le.projectiles,"x"]]:[["Coconut yield",Math.round(j.income*100),Math.round(le.income*100),"%"],["Impact shields",j.shield,le.shield,""],["Lock resistance",Math.round(j.lockResistance*100),Math.round(le.lockResistance*100),"%"]]}function em(_){if(!ut)return;let L=wi(zt,ht.equipped[zt]),j=Qf(zt,L,_).map(([le,me,rt,se])=>{let st=document.createElement("span"),Ke=document.createElement("b"),ti=document.createElement("i"),wt=document.createElement("em"),sn=rt-me;return Ke.textContent=le,ti.textContent=me+se+" \u2192 "+rt+se,wt.textContent=$f(sn,se),wt.dataset.direction=sn>0?"up":sn<0?"down":"same",st.append(Ke,ti,wt),st});ut.replaceChildren(...j)}function tm(){let _=wi(zt,In[zt]);if(!_)return;let L=ht.owned[zt].includes(_.id),I=ht.equipped[zt]===_.id,j=ht.coconuts>=_.cost;if(Ie&&(Ie.textContent=_.name),je&&(je.textContent=_.benefit),em(_),Nt&&(Nt.textContent=L?"Owned":_.cost+" coconuts",Nt.dataset.affordable=String(j||L)),Te&&(Te.textContent=String(ht.coconuts)),We&&(We.disabled=I||!L&&!j,We.textContent=I?"Equipped":L?"Equip "+_.name:j?"Buy & Equip \xB7 "+_.cost:"Need "+(_.cost-ht.coconuts)+" more"),Xe){let le=wi("airframe",ht.equipped.airframe).name,me=wi("weapon",ht.equipped.weapon).name;Xe.textContent="Deploy Current Build",Xe.setAttribute("aria-label","Deploy current build: "+le+" and "+me)}}function im(_,L){let I=ht.owned[L].includes(_.id),j=ht.equipped[L]===_.id,le=document.createElement("button");le.type="button",le.className="loadout-item",le.dataset.itemId=_.id,le.dataset.owned=String(I);let me=In[L]===_.id;le.setAttribute("aria-pressed",String(me)),le.dataset.equipped=String(j);let rt=document.createElement("span");rt.className="loadout-item__title",rt.textContent=_.name;let se=document.createElement("span");se.className="loadout-item__tag",se.textContent=_.tag;let st=document.createElement("span");st.className="loadout-item__description",st.textContent=_.description;let Ke=document.createElement("span");Ke.className="loadout-item__footer";let ti=document.createElement("span");ti.className="loadout-item__specs",ti.textContent=_.specs.join(" \xB7 ");let wt=document.createElement("span");return wt.className="loadout-item__price",wt.textContent=j?"Equipped":I?"Owned":_.cost+" coconuts",Ke.append(ti,wt),le.append(rt,se,st,Ke),le.addEventListener("click",()=>{In[L]=_.id,tt.textContent=_.name+" is a preview only. Deploy uses equipped gear until you buy or equip it.",Qa(L)}),le}function Qa(_=zt){if(!(!Rn[_]||!nt)){zt=_;for(let L of Ye?.querySelectorAll("[data-category]")||[])L.setAttribute("aria-selected",String(L.dataset.category===_));nt.replaceChildren(...Rn[_].map(L=>im(L,_))),tm(),Yu(),matchMedia("(max-width: 700px) and (min-height: 501px)").matches&&requestAnimationFrame(()=>{let L=nt.querySelector('[aria-pressed="true"]');L&&nt.scrollTo({left:L.offsetLeft-(nt.clientWidth-L.offsetWidth)/2,behavior:"auto"})})}}function eo(){if(he==="loading"||he==="unsupported")return;he="hangar",cc(!1),ir(Fi,!1),ir(te,!0);let _=Gu(ht,ea);In={...ht.equipped},R.disabled=!0,D.disabled=!0,tt.textContent=_>0?`Vesper replenished ${_} coconuts. Select gear for the next sortie.`:"Select gear to compare it with your current build.",Qa(zt),Ye?.querySelector('[aria-selected="true"]')?.focus({preventScroll:!0}),kt("Wingtail loadout hangar opened.")}function nm(){gt&&gt.replaceChildren(...Bf.map(_=>{let L=document.createElement("button");L.type="button",L.className="upgrade-choice";let I=document.createElement("small");I.textContent=_.tag+" \xB7 Tier "+(qe[_.id]+1);let j=document.createElement("strong");j.textContent=_.name;let le=document.createElement("span");le.textContent=_.description;let me=document.createElement("b");return me.textContent=_.effect,L.append(I,j,le,me),L.addEventListener("click",()=>sm(_)),L}))}function rm(_){he="upgrading",R.disabled=!0,F&&(F.disabled=!0),Wi.delete("TouchLift"),ai.textContent="Level "+(_+1)+" field upgrade",nm(),wr(),ir(Fi,!0),ot.setPaused?.(!0),gt?.querySelector("button")?.focus()}function sm(_){qe[_.id]+=1,pt=Xa(ht,qe),_.id==="armor"&&(Wt+=1),ir(Fi,!1),he="playing",R.disabled=!1,F&&(F.disabled=!1),ot.setPaused?.(!1),Qn=performance.now(),wr(),n.focus({preventScroll:!0}),kt(_.name+" installed.")}function ns(_,L){let I=Hf(ht,Math.max(1,Math.round(_*pt.income)));return Vi+=I,wr(),L&&kt(L+". "+I+" coconuts recovered."),I}function Ar(){return Vt=Vt*1664525+1013904223>>>0,Vt/4294967296}function Ht(_,L){return _+(L-_)*Ar()}function ji(_,L={}){return new si({color:_,roughness:L.roughness??.58,metalness:L.metalness??.45,emissive:L.emissive||0,emissiveIntensity:L.emissiveIntensity||0})}function jt(_){_&&(Z.remove(_),_.traverse?.(L=>{L.geometry?.dispose?.(),Array.isArray(L.material)?L.material.forEach(I=>I.dispose?.()):L.material?.dispose?.()}))}function am(_){let L=ts[_],I=new dt,j=ji(L.color,{metalness:.72,roughness:.34}),le=ji(L.accent,{metalness:.62,roughness:.42}),me=ji(1582893,{metalness:.75,roughness:.16}),rt=ji(16743215,{emissive:16730642,emissiveIntensity:4,roughness:.3}),se=new we(new Ot(.34,.5,4.2,10),j);se.rotation.x=Math.PI/2,I.add(se);let st=new we(new hn(.34,1.35,10),j);st.rotation.x=Math.PI/2,st.position.z=2.72,I.add(st);let Ke=new we(new Jt(.38,10,6),me);Ke.scale.set(.75,.55,1.35),Ke.position.set(0,.32,.8),I.add(Ke);let ti=new zr;ti.moveTo(0,1.2),ti.lineTo(2.7,-1.2),ti.lineTo(.45,-.65),ti.lineTo(0,-1.1);let wt=new we(new Is(ti,{depth:.1,bevelEnabled:!1}),j);wt.rotation.x=-Math.PI/2,wt.rotation.z=Math.PI/2,wt.position.set(-.05,-.03,.3),wt.geometry.center(),I.add(wt);let sn=new we(new Lt(2.5,.08,.65),le);sn.position.z=-1.55,I.add(sn);let ud=new we(new Lt(.1,.85,.9),le);ud.position.set(0,.46,-1.55),I.add(ud);let rs=new we(new Ot(.18,.28,.72,8),rt);if(rs.rotation.x=Math.PI/2,rs.position.z=-2.38,I.add(rs),_==="fa18"||_==="f22"){let ro=rs.clone();rs.position.x=-.24,ro.position.x=.24,I.add(ro)}if(_==="a10"){let ro=new Ot(.28,.34,1.45,9);[-.82,.82].forEach(Wm=>{let xc=new we(ro,le);xc.rotation.x=Math.PI/2,xc.position.set(Wm,.35,-.75),I.add(xc)}),wt.scale.x=1.15}return _==="f22"&&(wt.scale.z=1.25),I.scale.setScalar(L.scale),I.userData.engine=rs,I}function om(){let _=new dt,L=new we(new Ot(.09,.13,1.15,8),ji(13095121,{metalness:.75,roughness:.3}));L.rotation.x=Math.PI/2,_.add(L);let I=new we(new hn(.1,.34,8),ji(14739172));I.rotation.x=-Math.PI/2,I.position.z=-.74,_.add(I);let j=new we(new hn(.11,.55,8),new at({color:16757051,transparent:!0,opacity:.9}));return j.rotation.x=Math.PI/2,j.position.z=.83,_.add(j),_.userData.flame=j,_}function lm(){let _=new dt,L=ji(3884877,{metalness:.82,roughness:.28}),I=ji(6911868,{metalness:.72,roughness:.34}),j=new at({color:16727861,transparent:!0,opacity:.96}),le=new we(new Ot(.72,1.05,4.3,10),L);_.add(le);for(let st of[-1.25,1.25]){let Ke=new we(new Ot(1.08,1.08,.3,10),I);Ke.position.y=st,_.add(Ke)}let me=new we(new Jt(.58,14,10),j);_.add(me);let rt=[];for(let st=0;st<3;st+=1){let Ke=new we(new Ji(1.2+st*.34,.065,7,42),j);Ke.rotation.set(Math.PI/2+st*.32,st*.52,0),_.add(Ke),rt.push(Ke)}let se=new xi(16727861,4.8,12,2);return _.add(se),_.userData={core:me,rings:rt,beacon:se},_}function Zu(_="ripe-repeater",L=!1){let I=new dt,j=_==="plantain-piercer",le=new mr([new A(-.44,.16,0),new A(-.24,-.03,0),new A(0,-.11,0),new A(.24,-.03,0),new A(.44,.16,0)]),me=new we(new Ps(le,12,.095,7,!1),ji(j?9424690:16767279,{metalness:.05,roughness:.48,emissive:j?2640648:10182400,emissiveIntensity:.72}));I.add(me);let rt=new Jt(.082,7,5),se=ji(5977365,{metalness:.02,roughness:.86}),st=new we(rt,se);st.position.set(-.46,.18,0),st.scale.set(.72,1.35,.72),st.rotation.z=-.62,I.add(st);let Ke=st.clone();Ke.position.x=.46,Ke.rotation.z=.62,I.add(Ke);let ti=new xi(j?10479181:16762685,1.5,4);if(I.add(ti),L){let wt=new we(new Ot(.11,.16,.75,8),ji(3688011,{metalness:.72,roughness:.3}));wt.rotation.z=Math.PI/2,wt.position.x=.72,I.add(wt);let sn=new we(new hn(.14,.6,8),new at({color:16738861,transparent:!0,opacity:.92}));sn.rotation.z=-Math.PI/2,sn.position.x=1.28,I.add(sn),I.userData.flame=sn}return I.scale.setScalar(_==="cluster-bunch"?.86:j?1.3:1.18),L&&I.scale.multiplyScalar(1.18),I.userData.isBananaProjectile=!0,I.userData.isRageRocket=L,I}function cm(_){let L=new dt;if(_==="banana"){let le=Zu("ripe-repeater");le.scale.multiplyScalar(1.28),L.add(le)}else{let le=new we(new Jt(.48,14,10),ji(9195816,{metalness:.05,roughness:.88,emissive:2888199,emissiveIntensity:.45}));le.scale.y=.9,L.add(le);let me=new at({color:2363659});[[-.13,.14],[.13,.14],[0,-.08]].forEach(([rt,se])=>{let st=new we(new Jt(.045,7,5),me);st.position.set(rt,se,.44),L.add(st)})}let I=new we(new Ji(.72,.035,7,32),new at({color:_==="banana"?16768853:6482640,transparent:!0,opacity:.78}));I.rotation.x=Math.PI/2,L.add(I);let j=new xi(_==="banana"?16767311:6482640,2.2,6);return L.add(j),L.userData.ring=I,L}function hm(){let _=new Float32Array(1080);for(let j=0;j<360;j+=1)_[j*3]=Ht(-60,60),_[j*3+1]=Ht(-1,28),_[j*3+2]=Ht(-150,-12);let L=new lt;L.setAttribute("position",new Pt(_,3)),Me=new Wn(L,new Sn({color:13037290,size:.12,transparent:!0,opacity:.5,depthWrite:!1})),Z.add(Me),ge=new dt;let I=new at({color:10135978,transparent:!0,opacity:.08,depthWrite:!1});for(let j=0;j<24;j+=1){let le=new we(new Jt(1,8,5),I);le.scale.set(Ht(4,9),Ht(.7,1.6),Ht(2,5)),le.position.set(Ht(-28,28),Ht(4,15),Ht(-130,-12)),ge.add(le)}Z.add(ge)}function oc(_){!_||!Z||(Z.background.setHex(_.sky),Z.fog.color.setHex(_.fog),Qe?.color.setHex(_.light),Ue?.color.setHex(_.light))}function um(_){return ei.find(L=>L.entityId===_)||null}function Ju(){return Pf({seed:Vt,callbacks:{onAircraftSpawn(_){return he!=="playing"?!1:(Lm(_),!0)},onMissileWarning(_){if(he!=="playing")return!1;let L=um(_.sourceEntityId);return L?Dm(L,_):!1},onMissileLaunch(_){let L=Rt.find(I=>I.directorId===_.missileId&&I.state==="locking");return L?(L.pendingLaunch=_,L.timer<=0&&nd(L,_),!0):!1}}})}async function dm(){try{ki=new _r({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),ki.outputColorSpace=_t,ki.toneMapping=qn,ki.toneMappingExposure=1.12,Z=new Vn,Z.background=new Re(Ut[0].sky),Z.fog=new Gn(Ut[0].fog,.018),Q=new Gt(56,1,.1,220),Q.position.set(0,3.1,13.5),Q.lookAt(0,1,-26),Qe=new Xn(12446178,659736,2.25),Z.add(Qe),it=new Gr(16769187,3.1),it.position.set(-8,13,8),Z.add(it),Ue=new xi(16762699,4.2,14),Ue.position.set(0,3,5),Z.add(Ue),hm(),$=bf({scene:Z,level:0,seed:Vt,speed:Ut[0].speed*.5}),oc($.getEnvironment()),Se=Zf({scene:Z,camera:Q,mobile:innerWidth<=700,reducedMotion:Mi,quality:"auto",seed:Vt}),be=await _f({scene:Z,camera:Q,renderer:ki,assetUrl:"./assets/hero-monkey-chase-v2.png",mobile:innerWidth<=700,reducedMotion:Mi}),ql(be,ht.equipped),Ga(be,0,de,{active:!1,speed:Ut[0].speed}),Lu(be,Sr,de),Ce=Ju();try{Si=Df({canvas:l,vesperAsset:o.currentSrc||o.src,wingtailAsset:ie.currentSrc||ie.src,reducedMotion:Mi,onCue:pm,onChoice:mm,onComplete:vm})}catch(_){console.warn("Cinematic renderer unavailable; using direct briefing.",_),Si=null}lc(),he="ready",s.disabled=!1,s.textContent="Start Transmission",kt("3D flight systems ready.")}catch(_){console.error(_),he="unsupported",t.textContent="3D flight unavailable",i.textContent="This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.",s.hidden=!0}}function lc(){if(!ki||!Q)return;let _=n.clientWidth||innerWidth,L=n.clientHeight||innerHeight,I=_<=700;Er=I,ki.setPixelRatio(Math.min(devicePixelRatio||1,I?1.5:2)*hi),ki.setSize(_,L,!1),Q.aspect=_/Math.max(1,L),Q.fov=I&&L>_?65:55,Q.updateProjectionMatrix(),Du(be,I),Si?.resize(),Hi?.resize(),document.body.classList.toggle("touch-controls-ready",I&&matchMedia("(pointer: coarse)").matches),P?.setAttribute("aria-hidden",String(!(I&&matchMedia("(pointer: coarse)").matches)))}function cc(_){e.classList.toggle("is-visible",_),e.setAttribute("aria-hidden",String(!_)),n.inert=_}function pm(_={}){Number.isFinite(_.progress)&&d&&(d.style.width=Math.round(_.progress*100)+"%"),!(!_.speaker&&!_.text)&&(_.speaker&&(h.textContent=_.speaker,f.textContent=_.speaker),_.text&&(u.textContent=_.text,y.textContent=_.text),Array.isArray(_.telemetry)&&p&&(p.replaceChildren(..._.telemetry.map(L=>{let I=document.createElement("span"),[j,le=""]=L.split(" // ");I.append(document.createTextNode(j));let me=document.createElement("strong");return me.textContent=le,I.append(me),I})),p.hidden=!1,p.setAttribute("aria-hidden","false")),_.voice&&Ku(_.voice),_.speaker==="Skyshield command"?ot.playMissileLaunch?.():_.speaker==="Evacuation channel"?ot.playImpact?.(!0):_.speaker==="Commander Vesper"&&ot.playLevel?.())}function Ku(_){w.pause(),w.currentTime=0,w.src=_,w.muted=!!ot.isMuted?.(),w.volume=.92,w.play().catch(()=>{})}function to(){w.pause(),w.currentTime=0,w.removeAttribute("src"),w.load()}function fm(){if(ft==="ready"){if(!Si){ft="complete",eo();return}ft="playing",he="cinematic",ot.init?.(),ot.setPaused?.(!1),to(),e.dataset.mode="cinematic",t.hidden=!0,i.hidden=!0,r.hidden=!0,o.hidden=!0,c.hidden=!1,p.hidden=!1,m.hidden=!1,g.hidden=!0,s.hidden=!0,a.hidden=!1,v.textContent="Field Transmission",M.textContent="Archive 72H // Live reconstruction",Si.start(),kt("Emergency transmission started. Skip Intro is available.")}}function mm(){ft="choice",he="dialogue",a.hidden=!0,f.textContent="Wingtail",y.textContent="Vesper is waiting for your answer.",h.textContent="Wingtail",u.textContent="YOUR RESPONSE REQUIRED",g.hidden=!1,g.querySelector("button")?.focus({preventScroll:!0}),kt("Choose Wingtail's response.")}function gm(_){ft==="choice"&&(ft="resolving",he="cinematic",g.hidden=!0,Si.choose(_))}function vm(){ft!=="complete"&&(ft="complete",localStorage.setItem("monkeySeeMonkeyPewIntroSeen","1"),ot.setPaused?.(!0),to(),Si?.dispose(),Si=null,q.splice(0),c.hidden=!0,p.hidden=!0,m.hidden=!0,a.hidden=!0,eo())}function $u(){["playing","choice","resolving"].includes(ft)&&Si?.skip()}function _m(){ei.splice(0).forEach(_=>jt(_.view)),Rt.splice(0).forEach(_=>jt(_.view)),Tr.splice(0).forEach(_=>jt(_.view)),tr.splice(0).forEach(_=>jt(_.view)),mn.splice(0).forEach(_=>jt(_.view)),He=0,vt=0,Ct=0,Ne=1,Ge=0,Yt=0,qe=sc(),pt=Xa(ht,qe),Wt=pt.maxShields,Vi=0,Ei=0,Ft=0,Pn=0,yt=!1,Ai=2.4,is=0,ui=!1,Zt=0,ke=0,Vt=(Date.now()^7646257)>>>0,$?.setSeed(Vt,{regenerate:!0}),$?.setLevel(0,{immediate:!0}),Ce?.stop({clearSchedule:!0}),Ce=Ju(),Ce.reset({levelIndex:0,delay:.85}),Object.assign(de,{x:0,y:.7,z:Bi,vy:0,vx:0,lane:1,bank:0,pitch:0}),k.textContent="0",G.textContent="0",W.textContent="1.00\xD7",ql(be,ht.equipped),wr(),ve.hidden=!0,De.style.width="0%",b?.classList.remove("is-locked"),B&&(B.textContent="Scanning"),N&&(N.hidden=!0),dc(),Ln(),no(),id(0,!1)}function Qu(){he==="loading"||he==="unsupported"||(Gu(ht,ea),_m(),ir(te,!1),ir(Fi,!1),he="playing",e.dataset.mode="flight",cc(!1),R.disabled=!1,D.disabled=!1,F&&(F.disabled=!1),Ce?.start({levelIndex:0,delay:.85}),ot.init?.(),ot.setPaused?.(!1),ot.startRun?.(0),Ln(),n.focus({preventScroll:!0}),kt("3D flight started."))}function hc(){he==="playing"&&(de.vy=Math.min(de.vy+3.5*Math.sqrt(pt.lift),6.4*pt.lift),de.pitch=.34,Bt(Se,"jetExhaust",{position:{x:de.x,y:de.y-.1,z:de.z+.35},velocity:{x:0,y:-.2,z:3.8},life:.22,width:.11,length:.9,color:15254612}),ot.playFlap?.(xt(de.vy/6,.45,1)))}function uc(_){he==="playing"&&(de.lane=xt(de.lane+_,0,oi.length-1))}function ed(){let _=null,L=1/0;for(let I of mn){if(I.z>Bi||I.z<-115)continue;let j=Math.hypot(I.x-de.x,I.y-de.y)*.72+Math.abs(I.z)*.012;j<9.8&&j<L&&(_=I,L=j)}if(_)return _;for(let I of ei){if(I.z>Bi||I.z<-82)continue;let j=I.x-de.x,le=I.y-de.y,me=Math.hypot(j,le)+Math.abs(I.z)*.018;me<7.4&&me<L&&(_=I,L=me)}return _}function dc(){let _=Ft>0?Qr:pt.cooldown,L=Math.round(xt(1-Yt/_,0,1)*100);x?.style.setProperty("--weapon-charge",String(L)),x?.setAttribute("aria-valuenow",String(L))}function Ln(){let _=Ft>0,L=!_&&Ei>=zi,I=xt(_?Ft/br:Ei/zi,0,1);Y?.classList.toggle("is-active",_),Y?.classList.toggle("is-ready",L),Y&&(Y.disabled=!L||he!=="playing",Y.setAttribute("aria-label",_?"Go Bananas active":L?"Activate Go Bananas":"Go Bananas charge")),K&&(K.textContent=_?"Banana Rage":L?"Go Bananas Ready":"Go Bananas"),ne&&(ne.textContent=_?`${Ft.toFixed(1)}s`:L?"READY":`${Math.floor(Ei)} / ${zi}`),ye?.style.setProperty("width",`${Math.round(I*100)}%`),ye?.parentElement?.setAttribute("aria-valuenow",String(_?Math.ceil(Ft):Math.floor(Ei))),ye?.parentElement?.setAttribute("aria-valuemax",String(_?br:zi))}function td(){return he!=="playing"||Ft>0||Ei<zi?!1:(Ei=0,Ft=br,Pn=0,yt=!1,Cr("GO BANANAS",750),Bt(Se,"hitFlash",{color:16758062,intensity:.7,impulse:.32}),ot.playLevel?.(3),Ln(),kt("Go Bananas activated. Heavy banana rockets online for eight seconds."),!0)}function io(_){if(Ft>0)Ft=Math.min(br+2,Ft+Number(_||0)*.18);else{let L=Ei>=zi;Ei=Math.min(zi,Ei+Math.max(0,Number(_)||0)),!L&&Ei>=zi&&!yt&&(yt=!0,kt("Go Bananas is ready."))}Ln()}function ym(_){Ft<=0||(Ft=Math.max(0,Ft-_),Pn-=_,Pn<=0&&(Yt=0,pc(!0),Pn=Qr),Ft<=0&&(Y?.classList.remove("is-active"),kt("Banana rage depleted.")),Ln())}function pc(_=Ft>0){if(he!=="playing"||Yt>0)return;Yt=_?Qr:pt.cooldown;let L=ed(),I=new A(0,0,-1);L&&(rn.set(L.x-de.x,L.y-de.y,L.z-de.z).normalize(),I.lerp(rn,innerWidth<=700?.82:.68).normalize());let j=ht.equipped.weapon,le=_?1:pt.projectiles,me=_?0:pt.spread;for(let rt=0;rt<le;rt+=1){let se=rt-(le-1)/2,st=I.clone();st.x+=se*me,st.y+=Math.abs(se)*me*.16,st.normalize();let Ke=Zu(j,_);if(Tr.length>=es){let wt=Tr.shift();jt(wt?.view)}Ke.position.set(de.x+se*.16,de.y,de.z-.9),Z.add(Ke);let ti={x:Ke.position.x,y:Ke.position.y,z:Ke.position.z,previous:Ke.position.clone(),velocity:st.multiplyScalar(_?Math.max(72,pt.projectileVelocity*1.25):pt.projectileVelocity),damage:_?Math.max(4,pt.damage*2):pt.damage,life:_?2.5:1.9,rage:_,trailTimer:0,spin:Ht(11,16)*(Ar()>.5?1:-1),tumble:Ht(7,11),view:Ke};Tr.push(ti),Bt(Se,"projectileTrail",{position:Ke.position,velocity:ti.velocity,life:.14,width:_?.11:j==="cluster-bunch"?.05:.075,length:_?1.8:1.2,color:_?16738866:j==="plantain-piercer"?11070552:16772456})}dc(),ot.playShot?.()}function no(){let _=Math.max(0,3-Zt);Ae&&(Ae.hidden=!ui||he==="victory"||he==="victory-result"),Ee&&(Ee.textContent=String(_)),Pe?.style.setProperty("width",`${Math.round(Zt/3*100)}%`),Pe?.parentElement?.setAttribute("aria-valuenow",String(Zt))}function xm(){if(ui||!Z)return;ui=!0,Zt=0;let _=[0,2,1],L=[.1,2.15,-.65];for(let I=0;I<3;I+=1){let j=lm(),le={spec:{name:`COMMAND RELAY ${I+1}`},view:j,hp:8+I*2,maxHp:8+I*2,lane:_[I],x:oi[_[I]],y:L[I],z:-72-I*48,phase:I*2.1,radius:1.42};j.position.set(le.x,le.y,le.z),Z.add(j),mn.push(le)}no(),kt("Relay Hunt active. Destroy all three command relays to free the stolen fleet.")}function Mm(_){let L=mn[_];L&&(Bt(Se,"explosion",{position:L,count:38,scale:1.9,speed:9,color:16733757,impulse:1.05}),Bt(Se,"hitFlash",{color:16757051,intensity:.78,impulse:.45}),jt(L.view),mn.splice(_,1),Zt+=1,ns(20),io(3),Cr("COMMAND RELAY DESTROYED",2400),ot.playJetDestroyed?.(xt(L.x/8,-1,1)),no(),Zt>=3&&Tm())}function Sm(_){if(!ui)return;let L=Ut[ke].speed*.43;for(let I=mn.length-1;I>=0;I-=1){let j=mn[I];if(j.z+=L*_,j.phase+=_,j.x=oi[j.lane]+Math.sin(j.phase*.82)*.55,j.y+=Math.sin(j.phase*1.13)*_*.12,j.view.position.set(j.x,j.y,j.z),j.view.rotation.y+=_*.34,j.view.userData.rings.forEach((le,me)=>{le.rotation.z+=_*(.9+me*.25)}),j.view.userData.core.scale.setScalar(.9+Math.sin(He*6+j.phase)*.12),j.view.userData.beacon.intensity=3.8+Math.sin(He*7+j.phase)*1.2,Math.abs(j.z-de.z)<1.6&&Math.hypot(j.x-de.x,j.y-de.y)<j.radius+de.radius){if(!fc("command relay collision",j)){_c("command relay collision");return}j.z=-112}else j.z>14&&(j.z=-112-I*18,j.lane=(j.lane+1)%oi.length,kt(`${j.spec.name} escaped the firing lane and is cycling back.`))}}function bm(_={}){Number.isFinite(_.progress)&&xr?.style.setProperty("width",`${Math.round(_.progress*100)}%`),_.speaker&&(en.textContent=_.speaker),_.text&&(St.textContent=_.text),_.voice&&Ku(_.voice)}function Em(){he="victory-result",to(),$n.textContent="Humanity has its sky back.",St.textContent=`All three relays destroyed. ${Math.floor(vt)} km survived, ${Ct.toLocaleString()} points scored, and ${Vi} coconuts recovered.`,en.textContent="Mission accomplished",xr?.style.setProperty("width","100%"),$r.hidden=!0,Mr.hidden=!1,Mr.focus({preventScroll:!0}),kt("Operation Banana Sky complete. Humanity is safe.")}function Tm(){["victory","victory-result"].includes(he)||(he="victory",mn.splice(0).forEach(_=>jt(_.view)),ei.splice(0).forEach(_=>jt(_.view)),Rt.splice(0).forEach(_=>jt(_.view)),Ce?.stop({clearSchedule:!0}),R.disabled=!0,D.disabled=!0,F&&(F.disabled=!0),Wi.clear(),no(),Ln(),ns(75),ot.stopRun?.(),ot.setPaused?.(!1),$n.textContent="The relays are down.",St.textContent="Skyshield is losing control of the stolen fleet.",en.textContent="Commander Vesper",xr?.style.setProperty("width","0%"),$r.hidden=!1,Mr.hidden=!0,ir(Oi,!0),n.inert=!0,Hi=Ff({canvas:z,vesperAsset:"./assets/commander-vesper-v1.png",wingtailAsset:"./assets/wingtail-hangar-front-v1.png",reducedMotion:Mi,onCue:bm,onComplete:Em}),Hi?.start())}function wm(){to(),Hi?.dispose(),Hi=null,ir(Oi,!1),n.inert=!1,eo()}function Am(){if(tr.length>=5)return;let _=Ar()<.68?"coconut":"banana",L=Math.floor(Ar()*oi.length),I=cm(_),j={type:_,x:oi[L]+Ht(-.45,.45),y:Ht(-1.1,4.8),z:Ht(-88,-72),phase:Ht(0,Math.PI*2),view:I};I.position.set(j.x,j.y,j.z),Z.add(I),tr.push(j)}function Cm(_){let L=tr[_];if(L){if(Bt(Se,"explosion",{position:L,count:10,scale:.42,speed:3.8,color:L.type==="banana"?16768853:6482640,impulse:.08}),L.type==="banana"){let I=Math.max(2,pt.maxShields+1);Wt=Math.min(I,Wt+1),Cr("RESCUE BANANA",250),io(2),kt("Rescue banana collected. Coconut armor restored.")}else ns(5),Cr("COCONUT CACHE",125),io(1),kt("Coconut collected. Five coconuts secured.");wr(),ot.playFlap?.(1.35),jt(L.view),tr.splice(_,1)}}function Rm(_){Ai-=_,Ai<=0&&(Am(),Ai=Math.max(3.2,5.2-ke*.45)+Ht(0,1.2));let L=Ut[ke].speed*1.08;for(let I=tr.length-1;I>=0;I-=1){let j=tr[I];j.z+=L*_,j.phase+=_*2.4,j.view.position.set(j.x,j.y+Math.sin(j.phase)*.16,j.z),j.view.rotation.y+=_*1.9,j.view.rotation.z=Math.sin(j.phase*.7)*.18,j.view.userData.ring&&(j.view.userData.ring.rotation.z+=_*1.6),Math.abs(j.z-de.z)<1.25&&Math.hypot(j.x-de.x,j.y-de.y)<1.35?Cm(I):j.z>14&&(jt(j.view),tr.splice(I,1))}}function id(_,L=!0){if(_===ke&&He>0)return;ke=_;let I=Ut[_];ae.textContent=`LEVEL ${_+1} \xB7 ${I.name}`,fe.style.width=`${I.threat}%`,fe.style.background=_>=2?"var(--danger)":_===1?"var(--accent)":"var(--signal)",fe.parentElement.setAttribute("aria-valuenow",String(I.threat)),Z&&($?.setLevel(_,{duration:L?3.1:.4,immediate:!L}),L||oc($?.getEnvironment()),Jf(Se,_)),Ce?.setLevel(_,{clearSchedule:L}),ot.playLevel?.(_),L&&_>0&&(ns(12+_*4),rm(_)),L&&_===Ut.length-1&&xm(),L&&kt(`Level ${_+1}: ${I.name}. ${I.hazard}. City sector changed.`)}function Im(){let _=0;for(let L=Ut.length-1;L>=0;L-=1)if(He>=Ut[L].time){_=L;break}_!==ke&&id(_)}function Pm(){let _=ke===0?["f16","fa18"]:ke===1?["f16","fa18","a10"]:["f16","fa18","f22","a10"];return _[Math.floor(Ar()*_.length)]}function Lm(_={}){let L=ts[_.typeHint]?_.typeHint:Pm(),I=ts[L],j=xt(Number.isInteger(_.lane)?_.lane:Math.floor(Ar()*oi.length),0,oi.length-1),le=am(L),me=_.behavior||["intercept","sweep","dive"][Math.floor(Ar()*3)],rt={entityId:_.entityId||`legacy-${Vt}-${ei.length}`,encounterId:_.encounterId||null,role:_.role||"interceptor",typeId:L,spec:I,view:le,hp:I.hp,lane:j,x:oi[j]+Ht(-.8,.8),y:Number.isFinite(_.altitude)?_.altitude:Ht(-1.6,5.2),z:Number.isFinite(_.spawnZ)?_.spawnZ:-82,speed:Ut[ke].speed*I.speed*xt(_.speedScale||1,.78,1.42),phase:Number.isFinite(_.phase)?_.phase:Ht(0,Math.PI*2),amplitude:(Number.isFinite(_.amplitude)?_.amplitude:Ht(.7,2.1))*I.agility,behavior:me,passed:!1,exhaustTimer:Ht(0,.08)};return le.position.set(rt.x,rt.y,rt.z),Z.add(le),ei.push(rt),rt}function Dm(_,L={}){let I=Ut[ke];if(!_||Rt.length>=I.missileCap)return!1;let j=om();j.visible=!1,Z.add(j);let le=xt(L.leadTime||[1.45,1.22,1.02,.84][ke],.8,3),me={directorId:L.missileId||`missile-${Vt}-${Rt.length}`,bearingHint:L.bearingHint||"ahead",state:"locking",source:_,view:j,x:_.x,y:_.y,z:_.z,timer:le,lockDuration:le,speed:19,direction:new A(0,0,1),life:5.5,smokeTimer:0,closestDistance:1/0,lastDistance:1/0,nearMissShown:!1};return Rt.push(me),ve.hidden=!1,ot.playMissileLock?.(me),!0}function nd(_,L={}){_.state="active",_.view.visible=!0,_.source=null,_.speed=19*xt(L.speedScale||1,.9,1.35),_.guidanceScale=xt(L.guidanceScale||1,.88,1.25),_.life=xt(L.lifetime||5.5,3.5,7),_.direction.set(de.x-_.x,de.y-_.y,de.z-_.z).normalize(),Bt(Se,"explosion",{position:_,count:7,scale:.32,speed:3.8,color:16747061,impulse:.08}),ot.playMissileLaunch?.(_)}function Nm(_){let L=Ut[ke];if((Wi.has("Space")||Wi.has("KeyW")||Wi.has("ArrowUp")||Wi.has("TouchLift"))&&(de.vy+=5.8*pt.lift*_),de.vy=xt(de.vy-3.1*_,-3.6,6.4*pt.lift),L.crosswind){let rt=Math.sin(He*.83+ke*1.7)+Math.sin(He*2.17)*.42;de.vx+=rt*L.crosswind*_,de.vy+=Math.cos(He*1.31+ke)*L.crosswind*.12*_}de.y+=de.vy*_;let j=L.altitudeMin??Ka,le=L.altitudeMax??$a;(de.y<j||de.y>le)&&(de.y=xt(de.y,j,le),de.vy*=-.15,bi=Math.max(bi,.08));let me=oi[de.lane];de.vx+=(me-de.x)*34*pt.handling*_,de.vx*=Math.exp(-9*Math.sqrt(pt.handling)*_),de.x+=de.vx*_,de.bank+=(xt(-de.vx*.08,-.48,.48)-de.bank)*_*8,de.pitch+=(xt(-de.vy*.045,-.34,.34)-de.pitch)*_*7,Ga(be,_,de,{active:he==="playing",speed:Ut[ke].speed,thrust:.52+xt(Math.abs(de.vy)/6.4,0,1)*.42})}function fc(_,L){return Wt<=0?!1:(Wt-=1,wr(),bi=Mi?.05:.2,Bt(Se,"explosion",{position:L,count:16,scale:.82,speed:5.5,color:6482640,impulse:.32}),Bt(Se,"hitFlash",{color:6482640,intensity:.62,impulse:.32}),kt("Coconut shield absorbed "+_+". "+Wt+" remaining."),!0)}function Um(_){for(let L=ei.length-1;L>=0;L-=1){let I=ei[L];I.z+=I.speed*_,I.phase+=_*(1.25+I.spec.agility*.55);let j=oi[I.lane];I.behavior==="sweep"?I.x=j+Math.sin(I.phase)*I.amplitude*1.8:I.behavior==="flank"?I.x=j+Math.sin(I.phase*.82)*I.amplitude*2.35:I.x+=(j+Math.sin(I.phase)*I.amplitude-I.x)*_*1.8,I.behavior==="dive"?I.y+=Math.sin(I.phase*.68)*_*2.4:I.y+=Math.cos(I.phase)*_*I.amplitude*(I.behavior==="missile-sortie"?.2:.42),I.view.position.set(I.x,I.y,I.z),I.view.rotation.z=Math.sin(I.phase)*.28*I.spec.agility,I.view.rotation.x=Math.cos(I.phase*.7)*.06,I.view.userData.engine.scale.setScalar(.8+Math.sin(He*26+I.phase)*.18),I.exhaustTimer-=_,I.exhaustTimer<=0&&(I.exhaustTimer=Er?.09:.055,Bt(Se,"jetExhaust",{position:{x:I.x,y:I.y,z:I.z-2.35*I.spec.scale},velocity:{x:0,y:0,z:-I.speed*.16},color:I.typeId==="a10"?16753487:6674943}));let le=I.z-de.z;if(Math.abs(le)<1.2&&Math.hypot(I.x-de.x,I.y-de.y)<de.radius+.7*I.spec.scale){if(fc(I.spec.name+" collision",I)){rd(L);continue}_c(`${I.spec.name} collision`);return}I.z>10&&(Math.hypot(I.x-de.x,I.y-de.y)<3.3&&(Cr("CLOSE PASS",120),Bt(Se,"nearMiss",{position:I,velocity:{x:0,y:0,z:I.speed},impulse:.14,roll:xt((I.x-de.x)/8,-1,1)*.008})),jt(I.view),ei.splice(L,1))}}function Fm(_,L){if(!_||!ue||!S)return;let I=_.x-de.x,j=_.z-de.z,le=Math.atan2(I,-j)*180/Math.PI;ue.style.setProperty("--missile-bearing",`${le.toFixed(1)}deg`);let me="Ahead";Math.abs(le)>135?me="Behind":le<-35?me="Left":le>35&&(me="Right"),S.textContent=L?`${me} \xB7 inbound`:`${me} \xB7 locking`}function Om(_){let L=0,I=null,j=null;for(let rt=Rt.length-1;rt>=0;rt-=1){let se=Rt[rt];if(se.state==="locking"){if(!se.source||!ei.includes(se.source)){jt(se.view),Rt.splice(rt,1);continue}se.x=se.source.x,se.y=se.source.y-.4,se.z=se.source.z+.4,se.timer=Math.max(0,se.timer-_*(1-pt.lockResistance)),(Math.abs(de.vx)>2.2||Math.abs(de.vy)>6.2)&&(se.timer=Math.min(se.lockDuration,se.timer+_*.22));let wt=1-se.timer/se.lockDuration;wt>=L&&(L=wt,I=se),se.timer<=0&&se.pendingLaunch&&nd(se,se.pendingLaunch);continue}se.life-=_,rn.set(de.x-se.x,de.y-se.y,de.z-se.z).normalize();let st=(se.life>3?2.8:1.2)*(se.guidanceScale||1);se.direction.lerp(rn,1-Math.exp(-st*_)).normalize(),se.speed=Math.min(31,se.speed+7*_),se.x+=se.direction.x*se.speed*_,se.y+=se.direction.y*se.speed*_,se.z+=se.direction.z*se.speed*_,se.view.position.set(se.x,se.y,se.z),se.view.lookAt(se.x-se.direction.x,se.y-se.direction.y,se.z-se.direction.z),se.view.userData.flame.scale.y=.8+Math.sin(He*32)*.2,se.smokeTimer-=_,se.smokeTimer<=0&&(se.smokeTimer=Er?.075:.045,Bt(Se,"missileSmoke",{position:se,velocity:{x:-se.direction.x*1.8,y:-se.direction.y*1.8,z:-se.direction.z*1.8}}));let Ke=Math.hypot(se.x-de.x,se.y-de.y,se.z-de.z);if(se.closestDistance=Math.min(se.closestDistance,Ke),!se.nearMissShown&&se.closestDistance<3.1&&se.closestDistance>de.radius+.35&&Ke>se.lastDistance+.16&&(se.nearMissShown=!0,Bt(Se,"nearMiss",{position:se,velocity:se.direction,impulse:.26,roll:xt((se.x-de.x)/8,-1,1)*.014})),se.lastDistance=Ke,(!j||Ke<j.distance)&&(j={missile:se,distance:Ke}),Ke<de.radius+.4){if(Bt(Se,"explosion",{position:se,count:22,scale:1.25,speed:7,color:16737853,impulse:.85}),fc("missile strike",se)){jt(se.view),Rt.splice(rt,1);continue}Bt(Se,"hitFlash",{color:16730934,intensity:1.15,impulse:.8}),_c("missile strike");return}(se.life<=0||se.z>18||Math.abs(se.x)>22||Math.abs(se.y)>16)&&(jt(se.view),Rt.splice(rt,1))}let le=!!j;j&&(I=j.missile);let me=le?100:Math.round(L*100);ve.hidden=!I,De.style.width=`${me}%`,De.setAttribute("aria-valuenow",String(me)),Fm(I,le)}function mc(_,L,I){rn.copy(I).sub(L);let j=rn.lengthSq();if(!j)return _.distanceTo(L);let le=xt(qu.copy(_).sub(L).dot(rn)/j,0,1);return qu.copy(L).addScaledVector(rn,le).distanceTo(_)}function Bm(_){for(let L=Tr.length-1;L>=0;L-=1){let I=Tr[L];I.previous.set(I.x,I.y,I.z),I.x+=I.velocity.x*_,I.y+=I.velocity.y*_,I.z+=I.velocity.z*_,I.life-=_,I.view.position.set(I.x,I.y,I.z),I.view.rotation.z+=I.spin*_,I.view.rotation.x=Math.sin((1.9-I.life)*I.tumble)*.32,I.view.rotation.y=Math.cos((1.9-I.life)*I.tumble*.74)*.24,I.rage&&I.view.userData.flame&&(I.view.userData.flame.scale.y=.82+Math.sin(performance.now()*.03)*.18),I.trailTimer-=_,I.trailTimer<=0&&(I.trailTimer=I.rage?.09:Er?.06:.035,Bt(Se,"projectileTrail",{start:I.previous,end:I.view.position,life:.16,width:I.rage?.105:.055,color:I.rage?16738613:16770443}));let j=!1;for(let le=Rt.length-1;le>=0;le-=1){let me=Rt[le];if(me.state==="active"&&mc(new A(me.x,me.y,me.z),I.previous,I.view.position)<.62){Bt(Se,"explosion",{position:me,count:12,scale:.7,speed:6,color:16765261,impulse:.24}),jt(me.view),Rt.splice(le,1),Cr("MISSILE DOWN",300),j=!0;break}}if(!j)for(let le=mn.length-1;le>=0;le-=1){let me=mn[le];if(mc(new A(me.x,me.y,me.z),I.previous,I.view.position)<me.radius){me.hp-=I.damage,Bt(Se,"explosion",{position:me,count:me.hp<=0?30:8,scale:me.hp<=0?1.6:.42,speed:me.hp<=0?8:4.5,color:me.hp<=0?16733757:16761690,impulse:me.hp<=0?.8:.12}),me.view.userData.core.material.opacity=xt(me.hp/me.maxHp,.28,1),me.hp<=0?Mm(le):kt(`${me.spec.name} integrity ${Math.max(0,Math.ceil(me.hp/me.maxHp*100))} percent.`),j=!0;break}}if(!j)for(let le=ei.length-1;le>=0;le-=1){let me=ei[le];if(mc(new A(me.x,me.y,me.z),I.previous,I.view.position)<1.05*me.spec.scale){me.hp-=I.damage,Bt(Se,"explosion",{position:me,count:me.hp<=0?20:6,scale:me.hp<=0?1.05:.32,speed:me.hp<=0?7:4,color:me.hp<=0?16738866:16769130,impulse:me.hp<=0?.55:.08}),me.hp<=0&&rd(le),j=!0;break}}(j||I.life<=0||I.z<-110)&&(jt(I.view),Tr.splice(L,1))}}function rd(_){let L=ei[_];jt(L.view),ei.splice(_,1);for(let I=Rt.length-1;I>=0;I-=1)Rt[I].source===L&&(jt(Rt[I].view),Rt.splice(I,1));ns(Math.max(2,Math.round(L.spec.score/190))),is+=1,io(2.5),Cr(`${L.spec.name} DOWN`,L.spec.score),ot.playJetDestroyed?.(xt(L.x/8,-1,1)),bi=Mi?.04:.15}function Cr(_,L){Ct+=Math.round(L*Ne),Ne=xt(Ne+.25,1,5),Ge=3.4,G.textContent=String(Ct),W.textContent=`${Ne.toFixed(2)}\xD7`,kt(`${_}. ${Math.round(L*Ne)} points.`)}function sd(){let _=ed();if(!_||he!=="playing"){b?.classList.remove("is-locked"),B&&(B.textContent="Scanning"),N&&(N.hidden=!0),b&&(b.style.left="50%",b.style.top="50%");return}rn.set(_.x,_.y,_.z).project(Q);let L=xt((rn.x*.5+.5)*100,10,90),I=xt((-rn.y*.5+.5)*100,16,84);b?.classList.add("is-locked"),b&&(b.style.left=`${L}%`,b.style.top=`${I}%`),B&&(B.textContent=`${_.spec.name} locked`),N&&(N.hidden=!1,N.textContent=`${Math.max(1,Math.round((de.z-_.z)*12))} m`)}function gc(_){let L=Ut[ke].speed*.5*pt.speed;oc($?.update(_,{speed:L}));for(let j of ge.children)j.position.z+=L*_*.34,j.position.z>18&&(j.position.z-=148);let I=Me.geometry.attributes.position;for(let j=2;j<I.array.length;j+=3)I.array[j]+=L*_*.55,I.array[j]>6&&(I.array[j]-=150);I.needsUpdate=!0}function vc(_){let L=bi;bi=Math.max(0,bi-_);let I=Xu(Se,_,{camera:Q,playerPosition:de,cameraPosition:Q.position});Lu(be,_,de,{camera:Q,shake:L,lookAhead:Er?29:32}),I&&(Q.position.x+=I.x,Q.position.y+=I.y,Q.position.z+=I.z,Q.rotateZ(I.roll))}function zm(_){if(he!=="playing"){he==="ready"?(de.y=.65+Math.sin(performance.now()/700)*.18,Ga(be,_,de,{active:!1,speed:Ut[0].speed}),gc(_*.35),vc(_)):he==="crashing"?(Ga(be,_,de,{active:!1,speed:Ut[ke].speed}),gc(_*.45),vc(_)):Xu(Se,_,{camera:Q,playerPosition:de,cameraPosition:Q?.position}),sd();return}He+=_,vt+=_*(1.5+ke*.18)*pt.speed,Yt=Math.max(0,Yt-_),ym(_),dc(),Ge-=_,Ge<=0&&Ne>1&&(Ne=Math.max(1,Ne-_*.75),W.textContent=`${Ne.toFixed(2)}\xD7`),Im(),he==="playing"&&(Ce?.update(_,{activeAircraft:ei.length,activeMissiles:Rt.length,maxAircraft:Ut[ke].maxJets,maxMissiles:Ut[ke].missileCap,difficulty:ke*.03}),Nm(_),Um(_),he==="playing"&&(Om(_),he==="playing"&&(Sm(_),he==="playing"&&(Rm(_),Bm(_),he==="playing"&&(gc(_),vc(_),sd(),k.textContent=String(Math.floor(vt)),ot.update?.(_,{state:he,level:ke,monkey:de,jets:ei,missiles:Rt}))))))}function _c(_){if(he!=="playing")return;he="crashing",Ln(),R.disabled=!0,F&&(F.disabled=!0),Wi.delete("TouchLift"),Ce?.stop({clearSchedule:!0}),ve.hidden=!0,bi=Mi?.08:.28,Bt(Se,"explosion",{position:de,count:26,scale:1.35,speed:8,color:16734013,impulse:1}),Bt(Se,"hitFlash",{color:16728111,intensity:1.25,impulse:.9}),ot.playImpact?.(_),ot.stopRun?.(_);let L=Math.floor(vt);L>=8&&ns(Math.max(1,Math.floor(L/12))),L>Qt&&(Qt=L,V.textContent=String(Qt),localStorage.setItem("monkeyNoFlyBest3D",String(Qt))),window.setTimeout(()=>{he="gameover",e.dataset.mode="result",t.hidden=!1,i.hidden=!1,t.textContent="Flight terminated.",i.textContent=`${_}. You survived ${L} km, scored ${Ct.toLocaleString()} points, and recovered ${Vi} coconuts.`,r&&(r.hidden=!0),s.textContent="Return to Hangar",s.hidden=!1,cc(!0),kt(`Flight terminated by ${_}.`)},Mi?120:650)}function ta(){he==="playing"&&(At=he,he="paused",Ln(),T.hidden=!1,T.inert=!1,T.setAttribute("aria-hidden","false"),R.disabled=!0,F&&(F.disabled=!0),Wi.delete("TouchLift"),ot.setPaused?.(!0),E.focus())}function yc(){he==="paused"&&(he=At,Ln(),T.setAttribute("aria-hidden","true"),T.hidden=!0,T.inert=!0,R.disabled=!1,F&&(F.disabled=!1),ot.setPaused?.(!1),Qn=performance.now(),n.focus({preventScroll:!0}))}function ad(){let _=ot.isMuted?.()||!1;O.setAttribute("aria-pressed",String(_)),O.setAttribute("aria-label",_?"Unmute sound":"Mute sound"),O.title=_?"Unmute sound":"Mute sound",O.querySelector("span").textContent=_?"\u{1F507}":"\u{1F50A}"}function km(_){_.target.closest("button")||_.pointerType!=="touch"&&(tn={x:_.clientX,y:_.clientY,time:performance.now()},he==="playing"&&hc())}function Hm(_){if(!tn||he!=="playing"){tn=null;return}let L=_.clientX-tn.x,I=_.clientY-tn.y;Math.abs(L)>42&&Math.abs(L)>Math.abs(I)*1.2&&uc(L>0?1:-1),tn=null}function od(_){if(he!=="playing"||_.pointerId!==nn)return;let L=U.getBoundingClientRect(),I=xt((_.clientX-L.left)/Math.max(1,L.width),0,1);de.lane=xt(Math.round(I*(oi.length-1)),0,oi.length-1)}function Gm(_){he==="playing"&&(_.preventDefault(),nn=_.pointerId,U.setPointerCapture?.(_.pointerId),od(_))}function ld(_){_.pointerId===nn&&(nn=null)}function Vm(_){he==="playing"&&(_.preventDefault(),F.setPointerCapture?.(_.pointerId),Wi.add("TouchLift"),hc())}function cd(_){_.preventDefault(),Wi.delete("TouchLift")}s.addEventListener("click",()=>{e.dataset.mode==="result"||ft==="complete"?eo():fm()}),a?.addEventListener("click",$u),g?.addEventListener("click",_=>{let L=_.target.closest("[data-response]");L&&gm(L.dataset.response)}),Xe?.addEventListener("click",Qu),$r?.addEventListener("click",()=>Hi?.skip()),Mr?.addEventListener("click",wm),We?.addEventListener("click",()=>{let _=wi(zt,In[zt]);if(!_)return;let L=kf(ht,zt,_.id);tt.textContent=L.ok?L.item.name+(L.action==="purchased"?" purchased and equipped.":" equipped."):L.reason,ql?.(be,ht.equipped),Qa(zt),Yu()}),Ye?.addEventListener("click",_=>{let L=_.target.closest("[data-category]");L&&Qa(L.dataset.category)}),D.addEventListener("click",ta),E.addEventListener("click",yc),C.addEventListener("click",()=>{yc(),Qu()}),O.addEventListener("click",()=>{ot.setMuted?.(!ot.isMuted?.()),w.muted=!!ot.isMuted?.(),ad()}),R.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),pc()}),Y?.addEventListener("click",td),U?.addEventListener("pointerdown",Gm),U?.addEventListener("pointermove",od),U?.addEventListener("pointerup",ld),U?.addEventListener("pointercancel",ld),F?.addEventListener("pointerdown",Vm),F?.addEventListener("pointerup",cd),F?.addEventListener("pointercancel",cd),n.addEventListener("pointerdown",km),n.addEventListener("pointerup",Hm),n.addEventListener("pointercancel",()=>{tn=null}),n.addEventListener("webglcontextlost",_=>{_.preventDefault(),he==="playing"&&ta(),kt("Graphics context paused. Waiting for recovery.")}),n.addEventListener("webglcontextrestored",()=>location.reload()),window.addEventListener("resize",lc),window.addEventListener("blur",()=>{he==="playing"&&ta(),Si?.setPaused(!0),Hi?.setPaused(!0),w.pause()}),window.addEventListener("focus",()=>{Si?.setPaused(!1),Hi?.setPaused(!1),["cinematic","dialogue","victory"].includes(he)&&w.src&&!w.ended&&w.play().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.hidden&&he==="playing"&&ta(),Si?.setPaused(document.hidden),Hi?.setPaused(document.hidden),document.hidden?w.pause():["cinematic","dialogue","victory"].includes(he)&&w.src&&!w.ended&&w.play().catch(()=>{})}),window.addEventListener("keydown",_=>{if((["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(_.code)||he==="playing"&&_.code==="Enter")&&_.preventDefault(),!(_.repeat&&["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(_.code))){if(Wi.add(_.code),he==="victory"&&_.code==="Escape"){_.preventDefault(),Hi?.skip();return}if(["cinematic","dialogue"].includes(he)&&_.code==="Escape"){_.preventDefault(),$u();return}if(he==="dialogue"&&["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(_.code)){_.preventDefault();let L=[...g.querySelectorAll("button")],I=Math.max(0,L.indexOf(document.activeElement));L[_.code==="ArrowLeft"||_.code==="KeyA"?Math.max(0,I-1):Math.min(L.length-1,I+1)]?.focus();return}he==="playing"?((_.code==="Space"||_.code==="KeyW"||_.code==="ArrowUp")&&hc(),(_.code==="KeyA"||_.code==="ArrowLeft")&&uc(-1),(_.code==="KeyD"||_.code==="ArrowRight")&&uc(1),(_.code==="Enter"||_.code==="KeyX"||_.code==="KeyF"||_.code==="ShiftLeft")&&pc(),(_.code==="KeyG"||_.code==="KeyB")&&td(),(_.code==="Escape"||_.code==="KeyP")&&ta()):he==="paused"&&(_.code==="Escape"||_.code==="KeyP")&&yc()}}),window.addEventListener("keyup",_=>Wi.delete(_.code));function hd(_){let L=Math.min(.1,(_-Qn)/1e3);for(Qn=_,Gi=L>.026?Gi+1:Math.max(0,Gi-2),Gi>90&&hi>.72&&(hi=Math.max(.72,hi-.12),Gi=0,Kf(Se,hi<.84?"low":"medium",{reducedMotion:Mi}),lc()),er+=L;er>=Sr;)zm(Sr),er-=Sr;ki&&Z&&Q&&!["paused","victory","victory-result"].includes(he)&&!document.hidden&&ki.render(Z,Q),requestAnimationFrame(hd)}n.tabIndex=0,s.disabled=!0,s.textContent="Loading 3D Flight",ad(),dm(),requestAnimationFrame(hd)})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
