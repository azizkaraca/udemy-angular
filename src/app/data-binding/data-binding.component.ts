import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  user = {
    name: 'Ahmet',
    surname: 'Aydın',
    job: 'Software Developer',
    favorite_place: 'Kız Kulesi',
    favorite_place_image: 'https://www.uskudar.bel.tr/userfiles/images/5.png',
    isEditable: false,
  };

  type = 'any';

  constructor() {}

  ngOnInit(): void {}

  changeIsEditable() {
    this.user.isEditable = !this.user.isEditable;
  }

  inputSubmit(value: any) {
    alert('"' + value.target.value + '"' +' verisi geldi!!!');
    console.log(value);
    
  }
}
