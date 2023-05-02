import { ReactNode, createContext, useState } from "react";

interface AuthContextType {
  user: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState("Marcelo");

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
