import fs from "fs";
import path from "path";

const fileExt = {
  images: ".jpg",
  text: ".txt",
  document: ".pdf",
  audio: ".mp3",
};

// for knowing the current direcotory of the file
const currentDirectory = process.cwd();
const allFiles = fs.readdirSync(currentDirectory);

function createImgDir() {
  const make_img_directory = path.join(currentDirectory, "images");

  if (!fs.existsSync(make_img_directory)) {
    fs.mkdirSync(make_img_directory);
    console.log("Created images directory");
  }

  for (let file of allFiles) {
    if (typeof file == "string" && path.extname(file) === fileExt.images) {
      const oldpath = path.join(currentDirectory, file);
      const newpath = path.join(make_img_directory, file);
      fs.renameSync(oldpath, newpath);
    }
  }
}

createImgDir();
function createDocDir() {
  const make_doc_directory = path.join(currentDirectory, "Document");

  if (!fs.existsSync(make_doc_directory)) {
    fs.mkdirSync(make_doc_directory);
    console.log("Created document directory");
  }

  for (let file of allFiles) {
    if (typeof file == "string" && path.extname(file) === fileExt.document) {
      const oldpath = path.join(currentDirectory, file);
      const newpath = path.join(make_doc_directory, file);
      fs.renameSync(oldpath, newpath);
    }
  }
}

// createDocDir();

function createTxtDir() {
  const make_txt_directory = path.join(currentDirectory, "Texts");
  if (!fs.existsSync(make_txt_directory)) {
    fs.mkdirSync(make_txt_directory);
    console.log("Created text directory");
  }
  for (let file of allFiles) {
    if (typeof file == "string" && path.extname(file) === fileExt.text) {
      const oldpath = path.join(currentDirectory, file);
      const newpath = path.join(make_txt_directory, file);
      fs.renameSync(oldpath, newpath);
    }
  }
}
createTxtDir();
function createAudioDir() {
  const make_audio_directory = path.join(currentDirectory, "Audio");
  if (!fs.existsSync(make_audio_directory)) {
    fs.mkdirSync(make_audio_directory);
    console.log("Created audio directory");
  }
  for (let file of allFiles) {
    if (typeof file == "string" && path.extname(file) === fileExt.audio) {
      const oldpath = path.join(currentDirectory, file);
      const newpath = path.join(make_audio_directory, file);
      fs.renameSync(oldpath, newpath);
    }
  }
}
createAudioDir();
