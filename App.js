/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { ScreenTwo } from './src/screens/ScreenTwo';
import { ScreenThree } from './src/screens/ScreenThree';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
