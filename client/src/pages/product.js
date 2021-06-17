import React from 'react';
import ProductPreview from '../components/productPreview';

export default function ProductPage({
  match: {
    params: { id },
  },
}) {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api-product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return <main> {product ? <ProductPreview {...product} /> : null}</main>;
}
