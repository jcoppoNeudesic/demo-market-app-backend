import express from 'express';
// import { createUser, login, logout } from '../service/auth';

const router = express.Router();

// router.post('/signup', async (req, res) => {
//   const { email, password, photoUrl } = req.body;
//   try {
//     const user = await createUser(email, password, photoUrl);
//     res.status(200).send(user);
//   } catch (error) {
//     const { name, message } = error as Error;
//     res.status(400).send({ name, message });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await login(email, password);
//     res.status(200).send(user);
//   } catch (error) {
//     const { name, message } = error as Error;
//     res.status(400).send({ name, message });
//   }
// });

// router.post('/logout', async (req, res) => {
//   try {
//     await logout();
//     res.status(200).send('Successfully logged out.');
//   } catch (error) {
//     const { name, message } = error as Error;
//     res.status(400).send({ name, message });
//   }
// });

export default router;
