import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NavbarComponent, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class AppComponent {}