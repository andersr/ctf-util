import createFile from "create-file";
import path from "path";
import { removeExtension } from "../removeExtension";
import { setTestFileContent } from "../setTestFileContent";

export const createTestFile = (filePath: string) => {
  const fileName = path.basename(filePath);
  const extension = path.extname(filePath);
  const noExtension = removeExtension(fileName);
  const projectDir = process.env.INIT_CWD;
  const projectPath = `${projectDir}/${path.dirname(filePath)}`;

  // TODO: create clear relationship between "test" value and ignore, to prevent infinite loop of creates
  const newFile = `${projectPath}/${noExtension}.test${extension}`;

  createFile(newFile, setTestFileContent(noExtension), function(err: any) {
    if (err) {
      console.log("err: ", err);
    }
  });
};
