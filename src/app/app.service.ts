
import { Injectable, NgModule } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class AppService{
    url = "http://localhost:5132/Students/GetStudents";
    constructor(){}
    
    GetStudents() {
       
    }
}