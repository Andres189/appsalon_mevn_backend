import express from 'express'
import { register, verifyAccount, login, user, forgotPassword, verifyPasswordResetToken, updatePassword, admin } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

//Rutas de autenticacción y registro de usuario

router.post('/register', register)
router.get('/verify/:token', verifyAccount)
router.post('/login', login)
router.post('/forgot-password', forgotPassword)

router.route('/forgot-password/:token')
    .get(verifyPasswordResetToken)
    .post(updatePassword)

//Area privado - requiere JWT
router.get('/user', authMiddleware, user)
router.get('/admin', authMiddleware, admin)


export default router