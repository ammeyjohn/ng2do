import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar/navbar.component';
import {TodoComponent} from './todo/todo.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [
    	NavbarComponent,
    	TodoComponent
    ]
})
export class AppComponent { }