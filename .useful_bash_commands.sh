#!/bin/bash

# Variables.
mac_file_path=~/Documents/Github/FoodApp/
pc_file_path=~/source/repos/foodApp/foodApp/

# Navigate FoodApp on Pc.
alias n-fapc="cd $pc_file_path"

# Navigate FoodApp on Mac.
alias n-fam="cd $mac_file_path"

# Run server.
alias rs="dotnet watch run"

# App start
alias as="ng serve --proxy-config proxy.config.json"

# Update database
alias udb="dotnet ef database update"
