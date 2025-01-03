import fs from 'fs';
import path from 'path';

async function downloadPDF(url, directory) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fileName = `file_${Date.now()}.pdf`;
        const filePath = path.join(directory, fileName);
        
        const fileStream = fs.createWriteStream(filePath);
        const totalSize = parseInt(response.headers.get('Content-Length'), 10);

        if (!response.body) {
            throw new Error('Response body is null');
        }

        const reader = response.body.getReader();
        let downloadedSize = 0;

        while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
                break;
            }

            downloadedSize += value.length;
            const progress = (downloadedSize / totalSize) * 100;
            
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`Downloading ${fileName}: ${progress.toFixed(2)}%`);
            
            fileStream.write(value);
        }

        // Close the file stream
        fileStream.end();

        return new Promise((resolve, reject) => {
            fileStream.on('finish', () => {
                console.log(`\nDownloaded successfully: ${fileName}`);
                resolve(filePath);
            });
            
            fileStream.on('error', (err) => {
                console.error('Error writing file:', err);
                reject(err);
            });
        });
    } catch (error) {
        console.error('Download failed:', error.message);
        throw error;
    }
}

async function downloadPDFs(files, directory) {
    const results = [];
    
    for (const file of files) {
        try {
            const filePath = await downloadPDF(file, directory);
            results.push({ url: file, status: 'success', path: filePath });
        } catch (error) {
            results.push({ url: file, status: 'failed', error: error.message });
        }
    }
    
    return results;
}

const files = [
    "https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf",
    "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf",
    "https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/JavaBasics.pdf",
    "https://www.orimi.com/pdf-test.pdf",
    "https://www.xmlpdf.com/manualfiles/hello-world.pdf",
    "https://arxiv.org/pdf/2104.08730.pdf"
];

const directory = 'C:\\Users\\Memighty\\Downloads\\test';

downloadPDFs(files, directory)
    .then(results => {
        console.log('\nDownload Summary:');
        results.forEach(result => {
            if (result.status === 'success') {
                console.log(`✓ ${result.url} -> ${result.path}`);
            } else {
                console.log(`✗ ${result.url} - ${result.error}`);
            }
        });
    })
    .catch(error => {
        console.error('Fatal error:', error);
    });