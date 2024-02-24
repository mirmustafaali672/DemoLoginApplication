import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DemoLoginApplication';
  students: any = [];
  constructor(public appService: AppService, public http:HttpClient){

  }
  GetStudents(){
    this.students = [];
    this.http.get<any>("http://localhost:5132/Students/GetStudents").subscribe(x =>
    {
      this.students = x;
    })

  }
}
