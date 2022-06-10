import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyColors } from '../../utils/Colors'
import { ms } from 'react-native-size-matters'

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: MyColors.YellowOpacity,
        height: ms(50),
        paddingVertical: ms(12),
        borderRadius: ms(10),
        borderColor: MyColors.YellowPrimary,
        borderWidth: ms(1)
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: ms(20),
        fontWeight: '600'
    }
})