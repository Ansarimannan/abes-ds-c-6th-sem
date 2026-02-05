import fs, { appendFileSync } from 'fs';

const writeFileSync=(path,data)=>{
    try{
        fs.writeFileSync(path,data);
    console.log("Data has been written successfully");
    }catch (error){
        console.log("Unable to write");
        
    }
}

const readFileSync=(path)=>{
    try{
        const data=fs.readFileSync(path,"utf-8");
    console.log(data);
    }catch(error){
        console.log("Unable to read data");
    }
}

const appendfileSync=(path,data)=>{
    
        fs.appendFileSync(path,data);
        console.log("Data has been append successfully");
   
   
}
console.log("Before read");
readFileSync("./example.txt")
console.log("After read");

console.log("Before write");
writeFileSync("./example.txt",'1This data is written through sync fun : writtenFilesync()');
console.log("After write");

console.log("Before append");
appendfileSync("./example.txt",'1This data is written through sync fun : writtenFilesync()')
console.log("After append");
