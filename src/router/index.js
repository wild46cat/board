import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/model/page1'
import Page2 from '@/components/model/page2'
import Counter from '@/components/counter/counter'
import ChartExample from '@/components/chart/chartexample'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'home',
      component: HelloWorld,
      children: [
        {name: 'page1', path: '/home/page1', component: Page1},
        {name: 'page2', path: '/home/page2', component: Page2},
        {name: 'counter', path: '/home/counter', component: Counter},
        {name: 'chartexample', path: '/home/chartexample', component: ChartExample}
      ]
    }

  ]
})
