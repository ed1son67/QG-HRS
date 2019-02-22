import types from '../types/personalInfo';

// 变量
const state = {
    interest: '',
    motto: '',
    evaluation: '',
    otherMsg: '',
    planAndReason: '',
    oneThing: '',
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