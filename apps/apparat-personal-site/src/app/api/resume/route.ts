import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { getFlag } from "@/utils/flags";

export async function GET() {
  // Can be accessed vias document.cookie='VIEW_LOCAL_RESUME=true'
  const renderLocalResume = await getFlag("VIEW_LOCAL_RESUME");
  const resume_path = renderLocalResume
    ? "/resume-content-local.json"
    : "/resume-content.json";

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "src/app/api/json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + resume_path, "utf8");
  //Return the content of the data file in json format
  return NextResponse.json(fileContents);
}
