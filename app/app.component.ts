import {Component} from 'angular2/core';
import {TodoComponent} from './todo/todo.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [
    	TodoComponent
    ],
    styles:[`
		header.app h1 {
			margin-top: 50px;
			width: 100%;
			font-size: 100px;
			font-weight: 100;
			text-align: center;
			color: rgba(175, 47, 47, 0.15);
			-webkit-text-rendering: optimizeLegibility;
    		   -moz-text-rendering: optimizeLegibility;
					text-rendering: optimizeLegibility;
		}    
    `]
})
export class AppComponent { }