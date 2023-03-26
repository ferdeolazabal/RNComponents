import { useContext } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);
    
    return (
        <View style={styles.container}>

            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                marginBottom: 10,
                opacity,
                transform: [{
                    translateY: position,
                }],
            }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ margin: 20 }}>
                    <Button
                        title="Fade in"
                        onPress={() => {
                            fadeIn();
                            startMovingPosition(100);
                        }}
                        color={colors.primary}
                    />
                </View>

                <View style={{ margin: 20 }}>
                    <Button title="fade out" onPress={fadeOut} color={colors.primary}/>
                </View>
            </View>

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
        width: 150,
        height: 150,
    },
});
