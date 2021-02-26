import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { ICMap } from '../../assets'
import { DoctorCategory, HomeProfile, NewsItem } from '../../components'
import { colors, fonts } from '../../utils'


const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.smallcontainer}>
                    <View style={styles.header}>
                        <HomeProfile />
                        <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                            <ICMap />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.welcome}>How can we help you?</Text>
                    <View style={styles.category}>
                        <DoctorCategory />
                        <DoctorCategory />
                        <DoctorCategory />
                    </View>
                    <View style={styles.category}>
                        <DoctorCategory />
                        <DoctorCategory />
                        <DoctorCategory />
                    </View>
                </View>
                <View style={styles.article}>
                    <Text style={styles.sectionlabel}>Health Articles</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeall}>See all</Text>
                    </TouchableOpacity>
                </View>
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.primary,
        flex: 1
    },
    smallcontainer: {
        paddingHorizontal: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        paddingVertical: 20,
    },
    welcome: {
        fontSize: 21,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    },
    category: {
        flexDirection: 'row'
    },
    sectionlabel: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    article: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 16
    },
    seeall: {
        color: colors.text.secondary,
        borderBottomWidth: 0.2
    }
})
