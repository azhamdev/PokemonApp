import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Gap from '../../components/Gap'
import { ms } from 'react-native-size-matters'
import { MyColors } from '../../utils/Colors'
import Link from '../../components/Link'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth'

export default function RegisterScreen({ navigation }) {
    const handleSubmit = (values) => {
        console.log(values);
        auth().createUserWithEmailAndPassword(values.email, values.password).then((res) => {
            console.log("user signed up", res);
            navigation.navigate('LoginScreen')
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use')
            {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email')
            {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }

    const registerSchema = () => Yup.object().shape({
        username: Yup.string().required(
            "Input Your Name"
        ),
        email: Yup.string().email().required(
            "Please insert your email!"
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
            validationSchema={registerSchema}
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={handleSubmit}

        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={styles.title}>
                            Hello,
                        </Text>
                        <Text style={{
                            fontSize: ms(20),
                            color: MyColors.TextColor
                        }}>
                            Create your account here
                        </Text>
                    </View>
                    <Gap height={ms(53)} />
                    <Input
                        title={"Username"}
                        placeholder={"Your Name"}
                        onChangeText={handleChange('username')}
                        value={values.username}
                    />
                    <Text style={{ color: 'red' }}>
                        {<ErrorMessage name='username' />}
                    </Text>
                    <Gap height={ms(22)} />
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
                        placeholder={"Insert Your Password"} secure
                        onChangeText={handleChange('password')}
                        value={values.password}
                    />
                    <Text style={{ color: 'red' }}>
                        {<ErrorMessage name='password' />}
                    </Text>
                    <Gap height={ms(80)} />
                    <Button
                        title={"Register"}
                        onPress={handleSubmit} />
                    <Gap height={ms(9)} />
                    <Link info={"If you have an account"} title={"Login Now"} onPress={() => navigation.navigate("LoginScreen")} />
                </View>

            )}

        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: ms(30),
        justifyContent: 'center'
    },
    title: {
        fontSize: ms(28),
        color: MyColors.TextColor,
        fontWeight: '700'
    }
})