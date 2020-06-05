import { Router } from 'express'

import { Authorize as authorize } from '../../middlewares/authorize'
import { User as service } from './service'

const router = Router()

router.get('/', authorize, service.getUser)

export default router
