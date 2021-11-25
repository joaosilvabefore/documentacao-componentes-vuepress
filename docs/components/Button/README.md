### How to use the BaseButton component

The `BaseButton` Component is already installed globally.

It extends the [BootstrapVue Button Component](https://bootstrap-vue.org/docs/components/button) with the `Academy UX` applied.

It receives all of the props of the bootstrap component, plus some custom one created to apply the UX.

It emits all of the DOM events of a button and from the bootstrap component.

> The `variant` prop receives the color variants defined in the `$theme-colors` scss variable. To apply gradients or other colors (the one defined in the `$colors` variable), you can omit the `variant` prop and pass the background class maped to the color you want - like: `class="bg-gradient-primary"` or `class="bg-red"`.

### --- Examples ---

_Example: large button_

```html
<base-button variant="secondary" size="lg">
  Salvar
</base-button>
```

_Example: small button (need better UX applied)_

```html
<base-button variant="info" size="sm">
  Salvar
</base-button>
```

_Example: button with gradient_

_obs: gradient still need some fixes to better reflect UX._

```html
<base-button class="bg-gradient-primary">
  Salvar
</base-button>
```

_Example: button with icon_

```html
<base-button variant="primary" icon="fas fa-plus">
  Adicionar
</base-button>
```

_Example: button with only icon_

```html
<base-button variant="primary" icon="fas fa-plus"></base-button>
```

_Example: elevated button_

```html
<base-button variant="primary" icon="fas fa-plus" elevated>
  Adicionar
</base-button>
```

_Example: link button_

```html
<base-button variant="link" icon="fas fa-plus">
  Adicionar
</base-button>
```

_Example: ghost button_

```html
<base-button variant="outline-light">
  Cancelar
</base-button>
```

_Example: loading button_

```html
<base-button variant="danger" :loading="true">
  Login
</base-button>
```
@[code js{1-8}](./snipets.js)