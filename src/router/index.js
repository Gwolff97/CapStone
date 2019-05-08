import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Dogs from '@/components/Dogs'
import AddDog from '@/components/AddDog'
import NavBar from '@/components/NavBar'
import AboutUs from '@/components/AboutUs'
import EditDog from '@/components/EditDog'
import AdoptDog from '@/components/AdoptDog'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
      path: '/dogs',
      name: 'Dogs',
      component: Dogs
    },
    
    {
        path: '/add',
        name: 'AddDog',
        component: AddDog
    },
    
    {
      path: '/navtest',
      name: 'Navy',
      component: NavBar
    },
    {
      path: '/aboutus',
      name: 'AbousUs',
      component: AboutUs
    },
    {
      path: '/Edit',
      name: 'EditDog',
      component: EditDog,
      props: true
    },

    {
      path: '/Adopt',
      name: 'AdoptDog',
      component: AdoptDog,
      props: true
    },

    
    {
      path: '*',
      redirect: '/'
    }
  ]
})
