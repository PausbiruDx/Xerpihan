import { Order } from "../order/Order";

export type User = {
  avatar: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
