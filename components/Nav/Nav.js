import Link from 'next/link';
import Signout from '../Signout';
import NavStyles from '../styles/NavStyles';
import { useUser } from '../User';

const Nav = () => {
  const user = useUser();
  console.log(user);

  return (
    <NavStyles>
      <Link href="/products">products</Link>
      {user && (
        <>
          <Link href="/sell">sell</Link>
          <Link href="/orders">orders</Link>
          <Link href="/account">account</Link>
          <Signout />
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
