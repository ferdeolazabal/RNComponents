import React from 'react';
import { MenuItem } from '../interfaces/appInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} color="gray" size={25} />
                <Text style={styles.itemText}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon name="chevron-forward-outline" color="gray" size={25} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 18,
    },
});

export default FlatListMenuItem;
