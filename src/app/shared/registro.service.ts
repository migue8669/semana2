import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('productoHermes');
    console.log(this.imageDetailList);
  }

  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
  }
}