The webpage URL = https://food-inquiry-web-application-fe.pages.dev/
Miss ORE have a dashboard where she upload recepies and it calories, 
the ROUTE to see the dashboard = https://food-inquiry-web-application-fe.pages.dev/new-recipe
Miss ORE can see all sign-uped users in her dashboard, the ROUTE = https://food-inquiry-web-application-fe.pages.dev/new-recipe/all-users

The endpoint for changing naira(NGN) to dollar($) will be updated soon

I did not see any Free APIS/Service to get Restaurants based on users location
i saw Geocode API, Google map API, Tom-Tom API for but none of them are free

WEBPAGE URL = https://food-inquiry-web-application-fe.pages.dev/







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
