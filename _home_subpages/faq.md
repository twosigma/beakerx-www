---
title: FAQs
layout: home
project: BeakerX
order: 2
---

### How is BeakerX related to Beaker Notebook?

BeakerX is the successor to [Beaker Notebook](http://beakernotebook.com/).
After seeing the demo of
[Jupyter Lab at SciPy 2016](https://www.youtube.com/watch?v=Ejh0ftSjk6g)
we realized that Jupyter had become extensible enough that much of
what made Beaker special could be done in the Jupyter ecosystem.

The result of joining forces with Jupyter is a more powerful tool for
our users, and a larger community of developers and users that
continues to grow.  Jupyter users benefit by getting access to our
work as well.  And we benefit by leveraging shared infrastructure so
we can focus on adding value.

It has taken about a year to port Beaker's key features to become
extensions to Jupyter, and we are very excited to finish this
transition and release the results with a new name "BeakerX" that
represents both our history and how large a change this is.

### What about classic Beaker's polyglot and autotranslation features?

Beaker Notebook (before BeakerX) is known for supporting polyglot
programming, and for autotranslating data between languages.  This
feature has been the most difficult to fit into Jupyter, and it's
going to take longer to get working.

BeakerX has a prototype implementation that works between Python and
JavaScript, and the JVM languages and JavaScript.  A more complete
implementation is on the agenda.

### Can I install BeakerX with pip instead of conda?

Yes, see the [instructions](/documentation#pip).  Our documentation
focuses on conda for simplicity.

### Can I use BeakerX on win32?

Win32 is not supported because [OpenJDK on Conda Forge](https://anaconda.org/conda-forge/openjdk)
doesn't support it.  Win64 is recommended.  But if you install a JDK
on your own, it should work.

### Can I be informed of new releases?

Yes, please sign up on our [email
list](http://beakernotebook.us3.list-manage.com/subscribe?u=d05838b85c905bc618b25e5a9&id=6b3010163c)
or follow us on [Twitter](https://twitter.com/beakerxnotebook).

### Who is responsible for BeakerX?

It is developed by [Two Sigma Open
Source](http://opensource.twosigma.com/). Yes we are
[hiring](https://www.twosigma.com/careers).
