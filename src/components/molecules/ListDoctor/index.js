import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ICChatNow } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({profile, name, chat, type, onPress}) => {
    return (
        <TouchableOpacity style={styles.pages} onPress={onPress}>
            <Image source={profile} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{chat}</Text>
            </View>
            {type == "Chat" && <ICChatNow /> }
        </TouchableOpacity>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    pages: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
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
