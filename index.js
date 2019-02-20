function createStore(reducer) {
    let state = [],
        eventListeners = [];

    const getState = () => state;

    const listenFor = event => {
        eventListeners.push(event);

        return () => {
            eventListeners = eventListeners.filter(thisEvent => thisEvent !== event)
        }
    };

    const dispatch = action => {
        state = reducer(state, action) ;
        eventListeners.forEach(listener => listener(state))
    };

    return {
      getState,
      listenFor,
      dispatch
    }
};

let store =  createStore(todoList);

store.listenFor(() => {
    console.log('State Changed! It is: ', store.getState())
});

function todoList(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return [...state, {title: action.todo.title, complete: action.todo.description}]
    }
    return state
}

console.log(store.getState());

store.dispatch({type: 'ADD_TODO', todo: {title: 'Get Milk', description: 'none'}});
