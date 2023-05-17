import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

//second reducer
function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_CHARACTER:
            let newheroes = state.filter(item => item.id !== action.id);
            return newheroes;
        default:
            return state;
    }
}



export default heroes;