"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[6540],{81710:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-2711d3ba","path":"/chapter13/intl.html","title":"13.3 使用Intl包","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"13.3.1 添加依赖","slug":"_13-3-1-添加依赖","link":"#_13-3-1-添加依赖","children":[]},{"level":2,"title":"13.3.2 第一步：创建必要目录","slug":"_13-3-2-第一步-创建必要目录","link":"#_13-3-2-第一步-创建必要目录","children":[]},{"level":2,"title":"13.3.3 第二步：实现Localizations和Delegate类","slug":"_13-3-3-第二步-实现localizations和delegate类","link":"#_13-3-3-第二步-实现localizations和delegate类","children":[]},{"level":2,"title":"13.3.4 第三步：添加需要国际化的属性","slug":"_13-3-4-第三步-添加需要国际化的属性","link":"#_13-3-4-第三步-添加需要国际化的属性","children":[]},{"level":2,"title":"13.3.5 第四步：生成arb文件","slug":"_13-3-5-第四步-生成arb文件","link":"#_13-3-5-第四步-生成arb文件","children":[]},{"level":2,"title":"13.3.6 第五步：生成dart代码","slug":"_13-3-6-第五步-生成dart代码","link":"#_13-3-6-第五步-生成dart代码","children":[]},{"level":2,"title":"13.3.7 总结","slug":"_13-3-7-总结","link":"#_13-3-7-总结","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":6.09,"words":1826},"filePathRelative":"chapter13/intl.md","localizedDate":"2022年6月6日","excerpt":""}')},63887:(n,s,a)=>{a.r(s),a.d(s,{default:()=>_});var t=a(6808);const e=(0,t._)("h1",{id:"_13-3-使用intl包",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_13-3-使用intl包","aria-hidden":"true"},"#"),(0,t.Uk)(" 13.3 使用Intl包")],-1),p=(0,t._)("h2",{id:"_13-3-1-添加依赖",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_13-3-1-添加依赖","aria-hidden":"true"},"#"),(0,t.Uk)(" 13.3.1 添加依赖")],-1),o={href:"https://pub.dartlang.org/packages/intl",target:"_blank",rel:"noopener noreferrer"},l={href:"https://pub.dartlang.org/packages/intl",target:"_blank",rel:"noopener noreferrer"},i=(0,t.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n  <span class="token comment">#...省略无关项</span>\n  <span class="token key atrule">intl</span><span class="token punctuation">:</span> ^0.17.0 \n<span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>\n   <span class="token comment">#...省略无关项</span>\n  <span class="token key atrule">intl_generator</span><span class="token punctuation">:</span>  0.2.1 \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>intl_generator 包主要包含了一些工具，它在开发阶段主要主要的作用是从代码中提取要国际化的字符串到单独的arb文件和根据arb文件生成对应语言的dart代码，而intl包主要是引用和加载intl_generator生成后的dart代码。下面我们将一步步来说明如何使用：</p><h2 id="_13-3-2-第一步-创建必要目录" tabindex="-1"><a class="header-anchor" href="#_13-3-2-第一步-创建必要目录" aria-hidden="true">#</a> 13.3.2 第一步：创建必要目录</h2><p>首先，在项目根目录下创建一个l10n-arb目录，该目录保存我们接下来通过intl_generator命令生成的arb文件。一个简单的arb文件内容如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;@@last_modified&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-12-10T15:46:20.897228&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@@locale&quot;</span><span class="token operator">:</span><span class="token string">&quot;zh_CH&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flutter应用&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Title for the Demo application&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;placeholders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们根据&quot;@@locale&quot;字段可以看出这个arb对应的是中文简体的翻译，里面的<code>title</code>字段对应的正是我们应用标题的中文简体翻译。<code>@title</code>字段是对<code>title</code>的一些描述信息。</p><p>接下来，我们在lib目录下创建一个l10n的目录，该目录用于保存从arb文件生成的dart代码文件。</p><h2 id="_13-3-3-第二步-实现localizations和delegate类" tabindex="-1"><a class="header-anchor" href="#_13-3-3-第二步-实现localizations和delegate类" aria-hidden="true">#</a> 13.3.3 第二步：实现Localizations和Delegate类</h2><p>和上一节中的步骤类似，我们仍然要实现<code>Localizations</code>和Delegate类，不同的是，现在我们在实现时要使用intl包的一些方法（有些是动态生成的）。</p><p>下面我们在<code>lib/l10n</code>目录下新建一个“localization_intl.dart”的文件，文件内容如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:intl/intl.dart&#39;</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;messages_all.dart&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">//1</span>\n\n<span class="token keyword">class</span> <span class="token class-name">DemoLocalizations</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> <span class="token class-name">String</span> name <span class="token operator">=</span> locale<span class="token punctuation">.</span>countryCode<span class="token punctuation">.</span>isEmpty <span class="token operator">?</span> locale<span class="token punctuation">.</span>languageCode <span class="token punctuation">:</span> locale<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> <span class="token class-name">String</span> localeName <span class="token operator">=</span> <span class="token class-name">Intl</span><span class="token punctuation">.</span><span class="token function">canonicalizedLocale</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//2</span>\n    <span class="token keyword">return</span> <span class="token function">initializeMessages</span><span class="token punctuation">(</span>localeName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Intl</span><span class="token punctuation">.</span>defaultLocale <span class="token operator">=</span> localeName<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token class-name">DemoLocalizations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token class-name">DemoLocalizations</span> <span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Localizations</span><span class="token punctuation">.</span>of<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token class-name">DemoLocalizations</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token class-name">String</span> <span class="token keyword">get</span> title <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Intl</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span>\n      <span class="token string-literal"><span class="token string">&#39;Flutter APP&#39;</span></span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;title&#39;</span></span><span class="token punctuation">,</span>\n      desc<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Title for the Demo application&#39;</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//Locale代理类</span>\n<span class="token keyword">class</span> <span class="token class-name">DemoLocalizationsDelegate</span> <span class="token keyword">extends</span> <span class="token class-name">LocalizationsDelegate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">DemoLocalizationsDelegate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//是否支持某个Local</span>\n  <span class="token metadata function">@override</span>\n  bool <span class="token function">isSupported</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;en&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;zh&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Flutter会调用此类加载相应的Locale资源类</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//3</span>\n    <span class="token keyword">return</span>  <span class="token class-name">DemoLocalizations</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 当Localizations Widget重新build时，是否调用load重新加载Locale资源.</span>\n  <span class="token metadata function">@override</span>\n  bool <span class="token function">shouldReload</span><span class="token punctuation">(</span><span class="token class-name">DemoLocalizationsDelegate</span> old<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>',12),c={href:"https://pub.dartlang.org/packages/intl_generator",target:"_blank",rel:"noopener noreferrer"},r=(0,t._)("code",null,"initializeMessages()",-1),u=(0,t._)("li",null,[(0,t.Uk)("注释3处和上一节示例代码不同，这里我们直接调用"),(0,t._)("code",null,"DemoLocalizations.load()"),(0,t.Uk)("即可。")],-1),d=(0,t.uE)('<h2 id="_13-3-4-第三步-添加需要国际化的属性" tabindex="-1"><a class="header-anchor" href="#_13-3-4-第三步-添加需要国际化的属性" aria-hidden="true">#</a> 13.3.4 第三步：添加需要国际化的属性</h2><p>现在我们可以在DemoLocalizations类中添加需要国际化的属性或方法，如上面示例代码中的<code>title</code>属性，这时我们就要用到Intl库提供的一些方法，这些方法可以帮我们轻松实现不同语言的一些语法特性，如复数语境，举个例子，比如我们有一个电子邮件列表页，我们需要在顶部显示未读邮件的数量，在未读数量不同事，我们展示的文本可能会不同：</p><table><thead><tr><th>未读邮件数</th><th>提示语</th></tr></thead><tbody><tr><td>0</td><td>There are no emails left</td></tr><tr><td>1</td><td>There is 1 email left</td></tr><tr><td>n(n&gt;1)</td><td>There are n emails left</td></tr></tbody></table><p>我们可以通过<code>Intl.plural(...)</code>来实现：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token function">remainingEmailsMessage</span><span class="token punctuation">(</span>int howMany<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Intl</span><span class="token punctuation">.</span><span class="token function">plural</span><span class="token punctuation">(</span>howMany<span class="token punctuation">,</span>\n    zero<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;There are no emails left&#39;</span></span><span class="token punctuation">,</span>\n    one<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;There is </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">howMany</span></span><span class="token string"> email left&#39;</span></span><span class="token punctuation">,</span>\n    other<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;There are </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">howMany</span></span><span class="token string"> emails left&#39;</span></span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;remainingEmailsMessage&quot;</span></span><span class="token punctuation">,</span>\n    args<span class="token punctuation">:</span> <span class="token punctuation">[</span>howMany<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    desc<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;How many emails remain after archiving.&quot;</span></span><span class="token punctuation">,</span>\n    examples<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&#39;howMany&#39;</span></span><span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;userName&#39;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Fred&#39;</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到通过<code>Intl.plural</code>方法可以在<code>howMany</code>值不同时输出不同的提示信息。</p>',6),k={href:"https://pub.dartlang.org/packages/intl",target:"_blank",rel:"noopener noreferrer"},m=(0,t._)("h2",{id:"_13-3-5-第四步-生成arb文件",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_13-3-5-第四步-生成arb文件","aria-hidden":"true"},"#"),(0,t.Uk)(" 13.3.5 第四步：生成arb文件")],-1),v={href:"https://pub.dartlang.org/packages/intl_generator",target:"_blank",rel:"noopener noreferrer"},b=(0,t.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter pub pub run intl_generator:extract_to_arb --output-dir<span class="token operator">=</span>l10n-arb <span class="token punctuation">\\</span> lib/l10n/localization_intl.dart\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行此命令后，会将我们之前通过Intl API标识的属性和字符串提取到“l10n-arb/intl_messages.arb”文件中，我们看看其内容：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;@@last_modified&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-12-10T17:37:28.505088&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flutter APP&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Title for the Demo application&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;placeholders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;remainingEmailsMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{howMany,plural, =0{There are no emails left}=1{There is {howMany} email left}other{There are {howMany} emails left}}&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@remainingEmailsMessage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;How many emails remain after archiving.&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;placeholders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;howMany&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;example&quot;</span><span class="token operator">:</span> <span class="token number">42</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是默认的Locale资源文件，如果我们现在要支持中文简体，只需要在该文件同级目录创建一个&quot;intl_zh_CN.arb&quot;文件，然后将&quot;intl_messages.arb&quot;的内容拷贝到&quot;intl_zh_CN.arb&quot;文件，接下来将英文翻译为中文即可，翻译后的&quot;intl_zh_CN.arb&quot;文件内容如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;@@last_modified&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-12-10T15:46:20.897228&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@@locale&quot;</span><span class="token operator">:</span><span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flutter应用&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Title for the Demo application&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;placeholders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;remainingEmailsMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{howMany,plural, =0{没有未读邮件}=1{有{howMany}封未读邮件}other{有{howMany}封未读邮件}}&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;@remainingEmailsMessage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;How many emails remain after archiving.&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;placeholders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;howMany&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;example&quot;</span><span class="token operator">:</span> <span class="token number">42</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们必须要翻译<code>title</code>和<code>remainingEmailsMessage</code>字段，<code>description</code>是该字段的说明，通常给翻译人员看，代码中不会用到。</p><p>有两点需要说明：</p><ol><li>如果某个特定的arb中缺失某个属性，那么应用将会加载默认的arb文件(intl_messages.arb)中的相应属性，这是Intl的托底策略。</li><li>每次运行提取命令时，intl_messages.arb都会根据代码重新生成，但其他arb文件不会，所以当要添加新的字段或方法时，其他arb文件是增量的，不用担心会覆盖。</li><li>arb文件是标准的，其格式规范可以自行了解。通常会将arb文件交给翻译人员，当他们完成翻译后，我们再通过下面的步骤根据arb文件生成最终的dart代码。</li></ol><h2 id="_13-3-6-第五步-生成dart代码" tabindex="-1"><a class="header-anchor" href="#_13-3-6-第五步-生成dart代码" aria-hidden="true">#</a> 13.3.6 第五步：生成dart代码</h2><p>最后一步就是根据arb生成dart文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter pub pub run intl_generator:generate_from_arb --output-dir<span class="token operator">=</span>lib/l10n --no-use-deferred-loading lib/l10n/localization_intl.dart l10n-arb/intl_*.arb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句命令在首次运行时会在&quot;lib/l10n&quot;目录下生成多个文件，对应多种Locale，这些代码便是最终要使用的dart代码。</p><h2 id="_13-3-7-总结" tabindex="-1"><a class="header-anchor" href="#_13-3-7-总结" aria-hidden="true">#</a> 13.3.7 总结</h2>',13),g={href:"https://pub.dartlang.org/packages/intl",target:"_blank",rel:"noopener noreferrer"},h=(0,t.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter pub run intl_generator:extract_to_arb --output-dir<span class="token operator">=</span>l10n-arb lib/l10n/localization_intl.dart\nflutter pub run intl_generator:generate_from_arb --output-dir<span class="token operator">=</span>lib/l10n --no-use-deferred-loading lib/l10n/localization_intl.dart l10n-arb/intl_*.arb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后授予执行权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x intl.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行intl.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./intl.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',5),q={},_=(0,a(18580).Z)(q,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,p,(0,t._)("p",null,[(0,t.Uk)("使用"),(0,t._)("a",o,[(0,t.Uk)("Intl"),(0,t.Wm)(a)]),(0,t.Uk)("包我们不仅可以非常轻松的实现国际化，而且也可以将字符串文本分离成单独的文件，方便开发人员和翻译人员分工协作。为了使用"),(0,t._)("a",l,[(0,t.Uk)("Intl"),(0,t.Wm)(a)]),(0,t.Uk)("包我们需要添加两个依赖：")]),i,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)('注释1的"messages_all.dart"文件是通过'),(0,t._)("a",c,[(0,t.Uk)("intl_generator"),(0,t.Wm)(a)]),(0,t.Uk)("工具从arb文件生成的代码，所以在第一次运行生成命令之前，此文件不存在。注释2处的"),r,(0,t.Uk)('方法和"messages_all.dart"文件一样，是同时生成的。')]),u]),d,(0,t._)("p",null,[(0,t._)("a",k,[(0,t.Uk)("Intl"),(0,t.Wm)(a)]),(0,t.Uk)("包还有一些其他的方法，读者可以自行查看其文档，本书不在赘述。")]),m,(0,t._)("p",null,[(0,t.Uk)("现在我们可以通"),(0,t._)("a",v,[(0,t.Uk)("intl_generator"),(0,t.Wm)(a)]),(0,t.Uk)("包的工具来提取代码中的字符串到一个arb文件，运行如下命名：")]),b,(0,t._)("p",null,[(0,t.Uk)("至此，我们将使用"),(0,t._)("a",g,[(0,t.Uk)("Intl"),(0,t.Wm)(a)]),(0,t.Uk)("包对APP进行国际化的流程介绍完了，我们可以发现，其中第一步和第二步只在第一次需要，而我们开发时的主要的工作都是在第三步。由于最后两步在第三步完成后每次也都需要，所以我们可以将最后两步放在一个shell脚本里，当我们完成第三步或完成arb文件翻译后只需要分别执行该脚本即可。我们在根目录下创建一个intl.sh的脚本，内容为：")]),h])}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);