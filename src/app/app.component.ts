import {Component, inject, OnInit} from '@angular/core';
import {TG_WEB_APP} from "./tg-web-app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  protected readonly webApp = inject(TG_WEB_APP);

  ngOnInit(): void {
  }


  public close(): void {
    this.webApp.close();
  }


}
