#!/bin/bash

# Variables.
mac_file_path=~/Documents/Github/FoodApp/
pc_file_path=~/source/repos/foodApp/foodApp/

# Navigate to this directory on pc.
function navFoodAppPc() {
  cd $pc_file_path
}

# Navigate to this directory on mac.
function navFoodAppMac() {
  cd $mac_file_path
}
