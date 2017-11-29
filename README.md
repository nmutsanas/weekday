# weekday
A little quiz to train memorizing day-of-the-week formulas for a given year, coded with [aurelia.io](http://aurelia.io)

# Calculation
The calculation follows the explanation in the book *Secrets of Mental Math*, by *Arthur Benjamin* ([amazon](http://a.co/bW8Ireu)).

To calculate the weekday of a given date in a given year from 2000 to 2099 you need the following ingredients.

## Year code
For a year from 2000 to 2099, let `year = 2000 + x`. Then
```
yearCode = (floor(x/4) + x) mod 7
```

For example, for the year 2018, the yearCode is
```
(floor(18/4) + 18) mod 7 
  = (4 + 18) mod 7 
  = 1
```

## Month code
This needs to be memorized (and that's what this quiz is all about), from the following table:

|Month | Code (normal) | Code (leap year) |
|------|---------------|------------------|
|January| 6 | 5 |
|February| 2 | 1 |
|March| 2| |
|April| 5| |
|May| 0| |
|June| 3| |
|July| 5| |
|August| 1| |
|September| 4| |
|October| 6| |
|November| 2| |
|December| 4| |

## Formula
```(yearCode + monthCode + date) mod 7```
The result will be a number between 0 and 6 and is to be interpreted as `0=Sunday, 1=Monday, 2=Tuesday,...`

## Example
**1 January 2018**
```
yearCode=1
monthCode=6
date=1
```

```
(yearCode + monthCode + date) mod 7 
  = (1 + 6 + 1) mod 7 
  = 1 
  (i.e. Monday)
```

# How to use the quiz
Press "offsets" to first memorize the offsets for the different months. Once they are engraved in your memory, press "quiz" to test your knowledge with a random date in each month.

# Credits
* The book *Secrets of Mental Math*, by *Arthur Benjamin* ([amazon](http://a.co/bW8Ireu)).
* Mary Lou of [codrops](https://tympanus.net/codrops/), in particular [this article](https://tympanus.net/codrops/2015/10/28/effect-ideas-for-card-stacks/)) for inspiration on the css animations and color scheme.
