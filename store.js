/** @module Store */

/** Creates the store
 *  @class
 * */
function createStore(reducer) {
    let state,
        eventListeners = [];

    /** Get the state of the store
     * @returns {object} Returns the state of the store
     * */
    this.getState = () => state;

    /** Event Handler for listening to changes to the state
     * @param {function} event Callback to call when the state changes
     * @returns {function} Returns a function that can be used to remove the listener
     * */
    this.listenFor = event => {
        eventListeners.push(event);

        return () => {
            eventListeners = eventListeners.filter(thisEvent => thisEvent !== event)
        }
    };

    /** Updates the state
     *  @param {object} action - Action creator with the action type and if adding, an object
     * */
    this.dispatch = action => {
        state = reducer(state, action) ;
        eventListeners.forEach(listener => listener(state))
    };
}

export default createStore;