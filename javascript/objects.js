var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log(this.name.length);
  },
  display: function(){
    alert("Name is " + this.name + ", Job is " + this.job + ", Age is " + this.age);
  },
  lastName: function(){
    console.log(this.name.split(" ")[1]);
  }
}

employee.nameLength()
employee.display()
employee.lastName()
