import getWeb3 from "./getWeb3";
import SimpleStorage from "../contracts/SimpleStorage.json";
import {chainIdState} from '../recoil/atoms/chainIdState';
import {useRecoilState} from 'recoil';
;

//var user={accounts:null, chainId:null};
var constractInstance= null;

export var user = {accounts:'', chainId:null};

export async function  init(){
   // console.log("init: cid="+user.chainId);
  
   if(constractInstance!=null)return constractInstance;
   console.log("init");
   var accounts = null;
    try {
    
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      console.log("web3="+web3);
      // Use web3 to get the user's accounts.
     accounts = await web3.eth.getAccounts();
      user.accounts =accounts;
    
      console.log("accounts:" + accounts);
      for(var i=0;i<accounts.length;i++){
        console.log("account_:" + accounts[i]);
      }
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log("networkId:" + networkId);
        user.chainId= networkId;
      const deployedNetwork = SimpleStorage.networks[networkId];

      console.log(deployedNetwork);
      const instance = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork ,
      // "0x82B887A80f3CF871840cFD5a5d6960f0133A6ddf",
      );
      constractInstance=instance;
   
     constractInstance.methods.set(10).send({from:user.accounts[0]}).then((data)=>{
       console.log("SUCCESS,"+data);
      constractInstance.methods.get().call().then((data)=>{
        console.log(data);
        alert("success: "+data);
       });

     });
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
     // this.setState({ web3, accounts, contract: instance },runExample);
    
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
    return accounts[0];
  
  }
  var runExample = async () => {
    const { accounts, contract } = this.state;
  
    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });
  
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();
  
    // Update state with the result.
    this.setState({ storageValue: response });
  };
  