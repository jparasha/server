import axios from 'axios';
import { FETCH_USER } from './types';

console.log('fetchuserFrom Action', FETCH_USER);
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    //dispatch({ type: FETCH_USER, payload: res.data });
    var result= {
        type: FETCH_USER,
        payload : res.data
    };
    console.log(result);
    return result;
};

/* export const fetchUser = () => {
    return function() {
        var res = axios.get('/api/current_user')
         .then( 
            { type : FETCH_USER, payload : res}
            
         );
    }
};
 */