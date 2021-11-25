<template><h1 id="base-button" tabindex="-1"><a class="header-anchor" href="#base-button" aria-hidden="true">#</a> Base Button</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>Componente de botão</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-button</span> <span class="token attr-name">rounded</span><span class="token punctuation">></span></span>Rounded<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Default</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">variant</td>
<td style="text-align:left">String</td>
<td style="text-align:left">'default'</td>
<td style="text-align:left">Type of button</td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">click</td>
<td style="text-align:left">Element</td>
<td style="text-align:left">Event is call on click button</td>
</tr>
</tbody>
</table>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you want to change the color scheme of the buttons, change the
values of the following variables</p>
</div>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$variants</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">default</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">,</span> <span class="token property">primary</span><span class="token punctuation">:</span> #0084ff<span class="token punctuation">,</span> <span class="token property">secondary</span><span class="token punctuation">:</span> #e96900<span class="token punctuation">,</span> <span class="token property">success</span><span class="token punctuation">:</span> #43A047<span class="token punctuation">,</span> <span class="token property">danger</span><span class="token punctuation">:</span> #E53935<span class="token punctuation">,</span> <span class="token property">warning</span><span class="token punctuation">:</span> #FFB300<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$variantColors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">default</span><span class="token punctuation">:</span> #333<span class="token punctuation">,</span> <span class="token property">primary</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span> <span class="token property">secondary</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span> <span class="token property">success</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span> <span class="token property">danger</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span> <span class="token property">warning</span><span class="token punctuation">:</span> #222<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$variantName</span>, <span class="token variable">$color</span> in <span class="token variable">$variants</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.btn-<span class="token variable">#{$variantName}</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$variantColors</span><span class="token punctuation">,</span> <span class="token variable">$variantName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
