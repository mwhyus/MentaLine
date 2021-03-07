import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { DummyDoc1 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const LightProfile = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Button type='icon-only' icon='back-dark' />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.name}>Reiner Braun</Text>
                <Text style={styles.desc}>General Practitioner</Text>
            </View>
            <Image source={DummyDoc1} style={styles.avatar} />
        </View>
    )
}

export default LightProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 22,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    avatar: {
        width: 58,
        height: 58
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    desc: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.secondary,
        fontFamily: fonts.primary[700]
    }
})
