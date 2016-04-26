import {Injectable} from 'angular2/core';
import {TODOS} 		from './mock-todos';

@Injectable()
export class TodoService {

	getTodos() {
		return Promise.resolve(TODOS);
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

	setTodo(todo) {
		this.getNewTodoId().then(newId => {			
			let copied = Object.assign({ id: newId }, todo);
			TODOS.push(copied);
		});
	}
}