import { useState } from 'react';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
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
                    size={30}
                    color={'#5856D6'}
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
