import React from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';
import { View, FlatList } from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={() => <HeaderTitle title={'Opciones de Menú'} />}
                ItemSeparatorComponent={() => <ItemSeparator/>}
            />
        </View>
    );
};

export default HomeScreen;
