import React from 'react'
import { SafeAreaView, StatusBar, Text, View, StyleSheet, ScrollView, Dimensions, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import Navigation from '../../../reusables/navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import GIVE_MEASUREMENT from './../../../assets/images/icons/measuring.png';
import FABRIC_COLLECTION from './../../../assets/images/icons/layers.png';
import ALTER from './../../../assets/images/icons/repair.png';
import CUSTOMIZE_SHIRT from './../../../assets/images/icons/shirt.png';
import TAILOR from './../../../assets/images/icons/suit.png';
import HorizontalCardView from '../../../reusables/horizontalCardView';
import { FABRICS } from './constant';
import VerticalCardView from '../../../reusables/verticalCardView';

function HomePage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#f7f7f7' }}>
      <Navigation pageTitle="choose category" />
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        <View style={styles.cards}>
          <View style={[styles.card, styles.boxWithShadow, { marginLeft: 10 }]}>
            <Image source={GIVE_MEASUREMENT} style={styles.icon} />
            <Text>give measurement</Text>
          </View>
          <View style={[styles.card, styles.boxWithShadow]}>
            <Image source={FABRIC_COLLECTION} style={styles.icon} />
            <Text>give measurement</Text>
          </View>
          <View style={[styles.card, styles.boxWithShadow, { marginRight: 0 }]}>
            <Image source={ALTER} style={styles.icon} />
            <Text>give measurement</Text>
          </View>
          <View style={[styles.card, styles.boxWithShadow, { marginLeft: 10 }]}>
            <Image source={CUSTOMIZE_SHIRT} style={styles.icon} />
            <Text>give measurement</Text>
          </View>
          <View style={[styles.card, styles.boxWithShadow]}>
            <Image source={TAILOR} style={styles.icon} />
            <Text>give measurement</Text>
          </View>
        </View>

        <View style={{ marginVertical: 15 }}>
          <Text style={styles.sectionTitle}>Our Fabric Collection</Text>
          <FlatList
            data={FABRICS}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => setCategory(item)} key={index}>
                <HorizontalCardView item={item} marginRight={index === FABRICS.length - 1 ? 10 : 0} />
              </Pressable>
            )}
            scrollEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>Best selling Products</Text>
          <View style={{ paddingHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <VerticalCardView key={index} item={item} marginRight={index%2 === 0 ? 10 : 0} />
              ))
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    marginBottom: 15,
    textTransform: 'capitalize'
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    width: ((Dimensions.get('screen').width) - 40) / 3,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 6
  },
  boxWithShadow: {
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  },
  icon: {
    height: 50,
    width: 50,
    color: '#75bbb9'
  },
  horizontalAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginLeft: 15,
    color: '#fff',
    width: Dimensions.get('screen').width - 200
  }
})

export default HomePage