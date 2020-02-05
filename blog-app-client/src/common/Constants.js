// axios configuration
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const AUTH_BASE_URL = 'http://localhost:8080/auth';
export const TIMEOUT = 0;

export const ACCESS_TOKEN = 'accessToken';

export const SUCCESS = '0';
export const ERROR = '1';
export const NEED_LOGIN = '10';
export const ILLEGAL_ARGUMENT = '2';
