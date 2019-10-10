import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  loadChildren: () => import('../modules/DataTypes/nca.datatypes.module').then(m => m.NcaDataTypesModule)},
  { path: 'ncadatatypes',  loadChildren: () => import('../modules/DataTypes/nca.datatypes.module').then(m => m.NcaDataTypesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
