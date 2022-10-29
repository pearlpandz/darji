import React from 'react'
import { Dimensions, Text, View } from 'react-native'

function CollectReference() {
  return (
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: Dimensions.get('window').height - 200,
    }}>
        <Text>Upcoming Feature</Text>
    </View>
  )
}

export default CollectReference