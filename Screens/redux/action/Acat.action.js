import { BASE_URL } from "../../utilts/BaseUrl"
import * as ActionType from '../reducer/ActionType'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const getproduct = () => async (dispatch) => {
    console.log("getproductgetproductgetproduct");
    try {
        let data = [];
        await firestore()
            .collection('products')
            .get()
            .then(querySnapshot => {
                // console.log('Total products: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
            });
        console.log();
        dispatch({ type: ActionType.GET_PRODUCT, payload: data })
        // fetch(BASE_URL + 'products/')
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.GET_PRODUCT, payload: data }))
        //     .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}


export const addProduct = (data) => async (dispatch) => {
    // console.log("yess", data);
    try {
        let ranNum = Math.floor(Math.random() * 1000).toString();

        const reference = storage().ref('/products/' + ranNum);

        await reference.putFile(data.pro_image);

        const url = await storage().ref('/products/' + ranNum).getDownloadURL();

        console.log(url);

        firestore()
            .collection('products')
            .add({ name: data.name, description: data.description, rating: data.rating, fileName: ranNum, pro_img: url })
            .then((user) => {
                // console.log("userrrrrrr", user.id);
                dispatch({ type: ActionType.ADD_PRODUCT, payload: {id: user.id, name: data.name, description: data.description, rating: data.rating, fileName: ranNum, pro_img: url } });
            });
        //   fetch( BASE_URL+'products/', {
        //      method: 'POST', 
        //      headers: {
        //          'Content-Type': 'application/json',
        //      },
        //      body: JSON.stringify(data),
        //  })
        //      .then((response) => response.json())
        //      .then((data) => dispatch({type: ActionType.ADD_PRODUCT, payload:data}))
        //      // {
        //      //   console.log('Success:', data);
        //      // })
        //      .catch((error) => {
        //          console.error('Error:', error);
        //      });
    }
    catch (e) {
        console.log(e);
    }

}

export const deleteProduct = (id, fileName) => (dispatch) => {
    console.log("fileNamefileNamefileNamefileNamefileName", id, fileName);
    try {
        const delReference = storage().ref('/products/' + fileName);

        delReference
            .delete()
            .then(function () {
                firestore()
                    .collection('products')
                    .doc(id)
                    .delete()
                    .then(() => {
                        dispatch({ type: ActionType.DELETE_PRODUCT, payload: id })
                    });
            }).catch(function (error) {
                // Uh-oh, an error occurred!
            });

        // fetch(BASE_URL + 'products/' + id, {
        //     method: 'DELETE',
        // })
        //     .then((response) => response.json())
        //     .then(dispatch({ type: ActionType.DELETE_PRODUCT, payload: id }))
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    catch (e) {
        console.log(e);
    }

}



export const EditProduct = (data) => async (dispatch) => {
    console.log("yessEDIT", data);
    let ranNum = Math.floor(Math.random() * 1000).toString();

    const newReference = storage().ref('/products/' + ranNum);

    try {
        if (!data.pro_image.search(/^http[s]?:\/\//)) {
            await firestore()
                .collection('products')
                .doc(data.id)
                .update({
                    name: data.name,
                    description: data.description,
                    rating: data.rating
                })
                .then(() => {
                    dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data })
                });
        } else {
            // 1. remove old image
            // 2. upload new image
            // 3. new url update in cloud firestore

            const delReference = storage().ref('/products/' + data.fileName);

            delReference
                .delete()
                .then(async () => {
                    await newReference.putFile(data.pro_image);

                    const url = await storage().ref('/products/' + ranNum).getDownloadURL();

                    console.log(url);

                    await firestore()
                        .collection('products')
                        .doc(data.id)
                        .update({
                            name: data.name,
                            description: data.description,
                            rating: data.rating,
                            fileName: ranNum,
                            pro_img: url
                        })
                        .then(() => {
                            dispatch({
                                type: ActionType.UPDATE_PRODUCT,
                                payload: {
                                    id: data.id,
                                    name: data.name,
                                    description: data.description,
                                    rating: data.rating,
                                    fileName: ranNum,
                                    pro_img: url
                                }
                            })
                        });
                })
            // fetch(BASE_URL + 'products/' + data.id, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then((response) => response.json())
            //     .then((data) => dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data }))
            //     // {
            //     //   console.log('Success:', data);
            //     // })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });
        }
    } catch (e) {
        console.log(e);
    }

}