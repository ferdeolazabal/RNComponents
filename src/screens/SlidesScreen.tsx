import {
    View,
    Text,
    SafeAreaView,
    ImageSourcePropType,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window');

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

const SlidesScreen = () => {
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
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <Carousel
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                vertical={false}
                layout="default"
            />
        </SafeAreaView>
    );
};

export default SlidesScreen;

const styles = StyleSheet.create({
    blackText: {
        color: 'black',
    },
    title: {
        top: -50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    subtitle: {
        top: -50,
        fontSize: 16,
        color: 'black',
    },
    slide: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 40,
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 400,
        resizeMode: 'center',
    },
});
