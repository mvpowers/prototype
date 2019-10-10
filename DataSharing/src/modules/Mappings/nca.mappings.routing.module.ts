import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NcaMappingsComponent} from '../../components/Mappings/NcaMappings.component'

const routes: Routes = [
  {
    path: '',
    component: NcaMappingsComponent
  },
  { path: 'ncadatatypes',  loadChildren: () => import('../DataTypes/nca.datatypes.module').then(m => m.NcaDataTypesModule)},
  { path: 'ncalambdaz',  loadChildren: () => import('../LambdaZ/nca.lambdaz.module').then(m => m.NcaLambdaZModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaMappingsRoutingModule { 

}
