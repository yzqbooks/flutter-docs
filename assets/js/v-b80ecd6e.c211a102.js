"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[2096],{40283:(s,a,e)=>{e.r(a),e.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-b80ecd6e","path":"/chapter2/flutter_assets_mgr.html","title":"2.6 资源管理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"指定 assets","slug":"指定-assets","link":"#指定-assets","children":[]},{"level":2,"title":"Asset 变体（variant）","slug":"asset-变体-variant","link":"#asset-变体-variant","children":[]},{"level":2,"title":"加载 assets","slug":"加载-assets","link":"#加载-assets","children":[{"level":3,"title":"加载文本assets","slug":"加载文本assets","link":"#加载文本assets","children":[]},{"level":3,"title":"加载图片","slug":"加载图片","link":"#加载图片","children":[]},{"level":3,"title":"特定平台 assets","slug":"特定平台-assets","link":"#特定平台-assets","children":[]}]}],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":7.5,"words":2251},"filePathRelative":"chapter2/flutter_assets_mgr.md","localizedDate":"2022年6月6日","excerpt":""}')},25906:(s,a,e)=>{e.r(a),e.d(a,{default:()=>ts});var n=e(6808);const t=e.p+"assets/img/2-15.46829405.png",l=e.p+"assets/img/2-16.532947b3.png",c=e.p+"assets/img/2-17.b3d726ea.png",r=e.p+"assets/img/2-18.9e134034.png",o=(0,n._)("h1",{id:"_2-6-资源管理",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#_2-6-资源管理","aria-hidden":"true"},"#"),(0,n.Uk)(" 2.6 资源管理")],-1),i=(0,n._)("p",null,"Flutter APP 安装包中会包含代码和 assets（资源）两部分。Assets 是会打包到程序安装包中的，可在运行时访问。常见类型的 assets 包括静态数据（例如JSON文件）、配置文件、图标和图片等。",-1),p=(0,n._)("h2",{id:"指定-assets",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#指定-assets","aria-hidden":"true"},"#"),(0,n.Uk)(" 指定 assets")],-1),d={href:"https://www.dartlang.org/tools/pub/pubspec",target:"_blank",rel:"noopener noreferrer"},u=(0,n._)("code",null,"pubspec.yaml",-1),k=(0,n.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">flutter</span><span class="token punctuation">:</span>\n  <span class="token key atrule">assets</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> assets/my_icon.png\n    <span class="token punctuation">-</span> assets/background.png\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>assets</code>指定应包含在应用程序中的文件， 每个 asset 都通过相对于<code>pubspec.yaml</code>文件所在的文件系统路径来标识自身的路径。asset 的声明顺序是无关紧要的，asset的实际目录可以是任意文件夹（在本示例中是assets 文件夹）。</p><p>在构建期间，Flutter 将 asset 放置到称为 <em>asset bundle</em> 的特殊存档中，应用程序可以在运行时读取它们（但不能修改）。</p><h2 id="asset-变体-variant" tabindex="-1"><a class="header-anchor" href="#asset-变体-variant" aria-hidden="true">#</a> Asset 变体（variant）</h2><p>构建过程支持“asset变体”的概念：不同版本的 asset 可能会显示在不同的上下文中。 在<code>pubspec.yaml</code>的assets 部分中指定 asset 路径时，构建过程中，会在相邻子目录中查找具有相同名称的任何文件。这些文件随后会与指定的 asset 一起被包含在 asset bundle 中。</p><p>例如，如果应用程序目录中有以下文件:</p><ul><li>…/pubspec.yaml</li><li>…/graphics/my_icon.png</li><li>…/graphics/background.png</li><li>…/graphics/dark/background.png</li><li>…etc.</li></ul><p>然后<code>pubspec.yaml</code>文件中只需包含:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">flutter</span><span class="token punctuation">:</span>\n  <span class="token key atrule">assets</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> graphics/background.png\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么这两个<code>graphics/background.png</code>和<code>graphics/dark/background.png</code> 都将包含在您的 asset bundle中。前者被认为是_main asset_ （主资源），后者被认为是一种变体（variant）。</p><p>在选择匹配当前设备分辨率的图片时，Flutter会使用到 asset 变体（见下文）。</p><h2 id="加载-assets" tabindex="-1"><a class="header-anchor" href="#加载-assets" aria-hidden="true">#</a> 加载 assets</h2>',12),g={href:"https://docs.flutter.io/flutter/services/AssetBundle-class.html",target:"_blank",rel:"noopener noreferrer"},m=(0,n._)("code",null,"AssetBundle",-1),h=(0,n._)("h3",{id:"加载文本assets",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#加载文本assets","aria-hidden":"true"},"#"),(0,n.Uk)(" 加载文本assets")],-1),b={href:"https://docs.flutter.io/flutter/services/rootBundle.html",target:"_blank",rel:"noopener noreferrer"},v=(0,n._)("code",null,"rootBundle",-1),_={href:"https://docs.flutter.io/flutter/services/rootBundle.html",target:"_blank",rel:"noopener noreferrer"},f=(0,n._)("code",null,"rootBundle",-1),y=(0,n._)("code",null,"package:flutter/services.dart",-1),x=(0,n._)("code",null,"rootBundle",-1),U={href:"https://docs.flutter.io/flutter/widgets/DefaultAssetBundle-class.html",target:"_blank",rel:"noopener noreferrer"},w=(0,n._)("code",null,"DefaultAssetBundle",-1),A={href:"https://docs.flutter.io/flutter/widgets/DefaultAssetBundle-class.html",target:"_blank",rel:"noopener noreferrer"},I=(0,n._)("code",null,"DefaultAssetBundle",-1),B=(0,n.uE)('<p>通常，可以使用<code>DefaultAssetBundle.of()</code>在应用运行时来间接加载 asset（例如JSON文件），而在widget 上下文之外，或其它<code>AssetBundle</code>句柄不可用时，可以使用<code>rootBundle</code>直接加载这些 asset，例如：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:async&#39;</span></span> <span class="token keyword">show</span> <span class="token class-name">Future</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/services.dart&#39;</span></span> <span class="token keyword">show</span> rootBundle<span class="token punctuation">;</span>\n\n<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadAsset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">await</span> rootBundle<span class="token punctuation">.</span><span class="token function">loadString</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;assets/config.json&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载图片" tabindex="-1"><a class="header-anchor" href="#加载图片" aria-hidden="true">#</a> 加载图片</h3><p>类似于原生开发，Flutter也可以为当前设备加载适合其分辨率的图像。</p><h4 id="声明分辨率相关的图片-assets" tabindex="-1"><a class="header-anchor" href="#声明分辨率相关的图片-assets" aria-hidden="true">#</a> 声明分辨率相关的图片 assets</h4>',5),F={href:"https://docs.flutter.io/flutter/painting/AssetImage-class.html",target:"_blank",rel:"noopener noreferrer"},W=(0,n._)("code",null,"AssetImage",-1),D=(0,n.uE)('<ul><li>…/image.png</li><li>…/<strong>M</strong>x/image.png</li><li>…/<strong>N</strong>x/image.png</li><li>…etc.</li></ul><p>其中 M 和 N 是数字标识符，对应于其中包含的图像的分辨率，也就是说，它们指定不同设备像素比例的图片。</p><p>主资源默认对应于1.0倍的分辨率图片。看一个例子：</p><ul><li>…/my_icon.png</li><li>…/2.0x/my_icon.png</li><li>…/3.0x/my_icon.png</li></ul><p>在设备像素比率为1.8的设备上，<code>.../2.0x/my_icon.png</code> 将被选择。对于2.7的设备像素比率，<code>.../3.0x/my_icon.png</code>将被选择。</p><p>如果未在<code>Image</code> widget上指定渲染图像的宽度和高度，那么<code>Image</code> widget将占用与主资源相同的屏幕空间大小。 也就是说，如果<code>.../my_icon.png</code>是72px乘72px，那么<code>.../3.0x/my_icon.png</code>应该是216px乘216px; 但如果未指定宽度和高度，它们都将渲染为72像素×72像素（以逻辑像素为单位）。</p><p><code>pubspec.yaml</code>中asset部分中的每一项都应与实际文件相对应，但主资源项除外。当主资源缺少某个资源时，会按分辨率从低到高的顺序去选择 ，也就是说1x中没有的话会在2x中找，2x中还没有的话就在3x中找。</p><h4 id="加载图片-1" tabindex="-1"><a class="header-anchor" href="#加载图片-1" aria-hidden="true">#</a> 加载图片</h4>',8),S={href:"https://docs.flutter.io/flutter/painting/AssetImage-class.html",target:"_blank",rel:"noopener noreferrer"},C=(0,n._)("code",null,"AssetImage",-1),P=(0,n.uE)('<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token class-name">DecoratedBox</span><span class="token punctuation">(</span>\n    decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>\n      image<span class="token punctuation">:</span> <span class="token class-name">DecorationImage</span><span class="token punctuation">(</span>\n        image<span class="token punctuation">:</span> <span class="token class-name">AssetImage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;graphics/background.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>AssetImage</code> 并非是一个widget， 它实际上是一个<code>ImageProvider</code>，有些时候你可能期望直接得到一个显示图片的widget，那么你可以使用<code>Image.asset()</code>方法，如：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;graphics/background.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),E={href:"https://docs.flutter.io/flutter/painting/ImageStream-class.html",target:"_blank",rel:"noopener noreferrer"},N=(0,n._)("code",null,"ImageStream",-1),O={href:"https://docs.flutter.io/flutter/painting/ImageCache-class.html",target:"_blank",rel:"noopener noreferrer"},L=(0,n._)("code",null,"ImageCache",-1),z=(0,n.uE)('<h4 id="依赖包中的资源图片" tabindex="-1"><a class="header-anchor" href="#依赖包中的资源图片" aria-hidden="true">#</a> 依赖包中的资源图片</h4><p>要加载依赖包中的图像，必须给<code>AssetImage</code>提供<code>package</code>参数。</p><p>例如，假设您的应用程序依赖于一个名为“my_icons”的包，它具有如下目录结构：</p><ul><li>…/pubspec.yaml</li><li>…/icons/heart.png</li><li>…/icons/1.5x/heart.png</li><li>…/icons/2.0x/heart.png</li><li>…etc.</li></ul><p>然后加载图像，使用:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">AssetImage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;icons/heart.png&#39;</span></span><span class="token punctuation">,</span> package<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;my_icons&#39;</span></span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;icons/heart.png&#39;</span></span><span class="token punctuation">,</span> package<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;my_icons&#39;</span></span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：包在使用本身的资源时也应该加上<code>package</code>参数来获取</strong>。</p><h5 id="打包包中的-assets" tabindex="-1"><a class="header-anchor" href="#打包包中的-assets" aria-hidden="true">#</a> 打包包中的 assets</h5><p>如果在<code>pubspec.yaml</code>文件中声明了期望的资源，它将会打包到相应的package中。特别是，包本身使用的资源必须在<code>pubspec.yaml</code>中指定。</p><p>包也可以选择在其<code>lib/</code>文件夹中包含未在其<code>pubspec.yaml</code>文件中声明的资源。在这种情况下，对于要打包的图片，应用程序必须在<code>pubspec.yaml</code>中指定包含哪些图像。 例如，一个名为“fancy_backgrounds”的包，可能包含以下文件：</p><ul><li>…/lib/backgrounds/background1.png</li><li>…/lib/backgrounds/background2.png</li><li>…/lib/backgrounds/background3.png</li></ul><p>要包含第一张图像，必须在<code>pubspec.yaml</code>的assets部分中声明它：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">flutter</span><span class="token punctuation">:</span>\n  <span class="token key atrule">assets</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> packages/fancy_backgrounds/backgrounds/background1.png\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>lib/</code>是隐含的，所以它不应该包含在资产路径中。</p><h3 id="特定平台-assets" tabindex="-1"><a class="header-anchor" href="#特定平台-assets" aria-hidden="true">#</a> 特定平台 assets</h3><p>上面的资源都是flutter应用中的，这些资源只有在Flutter框架运行之后才能使用，如果要给我们的应用设置APP图标或者添加启动图，那我们必须使用特定平台的assets。</p><h4 id="设置app图标" tabindex="-1"><a class="header-anchor" href="#设置app图标" aria-hidden="true">#</a> 设置APP图标</h4><p>更新Flutter应用程序启动图标的方式与在本机Android或iOS应用程序中更新启动图标的方式相同。</p>',20),R=(0,n._)("p",null,"Android",-1),q=(0,n._)("code",null,".../android/app/src/main/res",-1),j=(0,n._)("code",null,"mipmap-hdpi",-1),J={href:"https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html#size",target:"_blank",rel:"noopener noreferrer"},M=(0,n._)("p",null,[(0,n._)("img",{src:t,alt:"图2-15"})],-1),T=(0,n._)("blockquote",null,[(0,n._)("p",null,[(0,n._)("strong",null,"注意:"),(0,n.Uk)(" 如果您重命名.png文件，则还必须在您"),(0,n._)("code",null,"AndroidManifest.xml"),(0,n.Uk)("的"),(0,n._)("code",null,"<application>"),(0,n.Uk)("标签的"),(0,n._)("code",null,"android:icon"),(0,n.Uk)("属性中更新名称。")])],-1),Z=(0,n._)("li",null,[(0,n._)("p",null,"iOS"),(0,n._)("p",null,[(0,n.Uk)("在Flutter项目的根目录中，导航到"),(0,n._)("code",null,".../ios/Runner"),(0,n.Uk)("。该目录中"),(0,n._)("code",null,"Assets.xcassets/AppIcon.appiconset"),(0,n.Uk)("已经包含占位符图片（见图2-16）， 只需将它们替换为适当大小的图片，保留原始文件名称。")]),(0,n._)("p",null,[(0,n._)("img",{src:l,alt:"图2-16"})])],-1),X=(0,n._)("h4",{id:"更新启动页",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#更新启动页","aria-hidden":"true"},"#"),(0,n.Uk)(" 更新启动页")],-1),G=(0,n._)("p",null,[(0,n._)("img",{src:c,alt:"图2-17"})],-1),H=(0,n._)("p",null,"在 Flutter 框架加载时，Flutter 会使用本地平台机制绘制启动页。此启动页将持续到Flutter渲染应用程序的第一帧时。",-1),K=(0,n._)("strong",null,"注意:",-1),Q=(0,n._)("code",null,"main()",-1),V={href:"https://docs.flutter.io/flutter/widgets/runApp.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://docs.flutter.io/flutter/dart-ui/Window/render.html",target:"_blank",rel:"noopener noreferrer"},$=(0,n._)("code",null,"window.render",-1),ss={href:"https://docs.flutter.io/flutter/dart-ui/Window/onDrawFrame.html",target:"_blank",rel:"noopener noreferrer"},as=(0,n._)("code",null,"window.onDrawFrame",-1),es=(0,n.uE)('<h5 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h5><p>要将启动屏幕（splash screen）添加到您的Flutter应用程序， 请导航至<code>.../android/app/src/main</code>。在<code>res/drawable/launch_background.xml</code>，通过自定义drawable来实现自定义启动界面（你也可以直接换一张图片）。</p><h5 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h5><p>要将图片添加到启动屏幕（splash screen）的中心，请导航至<code>.../ios/Runner</code>。在<code>Assets.xcassets/LaunchImage.imageset</code>， 拖入图片，并命名为<code>LaunchImage.png</code>、<code>LaunchImage@2x.png</code>、<code>LaunchImage@3x.png</code>。 如果你使用不同的文件名，那您还必须更新同一目录中的<code>Contents.json</code>文件，图片的具体尺寸可以查看苹果官方的标准。</p><p>您也可以通过打开Xcode完全自定义storyboard。在Project Navigator中导航到<code>Runner/Runner</code>然后通过打开<code>Assets.xcassets</code>拖入图片，或者通过在LaunchScreen.storyboard中使用Interface Builder进行自定义，如图2-18所示。</p><p><img src="'+r+'" alt="图2-18"></p>',6),ns={},ts=(0,e(18580).Z)(ns,[["render",function(s,a){const e=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[o,i,p,(0,n._)("p",null,[(0,n.Uk)("和包管理一样，Flutter 也使用"),(0,n._)("a",d,[u,(0,n.Wm)(e)]),(0,n.Uk)("文件来管理应用程序所需的资源，举个例子:")]),k,(0,n._)("p",null,[(0,n.Uk)("您的应用可以通过"),(0,n._)("a",g,[m,(0,n.Wm)(e)]),(0,n.Uk)("对象访问其 asset 。有两种主要方法允许从 Asset bundle 中加载字符串或图片（二进制）文件。")]),h,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("通过"),(0,n._)("a",b,[v,(0,n.Wm)(e)]),(0,n.Uk)(" 对象加载：每个Flutter应用程序都有一个"),(0,n._)("a",_,[f,(0,n.Wm)(e)]),(0,n.Uk)("对象， 通过它可以轻松访问主资源包，直接使用"),y,(0,n.Uk)("中全局静态的"),x,(0,n.Uk)("对象来加载asset即可。")]),(0,n._)("li",null,[(0,n.Uk)("通过 "),(0,n._)("a",U,[w,(0,n.Wm)(e)]),(0,n.Uk)(" 加载：建议使用 "),(0,n._)("a",A,[I,(0,n.Wm)(e)]),(0,n.Uk)(" 来获取当前 BuildContext 的AssetBundle。 这种方法不是使用应用程序构建的默认 asset bundle，而是使父级 widget 在运行时动态替换的不同的 AssetBundle，这对于本地化或测试场景很有用。")])]),B,(0,n._)("p",null,[(0,n._)("a",F,[W,(0,n.Wm)(e)]),(0,n.Uk)(" 可以将asset的请求逻辑映射到最接近当前设备像素比例（dpi）的asset。为了使这种映射起作用，必须根据特定的目录结构来保存asset：")]),D,(0,n._)("p",null,[(0,n.Uk)("要加载图片，可以使用 "),(0,n._)("a",S,[C,(0,n.Wm)(e)]),(0,n.Uk)("类。例如，我们可以从上面的asset声明中加载背景图片：")]),P,(0,n._)("p",null,[(0,n.Uk)("使用默认的 asset bundle 加载资源时，内部会自动处理分辨率等，这些处理对开发者来说是无感知的。 (如果使用一些更低级别的类，如 "),(0,n._)("a",E,[N,(0,n.Wm)(e)]),(0,n.Uk)("或 "),(0,n._)("a",O,[L,(0,n.Wm)(e)]),(0,n.Uk)(" 时你会注意到有与缩放相关的参数)")]),z,(0,n._)("ul",null,[(0,n._)("li",null,[R,(0,n._)("p",null,[(0,n.Uk)("在 Flutter 项目的根目录中，导航到"),q,(0,n.Uk)("目录，里面包含了各种资源文件夹（如"),j,(0,n.Uk)("已包含占位符图像 “ic_launcher.png”，见图2-15）。 只需按照"),(0,n._)("a",J,[(0,n.Uk)("Android开发人员指南"),(0,n.Wm)(e)]),(0,n.Uk)("中的说明， 将其替换为所需的资源，并遵守每种屏幕密度（dpi）的建议图标大小标准。")]),M,T]),Z]),X,G,H,(0,n._)("blockquote",null,[(0,n._)("p",null,[K,(0,n.Uk)(" 这意味着如果您不在应用程序的"),Q,(0,n.Uk)("方法中调用"),(0,n._)("a",V,[(0,n.Uk)("runApp"),(0,n.Wm)(e)]),(0,n.Uk)(" 函数 （或者更具体地说，如果您不调用"),(0,n._)("a",Y,[$,(0,n.Wm)(e)]),(0,n.Uk)("去响应"),(0,n._)("a",ss,[as,(0,n.Wm)(e)]),(0,n.Uk)("）的话， 启动屏幕将永远持续显示。")])]),es])}]])},18580:(s,a)=>{a.Z=(s,a)=>{const e=s.__vccOpts||s;for(const[s,n]of a)e[s]=n;return e}}}]);