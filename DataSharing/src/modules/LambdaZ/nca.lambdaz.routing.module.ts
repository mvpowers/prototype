import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NcaLambdaZComponent} from '../../components/LambdaZ/NcaLambdaZ.component'

const routes: Routes = [
  {
    path: '',
    component: NcaLambdaZComponent
  },
  { path: 'ncamappings',  loadChildren: () => import('../Mappings/nca.mappings.module').then(m => m.NcaMappingsModule)},
  { path: 'ncaoptions',  loadChildren: () => import('../Options/nca.options.module').then(m => m.NcaOptionsModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaLambdaZRoutingModule { 

}
