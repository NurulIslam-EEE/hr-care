import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuth from "./../firebase/firebase.init";

firebaseAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        // save user to the database
        saveUserInfo(user?.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error.message);
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // Register New User
  // Register New User
  const registerUser = (email, name, password, photo, location, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        verifyEmail();
        // save user to the database
        saveUserInfo(email, name, "POST");

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {});
        const destanition = location?.state?.from || "/";
        navigate(destanition);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
    });
  };

  // Email password login
  const passwordLoginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destanition = location?.state?.from || "/";
        navigate(destanition);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // forget Password
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  //makeadmin
  useEffect(() => {
    fetch(
      `https://hr-care-nurulislameees-projects.vercel.app/user/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data?.result[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  // Observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    });
    return () => unsubscribed;
  }, [auth]);

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //save user to database
  const saveUserInfo = (email, displayName, method) => {
    const user = { name: displayName, email };
    console.log(user);
    fetch("https://hr-care-nurulislameees-projects.vercel.app/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // console.log(isAdmin);
  return {
    token,
    user,
    isLoading,
    error,
    isAdmin,
    resetPassword,
    googleSignIn,
    logOut,
    passwordLoginUser,
    registerUser,
  };
};

export default useFirebase;
