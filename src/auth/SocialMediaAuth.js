import { auth, google, facebook } from "./Firebase";

const SocialMediaAuth = (provider) => {
  return auth
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default SocialMediaAuth;
