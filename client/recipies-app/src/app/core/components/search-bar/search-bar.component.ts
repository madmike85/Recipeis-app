import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchForm: FormGroup;
  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: '',
    });
    this.search();
  }

  public toggleSearchBar(): void {
    this.searchService.toggleSearchBar();
  }

  public search(): void {
    this.searchForm
      .get('searchQuery')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((query) => {
        if (query.length >= 3) {
          this.searchService.setLastQuery(query);
          this.router.navigate(['/recipes', query]);
        }
      });
  }
}
