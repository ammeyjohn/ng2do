import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar/navbar.component';
import {TodoListComponent} from './todo/todo.list/todo.list.component';
import {TodoEditComponent} from './todo/todo.edit/todo.edit.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [
    	NavbarComponent,
		TodoListComponent,
		TodoEditComponent
    ]
})
export class AppComponent { }