// @flow
import {Font} from 'expo';

type FontMap = {
  [string]: *,
};

export default function cacheFonts(fonts: Array<FontMap>) {
  return fonts.map((font) => Font.loadAsync(font));
}
