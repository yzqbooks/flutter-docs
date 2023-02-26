"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[1060],{87477:(a,e,n)=>{n.r(e),n.d(e,{data:()=>t});const t=JSON.parse('{"key":"v-19bfad2a","path":"/chapter12/package_and_plugin.html","title":"12.1 包和插件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"12.1.1 包","slug":"_12-1-1-包","link":"#_12-1-1-包","children":[]},{"level":2,"title":"12.1.2 插件","slug":"_12-1-2-插件","link":"#_12-1-2-插件","children":[{"level":3,"title":"插件实现原理","slug":"插件实现原理","link":"#插件实现原理","children":[]},{"level":3,"title":"如何获取平台信息","slug":"如何获取平台信息","link":"#如何获取平台信息","children":[]},{"level":3,"title":"常用的插件","slug":"常用的插件","link":"#常用的插件","children":[]}]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"chapter12/package_and_plugin.md","localizedDate":"2022年6月6日","excerpt":""}')},86425:(a,e,n)=>{n.r(e),n.d(e,{default:()=>f});var t=n(6808);const l=(0,t.uE)('<h1 id="_12-1-包和插件" tabindex="-1"><a class="header-anchor" href="#_12-1-包和插件" aria-hidden="true">#</a> 12.1 包和插件</h1><p>本节将会介绍 Flutter 中包和插件，然后介绍一些常用的包，但本节不会介绍具体的</p><h2 id="_12-1-1-包" tabindex="-1"><a class="header-anchor" href="#_12-1-1-包" aria-hidden="true">#</a> 12.1.1 包</h2><p>第二章中已经讲过如何使用包（Package），我们知道通过包可以复用模块化代码，一个最小的Package包括：</p><ul><li>一个<code>pubspec.yaml</code>文件：声明了Package的名称、版本、作者等的元数据文件。</li><li>一个 <code>lib</code> 文件夹：包括包中公开的(public)代码，最少应有一个<code>&lt;package-name&gt;.dart</code>文件</li></ul><p>Flutter 包分为两类：</p>',6),s={href:"https://pub.dartlang.org/packages/fluro",target:"_blank",rel:"noopener noreferrer"},r=(0,t._)("code",null,"fluro",-1),i={href:"https://pub.dartlang.org/packages/battery",target:"_blank",rel:"noopener noreferrer"},d=(0,t._)("code",null,"battery",-1),u=(0,t._)("h2",{id:"_12-1-2-插件",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_12-1-2-插件","aria-hidden":"true"},"#"),(0,t.Uk)(" 12.1.2 插件")],-1),c=(0,t._)("p",null,"Flutter 本质上只是一个 UI 框架，运行在宿主平台之上，Flutter 本身是无法提供一些系统能力，比如使用蓝牙、相机、GPS等，因此要在 Flutter 中调用这些能力就必须和原生平台进行通信。目前Flutter 已经支持 iOS、Android、Web、macOS、Windows、Linux等众多平台，要调用特定平台 API 就需要写插件。插件是一种特殊的包，和纯 dart 包主要区别是插件中除了dart代码，还包括特定平台的代码，比如 image_picker 插件可以在 iOS 和 Android 设备上访问相册和摄像头。",-1),o=(0,t._)("h3",{id:"插件实现原理",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#插件实现原理","aria-hidden":"true"},"#"),(0,t.Uk)(" 插件实现原理")],-1),p=(0,t._)("p",null,"我们知道一个完整的Flutter应用程序实际上包括原生代码和Flutter代码两部分。Flutter 中提供了平台通道（platform channel）用于Flutter和原生平台的通信，平台通道正是Flutter和原生之间通信的桥梁，它也是Flutter插件的底层基础设施。",-1),k=(0,t._)("p",null,"Flutter与原生之间的通信本质上是一个远程调用（RPC），通过消息传递实现：",-1),m=(0,t._)("ul",null,[(0,t._)("li",null,"应用的Flutter部分通过平台通道（platform channel）将调用消息发送到宿主应用。"),(0,t._)("li",null,"宿主监听平台通道，并接收该消息。然后它会调用该平台的API，并将响应发送回Flutter。")],-1),g={href:"https://flutter.cn/docs/development/packages-and-plugins/developing-packages",target:"_blank",rel:"noopener noreferrer"},h=(0,t.uE)('<h3 id="如何获取平台信息" tabindex="-1"><a class="header-anchor" href="#如何获取平台信息" aria-hidden="true">#</a> 如何获取平台信息</h3><p>有时，在 Flutter 中我们想根据宿主平台添加一些差异化的功能，因此 Flutter 中提供了一个全局变量 <code>defaultTargetPlatform</code> 来获取当前应用的平台信息，<code>defaultTargetPlatform</code>定义在&quot;platform.dart&quot;中，它的类型是<code>TargetPlatform</code>，这是一个枚举类，定义如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">enum</span> <span class="token class-name">TargetPlatform</span> <span class="token punctuation">{</span>\n  android<span class="token punctuation">,</span>\n  fuchsia<span class="token punctuation">,</span>\n  iOS<span class="token punctuation">,</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到目前Flutter只支持这三个平台。我们可以通过如下代码判断平台：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">if</span><span class="token punctuation">(</span>defaultTargetPlatform <span class="token operator">==</span> <span class="token class-name">TargetPlatform</span><span class="token punctuation">.</span>android<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 是安卓系统，do something</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于不同平台有它们各自的交互规范，Flutter Material库中的一些组件都针对相应的平台做了一些适配，比如路由组件<code>MaterialPageRoute</code>，它在android和ios中会应用各自平台规范的切换动画。那如果我们想让我们的APP在所有平台都表现一致，比如希望在所有平台路由切换动画都按照ios平台一致的左右滑动切换风格该怎么做？Flutter中提供了一种覆盖默认平台的机制，我们可以通过显式指定<code>debugDefaultTargetPlatformOverride</code>全局变量的值来指定应用平台。比如：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>debugDefaultTargetPlatformOverride<span class="token operator">=</span><span class="token class-name">TargetPlatform</span><span class="token punctuation">.</span>iOS<span class="token punctuation">;</span>\n<span class="token function">print</span><span class="token punctuation">(</span>defaultTargetPlatform<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会输出TargetPlatform.iOS</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码即在Android中运行后，Flutter APP就会认为是当前系统是iOS，Material组件库中所有组件交互方式都会和iOS平台对齐，<code>defaultTargetPlatform</code>的值也会变为<code>TargetPlatform.iOS</code>。</p><h3 id="常用的插件" tabindex="-1"><a class="header-anchor" href="#常用的插件" aria-hidden="true">#</a> 常用的插件</h3><p>Flutter 官方提供了一系列常用的插件，如访问相机/相册、本地存储、播放视频等，完整列表见：https://github.com/flutter/plugins/tree/master/packages 读者可以自行查看。除了官方维护的插件，Flutter 社区也有不少现成插件，具体读者可以在 https://pub.dev/ 上查找。</p>',10),v={},f=(0,n(18580).Z)(v,[["render",function(a,e){const n=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[l,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Dart包：其中一些可能包含Flutter的特定功能，因此对Flutter框架具有依赖性，这种包仅用于Flutter，例如"),(0,t._)("a",s,[r,(0,t.Wm)(n)]),(0,t.Uk)("包。")]),(0,t._)("li",null,[(0,t.Uk)("插件包：一种专用的Dart包，其中包含用Dart代码编写的API，以及针对Android（使用Java或Kotlin）和针对iOS（使用OC或Swift）平台的特定实现，也就是说插件包括原生代码，一个具体的例子是"),(0,t._)("a",i,[d,(0,t.Wm)(n)]),(0,t.Uk)("插件包。")])]),u,c,o,p,k,m,(0,t._)("p",null,[(0,t.Uk)("由于插件编写涉及具体平台的开发知识，比如 image_picker 插件需要开发者在 iOS 和 Android 平台上分别实现图片选取和拍摄的功能，因此需要开发者熟悉原生开发，而本书主要聚焦 Flutter ，因此不做过多介绍，不过插件的开发也并不复杂，感兴趣的读者可以查看官方的"),(0,t._)("a",g,[(0,t.Uk)("插件开发示例"),(0,t.Wm)(n)]),(0,t.Uk)("。")]),h])}]])},18580:(a,e)=>{e.Z=(a,e)=>{const n=a.__vccOpts||a;for(const[a,t]of e)n[a]=t;return n}}}]);