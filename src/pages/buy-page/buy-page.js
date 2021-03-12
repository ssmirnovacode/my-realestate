import React from 'react';
import SearchForm from '../../components/search-form/search-form';
import PropertyCard from '../../components/property-card/property-card';

const BuyPage = () => {

    const items = [
        {
            id: 1,
            title: 'Flat1',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 78,
            price: 150000,
            bedrooms: 3,
            bathrooms: 2
        },
        {
            id: 2,
            title: 'Flat2',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 738,
            price: 450000,
            bedrooms: 6,
            bathrooms: 3
        },
        {
            id: 3,
            title: 'Flat3',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 178,
            price: 250000,
            bedrooms: 4,
            bathrooms: 2
        },
        {
            id: 4,
            title: 'Flat1',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 78,
            price: 150000,
            bedrooms: 3,
            bathrooms: 2
        },
        {
            id: 5,
            title: 'Flat2',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 738,
            price: 450000,
            bedrooms: 6,
            bathrooms: 3
        },
        {
            id: 6,
            title: 'Flat3',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 178,
            price: 250000,
            bedrooms: 4,
            bathrooms: 2
        },
        {
            id: 7,
            title: 'Flat1',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 78,
            price: 150000,
            bedrooms: 3,
            bathrooms: 2
        },
        {
            id: 8,
            title: 'Flat2',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 738,
            price: 450000,
            bedrooms: 6,
            bathrooms: 3
        },
        {
            id: 9,
            title: 'Flat3',
            deal: 'sale',
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 178,
            price: 250000,
            bedrooms: 4,
            bathrooms: 2
        },
    ]

    return(
        <>         
            <SearchForm type="sale" />

            <section>
                <hr/>
                <div className="container">
                    <div className="row">
                    {
                        items.map(item => {
                            return(
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <PropertyCard key={item.id} />
                                </div>
                            )   
                        })
                    }
                    </div>
                </div>
            </section>
            </>
    )
}

export default BuyPage;