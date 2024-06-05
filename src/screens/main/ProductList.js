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
    <Product style={styles.Productlist} onPress={()=>navigation.navigate('ProductDetails')} />
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
    flex: 1,
  },
  ProductListView: {
    alignItems:'center',
    // backgroundColor: 'skyblue',
  },
  Productlist:{
    margin: 15,
    alignItems: 'center',
  }
});
export default ProductList;
