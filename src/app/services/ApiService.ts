import { Inject } from '@angular/core';

// 声明常量API_URL，用作依赖的令牌。
// 导出API_URL常量，客户方应用就可以从服务之外使用API_UR来注入正确的值
export const API_URL: string = 'API_URL';

export class ApiService {
  constructor(@Inject(API_URL) private apiUrl: string) {  // 注入API_URL
  }

  get(): void {
    console.log(`Calling ${this.apiUrl}/endpoint...`);
  }
}
