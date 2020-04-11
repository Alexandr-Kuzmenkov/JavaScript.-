

"use strict";



const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const resultPhotos = products.filter(items => "photos" in items && items.photos.length > 0);
console.log(resultPhotos);

const resultSortPrice = products.sort(function(lowPrice, higtPrice){
    return lowPrice.price - higtPrice.price;
});
console.log(resultSortPrice);
