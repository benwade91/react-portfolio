import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './CSS/styles.css';

let App = () => {

    const [categories] = useState([
        { name: 'about' },
        { name: 'projects' },
        { name: 'contact' },
        { name: 'resume'}
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const Category = ({section}) => {
        
    switch (section.name) {
        case 'projects': return <Project />;
        case 'contact': return <Contact />;
        case 'resume': return <Resume />;
        default: return <About />;
    }}
    
    return (
        <div>
            <Header
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
            <Category section={currentCategory} />
            <Footer />
        </div>)
}

export default App;