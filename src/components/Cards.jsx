import React from 'react'
// import image from "../assets" 
export default function Cards(props) {
    // console.log(props.item.item);
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "ONLINE") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {/* <div className='badge'>
                {props.item.badge}
            </div> */}
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`images/${props.item.coverImg}`} alt="Image of Katie Zaferes" />
            <div className='stats'>
                <span>
                    ⭐{props.item.stats.rating}
                </span>
                <span>
                    ({props.item.stats.reviewCount})
                </span>
                <span>
                    ● {props.item.location}
                </span>
            </div>
            <div className='title'>
                {props.item.title}
            </div>
            <div className='price'>
                <b>From $ {props.item.price}</b> / person
            </div>
        </div>
    )
}