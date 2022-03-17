import { storage, db } from './libs/firebase/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { doc, onSnapshot, addDoc, collection, setDoc, query, where, QuerySnapshot, QueryDocumentSnapshot } from 'firebase/firestore'
import { DocumentData, Unsubscribe } from 'firebase/firestore';
import { FormEvent, useEffect, useState } from 'react';
import * as C from './appStyles'
import * as Photos from './services/photos';

export const App = () => {

    const [ loading, setLoading ] = useState(false);
    const [ file, setFile ] = useState<FileList | null >();
    const [ visible, setVisible ] = useState<boolean>(true);
    const [ docList, setDocList ] = useState<DocumentData[]>([]);

    useEffect(() => {
        setLoading(true);

        onSnapshot(collection(db, "images"), (querySnapshot) => {

            if(docList.length === querySnapshot.size){
                return setLoading(false)
            }

            setDocList([]);

            querySnapshot.forEach((doc) => {
                setDocList(item => [...item, doc.data()])
            })

            setLoading(false);
            setVisible(true);
        })
    },[])

    const uploadPt = () => {
        setVisible(false);
        Photos.uploadPhoto(file ? file[0] : null);
    }

    
    if(loading) return <h1>Carregando!</h1>

    console.log(docList)

    return(
        <C.Container>
        <C.Wrapped>

            {
                visible ? (
                    <C.InputHolder>
                        <input type="file" onChange={(e) => setFile(e.target.files)} />
                        <button onClick={uploadPt}>Colocar</button>
                    </C.InputHolder>
                ) : <b>Subindo</b>
            }
        

            <C.ImagesHolder>
                {
                    docList?.map(photo => (
                        <C.Image key={photo.id}>
                            <img src={photo.url}/>
                        </C.Image>
                    ))
                }
            </C.ImagesHolder>
        </C.Wrapped>
        </C.Container>
    )
}