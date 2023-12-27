import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: any = '0';

  title = 'wishlist';

  get visibileItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
}
