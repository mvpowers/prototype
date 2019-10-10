import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { NcaModel } from 'src/model/nca.model';
import { NcaSharedDataService } from 'src/service/nca.shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaLambdaZModel } from 'src/model/nca.lambdaz.model';

@Component({
    selector: 'nca-lambdaz',
    templateUrl: './NcaLambdaZ.component.html'
})
export class NcaLambdaZComponent  implements OnInit, OnDestroy {
    private ncaModel: NcaModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    constructor(private ncaSharedService: NcaSharedDataService, private routerService: Router, public activatedRoute: ActivatedRoute) {
        }
        ngOnInit(): void {
            if(this.ncaSharedService.ncaModel !== undefined){
                this.ncaModel = this.ncaSharedService.ncaModel;
            }
            if(this.ncaModel.ncaLambdaZModel !== undefined){
                this.isBool1 = this.ncaModel.ncaLambdaZModel.lambdaZBool1;
                this.isBool2 = this.ncaModel.ncaLambdaZModel.lambdaZBool2;
                this.textValue = this.ncaModel.ncaLambdaZModel.lambdaZString;

            }
        }
        ngOnDestroy(): void {
        }
        public prevNcaLambdaZ(){
            this.ncaModel.ncaLambdaZModel.lambdaZBool1 = this.isBool1;
            this.ncaModel.ncaLambdaZModel.lambdaZBool2 = this.isBool2;
            this.ncaModel.ncaLambdaZModel.lambdaZString = this.textValue;
            this.ncaSharedService.ncaModel  = this.ncaModel;
            this.routerService.navigateByUrl("/ncamappings", {skipLocationChange:true});
        }
        public nextNcaLambdaZ(){
            this.ncaModel.ncaLambdaZModel.lambdaZBool1 = this.isBool1;
            this.ncaModel.ncaLambdaZModel.lambdaZBool2 = this.isBool2;
            this.ncaModel.ncaLambdaZModel.lambdaZString = this.textValue;
            this.ncaSharedService.ncaModel  = this.ncaModel;
            this.routerService.navigateByUrl("/ncaoptions", {skipLocationChange:true});
        }
}
