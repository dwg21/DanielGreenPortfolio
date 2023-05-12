import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
                {toggle && (
                  <div className='hamburgerMenu'>
                      <HiX onClick={() => setToggle(false)} />
                      <ul>
                        {['home', 'about', 'work', 'contact'].map((item) => (
                          <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                  </div>
                )}

    <nav className="app__navbar">
      <div className='toggleMenu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

    </nav>
    </div>
  );
};

export default Navbar;