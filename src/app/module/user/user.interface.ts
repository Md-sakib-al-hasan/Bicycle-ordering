export type Tuser = {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
};

export type Tlogin = {
  email: string;
  password: string;
};
