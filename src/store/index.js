import { combineReducers } from 'redux';

import {movieResults, movieNominated} from './reducers';

// Assign dummy reducer for now; tricks redux.
export default combineReducers({
    results: movieResults,
    nominated: movieNominated
});