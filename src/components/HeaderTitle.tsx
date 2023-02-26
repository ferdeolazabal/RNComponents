import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    withMarginBottom?: boolean;
}

export const HeaderTitle = ({ title, withMarginBottom = true }: Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: withMarginBottom ? 15 : 0 }}>
            <Text style={{ ...styles.title }}>{title}</Text>
        </View>
    );
};
