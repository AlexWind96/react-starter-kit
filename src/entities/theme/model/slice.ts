import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MantineThemeColors } from '@mantine/styles/lib/theme/types/MantineColor'

interface ThemeState {
  theme: {
    primaryColor: keyof MantineThemeColors
  }
}

const initialState: ThemeState = {
  theme: {
    primaryColor: 'brand',
  },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPrimaryColor: (state, action: PayloadAction<keyof MantineThemeColors>) => {
      state.theme.primaryColor = action.payload
    },
    cleanState: () => {
      return initialState
    },
  },
})

const { setPrimaryColor, cleanState } = themeSlice.actions

export const themeSliceActions = { setPrimaryColor, cleanState }

export const selectThemeSlice = (state: RootState) => state.theme

export const themeSliceReducer = themeSlice.reducer
