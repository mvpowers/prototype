import { Component, ViewChild, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NcaCgeModel } from 'src/model/mappings/nca.cge.model';
import { CombinedModel } from 'src/model/mappings/combined.model';
import { NcaCgeMappingService } from 'src/service/nca.cge.mapping.service';

@Component({
    selector: 'nca-combined',
    templateUrl: './Combined.component.html'
})
export class CombinedComponent  implements OnInit, OnDestroy { 
    @Input() combinedModel: CombinedModel;
    constructor(private ncaCgeMappingService: NcaCgeMappingService) {
        }
        ngOnInit(): void {  
        }
        ngOnDestroy(): void {
        }
}
