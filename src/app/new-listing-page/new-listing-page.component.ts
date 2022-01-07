import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  constructor(
    private router: Router,
    private listingService: ListingsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit({ name, description, price }): void {
    this.listingService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
