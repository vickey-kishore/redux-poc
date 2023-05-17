import { combineReducers } from 'redux';

import characters from './characterReducer'
import heroes  from './heroesReducer';

//create combine reducer
const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;