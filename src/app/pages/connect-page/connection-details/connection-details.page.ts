import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { Router} from "@angular/router";
import { ConnectModelService } from '../_services/connect.model.service';

@Component({
    selector: 'app-connection-details',
    templateUrl: './connection-details.page.html',
    styleUrls: ['./connection-details.scss']
})
export class ConnectionDetailsPage implements OnInit{
    userId: string;
    connectionDetails: any;

    constructor( 
                private route: ActivatedRoute,
                private connectModelService: ConnectModelService,
                private _router: Router) {}

    ngOnInit() {}

    goToUserProfile() {
        this._router.navigate(['/profile']);
    }

    onCancelBtnClick() {
        this._router.navigate(['/connect/list-connections']);
    }
    

    navigateTo(url?: string) {
        this._router.navigate([url], { replaceUrl: true });
    }
}