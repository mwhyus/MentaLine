import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header1 = ({onPress, title, type}) => {
    return (

        <View style={styles.container(type)}>
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
    container: (type) => ({
        paddingHorizontal: 16,
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: type == 'light' ? colors.primary : colors.white,
        borderBottomLeftRadius: type == 'light'? 20 : 0,
        borderBottomRightRadius: type == 'light'? 20 : 0
    }),
    text: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.primary
    }
})
