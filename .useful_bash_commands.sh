#!/bin/bash

# Variables.
mac_file_path=~/Documents/Github/FoodApp/
pc_file_path=~/source/repos/foodApp/foodApp/

function navFoodAppPc() {
    cd $pc_file_path
}

function navFoodAppMac() {
    cd $mac_file_path
}

function runServer() {
    dotnet watch run
}

function runApp() {
    ng serve --proxy-config proxy.config.json
}

function updateDataBase() {
    dotnet ef database update
}
