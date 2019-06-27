import axios from 'axios';
import { FETCH_ACCOUNT, FETCH_RECORD, FETCH_USER, DELETE_RECORD } from './types';

export const fetchAccount = (acct_id = null) => async dispatch => {
    if (acct_id){
        const res = await axios.get('/api/account', {acct_id});
        dispatch({ type: FETCH_ACCOUNT, payload: res.data });
    }
    const res = await axios.get('/api/account');

    dispatch({ type: FETCH_ACCOUNT, payload: res.data });
};

export const fetchRecord = () => async dispatch => {
    const res = await axios.get('/api/record');

    dispatch({ type: FETCH_RECORD, payload: res.data });
};

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteRecord = (record_id) => async dispatch => {
    await axios.delete('/api/record', {data:{ record_id: record_id }});
    const res = await axios.get('/api/record');
    dispatch({ type: FETCH_RECORD, payload: res.data });
};

export const submitRecord = values => async dispatch => {
    const res = await axios.post('/api/record', values);
    dispatch({ type: FETCH_USER, payload: res.data});
};