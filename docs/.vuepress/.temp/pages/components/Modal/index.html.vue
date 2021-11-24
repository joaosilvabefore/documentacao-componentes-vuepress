<template><h3 id="how-to-use-basemodal" tabindex="-1"><a class="header-anchor" href="#how-to-use-basemodal" aria-hidden="true">#</a> How to use BaseModal</h3>
<p>The Modal component extends <a href="https://bootstrap-vue.org/docs/components/modal" target="_blank" rel="noopener noreferrer">BootstrapVue's modal<OutboundLink/></a> and applies Academy's UX.</p>
<p>To learn more about the component props, events and slots,
access the BootstrapVue component page.</p>
<p><em>JS Methods to handle modal events in the examples:</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">handleClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do stuff before close modal on cancel event</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">handleOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do stuff before close modal on ok event</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><em>Example: Modal using v-b-modal</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">v-b-modal.base-modal-id</span><span class="token punctuation">></span></span>Open Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-modal</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>base-modal-id<span class="token punctuation">"</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal Title<span class="token punctuation">"</span></span>
  <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClose<span class="token punctuation">"</span></span>
  <span class="token attr-name">@ok</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleOk<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  My Modal Content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><em>Example: Modal using this.$bvModal</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showModalWithBVModalEvent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-modal</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>base-modal-open-with-event<span class="token punctuation">"</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal Title<span class="token punctuation">"</span></span>
  <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClose<span class="token punctuation">"</span></span>
  <span class="token attr-name">@ok</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleOk<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  My Modal Content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">showModalWithBVModalEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do some stuff before open modal</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$bvModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">"base-modal-open-with-event"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><em>Example: Modal hide footer</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">v-b-modal.modal-hide-footer</span><span class="token punctuation">></span></span>Open Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-modal</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-hide-footer<span class="token punctuation">"</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal Title<span class="token punctuation">"</span></span>
  <span class="token attr-name">hide-footer</span>
<span class="token punctuation">></span></span>
  My Modal Content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><em>Example: Modal alert</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">v-b-modal.modal-alert</span><span class="token punctuation">></span></span>Open Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-modal</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-alert<span class="token punctuation">"</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modal Title<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  My Modal Content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
