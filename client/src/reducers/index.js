import { combineReducers } from 'redux';
import authReducer from './authReducer';

/* export default combineReducers ({
    
}); */
const rootReducer = combineReducers({
    //weather : WeatherReducer
    auth : authReducer
  });
  
export default rootReducer;