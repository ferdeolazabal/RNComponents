import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            'Título',
            'Este es el cuerpo de la alerta',
            [
                {
                    text: 'Preguntar luego',
                    onPress: () => console.log('Ask me later pressed'),
                },
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel', // Only for Ios
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: true, onDismiss: () => console.log('Cancel Pressed') }
        );
    };

    const showPrompt = () => {
        // propt only for Ios
        // Alert.prompt(
        //     '¿Está seguro?',
        //     'Esta opcion no se puede revertir',
        //     (valor: string) => console.log('info: ', valor),
        //     'plain-text',
        //     'Hola mundo'
        // );

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK',
                    onPress: (password) => console.log('OK Pressed, password: ' + password),
                },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <View style={{ padding: 10 }}>
                <Button title="Mostrar alerta" onPress={showAlert} />
            </View>
            <View style={{ margin: 5 }} />
            <Button title="Mostrar prompt" onPress={showPrompt} />
        </View>
    );
};

export default AlertScreen;
