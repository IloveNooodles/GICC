import crypto from "crypto";
import fsPromises from "fs/promises";
import path from "path";
import slugify from "slugify";

export const createDirectory = async (parent, name) => {
  try {
    const unique = crypto.randomBytes(4).toString("hex");

    const slugifiedName = slugify(name, { lower: true });
    const dir = path.join("uploads", parent, slugifiedName + "_" + unique);
    const result = await fsPromises.mkdir(dir, { recursive: true });

    console.log(dir);
    return dir;
  } catch (error) {
    console.log(`${error.name}\n${error.message}`);
    return null;
  }
};
