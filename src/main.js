import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database"
import componentsUI from '@/components/UI'
import directives from '@/directives'

const firebaseConfig = {
    apiKey: "AIzaSyBW5IVcT0sQ2Er74kK6Pi4lPa6K_byRjoA",
    authDomain: "fb-project-1-ea635.firebaseapp.com",
    projectId: "fb-project-1-ea635",
    storageBucket: "fb-project-1-ea635.appspot.com",
    messagingSenderId: "222742429784",
    appId: "1:222742429784:web:04fa2cbaf351928aca0a2d",
    measurementId: "G-2F8MESRF12",
    databaseURL: "https://fb-project-1-ea635-default-rtdb.firebaseio.com"
  };
const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);

const app = createApp(App)

componentsUI.forEach(component => {
    app.component(component.name, component)
})
directives.forEach(directive => {
  app.directive(directive.name, directive)
})

app.use(store).use(router).mount('#app')
