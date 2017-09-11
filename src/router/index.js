import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home');
const helloFromVux=r=> require.ensure([],()=>r(require('../components/HelloFromVux')),'helloFromVux')
const event_list = r => require.ensure([], () => r(require('../pages/event_list/event_list')), 'event_list');
const event_detail = r => require.ensure([], () => r(require('../pages/event_detail/event_detail')), 'event_detail');



export default [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'',
          redirect:'/home'
        },
        {
          path:'/home',
          component:home,
        },
        {
          path:'/event_list',
          component:event_list
        },
        {
          path:'/event_detail',
          component:event_detail
        }
      ]
    }
  ]
