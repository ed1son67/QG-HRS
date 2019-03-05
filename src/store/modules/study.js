
// 变量
const state = {
    achievementPoint: '',
    isFail: '',
    sc: '',
    exp: '',
    englishScore: '',
    rewardsAndPunishments: '',
    rank: ''
};


const mutations = {
    // 获得表单的数据
    update: (state, datas) => {
        Object.assign(state, datas);
    },
};

export default {
    state,
  
    mutations
};