import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DummyDoc1, DummyDoc2, DummyDoc3 } from '../../assets'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = ({navigation}) => {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoc1,
            name: 'Reiner Braun',
            chat: 'Alright Doc, Thanks...'
        },
        {
            id: 2,
            profile: DummyDoc2,
            name: 'Zoe Hange',
            chat: 'Hi Doc. I have a problem with...'
        },
        {
            id: 3,
            profile: DummyDoc3,
            name: 'Berhold Hoover',
            chat: 'How many times should dr...'
        }
    ])
    return (
        <View style={styles.pages}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
            </View>
            <ScrollView>
                {
                    doctors.map(doctor => {
                        return (
                            <ListDoctor
                                key={doctor.id}
                                profile={doctor.profile}
                                name={doctor.name}
                                chat={doctor.chat}
                                onPress={() => navigation.navigate('Chatting')}
                            />
                        )
                    })
                }
            </ScrollView>


        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.backgroundColor,
        flex: 1
    },
    content: {
        backgroundColor: colors.primary,
        height: 60,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginBottom: 20,

    },
    title: {
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 14,
        fontSize: 22,
        fontFamily: fonts.primary[600]
    },
})
