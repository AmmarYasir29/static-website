class school {
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level  = level;
    this._numberogStudents = numberOfStudents
  }
  get name () {
    return this._name;
  }
  get level (){
    return this._level;
  }
  get numberOfStudent () {
    return this._numberOfStudents
  }
  set numberOfStudents (num){
    if (NaN(num)) return console.log('Invalid input: numberOfStudents must be set to a Number.')
    else this._numberOfStudents  = num;
  }
  quickFacts (){
    console.log(`${this.name} educates ${this.numberOfStudent} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher (substituteTeachers) {
    let random = substituteTeachers.length;
    Math.floor(Math.Random()*random);
  }
}

class Primary extends school {
  constructor (name,numberOfStudents,pickupPolicy){
    super (name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy () {
    return this._pickupPolicy
  }
}
class Middle extends school {
  constructor (name,primary,numberOfStudents){
    super (name,primary,numberOfStudents);
  }
}

class High extends school {
  constructor (name,numberOfStudents,sportsTeams ){
    super (name,"High",numberOfStudents);
    this._sportsTeams  = sportsTeams;
  }
  get sportsTeams() {
    this._sportsTeams =sportsTeams;
  }
}

const somePrimarySchool = new Primary ('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

somePrimarySchool.quickFacts()



