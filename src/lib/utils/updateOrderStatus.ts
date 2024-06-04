import axios from "axios";

const updateOrderStatus = async (status, orderId, fetchOrders, setUpdating) => {
    setUpdating(true);
    try {
        // Check if localStorage is available
        if (typeof window !== 'undefined') {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders/${orderId}`, {
                status: status
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            });
        }
        setUpdating(false);
        fetchOrders();
    } catch (error) {
        console.error(error);
        setUpdating(false);
    }
};

export default updateOrderStatus;
