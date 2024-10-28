import { GUEST_API, PUBLIC_API } from "./Api";

// guest auth apis
export const REGISTER_API = GUEST_API + PUBLIC_API + "registerUser/"
export const LOGIN_API = GUEST_API + PUBLIC_API + "auth/login/"
export const VERIFY_API = GUEST_API + PUBLIC_API + "verifiedUser/"
export const FORGET_PASSWORD_API = GUEST_API + PUBLIC_API + "auth/forgotPassword/"
export const RESET_PASSWORD_API = GUEST_API + PUBLIC_API + "auth/resetPassword/"