import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.dbe422c1.js";var p="/flutter-docs/assets/10-5.5ef925e4.png";const e={},o=t(`<h1 id="_10-5-\u81EA\u7ED8\u5B9E\u4F8B-\u5706\u5F62\u80CC\u666F\u6E10\u53D8\u8FDB\u5EA6\u6761" tabindex="-1"><a class="header-anchor" href="#_10-5-\u81EA\u7ED8\u5B9E\u4F8B-\u5706\u5F62\u80CC\u666F\u6E10\u53D8\u8FDB\u5EA6\u6761" aria-hidden="true">#</a> 10.5 \u81EA\u7ED8\u5B9E\u4F8B\uFF1A\u5706\u5F62\u80CC\u666F\u6E10\u53D8\u8FDB\u5EA6\u6761</h1><p>\u672C\u8282\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u5706\u5F62\u80CC\u666F\u6E10\u53D8\u8FDB\u5EA6\u6761\uFF0C\u5B83\u652F\u6301\uFF1A</p><ol><li>\u652F\u6301\u591A\u79CD\u80CC\u666F\u6E10\u53D8\u8272\u3002</li><li>\u4EFB\u610F\u5F27\u5EA6\uFF1B\u8FDB\u5EA6\u6761\u53EF\u4EE5\u4E0D\u662F\u6574\u5706\u3002</li><li>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C97\u7EC6\u3001\u4E24\u7AEF\u662F\u5426\u5706\u89D2\u7B49\u6837\u5F0F\u3002</li></ol><p>\u53EF\u4EE5\u53D1\u73B0\u8981\u5B9E\u73B0\u8FD9\u6837\u7684\u4E00\u4E2A\u8FDB\u5EA6\u6761\u662F\u65E0\u6CD5\u901A\u8FC7\u73B0\u6709\u7EC4\u4EF6\u7EC4\u5408\u800C\u6210\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u901A\u8FC7\u81EA\u7ED8\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:math&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">GradientCircularProgressIndicator</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stokeWidth <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>radius<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>colors<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stops<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>strokeCapRound <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFEEEEEE</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>totalAngle <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> pi<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">///\u7C97\u7EC6</span>
  <span class="token keyword">final</span> double strokeWidth<span class="token punctuation">;</span>

  <span class="token comment">/// \u5706\u7684\u534A\u5F84</span>
  <span class="token keyword">final</span> double radius<span class="token punctuation">;</span>

  <span class="token comment">///\u4E24\u7AEF\u662F\u5426\u4E3A\u5706\u89D2</span>
  <span class="token keyword">final</span> bool strokeCapRound<span class="token punctuation">;</span>

  <span class="token comment">/// \u5F53\u524D\u8FDB\u5EA6\uFF0C\u53D6\u503C\u8303\u56F4 [0.0-1.0]</span>
  <span class="token keyword">final</span> double value<span class="token punctuation">;</span>

  <span class="token comment">/// \u8FDB\u5EA6\u6761\u80CC\u666F\u8272</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> backgroundColor<span class="token punctuation">;</span>

  <span class="token comment">/// \u8FDB\u5EA6\u6761\u7684\u603B\u5F27\u5EA6\uFF0C2*PI\u4E3A\u6574\u5706\uFF0C\u5C0F\u4E8E2*PI\u5219\u4E0D\u662F\u6574\u5706</span>
  <span class="token keyword">final</span> double totalAngle<span class="token punctuation">;</span>

  <span class="token comment">/// \u6E10\u53D8\u8272\u6570\u7EC4</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Color</span><span class="token punctuation">&gt;</span></span> colors<span class="token punctuation">;</span>

  <span class="token comment">/// \u6E10\u53D8\u8272\u7684\u7EC8\u6B62\u70B9\uFF0C\u5BF9\u5E94colors\u5C5E\u6027</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">&gt;</span></span> stops<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    double _offset <span class="token operator">=</span> <span class="token number">.0</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5982\u679C\u4E24\u7AEF\u4E3A\u5706\u89D2\uFF0C\u5219\u9700\u8981\u5BF9\u8D77\u59CB\u4F4D\u7F6E\u8FDB\u884C\u8C03\u6574\uFF0C\u5426\u5219\u5706\u89D2\u90E8\u5206\u4F1A\u504F\u79BB\u8D77\u59CB\u4F4D\u7F6E</span>
    <span class="token comment">// \u4E0B\u9762\u8C03\u6574\u7684\u89D2\u5EA6\u7684\u8BA1\u7B97\u516C\u5F0F\u662F\u901A\u8FC7\u6570\u5B66\u51E0\u4F55\u77E5\u8BC6\u5F97\u51FA\uFF0C\u8BFB\u8005\u6709\u5174\u8DA3\u53EF\u4EE5\u7814\u7A76\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u662F\u8FD9\u6837  </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>strokeCapRound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _offset <span class="token operator">=</span> <span class="token function">asin</span><span class="token punctuation">(</span>strokeWidth <span class="token operator">/</span> <span class="token punctuation">(</span>radius <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> strokeWidth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> _colors <span class="token operator">=</span> colors<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_colors <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Color</span> color <span class="token operator">=</span> <span class="token class-name">Theme</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>colorScheme<span class="token punctuation">.</span>secondary<span class="token punctuation">;</span>
      _colors <span class="token operator">=</span> <span class="token punctuation">[</span>color<span class="token punctuation">,</span> color<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token class-name">Transform</span><span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>
      angle<span class="token punctuation">:</span> <span class="token operator">-</span>pi <span class="token operator">/</span> <span class="token number">2.0</span> <span class="token operator">-</span> _offset<span class="token punctuation">,</span> 
      child<span class="token punctuation">:</span> <span class="token class-name">CustomPaint</span><span class="token punctuation">(</span>
          size<span class="token punctuation">:</span> <span class="token class-name">Size</span><span class="token punctuation">.</span><span class="token function">fromRadius</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span><span class="token punctuation">,</span>
          painter<span class="token punctuation">:</span> <span class="token function">_GradientCircularProgressPainter</span><span class="token punctuation">(</span>
            strokeWidth<span class="token punctuation">:</span> strokeWidth<span class="token punctuation">,</span>
            strokeCapRound<span class="token punctuation">:</span> strokeCapRound<span class="token punctuation">,</span>
            backgroundColor<span class="token punctuation">:</span> backgroundColor<span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
            total<span class="token punctuation">:</span> totalAngle<span class="token punctuation">,</span>
            radius<span class="token punctuation">:</span> radius<span class="token punctuation">,</span>
            colors<span class="token punctuation">:</span> _colors<span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9E\u73B0\u753B\u7B14</span>
<span class="token keyword">class</span> _GradientCircularProgressPainter <span class="token keyword">extends</span> <span class="token class-name">CustomPainter</span> <span class="token punctuation">{</span>
  <span class="token function">_GradientCircularProgressPainter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> <span class="token number">10.0</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>strokeCapRound <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFEEEEEE</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>radius<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> pi<span class="token punctuation">,</span>
    <span class="token metadata function">@required</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colors<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stops<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> double strokeWidth<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool strokeCapRound<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double value<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> backgroundColor<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Color</span><span class="token punctuation">&gt;</span></span> colors<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double total<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double radius<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">&gt;</span></span> stops<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name">Canvas</span> canvas<span class="token punctuation">,</span> <span class="token class-name">Size</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>radius <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      size <span class="token operator">=</span> <span class="token class-name">Size</span><span class="token punctuation">.</span><span class="token function">fromRadius</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    double _offset <span class="token operator">=</span> strokeWidth <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
    double _value <span class="token operator">=</span> <span class="token punctuation">(</span>value <span class="token operator">?</span><span class="token operator">?</span> <span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _value <span class="token operator">=</span> _value<span class="token punctuation">.</span><span class="token function">clamp</span><span class="token punctuation">(</span><span class="token number">.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span> <span class="token operator">*</span> total<span class="token punctuation">;</span>
    double _start <span class="token operator">=</span> <span class="token number">.0</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>strokeCapRound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _start <span class="token operator">=</span> <span class="token function">asin</span><span class="token punctuation">(</span>strokeWidth<span class="token operator">/</span> <span class="token punctuation">(</span>size<span class="token punctuation">.</span>width <span class="token operator">-</span> strokeWidth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Rect</span> rect <span class="token operator">=</span> <span class="token class-name">Offset</span><span class="token punctuation">(</span>_offset<span class="token punctuation">,</span> _offset<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token class-name">Size</span><span class="token punctuation">(</span>
        size<span class="token punctuation">.</span>width <span class="token operator">-</span> strokeWidth<span class="token punctuation">,</span>
        size<span class="token punctuation">.</span>height <span class="token operator">-</span> strokeWidth
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> paint <span class="token operator">=</span> <span class="token class-name">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>strokeCap <span class="token operator">=</span> strokeCapRound <span class="token operator">?</span> <span class="token class-name">StrokeCap</span><span class="token punctuation">.</span>round <span class="token punctuation">:</span> <span class="token class-name">StrokeCap</span><span class="token punctuation">.</span>butt
      <span class="token punctuation">.</span><span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token class-name">PaintingStyle</span><span class="token punctuation">.</span>stroke
      <span class="token punctuation">.</span><span class="token punctuation">.</span>isAntiAlias <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>strokeWidth <span class="token operator">=</span> strokeWidth<span class="token punctuation">;</span>

    <span class="token comment">// \u5148\u753B\u80CC\u666F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>backgroundColor <span class="token operator">!=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>transparent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      paint<span class="token punctuation">.</span>color <span class="token operator">=</span> backgroundColor<span class="token punctuation">;</span>
      canvas<span class="token punctuation">.</span><span class="token function">drawArc</span><span class="token punctuation">(</span>
          rect<span class="token punctuation">,</span>
          _start<span class="token punctuation">,</span>
          total<span class="token punctuation">,</span>
          <span class="token boolean">false</span><span class="token punctuation">,</span>
          paint
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u518D\u753B\u524D\u666F\uFF0C\u5E94\u7528\u6E10\u53D8</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      paint<span class="token punctuation">.</span>shader <span class="token operator">=</span> <span class="token class-name">SweepGradient</span><span class="token punctuation">(</span>
        startAngle<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
        endAngle<span class="token punctuation">:</span> _value<span class="token punctuation">,</span>
        colors<span class="token punctuation">:</span> colors<span class="token punctuation">,</span>
        stops<span class="token punctuation">:</span> stops<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createShader</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span>

      canvas<span class="token punctuation">.</span><span class="token function">drawArc</span><span class="token punctuation">(</span>
          rect<span class="token punctuation">,</span>
          _start<span class="token punctuation">,</span>
          _value<span class="token punctuation">,</span>
          <span class="token boolean">false</span><span class="token punctuation">,</span>
          paint
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u7B80\u5355\u8FD4\u56DEtrue\uFF0C\u5B9E\u8DF5\u4E2D\u5E94\u8BE5\u6839\u636E\u753B\u7B14\u5C5E\u6027\u662F\u5426\u53D8\u5316\u6765\u786E\u5B9A\u8FD4\u56DEtrue\u8FD8\u662Ffalse</span>
  <span class="token metadata function">@override</span>
  bool <span class="token function">shouldRepaint</span><span class="token punctuation">(</span><span class="token class-name">CustomPainter</span> oldDelegate<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6211\u4EEC\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u4E3A\u4E86\u5C3D\u53EF\u80FD\u591A\u7684\u5C55\u793A<code>GradientCircularProgressIndicator</code>\u7684\u4E0D\u540C\u5916\u89C2\u548C\u7528\u9014\uFF0C\u8FD9\u4E2A\u793A\u4F8B\u4EE3\u7801\u4F1A\u6BD4\u8F83\u957F\uFF0C\u5E76\u4E14\u6DFB\u52A0\u4E86\u52A8\u753B\uFF0C\u5EFA\u8BAE\u8BFB\u8005\u5C06\u6B64\u793A\u4F8B\u8FD0\u884C\u8D77\u6765\u89C2\u770B\u5B9E\u9645\u6548\u679C\uFF0C\u6211\u4EEC\u5148\u770B\u770B\u5176\u4E2D\u4E00\u5E27\u52A8\u753B\u7684\u622A\u56FE\uFF08\u56FE10-5\uFF09\uFF1A</p><p><img src="`+p+`" alt="\u56FE10-5"></p><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:math&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;../widgets/index.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">GradientCircularProgressRoute</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">GradientCircularProgressRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">GradientCircularProgressRouteState</span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token class-name">GradientCircularProgressRouteState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GradientCircularProgressRouteState</span>
    <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GradientCircularProgressRoute</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">with</span> <span class="token class-name">TickerProviderStateMixin</span> <span class="token punctuation">{</span>
  late <span class="token class-name">AnimationController</span> _animationController<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _animationController <span class="token operator">=</span> <span class="token class-name">AnimationController</span><span class="token punctuation">(</span>
      vsync<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      duration<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    bool isForward <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    _animationController<span class="token punctuation">.</span><span class="token function">addStatusListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">==</span> <span class="token class-name">AnimationStatus</span><span class="token punctuation">.</span>forward<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isForward <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">==</span> <span class="token class-name">AnimationStatus</span><span class="token punctuation">.</span>completed <span class="token operator">||</span>
          status <span class="token operator">==</span> <span class="token class-name">AnimationStatus</span><span class="token punctuation">.</span>dismissed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isForward<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          _animationController<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          _animationController<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">==</span> <span class="token class-name">AnimationStatus</span><span class="token punctuation">.</span>reverse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isForward <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _animationController<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _animationController<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">SingleChildScrollView</span><span class="token punctuation">(</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
          children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
            <span class="token class-name">AnimatedBuilder</span><span class="token punctuation">(</span>
              animation<span class="token punctuation">:</span> _animationController<span class="token punctuation">,</span>
              builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                  padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">symmetric</span><span class="token punctuation">(</span>vertical<span class="token punctuation">:</span> <span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
                    children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
                      <span class="token class-name">Wrap</span><span class="token punctuation">(</span>
                        spacing<span class="token punctuation">:</span> <span class="token number">10.0</span><span class="token punctuation">,</span>
                        runSpacing<span class="token punctuation">:</span> <span class="token number">16.0</span><span class="token punctuation">,</span>
                        children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
                          <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                            <span class="token comment">// No gradient</span>
                            colors<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">]</span><span class="token punctuation">,</span>
                            radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                            stokeWidth<span class="token punctuation">:</span> <span class="token number">3.0</span><span class="token punctuation">,</span>
                            value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                            colors<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>orange<span class="token punctuation">]</span><span class="token punctuation">,</span>
                            radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                            stokeWidth<span class="token punctuation">:</span> <span class="token number">3.0</span><span class="token punctuation">,</span>
                            value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                            colors<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>orange<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">]</span><span class="token punctuation">,</span>
                            radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                            stokeWidth<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
                            value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                            colors<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>cyan<span class="token punctuation">]</span><span class="token punctuation">,</span>
                            radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                            stokeWidth<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
                            strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            value<span class="token punctuation">:</span> <span class="token class-name">CurvedAnimation</span><span class="token punctuation">(</span>
                              parent<span class="token punctuation">:</span> _animationController<span class="token punctuation">,</span>
                              curve<span class="token punctuation">:</span> <span class="token class-name">Curves</span><span class="token punctuation">.</span>decelerate<span class="token punctuation">,</span>
                            <span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token class-name">TurnBox</span><span class="token punctuation">(</span>
                            turns<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">8</span><span class="token punctuation">,</span>
                            child<span class="token punctuation">:</span> <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                              colors<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>orange<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">]</span><span class="token punctuation">,</span>
                              radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                              stokeWidth<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
                              strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                              backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>shade50<span class="token punctuation">,</span>
                              totalAngle<span class="token punctuation">:</span> <span class="token number">1.5</span> <span class="token operator">*</span> pi<span class="token punctuation">,</span>
                              value<span class="token punctuation">:</span> <span class="token class-name">CurvedAnimation</span><span class="token punctuation">(</span>
                                parent<span class="token punctuation">:</span> _animationController<span class="token punctuation">,</span>
                                curve<span class="token punctuation">:</span> <span class="token class-name">Curves</span><span class="token punctuation">.</span>ease<span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token class-name">RotatedBox</span><span class="token punctuation">(</span>
                            quarterTurns<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            child<span class="token punctuation">:</span> <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                              colors<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                                <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span>shade700<span class="token punctuation">,</span>
                                <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span>shade200
                              <span class="token punctuation">]</span><span class="token punctuation">,</span>
                              radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                              stokeWidth<span class="token punctuation">:</span> <span class="token number">3.0</span><span class="token punctuation">,</span>
                              strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                              backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>transparent<span class="token punctuation">,</span>
                              value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                            colors<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                              <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
                              <span class="token class-name">Colors</span><span class="token punctuation">.</span>amber<span class="token punctuation">,</span>
                              <span class="token class-name">Colors</span><span class="token punctuation">.</span>cyan<span class="token punctuation">,</span>
                              <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">.</span>shade200<span class="token punctuation">,</span>
                              <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
                              <span class="token class-name">Colors</span><span class="token punctuation">.</span>red
                            <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            radius<span class="token punctuation">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span>
                            stokeWidth<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
                            strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                        colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span>shade700<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span>shade200<span class="token punctuation">]</span><span class="token punctuation">,</span>
                        radius<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
                        stokeWidth<span class="token punctuation">:</span> <span class="token number">20.0</span><span class="token punctuation">,</span>
                        value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>

                      <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                        padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">symmetric</span><span class="token punctuation">(</span>vertical<span class="token punctuation">:</span> <span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        child<span class="token punctuation">:</span> <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                          colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span>shade700<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span>shade300<span class="token punctuation">]</span><span class="token punctuation">,</span>
                          radius<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
                          stokeWidth<span class="token punctuation">:</span> <span class="token number">20.0</span><span class="token punctuation">,</span>
                          value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                          strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token comment">//\u526A\u88C1\u534A\u5706</span>
                      <span class="token class-name">ClipRect</span><span class="token punctuation">(</span>
                        child<span class="token punctuation">:</span> <span class="token class-name">Align</span><span class="token punctuation">(</span>
                          alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>topCenter<span class="token punctuation">,</span>
                          heightFactor<span class="token punctuation">:</span> <span class="token number">.5</span><span class="token punctuation">,</span>
                          child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                            padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>bottom<span class="token punctuation">:</span> <span class="token number">8.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            child<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                              <span class="token comment">//width: 100.0,</span>
                              child<span class="token punctuation">:</span> <span class="token class-name">TurnBox</span><span class="token punctuation">(</span>
                                turns<span class="token punctuation">:</span> <span class="token number">.75</span><span class="token punctuation">,</span>
                                child<span class="token punctuation">:</span> <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                                  colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>cyan<span class="token punctuation">.</span>shade500<span class="token punctuation">]</span><span class="token punctuation">,</span>
                                  radius<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
                                  stokeWidth<span class="token punctuation">:</span> <span class="token number">8.0</span><span class="token punctuation">,</span>
                                  value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                                  totalAngle<span class="token punctuation">:</span> pi<span class="token punctuation">,</span>
                                  strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                        height<span class="token punctuation">:</span> <span class="token number">104.0</span><span class="token punctuation">,</span>
                        width<span class="token punctuation">:</span> <span class="token number">200.0</span><span class="token punctuation">,</span>
                        child<span class="token punctuation">:</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>
                          alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
                          children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
                            <span class="token class-name">Positioned</span><span class="token punctuation">(</span>
                              height<span class="token punctuation">:</span> <span class="token number">200.0</span><span class="token punctuation">,</span>
                              top<span class="token punctuation">:</span> <span class="token number">.0</span><span class="token punctuation">,</span>
                              child<span class="token punctuation">:</span> <span class="token class-name">TurnBox</span><span class="token punctuation">(</span>
                                turns<span class="token punctuation">:</span> <span class="token number">.75</span><span class="token punctuation">,</span>
                                child<span class="token punctuation">:</span> <span class="token class-name">GradientCircularProgressIndicator</span><span class="token punctuation">(</span>
                                  colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>cyan<span class="token punctuation">.</span>shade500<span class="token punctuation">]</span><span class="token punctuation">,</span>
                                  radius<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
                                  stokeWidth<span class="token punctuation">:</span> <span class="token number">8.0</span><span class="token punctuation">,</span>
                                  value<span class="token punctuation">:</span> _animationController<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
                                  totalAngle<span class="token punctuation">:</span> pi<span class="token punctuation">,</span>
                                  strokeCapRound<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                              padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                              child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
                                <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token punctuation">(</span>_animationController<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">%&quot;</span></span><span class="token punctuation">,</span>
                                style<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
                                  fontSize<span class="token punctuation">:</span> <span class="token number">25.0</span><span class="token punctuation">,</span>
                                  color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blueGrey<span class="token punctuation">,</span>
                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token punctuation">)</span>
                          <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u600E\u4E48\u6837\uFF0C\u5F88\u70AB\u9177\u5427\uFF01<code>GradientCircularProgressIndicator</code>\u5DF2\u7ECF\u88AB\u6DFB\u52A0\u8FDB\u4E86\u7B14\u8005\u7EF4\u62A4\u7684flukit\u7EC4\u4EF6\u5E93\u4E2D\u4E86\uFF0C\u8BFB\u8005\u5982\u679C\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F9D\u8D56flukit\u5305\u3002</p>`,10),c=[o];function l(i,u){return s(),a("div",null,c)}var d=n(e,[["render",l],["__file","gradient_circular_progress_demo.html.vue"]]);export{d as default};
