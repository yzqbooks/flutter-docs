"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[3505],{4219:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-0fe64b36","path":"/chapter10/combine.html","title":"10.2 组合现有组件","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"示例：自定义渐变按钮","slug":"示例-自定义渐变按钮","link":"#示例-自定义渐变按钮","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.51,"words":754},"filePathRelative":"chapter10/combine.md","localizedDate":"2022年6月6日","excerpt":""}')},9662:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6808);const e=a.p+"assets/img/10-1.88d7dcde.png",p=[(0,t.uE)('<h1 id="_10-2-组合现有组件" tabindex="-1"><a class="header-anchor" href="#_10-2-组合现有组件" aria-hidden="true">#</a> 10.2 组合现有组件</h1><p>在Flutter中页面UI通常都是由一些低级别组件组合而成，当我们需要封装一些通用组件时，应该首先考虑是否可以通过组合其它组件来实现，如果可以，则应优先使用组合，因为直接通过现有组件拼装会非常简单、灵活、高效。</p><h3 id="示例-自定义渐变按钮" tabindex="-1"><a class="header-anchor" href="#示例-自定义渐变按钮" aria-hidden="true">#</a> 示例：自定义渐变按钮</h3><p>Flutter Material组件库中的按钮默认不支持渐变背景，为了实现渐变背景按钮，我们自定义一个<code>GradientButton </code>组件，它需要支持一下功能：</p><ol><li>背景支持渐变色</li><li>手指按下时有涟漪效果</li><li>可以支持圆角</li></ol><p>我们先来看看最终要实现的效果（图10-1）：</p><p><img src="'+e+'" alt="图10-1"></p><p>我们<code>DecoratedBox</code>可以支持背景色渐变和圆角，<code>InkWell</code>在手指按下有涟漪效果，所以我们可以通过组合<code>DecoratedBox</code>和<code>InkWell</code>来实现<code>GradientButton</code>，代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">GradientButton</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">GradientButton</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span> \n    <span class="token keyword">this</span><span class="token punctuation">.</span>colors<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onPressed<span class="token punctuation">,</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>borderRadius<span class="token punctuation">,</span>\n    required <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 渐变色数组</span>\n  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Color</span><span class="token punctuation">&gt;</span></span><span class="token operator">?</span> colors<span class="token punctuation">;</span>\n\n  <span class="token comment">// 按钮宽高</span>\n  <span class="token keyword">final</span> double<span class="token operator">?</span> width<span class="token punctuation">;</span>\n  <span class="token keyword">final</span> double<span class="token operator">?</span> height<span class="token punctuation">;</span>\n  <span class="token keyword">final</span> <span class="token class-name">BorderRadius</span><span class="token operator">?</span> borderRadius<span class="token punctuation">;</span>\n\n  <span class="token comment">//点击回调</span>\n  <span class="token keyword">final</span> <span class="token class-name">GestureTapCallback</span><span class="token operator">?</span> onPressed<span class="token punctuation">;</span>\n\n  <span class="token keyword">final</span> <span class="token class-name">Widget</span> child<span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">ThemeData</span> theme <span class="token operator">=</span> <span class="token class-name">Theme</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//确保colors数组不空</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Color</span><span class="token punctuation">&gt;</span></span> _colors <span class="token operator">=</span>\n        colors <span class="token operator">?</span><span class="token operator">?</span> <span class="token punctuation">[</span>theme<span class="token punctuation">.</span>primaryColor<span class="token punctuation">,</span> theme<span class="token punctuation">.</span>primaryColorDark<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token class-name">DecoratedBox</span><span class="token punctuation">(</span>\n      decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>\n        gradient<span class="token punctuation">:</span> <span class="token class-name">LinearGradient</span><span class="token punctuation">(</span>colors<span class="token punctuation">:</span> _colors<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        borderRadius<span class="token punctuation">:</span> borderRadius<span class="token punctuation">,</span>\n        <span class="token comment">//border: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      child<span class="token punctuation">:</span> <span class="token class-name">Material</span><span class="token punctuation">(</span>\n        type<span class="token punctuation">:</span> <span class="token class-name">MaterialType</span><span class="token punctuation">.</span>transparency<span class="token punctuation">,</span>\n        child<span class="token punctuation">:</span> <span class="token class-name">InkWell</span><span class="token punctuation">(</span>\n          splashColor<span class="token punctuation">:</span> _colors<span class="token punctuation">.</span>last<span class="token punctuation">,</span>\n          highlightColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>transparent<span class="token punctuation">,</span>\n          borderRadius<span class="token punctuation">:</span> borderRadius<span class="token punctuation">,</span>\n          onTap<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token class-name">ConstrainedBox</span><span class="token punctuation">(</span>\n            constraints<span class="token punctuation">:</span> <span class="token class-name">BoxConstraints</span><span class="token punctuation">.</span><span class="token function">tightFor</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> height<span class="token punctuation">,</span> width<span class="token punctuation">:</span> width<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            child<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>\n              child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>\n                padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">8.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                child<span class="token punctuation">:</span> <span class="token class-name">DefaultTextStyle</span><span class="token punctuation">(</span>\n                  style<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontWeight<span class="token punctuation">:</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>bold<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                  child<span class="token punctuation">:</span> child<span class="token punctuation">,</span>\n                <span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code>GradientButton</code>是由<code>DecoratedBox</code>、<code>Padding</code>、<code>Center</code>、<code>InkWell</code>等组件组合而成。当然上面的代码只是一个示例，作为一个按钮它还并不完整，比如没有禁用状态，读者可以根据实际需要来完善，为了使用方便，笔者封装了一个功能更加完整的GradientButton，并将它添加到了flukit组件库中，读者可以引入flukit库后就可以直接使用了。</p><h4 id="使用gradientbutton" tabindex="-1"><a class="header-anchor" href="#使用gradientbutton" aria-hidden="true">#</a> 使用GradientButton</h4><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;../widgets/index.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">GradientButtonRoute</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">GradientButtonRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  _GradientButtonRouteState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_GradientButtonRouteState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _GradientButtonRouteState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GradientButtonRoute</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>\n      mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>\n        <span class="token class-name">GradientButton</span><span class="token punctuation">(</span>\n          colors<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>orange<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">]</span><span class="token punctuation">,</span>\n          height<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Submit&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          onPressed<span class="token punctuation">:</span> onTap<span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token class-name">GradientButton</span><span class="token punctuation">(</span>\n          height<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>\n          colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>lightGreen<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">.</span>shade700<span class="token punctuation">]</span><span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Submit&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          onPressed<span class="token punctuation">:</span> onTap<span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token class-name">GradientButton</span><span class="token punctuation">(</span>\n          height<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>\n          <span class="token comment">//borderRadius: const BorderRadius.all(Radius.circular(5)),</span>\n          colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>lightBlue<span class="token punctuation">.</span>shade300<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blueAccent<span class="token punctuation">]</span><span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Submit&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          onPressed<span class="token punctuation">:</span> onTap<span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">onTap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;button click&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>通过组合的方式定义组件和我们之前写界面并无差异，不过在抽离出单独的组件时我们要考虑代码规范性，如必要参数要用<code>required</code>关键词标注，对于可选参数在特定场景需要判空或设置默认值等。这是由于使用者大多时候可能不了解组件的内部细节，所以为了保证代码健壮性，我们需要在用户错误地使用组件时能够兼容或报错提示（使用<code>assert</code>断言函数）。</p>',14)],c={},o=(0,a(18580).Z)(c,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);