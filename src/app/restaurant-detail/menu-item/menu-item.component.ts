import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "./menu-item.model";

@Component({
  selector: "mt-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"],
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  emitAddEvent() {
    this.add.emit(this.menuItem);
    console.log("🚀 ~ file: menu-item.component.ts ~ line 17 ~ MenuItemComponent ~ emitAddEvent ~ this.menuItem", this.menuItem)

  }
}
