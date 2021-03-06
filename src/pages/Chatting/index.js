import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header1, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View>
            <Header1 type='light-profile' title="Zoe Hange" onPress={() => navigation.goBack()} />
            <Text style={styles.chatDate}>23 August, 2020</Text>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <InputChat />

        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    }
})
