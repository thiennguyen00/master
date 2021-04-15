import React, {useState, Component} from 'react';
import axios from 'axios';
import './views.css';

class Upload extends Component{
  state = {
    // Initially, no file is selected
    selectedFile: null
  };

  handleFile = event => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
    handleUpload = () => {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      // Details of the uploaded file
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      axios.post("server/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

      if (this.state.selectedFile) {

        return (
          <div>
            <h2>File Details:</h2>

              <p>File Name: {this.state.selectedFile.name}</p>
              <p>File Type: {this.state.selectedFile.type}</p>
              <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
          </div>
        );
        } else {
          return (
            <div>
              <br />
              <h4>Choose before Pressing the Upload button</h4>
            </div>
          );
        }
      };

  render(){
    return(
      <div>
      <h1 className = "header">Upload</h1>
      <div className = "center">
          <input onChange={this.handleFile} type="file"/>
          <button onClick={this.handleUpload}  className = "button">
            Upload
          </button>
          {this.fileData()}
      </div>
      </div>
    );
  }

}


export default Upload;
