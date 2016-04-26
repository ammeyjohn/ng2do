import {Component} 	 from 'angular2/core';
import {Todo} 		 from './todo';
import {TodoService} from './todoService';

@Component({
    selector: 'todo',
    templateUrl: 'app/todo/todo.template.html',
    providers: [ TodoService ],
    styles: [``]
})

export class TodoComponent {

}
