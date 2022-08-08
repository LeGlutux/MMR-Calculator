import React from 'react'
import './App.css'

export default () => {
  // const db = firebase.firestore()
  // const write = () => {
  //   db
  //   .collection("Test")
  //   .doc("123")
  //   .set({urine: "green"})
  // }
  return (
    <div className='flex flex-col h-screen w-full items-center bg-black'>
      <title className='flex h-12 w-full my-8 justify-center text-3xl text-white'>MMR Calculator</title>
      <div className='flex flex-col h-full w-full items-center'>
        <h1 className="h-1/2">
          Jeu déjà existant
        </h1>
        <h1 className="h-1/2">
          Ajouter un nouveau jeu
          <button onClick={() => {}}>Click me !</button>
        </h1>
      </div>
    </div>
    
  );
}
