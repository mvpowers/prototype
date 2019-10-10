import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcaLambdaZComponent } from 'src/components/LambdaZ/NcaLambdaZ.component';
import { NcaLambdaZRoutingModule } from './nca.lambdaz.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NcaLambdaZRoutingModule,
    FormsModule
  ],
  declarations: [NcaLambdaZComponent],
  exports: [
  ]
})
export class NcaLambdaZModule { 
    
}