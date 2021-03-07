import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoc1, DummyDoc2, DummyDoc3, DummyDoc4 } from '../../assets'
import { Header1, ListDoctor } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header1 type='light' title='Select a doctor' onPress={() => navigation.goBack()}/>
            <ListDoctor type='Chat' name='Reiner Braun' profile={DummyDoc1} chat='Greater Jakarta' onPress={() => navigation.navigate('DoctorProfile')} />
            <ListDoctor type='Chat' name='Zoe Hange' profile={DummyDoc2} chat='Surabaya' />
            <ListDoctor type='Chat' name='Bertholt Hoover' profile={DummyDoc3} chat='Palembang' />
            <ListDoctor type='Chat' name='Mikasa Ackerman' profile={DummyDoc4} chat='Denpasar' />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    }
})
