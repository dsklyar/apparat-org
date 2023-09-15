interface IGoogleUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

declare module Express {
  export interface Request {
    user?: IGoogleUser;
  }
}
