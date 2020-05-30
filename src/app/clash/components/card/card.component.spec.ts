import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@app/material';
import { CardComponent } from '@app/clash/components';
import { Card } from '@app/clash/models';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('when card is provided', () => {
    it('should display card name', () => {
      const card = {
        name: 'Card name',
      } as Card<any>;
      component.card = card;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardSubtitle = cardElement.querySelector('mat-card-subtitle');

      expect(cardSubtitle.textContent.trim()).toBe(card.name);
    });

    it('should display card data', () => {
      const card = {
        data: {
          foo: 1234,
          bar: true,
          baz: 'foobar',
          qux: [],
          quux: {},
        },
      } as Card<any>;
      component.card = card;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardData = cardElement.querySelector('pre');

      expect(JSON.parse(cardData.textContent)).toEqual(card.data);
    });

    it('should display card power value', () => {
      const card = {
        power: 1234,
      } as Card<any>;
      component.card = card;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardPower = cardElement.querySelector('.card__value');

      expect(Number(cardPower.textContent)).toBe(card.power);
    });
  });

  describe('when card is not provided', () => {
    it('should display "Character name" as a card name', () => {
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardSubtitle = cardElement.querySelector('mat-card-subtitle');

      expect(cardSubtitle.textContent.trim()).toBe('Character name');
    });

    it('should not display card data', () => {
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardData = cardElement.querySelector('pre');

      expect(cardData).toBeNull();
    });

    it('should display "0" as a card power value', () => {
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardPower = cardElement.querySelectorAll('.card__value')[0];

      expect(Number(cardPower.textContent)).toBe(0);
    });
  });

  describe('when playerName is provided', () => {
    it('should display player name', () => {
      const playerName = 'Player 1';
      component.playerName = playerName;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const cardTitle = cardElement.querySelector('mat-card-title');

      expect(cardTitle.textContent.trim()).toBe(playerName);
    });
  });

  describe('when playerScore is provided', () => {
    it('should display player score value', () => {
      const score = 10;
      component.playerScore = score;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const playerScore = cardElement.querySelectorAll('.card__value')[1];

      expect(Number(playerScore.textContent)).toBe(score);
    });
  });

  describe('when winner is true', () => {
    it('should display winner label', () => {
      component.winner = true;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const winnerLabel = cardElement.querySelector('.label.label_success');

      expect(winnerLabel).not.toBeNull();
    });
  });

  describe('when winner is false', () => {
    it('should not display winner label', () => {
      component.winner = false;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const winnerLabel = cardElement.querySelector('.label.label_success');

      expect(winnerLabel).toBeNull();
    });
  });

  describe('when tie is true', () => {
    it('should display tie label', () => {
      component.tie = true;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const tieLabel = cardElement.querySelector('.label.label_warning');

      expect(tieLabel).not.toBeNull();
    });
  });

  describe('when tie is false', () => {
    it('should not display tie label', () => {
      component.tie = false;
      fixture.detectChanges();

      const cardElement: HTMLElement = fixture.nativeElement;
      const tieLabel = cardElement.querySelector('.label.label_warning');

      expect(tieLabel).toBeNull();
    });
  });
});
