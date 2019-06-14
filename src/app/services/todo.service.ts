import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';  
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
  'Content-Type': 'application/json'
})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = "https://jsonplaceholder.typicode.com/todos"
  todosLimit:string = "?_limit=5";

  constructor(private http:HttpClient) { }

  //getting todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosUrl+this.todosLimit);
  }

  //update todo's completed
  updateCompleted(todo:Todo):Observable<any>{
      const updateUrl = `${this.todosUrl}/${todo.id}`;
      return this.http.put(updateUrl,todo, httpOptions)

  }

  //delete a todo from list
  deleteTodo(todo:Todo):Observable<Todo>{
    const deleteUrl = `${this.todosUrl}/${todo.id}`;
     return this.http.delete<Todo>(deleteUrl,httpOptions);
  }

  //add Todo
  addTodo(todo:Todo):Observable<Todo>{
    const addUrl = `${this.todosUrl}`;
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }

}
