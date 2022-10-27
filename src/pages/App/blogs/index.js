import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar} from 'react-native';
import { CATEGORIES } from '../../../constants/category';
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
