import { Passport } from "passport";
import { OAuth2Strategy } from "passport-google-oauth";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthConstants } from "../constants";

const passport = new Passport();

const formatGoogleProfile = (input: any): IGoogleUser => {
  const {
    id,
    name: { familyName: lastName, givenName: firstName },
    emails: [{ value: email }],
  } = input;

  return {
    id,
    firstName,
    lastName,
    email,
  };
}

const GoogleStrategy = new OAuth2Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: AuthConstants.google.callbackURL,
  },
  // Here you can validate the access token and fetch user data from Google APIs
  // For simplicity, we'll just return the formatted profile data
  (accessToken, refreshToken, profile, done) => done(null, formatGoogleProfile(profile))
);

const JwtStrategy = new Strategy(
  {
    secretOrKey: process.env.APPLICATION_SECRET as string,
    ignoreExpiration: false,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (user, done) => done(null, user)
);

passport.use(GoogleStrategy);
passport.use(JwtStrategy);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser<Express.Request['user']>((user, done) => done(null, user));

export { passport };
