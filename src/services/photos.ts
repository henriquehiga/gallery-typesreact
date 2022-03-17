import { storage, db } from '../libs/firebase/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { doc, onSnapshot, addDoc, collection, setDoc, query, where, QuerySnapshot, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'

import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';

export interface Photo {
    name : string;
    url : string;
}

export interface ItemType {
    url : string;
    id : string;
    type ?: string;
}


export const uploadPhoto = async (photo:Blob | null) => {
    const id = uuid();

    const storageRef = ref(storage, 'images/'+id);


    if(photo != null){
        const response = uploadBytes(storageRef, photo);
        response.then(async (item) => {
            console.log(item)

            const itemPath = ref(storage, item.metadata.fullPath);

            const itemType = item.metadata.contentType;
            const itemURL = await getDownloadURL(itemPath);

            const onItem = {
                type : itemType,
                url : itemURL,
                id : id,
            }

            uploadOnFirestore(onItem);
        })
    }
    
}

const uploadOnFirestore = async (item : ItemType) => {
    const uploadTask = await setDoc(doc(db, 'images', item.id), item);
    console.log(uploadTask);
}