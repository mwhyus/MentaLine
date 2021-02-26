import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const ButtonLogout = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>LOGOUT</Text>
        </TouchableOpacity>
    )
}

export default ButtonLogout

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderRadius: 10,
        width: 250,
        backgroundColor: colors.button.third.background,
        height: 40
    },
    text: {
        fontSize: 16,
        fontWeight: '900',
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.white
    }
})
