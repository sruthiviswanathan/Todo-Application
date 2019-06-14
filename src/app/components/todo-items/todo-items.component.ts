import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
 @Input()
 todo : Todo
 @Output()
 deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
   
  }

  //set dynamic classes
  setClasses(){
    let classes ={
      todo:true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo:Todo){
    //changing in UI
    todo.completed = !todo.completed;
    //Changing in server
    this.todoService.updateCompleted(todo).subscribe();
  }
  onDelete(todo:Todo){
    this.deleteTodo.emit(todo);
  }
}
