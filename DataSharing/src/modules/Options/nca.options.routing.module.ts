import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NcaOptionsComponent} from '../../components/Options/NcaOptions.component'

const routes: Routes = [
  {
    path: '',
    component: NcaOptionsComponent
  },
  { path: 'ncalambdaz',  loadChildren: () => import('../LambdaZ/nca.lambdaz.module').then(m => m.NcaLambdaZModule)},
  { path: 'ncaresults',  loadChildren: () => import('../Results/nca.results.module').then(m => m.NcaResultsModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaOptionsRoutingModule { 

}
