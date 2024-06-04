/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigation from './src/navigation';
import Input from './src/components/Input';
import Search from './src/components/Search';
import Product from './src/components/product';
import AddBtn from './src/components/addBtn';
import HomeScreen from './src/screens/main/HomeScreen';
import TabsNavigation from './src/navigation';
import Categories from './src/screens/main/Categories';
import ProductList from './src/screens/main/ProductList';

function App() {
  return (
    <Navigation/>
    // <Button/>
    // <Search/>
    // <Product/>
    // <HomeScreen/>
    // <AddBtn/>
    // <Categories/>
    // <ProductList/>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
