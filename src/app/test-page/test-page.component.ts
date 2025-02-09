import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Output, EventEmitter } from '@angular/core';
import { NgStyle, NgClass, NgFor } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedService } from '../shared/shared.service';

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
    trigger('blurAnimation', [
      state('blurred', style({ filter: 'blur(10px)'  })),
      state('unblurred', style({ filter: 'blur(0)', cursor: 'default' })),
      transition('blurred => unblurred', [animate('250ms ease-out')]),
    ]),
    trigger('blurAnimation2', [
      state('blurred', style({ filter: 'blur(10px)'  })),
      state('unblurred', style({ filter: 'blur(0)' })),
      transition('unblurred => blurred', [animate('250ms ease-in-out')]),
    ]),
    trigger('opacityTransition', [
      state('vis', style({ opacity: 1  })),
      state('invis', style({ opacity: 0 })),
      state('vis2', style({ opacity: 1  })),
      state('invis2', style({ opacity: 0, display: 'none' })),
      transition('invis <=> vis', [animate('250ms ease-in-out')]),
      transition('invis2 <=> vis2', [animate('250ms ease-in-out')]),
    ]),
    trigger('cardSwap', [
      state('static', style({ opacity: 1 })),
      state('movingRight', style({ transform: 'translate(200px, 0) rotate(5deg)' })),
      state('finishRight', style({ opacity: 0, transform: 'translate(225px, 25px) rotate(10deg)' })),
      state('movingLeft', style({ transform: 'translate(-200px, 0) rotate(-5deg)' })),
      state('finishLeft', style({ opacity: 0, transform: 'translate(-225px, 25px) rotate(-10deg)' })),
      transition('static => movingRight', [animate('1s ease-in')]),
      transition('static => movingLeft', [animate('1s ease-in')]),
      transition('movingRight => finishRight', [animate('0.5s ease')]),
      transition('movingLeft => finishLeft', [animate('0.5s ease')]),
    ]),
  ],
})
export class TestPageComponent implements OnInit {
  constructor(private shared:SharedService) { }
  
  families: Families = {};

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  chosenFamilies: string[] = [];
  filteredPlants: Plant[] = [];

  usedPlants: string[] = [];
  chosenPlant: Plant | null = null;
  chosenPlantCopy: Plant | null = null;

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

  slideIndex: number = 1;
  slideIndexCopy: number = 1;

  changePicture(n: number) {
    this.showSlide(this.slideIndex += n);
  }

  showSlide(n: number) {
    if (this.chosenPlant) {
      if (n > this.chosenPlant.img.length) { this.slideIndex = 1; }
      if (n < 1) { this.slideIndex = this.chosenPlant.img.length; }
    }
  }

  isVisible: boolean = false;
  uncoverText() {
    this.isVisible = true;
  }

  isChanging: boolean = false;
  isVisibleCopy: boolean = false;
  cardSwapState: string = 'static';

  isCorrect: boolean = false;
  isIncorrect: boolean = false;

  opacityState1: string = 'invis';
  opacityState2: string = 'invis';
  opacityState3: string = 'vis2';
  opacityState4: string = 'vis2';
  blurCardState: string = 'unblurred';

  cursorValue: string = 'pointer';

  swapCards(n: boolean) {
    this.isVisibleCopy = this.isVisible;
    this.slideIndexCopy = this.slideIndex;
    this.chosenPlantCopy = JSON.parse(JSON.stringify(this.chosenPlant));
    this.isChanging = true;

    this.isVisible = false;
    this.generatePlant();
    this.slideIndex = 1;

    setTimeout(() => {
      this.opacityState3 = 'invis2';
      this.opacityState4 = 'invis2';
      this.cursorValue = 'default';
    }, 100);

    setTimeout(() => {
      if (n) {
        this.isCorrect = true
        this.opacityState1 = 'vis';
      } else {
        this.isIncorrect = true
        this.opacityState2 = 'vis';
      }
      this.blurCardState = 'blurred';
    }, 250);

    setTimeout(() => {
      if (n) {
        this.cardSwapState = 'movingRight';
        setTimeout(() => {
          this.cardSwapState = 'finishRight';
          setTimeout(() => {
            this.resetStuff();
          }, 500);
        }, 750);
      } else {
        this.cardSwapState = 'movingLeft';
        setTimeout(() => {
          this.cardSwapState = 'finishLeft';
          setTimeout(() => {
            this.resetStuff();
          }, 500);
        }, 750);
      }
    }, 900);
  }

  resetStuff() {
    this.isChanging = false;
    this.cardSwapState = 'static';
    this.isCorrect = false;
    this.isIncorrect = false;
    this.opacityState1 = 'invis';
    this.opacityState2 = 'invis';
    this.blurCardState = 'unblurred';
    this.opacityState3 = 'vis2';
    this.opacityState4 = 'vis2';
    this.cursorValue = 'pointer';
  }

  ngOnInit() {
    this.shared.data$.subscribe(data => {
      this.families = data
      console.log('Načteno')
    });
    this.chosenFamilies = ["Miříkovité"];

    if (!this.families || Object.keys(this.families).length === 0) {
      console.error('Families data is null or empty');
      return;
    }
  
    if (!this.chosenFamilies || this.chosenFamilies.length === 0) {
      console.error('Chosen families data is null or empty');
      return;
    }

    const familiesKeys = Object.keys(this.families);
    for (let i = 0; i < familiesKeys.length; i++) {
      if (this.chosenFamilies.includes(familiesKeys[i])) {
        this.filteredPlants.push(...this.families[familiesKeys[i]]);
      }
    }

    console.log(`Plants were succesfully filtered. Their number: ${this.filteredPlants.length}`);
    if (this.filteredPlants.length > 0) {
      this.generatePlant();
      this.showSlide(this.slideIndex);
    } else {
      console.error('No plants were filtered');
    }
  }
}