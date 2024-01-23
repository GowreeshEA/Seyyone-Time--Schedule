import { Component } from '@angular/core';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrl: './viewtask.component.css'
})
export class ViewtaskComponent {
  task: Task = {
    taskId: '',
    projectId: '',
    userId: '',
    name: '',
    description: '',
    taskType: '',
    priority: '',
    createdBy: '',
    startDate: '',
    endDate: '',
    members: '',
    status: ''
  };

  tasks: Task[] = [];

  onSubmit() {
    this.tasks.push({ ...this.task });
    this.resetForm();
  }

  resetForm() {
    this.task = {
      taskId: '',
      projectId: '',
      userId: '',
      name: '',
      description: '',
      taskType: '',
      priority: '',
      createdBy: '',
      startDate: '',
      endDate: '',
      members: '',
      status: ''
    };
  }

  
}
export interface Task {
  taskId: string;
  projectId: string;
  userId: string;
  name: string;
  description: string;
  taskType: string;
  priority: string;
  createdBy: string;
  startDate: string;
  endDate: string;
  members: string;
  status: string;
}

