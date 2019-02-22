// Todo Action types
const ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO';

// GOAL Action types
const ADD_GOAL = 'ADD_GOAL',
    REMOVE_GOAL = 'REMOVE_GOAL';

/** Add a Todo Item
 * @param {object} todo - Todo to add
 * @returns {object} Returns a reducer object to add to store
 * */
function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

/** Add a Todo Item
 * @param {object} id - id of todo to toggle
 * @returns {object} Returns a reducer object to add to store
 * */
function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

/** Add a Todo Item
 * @param {object} id - id of todo to remove
 * @returns {object} Returns a reducer object to add to store
 * */
function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

/** Add a Todo Item
 * @param {object} goal - Goal to add
 * @returns {object} Returns a reducer object to add to store
 * */
function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

/** Add a Todo Item
 * @param {object} id - id of goal to remove
 * @returns {object} Returns a reducer object to add to store
 * */
function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

export {
    addTodo,
    toggleTodo,
    removeTodo,
    addGoal,
    removeGoal
}