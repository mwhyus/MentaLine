import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DummyDoc1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = () => {
    return (
        <View style={styles.pages}>
            <Image source={DummyDoc1} style={styles.avatar} />
            <TouchableOpacity>
                <Text style={styles.name}>Reiner Braun</Text>
                <Text style={styles.chat}>Hi Doc, I have a problem with...</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    pages: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        alignItems: 'center'
    },
    avatar: {
        width: 54,
        height: 54,
        marginRight: 12
    },
    name: {
        fontSize: 17,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    chat: {
        fontSize: 15,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    }
})
