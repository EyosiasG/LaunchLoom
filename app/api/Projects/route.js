import Project from "@/app/models/Project";
import { connectToDatabase } from "@/app/services/DBService";
import { NextResponse } from "next/server";

export async function POST(req) {
   connectToDatabase();

   try {
      const body = await req.json();
      const projectData = body.formData;
      

      console.log("Project Data: ", projectData);
      await Project.create(projectData);

      return NextResponse.json({ message: "Project Created." }, { status: 201 });

   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
   }
}