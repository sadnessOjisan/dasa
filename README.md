this repo is deprecated. 
you should use [this](https://github.com/sadnessOjisan/re-geo). 

# dasa
Build ghost house in React, with the tears 😂

## abstract
In Japan, it is famous 'ghost house website' (in Japanese this means 'Web廃墟' ). This Library is utility for build ghost house website. 

## what is 'ghost house website' 
just like [ダイミダラー](http://penguin-empire.com/) 😂

So, 'ghost house website' means old fashion website, just like you browsed in 1990 ~ 2000. 

## This library can...
This library is for build 'ghost house website' in `React`. 

and you should know that, if you use this library, you can build 'ghost house website' in [GatsbyJS](https://www.gatsbyjs.org/). 

So you can build so fast 'ghost house website' (I mean UX and Build). 

In develop this library, I have taken care of old fashion. This library is also give you `HTML4 Tags` that is deprecated in HTML5. For example, `Marquee` , `Blink` and so on...

## How to use

```
npm i --save dasa
```

```
import React from 'react'
import {Center, Marquee, Blink} from 'dasa'

const ComponentA = (props) => {
    return (
        <React.Fragment>
          <Center>😂😂😂</Center>
          <Marquee>😂😂😂</Marquee>
          <Blink>😂😂😂</Blink>
        </React.Fragment>
    )
}
```

## how to contribute
### my env

```
$ node -v
v10.11.0

$ yarn -v 
1.10.1
```

### for dev

```
# check components 
$ yarn run storybook
```

