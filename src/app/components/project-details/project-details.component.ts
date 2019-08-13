import { Project } from './../../models/project';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  currentProject: Project;
  originalTitle: string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set selectedProject(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }


  constructor() { }

  ngOnInit() {
  }

}
