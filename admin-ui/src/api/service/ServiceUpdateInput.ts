import { OrderUpdateManyWithoutServicesInput } from "./OrderUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutServicesInput;
};
