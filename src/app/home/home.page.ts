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
    }

    toLarge() {
        this.mode = 'large';
        this.selectedStore = [];
    }

    searchForStores() {
        this.search.nativeElement.
    }
}
