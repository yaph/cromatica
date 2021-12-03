import test from 'ava';
import { noteColor } from '../dist/index.esm.js';


test('noteColor() with double sharps', t => {
	t.is(noteColor('F##'), '#b3de69');
    t.is(noteColor('F##'), noteColor('G'));
});


test('noteColor() with undefined note name', t => {
	t.is(typeof noteColor('Z'), 'undefined');
});