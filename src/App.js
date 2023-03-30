import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Applications from './components/Applications';
import DataList from './components/DataList';
import Resources from './components/Resources';
import Home from './components/Home';
import AppSearch from './components/AppSearch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/search" element={<SearchBar />} />
        <Route exact path="/appsearch" element={<AppSearch />} />
        <Route exact path="/applications" element={<Applications />} />
        <Route exact path="/lists" element={<DataList />} />
        <Route exact path="/resources" element={<Resources />} />
      </Routes>
    </Router>

  )
}

export default App