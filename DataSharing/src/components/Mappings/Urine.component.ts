import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CombinedModel } from 'src/model/mappings/combined.model';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';
import { UrineModel } from 'src/model/mappings/urine.model';
import { NcaCgeModel } from 'src/model/mappings/nca.cge.model';

@Component({
    selector: 'nca-urine',
    templateUrl: './Urine.component.html'
})
export class UrineComponent  implements OnInit, OnDestroy {
    @Input() combinedModel: CombinedModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    private ncaCgeModel: NcaCgeModel = {
        ncaCgeString : "From URINE"
    }
    constructor(private ncaCgeMappingService: NcaCgeMappingService) {
        }
        ngOnInit(): void {  
        }
        ngOnDestroy(): void {
        }
        UpdateNcaCgeModel(){
            if( this.ncaCgeModel !== undefined){
                this.ncaCgeMappingService.UpdateNcaCgeSubject(this.ncaCgeModel);

            }
        }
}
