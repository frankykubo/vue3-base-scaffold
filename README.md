<a href="#features">
    <img src="git/header.svg" alt="css-in-readme" />
</a>
<br>

Vue3 ready-to-run and ready-to-develop app packed with useful tools based on <a href="https://github.com/vuejs/vue-cli" target="_blank">@vue/cli</a> (webpack).

# <b id="features">Features</b>

### <b>Typescript</b>
Creating this scaffold, important thing for me was to use typescript. Project comes also with *.eslintrc.js*, which can help you produce some good coding habits to produce better quality code.

### <b>Pinia</b>
As a project global store, this scaffolding use Pinia. I have a project with Vue3, typescript and Vuex, but Vuex will be deprecated in the near future and if you want to configure it to strictly use types, it is impractical and slowes down work. That is why I've chosen Pinia, which support types by default and it is working really good.

https://pinia.vuejs.org/

### <b>Tailwind CSS</b>
If you don't know Tailwind, you surely will and you will like it. Class-based lightweight styling I fell love with on the first glance. Really speeds up your styling. Hot reaload also works. Still, if you do want to use classic css/sass styles, you can inside components.

#### <b>Custom tailwind styles</b>
You can create custom Tailwind styles in `@/src/assets/styles/tailwind.scss` file, see tailwind docs. Tailwind configuration is editable in root folder's `tailwind.config.js` file.

https://tailwindcss.com/

### <b>i18n</b>
Multi-language websites are nothing special these days. That's why I included i18n package. Also, there are separate folder for each language component and language as particular. Examples can be found in lang folder.

<small>If you are using JetBrains IDEs, I recommend using plugin Easy i18n, which works perfectly for this structure and you can see translations as a table and also you can edit it, create new translations.</small>

https://github.com/intlify/vue-i18n-next

### <b>SVG Components</b>
Basic thing, but there is no information about it in official documentation. It is included in this scaffolding, as well as in-code example.

### <b>Font awesome 6</b>
If you dont want to bother yourself with svg icons, there is option named font awesome. Easy-to-use, free alternative for a great number of icons you can find on their website. You can include new icons in `@/helpers/bootstrap/icons.ts`, where you need to import it and then add to export default function.

https://fontawesome.com/icons

### <b>Router with separate route index</b>
Bothered with IDE not recommending any routes, when you want to use `<router-link>` with name attribute? Just include *{ route_index }* from `@/router/routes.ts` and you have fully typed object containing routes and their details. Default vue-router with History API is used in this project.

### <b>Examples</b>
Project comes with basic structure. When you open *App.vue* or *HelloWorld.vue*, you will see everything written above in practical use. 

## Project setup
```
npm install -g @vue/cli
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
