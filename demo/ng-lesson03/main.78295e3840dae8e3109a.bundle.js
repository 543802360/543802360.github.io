webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),o=u("aR8+"),i=u("wQAS"),_=u("q4dy"),e=u("qbdv"),r=u("fc+i"),s=u("bm2B");u.d(n,"a",function(){return a});var a=t.b(o.a,[i.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[_.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,e.a,e.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,r.b,r.c,[e.c]),t.d(6144,t.q,null,[r.b]),t.d(4608,r.d,r.e,[]),t.d(5120,r.f,function(l,n,u,t){return[new r.g(l),new r.h(n),new r.i(u,t)]},[e.c,e.c,e.c,r.d]),t.d(4608,r.j,r.j,[r.f,t.r]),t.d(135680,r.k,r.k,[e.c]),t.d(4608,r.l,r.l,[r.j,r.k]),t.d(6144,t.s,null,[r.l]),t.d(6144,r.m,null,[r.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,r.n,r.n,[e.c]),t.d(4608,r.o,r.o,[e.c]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.b,[]),t.d(512,e.d,e.d,[]),t.d(1024,t.u,r.p,[]),t.d(1024,t.v,function(l,n){return[r.q(l,n)]},[[2,r.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,r.s,r.s,[[3,r.s]]),t.d(512,s.c,s.c,[]),t.d(512,s.d,s.d,[]),t.d(512,s.e,s.e,[]),t.d(512,o.a,o.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"0kj5":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},"ACA/":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.submitted=!1,this.submitContent=[]}return l.prototype.onSubmit=function(l){console.log("您提交的表单为：",l),this.submitContent.push(l),this.submitted=!0},l.prototype.clearSubmitted=function(){this.submitContent.length=0,this.submitted=!1},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},Bwlw:function(l,n,u){"use strict";var t=u("bm2B");u.d(n,"a",function(){return o});var o=function(){function l(l){var n=this;this.fb=l,this.myForm=l.group({name:["",t.f.required],age:[,t.f.required],sex:["",t.f.required]}),this.name=this.myForm.controls.name,this.age=this.myForm.controls.age,this.sex=this.myForm.controls.sex,this.name.valueChanges.subscribe(function(l){n.inputName="您输入的姓名为："+l,console.log(n.inputName)}),this.age.valueChanges.subscribe(function(l){n.inputName="您输入的年龄为："+l,console.log(n.inputAge)}),this.submitContent=[],this.submitted=!1}return l.prototype.onSubmit=function(l){console.log(l),this.submitContent.push(l),this.submitted=!0},l.prototype.clearSubmitted=function(){this.submitContent.length=0,this.submitted=!1},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:t.b}]},l}()},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},"Pcw+":function(l,n,u){"use strict";function t(l){return d._17(0,[(l()(),d._19(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),d._18(null,["\n            姓名必填\n          "])),(l()(),d._18(null,["\n        "]))],null,null)}function o(l){return d._17(0,[(l()(),d._19(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),d._18(null,["\n            年龄必填\n          "])),(l()(),d._18(null,["\n        "]))],null,null)}function i(l){return d._17(0,[(l()(),d._19(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),d._18(null,["\n            性别必填\n          "])),(l()(),d._18(null,["\n        "]))],null,null)}function _(l){return d._17(0,[(l()(),d._19(0,null,null,19,"div",[],null,null,null,null,null)),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,16,"div",[["class","container"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._19(0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,4,"div",[["class","col-md-offset-2 col-md-2"]],null,null,null,null,null)),(l()(),d._18(null,["\n            "])),(l()(),d._19(0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","submit"]],null,null,null,null,null)),(l()(),d._18(null,["提交"])),(l()(),d._18(null,["\n          "])),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,4,"div",[["class","col-md-offset-4 col-md-2"]],null,null,null,null,null)),(l()(),d._18(null,["\n            "])),(l()(),d._19(0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.clearSubmitted()&&t}return t},null,null)),(l()(),d._18(null,["清除"])),(l()(),d._18(null,["\n          "])),(l()(),d._18(null,["\n        "])),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n    "]))],null,null)}function e(l){return d._17(0,[(l()(),d._19(0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._18(null,["",""])),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._18(null,["",""])),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._18(null,["",""])),(l()(),d._18(null,["\n        "]))],null,function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.age),l(n,9,0,n.context.$implicit.sex)})}function r(l){return d._17(0,[(l()(),d._19(0,null,null,30,"div",[],null,null,null,null,null)),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),d._18(null,[" 您的提交内容如下："])),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,22,"table",[["class","table table-hover table-condensed"]],null,null,null,null,null)),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._19(0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._18(null,["姓名"])),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._18(null,["年龄"])),(l()(),d._18(null,["\n          "])),(l()(),d._19(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._18(null,["性别"])),(l()(),d._18(null,["\n        "])),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._22(16777216,null,null,1,null,e)),d._20(802816,null,0,m.h,[d._10,d._11,d.m],{ngForOf:[0,"ngForOf"]},null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n  "]))],function(l,n){l(n,27,0,n.component.submitContent)},null)}function s(l){return d._17(0,[(l()(),d._19(0,null,null,102,"div",[["class","continer"]],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,3,"h2",[],null,null,null,null,null)),d._20(278528,null,0,m.i,[d.o,d.J,d._9],{ngStyle:[0,"ngStyle"]},null),d._23({"text-align":0}),(l()(),d._18(null,["Angular FormBuilder表单"])),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,78,"form",[["class","form-horizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;if("submit"===n){t=!1!==d._24(l,12).onSubmit(u)&&t}if("reset"===n){t=!1!==d._24(l,12).onReset()&&t}if("ngSubmit"===n){t=!1!==o.onSubmit(o.myForm.value)&&t}return t},null,null)),d._20(16384,null,0,f.g,[],null,null),d._20(540672,null,0,f.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),d._25(2048,null,f.i,null,[f.h]),d._20(16384,null,0,f.j,[f.i],null,null),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,1,"label",[["class"," col-md-2 control-label"],["for","name"]],null,null,null,null,null)),(l()(),d._18(null,["姓名："])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,8,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._19(0,null,null,5,"input",[["class","form-control"],["id","name"],["placeholder","请输入姓名"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==d._24(l,25)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==d._24(l,25).onTouched()&&t}if("compositionstart"===n){t=!1!==d._24(l,25)._compositionStart()&&t}if("compositionend"===n){t=!1!==d._24(l,25)._compositionEnd(u.target.value)&&t}return t},null,null)),d._20(16384,null,0,f.k,[d.I,d.J,[2,f.l]],null,null),d._25(1024,null,f.m,function(l){return[l]},[f.k]),d._20(540672,null,0,f.n,[[8,null],[8,null],[2,f.m]],{form:[0,"form"]},null),d._25(2048,null,f.o,null,[f.n]),d._20(16384,null,0,f.p,[f.o],null,null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,4,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._22(16777216,null,null,1,null,t)),d._20(16384,null,0,m.j,[d._10,d._11],{ngIf:[0,"ngIf"]},null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n\n    "])),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,1,"label",[["class","  col-md-2 control-label"],["for","name"]],null,null,null,null,null)),(l()(),d._18(null,["年龄："])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,8,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._19(0,null,null,5,"input",[["class","form-control"],["id","age"],["placeholder","请输入年龄"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==d._24(l,48)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==d._24(l,48).onTouched()&&t}if("compositionstart"===n){t=!1!==d._24(l,48)._compositionStart()&&t}if("compositionend"===n){t=!1!==d._24(l,48)._compositionEnd(u.target.value)&&t}return t},null,null)),d._20(16384,null,0,f.k,[d.I,d.J,[2,f.l]],null,null),d._25(1024,null,f.m,function(l){return[l]},[f.k]),d._20(540672,null,0,f.n,[[8,null],[8,null],[2,f.m]],{form:[0,"form"]},null),d._25(2048,null,f.o,null,[f.n]),d._20(16384,null,0,f.p,[f.o],null,null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,4,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._22(16777216,null,null,1,null,o)),d._20(16384,null,0,m.j,[d._10,d._11],{ngIf:[0,"ngIf"]},null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,1,"label",[["class","  col-md-2 control-label"],["for","name"]],null,null,null,null,null)),(l()(),d._18(null,["性别："])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,8,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._19(0,null,null,5,"input",[["class","form-control"],["id","sex"],["placeholder","请输入性别"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==d._24(l,71)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==d._24(l,71).onTouched()&&t}if("compositionstart"===n){t=!1!==d._24(l,71)._compositionStart()&&t}if("compositionend"===n){t=!1!==d._24(l,71)._compositionEnd(u.target.value)&&t}return t},null,null)),d._20(16384,null,0,f.k,[d.I,d.J,[2,f.l]],null,null),d._25(1024,null,f.m,function(l){return[l]},[f.k]),d._20(540672,null,0,f.n,[[8,null],[8,null],[2,f.m]],{form:[0,"form"]},null),d._25(2048,null,f.o,null,[f.n]),d._20(16384,null,0,f.p,[f.o],null,null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n      "])),(l()(),d._19(0,null,null,4,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),d._18(null,["\n        "])),(l()(),d._22(16777216,null,null,1,null,i)),d._20(16384,null,0,m.j,[d._10,d._11],{ngIf:[0,"ngIf"]},null),(l()(),d._18(null,["\n      "])),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n    "])),(l()(),d._18(null,["\n    "])),(l()(),d._22(16777216,null,null,1,null,_)),d._20(16384,null,0,m.j,[d._10,d._11],{ngIf:[0,"ngIf"]},null),(l()(),d._18(null,["\n\n  "])),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),d._20(278528,null,0,m.i,[d.o,d.J,d._9],{ngStyle:[0,"ngStyle"]},null),d._23({"text-align":0}),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),d._18(null,["",""])),(l()(),d._18(null,["\n    "])),(l()(),d._19(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),d._18(null,["",""])),(l()(),d._18(null,["\n  "])),(l()(),d._18(null,["\n"])),(l()(),d._18(null,["\n"])),(l()(),d._18(null,["\n"])),(l()(),d._19(0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),d._18(null,["\n  "])),(l()(),d._22(16777216,null,null,1,null,r)),d._20(16384,null,0,m.j,[d._10,d._11],{ngIf:[0,"ngIf"]},null),(l()(),d._18(null,["\n"])),(l()(),d._18(null,["\n"]))],function(l,n){var u=n.component;l(n,3,0,l(n,4,0,"center")),l(n,12,0,u.myForm),l(n,27,0,u.myForm.controls.name),l(n,35,0,!u.name.valid),l(n,50,0,u.myForm.controls.age),l(n,58,0,!u.age.valid),l(n,73,0,u.myForm.controls.sex),l(n,81,0,!u.sex.valid),l(n,87,0,u.myForm.valid),l(n,93,0,l(n,94,0,"center")),l(n,114,0,u.submitted)},function(l,n){var u=n.component;l(n,10,0,d._24(n,14).ngClassUntouched,d._24(n,14).ngClassTouched,d._24(n,14).ngClassPristine,d._24(n,14).ngClassDirty,d._24(n,14).ngClassValid,d._24(n,14).ngClassInvalid,d._24(n,14).ngClassPending),l(n,24,0,d._24(n,29).ngClassUntouched,d._24(n,29).ngClassTouched,d._24(n,29).ngClassPristine,d._24(n,29).ngClassDirty,d._24(n,29).ngClassValid,d._24(n,29).ngClassInvalid,d._24(n,29).ngClassPending),l(n,47,0,d._24(n,52).ngClassUntouched,d._24(n,52).ngClassTouched,d._24(n,52).ngClassPristine,d._24(n,52).ngClassDirty,d._24(n,52).ngClassValid,d._24(n,52).ngClassInvalid,d._24(n,52).ngClassPending),l(n,70,0,d._24(n,75).ngClassUntouched,d._24(n,75).ngClassTouched,d._24(n,75).ngClassPristine,d._24(n,75).ngClassDirty,d._24(n,75).ngClassValid,d._24(n,75).ngClassInvalid,d._24(n,75).ngClassPending),l(n,97,0,u.inputName),l(n,100,0,u.inputAge)})}function a(l){return d._17(0,[(l()(),d._19(0,null,null,1,"demo-form-builder",[],null,null,null,s,b)),d._20(114688,null,0,g.a,[f.b],null,null)],function(l,n){l(n,1,0)},null)}var c=u("0kj5"),d=u("/oeL"),m=u("qbdv"),g=u("Bwlw"),f=u("bm2B");u.d(n,"b",function(){return b}),n.a=s;var p=[c.a],b=d._16({encapsulation:0,styles:p,data:{}});d._21("demo-form-builder",g.a,a,{},{},[])},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},c8mD:function(l,n,u){"use strict";function t(l){return r._17(0,[(l()(),r._19(0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),r._18(null,["",""])),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),r._18(null,["",""])),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),r._18(null,["",""])),(l()(),r._18(null,["\n        "]))],null,function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.age),l(n,9,0,n.context.$implicit.sex)})}function o(l){return r._17(0,[(l()(),r._19(0,null,null,30,"div",[],null,null,null,null,null)),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),r._18(null,[" 您的提交内容如下："])),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,22,"table",[["class","table table-hover table-condensed"]],null,null,null,null,null)),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),r._18(null,["\n        "])),(l()(),r._19(0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),r._18(null,["姓名"])),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),r._18(null,["年龄"])),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),r._18(null,["性别"])),(l()(),r._18(null,["\n        "])),(l()(),r._18(null,["\n      "])),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),r._18(null,["\n        "])),(l()(),r._22(16777216,null,null,1,null,t)),r._20(802816,null,0,s.h,[r._10,r._11,r.m],{ngForOf:[0,"ngForOf"]},null),(l()(),r._18(null,["\n      "])),(l()(),r._18(null,["\n    "])),(l()(),r._18(null,["\n  "]))],function(l,n){l(n,27,0,n.component.submitContent)},null)}function i(l){return r._17(0,[(l()(),r._19(0,null,null,82,"div",[["class","continer"]],null,null,null,null,null)),(l()(),r._18(null,["\n  "])),(l()(),r._19(0,null,null,3,"h2",[],null,null,null,null,null)),r._20(278528,null,0,s.i,[r.o,r.J,r._9],{ngStyle:[0,"ngStyle"]},null),r._23({"text-align":0}),(l()(),r._18(null,["第一个简单表单"])),(l()(),r._18(null,["\n  "])),(l()(),r._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._18(null,["\n  "])),(l()(),r._18(null,["\n  "])),(l()(),r._19(0,null,null,71,"form",[["class","form-horizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;if("submit"===n){t=!1!==r._24(l,12).onSubmit(u)&&t}if("reset"===n){t=!1!==r._24(l,12).onReset()&&t}if("ngSubmit"===n){t=!1!==o.onSubmit(r._24(l,12).value)&&t}return t},null,null)),r._20(16384,null,0,c.g,[],null,null),r._20(16384,[["f",4]],0,c.q,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),r._25(2048,null,c.i,null,[c.q]),r._20(16384,null,0,c.j,[c.i],null,null),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,1,"label",[["class","  col-md-2 control-label"],["for","name"]],null,null,null,null,null)),(l()(),r._18(null,["姓名："])),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,8,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),r._18(null,["\n        "])),(l()(),r._19(0,null,null,5,"input",[["class","form-control"],["id","name"],["name","name"],["ngModel",""],["placeholder","请输入姓名"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==r._24(l,24)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==r._24(l,24).onTouched()&&t}if("compositionstart"===n){t=!1!==r._24(l,24)._compositionStart()&&t}if("compositionend"===n){t=!1!==r._24(l,24)._compositionEnd(u.target.value)&&t}return t},null,null)),r._20(16384,null,0,c.k,[r.I,r.J,[2,c.l]],null,null),r._25(1024,null,c.m,function(l){return[l]},[c.k]),r._20(671744,null,0,c.r,[[2,c.i],[8,null],[8,null],[2,c.m]],{name:[0,"name"],model:[1,"model"]},null),r._25(2048,null,c.o,null,[c.r]),r._20(16384,null,0,c.p,[c.o],null,null),(l()(),r._18(null,["\n      "])),(l()(),r._18(null,["\n    "])),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,1,"label",[["class","col-md-2 control-label"],["for","age"]],null,null,null,null,null)),(l()(),r._18(null,["年龄："])),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,8,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),r._18(null,["\n        "])),(l()(),r._19(0,null,null,5,"input",[["class","form-control"],["id","age"],["name","age"],["ngModel",""],["placeholder","请输入年龄"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==r._24(l,40)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==r._24(l,40).onTouched()&&t}if("compositionstart"===n){t=!1!==r._24(l,40)._compositionStart()&&t}if("compositionend"===n){t=!1!==r._24(l,40)._compositionEnd(u.target.value)&&t}return t},null,null)),r._20(16384,null,0,c.k,[r.I,r.J,[2,c.l]],null,null),r._25(1024,null,c.m,function(l){return[l]},[c.k]),r._20(671744,null,0,c.r,[[2,c.i],[8,null],[8,null],[2,c.m]],{name:[0,"name"],model:[1,"model"]},null),r._25(2048,null,c.o,null,[c.r]),r._20(16384,null,0,c.p,[c.o],null,null),(l()(),r._18(null,["\n      "])),(l()(),r._18(null,["\n    "])),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,1,"label",[["class","col-md-2 control-label"],["for","sex"]],null,null,null,null,null)),(l()(),r._18(null,["性别："])),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,8,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),r._18(null,["\n        "])),(l()(),r._19(0,null,null,5,"input",[["class","form-control"],["id","sex"],["name","sex"],["ngModel",""],["placeholder","请输入性别"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==r._24(l,56)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==r._24(l,56).onTouched()&&t}if("compositionstart"===n){t=!1!==r._24(l,56)._compositionStart()&&t}if("compositionend"===n){t=!1!==r._24(l,56)._compositionEnd(u.target.value)&&t}return t},null,null)),r._20(16384,null,0,c.k,[r.I,r.J,[2,c.l]],null,null),r._25(1024,null,c.m,function(l){return[l]},[c.k]),r._20(671744,null,0,c.r,[[2,c.i],[8,null],[8,null],[2,c.m]],{name:[0,"name"],model:[1,"model"]},null),r._25(2048,null,c.o,null,[c.r]),r._20(16384,null,0,c.p,[c.o],null,null),(l()(),r._18(null,["\n      "])),(l()(),r._18(null,["\n    "])),(l()(),r._18(null,["\n    "])),(l()(),r._19(0,null,null,16,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._18(null,["\n      "])),(l()(),r._19(0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._18(null,["\n        "])),(l()(),r._19(0,null,null,4,"div",[["class","col-md-offset-2 col-md-2"]],null,null,null,null,null)),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","submit"]],null,null,null,null,null)),(l()(),r._18(null,["提交"])),(l()(),r._18(null,["\n        "])),(l()(),r._18(null,["\n        "])),(l()(),r._19(0,null,null,4,"div",[["class","col-md-offset-4 col-md-2"]],null,null,null,null,null)),(l()(),r._18(null,["\n          "])),(l()(),r._19(0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.clearSubmitted()&&t}return t},null,null)),(l()(),r._18(null,["清除"])),(l()(),r._18(null,["\n        "])),(l()(),r._18(null,["\n      "])),(l()(),r._18(null,["\n    "])),(l()(),r._18(null,["\n\n  "])),(l()(),r._18(null,["\n"])),(l()(),r._18(null,["\n"])),(l()(),r._18(null,["\n"])),(l()(),r._19(0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._18(null,["\n  "])),(l()(),r._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._18(null,["\n  "])),(l()(),r._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._18(null,["\n  "])),(l()(),r._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._18(null,["\n  "])),(l()(),r._22(16777216,null,null,1,null,o)),r._20(16384,null,0,s.j,[r._10,r._11],{ngIf:[0,"ngIf"]},null),(l()(),r._18(null,["\n"])),(l()(),r._18(null,["\n"]))],function(l,n){var u=n.component;l(n,3,0,l(n,4,0,"center"));l(n,26,0,"name","");l(n,42,0,"age","");l(n,58,0,"sex",""),l(n,94,0,u.submitted)},function(l,n){l(n,10,0,r._24(n,14).ngClassUntouched,r._24(n,14).ngClassTouched,r._24(n,14).ngClassPristine,r._24(n,14).ngClassDirty,r._24(n,14).ngClassValid,r._24(n,14).ngClassInvalid,r._24(n,14).ngClassPending),l(n,23,0,r._24(n,28).ngClassUntouched,r._24(n,28).ngClassTouched,r._24(n,28).ngClassPristine,r._24(n,28).ngClassDirty,r._24(n,28).ngClassValid,r._24(n,28).ngClassInvalid,r._24(n,28).ngClassPending),l(n,39,0,r._24(n,44).ngClassUntouched,r._24(n,44).ngClassTouched,r._24(n,44).ngClassPristine,r._24(n,44).ngClassDirty,r._24(n,44).ngClassValid,r._24(n,44).ngClassInvalid,r._24(n,44).ngClassPending),l(n,55,0,r._24(n,60).ngClassUntouched,r._24(n,60).ngClassTouched,r._24(n,60).ngClassPristine,r._24(n,60).ngClassDirty,r._24(n,60).ngClassValid,r._24(n,60).ngClassInvalid,r._24(n,60).ngClassPending)})}function _(l){return r._17(0,[(l()(),r._19(0,null,null,1,"demo-form-sku",[],null,null,null,i,m)),r._20(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var e=u("lTVp"),r=u("/oeL"),s=u("qbdv"),a=u("ACA/"),c=u("bm2B");u.d(n,"b",function(){return m}),n.a=i;var d=[e.a],m=r._16({encapsulation:0,styles:d,data:{}});r._21("demo-form-sku",a.a,_,{},{},[])},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),o=u("p5Ee"),i=u("+h1B"),_=u("fc+i");o.a.production&&u.i(t.a)(),u.i(_.a)().bootstrapModuleFactory(i.a)},lTVp:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},q4dy:function(l,n,u){"use strict";function t(l){return _._17(0,[(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,4,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),_._18(null,["\n  "])),(l()(),_._19(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),_._18(null,["\n    ","\n  "])),(l()(),_._18(null,["\n"])),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,1,"demo-form-sku",[],null,null,null,e.a,e.b)),_._20(114688,null,0,r.a,[],null,null),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._18(null,["\n"])),(l()(),_._19(0,null,null,1,"demo-form-builder",[],null,null,null,s.a,s.b)),_._20(114688,null,0,a.a,[c.b],null,null),(l()(),_._18(null,["\n"]))],function(l,n){l(n,16,0),l(n,21,0)},function(l,n){l(n,4,0,n.component.title)})}function o(l){return _._17(0,[(l()(),_._19(0,null,null,1,"app-root",[],null,null,null,t,g)),_._20(49152,null,0,d.a,[],null,null)],null,null)}var i=u("NhKt"),_=u("/oeL"),e=u("c8mD"),r=u("ACA/"),s=u("Pcw+"),a=u("Bwlw"),c=u("bm2B"),d=u("wQAS");u.d(n,"a",function(){return f});var m=[i.a],g=_._16({encapsulation:0,styles:m,data:{}}),f=_._21("app-root",d.a,o,{},{},[])},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="Angular 2 表单1"}return l}()}},[0]);