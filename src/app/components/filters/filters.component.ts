import { Component } from '@angular/core';


interface Food {
  viewValue: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent {
  foods: Food[] = [
    {viewValue: 'Steak'},
    {viewValue: 'Pizza'},
    {viewValue: 'Tacos'},
  ];
}
