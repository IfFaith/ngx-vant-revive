import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ngx-vant-revive/toast/toast.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit() {}

  create() {
    this.toastService.create({
      content: '文字提示',
      duration: 2000,
    });
  }
  loading() {
    this.toastService.loading({
      content: '加载中',
      duration: 2000,
    });
  }
  success() {
    this.toastService.success({
      content: '成功提示',
      duration: 2000,
    });
  }
  fail() {
    this.toastService.fail({
      content: '失败提示',
      duration: 2000,
    });
  }
  createIcon() {
    this.toastService.create({
      content: '自定义图标',
      iconType: 'https://img.yzcdn.cn/vant/logo.png',
      duration: 2000,
    });
  }
  createPosition(position: 'top' | 'middle' | 'bottom') {
    const titleMap = {
      top: '顶部',
      middle: '居中',
      bottom: '底部',
    };
    this.toastService.create({
      content: titleMap[position],
      position: position,
      duration: 2000,
    });
  }

  dynamic() {
    const toast = this.toastService.create({
      content: '动态文本',
      type: 'loading',
    });
    setTimeout(() => {
      toast.content = '文字变化了';
      toast.type = 'success';
      setTimeout(() => {
        this.toastService.clear();
      }, 2000);
    }, 1000);
  }
}
