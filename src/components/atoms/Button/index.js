import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({ type, title, onPress }) => {
    return (

        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : '#009AA3',
        paddingVertical: 10,
        borderRadius: 10,
        width: 300

    }),
    text: (type) => ({
        fontSize: 18,
        fontWeight: '900',
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: type === 'secondary' ? 'black' : 'white'
    })
})
