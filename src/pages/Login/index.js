import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ICLogo } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts } from '../../utils'

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 40 }}>
            <View style={styles.logo}>
                <ICLogo />
            </View>
            <Input label="Email" />
            <Input label="Password" />

            <TouchableOpacity>
                <Text style={styles.fPassword}>Forget My Password</Text>
            </TouchableOpacity>

            <Gap height={34} />
            <Button title='Sign In' onPress={() => navigation.replace('MainApp')} />

            <View style={styles.container}>
                <Text style={styles.text1}>Dont have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.text2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginTop: '25%',
        marginBottom: '10%'

    },
    fPassword: {
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        marginTop: 5,
        fontFamily: 'Nunito-Regular'
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5
    },
    text1: {
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    },
    text2: {
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
    }



})