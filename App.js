import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

import TabNavigator from './src/TabNavigator';

//URL Base da API
axios.defaults.baseURL = 'https://wizard-world-api.herokuapp.com';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
