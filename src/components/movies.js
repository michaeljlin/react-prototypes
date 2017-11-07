import React from 'react';

export default (props)=>{
    console.log(props.info);
    const { info } = props;

    // console.log(info.hasOwnProperty('rights'));

    let rights = "Copyright Unknown";
    let rental = "Not Available";

    if(info.hasOwnProperty('rights')){
        rights = info.rights.label;
    }

    if(info.hasOwnProperty('im:rentalPrice')){
        rental = info['im:rentalPrice'].label;
    }

    const boxStyle = {
        'margin-bottom': '5px'
    };

    return (
        <div className="col-md-4 col-sm-12 text-center" style={boxStyle}>
            <img src={info['im:image'][2].label}/>
            <h3>{info['im:name'].label}</h3>
            <p>{info['summary'].label}</p>
            <p>{rights}</p>
            <p>Released: {info['im:releaseDate'].attributes.label}</p>
            <p>Buy: {info['im:price'].label}</p>
            <p>Rent: {rental}</p>
            <a className="btn btn-outline-primary" href={info['id'].label}>Watch on iTunes</a>

        </div>
    )
}