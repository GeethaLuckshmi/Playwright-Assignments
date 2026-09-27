/// <reference types="node" />

import {test} from "@playwright/test"
import dotenv from "dotenv"
import { LeaftapsCreateLead } from "./01-dataParameterizationclass"
import data from "../../Data/leafTapsCreateLead.json"

dotenv.config({path:"Data/leafTapsLogin.env"});

test("CRM Create Lead", async({page})=>{

    const objCreateLead = new LeaftapsCreateLead(page);

    const baseurl = process.env.BASE_URL as string;
    const username = process.env.LT_USERNAME as string;
    const password = process.env.LT_PASSWORD as string;
    console.log(`env file details ${baseurl},${username},${password}`)
    
    await objCreateLead.login(baseurl,
        username,
        password
    );
    
    await objCreateLead.createLead(data[0].companyName as string,
        data[0].firstName as string,
        data[0].lastName as string,
        data[0].title as string
    )

}
)