'use strict';

var _actions = require('./actions');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

console.log(store.getState());

// subscribe returns a function that is used to unsubcribe.
// function param is exec everytime state changes.
var unsubscribe = store.subscribe(function () {
  return console.log(store.getState());
});

store.dispatch((0, _actions.addTodo)('Learn react'));
store.dispatch((0, _actions.addTodo)('Learn redux'));
store.dispatch((0, _actions.addTodo)('Write Voting App'));
store.dispatch((0, _actions.toggleTodo)(0));
store.dispatch((0, _actions.toggleTodo)(1));
store.dispatch((0, _actions.setVisibilityFilter)(_actions.VisibilityFilters.SHOW_COMPLETED));

unsubscribe();