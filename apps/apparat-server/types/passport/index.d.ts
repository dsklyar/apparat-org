import "passport";

declare global {
  namespace Express {
    export interface User extends IGoogleUser {}
  }
}
