# GameTimers

## Install

First make sure you have latest versions of npm and node.

Then install the npm modules to run certain things

```
npm install
```

Then to run Webpack

```
npm run watch
```

Then to run Electron

```
npm start
```

## Potential problems

Apparently Google only allows 50 things a day for the `webkitSpeechRecognition` so we may need to find another service for this.

- https://groups.google.com/a/chromium.org/forum/#!topic/chromium-html5/s2XhT-Y5qAc

Unsure on if this is going to be a problem?

Currently I've changed it to restart it `onend` so we never lose the microphone, but that seems odd.

Found another potential speech-to-text: http://stephenwalther.com/archive/2015/01/05/using-html5-speech-recognition-and-text-to-speech

## To do

We need to get some kind of backend for this.


## Tutorial from

- https://medium.com/@Agro/developing-desktop-applications-with-electron-and-react-40d117d97564#.za0uzzyyr  
  - The above is a little out of date, because it is using an older version of React.
- https://github.com/MicheleBertoli/react-speech

## Tech List

- React
- MaterialUI
- Underscore
- Electron
