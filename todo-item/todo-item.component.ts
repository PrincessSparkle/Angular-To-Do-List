import { TodoItem } from '../interfaces/todo-item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {TodoListService} from '../services/todo-list.service';

@Component({
    selector: 'app-todo-item',
        template: `
  <div class="todo-item">
      <input type="checkbox"/>{{ item.title }}

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
`,
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() item: TodoItem;
    @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
​
    constructor(private todoListService:TodoListService) {}
    removeItem(item) {
        this.todoListService.deleteItem(item);
    }
    ngOnInit() {
    }

}
