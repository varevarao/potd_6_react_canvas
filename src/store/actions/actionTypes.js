/**
 * Reduces an array of action types, into an object keyed by the types,
 * and mapped to a type prefixed string.
 */
const mapActionTypes = (typeArray, prefix) => typeArray.reduce(
    (actions, curr) => {
        actions[curr] = `${prefix}:${curr}`
        return actions;
    }, {});

/**
 * App actions
 */
export const app = mapActionTypes([
    'START_LOAD',
    'END_LOAD',
    'SHOW_LOADER',
    'HIDE_LOADER'
], 'APP')

/**
 * Grid actions
 */
export const grid = mapActionTypes([
    'SETUP'
], 'GRID');

/**
 * Canvas actions
 */
export const canvas = mapActionTypes([
    'ADD_CHILDREN',
    'ADD_CHILD',
    'MOVE_CHILD'
], 'CANVAS');