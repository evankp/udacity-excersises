const ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    ADD_GOAL = 'ADD_GOAL',
    REMOVE_GOAL = 'REMOVE_GOAL',
    RECEIVE_DATA = 'RECEIVE_DATA',
    todoAPI = window.API;

export const getInitalValues = () => dispatch => {
    return Promise.all([
        todoAPI.fetchTodos(),
        todoAPI.fetchGoals()
    ]).then(([todos, goals]) => {
        dispatch(receiveData(todos, goals))
    })
};

export const handleAddItem = (name, type, callback) => dispatch => {
    if (type === 'todo') {
        return todoAPI.saveTodo(name)
            .then(todo => {
                dispatch(addTodo(todo));
                callback()
            })
            .catch(() => {
                alert('There was an error.')
            })
    } else {
        return todoAPI.saveGoal(name)
            .then(goal => {
                dispatch(addGoal(goal));
                callback()
            })
            .catch(() => {
                alert('There was an error')
            })
    } // end else if
}; // end handleAddItem

export const handleDeleteItem = (item, type) => dispatch => {
    if (type === 'todo') {
        dispatch(removeTodo(item.id));

        return todoAPI.deleteTodo(item.id)
            .catch(() => {
                dispatch(addTodo(item));
                alert('An error occurred')
            })
    } else {
        dispatch(removeGoal(item.id));

        return todoAPI.deleteGoal(item.id)
            .catch(() => {
                dispatch(addGoal(item));
                alert('An error occurred')
            })
    } // end else if
}; // end handleDeleteItem

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

export function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}