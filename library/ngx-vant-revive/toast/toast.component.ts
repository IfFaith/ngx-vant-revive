import {
  Component,
  ViewEncapsulation,
  Input,
  TemplateRef,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'pv-toast',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './toast.component.html',
  host: {
    '[class.am-toast]': 'true',
    '[class.am-toast-forbidClick]': 'forbidClick',
    '[class.am-toast-forbidClick-top]': `forbidClick && position === 'top'`,
    '[class.am-toast-forbidClick-middle]': `forbidClick && position === 'middle'`,
    '[class.am-toast-forbidClick-bottom]': `forbidClick && position === 'bottom'`,
    '[class.am-toast-noforbidClick]': '!forbidClick',
    '[class.am-toast-noforbidClick-top]': `!forbidClick && position === 'top'`,
    '[class.am-toast-noforbidClick-middle]': `!forbidClick && position === 'middle'`,
    '[class.am-toast-noforbidClick-bottom]': `!forbidClick && position === 'bottom'`,
  },
})
export class ToastComponent {
  prefixCls: string = 'am-toast';
  isContentString: boolean = true;
  forbidClickClassMap: any;
  transitionName = 'am-fade-enter am-fade-enter-active';

  private _type?: 'success' | 'loading' | 'fail';
  private _iconType: string = '';
  private _content: string | TemplateRef<any> = '';
  private _forbidClick: boolean = true;

  @Input() show: boolean = false;

  @Input()
  get type(): 'success' | 'loading' | 'fail' | undefined {
    return this._type;
  }
  set type(value: 'success' | 'loading' | 'fail' | undefined) {
    this._type = value;
  }

  @Input()
  get forbidClick(): boolean {
    return this._forbidClick;
  }
  set forbidClick(value: boolean) {
    this._forbidClick = value;
  }
  @Input()
  get content(): string | TemplateRef<any> {
    return this._content;
  }
  set content(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isContentString = false;
    } else {
      this.isContentString = true;
    }
    this._zone.run(() => {
      this._content = value;
    });
  }
  @Input() iconSize = '24px';
  @Input()
  get iconType(): string {
    return this._iconType;
  }
  set iconType(value: string) {
    this._zone.run(() => {
      this._iconType = value;
    });
  }
  @Input()
  position: 'top' | 'middle' | 'bottom' = 'middle';

  constructor(private _zone: NgZone, private _cdr: ChangeDetectorRef) {}
}
