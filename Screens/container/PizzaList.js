import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Pressable, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza, deletePizza, getPizza, updatePizza } from '../redux/action/pizza.action'

import { Modal } from 'react-native';
import { colors } from '../../assets/colors/colors'

export default function PizzaList({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleD, setModalVisibleD] = useState(false);

    const [name, setName] = useState('');
    const [sizeS, setSizeS] = useState('');
    const [sizeR, setSizeR] = useState('');
    const [sizeL, setSizeL] = useState('');
    const [topping, setTopping] = useState('');
    const [discription, setDiscription] = useState('');

    const [update, setUpdate] = useState('');
    const [uid, setUId] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPizza())
    }, [])

    const piz = useSelector(state => state.pizza);
    // console.log(piz.pizza);

    const handleSubmit = () => {
        dispatch(addPizza({ name, sizeS, sizeR, sizeL, topping, discription }))
    }

    const handleDelete = (id) => {
        dispatch(deletePizza(id))
        console.log(id);
    }

    const handleAddData = () => {
        dispatch(addPizza({ name }))
    }

    const handleUpdate = (data) => {
        setUId(data.id)
        setName(data.name)
        setModalVisible(true)
        setUpdate(true)
    }

    const handleUpdateData = () => {
        dispatch(updatePizza({ id: uid, name }))
    }

    // const Pizza = [
    //     {
    //         id: 1,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Margerita",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese",
    //         // dis: "When all of these delicious flavours are combined on a hand-kneaded pizza base, a universally-adored pizza is created."
    //     },
    //     {
    //         id: 2,
    //         image: require("../../assets/image/dominoz1.jpg"),
    //         name: "Cheesy-7",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese"
    //     },
    //     {
    //         id: 3,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Farm Villa",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 4,
    //         image: require("../../assets/image/holic1.jpg"),
    //         name: "Hot Passion",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 5,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Las vegas",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 6,
    //         image: require("../../assets/image/lapinozz1.jpg"),
    //         name: "Tanduri Paneer",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 7,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Korma Special",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 8,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Peri Peri",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 9,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Authentic",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    //     {
    //         id: 10,
    //         image: require("../../assets/image/pizza.jpg"),
    //         name: "Indian Style",
    //         rating: 4.9,
    //         price: 300,
    //         topping: "Olives, Red paprika, Paneer, Cheese, Capsicum, Masharooms, Baby Corn"
    //     },
    // ]

    const HotelData = ({ item }) => {
        return (
            <TouchableOpacity  >
                <View style={styles.foodhotel}>
                    <View >
                        <Image source={item.image} style={styles.foodimg}></Image>
                    </View>
                    <View >
                        <View style={{ marginLeft: 10 }}>
                            <View>
                                <Text style={styles.Hname}>{item.name}</Text>
                            </View>
                            <View style={styles.Frate}>
                                <Text style={styles.rate}>{item.rating}</Text>
                                <FontAwesome name={'star'} style={styles.star} />
                            </View>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            {/* <Text style={styles.pricepizza}>{item.price}</Text> */}
                            <Text style={styles.usepizza}>{item.topping}</Text>
                            {/* <Text style={styles.usepizza}>{item.dis}</Text> */}
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                        <TouchableOpacity onPress={() => handleUpdate(item)} >
                            <MaterialIcons name={'edit'} style={styles.edit} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisibleD(true)}
                        >
                            <MaterialCommunityIcons name={'delete'} style={styles.dlt} />
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
                            {/* <TouchableOpacity
                                onPress={() => setModalVisibleD(true)}
                            >
                                <MaterialCommunityIcons name={'delete'} style={styles.dlt} />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <FlatList
                        data={piz.pizza}
                        renderItem={HotelData}
                        keyExtractor={hotelimg => hotelimg.id}
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
                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                    <View style={styles.addImage}></View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                                    <TouchableOpacity>
                                        <MaterialIcons name={'add-a-photo'} style={styles.camera} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <MaterialIcons name={'add-photo-alternate'} style={styles.photo} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 25 }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Text style={styles.pName}>Name :</Text>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={(text) => setName(text)}
                                            value={name}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.sizeName}>Size :</Text>
                                        <View style={{ marginLeft: 15 }}>
                                            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Entypo name={'dot-single'} style={styles.dot} />
                                                    <Text style={styles.sName}>Small </Text>
                                                    <Text style={styles.sName}>(17.7 cm)</Text>
                                                </View>
                                                <View>
                                                    <TextInput style={styles.sinput}
                                                        keyboardType="numeric"
                                                        onChangeText={(text) => setSizeS(text)}
                                                        // value={name}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Entypo name={'dot-single'} style={styles.dot} />
                                                    <Text style={styles.sName}>Regular </Text>
                                                    <Text style={styles.sName}>(17.7 cm)</Text>
                                                </View>
                                                <View>
                                                    <TextInput style={styles.sinput}
                                                        keyboardType="numeric"
                                                        onChangeText={(text) => setSizeR(text)}
                                                        // value={name}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Entypo name={'dot-single'} style={styles.dot} />
                                                    <Text style={styles.sName}>Large </Text>
                                                    <Text style={styles.sName}>(17.7 cm)</Text>
                                                </View>
                                                <View>
                                                    <TextInput style={styles.sinput}
                                                        keyboardType="numeric"
                                                        onChangeText={(text) => setSizeL(text)}
                                                        // value={name}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={styles.pName}>Toppings :</Text>
                                        <TextInput
                                            style={styles.Tinput}
                                            multiline={true}
                                            textAlignVertical={'top'}
                                            onChangeText={(text) => setTopping(text)}
                                        />
                                    </View>
                                    <View>
                                        <TextInput
                                            style={styles.Dinput}
                                            placeholder="Description"
                                            placeholderTextColor="#6B7280"
                                            multiline={true}
                                            textAlignVertical={'top'}
                                            onChangeText={(text) => setDiscription(text)}
                                        />
                                    </View>

                                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>

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
                                        {/* <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => { handleSubmit(); setModalVisible(!modalVisible) }}
                                        >
                                            <Text style={styles.StextStyle}>Submit</Text>
                                        </Pressable> */}
                                        <Pressable
                                            style={[styles.button, styles.CbuttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.CtextStyle}>Cancel</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>+</Text>
                    </Pressable>
                </View>
                <View >
                    <TouchableOpacity style={styles.all}>
                        <View style={styles.seemore}>
                            <Text style={{ color: colors.secondarytext }}>See More</Text>
                            <Entypo name={'chevron-thin-down'} style={styles.arrow1} />
                        </View>
                    </TouchableOpacity>
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
        position: "relative",
    },
    foodhotel: {
        height: 150,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "grey",
        marginTop: 20,
        backgroundColor: "#fff",
        flexDirection: "row"

    },
    foodimg: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 20
    },
    Hname: {
        color: colors.secondaryhead,
        fontWeight: "500",
        fontSize: 18,
        marginTop: 10
    },
    pricepizza: {
        color: colors.secondaryhead,
        fontSize: 16,
        marginTop: 20
    },
    usepizza: {
        color: colors.secondaryhead,
        fontSize: 12,
        marginTop: 5,
    },
    rate: {
        height: 25,
        width: 50,
        borderRadius: 5,
        backgroundColor: colors.primary,
        color: "white",
        alignItems: "center",
        paddingLeft: 5,
        paddingTop: 2,
        fontSize: 14,
    },
    Frate: {
        marginTop: 10
    },
    star: {
        color: "white",
        fontSize: 13,
        position: "absolute",
        top: 5,
        left: 25,
        marginLeft: 4
    },
    edit: {
        fontSize: 20,
        color: "black",
        right: 30,
        top: -10
    },
    dlt: {
        fontSize: 20,
        color: "black",
        right: 20,
        top: -10,
    },
    all: {
        flexDirection: "row",
    },
    seemore: {
        color: colors.secondarytext,
        marginTop: 8,
        marginRight: 3,
        height: 30,
        width: "100%",
        borderColor: colors.secondarytext,
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10
    },
    arrow1: {
        color: colors.secondarytext,
        marginTop: 5,
        fontSize: 12,
        marginLeft: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: "100%",
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
        marginRight: 10,
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
    addImage: {
        backgroundColor: "#D5D6D5",
        height: 200,
        width: 200,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    pName: {
        color: colors.secondarytext,
        fontSize: 18,
        fontWeight: "500",
    },
    input: {
        height: 40,
        width: "82%",
        borderWidth: 0.5,
        color: "black",
        borderRadius: 10,
        borderColor: colors.secondaryhead,
        fontSize: 18,
        marginLeft: 10
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
    sizeName: {
        color: colors.secondarytext,
        fontSize: 18,
        fontWeight: "500",
        marginTop: 10
    },
    sName: {
        color: colors.secondarytext,
        fontSize: 16,
        fontWeight: "500"
    },
    dot: {
        fontSize: 16,
        color: colors.secondarytext
    },
    sinput: {
        height: 34,
        width: 100,
        borderWidth: 0.5,
        color: "black",
        borderRadius: 10,
        borderColor: colors.secondaryhead,
        fontSize: 14,
        marginLeft: 10,
        marginRight: 90
    },
    Tinput: {
        height: 80,
        width: "75%",
        borderWidth: 0.5,
        color: "black",
        borderRadius: 10,
        borderColor: colors.secondaryhead,
        fontSize: 18,
        marginLeft: 10,
    },
    Dinput: {
        height: 150,
        width: "100%",
        borderWidth: 0.5,
        color: "black",
        borderRadius: 10,
        borderColor: colors.secondaryhead,
        fontSize: 16,
        marginTop: 10
    },
    subtn: {
        backgroundColor: colors.primary,
        height: 40,
        width: 200,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    subtext: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    StextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400",
        right: 3,
        top: 1
    },
    CtextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400",
        right: 3,
        top: 1
    },

})