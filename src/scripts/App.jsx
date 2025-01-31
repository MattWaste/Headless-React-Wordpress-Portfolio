import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Works from './Works';
import FormSubmissions from './FormSubmissions.jsx';
import FormTest from './FormTest.jsx';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://mattewest.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="font-staramedium">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/formsubmission" element={<FormSubmissions />} />
            <Route path="/formtest" element={<FormTest />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;