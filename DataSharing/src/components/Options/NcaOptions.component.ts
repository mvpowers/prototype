import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaSharedDataService } from 'src/service/nca.shared.service';
import { NcaOptionsModel } from 'src/model/nca.options.model';
import { NcaModel } from 'src/model/nca.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'nca-options',
    templateUrl: './NcaOptions.component.html'
})
export class NcaOptionsComponent  implements OnInit, OnDestroy {
    private ncaModel: NcaModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    state$: Observable<NcaModel>;
    constructor(private ncaSharedService: NcaSharedDataService, private routerService: Router, public activatedRoute: ActivatedRoute) {
    }
    ngOnInit(): void {            
        if(this.ncaSharedService.ncaModel !== undefined){
            this.ncaModel = this.ncaSharedService.ncaModel;
        }
        if(this.ncaModel.ncaOptionsModel !== undefined){
            this.isBool1 = this.ncaModel.ncaOptionsModel.optionsBool1;
            this.isBool2 = this.ncaModel.ncaOptionsModel.optionsBool2;
            this.textValue = this.ncaModel.ncaOptionsModel.optionsString;

        }
    }
    ngOnDestroy(): void {
    }
    public prevNcaOptions(){
        this.ncaModel.ncaOptionsModel.optionsBool1 = this.isBool1;
        this.ncaModel.ncaOptionsModel.optionsBool2 = this.isBool2;
        this.ncaModel.ncaOptionsModel.optionsString = this.textValue;
        this.ncaSharedService.ncaModel = this.ncaModel;
        sessionStorage.setItem("NcaModel", JSON.stringify(this.ncaSharedService.ncaModel));
        this.routerService.navigateByUrl("/ncalambdaz",{skipLocationChange:true});
    }
    public nextNcaOptions(){
        this.ncaModel.ncaOptionsModel.optionsBool1 = this.isBool1;
        this.ncaModel.ncaOptionsModel.optionsBool2 = this.isBool2;
        this.ncaModel.ncaOptionsModel.optionsString = this.textValue;
        this.ncaSharedService.ncaModel = this.ncaModel;
        sessionStorage.setItem("NcaModel", JSON.stringify(this.ncaSharedService.ncaModel));
        this.routerService.navigateByUrl("/ncaresults",{skipLocationChange:true});
    }
}
