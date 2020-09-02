import { LoginResponseType, PostDataType, RegisterResponseType } from '../types/request-response-types';

export class MemoryCardApi {
  async httpRequest<T, U>(url: string, method: string, headers: Headers, data: T): Promise<U> {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    if (response.ok) {
      return responseJson;
    }
    throw new Error(responseJson.message);
  }

  async getRegister(postData: PostDataType): Promise<RegisterResponseType> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: RegisterResponseType = await this.httpRequest<PostDataType, RegisterResponseType>(
      '/auth/register',
      'POST',
      headers,
      postData,
    );
    return data;
  }

  async getLogin(postData: PostDataType): Promise<LoginResponseType> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: LoginResponseType = await this.httpRequest<PostDataType, LoginResponseType>(
      '/auth/login',
      'POST',
      headers,
      postData,
    );
    return data;
  }
}
