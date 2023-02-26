"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[4480],{66223:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-2c434c4a","path":"/chapter8/gesture.html","title":"8.2 手势识别","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"8.2.1 GestureDetector","slug":"_8-2-1-gesturedetector","link":"#_8-2-1-gesturedetector","children":[{"level":3,"title":"点击、双击、长按","slug":"点击、双击、长按","link":"#点击、双击、长按","children":[]},{"level":3,"title":"拖动、滑动","slug":"拖动、滑动","link":"#拖动、滑动","children":[]},{"level":3,"title":"单一方向拖动","slug":"单一方向拖动","link":"#单一方向拖动","children":[]},{"level":3,"title":"缩放","slug":"缩放","link":"#缩放","children":[]}]},{"level":2,"title":"8.2.2 GestureRecognizer","slug":"_8-2-2-gesturerecognizer","link":"#_8-2-2-gesturerecognizer","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1579},"filePathRelative":"chapter8/gesture.md","localizedDate":"2022年6月6日","excerpt":""}')},42863:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6808);const e=a.p+"assets/img/8-2.294f901b.png",p=a.p+"assets/img/8-3.25a5b6ba.png",c=a.p+"assets/img/8-4.675effc1.png",o=a.p+"assets/img/8-5.6f08a974.png",l=[(0,t.uE)('<h1 id="_8-2-手势识别" tabindex="-1"><a class="header-anchor" href="#_8-2-手势识别" aria-hidden="true">#</a> 8.2 手势识别</h1><p>本节先介绍一些Flutter中用于处理手势的<code>GestureDetector</code>和<code>GestureRecognizer</code>，然后再仔细讨论一下手势竞争与冲突问题。</p><h2 id="_8-2-1-gesturedetector" tabindex="-1"><a class="header-anchor" href="#_8-2-1-gesturedetector" aria-hidden="true">#</a> 8.2.1 GestureDetector</h2><p><code>GestureDetector</code>是一个用于手势识别的功能性组件，我们通过它可以来识别各种手势。<code>GestureDetector</code> 内部封装了 Listener，用以识别语义化的手势，接下来我们详细介绍一下各种手势的识别。</p><h3 id="点击、双击、长按" tabindex="-1"><a class="header-anchor" href="#点击、双击、长按" aria-hidden="true">#</a> 点击、双击、长按</h3><p>我们通过<code>GestureDetector</code>对<code>Container</code>进行手势识别，触发相应事件后，在<code>Container</code>上显示事件名，为了增大点击区域，将<code>Container</code>设置为200×100，代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> _GestureTestState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GestureTest</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token class-name">String</span> _operation <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;No Gesture detected!&quot;</span></span><span class="token punctuation">;</span> <span class="token comment">//保存事件名</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>\n      child<span class="token punctuation">:</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>\n        child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>\n          alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>\n          color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span>\n          width<span class="token punctuation">:</span> <span class="token number">200.0</span><span class="token punctuation">,</span>\n          height<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>\n            _operation<span class="token punctuation">,</span>\n            style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">updateText</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Tap&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//点击</span>\n        onDoubleTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">updateText</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;DoubleTap&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//双击</span>\n        onLongPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">updateText</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;LongPress&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//长按</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">void</span> <span class="token function">updateText</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//更新显示的事件名</span>\n    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      _operation <span class="token operator">=</span> text<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如图8-2所示：</p><p><img src="'+e+'" alt="图8-2"></p><blockquote><p><strong>注意</strong>： 当同时监听<code>onTap</code>和<code>onDoubleTap</code>事件时，当用户触发tap事件时，会有200毫秒左右的延时，这是因为当用户点击完之后很可能会再次点击以触发双击事件，所以<code>GestureDetector</code>会等一段时间来确定是否为双击事件。如果用户只监听了<code>onTap</code>（没有监听<code>onDoubleTap</code>）事件时，则没有延时。</p></blockquote><h3 id="拖动、滑动" tabindex="-1"><a class="header-anchor" href="#拖动、滑动" aria-hidden="true">#</a> 拖动、滑动</h3><p>一次完整的手势过程是指用户手指按下到抬起的整个过程，期间，用户按下手指后可能会移动，也可能不会移动。<code>GestureDetector</code>对于拖动和滑动事件是没有区分的，他们本质上是一样的。<code>GestureDetector</code>会将要监听的组件的原点（左上角）作为本次手势的原点，当用户在监听的组件上按下手指时，手势识别就会开始。下面我们看一个拖动圆形字母A的示例：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> _Drag <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  _DragState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_DragState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _DragState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_Drag<span class="token punctuation">&gt;</span></span> <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span> <span class="token punctuation">{</span>\n  double _top <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span> <span class="token comment">//距顶部的偏移</span>\n  double _left <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span><span class="token comment">//距左边的偏移</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>\n      children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>\n        <span class="token class-name">Positioned</span><span class="token punctuation">(</span>\n          top<span class="token punctuation">:</span> _top<span class="token punctuation">,</span>\n          left<span class="token punctuation">:</span> _left<span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>\n            child<span class="token punctuation">:</span> <span class="token class-name">CircleAvatar</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;A&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token comment">//手指按下时会触发此回调</span>\n            onPanDown<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragDownDetails</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token comment">//打印手指按下的位置(相对于屏幕)</span>\n              <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;用户手指按下：</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">e<span class="token punctuation">.</span>globalPosition</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token comment">//手指滑动时会触发此回调</span>\n            onPanUpdate<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragUpdateDetails</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token comment">//用户手指滑动时，更新偏移，重新构建</span>\n              <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                _left <span class="token operator">+=</span> e<span class="token punctuation">.</span>delta<span class="token punctuation">.</span>dx<span class="token punctuation">;</span>\n                _top <span class="token operator">+=</span> e<span class="token punctuation">.</span>delta<span class="token punctuation">.</span>dy<span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            onPanEnd<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragEndDetails</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n              <span class="token comment">//打印滑动结束时在x、y轴上的速度</span>\n              <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>velocity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行后，就可以在任意方向拖动了，运行效果如图8-3所示：</p><p><img src="'+p+'" alt="图8-3"></p><p>日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>I/flutter ( 8513): 用户手指按下：Offset(26.3, 101.8)\nI/flutter ( 8513): Velocity(235.5, 125.8)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p><ul><li><code>DragDownDetails.globalPosition</code>：当用户按下时，此属性为用户按下的位置相对于<strong>屏幕</strong>（而非父组件）原点(左上角)的偏移。</li><li><code>DragUpdateDetails.delta</code>：当用户在屏幕上滑动时，会触发多次Update事件，<code>delta</code>指一次Update事件的滑动的偏移量。</li><li><code>DragEndDetails.velocity</code>：该属性代表用户抬起手指时的滑动速度(包含x、y两个轴的），示例中并没有处理手指抬起时的速度，常见的效果是根据用户抬起手指时的速度做一个减速动画。</li></ul><h3 id="单一方向拖动" tabindex="-1"><a class="header-anchor" href="#单一方向拖动" aria-hidden="true">#</a> 单一方向拖动</h3><p>在本示例中，是可以朝任意方向拖动的，但是在很多场景，我们只需要沿一个方向来拖动，如一个垂直方向的列表，<code>GestureDetector</code>可以只识别特定方向的手势事件，我们将上面的例子改为只能沿垂直方向拖动：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> _DragVertical <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  _DragVerticalState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_DragVerticalState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _DragVerticalState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_DragVertical<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  double _top <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>\n      children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>\n        <span class="token class-name">Positioned</span><span class="token punctuation">(</span>\n          top<span class="token punctuation">:</span> _top<span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>\n            child<span class="token punctuation">:</span> <span class="token class-name">CircleAvatar</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;A&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token comment">//垂直方向拖动事件</span>\n            onVerticalDragUpdate<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragUpdateDetails</span> details<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                _top <span class="token operator">+=</span> details<span class="token punctuation">.</span>delta<span class="token punctuation">.</span>dy<span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就只能在垂直方向拖动了，如果只想在水平方向滑动同理。</p><h3 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h3><p><code>GestureDetector</code>可以监听缩放事件，下面示例演示了一个简单的图片缩放效果：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> _Scale <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function">_Scale</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  _ScaleState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_ScaleState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _ScaleState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_Scale<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  double _width <span class="token operator">=</span> <span class="token number">200.0</span><span class="token punctuation">;</span> <span class="token comment">//通过修改图片宽度来达到缩放效果</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>\n      child<span class="token punctuation">:</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>\n        <span class="token comment">//指定宽度，高度自适应</span>\n        child<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;./images/sea.png&quot;</span></span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> _width<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        onScaleUpdate<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">ScaleUpdateDetails</span> details<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">//缩放倍数在0.8到10倍之间</span>\n            _width<span class="token operator">=</span><span class="token number">200</span><span class="token operator">*</span>details<span class="token punctuation">.</span>scale<span class="token punctuation">.</span><span class="token function">clamp</span><span class="token punctuation">(</span><span class="token number">.8</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如图8-4所示：</p><p><img src="'+c+'" alt="图8-4"></p><p>现在在图片上双指张开、收缩就可以放大、缩小图片。本示例比较简单，实际中我们通常还需要一些其它功能，如双击放大或缩小一定倍数、双指张开离开屏幕时执行一个减速放大动画等，读者可以在学习完后面“动画”一章中的内容后自己来尝试实现一下。</p><h2 id="_8-2-2-gesturerecognizer" tabindex="-1"><a class="header-anchor" href="#_8-2-2-gesturerecognizer" aria-hidden="true">#</a> 8.2.2 GestureRecognizer</h2><p><code>GestureDetector</code>内部是使用一个或多个<code>GestureRecognizer</code>来识别各种手势的，而<code>GestureRecognizer</code>的作用就是通过<code>Listener</code>来将原始指针事件转换为语义手势，<code>GestureDetector</code>直接可以接收一个子widget。<code>GestureRecognizer</code>是一个抽象类，一种手势的识别器对应一个<code>GestureRecognizer</code>的子类，Flutter实现了丰富的手势识别器，我们可以直接使用。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><p>假设我们要给一段富文本（<code>RichText</code>）的不同部分分别添加点击事件处理器，但是<code>TextSpan</code>并不是一个widget，这时我们不能用<code>GestureDetector</code>，但<code>TextSpan</code>有一个<code>recognizer</code>属性，它可以接收一个<code>GestureRecognizer</code>。</p><p>假设我们需要在点击时给文本变色:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/gestures.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> _GestureRecognizer <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function">_GestureRecognizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  _GestureRecognizerState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_GestureRecognizerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _GestureRecognizerState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_GestureRecognizer<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token class-name">TapGestureRecognizer</span> _tapGestureRecognizer <span class="token operator">=</span> <span class="token class-name">TapGestureRecognizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  bool _toggle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//变色开关</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//用到GestureRecognizer的话一定要调用其dispose方法释放资源</span>\n    _tapGestureRecognizer<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>\n      child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">.</span><span class="token function">rich</span><span class="token punctuation">(</span>\n        <span class="token class-name">TextSpan</span><span class="token punctuation">(</span>\n          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token class-name">TextSpan</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;你好世界&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token class-name">TextSpan</span><span class="token punctuation">(</span>\n              text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;点我变色&quot;</span></span><span class="token punctuation">,</span>\n              style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>\n                fontSize<span class="token punctuation">:</span> <span class="token number">30.0</span><span class="token punctuation">,</span>\n                color<span class="token punctuation">:</span> _toggle <span class="token operator">?</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue <span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>\n              <span class="token punctuation">)</span><span class="token punctuation">,</span>\n              recognizer<span class="token punctuation">:</span> _tapGestureRecognizer\n                <span class="token punctuation">.</span><span class="token punctuation">.</span>onTap <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    _toggle <span class="token operator">=</span> <span class="token operator">!</span>_toggle<span class="token punctuation">;</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token class-name">TextSpan</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;你好世界&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如图8-5所示：</p><p><img src="'+o+'" alt="图8-5"></p><blockquote><p>注意：使用<code>GestureRecognizer</code>后一定要调用其<code>dispose()</code>方法来释放资源（主要是取消内部的计时器）。</p></blockquote>',38)],i={},u=(0,a(18580).Z)(i,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,l)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);