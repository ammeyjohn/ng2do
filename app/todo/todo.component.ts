import {Component} 	 from 'angular2/core';
import {Todo} 		 from './todo';
import {TodoService} from './todoService';

@Component({
    selector: 'todo',
    templateUrl: 'app/todo/todo.template.html',
    providers: [ TodoService ],
    styles: [`
		section.todo-new {			
			line-height: 1.4em;
			background: #fff;
			color: #4d4d4d;
			min-width: 230px;
			max-width: 550px;
			margin: 50px auto;
			font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
			font-weight: 300;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            		0 25px 50px 0 rgba(0, 0, 0, 0.1);
			-webkit-font-smoothing: antialiased;
			   -moz-font-smoothing: antialiased;
				    font-smoothing: antialiased;			
		}

    	section.todo-new input {
			padding: 16px 16px 16px 30px;
			border: none;
			box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
			width: 100%;
			font-size: 24px;
			font-style: italic;
			line-height: 1.4em;	
			-webkit-font-smoothing: antialiased;
			   -moz-font-smoothing: antialiased;
					font-smoothing: antialiased;	
    	}
    `]
})

export class TodoComponent {

}
