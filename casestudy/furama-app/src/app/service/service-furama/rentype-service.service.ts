import {Injectable} from '@angular/core';
import {RentType} from "../../model/service-furama/rentType";

@Injectable({
  providedIn: 'root'
})
export class RentypeServiceService {

  constructor() {
  }

  rentTypes: RentType[] = [
    {
      id: 1,
      name: 'Villa'
    },
    {
      id:2,
      name:'house'
    },
    {
      id:3,
      name:'Phòng riêng'
    }
  ];

}
