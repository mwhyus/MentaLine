import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListHospitals = ({type, name, address, picture}) => {
    return (
        <View style={styles.container}>
            <Image source={picture} style={styles.picture} />
            <View>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
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
