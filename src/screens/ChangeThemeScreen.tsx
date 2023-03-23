import React, { useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
    const { colors } = useTheme();
    const { setDarkTheme } = useContext(ThemeContext);
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />

            <TouchableOpacity
                onPress={setDarkTheme}
                activeOpacity={0.8}
                style={{
                    backgroundColor: '#5856D6',
                    width: 150,
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
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangeThemeScreen;
