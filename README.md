# cromatica

A small library that defines a color scheme for the 12 musical notes in the chromatic scale.

I created this scheme to color the notes on the fretboard diagrams displayed on [ukealong.com](https://ukealong.com). For an example see the [Ukulele Chord Detector](https://ukealong.com/tool/chord-detector/) tool.

## Installation

    npm install cromatica

## Usage

    import { noteColor } from 'cromatica';

    const color = noteColor('C');