/* action types */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/* visibility constants */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// ecmaScript 2015 allows shorthand syntax
// for older, would need to be {type: 'ADD_TODO', text: text}

let nextTodoId = 0;

export function addTodo(text) {
	return { type: ADD_TODO, text, id: nextTodoId++ };
}

export function toggleTodo(index) {
	return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter };
}