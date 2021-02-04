import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICBackDark } from '../../../assets'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'

const Header1 = () => {
    return (

        <View style={styles.container}>
            <ICBackDark />
            <Text style={styles.text}>Header Comp</Text>
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
        fontFamily: 'Nunito-SemiBold',
        fontSize: 20,
        color: colors.text.primary
    }
})
