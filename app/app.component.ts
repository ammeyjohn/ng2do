import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar/navbar.component';
import {TodoListComponent} from './todo/todo.list/todo.list.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [
    	NavbarComponent,
		TodoListComponent
    ]
})
export class AppComponent { }