import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcaResultsComponent } from 'src/components/Results/NcaResults.component';
import { NcaResultsRoutingModule } from './nca.results.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NcaResultsRoutingModule,
    FormsModule
  ],
  declarations: [NcaResultsComponent],
  exports: [
  ]
})
export class NcaResultsModule { 
    
}