import {createFeatureSelector, createSelector} from '@ngrx/store'

import {SharedStateInterface} from '@/shared/types/shared-state.interface'

export const sharedFeatureSelector = createFeatureSelector<SharedStateInterface>('shared')

export const mediaSelector = createSelector(
  sharedFeatureSelector,
  (sharedState: SharedStateInterface) => sharedState.media.batmanHero
)
