import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({profile, name, chat}) => {
    return (
        <View style={styles.pages}>
            <Image source={profile} style={styles.avatar} />
            <TouchableOpacity>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{chat}</Text>
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
