import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderComponent } from './order/order.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { Route, Routes } from "@angular/router";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "restaurants", component: RestaurantsComponent },
  {
    path: "restaurants/:id",
    component: RestaurantDetailComponent,
    children: [
      {path: "" ,redirectTo:'menu',pathMatch:'full'},
      {path: "reviews" ,component: ReviewsComponent},
      {path: "menu" ,component: MenuComponent},
    ],
  },
  { path: "order", component: OrderComponent},
  { path: "order-summary", component: OrderSummaryComponent}
];
