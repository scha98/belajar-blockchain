pragma solidity ^0.4.18;

contract Syima {
    
    string name = 'Syima';
    uint age = 22;
    
    function setUser (string _fname, uint _age) public {
        name = _fname;
        age = _age;
    }
    
    function getUser() public constant returns (string,uint){
        return(name,age);
    }
    
    
}