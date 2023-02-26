"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[7017],{62715:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-1b48c2c6","path":"/chapter15/login_page.html","title":"15.7 登录页","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1654491188000,"updatedTime":1654491188000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":2.07,"words":622},"filePathRelative":"chapter15/login_page.md","localizedDate":"2022年6月6日","excerpt":""}')},85204:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var t=a(6808);const p=a.p+"assets/img/15-5.e1cf2b71.png",o=(0,t._)("h1",{id:"_15-7-登录页",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_15-7-登录页","aria-hidden":"true"},"#"),(0,t.Uk)(" 15.7 登录页")],-1),e=(0,t._)("p",null,"我们说过Github有多种登录方式，为了简单起见，我们只实现通过用户名和密码登录。在实现登录页时有四点需要注意：",-1),c=(0,t._)("ol",null,[(0,t._)("li",null,"可以自动填充上次登录的用户名（如果有）。"),(0,t._)("li",null,"为了防止密码输入错误，密码框应该有开关可以看明文。"),(0,t._)("li",null,"用户名或密码字段在调用登录接口前有本地合法性校验（比如不能为空）。"),(0,t._)("li",null,"登录成功后需更新用户信息。")],-1),l={href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"},u=(0,t.uE)('<p>实现代码如下：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;../index.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">LoginRoute</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>\n  <span class="token metadata function">@override</span>\n  _LoginRouteState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_LoginRouteState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> _LoginRouteState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginRoute</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token class-name">TextEditingController</span> _unameController <span class="token operator">=</span> <span class="token class-name">TextEditingController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name">TextEditingController</span> _pwdController <span class="token operator">=</span> <span class="token class-name">TextEditingController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  bool pwdShow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token class-name">GlobalKey</span> _formKey <span class="token operator">=</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FormState</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  bool _nameAutoFocus <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 自动填充上次登录的用户名，填充后将焦点定位到密码输入框</span>\n    _unameController<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token class-name">Global</span><span class="token punctuation">.</span>profile<span class="token punctuation">.</span>lastLogin <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>_unameController<span class="token punctuation">.</span>text<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      _nameAutoFocus <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token metadata function">@override</span>\n  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> gm <span class="token operator">=</span> <span class="token class-name">GmLocalizations</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>\n      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>gm<span class="token punctuation">.</span>login<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      body<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>\n        padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">16.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        child<span class="token punctuation">:</span> <span class="token class-name">Form</span><span class="token punctuation">(</span>\n          key<span class="token punctuation">:</span> _formKey<span class="token punctuation">,</span>\n          autovalidateMode<span class="token punctuation">:</span> <span class="token class-name">AutovalidateMode</span><span class="token punctuation">.</span>onUserInteraction<span class="token punctuation">,</span>\n          child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>\n            children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>\n              <span class="token class-name">TextFormField</span><span class="token punctuation">(</span>\n                  autofocus<span class="token punctuation">:</span> _nameAutoFocus<span class="token punctuation">,</span>\n                  controller<span class="token punctuation">:</span> _unameController<span class="token punctuation">,</span>\n                  decoration<span class="token punctuation">:</span> <span class="token class-name">InputDecoration</span><span class="token punctuation">(</span>\n                    labelText<span class="token punctuation">:</span> gm<span class="token punctuation">.</span>userName<span class="token punctuation">,</span>\n                    hintText<span class="token punctuation">:</span> gm<span class="token punctuation">.</span>userName<span class="token punctuation">,</span>\n                    prefixIcon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>person<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n                  <span class="token comment">// 校验用户名（不能为空）</span>\n                  validator<span class="token punctuation">:</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> v<span class="token operator">==</span><span class="token keyword">null</span><span class="token operator">||</span>v<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isNotEmpty <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token punctuation">:</span> gm<span class="token punctuation">.</span>userNameRequired<span class="token punctuation">;</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token class-name">TextFormField</span><span class="token punctuation">(</span>\n                controller<span class="token punctuation">:</span> _pwdController<span class="token punctuation">,</span>\n                autofocus<span class="token punctuation">:</span> <span class="token operator">!</span>_nameAutoFocus<span class="token punctuation">,</span>\n                decoration<span class="token punctuation">:</span> <span class="token class-name">InputDecoration</span><span class="token punctuation">(</span>\n                    labelText<span class="token punctuation">:</span> gm<span class="token punctuation">.</span>password<span class="token punctuation">,</span>\n                    hintText<span class="token punctuation">:</span> gm<span class="token punctuation">.</span>password<span class="token punctuation">,</span>\n                    prefixIcon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>lock<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    suffixIcon<span class="token punctuation">:</span> <span class="token class-name">IconButton</span><span class="token punctuation">(</span>\n                      icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span>\n                          pwdShow <span class="token operator">?</span> <span class="token class-name">Icons</span><span class="token punctuation">.</span>visibility_off <span class="token punctuation">:</span> <span class="token class-name">Icons</span><span class="token punctuation">.</span>visibility<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                      onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                          pwdShow <span class="token operator">=</span> <span class="token operator">!</span>pwdShow<span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                obscureText<span class="token punctuation">:</span> <span class="token operator">!</span>pwdShow<span class="token punctuation">,</span>\n                <span class="token comment">//校验密码（不能为空）</span>\n                validator<span class="token punctuation">:</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">return</span> v<span class="token operator">==</span><span class="token keyword">null</span><span class="token operator">||</span>v<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isNotEmpty <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token punctuation">:</span> gm<span class="token punctuation">.</span>passwordRequired<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token class-name">Padding</span><span class="token punctuation">(</span>\n                padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                child<span class="token punctuation">:</span> <span class="token class-name">ConstrainedBox</span><span class="token punctuation">(</span>\n                  constraints<span class="token punctuation">:</span> <span class="token class-name">BoxConstraints</span><span class="token punctuation">.</span><span class="token function">expand</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">55.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                  child<span class="token punctuation">:</span> <span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>\n                   <span class="token comment">// color: Theme.of(context).primaryColor,</span>\n                    onPressed<span class="token punctuation">:</span> _onLogin<span class="token punctuation">,</span>\n                   <span class="token comment">// textColor: Colors.white,</span>\n                    child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>gm<span class="token punctuation">.</span>login<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">)</span><span class="token punctuation">,</span>\n              <span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">void</span> <span class="token function">_onLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 先验证各个表单字段是否合法</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>_formKey<span class="token punctuation">.</span>currentState <span class="token operator">as</span> <span class="token class-name">FormState</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">showLoading</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">User</span><span class="token operator">?</span> user<span class="token punctuation">;</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">Git</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>_unameController<span class="token punctuation">.</span>text<span class="token punctuation">,</span> _pwdController<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 因为登录页返回后，首页会build，所以我们传false，更新user后不触发更新</span>\n        <span class="token class-name">Provider</span><span class="token punctuation">.</span>of<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserModel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> listen<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">DioError</span> <span class="token keyword">catch</span><span class="token punctuation">(</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//登录失败则提示</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>response<span class="token operator">?</span><span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token class-name">GmLocalizations</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>userNameOrPasswordWrong<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token function">showToast</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 隐藏loading框</span>\n        <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">//登录成功则返回</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码很简单，关键地方都有注释，不再赘述，下面我们看一下运行效果，如图15-5所示。</p><p><img src="'+p+'" alt="图15-5"></p>',4),i={},k=(0,a(18580).Z)(i,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[o,e,c,(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t.Uk)("注意：Github 官方为了保证安全，现在已经不允许直接使用密码登录，取而代之的是用户需要去Github上生成一个登录token，然后通过账号+token登录，如何创建token请参考"),(0,t._)("a",l,[(0,t.Uk)("Github官方指南"),(0,t.Wm)(a)]),(0,t.Uk)("。为了便于描述，本实例中的文案“密码”一次特指用户token。")])]),u])}]])},18580:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);