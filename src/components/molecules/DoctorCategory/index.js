import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({type1, type2, pic, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.smallcontainer}>
                <Image source={pic} style={styles.illustration} />
                <Text style={styles.label}>{type1}</Text>
                <Text style={styles.category}>{type2}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: colors.cardLight,
        borderRadius: 10,
        width: 115,
        height: 105
    },
    
    smallcontainer: {
        paddingBottom: 4,
        paddingTop: 4
    },

    label:{
        fontSize: 16,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        
    },
    category: {
        color: colors.text.primary,
        fontFamily: fonts.primary[700],
        fontSize: 14,
    },
    illustration: {
        marginBottom: 10,
        height: 42,
        width: 42,
        alignSelf: 'center'
    }
})

