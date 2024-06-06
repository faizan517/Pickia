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
import Search from '../../components/Search';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

const {height, width} = Dimensions.get('window');

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <Image source={require('../../assets/logos/Ariel.png')} />
          <View style={styles.innerView}>
            <Text style={styles.heading}>Notification Name</Text>
            <Text style={styles.dis}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  mainView: {
    width: width,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  innerView: {
    width: width * 0.8,
    height: height * 0.08,
    paddingHorizontal: 20,
  },
  heading: {
    color: Colors.black,
    fontSize: width * 0.04,
    ...Fonts.PoppinsBlack,
    fontWeight: '900',
  },
  dis: {
    color: Colors.black,
    fontSize: width * 0.03,
    ...Fonts.PoppinsBlack,
  },
});
export default Details;
