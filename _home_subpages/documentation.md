---
title: Documentation
layout: home
project: BeakerX
order: 3
---


### Installation with Conda

We recommend [conda](https://www.anaconda.com/download/) to install
Jupyter and BeakerX, and to manage your Python environments.  BeakerX
works with Python 3.5 and above.

```
conda create -y -n beakerx python=3.5
source activate beakerx
conda install -y jupyter openjdk pandas
conda install -y -c conda-forge ipywidgets
conda install -y -c conda-forge widgetsnbextension
conda install -y -c conda-forge beakerx
```

### Installation with Pip

You can also install BeakerX with [pip](https://pypi.python.org/pypi/pip).

```
pip install beakerx
beakerx-install
```

### Running with Docker

Docker is the most reliable way get run Jupyter and BeakerX since it's completely self contained.

```
docker run -p 8888:8888 beakerx/beakerx
```
