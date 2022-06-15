import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@/shared/store/action-types'

export const setMediaAction = createAction(
  ActionTypes.SET_MEDIA,
  props<{key: string; value: string | null | ArrayBuffer}>()
)
