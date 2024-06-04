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
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const ProductList = ({navigation}) => {
  const products = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ];

  const renderItem = ({ item }) => (
    <Product />
  );
  return (
    <SafeAreaView
      style={styles.container}>
      <FlatList 
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.ProductListView}
        showsVerticalScrollIndicator={false}
        numColumns={2}

        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: width,
    // height: height,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // flexWrap:'wrap',
    // flexDirection: 'row',
    // padding: 15,
    // backgroundColor: 'skyblue',
  },
  ProductListView: {
    // flex: 1,
    // width: width * 0.9,
    // height: height * 0.8,
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignContent:'space-between',
    // alignItems:'',
    alignSelf: 'center',
    // backgroundColor: 'pink',
    // flexGrow:10
    
  },
});
export default ProductList;
