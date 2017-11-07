import React from 'react';

export default (props)=>{
    console.log(props.info);
    const { info } = props;

    const boxStyle = {
        'margin-bottom': '5px'
    };

    return (
        <div className="col-md-4 col-sm-12 text-center" style={boxStyle}>
            <img src={info['im:image'][2].label}/>
            <h3>{info['im:name'].label}</h3>
            <p>{info['summary'].label}</p>
            <p>Released: {info['im:releaseDate'].attributes.label}</p>
            <a className="btn btn-outline-primary" href={info['id'].label}>Buy on iTunes</a>

        </div>
    )
}