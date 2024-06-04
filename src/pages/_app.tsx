import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { userState } from '@/store/atoms/user'
import cartQuantityState from '@/store/atoms/cart'

import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { usernameState } from '@/store/selectors/username'
import { mounted } from '@/store/atoms/mounted'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <InitUser />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </>
  )
}

function InitCart() {
  const setCartQuantityState = useSetRecoilState(cartQuantityState);

  useEffect(() => {
    const init = async () => {
      try {
        if (typeof window !== 'undefined') {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart/quantity`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
          });

          if (response.data.cartQuantity) {
            console.log(response.data.cartQuantity.totalQuantity);
            setCartQuantityState(response.data.cartQuantity.totalQuantity);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };

    init();
  }, [setCartQuantityState]);

  return null;
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const setMounted = useSetRecoilState(mounted);

  useEffect(() => {
    const init = async () => {
      try {
        if (typeof window !== 'undefined') {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/me`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
          });

          if (response.data.user) {
            setUser({
              user: response.data.user,
              isLoading: false,
            });
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setMounted({
          isMounted: true,
        });
      }
    };

    init();
  }, [setUser, setMounted]);

  return null;
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`);
  const products = await res.json();
  return {
    props: {
      products: products,
    },
  };
}
