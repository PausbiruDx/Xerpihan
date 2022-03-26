import { User } from "../user/User";
import { Customer } from "../customer/Customer";
import { Service } from "../service/Service";

export type Order = {
  administrator?: User | null;
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  quantity: number | null;
  service?: Service | null;
  status?:
    | "EarlyCheck"
    | "Confirmation"
    | "Processed"
    | "Ready"
    | "Completed"
    | "InQueue";
  totalPrice: number | null;
  updatedAt: Date;
};
