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
import CartIcon from '../assets/svgs/cart.svg';
import ProductList from '../screens/main/ProductList';
import Colors from '../utils/Colors';
import ProductDetails from '../screens/main/ProductDetails';
import Cart from '../screens/main/Cart';
import Details from '../screens/main/Details';
import Notification from '../screens/main/Notification';
import WishList from '../screens/main/WishList';
import ContactUS from '../screens/main/ContactUs';
import AboutUs from '../screens/main/AboutUs';
import TermsAndCondition from '../screens/main/Terms'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Wishlist" component={WishList} />
    </Tab.Navigator>
  );
}
function Navigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.white,
            headerShown: false,
          },
        }}
        initialRouteName="Login">
        <Stack.Screen name="Signup" component={Signup} />
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
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="SubCategories" component={SubCategories} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ContactUS" component={ContactUS} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Terms" component={TermsAndCondition} />


        <Stack.Screen
          name="Cart"
          component={Cart}
          //  options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
