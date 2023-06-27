import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISettings {
    badge: string;
    description: string;
    delivery: string;
    email: string;
}

export type SettingsState = {
    settings: ISettings;
};

const initialState: SettingsState = {
    settings: {} as ISettings,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSettings(state, action: PayloadAction<ISettings>) {
            state.settings = action.payload;
        },
    },
});

export default settingsSlice.reducer;
export const { setSettings } = settingsSlice.actions;
