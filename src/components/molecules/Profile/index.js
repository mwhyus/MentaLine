import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({ name, desc, isRemove, photo, onPress }) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove && <ICRemovePhoto style={styles.removePhoto} />}
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                    <Image source={photo} style={styles.avatar} />
                    {isRemove && <ICRemovePhoto style={styles.removePhoto} />}
                </TouchableOpacity>
            )}
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    borderProfile: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 2,
        textAlign: 'center'
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center'
    },
    removePhoto: {
        position: 'absolute',
        right: 2,
        bottom: 2

    }
})
