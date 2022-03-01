import { Injectable } from "@angular/core";
import { appointment } from "../models/appointment.model";

@Injectable()
export class usernameService {
    username:string|undefined;
    appointment:appointment|undefined
    constructor(){}
    setUsername(data: string | undefined){
        this.username = data;
        
    }
    getUsername(){
        return this.username;
    }
    setAppointment(data:appointment|undefined){
        this.appointment = data;
    }
    getAppointment(){
        return this.appointment;
    }
}