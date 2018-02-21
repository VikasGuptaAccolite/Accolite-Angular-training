import { Component, OnChanges, Input, Output, EventEmitter  } from "@angular/core";
// import { EventEmitter } from "events";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    // rating: number=4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =  new EventEmitter<string>();
        
    onClick(): void{
        console.log(`On Click Clicked Bhai!!! with rating = ${this.rating}`);
        this.ratingClicked.emit (`On Click Clicked Bhai!!! with rating = ${this.rating}`);
    }

    ngOnChanges(): void {
        this.starWidth=this.rating*86/5;
    }
}
