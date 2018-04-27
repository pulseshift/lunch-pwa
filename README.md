# lunch-pwa

> A progressive Web App for Offline-Employees to see their daily lunch.

## How to use notifications
``` bash
# build for production with minification
npm run build

# you need a local http server, if not installed yet use
npm install -g serve

# run local server
serve dist
```

To trigger a notifications, open the Postman collection (Firebase.postman_collection.json) in Postman and execute the request.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build for production, move firebase service worker accordingly and deploy to firebase
npm run deploy
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## References
+ [Vue.js 2 Documentation](https://vuejs.org/v2/guide/)
+ [Vuetify](https://vuetifyjs.com/en/)
+ [Vuex Documentation](https://vuex.vuejs.org/en/installation.html)
+ [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) 
