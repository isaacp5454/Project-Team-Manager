var {Employee,Manager,Engineer,Intern} = require("../lib/Employee.js");
const school = "mde"
const employee = new Intern("amy", 52345, "isaacp5454@hotmail.com",school);
describe('Employee', () => {
    it('should return the officeNumber of the employee when getOfficeNumber() is called', () => {
        expect(employee.getSchool()).toEqual(school);
    });
    it('should return "Intern" when getRole is called', () => {
        expect(employee.getRole()).toEqual("Intern");
    });
})