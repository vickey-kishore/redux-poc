export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'


//action creator
export function addCharacterById(id) {

    //action object
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action;

}

//action creator
export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}