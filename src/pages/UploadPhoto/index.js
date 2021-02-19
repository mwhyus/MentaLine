import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ICAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Header1 } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = () => {
    return (
        <View style={{flex: 1}}>
            <Header1 title='Upload Photo' />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.border}>
                        <Image source={ILNullPhoto} style={styles.nullphoto} />
                        <ICAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Erwin Smith</Text>
                    <Text style={styles.profession}>Head of Survey Corps</Text>
                </View>

                <View style={styles.smallContainer}>
                    <Button title='Upload and Continue' />
                </View>

            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({

    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    nullphoto: {
        height: 110,
        width: 110
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
    }
})
