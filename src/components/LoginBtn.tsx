import React, { useState, useEffect } from 'react';
import formStyles from '../styles/signup.module.css';
import { SigninToSignupModal, signupToSigninModal, openSigninModal, openSignupModal } from '@/lib/utils/modal';
import axios from 'axios';
import Router, { useRouter } from 'next/router';

const LoginBtn = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [existsError, setExistsError] = useState(false);
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        // Ensuring the code runs only on the client side
        setIsClient(true);
    }, []);

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setExistsError(true);
                const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                fill.classList.remove(`${formStyles.hide}`);
                return;
            }

            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
                username: username,
                password: password
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            });

            const data = res.data;
            if (isClient) {
                localStorage.setItem("token", data.token);
            }

            if (res.status === 200) {
                setLoggedIn(true);
                const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                fill.classList.add(`${formStyles.hide}`);

                if (process.env.NEXT_PUBLIC_SERVER_URL === `${process.env.NEXT_PUBLIC_SERVER_URL}/login`) {
                    router.push(`/${username}/orders`);
                } else {
                    router.push(`/${username}/admin`);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.log('Error response:', error.response.data);
            } else if (error.request) {
                console.log('Error request:', error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    return (
        <button onClick={handleLogin} className={formStyles.btn}>Log in</button>
    );
};

export default LoginBtn;
