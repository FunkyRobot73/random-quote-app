import { Component } from "@angular/core";
import { QuoteService } from "src/services/quote.service";
import { Quote } from "src/models/quote.class";

@Component({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html',
    styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent {
    public quote = new Quote('', '');
    constructor(public quoteService: QuoteService) {
       this.getQuote() 
    }

    public getQuote() {
        this.quoteService.getRandomQuote().subscribe((data: any) => {
            this.quote = new Quote(data.id, data.value);
            console.log(this.quote);
        });
    }
}