import {
  LoginResponseType, PostDataFormType, LogoutResponseType,
  RegisterResponseType, VerifyTokenResponseType, WordListResponseType,
} from '../types/request-response-types';
import { WordListType } from '../types/state-types';

export class MemoryCardApi {
  async httpRequest<T = any, U = any>(url: string, method: string, headers: Headers, data?: T): Promise<U> {
    let response;
    if (method === 'POST') {
      response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
      });
    } else {
      response = await fetch(url, {
        headers,
        method,
      });
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    }
    throw new Error(result.message);
  }

  async getRegister(postData: PostDataFormType): Promise<RegisterResponseType> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: RegisterResponseType = await this.httpRequest<PostDataFormType, RegisterResponseType>(
      '/auth/registration-form',
      'POST',
      headers,
      postData,
    );
    return data;
  }

  async getLogin(postData: PostDataFormType): Promise<LoginResponseType> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: LoginResponseType = await this.httpRequest<PostDataFormType, LoginResponseType>(
      '/auth/login-form',
      'POST',
      headers,
      postData,
    );
    return data;
  }

  async verifyToken(): Promise<VerifyTokenResponseType> {
    const data: VerifyTokenResponseType = await this.httpRequest<VerifyTokenResponseType>(
      '/auth/verify-token',
      'GET',
      new Headers(),
    );
    return data;
  }

  async getLogout(): Promise<LogoutResponseType> {
    const data: LogoutResponseType = await this.httpRequest<LogoutResponseType>(
      '/auth/logout-button',
      'GET',
      new Headers(),
    );
    return data;
  }

  async fetchWordList(): Promise<WordListResponseType> {
    const data: WordListResponseType = await this.httpRequest<WordListResponseType>(
      '/profile/get-word-list',
      'GET',
      new Headers(),
    );
    return data;
  }

  async updateWordList(postData: WordListResponseType): Promise<any> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data = await this.httpRequest<any>(
      '/profile/update-word-list',
      'POST',
      headers,
      postData,
    );
    return data;
  }
}
