import characters_json from '../data/character.json';


//helper function for second reducer
export function createCharacter(id) {
    let character = characters_json.find(c => c.id === id);
    return character;
}
