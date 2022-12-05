import express from 'express'
import * as diariesService from '../services/diariesService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json(diariesService.getEntriesWithoutSensitiveInfo())
})

router.get('/admin', (_req, res) => {
  res.json(diariesService.getEntries())
})

export default router
