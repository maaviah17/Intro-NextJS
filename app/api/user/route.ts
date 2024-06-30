import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req:NextRequest){
    // extract the body 
    const body = await req.json();
    // store the body
    
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })

    return Response.json({
        message : "You're logged in!"
    })
}

export async function GET(){

    return Response.json({
        username : "maaviah",
        email : "maaviah@mail.com"
    })
    

}
