import fs from "fs";

export const createDriveFolder = async (driveService, parentId, folderName) => {
  const fileMetadata = {
    name: folderName,
    parents: [parentId],
    mimeType: "application/vnd.google-apps.folder",
  };

  try {
    const result = await driveService.files.create({
      resource: fileMetadata,
      fields: "id",
    });
    return result;
  } catch (error) {
    console.log(`error on creating folder: ${error}`);
  }
};

export const createDriveFile = async (driveService, parentId, file) => {
  const fileMetadata = {
    name: file.filename,
    parents: [parentId]
  };

  const media = {
    mimeType: "image/png",
    body: fs.createReadStream(file.path),
  };

  try {
    const result = await driveService.files.create({
      resource: fileMetadata,
      media: media,
    });

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
