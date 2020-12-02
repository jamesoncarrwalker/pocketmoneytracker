export default {
    namespaced:true,

    state: {

        children: [


        ],

        lastUpdate:null,

        activeChild: null
    },

    getters: {

        getAllChildren: state => state.children,

        getCurrentChild: state => {

            if(state.children.length < 1) return {};
            if(state.children.length = 1) return state.children[0];

            if(state.activeChild) {
               return state.children.filter(child => child.id === state.activeChild)

            }

            return state.children[0];
        }


        //result = words.filter(word => word.length > 6)
    },

    actions: {

    },

    mutations: {

    }
}