
// 变量
const state = {
    gpa: '',
    fail: '',
    CTheoryScore: '',
    CExperScore: '',
    EnglishScore: '',
    prize: ''
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