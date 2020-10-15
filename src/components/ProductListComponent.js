import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

const ProductList = (props) =>{

    console.log(props.productList)
    const productList = props.productList;

    return (<>
        <div className="container">
            <ul className="product-list">
                {productList && productList.map((item, index)=>{
                    return (
                        <li className="product-list__item" key={index}>
                            <div className="product-list__image">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        //isFluidWidth: true,
                                        src: item.image,
                                        width: 300, 
                                        height: 250, 
                                    },
                                    largeImage: {
                                        src: item.image,
                                        width: 1800,
                                        height: 1200
                                    }
                                }} />
                            </div>
                            <div className="product-list__data">
                                <h2>{item.name}</h2>
                                
                                <h3>{item.description}</h3>
                                <p>{item.madeUp}</p>
                                <button className="btn btn-primary">Show More</button>
                            </div>
                            
                        </li>
                    );
                })}
            </ul>
        </div>
    </>);
}

export default ProductList;