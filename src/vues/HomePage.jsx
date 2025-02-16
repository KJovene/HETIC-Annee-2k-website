import { Link } from 'react-router';
import { useEffect, useState } from 'react';

import FileList from '../components/Filelist/Filelist';


import Box from '../components/boxes/Box';
import DefaultButton from '../components/buttons/defaultButton';
import ClockCanvas from '../components/clockThree/ClockCanvas';
import { getBlagueData, getCitationData, getEvenementData, getMocktailData, getRecetteData } from '../controllers/dailyDataController';

function HomePage() {
    const [mocktail, setMocktail] = useState({});
    const [recette, setRecette] = useState([]);
    const [citation, setCitation] = useState('');
    const [evenement, setEvenement] = useState('');
    const [blague, setBlague] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          setMocktail(await getMocktailData())
          setRecette(await getRecetteData())
          setCitation(await getCitationData())
          setEvenement(await getEvenementData())
          setBlague(await getBlagueData())
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-4 w-full">
                    <ClockCanvas width={"300px"} height={"200px"} zoom={30}/>
                    <Box title="Recipe of the day">
                        <div className='flex flex-row gap-5'>
                            <img src={recette[0]?.strMealThumb} className='w-28 aspect-square' alt='Mocktail du jour'/>
                            <div className="flex flex-col justify-between">
                                <h2>{recette[0]?.strMeal}</h2>
                                <Link to="/recette" className='w-fit'>
                                <DefaultButton>Explore</DefaultButton>
                                </Link>
                            </div>
                        </div>
                    </Box>
                    <Box title={'Mocktail of the day'}>
                        <div className='flex flex-row gap-5'>
                            <img src={mocktail?.strDrinkThumb} className='w-28 aspect-square' alt='Recette du jour'/>
                            <div className="flex flex-col justify-between">
                                <h2>{mocktail.strDrink}</h2>
                                <Link to="/mocktail" className='w-fit'>
                                <DefaultButton>Explore</DefaultButton>
                                </Link>
                            </div>
                        </div>
                    </Box>
                    <Box title={'Quote of the day'}>
                        <p>{citation}</p>
                    </Box>
                    <Box title={'Event of the day'}>
                        <p>{evenement}</p>
                    </Box>
                    <Box title={'Joke of the day'}>
                        <p>{blague}</p>
                    </Box>
                </div>
                <FileList/>
            </div>
        </>
    );
}

export default HomePage;
