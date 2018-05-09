import { session_token } from './sessionStorageKeys';

/**
 * 使用者狀態
 */
export class UserStatus {
  /**
   * 取得Token
   */
  public static get token() {
    return sessionStorage.getItem(session_token);
  }

  /**
   * 設定Token
   */
  public static set token(value: string) {
    sessionStorage.setItem(session_token, value);
  }
}
