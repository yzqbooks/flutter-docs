"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[9473],{10953:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-7c38c12a","path":"/chapter6/animatedlist.html","title":"6.5 AnimatedList","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.35,"words":706},"filePathRelative":"chapter6/animatedlist.md","localizedDate":"2022年6月6日","excerpt":""}')},99575:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6808);const p=a.p+"assets/img/6-13.3da6c310.gif",e=[(0,t.uE)('<h1 id="_6-5-animatedlist" tabindex="-1"><a class="header-anchor" href="#_6-5-animatedlist" aria-hidden="true">#</a> 6.5 AnimatedList</h1><p>AnimatedList 和 ListView 的功能大体相似，不同的是， AnimatedList 可以在列表中插入或删除节点时执行一个动画，在需要添加或删除列表项的场景中会提高用户体验。</p><p>AnimatedList 是一个 StatefulWidget，它对应的 State 类型为 AnimatedListState，添加和删除元素的方法位于 AnimatedListState 中：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">insertItem</span><span class="token punctuation">(</span>int index<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token class-name">Duration</span> duration <span class="token operator">=</span> _kDuration <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">removeItem</span><span class="token punctuation">(</span>int index<span class="token punctuation">,</span> <span class="token class-name">AnimatedListRemovedItemBuilder</span> builder<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token class-name">Duration</span> duration <span class="token operator">=</span> _kDuration <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们看一个示例：实现下面这样的一个列表，点击底部 + 按钮时向列表追加一个列表项；点击每个列表项后面的删除按钮时，删除该列表项，添加和删除时分别执行指定的动画，运行效果如图6-13所示：</p><p><img src="'+p+'" alt="动图6-13"></p><p>初始的时候有5个列表项，先点击了 + 号按钮，会添加一个 6，添加过程执行渐显动画。然后点击了 4 后面的删除按钮，删除的时候执行了一个渐隐+收缩的合成动画。</p><p>下面是实现代码：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">AnimatedListRoute</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">AnimatedListRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  _AnimatedListRouteState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_AnimatedListRouteState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _AnimatedListRouteState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AnimatedListRoute</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  int counter <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">final</span> globalKey <span class="token operator">=</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AnimatedListState</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> counter<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      data<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">i <span class="token operator">+</span> <span class="token number">1</span></span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>\n      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token class-name">AnimatedList</span><span class="token punctuation">(</span>\n          key<span class="token punctuation">:</span> globalKey<span class="token punctuation">,</span>\n          initialItemCount<span class="token punctuation">:</span> data<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n          itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n            <span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span>\n            int index<span class="token punctuation">,</span>\n            <span class="token class-name">Animation</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">&gt;</span></span> animation<span class="token punctuation">,</span>\n          <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">//添加列表项时会执行渐显动画</span>\n            <span class="token keyword">return</span> <span class="token class-name">FadeTransition</span><span class="token punctuation">(</span>\n              opacity<span class="token punctuation">:</span> animation<span class="token punctuation">,</span>\n              child<span class="token punctuation">:</span> <span class="token function">buildItem</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token function">buildAddBtn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 创建一个 “+” 按钮，点击后会向列表中插入一项</span>\n  <span class="token class-name">Widget</span> <span class="token function">buildAddBtn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Positioned</span><span class="token punctuation">(</span>\n      child<span class="token punctuation">:</span> <span class="token class-name">FloatingActionButton</span><span class="token punctuation">(</span>\n        child<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 添加一个列表项</span>\n          data<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression"><span class="token operator">++</span>counter</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">// 告诉列表项有新添加的列表项</span>\n          globalKey<span class="token punctuation">.</span>currentState<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">insertItem</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;添加 </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">counter</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      bottom<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n      left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      right<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 构建列表项</span>\n  <span class="token class-name">Widget</span> <span class="token function">buildItem</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> char <span class="token operator">=</span> data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>\n      <span class="token comment">//数字不会重复，所以作为Key</span>\n      key<span class="token punctuation">:</span> <span class="token class-name">ValueKey</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      trailing<span class="token punctuation">:</span> <span class="token class-name">IconButton</span><span class="token punctuation">(</span>\n        icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>delete<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// 点击时删除</span>\n        onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">onDelete</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">void</span> <span class="token function">onDelete</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 待实现</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除的时候需要我们通过AnimatedListState 的 removeItem 方法来应用删除动画，具体逻辑在 onDelete 中：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  globalKey<span class="token punctuation">.</span>currentState<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>\n    index<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>context<span class="token punctuation">,</span> animation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 删除过程执行的是反向动画，animation.value 会从1变为0</span>\n      <span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token function">buildItem</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;删除 </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">data<span class="token punctuation">[</span>index<span class="token punctuation">]</span></span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      data<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// 删除动画是一个合成动画：渐隐 + 缩小列表项告诉</span>\n      <span class="token keyword">return</span> <span class="token class-name">FadeTransition</span><span class="token punctuation">(</span>\n        opacity<span class="token punctuation">:</span> <span class="token class-name">CurvedAnimation</span><span class="token punctuation">(</span>\n          parent<span class="token punctuation">:</span> animation<span class="token punctuation">,</span>\n          <span class="token comment">//让透明度变化的更快一些</span>\n          curve<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Interval</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// 不断缩小列表项的高度</span>\n        child<span class="token punctuation">:</span> <span class="token class-name">SizeTransition</span><span class="token punctuation">(</span>\n          sizeFactor<span class="token punctuation">:</span> animation<span class="token punctuation">,</span>\n          axisAlignment<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> item<span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    duration<span class="token punctuation">:</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 动画时间为 200 ms</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码很简单，但我们需要注意，我们的数据是单独在 data 中维护的，调用 AnimatedListState 的插入和移除方法知识相当于一个通知：在什么位置执行插入或移除动画，仍然是数据驱动的（响应式并非命令式）。</p>',12)],c={},o=(0,a(18580).Z)(c,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);