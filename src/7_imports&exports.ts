// Typescript follows the es6 module, using import and export statements to share code b/w files.

// so instead of this :
// const express = require("express");

// this format is used: 
// import express from "express";

// and to install express the command now will be:
// npm install express @types/express

// if you are importing like this: 
const a = 1;
export default a;

// then you dont have to destructure it in the next file:
// you can directly export it like this: import a from "file.ts"

// else if u are importing like this:
export const b = 1;
// then import { b } from "file.ts";