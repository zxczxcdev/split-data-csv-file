const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "taikhoan.csv";
const outputFile = "output.txt";

const extractedData = [];

fs.createReadStream(inputFile)
  .pipe(csv({ separator: "," }))
  .on("data", (row) => {
    const extractedValue = Object.values(row)[n]; // Thay 'n' bằng chỉ mục của cột cần trích xuất
    extractedData.push(extractedValue);
  })
  .on("end", () => {
    const outputData = extractedData.join("\n");
    fs.writeFileSync(outputFile, outputData);
    console.log(`Extraction completed. Extracted data saved to ${outputFile}.`);
  });
