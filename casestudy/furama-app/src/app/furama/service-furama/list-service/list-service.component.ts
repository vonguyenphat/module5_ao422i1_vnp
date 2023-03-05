import {Component, OnInit} from '@angular/core';
import {ServiceFurama} from "../../../model/service-furama/serviceFurama";
import {ServiceFuramaServiceService} from "../../../service/service-furama/service-furama-service.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ListServiceComponent implements OnInit {
  serviceFuramas: ServiceFurama[];

  constructor(private serviceFurama: ServiceFuramaServiceService,
              config: NgbModalConfig,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.serviceFuramas = this.serviceFurama.getAllSerive();
  }
  open(content) {
    this.modalService.open(content);
  }

}
