import React, { useState } from 'react';

import {
  SafeAreaView,
  Scrollview,
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Button,
  ScrollView,
  VirtualizedList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomecons from 'react-native-vector-icons/FontAwesome';
import { CATEGORIES } from '../../../constants/category';
import { PROPERTIES } from '../../../constants/property';
import VerticalCardView from '../../../reusables/verticalCardView';
import HorizontalCardView from '../../../reusables/horizontalCardView';
import TabView from './tab';
import Navigation from '../../../reusables/navigation';


const BlogPage = ({ navigation }) => {
  const [selectedCategory, setCategory] = useState(CATEGORIES[0])
  const [query, setQuery] = useState();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#fff' }}>
      {/* <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}> */}
          <Navigation />
          <View style={{ flex: 1 }}>
            <TabView />
          </View>
      {/* </ScrollView> */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default BlogPage;
