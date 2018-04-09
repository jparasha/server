import { FETCH_USER } from '../actions/types';
export default function (state = null, action) {

    console.log(action);
    //action unable to be dispatched
    
    switch (action.type) {

        case FETCH_USER:
            console.log('CASE : FETCH_USER ', state);
            return action.payload || false;
        
        default:
            return state;

    }
}