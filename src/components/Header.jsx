import React from 'react';


const Header = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        // currentCategory
    } = props;

    return (
        <header>
            <h1> Ben Wade</h1>
            <nav>
                <ul>
                    <p className="menu-btn">Menu</p>
                    {categories.map((category) => {
                        return <li key={category.name}>
                            <span style={{cursor: 'pointer'}} className="menu-item"
                                onClick={() => {
                                    console.log(category)
                                    setCurrentCategory(category);
                                }}
                                >{category.name}</span>
                        </li>
                    })}




                    {/* <li>
                    <a className="menu-item" href="#work">Projects</a>
                </li>
                <li>
                    <a className="menu-item" href="#contact-me">Contact Me</a>
                </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;