(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(i,e,t){i.exports=t(19)},17:function(i,e,t){},19:function(i,e,t){"use strict";t.r(e);var n=t(2),o=t.n(n),a=t(4),s=t.n(a),c=(t(17),t(5)),r=t(6),h=t(10),d=t(7),u=t(9),b=t(0),l=t(1),p=function(i,e){return Math.floor(Math.random()*(e-i+1))+i},v=t(8),w=function(i){function e(i){var t;return Object(c.a)(this,e),(t=Object(h.a)(this,Object(d.a)(e).call(this,i))).myRef=o.a.createRef(),t.fieldWidth=100,t.scene=void 0,t.camera=void 0,t.renderer=void 0,t.cones=[],t.light=void 0,t.cube=void 0,t.plane=void 0,t.group=void 0,t.pivot=void 0,t.bounceAnimation=void 0,t.animate=t.animate.bind(Object(b.a)(Object(b.a)(t))),t.init=t.init.bind(Object(b.a)(Object(b.a)(t))),t.onKeyPress=t.onKeyPress.bind(Object(b.a)(Object(b.a)(t))),t.onKeyDown=t.onKeyDown.bind(Object(b.a)(Object(b.a)(t))),t.onKeyUp=t.onKeyUp.bind(Object(b.a)(Object(b.a)(t))),t.initListeners=t.initListeners.bind(Object(b.a)(Object(b.a)(t))),t.initScene=t.initScene.bind(Object(b.a)(Object(b.a)(t))),t.initCamera=t.initCamera.bind(Object(b.a)(Object(b.a)(t))),t.initRenderer=t.initRenderer.bind(Object(b.a)(Object(b.a)(t))),t.initCones=t.initCones.bind(Object(b.a)(Object(b.a)(t))),t.initLight=t.initLight.bind(Object(b.a)(Object(b.a)(t))),t.initPlane=t.initPlane.bind(Object(b.a)(Object(b.a)(t))),t.initCube=t.initCube.bind(Object(b.a)(Object(b.a)(t))),t.initGroup=t.initGroup.bind(Object(b.a)(Object(b.a)(t))),t.initPivot=t.initPivot.bind(Object(b.a)(Object(b.a)(t))),t.initBounceAnimation=t.initBounceAnimation.bind(Object(b.a)(Object(b.a)(t))),t}return Object(u.a)(e,i),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.init(),this.animate()}},{key:"init",value:function(){this.initListeners(),this.initScene(),this.initCamera(),this.initRenderer(),this.initCones(),this.initCube(),this.initLight(),this.initPlane(),this.initGroup(),this.initPivot(),this.initBounceAnimation()}},{key:"initListeners",value:function(){document.addEventListener("keypress",this.onKeyPress),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)}},{key:"initScene",value:function(){this.scene=new l.m;var i=new l.b(0);this.scene.background=i,this.scene.fog=new l.e(i,.0025,20)}},{key:"initCamera",value:function(){this.camera=new l.k(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=2,this.camera.position.z=3}},{key:"initRenderer",value:function(){this.renderer=new l.n,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=l.j,this.renderer.setSize(window.innerWidth,window.innerHeight),this.myRef.current.appendChild(this.renderer.domElement)}},{key:"initCones",value:function(){for(var i=new l.c(1,10,32),e=new l.h({color:2910224,shininess:0}),t=0;t<5*this.fieldWidth;++t){var n=new l.f(i,e);n.position.x=p(-this.fieldWidth/2,this.fieldWidth/2),n.position.z=p(-this.fieldWidth/2,this.fieldWidth/2),n.castShadow=!0,this.cones.push(n),this.scene.add(n)}}},{key:"initLight",value:function(){this.light=new l.d(16777215,1),this.light.position.set(this.camera.position.x,this.camera.position.y,this.camera.position.z-2),this.light.target=this.cube,this.light.castShadow=!0,this.scene.add(this.light)}},{key:"initPlane",value:function(){var i=new l.l(this.fieldWidth,this.fieldWidth,1,1),e=new l.g({color:73033});this.plane=new l.f(i,e),this.plane.rotation.x=-Math.PI/2,this.plane.receiveShadow=!0,this.scene.add(this.plane)}},{key:"initCube",value:function(){var i=new l.a(.5,.5,1),e=new l.h({color:16740978,shininess:200});this.cube=new l.f(i,e),this.cube.position.y=1,this.cube.castShadow=!0,this.scene.add(this.cube)}},{key:"initGroup",value:function(){var i=this;this.group=new l.i,this.group.add(this.plane),this.cones.forEach(function(e){return i.group.add(e)}),this.scene.add(this.group)}},{key:"initPivot",value:function(){this.pivot=new l.i,this.pivot.add(this.group),this.scene.add(this.pivot)}},{key:"initBounceAnimation",value:function(){this.bounceAnimation=Object(v.a)({targets:this.cube.position,y:1.2,duration:1200,direction:"alternate",easing:"linear",loop:!0}),this.bounceAnimation.pause()}},{key:"onKeyPress",value:function(i){switch(i.key){case"w":this.forward();break;case"a":this.rotate("left");break;case"d":this.rotate("right")}}},{key:"onKeyUp",value:function(i){switch(i.key){case"w":this.bounceAnimation.pause()}}},{key:"onKeyDown",value:function(i){switch(i.key){case"w":this.bounceAnimation.play()}}},{key:"forward",value:function(){this.group.position.x-=.01*Math.sin(this.pivot.rotation.y),this.group.position.z+=.01*Math.cos(this.pivot.rotation.y)}},{key:"rotate",value:function(i){"right"===i&&(this.pivot.rotation.y+=.01),"left"===i&&(this.pivot.rotation.y-=.01)}},{key:"animate",value:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.myRef})}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(i){i.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.0a3d156d.chunk.js.map