import { Injectable } from '@angular/core';

const TOKEN_KEY = 'jwt';
const ID_KEY = 'id';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): any {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  validateToken() {
    return false;
  }

  saveId(id: string) {
    window.localStorage.removeItem(ID_KEY);
    window.localStorage.setItem(ID_KEY, id);
  }

  getId() {
    return window.localStorage.getItem(ID_KEY);
  }

  signOut() {
    window.localStorage.removeItem(ID_KEY);
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
