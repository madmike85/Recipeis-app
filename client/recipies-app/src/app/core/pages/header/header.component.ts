import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isOpen = false;

  constructor(private searchService: SearchService) {}

  public ngOnInit(): void {
    this.searchService.currentSearchBarState.subscribe((state: boolean) => (this.isOpen = state));
  }

  public toggleSearchBar(): void {
    this.searchService.toggleSearchBar();
  }
}
