#!/usr/bin/env node
import { noteColor } from '../dist/index.esm.js';


console.assert(typeof noteColor('Z') === 'undefined');
console.assert(noteColor('F##') === '#b3de69');
console.assert(noteColor('F##') === noteColor('G'));
