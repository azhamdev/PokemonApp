import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { MyColors } from '../../utils/Colors'

export default function Link({ title, onPress, info }) {
    return (
        <View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: ms(11),
                    color: MyColors.TextColor,
                    fontWeight: '500'
                }}>
                    {info}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.click}>   {title}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    click: {
        fontSize: ms(14),
        fontWeight: '700',
        color: MyColors.TextColor
    }
})