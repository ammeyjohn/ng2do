import {Injectable} from 'angular2/core';
import {TODOS} 		from './mock-todos';

@Injectable()
export class TodoService {

	getTodos() {
		return Promise.resolve(TODOS);
	}

	getMaxTodoId() {
		return new Promise(function(resolve, reject){
			let maxId = 0;
			for(var todo of TODOS) {
				if(todo.id > maxId) {
					maxId = todo.id;
				}
			}
			resolve(maxId);
		});
	}

	setTodo(todo) {
		this.getMaxTodoId().then(function(maxId) {
			var copied = Object.assign({ id: maxId+1 }, todo);
			TODOS.push(copied);
		});
	}
}