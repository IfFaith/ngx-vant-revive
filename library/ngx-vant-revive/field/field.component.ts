import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { addUnit, removeNgTag } from 'ngx-vant-revive/utils';
export type FieldType =
  | 'tel'
  | 'digit'
  | 'number'
  | 'textarea'
  | 'password'
  | 'text';

@Component({
  selector: 'van-field',
  exportAs: 'vanField',
  templateUrl: './field.component.html',
})
export class FieldComponent implements OnInit, OnChanges {
  @Input() center: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() size: string = '';
  @Input() border: boolean = false;
  @Input() isLink: boolean = false;
  @Input() required: boolean = false;
  @Input() clickable: boolean = false;
  @Input() iconPrefix: string = 'van-icon';
  @Input() titleStyle: { [klass: string]: any } = {};
  @Input() titleClass: string = '';
  @Input() valueClass: string = '';
  @Input() labelClass: string = '';
  @Input() title: string | number = '';
  @Input() value: string = '';
  @Input() arrowDirection: 'up' | 'down' | 'left' | 'right' | '' = '';

  @Input() leftIcon: string = '';
  @Input() labelAlign: 'center' | 'right' | 'left' = 'left';

  @Input()
  get labelWidth(): string | number {
    return this._labelWidth;
  }
  set labelWidth(value: string | number) {
    this._labelWidth = addUnit(value) as string;
  }
  private _labelWidth: string | number = '';

  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() errorMessage: string = '';
  @Input() errorMessageAlign: 'center' | 'right' | 'left' = 'left';
  @Input() inputAlign: 'center' | 'right' | 'left' = 'left';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() name: string = '';
  @Input() button?: TemplateRef<void>;
  @Input() showWordLimit: boolean = false;
  @Input() maxlength: string | number = '';

  inputType: FieldType = 'text';
  inputMode: 'decimal' | 'numeric' | '' = '';

  @Input()
  get type(): FieldType {
    return this._type;
  }
  set type(value: FieldType) {
    this.inputType = value;
    if (value === 'number') {
      this.inputType = 'text';
      this.inputMode = 'decimal';
    }

    if (value === 'digit') {
      this.inputType = 'tel';
      this.inputMode = 'numeric';
    }
    this._type = value;
  }
  private _type: FieldType = 'text';

  @Input() clearable: boolean = false;
  @Input() clearTrigger: 'always' | 'focus' = 'focus';
  @Input() rightIcon: string = '';

  showClear: boolean = false;
  focused: boolean = false;

  @Output() readonly input = new EventEmitter<Event>();
  @Output() readonly focus = new EventEmitter<FocusEvent>();
  @Output() readonly blur = new EventEmitter<FocusEvent>();
  @Output() readonly clear = new EventEmitter<MouseEvent>();
  @Output() readonly clickInput = new EventEmitter<MouseEvent>();
  @Output() readonly click = new EventEmitter<MouseEvent>();
  @Output() readonly clickRightIcon = new EventEmitter<MouseEvent>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    removeNgTag(this.el.nativeElement);
  }
  setFocus(): void {
    this.focused = true;
  }
  setBlur(): void {
    this.focused = false;
  }
  onFocus(event: FocusEvent): void {
    this.focused = true;
    this.focus.emit(event);
  }
  onBlur(event: FocusEvent): void {
    this.focused = false;
    this.blur.emit(event);
  }
  onClickClear(event: MouseEvent): void {
    event.preventDefault();
    this.value = '';
    this.showClear = false;
    this.clear.emit(event);
  }
  onClick(event: MouseEvent): void {
    this.click.emit(event);
  }
  onClickInput(event: MouseEvent): void {
    this.clickInput.emit(event);
  }
  onClickRightIcon(event: MouseEvent): void {
    this.clickRightIcon.emit(event);
  }
  onInputChange(event: Event): void {
    console.log(event);
    if (this.clearable) {
      if (this.clearable && !this.readonly) {
        const trigger =
          this.clearTrigger === 'always' ||
          (this.clearTrigger === 'focus' && this.focused);
        this.showClear = this.value !== '' && trigger;
      }
    }
    this.input.emit(event);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.clearable) {
      if (changes.clearable.currentValue && !changes.readonly) {
        const trigger = changes.clearTrigger
          ? changes.clearTrigger.currentValue === 'always'
          : false;
        this.showClear = trigger;
      }
    }
    console.log(this.showClear);
  }
}
