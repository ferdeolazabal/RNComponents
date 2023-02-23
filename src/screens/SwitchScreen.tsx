import { useState } from 'react';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { StyleSheet, Text, View } from 'react-native';

export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={styles.container}>
            <HeaderTitle title={'Switches'} />

            <View style={styles.switchRow}>
                <Text style={styles.text}>IsActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.text}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.text}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>

            <View style={{ margin: 10 }}>
                <Text style={styles.text}>{JSON.stringify(state, null, 5)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 25,
    },
});
