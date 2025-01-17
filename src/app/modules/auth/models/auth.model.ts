// Generated by https://quicktype.io

// export class AuthModel {
//   access_token: string;
//   token_type:   string;
//   expires_in:   number;
//   user:         User;
// }

// export interface User {
//   full_name: string;
//   email:     string;
// }





export class AuthModel {
  authToken: string;
  refreshToken: string;
  expiresIn: Date;

  setAuth(auth: AuthModel) {
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
