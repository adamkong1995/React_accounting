import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import accountReducer from './accountReducer';
import authReducer from './authReducer';
import recordReducer from './recordReducer';

export default combineReducers({
    account: accountReducer,
    auth: authReducer,
    form: reduxForm,
    record: recordReducer
});