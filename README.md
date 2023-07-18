# Awesome repo

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.



## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story 1: User can pass in wrong or no inputs, it should throw an exception or return ''
- ✅ UAT1.1: User can pass in no input, it should throw an exception
- ✅ UAT1.2: User can pass in empty string, it should return empty string
- ✅ UAT1.3: User can pass in number, it should throw an exception

Story 2: User can pass in string with egg word after every consonant
- ✅ UAT2.1: User can pass in 'legg', it should return a 'l'
- ✅ UAT2.2: User can pass in 'teggbegg', it should return a 'tb'
- ✅ UAT2.3: User can pass in 'seggawegg', it should return a 'saw'
- ✅ UAT2.4: User can pass in 'leggalegga', it should return a 'lala'
- ✅ UAT2.5: User can pass in 'heggeleggleggo', it should return a 'hello'

Story 3: User can pass in string from two words with egg word after every consonant
- ⚠ TODO UAT3.1: User can pass in 'heggey megganegg', it should return a 'hey man'
