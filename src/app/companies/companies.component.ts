import { Component, ChangeDetectorRef } from '@angular/core';
import { CompaniesService } from './companies.service';
import { ColDef, GridApi, GridReadyEvent, RowNode, SelectionChangedEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService]
})
export class CompaniesComponent {
  private gridApi;
  rowData = [];
  selectedId: number;
  subscribe: Subscription;

  constructor(private companyService: CompaniesService, private route: ActivatedRoute, private router: Router){};

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  ngOnInit(){
    this.companyService.getCompanies();

    this.subscribe = this.companyService.updatedCompanies.subscribe(company =>{
      this.rowData.pop();
      this.rowData.push(company);
      console.log(this.rowData);
      this.gridApi.setRowData(this.rowData[0]); 
    })
      // this.rowData.push(this.companyService.getUsers());
      // console.log(this.rowData); 
      

  }

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'startedOn', hide: true },
    { field: 'companyName' },
    { field: 'companyLocation' },
  ];  


  onGridReady(params) {
    this.gridApi = params.api;    
  }

  defaultColDef = {
    sortable: true,
    filter: true
  }

  onSelectionChanged() {
    const selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    this.router.navigate([selectedData[0].id], { relativeTo: this.route});
  }
  newCompany(){
    this.router.navigate(['new'], { relativeTo: this.route});
  }


}
