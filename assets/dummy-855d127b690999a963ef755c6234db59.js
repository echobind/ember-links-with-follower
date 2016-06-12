"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/html-tag",["exports","ember-links-with-follower/components/html-tag"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/links-with-follower",["exports","ember-links-with-follower/components/links-with-follower"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("page1"),this.route("page2")}),e["default"]=a}),define("dummy/routes/page1",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/page2",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0",loc:{source:null,start:{line:16,column:6},end:{line:18,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        Back Home ");e.appendChild(t,n);var n=e.createElement("small"),a=e.createTextNode("(notice follower still works)");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0",loc:{source:null,start:{line:22,column:6},end:{line:24,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","fa-icon",["home"],[],["loc",[null,[23,8],[23,26]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0",loc:{source:null,start:{line:26,column:6},end:{line:31,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(4);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a[3]=e.createMorphAt(t,7,7,n),a},statements:[["inline","fa-icon",["space-shuttle"],["flip","horizontal"],["loc",[null,[27,8],[27,53]]]],["inline","fa-icon",["ship"],[],["loc",[null,[28,8],[28,26]]]],["inline","fa-icon",["coffee"],[],["loc",[null,[29,8],[29,28]]]],["inline","fa-icon",["space-shuttle"],[],["loc",[null,[30,8],[30,35]]]]],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.0",loc:{source:null,start:{line:33,column:6},end:{line:35,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","fa-icon",["bolt"],[],["loc",[null,[34,8],[34,26]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.6.0",loc:{source:null,start:{line:21,column:4},end:{line:36,column:4}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),a[2]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","link-to",["index"],["tagName","li"],0,null,["loc",[null,[22,6],[24,18]]]],["block","link-to",["page1"],["tagName","li"],1,null,["loc",[null,[26,6],[31,18]]]],["block","link-to",["page2"],["tagName","li"],2,null,["loc",[null,[33,6],[35,18]]]]],locals:[],templates:[e,t,n]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:49,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","app-container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("header"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h1");e.setAttribute(r,"class","header__logo");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("\n      with _\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/echobind/ember-links-with-follower"),e.setAttribute(r,"class","github-link"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("main"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","back-home");var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("section");e.setAttribute(r,"class","content");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("footer"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://echobind.com"),e.setAttribute(r,"target","_blank");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://s3.amazonaws.com/echobind/images/brought-to-you.png"),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[1]),i=e.childAt(r,[3]),l=e.childAt(a,[3]),o=new Array(6);return o[0]=e.createMorphAt(e.childAt(r,[1]),1,1),o[1]=e.createMorphAt(i,1,1),o[2]=e.createMorphAt(i,3,3),o[3]=e.createMorphAt(e.childAt(l,[1]),1,1),o[4]=e.createMorphAt(l,3,3),o[5]=e.createMorphAt(e.childAt(l,[5]),1,1),o},statements:[["inline","fa-icon",["link"],[],["loc",[null,[4,6],[4,24]]]],["inline","fa-icon",["github"],["class","github-icon"],["loc",[null,[9,6],[9,46]]]],["inline","app-version",[],["class","app-version"],["loc",[null,[10,6],[10,41]]]],["block","link-to",["index"],[],0,null,["loc",[null,[16,6],[18,18]]]],["block","links-with-follower",[],["class","icon-nav"],1,null,["loc",[null,[21,4],[36,28]]]],["content","outlet",["loc",[null,[39,6],[39,16]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),a=e.createTextNode("What is this?");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createElement("a");e.setAttribute(a,"href","https://github.com/echobind/ember-links-with-follower"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("Links with Follower");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(" provides a component that renders a set of links with a follower line underneath. The follower will animate to the position of the active link, and grow or shrink in size if needed. If no active links are found, the follower will hide.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("The navigation above is an example of Links with Follower in action. Since Links with Follower hooks in to the Router's `willTransition` event, you can use `link-to` or `transitionTo` and the follower will still update properly.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Want to override component defaults? ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","docs/classes/LinksWithFollower.html");var r=e.createTextNode("Check out the docs");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(".");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/page1",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/page1.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),a=e.createTextNode("Welcome");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Don't worry. We're not sure what Space Shuttle - Ship - Coffee - Space Shuttle means either.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/page2",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.0",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/page2.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),a=e.createTextNode("Congratulations!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("You might also use Twitter's Moments feature.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-links-with-follower",version:"0.2.3+f180aa85"});