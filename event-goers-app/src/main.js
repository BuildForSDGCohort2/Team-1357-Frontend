import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//bootstrap integration 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//import materialUiKit 
import './assets/materialUiKit/material-kit.css'

//import firebase 
import { auth } from './utils/firebase.js'

Vue.config.productionTip = false

let app 
auth.onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      router, 
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  if(user){
    store.dispatch('setUserProfile' , user)
  }
})