import Link from 'next/link';
import { useCart } from '../../lib/CartState';
import CartCount from '../CartCount';
import Signout from '../Signout';
import NavStyles from '../styles/NavStyles';
import { useUser } from '../User';

const Nav = () => {
  const user = useUser();

  const { openCart } = useCart();

  return (
    <NavStyles>
      <Link href="/products">products</Link>
      {user && (
        <>
          <Link href="/sell">sell</Link>
          <Link href="/orders">orders</Link>
          <Link href="/account">account</Link>
          <Signout />
          <button type="button" onClick={openCart}>
            My Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/login">sign in</Link>
        </>
      )}
    </NavStyles>
  );
};

export default Nav;
