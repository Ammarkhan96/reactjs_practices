"use server"
import fs from 'fs/promises'

export const submitAction = async(e) => {
    console.log(e.get("name"), e.get("address"));
   let a = await fs.writeFile("ammar.txt", `Name is ${e.get("name")} ans Address is ${e.get("address")}`)
 
 }