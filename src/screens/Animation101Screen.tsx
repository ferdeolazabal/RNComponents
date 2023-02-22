import { useRef } from 'react';
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';

export const Animation101Screen = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log('Fade in ended'));

        Animated.timing(top, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start(() => console.log('top ended'));
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    marginBottom: 10,
                    opacity,
                    transform: [
                        {
                            translateY: top,
                        },
                    ],
                }}
            />

            <Button title="Fade in" onPress={fadeIn} />
            <Button title="fade out" onPress={fadeOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    },
});
