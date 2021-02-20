import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, HomeProfile } from '../../components'


const Home = () => {
    return (
        <View>
            <HomeProfile />
            <Text>How can we help you?</Text>
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
