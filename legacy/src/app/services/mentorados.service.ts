
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
})
export class MentoradosService {
    constructor(private http: HttpClient, private toastr: ToastrService) { }
    
    createUser(model: any): Observable<any> {
        return this.http.post(`${environment.apiUrl}/mentorados`, model)
    }

}
