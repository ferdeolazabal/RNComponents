import { useState } from 'react';
import { Platform, StyleSheet, Switch, View } from 'react-native';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#D9D9DB', true: '#767577' }}
                thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
