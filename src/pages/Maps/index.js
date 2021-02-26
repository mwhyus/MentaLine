import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, ILCover, DummyHospital2, DummyHospital3 } from '../../assets'
import { Header1, ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Maps = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILCover} style={styles.background}>
                <Header1 title='Nearby Hospital' onPress={() => navigation.goBack() }/>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital picture={DummyHospital1} type="Rumah Sakit" name="Grestelina" address="Jl. Hertasning No. 20"/>
                <ListHospital picture={DummyHospital2} type="Rumah Sakit" name="Marley" address="Jl. Liberio Pusat No. 28" />
                <ListHospital picture={DummyHospital3} type="Klinik" name="Eldians" address="Jl. Tembok Shiganshina No. 03" />
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
