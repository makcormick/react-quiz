(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__OLoE2",open:"MenuToggle_open__14SWd"}},function(e,t,n){e.exports={Drawer:"Drawer_Drawer__2BlOY",close:"Drawer_close__1Cl1X",active:"Drawer_active__35KPu"}},,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__18Rwf",QuizWrapper:"Quiz_QuizWrapper__c8INT"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__Dpsgu",Question:"ActiveQuiz_Question__18iOr"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3PJVi",success:"AnswerItem_success__30eEE",error:"AnswerItem_error___hrWf"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__D-CkC",success:"FinishedQuiz_success__jBBc5",error:"FinishedQuiz_error__KSdom"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",success:"Button_success__cnhtV",error:"Button_error__2nDvg",primary:"Button_primary__28VL_"}},,,function(e,t,n){e.exports={Layout:"Layout_Layout__2BpO9"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__EwYQd"}},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(14),i=n.n(r),u=(n(23),n(1)),c=n(2),o=n(3),l=n(4),m=n(15),d=n.n(m),h=n(5),p=n.n(h),_=function(e){var t=[p.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(p.a.open)):t.push("fa-bars"),s.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},w=n(6),f=n.n(w),v=n(16),E=n.n(v),g=function(e){return s.a.createElement("div",{className:E.a.Backdrop,onClick:e.onClick})},k=[1,2,3],z=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderLinks",value:function(){return k.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",null,"Link ",e))}))}},{key:"render",value:function(){var e=[f.a.Drawer];return this.props.isOpen||e.push(f.a.close),s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:e.join(" ")},s.a.createElement("ul",null,this.renderLinks())),this.props.isOpen?s.a.createElement(g,{onClick:this.props.onClose}):null)}}]),n}(a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:d.a.Layout},s.a.createElement(z,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),s.a.createElement(_,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),s.a.createElement("main",null,this.props.children))}}]),n}(a.Component),y=n(7),A=n(8),C=n.n(A),O=n(9),b=n.n(O),j=n(17),q=n.n(j),x=n(10),S=n.n(x),B=function(e){var t=[S.a.AnswerItem];return e.state&&t.push(S.a[e.state]),s.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},N=function(e){return s.a.createElement("ul",{className:q.a.AnswersList},e.answers.map((function(t,n){return s.a.createElement(B,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},L=function(e){return s.a.createElement("div",{className:b.a.ActiveQuiz},s.a.createElement("p",{className:b.a.Question},s.a.createElement("span",null,s.a.createElement("strong",null,"2."),"\xa0",e.question),s.a.createElement("small",null,e.answerNumber," of ",e.quizLength)),s.a.createElement(N,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},F=n(11),I=n.n(F),T=n(12),D=n.n(T),H=function(e){var t=[D.a.Button,D.a[e.type]];return s.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},M=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return s.a.createElement("div",{className:I.a.FinishedQuiz},s.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check",I.a[e.results[t.id]]];return s.a.createElement("li",{key:n},s.a.createElement("strong",null,n+1),".\xa0",t.question,s.a.createElement("i",{className:a.join(" ")}))}))),s.a.createElement("p",null,"Right ",t," of ",e.quiz.length),s.a.createElement("div",null,s.a.createElement(H,{onClick:e.onRetry,type:"primary"},"Repeat"),s.a.createElement(H,{type:"success"},"Go on list of tests")))},W=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{question:"Which color the sky is?",rightAnswerId:2,id:1,answers:[{text:"Black",id:1},{text:"Blue",id:2},{text:"Red",id:3},{text:"Green",id:4}]},{question:"On which year SP was based on?",rightAnswerId:3,id:2,answers:[{text:"1700",id:1},{text:"1702",id:2},{text:"1703",id:3},{text:"1803",id:4}]}]},e.onAnswerClickHandler=function(t){if(e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[n])return}var a=e.state.quiz[e.state.activeQuestion],s=e.state.results;if(a.rightAnswerId===t){s[a.id]||(s[a.id]="success"),e.setState({answerState:Object(y.a)({},t,"success"),results:s});var r=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(r)}),200)}else s[a.id]="error",e.setState({answerState:Object(y.a)({},t,"error"),results:s})},e.isQuizFinished=function(){return e.state.activeQuestion+1===e.state.quiz.length},e.retryHandler=function(){e.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:C.a.Quiz},s.a.createElement("div",{className:C.a.QuizWrapper},s.a.createElement("h1",null,"Answer on all questions"),this.state.isFinished?s.a.createElement(M,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):s.a.createElement(L,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),n}(a.Component);var R=function(){return s.a.createElement(Q,null,s.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.10d6fb8f.chunk.js.map