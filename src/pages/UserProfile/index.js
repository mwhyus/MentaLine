import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header1, Input, Profile } from '../../components'
import { colors } from '../../utils'

const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header1 title='Edit Profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile />
                    <Input label='Full Name' />
                    <Gap height={5} />
                    <Input label='Profession' />
                    <Gap height={5} />
                    <Input label='Email' />
                    <Gap height={5} />
                    <Input label='Password' />
                    <Gap height={30} />
                    <View style={styles.smallcontainer}>
                        <Gap width={6}/>
                        <Button title='Save Profile' />
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
