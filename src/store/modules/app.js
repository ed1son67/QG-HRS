import { myAxios } from '../../interaction.js';

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

        delete data.current;
        delete data.right;

        console.log(data);

        myAxios({
            method: 'POST',
            url: '',
            data: data
        }).then(function(res){
            
        }).catch(function(err){
            
        });
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