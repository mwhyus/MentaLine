import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, onPress } from 'react-native'
import { ILGetStarted, ILText } from '../../assets'
import { Button, Gap } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={{ width: '100%', height: '100%' }}>
            <View style={styles.page}>
                <View>
                    <Image source={ILText} style={{ width: '60%', height: 80, marginTop: '40%' }} />
                </View>
                <View style={styles.container}>
                    <Button title="Get Started" onPress = {() => navigation.navigate('Register')} />
                    <Gap height={16}/>
                    <Button type="secondary" title="Sign In" onPress = {() => navigation.navigate('Login')} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 25,
        justifyContent: 'space-between',
        flex: 1
    },
    container: {
        alignItems: 'center',
        marginBottom: "5%"
    }
})