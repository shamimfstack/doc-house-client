import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);


    const userInfo = {
        user,
        loading,
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;