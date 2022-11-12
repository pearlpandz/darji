import React from 'react'
import { SafeAreaView, StatusBar, Text, View, StyleSheet, ScrollView, Dimensions, Image, TextInput, Pressable } from 'react-native'
import Navigation from '../../../reusables/navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MEN_IMAGE from './../../../assets/images/men.png';
import WOMEN_IMAGE from './../../../assets/images/women.jpg';
import AVATAR from './../../../assets/images/avatar.png';
import GET_A_QUOTE from './../../../assets/images/getquote.png';

function HomePage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#f7f7f7' }}>
      <Navigation pageTitle="choose category" />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Welcome to Tailor Shop</Text>
          <View style={styles.hr} />
          <Text style={styles.bannerDesc}>One stop shop for your tailoring needs</Text>
          <View style={[styles.inputContainer, styles.boxWithShadow, { marginBottom: 15 }]}>
            <TextInput
              style={styles.input}
              placeholder=""
              underlineColorAndroid="transparent"
            />
            <Ionicons style={styles.inputInsideIcon} name="search" size={18} />
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>popular near you</Text>
          <View style={styles.cards}>
            <Pressable onPress={() => navigation.navigate('selectdesign', {
              title: 'Men',
              gender: 'male',
              uri: MEN_IMAGE
            })}>
              <View style={[styles.card, styles.boxWithShadow]}>
                <Image source={MEN_IMAGE} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                  <View style={[styles.iconView, styles.boxWithShadow]}>
                    <Ionicons name="male-outline" size={22} color='#e8875b' />
                  </View>
                  <Text style={{ textTransform: 'uppercase', fontWeight: '500', textAlign: 'center' }}>men</Text>
                  <Text style={{ fontSize: 12, color: '#7e8082', textAlign: 'center' }}>Stylish and Handsome Look</Text>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('selectdesign', {
              title: 'Women',
              gender: 'female',
              uri: WOMEN_IMAGE
            })}>
              <View style={[styles.card, styles.boxWithShadow, { marginRight: 0 }]}>
                <Image source={WOMEN_IMAGE} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                  <View style={[styles.iconView, styles.boxWithShadow]}>
                    <Ionicons name="female-outline" size={22} color='#e8875b' />
                  </View>
                  <Text style={{ textTransform: 'uppercase', fontWeight: '500', textAlign: 'center' }}>women</Text>
                  <Text style={{ fontSize: 12, color: '#7e8082', textAlign: 'center' }}>Coming Soon</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.sectionTitle}>get quote</Text>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={{ backgroundColor: '#e8875b', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 60, height: 60, borderRadius: 10, overflow: 'hidden', marginRight: 15 }}>
                <Image style={{ flex: 1, width: '100%' }} source={GET_A_QUOTE} resizeMode="cover" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' }}>assured best quote</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Reference site about Lorem Ipsum, giving information on its origins</Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{ marginVertical: 15 }}>
          <Text style={styles.sectionTitle}>fashion blog</Text>
          <View style={{ paddingHorizontal: 20 }}>
            {
              [0, 1, 2, 3, 4, 5].map((a, index) => (
                <View style={[styles.boxWithShadow, styles.blog]} key={index}>
                  <View style={{ width: 70, height: 70, borderRadius: 50, overflow: 'hidden', marginRight: 15 }}>
                    <Image style={{ flex: 1, width: '100%' }} source={AVATAR} resizeMode="cover" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>At a Scorching Copenhagen Fashion Week</Text>
                    <Text style={{ fontSize: 12, color: '#7e8082', marginTop: 5 }}>The Dane were a bit out of sorts last week. Temperature rose into the 90s</Text>
                  </View>
                </View>
              ))
            }
          </View>
        </View> */}

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
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 15,
    textTransform: 'capitalize'
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    width: ((Dimensions.get('screen').width) - 60) / 2,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    overflow: 'hidden'
  },
  cardDetails: {
    padding: 10,
    paddingTop: 30,
    position: 'relative',
    width: '100%'
  },
  iconView: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    top: -20,
    left: '42%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  boxWithShadow: {
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15
  },
  cardImage: {
    height: 120,
    flex: 1,
    width: '100%',
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
  },
  banner: {
    backgroundColor: '#86bcbf',
    paddingVertical: 20,
    paddingHorizontal: 30,
    position: 'relative',
    paddingBottom: 50,
    marginBottom: 30
  },
  bannerTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    maxWidth: 200,
    marginBottom: 10,
    letterSpacing: 1,
  },
  bannerDesc: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10
  },
  hr: {
    height: 2,
    width: 100,
    backgroundColor: '#fff'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'absolute',
    bottom: -30,
    left: 20,
    width: Dimensions.get('screen').width - 40
  },
  inputInsideIcon: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: '#e8865b',
    color: '#fff'
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#424242',
  },
  blog: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10
  }
})

export default HomePage