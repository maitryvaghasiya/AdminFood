import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground, Pressable, TextInput, } from 'react-native'
import React, { useEffect, useId, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../assets/colors/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getCategory, updateCategory } from '../redux/action/category.action';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Modal } from 'react-native';

export default function Menu({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleD, setModalVisibleD] = useState(false);

    const [name, setName] = useState('');
    const [update, setUpdate] = useState('');
    const [uid, setUId] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const caty = useSelector(state => state.category);

    // console.log(caty.category);

    const handleSubmit = () => {
        dispatch(addCategory({ name }))
    }
    // console.log(("aaaaaaaaaaa", caty.category));

    const handleDelete = (id) => {
        dispatch(deleteCategory(id))
        console.log(id);
    }

    const handleAddData = () => {
        dispatch(addCategory({ name }))
    }

    const handleUpdate = (data) => {
        setUId(data.id)
        setName(data.name)
        setModalVisible(true)
        setUpdate(true)
    }

    const handleUpdateData = () => {
        dispatch(updateCategory({ id: uid, name }))
    }

    const Menu = [
        {
            id: 1,
            image: require("../../assets/image/pizza.jpg"),
            name: "Pizzas"
        },
        {
            id: 2,
            image: require("../../assets/image/chaat.jpg"),
            name: "Chaat"
        },
        {
            id: 3,
            image: require("../../assets/image/sand.jpg"),
            name: "Sandwich"
        },
        {
            id: 4,
            image: require("../../assets/image/burger.webp"),
            name: "Burger"
        },
        {
            id: 5,
            image: require("../../assets/image/shake.webp"),
            name: "Shake"
        },
        {
            id: 6,
            image: require("../../assets/image/panir.webp"),
            name: "Paneer"
        },
        {
            id: 7,
            image: require("../../assets/image/fries.jpg"),
            name: "Fries"
        },
        {
            id: 8,
            image: require("../../assets/image/pasta.jpg"),
            name: "Pasta"
        },
    ]

    const MenuData = ({ item }) => {
        return (

            <TouchableOpacity style={{ marginRight: 26 }} onPress={() => navigation.navigate("PizzaMenu")}>
                <View style={styles.foodhotel}>
                    <View >
                        <Image source={item.image} style={styles.foodimg}></Image>
                    </View>
                    <View style={{ position: 'relative', alignItems: "center", justifyContent: "center", alignSelf: "center" }}>

                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}  >
                        <View>
                            <Text style={styles.Hname}>{item.name}</Text>
                        </View >
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 5 }}>
                        <TouchableOpacity onPress={() => handleUpdate(item)}>
                            <MaterialIcons name={'edit'} style={styles.edit} />
                        </TouchableOpacity>
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleD}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                    setModalVisibleD(!modalVisibleD);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={{ color: "black", marginBottom: 10 }}>Are You sure?</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => { handleDelete(item.id); setModalVisibleD(!modalVisibleD) }}
                                            >
                                                <Text style={styles.StextStyle}>Yes</Text>
                                            </Pressable>
                                            <Pressable
                                                style={[styles.button, styles.CbuttonClose]}
                                                onPress={() => setModalVisibleD(!modalVisibleD)}
                                            >
                                                <Text style={styles.CtextStyle}>No</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity
                                // onPress={() => handleDelete(item.id)}
                                onPress={() => setModalVisibleD(true)}
                            >
                                <MaterialCommunityIcons name={'delete'} style={styles.dlt} />
                            </TouchableOpacity>
                            {/* <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>+</Text>
                    </Pressable> */}
                        </View>
                        {/* <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <MaterialCommunityIcons name={'delete'} style={styles.dlt} />
                        </TouchableOpacity> */}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.head}>FoodiZone</Text>
                <View style={styles.bar}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate("Order")}> */}
                    <Feather name={'menu'} style={styles.iconmenu} />
                    {/* </TouchableOpacity> */}
                    <Image source={require("../../assets/image/boyimage.jpg")} style={styles.boy} />
                </View>
                <View >
                    <FlatList
                        numColumns={2}
                        data={caty.category}
                        renderItem={MenuData}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                        <View style={styles.addImage}></View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                                        <TouchableOpacity>
                                            <MaterialIcons name={'add-a-photo'} style={styles.camera} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <MaterialIcons name={'add-photo-alternate'} style={styles.photo} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TextInput
                                    style={styles.modalText}
                                    placeholder="Category Name"
                                    placeholderTextColor="#6B7280"
                                    onChangeText={(text) => setName(text)}
                                    value={name}
                                />
                                <View style={{ flexDirection: "row" }}>
                                    {
                                        update ?
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => { handleUpdateData(); setModalVisible(!modalVisible) }}
                                            >
                                                <Text style={styles.StextStyle}>Submit</Text>
                                            </Pressable>
                                            :
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => { handleAddData(); setModalVisible(!modalVisible) }}
                                            >
                                                <Text style={styles.StextStyle}>Add</Text>
                                            </Pressable>
                                    }
                                    <Pressable
                                        style={[styles.button, styles.CbuttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.CtextStyle}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => {setModalVisible(true); setUpdate(false)}}
                    >
                        <Text style={styles.textStyle}>+</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F4F6F7"
    },
    container: {
        margin: 18,
        // display:"flex"
        position: "relative",
    },
    head: {
        color: colors.primary,
        textAlign: "center",
        letterSpacing: 3,
        fontSize: 24,
        fontWeight: "700"
    },
    bar: {
        // display:"inline"
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    iconmenu: {
        fontSize: 25,
        color: "black",
    },
    boy: {
        height: 32,
        width: 32,
        borderRadius: 32
    },
    foodhotel: {
        height: 220,
        width: 180,
        // width: "100%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "grey",
        marginTop: 20,
        backgroundColor: "#fff",
        // marginRight:50

    },
    foodimg: {
        height: 150,
        width: 178,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    Hname: {
        color: colors.secondaryhead,
        fontWeight: "500",
        fontSize: 16,
        marginTop: 12

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: "100%"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // height:200,
        width: "92%"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        height: 50,
        width: 150,
    },
    buttonOpen: {
        backgroundColor: colors.primary,
        height: 60,
        width: 60,
        borderRadius: 60
    },
    buttonClose: {
        backgroundColor: colors.primary,
        marginRight: 10
    },
    CbuttonClose: {
        backgroundColor: "#F1948A",
        marginLeft: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "400"
    },
    StextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400",
        top: 1
    },
    CtextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400",
        top: 1
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        backgroundColor: "#EAEDED",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "70%",
        marginTop: 15,
        color: "black"

    },
    addImage: {
        backgroundColor: "#D5D6D5",
        height: 150,
        width: 150,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    camera: {
        color: colors.secondaryhead,
        fontSize: 22,
        top: 3,
        marginRight: 10,
        fontSize: 30,
        color: colors.secondarytext
    },
    photo: {
        color: colors.secondaryhead,
        fontSize: 22,
        top: 3,
        marginRight: 10,
        fontSize: 32,
        color: colors.secondarytext
    },
    edit: {
        fontSize: 20,
        color: "black",
        marginRight: 60,
        marginLeft: 5
    },

    dlt: {
        fontSize: 20,
        color: "black",
        marginLeft: 60,
        top: -20
    },

})