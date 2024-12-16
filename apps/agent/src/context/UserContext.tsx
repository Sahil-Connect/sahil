import { createContext, useContext, ReactNode } from 'react';
import { Session } from 'next-auth';
import { useGetUserById } from "@sahil/lib/hooks/users";

type UserContextType = {
  currentUser: any; // Replace 'any' with your user type
  userLoading: boolean;
  session: Session | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ 
  children, 
  session 
}: { 
  children: ReactNode;
  session: Session | null;
}) {
  const { data: currentUser, loading: userLoading } = useGetUserById(session?.user?.id);

  return (
    <UserContext.Provider value={{ currentUser, userLoading, session }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 