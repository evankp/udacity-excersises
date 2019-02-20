let createStore = function(reducer) {
    let state = [],
        eventListeners = [];

    this.getState = () => state;

    this.listenFor = event => {
        eventListeners.push(event);

        return () => {
            eventListeners = eventListeners.filter(thisEvent => thisEvent !== event)
        }
    };

    this.dispatch = action => {
        state = reducer(state, action) ;
        eventListeners.forEach(listener => listener(state))
    }
};

let store =  new createStore(todoList);

store.listenFor(() => {
    console.log('State Changed!')
});

function todoList(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return [...state, {title: action.todo.title, complete: action.todo.description}]
    }
    return state
}

console.log(store.getState());

store.dispatch({type: 'ADD_TODO', todo: {title: 'Get Milk', description: 'none'}});
