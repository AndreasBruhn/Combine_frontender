import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';

// 1
// install vuex: npm i -S vuex@4

// 2
// create folder 'src/store'
// create file 'src/store/index.js'

// 3
// open 'src/store/index.js' add code

// 4
// import store to the current file (main.js)
// .use store on the app

// 5
// clean up boilerplate => delete HelloWorld.vue + logo.png

// 6
// Add new component file => TodoNew.vue
// Add code to that file

// 7
// Define store state in index.js

import store from './store'; // add store module

const app = createApp(App);
app.use(store);
app.mount('#app');
