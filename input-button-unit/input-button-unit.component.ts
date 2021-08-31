import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
@Component({
    selector: 'app-input-button-unit',
    template: `
        <input class="todo-input"
               #inputElementRef
               [value]="title"
               (keyup.enter)="submitValue($event.target.value)">
        <button class="btn"
                (click)="submitValue(inputElementRef.value)">
            Save
        </button>
    `,
    styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {

@Output() update:any = new EventEmitter()
    title = 'Hello World';

    constructor() { }
    ngOnInit() {
    }
    completeItem() {
        this.update.emit({
            item: this.item,
            changes: {completed: !this.item.completed}
        });
    }
    submitValue(newTitle: string) {
        this.update.emit(newTitle);
    }
}
