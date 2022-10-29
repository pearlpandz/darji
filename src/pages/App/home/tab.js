import * as React from 'react';
import { View, useWindowDimensions, Text, Dimensions, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import CollectReference from './collectReference';
import UploadReference from './uploadReference';

const Route = ({ type }) => {
    return <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        {
            type === 'tab1' ?
                <UploadReference /> :
                <CollectReference />
        }
    </ScrollView>
};

const renderScene = SceneMap({
    tab1: () => <Route type='tab1' />,
    tab2: () => <Route type='tab2' />,
});

export default function TabPageView() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'tab1', title: 'Upload Reference' },
        { key: 'tab2', title: 'Collect Reference' },
    ]);

    const renderTabBar = (props) => {
        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.tabItem}
                            onPress={() => setIndex(i)}>
                            <Animated.Text style={{
                                color: i === index ? '#000' : '#B1B1B1',
                                fontWeight: i === index ? 'bold' : '400',
                                borderBottomWidth: 2,
                                borderColor: i === index ? '#e8875b' : 'transparent',
                                textTransform: 'capitalize',
                                letterSpacing: 1,
                                textAlign: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 15,
                                backgroundColor: i === index ? '#fff' : '#E4E7E8'
                            }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
    },
});