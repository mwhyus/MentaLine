import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header1, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header1 title='Doctor Profile' onPress={() => navigation.goBack()} />
            <Profile name='Reiner Braun' desc='General Practitioner' />
            <Gap height={10} />
            <ProfileItem label='Specialization' value='General Practitioner' />
            <ProfileItem label='Location' value='Greater Jakarta' />
            <ProfileItem label='ID Number' value='0001745730176498' />
            <View style={styles.action}>
                <Button title='Start Conversation' onPress={() => navigation.navigate('Chatting')} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    action: {
        paddingHorizontal: 50,
        paddingTop: 54
    }
})
