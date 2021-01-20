import React from 'react';
import './App.css';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import NoMatchPage from './pages/NoMatchPage'
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      <body>
        <Switch>
          <Route path = '/' exact component = { HomePage } />
          <Route path = '/about' component = { AboutPage } />
          <Route path = '/article-list' component = {ArticlesListPage} />
          <Route path = '/article/:name' component = {ArticlePage} />
          <Route component = { NoMatchPage } />
        </Switch>
      </body>
    </div>
  );
}

export default App;
