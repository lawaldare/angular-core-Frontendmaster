import { Project } from './../../models/project';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  selectedProject: Project;
  primaryColor: string = 'tomato';
  projects;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getAllProjects();
    this.resetProject();
  }

  getAllProjects() {
    this.projectsService.all().subscribe(data => {
      this.projects = data;
    });
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  cancel() {
    this.resetProject();
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getAllProjects())
  }

  createProject(project) {
    this.projectsService.create(project).subscribe(result => {
      this.getAllProjects();
      this.resetProject();
    })
  }

  updateProject(project) {
    this.projectsService.update(project).subscribe(result => {
      this.getAllProjects();
      this.resetProject();
    })
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project)
    }
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }
}
