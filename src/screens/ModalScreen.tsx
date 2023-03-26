import { useState, useContext } from 'react';
import { Alert, Modal, Text, Pressable, View, Button } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

const ModalScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modals" />

            <View style={{ ...styles.globalMargin, marginVertical: 20 }}>
                <Button title="Abrir modal" onPress={() => setModalVisible(!modalVisible)} />
            </View>

            <Modal animationType="fade" visible={modalVisible} transparent={true}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.background
                        // backgroundColor: 'rgba(0,0,0,0.4)',
                    }}>
                    {/* cont modal */}
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <HeaderTitle title="Título" />
                            <Text style={styles.modalText}>Cuerpo</Text>
                            <Button title="Cerrar" onPress={() => setModalVisible(!modalVisible)} />
                        </View>
                    </View>
                </View>
            </Modal>

            {/* documentation example */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible2(() => !modalVisible2);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible2(!modalVisible2)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={{...styles.button, ...styles.buttonOpen}}
                onPress={() => setModalVisible2(true)}>
                <Text style={{...styles.textStyle, backgroundColor: colors.primary}}>Abrir modal</Text>
            </Pressable>
        </View>
    );
};

export default ModalScreen;
