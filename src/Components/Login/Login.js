import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// Firebase configuration (replace with your Firebase project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCfV2fjV3Y87Lu0O5Yk5VJq6EEB12z43jo",
    authDomain: "chandpur-zila.firebaseapp.com",
    projectId: "chandpur-zila",
    storageBucket: "chandpur-zila.firebasestorage.app",
    messagingSenderId: "475160476891",
    appId: "1:475160476891:web:10c54c0b077e596f1e60fe"
  };

// Initialize Firebase only if it is not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 
else {
  firebase.app(); // Use the default app if it has already been initialized
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPhoneAuth, setIsPhoneAuth] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  // Handle email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // Handle email/password sign-up
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      
      // Update the display name
      await userCredential.user.updateProfile({
        displayName: email.split("@")[0], // Example: use email prefix as name
      });
      
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // Handle Phone Number Authentication
  const handlePhoneAuth = () => {
    if (!phone) {
      setErrorMessage("Please enter a phone number.");
      return;
    }

    // Validate phone number in E.164 format
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage("Invalid phone number format. Ensure it starts with +[country code] and includes 10-15 digits.");
      return;
    }

    // Initialize RecaptchaVerifier if not already initialized
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA verified:", response);
        },
      });
    }

    const appVerifier = window.recaptchaVerifier;

    // Ensure reCAPTCHA is properly initialized
    if (window.recaptchaVerifier) {
      firebase
        .auth()
        .signInWithPhoneNumber(phone, appVerifier)
        .then((confirmationResult) => {
          setConfirmationResult(confirmationResult);
          alert("OTP sent to your phone.");
        })
        .catch((error) => {
          console.error("Phone Auth error:", error.message);
          setErrorMessage(error.message);
        });
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage("Please enter the OTP.");
      return;
    }

    confirmationResult
      .confirm(otp)
      .then((result) => {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("OTP Verification error:", error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>{isPhoneAuth ? "Phone Login" : isSignUp ? "Sign Up" : "Login"}</h2>
      {!isPhoneAuth ? (
        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn-primary">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      ) : (
        <>
          <form onSubmit={handleVerifyOtp} className="login-form">
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1234567890"
                required
              />
            </div>
            {confirmationResult && (
              <div className="form-group">
                <label htmlFor="otp">OTP:</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  required
                />
              </div>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button
              type="button"
              className="btn-primary"
              onClick={confirmationResult ? handleVerifyOtp : handlePhoneAuth}
            >
              {confirmationResult ? "Verify OTP" : "Send OTP"}
            </button>
          </form>
        </>
      )}
      <hr />
      <button className="btn-google" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          className="toggle-button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setErrorMessage("");
          }}
        >
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </p>
      <p>
        Want to login with phone?{" "}
        <button
          className="toggle-button"
          onClick={() => {
            setIsPhoneAuth(!isPhoneAuth);
            setErrorMessage("");
          }}
        >
          {isPhoneAuth ? "Login with Email" : "Login with Phone"}
        </button>
      </p>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
