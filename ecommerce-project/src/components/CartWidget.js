import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div style={{ position: 'relative' }}>
            <FaShoppingCart size={30} />
            <span style={{
                position: 'absolute',
                top: -5,
                right: -10,
                backgroundColor: 'red',
                borderRadius: '50%',
                padding: '5px 10px',
                color: 'white',
                fontSize: '12px'
            }}>5</span>
        </div>
    );
}

export default CartWidget;



