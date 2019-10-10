import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NcaCgeModel } from 'src/model/mappings/nca.cge.model';
import { DosingModel } from 'src/model/mappings/dosing.model';
import { CombinedModel } from 'src/model/mappings/combined.model';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';

@Component({
    selector: 'nca-dosing',
    templateUrl: './Dosing.component.html'
})
export class DosingComponent  implements OnInit, OnDestroy {
    @Input() combinedModel: CombinedModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    private ncaCgeModel: NcaCgeModel = {
        ncaCgeString : "From DOSING"
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
