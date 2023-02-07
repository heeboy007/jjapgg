import { useState } from 'react';

import './App.css'

import Ranking from './pages/Ranking.jsx'
import PRSearch from './pages/PRSearch.jsx'
import Champion from './pages/Champion.jsx'

export default function App() {
  const tabs = [
    {
      id : 0,
      title : "챔피언",
      linkto: "<Champion />"
    },
    {
      id : 1,
      title : "랭킹",
      linkto: "<Ranking />"
    },
    {
      id : 2,
      title : "전적",
      linkto: "<PRSearch />"
    },
  ];

  const [index, setIndex] = useState(0);
  
  return (
    <main>

      <header class="selector">
        <h1 id="title">JAPP.GG</h1>
        <p>홈</p>
        <p>랭킹</p>
        <p>전적</p>
        <p>챔피언</p>
      </header>
      
      <div class="body">
        <Ranking />
        <PRSearch />
        <Champion />
      </div>
    </main>
  )
}

