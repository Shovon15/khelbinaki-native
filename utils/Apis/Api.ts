// import {BACKEND_URL} from "@env"

export const BASE_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
export const SPACE_URL = process.env.EXPO_PUBLIC_SPACES_URL;

export const API_URL = BASE_URL + 'api/';

export const EMPLOYEES_API = API_URL + 'employeeApp/';

export const GUEST_API = API_URL + 'customerApp/';

export const PUBLIC_API = 'public/';

export const PROTECTED_API = 'public/';
