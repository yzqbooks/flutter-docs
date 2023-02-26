"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[8382],{35565:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-b07a0626","path":"/chapter13/multi_languages_support.html","title":"13.1 让App支持多语言","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"13.1.1 简介","slug":"_13-1-1-简介","link":"#_13-1-1-简介","children":[]},{"level":2,"title":"13.1.2 支持国际化","slug":"_13-1-2-支持国际化","link":"#_13-1-2-支持国际化","children":[]},{"level":2,"title":"13.1.3 获取当前区域Locale","slug":"_13-1-3-获取当前区域locale","link":"#_13-1-3-获取当前区域locale","children":[]},{"level":2,"title":"13.1.4 监听系统语言切换","slug":"_13-1-4-监听系统语言切换","link":"#_13-1-4-监听系统语言切换","children":[]},{"level":2,"title":"13.1.5 Localization 组件","slug":"_13-1-5-localization-组件","link":"#_13-1-5-localization-组件","children":[]},{"level":2,"title":"13.1.6 使用打包好的LocalizationsDelegates","slug":"_13-1-6-使用打包好的localizationsdelegates","link":"#_13-1-6-使用打包好的localizationsdelegates","children":[]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":7.02,"words":2107},"filePathRelative":"chapter13/multi_languages_support.md","localizedDate":"2022年6月6日","excerpt":""}')},75:(a,n,s)=>{s.r(n),s.d(n,{default:()=>I});var e=s(6808);const l=s.p+"assets/img/13-1.7c0202cb.jpeg",t=(0,e.uE)('<h1 id="_13-1-让app支持多语言" tabindex="-1"><a class="header-anchor" href="#_13-1-让app支持多语言" aria-hidden="true">#</a> 13.1 让App支持多语言</h1><h2 id="_13-1-1-简介" tabindex="-1"><a class="header-anchor" href="#_13-1-1-简介" aria-hidden="true">#</a> 13.1.1 简介</h2><p>如果我们的应用要支持多种语言，那么我们需要“国际化”它。这意味着我们在开发时需要为应用程序支持的每种语言环境设置“本地化”的一些值，如文本和布局。Flutter SDK已经提供了一些组件和类来帮助我们实现国际化，下面我们来介绍一下Flutter中实现国际化的步骤。</p><p>接下来我们以<code>MaterialApp</code>类为入口的应用来说明如何支持国际化。</p><blockquote><p>大多数应用程序都是通过<code>MaterialApp</code>为入口，但根据低级别的<code>WidgetsApp</code>类为入口编写的应用程序也可以使用相同的类和逻辑进行国际化。<code>MaterialApp</code>实际上也是<code>WidgetsApp</code>的一个包装。</p></blockquote><p>注意，”本地化的值和资源“是指我们针对不同语言准备的不同资源，这些资源一般是指文案（字符串），当然也会有一些其他的资源会根据不同语言地区而不同，比如我们需要显示一个APP上架地的国旗图片，那么不同Locale区域我们就需要提供不同的的国旗图片。</p><h2 id="_13-1-2-支持国际化" tabindex="-1"><a class="header-anchor" href="#_13-1-2-支持国际化" aria-hidden="true">#</a> 13.1.2 支持国际化</h2><p>默认情况下，Flutter SDK中的组件仅提供美国英语本地化资源（主要是文本）。要添加对其他语言的支持，应用程序须添加一个名为“flutter_localizations”的包依赖，然后还需要在<code>MaterialApp</code>中进行一些配置。 要使用<code>flutter_localizations</code>包，首先需要添加依赖到<code>pubspec.yaml</code>文件中：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>\n    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter\n  <span class="token key atrule">flutter_localizations</span><span class="token punctuation">:</span>\n    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，下载<code>flutter_localizations</code>库，然后指定<code>MaterialApp</code>的<code>localizationsDelegates</code>和<code>supportedLocales</code>：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter_localizations/flutter_localizations.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>\n localizationsDelegates<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n   <span class="token comment">// 本地化的代理类</span>\n   <span class="token class-name">GlobalMaterialLocalizations</span><span class="token punctuation">.</span>delegate<span class="token punctuation">,</span>\n   <span class="token class-name">GlobalWidgetsLocalizations</span><span class="token punctuation">.</span>delegate<span class="token punctuation">,</span>\n <span class="token punctuation">]</span><span class="token punctuation">,</span>\n supportedLocales<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">const</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;en&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;US&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 美国英语</span>\n    <span class="token keyword">const</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;zh&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;CN&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 中文简体</span>\n    <span class="token comment">//其它Locales</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>与<code>MaterialApp</code>类为入口的应用不同, 对基于<code>WidgetsApp</code>类为入口的应用程序进行国际化时,不需要<code>GlobalMaterialLocalizations.delegate</code>。</p></blockquote><p><code>localizationsDelegates</code>列表中的元素是生成本地化值集合的工厂。<code>GlobalMaterialLocalizations.delegate</code> 为Material 组件库提供的本地化的字符串和其他值，它可以使Material 组件支持多语言。 <code>GlobalWidgetsLocalizations.delegate</code>定义组件默认的文本方向，从左到右或从右到左，这是因为有些语言的阅读习惯并不是从左到右，比如如阿拉伯语就是从右向左的。</p><p><code>supportedLocales</code>也接收一个Locale数组，表示我们的应用支持的语言列表，在本例中我们的应用只支持美国英语和中文简体两种语言。</p><h2 id="_13-1-3-获取当前区域locale" tabindex="-1"><a class="header-anchor" href="#_13-1-3-获取当前区域locale" aria-hidden="true">#</a> 13.1.3 获取当前区域Locale</h2>',15),o={href:"https://docs.flutter.io/flutter/dart-ui/Locale-class.html",target:"_blank",rel:"noopener noreferrer"},c=(0,e._)("code",null,"Locale",-1),i=(0,e.uE)('<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;zh&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;CN&#39;</span></span><span class="token punctuation">)</span> <span class="token comment">// 中文简体</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们始终可以通过以下方式来获取应用的当前区域Locale：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Locale</span> myLocale <span class="token operator">=</span> <span class="token class-name">Localizations</span><span class="token punctuation">.</span><span class="token function">localeOf</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),p={href:"https://docs.flutter.io/flutter/widgets/Localizations-class.html",target:"_blank",rel:"noopener noreferrer"},d=(0,e._)("code",null,"Localizations",-1),r={href:"https://docs.flutter.io/flutter/widgets/WidgetsApp-class.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e._)("code",null,"Localizations.localeOf(context)",-1),k=(0,e.uE)('<h2 id="_13-1-4-监听系统语言切换" tabindex="-1"><a class="header-anchor" href="#_13-1-4-监听系统语言切换" aria-hidden="true">#</a> 13.1.4 监听系统语言切换</h2><p>当我们更改系统语言设置时，APP中的Localizations组件会重新构建，<code>Localizations.localeOf(context)</code> 获取的Locale就会更新，最终界面会重新build达到切换语言的效果。但是这个过程是隐式完成的，我们并没有主动去监听系统语言切换，但是有时我们需要在系统语言发生改变时做一些事，比如系统语言切换为一种我们APP不支持的语言时，我们需要设置一个默认的语言，这时我们就需要监听locale改变事件。</p><p>我们可以通过<code>localeResolutionCallback</code>或<code>localeListResolutionCallback</code>回调来监听locale改变的事件，我们先看看<code>localeResolutionCallback</code>的回调函数签名：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Locale</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Locale</span><span class="token punctuation">&gt;</span></span> supportedLocales<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数<code>locale</code>的值为当前的当前的系统语言设置，当应用启动时或用户动态改变系统语言设置时此locale即为系统的当前locale。当开发者手动指定APP的locale时，那么此locale参数代表开发者指定的locale，此时将忽略系统locale如：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>\n <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n locale<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;en&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;US&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//手动指定locale</span>\n <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中手动指定了应用locale为美国英语，指定后即使设备当前语言是中文简体，应用中的locale也依然是美国英语。如果<code>locale</code>为<code>null</code>，则表示Flutter未能获取到设备的Locale信息，所以我们在使用<code>locale</code>之前一定要先判空。</p></li><li><p><code>supportedLocales</code> 为当前应用支持的locale列表，是开发者在MaterialApp中通过<code>supportedLocales</code>属性注册的。</p></li><li><p>返回值是一个<code>Locale</code>，此<code>Locale</code>为Flutter APP最终使用的<code>Locale</code>。通常在不支持的语言区域时返回一个默认的<code>Locale</code>。</p></li></ul><p><code>localeListResolutionCallback</code>和<code>localeResolutionCallback</code>唯一的不同就在第一个参数类型，前者接收的是一个<code>Locale</code>列表，而后者接收的是单个<code>Locale</code>。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Locale</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Locale</span><span class="token punctuation">&gt;</span></span> locales<span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Locale</span><span class="token punctuation">&gt;</span></span> supportedLocales<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在较新的Android系统中，用户可以设置一个语言列表，这样一来，支持多语言的应用就会得到这个列表，应用通常的处理方式就是按照列表的顺序依次尝试加载相应的Locale，如果某一种语言加载成功则会停止。图13-1是Android系统中设置语言列表的截图：</p><p><img src="'+l+'" alt="设置语言列表"></p><p>在Flutter中，应该优先使用<code>localeListResolutionCallback</code>，当然你不必担心Android系统的差异性，如果在低版本的Android系统中，Flutter会自动处理这种情况，这时Locale列表只会包含一项。</p><h2 id="_13-1-5-localization-组件" tabindex="-1"><a class="header-anchor" href="#_13-1-5-localization-组件" aria-hidden="true">#</a> 13.1.5 Localization 组件</h2>',11),m={href:"https://docs.flutter.io/flutter/widgets/Localizations/of.html",target:"_blank",rel:"noopener noreferrer"},g=(0,e._)("code",null,"Localizations.of(context,type)",-1),v=(0,e._)("code",null,"Localizations",-1),b={href:"https://book.flutterchina.club/chapter7/inherited_widget.html",target:"_blank",rel:"noopener noreferrer"},h=(0,e._)("code",null,"build",-1),L=(0,e._)("code",null,"InheritedWidget",-1),_=(0,e._)("code",null,"InheritedWidget",-1),f=(0,e._)("code",null,"InheritedWidget",-1),z=(0,e._)("code",null,"Localizations",-1),U=(0,e._)("code",null,"Localizations",-1),M={href:"https://docs.flutter.io/flutter/widgets/LocalizationsDelegate-class.html",target:"_blank",rel:"noopener noreferrer"},x=(0,e._)("strong",null,"每个委托必须定义一个异步load() 方法",-1),A=(0,e._)("code",null,"Localizations",-1),W=(0,e._)("code",null,"LocalizationsDelegate ",-1),y=(0,e._)("code",null,"load",-1),w=(0,e._)("code",null,"BuildContext",-1),D={href:"https://docs.flutter.io/flutter/material/MaterialLocalizations-class.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://docs.flutter.io/flutter/material/MaterialApp-class.html",target:"_blank",rel:"noopener noreferrer"},P=(0,e._)("code",null,"LocalizationDelegate",-1),F=(0,e.uE)('<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Localizations</span><span class="token punctuation">.</span>of<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MaterialLocalizations</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token class-name">MaterialLocalizations</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个特殊的<code>Localizations.of()</code>表达式会经常使用，所以MaterialLocalizations类提供了一个便捷方法：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">static</span> <span class="token class-name">MaterialLocalizations</span> <span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token class-name">Localizations</span><span class="token punctuation">.</span>of<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MaterialLocalizations</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token class-name">MaterialLocalizations</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 可以直接调用便捷方法</span>\ntooltip<span class="token punctuation">:</span> <span class="token class-name">MaterialLocalizations</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>backButtonTooltip<span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-1-6-使用打包好的localizationsdelegates" tabindex="-1"><a class="header-anchor" href="#_13-1-6-使用打包好的localizationsdelegates" aria-hidden="true">#</a> 13.1.6 使用打包好的LocalizationsDelegates</h2><p>为了尽可能小而且简单，flutter软件包中仅提供美国英语值的<code>MaterialLocalizations</code>和<code>WidgetsLocalizations</code>接口的实现。 这些实现类分别称为<code>DefaultMaterialLocalizations</code>和<code>DefaultWidgetsLocalizations</code>。flutter_localizations 包包含<code>GlobalMaterialLocalizations</code>和<code>GlobalWidgetsLocalizations</code>的本地化接口的多语言实现， 国际化的应用程序必须按照本节开头说明的那样为这些类指定本地化Delegate。</p><p>上述的<code>GlobalMaterialLocalizations</code>和<code>GlobalWidgetsLocalizations</code>只是Material组件库的本地化实现，如果我们要让自己的布局支持多语言，那么就需要实现在即的<code>Localizations</code>，我们将在下一节介绍其具体的实现方式。</p>',6),G={},I=(0,s(18580).Z)(G,[["render",function(a,n){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("p",null,[(0,e._)("a",o,[c,(0,e.Wm)(s)]),(0,e.Uk)("类是用来标识用户的语言环境的，它包括语言和国家两个标志如：")]),i,(0,e._)("p",null,[(0,e._)("a",p,[d,(0,e.Wm)(s)]),(0,e.Uk)(" 组件一般位于widget树中其它业务组件的顶部，它的作用是定义区域Locale以及设置子树依赖的本地化资源。 如果系统的语言环境发生变化，"),(0,e._)("a",r,[(0,e.Uk)("WidgetsApp"),(0,e.Wm)(s)]),(0,e.Uk)("将创建一个新的Localizations 组件并重建它，这样子树中通过"),u,(0,e.Uk)(" 获取的Locale就会更新。")]),k,(0,e._)("p",null,[(0,e.Uk)("Localizations组件用于加载和查找应用当前语言下的本地化值或资源。应用程序通过"),(0,e._)("a",m,[g,(0,e.Wm)(s)]),(0,e.Uk)("来引用这些对象。 如果设备的Locale区域设置发生更改，则Localizations 组件会自动加载新区域的Locale值，然后重新build使用（依赖）了它们的组件，之所以会这样，是因为"),v,(0,e.Uk)("内部使用了"),(0,e._)("a",b,[(0,e.Uk)("InheritedWidget"),(0,e.Wm)(s)]),(0,e.Uk)(" ，我们在介绍该组件时讲过：当子组件的"),h,(0,e.Uk)("函数引用了"),L,(0,e.Uk)("时，会创建对"),_,(0,e.Uk)("的隐式依赖关系。因此，当"),f,(0,e.Uk)("发生更改时，即"),z,(0,e.Uk)("的Locale设置发生更改时，将重建所有依赖它的子组件。")]),(0,e._)("p",null,[(0,e.Uk)("本地化值由"),U,(0,e.Uk)("的 "),(0,e._)("a",M,[(0,e.Uk)("LocalizationsDelegates"),(0,e.Wm)(s)]),(0,e.Uk)(" 列表加载 。 "),x,(0,e.Uk)("，以生成封装了一系列本地化值的对象。通常这些对象为每个本地化值定义一个方法。")]),(0,e._)("p",null,[(0,e.Uk)("在大型应用程序中，不同模块或Package可能会与自己的本地化值捆绑在一起。 这就是为什么要用"),A,(0,e.Uk)(" 管理对象表的原因。 要使用由"),W,(0,e.Uk)("的"),y,(0,e.Uk)("方法之一产生的对象，可以指定一个"),w,(0,e.Uk)("和对象的类型来找到它。例如，Material 组件库的本地化字符串由"),(0,e._)("a",D,[(0,e.Uk)("MaterialLocalizations"),(0,e.Wm)(s)]),(0,e.Uk)("类定义，此类的实例由"),(0,e._)("a",C,[(0,e.Uk)("MaterialApp"),(0,e.Wm)(s)]),(0,e.Uk)("类提供的"),P,(0,e.Uk)("创建， 它们可以如下方式获取到：")]),F])}]])},18580:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,e]of n)s[a]=e;return s}}}]);