#!/bin/bash

## fix open issue https://github.com/rstudio/rmarkdown/issues/808

sed -i 's,/home/jopasserat/workspace/openmole-com/slides/,,g' index.html
