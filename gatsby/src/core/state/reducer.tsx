import {
  KeyValueShape,
} from "../types"
import {glConfig} from "../../config"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {coreState} from "./coreState"
import {pingpongState} from "../../plugins/Pingpong"

type CoreReducerShape = {
  bootTime: number
  config: any
  core: any
  auth: any
  pingpong: any
}

const initialState: CoreReducerShape = {
  bootTime: Date.now(),
  auth: null,
  config: glConfig,
  core: coreState,
  pingpong: pingpongState,
}

export const pwaSlice = createSlice({
  name: "goldlabel-core",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectBootTime = (state: RootState) => state.bootTime
export const selectConfig = (state: RootState) => state.config
export const selectCore = (state: RootState) => state.core
export const selectNotifyr = (state: RootState) => state.core.notifyr
export const selectDisplay = (state: RootState) => state.core.display
export const selectFrontmatter = (state: RootState) => state.core.frontmatter
export const selectAuth = (state: RootState) => state.auth
export const selectPingpong = (state: RootState) => state.pingpong

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
