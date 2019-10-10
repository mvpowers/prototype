import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';
import { CgeModel } from 'src/model/mappings/cge.model';
import { NcaCgeModel } from 'src/model/mappings/nca.cge.model';
import { CombinedModel } from 'src/model/mappings/combined.model';

@Component({
    selector: 'nca-cge',
    templateUrl: './Cge.component.html'
})
export class CgeComponent  implements OnInit, OnDestroy {
    @Input() combinedModel: CombinedModel;
    textValue: string;
    isBool1: boolean;
    isBool2: boolean;
    private ncaCgeModel: NcaCgeModel = {
        ncaCgeString : ""
    }
    constructor(private ncaCgeMapping: NcaCgeMappingService) {
        }
        ngOnInit(): void {  
            this.ncaCgeMapping.RetrieveNcaCgeSubject().subscribe(receivedNcaCgeModel => this.ncaCgeModel = receivedNcaCgeModel);
        }
        ngOnDestroy(): void {
        }
}
