import {
  KeyValueShape,
} from "../../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./redux/store"
import {listingsState} from "../mods/Listings/listingsState"
import {geolocatorState} from "../mods/Geolocator/geolocatorState"
import {weatherState} from "../mods/Weather/"
import {goldlabelConfig} from "../goldlabelConfig"

const initialState: any = {
  bootTime: Date.now(),
  categories: true,
  type: null,
  fbId: null,
  darkmode: false,
  frontmatter: null,
  locale: goldlabelConfig.siteDefaultLocale || "en",
  settings: false,
  listings: listingsState,
  geolocator: geolocatorState,
  weather: weatherState,
}

export const pwaSlice = createSlice({
  name: "goldlabel",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const selectDarkMode = (state: RootState) => state.darkmode
export const selectLocale = (state: RootState) => state.locale
export const selectAuth = (state: RootState) => state.authed
export const selectTings = (state: RootState) => state.tings
export const selectCategories = (state: RootState) => state.categories
export const selectType = (state: RootState) => state.type
export const selectGeolocator = (state: RootState) => state.geolocator
export const selectFrontmatter = (state: RootState) => state.frontmatter
export const selectWeather = (state: RootState) => state.weather

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
