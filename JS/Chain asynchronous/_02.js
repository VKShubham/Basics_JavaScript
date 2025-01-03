const fs = require('fs');

const filepaths = [
    'C:\\Users\\Memighty\\Downloads\\Hello.txt',
    'C:\\Users\\Memighty\\Downloads\\World.txt',
    'C:\\Users\\Memighty\\Downloads\\Shubham.txt',
]

try {
    filepaths.map((path) => {
        try {
            const data = fs.readFileSync(path, 'utf8');
            console.log(data);
        }
        catch(error) {
            console.log("Error in reading file :- ",error.message);
            
        }
    })
} catch (err) {
  console.error('Error :', err.message);
}
