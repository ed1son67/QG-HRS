import Vue from 'vue'
import Router from 'vue-router'
import apply from '@/components/apply'
import personalInfo from '@/components/PersonalInfo'
import study from '@/components/Study'
import detail from '@/components/Detail'
import result from '@/components/Result'



Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/apply',
        name: 'apply',
        component: apply,
        meta: {title: '应征方向 | QG Studio'}
    },
    {
        path: '/personalInfo',
        name: 'personalInfo',
        component: personalInfo,
        meta: {title: '个人信息 | QG Studio'}
    },
    {
        path: '/study',
        name: 'study',
        component: study,
        meta: {title: '学习情况 | QG Studio'},
        
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail,
        meta: {title: '实践经历 | QG Studio'}
    },
    {
        path: '/result',
        name: 'result',
        component: result,
        meta: {title: '加入我们 | QG Studio'}
    },
    {
        path: '*', 
        redirect: '/personalInfo'
    },
   
  ]

});



