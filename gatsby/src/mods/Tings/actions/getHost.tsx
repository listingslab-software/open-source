import { 
  store, 
  setPwaKey,
  notify,
} from "../../../goldlabel"
import {
  makeFingerprint,
} from "../"

export const getHost = (): any =>
async (dispatch: any) => {
  try {
    const {tings} = store.getState()
    dispatch(setPwaKey({ key: "tings", value: {
      ...tings, 
      host: window.location.host,
      slug: window.location.pathname,
      href: window.location.href,
      docTitle: document.title,
    }}))
    dispatch(makeFingerprint())
  } catch (e: any) {
    dispatch(notify("error", `getHost ${e.toString()}`))
  }
}
