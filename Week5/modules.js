/*Kan ook de file .mjs noemen zonder package.json te gebruiken dan.*/
import * as fs from 'fs/promises';
import {
    constants
} from 'fs';
import {
    Buffer
} from 'buffer';


try {
    let result = await fs.readFile('boardgames.json');
    console.log("result", JSON.parse(result));
} catch (error) {
    console.log("errror", error);
}




//Create new file met appendfile
try {
    await fs.copyFile('source.txt', 'destination.txt');
    console.log('source.txt was copied to destination.txt');
} catch {
    console.log('The file could not be copied');
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
    await fs.copyFile('source.txt', 'destination.txt', fs.constants.COPYFILE_EXCL);
    console.log('source.txt was copied to destination.txt');
} catch {
    console.log('The file could not be copied');
}

