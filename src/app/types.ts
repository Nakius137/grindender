export interface UsersCredantials {
  email: string;
  password: string;
}

export interface ButtonProps {
  style: string;
  text: string;
  onClick: () => {};
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
