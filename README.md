dharpa-workflow-widget
===============================

A widget to visualize a workflow object.

Installation
------------

To install use pip:

    $ pip install dharpa_workflow_widget
    $ jupyter nbextension enable --py --sys-prefix dharpa_workflow_widget

To install for jupyterlab

    $ jupyter labextension install dharpa_workflow_widget

For a development installation (requires npm),

    $ # create conda environment
    $ conda create -n dharpa-workflow-widget python=3.7
    $ # activate conda environment
    $ conda activate dharpa-workflow-widget

    $ git clone https://github.com/DHARPA-Project/dharpa-workflow-widget.git
    $ cd dharpa-workflow-widget
    $ # install development dependencies
    $ pip install -r requirements-dev.txt
    # # install the project into the conda environment in development mode
    $ pip install -e .
    $ # jupyter-related stuff (not quite sure yet what all this does)
    $ jupyter nbextension install --py --symlink --sys-prefix dharpa_workflow_widget
    $ jupyter nbextension enable --py --sys-prefix dharpa_workflow_widget
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This takes a minute or so to get started, but then automatically rebuilds JupyterLab when your javascript changes.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.

Whenever you make a change to a javascript file, you have to reload the browser.

Install the autoload extension to automatically reload changes to python code.

