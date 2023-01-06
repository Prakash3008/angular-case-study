import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserEditComponent } from "./users/user/user-edit/user-edit.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    {path: 'users', component: UsersComponent, children:[
        {path: 'new', component: UserEditComponent},
        {path: ':id', component: UserComponent },
        {path: ':id/edit', component: UserEditComponent }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})

export class AppRoutingModule {}