# A Playground to Learn React Native

## Install && Run

This repo was made within MacOS with iOS as a target, so...

Assuming you have Homebrew installed:

`
brew install node
brew install watchman
`

You must have Xcode installed on the system (version >=10).

With Xcode Command Line Tools installed, open Xcode, choose
"Preferences..." from the Xcode Menu. Go to `Locations` and install
the tools by selecting the mos recent version in the `Command Line
Tools` dropdown.

And then:
`
sudo gem install cocoapods
`

Followed by:
`
yarn install
`

Then fireup the Metro Bundler with:
`
npx react-native start
`

Finally start the app:
`
npx react-native run-ios
`

