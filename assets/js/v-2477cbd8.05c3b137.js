"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[8757],{5318:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-2477cbd8","path":"/chapter10/done_widget.html","title":"10.7 自绘组件: DoneWidget","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.69,"words":806},"filePathRelative":"chapter10/done_widget.md","localizedDate":"2022年6月6日","excerpt":""}')},58210:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(6808);const p=a.p+"assets/img/10-8.283557b0.gif",e=[(0,t.uE)('<h1 id="_10-7-自绘组件-donewidget" tabindex="-1"><a class="header-anchor" href="#_10-7-自绘组件-donewidget" aria-hidden="true">#</a> 10.7 自绘组件: DoneWidget</h1><p>上一节中我们通过 CustomCheckbox 演示了如何通过自定义 RenderObject 的方式来进行UI绘制、动画调度和事件处理。本节再通过一个实例来巩固换一下。</p><p>本节的我们将实现一个 DoneWidget，它可以在创建时执行一个打勾动画，效果如图10-8：</p><p><img src="'+p+'" alt="图10-8"></p><p>实现代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">DoneWidget</span> <span class="token keyword">extends</span> <span class="token class-name">LeafRenderObjectWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">DoneWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>outline <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//线条宽度</span>\n  <span class="token keyword">final</span> double strokeWidth<span class="token punctuation">;</span>\n  <span class="token comment">//轮廓颜色或填充色</span>\n  <span class="token keyword">final</span> <span class="token class-name">Color</span> color<span class="token punctuation">;</span>\n  <span class="token comment">//如果为true，则没有填充色，color代表轮廓的颜色；如果为false，则color为填充色</span>\n  <span class="token keyword">final</span> bool outline<span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">RenderObject</span> <span class="token function">createRenderObject</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">RenderDoneObject</span><span class="token punctuation">(</span>\n      strokeWidth<span class="token punctuation">,</span>\n      color<span class="token punctuation">,</span>\n      outline<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span>animationStatus <span class="token operator">=</span> <span class="token class-name">AnimationStatus</span><span class="token punctuation">.</span>forward<span class="token punctuation">;</span> <span class="token comment">// 创建时执行正向动画</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">updateRenderObject</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token class-name">RenderDoneObject</span> renderObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    renderObject\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> strokeWidth\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>outline <span class="token operator">=</span> outline\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DoneWidget 有两种模式，一种是 outline 模式，该模式背景没有填充色，此时 color 表示的是轮廓线条的颜色；如果是非 outline 模式，则 color 表示填充的背景色，此时 “勾” 的颜色简单设置为白色。</p><p>接下来需要实现 RenderDoneObject，由于组件不需要响应事件，所以我们可以不用添加事件相关的处理代码；但是组件需要执行动画，因此我们可以直接使用上一节中封装的 RenderObjectAnimationMixin，具体实现代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">RenderDoneObject</span> <span class="token keyword">extends</span> <span class="token class-name">RenderBox</span> <span class="token keyword">with</span> <span class="token class-name">RenderObjectAnimationMixin</span> <span class="token punctuation">{</span>\n  double strokeWidth<span class="token punctuation">;</span>\n  <span class="token class-name">Color</span> color<span class="token punctuation">;</span>\n  bool outline<span class="token punctuation">;</span>\n\n  <span class="token class-name">ValueChanged</span><span class="token generics"><span class="token punctuation">&lt;</span>bool<span class="token punctuation">&gt;</span></span><span class="token operator">?</span> onChanged<span class="token punctuation">;</span>\n\n  <span class="token class-name">RenderDoneObject</span><span class="token punctuation">(</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>strokeWidth<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>outline<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 动画执行时间为 300ms</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Duration</span> <span class="token keyword">get</span> duration <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">doPaint</span><span class="token punctuation">(</span><span class="token class-name">PaintingContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Offset</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可以对动画运用曲线</span>\n    <span class="token class-name">Curve</span> curve <span class="token operator">=</span> <span class="token class-name">Curves</span><span class="token punctuation">.</span>easeIn<span class="token punctuation">;</span>\n    <span class="token keyword">final</span> _progress <span class="token operator">=</span> curve<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">Rect</span> rect <span class="token operator">=</span> offset <span class="token operator">&amp;</span> size<span class="token punctuation">;</span>\n    <span class="token keyword">final</span> paint <span class="token operator">=</span> <span class="token class-name">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>isAntiAlias <span class="token operator">=</span> <span class="token boolean">true</span>\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>style <span class="token operator">=</span> outline <span class="token operator">?</span> <span class="token class-name">PaintingStyle</span><span class="token punctuation">.</span>stroke <span class="token punctuation">:</span> <span class="token class-name">PaintingStyle</span><span class="token punctuation">.</span>fill <span class="token comment">//填充</span>\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>outline<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      paint<span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> strokeWidth<span class="token punctuation">;</span>\n      rect <span class="token operator">=</span> rect<span class="token punctuation">.</span><span class="token function">deflate</span><span class="token punctuation">(</span>strokeWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 画背景圆</span>\n    context<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>center<span class="token punctuation">,</span> rect<span class="token punctuation">.</span>shortestSide <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> paint<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    paint\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token class-name">PaintingStyle</span><span class="token punctuation">.</span>stroke\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>color <span class="token operator">=</span> outline <span class="token operator">?</span> color <span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white\n      <span class="token punctuation">.</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> strokeWidth<span class="token punctuation">;</span>\n\n    <span class="token keyword">final</span> path <span class="token operator">=</span> <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">Offset</span> firstOffset <span class="token operator">=</span>\n        <span class="token class-name">Offset</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>left <span class="token operator">+</span> rect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>top <span class="token operator">+</span> rect<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">final</span> secondOffset <span class="token operator">=</span> <span class="token class-name">Offset</span><span class="token punctuation">(</span>\n      rect<span class="token punctuation">.</span>left <span class="token operator">+</span> rect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2.5</span><span class="token punctuation">,</span>\n      rect<span class="token punctuation">.</span>bottom <span class="token operator">-</span> rect<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">3.3</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    path<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>firstOffset<span class="token punctuation">.</span>dx<span class="token punctuation">,</span> firstOffset<span class="token punctuation">.</span>dy<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> adjustProgress <span class="token operator">=</span> <span class="token number">.6</span><span class="token punctuation">;</span>\n    <span class="token comment">//画 &quot;勾&quot;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>_progress <span class="token operator">&lt;</span> adjustProgress<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">//第一个点到第二个点的连线做动画(第二个点不停的变)</span>\n      <span class="token class-name">Offset</span> _secondOffset <span class="token operator">=</span> <span class="token class-name">Offset</span><span class="token punctuation">.</span><span class="token function">lerp</span><span class="token punctuation">(</span>\n        firstOffset<span class="token punctuation">,</span>\n        secondOffset<span class="token punctuation">,</span>\n        _progress <span class="token operator">/</span> adjustProgress<span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>\n      path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>_secondOffset<span class="token punctuation">.</span>dx<span class="token punctuation">,</span> _secondOffset<span class="token punctuation">.</span>dy<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">//链接第一个点和第二个点</span>\n      path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>secondOffset<span class="token punctuation">.</span>dx<span class="token punctuation">,</span> secondOffset<span class="token punctuation">.</span>dy<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">//第三个点位置随着动画变，做动画</span>\n      <span class="token keyword">final</span> lastOffset <span class="token operator">=</span> <span class="token class-name">Offset</span><span class="token punctuation">(</span>\n        rect<span class="token punctuation">.</span>right <span class="token operator">-</span> rect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>\n        rect<span class="token punctuation">.</span>top <span class="token operator">+</span> rect<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">3.5</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">Offset</span> _lastOffset <span class="token operator">=</span> <span class="token class-name">Offset</span><span class="token punctuation">.</span><span class="token function">lerp</span><span class="token punctuation">(</span>\n        secondOffset<span class="token punctuation">,</span>\n        lastOffset<span class="token punctuation">,</span>\n        <span class="token punctuation">(</span>progress <span class="token operator">-</span> adjustProgress<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> adjustProgress<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>\n      path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>_lastOffset<span class="token punctuation">.</span>dx<span class="token punctuation">,</span> _lastOffset<span class="token punctuation">.</span>dy<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    context<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">drawPath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> paint<span class="token punctuation">.</span><span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token class-name">PaintingStyle</span><span class="token punctuation">.</span>stroke<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">performLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 如果父组件指定了固定宽高，则使用父组件指定的，否则宽高默认置为 25</span>\n    size <span class="token operator">=</span> constraints<span class="token punctuation">.</span><span class="token function">constrain</span><span class="token punctuation">(</span>\n      constraints<span class="token punctuation">.</span>isTight <span class="token operator">?</span> <span class="token class-name">Size</span><span class="token punctuation">.</span>infinite <span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Size</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码很简单，但需要注意三点：</p><ol><li>我们对动画应用了easeIn 曲线，可以看到如果在 RenderObject 中对动画应用曲线，另外读者应该也能发现，曲线的本质就是对动画的进度加了一层映射，通过不同的映射规则就可以控制动画在不同阶段的快慢。</li><li>我们重写了 RenderObjectAnimationMixin 中的 duration，该参数用于指定动画时长。</li><li>adjustProgress 的作用主要是将“打勾”动画氛围两部分，第一部分是第一个点和第二个点的连线动画，这部分动画站总动画时长的 前 60%； 第二部分是第二点和第三个点的连线动画，该部分动画占总时长的后 40%。</li></ol>',11)],o={},c=(0,a(18580).Z)(o,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);