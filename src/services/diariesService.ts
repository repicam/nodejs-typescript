import diaryData from '../db/diaries.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

// la interfaz no nos muestra los campos, pero el array los tiene, por lo que tenemos que controlarlo nosotros filtrando
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const diary = diaries.find(d => d.id === id)

  if (diary != null) {
    const { comment, ...diaryData } = diary
    return diaryData
  }

  return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
