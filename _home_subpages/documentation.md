---
title: Documentation
layout: home
project: BeakerX
order: 3
---

## Tutorials and Examples

Most of the documentation consists of
[notebooks](http://nbviewer.jupyter.org/github/twosigma/beakerx/blob/master/StartHere.ipynb)
that show BeakerX's kernels and widgets in action.

## Installation with Conda

We recommend [conda](https://www.anaconda.com/download/) to install
Jupyter and BeakerX, and to manage your Python environments.  BeakerX
works with Python 3.5 and above.  Conda forge hosts the [lastest
version](https://anaconda.org/conda-forge/beakerx).

```
conda create -y -n beakerx 'python>=3'
source activate beakerx
conda install -y -c conda-forge ipywidgets
conda install -y -c conda-forge beakerx
```

## Installation for Jupyter Lab

BeakerX support for Jupyter Lab is still alpha quality.
You can try it as follows:

```
conda create -y -n labx 'python>=3'
source activate labx
conda install -y -c conda-forge jupyterlab beakerx pytest
jupyter labextension install @jupyter-widgets/jupyterlab-manager@0.31
jupyter labextension install beakerx-jupyterlab
```

## Upgrading

If you have an environment with a previous version of BeakerX, to
upgrade to the latest version use:
```
conda update -c conda-forge beakerx
```

## Running BeakerX

Start it with
```
beakerx
```
and then use the "New" menu to create a notebook in the language of your choice.

## Installation with Pip

You can also install BeakerX with [pip](https://pypi.python.org/pypi/pip).

```
pip install beakerx
beakerx install
```

## Uninstallation with Pip

```
beakerx uninstall
pip uninstall beakerx
```

## Running with Docker

Docker is the most reliable way get and run Jupyter and BeakerX since it's completely self contained.

```
docker run -p 8888:8888 beakerx/beakerx
```

## Beaker Notebooks Converter

You can convert classic Beaker Notebook files (with file suffix
".bkr") to Jupyter Notebooks (with file suffix ".ipynb") as follows:

```
bkr2ipynb *.bkr
```

## Building and Contributing

We welcome developers to extend and improve BeakerX in ways that can
benefit everyone.  Please see the
[README](https://github.com/twosigma/beakerx) for more information.
