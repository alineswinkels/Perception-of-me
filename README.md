# Perception of me

A web-based experience, meant for two people to undergo. Press "m" or "f" to pick the gender of the person answering the questions about themselves.
One person answers the questions on the left (middle screen) about themselves and the other answers the questions on the right about the other person.

The code stores the data in a JS object and plots a radar graph accordingly in a HTML5 canvas with EaselJS.

This particular set up is for a very wide screen (the width is supposed to be around three times the 'normal' computer screen width). 
It should be displayed on three screens or projectors. It functions on smaller screens as well, but the styling will be off.

The test is based on the Big Five. When both 

## Installation

No installation required. Should run in every browser, but was tested in Chrome (on Mac OS Sierra).

## Usage

The code works out of the box. Open it in the browser and it'll run. Connect three screens (or beamers) to your computer if you want the "full" experience.
The first monitor/projection should be next to the participants. The other two should be put (or projected) behind the two participants (one each).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

There's only one version and it's the current one. It contains:

- Audio Feedback
- Generating Radar Graph
- Answering questions through keypresses (we connected it to buttons with a Makey Makey)

## Credits

Contributors:
Aline Swinkels (set up for the form/questions and first styling, calculations for the coordinates in the visual)
Sunny Feijen  (enhancements to the form/questions and audio feedback integration)
Joris van Oers (generating the radar graph, styling, implementation of EaselJS, user flow)
Bas van de Geer (other tasks in the project itself, like user testing, documentation and the Makey Makey part)
