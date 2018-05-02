import * as types from "../mutitions-type";
const login = {
    state:{
        userName:'admin'
    },
    mutations:{
        [types.USER_NAME](state,msg){
            state.userName = msg;
        }
    },
    actions:{
        login({commit},userName){
            commit(types.USER_NAME,userName)
        }
    }
}
export default login