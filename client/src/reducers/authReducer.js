//authReducer
import { FETCH_USER } from '../actions/types';
export default function (state = null, action) {

    console.log(action);
    //action unable to be dispatched
    //needs debugging
    console.log('--fetchuserFrom authReducer--', FETCH_USER, action.type);
    switch (action.type) {

        case FETCH_USER:{
            console.log('CASE : FETCH_USER ', state);
            return action.payload || false;
        }
        
        default:
            return state;

    }
}