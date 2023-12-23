import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    // new WishItem('Learn Angular'),
    // new WishItem('Get Coffee', true),
    // new WishItem('Find grass that cuts itself'),
  ];

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    // todo: add wish to items array
    this.items.push(new WishItem(this.newWishText));
    // clear the textbox
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
