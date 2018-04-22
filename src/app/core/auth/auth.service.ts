import {Injectable} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../shared/dto/token.type';
import {PostLoginResponse} from '../../shared/dto/login.dto';

export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AuthService {

  private url = 'http://192.168.99.100:3000/auth/token';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getUser(): User {
    return jwt_decode(this.getToken());
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  login(user): Promise<any> {
    const self = this;

    return this.http
      .post(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then((res: PostLoginResponse) => {
        if (res.access_token) {
          self.setToken(res.access_token);
        }
        return res;
      });
  }
}
