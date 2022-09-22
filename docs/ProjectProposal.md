# Fight Finder

## Application Definition Statement

Fight Finder is a web application that allows users to view upcoming fighting events. Unlike other similar web applications and sites, it will show events from all different disciplines, not just MMA or just Boxing. Being a "fight-fan" myself, I find it frustrating when trying to find upcoming fights online and having to browse through multiple different sites to see what is coming up in each different sport. Fight Finder seeks to solve this problem by bringing together all the events from all different sports into one place.

## Target Market

According to Bob Ciosek, in his [article](https://medium.com/@bob_6051/inside-the-numbers-mma-and-boxing-fans-cfef9e96522a), the ideal target market for this application is between the ages of 25 and 44. With 41% of the audience being 25-34 and 30% being 35-44, this is a good target market for this application. Another interesting fact about people who watch fighting events, is that 44% of them are female. 
The target user generally makes less than $75,000 a year, with 65% falling in this category. 

Some other things fight-fans might be interested in, according to [this article](https://www.mmafacts.com/mma-fans-demographics/) on MMAFacts.com include,  Off-road vehicles, Bodybuilding, Skateboarding, Surfing, Snowboarding, and Poker. Also, according to this article, five of things that motivate people to watch fighting are, excitement, socialization, knowledge application, vicarious achievement, and sports betting.

Of course, the sport of fighting is a part of the sports industry as a whole, so fans can also come and go from other sports as well.

## User Profile

User1 is a 25-year-old construction worker who is a fan of MMA and Boxing. He always tells his friends and family about the next big fight and wants to know what is going on in the world of combat sports. He typically uses his phone to find relevant information about the events, and gets frustrated having to search through multiple websites. He is also asked a lot about the events, and wants to have the information quickly accessible. 

## Use Cases

A typical use case would be, a user wants find out what fights are coming up in the near future. They would open Fight Finder and be presented with the biggest events in the near future directly on the home page. The user can filter the displayed events based on their the preferences and save these preferences to a user profile. This helps the user to get the information fast, without any hassle. These event cards would display the main event, as well as the title on the line (if any), and other relevant information about that particular fight. They would then be able to click on the event to see more information such as the other fights on the card, event details, and how to watch/order the event. 

## Problem Statement

While there are plenty of sport specific websites that list fighting events for that particular sport, there is no application or website that combines all of the upcoming fighting events from all the different sports into one place. You only have to google "upcoming fights" to see this. You have to search through multiple websites to find events from different disciplines.

## Pain Points

Can't get all information in one spot.
Have to visit websites that are not entirely focused on delivering event information itself.
Sites can fail to highlight the biggest events, making users have to search.
Sites will throw too much information at the user, making it hard to find the information they are looking for.

## Solution Statement

This project will combine all of the upcoming events into one resource, instead of spread out over multiple websites. This will make it easier for the user to find the information they are looking for. Other solutions only focus on one discipline at a time. The application will also focus on providing event information, rather than not related information. It will also highlight big events, and provide a way for the user to save their filter preferences to a user profile.

## Competition

[FightNights](http://fightnights.com/) -
- The first result on google when searching for upcoming fights.
- FightNights is a blog style website that lists upcoming boxing matches. 
- The website is pretty cluttered with text and images, and is not the easiest to navigate.
- Doesn't highlist championship fights, use has to click through to seperate pages to see the full details.

[ESPN Boxing Schedule](https://www.espn.com/boxing/story/_/id/12508267/boxing-schedule) -
- The second result on google when searching for upcoming fights.
- Also focuses on boxing.
- Displays upcoming fights in a list format.
- Does highlight the biggest events, but does not show what titles are on the line, or other information.
- When clicking through for more information, an article is displayed instead of just the event details.
- It's ESPN, so the site is bloated with all of the other sports news and information.

[UFC.com](https://www.ufc.com/) -
- The first result on google when searching for upcoming fights that is MMA related.
- Very bold, modern design.
- Prominently highlights the next big UFC event.
- Event details page is nicely laid out and has all relevant information, including links to order and watch the events.
- Overall a great design, just doesn't provide any information about other disciplines.

## Key Features
- Big event cards that highlight the biggest events.
- Displays other events in cards.
- User profile that allows the user to save their preferences.
- Only 1 click to find all of the event information.
- No need to search through multiple websites.
- Filterable.

## Integrations
I have some tentative ideas for integrations, but I am not sure if I will implement them.

[Sports Data](https://sportsdata.io/developers/api-documentation) (PAID/Free Trial) - 
This api lists all kinds of sports data, including mma. It has all the information I would need about upcoming mma events, but it isn't free. There also appears to be a "reccomended call interval" of 1 hour, so I would probably just pull the data into a db and use it from there if I do use it. This api also does not seem to list any other combat sports, so I am not sure if I will implement it.

[Fight Analytics](https://www.fightanalytics.cc/) (PAID) - 
This website offers a number of combat sports related data services, including an api. However, they require you to contact them and sign up for an account. It also does not appear to be a free service.

The landscape is pretty barren as far as fight specific APIs go.


## Design Docs
- [Style Tile](docs/FF-StyleTile.xd)

- [Wireframes](docs/Wireframes.xd)
