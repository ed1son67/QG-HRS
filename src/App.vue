<template>
  <div id="app">
    <header>
        <div class="content-container">
            <div class="logo-container">
                <img src="./assets/images/logo.png" alt="">
                <span>QG Studio</span>
            </div>
            <p>你好！同学</p>
        </div>
    </header>
    <div class="page-container" :style="styleObj">
        <div class="page" >
            <div class="tittle">编辑简历</div>
            <div class="step">
                <a-steps :current="current">
                    <a-step v-for="item in steps" :key="item.title" :title="item.title" />
                </a-steps>
            </div>
            <transition name="fade" mode='out-in'>
                <router-view></router-view>
            </transition>
        </div>
    </div>
    <footer>
        <p>GuangDong University Of Technology, GUANGZHOU, CHINA</p>
        <p>Copyright © 2019 QG Studio.Proudly created with.</p>
    </footer>
  </div>
</template>

<script>
// console.log('join us!');
// console.log('QG Studio');
// console.log('no quest! no gain!');

import personalInfo from './components/PersonalInfo.vue';
import study from './components/Study.vue';
import apply from '@/components/apply.vue';
import detail from '@/components/Detail.vue';
import { mapState } from 'vuex';


export default {
    name: 'App',
    data() {
        return {
            styleObj: {
                height: ''
            },
            transitionName: 'fade',
            steps: [{
                title: '基本信息',
                }, {
                title: '学习情况',
                }, {
                title: '实践经历',
                }, {
                title: '应征方向',
            }],
        }
    },
    computed: {
        ...mapState({   
                current: state => state.app.current,
            })
    },
    components: {
        personalInfo,
        study,
        apply,
        detail,
    },
    beforeCreate() {
        // 刷新网页时返回到初始页面
        this.$router.push('personalInfo')
    },
    mounted(){
        // 路由系统兼容IE浏览器
        function checkIE(){
            return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
        }
        if (checkIE()) {
            window.addEventListener('hashchange', () => {
                var currentPath = window.location.hash.slice(1);
                if (this.$route.path !== currentPath) {
                    this.$router.push(currentPath)
                }
            }, false)
        }
        // this.styleObj.height = document.documentElement.clientHeight - 85 * 2 +'px';
       
    },
    created() {
        
    },
    watch: {
    },
    methods: {

    }
}
</script>

<style>
.page-container {
    position: relative;
    width: 950px;
    margin: 0 auto;
}
#app {
    height: 100%;
    position: relative;
   
}
header {
    height: 85px;
    width: 100%;
    background-color: #0068f1;
    color: #fff;
}

.content-container {
    width: 1150px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    line-height: 85px;
    justify-content: space-between
}
.content-container p {
    float: right;
    font-size: 16px;
    margin-right: 70px;
}
.logo-container img {
    margin-top: -15px;
    height: 85px;
}
.logo-container span {
    font-size: 35px;
    font-weight: 500;
};
.page {
    width: 100%;
    margin: 0 auto;
}
.step {
    margin: 38px 0;
}
.tittle {
    font-size: 26px;
    padding: 40px 0 0px 22px;
    position: relative;
    line-height: 26px;
    color: #3a3a3a;
}
.tittle::before {
    content: '';
    height: 27px;
    width: 3px;
    background-color: #0068f1;
    position:absolute;
    left: 0;
    top: 41px;
}
footer {
    background-color: rgb(250, 250, 250);
    height: 85px;
    border: 1px solid #d9d9d9;
    /* position:fixed;
    bottom: 0;
    width: 100%; */
    text-align: center;
}
footer p {
    margin: 12px 0;
}
.button-contaienr {
    position:absolute;
    left: 0px;
    bottom: 50px;
}
.ant-form-item-label {
    text-align: left;
}
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    overflow: auto;
}

::-webkit-scrollbar-thumb {
    background-color: #e6e6e6;
    min-height: 25px;
    min-width: 25px;
    border: 1px solid #e0e0e0
}
</style>
