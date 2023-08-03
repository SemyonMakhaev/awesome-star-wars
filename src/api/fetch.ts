import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
import { Response } from './types';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const DEFAULT_TIMEOUT = 5000; // 5s
const RETRIES_COUNT = 3;

axiosRetry(axios, {
  retries: RETRIES_COUNT,
});

export default async function fetch<T extends Response>(
  path: string,
  options: AxiosRequestConfig = {},
): Promise<T | undefined> {
  const { method = 'GET', headers = {}, ...restOptions } = options;

  try {
    const response = await axios(path, {
      baseURL: SWAPI_BASE_URL,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
      method,
      timeout: DEFAULT_TIMEOUT,
      ...restOptions,
    });

    return response.data;
  } catch (error) {
    console.error('Swapi error', error);

    return undefined;
  }
}
