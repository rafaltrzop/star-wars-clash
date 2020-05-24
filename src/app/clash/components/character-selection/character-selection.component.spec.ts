import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material';

import { CharacterSelectionComponent } from '@app/clash/components';
import { Character } from '@app/clash/models';

describe('CharacterSelectionComponent', () => {
  let component: CharacterSelectionComponent;
  let fixture: ComponentFixture<CharacterSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule],
      declarations: [CharacterSelectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSelectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display radio group with radio button for each character', () => {
    const characters: Character[] = [
      {
        name: 'Person',
        resourceName: 'people',
      },
      {
        name: 'Starship',
        resourceName: 'starships',
      },
    ];
    component.characters = characters;
    fixture.detectChanges();

    const characterSelectionElement: HTMLElement = fixture.nativeElement;
    const radioGroup = characterSelectionElement.querySelector(
      'mat-radio-group'
    );
    const radioButtons = characterSelectionElement.querySelectorAll(
      'mat-radio-button'
    );

    expect(radioGroup).not.toBeNull();
    expect(radioButtons.length).toBe(characters.length);
  });

  describe('when character radio button is clicked', () => {
    it('should raise characterChange event and check radio button', () => {
      const characters: Character[] = [
        {
          name: 'Person',
          resourceName: 'people',
        },
        {
          name: 'Starship',
          resourceName: 'starships',
        },
      ];
      component.characters = characters;
      fixture.detectChanges();

      let selectedCharacter: Character;
      component.characterChange.subscribe((character) => {
        selectedCharacter = character;
      });

      const characterSelectionElement: HTMLElement = fixture.nativeElement;
      const radioButton = characterSelectionElement.querySelector<
        HTMLInputElement
      >('mat-radio-button input[type="radio"]');
      radioButton.dispatchEvent(new Event('change'));

      expect(radioButton.checked).toBeFalse();
      fixture.detectChanges();
      expect(radioButton.checked).toBeTrue();

      expect(selectedCharacter).toEqual(characters[0]);
    });
  });
});
