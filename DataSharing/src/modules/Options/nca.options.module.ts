import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcaOptionsComponent } from 'src/components/Options/NcaOptions.component';
import { NcaOptionsRoutingModule } from './nca.options.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NcaOptionsRoutingModule,
    FormsModule
  ],
  declarations: [NcaOptionsComponent],
  exports: [
  ]
})
export class NcaOptionsModule { 
    
}