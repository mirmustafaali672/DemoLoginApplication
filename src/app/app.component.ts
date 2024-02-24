import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

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
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + "CfDJ8JKQ7oEOSxVCubGB6w310cR7MQ2siqCz6OOWDVV1ABiNuRffIgp2CDBaSlmbHQoXfSpi-r1ISZrYCR_OtH30BCBxenLYPBfgeNicDlOFRF91gO0AwaXaH7OLDY2B8iw1lLwbV_qg48vjwLSHuYKPPDoXFaq4E_9ChJ3zClJUE8B0I67B_lEfjzP-yfHLVpClkZWjvsKK2zFgiNo7RFXzGQ5DTd6Mc18SVZLHUQOxjRNwOlLFCWY6rYaAAKvoHao1aJms9_2WiYjPFrs1cDjVo1QWGio-wl8aJ98iIZry-67ddASr4ei2gBxwJ3hWN75sXeOcSpsYH_eg2gF68RCooGKpmZSvnQBBuSWSW79D_LmYhl0eAbjEsN8lA1e2M-nxJ2mp6VcILTZisv_kE2BNOMz5GvOi3TykyXKmqUt8FqTHbyCBWufQBk34AGU5QTQKio2Yh945TXwhQY7WbGZp0TFWOl6z-RsYDbUufLO7NT5TZhjYXdk8-0a_BPUEmgJ-dezB1cEUyBjE9wtMXzZ44Uwa-IC7uogJaHYLrjoLJ9VpD-Sa-BwVJLuq4qnIlCuuCyz8Zga9u9qIfZoCp2wKM_PQbjQ67ozWVIanCYIbmqO-Wx3gaF9s4L7CSmLYzrwaoLDSzlvdQdoO5-mz0Fi7ZxYjQwCKQ8aVGn70K62s3SCOG23rFVYtm2Do9D1Hx9-93A",
      }),
    };
    this.http.get<any>("http://localhost:5132/Students/GetStudents", httpOptions).subscribe(x =>
    {
      this.students = x;
    })

  }
}
