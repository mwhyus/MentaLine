import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyUser} style={styles.avatar} />
            <View>
                <Text style={styles.name}>Erwin Smith</Text>
                <Text style={styles.profession}>Head of Survey Corps</Text>
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
        color: colors.text.primary
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary
    }
})
