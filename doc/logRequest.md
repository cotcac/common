# What is logRequest
It will be use to log all the request come to your api.  
It require the logger module to write to file as well.
# How to use logReuqest

```
app.js
const express = require('express');
const app = express();
const logRequest = require('your_path/common/logRequest')

// your magic is here and only here.
app.use(logRequest);
```
