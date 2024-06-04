import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/dashboard.module.css';
import { CircularProgress } from '@mui/material';
import updateOrderStatus from '@/lib/utils/updateOrderStatus';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/atoms/user';
import { mounted } from '@/store/atoms/mounted';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();
  const user = useRecoilValue(userState);
  const isMounted = useRecoilValue(mounted);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [updating, setUpdating] = useState(false);

  const fetchOrders = async () => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setOrders(res.data.orders);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [updating]);

  const renderOrders = (filter) => {
    const filteredOrders = orders.filter(order => {
      if (filter === 'fulfilled') return order.status === 'fulfilled';
      if (filter === 'pending') return order.status === 'pending';
      return true;
    });

    if (filteredOrders.length === 0) {
      return <h1 className={styles.noOrders}>No {filter} Orders</h1>;
    }

    return filteredOrders.map(order => (
      <div className={styles.dashboardContentOrdersContainerOrder} key={order._id}>
        <h1> Order #{order._id}</h1>
        {order.products.map(product => (
          <div className={styles.productDetails} key={product.product._id}>
            <Image alt='product-thumbnail' src={product.product.thumbnail} width={100} height={100} />
            <p>{product.product.name}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.product.price}</p>
          </div>
        ))}
        <p>Total: ${order.totalPrice}</p>
        {updating ? <CircularProgress /> : (
          <select value={order.status} onChange={(e) => {
            updateOrderStatus(e.target.value, order._id, fetchOrders, setUpdating);
          }} className={styles.statusInput}>
            <option value="pending">pending</option>
            <option value="fulfilled">fulfilled</option>
          </select>
        )}
      </div>
    ));
  };

  if (!isMounted) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  } else if (!user?.user || !user?.user.isAdmin) {
    return (
      <div className={styles.noAccess}>
        <h2>Oops!</h2>
        <p>This page does not exist!</p>
      </div>
    );
  } else if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className={styles.dashboardParentContainer}>
        <div className={styles.dashboardSidebar}>
          <div className={activeFilter === 'all' ? styles.active : ''} onClick={() => setActiveFilter('all')}>All Orders</div>
          <div className={activeFilter === 'pending' ? styles.active : ''} onClick={() => setActiveFilter('pending')}>Pending Orders</div>
          <div className={activeFilter === 'fulfilled' ? styles.active : ''} onClick={() => setActiveFilter('fulfilled')}>Fulfilled Orders</div>
          <div onClick={() => router.push('/addproduct')}>Add New Product</div>
        </div>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardContentHeader}>
            <h1>Dashboard</h1>
            <p>From your dashboard you can view your recent orders, pending orders, fulfilled orders.</p>
          </div>
          <div className={styles.totalOrders}>
            <h1>Total Orders: {orders.length}</h1>
          </div>
          <div className={styles.fulfilledOrders}>
            <span className={styles.checkMarkIcon}>&#10003;</span>
            <h1>Fulfilled Orders: {orders.filter(order => order.status === 'fulfilled').length}</h1>
          </div>
          <div className={styles.pendingOrders}>
            <span className={styles.pendingIcon}>!</span>
            <h1>Pending Orders: {orders.filter(order => order.status === 'pending').length}</h1>
          </div>
          <div className={styles.dashboardContentOrders}>
            <h1>{activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Orders</h1>
            <div className={styles.dashboardContentOrdersContainer}>
              {renderOrders(activeFilter)}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
