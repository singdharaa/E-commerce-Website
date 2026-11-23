import { Link } from 'react-router'
import { useShop } from '../context/ShopContext'

type ProductItemType= {
    id: string;
    name: string;
    image: string[];
    price: number;
}

function ProductItem({id, name,image, price}:ProductItemType) {
    const {currency} = useShop()
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem