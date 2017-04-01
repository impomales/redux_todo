import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import todoApp from './reducers';
import { createStore } from 'redux';

let store = createStore(todoApp);

console.log(store.getState());

// subscribe returns a function that is used to unsubcribe.
// function param is exec everytime state changes.
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn react'));
store.dispatch(addTodo('Learn redux'));
store.dispatch(addTodo('Write Voting App'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();