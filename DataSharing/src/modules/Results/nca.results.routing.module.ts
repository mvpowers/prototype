import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NcaResultsComponent} from '../../components/Results/NcaResults.component'

const routes: Routes = [
  {
    path: '',
    component: NcaResultsComponent
  },
  { path: 'ncaoptions',  loadChildren: () => import('../Options/nca.options.module').then(m => m.NcaOptionsModule)},
  { path: 'ncasettings',  loadChildren: () => import('../Settings/nca.settings.module').then(m => m.NcaSettingsModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcaResultsRoutingModule { 

}
