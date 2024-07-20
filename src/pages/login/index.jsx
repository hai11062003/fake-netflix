import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./index.scss";
import { auth, googleProvider } from "../../config/firebase";

function Login() {
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="wrapper">
        <div className="login__logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8auvfYONCIs-ADDrrji151pKYmPlCFRPOFWtqNquUOA&s"
            alt=""
            width={200}
          />
        </div>
        <div className="login__form">
          <h3>Login your account</h3>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="login__button">Login</button>
          <button className="login__google" onClick={handleLoginGoogle}>
            <img
              src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
              alt=""
              width={28}
            />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
