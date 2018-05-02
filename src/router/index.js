import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入组件方法
const addRoute = (path)=>{
  //判断是页面还是组件
  let pageType= path.split('-')[0];
  let pageName = path.split('-')[1];
  let pagePath=pageType=='p'?'pages':'views';
  return (resolve) => require([`@/${pagePath}/${pageName}.vue`], resolve);
}

export default new Router({
  scrollBehavior:() => ({ y: 0 }),
  routes: [
    {
      path:'/',
      redirect:'login'
    },
    {
      path: '/login',
      name: 'login',
      component: addRoute('p-login')
    },
    //图表模块（默认path是index）
    {
      path: '/index',
      meta:{isnav:1},//是不是渲染左部菜单
      redirect:'/index/lineCharts',
      name: '图表',
      component: addRoute('p-home'),
      children:[
        {path:'lineCharts',name:'折线图',component: addRoute('v-lineCharts')},
        {path:'bieCharts',name:'柱状图',component: addRoute('v-bieCharts')}
      ]
    },
    //表格模块
    {
      path: '/table',
      meta:{isnav:1},//是不是渲染左部菜单
      name: '表格',
      component: addRoute('p-home'),
      children:[
        {path:'table1',name:'普通表格',component: addRoute('v-table1')},
        {path:'table2',name:'带分页的表格',component: addRoute('v-table2')}
      ]
    },
    //地图模块
    {
      path: '/map',
      meta:{isnav:1},//是不是渲染左部菜单
      name: '地图',
      component: addRoute('p-home'),
      children:[
        {path:'gaodeMap',name:'高德地图',component: addRoute('v-gaodeMap')},
        {path:'baiduMap',name:'百度地图',component: addRoute('v-baiduMap')},
        {path:'gugeMap',name:'谷歌',component: addRoute('v-gugeMap')}
      ]
    },
    //三级菜单测试路由配制
    {
      path: '/one',
      meta:{isnav:1},//是不是渲染左部菜单
      name: '一级',
      component: addRoute('p-home'),
      children:[
        {
          path:'two',
          redirect:"/one/two/three",
          name:'二级',
          component: addRoute('v-oneTwoThree'),
          children:[
            {path:'three',name:'三级'}
          ]
        },
        {
          path:'two1',
          name:'只有二级',
          component: addRoute('v-oneTwo1')
        }
      ]
    },
  ]
})
