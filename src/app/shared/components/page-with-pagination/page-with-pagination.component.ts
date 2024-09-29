import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NoResultsComponent } from '../no-results/no-results.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-with-pagination',
  standalone: true,
  imports: [CommonModule, NoResultsComponent, NgbPaginationModule],
  templateUrl: './page-with-pagination.component.html',
  styleUrl: './page-with-pagination.component.scss'
})
export class PageWithPaginationComponent {
  @Input() listOfItens: any[] = [];
  @Input() isSearched: boolean = false;
  @Input() pageSize: number = 10;
  @Input() maxSize: number = 10;
  @Input() ariaLabel: string = '';
  @Input() page: number = 1;
  @Output() pageChange = new EventEmitter();
  @Input() collectionSize: number = 0;

  onPageChange(event: any) {
    this.page = event;

    const search = document.getElementById('pokemon-search');
    if(search) setTimeout(() => search.scrollIntoView({ behavior: 'smooth' }), 100);

    this.pageChange.emit(this.page);
  }
}
