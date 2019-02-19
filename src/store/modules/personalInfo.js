
// 变量
const state = {
    name: '',
    phone: '',
    email: '',
    qq: '',
    class: '',
    building: [],
    room: '',
    userID: '',
    gender: -1
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