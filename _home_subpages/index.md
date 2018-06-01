---
title: Overview
layout: home
project: beakerX
order: 1
---

## Interactive Plotting

[![image title](/static/img/time-series.png)](https://nbviewer.jupyter.org/gist/anonymous/7450f2ef784f72f5811ee54ed3d97fdb){:target="_blank" class="img"}

All of BeakerX's JVM languages plus Python and JavaScript have APIs
for [interactive
time-series](https://nbviewer.jupyter.org/gist/anonymous/7450f2ef784f72f5811ee54ed3d97fdb),
scatter plots, histograms, heatmaps, and treemaps.  The widgets remain
interactive in both notebooks saved to disk, and notebooks published
to the web.  They include unique features for handling many points,
nanosecond resolution, zooming, and exporting.

***

## Interactive Tables

BeakerX's [table
widget](https://nbviewer.jupyter.org/gist/anonymous/d7dbf536abade987157c085b1850416d)
automatically recognizes pandas dataframes and allows you to search,
sort, drag, filter, format, select, graph, hide, pin, and export to
CSV or clipboard.  This makes connecting to spreadsheets quick and
easy.

[![image title](/static/img/table-with-menu.png)](https://nbviewer.jupyter.org/gist/anonymous/d7dbf536abade987157c085b1850416d){:target="_blank" class="img"}

***
## Spark Integration

[![image title](/static/img/spark.png)](https://github.com/twosigma/beakerx/blob/master/doc/scala/SparkUI.ipynb){:target="_blank" class="img"}

BeakerX has a [Spark
magic](https://github.com/twosigma/beakerx/blob/master/doc/scala/SparkUI.ipynb)
with GUIs for configuration, status, progress, and interrupt of Spark
jobs.
You can either use the GUI or create your own SparkSession with code.
The GUI has links to documentation and the standard Spark web UI.

***
## Publication

With a single click, convert the current notebook's contents including
any interactive widgets to a Github gist. A new tab opens nbviewer on
it, including the active widgets.  This is a link you can send anyone.

![image title](/static/img/publication.png)
