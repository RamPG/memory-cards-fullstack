import {
  LoginResponseType, PostDataFormType,
  GetDataTokenType, RegisterResponseType, VerifyTokenResponseType,
} from '../types/request-response-types';

export class MemoryCardApi {
  async httpRequestPost<T, U>(url: string, method: string, headers: Headers, data: T): Promise<U> {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    }
    throw new Error(result.message);
  }

  async httpRequestGet<U>(url: string, method: string, headers: Headers): Promise<U> {
    const response = await fetch(url, {
      headers,
      method,
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    }
    throw new Error(result.message);
  }

  async getRegister(postData: PostDataFormType): Promise<RegisterResponseType> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: RegisterResponseType = await this.httpRequestPost<PostDataFormType, RegisterResponseType>(
      '/auth/register',
      'POST',
      headers,
      postData,
    );
    return data;
  }

  async getLogin(postData: PostDataFormType): Promise<LoginResponseType> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: LoginResponseType = await this.httpRequestPost<PostDataFormType, LoginResponseType>(
      '/auth/login',
      'POST',
      headers,
      postData,
    );
    return data;
  }

  async verifyToken(): Promise<VerifyTokenResponseType> {
    const data: VerifyTokenResponseType = await this.httpRequestGet<VerifyTokenResponseType>(
      '/auth/verify-token',
      'GET',
      new Headers(),
    );
    return data;
  }
}
