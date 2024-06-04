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
import Icons from '../utils/Icons';
import Vector from '../assets/svgs/vector.svg';
import Cart from '../assets/svgs/cart.svg';
import ProductList from '../screens/main/ProductList';
import Colors from '../utils/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        
        }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categori" component={Categories} />

      {/* <Tab.Screen name="Login" component={Login} /> */}
    </Tab.Navigator>
  );
}
function Navigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
        screenOptions={{
          contentStyle:{
            backgroundColor:Colors.white
          }
        }}
        initialRouteName="Login">
        <Stack.Screen
          name="Signup"
          component={Signup}
          // options={{
          //   headerRight: () => (
          //     <Cart
          //       name="arrow-back"
          //       size={25}
          //       backgroundColor="transparent"
          //       color="black"
          //       onPress={() => {
          //         navigation.navigate('Login')
          //       }}
          //     />
          //   ),
          // }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerRight: () => (
              <Vector
                name="arrow-back"
                size={35}
                backgroundColor="transparent"
                color="black"
                onPress={() => {
                  // Add your navigation logic here
                }}
              />
            ),
          }}
        />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="HomeScreen" component={TabsNavigation} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="SubCategories" component={SubCategories} />
        <Stack.Screen name="ProductList" component={ProductList} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
