import {Component, OnInit} 	from 'angular2/core';
import {Todo} 		from '../todo';
import {TodoService} from '../todoService';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/todo.list/todo.list.template.html',
    providers: [TodoService],
    styles: [``]
})

export class TodoListComponent implements OnInit { 
	todos: Todo[];

	constructor(private _todoService: TodoService) { }

	ngOnInit() {
		this.getTodos();
	}

	getTodos() {
		this._todoService.getTodos().then(todos => this.todos = todos);	
	}

	onMouseEnter(evt) {
		console.log("onMouseEnter");
	}
}