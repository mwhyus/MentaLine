import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const IsMe = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.text}>Hi, it’s doctor Zoe, may i help you regarding your problem?</Text>
            </View>
            <Text style={styles.date}>2.30 PM</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    }
})
