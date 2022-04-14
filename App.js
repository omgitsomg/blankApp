/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import FinancialHubGradientText from './src/components/financialHubpractice';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPageMiddle from './src/screens/FirstPageMiddle';
import CardIntro from './src/screens/CardIntro';
import TermsConditions from './src/screens/TermsConditions';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


/**
 * Idea: Create a function component (screens.js example) that will return
 * a React element
 * A React element is a JavaScript object containing at least a type and props
 * 
 * @returns a Screen for the users to view
 */
function ThirdScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Third Tab!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="ThirdTab" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const OnboardingStart = ({ navigation }) => {
  // I want to return a view
  return (

    // This will start the navigation of the onboarding process
    <NavigationContainer>
        {/* We added screenOptions to not show the header*/}
        <Stack.Navigator initialRouteName='OnboardingHome' screenOptions={{headerShown: false}}>
          <Stack.Screen name='OnboardingHome' component={FirstPageMiddle} />
          <Stack.Screen name='CardIntro' component={CardIntro} />
          <Stack.Screen name='TermsConditions' component={TermsConditions} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default OnboardingStart;
