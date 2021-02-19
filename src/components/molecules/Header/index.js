import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header1 = ({onPress, title}) => {
    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Button type='icon-only' icon='back-dark' onPress={onPress}/>
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header1

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.primary
    }
})
