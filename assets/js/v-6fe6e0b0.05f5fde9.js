"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[2812],{3495:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-6fe6e0b0","path":"/chapter8/eventbus.html","title":"8.5 事件总线","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"chapter8/eventbus.md","localizedDate":"2022年6月6日","excerpt":""}')},52937:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6808);const p=[(0,t.uE)('<h1 id="_8-5-事件总线" tabindex="-1"><a class="header-anchor" href="#_8-5-事件总线" aria-hidden="true">#</a> 8.5 事件总线</h1><p>在 App 中，我们经常会需要一个广播机制，用以跨页面事件通知，比如一个需要登录的 App 中，页面会关注用户登录或注销事件，来进行一些状态更新。这时候，一个事件总线便会非常有用，事件总线通常实现了订阅者模式，订阅者模式包含发布者和订阅者两种角色，可以通过事件总线来触发事件和监听事件，本节我们实现一个简单的全局事件总线，我们使用单例模式，代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//订阅者回调签名</span>\n<span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token class-name">EventCallback</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EventBus</span> <span class="token punctuation">{</span>\n  <span class="token comment">//私有构造函数</span>\n  <span class="token class-name">EventBus</span><span class="token punctuation">.</span><span class="token function">_internal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//保存单例</span>\n  <span class="token keyword">static</span> <span class="token class-name">EventBus</span> _singleton <span class="token operator">=</span> <span class="token class-name">EventBus</span><span class="token punctuation">.</span><span class="token function">_internal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//工厂构造函数</span>\n  <span class="token keyword">factory</span> <span class="token class-name">EventBus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&gt;</span> _singleton<span class="token punctuation">;</span>\n\n  <span class="token comment">//保存事件订阅者队列，key:事件名(id)，value: 对应事件的订阅者队列</span>\n  <span class="token keyword">final</span> _emap <span class="token operator">=</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">EventCallback</span><span class="token punctuation">&gt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//添加订阅者</span>\n  <span class="token keyword">void</span> <span class="token keyword">on</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token class-name">EventCallback</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    _emap<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">?</span><span class="token operator">?</span><span class="token operator">=</span>  <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EventCallback</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    _emap<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">//移除订阅者</span>\n  <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name">EventCallback</span><span class="token operator">?</span> f<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> list <span class="token operator">=</span> _emap<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>eventName <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>f <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      _emap<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">//触发事件，事件触发后该事件所有订阅者会被调用</span>\n  <span class="token keyword">void</span> <span class="token function">emit</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">[</span>arg<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> list <span class="token operator">=</span> _emap<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n    int len <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token comment">//反向遍历，防止订阅者在回调中移除自身带来的下标错位</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> len<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">//定义一个top-level（全局）变量，页面引入该文件后可以直接使用bus</span>\n<span class="token keyword">var</span> bus <span class="token operator">=</span> <span class="token class-name">EventBus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//页面A中</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n <span class="token comment">//监听登录事件</span>\nbus<span class="token punctuation">.</span><span class="token keyword">on</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;login&quot;</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//登录页B中</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token comment">//登录成功后触发登录事件，页面A中订阅者会被调用</span>\nbus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;login&quot;</span></span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：Dart中实现单例模式的标准做法就是使用static变量+工厂构造函数的方式，这样就可以保证<code>EventBus()</code>始终返回都是同一个实例，读者应该理解并掌握这种方法。</p></blockquote><p>事件总线通常用于组件之间状态共享，但关于组件之间状态共享也有一些专门的包如redux、mobx以及前面介绍过的Provider。对于一些简单的应用，事件总线是足以满足业务需求的，如果你决定使用状态管理包的话，一定要想清楚您的 App 是否真的有必要使用它，防止“化简为繁”、过度设计。</p>',7)],e={},o=(0,a(18580).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);