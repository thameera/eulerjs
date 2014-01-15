# EulerJS

Project Euler problems solved with Javascript

## How to install and run

You need to have nodejs and npm installed.

Install grunt-cli if you haven't already.

    npm install -g grunt-cli

Clone the repo and install dependencies.

    git clone https://github.com/thameera/eulerjs.git
    cd eulerjs
    npm install

Run the solution to a specific problem:

    grunt --p=<problem number>

Example:

    grunt --p=2

Grunt will watch the Javascript files and run jshint and execute the solution at each update to the file.

## Creating a new solution from the template

    grunt create --p=<problem number>

