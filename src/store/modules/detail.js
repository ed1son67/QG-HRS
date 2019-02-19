import types from '../types/personalInfo';

// 变量
const state = {
    hobby: '',
    motto: '',
    evaluation: '',
    explanation: '',
    reason: '',
    experience: '',
};

const actions = {

};

const mutations = {
    // 获得表单的数据
    update: (state, datas) => {
        Object.assign(state, datas);
    },
};

export default {
    state,
    actions,
    mutations
};