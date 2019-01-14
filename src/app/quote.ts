export class Quote {
    constructor(public id:number, public publisher:string, public author:string, public quoteWords:string, public timeOfCreation:Date,
    public upVotes:number, public downVotes:number){}
}
