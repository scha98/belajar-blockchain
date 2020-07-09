$(function(){

    var userABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_fname",
                    "type": "string"
                },
                {
                    "name": "_picture",
                    "type": "bytes32"
                },
                {
                    "name": "_nationality",
                    "type": "bytes32"
                },
                {
                    "name": "_dateofbirth",
                    "type": "bytes32"
                },
                {
                    "name": "_gender",
                    "type": "bytes32"
                },
                {
                    "name": "_dateissue",
                    "type": "bytes32"
                },
                {
                    "name": "_placeissue",
                    "type": "bytes32"
                },
                {
                    "name": "_height",
                    "type": "bytes32"
                },
                {
                    "name": "_birthplace",
                    "type": "bytes32"
                },
                {
                    "name": "_expireddate",
                    "type": "bytes32"
                },
                {
                    "name": "_pasprtype",
                    "type": "bytes32"
                },
                {
                    "name": "_countrycode",
                    "type": "bytes32"
                },
                {
                    "name": "_nopassport",
                    "type": "bytes32"
                }
            ],
            "name": "setUser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getUser",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    var userAddress ='0xe69e8EBbF94Bd637e169d6BFdfBe58bC3aD6fd75'

if(typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
}else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var UserContract = new web3.eth.Contract(userABI,userAddress);

console.log(UserContract);

var userFunction = UserContract.methods;

userFunction.getUser().call(function(error,result) {
    if(!error){
       console.log(result);
    }
});






$('#button').click(function(){
    console.log(web3.utils.asciiToHex('shieda'))
    userFunction.setUser(
        "shahfiq",
        web3.utils.asciiToHex('asdfav dfa '),
        web3.utils.asciiToHex('shieasdfasdda'),
        web3.utils.asciiToHex('shiedadsfasda'),
        web3.utils.asciiToHex('shasdfieda'),
        web3.utils.asciiToHex('shifasdfeda'),
        web3.utils.asciiToHex('shidfasdfeda'),
        web3.utils.asciiToHex('shasdfasieda'),
        web3.utils.asciiToHex('shiwqerwe reda'),
        web3.utils.asciiToHex('shi asdfeda'),
        web3.utils.asciiToHex('shisadfaseda'),
        web3.utils.asciiToHex('shidfsaeda'),
        web3.utils.asciiToHex('shidfweeda'))
        .send({from:'0xfcFb18B45dc237d49e1A62A7d7cf2F359781710c'})

        console.log(web3.utils.hexToAscii('0x7368696564610000000000000000000000000000000000000000000000000000'))

});



});