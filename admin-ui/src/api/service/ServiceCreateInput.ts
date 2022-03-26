import { OrderCreateNestedManyWithoutServicesInput } from "./OrderCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutServicesInput;
};
