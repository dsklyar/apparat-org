import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  // Can be accessed vias document.cookie='VIEW_LOCAL_RESUME=true'
  const cookieStore = await cookies();
  const VIEW_LOCAL_RESUME =
    cookieStore.get("VIEW_LOCAL_RESUME")?.value === "true";
  const resume_path = VIEW_LOCAL_RESUME
    ? "/resume-content-local.json"
    : "/resume-content.json";

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "src/app/api/json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + resume_path, "utf8");
  //Return the content of the data file in json format
  return NextResponse.json(fileContents);
}
