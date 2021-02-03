import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ICLogo } from '../../assets'
import { Button, Gap, Input } from '../../components'

const Login = () => {
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
            <Button title='Sign In' />

            <View style={styles.container}>
                <Text style={styles.text1}>Dont have an account?</Text>
                <TouchableOpacity>
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
        color: '#7D8797',
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
        fontFamily: 'Nunito-SemiBold',
        color: "#7D8797"
    },
    text2: {
        fontFamily: 'Nunito-Bold',
        color: "#7D8797",
    }



})
