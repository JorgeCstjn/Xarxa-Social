import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { DetailsComponent } from './component/details/details.component';
import { ListComponent } from './component/list/list.component';


const routes: Routes = [
    { path: 'home', component: ListComponent, pathMatch: 'full'},
    { path: 'register', component: RegisterComponent,pathMatch: 'full' },
    { path: 'details', component: DetailsComponent, pathMatch: 'full'},
   { path: '**', redirectTo: '/register' }
  ];

export const Routing = RouterModule.forRoot(routes);