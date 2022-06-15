import {createReducer, on, Action} from '@ngrx/store'

import {SharedStateInterface} from '@/shared/types/shared-state.interface'
import {setMediaAction} from '@/shared/store/actions/set-media.action'

const initialState: SharedStateInterface = {
  media: {
    batmanHero: null
  }
}

const sharedReducer = createReducer(
  initialState,
  on(setMediaAction, (state, payload) => ({
    ...state,
    media: {
      ...state.media,
      [payload.key]: payload.value
    }
  }))
)

export function reducers(state: SharedStateInterface | undefined, action: Action) {
  return sharedReducer(state, action)
}
