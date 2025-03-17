const { exec } = require('child_process');

exec('"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --profile-directory="noreply.y6transition2wis@gmail.com" https://mail.google.com', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    console.log('Chrome opened with the specified profile and Gmail loaded');
});
