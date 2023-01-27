import { Component } from '@angular/core';
import {Task} from "../../models/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    taskList: Task[] = []
    taskName = "";

    ngOnInit(){}

    addTask(){
      const task: Task = {
        name: this.taskName,
        state: false
      }
      this.taskList.push(task);
      this.taskName = '';
    }

    deleteTask(index: number): void{
      this.taskList.splice(index, 1);
    }

    checkTask(task: Task, index: number): void{
      this.taskList[index].state = !task.state;
    }
}
