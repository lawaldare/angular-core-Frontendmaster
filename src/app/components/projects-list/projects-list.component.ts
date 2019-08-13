import { Project } from './../../models/project';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
