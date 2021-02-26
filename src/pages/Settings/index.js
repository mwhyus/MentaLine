import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ButtonLogout, HomeProfile, Link } from '../../components'
import { colors } from '../../utils'

const Settings = () => {
    return (
        <View style={styles.pages}>
            <View style={styles.header}>
                <HomeProfile />
            </View>

            <View style={styles.divider} />

            <View style={styles.container}>
                <View style={styles.content}>
                    <Link title='Languages' />
                    <TouchableOpacity style={styles.textwrapper}>
                        <Link title='Edit Profile' paddingVertical={4} />
                    </TouchableOpacity>
                    <Link title='Give Us Rate' />
                    <Link title='Help Center' />
                </View>

                <View style={styles.logout}>
                    <ButtonLogout />
                </View>
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingTop: 50
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        width: '80%',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 50
    },
    content: {
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 70
    },
    textwrapper: {
        borderWidth: 1,
        width: 250,
        borderColor: colors.wrapper,
        borderRadius: 8,
        alignItems: 'center',
        height: 36,
        marginBottom: 18
    },
    logout: {
        alignItems: 'center'
    }
})
