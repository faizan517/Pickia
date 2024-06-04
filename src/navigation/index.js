import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import HomeScreen from '../screens/main/HomeScreen';
import Categories from '../screens/main/Categories';
import SubCategories from '../screens/main/SubCategories';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function TabsNavigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="Login" component={Login} />
//     </Tab.Navigator>
//   );
// }
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="TabsNavigation" component={TabsNavigation} /> */}
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="SubCategories" component={SubCategories} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
