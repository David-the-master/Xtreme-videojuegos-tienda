#!/usr/bin/env bash
gunicorn xtreme_project.wsgi:application
