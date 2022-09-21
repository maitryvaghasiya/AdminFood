import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function AddCategoryScrn() {
  return (
    <ScrollView style={styles.screen} >
    <View style={styles.container}>
        <View>
            <View style={{ flexDirection: "row" }}>
                <Ionicons name={'arrow-back'} style={styles.backarrow} />

                <Text style={styles.addhead}>Add Category</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 70 }}>
                <View style={styles.addImage}></View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <TouchableOpacity>
                    <MaterialIcons name={'add-a-photo'} style={styles.camera} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name={'add-photo-alternate'} style={styles.photo} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 35 }}>
                <View >
                    <Text style={styles.pName}>Name :</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                {/* <View>
                    <Text style={styles.sizeName}>Size :</Text>
                    <View style={{ marginLeft: 15 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Entypo name={'dot-single'} style={styles.dot} />
                                <Text style={styles.sName}>Small </Text>
                                <Text style={styles.sName}>(17.7 cm)</Text>
                            </View>
                            <View>
                                <TextInput style={styles.sinput} keyboardType="numeric" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Entypo name={'dot-single'} style={styles.dot} />
                                <Text style={styles.sName}>Regular </Text>
                                <Text style={styles.sName}>(17.7 cm)</Text>
                            </View>
                            <View>
                                <TextInput style={styles.sinput} keyboardType="numeric" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Entypo name={'dot-single'} style={styles.dot} />
                                <Text style={styles.sName}>Large </Text>
                                <Text style={styles.sName}>(17.7 cm)</Text>
                            </View>
                            <View>
                                <TextInput style={styles.sinput} keyboardType="numeric" />
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
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.Dinput}
                        placeholder="Description"
                        placeholderTextColor="#6B7280"
                        multiline={true}
                        textAlignVertical={'top'}
                    />
                </View> */}
                <View style={{marginTop:50,alignSelf:"center"}}>
                    <TouchableOpacity style={styles.subtn}>
                        <Text style={styles.subtext}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    backarrow: {
        color: colors.secondaryhead,
        fontSize: 22,
        top: 3,
        marginRight: 10
    },
    addhead: {
        color: colors.secondaryhead,
        fontSize: 22,
        fontWeight: "600"
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
        width: "100%",
        // margin: 12,
        borderWidth: 0.5,
        // padding: 10,
        color: "black",
        borderRadius: 10,
        borderColor: colors.secondaryhead,
        fontSize: 18,
        // marginLeft: 10
        marginTop:15
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
    // sizeName: {
    //     color: colors.secondarytext,
    //     fontSize: 18,
    //     fontWeight: "500",
    //     marginTop: 10
    // },
    // sName: {
    //     color: colors.secondarytext,
    //     fontSize: 16,
    //     fontWeight: "500"
    // },
    // dot: {
    //     fontSize: 16,
    //     color: colors.secondarytext
    // },
    // sinput: {
    //     height: 34,
    //     width: 100,
    //     // margin: 12,
    //     borderWidth: 0.5,
    //     // padding: 10,
    //     color: "black",
    //     borderRadius: 10,
    //     borderColor: colors.secondaryhead,
    //     fontSize: 14,
    //     marginLeft: 10,
    //     marginRight: 90
    // },
    // Tinput: {
    //     height: 80,
    //     width: "75%",
    //     // margin: 12,
    //     borderWidth: 0.5,
    //     // padding: 10,
    //     color: "black",
    //     borderRadius: 10,
    //     borderColor: colors.secondaryhead,
    //     fontSize: 18,
    //     marginLeft: 10,
    //     // numberOfLines: 4
    // },
    // Dinput: {
    //     height: 150,
    //     width: "100%",
    //     // margin: 12,
    //     borderWidth: 0.5,
    //     // padding: 10,
    //     color: "black",
    //     borderRadius: 10,
    //     borderColor: colors.secondaryhead,
    //     fontSize: 16,
    //     marginTop: 10

    // },
    subtn:{ 
        backgroundColor:colors.primary,
        height:40,
        width:200,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"

    },
    subtext:{
        fontSize:18,
        fontWeight:"500",
        color:"white"

    }
})