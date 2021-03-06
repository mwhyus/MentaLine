import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { ILLDocGen } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({type1, type2, pic}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.smallcontainer}>
                <Image source={pic} style={styles.illustratioon} />
                <Text style={styles.label}>{type1}</Text>
                <Text style={styles.category}>{type2}</Text>
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
        width: 115,
        height: 120
        
    },
    smallcontainer: {
        paddingBottom: 4,
        paddingTop: 4
    },

    label:{
        fontSize: 14,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginRight: 5,
    },
    category: {
        color: colors.text.primary,
        fontFamily: fonts.primary[700],
        fontSize: 14,
    },
    illustratioon: {
        marginBottom: 10,
        height: 42,
        width: 42
    }
})

