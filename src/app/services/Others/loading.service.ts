import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private requestCount = 0;
    isLoading = new Subject<boolean>();
    show() {
        this.requestCount++;
        if (this.requestCount === 1) this.isLoading.next(true);
    }

    hide() {
        if (this.requestCount > 0) this.requestCount--;
        if (this.requestCount === 0) this.isLoading.next(false);
    }
}