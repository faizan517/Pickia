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
import Btn from '../../components/btn';

const {height, width} = Dimensions.get('window');

const TermsAndCondition = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contactContainer}>
        <Text style={styles.heading}>
          Welcome to Taswog. This application is powered by Methologik Pvt Ltd.
          It is strongly recommended that you read the Terms and condition
          thoroughly before utilizing our Service. By accessing or utilization
          of the service constitutes your unconditional agreement to follow and
          be bound by these Terms & Conditions. In case if you disagree to any
          clause of the Terms and Conditions, then you shall not utilize or
          access the service. You hereby confirm that you have read, understood
          and accepted all contents. Taswog reserves the right at its absolute
          discretion to change the Terms & Conditions from time to time with or
          without any prior notice to its user. All such changes will be updated
          on the website and it is the user sole responsibility to read the
          Terms & Conditions on each occasion of using the Taswog website or
          application. Continuing used of taswog will imply of approval being
          bound by the current Terms and Conditions. If you do not agree any
          clause of the Terms and Conditions, then you must not use taswog
          website/ application.
          {'\n'}
        </Text>
        <Text style={styles.heading2}>Amendment of Terms and Conditions{'\n'}</Text>
        <Text style={styles.heading}>
          Taswog may at any time modify the terms and conditions without any
          prior notice to its users. Users are requested to check the terms and
          condition on regular basis. Continuous utilization of Taswog service
          imply that the user agrees to the current terms and conditions.
          {'\n'}
        </Text>
        <Text style={styles.heading2}>1- Order{'\n'}</Text>
        <Text style={styles.heading}>
          Taswog allows its customer to choose a particular time slot which is
          suitable for them to get their order shipped. Once the order is
          placed, the customer will be provided with a tracking ID of their
          order, allowing them to learn about the real-time status of their
          order. To place an order, users are required to provide accurate
          details. In case of fake order or incorrect information, order will be
          stand cancel and they will be prohibited from using any of the
          Taswog’s service. Also, the person will be held liable for it. Once
          the order is placed on the website/application, the consumer will
          receive a confirmation call from our CSR. If the call goes unattended
          the order will be cancelled in one-hour time frame.
          {'\n'}
        </Text>
        <Text style={styles.heading2}>2- Returns{'\n'}</Text>
        <Text style={styles.heading}>
          Taswog’s returns are easy and free. We respect our customers’ opinion
          and if they aren’t happy with what they received or have any complaint
          regarding the product they received, then they can request for
          exchange/return service either by filling our form here or contact our
          CSR. 
          {'\n'}
          {'\n'}Following are the valid reason for returning an item:
          {'\n'}- Delivered Product is damaged 
          {'\n'}i.e., physically destroyed or defected i.e., dead on arrival.
          {'\n'}- Delivered Product is no longer needed 
          {'\n'}i.e., you no
          longer have a use for the product or you have changed your mind about
          the purchase. This option is available for a few products only.
        </Text>
      </ScrollView>
      {/* <Btn title="Call Now" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:Colors.white,
    // width:'90%',
    // backgroundColor: 'skyblue',
    padding: 16,
  },
  contactContainer: {
    // height: height * 0.5,
    width: width * 0.9,
    marginVertical: 10,

  },
  heading: {
    ...Fonts.PoppinsRegular,
    fontWeight: '400',
    fontSize: width * 0.032,
    color: Colors.black,
    lineHeight: 19,
  },
  heading2: {
    ...Fonts.PoppinsRegular,
    fontWeight: '500',
    fontSize: width * 0.037,
    color: Colors.black,
    lineHeight: 19,
  },
});
export default TermsAndCondition;
