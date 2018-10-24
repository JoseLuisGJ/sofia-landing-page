"use strict";function initFly(){map.flyTo({center:[geojson.features[flyPoints[index]].geometry.coordinates[0],geojson.features[flyPoints[index]].geometry.coordinates[1]]}),index++,index>=flyPoints.length&&(index=0)}console.log("SofiA: 👋 Hi also from console! Let's rock 🚀"),$(document).ready(function(){var e=$(".c-sofia__logo"),t=$(".c-sofia__webgl"),r=$(".c-sofia__wrapper"),s=$(".c-sofia__text h1"),i=$(".c-sofia__text h2"),a=$(".c-sofia__text a"),o=$(".c-sofia__footer");TweenLite.set(r,{visibility:"visible"});var n=new TimelineLite;TweenLite.fromTo(t,1,{autoAlpha:0},{autoAlpha:1,delay:1}),n.from(e,.5,{opacity:0,y:50,ease:Power1.easeOut}),n.from(s,.5,{opacity:0,y:50,ease:Power1.easeOut},"-=0.25"),n.from(i,.5,{opacity:0,y:50,ease:Power1.easeOut},"-=0.25"),n.from(a,.5,{opacity:0,y:50,ease:Power1.easeOut},"-=0.25"),n.from(o,.5,{opacity:0,y:50,ease:Power1.easeOut},"-=0.25")}),mapboxgl.accessToken="pk.eyJ1IjoiZXJndW0iLCJhIjoiN2NlMThmYjEzYmYzMTRjMzBhNGIwOGRhNTIwYzFkMWQifQ.T-90-9PzPm5KRj4raWiFdA";var map=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/outdoors-v10",bearing:27,pitch:45,center:[-119.31208,37.3977],zoom:8.2}),geojson={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-119.51185,37.57664]},properties:{title:"Fire alert ¿🔥?",description:"Washington, D.C."}},{type:"Feature",geometry:{type:"Point",coordinates:[-119.17428,37.88528]},properties:{title:"Fire alert ¿🔥?",description:"San Francisco, California"}},{type:"Feature",geometry:{type:"Point",coordinates:[-119.00248,37.59999]},properties:{title:"Fire alert ¿🔥?",description:"San Francisco, California"}},{type:"Feature",geometry:{type:"Point",coordinates:[-72.1417,7.48949]},properties:{title:"Confirmed fire 🔥!",description:"San Cristobal, Venezuela"}},{type:"Feature",geometry:{type:"Point",coordinates:[-72.16141,7.52473]},properties:{title:"Fire alert ¿🔥?",description:"San Cristobal, Venezuela"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.49851,39.66243]},properties:{title:"Fire alert ¿🔥?",description:"Sierra Calderona, Valencia (España)"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.45933,39.67511]},properties:{title:"Fire confirmed 🔥!",description:"Sierra Calderona, Valencia (España)"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.51255,39.69446]},properties:{title:"Fire alert ¿🔥?",description:"Sierra Calderona, Valencia (España)"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.45725,39.70299]},properties:{title:"Fire alert ¿🔥?",description:"Sierra Calderona, Valencia (España)"}}]};geojson.features.forEach(function(e){var t=document.createElement("div");t.className="marker",new mapboxgl.Marker(t).setLngLat(e.geometry.coordinates).setPopup(new mapboxgl.Popup({offset:25}).setHTML("<h3>"+e.properties.title+"</h3><p>"+e.properties.description+"</p>")).addTo(map)});var index=0,flyPoints=[1,4,6],time=10;setInterval(initFly,1e3*time),initFly(),THREE.EffectComposer=function(e,t){if(this.renderer=e,void 0===t){var r={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,stencilBuffer:!1},s=e.getDrawingBufferSize();t=new THREE.WebGLRenderTarget(s.width,s.height,r),t.texture.name="EffectComposer.rt1"}this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.passes=[],void 0===THREE.CopyShader&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),void 0===THREE.ShaderPass&&console.error("THREE.EffectComposer relies on THREE.ShaderPass"),this.copyPass=new THREE.ShaderPass(THREE.CopyShader)},Object.assign(THREE.EffectComposer.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e);var t=this.renderer.getDrawingBufferSize();e.setSize(t.width,t.height)},insertPass:function(e,t){this.passes.splice(t,0,e)},render:function(e){var t,r,s=!1,i=this.passes.length;for(r=0;r<i;r++)if(t=this.passes[r],t.enabled!==!1){if(t.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),t.needsSwap){if(s){var a=this.renderer.context;a.stencilFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.stencilFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==THREE.MaskPass&&(t instanceof THREE.MaskPass?s=!0:t instanceof THREE.ClearMaskPass&&(s=!1))}},reset:function(e){if(void 0===e){var t=this.renderer.getDrawingBufferSize();e=this.renderTarget1.clone(),e.setSize(t.width,t.height)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this.renderTarget1.setSize(e,t),this.renderTarget2.setSize(e,t);for(var r=0;r<this.passes.length;r++)this.passes[r].setSize(e,t)}}),THREE.Pass=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1},Object.assign(THREE.Pass.prototype,{setSize:function(e,t){},render:function(e,t,r,s,i){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),THREE.GlitchPass=function(e){THREE.Pass.call(this),void 0===THREE.DigitalGlitch&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=THREE.DigitalGlitch;this.uniforms=THREE.UniformsUtils.clone(t.uniforms),void 0==e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new THREE.OrthographicCamera((-1),1,1,(-1),0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.goWild=!1,this.curF=0,this.generateTrigger(),this.refParent},THREE.GlitchPass.prototype=Object.assign(Object.create(THREE.Pass.prototype),{constructor:THREE.GlitchPass,render:function(e,t,r,s,i){this.uniforms.tDiffuse.value=r.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||1==this.goWild?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=THREE.Math.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=THREE.Math.randFloat(-1,1),this.uniforms.seed_y.value=THREE.Math.randFloat(-1,1),this.uniforms.distortion_x.value=THREE.Math.randFloat(0,1),this.uniforms.distortion_y.value=THREE.Math.randFloat(0,1),this.curF=0,this.generateTrigger(),this.refParent.glitchStart()):this.curF%this.randX<this.randX/10?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=THREE.Math.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=THREE.Math.randFloat(0,1),this.uniforms.distortion_y.value=THREE.Math.randFloat(0,1),this.uniforms.seed_x.value=THREE.Math.randFloat(-.3,.3),this.uniforms.seed_y.value=THREE.Math.randFloat(-.3,.3)):0==this.goWild&&(this.uniforms.byp.value=1),0==this.curF,this.curF++,this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)},generateTrigger:function(){this.randX=400},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),r=e*e,s=0;s<r;s++){var i=THREE.Math.randFloat(0,1);t[3*s+0]=i,t[3*s+1]=i,t[3*s+2]=i}var a=new THREE.DataTexture(t,e,e,THREE.RGBFormat,THREE.FloatType);return a.needsUpdate=!0,a}}),THREE.MaskPass=function(e,t){THREE.Pass.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1},THREE.MaskPass.prototype=Object.assign(Object.create(THREE.Pass.prototype),{constructor:THREE.MaskPass,render:function(e,t,r,s,i){var a=e.context,o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);var n,l;this.inverse?(n=0,l=1):(n=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,n,4294967295),o.buffers.stencil.setClear(l),e.render(this.scene,this.camera,r,this.clear),e.render(this.scene,this.camera,t,this.clear),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP)}}),THREE.ClearMaskPass=function(){THREE.Pass.call(this),this.needsSwap=!1},THREE.ClearMaskPass.prototype=Object.create(THREE.Pass.prototype),Object.assign(THREE.ClearMaskPass.prototype,{render:function(e,t,r,s,i){e.state.buffers.stencil.setTest(!1)}}),THREE.RenderPass=function(e,t,r,s,i){THREE.Pass.call(this),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=void 0!==i?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1},THREE.RenderPass.prototype=Object.assign(Object.create(THREE.Pass.prototype),{constructor:THREE.RenderPass,render:function(e,t,r,s,i){var a=e.autoClear;e.autoClear=!1,this.scene.overrideMaterial=this.overrideMaterial;var o,n;this.clearColor&&(o=e.getClearColor().getHex(),n=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.render(this.scene,this.camera,this.renderToScreen?null:r,this.clear),this.clearColor&&e.setClearColor(o,n),this.scene.overrideMaterial=null,e.autoClear=a}}),THREE.ShaderPass=function(e,t){THREE.Pass.call(this),this.textureID=void 0!==t?t:"tDiffuse",e instanceof THREE.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=THREE.UniformsUtils.clone(e.uniforms),this.material=new THREE.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.camera=new THREE.OrthographicCamera((-1),1,1,(-1),0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad)},THREE.ShaderPass.prototype=Object.assign(Object.create(THREE.Pass.prototype),{constructor:THREE.ShaderPass,render:function(e,t,r,s,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)}}),THREE.CopyShader={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")},THREE.DigitalGlitch={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform int byp;","uniform sampler2D tDiffuse;","uniform sampler2D tDisp;","uniform float amount;","uniform float angle;","uniform float seed;","uniform float seed_x;","uniform float seed_y;","uniform float distortion_x;","uniform float distortion_y;","uniform float col_s;","varying vec2 vUv;","float rand(vec2 co){","return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);","}","void main() {","if(byp<1) {","vec2 p = vUv;","float xs = floor(gl_FragCoord.x / 0.5);","float ys = floor(gl_FragCoord.y / 0.5);","vec4 normal = texture2D (tDisp, p*seed*seed);","if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {","if(seed_x>0.){","p.y = 1. - (p.y + distortion_y);","}","else {","p.y = distortion_y;","}","}","if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {","if(seed_y>0.){","p.x=distortion_x;","}","else {","p.x = 1. - (p.x + distortion_x);","}","}","p.x+=normal.x*seed_x*(seed/5.);","p.y+=normal.y*seed_y*(seed/5.);","vec2 offset = amount * vec2( cos(angle), sin(angle));","vec4 cr = texture2D(tDiffuse, p + offset);","vec4 cga = texture2D(tDiffuse, p);","vec4 cb = texture2D(tDiffuse, p - offset);","gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);","vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);","gl_FragColor = gl_FragColor+ snow;","}","else {","gl_FragColor=texture2D (tDiffuse, vUv);","}","}"].join("\n")};