import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>('/api/users/login', { email, password }).pipe(
      map((token) => {
        localStorage.setItem('blog-token', token.acces_token);
        console.log(token.acces_token);
        return token;
      })
    );
  }
}
