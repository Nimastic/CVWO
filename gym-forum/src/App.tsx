// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Forum from './pages/Forum';
import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
      <PostList />
      <AddPostForm />
    </Router>
  );
};

export default App;
