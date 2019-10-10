import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { NcaModel } from 'src/model/nca.model';
import { Observable } from 'rxjs';
import { NcaSharedDataService } from 'src/service/nca.shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaResultsModel } from 'src/model/nca.results.model';

@Component({
    selector: 'nca-results',
    templateUrl: './NcaResults.component.html'
})
export class NcaResultsComponent  implements OnInit, OnDestroy {
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
        if(this.ncaModel.ncaResultsModel !== undefined){
            this.isBool1 = this.ncaModel.ncaResultsModel.resultsBool1;
            this.isBool2 = this.ncaModel.ncaResultsModel.resultsBool2;
            this.textValue = this.ncaModel.ncaResultsModel.resultsString;

        }
    }
    ngOnDestroy(): void {
    }
    public prevNcaResults(){
        this.ncaModel.ncaResultsModel.resultsBool1 = this.isBool1;
        this.ncaModel.ncaResultsModel.resultsBool2 = this.isBool2;
        this.ncaModel.ncaResultsModel.resultsString = this.textValue;
        this.ncaSharedService.ncaModel = this.ncaModel;
        this.routerService.navigateByUrl("/ncaoptions",{skipLocationChange:true});
    }
    public nextNcaResults(){
        this.ncaModel.ncaResultsModel.resultsBool1 = this.isBool1;
        this.ncaModel.ncaResultsModel.resultsBool2 = this.isBool2;
        this.ncaModel.ncaResultsModel.resultsString = this.textValue;
        this.ncaSharedService.ncaModel = this.ncaModel;
        this.routerService.navigateByUrl("/ncasettings",{skipLocationChange:true});
    }
}
