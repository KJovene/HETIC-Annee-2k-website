import React from 'react';
import { Link } from 'react-router';
import DefaultButton from '../buttons/defaultButton';

function Header() {
    return (
        <div className="flex flex-col gap-5 pb-4">
            <div className='flex flex-row justify-between'>
                <div className="flex items-center gap-3">
                    <img src='/LOGO_SAPULYUK.webp' className="h-16 aspect-square" alt="Sapalyuk Logo" />
                    <h1 className="text-7xl">Sapulyuk</h1>
                </div>
                <div className="flex flex-row">
                    <p>Daily update between 7pm and 8pm - </p>
                    <span className="text-blue-500">Edited Nov 22, 2002</span>
                </div>
            </div>
            <div className="flex flex-wrap">
                <Link to="/">
                    <DefaultButton>
                        Homepage
                    </DefaultButton>
                </Link>
                
                <Link to="/markdown">
                    <DefaultButton>
                        Markdown
                    </DefaultButton>
                </Link>
                
                <Link to="/recette">
                    <DefaultButton>
                        Recipe
                    </DefaultButton>
                </Link>
                
                <Link to="/mocktail">
                    <DefaultButton>
                        Mocktail
                    </DefaultButton>
                </Link>
            </div>
        </div>
    );
}

export default Header;
