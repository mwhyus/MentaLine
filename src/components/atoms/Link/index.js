import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({title, paddingVertical}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text(paddingVertical)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (paddingVertical) => ({
        fontSize: 16,
        color: colors.text.primary,
        fontFamily: fonts.primary[400],
        marginBottom: 22,
        paddingVertical: paddingVertical
    })
})
