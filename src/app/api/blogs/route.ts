import {NextResponse} from "next/server";
import https from "https";
import axios from "axios";

export const GET = async ()=>{

    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    try{

        const response = await axios.get('https://api9.parentune.com/blogs/blogs?page=2&interest=',{
            httpsAgent:agent
        });
        return NextResponse.json(response.data,{
            status:200
        });

    }catch (e) {
        console.error(e);

        return NextResponse.json(e,{
            status:500
        });
    }

}