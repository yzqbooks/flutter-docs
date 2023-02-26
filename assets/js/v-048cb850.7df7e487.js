"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[689],{67749:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-048cb850","path":"/chapter6/pageview.html","title":"6.7 PageView与页面缓存","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"6.7.1 PageView","slug":"_6-7-1-pageview","link":"#_6-7-1-pageview","children":[]},{"level":2,"title":"6.7.2 页面缓存","slug":"_6-7-2-页面缓存","link":"#_6-7-2-页面缓存","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":4.56,"words":1368},"filePathRelative":"chapter6/pageview.md","localizedDate":"2022年6月6日","excerpt":""}')},7666:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(6808);const t=a.p+"assets/img/6-16.b09c20cd.gif",p=[(0,e.uE)('<h1 id="_6-7-pageview与页面缓存" tabindex="-1"><a class="header-anchor" href="#_6-7-pageview与页面缓存" aria-hidden="true">#</a> 6.7 PageView与页面缓存</h1><h2 id="_6-7-1-pageview" tabindex="-1"><a class="header-anchor" href="#_6-7-1-pageview" aria-hidden="true">#</a> 6.7.1 PageView</h2><p>如果要实现页面切换和 Tab 布局，我们可以使用 PageView 组件。需要注意，PageView 是一个非常重要的组件，因为在移动端开发中很常用，比如大多数 App 都包含 Tab 换页效果、图片轮动以及抖音上下滑页切换视频功能等等，这些都可以通过 PageView 轻松实现。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">PageView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>scrollDirection <span class="token operator">=</span> <span class="token class-name">Axis</span><span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span> <span class="token comment">// 滑动方向</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>reverse <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token class-name">PageController</span><span class="token operator">?</span> controller<span class="token punctuation">,</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>physics<span class="token punctuation">,</span>\n  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span> children <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>onPageChanged<span class="token punctuation">,</span>\n  \n  <span class="token comment">//每次滑动是否强制切换整个页面，如果为false，则会根据实际的滑动距离显示页面</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>pageSnapping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">//主要是配合辅助功能用的，后面解释</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>allowImplicitScrolling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token comment">//后面解释</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>padEnds <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看一个 Tab 切换的实例，为了突出重点，我们让每个 Tab 页都只显示一个数字。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// Tab 页面 </span>\n<span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>\n    required <span class="token keyword">this</span><span class="token punctuation">.</span>text\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">final</span> <span class="token class-name">String</span> text<span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  _PageState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_PageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _PageState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Page</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;build </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">widget<span class="token punctuation">.</span>text</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">widget<span class="token punctuation">.</span>text</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> textScaleFactor<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建一个 PageView：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token metadata function">@override</span>\n<span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> children <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 生成 6 个 Tab 页</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    children<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> <span class="token class-name">Page</span><span class="token punctuation">(</span> text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">i</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token class-name">PageView</span><span class="token punctuation">(</span>\n    <span class="token comment">// scrollDirection: Axis.vertical, // 滑动方向为垂直方向</span>\n    children<span class="token punctuation">:</span> children<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后就可以左右滑动来切换页面了，效果如图6-16所示：</p><p><img src="'+t+'" alt="图6-16"></p><p>如果将 PageView 的滑动方向指定为垂直方向（上面代码中注释部分），则会变为上下滑动切换页面。</p><h2 id="_6-7-2-页面缓存" tabindex="-1"><a class="header-anchor" href="#_6-7-2-页面缓存" aria-hidden="true">#</a> 6.7.2 页面缓存</h2><p>我们在运行上面示例时，读者可能已经发现：每当页面切换时都会触发新 Page 页的 build，比如我们从第一页滑到第二页，然后再滑回第一页时，控制台打印如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: build 0\nflutter: build 1\nflutter: build 0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见 PageView 默认并没有缓存功能，一旦页面滑出屏幕它就会被销毁，这和我们前面讲过的 ListView/GridView 不一样，在创建 ListView/GridView 时我们可以手动指定 ViewPort 之外多大范围内的组件需要预渲染和缓存（通过 <code>cacheExtent</code> 指定），只有当组件滑出屏幕后又滑出预渲染区域，组件才会被销毁，但是不幸的是 PageView 并没有 <code>cacheExtent</code> 参数！但是在真实的业务场景中，对页面进行缓存是很常见的一个需求，比如一个新闻 App，下面有很多频道页，如果不支持页面缓存，则一旦滑到新的频道旧的频道页就会销毁，滑回去时又得重新请求数据和构建页面，这谁扛得住！</p><p>按道理 <code>cacheExtent</code> 是 Viewport 的一个配置属性，且 PageView 也是要构建 Viewport 的，那么为什么就不能透传一下这个参数呢？于是笔者带着这个疑问看了一下 PageView 的源码，发现在 PageView 创建Viewport 的代码中是这样的：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>child<span class="token punctuation">:</span> <span class="token class-name">Scrollable</span><span class="token punctuation">(</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  viewportBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ViewportOffset</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Viewport</span><span class="token punctuation">(</span>\n      <span class="token comment">// TODO(dnfield): we should provide a way to set cacheExtent</span>\n      <span class="token comment">// independent of implicit scrolling:</span>\n      <span class="token comment">// https://github.com/flutter/flutter/issues/45632</span>\n      cacheExtent<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>allowImplicitScrolling <span class="token operator">?</span> <span class="token number">1.0</span> <span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>\n      cacheExtentStyle<span class="token punctuation">:</span> <span class="token class-name">CacheExtentStyle</span><span class="token punctuation">.</span>viewport<span class="token punctuation">,</span>\n      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现 虽然 PageView 没有透传 cacheExtent，但是却在<code>allowImplicitScrolling</code> 为 true 时设置了预渲染区域，注意，此时的缓存类型为 CacheExtentStyle.viewport，则 cacheExtent 则表示缓存的长度是几个 Viewport 的宽度，cacheExtent 为 1.0，则代表前后各缓存一个页面宽度，即前后各一页。既然如此，那我们将 PageView 的 <code>allowImplicitScrolling</code> 置为 true 则不就可以缓存前后两页了？我们修改代码，然后运行示例，发现在第一页时，控制台打印信息如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: build 0\nflutter: build 1 // 预渲染第二页\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>滑到第二页时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter: build 0\nflutter: build 1\nflutter: build 2 // 预渲染第三页\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当再滑回第一页时，控制台信息不变，这也就意味着第一页缓存成功，它没有被重新构建。但是如果我们从第二页滑到第三页，然后再滑回第一页时，控制台又会输出 ”build 0“，这也符合预期，因为我们之前分析的就是设置 <code>allowImplicitScrolling</code> 置为 true 时就只会缓存前后各一页，所以滑到第三页时，第一页就会销毁。</p><p>OK，能缓存前后各一页也貌似比不能缓存好一点，但还是不能彻底解决不了我们的问题。为什么明明就是顺手的事， flutter 就不让开发者指定缓存策略呢？然后我们翻译一下源码中的注释：</p><blockquote><p>Todo：我们应该提供一种独立于隐式滚动（implicit scrolling）的设置 cacheExtent 的机制。</p></blockquote><p>放开 cacheExtent 透传不就是顺手的事么，为什么还要以后再做，是有什么难题么？这就要看看 <code>allowImplicitScrolling</code> 到底是什么了，根据文档以及注释中 issue 的链接，发现PageView 中设置 cacheExtent 会和 iOS 中 辅助功能有冲突（读者可以先不用关注），所以暂时还没有什么好的办法。看到这可能国内的很多开发者要说我们的 App 不用考虑辅助功能，既然如此，那问题很好解决，将 PageView 的源码拷贝一份，然后透传 cacheExtent 即可。</p><p>拷源码的方式虽然很简单，但毕竟不是正统做法，那有没有更通用的方法吗？有！可滚动组件提供了一种通用的缓存子项的解决方案，我们将在下一节中介绍。</p>',26)],c={},i=(0,a(18580).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,p)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);