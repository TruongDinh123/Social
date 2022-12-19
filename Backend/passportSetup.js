import passport from "passport";
const passportSetup = () => {
  const GoogleStrategy = require("passport-google-oauth20").Strategy;

  const GOOGLE_CLIENT_ID =
    "232849903347-raa0f7579qbi3ddm3fvlnroicqsf4uqs.apps.googleusercontent.com";
  const GOOGLE_CLIENT_SECRET = "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";

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/context/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

export default passportSetup;
