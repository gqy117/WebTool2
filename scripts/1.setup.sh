#!/bin/bash
PackageManager="${1:- npm}"
cd ../src/website
$PackageManager install