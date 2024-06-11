import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet,View} from 'react-native';
import Colors from '../../utils/Colors';

const FadeModal = ({
  isVisible = true,
  onBackdropPress = () => {},
  onBackButtonPress = () => {},
  style = {},
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible} 
      backdropOpacity={0}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}>
        
      <View elevation={5} style={[styles.container, style]}>{children}</View>
    </Modal>
  );
};

export default FadeModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
});
