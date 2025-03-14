import React from 'react'

const Case = (props) => {
    return (
        <div className="swiper-slide cases__item">
            <a className="cases__item-body" href={props.link}>
                <div className="cases__item-img">
                    <img src={props.image} alt="Equine" loading="lazy"></img>
                </div>
                <div className="cases__item-row">
                    <ul className="cases__item-tags">
                        {props.tags.map((tag, index) => {
                            <li key={index}>{tag}</li>
                        })}
                    </ul>
                    <h3 className="cases__item-title">{props.title}</h3>
                </div>
            </a>
        </div>
    )
}

export default Case