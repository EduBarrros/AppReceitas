import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    FlatList,
    StatusBar
} from 'react-native';
import { CategoryCard } from '../components';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from '../constants'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={
                    <View></View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard 
                            categoryItem={item}
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            onPress={() => navigation.navigate('Recipe', {recipe: item})}
                        />
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 80
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default Home;