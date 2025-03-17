const express = require('express');
const { exec } = require('child_process');
const app = express();

app.post('/open-chrome', (req, res) => {
  exec('"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --profile-directory="Profile 6"', (error) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).send('Failed to open Chrome');
      return;
    }
    res.send('Chrome opened with Profile 6');
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
