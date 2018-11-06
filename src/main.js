import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Story from './components/Story.vue'
import Hello from './components/Hello.vue'

Vue.use(Router)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'home',
     component: Hello,
   },
   {
     path: '/story/:id',
     name:'story',
     component: Story,
     props: true,
   },
 ]
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})