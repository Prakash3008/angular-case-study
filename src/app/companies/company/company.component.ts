import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompaniesComponent } from '../companies.component';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  selectedId: number;
  companyData = {};
  isCompanySet: boolean = false;

  constructor(private companyService: CompaniesService, private route: ActivatedRoute, private router: Router){};


  ngOnInit(){
    this.route.params.subscribe((index:Params)=>{
      this.isCompanySet = true;
      console.log(index);
      this.selectedId = +index['id'];
      this.companyService.getCompany(this.selectedId).subscribe(data =>{
        this.companyData = data;
        console.log(this.companyData);

      })
    })
  }

  editCompany(){
    this.router.navigate(['edit'], { relativeTo: this.route});

  }

  deleteCompany(){
    this.companyService.deleteCompany(this.selectedId).subscribe(data =>{
      this.companyService.getCompanies();
      console.log(data);
      alert('Company deleted successfully');
    })
    this.router.navigate(['/companies']);

  }


}
