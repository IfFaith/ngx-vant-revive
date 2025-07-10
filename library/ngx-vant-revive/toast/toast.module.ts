import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { IconModule } from 'ngx-vant-revive/icon';
import { LoadingModule } from 'ngx-vant-revive/loading';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    LoadingModule
  ],
  exports: [ToastComponent],
  declarations: [ToastComponent],
  providers: [ToastService],
})
export class ToastModule {}
