import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;

  readonly imagesSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
