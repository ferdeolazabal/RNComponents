import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    withMarginBottom?: boolean;
}

export const HeaderTitle = ({ title, withMarginBottom = true }: Props) => {
    const { top } = useSafeAreaInsets();
    const { theme: { colors } } = useContext( ThemeContext );

    return (
        <View style={{ marginTop: top + 20, marginBottom: withMarginBottom ? 15 : 0 }}>
            <Text
                style={{
                    ...styles.title,
                    color: colors.text,
                }}>
                {title}
            </Text>
        </View>
    );
};
