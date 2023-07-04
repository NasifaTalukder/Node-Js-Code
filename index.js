// console.log("Hello Developer...!")

// const name = require("./nodeModule");
//   console.log(name.myName());
//   console.log(name.myInfo())

const { error } = require("console");
const fs =require("fs");
// ------async--------
// ----File Write/Create----
// fs.writeFile("developer.txt","Nasifa,Sourov",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Successfully Add..")
//     }
// })
// ------File Update---
// fs.appendFile("developer.txt","Nasifa,Sourov, Swarna,pappu",(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("successfull")
//     }
// })
// ----file rename-----
// fs.rename("developer.txt", "developerName.txt",(error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("successfully Rename..")
//     }
// })

// ----file Delete---
// fs.unlink("developername.txt",(reply)=>{
//     if(reply){
//         console.log("Not Deleted")
//     }else{
//         console.log("Deleted")
//     }

// })
// fs.exists("developer.txt",(err)=>{
//     if(err){
//         console.log("Found")
//     }else{
//         console.log("Not Found")
//     }

// })


// ---------Synchronous---------
// -----file Create------
//  let createFile =fs.writeFileSync("member.txt","Helloooo")
// if(createFile){
//     console.log(createFile)
// }else{
//     console.log("Created..")
// }

// -------file Update------
// let updateFile = fs.appendFileSync("member.txt","Programmer..!")
// if(updateFile){
//     console.log(updateFile)
// }else{
//     console.log("Updated...")
// }