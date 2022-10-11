import * as ActionTypes from "../ActionTypes"
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const getCategory = () => async (dispatch) => {
    try {
        let data = [];

        await firestore()
            .collection('Menu')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
            });
        dispatch({ type: ActionTypes.GET_CATEGORY, payload: data })
    }
    catch (e) {
        console.log(e);
    }
}
// try {
//     fetch("http://192.168.137.18:8000/category")
//         .then((response) => response.json())
//         .then((data) => dispatch({ type: ActionTypes.GET_CATEGORY, payload: data }))
//         .catch((error) => console.log(error))
// } catch (e) {
//     console.log(e);
// }

export const addCategory = (data) => async (dispatch) => {
    console.log("datattttttttt", data);
    try {
        let ranNum = Math.floor(Math.random() * 1000).toString();

        const reference = storage().ref('/Menu/' + ranNum);

        await reference.putFile(data.pro_image);

        const url = await storage().ref('/Menu/' + ranNum).getDownloadURL();

        console.log(url);

        await firestore()
            .collection('Menu')
            .add({ name: data.name, fileName: ranNum, pro_img: url })
            .then((user) => {
                dispatch({ type: ActionTypes.ADD_CATEGORY, payload: { id: user.id, name: data.name, fileName: ranNum, pro_img: url } })
            })
            .catch((error) => console.log(error));
    } catch (e) {
        console.log(e);
    }

}
// try {
//     fetch("http://192.168.137.18:8000/category", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//         .then((response) => response.json())
//         .then((data) => dispatch({ type: ActionTypes.ADD_CATEGORY, payload: data }))
//         .catch((error) => console.log(error))
//     } catch (e) {
//         console.log(e);
//     }

// }

export const deleteCategory = (id, fileName) => (dispatch) => {
    console.log("dfd", id, fileName);
    try {
        const delReference = storage().ref('/Menu/' + fileName);

        delReference
            .delete()

            .then(function () {
                firestore()
                    .collection('Menu')
                    .doc(id)
                    .delete()
                    .then(() => {
                        dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: id })
                    });
                // console.log("ahsjahdja", id);
            })
            .catch(function (error) {
                console.log(error)
            });
    } catch (e) {
        console.log(e);
    }

}
// try {
//         fetch("http://192.168.137.18:8000/category/" + id, {
//             method: "DELETE",
//         })
//             .then(dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: id }))
//             .catch((error) => console.log(error))
//     } catch (e) {
//         // console.log(e);
//     }

// }

export const updateCategory = (data) => async (dispatch) => {
    console.log("updatedataaaaa", data);

    let ranNum = Math.floor(Math.random() * 1000).toString();

    const newReference = storage().ref('/Menu/' + ranNum);

    try {
        if (!data.pro_image.search(/^http[s]?:\/\//)) {
            await firestore()
                .collection('Menu')
                .doc(data.id)
                .update({
                    name: data.name,
                })
                .then(() => {
                    dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data })
                });
        } else {

            // 1. remove old image ... 2. upload new image ...3. new url update in cloud firestore

            const delReference = storage().ref('/Menu/' + data.fileName);

            delReference
                .delete()
                .then(async () => {
                    await newReference.putFile(data.pro_image);

                    const url = await storage().ref('/Menu/' + ranNum).getDownloadURL();

                    console.log(url);

                    await firestore()
                        .collection('Menu')
                        .doc(data.id)
                        .update({
                            name: data.name,
                            fileName: ranNum,
                            pro_img: url
                        })
                        .then(() => {
                            dispatch({
                                type: ActionTypes.UPDATE_CATEGORY,
                                payload: {
                                    id: data.id,
                                    name: data.name,
                                    fileName: ranNum,
                                    pro_img: url
                                }
                            })
                        });
                })
        }
        // await firestore()
        //     .collection('Menu')
        //     .doc(data.id)
        //     .update({
        //         name: data.name,
        //     })
        //     .then(() => {
        //         dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data })
        //     });
    } catch (e) {
        console.log(e);
    }
    //     try {
    //         fetch("http://192.168.137.18:8000/category/" + data.id, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         })
    //             .then((response) => response.json())
    //             .then((data) => dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data }))
    //             .catch((error) => console.log(error))
    //     } catch (e) {
    //         // console.log(e);
    //     }

}
