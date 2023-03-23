// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import DataForm from './components/DataForm';
// import DataList from './components/DataList';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/data');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   return (
//     // <div className="App">
//     //   <DataList data={data}/>
//     //   <DataForm fetchData={fetchData}/>
//     // </div>

//   );
// }

// export default App;
import React from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Premium</a></li>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Télécharger</a></li>
            <li><a href="#">S'inscrire</a></li>
            <li><a href="#">Se connecter</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Écoutez de la musique gratuitement sur Spotify</h1>
        <p>Des millions de titres et d'épisodes de podcasts.</p>
        <form>
          <input type="text" placeholder="Artiste, titre ou album" />
          <button>Rechercher</button>
        </form>

  
      </main>
    <AudioPlayer />
    </div>
  );
}

export default App;
