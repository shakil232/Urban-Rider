import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Pages/Login/Firebase/firebase.init";

// Initialize
firebaseInitialize();


// all-firebase-auth
const useFirebase = () => {
    // state 
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        success: false,
        error: '',
        photo: ''
    });

    // Google-Sign-In 
    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                    error: '',
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            })
            .finally(() => setIsLoading(false))

    };

    // facebook-Sign-In 
    const facebookSignIn = () => {
        setIsLoading(true);
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                    error: '',
                }
                return signInUser;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            })
            .finally(() => setIsLoading(false))
    };

    // github-Sign-In 
    const githubSignIn = () => {
        setIsLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    displayName: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                    error: '',
                }
                return signInUser;

            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                return newUserInfo;
            })
            .finally(() => setIsLoading(false))
    };

    // user-create
    const createWithEmailAndPassword = (name, email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = '';
                updateProfileInfo(name);
                return newUserInfo;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;;
                newUserInfo.error = err.message;
                return newUserInfo;
            })
            .finally(() => setIsLoading(false))
    };

    // user-login-email-pass 
    const signInEmailAndPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = '';
                return newUserInfo;
            })
            .catch(err => {
                const newUserInfo = {};
                newUserInfo.success = false;;
                newUserInfo.error = err.message;
                return newUserInfo;

            })
            .finally(() => setIsLoading(false))
    };

    // update-userProfile 
    const updateProfileInfo = name => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => { })
            .catch(() => { })
    };

    // auth-stageChange 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else { setUser({}) }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, []);

    // LogOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .catch(() => { })
            .finally(() => setIsLoading(false))
    };


    return {
        user,
        setUser,
        isLoading,
        googleSignIn,
        facebookSignIn,
        githubSignIn,
        createWithEmailAndPassword,
        signInEmailAndPassword,
        logOut
    }
}

export default useFirebase;