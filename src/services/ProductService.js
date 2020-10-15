import http from "../config/http-common";

class ProductService {
  getAll() {
    return http.get("/products");
  }

    createTask(data){
      return http.post("/products", data);    
    }
}
export default new ProductService();
