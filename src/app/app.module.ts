import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, Inject } from '@angular/core';

import { ApiService, API_URL } from './services/ApiService';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="invokeApi()">Invoke API</button>
  `
})
export class AppComponent {
  constructor(
    private apiService: ApiService, // 注入ApiService类
    // @Inject(ApiService) private apiService: ApiService,  //注入ApiService类的明确写法
    @Inject(API_URL) private api_url: string  // 注入API_URL值
  ) {
  }
  invokeApi(): void {
    this.apiService.get();
    console.log(this.api_url);
  }
}
// 配置
const isProduction: boolean = true;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ApiService, // 提供ApiService类
    { // 提供API_URL值
      provide: API_URL,
      useValue: isProduction ? 'https://production-api.sample.com' :
        'http://dev-api.sample.com'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
