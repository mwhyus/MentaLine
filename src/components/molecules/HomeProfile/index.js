import React from 'react'
import { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = () => {
    const [profile, setProfile] = useState({
        Photo: ILNullPhoto,
        fullName: '',
        Profession: '',
    });
    
    
    useEffect(() => {
        getData('user').then(res => {
            // console.log('data user:', res);
            const data = res;
            data.Photo = {uri: res.photo};
            console.log('new profile', data)
            setProfile(res)
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={profile.Photo} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profession}>{profile.Profession}</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: 12
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize'        
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize',
    }
})
