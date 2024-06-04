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
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const ProductList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ProductListView}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row',
    padding: 16,
    backgroundColor:'skyblue'
  },
  ProductListView: {
    flex:1,
    width: width * 0.9,
    // height: height * 0.8,
    flexWrap: 'wrap',
    flexDirection:'row',
    // justifyContent: 'space-around',
    alignContent: 'space-around',
    alignSelf: 'center',
    backgroundColor:'red'
  },
});
export default ProductList;
