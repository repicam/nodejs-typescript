import express from 'express'
import * as diariesService from '../services/diariesService'
import buildNewDiaryEntry from '../utils/diariesUtil'

const router = express.Router()

router.route('/').get((_req, res) => {
  res.json(diariesService.getEntriesWithoutSensitiveInfo)
})
  .post((req, res) => {
    try {
      const newDiaryEntry = buildNewDiaryEntry(req.body)

      const addedEntry = diariesService.addDiary(newDiaryEntry)
      res.json(addedEntry)
    } catch (e: any) {
      res.status(400).send(e.message)
    }
  })

router.get('/:id', (req, res) => {
  const diary = diariesService.findById(+req.params.id)

  return (diary !== undefined)
    ? res.json(diary)
    : res.status(400).json(undefined)
})

router.get('/admin', (_req, res) => {
  res.json(diariesService.getEntries)
})

export default router
