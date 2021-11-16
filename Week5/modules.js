/*Kan ook de file .mjs noemen zonder package.json te gebruiken dan.*/
import * as fs from 'fs/promises';


try {
    let result = await fs.readFile('boardgames.json');
    console.log("result", JSON.parse(result));
} catch (error) {
    console.log("errror", error);
}