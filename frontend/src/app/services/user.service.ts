import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`);
  }

  addUser(model: User) {
    return this.httpClient.post(`${this.apiUrl}/users`, model);
  }

  getUser(id: string) {
    return this.httpClient.get<User>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: string, model: User) {
    return this.httpClient.put(`${this.apiUrl}/users/${id}`, model);
  }
  deleteUser(id : string)
  {
    return this.httpClient.delete(`${this.apiUrl}/users/${id}`);
  }
}
