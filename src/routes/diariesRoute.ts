import express from 'express'
import * as diariesService from '../services/diariesService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json(diariesService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diariesService.findById(+req.params.id)

  return (diary !== undefined)
    ? res.json(diary)
    : res.status(400).json(undefined)
})

router.get('/admin', (_req, res) => {
  res.json(diariesService.getEntries())
})

export default router
