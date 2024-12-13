import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'src/app/api/json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/resume-content.json', 'utf8');
  //Return the content of the data file in json format
  return NextResponse.json(fileContents);
}
