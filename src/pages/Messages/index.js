import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
    return (
        <View style={styles.pages}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
            </View>
            <ScrollView>
                <ListDoctor />
                <ListDoctor />
                <ListDoctor />
            </ScrollView>


        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.backgroundColor,
        flex: 1
    },
    content: {
        backgroundColor: colors.primary,
        height: 60,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginBottom: 20,

    },
    title: {
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 14,
        fontSize: 22,
        fontFamily: fonts.primary[600]
    },
})
