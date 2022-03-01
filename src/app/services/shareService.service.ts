import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class SharedService{
    isActive = new EventEmitter<string>();
}