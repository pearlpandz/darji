import React, { useMemo, useState } from 'react'
import { Text, View, StatusBar, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../../../reusables/button';
import MyShirt from '../../../../../reusables/customization/myshirt';
import CollorOptions from './collorOptions';
import { CUSTOMIZE_OPTIONS, COLLORS, POCKETS, SLEEVES, CUFFS, BACKS, STAMPS, CUFFS_TYPE } from './constant';

function ShirtCustomization({ routes, navigation }) {
  const [config, setConfig] = useState({
    collor: 'prince charlie',
    pocket: 'single pocket',
    sleeve: 'full hand',
    cuff: 'single button',
    cuffStyle: 'inner style',
    back: 'no pleats',
    stamp: 'collar'
  });
  const [selectedIndex, setSelection] = useState(0);
  const [isDone, setDone] = useState(false);
  const [note, setNote] = useState();

  const getView = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return <CollorOptions
          data={COLLORS}
          selected={config.collor}
          setSelected={(collor) => setConfig({ ...config, collor: collor })} />

      case 1:
        return <CollorOptions
          data={POCKETS}
          selected={config.pocket}
          setSelected={(pocket) => setConfig({ ...config, pocket: pocket })} />

      case 2:
        return <CollorOptions
          data={SLEEVES}
          selected={config.sleeve}
          setSelected={(sleeve) => setConfig({ ...config, sleeve: sleeve })} />

      case 3:
        return <CollorOptions
          data={CUFFS}
          selected={config.cuff}
          setSelected={(item) => setConfig({ ...config, cuff: item })} />
      
      case 4:
        return <CollorOptions
          data={CUFFS_TYPE}
          selected={config.cuffStyle}
          setSelected={(item) => setConfig({ ...config, cuffStyle: item })} />

      case 5:
        return <CollorOptions
          data={BACKS}
          selected={config.back}
          setSelected={(item) => setConfig({ ...config, back: item })} />

      case 6:
        return <CollorOptions
          data={STAMPS}
          selected={config.stamp}
          setSelected={(item) => setConfig({ ...config, stamp: item })} />

      default:
        return <Text style={{ color: '#000' }}>{selectedIndex}</Text>
    }
  }, [selectedIndex, config])

  const isValid = () => {
    const values = Object.values(config);
    return values.every(a => a);
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#87BCBF' }}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View>
          <View style={[styles.horizontalAlign]}>
            <Ionicons name='chevron-back' size={22} color="#fff" onPress={() => navigation.goBack()} />
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Shirt</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
          <MyShirt config={config} />
        </View>
        <View style={styles.container}>
          <View style={styles.customizationSection}>
            {
              isDone ?
                <View style={{padding: 15}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 15}}>Write a Note / Record Instructions</Text>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    multiline
                    numberOfLines={15}
                    value={note}
                    onChangeText={(_note) => { setNote(_note) }}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                  />
                </View> : <><FlatList
                  style={styles.customizeOption}
                  data={CUSTOMIZE_OPTIONS}
                  renderItem={({ item, index }) => {
                    return (
                      <Pressable
                        style={[styles.optionCard, selectedIndex === index && styles.boxWithShadow, { borderColor: selectedIndex === index ? '#D97D54' : '#E6E6E6', margin: 12 }]}
                        onPress={() => setSelection(index)}>
                        <Image source={item.icon} style={styles.optionIcon} />
                        <Text style={styles.optionLable}>{item.name}</Text>
                      </Pressable>
                    )
                  }}
                  scrollEnabled={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
                  <View style={styles.customizeSelection}>
                    {getView}
                  </View>
                </>
            }
          </View>
          <View style={{ marginTop: 20 }}>
            <Button type={isValid() ? 'primary' : 'disabled'} label='save & next' disabled={!isValid()} onPress={() => setDone(true)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  boxWithShadow: {
    shadowColor: '#FC9667',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10
  },
  horizontalAlign: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#87BCBF'
  },
  card: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 60,
    marginRight: 20,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    position: 'relative',
    height: 245
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
  },
  customizationSection: {
    backgroundColor: '#fff',
    borderRadius: 12
  },
  customizeOption: {
    paddingRight: 0,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
  optionCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10
  },
  optionIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10
  },
  optionLable: {
    fontSize: 12,
    color: '#324755',
    textTransform: 'capitalize'
  },
  customizeSelection: {
    padding: 10,
  }
})

export default ShirtCustomization