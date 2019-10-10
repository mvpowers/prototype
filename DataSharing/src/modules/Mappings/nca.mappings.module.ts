import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcaMappingsComponent } from 'src/components/Mappings/NcaMappings.component';
import { NcaMappingsRoutingModule } from './nca.mappings.routing.module';
import { FormsModule } from '@angular/forms';
import { PlasmaComponent } from 'src/components/Mappings/Plasma.component';
import { UrineComponent } from 'src/components/Mappings/Urine.component';
import { DosingComponent } from 'src/components/Mappings/Dosing.component';
import { CgeComponent } from 'src/components/Mappings/Cge.component';
import { CombinedComponent } from 'src/components/Mappings/Combined.component';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';

@NgModule({
  imports: [NcaMappingsRoutingModule,
    FormsModule
  ],
  declarations: [NcaMappingsComponent, PlasmaComponent, UrineComponent, DosingComponent, CgeComponent, CombinedComponent],
  providers: [NcaCgeMappingService],
  exports: [
  ]
})
export class NcaMappingsModule { 
    
}