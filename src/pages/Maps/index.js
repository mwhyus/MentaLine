import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILCover } from '../../assets'
import { Header1, ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Maps = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILCover} style={styles.background}>
                <Header1 title='Nearby Hospital' onPress={() => navigation.goBack() }/>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital />
                <ListHospital />
                <ListHospital />
            </View>
        </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    background: {
        height: 240,
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -25,
        paddingTop: 14
    }
})
