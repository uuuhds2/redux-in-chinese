(self.webpackChunk=self.webpackChunk||[]).push([[1800],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(a),c=i,m=h["".concat(l,".").concat(c)]||h[c]||p[c]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5778:function(e,t,a){"use strict";a.d(t,{s:function(){return i}});var n=a(7294),i=function(e){var t=e.children,a=e.title,i=void 0===a?"Detailed Explanation":a;return n.createElement("details",{className:"detailed-explanation"},n.createElement("summary",null,n.createElement("h4",null,i)),t)}},6534:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r=(a(5778),{id:"part-1-overview",title:"Redux Fundamentals, Part 1: Redux Overview",sidebar_label:"Redux Overview",hide_title:!1,description:"The official Fundamentals tutorial for Redux: learn the fundamentals of using Redux"}),s={unversionedId:"tutorials/fundamentals/part-1-overview",id:"tutorials/fundamentals/part-1-overview",isDocsHomePage:!1,title:"Redux Fundamentals, Part 1: Redux Overview",description:"The official Fundamentals tutorial for Redux: learn the fundamentals of using Redux",source:"@site/../docs/tutorials/fundamentals/part-1-overview.md",sourceDirName:"tutorials/fundamentals",slug:"/tutorials/fundamentals/part-1-overview",permalink:"/tutorials/fundamentals/part-1-overview",version:"current",sidebar_label:"Redux Overview",frontMatter:{id:"part-1-overview",title:"Redux Fundamentals, Part 1: Redux Overview",sidebar_label:"Redux Overview",hide_title:!1,description:"The official Fundamentals tutorial for Redux: learn the fundamentals of using Redux"},sidebar:"docs",previous:{title:"\u7b2c\u516d\u8282\uff1a\u6027\u80fd\u4e0e\u6570\u636e\u8303\u5f0f\u5316",permalink:"/tutorials/essentials/part-6-performance-normalization"},next:{title:"Redux Fundamentals, Part 2: Concepts and Data Flow",permalink:"/tutorials/fundamentals/part-2-concepts-data-flow"}},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[{value:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",id:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",children:[]}]},{value:"What is Redux?",id:"what-is-redux",children:[{value:"Why Should I Use Redux?",id:"why-should-i-use-redux",children:[]},{value:"When Should I Use Redux?",id:"when-should-i-use-redux",children:[]},{value:"Redux \u5e93\u548c\u5de5\u5177",id:"redux-\u5e93\u548c\u5de5\u5177",children:[]}]},{value:"Redux Basics",id:"redux-basics",children:[{value:"The Redux Store",id:"the-redux-store",children:[]},{value:"Redux Core Example App",id:"redux-core-example-app",children:[]},{value:"Data Flow",id:"data-flow",children:[]}]},{value:"\u4f60\u5b66\u5230\u4e86",id:"\u4f60\u5b66\u5230\u4e86",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],d={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f60\u5c06\u5b66\u5230")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"What Redux is and why you might want to use it"),(0,o.kt)("li",{parentName:"ul"},"The basic pieces that make up a Redux app")))),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"Welcome to the Redux Fundamentals tutorial! ",(0,o.kt)("strong",{parentName:"p"},"This tutorial will introduce you to the core concepts, principles, and patterns for using Redux"),". By the time you finish, you should understand the different pieces that make up a Redux app, how data flows when using Redux, and our standard recommended patterns for building Redux apps."),(0,o.kt)("p",null,"In Part 1 of this tutorial, we'll briefly look at a minimal example of a working Redux app to see what the pieces are, and in ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-2-concepts-data-flow"},"Part 2: Redux Concepts and Data Flow")," we'll look at those pieces in more detail and how data flows in a Redux application."),(0,o.kt)("p",null,"Starting in ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-3-state-actions-reducers"},"Part 3: State, Actions, and Reducers"),", we'll use that knowledge to build a small example app that demonstrates how these pieces fit together and talk about how Redux works in practice. After we finish building the working example app \"by hand\" so that you can see exactly what's happening, we'll talk about some of the standard patterns and abstractions typically used with Redux. Finally, we'll see how these lower-level examples translate into the higher-level patterns that we recommend for actual usage in real applications."),(0,o.kt)("h3",{id:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b"},"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'This tutorial will teach you "how Redux works"'),", as well as ",(0,o.kt)("em",{parentName:"p"},"why")," these patterns exist. Fair warning though - learning the concepts is different from putting them into practice in actual apps."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The initial code will be less concise than the way we suggest writing real app code"),", but writing it out long-hand is the best way to learn. Once you understand how everything fits together, we'll look at using Redux Toolkit to simplify things. ",(0,o.kt)("strong",{parentName:"p"},"Redux Toolkit is the recommended way to build production apps with Redux"),", and is built on all of the concepts that we will look at throughout this tutorial. Once you understand the core concepts covered here, you'll understand how to use Redux Toolkit more efficiently."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're looking to learn more about how Redux is used to write real-world applications, please see:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-8-modern-redux"},(0,o.kt)("strong",{parentName:"a"},'The "Modern Redux" page in this tutorial')),", which shows how to convert the low-level examples from earlier sections into the modern patterns we do recommend for real-world usage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/essentials/part-1-overview-concepts"},(0,o.kt)("strong",{parentName:"a"},'The "Redux Essentials" tutorial')),', which teaches "how to use Redux, the right way" for real-world apps, using our latest recommended patterns and practices.')))),(0,o.kt)("p",null,"We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already so that we can focus on explaining Redux itself. ",(0,o.kt)("strong",{parentName:"p"},"This tutorial assumes that you know"),":"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5fc5\u5907\u80fd\u529b")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u719f\u6089 ",(0,o.kt)("a",{parentName:"li",href:"https://internetingishard.com/"},"HTML & CSS"),"."),(0,o.kt)("li",{parentName:"ul"},"\u719f\u6089 ",(0,o.kt)("a",{parentName:"li",href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"},"ES6 syntax and features")),(0,o.kt)("li",{parentName:"ul"},"Understanding of ",(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/rest-parameters-spread#spread-syntax"},"the array and object spread operators")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of React terminology: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),", ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"State"),", ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"Function Components, Props"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of ",(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/promise-basics"},"asynchronous JavaScript")," and ",(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/fetch"},"making AJAX requests"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux"),". We'll be here when you're ready!"),(0,o.kt)("p",null,"Finally, you should make sure that you have the React and Redux DevTools extensions installed in your browser:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React DevTools Extension:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"},"React DevTools Extension for Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"},"React DevTools Extension for Firefox")))),(0,o.kt)("li",{parentName:"ul"},"Redux DevTools Extension:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"Redux DevTools Extension for Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"Redux DevTools Extension for Firefox"))))),(0,o.kt)("h2",{id:"what-is-redux"},"What is Redux?"),(0,o.kt)("p",null,'It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Redux is a pattern and library for managing and updating application state, using events called "actions".')," It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion."),(0,o.kt)("h3",{id:"why-should-i-use-redux"},"Why Should I Use Redux?"),(0,o.kt)("p",null,'Redux helps you manage "global" state - state that is needed across many parts of your application.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur"),". Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected."),(0,o.kt)("h3",{id:"when-should-i-use-redux"},"When Should I Use Redux?"),(0,o.kt)("p",null,"Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There's more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity."),(0,o.kt)("p",null,"Redux is more useful when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have large amounts of application state that are needed in many places in the app"),(0,o.kt)("li",{parentName:"ul"},"The app state is updated frequently over time"),(0,o.kt)("li",{parentName:"ul"},"The logic to update that state may be complex"),(0,o.kt)("li",{parentName:"ul"},"The app has a medium or large-sized codebase, and might be worked on by many people")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u60f3\u4e86\u89e3\u66f4\u591a\uff1f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://changelog.com/posts/when-and-when-not-to-reach-for-redux"},"When (and when not) to reach for Redux"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/"},"The Tao of Redux, Part 1 - Implementation and Intent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/faq/general#when-should-i-use-redux"},"Redux FAQ: When should I use Redux?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux")))))),(0,o.kt)("h3",{id:"redux-\u5e93\u548c\u5de5\u5177"},"Redux \u5e93\u548c\u5de5\u5177"),(0,o.kt)("p",null,"Redux is a small standalone JS library. However, it is commonly used with several other packages:"),(0,o.kt)("h4",{id:"react-redux"},"React-Redux"),(0,o.kt)("p",null,"Redux can integrate with any UI framework, and is most frequently used with React. ",(0,o.kt)("a",{parentName:"p",href:"https://react-redux.js.org/"},(0,o.kt)("strong",{parentName:"a"},"React-Redux"))," is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store."),(0,o.kt)("h4",{id:"redux-toolkit"},"Redux Toolkit"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},(0,o.kt)("strong",{parentName:"a"},"Redux Toolkit"))," is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications."),(0,o.kt)("h4",{id:"redux-devtools-extension"},"Redux DevTools Extension"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},(0,o.kt)("strong",{parentName:"a"},"Redux DevTools Extension")),' shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".'),(0,o.kt)("h2",{id:"redux-basics"},"Redux Basics"),(0,o.kt)("p",null,"Now that you know what Redux is, let's briefly look at the pieces that make up a Redux app and how it works."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The rest of the description on this page focuses solely on the Redux core library (the ",(0,o.kt)("inlineCode",{parentName:"p"},"redux")," package). We'll talk about the other Redux-related packages as we go through the rest of the tutorial."))),(0,o.kt)("h3",{id:"the-redux-store"},"The Redux Store"),(0,o.kt)("p",null,"The center of every Redux application is the ",(0,o.kt)("strong",{parentName:"p"},"store"),'. A "store" is a container that holds your application\'s global ',(0,o.kt)("strong",{parentName:"p"},"state"),"."),(0,o.kt)("p",null,"A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must never directly modify or change the state that is kept inside the Redux store"),(0,o.kt)("li",{parentName:"ul"},"Instead, the only way to cause an update to the state is to create a plain ",(0,o.kt)("strong",{parentName:"li"},"action"),' object that describes "something that happened in the application", and then ',(0,o.kt)("strong",{parentName:"li"},"dispatch")," the action to the store to tell it what happened."),(0,o.kt)("li",{parentName:"ul"},"When an action is dispatched, the store runs the root ",(0,o.kt)("strong",{parentName:"li"},"reducer")," function, and lets it calculate the new state based on the old state and the action"),(0,o.kt)("li",{parentName:"ul"},"Finally, the store notifies ",(0,o.kt)("strong",{parentName:"li"},"subscribers")," that the state has been updated so the UI can be updated with the new data.")),(0,o.kt)("h3",{id:"redux-core-example-app"},"Redux Core Example App"),(0,o.kt)("p",null,"Let's look at a minimal working example of a Redux app - a small counter application:"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/dank-architecture-lr7k1?fontsize=14&hidenavigation=1&theme=dark&runonclick=1",title:"redux-fundamentals-core-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"Because Redux is a standalone JS library with no dependencies, this example is written by only loading a single script tag for the Redux library, and uses basic JS and HTML for the UI. In practice, Redux is normally used by ",(0,o.kt)("a",{parentName:"p",href:"/introduction/installation"},"installing the Redux packages from NPM"),", and the UI is created using a library like ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-5-ui-react"},"Part 5: UI and React")," shows how to use Redux and React together."))),(0,o.kt)("p",null,"Let's break this example down into its separate parts to see what's happening."),(0,o.kt)("h4",{id:"state-actions-and-reducers"},"State, Actions, and Reducers"),(0,o.kt)("p",null,"We start by defining an initial ",(0,o.kt)("strong",{parentName:"p"},"state")," value to describe the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Define an initial state value for the app\nconst initialState = {\n  value: 0\n}\n")),(0,o.kt)("p",null,"For this app, we're going to track a single number with the current value of our counter."),(0,o.kt)("p",null,"Redux apps normally have a JS object as the root piece of the state, with other values inside that object."),(0,o.kt)("p",null,"Then, we define a ",(0,o.kt)("strong",{parentName:"p"},"reducer")," function. The reducer receives two arguments, the current ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and an\n",(0,o.kt)("inlineCode",{parentName:"p"},"action")," object describing what happened. When the Redux app starts up, we don't have any state yet,\nso we provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialState")," as the default value for this reducer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create a \"reducer\" function that determines what the new state\n// should be when something happens in the app\nfunction counterReducer(state = initialState, action) {\n  // Reducers usually look at the type of action that happened\n  // to decide how to update the state\n  switch (action.type) {\n    case 'counter/incremented':\n      return { ...state, value: state.value + 1 }\n    case 'counter/decremented':\n      return { ...state, value: state.value - 1 }\n    default:\n      // If the reducer doesn't care about this action type,\n      // return the existing state unchanged\n      return state\n  }\n}\n")),(0,o.kt)("p",null,"Action objects always have a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field, which is a string you provide that\nacts as a unique name for the action. The ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," should be a readable name so that\nanyone who looks at this code understands what it means. In this case, we use the\nword 'counter' as the first half of our action type, and the second half is a\ndescription of \"what happened\". In this case, our 'counter' was 'incremented', so\nwe write the action type as ",(0,o.kt)("inlineCode",{parentName:"p"},"'counter/incremented'"),"."),(0,o.kt)("p",null,"Based on the type of the action, we either need to return a brand-new object to\nbe the new ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," result, or return the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," object if nothing should change.\nNote that we update the state ",(0,o.kt)("em",{parentName:"p"},"immutably")," by copying the existing state and updating the\ncopy, instead of modifying the original object directly."),(0,o.kt)("h4",{id:"store"},"Store"),(0,o.kt)("p",null,"Now that we have a reducer function, we can create a ",(0,o.kt)("strong",{parentName:"p"},"store")," instance by\ncalling the Redux library ",(0,o.kt)("inlineCode",{parentName:"p"},"createStore")," API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create a new Redux store with the `createStore` function,\n// and use the `counterReducer` for the update logic\nconst store = Redux.createStore(counterReducer)\n")),(0,o.kt)("p",null,"We pass the reducer function to ",(0,o.kt)("inlineCode",{parentName:"p"},"createStore"),", which uses the reducer function\nto generate the initial state, and to calculate any future updates."),(0,o.kt)("h4",{id:"ui"},"UI"),(0,o.kt)("p",null,"In any application, the user interface will show existing state on screen. When a user\ndoes something, the app will update its data and then redraw the UI with those values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Our \"user interface\" is some text in a single HTML element\nconst valueEl = document.getElementById('value')\n\n// Whenever the store state changes, update the UI by\n// reading the latest store state and showing new data\nfunction render() {\n  const state = store.getState()\n  valueEl.innerHTML = state.value.toString()\n}\n\n// Update the UI with the initial data\nrender()\n// And subscribe to redraw whenever the data changes in the future\nstore.subscribe(render)\n")),(0,o.kt)("p",null,"In this small example, we're only using some basic HTML elements as our UI,\nwith a single ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," showing the current value."),(0,o.kt)("p",null,"So, we write a function that knows how to get the latest state from the Redux\nstore using the ",(0,o.kt)("inlineCode",{parentName:"p"},"store.getState()")," method, then takes that value and updates the UI to show it."),(0,o.kt)("p",null,"The Redux store lets us call ",(0,o.kt)("inlineCode",{parentName:"p"},"store.subscribe()")," and pass a subscriber callback function that will be called\nevery time the store is updated. So, we can pass our ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function as the subscriber, and know that\neach time the store updates, we can update the UI with the latest value."),(0,o.kt)("p",null,"Redux itself is a standalone library that can be used anywhere. This also means that it can be used with any UI layer."),(0,o.kt)("h4",{id:"dispatching-actions"},"Dispatching Actions"),(0,o.kt)("p",null,"Finally, we need to respond to user input by creating ",(0,o.kt)("strong",{parentName:"p"},"action")," objects that\ndescribe what happened, and ",(0,o.kt)("strong",{parentName:"p"},"dispatching")," them to the store. When we call ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch(action)"),",\nthe store runs the reducer, calculates the updated state, and runs the subscribers\nto update the UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Handle user inputs by \"dispatching\" action objects,\n// which should describe \"what happened\" in the app\ndocument.getElementById('increment').addEventListener('click', function () {\n  store.dispatch({ type: 'counter/incremented' })\n})\n\ndocument.getElementById('decrement').addEventListener('click', function () {\n  store.dispatch({ type: 'counter/decremented' })\n})\n\ndocument\n  .getElementById('incrementIfOdd')\n  .addEventListener('click', function () {\n    // We can write logic to decide what to do based on the state\n    if (store.getState().value % 2 !== 0) {\n      store.dispatch({ type: 'counter/incremented' })\n    }\n  })\n\ndocument\n  .getElementById('incrementAsync')\n  .addEventListener('click', function () {\n    // We can also write async logic that interacts with the store\n    setTimeout(function () {\n      store.dispatch({ type: 'counter/incremented' })\n    }, 1000)\n  })\n")),(0,o.kt)("p",null,"Here, we'll dispatch the actions that will make the reducer add 1 or\nsubtract 1 from the current counter value."),(0,o.kt)("p",null,"We can also write code that only dispatches an action if a certain\ncondition is true, or write some async code that dispatches an action\nafter a delay."),(0,o.kt)("h3",{id:"data-flow"},"Data Flow"),(0,o.kt)("p",null,"We can summarize the flow of data through a Redux app with this diagram. It represents how:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"actions are dispatched in response to a user interaction like a click"),(0,o.kt)("li",{parentName:"ul"},"the store runs the reducer function to calculate a new state"),(0,o.kt)("li",{parentName:"ul"},"the UI reads the new state to display the new values")),(0,o.kt)("p",null,"(Don't worry if these pieces aren't quite clear yet! Keep this picture in your mind as you go through the rest of this tutorial, and you'll see how the pieces fit together.)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redux data flow diagram",src:a(7360).Z})),(0,o.kt)("h2",{id:"\u4f60\u5b66\u5230\u4e86"},"\u4f60\u5b66\u5230\u4e86"),(0,o.kt)("p",null,"That counter example was small, but it does show all the working pieces of a real Redux app.\n",(0,o.kt)("strong",{parentName:"p"},"Everything we'll talk about in the following sections expands on those basic pieces.")),(0,o.kt)("p",null,"With that in mind, let's review what we've learned so far:"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u603b\u7ed3")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redux is a library for managing global application state"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Redux is typically used with the React-Redux library for integrating Redux and React together"),(0,o.kt)("li",{parentName:"ul"},"Redux Toolkit is the recommended way to write Redux logic"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redux uses several types of code"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Actions")," are plain objects with a ",(0,o.kt)("inlineCode",{parentName:"li"},"type"),' field, and describe "what happened" in the app'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Reducers")," are functions that calculate a new state value based on previous state + an action"),(0,o.kt)("li",{parentName:"ul"},"A Redux ",(0,o.kt)("em",{parentName:"li"},"store")," runs the root reducer whenever an action is ",(0,o.kt)("em",{parentName:"li"},"dispatched"))))))),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"Now that you know what the basic pieces of a Redux app are, step ahead to ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-2-concepts-data-flow"},"Part 2: Redux Concepts and Data Flow"),",\nwhere we'll look at how data flows through a Redux app in more detail."))}u.isMDXComponent=!0},7360:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"}}]);