class  Media {
  constructor (title ){
    this._isCheckedOut = false;
    this._title = title;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut (isCheckedOut ){
    this._isCheckedOut = isCheckedOut;
  } 
  ////////////////////5:17//////////////////
   toggleCheckOutStatus (){ 
    return !this._isCheckedOut;
  }
  //////////////////////////
   getAverageRating (ratings){
     this.rating.reduce ( (storge, ratings)=> {
       let sum= ratings + storage;
       return sum/ this.ratings.length
     })
  }
  addRating (item){
    this.ratings.push(item);
  }
}

class Book extends Media {
  constructor (author,title, pages){
        super(title)
    this._author = author;
    this._pages =auther;
  }
  get author (){
    return this._author;
  }
  get pages (){
    return this._pages;
  }
////get title is extends from parent
}
class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director () {
    return this._director;
  }
  get runTime () { 
    return this._runTime
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);


///historyOfEverything.toggleCheckOutStatus();



