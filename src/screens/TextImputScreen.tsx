import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const TextInputScreen = () => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return (
        <SafeAreaView style={styles.globalMargin}>
            <ScrollView>
                <HeaderTitle title="Text Inputs" />
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    placeholderTextColor={'grey'}
                    keyboardType="numeric"
                />

                <HeaderTitle title="Form text Inputs" />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su nombre"
                    placeholderTextColor={'grey'}
                    autoCorrect={false}
                    autoCapitalize="words"
                    onChangeText={(value: string) => onChange(value, 'name')}
                    // value={text}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su email"
                    placeholderTextColor={'grey'}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value: string) => onChange(value, 'email')}
                    keyboardType="email-address"
                    keyboardAppearance="light"
                    // value={text}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su teléfono"
                    placeholderTextColor={'grey'}
                    onChangeText={(value: string) => onChange(value, 'phone')}
                    keyboardType="phone-pad"
                    // value={text}
                />
                <Text style={{ ...styles.blackText, fontSize: 16 }}>
                    {JSON.stringify(form, null, 3)}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TextInputScreen;
