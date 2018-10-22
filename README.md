# component libraries

steps to reproduce the code for this talk from scratch:

```
$ cd ~/code
$ mkdir component-lib-talk
$ cd component-lib-talk
$ git init
$ npm init -y
$ touch README.md
$ create-react-app seinfeld
$ create-react-app frasier
```

then code one of the apps


```
$ cd ~/code/component-lib-talk
$ git clone https://github.com/nikfrank/component-lib-boilerplate
```

now we can put the components into the boilerplate


then we want to add the lib to the app

```
$ cd ~/code/component-lib-talk/seinfeld
$ yarn add component-lib-boilerplate
```