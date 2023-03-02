export class GradeSchool {
  #list = {}
  
  roster() {
    return  JSON.parse(JSON.stringify(this.#list));
  }

  add( name = null, grade = null ) {

    if (name === null || grade === null ) throw new Error('name and grade must be declared ');

    // revisar que el nombre no exista en la lista.
    Object.entries(this.#list).forEach( ([key, value ]) => {
      if ( value.includes(name) ){
        this.#list[key].splice(value.indexOf(name), 1 )
      }
    });
    
    if ( this.#list.hasOwnProperty(grade) ) { // sí existe la entrada
      Object.entries(this.#list).forEach( ( [key, value] ) => {
        (grade == key )  ? value.push(name)  :  null ;

        // ordenarlos 
        value = value.sort();
        key = Number(key);

      })
    }
    else this.#list[grade] = [name];
  }

  grade(grade) {
    return [...(this.#list[grade] || [])];
  }
}
