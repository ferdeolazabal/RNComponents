import { useState } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1000);
    };

    const renderItem = (item: number) => {
        return (
            <Image
                source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ActivityIndicator size={20} color={'#5856D6'} />
                    </View>
                )}
            />
        </View>
    );
};

export default InfiniteScrollScreen;
