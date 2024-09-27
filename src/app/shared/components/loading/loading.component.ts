import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from '../../../services/Others/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  private loadingService = inject(LoadingService);  
  protected isLoading: Subject<boolean> = this.loadingService.isLoading;
  
}
