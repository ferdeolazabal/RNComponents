import { StackScreenProps } from '@react-navigation/stack';
import { useRef, useState, useContext } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageSourcePropType,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({ navigation }: Props) => {
    const {
        theme: { colors },
    } = useContext(ThemeContext);

    const { opacity, fadeIn } = useAnimation();
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);
    const isVisible = useRef(false);

    const goHome = () => {
        if (isVisible) {
            navigation.navigate('HomeScreen');
        }
    };

    const renderItem = (item: Slide) => {
        return (
            <View style={styles.slide}>
                <Image source={item.img} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.desc}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.primary }}>
            <Carousel
                layout="default"
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                vertical={false}
                useScrollView={true}
                onSnapToItem={(index) => {
                    setIndex(index);
                    if (items.length - 1 === index) {
                        isVisible.current = true;
                        fadeIn();
                    }
                }}
                ref={isCarousel}
            />

            <View style={styles.bottomContainer}>
                <Pagination
                    dotsLength={items.length}
                    carouselRef={isCarousel}
                    activeDotIndex={index}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                    dotStyle={styles.dotStyle}
                />

                <Animated.View style={{ opacity }}>
                    <TouchableOpacity onPress={goHome} style={styles.btn} activeOpacity={0.6}>
                        <Text style={styles.btnText}>Entrar</Text>
                        <Icon name="chevron-forward-outline" color="white" size={30} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default SlidesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        top: -50,
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        top: -50,
        fontSize: 16,
    },
    slide: {
        flex: 1,
        padding: 40,
        top: -30,
        justifyContent: 'center',
    },
    image: {
        width: windowWidth,
        height: windowHeight * 0.7,
        resizeMode: 'center',
    },
    dotStyle: {
        marginHorizontal: 0,
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: '#5856D6',
        width: 140,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 25,
    },
});
