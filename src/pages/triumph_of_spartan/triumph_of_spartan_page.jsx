import React from 'react';
import CardList from '../../components/triumph-of-spartan/cards/cardlist';
import DocList from '../../components/triumph-of-spartan/dokumentasi-list';
import Footer from '../../components/footer/footer';

const Triumph = () => {
    return(
        <div>
            
            <CardList/>
            <DocList/>
            <Footer/>
            
        </div>
    );
}

export default Triumph;