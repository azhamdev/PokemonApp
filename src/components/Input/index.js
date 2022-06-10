import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ms } from 'react-native-size-matters'
import { MyColors } from '../../utils/Colors'
import Gap from '../Gap'

export default function Input({ placeholder, title, secure, onChangeText, value }) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Gap height={ms(10)} />
            <TextInput
                placeholder={placeholder}
                style={styles.input(isFocused)}
                placeholderTextColor={'#7F8487'}
                secureTextEntry={secure}
                onChangeText={onChangeText}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: (isFocused) => ({
        height: ms(51),
        backgroundColor: MyColors.SoftBlue,
        color: MyColors.TextColor,
        paddingHorizontal: ms(20),
        borderRadius: ms(12),
        fontSize: ms(14),
        borderWidth: ms(1),
        borderColor: isFocused ? MyColors.Focus : MyColors.SoftBlue
    }),
    title: {
        color: MyColors.TextColor,
        fontWeight: '700'
    }
})