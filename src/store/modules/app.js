import { myAxios } from '../../interaction.js';
import { IP } from '../../interaction.js';


const state = {
    current: 0,
    right: [true, false, false, false, false]
};

const actions = {
    sent: ({rootState}) => {
        const data = {}

        for (const key in rootState) {
            if (rootState.hasOwnProperty(key)) {
                const element = rootState[key];
                for (const index in element) {
                    if (element.hasOwnProperty(index)) {
                        const state = element[index];
                        data[index] = state;
                    }
                }
            }
        }
        // 处理是否是单人组队
        if (data.isSingle == false) {
            data.isSingle = 1;
            data.groupMembers = '';
        }
        else {
            data.isSingle = 0;
            data.groupMembers = data.teammate_1 + ' ' + data.teammate_2 + ' ' + data.teammate_3;
        }
        delete data.teammate_1;
        delete data.teammate_2;
        delete data.teammate_3;

        // 剔除无用数据
        delete data.current;
        delete data.right;

        
        console.log(data.building);
        // 处理宿舍数据
        let hoster = '';
        for (let i = 0; i < data.building.length; i++) {
            hoster += data.building[i]; 
        }
        hoster += data.room;
        delete data.building;
        delete data.room;
        data.hoster = hoster;

        // 处理布尔值选项
        data.isFail = parseInt(data.isFail);
        data.isObey = parseInt(data.isObey);

        console.log(data);

        return myAxios({
            method: 'POST',
            data: data,
            url: '/rec/commit'
        })
       
    }
};

const mutations = {
    initializeSteps: (state, index) => {
        state.current = index;
    },
    nextPage: (state, index) => {
        state.current++;
        state.right[index] = true;
    },
    prevPage: (state)=>{
        state.current--;
    }
    
};

export default {
    state,
    actions,
    mutations
};