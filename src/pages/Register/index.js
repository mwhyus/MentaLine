import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { fonts } from '../../utils'


const Register = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.text}>Register Yourself</Text>
            <Input label='Full Name' />
            <Input label='Profession' />
            <Input label='Email' />
            <Input label='Password' />
            <Gap height={20} />
            <View style={{ marginLeft: 7 }}>
                <Button title='Sign Up' onPress={() => navigation.navigate('UploadPhoto')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.text1}>Dont have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text2}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    MainContainer: {
        padding: 40,

    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5
    },
    text: {
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 22,
        marginBottom: 40
    }
})
