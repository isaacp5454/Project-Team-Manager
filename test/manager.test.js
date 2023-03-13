var {Employee,Manager,Engineer,Intern} = require("../lib/Employee.js");
const officeNumber = 1
const employee = new Manager("amy", 52345, "isaacp5454@hotmail.com",officeNumber);
describe('Manager', () => {
    it('should return the officeNumber of the employee when getOfficeNumber() is called', () => {
        expect(employee.getOfficeNumber()).toEqual(officeNumber);
    });
    it('should return "Manager" when getRole is called', () => {
        expect(employee.getRole()).toEqual("Manager");
    });
})