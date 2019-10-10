import { Component, ViewChild } from '@angular/core';
import { NcaDataTypeComponent } from 'src/components/DataTypes/NcaDataType.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(NcaDataTypeComponent, {static:false}) ncaDataTypeComponent:NcaDataTypeComponent;
  title = 'DataSharing';
  
  constructor(){
  }
  ngOnInit() {
  }
}
