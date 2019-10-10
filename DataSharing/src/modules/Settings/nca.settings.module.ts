import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcaSettingsComponent } from 'src/components/Settings/NcaSettings.component';
import { NcaSettingsRoutingModule } from './nca.settings.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NcaSettingsRoutingModule,
    FormsModule
  ],
  declarations: [NcaSettingsComponent],
  exports: [
  ]
})
export class NcaSettingsModule { 
    
}