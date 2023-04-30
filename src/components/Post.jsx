import React from "react"
import Cards from "./Cards"
import data from "./data"

export default function Post() {
    const dataElem = data.map(item => {
        return <Cards 
        key = {item.id}
        item = {item}
        />
    })
    return (
        <div className="posts">
            {dataElem}
        </div>
        )
}

// return <Cards 
// title={d.title} 
// price={d.price} 
// image={d.coverImg} 
// rating={d.stats.rating} 
// reviewCount={d.stats.reviewCount} 
// location={d.location}
// openSpots={d.openSpots}
// badge={d.badge}

    // <div className="posts">
    //     <Cards
    //     image = "Katie-Zaferes.png"
    //     rating = {5.0}
    //     reviewCount = {10}
    //     country = "USA"
    //     title = "Life lessons with Katie Zaferes"
    //     price = "$ 136"
    //     badge = "SOLD OUT"
    //     />
    //     <Cards
    //     image = "wedding-photography.png"
    //     rating = {3.0}
    //     reviewCount = {30}
    //     country = "USA"
    //     title = "Learn wedding photography"
    //     price = "$ 125"
    //     badge = "ONLINE"
    //     />
    //     <Cards
    //     image = "mountain-bike.png"
    //     rating = {4.8}
    //     reviewCount = {16}
    //     country = "USA"
    //     title = "Group mountain biking"
    //     price = "$ 50"
    //     badge = "ONLINE"
    //     />
    // </div>