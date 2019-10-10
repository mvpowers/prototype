import { Subject, Observable } from 'rxjs';
import { NcaCgeModel } from 'src/model/mappings/nca.cge.model';

export class NcaCgeMappingService
{
    private ncaCgeSubject = new Subject<NcaCgeModel>();

    public RetrieveNcaCgeSubject(): Observable<NcaCgeModel> {
        return this.ncaCgeSubject.asObservable();
    }

    public UpdateNcaCgeSubject(ccacgeModel: NcaCgeModel) {
        this.ncaCgeSubject.next(ccacgeModel);
    }
}