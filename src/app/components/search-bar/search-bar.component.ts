import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const MAT_MODULE_IMPORTS = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
];

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...MAT_MODULE_IMPORTS]
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });
  }

  /**
   * Handles the submission of the search form.
   *
   * This method retrieves the search query from the form, logs it to the console,
   * and emits the query using the `onSearch` event emitter.
   *
   * @returns {void} This method does not return a value.
   */
  onSearchSubmit(): void {
    const query: string = this.searchForm.get('searchQuery')?.value;
    console.info('Search query:', query);
    this.onSearch.emit(query);
  }
}
