import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

const TextInputScreen = () => {
    const [text, onChangeText] = useState('Text');
    const [number, onChangeNumber] = useState('');
    const { form, isSuscribed, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    });

    return (
        <ScrollView style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Placeholder"
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
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su email"
                placeholderTextColor={'grey'}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(value: string) => onChange(value, 'email')}
                keyboardType="email-address"
                keyboardAppearance="dark"
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su teléfono"
                placeholderTextColor={'grey'}
                onChangeText={(value: string) => onChange(value, 'phone')}
                keyboardType="phone-pad"
            />

            <View style={styles.switchRow}>
                <Text style={styles.text}>Suscribirse</Text>
                <CustomSwitch
                    isOn={isSuscribed}
                    onChange={(value) => onChange(value, 'isSuscribed')}
                />
            </View>

            <Text style={{ ...styles.blackText, fontSize: 16 }}>
                {JSON.stringify(form, null, 3)}
            </Text>
            <View style={{ height: 30 }} />
        </ScrollView>
    );
};

export default TextInputScreen;
