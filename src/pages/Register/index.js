import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button, Gap, Header1, Input } from '../../components'


const Register = (navigation) => {
    return (
        <View>
            <Header1 />
            <View style={styles.MainContainer}>
                <Text style={{textAlign: 'center'}}>Register Yourself</Text>
                <Input label='Full Name' />
                <Input label='Profession' />
                <Input label='Email' />
                <Input label='Password' />
                <Gap height={20} />
                <View style={{ marginLeft: 7}}>
                    <Button title='Sign Up' />
                </View>
                <View style={styles.container}>
                <Text style={styles.text1}>Dont have an account? </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                    <Text style={styles.text2}>Sign In</Text>
                </TouchableOpacity>
            </View>
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
    }
})
