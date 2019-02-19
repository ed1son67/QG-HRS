
// 变量
const state = {
    direction: -1,
    adjust: -1
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