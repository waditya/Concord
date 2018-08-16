import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

//API endpoint to sign in a user
router.route('/auth/signin').post(authCtrl.signin)


router.route('/auth/signout').get(authCtrl.signout)

export default router
