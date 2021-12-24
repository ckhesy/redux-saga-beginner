const createStore = (reducer) => {
  let state = {};
  let listeners = []
  const getState = () => {
    return state;
  }
  const dispatch = (action) => {
    state = reducer(action)
    for(let i = 0;i<listeners.length;i++) {
      const listener = listeners[i];
      listener()
    }
  }
  const subscribe = (callback) => {
    listeners.push(callback)
  }
  const store = {
    getState,
    dispatch,
    subscribe
  }
  return store;
}

const applyMiddleware = () => {

}

https://segmentfault.com/a/1190000023084074