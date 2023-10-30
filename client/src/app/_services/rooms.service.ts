import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
import { Room } from "@app/_models";
import { Observable, catchError } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  getAllRooms(): Observable<Room[]> {
    return this.http
      .get<Room[]>(`${environment.apiUrl}/rooms/all`)
      .pipe(catchError(this.errorService.handleError));
  }
}