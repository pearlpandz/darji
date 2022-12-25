import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import TabPageView from './tab';

function SelectDressToDesign({route}) {
  const {orderData} = route.params;
  return (
    <View style={{ flex: 1 }}>
      <TabPageView orderData={orderData} />
    </View>
  )
}

export default SelectDressToDesign