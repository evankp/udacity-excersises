const ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    ADD_GOAL = 'ADD_GOAL',
    REMOVE_GOAL = 'REMOVE_GOAL';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

export function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}