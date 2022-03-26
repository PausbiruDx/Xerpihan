import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type OrderWhereInput = {
  administrator?: UserWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  service?: ServiceWhereUniqueInput;
  status?:
    | "EarlyCheck"
    | "Confirmation"
    | "Processed"
    | "Ready"
    | "Completed"
    | "InQueue";
  totalPrice?: IntNullableFilter;
};
