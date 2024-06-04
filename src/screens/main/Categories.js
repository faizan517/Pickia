import React from 'react';
import Product from '../../components/product';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from '../../components/Search';

const {height, width} = Dimensions.get('window');

const Categories = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <View style={styles.CategoriesView}>
        <Product type="beta" onPress={()=>{()=>navigation.navigate('HomeScreen')}} />
        <Product type="beta" />
        <Product type="beta" />
        <Product type="beta" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:'90%',
    backgroundColor: 'skeblue',
    padding: 16,
  },
  CategoriesView: {
    width: width * 0.9,
    height: height * 0.5,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    alignSelf: 'center',
  },
});
export default Categories;
