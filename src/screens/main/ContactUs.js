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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import Btn from '../../components/btn';
import {Linking} from 'react-native';

const {height, width} = Dimensions.get('window');

const ContactUS = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactContainer}>
        <Text style={styles.heading}>Contact our customer care center</Text>
        <Text style={styles.heading}>+92-1234556789</Text>
      </View>
      <Btn
        title="Call Now"
        onPress={() => Linking.openURL(`tel:+92-1234556789`)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor:Colors.white,
  },
  contactContainer: {
    height: height * 0.05,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 40,
  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.045,
    color: Colors.borderGray,
  },
});
export default ContactUS;
