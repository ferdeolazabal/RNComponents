import { useState, useContext } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

const TextInputScreen = () => {
    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

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

            <TextInput
                style={{
                    ...styles.input,
                    borderColor: colors.text,
                    color: colors.text
                }}
                onChangeText={onChangeText} 
                value={text}
            />

            <TextInput
                style={{
                    ...styles.input,
                    borderColor: colors.text,
                    color: colors.text
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Placeholder"
                placeholderTextColor={dividerColor}
                keyboardType="numeric"
            />

            <HeaderTitle title="Form text Inputs" />

            <TextInput
                style={{
                    ...styles.input,
                    borderColor: colors.text,
                    color: colors.text
                }}
                placeholder="Ingrese su nombre"
                placeholderTextColor={dividerColor}
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(value: string) => onChange(value, 'name')}
            />

            <TextInput
                style={{
                    ...styles.input,
                    borderColor: colors.text,
                    color: colors.text
                }}
                placeholder="Ingrese su email"
                placeholderTextColor={dividerColor}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(value: string) => onChange(value, 'email')}
                keyboardType="email-address"
                keyboardAppearance="dark"
            />

            <TextInput
                style={{
                    ...styles.input,
                    borderColor: colors.text,
                    color: colors.text
                }}
                placeholder="Ingrese su teléfono"
                placeholderTextColor={dividerColor}
                onChangeText={(value: string) => onChange(value, 'phone')}
                keyboardType="phone-pad"
            />

            <View style={styles.switchRow}>
                <Text 
                    style={{
                        ...styles.text, 
                        color:colors.text
                    }}>
                    Suscribirse
                </Text>

                <CustomSwitch
                    isOn={isSuscribed}
                    onChange={(value) => onChange(value, 'isSuscribed')}
                />
            </View>

            <Text style={{ fontSize: 16, color:colors.text }}>
                {JSON.stringify(form, null, 3)}
            </Text>

            <View style={{ height: 30 }} />
        </ScrollView>
    );
};

export default TextInputScreen;
