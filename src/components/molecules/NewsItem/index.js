import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const NewsItem = ({title, source}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>Today</Text>
            </View>
            <Image source={source} style={styles.image} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    titleWrapper: {
        flex: 1
    },
    date: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 4
    },
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 16
    },
    image: {
        width: 80,
        height: 60,

    }
})
