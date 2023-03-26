import { useState, useContext } from 'react';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);

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
        <View style={styles.globalMargin}>
            
            <HeaderTitle title={'Switches'} />

            <View style={styles.switchRow}>
                <Text style={{...styles.text, color: colors.text}}>IsActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            
            <View style={styles.switchRow}>
                <Text style={{...styles.text, color: colors.text}}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            
            <View style={styles.switchRow}>
                <Text style={{...styles.text, color: colors.text}}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>

            <View style={{ margin: 10 }}>
                <Text style={{...styles.text, color: colors.text}}>{JSON.stringify(state, null, 5)}</Text>
            </View>
        
        </View>
    );
};
