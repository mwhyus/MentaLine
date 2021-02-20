import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ICHome, ICHomeActive, ICMessages, ICMessagesActive, ICSettings, ICSettingsActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Home'){
            return active ? <ICHomeActive /> : <ICHome />
        }
        if (title === 'Messages'){
            return active ? <ICMessagesActive /> : <ICMessages />
        }
        if (title === 'Settings'){
            return active ? <ICSettingsActive /> : <ICSettings />
        }
        return <ICHome />

    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => ({
        fontSize: 12,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 4
    })
})
