// create a variable to hold your NFT's
const nft = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, age, eyeColor, course) {
  const nfts = {};
  nfts.name = name;
  nfts.age = age;
  nfts.eyeColor = eyeColor;
  nfts.course = course;
  nft.push(nfts);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i= 0; i<nft.length; i++){
   console.log("Name:" + nft[i].name);
    console.log("Age: " + nft[i].age);
    console.log("Eye Color: " + nft[i].eyeColor);
    console.log("Course: " + nft[i].course);
     console.log("...........................");
    
   
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log(nft.length);
}
mintNFT("Gowri", 19, "brown", "cse");
mintNFT("Diksha", 19, "blue", "math");
mintNFT("pooja", 27, "green", "mba");
mintNFT("himabindu", 54, "brown", "physics");
mintNFT("vinnu", 21, "chocolate brown", "eee");
listNFTs();
getTotalSupply();

