import React, {useState} from 'react';
import axios from 'axios';
import './views.css';

function Upload(){

  return(
    <>
    <h1 className = "header">Upload</h1>
    <div className = "center">
        <input type="file"/>
        <button  className = "button">
          Upload
        </button>
    </div>
    </>
  );

}


export default Upload;
