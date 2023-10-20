// import { AppThunk } from "../state/store"
import {
  setPwaKey,
  store,
  notify,
} from "../../core"

export const boot = (): any => async (dispatch: any) => {
    try {
      const uTime = Date.now()
      const sinceBoot = uTime - store.getState().bootTime
      if (sinceBoot > 750) {
        // console.log("sinceBoot", sinceBoot)
        dispatch(setPwaKey({ key: "bootTime", value: uTime })) 
      }
    } catch (e: any) {
      dispatch(notify(
        "B101",
        "error", 
        `boot ${e.toString()}`
      ))
    }
  }
