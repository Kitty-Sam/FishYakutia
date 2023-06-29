import { Platform } from 'react-native';

// export const BASE_URL_IOS = 'http://localhost:3000';
export const BASE_URL_IOS = 'http://192.168.132.177:3000';
// export const BASE_URL_ANDROID = 'http://10.0.2.2:3000';
export const BASE_URL_ANDROID = 'http://192.168.132.177:3000';

export const serverUrl = Platform.OS === 'ios' ? BASE_URL_IOS : BASE_URL_ANDROID;
