import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NcaSettingsComponent} from '../../components/Settings/NcaSettings.component'

const routes: Routes = [
  {
    path: '',
    component: NcaSettingsComponent
  },
  { path: 'ncaresults',  loadChildren: () => import('../Results/nca.results.module').then(m => m.NcaResultsModule)}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaSettingsRoutingModule { 

}
