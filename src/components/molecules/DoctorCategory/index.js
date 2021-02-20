import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ILDocGen } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.smallcontainer}>
                <ILDocGen style={styles.illustratioon} />
                <Text style={styles.category}>General Practitioners</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 7,
        marginBottom: 7
    },
    smallcontainer: {
        paddingBottom: 4,
        paddingTop: 4
    },
    category: {
        maxWidth: 100,
        color: colors.text.primary,
        fontFamily: fonts.primary[700]
    },
    illustratioon: {
        marginBottom: 10,
    }
})

