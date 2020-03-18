import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchForm: FormGroup;
  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: '',
    });
  }

  public toggleSearchBar(): void {
    this.searchService.toggleSearchBar();
  }
}
