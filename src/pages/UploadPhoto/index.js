import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from "react-native-flash-message"
import { launchImageLibrary } from 'react-native-image-picker'
import { useState } from 'react/cjs/react.development'
import { ICAddPhoto, ICRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Header1 } from '../../components'
import { Fire } from '../../config'
import { colors, fonts } from '../../utils'


const UploadPhoto = ({ navigation, route }) => {
    const { fullName, Profession, uid } = route.params
    
    const [photoForDB, setPhotoForDB] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
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
                    setHasPhoto(true)
                }
            })
    }

    const uploadAndContinue = () => {
        Fire.database()
            .ref('users/' + uid  + '/')
            .update({ photo: photoForDB })

            navigation.replace('MainApp')
    }

    return (
        <View style={styles.container}>
            <Header1 title='Upload Photo' onPress={() => navigation.navigate('Register')} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.border} onPress={getImage}>
                        <Image source={photo} style={styles.nullphoto} />
                        {hasPhoto && <ICRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <ICAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{Profession}</Text>
                </View>

                <View style={styles.smallContainer}>
                    <Button
                        disable={!hasPhoto}
                        title='Upload and Continue'
                        onPress={uploadAndContinue}

                    />
                </View>
                <TouchableOpacity onPress={() => navigation.replace('MainApp')}>
                    <Text style={styles.skip}>Skip this step</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    nullphoto: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2
    },

    border: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },

    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },

    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },

    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },

    smallContainer: {
        marginLeft: 5
    },
    skip: {
        color: colors.text.secondary,
        fontFamily: fonts.primary.normal,
        alignSelf: 'center',
        marginTop: 12,
        textDecorationLine: 'underline'
    }
})
