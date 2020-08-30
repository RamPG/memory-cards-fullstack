import { PostDataType, RegisterResponseType } from '../types/request-response-types';

export class MemoryCardApi {
  async httpRequest<T, U>(url: string, method: string, headers: Headers, data: T): Promise<U> {
    const response = await fetch('/auth/register', {
      method,
      headers,
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  }

  async getRegistered(postData: PostDataType): Promise<string> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    const data: RegisterResponseType = await this.httpRequest<PostDataType, RegisterResponseType>(
      '/auth/register',
      'POST',
      headers,
      postData,
    );
    return data.message;
  }
}
