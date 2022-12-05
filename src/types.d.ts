export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> // muestra los campos que indiquemos
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // elimina los campos que indiquemos
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
