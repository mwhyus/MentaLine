import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeProfile } from '../../components'
import { colors } from '../../utils'

const Settings = () => {
    return (
        <View style={styles.pages}>
            <View style={styles.header}>
                <HomeProfile />
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.backgroundColor,
        flex: 1
    },
    header: {
        alignItems: 'center',
        paddingTop: 50
    }
})
