var {Employee,Manager,Engineer,Intern} = require("../lib/Employee.js");
const name = "Jared";
const id = 7654321;
const email = "hihihi@gmail.com"
const employee = new Employee(name, id, email);
describe('Employee', () => {
    it('should return the name of the employee when getName() is called', () => {
        expect(employee.getName()).toEqual(name);
    });
    it('should return the id of the employee when getID() is called', () => {
        expect(employee.getID()).toEqual(id);
    });
    it('should return the email of the employee when getEmail() is called', () => {
        expect(employee.getEmail()).toEqual(email);
    });
    it('should return "Employee" when getRole is called', () => {
        expect(employee.getRole()).toEqual("Employee");
    });
})