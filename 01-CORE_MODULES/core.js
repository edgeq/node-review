const path = require('path');
const util = require('util');
const v8 = require('v8');

/**
 * path module: let's you concatenate folder location/URIs
 */
// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
// console.log(dirUploads);

/**
 * util module: let's you generate logs
 */
// util.log(path.basename(__dirname));
// util.log(path.basename(__filename));
// util.log(" ^ The name of current file ");

/**
 * v8 module = info about the current JS engine
 */
util.log(v8.getHeapStatistics());

/**
 * core module are handy utitiliites to better development. 
 * Their are THOUSANDS of other modules available via NPM too...
 */
