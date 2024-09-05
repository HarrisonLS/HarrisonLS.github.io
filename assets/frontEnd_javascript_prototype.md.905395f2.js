import{_ as a,o as i,c as o,M as e}from"./chunks/framework.ba1267c7.js";const r="/image/javascript/prototype/prototype.png",u=JSON.parse('{"title":"原型链相关","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/javascript/prototype.md","filePath":"frontEnd/javascript/prototype.md"}'),l={name:"frontEnd/javascript/prototype.md"};function n(s,t,p,h,d,c){return i(),o("div",null,t[0]||(t[0]=[e('<h1 id="原型链相关" tabindex="-1">原型链相关 <a class="header-anchor" href="#原型链相关" aria-label="Permalink to &quot;原型链相关&quot;">​</a></h1><p><img src="'+r+'" alt="prototype"></p><h2 id="this-的几种情况" tabindex="-1">this 的几种情况 <a class="header-anchor" href="#this-的几种情况" aria-label="Permalink to &quot;this 的几种情况&quot;">​</a></h2><ol><li>作为普通函数执行时，this 指向 window。</li><li>当函数作为对象的方法被调用时，this 就会指向该对象。</li><li>构造器调用，this 指向返回的这个对象。</li><li>箭头函数 箭头函数的 this 绑定看的是 this 所在函数定义在哪个对象下，就绑定哪个对象。如果有嵌套的情况，则 this 绑定到最近的一层对象上。</li><li>基于 Function.prototype 上的 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。apply 接收参数的是数组，call 接受参数列表，bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。若为空默认是指向全局对象 window。</li></ol><h2 id="new-运算符的实现机制" tabindex="-1">new 运算符的实现机制 <a class="header-anchor" href="#new-运算符的实现机制" aria-label="Permalink to &quot;new 运算符的实现机制&quot;">​</a></h2><ol><li>首先创建了一个新的空对象</li><li>设置原型，将对象的原型设置为函数的 prototype 对象。</li><li>让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）</li><li>判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。</li></ol><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h2><ul><li>实例对象的__proto__指向其构造函数的prototype</li><li>如果实例对象本身没有一个属性，会去逐层__proto__中寻找</li></ul><h2 id="相关文章" tabindex="-1">相关文章 <a class="header-anchor" href="#相关文章" aria-label="Permalink to &quot;相关文章&quot;">​</a></h2>',9)]))}const m=a(l,[["render",n]]);export{u as __pageData,m as default};
