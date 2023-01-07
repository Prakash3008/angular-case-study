import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Companies } from './companies.model';

@Injectable()
export class CompaniesService {
    updatedCompanies = new Subject<Companies>();
    constructor(private http: HttpClient) {
    }

    getCompanies(){
        let company: any = {};
        this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company').subscribe(data => {
            company = data;
            this.updatedCompanies.next(company);
            // return data;
            console.log(data);
        });
        console.log(company);
        
        // data.
        // return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/users')
    }

    getCompany(id: number){
        console.log(id);
        if(id){
            console.log(id);
            return this.http.get('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company/' + id);
        }   
    }
    addCompany(company){
        
        return this.http.post('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company', company);
        
    }

    updateCompany(id, company){

        return this.http.put('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company/' + id, company);
    }

    deleteCompany(id){
        return this.http.delete('https://63ad81dada81ba97619ef936.mockapi.io/api/v1/company/' + id);
    }

}