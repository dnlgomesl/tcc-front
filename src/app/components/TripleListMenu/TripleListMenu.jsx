import * as React from 'react';
import ListMenu from '../ListMenu/ListMenu';
import TypeContext from '../../contexts/Type';
import './TripleListMenu.css'

function TripleListMenu(){
    const {type, setType} = React.useContext(TypeContext)

    const optionsTime = [
        '',
        'Short',
        'Medium',
        'Long',
    ]

    const optionsLimit = [
        '',
        '10',
        '20',
        '50'
    ]

    const tracksOrArtists = [
        '',
        'Artistas',
        'Músicas'
    ]
    
    return (
        <div>
            <div className='menu'>
                <ListMenu options={optionsTime} label={'Time Range'} />
                <ListMenu options={optionsLimit} label={'Limt'} />
                <ListMenu options={tracksOrArtists} label={'Tipo'} />
            </div>
        </div>

    );
}

export default TripleListMenu;