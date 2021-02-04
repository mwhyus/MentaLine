import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

const Input = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#C1C1C1',
        borderRadius: 10,
        padding: 12
    },
    container: {
        marginTop: 15
    },

    label: {
        fontSize: 16,
        marginBottom: 6,
        fontFamily: 'Nunito-Regular',
        color: colors.text.secondary
    }
})
