<template><h3 id="how-to-use-toast" tabindex="-1"><a class="header-anchor" href="#how-to-use-toast" aria-hidden="true">#</a> How to use Toast</h3>
<p>The Toast component extends <a href="https://bootstrap-vue.org/docs/components/toast" target="_blank" rel="noopener noreferrer">BootstrapVue's Toast<OutboundLink/></a>
and it was designed to follow Academy's UX.</p>
<p>Toast's plugin injects the universal variable <code>$noitfy</code> into Vuex, Vue, Axios.</p>
<p>To use, you can simple call <code>this.$notify</code> and access one of the four methods available:</p>
<ul>
<li><em>success</em> -&gt; to notify success messages</li>
<li><em>error</em> --&gt; to notify error messages</li>
<li><em>warning</em> --&gt; to notify alert messages</li>
<li><em>release</em></li>
</ul>
<blockquote>
<p>You have to pass a message parameter to the method, otherwise, it'll throw an error.</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$notify.success(<span class="token punctuation">'</span>Hello Success<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Toast Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$notify.error(<span class="token punctuation">'</span>Hello Error<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Toast Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$notify.warning(<span class="token punctuation">'</span>Hello Warning<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Toast Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$notify.release(<span class="token punctuation">'</span>Hello Release<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show Toast Release<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
