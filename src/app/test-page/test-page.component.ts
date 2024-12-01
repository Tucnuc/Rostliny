import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgFor } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

export interface Plant {
  name: string;
  family: string;
  img: string[];
  colors: boolean[];
}

export interface Families {
  [key: string]: Plant[];
}

@Component({
  selector: 'app-test-page',
  imports: [NgStyle, NgClass, NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
  animations: [
    trigger('opacityAnimation', [
      state('vis', style({ filter: 'blur(10px)'  })),
      state('invis', style({ filter: 'blur(0)', cursor: 'default' })),
      transition('vis => invis', [animate('250ms ease-out')])
    ]),
  ],
})

export class TestPageComponent implements OnInit {
  swiperInstance: any;

  path = '/images/rostliny/';

  families: Families = {
    Mirikovite: [
      { name: 'Mrkev Obecná', family: 'Miříkovité', img: [this.path+'mirikovite/mrkev-obecna/mrkev1.png',this.path+'mirikovite/mrkev-obecna/mrkev2.png',this.path+'mirikovite/mrkev-obecna/mrkev3.png'], colors: [false, false, true] },
      { name: 'Miřík Celer', family: 'Miříkovité', img: [this.path+'mirikovite/mirik-celer/celer1.png',this.path+'mirikovite/mirik-celer/celer2.png',this.path+'mirikovite/mirik-celer/celer3.png'], colors: [false, false, false] },
      { name: 'Petržel Obecná', family: 'Miříkovité', img: [this.path+'mirikovite/petrzel-obecna/petrzel1.png',this.path+'mirikovite/petrzel-obecna/petrzel2.png',this.path+'mirikovite/petrzel-obecna/petrzel3.png'], colors: [false, false, false] },
    ],
    Ruzovite: [
      { name: 'Jabloň', family: 'Růžovité', img: [], colors: [false, false, false] },
      { name: 'Hrušeň', family: 'Růžovité', img: [], colors: [false, false, false] },
      { name: 'Jeřáb', family: 'Růžovité', img: [], colors: [false, false, false] },
    ],
    // Ruzovite: [],
  };

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  chosenFamilies = ['Mirikovite'];
  filteredPlants: Plant[] = [];

  usedPlants: string[] = [];
  chosenPlant: Plant | null = null;

  generatePlant() {
    let i: number;
    let foundPlant: boolean = false;

    while (!foundPlant) {
      i = this.getRandomNumber(0, this.filteredPlants.length-1);
      const generatedPlant = this.filteredPlants[i];

      if (!this.usedPlants.includes(generatedPlant.name)) {
        foundPlant = true;
        this.usedPlants.push(generatedPlant.name);
        this.chosenPlant = generatedPlant;
        console.log(`${generatedPlant.name} selected.`);
      } else {
        console.log('Retrying..');
      }
    }
  }

  changePlant() {
    this.isVisible = false;
    this.generatePlant();
  }

  slideIndex = 1;

  changePicture(n: number) {
    this.showSlide(this.slideIndex += n);
  }

  showSlide(n: number) {
    if (this.chosenPlant) {
      if (n > this.chosenPlant.img.length) { this.slideIndex = 1; }
      if (n < 1) { this.slideIndex = this.chosenPlant.img.length; }
    }
  }

  isVisible = false;

  uncoverText() {
    this.isVisible = true;
  }

  ngOnInit() {
    const familiesKeys = Object.keys(this.families);
    for (let i = 0; i < familiesKeys.length; i++) {
      if (this.chosenFamilies.includes(familiesKeys[i])) {
        this.filteredPlants.push(...this.families[familiesKeys[i]]);
      }
    }

    console.log(`Plants were succesfully filtered. Their number: ${this.filteredPlants.length}`);
    this.generatePlant();
    this.showSlide(this.slideIndex);
  }

}