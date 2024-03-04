const fs = require("fs");

// To create a file and write message in it.

fs.writeFile("message.txt", "Hello From NodeJS!!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!!");
})

// To read inside a file where utf-8 is encoding method which encode the data without it, it will show in buffer state.

fs.readFile('./message.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});