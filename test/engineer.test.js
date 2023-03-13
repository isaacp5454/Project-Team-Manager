var {Employee,Manager,Engineer,Intern} = require("../lib/Employee.js");
const github = "cf hjfg hujkfvg ukgb hjk"
const employee = new Engineer("amy", 52345, "isaacp5454@hotmail.com",github);
describe('Engineer', () => {
    it('should return the github of the employee when getgithub() is called', () => {
        expect(employee.getGithub()).toEqual(github);
    });
    it('should return "Engineer" when getRole is called', () => {
        expect(employee.getRole()).toEqual("Engineer");
    });
})