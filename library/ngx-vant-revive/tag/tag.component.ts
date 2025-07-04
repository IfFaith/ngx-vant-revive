import { Component, Input, OnInit } from '@angular/core';
import { overlayAnimation } from 'ngx-vant-revive/overlay';
export type TagType = 'default' | 'primary' | 'success' | 'danger' | 'warning';
export type TagSize = 'large' | 'medium' | '';
@Component({
  selector: 'van-tag',
  exportAs: 'vanTag',
  templateUrl: './tag.component.html',
  animations: [overlayAnimation],
})
export class TagComponent implements OnInit {
  @Input() type: TagType = 'default';
  @Input() size: TagSize = '';
  @Input() plain: boolean = false;
  @Input() round: boolean = false;
  @Input() color: string = '';
  @Input() mark: boolean = false;
  @Input() textColor: string = '';
  @Input() closeable: boolean = false;
  style: { [klass: string]: any } = {};
  show: boolean = true;
  constructor() {}

  ngOnInit() {
    console.log(this.textColor);
    const key = this.plain ? 'color' : 'backgroundColor';
    this.style = { [key]: this.color };
  }
  close(event: MouseEvent) {
    event.stopPropagation();
    console.log(event);
    this.show = false;
  }
}
