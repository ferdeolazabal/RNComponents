import { useState, useContext } from 'react';
import { Alert, Modal, Text, Pressable, View, Button } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { styles } from '../theme/appTheme';

const ModalScreen = () => {
    const {
        theme: { colors, dividerColor },
    } = useContext(ThemeContext);

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
                        backgroundColor: dividerColor,
                    }}>
                    <View style={{ ...styles.centeredView }}>
                        <View style={{ ...styles.modalView, backgroundColor: colors.background }}>
                            <HeaderTitle title="Título" />
                            <Text style={{ ...styles.modalText, color: colors.text }}>Cuerpo</Text>
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
                <View
                    style={{
                        flex: 1,
                        backgroundColor: dividerColor,
                    }}>
                    <View style={styles.centeredView}>
                        <View style={{ ...styles.modalView, backgroundColor: colors.background }}>
                            <Text style={{ ...styles.modalText, color: colors.text }}>
                                Hello World!
                            </Text>
                            <Pressable
                                style={styles.button}
                                onPress={() => setModalVisible2(!modalVisible2)}>
                                <Text
                                    style={{
                                        ...styles.textStyle,
                                        backgroundColor: colors.primary,
                                    }}>
                                    Hide Modal
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable style={styles.button} onPress={() => setModalVisible2(true)}>
                <Text style={{ ...styles.textStyle, backgroundColor: colors.primary }}>
                    Abrir modal
                </Text>
            </Pressable>
        </View>
    );
};

export default ModalScreen;
