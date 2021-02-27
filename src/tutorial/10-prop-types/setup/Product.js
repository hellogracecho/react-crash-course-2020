import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from  '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  // ** Check the argument is valid (some values are undefined from API)
  const url = image && image.url;

  return <article className='product'>
    <h4>single product</h4>
    <img src={url || defaultImage} alt={name || 'default name'}/>
    <h4>{name || 'default name'}</h4>
    <p>${price || 3.99}</p>
    </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// Product.defaultProps = {
//   image: defaultImage,
//   name: 'default name',
//   price: 3.99,
// }
// ** shortcut circuit operator! wow.. is better than ternary operator
{/* <img src={image.url || image} alt={name}/> */}
{/* <img src={image.url ? image.url : image} alt={name}/> */}

export default Product;
