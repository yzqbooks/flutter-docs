"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[795],{13968:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-d3066cea","path":"/chapter13/locallization_implement.html","title":"13.2 实现Localizations","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"13.2.1 实现Localizations类","slug":"_13-2-1-实现localizations类","link":"#_13-2-1-实现localizations类","children":[]},{"level":2,"title":"13.2.2 实现Delegate类","slug":"_13-2-2-实现delegate类","link":"#_13-2-2-实现delegate类","children":[]},{"level":2,"title":"13.2.3 添加多语言支持","slug":"_13-2-3-添加多语言支持","link":"#_13-2-3-添加多语言支持","children":[]},{"level":2,"title":"13.2.4 总结","slug":"_13-2-4-总结","link":"#_13-2-4-总结","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.06,"words":919},"filePathRelative":"chapter13/locallization_implement.md","localizedDate":"2022年6月6日","excerpt":""}')},94665:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});var e=s(6808);const t=[(0,e.uE)('<h1 id="_13-2-实现localizations" tabindex="-1"><a class="header-anchor" href="#_13-2-实现localizations" aria-hidden="true">#</a> 13.2 实现Localizations</h1><p>前面讲了Material组件库如何支持国际化，本节我们将介绍一下我们自己的UI中如何支持多语言。根据上节所述，我们需要实现两个类：一个<code>Delegate</code>类一个<code>Localizations</code>类，下面我们通过一个实例说明。</p><h2 id="_13-2-1-实现localizations类" tabindex="-1"><a class="header-anchor" href="#_13-2-1-实现localizations类" aria-hidden="true">#</a> 13.2.1 实现Localizations类</h2><p>我们已经知道<code>Localizations</code>类中主要实现提供了本地化值，如文本：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//Locale资源类</span>\n<span class="token keyword">class</span> <span class="token class-name">DemoLocalizations</span> <span class="token punctuation">{</span>\n  <span class="token class-name">DemoLocalizations</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isZh<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//是否为中文</span>\n  bool isZh <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token comment">//为了使用方便，我们定义一个静态方法</span>\n  <span class="token keyword">static</span> <span class="token class-name">DemoLocalizations</span> <span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Localizations</span><span class="token punctuation">.</span>of<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token class-name">DemoLocalizations</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//Locale相关值，title为应用标题</span>\n  <span class="token class-name">String</span> <span class="token keyword">get</span> title <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> isZh <span class="token operator">?</span> <span class="token string-literal"><span class="token string">&quot;Flutter应用&quot;</span></span> <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Flutter APP&quot;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//... 其它的值  </span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DemoLocalizations</code>中会根据当前的语言来返回不同的文本，如<code>title</code>，我们可以将所有需要支持多语言的文本都在此类中定义。<code>DemoLocalizations</code>的实例将会在Delegate类的<code>load</code>方法中创建。</p><h2 id="_13-2-2-实现delegate类" tabindex="-1"><a class="header-anchor" href="#_13-2-2-实现delegate类" aria-hidden="true">#</a> 13.2.2 实现Delegate类</h2><p>Delegate类的职责是在Locale改变时加载新的Locale资源，所以它有一个<code>load</code>方法，Delegate类需要继承自<code>LocalizationsDelegate</code>类，实现相应的接口，示例如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">//Locale代理类</span>\n<span class="token keyword">class</span> <span class="token class-name">DemoLocalizationsDelegate</span> <span class="token keyword">extends</span> <span class="token class-name">LocalizationsDelegate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token class-name">DemoLocalizationsDelegate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//是否支持某个Local</span>\n  <span class="token metadata function">@override</span>\n  bool <span class="token function">isSupported</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;en&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;zh&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Flutter会调用此类加载相应的Locale资源类</span>\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">locale</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">SynchronousFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>\n        <span class="token class-name">DemoLocalizations</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>languageCode <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;zh&quot;</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  bool <span class="token function">shouldReload</span><span class="token punctuation">(</span><span class="token class-name">DemoLocalizationsDelegate</span> old<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>shouldReload</code>的返回值决定当Localizations组件重新build时，是否调用<code>load</code>方法重新加载Locale资源。一般情况下，Locale资源只应该在Locale切换时加载一次，不需要每次在<code>Localizations</code>重新build时都加载，所以返回<code>false</code>即可。可能有些人会担心返回<code>false</code>的话在APP启动后用户再改变系统语言时<code>load</code>方法将不会被调用，所以Locale资源将不会被加载。事实上，每当Locale改变时Flutter都会再调用<code>load</code>方法加载新的Locale，无论<code>shouldReload</code>返回<code>true</code>还是<code>false</code>。</p><h2 id="_13-2-3-添加多语言支持" tabindex="-1"><a class="header-anchor" href="#_13-2-3-添加多语言支持" aria-hidden="true">#</a> 13.2.3 添加多语言支持</h2><p>和上一节中介绍的相同，我们现在需要先注册<code>DemoLocalizationsDelegate</code>类，然后再通过<code>DemoLocalizations.of(context)</code>来动态获取当前Locale文本。</p><p>只需要在MaterialApp或WidgetsApp的<code>localizationsDelegates</code>列表中添加我们的Delegate实例即可完成注册：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>localizationsDelegates<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n <span class="token comment">// 本地化的代理类</span>\n <span class="token class-name">GlobalMaterialLocalizations</span><span class="token punctuation">.</span>delegate<span class="token punctuation">,</span>\n <span class="token class-name">GlobalWidgetsLocalizations</span><span class="token punctuation">.</span>delegate<span class="token punctuation">,</span>\n <span class="token comment">// 注册我们的Delegate</span>\n <span class="token class-name">DemoLocalizationsDelegate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们可以在Widget中使用Locale值：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>\n  appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>\n    <span class="token comment">//使用Locale title  </span>\n    title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token class-name">DemoLocalizations</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">//省略无关代码</span>\n ） \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，当在美国英语和中文简体之间切换系统语言时，APP的标题将会分别为“Flutter APP”和“Flutter应用”。</p><h2 id="_13-2-4-总结" tabindex="-1"><a class="header-anchor" href="#_13-2-4-总结" aria-hidden="true">#</a> 13.2.4 总结</h2><p>本节我们通过一个简单的示例说明了Flutter应用国际化的基本过程及原理。但是上面的实例还有一个严重的不足就是我们需要在DemoLocalizations类中获取<code>title</code>时手动的判断当前语言Locale，然后返回合适的文本。试想一下，当我们要支持的语言不是两种而是8种甚至20几种时，如果为每个文本属性都要分别去判断到底是哪种Locale从而获取相应语言的文本将会是一件非常复杂的事。还有，通常情况下翻译人员并不是开发人员，能不能像i18n或l10n标准那样可以将翻译单独保存为一个arb文件交由翻译人员去翻译，翻译好之后开发人员再通过工具将arb文件转为代码。答案是肯定的！我们将在下一节介绍如何通过Dart intl包来实现这些。</p>',19)],o={},l=(0,s(18580).Z)(o,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},18580:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);