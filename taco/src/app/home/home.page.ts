import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedTaco = {};
  selectedIndexTaco = 0;

  tacosArray = [{
      image: 'assets/home/taco_asada.png',
      name: 'Taco de carne asada',
      type: 1,
      amount: 0,
      favorite: true
    },
    {
      image: 'assets/home/taco_suadero.jpg',
      name: 'Taco de suadero',
      type: 2,
      amount: 0,
      favorite: false
    },
    {
      image: 'assets/home/taco_carnitas.png',
      name: 'Taco de carnitas',
      type: 3,
      amount: 0,
      favorite: false
    },
    {
      image: 'assets/home/taco_maciza.jpg',
      name: 'Taco de maciza',
      type: 4,
      amount: 0,
      favorite: false
    },
  ];

  constructor() {
    this.selectedTaco = this.tacosArray[0];
  }

  nextStep() {}

  selectTaco(index, taco) {
    this.selectedIndexTaco = index;
    this.selectedTaco = taco;

  }

  addTaco(index) {
    this.tacosArray[index].amount += 1;
  }

  removeTaco(index) {
    if (this.tacosArray[index].amount > 0) {
      this.tacosArray[index].amount -= 1;
    }
  }

}
