import { Platform, StatusBar } from 'react-native';

export const PADDING_HORIZONTAL = 10;
export const APP_FONT_SIZE = 16;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
