import { Component, ChangeDetectorRef } from '@angular/core';
import { UserService } from './users.service';
import { ColDef, GridApi, GridReadyEvent, RowNode, SelectionChangedEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent {
  private gridApi;
  rowData = [];
  selectedId: number;
  subscribe: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){};

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  ngOnInit(){
    this.userService.getUsers();

    this.subscribe = this.userService.updatedUsers.subscribe(user =>{
      this.rowData.pop();
      this.rowData.push(user);
      console.log(this.rowData);
      this.gridApi.setRowData(this.rowData[0]); 
    })
      // this.rowData.push(this.userService.getUsers());
      // console.log(this.rowData); 
      

  }

  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'createdAt', hide: true },
    { field: 'firstName', minWidth: 180 },
    { field: 'lastName' },
    { field: 'avatar', hide: true },
    { field: 'insuredAmount', minWidth: 150 },
    { field: 'companyName' },
    { field: 'email' },
    { field: 'userLocation' },
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
  newUser(){
    this.router.navigate(['new'], { relativeTo: this.route});
  }
}

