import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header1, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header1 type='light-profile' title="Zoe Hange" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>23 August, 2020</Text>
                <ChatItem isDoctor />
                <ChatItem />
                <ChatItem isDoctor/>
            </View>
            <InputChat />

        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {flex: 1},
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    },
    content: {
        flex: 1
    }
})
