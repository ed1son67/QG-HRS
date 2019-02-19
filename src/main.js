// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'
import '../static/normalize.css'
import store from './store'

import { Button, Steps, Form, Cascader, Checkbox, Col, Input, Radio, Row, Select, Switch, Tooltip, Icon} from 'ant-design-vue';
// Vue.component(Button.name, Button);
// Vue.component(Steps.name, Steps);
// Vue.component(Form.name, Form);

Vue.use(Button);
Vue.use(Steps);
Vue.use(Form);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Tooltip);
Vue.use(Icon);

// Vue.use(Antd);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})




router.beforeEach(function (to, from, next) {
    console.log(store.state.app.current);
    console.log(to.name);
    
    let current = store.state.app.current;
    let right =  store.state.app.right;

    

    const path = ['personalInfo', 'study', 'detail', 'apply', 'result'];
    let toIndex = path.indexOf(to.name);

    if (right[toIndex] == true) {
        next();
    } else 
        next(false);

    document.title = to.meta.title;
});

