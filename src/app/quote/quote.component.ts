import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [new Quote(1,"Anum Asif","Kanye West", "I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.",new Date(2018,11,24,10,33,30,0),0,0),
            new Quote(1,"Sana","Tonny Robbins","I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.",new Date(2018,12,25,8,30,50,0),0,0),
            new Quote(1,"Stella","T.S.Eliot","Only those who will risk going too far can possibly find out how far one can go.",new Date(2019,1,2,11,20,12,0),0,0),
            new Quote(1,"Stella","Robert Louis Stevenson","Don’t judge each day by the harvest you reap but by the seeds that you plant.", new Date(2019,2,2,5,40,50,0),0,0)];
  highestVotes:number = 0;
  quotesIndex:number = 0;
  // calculateHighestVotes( ){
  //   for(var i = 0; i<this.quotes.length;i++){
  //     if(this.quotes[i].upVotes > this.highestVotes){
  //     this.highestVotes = this.quotes[i].upVotes;
  //     this.quotesIndex = i;
  //     }
  //
  //   }
  // }
  // highlight(index:number){
  //   this.calculateHighestVotes();
  //   if(this.index == this.quotesIndex){
  //     this.style.backgroundColor="black";
  //   }else{
  //     this.style.backgroundColor="transparent";
  //   }
  // }


  deleteQuote(isInappropriate,index){
    if(isInappropriate){
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteWords}`);
        if (toDelete){
            this.quotes.splice(index,1);
            }
      }

  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.timeOfCreation = new Date();
    this.quotes.push(quote);

  }
  upVote(index){
    this.quotes[index].upVotes+=1;
  }
  downVote(index){
    this.quotes[index].downVotes+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}
