import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from "./../app.error-handler";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.errorHandler);
    }
    restaurantById(id: string): Observable<Restaurant> {
      return this.http
        .get(`${MEAT_API}/restaurants/${id}`)
        .map((response) => response.json())
        .catch(ErrorHandler.errorHandler);
    }
    reviewsOfRestaurant(id: string): Observable<any> {
      return this.http
        .get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map((response) => response.json())
        .catch(ErrorHandler.errorHandler);
    }
    menuOfRestaurant(id: string): Observable<MenuItem[]> {
      return this.http
        .get(`${MEAT_API}/restaurants/${id}/menu`)
        .map((response) => response.json())
        .catch(ErrorHandler.errorHandler);

    }
}
