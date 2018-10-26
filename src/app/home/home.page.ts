import { Component, ViewChild } from '@angular/core';

type Mode = 'small' | 'large';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    mode: Mode = 'large';
    selectedStore = [];

    @ViewChild('search') search;

    stores = [
        'Test Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
        'Some Store',
    ];

    toSmall(store, index) {
        if (store) {
            this.selectedStore = [store, index];
        }

        this.mode = 'small';
        this.readOnly = true;
    }

    toLarge(event) {
        this.mode = 'large';
        this.selectedStore = [];
        event.stopPropagation();
        event.preventDefault();
    }
}
