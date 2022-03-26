import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type OrderUpdateInput = {
  administrator?: UserWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  quantity?: number | null;
  service?: ServiceWhereUniqueInput | null;
  status?:
    | "EarlyCheck"
    | "Confirmation"
    | "Processed"
    | "Ready"
    | "Completed"
    | "InQueue";
  totalPrice?: number | null;
};
