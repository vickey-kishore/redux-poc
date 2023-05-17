import characters_json from '../data/character.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

//first reducer
function characters(state = characters_json, action) {

    //depending upon action, we return different representation of the state
    switch (action.type) {
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
           let newcharacters = [...state, createCharacter(action.id)];
            return newcharacters;
        default:
            return state;
    }
}

export default characters;