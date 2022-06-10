import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Gap from '../../components/Gap'
import { ms } from 'react-native-size-matters'
import { MyColors } from '../../utils/Colors'
import Link from '../../components/Link'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth'

export default function LoginScreen({ navigation }) {
    const [Reset, setReset] = useState('')


    const handleSubmit = (values) => {
        console.log(values);
        // navigation.navigate('RegisterScreen')
        // setReset();
        // console.log(Reset);
        console.log(loginSchema)
        auth().signInWithEmailAndPassword(values.email, values.password).then((res) => {
            navigation.replace("HomeScreen")
            console.log("Sign in Success");
        }).catch(error => {
            console.error(error);
        });
    }

    const loginSchema = () => Yup.object().shape({
        email: Yup.string().email().required(
            "Please insert your email!",
        ),
        password: Yup.string().required(
            "Please insert your password!",
        ).matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character",
        )
    })
    return (

        <Formik
            validationSchema={loginSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
        >

            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: ms(50) }}>
                    <View style={styles.container}>
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <Text style={styles.title}>
                                Welcome Back
                            </Text>
                            <Text style={{
                                fontSize: ms(20),
                                color: MyColors.TextColor
                            }}>
                                Explore Now !
                            </Text>
                        </View>
                        <Gap height={ms(53)} />
                        <Input
                            title={"Email"}
                            placeholder={"youremail@gmail.com"}
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        <Text style={{ color: 'red' }}>
                            {<ErrorMessage name='email' />}
                        </Text>
                        <Gap height={ms(22)} />
                        <Input
                            title={"Password"}
                            placeholder={"Insert Your Password"}
                            secure
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        <Text style={{ color: 'red' }}>
                            {<ErrorMessage name='password' />}
                        </Text>
                        <Text>
                        </Text>
                        <Gap height={ms(40)} />
                        <Button title={"Login"} onPress={handleSubmit} />
                        <Gap height={ms(9)} />
                        <Link info={"if you are new "} title={"Create Account"} onPress={() => navigation.navigate("RegisterScreen")} />

                    </View>
                </ScrollView>
            )}
        </Formik >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: ms(30),
        justifyContent: 'center',
        paddingBottom: ms(50)
    },
    title: {
        fontSize: ms(28),
        color: MyColors.TextColor,
        fontWeight: '700'
    }
})