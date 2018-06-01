import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
//const survey = {title : 'my title', subject : 'my sub', recipients :'officesync.jayant@gmail.com', body : 'its body' };
//axios.post ('/api/surveys/', survey);

    const res = await axios.get('/api/current_user');

    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);    
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};