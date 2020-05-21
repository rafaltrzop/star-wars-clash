import { ClashWinner, Person, PersonCard } from '@app/clash/models';

describe('PersonCard', () => {
  const resource: Person = {
    name: '',
    height: '',
    mass: 'string',
    hair_color: 'string',
    skin_color: 'string',
    eye_color: 'string',
    birth_year: 'string',
    gender: 'string',
    homeworld: 'string',
    films: [''],
    species: [''],
    vehicles: [''],
    starships: [''],
    created: '',
    edited: '',
    url: '',
  };

  describe('#data', () => {
    it('should return resource', () => {
      const person: Person = { ...resource };
      const card = new PersonCard(person);

      expect(card.data).toBe(person);
    });
  });

  describe('#power', () => {
    describe('when person mass is string convertible to a number', () => {
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
      const person: Person = { ...resource, name: 'John' };
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
