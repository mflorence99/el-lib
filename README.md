# EL-Lib

EL-Lib is a library of common Angular components, directives, pipes and so on that I use in my Electron projects. I don't expect anyone else will ever use this library as-is but you may find some of its ideas and techniques useful. But just in case ...

```sh
npm install --save ellib
```

## Components

```typescript
import { LibModule } from 'ellib/lib/module';

@NgModule({
  imports: [LibModule]
})
```

### AnimatedRouterOutletComponent

Just in in place of `<router-outlet>` for a slide-in effect on route transitions.

```html
  <lib-animated-router-outlet>
  </lib-animated-router-outlet>
```

### DrawerContainerComponent and DrawerPanelComponent

Wrap content so that drawers of related content slide out on command from the top, right, bottom and/or left. The drawers are modal. Examples might be filters, preferences, CRUD support and the like.

```html
<lib-drawer-container>

  <some-toolbar (click)="prefsDrawer.open()">
  </some-toolbar>

  ...

  <lib-drawer-panel
    #prefsDrawer
    position="right">

    ...

  </lib-drawer-panel>

</lib-drawer-container>
```

### Markdown Component

Wrap arbitrary markdown, which will be converted to HTML as the component loads.

```html
<lib-markdown>
# Hello, World!
</lib-markdown>  
```

Requires [`marked`](https://www.npmjs.com/package/marked) which might be loaded via `.angular-cli.json`.

```json
"scripts": [
  "../node_modules/marked/marked.min.js"
],
```

## Directives

## Pipes

## Decorators

### @AutoUnsubscribe

Annotates a components so that any RxJS subscriptions are automatically unsubscribed when the component is destroyed.

```typescript
import { AutoUnsubscribe } from 'ellib/lib/decorators/auto-unsubscribe';
import { LifecycleComponent } from 'ellib/lib/components/lifecycle';

@Component({...})
@AutoUnsubscribe()
export class MyComponent extends LifecycleComponent {

  private mySubscription: Subscription;
  private anotherSubscription: Subscription;

  // if non null when the component is destroyed, both will be unsubscribed
  // automatically -- no other action needed

}

```

## Animations

## Utilities
