import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { removeNgTag } from 'ngx-vant-revive/utils';
export function isNotNil<T>(value: T): value is NonNullable<T> {
  return typeof value !== 'undefined' && value !== null;
}
@Component({
  selector: 'van-col',
  exportAs: 'vanCol',
  templateUrl: './col.component.html',
})
export class ColComponent implements OnInit, OnChanges {
  classMap: { [key: string]: boolean } = {};
  @Input() span: number | string = '';
  @Input() offset: number | string = '';
  paddingLeft: string | null = '';
  paddingRight: string | null = '';
  @Output() readonly click = new EventEmitter<MouseEvent>();
  constructor(private elementRef: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
    this.setHostClassMap();
  }
  ngOnChanges(): void {
    this.setHostClassMap();
  }
  onClick(e: MouseEvent): void {
    this.click.emit(e);
  }
  setGutter(space: any) {
    console.log(space);
    if (space) {
      const { left, right } = space;
      console.log(left, right);
      this.paddingLeft = left ? `${left}px` : null;
      this.paddingRight = right ? `${right}px` : null;
    }
  }
  setHostClassMap(): void {
    const hostClassMap = {
      ['van-col']: true,
      [`van-col--${this.span}`]: isNotNil(this.span),
      [`van-col--offset-${this.offset}`]: isNotNil(this.offset),
    };
    this.classMap = { ...hostClassMap };
  }
}
