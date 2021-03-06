import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'
import BtnIconSend from './BtnIconSend'
import IconOnly from './IconOnly'

const Button = ({ type, title, onPress, icon, disable }) => {
   if (type == 'btn-icon-send'){
       return <BtnIconSend disable={disable} />
   }
    if (type == 'icon-only'){
       return <IconOnly icon={icon} onPress={onPress}/>
   }
   
    return (

        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10,
        width: 300

    }),
    text: (type) => ({
        fontSize: 18,
        fontWeight: '900',
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: type === 'secondary' ? 'black' : 'white'
    })
})
