export let enharmonicEquivalents = new Map<string, string>([
    ['A', 'A'],
    ['G##', 'A'],
    ['Gx', 'A'],
    ['Bbb', 'A'],

    ['A#', 'Bb'],
    ['Bb', 'Bb'],
    ['Cbb', 'Bb'],

    ['B', 'B'],
    ['A##', 'B'],
    ['Ax', 'B'],
    ['Cb', 'B'],

    ['C', 'C'],
    ['B#', 'C'],
    ['Dbb', 'C'],

    ['C#', 'Db'],
    ['B##', 'Db'],
    ['Bx', 'Db'],
    ['Db', 'Db'],

    ['D', 'D'],
    ['C##', 'D'],
    ['Cx', 'D'],
    ['Ebb', 'D'],

    ['D#', 'Eb'],
    ['Eb', 'Eb'],
    ['Fbb', 'Eb'],

    ['E', 'E'],
    ['D##', 'E'],
    ['Dx', 'E'],
    ['Fb', 'E'],

    ['F', 'F'],
    ['E#', 'F'],
    ['Gbb', 'F'],

    ['F#', 'Gb'],
    ['E##', 'Gb'],
    ['Ex', 'Gb'],
    ['Gb', 'Gb'],

    ['G', 'G'],
    ['F##', 'G'],
    ['Fx', 'G'],
    ['Abb', 'G'],

    ['G#', 'Ab'],
    ['Ab', 'Ab']
]);


// 7 qualitative colors from https://colorbrewer2.org/#type=qualitative&scheme=Set3&n=7 for natural notes.
// Flats/sharps are assigned the color in between with using https://gka.github.io/palettes/.
const noteColors = new Map<string, string>([
    ['A', '#8dd3c7'],
    ['Bb', '#cae9be'],
    ['B', '#ffffb3'],
    ['C', '#bebada'],
    ['Db', '#e49ea5'],
    ['D', '#fb8072'],
    ['Eb', '#cc9ba2'],
    ['E', '#80b1d3'],
    ['F', '#fdb462'],
    ['Gb', '#dbca65'],
    ['G', '#b3de69'],
    ['Ab', '#a5d89a'],
]);


/**
 * Return the color for the given note.
 *
 * @param note - The name of the note
 */
export function noteColor(note: string): string {
    if (!enharmonicEquivalents.has(note)) {
        return;
    }
    return noteColors.get(enharmonicEquivalents.get(note));
}