###Install Node Modules###
npm install
The resulting directory should be around 110 MB

###Start the Server###
gulp dev  - Dev Environment
gulp prod - Production Environment

###If you want to edit the react code, this rebuilds###
gulp watch

###Test Server###
The server will be available at localhost:3000
It will also host a temporary server URL for you to run on your phone 

###Images###
All the images must be loaded through .scss/.css like background-image: url('../images/Facebook.png');

###CSS###
All the .scss files from /app/styles will compile into css files from /build/css/