import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser, ICRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({ name, desc, isRemove }) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={DummyUser} style={styles.avatar} />
                {isRemove && <ICRemovePhoto style={styles.removePhoto}/>}
            </View>
            {
                name && (
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.profession}>{desc}</Text>
                    </View>
                )
            }
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
        height: 100
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
