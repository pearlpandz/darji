import React, { useContext } from "react";
import { Text } from "react-native";
import { NetworkContext } from "./../services/context";

export const NetworkCheck = (WrappedComponent) => {

    const { isOnline } = useContext(NetworkContext);

    const HocComponent = ({ ...props }) => {
        return (
            <>
                <WrappedComponent {...props} />
                {
                    isOnline ? null :
                        <Text style={{
                            paddingVertical: 15,
                            paddingHorizontal: 10,
                            textAlign: "center",
                            backgroundColor: '#d4d4d4',
                            color: '#333',
                            fontWeight: '500'
                        }}>No internet connection!</Text>
                }
            </>
        )
    }
    return HocComponent;
}