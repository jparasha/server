//authReducer
import { FETCH_USER } from '../actions/types';
export default function (state = null, action) {

    //console.log(action);
    //console.log('--fetchuserFrom authReducer--', FETCH_USER, action.type);
    switch (action.type) {

        case FETCH_USER:{
            //console.log('CASE : FETCH_USER ', state, action.payload);
            return action.payload || false;
        }
        
        default:
            return state;

    }
}