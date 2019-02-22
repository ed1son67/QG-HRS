
// 变量
const state = {
    achievementPoint: '',
    isFail: '',
    cSocre: '',
    cExperiment: '',
    englishScore: '',
    rewardsAndPunishments: ''
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