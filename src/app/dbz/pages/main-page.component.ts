import { DbzService } from './../services/dbz.services';
import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {
    
    constructor( private dbzService: DbzService) {}

    get character(): Character[] {
        return [...this.dbzService.character]
    }

    onDeleteCharacter( id: string ): void {
        this.dbzService.deleteCharacterById( id )
    }

    onNewCharacter( character: Character) {
        this.dbzService.addCharacter( character);
    }

}