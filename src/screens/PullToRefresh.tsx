import { useCallback, useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const PullToRefresh = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 4000);
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    // progressViewOffset={300}
                    progressBackgroundColor={'violet'} // only android
                    colors={['black', 'blue', 'green', 'orange', 'red']} // only android
                    title={'Loading'} // Ios
                />
            }>
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                <Text style={styles.text}>
                    Tire hacia abajo para ver el indicador RefreshControl
                </Text>
                <Text style={styles.text}>Cargando: {JSON.stringify(refreshing, null, 1)}</Text>
            </View>
        </ScrollView>
    );
};

export default PullToRefresh;
