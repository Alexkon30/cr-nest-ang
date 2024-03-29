import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
     // Error handling
     handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
}