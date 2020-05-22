import {
  ClashWinner,
  Person,
  PersonCard,
  Starship,
  StarshipCard,
} from '@app/clash/models';

describe('PersonCard', () => {
  const resource: Person = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
  };

  describe('#data', () => {
    it('should return person resource', () => {
      const person: Person = { ...resource };
      const card = new PersonCard(person);

      expect(card.data).toBe(person);
    });
  });

  describe('#power', () => {
    describe('when person mass is a string convertible to a number', () => {
      it('should return number', () => {
        const person: Person = { ...resource, mass: '84' };
        const card = new PersonCard(person);

        expect(card.power).toBe(84);
      });

      it('should return number', () => {
        const person: Person = { ...resource, mass: '78.2' };
        const card = new PersonCard(person);

        expect(card.power).toBe(78.2);
      });

      it('should return number', () => {
        const person: Person = { ...resource, mass: '1,358' };
        const card = new PersonCard(person);

        expect(card.power).toBe(1358);
      });
    });

    describe('when person mass is a string not convertible to a number', () => {
      it('should return NaN', () => {
        const person: Person = { ...resource, mass: 'unknown' };
        const card = new PersonCard(person);

        expect(card.power).toBeNaN();
      });
    });
  });

  describe('#name', () => {
    it('should return card name', () => {
      const person: Person = { ...resource, name: 'Jar Jar Binks' };
      const card = new PersonCard(person);

      expect(card.name).toBe(person.name);
    });
  });

  describe('#clash', () => {
    describe('when person1 mass is bigger than person2 mass', () => {
      it('should return clash winner as Player 1', () => {
        const person1: Person = { ...resource, mass: '74' };
        const card1 = new PersonCard(person1);

        const person2: Person = { ...resource, mass: '60.8' };
        const card2 = new PersonCard(person2);

        expect(card1.clash(card2)).toBe(ClashWinner.Player1);
      });
    });

    describe('when person1 mass is lower than person2 mass', () => {
      it('should return clash winner as Player 2', () => {
        const person1: Person = { ...resource, mass: '73' };
        const card1 = new PersonCard(person1);

        const person2: Person = { ...resource, mass: '74' };
        const card2 = new PersonCard(person2);

        expect(card1.clash(card2)).toBe(ClashWinner.Player2);
      });
    });

    describe('when person1 mass is equal to person2 mass', () => {
      it('should return clash winner as a tie', () => {
        const person1: Person = { ...resource, mass: '127' };
        const card1 = new PersonCard(person1);

        const person2: Person = { ...resource, mass: '127' };
        const card2 = new PersonCard(person2);

        expect(card1.clash(card2)).toBe(ClashWinner.Tie);
      });
    });

    describe('when either of persons has unknown mass', () => {
      it('should return clash winner as a tie', () => {
        const person1: Person = { ...resource, mass: 'unknown' };
        const card1 = new PersonCard(person1);

        const person2: Person = { ...resource, mass: '42' };
        const card2 = new PersonCard(person2);

        expect(card1.clash(card2)).toBe(ClashWinner.Tie);
      });
    });
  });
});

describe('StarshipCard', () => {
  const resource: Starship = {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  };

  describe('#data', () => {
    it('should return starship resource', () => {
      const starship: Starship = { ...resource };
      const card = new StarshipCard(starship);

      expect(card.data).toBe(starship);
    });
  });

  describe('#power', () => {
    describe('when starship crew is a string convertible to a number', () => {
      it('should return number', () => {
        const starship: Starship = { ...resource, crew: '5400' };
        const card = new StarshipCard(starship);

        expect(card.power).toBe(5400);
      });

      it('should return number', () => {
        const starship: Starship = { ...resource, crew: '47,060' };
        const card = new StarshipCard(starship);

        expect(card.power).toBe(47060);
      });

      it('should return number from a given range', () => {
        const starship: Starship = { ...resource, crew: '30-165' };
        const card = new StarshipCard(starship);

        expect(card.power).toBeGreaterThanOrEqual(30);
        expect(card.power).toBeLessThanOrEqual(165);
      });

      it('should return number from a given range', () => {
        const starship: Starship = { ...resource, crew: '1,200-1,600' };
        const card = new StarshipCard(starship);

        expect(card.power).toBeGreaterThanOrEqual(1200);
        expect(card.power).toBeLessThanOrEqual(1600);
      });
    });

    describe('when starship crew is a string not convertible to a number', () => {
      it('should return NaN', () => {
        const starship: Starship = { ...resource, crew: 'unknown' };
        const card = new StarshipCard(starship);

        expect(card.power).toBeNaN();
      });
    });
  });

  describe('#name', () => {
    it('should return card name', () => {
      const starship: Starship = { ...resource, name: 'X-wing' };
      const card = new StarshipCard(starship);

      expect(card.name).toBe(starship.name);
    });
  });

  describe('#clash', () => {
    describe('when starship1 crew is bigger than starship2 crew', () => {
      it('should return clash winner as Player 1', () => {
        const starship1: Starship = { ...resource, crew: '8' };
        const card1 = new StarshipCard(starship1);

        const starship2: Starship = { ...resource, crew: '3' };
        const card2 = new StarshipCard(starship2);

        expect(card1.clash(card2)).toBe(ClashWinner.Player1);
      });
    });

    describe('when starship1 crew is smaller than starship2 crew', () => {
      it('should return clash winner as Player 2', () => {
        const starship1: Starship = { ...resource, crew: '854' };
        const card1 = new StarshipCard(starship1);

        const starship2: Starship = { ...resource, crew: '1,600' };
        const card2 = new StarshipCard(starship2);

        expect(card1.clash(card2)).toBe(ClashWinner.Player2);
      });
    });

    describe('when starship1 crew is equal to starship2 crew', () => {
      it('should return clash winner as a tie', () => {
        const starship1: Starship = { ...resource, crew: '1' };
        const card1 = new StarshipCard(starship1);

        const starship2: Starship = { ...resource, crew: '1' };
        const card2 = new StarshipCard(starship2);

        expect(card1.clash(card2)).toBe(ClashWinner.Tie);
      });
    });

    describe('when either of starships has unknown crew number', () => {
      it('should return clash winner as a tie', () => {
        const starship1: Starship = { ...resource, crew: 'unknown' };
        const card1 = new StarshipCard(starship1);

        const starship2: Starship = { ...resource, crew: '3' };
        const card2 = new StarshipCard(starship2);

        expect(card1.clash(card2)).toBe(ClashWinner.Tie);
      });
    });
  });
});
