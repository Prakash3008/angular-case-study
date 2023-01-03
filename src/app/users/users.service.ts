import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    getData(){
        return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users');
    }
}