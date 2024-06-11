import React from 'react';
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
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Btn from '../../components/btn';

const {height, width} = Dimensions.get('window');

const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text style={[styles.heading3, {alignSelf: 'flex-start'}]}>
          Order #12345
        </Text>
        <View style={[styles.secondaryView]}>
          <Text style={styles.heading3}>Product Name</Text>
          <Btn
            title="View"
            style={styles.btn}
            textStyle={[styles.heading3, {color: Colors.white}]}
            onPress={()=>navigation.navigate('OrderDetails')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // width:'90%',
    // backgroundColor: 'skyblue',
    padding: 16,
  },
  secondaryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: height * 0.05,
    width: width*0.9,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    marginBottom:10,
  },
  heading3: {
    fontSize: width * 0.04,
    ...Fonts.PoppinsBold,
    fontWeight: '800',
    color: Colors.black,
  },
  btn: {
    height: height * 0.03,
    width: width * 0.2,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
});
export default MyOrders;
