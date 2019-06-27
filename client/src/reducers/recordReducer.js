import { FETCH_RECORD } from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_RECORD:
            return action.payload;
        default:
            return state;      
    };
};