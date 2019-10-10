import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { NcaModel } from 'src/model/nca.model';
import { NcaSharedDataService } from 'src/service/nca.shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NcaMappingsModel } from 'src/model/mappings/nca.mappings.model';
import { Observable } from 'rxjs';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';
import { CombinedModel } from 'src/model/mappings/combined.model';
import { PlasmaModel } from 'src/model/mappings/plamsa.model';
import { UrineModel } from 'src/model/mappings/urine.model';
import { DosingModel } from 'src/model/mappings/dosing.model';
import { CgeModel } from 'src/model/mappings/cge.model';
import { CombinedComponent } from './Combined.component';

@Component({
    selector: 'nca-mappings',
    templateUrl: './NcaMappings.component.html'
})
export class NcaMappingsComponent  implements OnInit, OnDestroy {
    private ncaModel: NcaModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    state$: Observable<NcaModel>;
    @ViewChild(CombinedComponent, {static: false}) combinedComponent: CombinedComponent;
    constructor(private ncaSharedService: NcaSharedDataService, private ncaMappingService: NcaCgeMappingService, private routerService: Router, public activatedRoute: ActivatedRoute) {
        }
        ngOnInit(): void {    
            this.ncaModel = this.ncaSharedService.ncaModel;
            //this.ncaSharedService.RetrieveNcaSubject().subscribe(receivedNcaModel => this.ncaModel = receivedNcaModel);        
            //this.ncaModel = window.history.state['ncaModel'];
        }
        ngOnDestroy(): void {
        }
        public prevNcaMappings(){
            this.ncaSharedService.ncaModel = this.ncaModel;
            //this.ncaSharedService.UpdateNcaSubject(this.ncaModel);
            this.routerService.navigateByUrl("/ncadatatypes",{skipLocationChange:true});
        }
        public nextNcaMappings(){
            this.ncaSharedService.ncaModel = this.ncaModel;
            //this.ncaSharedService.UpdateNcaSubject(this.ncaModel);
            this.routerService.navigateByUrl("/ncalambdaz",{skipLocationChange:true});
        }
}
