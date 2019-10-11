import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { NcaSharedDataService } from 'src/service/nca.shared.service';
import { NcaModel } from 'src/model/nca.model';
import { Observable } from 'rxjs';
import { NcaDataTypesModel } from 'src/model/nca.datatypes.model';
import { Router } from '@angular/router';
import { PlasmaModel } from 'src/model/mappings/plamsa.model';
import { UrineModel } from 'src/model/mappings/urine.model';
import { DosingModel } from 'src/model/mappings/dosing.model';
import { CgeModel } from 'src/model/mappings/cge.model';
import { CombinedModel } from 'src/model/mappings/combined.model';
import { NcaMappingsModel } from 'src/model/mappings/nca.mappings.model';
import { NcaLambdaZModel } from 'src/model/nca.lambdaz.model';
import { NcaOptionsModel } from 'src/model/nca.options.model';
import { NcaResultsModel } from 'src/model/nca.results.model';
import { NcaSettingsModel } from 'src/model/nca.settings.model';

@Component({
    selector: 'nca-datatype',
    templateUrl: './NcaDataType.component.html'
})
export class NcaDataTypeComponent  implements OnInit, OnDestroy {
    private ncaDataTypesModel = new NcaDataTypesModel();
    private plasmaModel = new PlasmaModel();
    private urineModel = new UrineModel();
    private dosingModel = new DosingModel();
    private cgeModel = new CgeModel();
    private combinedModel:CombinedModel ={
            plasmaModel: this.plasmaModel,
            urineModel: this.urineModel,
            dosingModel: this.dosingModel,
            cgeModel: this.cgeModel
    }
    private ncaMappingsModel: NcaMappingsModel = {
        combinedModel: this.combinedModel
    }
    private ncaLambdaZModel = new NcaLambdaZModel();
    private ncaOptionsModel = new NcaOptionsModel();
    private ncaResultsModel = new NcaResultsModel();
    private ncaSettingsModel = new NcaSettingsModel();
    private ncaModel: NcaModel =  {
        ncaDataTypesModel: this.ncaDataTypesModel,
        ncaMappingsModel: this.ncaMappingsModel,
        ncaLambdaZModel: this.ncaLambdaZModel,
        ncaOptionsModel: this.ncaOptionsModel,
        ncaResultsModel: this.ncaResultsModel,
        ncaSettingsModel: this.ncaSettingsModel
    }
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    constructor(private ncaSharedService: NcaSharedDataService, private routerService: Router) {
        }
        ngOnInit(): void {
            
            if(this.ncaSharedService.ncaModel !== undefined){
                this.ncaModel = this.ncaSharedService.ncaModel;
            }
            if(this.ncaModel.ncaDataTypesModel !== undefined){
                this.isBool1 = this.ncaModel.ncaDataTypesModel.dataTypeBool1;
                this.isBool2 = this.ncaModel.ncaDataTypesModel.dataTypeBool2;
                this.textValue = this.ncaModel.ncaDataTypesModel.dataTypeString;

            }
        }
        ngOnDestroy(): void {
        }
        public nextNcaDataTypes(){
            this.ncaModel.ncaDataTypesModel.dataTypeBool1 = this.isBool1;
            this.ncaModel.ncaDataTypesModel.dataTypeBool2 = this.isBool2;
            this.ncaModel.ncaDataTypesModel.dataTypeString = this.textValue;
            this.ncaSharedService.ncaModel = this.ncaModel;
            //Also set session Storage
            sessionStorage.setItem("NcaModel", JSON.stringify(this.ncaSharedService.ncaModel));
            this.routerService.navigateByUrl("/ncamappings",{/* state:{ncaModel:this.ncaModel},  */skipLocationChange:true});
        }
}
