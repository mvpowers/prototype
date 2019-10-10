import { Subject, Observable } from 'rxjs';
import { NcaModel } from 'src/model/nca.model';

export class NcaSharedDataService
{
    public ncaModel: NcaModel;
    private ncaSubject = new Subject<NcaModel>();

    public RetrieveNcaSubject(): Observable<NcaModel> {
        return this.ncaSubject.asObservable();
    }

    public UpdateNcaSubject(ncaModelUpdated: NcaModel) {
        this.ncaSubject.next(ncaModelUpdated);
    }
}