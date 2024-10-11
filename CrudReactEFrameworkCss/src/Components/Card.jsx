import React from 'react';
import fotoMarcola from '../Assets/foto_marcola_nvoip.jpg'

const Card = () => {
    return (
        <div className="card columns is-centered">
            <div className="card-image column is-one-fifth">
                <figure className="image is-4by3">
                    <img
                        src={fotoMarcola}
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img
                                src={fotoMarcola}
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">Marcos Andrade</p>
                        <p className="subtitle is-6">@mpinheiro16</p>
                    </div>
                </div>

                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                    iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    );
};

export default Card;
