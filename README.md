#Steps

## 1 Install laravel from curl command line with mysql and devcontianer

```bash
curl -s "https://laravel.build/example-app?with=mysql&devcontainer" | bash
```

## 2 Add alias to bashrc

```bash
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
```

## 3 Start container
```bash
sail up -d
```

## 4 Run migration
```bash
sail php artisan migrate
```

##

Creamos un app.blade.php en resources/views/layouts/app.blade.php a partir de welcome.blade.php

Modificamos la ruta de la vista en web.php para que apunte a layouts/app.blade.php


instalamos 
npm install vue vue-loader
npm install --save-dev @vitejs/plugin-vue

ir al archiv vite.config.js y agregar el plugin de vue
```js
import vue from '@vitejs/plugin-vue';
```

y en los exports agregar el plugin
``` js
vue({
    template: {
        transformAssetUrls: {
            base: null,
            includeAbsolute: false,
        },
    },
    refresh: true,
}),
```

