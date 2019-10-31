import joi from '@hapi/joi';
// import { FirebaseError } from 'firebase';
import * as firebase from 'firebase';
import 'firebase/auth';

export function doValidation(object: any, schema: joi.SchemaLike) {
  return joi.validate(object, schema, {
    abortEarly: false,
    stripUnknown: true,
  });
}

// export function validateUserSession(firebase: any) {
//   if (!firebase.auth().currentUser) {
//     throw new Error('Invalid User');
//   }
// }

export function registerUser(email: string, password: string) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      //Sends Email verification
      console.log(result);
      // sendEmailVerification(firebase);
    })
    .catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // [START_EXCLUDE]
      // if (errorCode == 'auth/weak-password') {
      //   alert('The password is too weak.');
      // } else {
      //   alert(errorMessage);
      // }
      console.log(error);
      // [END_EXCLUDE]
    });
}

// export function sendEmailVerification(firebase: any) {
//   // [START sendemailverification]
//   firebase
//     .auth()
//     .currentUser.sendEmailVerification()
//     .then(function() {
//       // Email Verification sent!
//       // [START_EXCLUDE]
//       console.log('Email Verification Sent!');
//       // [END_EXCLUDE]
//     });
//   // [END sendemailverification]
// }

// export function sendPasswordReset(email: string, firebase: any) {
//   // [START sendpasswordemail]
//   firebase
//     .auth()
//     .sendPasswordResetEmail(email)
//     .then(function() {
//       // Password Reset Email Sent!
//       // [START_EXCLUDE]
//       alert('Password Reset Email Sent!');
//       // [END_EXCLUDE]
//     })
//     .catch(function(error: FirebaseError) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // [START_EXCLUDE]
//       if (errorCode == 'auth/invalid-email') {
//         alert(errorMessage);
//       } else if (errorCode == 'auth/user-not-found') {
//         alert(errorMessage);
//       }
//       console.log(error);
//       // [END_EXCLUDE]
//     });
//   // [END sendpasswordemail];
// }

// export function signIn(email: string, password: string, firebase: any) {
//   if (firebase.auth().currentUser) {
//     // [START signout]
//     firebase.auth().signOut();
//     // [END signout]
//   } else {
//     // Sign in with email and pass.
//     // [START authwithemail]
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch(function(error: FirebaseError) {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // [START_EXCLUDE]
//         if (errorCode === 'auth/wrong-password') {
//           console.log('Wrong password.');
//         } else {
//           console.log(errorMessage);
//         }
//         console.log(error);
//         // [END_EXCLUDE]
//       });
//     // [END authwithemail]
//   }
// }

// export function signout(firebase: any) {
//   if (firebase.auth().currentUser) {
//     // [START signout]
//     firebase.auth().signOut();
//     // [END signout]
//   }
//   return true;
// }
