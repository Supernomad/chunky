/* global Buffer */
var fs = require('fs');

function getFileStats(path, callback) {
	// TODO get temp stats object
	callback(null, {});
}

function createFile(path, buffer, offset, length, callback) {
	callback(null);
}

function writeFileChunk(path, buffer, offset, length, position, callback) {
	callback(null);
}

function deleteFile(path, callback) {
	callback(null);
}

function readFile(path, callback) {
	callback(null, new Buffer(0));
}

function readFileChunk(path, buffer, offset, length, position, callback) {	
	callback(null, 0, new Buffer(0));
}

function renameFile(path, newPath, callback) {
	callback(null);
}

module.exports = {
	GetFileStats: getFileStats,
	CreateFile: createFile,
	WriteFileChunk: writeFileChunk,
	DeleteFile: deleteFile,
	ReadFile: readFile,
	ReadFileChunk: readFileChunk,
	RenameFile: renameFile
};