import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Companies } from '../../companies.model';
import { CompaniesService } from '../../companies.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent {

  id: number;
  editMode = false;
  company: Companies;
  companyForm: FormGroup;

  constructor(private route: ActivatedRoute, private companyService: CompaniesService, private router: Router){}
  ngOnInit(){
    this.route.params.
    subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.formInit();
    })
  }

  private formInit(){
    let companyName: String = '';
    let companyLocation: String = '';
    console.log(this.editMode);

    if(this.editMode){
      
      this.companyService.getCompany(this.id).subscribe(company => {
        this.companyForm.setValue({
          companyName: company['companyName'],
          companyLocation: company['companyLocation']
        })
        this.companyForm.get('companyLocation').disable();
      })
      
    }

    this.companyForm = new FormGroup({
      'companyName': new FormControl(companyName, Validators.required),
      'companyLocation': new FormControl(companyLocation, Validators.required)
    });

  }
  onSubmit(){
    console.log(this.companyForm.value, typeof this.companyForm.value);
    if(!this.editMode){
      this.companyService.addCompany(this.companyForm.value).subscribe(result=>{
        this.companyService.getCompanies();
        alert("Company added successfully");
        console.log(result);
      })
    }else{
      this.companyService.updateCompany(this.id, this.companyForm.value).subscribe(result=>{
        this.companyService.getCompanies();
        console.log(result);
        alert("Company updated successfully");
      })
    }
    this.router.navigate(['/companies']);

  }

  cancelOperation(){
    this.router.navigate(['/companies']);
  }

}
