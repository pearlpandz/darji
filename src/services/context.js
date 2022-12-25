import {createContext} from 'react';

export const AuthContext = createContext();

export const WelcomeContext = createContext();

export const CurrentUserContext = createContext();

const initialNetworkStatus = {
    isOnline: false, 
    setNetworkStatus: (status) => {}
}

export const NetworkContext = createContext(initialNetworkStatus);