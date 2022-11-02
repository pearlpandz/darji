import React, { useMemo, useState } from 'react'
import { Text, View, StatusBar, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shirt from '../../../reusables/customization/shirt';


function Measurement({ routes, navigation }) {
  const customizeConfigs = [
    { title: 'select body type', key: 'bodyType' },
    { title: 'select shirt size', key: 'size' },
    { title: 'select shoulder type', key: 'shoulder' },
    { title: 'select height', key: 'height' },
    { title: 'select preferred fit', key: 'fit' },
    { title: 'write a note / record instructions', key: 'note' }
  ]

  const bodyTypes = [
    { name: 'athletic', image: require('./../../../assets/customization/shirt/body-1.png') },
    { name: 'slight belly', image: require('./../../../assets/customization/shirt/body-2.png') },
    { name: 'significant belly', image: require('./../../../assets/customization/shirt/body-3.png') },
  ]

  const shoulderTypes = [
    { name: 'average', image: require('./../../../assets/customization/shirt/shoulder-1.png') },
    { name: 'sloping', image: require('./../../../assets/customization/shirt/shoulder-2.png') }
  ]

  const fitTypes = [
    { name: 'super slim', image: require('./../../../assets/customization/shirt/fit-1.png') },
    { name: 'structured', image: require('./../../../assets/customization/shirt/fit-2.png') },
    { name: 'relaxed', image: require('./../../../assets/customization/shirt/fit-3.png') },
  ]

  const [config, setConfig] = useState({ size: 0, shoulder: '', fit: '', bodyType: '', height: '' });

  const customizer = ({ item, index }) => {
    switch (item.key) {
      case 'bodyType':
        return <View key={item.index} style={[styles.card, { marginLeft: 20 }]}>
          <Text style={styles.cardInfo}>1/6</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.bodyCards}>
            {
              bodyTypes.map((body, index) => (
                <TouchableOpacity key={index} onPress={() => setConfig({ ...config, bodyType: body.name })}>
                  <View style={[styles.bodyCard, { width: (Dimensions.get('window').width - 100) / 3, marginLeft: index === 0 ? 0 : 10, borderColor: config.bodyType === body.name ? '#D97D54' : 'transparent' }]}>
                    <Image source={body.image} style={{ height: 100, width: '100%' }} alt={body.name} resizeMode="contain" />
                    <Text style={{ marginTop: 10, textTransform: 'capitalize', textAlign: 'center', letterSpacing: 0.6, lineHeight: 18 }}>{body.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>

      case 'size':
        return <View key={item.index} style={[styles.card]}>
          <Text style={styles.cardInfo}>2/6</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {[36, 38, 40, 42, 44, 46, 48].map((item, key) => <TouchableOpacity onPress={() => setConfig({ ...config, size: item })}>
              <Text style={[styles.size, {
                borderColor: config.size === item ? '#D97D54' : '#C8D1D3',
                borderStyle: config.size === item ? 'solid' : 'dashed',
                backgroundColor: config.size === item ? '#fff' : '#F0F3F4'
              }]} key={key}>{item}</Text>
            </TouchableOpacity>
            )}
          </View>
        </View>

      case 'shoulder':
        return <View key={item.index} style={[styles.card]}>
          <Text style={styles.cardInfo}>3/6</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.bodyCards}>
            {
              shoulderTypes.map((body, index) => (
                <TouchableOpacity key={index} onPress={() => setConfig({ ...config, shoulder: body.name })}>
                  <View style={[styles.bodyCard, { width: (Dimensions.get('window').width - 100) / 2, marginLeft: index === 0 ? 0 : 10, borderColor: config.shoulder === body.name ? '#D97D54' : 'transparent' }]}>
                    <Image source={body.image} style={{ height: 100, width: '100%' }} alt={body.name} resizeMode="contain" />
                    <Text style={{ marginTop: 10, textTransform: 'capitalize', textAlign: 'center', letterSpacing: 0.6, lineHeight: 18 }}>{body.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>

      case 'height':
        return <View key={item.index} style={[styles.card]}>
          <Text style={styles.cardInfo}>4/6</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {["5'0", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9"].map((item, key) => <TouchableOpacity onPress={() => setConfig({ ...config, height: item })}>
              <Text style={[styles.size, {
                borderColor: config.height === item ? '#D97D54' : '#C8D1D3',
                borderStyle: config.height === item ? 'solid' : 'dashed',
                backgroundColor: config.height === item ? '#fff' : '#F0F3F4'
              }]} key={key}>{item}</Text>
            </TouchableOpacity>
            )}
          </View>
        </View>

      case 'fit':
        return <View key={item.index} style={[styles.card]}>
          <Text style={styles.cardInfo}>5/6</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.bodyCards}>
            {
              fitTypes.map((body, index) => (
                <TouchableOpacity key={index} onPress={() => setConfig({ ...config, fit: body.name })}>
                  <View style={[styles.bodyCard, { width: (Dimensions.get('window').width - 100) / 3, marginLeft: index === 0 ? 0 : 10, borderColor: config.fit === body.name ? '#D97D54' : 'transparent' }]}>
                    <Image source={body.image} style={{ height: 100, width: '100%' }} alt={body.name} resizeMode="contain" />
                    <Text style={{ marginTop: 10, textTransform: 'capitalize', textAlign: 'center', letterSpacing: 0.6, lineHeight: 18 }}>{body.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>

      case 'note':
        return <View key={item.index} style={[styles.card, {paddingHorizontal: 20}]}>
          <Text style={styles.cardInfo}>6/6</Text>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <TextInput style={styles.input} multiline numberOfLines={8} textAlignVertical="top" />
        </View>

      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#87BCBF' }}>
      <ScrollView>
        <View style={styles.horizontalAlign}>
          <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Measurements (Shirt)</Text>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Shirt config={config} />
        </View>
        <View>
          <FlatList
            data={customizeConfigs}
            renderItem={(item) => {
              return (
                customizer(item)
              )
            }}
            scrollEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  horizontalAlign: {
    flexDirection: 'row',
    padding: 15
  },
  card: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 60,
    marginRight: 20,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    flex: 1,
    position: 'relative'
  },
  cardTitle: {
    color: '#334856',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 15
  },
  bodyCards: {
    flexDirection: 'row',
  },
  bodyCard: {
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12
  },
  size: {
    borderRadius: 50,
    borderWidth: 1,
    width: 50,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 15,
    marginBottom: 15
  },
  cardInfo: {
    position: 'absolute',
    right: 10,
    top: -25,
    zIndex: 10,
    color: '#fff'
  },
  input: {
    borderWidth: 1, 
    borderColor: '#E6E6E6',
    padding: 15, 
    borderRadius: 12
  }
})

export default Measurement