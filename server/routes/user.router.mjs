// Dependencies
import express from "express";
import passport from "passport";
import userController from '../controllers/user.controller.mjs';
const router = express.Router();
const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/refresh-token').post(userController.refreshUser);
router.route('/login').post(userController.userLogin);
router.route('/register').post(userController.userRegister);
router.route('/logout').get(authMiddleware, userController.userLogout);
router.route('/delete-account').post(authMiddleware, userController.deleteUser);
// Address
router.route('/address')
  .get(authMiddleware, userController.getAddress)
  .post(authMiddleware, userController.addAddress)
  .delete(authMiddleware, userController.deleteAddress);

router.route('/cart')
  .put(authMiddleware, userController.updateCart)

// Exports
export default router;
