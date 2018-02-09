/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

//getGitHubProfileAsync
//pluckFirstLineFromFileAsync

var getGitHub = require('./promisification');
var firstLine = require('./promiseConstructor');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  console.log('FIRST LINE', firstLine.pluckFirstLineFromFileAsync(readFilePath));
  return firstLine.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(line) {
      return getGitHub.getGitHubProfileAsync(line);
    })
    .then(function(jsonResponse) {
      fs.appendFile(writeFilePath, JSON.stringify(jsonResponse), (err) => {
        if (err) {
          throw err;
        }      
      });
    });



  // console.log('pluckFirstLine', firstLine.pluckFirstLineFromFileAsync(readFilePath));
  // fs readfile(readFilepath, etc etc)
  //data = first line of that
  //ajax request?? github.com/users/ ?? + data
  //on success, fs appendfile(data, writefilepath)
};

// Export these functions so we can test them

module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
