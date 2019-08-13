import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${URL}projects`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
