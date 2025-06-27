import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';
import { FormsModule } from '@angular/forms';


import { CellModule } from 'ngx-vant-revive/cell'
import { IconModule } from 'ngx-vant-revive/icon';
@NgModule({
    imports: [
        CommonModule, CellModule,FormsModule,IconModule
    ],
    exports: [FieldComponent],
    declarations: [FieldComponent]
})
export class FieldModule { }
