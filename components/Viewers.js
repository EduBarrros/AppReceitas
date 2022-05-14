import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';
import { COLORS, FONTS } from '../constants';


const Viewers = ({ viewersList }) => {

    React.useEffect(() => {
        console.log('Teste List', viewersList)
    },[])

    if (viewersList?.lenght == 0) {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        ...FONTS.body4
                    }}
                >
                    Be the first one to try this
                </Text>
            </View>
        )
    } else if (viewersList?.lenght == 4) {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: 10
                    }}
                >
                    {
                        viewersList?.map((item, index) => (
                            <View
                                key={index}
                                style={{
                                    height: 50,
                                    width: 50,
                                    marginLeft: index == 0 ? 0 : - 20
                                }}
                            >
                                <Image
                                    source={item.profilePic}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25
                                    }}
                                />
                            </View>
                        ))
                    }
                </View>
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}
                >
                    {viewersList?.lenght} people
                </Text>
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}
                >
                    Already try this!
                </Text>
            </View>
        )
    } else {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: 10
                    }}
                >
                    {
                        viewersList?.map((item, index) => {
                            if (index <= 2) {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            height: 50,
                                            width: 50,
                                            marginLeft: index == 0 ? 0 : - 20
                                        }}
                                    >
                                        <Image
                                            source={item.profilePic}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 25
                                            }}
                                        />
                                    </View>
                                )
                            }
                            if (index == 3) {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            height: 50,
                                            width: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: - 20,
                                            borderRadius: 25,
                                            backgroundColor: COLORS.darkGreen
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.white,
                                                ...FONTS.body4
                                            }}
                                        >
                                            3+
                                        </Text>
                                    </View>
                                )
                            }
                        })
                    }
                </View>
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}
                >
                    4 people
                </Text>
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}
                >
                    Already try this!
                </Text>
            </View>
        )
    }
}

export default Viewers