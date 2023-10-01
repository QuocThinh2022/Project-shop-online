import { get } from "../utils/request";

export async function getProductList() {
   return await get(`products`);
}
