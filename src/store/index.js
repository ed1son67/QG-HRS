import Vue from 'vue'
import Vuex from 'vuex'

import personalInfo from './modules/personalInfo'
import study from './modules/study'
import apply from './modules/apply'
import detail from './modules/detail'
import app from './modules/app'




Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
        personalInfo,
        study,
        apply,
        detail,
        app
	}
})