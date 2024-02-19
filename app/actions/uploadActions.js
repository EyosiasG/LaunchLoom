'use server'

import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4} from 'uuid';
import os from 'os';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';
import Project from '../models/Project';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

async function savePhotosToLocal(formData){
    const file = formData.getAll('file');
    const multipleBuffersPromise = file.map((f) => 
        f.arrayBuffer().then((data) => {
            const buffer = Buffer.from(data);
            const name = uuidv4();
            const ext = f.type.split('/')[1];

            const tempDir = os.tmpdir();
            const uploadDir = path.join(tempDir, `/${name}/${ext}`);
            console.log(uploadDir);

            fs.writeFile(uploadDir, buffer);

            return {filepath: uploadDir, filename: f.name};
        })


    );

    return await Promise.all(multipleBuffersPromise);

}


async function uploadPhotosToCloudinary(newFiles){
    const photosPromise = newFiles.map((file) => 
        cloudinary.v2.uploader(file.filepath, {folder: 'next_js_upload'})
    );

    return await Promise.all(photosPromise);
}

const delay = (delayInms) =>{
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

export async function uploadPhoto(formData) {
    try{
        const newFiles = await savePhotosToLocal(formData);
        const photo = await uploadPhotosToCloudinary(newFiles);

        newFiles.map(file => fs.unlink(file.filepath));

        await delay(2000);

        revalidatePath('/');

        const newPhoto = photo.map(photo => {
            return {public_id: photo.public_id, sercure_url: photo.secure_url}
        })

        return newPhoto;
    }catch(error){
        console.log("Error: ", error);
    }
}