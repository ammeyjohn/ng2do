import {Injectable} from 'angular2/core';
import {Todo}		from './Todo';
import {TODOS} 		from './mock-todos';

@Injectable()
export class TodoService {

	getTodos() {
		return Promise.resolve(TODOS);
	}

	getTodosCount() {
		return Promise.resolve(TODOS.length);
	}

	getNewTodoId() {
		return new Promise(function(resolve, reject) {
			let maxId = 0;
			for (var todo of TODOS) {
				if (todo.id > maxId) {
					maxId = todo.id;
				}
			}
			resolve(maxId + 1);
		});
	}

	setTodo(content) {
		this.getNewTodoId().then(newId => {			
			let todo = new Todo(newId, content);
			TODOS.push(todo);
			console.log(TODOS);
		});
	}
}