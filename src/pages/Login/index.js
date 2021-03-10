import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ScrollView } from 'react-native-gesture-handler'
import { ICLogo } from '../../assets'
import { Button, Gap, Input, Loading } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, storeData, useForm } from '../../utils'

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        Password: '',
    });

    const [loading, setLoading] = useState(false)

    let login = () => {
        console.log('form', form);
        setLoading(true)
        Fire.auth().signInWithEmailAndPassword(form.email, form.Password)
            .then(res => {
                console.log('success ', res)
                setLoading(false)
                // Fire.database()
                //     .ref(`users/${res.user.uid}/`)
                //     .once('value')
                //     .then(resDB => {
                //         console.log('data usernya : ', resDB.val())
                //         if (resDB.val()){
                //             storeData('user', resDB.val());
                //             navigation.replace('MainApp')
                //         }
                //     })
                navigation.replace('MainApp')
            })
            .catch(res => {
                console.log('error', res),
                    setLoading(false)
                showMessage({
                    message: res.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.text
                })
            })
    }

    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.logo}>
                        <ICLogo />
                    </View>
                    <Input label="Email" value={form.email} onChangeText={(value) => setForm("email", value)} />
                    <Input
                        label="Password"
                        value={form.Password}
                        onChangeText={(value) => setForm("Password", value)}
                        secureTextEntry
                    />

                    <TouchableOpacity>
                        <Text style={styles.fPassword}>Forget My Password</Text>
                    </TouchableOpacity>

                    <Gap height={34} />
                    <Button title='Sign In' onPress={login} />

                    <View style={styles.container}>
                        <Text style={styles.text1}>Dont have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.text2}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.backgroundColor
    },
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