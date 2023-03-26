import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

import { styles } from '../theme/appTheme';

const ChangeThemeScreen = () => {
    
    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);
    
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 130,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 22,
                            color: colors.text,
                        }}>
                        Light
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 130,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 22,
                            color: colors.text,
                        }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChangeThemeScreen;
