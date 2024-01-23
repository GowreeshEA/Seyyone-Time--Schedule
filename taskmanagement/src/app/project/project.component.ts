import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {jsPDF } from 'jspdf'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  showForm: boolean = false;
  projects: Project[] = [];

  newProject: Project = {
    projectName: '',
    priority: 'High',
    description: '',
    owner: '',
    teamMembers: '',
    startDate: '',
    endDate: '',
    status: 'todo',
  };

  constructor(private router: Router) {}

  makePDF() {
    let pdf = new jsPDF();
    pdf.text('Same Report', 25, 10);
   pdf.save('Project report.pdf');
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  createProject() {
    this.projects.push({
      id: this.projects.length + 1,
      ...this.newProject,
    });

    this.newProject = {
      projectName: '',
      priority: 'High',
      description: '',
      owner: '',
      teamMembers: '',
      startDate: '',
      endDate: '',
      status: 'todo',
    };

    this.showForm = false;
  }

  viewProject(projectId: number) {
    console.log('View Project:', projectId);
  }

  editProject(projectId: number) {
    console.log('Edit Project:', projectId);
  }

  deleteProject(projectId: number) {
    this.projects = this.projects.filter((project) => project.id !== projectId);
    console.log('Delete Project:', projectId);
  }

  // Define the navigateToAddTask method
  navigateToAddTask() {
    this.router.navigate(['/task']);
  }
}

interface Project {
  id?: number;
  projectName: string;
  priority: string;
  description: string;
  owner: string;
  teamMembers: string;
  startDate: string;
  endDate: string;
  status: string;
}
