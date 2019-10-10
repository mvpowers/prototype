import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NcaDataTypeComponent} from '../../components/DataTypes/NcaDataType.component'

const routes: Routes = [
  {path: '', component: NcaDataTypeComponent},
  { path: 'ncadatatypes',  loadChildren: () => import('../DataTypes/nca.datatypes.module').then(m => m.NcaDataTypesModule)},
  { path: 'ncamappings',  loadChildren: () => import('../Mappings/nca.mappings.module').then(m => m.NcaMappingsModule)},
  { path: 'ncalambdaz',  loadChildren: () => import('../LambdaZ/nca.lambdaz.module').then(m => m.NcaLambdaZModule)},
  { path: 'ncaoptions',  loadChildren: () => import('../Options/nca.options.module').then(m => m.NcaOptionsModule)},
  { path: 'ncaresults',  loadChildren: () => import('../Results/nca.results.module').then(m => m.NcaResultsModule)},
  { path: 'ncasettings',  loadChildren: () => import('../Settings/nca.settings.module').then(m => m.NcaSettingsModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaDataTypeRoutingModule { 

}
