import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Add to DB');
  
  const jateDB = await openDB('jate', 1);

  const tx = jateDB.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  let id = 1;

  const checkExists = store.get(id);

  const check = await checkExists;

  if(!check){
    const request = store.add({jate: content});
    const result = await request;
    console.log('Data saved to indexedDB', result)
  } else{
    const request = store.put({id: 1, jate: content});
    const result = await request;
    console.log('Updated Data to indexedDB', result)
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from Database');
  const jateDB = await openDB('jate', 1);

  const tx = jateDB.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.get(0);
  console.log(request);

  const result = await request;
  console.log('result.value', result);

  return result;
}

initdb();
