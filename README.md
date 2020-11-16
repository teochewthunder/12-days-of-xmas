# 12 Days of Christmas

This app was created using the ReactJS `npm create app` command.

It does nothing special, other than display the lyrics to the Christmas Carol *The Twelve Days of Christmas* upon a button click to display the relevant day.

## Components
`App  is the main component. In it, up and down buttons control the variable `currentDay`, the value of which is change by the hook `setCurrentDay`.

The resuable component `Row` is used to represent each "day". It accepts the props `currentDay` and `day`. There are twelve of these cmponents, each representing one day. The text and image in the components are controlled by the `content` array.

## Assets
SVG files are in the `svg` folder.

## Tests
This app uses the React testing library. The main tests involve testing user events such as clicking, and ensuring that text and visibility change according to the props `currentDay` and `day`.
