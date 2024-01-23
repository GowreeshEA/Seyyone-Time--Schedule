import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task: any = {}; // Initialize an empty object for the task data

  createTask(){
    alert("Added succesfully");
  }
  onSubmit() {
    // Add your logic to handle the form submission here
    console.log('Form submitted', this.task);
    // You can send the data to a service, perform API calls, etc.

    // Optionally, you can reset the form or perform other actions after submission
    this.resetForm();
  }

  resetForm() {
    // Reset the task object to clear the form fields
    this.task = {};
  }
}
