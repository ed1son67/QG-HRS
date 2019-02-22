
// 变量
const state = {
    name: '',
    tel: '',
    email: '',
    qq: '',
    majorAndClass: '',
    host: [],
    room: '',
    id: '',
    sex: '',
    age: '',
    post: ''
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