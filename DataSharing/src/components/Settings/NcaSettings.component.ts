import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { NcaModel } from 'src/model/nca.model';
import { Observable } from 'rxjs';
import { NcaSharedDataService } from 'src/service/nca.shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaSettingsModel } from 'src/model/nca.settings.model';

@Component({
    selector: 'nca-settings',
    templateUrl: './NcaSettings.component.html'
})
export class NcaSettingsComponent  implements OnInit, OnDestroy {
    private ncaModel: NcaModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    state$: Observable<NcaModel>;
    constructor(private ncaSharedService: NcaSharedDataService, private routerService: Router, public activatedRoute: ActivatedRoute) {
    }
    ngOnInit(): void {            
        if(this.ncaSharedService.ncaModel !== undefined){
            this.ncaModel = JSON.parse(sessionStorage.getItem("NcaModel"));//this.ncaSharedService.ncaModel;
        }
        if(this.ncaModel.ncaSettingsModel !== undefined){
            this.isBool1 = this.ncaModel.ncaSettingsModel.settingsBool1;
            this.isBool2 = this.ncaModel.ncaSettingsModel.settingsBool2;
            this.textValue = this.ncaModel.ncaSettingsModel.settingsString;

        }
    }
    ngOnDestroy(): void {
    }
    public prevNcaSettings(){
        this.ncaModel.ncaSettingsModel.settingsBool1 = this.isBool1;
        this.ncaModel.ncaSettingsModel.settingsBool2 = this.isBool2;
        this.ncaModel.ncaSettingsModel.settingsString = this.textValue;
        this.ncaSharedService.ncaModel = this.ncaModel;
        sessionStorage.setItem("NcaModel", JSON.stringify(this.ncaSharedService.ncaModel));
        this.routerService.navigateByUrl("/ncaresults",{skipLocationChange:true});
    }
}
