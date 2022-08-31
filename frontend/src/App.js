import './App.css';
import { useState } from 'react';

function App() {

  const [name,setName] = useState('');
  const [files, setFiles] = useState(null);

  const handleSubmit = async(e)=> {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    for(let i=0; i<files.length; i++) {
      formData.append("files",files[i]);
      formData.append("filename",Date.now() + files[i].name)
    }

    fetch("http://localhost:5000/upload_files", {
      method: 'POST',
      body: formData,
    }).then((res) => console.log(res))
    .catch((err) => ("Error in uploading", err));

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="formDiv">
          <h2> Enter File details </h2>
          <form id="form" className="form" encType='multipart/form-data' onSubmit={handleSubmit}>
            <div className="input-group">
              <label for="name" > Your Name : </label>
              <input name="name" type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="files" > Select your files : </label>
              <input name="files" type="file" onChange={e=>setFiles(e.target.files)} multiple required />
            </div>
            <button type="submit" className="submit-btn" > Upload </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
