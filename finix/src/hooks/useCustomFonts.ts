import { useFonts } from 'expo-font';

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'BrunoAce-Regular': require('../../assets/fonts/BrunoAce-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
  });
  return fontsLoaded;
}
