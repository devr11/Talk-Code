// Piston api is a service for code execution

import { version } from "react"

const PISTON_API = "https://emkc.org/api/v2/piston"

const LANGUAGE_VERSIONS = {
    javascript: {language:"javascript", version:"18.15.0"},
    python: {language:"python", version:"3.10.0"},
    java: {language:"java", version:"15.0.2"},
}

/**
 * 
 * @param {string} language - programming language 
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>} 
 */

export async function executeCode(language, code) {
   try {
    const languageConfig = LANGUAGE_VERSIONS[language]

    if(!languageConfig){
        return {
            success: false,
            error: `Unsupported language: ${language}`
        }
    }

    await fetch(`${PISTON_API}/execute`, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            language: languageConfig.language,
            version: languageConfig.version,
            files:[
                {
                    name:`main.js`
                }
            ]
        })
    })
   } catch (error) {
    
   } 
}