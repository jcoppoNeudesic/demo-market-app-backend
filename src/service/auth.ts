// import { User } from '@firebase/auth';
// import {
//   auth,
//   // createUserWithEmailAndPassword,
//   // updateProfile,
//   // signInWithEmailAndPassword,
//   // signOut,
// } from '../store/firebase';

// // const createUser = async (
// //   email: string,
// //   password: string,
// //   photoUrl: string
// // ) => {
// //   try {
// //     const { user } = await createUserWithEmailAndPassword(
// //       auth,
// //       email,
// //       password
// //     );
// //     updateUserPhoto(user, 'fabulous pic', photoUrl);
// //     return user;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // const updateUserPhoto = async (
// //   user: User,
// //   displayName: string,
// //   photoUrl: string
// // ) => {
// //   try {
// //     await updateProfile(user, { displayName, photoURL: photoUrl });
// //     console.log('phto updted!');
// //   } catch (error) {
// //     const { message } = error as Error;
// //     console.log('Update Photo Error: ' + message);
// //   }
// // };

// // const login = async (email: string, password: string) => {
// //   try {
// //     const { user } = await signInWithEmailAndPassword(auth, email, password);
// //     return user;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // const logout = async () => {
// //   try {
// //     await signOut(auth);
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// const createToken = async () => {
//   // mock data
//   const uid = 'some-uid';
//   const claims = {
//     premiumAccount: true,
//   };

//   auth()
//     .createCustomToken(uid, claims)
//     .then((token) => console.log(token))
//     .catch((error) => console.log(error));
// };

// export { createToken };
