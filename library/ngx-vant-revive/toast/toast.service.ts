import { ComponentRef, Injectable, TemplateRef } from '@angular/core';
import { ToastComponent } from './toast.component';
import { ToastServiceModule } from './toast.service.module';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
export type OptionsType = 'success' | 'loading' | 'fail';
interface ToastOptions {
  type?: OptionsType;
  position?: 'top' | 'middle' | 'bottom';
  content: string | TemplateRef<any>;
  iconType?: string;
  forbidClick?: boolean;
  duration?: number;
  
  iconSize?: string;
}

export class ToastBulderService {
  private overlayRef!: OverlayRef;
  private toastRef!: ComponentRef<ToastComponent> | null;
  constructor(private overlay: Overlay) {
    this.createToast();
  }
  createToast() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: false,
    });
    this.toastRef = this.overlayRef.attach(new ComponentPortal(ToastComponent));
  }
  getInstance(options: ToastOptions) {
    if (options.duration) {
      setTimeout(() => {
        this.close();
      }, options.duration);
    }
    return this.toastRef! && this.toastRef!.instance;
  }
  create(options: ToastOptions) {
    if (!this.toastRef && !this.overlayRef) {
      this.createToast();
    }
    Object.assign(this.toastRef!.instance, options, {
      show: true,
    });
    return this.getInstance(options);
  }
  close() {
    if (!this.toastRef) return;
    this.toastRef!.instance.show = false;
    this.toastRef = null;
    setTimeout(() => {
      this.overlayRef.dispose();
    });
  }
}
@Injectable({
  providedIn: ToastServiceModule,
})
export class ToastService {
  private currentTost?: ToastBulderService;
  constructor(private overlay: Overlay) {}
  create(options: ToastOptions) {
    this.clear();
    this.currentTost = new ToastBulderService(this.overlay);
    return this.currentTost.create(options);
  }
  fail(options: ToastOptions) {
    this.clear();
    Object.assign(options, {
      type: 'fail',
    });
    this.currentTost = new ToastBulderService(this.overlay);
    return this.currentTost.create(options);
  }
  success(options: ToastOptions) {
    this.clear();
    Object.assign(options, {
      type: 'success',
    });
    this.currentTost = new ToastBulderService(this.overlay);
    return this.currentTost.create(options);
  }
  loading(options: ToastOptions) {
    this.clear();
    Object.assign(options, {
      type: 'loading',
    });
    this.currentTost = new ToastBulderService(this.overlay);
    return this.currentTost.create(options);
  }

  clear() {
    if (this.currentTost) {
      this.currentTost.close();
      this.currentTost = undefined;
    }
  }
}
