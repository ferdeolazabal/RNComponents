import { useContext } from 'react';
import { View } from 'react-native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View 
            style={{ 
                borderBottomWidth: 1, 
                borderColor: theme.dividerColor,
                marginVertical: 7
            }} 
        />
    )
};

export default ItemSeparator;
