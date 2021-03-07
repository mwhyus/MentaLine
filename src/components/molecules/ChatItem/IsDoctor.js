import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoc1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const IsDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoc1} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Hi, it’s doctor Reiner, may i help you regarding your problem?</Text>
                </View>
                <Text style={styles.date}>2.30 PM</Text>
            </View>
        </View>
    )
}

export default IsDoctor

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.wrapper,
        maxWidth: '85%',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.third
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    },
    avatar: {
        marginRight: 12,
        width: 30,
        height: 30
    }
})
