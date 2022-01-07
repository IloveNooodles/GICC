import crypto from "crypto";
import fsPromises from "fs/promises";
import path from "path";
import slugify from "slugify";

export const createDirectory = async (name) => {
  try {
    const dir = path.join("uploads", name);
    const result = await fsPromises.mkdir(dir, { recursive: true });
    
    return dir;
  } catch (error) {
    console.log(`createdirectory error: ${error.message}`)
    return null;
  }
};
