import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { NcaDataTypeComponent } from 'src/components/DataTypes/NcaDataType.component';
import { NcaDataTypeRoutingModule } from './nca.datatypes.routing.module';

@NgModule({
  imports: [NcaDataTypeRoutingModule,
    FormsModule
  ],
  declarations: [NcaDataTypeComponent],
  exports: [
  ]
})
export class NcaDataTypesModule { }