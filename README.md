# Ash
### Siri and Alexa's little brother

[Ash](https://kirk1.herokuapp.com/) is a search application that converts user speech into text, and retrieves data based on the content of the speech.

![Ash](https://github.com/ryanpsuresh/Ash/blob/master/app/assets/Ash.png)

### APIs & `keywords` to say:
#####- Reddit: `reddit` + *subreddit*
#####- YouTube: `youtube` + *
#####- Twitter: `twitter` + *
#####- Yelp: `yelp` + *
#####- ABC News: * + `news`
#####- Wikipedia: `wikipedia` + *
#####- Yahoo Finance: `stock` + *company name*
#####- Stack Overflow: `stackoverflow` + *

Kirk listens for user speech every 10 seconds, even after a search has been made

Please allow microphone access in the top right corner

![microphone](https://github.com/ricochen/kirk/blob/master/app/assets/microphone.jpg)

Example speech: "Can you show me `reddit` relationships?" will fetch https://www.reddit.com/r/relationships/

*Note: * is a wildcard in which anything can be said*

*If a keyword is not said, kirk will use Google's search API*

