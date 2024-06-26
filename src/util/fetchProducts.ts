import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { fetchWrapper } from "./fetchWrapper";

export interface ProductsResponse {
  products: Array<Omit<ProductDTO, "price"> & { price: string }>;
  count: number;
}

export function fetchProducts(perPage: number, options?: RequestInit) {
  return fetchWrapper<ProductsResponse>(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/`,
    options,
  );
}
