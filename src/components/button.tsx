import React, { ReactNode } from 'react';
import { StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native';

interface ICustomButtonProps {
  handlePress: () => void;
  children: ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  customStyle,
  children,
  handlePress,
}) => {
  return (
    <Pressable style={[styles.button, customStyle]} onPress={handlePress}>
      {children}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
