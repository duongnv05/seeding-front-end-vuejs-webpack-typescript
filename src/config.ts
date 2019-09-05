export const URL_SERVER_DYNAMIC = 'http://localhost:4500'

export const isProduction = process.env.NODE_ENV === 'production'

/*----------------------- AXIOS ----------------------*/
export const AXIOS_CONFIG = {
  'Content-Type': 'application/x-www-form-urlencoded',
  withCredentials: true
};
export const AXIOS_CONFIG_UPLOAD_MUlTI = {
  headers: {
    'content-type': 'multipart/form-data'
  }
};
export const AXIOS_CONFIG_UPLOAD = {
    'content-type': 'form-data',
    withCredentials: true
};

/** --------------- COOKIES KEY ---------------------- */
export const __COOKIES_KEY__ = {
  ADMIN_SESSION: 'ADMIN_SESSION'
}