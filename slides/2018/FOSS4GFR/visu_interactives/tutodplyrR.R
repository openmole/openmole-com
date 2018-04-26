

library(tidyverse)
library(gapminder)

plot(gapminder)
names(gapminder)


xx <-filter(gapminder, lifeExp > 24)
str(xx)
xxdf <-data.frame(xx)
str(xxdf)


select(gapminder, year, pop) %>% head 

gapminder %>% select(year, pop) %>% head


newGap <- gapminder

#mutate ajoute une colone resultat d'une opération
newGap %>% mutate(gdp = pop * gdpPercap)

# arrange trie par colonne
newGap %>% arrange(year, pop)


#

newGap  %>% group_by(country) %>%
  summarise(avgpop=mean(pop))




