import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
    id = new Subject<number>();

    constructor(private http: HttpClient) {
    }

    getUsers(){
        return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users');
    }

    getUser(id: number){
        if(id)
        return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users/' + id);
    }

}