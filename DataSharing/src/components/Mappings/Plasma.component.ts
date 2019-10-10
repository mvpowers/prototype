import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';
import { CombinedModel } from 'src/model/mappings/combined.model';
import { PlasmaModel } from 'src/model/mappings/plamsa.model';
import { NcaCgeModel } from 'src/model/mappings/nca.cge.model';

@Component({
    selector: 'nca-plasma',
    templateUrl: './Plasma.component.html'
})
export class PlasmaComponent  implements OnInit, OnDestroy {
    @Input() combinedModel: CombinedModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    private ncaCgeModel: NcaCgeModel = {
        ncaCgeString : "From PLASMA"
    }
    constructor(private ncaCgeMappingService: NcaCgeMappingService) {
        }
        ngOnInit(): void {
        }
        ngOnDestroy(): void {
        }
        UpdateNcaCgeModel(){
            if(this.ncaCgeModel !== undefined){
                this.ncaCgeMappingService.UpdateNcaCgeSubject(this.ncaCgeModel);
            }
        }
}
