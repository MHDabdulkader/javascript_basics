// Arrow function isnot change the this or constructor.


var javascript ={
    name: "JavaScript",
    libraries:['React', 'Angular', 'Vue'],
    printLibraries: function(){
        this.libraries.forEach((a)=>{
            console.log(`${this.name} loves ${a}`);
        })
    }
}

javascript.printLibraries();