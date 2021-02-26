import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyHospital1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListHospitals = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyHospital1} style={styles.picture} />
            <View>
                <Text style={styles.title}>Rumah Sakit</Text>
                <Text style={styles.title}>Grestelina</Text>
                <Text style={styles.address}>Jl. Hertasning 20</Text>
            </View>
        </View>
    )
}

export default ListHospitals

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    picture: {
        width: 80,
        height: 60,
        marginRight: 16
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    address: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 6
    }
})
