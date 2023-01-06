import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Users } from './users.model';

@Injectable()
export class UserService {
    updatedUsers = new Subject<Users>();
    constructor(private http: HttpClient) {
    }

    getUsers(){
        let user: any = {};
        this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users').subscribe(data => {
            user = data;
            this.updatedUsers.next(user);
            // return data;
            console.log(data);
        });
        console.log(user);
        
        // data.
        // return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users')
    }

    getUser(id: number){
        console.log(id);
        if(id){
            console.log(id);
            return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users/' + id);
        }   
    }
    addUser(user){
        
        return this.http.post('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users', user);
        
    }

    updateUser(id, user){

        return this.http.put('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users/' + id, user);
    }

    deleteUser(id){
        return this.http.delete('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users/' + id);
    }

}