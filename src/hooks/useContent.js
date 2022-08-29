import { useState, useEffect, useContext } from 'react';
import { FireBaseContext } from '../context/firebase';
import { collection, getDocs } from 'firebase/firestore';

const useContent = async ({ target, setTarget }) => {
  const [content, setContent] = useState([]);
  const { db } = useContext(FireBaseContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, target));
        const dataDocs = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          dataDocs.push({
            docId: doc.id,
            ...doc.data()
          });
        });
        setContent(() => [...dataDocs]);
        setTarget(() => [...dataDocs]);
      } catch (err) {
        console.log('Error Getting Data', err.message);
      }
    };
    getData();
  }, []);

  return content.length > 0 && [...content];
};

export default useContent;
