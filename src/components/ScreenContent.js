import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const ScreenContent = ({ children }) => {
  return (
    <View style={tw`rounded-t-[30px] h-full bg-gray-950 pt-6 px-2`}>
      {children}
    </View>
  );
};

export default ScreenContent;
