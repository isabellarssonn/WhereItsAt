import CartCard from '../CartCard/CartCard'
import useCartStore from '../../stores/useCartStore';

function CartList() { 
    const { cart } = useCartStore();

  return (
    <section className="cartlist">
        { cart.map(event => {
            return <CartCard 
                event={ event }
                key={ event.id } 
                />
        })
      }
    </section>
  )
}

export default CartList