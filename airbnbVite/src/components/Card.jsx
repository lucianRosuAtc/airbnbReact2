import star from'../img/star.png'

export default function Card(props){

    let badgeText
    if(props.item.openSpots ===0){
        badgeText = "Sold Out"
    } else if (props.item.location === "Online"){
        badgeText = "Online"
    }

    return(
        <div className='card'>

            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img className="card--image" src={`../src/img/${props.item.coverImg}`}/>

                <div className="card--stats">

                    <img  src={star} className="card--star" />
                    <span>{props.item.stats.rating}</span>
                    <span className='gray'>({props.item.stats.reviewCount})  •</span>
                    <span className='gray'>{props.item.location}</span>

                </div>

                    <p className="card--title">{props.item.title}</p>
                    <p className="card--price"><span className='bold'>From ${props.item.price}</span> / person</p>
             
        </div>
    )
}
