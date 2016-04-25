import {Component, OnInit} 	from 'angular2/core';
import {Todo} 				from '../todo';
import {TodoService} 		from '../todoService';

@Component({
    selector: 'todo-edit',
    templateUrl: 'app/todo/todo.edit/todo.edit.template.html',
    providers: [TodoService]
})
export class TodoEditComponent {

	todo: Todo = new Todo();

	constructor(private _todoService: TodoService) {}

	onSubmit() {
		this._todoService.setTodo(this.todo);
		this.todo = new Todo();
	}

}