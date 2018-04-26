import { ITour } from "./tour";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class TourService {
    private _tourUrl = './api/tours/tours.json';

    constructor(private _http: HttpClient) {}

    getTour(): Observable<ITour[]> {
        return this._http.get<ITour[]>(this._tourUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    /** POST: add a new tour to the database */
    addTour(tour: ITour[]): Observable<ITour[]> {
        return this._http.post<ITour[]>(this._tourUrl, tour, httpOptions)
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}