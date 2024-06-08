import React from 'react';
import {TouchableOpacity, View} from 'react-native';
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
// import Vector from '../assets/svgs/vector.svg';
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
import TermsAndCondition from '../screens/main/Terms';
import PromoCode from '../screens/main/PromoCode';
import MyOrders from '../screens/main/MyOrders';
import ViewProfile from '../screens/main/ViewProfile';
import CheckOut1 from '../screens/main/CheckOut1';
import CheckOut2 from '../screens/main/CheckOut2';
import CheckOut3 from '../screens/main/CheckOut3';
import DeliveryAddress from '../screens/main/DeliveryAddress';
import Intro from '../screens/Intro';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarItemStyle: {
            margin: 5,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({color, size}) => (
            <Icons.Store color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: 'Details',
          tabBarItemStyle: {
            margin: 5,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({color, size}) => (
            <Icons.User color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarItemStyle: {
            margin: 5,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <Icons.List color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarItemStyle: {
            margin: 5,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Icons.Bell color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishList}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarItemStyle: {
            margin: 5,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({}) => <Icons.Heart2 size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}
function Navigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <Icons.CartIcon
                name="Cart"
                size={35}
                backgroundColor="transparent"
                color="black"
              />
            </TouchableOpacity>
          ),
          contentStyle: {
            backgroundColor: Colors.white,
          },
        })}
        initialRouteName="Intro">
          <Stack.Screen
          name="Intro"
          component={Intro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="HomeScreen" component={TabsNavigation} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="SubCategories" component={SubCategories} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ContactUS" component={ContactUS} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Terms" component={TermsAndCondition} />
        <Stack.Screen name="PromoCode" component={PromoCode} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="CheckOut1" component={CheckOut1} />
        <Stack.Screen name="CheckOut2" component={CheckOut2} />
        <Stack.Screen name="CheckOut3" component={CheckOut3} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
