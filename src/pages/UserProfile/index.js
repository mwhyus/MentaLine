import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { launchImageLibrary } from 'react-native-image-picker'
import { ILNullPhoto } from '../../assets'
import { Button, Gap, Header1, Input, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, getData, storeData } from '../../utils'

const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        Profession: '',
        Email: '',
        Photo: ILNullPhoto
    });

    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            setPhoto({ uri: res.photo })
            setProfile(data)

        })
    }, []);

    const update = () => {
        console.log('profile: ', profile)
        const data = profile
        data.photo = photoForDB
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                console.log('success: ', data)
                storeData('user', data)
            }).catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            })
    };

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    };

    const getImage = () => {
        launchImageLibrary(
            {quality: 0.5,maxWidth: 200, maxHeight: 200, includeBase64: true },
            response => {
                console.log('response: ', response)
                if (response.didCancel || response.error) {
                    showMessage({
                        message: `Oops, you haven't selected a photo`,
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white
                    })
                } else {
                    console.log('respon getImage: ', response)
                    const source = { uri: response.uri }

                    setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                    setPhoto(source)
                }
            }
        )
    }
    return (
        <View style={styles.container}>
            <Header1 title='Edit Profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage} />
                    <Input
                        label='Full Name'
                        value={profile.fullName}
                        onChangeText={(value) => changeText('fullName', value)}
                    />
                    <Gap height={5} />
                    <Input
                        label='Profession'
                        value={profile.Profession}
                        onChangeText={(value) => changeText('Profession', value)}
                    />
                    <Gap height={5} />
                    <Input label='Email' value={profile.Email} disable />
                    <Gap height={5} />
                    <Input label='Password' value={password} />
                    <Gap height={30} />
                    <View style={styles.smallcontainer}>
                        <Gap width={6} />
                        <Button title='Save Profile' onPress={(update)} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 40,
        paddingTop: 0
    },
    smallcontainer: {
        flexDirection: 'row'
    }
})
