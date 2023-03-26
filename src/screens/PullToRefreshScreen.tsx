import { useCallback, useState, useContext } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { styles } from '../theme/appTheme';

const PullToRefreshScreen = () => {
    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);

    const [refreshing, setRefreshing] = useState(false);
    const [ data, setData] = useState<string>();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            setData('Hola mundo')
        }, 4000);
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    // progressViewOffset={300}
                    // progressBackgroundColor={'violet'} // only android
                    // colors={['black', 'blue', 'green', 'orange', 'red']} // only android
                    progressBackgroundColor={ dividerColor }
                    colors={ [ colors.text ] }
                    title={'Loading'} // Ios
                    tintColor={ dark ? 'white' : 'black' }
                />
            }>

            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />

                <Text style={{...styles.text, color: colors.text}}>
                    Tire hacia abajo para ver el indicador RefreshControl
                </Text>

                <Text style={{...styles.text, color: colors.text}}>
                    Cargando: {JSON.stringify(refreshing, null, 1)}
                </Text>

                {data && <HeaderTitle title={ data } />}

            </View>

        </ScrollView>
    );
};

export default PullToRefreshScreen;
