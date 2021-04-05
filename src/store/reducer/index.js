import { combineReducers } from 'redux-immutable';
/* Header-reducer*/
import {reducer as headerReducer} from "../../common/header/store"

const reducer = combineReducers({
    header:headerReducer,
})
export default reducer;
