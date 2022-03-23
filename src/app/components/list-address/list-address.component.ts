import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { Address } from './../../models/address';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  getAllAddresses(){
    this.addressService.getAll().subscribe((res: any) => this.addresses = res);
  }

  persistAddress(data: Address) {
    this.addressService.Save(data)
        .subscribe((res: any) => this.addresses = [res, ...this.addresses])
  }

}
