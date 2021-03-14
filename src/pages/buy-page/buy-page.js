import React from 'react';
import './buy-page.scss';
import SearchForm from '../../components/search-form/search-form';
import PropertyCard from '../../components/property-card/property-card';

const BuyPage = (props) => {

    const items = [
        {
            id: 1,
            title: 'Flat1',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 78,
            price: 150000,
            bedrooms: 3,
            bathrooms: 2,
            images: []
        },
        {
            id: 2,
            title: 'Flat2',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 738,
            price: 450000,
            bedrooms: 6,
            bathrooms: 3,
            images: []
        },
        {
            id: 3,
            title: 'Flat3',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 178,
            price: 250000,
            bedrooms: 4,
            bathrooms: 2,
            images: []
        },
        {
            id: 4,
            title: 'Flat1',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 78,
            price: 150000,
            bedrooms: 3,
            bathrooms: 2,
            images: []
        },
        {
            id: 5,
            title: 'Flat2',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 738,
            price: 450000,
            bedrooms: 6,
            bathrooms: 3,
            images: []
        },
        {
            id: 6,
            title: 'Flat3',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 178,
            price: 250000,
            bedrooms: 4,
            bathrooms: 2,
            images: []
        },
        {
            id: 7,
            title: 'Flat1',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 78,
            price: 150000,
            bedrooms: 3,
            bathrooms: 2,
            images: []
        },
        {
            id: 8,
            title: 'Flat2',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 738,
            price: 450000,
            bedrooms: 6,
            bathrooms: 3,
            images: []
        },
        {
            id: 9,
            title: 'Flat3',
            text: 'Some text blablabla ome text blablabla ome text blablabla ome text blablabla ome text blablabla',
            deal: 'sale',
            img: "http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg",
            province: 'Barcelona',
            comarca: 'Barcelonés',
            city: 'Cornella de Llobregat', //on filter - not strict match, but contains
            type: 'apartment',
            surface: 178,
            price: 250000,
            bedrooms: 4,
            bathrooms: 2,
            images: []
        }
    ]

    return(
        <div className="container buy">         
            <SearchForm type="sale" />

            <section>
                <hr/>
                <div className="container">
                    <div className="row">
                    {
                        items.map(item => {
                            const {...itemProps} = item;
                            return(
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <PropertyCard key={item.id} {...itemProps} />
                                </div>
                            )   
                        })
                    }
                    </div>
                </div>
            </section>
            </div>
    )
}

export default BuyPage;