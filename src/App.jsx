// import React from "react"
import { puppyList } from "./data";
import { useState } from "react"; //hook
import "./App.css";

function App() {
  //useState holds data - destructuring
  const [puppies, setPuppies] = useState(puppyList);
  //useState to hold selectedPup
  const [selectedPupId, setSelectedPupId] = useState(null);

  //  get details of selectedPup
  const selectedPup = puppies.find((pup) => {
    return pup.id === selectedPupId;
  });

  const tricks = selectedPup.tricks
    .map((t) => {
      return t.title;
    })
    .join(", ");

  return (
    <>
      <div>
        <h1>Puppy Data</h1>
        <h3>Select a pup&apos;s name to view details</h3>

        {
          //conditional rendering if there is a selected pup

          selectedPupId && (
            <div className="puppyData">
              <h2>{selectedPup.name}</h2>
              <ul>
                <li>ID: {selectedPup.id}</li>
                <li>Age: {selectedPup.age}</li>
                <li>E-mail: {selectedPup.email}</li>
                <li>Cute : {selectedPup.isCute.toString()}</li>
                <li>Owner ID : {selectedPup.ownerId}</li>
                <li>Tricks: {tricks ? tricks : "None"}</li>
              </ul>
            </div>
          )
        }

        {
          // load all puppies from data.js
          puppies.map((pup) => {
            return (
              <div key={pup.id} className="pupList">
                <p
                  className="puppy"
                  onClick={() => {
                    // update selected pup's id
                    setSelectedPupId(pup.id);
                    window.scrollTo(0, 0);
                  }}
                >
                  {pup.name}
                </p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default App;
