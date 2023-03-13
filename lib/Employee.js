function Employee(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.getName = function () {
      return this.name;
    };
    this.getID = function (){
      return this.ID
    }
    this.getEmail = function (){
      return this.email
    }
    this.getRole = function (){
      return "Employee"
    }
  }
  function Manager(name, ID, email, officeNumber) {
    Employee.call(this, name, ID, email);
    this.officeNumber = officeNumber;
    this.getOfficeNumber = function (){
      return this.officeNumber
    }
    this.getRole = function (){
      return "Manager"
    }
  }


  function Engineer(name, ID, email, github) {
    Employee.call(this, name, ID, email);
    this.github = github;
    this.getGithub = function(){
      return this.github
    }
    this.getRole = function (){
      return "Engineer"
    }
  }

  function Intern(name, ID, email, school) {
    Employee.call(this, name, ID, email);
    this.school = school;
    this.getSchool = function(){
      return this.school
    }
    this.getRole = function (){
      return "Intern"
    }
  } 
  
  module.exports = {Employee, Manager,Engineer,Intern}
  