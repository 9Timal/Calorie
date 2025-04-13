import { Routes } from '@angular/router';
import { CreateAlimentComponent } from './components/aliment/create-aliment/create-aliment.component';
import { ListAlimentComponent } from './components/aliment/list-aliment/list-aliment.component';
import { DetailAlimentComponent } from './components/aliment/detail-aliment/detail-aliment.component';

export const routes: Routes = [
    {path:"", component: CreateAlimentComponent},
    {path:"liste", component: ListAlimentComponent},
    {path:"detail/:id", component: DetailAlimentComponent}

];
