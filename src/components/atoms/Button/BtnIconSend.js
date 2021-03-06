import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICSendDark, ICSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <ICSendDark />}
            {!disable && <ICSendLight />}
        </View>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.disable : colors.wrapper,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 10,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8
    })
})
