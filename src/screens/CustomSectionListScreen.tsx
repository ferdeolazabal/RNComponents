import { View, Text, SectionList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: [
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Robin',
        ],
    },
    {
        casa: 'Marvel Comics',
        data: [
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Thor',
            'Spiderman',
        ],
    },
    {
        casa: 'Anime',
        data: [
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
        ],
    },
];

const CustomSectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={styles.blackText}>{item}</Text>}
                stickySectionHeadersEnabled
                ListHeaderComponent={() => (
                    <HeaderTitle title="Section List" withMarginBottom={false} />
                )}
                ListFooterComponent={() => (
                    <View style={{ height: 100 }}>
                        <HeaderTitle
                            title={'Total de casas: ' + casas.length}
                            withMarginBottom={false}
                        />
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View
                        style={{
                            backgroundColor: 'rgb(242,242,242)',
                        }}>
                        <HeaderTitle title={section.casa} withMarginBottom={false} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle
                        title={`Total ${section.casa}: ${section.data.length}`}
                        withMarginBottom={false}
                    />
                )}
                // ItemSeparatorComponent={ItemSeparator}
                SectionSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CustomSectionListScreen;
