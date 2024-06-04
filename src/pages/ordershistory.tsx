import React, { useEffect, useState } from 'react';
import styles from '../styles/OrdersHistory.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Loading } from '@/components/Loading';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/atoms/user';

const OrdersHistory = () => {
    const user = useRecoilValue(userState);
    const [ordersHistory, setOrdersHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');
    const router = useRouter();

    useEffect(() => {
        const getOrdersHistory = async () => {
            try {
                const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders/history`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                setOrdersHistory(data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
                console.log('Server error');
                setIsLoading(false);
            }
        };

        getOrdersHistory();
    }, [activeFilter]);

    if (isLoading) {
        return <Loading />;
    } else {
        if (user.user) {
            if (!isLoading && ordersHistory.length === 0) {
                return (
                    <div className={styles.NoOrdersContainer}>
                        <h1 className={styles.NoOrder}>No orders Yet!</h1>
                        <Link href={'/'}>
                            <p>Purchase Now!</p>
                        </Link>
                    </div>
                );
            } else {
                const filteredOrders = ordersHistory.filter((order) => {
                    if (activeFilter === 'fulfilled') {
                        return order.status === 'fulfilled';
                    } else if (activeFilter === 'pending') {
                        return order.status === 'pending';
                    } else {
                        return true;
                    }
                });

                return (
                    <div className={styles.dashboardParentContainer}>
                        <div className={styles.dashboardSidebar}>
                            <div onClick={() => router.push('/')}>Home</div>
                            <div onClick={() => router.push('/cart')}>Cart</div>
                            <div
                                className={activeFilter === 'fulfilled' ? styles.active : ''}
                                onClick={() => setActiveFilter('fulfilled')}
                            >
                                Fulfilled Orders
                            </div>
                            <div
                                className={activeFilter === 'pending' ? styles.active : ''}
                                onClick={() => setActiveFilter('pending')}
                            >
                                Pending Orders
                            </div>
                            <div
                                className={activeFilter === 'all' ? styles.active : ''}
                                onClick={() => setActiveFilter('all')}
                            >
                                All Orders
                            </div>
                        </div>
                        <div className={styles.dashboardContent}>
                            <h1 className={styles.dashboardContentHeader}>Orders History</h1>
                            <div className={styles.dashboardContentOrdersContainer}>
                                {filteredOrders.map((order) => (
                                    <div className={styles.dashboardContentOrdersContainerOrder} key={order._id}>
                                        <h1>Order Id: #{order._id}</h1>
                                        <div className={styles.productDetailsContainer}>
                                            {order.products.map((product) => (
                                                <div className={styles.productDetails} key={product.product._id}>
                                                    <Image
                                                        className={styles.productImage}
                                                        src={product.product.thumbnail}
                                                        alt="product image"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <p>{product.product.name}</p>
                                                    <p>{product.product.price}</p>
                                                    <p>Ordered Quantity: {product.quantity}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className={styles.totalPrice}>Total Price: ${order.totalPrice}</p>
                                        <p className={styles.status}>Status: {order.status}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div className={styles.container}>
                    <h1 className={styles.title}>Not authorised! Login to see your orders history.</h1>
                </div>
            );
        }
    }
};

export default OrdersHistory;
