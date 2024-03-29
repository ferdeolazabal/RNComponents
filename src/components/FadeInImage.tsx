import { useState, useContext } from 'react';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
    const {
        theme: { colors },
    } = useContext(ThemeContext);

    const { fadeIn, opacity } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {isLoading && (
                <ActivityIndicator
                    style={{
                        position: 'absolute',
                    }}
                    color={colors.primary}
                    size={30}
                />
            )}

            <Animated.Image
                source={{ uri }}
                onLoadStart={finishLoading}
                style={{
                    ...(style as any),
                    opacity,
                }}
            />
        </View>
    );
};

export default FadeInImage;
