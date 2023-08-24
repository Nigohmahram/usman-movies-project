import { User, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { auth } from 'src/firebase';
import { useAuth } from 'src/hooks/useAuth';

interface AuthContextState {
        user: User | null;
        error: string;
        IsLoading: boolean;
        signUp: (email: string, password: string) => Promise<void>;
        signIn: (email: string, password: string) => Promise<void>;
        logout: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextState>({
        user: null,
        error: '',
        IsLoading: false,
        signIn: async () => {},
        signUp: async () => {},
        logout:  async () => {},
});

const AuthContextProvider = ({ children }: {children: ReactNode}) => {
        const [initialLoader, setInitialLoader] = useState<boolean>(true)
const {error, IsLoading, logout, signIn, signUp, user, setUser, setIsLoading} = useAuth();
const router = useRouter();

const value = useMemo(() => ({
        user, IsLoading, logout, signIn, error, signUp
}),
//eslint-disable-next-line
[user, IsLoading, error]
);


      useEffect(
        () =>
      onAuthStateChanged(auth, user =>  {
        if (user) {
                setIsLoading(false)
                setUser(user);
        } else {
                setUser(null);
                setIsLoading(true)
                router.push('/auth')
        }
        setIsLoading(false)
        setInitialLoader(false)
      }),
      //eslint-disable-next-line
        []
      )


return <AuthContext.Provider value={value}>{!initialLoader ? children : 'Loading...'}</AuthContext.Provider>
}
export default AuthContextProvider
