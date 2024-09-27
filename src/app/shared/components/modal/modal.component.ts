import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @ViewChild('modalTemplate') modalTemplate!: ElementRef;
  @Input() title?: string;
  @Input() size?: string = 'lg';
  @Input() buttonRightTitle?: string;
  @Output() buttonRightClickEvent = new EventEmitter();
  @Output() closeEvent = new EventEmitter();

  private modalService = inject(NgbModal);
  private modalInstance!: NgbModalRef;

  open() {
    this.modalInstance = this.modalService.open(this.modalTemplate, { size: this.size });
  }

  close() {
    if (!this.modalInstance) return;
    this.closeEvent.emit();
    this.modalInstance.close();
  }

  protected onButtonRightClick() {
    this.buttonRightClickEvent.emit();
  }
}
