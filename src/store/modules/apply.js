
// 变量
const state = {
    group: 1,
    isObey: 1,
    isSingle: false,
    teammate_1: '',
    teammate_2: '',
    teammate_3: ''
};

const actions = {

};

const mutations = {
    // 获得表单的数据
    update: (state, datas) => {
        Object.assign(state, datas);
    },
    resetTeam: (state) => {
        state.teammate_1 = '';
        state.teammate_2 = '';
        state.teammate_3 = '';
    }
};

export default {
    state,
    actions,
    mutations
};