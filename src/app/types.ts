export interface UsersCredantials {
  email: string;
  password: string;
}

export interface ButtonProps {
  style?: string | undefined;
  text: string;
  onClick: () => {};
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface GoalCardProps {
  category: "Day" | "Week" | "Month";
}
