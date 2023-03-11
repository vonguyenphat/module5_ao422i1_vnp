import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  private URL_API_CUSTOMER = "http://localhost:3000/customers/";

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.URL_API_CUSTOMER);
  }
  finByIdCustomer(id:string):Observable<Customer>{
    return this.httpClient.get<Customer>(this.URL_API_CUSTOMER + id);
  }
  addNewCustomer(customer: any): Observable<any> {
    return this.httpClient.post(this.URL_API_CUSTOMER, customer);
  }
  updateCustomer(id: string, customer: any): Observable<any> {
    return this.httpClient.put(this.URL_API_CUSTOMER + id, customer);
  }
  deleteCustomer(id: string): Observable<any> {
    return this.httpClient.delete(this.URL_API_CUSTOMER + id);
  }
}
