"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[9901],{89359:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-056d22e0","path":"/chapter14/layer.html","title":"14.7 绘制（三）Layer 实例","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"14.7.1","slug":"_14-7-1","link":"#_14-7-1","children":[]},{"level":2,"title":"14.7.2 LayerHandle","slug":"_14-7-2-layerhandle","link":"#_14-7-2-layerhandle","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":9.08,"words":2724},"filePathRelative":"chapter14/layer.md","localizedDate":"2022年6月6日","excerpt":""}')},88834:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(6808);const t=a.p+"assets/img/14-16.944e9f1a.png",p=[(0,e.uE)('<h1 id="_14-7-绘制-三-layer-实例" tabindex="-1"><a class="header-anchor" href="#_14-7-绘制-三-layer-实例" aria-hidden="true">#</a> 14.7 绘制（三）Layer 实例</h1><p>本节通过优化之前“绘制棋盘示例“来像大家展示如何在自定义组件中使用Layer。</p><h2 id="_14-7-1" tabindex="-1"><a class="header-anchor" href="#_14-7-1" aria-hidden="true">#</a> 14.7.1</h2><p>我们之前绘制棋盘示例是使用的CustomPaint组件，然后再painter的paint方法中同时实现了绘制棋盘和棋子，实际上这里可以有一个优化，因为棋盘是不会变化的，所以理想的方式就是当绘制区域不发生变化时，棋盘只需要绘制一次，当棋子发生变化时，每次只需要绘制棋子信息即可。</p><blockquote><p>在实际开发中，要实现上述功能还是优先使用Flutter建议的”Widget组合“的方式：比如棋盘和棋子分别绘制在两个Widget中，然后包上 RepaintBoundary 组件后把他们添加到 Stack中，这样做到分层渲染。不过，本节主要是为了说明Flutter自定义组件中如何使用Layer，所以我们采用自定义RenderObject的方式来实现。</p></blockquote><ol><li><p>首先我们定义一个ChessWidget，因为它并非容器类组件，所以继承自 LeafRenderObjectWidget 。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">ChessWidget</span> <span class="token keyword">extends</span> <span class="token class-name">LeafRenderObjectWidget</span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">RenderObject</span> <span class="token function">createRenderObject</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 返回Render对象</span>\n    <span class="token keyword">return</span> <span class="token class-name">RenderChess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//...省略updateRenderObject函数实现</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于自定义的 RenderChess 对象不接受任何参数，所以我们可以在ChessWidget 中不用实现<code>updateRenderObject</code>方法。</p></li><li><p>实现 RenderChess；我们先直接实现一个未缓存棋盘的原始版本，随后我们再一点点添加代码，直到把它改造成可以缓存棋盘的对象。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">RenderChess</span> <span class="token keyword">extends</span> <span class="token class-name">RenderBox</span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">performLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//确定ChessWidget的大小</span>\n    size <span class="token operator">=</span> constraints<span class="token punctuation">.</span><span class="token function">constrain</span><span class="token punctuation">(</span>\n      constraints<span class="token punctuation">.</span>isTight <span class="token operator">?</span> <span class="token class-name">Size</span><span class="token punctuation">.</span>infinite <span class="token punctuation">:</span> <span class="token class-name">Size</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name">PaintingContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Offset</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Rect</span> rect <span class="token operator">=</span> offset <span class="token operator">&amp;</span> size<span class="token punctuation">;</span>\n    <span class="token function">drawChessboard</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> rect<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绘制棋盘</span>\n    <span class="token function">drawPieces</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>canvas<span class="token punctuation">,</span> rect<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//绘制棋子</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接下来我们需要实现棋盘缓存，我们的思路是：</p><ul><li>创建一个 Layer 专门绘制棋盘，然后缓存。</li><li>当重绘触发时，如果绘制区域发生了变化，则重新绘制棋盘并缓存；如果绘制区域未变，则直接使用之前的Layer</li></ul><p>为此，我们需要定义一个PictureLayer来缓存棋盘，然后添加一个 _checkIfChessboardNeedsUpdate 函数来实现上述逻辑：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 保存之前的棋盘大小</span>\n<span class="token class-name">Rect</span> _rect <span class="token operator">=</span> <span class="token class-name">Rect</span><span class="token punctuation">.</span>zero<span class="token punctuation">;</span>\n<span class="token class-name">PictureLayer</span> _layer <span class="token operator">=</span> <span class="token class-name">PictureLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">_checkIfChessboardNeedsUpdate</span><span class="token punctuation">(</span><span class="token class-name">Rect</span> rect<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 如果绘制区域大小没发生变化，则无需重绘棋盘</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>_rect <span class="token operator">==</span> rect<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n  \n  <span class="token comment">// 绘制区域发生了变化，需要重新绘制并缓存棋盘</span>\n  _rect <span class="token operator">=</span> rect<span class="token punctuation">;</span>\n  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;paint chessboard&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n  <span class="token comment">// 新建一个PictureLayer，用于缓存棋盘的绘制结果，并添加到layer中</span>\n  <span class="token class-name"><span class="token namespace">ui<span class="token punctuation">.</span></span>PictureRecorder</span> recorder <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">ui<span class="token punctuation">.</span></span>PictureRecorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name">Canvas</span> canvas <span class="token operator">=</span> <span class="token class-name">Canvas</span><span class="token punctuation">(</span>recorder<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">drawChessboard</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> rect<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绘制棋盘</span>\n  <span class="token comment">// 将绘制产物保存在pictureLayer中</span>\n  _layer <span class="token operator">=</span> <span class="token class-name">PictureLayer</span><span class="token punctuation">(</span><span class="token class-name">Rect</span><span class="token punctuation">.</span>zero<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span>picture <span class="token operator">=</span> recorder<span class="token punctuation">.</span><span class="token function">endRecording</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token metadata function">@override</span>\n<span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name">PaintingContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Offset</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token class-name">Rect</span> rect <span class="token operator">=</span> offset <span class="token operator">&amp;</span> size<span class="token punctuation">;</span>\n  <span class="token comment">//检查棋盘大小是否需要变化，如果变化，则需要重新绘制棋盘并缓存</span>\n  <span class="token function">_checkIfChessboardNeedsUpdate</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//将缓存棋盘的layer添加到context中，每次重绘都要调用，原因下面会解释</span>\n  context<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>_layer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//再画棋子</span>\n  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;paint pieces&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">drawPieces</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>canvas<span class="token punctuation">,</span> rect<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的实现逻辑见注释，这里不再赘述，需要特别解释的是在 paint 方法中，每次重绘都需要调用 <code>context.addLayer(_layer)</code> 将棋盘layer添加到当前的Layer树中，通过上一节的介绍，我们知道，实际上是添加到了当前节点的第一个绘制边界节点的Layer中。可能会有读者疑惑，如果棋盘不变的话，添加一次不就行了，为什么每次重绘都要添加？实际上这个问题我们上一节已经解释过了，因为重绘是当前节点的第一个父级向下发起的，而每次重绘前，该节点都会先清空所有的孩子，代码见 <code>PaintingContext.repaintCompositedChild</code> 方法，所以我们需要每次重绘时都要添加一下。</p><blockquote><p>思考题：为什么父级绘制边界节点每次重绘前都要先清空其layer的所有孩子？</p></blockquote><p>OK，现在我们已经实现了棋盘缓存了，下面我们来验证一下。</p></li><li><p>我们创建一个测试 Demo 来验证一下，我们创建一个 ChessWidget 和一个 ElevatedButton，因为ElevatedButton在点击时会执行水波动画，所以会发起一连串的重绘请求，而根据上一节的知识，我们知道ChessWidget 和 ElevatedButton 会在同一个Layer上绘制，所以 ElevatedButton 重绘也会导致ChessWidget 的重绘。另外我们在绘制棋子和棋盘时都加了日志，所以我们只需要点击 ElevatedButton，然后查看日志就能验证棋盘缓存是否生效。</p><blockquote><p>在当前版本的Flutter中，ElevatedButton 的实现中并没有添加 RepaintBoundary，所以它才会和ChessWidget 在同一个 Layer 上渲染，如果后续 Flutter SDK中给 ElevatedButton 添加了RepaintBoundary，则不能通过本例来验证。</p></blockquote><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">PaintTest</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">PaintTest</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PaintTest</span><span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_PaintTestState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _PaintTestState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PaintTest</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token class-name">ByteData</span><span class="token operator">?</span> byteData<span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>\n      child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>\n        mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token class-name">ChessWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>\n            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;setState&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮后:发现，棋盘、棋子都可以正常显示，如图14-16：</p><p><img src="'+t+'" alt="图14-16"></p><p>同时日志面板输出了很多&quot;paint pieces&quot;，并没有&quot;paint chessboard&quot;，可见棋盘缓存生效了。</p><p>好的，貌似我们预期的功能已经实现了，但是别高兴太早，上面的代码还有一个内存泄露的坑，我们在下面LayerHandle 部分介绍。</p></li></ol><h2 id="_14-7-2-layerhandle" tabindex="-1"><a class="header-anchor" href="#_14-7-2-layerhandle" aria-hidden="true">#</a> 14.7.2 LayerHandle</h2><p>上面 RenderChess 实现中，我们将棋盘绘制信息缓存到了 layer 中，因为 layer 中保存的绘制产物是需要调用dispose方法释放的，如果UI变化需要ChessWidget销毁时没有释放则会发生内存泄露，所以们需要在组件销毁时，手动释放一下，给RenderChess中添加如下代码：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token metadata function">@override</span>\n<span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  _layer<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的场景比较简单，实际上，在Flutter中一个layer可能会反复被添加到多个容器类Layer中，或从容器中移除，这样一来有些时候我们可能会搞不清楚一个layer是否还被使用，为了解决这个问题，Flutter中定义了一个LayerHandle 类来专门管理layer，内部是通过引用计数的方式来跟踪layer是否还有使用者，一旦没有使用者，会自动调用layer.dispose来释放资源。为了符合Flutter规范，强烈建议读者在需要使用layer的时候通过LayerHandle来管理它。现在我们来修改一下上面的代码，RenderChess中定义一个 layerHandle，然后将<code>_layer</code> 全部替换为 <code>layerHandle.layer</code>：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 定义一个新的 layerHandle</span>\n<span class="token keyword">final</span> layerHandle <span class="token operator">=</span> <span class="token class-name">LayerHandle</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PictureLayer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token function">_checkIfChessboardNeedsUpdate</span><span class="token punctuation">(</span><span class="token class-name">Rect</span> rect<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    layerHandle<span class="token punctuation">.</span>layer <span class="token operator">=</span> <span class="token class-name">PictureLayer</span><span class="token punctuation">(</span><span class="token class-name">Rect</span><span class="token punctuation">.</span>zero<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span>picture <span class="token operator">=</span> recorder<span class="token punctuation">.</span><span class="token function">endRecording</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name">PaintingContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Offset</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token comment">//将缓存棋盘的layer添加到context中</span>\n    context<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layerHandle<span class="token punctuation">.</span>layer<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//layer通过引用计数的方式来跟踪自身是否还被layerHandle持有，</span>\n    <span class="token comment">//如果不被持有则会释放资源，所以我们必须手动置空，该set操作会</span>\n    <span class="token comment">//解除layerHandle对layer的持有。</span>\n    layerHandle<span class="token punctuation">.</span>layer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，这样就很好了！不过先别急着庆祝，现在我们再来回想一下上一节介绍的内容，每一个 RenderObject 都有一个layer 属性，我们能否直接使用它来保存棋盘layer呢？下面我们看看 RenderObject 中关于 layer 的定义：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token metadata function">@protected</span>\n<span class="token keyword">set</span> <span class="token function">layer</span><span class="token punctuation">(</span><span class="token class-name">ContainerLayer</span><span class="token operator">?</span> newLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  _layerHandle<span class="token punctuation">.</span>layer <span class="token operator">=</span> newLayer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">final</span> <span class="token class-name">LayerHandle</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ContainerLayer</span><span class="token punctuation">&gt;</span></span> _layerHandle <span class="token operator">=</span> <span class="token class-name">LayerHandle</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ContainerLayer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，我们RenderObject 中已经定义了一个 <code>_layerHandle</code>了，它会去管理 layer；同时 <code>layer</code> 是一个setter，会自动将新 layer 赋值到 <code>_layerHandle</code> 上，那么我们是否可以在 RenderChess 中直接使用父类定义好的 <code>_layerHandle</code>，这样的话我们就无需再自定义一个 layerHandle 了。读者可以先结合上一节的内容思考一分钟，然后我们再往下看。</p><p>答案是：取决于当前节点的 isRepaintBoundary 属性是否为 true（即当前节点是否为绘制边界节点） ，如果为 true 则不可以，如果不为 true，则可以。上一节中讲过，Flutter在执行 flushPaint 重绘时遇到绘制边界节点：</p><ol><li>先检查其 <code>layer</code> 是否为空，如果不为空，则会先清空该 <code>layer</code> 的孩子节点，然后会使用该 <code>layer</code> 创建一个 PaintingContext，传递给 paint 方法。</li><li>如果其 <code>layer</code> 为空，会创建一个 OffsetLayer 给它。</li></ol><p>如果我们要将棋盘layer保存到预定义的 <code>layer</code>变量中的话，得先创建一个ContainerLayer，然后将绘制棋盘的PictureLayer作为子节点添加到新创建的ContainerLayer中，然后赋值给 <code>layer</code>变量。这样一来：</p><ol><li>如果我们设置 RenderChess 的 isRepaintBoundary 为true，那么在每次重绘时，flutter 框架都会将 layer 子节点清空，这样的话，我们的棋盘Picturelayer就会被移除，接下来就会触发异常。</li><li>如果 RenderChess 的 isRepaintBoundary 为 false（默认值），则在重绘过程中 flutter 框架不会使用到 <code>layer</code> 属性，这中情况没有问题。</li></ol><p>虽然，本例中 RenderChess 的 isRepaintBoundary 为 false，直接使用 <code>layer</code>是可以的，但我不建议这么做，原因有二：</p><ol><li>RenderObject 中的 layer 字段在 Flutter 框架中是专门为绘制流程而设计的，按照职责分离原则，我们也不应该去蹭它。即使现在能蹭成功，万一哪天Flutter的绘制流发生变化，比如也开始使用非绘制边界节点的layer字段，那么我们的代码将会出问题。</li><li>即使去使用，我们也需要先创建一个ContainerLayer，既然如此，我们还不如乖乖创建一个LayerHandle，这省不了多少工夫。</li></ol><p>现在考虑最后一个问题，在上面示例中，我们点击按钮后，虽然棋盘不会重绘了，但棋子还是会重绘，这并不合理，我们希望棋盘区域不受外界干扰，只有新的落子行为时（点击在棋盘区域）时再重绘棋子。相信看到着，解决方案就呼之欲出了，我们有两种选择：</p><ol><li>RenderChess 的 isRepaintBoundary 返回 true；将当前节点变为一个绘制边界，这样 ChessWidget 就会和按钮分别在不同的 layer 上绘制，也就不会相互影响。</li><li>在使用 ChessWidget 时，给它套一个RepaintBoundary组件，和1的原理差不多的，只不过这种方式是将ChessWidget的父节点（RepaintBoundary）变为了绘制边界（而不是自身），这样也会创建一个新的 layer 来隔离按钮的绘制。</li></ol><p>具体应该选哪种应该根据情况而定，第二种方案会更灵活，但第一种方案的实际效果往往会比较好，因为如果我们封装的复杂自绘控件中没有设置 isRepaintBoundary 为 true，我们很难保证使用者在使用时会给我们的空间添加RepaintBoundary，所以这种细节还是对使用者屏蔽掉会比较好。</p>',23)],c={},o=(0,a(18580).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,p)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);