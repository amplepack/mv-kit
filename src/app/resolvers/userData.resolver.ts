import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";


@Injectable({
    providedIn: 'root'
})

export class UerDataResolver{
    
    constructor(private authService: AuthService){}

    resolve(){
        return this.authService.getUserData();
    }
}