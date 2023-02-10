import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
];
const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={{ ...styles.title }}>Opciones de Menú</Text>
            </View>
        );
    };

    const itemSeparator = () => {
        return <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 5 }} />;
    };

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    );
};

export default HomeScreen;
